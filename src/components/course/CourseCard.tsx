'use client';
// src/components/course/CourseCard.tsx
// ─────────────────────────────────────────────────────────────
// COURSE CARD
//
// Reusable card for displaying a course.
// Used in:
//   - /courses catalog page (full size)
//   - /dashboard course list (compact size)
//
// Two display modes:
//   full    → Large card with description, stats, progress bar
//   compact → Horizontal row with icon, title, progress
// ─────────────────────────────────────────────────────────────

import Link                      from 'next/link';
import { clsx }                  from 'clsx';
import { Badge }                 from '@/components/ui/Badge';
import { ProgressBar }           from '@/components/ui/ProgressBar';
import { useCourseProgressPct }  from '@/store/progressStore';
import { useUIStore }            from '@/store/uiStore';

// ── Types ─────────────────────────────────────────────────────
export interface CourseCardData {
  id:          string;
  icon:        string;
  name:        string;
  description?: string;
  color:       string;
  isUnlocked:  boolean;
  plan:        string;         // required plan to unlock
  totalLessons?: number;
  totalModules?: number;
}

interface CourseCardProps {
  course:    CourseCardData;
  mode?:     'full' | 'compact';
  className?: string;
}

// ── Full Card ──────────────────────────────────────────────────
function FullCard({ course }: { course: CourseCardData }) {
  const totalLessons   = course.totalLessons || 54;
  const progressPct    = useCourseProgressPct(course.id, totalLessons);
  const openUpgrade    = useUIStore(s => s.openUpgradeModal);

  if (!course.isUnlocked) {
    return (
      <div
        onClick={openUpgrade}
        className="
          relative bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-5
          opacity-70 cursor-pointer
          hover:opacity-90 hover:border-yellow-500/40 transition-all duration-200 group
        "
      >
        {/* Lock badge */}
        <div className="absolute top-4 right-4">
          <Badge color="yellow">🔒 {course.plan}</Badge>
        </div>

        {/* Color accent line */}
        <div className="h-0.5 w-12 rounded-full mb-4" style={{ background: course.color }} />

        <div className="text-3xl mb-3">{course.icon}</div>
        <h3 className="font-display font-bold text-base mb-1">{course.name}</h3>
        {course.description && (
          <p className="text-xs text-[#64748B] leading-relaxed mb-3 line-clamp-2">
            {course.description}
          </p>
        )}
        <p className="text-xs text-yellow-400 font-semibold group-hover:underline">
          Upgrade to unlock →
        </p>
      </div>
    );
  }

  return (
    <Link
      href={`/courses/${course.id}`}
      className="
        relative bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-5
        hover:border-[#2A2A3C] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30
        transition-all duration-200 block group
      "
    >
      {/* Color accent bar — animates to full width on hover */}
      <div
        className="h-0.5 rounded-full mb-4 transition-all duration-300 w-12 group-hover:w-full"
        style={{ background: course.color }}
      />

      <div className="text-3xl mb-3">{course.icon}</div>
      <h3 className="font-display font-bold text-base mb-1">{course.name}</h3>

      {course.description && (
        <p className="text-xs text-[#64748B] leading-relaxed mb-3 line-clamp-2">
          {course.description}
        </p>
      )}

      {/* Stats */}
      <div className="flex items-center justify-between text-xs text-[#64748B] mb-3">
        <span>{course.totalModules || 18} modules · {totalLessons} lessons</span>
        {progressPct > 0 && (
          <span className="font-semibold" style={{ color: course.color }}>
            {progressPct}%
          </span>
        )}
      </div>

      {/* Progress bar */}
      <ProgressBar value={progressPct} color={course.color} height="xs" />

      <p className="text-xs text-[#64748B] group-hover:text-green-400 transition-colors mt-3 font-semibold">
        View modules →
      </p>
    </Link>
  );
}

// ── Compact Card ──────────────────────────────────────────────
// Horizontal row used in dashboard course list
function CompactCard({ course }: { course: CourseCardData }) {
  const totalLessons = course.totalLessons || 54;
  const progressPct  = useCourseProgressPct(course.id, totalLessons);
  const openUpgrade  = useUIStore(s => s.openUpgradeModal);

  if (!course.isUnlocked) {
    return (
      <div
        onClick={openUpgrade}
        className="
          flex items-center gap-3 bg-[#12121A] border border-[#1E1E2E] rounded-xl p-3.5
          opacity-60 cursor-pointer hover:opacity-80 hover:border-yellow-500/30 transition-all
        "
      >
        <div className="text-2xl flex-shrink-0">{course.icon}</div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold">{course.name}</div>
          <div className="text-xs text-[#64748B]">🔒 Requires {course.plan} plan</div>
        </div>
        <Badge color="yellow" className="flex-shrink-0">{course.plan}</Badge>
      </div>
    );
  }

  return (
    <Link
      href={`/courses/${course.id}`}
      className="
        flex items-center gap-3 bg-[#12121A] border border-[#1E1E2E] rounded-xl p-3.5
        hover:border-[#2A2A3C] hover:bg-[#14141E] transition-all group
      "
    >
      <div className="text-2xl flex-shrink-0">{course.icon}</div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold mb-1">{course.name}</div>
        <ProgressBar value={progressPct} color={course.color} height="xs" />
        <div className="text-xs text-[#64748B] mt-1">
          {progressPct === 0 ? 'Not started' : `${progressPct}% complete`}
        </div>
      </div>
      <svg viewBox="0 0 24 24" width="14" fill="none" stroke="#64748B" strokeWidth="2"
        className="flex-shrink-0 group-hover:text-green-500 group-hover:stroke-green-500 transition-colors">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </Link>
  );
}

// ── Main Export ───────────────────────────────────────────────
export function CourseCard({ course, mode = 'full', className }: CourseCardProps) {
  return (
    <div className={className}>
      {mode === 'full' ? <FullCard course={course} /> : <CompactCard course={course} />}
    </div>
  );
}
