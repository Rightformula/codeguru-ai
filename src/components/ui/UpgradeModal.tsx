'use client';
// src/components/ui/UpgradeModal.tsx
// ─────────────────────────────────────────────────────────────
// UPGRADE MODAL
//
// Shows when a user clicks on locked course content.
// Presents a mini-pricing comparison and links to /pricing.
//
// Used by:
//   - Course catalog (locked course cards)
//   - Dashboard (locked course rows)
//   - useUIStore().openUpgradeModal() from anywhere
// ─────────────────────────────────────────────────────────────

import Link                from 'next/link';
import { Modal }           from '@/components/ui/Badge';
import { useUpgradeModal, useUIStore } from '@/store/uiStore';

const PLANS = [
  { name: 'Starter', price: '₹1,499', period: '4 mo', courses: 1,   highlight: false },
  { name: 'Pro',     price: '₹2,999', period: '6 mo', courses: 2,   highlight: true  },
  { name: 'Multi',   price: '₹3,599', period: '9 mo', courses: 3,   highlight: false },
  { name: 'Bundle',  price: '₹5,399', period: '12 mo', courses: 4,  highlight: false },
];

export default function UpgradeModal() {
  const isOpen     = useUpgradeModal();
  const closeModal = useUIStore(s => s.closeUpgradeModal);

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      title="🔒 Unlock This Course"
      size="md"
    >
      <p className="text-sm text-[#94A3B8] mb-5">
        Upgrade your plan to access more languages and advanced content.
      </p>

      {/* Mini plan comparison */}
      <div className="grid grid-cols-2 gap-2 mb-5">
        {PLANS.map(plan => (
          <div
            key={plan.name}
            className={`
              rounded-xl p-3 border text-center
              ${plan.highlight
                ? 'border-green-500/50 bg-green-950/30'
                : 'border-[#1E1E2E] bg-[#18182A]'
              }
            `}
          >
            <div className="font-display font-bold text-sm">{plan.name}</div>
            <div className="text-green-500 font-bold text-base">{plan.price}</div>
            <div className="text-xs text-[#64748B]">{plan.period}</div>
            <div className="text-xs text-[#94A3B8] mt-1">
              {plan.courses} language{plan.courses > 1 ? 's' : ''}
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/pricing"
        onClick={closeModal}
        className="
          block w-full text-center py-3 bg-green-500 text-black
          font-bold rounded-xl hover:bg-green-400 transition-colors text-sm
        "
      >
        View Full Plans & Pricing →
      </Link>

      <button
        onClick={closeModal}
        className="block w-full text-center mt-3 text-sm text-[#64748B] hover:text-[#E2E8F0] transition-colors"
      >
        Maybe later
      </button>
    </Modal>
  );
}
