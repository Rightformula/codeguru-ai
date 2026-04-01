'use client';
// src/components/progress/XpPopup.tsx
// ─────────────────────────────────────────────────────────────
// XP POPUP — the "+10 XP 🎉" floating animation shown when
// a user earns XP.
//
// Watches `lastXpGain` in progressStore.
// When it changes (and is > 0), shows the popup for 1.5 seconds.
//
// The animation is CSS-only — no Framer Motion needed.
// ─────────────────────────────────────────────────────────────

import { useEffect, useState } from 'react';
import { useProgressStore }    from '@/store/progressStore';

export default function XpPopup() {
  const lastXpGain = useProgressStore(s => s.lastXpGain);
  const [visible,  setVisible]  = useState(false);
  const [displayXp, setDisplayXp] = useState(0);

  useEffect(() => {
    if (!lastXpGain || lastXpGain <= 0) return;

    // Show popup
    setDisplayXp(lastXpGain);
    setVisible(true);

    // Hide after animation
    const timer = setTimeout(() => setVisible(false), 1600);
    return () => clearTimeout(timer);
  }, [lastXpGain]);

  if (!visible) return null;

  return (
    <div
      className="
        fixed bottom-24 right-6 z-[9997]
        pointer-events-none
        font-display font-extrabold text-xl
        text-yellow-400
        animate-xp-pop
        drop-shadow-[0_0_10px_rgba(255,209,102,0.8)]
      "
    >
      +{displayXp} XP! ⭐
    </div>
  );
}
