'use client';
// src/components/progress/BadgePopup.tsx
// ─────────────────────────────────────────────────────────────
// BADGE POPUP — appears whenever a new badge is unlocked.
// Reads `newBadge` from progressStore.
// Clears itself after 3 seconds via clearNewBadge().
//
// Place this ONCE in dashboard/layout.tsx so it works globally.
// ─────────────────────────────────────────────────────────────

import { useEffect }   from 'react';
import { useNewBadge, useProgressStore } from '@/store/progressStore';

export default function BadgePopup() {
  const newBadge    = useNewBadge();
  const clearBadge  = useProgressStore(s => s.clearNewBadge);

  // Auto-dismiss after 3.5 seconds
  useEffect(() => {
    if (!newBadge) return;
    const timer = setTimeout(() => clearBadge(), 3500);
    return () => clearTimeout(timer);
  }, [newBadge]);

  if (!newBadge) return null;

  return (
    // Overlay container — fixed bottom centre
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[9998] pointer-events-none">
      <div
        className="
          flex items-center gap-3
          bg-[#12121A] border border-yellow-500/50
          shadow-[0_0_30px_rgba(255,209,102,0.3)]
          rounded-2xl px-5 py-4
          animate-slide-up
        "
      >
        {/* Badge icon with glow */}
        <div className="
          w-12 h-12 rounded-full
          bg-gradient-to-br from-yellow-400 to-orange-400
          flex items-center justify-center
          text-2xl
          shadow-[0_0_20px_rgba(255,209,102,0.5)]
          animate-bounce-slow
        ">
          {newBadge.icon}
        </div>

        {/* Text */}
        <div>
          <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-0.5">
            🏅 Badge Unlocked!
          </div>
          <div className="font-display font-bold text-base">{newBadge.name}</div>
          <div className="text-xs text-[#64748B]">{newBadge.description}</div>
        </div>
      </div>
    </div>
  );
}
