'use client';
// src/components/progress/StreakCounter.tsx
// ─────────────────────────────────────────────────────────────
// STREAK COUNTER + LEVEL RING
//
// StreakCounter  → animated flame counter with day labels
// LevelRing      → SVG progress ring showing level + XP %
// BadgeGrid      → grid of earned/unearned badges
// ─────────────────────────────────────────────────────────────

import { useMemo }     from 'react';
import { clsx }        from 'clsx';
import { ALL_BADGES }  from '@/store/progressStore';
import { getLevelName } from '@/hooks/useProgress';

// ════════════════════════════════════════════════════════════
//  STREAK COUNTER
// ════════════════════════════════════════════════════════════

interface StreakCounterProps {
  streak:  number;
  size?:   'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export function StreakCounter({ streak, size = 'md', showLabel = true }: StreakCounterProps) {
  const sizes = {
    sm: { num: 'text-xl',  icon: 'text-xl',  label: 'text-[10px]' },
    md: { num: 'text-3xl', icon: 'text-3xl', label: 'text-xs'     },
    lg: { num: 'text-5xl', icon: 'text-4xl', label: 'text-sm'     },
  };
  const s = sizes[size];

  if (streak === 0) {
    return (
      <div className="text-center">
        <div className={clsx(s.icon, 'opacity-30')}>🔥</div>
        {showLabel && (
          <div className={clsx(s.label, 'text-[#64748B] mt-1')}>Start a lesson!</div>
        )}
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="relative inline-flex items-center justify-center gap-1">
        <span className={clsx(s.icon, streak >= 7 ? 'animate-bounce-slow' : '')}>🔥</span>
        <span className={clsx(s.num, 'font-display font-extrabold text-orange-400 tabular-nums')}>
          {streak}
        </span>
      </div>
      {showLabel && (
        <div className={clsx(s.label, 'text-[#64748B] mt-0.5')}>
          day streak
        </div>
      )}
    </div>
  );
}

// ════════════════════════════════════════════════════════════
//  LEVEL RING
// ════════════════════════════════════════════════════════════

interface LevelRingProps {
  level:      number;
  xpInLevel:  number;    // 0–99
  size?:      number;    // px size of the ring (default 144)
}

export function LevelRing({ level, xpInLevel, size = 144 }: LevelRingProps) {
  const r    = (size / 2) * 0.75;
  const circ = 2 * Math.PI * r;
  const dash = circ - (circ * xpInLevel) / 100;
  const cx   = size / 2;
  const cy   = size / 2;

  const levelName = getLevelName(level);

  return (
    <div className="text-center">
      {/* Ring */}
      <div className="relative inline-block" style={{ width: size, height: size }}>
        <svg
          viewBox={`0 0 ${size} ${size}`}
          width={size} height={size}
          className="-rotate-90"
        >
          {/* Track */}
          <circle
            cx={cx} cy={cy} r={r}
            fill="none" stroke="#1E1E2E" strokeWidth={size * 0.08}
          />
          {/* Progress fill */}
          <circle
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke="url(#lvlGrad)"
            strokeWidth={size * 0.08}
            strokeLinecap="round"
            strokeDasharray={circ}
            strokeDashoffset={dash}
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="lvlGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#22c55e" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="font-display font-extrabold leading-none text-green-500"
            style={{ fontSize: size * 0.28 }}>
            {level}
          </div>
          <div className="text-[#64748B] font-semibold mt-0.5"
            style={{ fontSize: size * 0.085 }}>
            Level
          </div>
        </div>
      </div>

      {/* Level name */}
      <div className="font-display font-bold mt-2 text-sm">{levelName}</div>
      <div className="text-xs text-[#64748B]">{xpInLevel}/100 XP to next level</div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════
//  BADGE GRID
// ════════════════════════════════════════════════════════════

interface BadgeGridProps {
  unlockedIds: Set<string>;
  columns?:    2 | 3 | 4;
}

const COL_CLASS: Record<number, string> = {
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
};

export function BadgeGrid({ unlockedIds, columns = 3 }: BadgeGridProps) {
  return (
    <div className={clsx('grid gap-2.5', COL_CLASS[columns])}>
      {ALL_BADGES.map(badge => {
        const earned = unlockedIds.has(badge.id);
        return (
          <div
            key={badge.id}
            title={badge.description}
            className={clsx(
              'bg-[#12121A] border rounded-xl p-3 text-center transition-all',
              earned
                ? 'border-yellow-500/40 shadow-[0_0_10px_rgba(255,209,102,0.08)]'
                : 'border-[#1E1E2E] opacity-35 grayscale',
            )}
          >
            <div className="text-2xl mb-1.5">{badge.icon}</div>
            <div className="text-xs font-bold leading-tight truncate">{badge.name}</div>
            <div className="text-[10px] text-[#64748B] mt-0.5 leading-tight line-clamp-2">
              {badge.description}
            </div>
            {earned && (
              <div className="text-[10px] text-yellow-400 font-bold mt-1">✓</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ════════════════════════════════════════════════════════════
//  STATS GRID
// ════════════════════════════════════════════════════════════

interface StatsGridProps {
  stats: { value: string | number; label: string; color: string }[];
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${stats.length}, 1fr)` }}>
      {stats.map(s => (
        <div key={s.label} className="bg-[#12121A] border border-[#1E1E2E] rounded-xl p-3 text-center">
          <div className={clsx('font-display font-extrabold text-xl tabular-nums', s.color)}>
            {s.value}
          </div>
          <div className="text-[10px] text-[#64748B] mt-0.5 uppercase tracking-wider font-semibold">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
