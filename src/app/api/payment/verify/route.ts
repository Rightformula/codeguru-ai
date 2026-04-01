// src/app/api/payment/verify/route.ts
// ─────────────────────────────────────────────────────────────
// VERIFY RAZORPAY PAYMENT
//
// POST /api/payment/verify
//
// Called by the client AFTER the Razorpay modal closes with
// a successful payment. This route verifies the payment
// signature and immediately upgrades the user's plan.
//
// WHY this route AND the webhook (verifyPlan.ts)?
//
//   Webhook (Cloud Function):
//   - Triggered by Razorpay's servers asynchronously
//   - Can be delayed by seconds or minutes
//   - More reliable long-term (retries on failure)
//   - The SOURCE OF TRUTH for plan upgrades
//
//   This verify route:
//   - Called immediately after payment succeeds
//   - Gives instant feedback to the user ("Your plan is active!")
//   - Redundant safety net if webhook is delayed
//   - Gracefully handles the race condition
//
// SIGNATURE VERIFICATION:
//   Razorpay returns three values after payment:
//     razorpay_order_id
//     razorpay_payment_id
//     razorpay_signature
//
//   The signature is HMAC-SHA256 of:
//     "{orderId}|{paymentId}" signed with Razorpay secret key
//
//   If the signature is valid, the payment is authentic.
// ─────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server';
import * as crypto                   from 'crypto';
import { verifyRequestToken, adminDb } from '@/lib/firebase-admin';

// ── Plan config (must match create-order route) ───────────────
const PLAN_COURSES: Record<string, string[]> = {
  starter: ['python'],
  pro:     ['python', 'javascript'],
  multi:   ['python', 'javascript', 'html-css'],
  bundle:  ['python', 'javascript', 'html-css', 'java'],
};

const PLAN_DURATION_MONTHS: Record<string, number | null> = {
  starter: 4,
  pro:     6,
  multi:   9,
  bundle:  null, // lifetime
};

// ── POST handler ──────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    // ── Verify Firebase auth ──────────────────────────────────
    const authHeader = req.headers.get('Authorization');
    const user       = await verifyRequestToken(authHeader);

    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    // ── Parse Razorpay payment response ───────────────────────
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      planId,
      amountPaid,
    } = await req.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !planId) {
      return NextResponse.json(
        { error: 'Missing payment verification fields' },
        { status: 400 }
      );
    }

    // ── Verify Razorpay signature ─────────────────────────────
    const keySecret = process.env.RAZORPAY_KEY_SECRET!;
    const body      = `${razorpay_order_id}|${razorpay_payment_id}`;

    const expectedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(body)
      .digest('hex');

    if (expectedSignature !== razorpay_signature) {
      console.error('Signature mismatch — possible payment tampering attempt');
      return NextResponse.json(
        { error: 'Payment signature verification failed' },
        { status: 400 }
      );
    }

    // ── Payment is authentic — upgrade the plan ───────────────
    const uid          = user.uid;
    const courses      = PLAN_COURSES[planId]      || ['python'];
    const months       = PLAN_DURATION_MONTHS[planId];
    const expiresAt    = months
      ? new Date(Date.now() + months * 30 * 24 * 60 * 60 * 1000)
      : null;  // null = lifetime

    // Update user document
    await adminDb.doc(`users/${uid}`).update({
      plan:            planId,
      planExpiresAt:   expiresAt,
      enrolledCourses: courses,
      lastActive:      new Date(),
    });

    // Upsert subscription document
    // (the webhook will also write this — that's fine, last write wins)
    await adminDb.doc(`subscriptions/${uid}`).set({
      uid,
      planId,
      status:       'active',
      paymentId:    razorpay_payment_id,
      orderId:      razorpay_order_id,
      amountPaid:   amountPaid || 0,
      currency:     'INR',
      purchasedAt:  new Date(),
      expiresAt,
      isLifetime:   expiresAt === null,
    }, { merge: true });

    // Create a success notification
    await adminDb.collection(`users/${uid}/notifications`).add({
      type:    'plan_upgraded',
      title:   `🎉 Welcome to ${planId.charAt(0).toUpperCase() + planId.slice(1)} Plan!`,
      message: `You now have access to: ${courses.join(', ')}`,
      read:    false,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success:        true,
      plan:           planId,
      enrolledCourses: courses,
      expiresAt:      expiresAt?.toISOString() || null,
      message:        `Payment verified! Your ${planId} plan is now active.`,
    });

  } catch (error: any) {
    console.error('Payment verify error:', error);
    return NextResponse.json(
      { error: 'Payment verification failed', details: error.message },
      { status: 500 }
    );
  }
}
