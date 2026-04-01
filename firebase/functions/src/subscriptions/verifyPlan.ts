// functions/src/subscriptions/verifyPlan.ts
// ─────────────────────────────────────────────────────────────
// HTTPS FUNCTIONS: Razorpay Webhook + Plan Verification
//
// Two functions in this file:
//
// 1. razorpayWebhook (HTTPS endpoint, NOT callable)
//    - Receives POST from Razorpay servers on payment events
//    - Verifies HMAC signature (security: rejects fake webhooks)
//    - On payment.captured → upgrades user plan in Firestore
//    - On subscription.cancelled → downgrades plan
//
// 2. verifyUserPlan (Callable)
//    - Called by frontend to check if user's plan is still active
//    - Handles expiry: if plan has expired, downgrades to 'free'
//    - Returns current plan and expiry date
//
// PLAN DURATIONS:
//   starter → 4 months
//   pro     → 6 months
//   multi   → 9 months
//   bundle  → 12 months + lifetime content (no expiry)
//
// PRICING (INR):
//   starter → 1499
//   pro     → 2999
//   multi   → 3599
//   bundle  → 5399
// ─────────────────────────────────────────────────────────────

import * as functions   from 'firebase-functions';
import * as admin       from 'firebase-admin';
import * as crypto      from 'crypto';

const db = admin.firestore();

// ── Plan config ───────────────────────────────────────────────
const PLAN_CONFIG: Record<string, {
  name:           string;
  durationMonths: number | null;  // null = lifetime
  price:          number;
  courses:        string[];
}> = {
  starter: {
    name:           'Starter',
    durationMonths: 4,
    price:          1499,
    courses:        ['python'],
  },
  pro: {
    name:           'Pro',
    durationMonths: 6,
    price:          2999,
    courses:        ['python', 'javascript'],
  },
  multi: {
    name:           'Multi',
    durationMonths: 9,
    price:          3599,
    courses:        ['python', 'javascript', 'html-css'],
  },
  bundle: {
    name:           'Bundle',
    durationMonths: null,   // lifetime
    price:          5399,
    courses:        ['python', 'javascript', 'html-css', 'java'],
  },
};

// ── Expiry date calculator ────────────────────────────────────
function calculateExpiryDate(planId: string): Date | null {
  const config = PLAN_CONFIG[planId];
  if (!config || config.durationMonths === null) return null;  // lifetime

  const expiry = new Date();
  expiry.setMonth(expiry.getMonth() + config.durationMonths);
  return expiry;
}

// ── Verify Razorpay HMAC signature ────────────────────────────
function verifyRazorpaySignature(
  webhookBody:      string,
  webhookSignature: string,
  webhookSecret:    string
): boolean {
  const expectedSignature = crypto
    .createHmac('sha256', webhookSecret)
    .update(webhookBody)
    .digest('hex');
  return expectedSignature === webhookSignature;
}

// ── 1. Razorpay Webhook ───────────────────────────────────────
export const razorpayWebhook = functions
  .region('asia-south1')
  .https.onRequest(async (req, res) => {
    // Only accept POST requests
    if (req.method !== 'POST') {
      res.status(405).send('Method not allowed');
      return;
    }

    // ── Signature verification ─────────────────────────────────
    const webhookSecret    = functions.config().razorpay?.webhook_secret;
    const webhookSignature = req.headers['x-razorpay-signature'] as string;

    if (!webhookSecret || !webhookSignature) {
      functions.logger.error('Missing webhook secret or signature');
      res.status(400).send('Missing credentials');
      return;
    }

    const rawBody = JSON.stringify(req.body);
    const isValid = verifyRazorpaySignature(rawBody, webhookSignature, webhookSecret);

    if (!isValid) {
      functions.logger.error('Invalid webhook signature — possible attack attempt');
      res.status(401).send('Invalid signature');
      return;
    }

    const event   = req.body.event   as string;
    const payload = req.body.payload as Record<string, any>;

    functions.logger.info(`Razorpay webhook received: ${event}`);

    try {
      switch (event) {
        // ── Payment captured (one-time purchase) ──────────────
        case 'payment.captured': {
          const payment = payload.payment?.entity;
          if (!payment) break;

          const notes   = payment.notes || {};
          const uid     = notes.uid     as string;
          const planId  = notes.planId  as string;

          if (!uid || !planId || !PLAN_CONFIG[planId]) {
            functions.logger.error('Missing uid or planId in payment notes');
            break;
          }

          const expiry     = calculateExpiryDate(planId);
          const planConfig = PLAN_CONFIG[planId];

          // Upgrade user plan
          await db.doc(`users/${uid}`).update({
            plan:            planId,
            planExpiresAt:   expiry ? admin.firestore.Timestamp.fromDate(expiry) : null,
            enrolledCourses: planConfig.courses,
            lastActive:      admin.firestore.FieldValue.serverTimestamp(),
          });

          // Create subscription record
          await db.doc(`subscriptions/${uid}`).set({
            uid,
            planId,
            planName:        planConfig.name,
            status:          'active',
            paymentId:       payment.id,
            amountPaid:      payment.amount / 100,  // Razorpay stores paise
            currency:        payment.currency,
            purchasedAt:     admin.firestore.FieldValue.serverTimestamp(),
            expiresAt:       expiry ? admin.firestore.Timestamp.fromDate(expiry) : null,
            isLifetime:      expiry === null,
          });

          // Create notification for user
          await db.collection(`users/${uid}/notifications`).add({
            type:    'plan_upgraded',
            title:   `🎉 Welcome to ${planConfig.name} Plan!`,
            message: `You now have access to: ${planConfig.courses.join(', ')}`,
            read:    false,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
          });

          functions.logger.info(`Plan upgraded: uid=${uid}, plan=${planId}`);
          break;
        }

        // ── Payment failed ─────────────────────────────────────
        case 'payment.failed': {
          const payment = payload.payment?.entity;
          const notes   = payment?.notes || {};
          const uid     = notes.uid as string;

          if (uid) {
            await db.collection(`users/${uid}/notifications`).add({
              type:    'payment_failed',
              title:   '❌ Payment Failed',
              message: 'Your payment could not be processed. Please try again.',
              read:    false,
              createdAt: admin.firestore.FieldValue.serverTimestamp(),
            });
          }
          break;
        }

        // ── Subscription cancelled ─────────────────────────────
        case 'subscription.cancelled': {
          const subscription = payload.subscription?.entity;
          const notes        = subscription?.notes || {};
          const uid          = notes.uid as string;

          if (uid) {
            // Don't immediately downgrade — let plan run until expiry
            await db.doc(`subscriptions/${uid}`).update({
              status:      'cancelled',
              cancelledAt: admin.firestore.FieldValue.serverTimestamp(),
            });

            await db.collection(`users/${uid}/notifications`).add({
              type:    'subscription_cancelled',
              title:   '📋 Subscription Cancelled',
              message: 'Your subscription was cancelled. You can continue until your plan expires.',
              read:    false,
              createdAt: admin.firestore.FieldValue.serverTimestamp(),
            });
          }
          break;
        }

        default:
          functions.logger.info(`Unhandled event: ${event}`);
      }

      res.status(200).json({ received: true });

    } catch (err) {
      functions.logger.error('Webhook processing error:', err);
      // Return 200 to prevent Razorpay from retrying
      // (we'll handle failures via the Razorpay dashboard)
      res.status(200).json({ received: true, error: 'Processing failed' });
    }
  });

// ── 2. Verify User Plan (Callable) ────────────────────────────
interface VerifyPlanResponse {
  plan:         string;
  isActive:     boolean;
  expiresAt:    string | null;
  daysRemaining: number | null;
  courses:      string[];
}

export const verifyUserPlan = functions
  .region('asia-south1')
  .https.onCall(async (_data, context): Promise<VerifyPlanResponse> => {
    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated', 'Login required.');
    }

    const uid      = context.auth.uid;
    const userSnap = await db.doc(`users/${uid}`).get();

    if (!userSnap.exists) {
      throw new functions.https.HttpsError('not-found', 'User not found.');
    }

    const userData    = userSnap.data()!;
    const plan        = userData.plan as string || 'free';
    const expiresAt   = userData.planExpiresAt as admin.firestore.Timestamp | null;

    // ── Check for plan expiry ──────────────────────────────────
    if (plan !== 'free' && expiresAt) {
      const expiryDate = expiresAt.toDate();
      const now        = new Date();

      if (now > expiryDate) {
        // Plan has expired — downgrade to free
        await db.doc(`users/${uid}`).update({
          plan:            'free',
          enrolledCourses: ['python'],
          planExpiresAt:   null,
        });

        await db.collection(`users/${uid}/notifications`).add({
          type:    'plan_expired',
          title:   '⏰ Your plan has expired',
          message: 'Renew your plan to continue accessing all courses.',
          read:    false,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });

        return {
          plan:          'free',
          isActive:      false,
          expiresAt:     null,
          daysRemaining: null,
          courses:       ['python'],
        };
      }

      // Calculate days remaining
      const msRemaining   = expiryDate.getTime() - now.getTime();
      const daysRemaining = Math.ceil(msRemaining / (1000 * 60 * 60 * 24));

      return {
        plan,
        isActive:      true,
        expiresAt:     expiryDate.toISOString(),
        daysRemaining,
        courses:       PLAN_CONFIG[plan]?.courses || ['python'],
      };
    }

    // Bundle (lifetime) or free plan
    const courses = plan === 'bundle'
      ? ['python', 'javascript', 'html-css', 'java']
      : plan === 'free'
        ? ['python']
        : PLAN_CONFIG[plan]?.courses || ['python'];

    return {
      plan,
      isActive:      true,
      expiresAt:     null,
      daysRemaining: null,
      courses,
    };
  });
