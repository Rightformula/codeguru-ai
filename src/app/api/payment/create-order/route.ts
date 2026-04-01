// src/app/api/payment/create-order/route.ts
// ─────────────────────────────────────────────────────────────
// CREATE RAZORPAY ORDER
//
// POST /api/payment/create-order
//
// Called by the pricing page when user clicks "Buy Now".
// Creates a Razorpay Order (server-side) and returns the
// order ID to the client, which then opens the Razorpay
// checkout modal.
//
// FLOW:
//   1. Client clicks "Buy Now" on pricing page
//   2. Client calls POST /api/payment/create-order
//   3. Server creates Razorpay order with amount + metadata
//   4. Server returns { orderId, amount, currency, keyId }
//   5. Client opens Razorpay checkout modal with this data
//   6. User pays → Razorpay calls our webhook (verifyPlan.ts)
//   7. Webhook upgrades the user's plan in Firestore
//
// WHY server-side order creation?
//   - Order amount must be set server-side (can't be tampered)
//   - Razorpay secret key must never reach the client
//   - Notes (uid, planId) are embedded in the order for the webhook
// ─────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server';
import { verifyRequestToken }        from '@/lib/firebase-admin';
import Razorpay                      from 'razorpay';

// ── Razorpay instance ─────────────────────────────────────────
// Initialized here (not at module level) to avoid issues
// during build time when env vars may not be available
function getRazorpay() {
  const keyId     = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    throw new Error('Razorpay credentials not configured');
  }

  return new Razorpay({ key_id: keyId, key_secret: keySecret });
}

// ── Plan config (must match Cloud Functions) ──────────────────
const PLANS: Record<string, {
  name:     string;
  price:    number;   // INR
  duration: string;
  courses:  string[];
}> = {
  starter: { name: 'Starter', price: 1499, duration: '4 months',  courses: ['python'] },
  pro:     { name: 'Pro',     price: 2999, duration: '6 months',  courses: ['python', 'javascript'] },
  multi:   { name: 'Multi',   price: 3599, duration: '9 months',  courses: ['python', 'javascript', 'html-css'] },
  bundle:  { name: 'Bundle',  price: 5399, duration: '12 months', courses: ['python', 'javascript', 'html-css', 'java'] },
};

// Student discount: 10% off
const STUDENT_DISCOUNT = 0.10;

// ── POST handler ──────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    // ── Verify auth ──────────────────────────────────────────
    const authHeader = req.headers.get('Authorization');
    const user       = await verifyRequestToken(authHeader);

    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    // ── Parse body ────────────────────────────────────────────
    const { planId, isStudent = false } = await req.json();

    if (!planId || !PLANS[planId]) {
      return NextResponse.json({ error: 'Invalid plan ID' }, { status: 400 });
    }

    const plan = PLANS[planId];

    // ── Apply student discount ────────────────────────────────
    const basePrice     = plan.price;
    const discountedPrice = isStudent
      ? Math.round(basePrice * (1 - STUDENT_DISCOUNT))
      : basePrice;

    // Razorpay amount is in paise (1 INR = 100 paise)
    const amountPaise = discountedPrice * 100;

    // ── Create Razorpay order ─────────────────────────────────
    const razorpay = getRazorpay();

    const order = await razorpay.orders.create({
      amount:   amountPaise,
      currency: 'INR',
      receipt:  `cg_${user.uid.slice(0, 8)}_${planId}_${Date.now()}`,

      // Notes are passed through to the webhook — this is how
      // the webhook knows which user + plan to update
      notes: {
        uid:       user.uid,
        planId,
        planName:  plan.name,
        isStudent: String(isStudent),
        email:     user.email || '',
      },
    });

    return NextResponse.json({
      orderId:        order.id,
      amount:         amountPaise,
      amountDisplay:  `₹${discountedPrice.toLocaleString('en-IN')}`,
      currency:       'INR',
      keyId:          process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      planName:       plan.name,
      planDuration:   plan.duration,
      originalPrice:  basePrice,
      finalPrice:     discountedPrice,
      discountApplied: isStudent ? STUDENT_DISCOUNT * 100 : 0,
    });

  } catch (error: any) {
    console.error('Create order error:', error);
    return NextResponse.json(
      { error: 'Failed to create payment order', details: error.message },
      { status: 500 }
    );
  }
}
