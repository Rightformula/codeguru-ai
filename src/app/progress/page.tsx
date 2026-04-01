'use client';
// src/app/progress/page.tsx
// ─────────────────────────────────────────────────────────────
// PROGRESS PAGE — /progress
//
// Shows the learner's full progress dashboard:
//   - Level + XP ring with animated fill
//   - Streak counter with fire animation
//   - Stats grid (XP / lessons / code runs)
//   - All badges (unlocked + locked greyed out)
//   - Activity log (last 50 actions)
// ─────────────────────────────────────────────────────────────

import AuthGuard           from '@/components/auth/AuthGuard';
import { useProgressStats, getLevelName } from '@/hooks/useProgress';
import { ALL_BADGES }      from '@/store/progressStore';

// ── XP Ring component ─────────────────────────────────────────
// SVG circle that fills based on XP percentage
function XPRing({ pct, level }: { pct: number; level: number }) {
  const r    = 54;
  const circ = 2 * Math.PI * r;
  const dash = circ - (circ * pct) / 100;

  return (
    <div className="relative w-36 h-36 mx-auto">
      <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
        {/* Track */}
        <circle cx="60" cy="60" r={r} fill="none" stroke="#1E1E2E" strokeWidth="10" />
        {/* Fill */}
        <circle
          cx="60" cy="60" r={r}
          fill="none"
          stroke="url(#xpGradient)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={dash}
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="xpGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="font-display font-extrabold text-3xl text-green-500 leading-none">
          {level}
        </div>
        <div className="text-xs text-[#64748B] font-semibold mt-0.5">Level</div>
      </div>
    </div>
  );
}

// ── Badge card ────────────────────────────────────────────────
function BadgeCard({ badge, isUnlocked }: { badge: typeof ALL_BADGES[number]; isUnlocked: boolean }) {
  return (
    <div className={`
      bg-[#12121A] border rounded-xl p-3 text-center transition-all
      ${isUnlocked
        ? 'border-yellow-500/40 shadow-[0_0_12px_rgba(255,209,102,0.1)]'
        : 'border-[#1E1E2E] opacity-40 grayscale'
      }
    `}>
      <div className="text-2xl mb-1.5">{badge.icon}</div>
      <div className="text-xs font-bold truncate">{badge.name}</div>
      <div className="text-[10px] text-[#64748B] leading-tight mt-0.5 line-clamp-2">
        {badge.description}
      </div>
      {isUnlocked && (
        <div className="mt-1.5 text-[10px] text-yellow-400 font-bold">✓ Earned</div>
      )}
    </div>
  );
}

// ── Activity item ─────────────────────────────────────────────
function ActivityItem({ entry }: { entry: ReturnType<typeof useProgressStats>['activityLog'][0] }) {
  const icons: Record<string, string> = {
    lesson: '📗',
    quiz:   '🧠',
    badge:  '🏅',
    streak: '🔥',
  };

  const time = new Date(entry.timestamp).toLocaleDateString('en-IN', {
    day:   'numeric',
    month: 'short',
    hour:  '2-digit',
    minute:'2-digit',
  });

  return (
    <div className="flex items-center gap-3 py-3 border-b border-[#1A1A28] last:border-0">
      <div className="text-lg flex-shrink-0">{icons[entry.type] || '📌'}</div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold truncate">{entry.title}</div>
        <div className="text-xs text-[#64748B] truncate">{entry.subtitle} · {time}</div>
      </div>
      {entry.xpEarned > 0 && (
        <div className="text-xs font-bold text-yellow-400 flex-shrink-0">
          +{entry.xpEarned} XP
        </div>
      )}
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────
export default function ProgressPage() {
  const stats = useProgressStats();
  const unlockedIds = new Set(stats.unlockedBadges.map(b => b.id));

  return (
    <AuthGuard>
      <div className="max-w-2xl mx-auto px-4 py-6 pb-8">

        {/* Header */}
        <h1 className="text-2xl font-display font-bold mb-6">📊 Your Progress</h1>

        {/* ── Level + XP section ─────────────────────────── */}
        <div className="bg-gradient-to-br from-green-950/40 to-blue-950/30 border border-green-800/30 rounded-2xl p-5 mb-5 text-center">
          <XPRing pct={stats.xpProgressPct} level={stats.level} />

          <h2 className="font-display font-bold text-lg mt-3 mb-0.5">
            {getLevelName(stats.level)}
          </h2>

          <p className="text-sm text-[#64748B] mb-4">{stats.streakMessage}</p>

          {/* XP progress bar */}
          <div className="max-w-xs mx-auto">
            <div className="flex justify-between text-xs text-[#64748B] mb-1.5">
              <span>{stats.xpInLevel} XP</span>
              <span>{stats.xpToNextLevel} XP to Level {stats.level + 1}</span>
            </div>
            <div className="h-2.5 bg-[#1E1E2E] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-700"
                style={{ width: `${stats.xpProgressPct}%` }}
              />
            </div>
          </div>
        </div>

        {/* ── Stats grid ─────────────────────────────────── */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { val: stats.xp,               label: 'Total XP',       color: 'text-yellow-400', icon: '⭐' },
            { val: stats.streak + ' 🔥',   label: 'Day Streak',     color: 'text-orange-400', icon: '' },
            { val: stats.lessonsCompleted,  label: 'Lessons Done',   color: 'text-green-500',  icon: '' },
          ].map(s => (
            <div key={s.label} className="bg-[#12121A] border border-[#1E1E2E] rounded-xl p-3 text-center">
              <div className={`font-display font-extrabold text-xl ${s.color}`}>{s.val}</div>
              <div className="text-[10px] text-[#64748B] mt-0.5 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Badges ─────────────────────────────────────── */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-bold text-[#64748B] uppercase tracking-widest">
              🏅 Badges
            </h2>
            <span className="text-xs text-[#64748B]">
              {stats.badgeCount} / {stats.totalBadges} earned
            </span>
          </div>

          {/* Badge grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
            {ALL_BADGES.map(badge => (
              <BadgeCard
                key={badge.id}
                badge={badge}
                isUnlocked={unlockedIds.has(badge.id)}
              />
            ))}
          </div>
        </div>

        {/* ── Activity Log ─────────────────────────────────── */}
        <div>
          <h2 className="text-xs font-bold text-[#64748B] uppercase tracking-widest mb-3">
            📝 Recent Activity
          </h2>

          {stats.activityLog.length === 0 ? (
            <div className="bg-[#12121A] border border-[#1E1E2E] rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">🌱</div>
              <p className="text-sm text-[#64748B]">
                Complete lessons to see your activity here!
              </p>
            </div>
          ) : (
            <div className="bg-[#12121A] border border-[#1E1E2E] rounded-xl px-4">
              {stats.activityLog.slice(0, 20).map(entry => (
                <ActivityItem key={entry.id} entry={entry} />
              ))}
            </div>
          )}
        </div>

      </div>
    </AuthGuard>
  );
}
