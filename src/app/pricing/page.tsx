'use client';
// src/app/pricing/page.tsx
// ─────────────────────────────────────────────────────────────
// PRICING PAGE — /pricing
//
// Shows all 4 plans with:
//   - Feature comparison
//   - Student discount toggle (10% off)
//   - "Buy Now" button that opens Razorpay checkout modal
//   - Post-payment success state
//   - Current plan badge for logged-in users
//
// RAZORPAY FLOW:
//   1. User clicks "Buy Now"
//   2. We call POST /api/payment/create-order (server creates order)
//   3. Server returns orderId + amount
//   4. We load Razorpay checkout.js and open the modal
//   5. User pays → Razorpay calls paymentHandler callback
//   6. We call POST /api/payment/verify with the payment details
//   7. Server verifies signature → upgrades plan in Firestore
//   8. We show success state and refresh user data
// ─────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react';
import Link                    from 'next/link';
import { useRouter }           from 'next/navigation';
import { useAuth }             from '@/components/auth/AuthProvider';
import { useAuthStore }        from '@/store/authStore';
import { useToast }            from '@/components/ui/ToastProvider';

// ── Types ─────────────────────────────────────────────────────
interface Plan {
  id:        string;
  name:      string;
  price:     number;
  period:    string;
  courses:   string[];
  features:  string[];
  popular:   boolean;
  badge?:    string;
}

// ── Plan data ─────────────────────────────────────────────────
const PLANS: Plan[] = [
  {
    id:      'starter',
    name:    'Starter',
    price:   1499,
    period:  '4 months',
    courses: ['🐍 Python'],
    features: [
      '1 language of choice',
      'All beginner lessons',
      'AI Mentor access',
      'Coding playground',
      'Progress tracking',
      'Completion certificate',
    ],
    popular: false,
  },
  {
    id:      'pro',
    name:    'Pro',
    price:   2999,
    period:  '6 months',
    courses: ['🐍 Python', '⚡ JavaScript'],
    features: [
      '2 languages of choice',
      'All levels (Beginner → Advanced)',
      'Priority AI Mentor',
      'AI code debugging',
      'Interview prep module',
      'Verified certificate',
    ],
    popular: true,
    badge:   '🔥 Most Popular',
  },
  {
    id:      'multi',
    name:    'Multi',
    price:   3599,
    period:  '9 months',
    courses: ['🐍 Python', '⚡ JavaScript', '🌐 HTML/CSS'],
    features: [
      '3 languages',
      'All levels + projects',
      'AI debug assistant',
      'Interview prep',
      'Resume review module',
      'LinkedIn certificate',
    ],
    popular: false,
  },
  {
    id:      'bundle',
    name:    'Bundle',
    price:   5399,
    period:  '12 months',
    courses: ['🐍 Python', '⚡ JavaScript', '🌐 HTML/CSS', '☕ Java'],
    features: [
      'All 4 languages',
      'Lifetime content access',
      'Unlimited AI sessions',
      '1-on-1 mentoring (2 sessions)',
      'Job placement guidance',
      'Gold certificate',
    ],
    popular: false,
    badge:   '⭐ Best Value',
  },
];

// ── Razorpay script loader ────────────────────────────────────
function loadRazorpay(): Promise<boolean> {
  return new Promise(resolve => {
    if ((window as any).Razorpay) { resolve(true); return; }
    const script    = document.createElement('script');
    script.src      = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload   = () => resolve(true);
    script.onerror  = () => resolve(false);
    document.body.appendChild(script);
  });
}

// ── Plan Card ─────────────────────────────────────────────────
function PlanCard({
  plan,
  finalPrice,
  isCurrentPlan,
  isLoggedIn,
  onBuy,
  isLoading,
}: {
  plan:          Plan;
  finalPrice:    number;
  isCurrentPlan: boolean;
  isLoggedIn:    boolean;
  onBuy:         (planId: string) => void;
  isLoading:     boolean;
}) {
  return (
    <div className={`
      relative flex flex-col bg-[#12121A] border rounded-2xl p-6
      transition-all duration-200
      ${plan.popular
        ? 'border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.15)] scale-[1.02]'
        : 'border-[#1E1E2E] hover:border-[#2A2A3C]'
      }
    `}>
      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2
          bg-green-500 text-black text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
          {plan.badge}
        </div>
      )}

      {/* Header */}
      <div className="mb-5">
        <div className="font-display font-extrabold text-xl mb-1">{plan.name}</div>
        <div className="flex items-baseline gap-1">
          <span className="font-display font-extrabold text-3xl text-green-500">
            ₹{finalPrice.toLocaleString('en-IN')}
          </span>
          <span className="text-sm text-[#64748B]">/ {plan.period}</span>
        </div>
        {isCurrentPlan && (
          <div className="mt-2 text-xs font-bold text-green-400 bg-green-950/50
            border border-green-800/40 px-2.5 py-1 rounded-full inline-block">
            ✓ Current Plan
          </div>
        )}
      </div>

      {/* Courses included */}
      <div className="mb-4">
        <div className="text-xs font-bold text-[#64748B] uppercase tracking-widest mb-2">
          Includes
        </div>
        <div className="flex flex-wrap gap-1.5">
          {plan.courses.map(c => (
            <span key={c} className="text-xs bg-[#1E1E2E] text-[#E2E8F0] px-2.5 py-1 rounded-full">
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <ul className="flex-1 space-y-2.5 mb-6">
        {plan.features.map(f => (
          <li key={f} className="flex items-start gap-2 text-sm text-[#94A3B8]">
            <span className="text-green-500 mt-0.5 flex-shrink-0 font-bold">✓</span>
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      {isCurrentPlan ? (
        <div className="w-full text-center py-2.5 rounded-xl text-sm font-semibold
          text-green-500 border border-green-800/40 bg-green-950/20">
          Active Plan ✓
        </div>
      ) : (
        <button
          onClick={() => isLoggedIn ? onBuy(plan.id) : undefined}
          disabled={isLoading}
          className={`
            w-full py-3 rounded-xl text-sm font-bold transition-all
            disabled:opacity-50 disabled:cursor-not-allowed
            ${plan.popular
              ? 'bg-green-500 text-black hover:bg-green-400 hover:shadow-[0_0_16px_rgba(34,197,94,0.4)]'
              : 'border border-[#2A2A3C] text-[#E2E8F0] hover:bg-[#18182A] hover:border-[#3A4560]'
            }
          `}
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin"/>
              Processing...
            </div>
          ) : isLoggedIn ? (
            `Get ${plan.name} →`
          ) : (
            <Link href="/signup" className="block w-full">
              Sign up to Buy
            </Link>
          )}
        </button>
      )}
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────
export default function PricingPage() {
  const { user, profile, refreshProfile } = useAuth();
  const router   = useRouter();
  const { showToast } = useToast();

  const [isStudent,   setIsStudent]   = useState(false);
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [success,     setSuccess]     = useState<{ plan: string; courses: string[] } | null>(null);

  const currentPlan = profile?.plan || 'free';
  const isLoggedIn  = !!user;

  // ── Buy handler ────────────────────────────────────────────
  async function handleBuy(planId: string) {
    if (!user) { router.push('/signup'); return; }

    setLoadingPlan(planId);

    try {
      // ── Step 1: Load Razorpay script ───────────────────────
      const loaded = await loadRazorpay();
      if (!loaded) {
        showToast('Failed to load payment gateway. Check your internet connection.', 'error');
        return;
      }

      // ── Step 2: Get Firebase ID token ──────────────────────
      const token = await user.getIdToken();

      // ── Step 3: Create server-side order ──────────────────
      const orderRes = await fetch('/api/payment/create-order', {
        method:  'POST',
        headers: {
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ planId, isStudent }),
      });

      if (!orderRes.ok) {
        const err = await orderRes.json();
        throw new Error(err.error || 'Failed to create order');
      }

      const orderData = await orderRes.json();

      // ── Step 4: Open Razorpay modal ────────────────────────
      const razorpayOptions = {
        key:         orderData.keyId,
        amount:      orderData.amount,
        currency:    orderData.currency,
        name:        'CodeGuru AI',
        description: `${orderData.planName} Plan — ${orderData.planDuration}`,
        order_id:    orderData.orderId,

        // Pre-fill user details
        prefill: {
          name:  profile?.name  || user.displayName || '',
          email: profile?.email || user.email       || '',
        },

        theme:   { color: '#22c55e' },
        modal:   { backdropclose: false },

        // ── Payment success callback ───────────────────────────
        handler: async (response: {
          razorpay_order_id:   string;
          razorpay_payment_id: string;
          razorpay_signature:  string;
        }) => {
          try {
            // Step 5: Verify payment server-side
            const verifyRes = await fetch('/api/payment/verify', {
              method:  'POST',
              headers: {
                'Content-Type':  'application/json',
                'Authorization': `Bearer ${token}`,
              },
              body: JSON.stringify({
                ...response,
                planId,
                amountPaid: orderData.finalPrice,
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyData.success) {
              // Refresh user profile to get new plan
              await refreshProfile();
              setSuccess({
                plan:    planId,
                courses: verifyData.enrolledCourses,
              });
              showToast(`🎉 ${planId.charAt(0).toUpperCase() + planId.slice(1)} Plan activated!`, 'success');
            } else {
              showToast('Payment recorded but plan activation pending. Contact support if issues persist.', 'warning');
            }
          } catch {
            showToast('Payment successful! Plan will activate shortly.', 'info');
          } finally {
            setLoadingPlan(null);
          }
        },

        // ── Payment modal closed without paying ────────────────
        modal: {
          ondismiss: () => {
            setLoadingPlan(null);
            showToast('Payment cancelled.', 'info');
          },
        },
      };

      const rzp = new (window as any).Razorpay(razorpayOptions);
      rzp.open();

    } catch (err: any) {
      showToast(err.message || 'Payment failed. Please try again.', 'error');
      setLoadingPlan(null);
    }
  }

  // ── Success state ──────────────────────────────────────────
  if (success) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center bg-[#12121A] border border-green-500/40
          rounded-2xl p-8 shadow-[0_0_40px_rgba(34,197,94,0.2)]">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="font-display font-extrabold text-2xl mb-2">
            Welcome to {success.plan.charAt(0).toUpperCase() + success.plan.slice(1)} Plan!
          </h1>
          <p className="text-[#94A3B8] mb-2 text-sm">
            You now have access to:
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {success.courses.map(c => (
              <span key={c} className="bg-green-950/50 text-green-400 border border-green-800/40
                px-3 py-1 rounded-full text-sm font-semibold capitalize">
                {c}
              </span>
            ))}
          </div>
          <Link
            href="/courses"
            className="block w-full py-3 bg-green-500 text-black font-bold rounded-xl
              hover:bg-green-400 transition-colors"
          >
            Start Learning →
          </Link>
          <p className="text-xs text-[#64748B] mt-4">
            A receipt has been sent to your email.
          </p>
        </div>
      </div>
    );
  }

  // ── Main pricing page ──────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#E2E8F0]">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0A0A0F]/85 backdrop-blur-xl border-b border-[#1E1E2E] px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-display font-extrabold text-lg">
          ⚡ <span className="text-green-500">Code</span>Guru AI
        </Link>
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <Link href="/dashboard" className="text-sm text-[#64748B] hover:text-[#E2E8F0] transition-colors">
              Dashboard →
            </Link>
          ) : (
            <>
              <Link href="/login"  className="text-sm text-[#64748B] hover:text-[#E2E8F0]">Log In</Link>
              <Link href="/signup" className="px-4 py-2 bg-green-500 text-black text-sm font-bold rounded-xl hover:bg-green-400 transition-colors">
                Sign Up Free
              </Link>
            </>
          )}
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl mb-3">
            Simple, Honest Pricing
          </h1>
          <p className="text-[#64748B] text-sm max-w-lg mx-auto">
            One-time payment. No hidden fees. No auto-renewal. Learn at your own pace.
          </p>

          {/* Student discount toggle */}
          <div className="mt-6 inline-flex items-center gap-3 bg-[#12121A] border border-[#1E1E2E] rounded-full px-5 py-2.5">
            <span className="text-sm text-[#64748B]">Student discount (10% off)</span>
            <button
              onClick={() => setIsStudent(prev => !prev)}
              className={`
                relative w-11 h-6 rounded-full transition-colors duration-200
                ${isStudent ? 'bg-green-500' : 'bg-[#2A2A3C]'}
              `}
            >
              <span className={`
                absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200
                ${isStudent ? 'translate-x-5' : 'translate-x-0.5'}
              `} />
            </button>
            {isStudent && (
              <span className="text-xs font-bold text-green-400 animate-fade-in">
                🎓 Applied!
              </span>
            )}
          </div>
        </div>

        {/* Plan grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLANS.map(plan => {
            const finalPrice = isStudent
              ? Math.round(plan.price * 0.9)
              : plan.price;

            return (
              <PlanCard
                key={plan.id}
                plan={plan}
                finalPrice={finalPrice}
                isCurrentPlan={currentPlan === plan.id}
                isLoggedIn={isLoggedIn}
                onBuy={handleBuy}
                isLoading={loadingPlan === plan.id}
              />
            );
          })}
        </div>

        {/* Alumni pricing */}
        <div className="mt-10 bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-6 text-center">
          <h3 className="font-display font-bold text-base mb-1">
            📚 Post-Course Alumni Subscriptions
          </h3>
          <p className="text-sm text-[#64748B] mb-3">
            Stay connected to the platform after your plan expires with monthly access to new content.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <div>
              <span className="font-bold text-green-500">₹199</span>
              <span className="text-[#64748B]">/month — Starter alumni</span>
            </div>
            <div>
              <span className="font-bold text-green-500">₹299</span>
              <span className="text-[#64748B]">/month — Pro / Multi / Bundle alumni</span>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-10">
          <h2 className="font-display font-bold text-xl text-center mb-6">FAQs</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                q: 'Can I switch languages after buying?',
                a: 'Yes! Within your plan\'s language limit, you can switch anytime from your dashboard.',
              },
              {
                q: 'Is there a refund policy?',
                a: '7-day full refund if you\'ve completed fewer than 3 lessons. Contact support.',
              },
              {
                q: 'How does the student discount work?',
                a: 'Toggle the student discount switch. No verification needed — we trust you! 🎓',
              },
              {
                q: 'What payment methods are accepted?',
                a: 'UPI, Net Banking, Credit/Debit cards, Wallets — all via Razorpay.',
              },
              {
                q: 'What happens when my plan expires?',
                a: 'Your progress is saved forever. You can renew or subscribe to the alumni plan.',
              },
              {
                q: 'Is the Bundle plan really lifetime?',
                a: 'Yes! Bundle gives you 12 months full access + lifetime access to all content updates.',
              },
            ].map(faq => (
              <div key={faq.q} className="bg-[#12121A] border border-[#1E1E2E] rounded-xl p-4">
                <div className="font-semibold text-sm mb-1.5">{faq.q}</div>
                <div className="text-xs text-[#64748B] leading-relaxed">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust signals */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#64748B]">
          <span>🔒 Secure payments via Razorpay</span>
          <span>✅ UPI / NetBanking / Cards</span>
          <span>📧 Invoice sent to email</span>
          <span>🔄 7-day refund policy</span>
        </div>

      </div>
    </div>
  );
}
