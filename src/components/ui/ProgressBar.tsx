'use client';
// src/components/ui/ProgressBar.tsx
// ─────────────────────────────────────────────────────────────
// PROGRESS BAR COMPONENTS
//
//  ProgressBar  → horizontal fill bar (module progress, lesson progress)
//  XPBar        → XP fill bar in navbar with gradient and glow
//  StreakBadge  → "🔥 7" flame badge for the navbar
// ─────────────────────────────────────────────────────────────

import { clsx } from 'clsx';

// ── ProgressBar ───────────────────────────────────────────────
interface ProgressBarProps {
  value:      number;      // 0–100
  max?:       number;      // default 100
  color?:     string;      // CSS color value or Tailwind gradient class
  height?:    'xs' | 'sm' | 'md' | 'lg';
  animated?:  boolean;     // animate fill on mount
  label?:     string;      // accessible label
  className?: string;
}

const BAR_HEIGHTS = {
  xs: 'h-1',
  sm: 'h-1.5',
  md: 'h-2',
  lg: 'h-3',
};

export function ProgressBar({
  value,
  max       = 100,
  color,
  height    = 'sm',
  animated  = true,
  label,
  className,
}: ProgressBarProps) {
  const pct = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemax={max}
      aria-label={label}
      className={clsx(
        'bg-[#1E1E2E] rounded-full overflow-hidden',
        BAR_HEIGHTS[height],
        className,
      )}
    >
      <div
        className={clsx(
          'h-full rounded-full',
          animated && 'transition-all duration-700 ease-out',
          // Default gradient if no custom color
          !color && 'bg-gradient-to-r from-green-500 to-blue-500',
        )}
        style={{
          width:      `${pct}%`,
          background: color || undefined,
        }}
      />
    </div>
  );
}

// ── XPBar ─────────────────────────────────────────────────────
// The XP progress bar shown in the navbar
interface XPBarProps {
  xp:    number;   // current total XP
  level: number;
}

export function XPBar({ xp, level }: XPBarProps) {
  const xpInLevel  = xp % 100;
  const xpToNext   = 100 - xpInLevel;

  return (
    <div className="flex items-center gap-2 min-w-[120px]">
      {/* XP number */}
      <span className="text-xs font-bold text-yellow-400 whitespace-nowrap tabular-nums">
        {xp} XP
      </span>

      {/* Bar */}
      <div className="flex-1 h-1.5 bg-[#1E1E2E] rounded-full overflow-hidden" title={`${xpToNext} XP to Level ${level + 1}`}>
        <div
          className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-700"
          style={{ width: `${xpInLevel}%` }}
        />
      </div>

      {/* Level */}
      <span className="text-xs text-[#64748B] whitespace-nowrap font-semibold">
        Lv.{level}
      </span>
    </div>
  );
}

// ── StreakBadge ───────────────────────────────────────────────
// Flame badge shown in navbar
interface StreakBadgeProps {
  streak: number;
  size?:  'sm' | 'md';
}

export function StreakBadge({ streak, size = 'md' }: StreakBadgeProps) {
  if (streak === 0) return null;

  return (
    <div className={clsx(
      'flex items-center gap-1 rounded-full font-bold',
      'bg-orange-950/50 border border-orange-800/40 text-orange-400',
      size === 'sm' ? 'px-2 py-0.5 text-xs gap-1' : 'px-2.5 py-1 text-xs gap-1.5',
    )}>
      🔥 {streak}
    </div>
  );
}

// ── ModuleProgress ────────────────────────────────────────────
// Progress display for a course module card
interface ModuleProgressProps {
  completed: number;
  total:     number;
  color?:    string;
  showLabel?: boolean;
}

export function ModuleProgress({ completed, total, color, showLabel = true }: ModuleProgressProps) {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between text-xs text-[#64748B] mb-1">
          <span>{completed}/{total} lessons</span>
          <span>{pct}%</span>
        </div>
      )}
      <ProgressBar
        value={pct}
        color={color}
        height="xs"
        animated
      />
    </div>
  );
}
