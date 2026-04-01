'use client';
// src/app/courses/page.tsx
// ─────────────────────────────────────────────────────────────
// COURSE CATALOG PAGE — /courses
// Shows all 4 language courses.
// Locked courses show an upgrade prompt.
// Unlocked courses show modules list and progress.
// ─────────────────────────────────────────────────────────────

import Link                   from 'next/link';
import AuthGuard              from '@/components/auth/AuthGuard';
import { useAllCourses }      from '@/hooks/useCourse';
import { useDashboardStats }  from '@/hooks/useProgress';
import { useCourseProgressPct } from '@/store/progressStore';
import { useUIStore }         from '@/store/uiStore';

// ── Per-course progress badge ──────────────────────────────────
function CourseProgressBadge({ courseId, totalLessons }: { courseId: string; totalLessons: number }) {
  const pct = useCourseProgressPct(courseId, totalLessons);
  if (pct === 0) return <span className="text-xs text-[#64748B]">Not started</span>;
  if (pct === 100) return <span className="text-xs text-green-500 font-bold">✓ Complete</span>;
  return <span className="text-xs text-blue-400 font-semibold">{pct}% done</span>;
}

// ── Course Card ────────────────────────────────────────────────
interface CourseCardProps {
  id:         string;
  icon:       string;
  name:       string;
  color:      string;
  isUnlocked: boolean;
  plan:       string;
}

function CourseCard({ id, icon, name, color, isUnlocked, plan }: CourseCardProps) {
  const openUpgrade = useUIStore(s => s.openUpgradeModal);

  const TOTAL_LESSONS: Record<string, number> = {
    python: 54, javascript: 54, 'html-css': 54, java: 54,
  };
  const totalLessons = TOTAL_LESSONS[id] || 54;

  const DESCRIPTIONS: Record<string, string> = {
    python:     'The most beginner-friendly language. Build scripts, web apps, and AI tools.',
    javascript: 'The language of the web. Make websites interactive and dynamic.',
    'html-css': 'The foundation of every website. Structure and style the web.',
    java:       'Industry-standard language. Used in Android, enterprise, and backend.',
  };

  if (!isUnlocked) {
    return (
      <div
        onClick={openUpgrade}
        className="
          relative bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-5
          opacity-70 cursor-pointer
          hover:opacity-90 hover:border-yellow-500/40 transition-all duration-200
          group
        "
      >
        {/* Lock overlay */}
        <div className="absolute top-4 right-4 bg-yellow-950/80 border border-yellow-700/50 text-yellow-400 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5">
          🔒 {plan.charAt(0).toUpperCase() + plan.slice(1)} Plan
        </div>

        {/* Color bar */}
        <div className="h-1 rounded-full mb-4 w-16" style={{ background: color }} />

        <div className="text-3xl mb-3">{icon}</div>
        <h3 className="font-display font-bold text-lg mb-1">{name}</h3>
        <p className="text-sm text-[#64748B] leading-relaxed mb-4">
          {DESCRIPTIONS[id]}
        </p>

        <div className="text-xs text-yellow-400 font-semibold group-hover:underline">
          Upgrade to unlock →
        </div>
      </div>
    );
  }

  return (
    <Link
      href={`/courses/${id}`}
      className="
        relative bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-5
        hover:border-[#2A2A3C] hover:-translate-y-0.5
        transition-all duration-200 block group
      "
    >
      {/* Color bar */}
      <div className="h-1 rounded-full mb-4 w-16 transition-all duration-300 group-hover:w-full" style={{ background: color }} />

      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-display font-bold text-lg mb-1">{name}</h3>
      <p className="text-sm text-[#64748B] leading-relaxed mb-4">
        {DESCRIPTIONS[id]}
      </p>

      {/* Stats row */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-3 text-xs text-[#64748B]">
          <span>18 modules</span>
          <span>·</span>
          <span>{totalLessons} lessons</span>
        </div>
        <CourseProgressBadge courseId={id} totalLessons={totalLessons} />
      </div>

      {/* Progress bar */}
      <ProgressBar courseId={id} totalLessons={totalLessons} color={color} />

      <div className="mt-4 text-xs text-[#64748B] group-hover:text-green-500 transition-colors font-semibold">
        View modules →
      </div>
    </Link>
  );
}

function ProgressBar({ courseId, totalLessons, color }: { courseId: string; totalLessons: number; color: string }) {
  const pct = useCourseProgressPct(courseId, totalLessons);
  return (
    <div className="h-1.5 bg-[#1E1E2E] rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-700"
        style={{ width: `${pct}%`, background: color }}
      />
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────
export default function CoursesPage() {
  const courses = useAllCourses();
  const stats   = useDashboardStats();

  return (
    <AuthGuard>
      <div className="max-w-3xl mx-auto px-4 py-6">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-display font-bold mb-1">📚 Course Catalog</h1>
          <p className="text-sm text-[#64748B]">
            {stats.lessonsCompleted} lessons completed · Level {stats.level} {stats.levelName}
          </p>
        </div>

        {/* Course grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {courses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {/* Upgrade nudge */}
        <div className="mt-8 bg-gradient-to-r from-yellow-950/40 to-orange-950/30 border border-yellow-800/30 rounded-2xl p-5">
          <div className="font-display font-bold mb-1">🚀 Unlock All 4 Languages</div>
          <p className="text-sm text-[#64748B] mb-3">
            Get the Bundle plan for ₹5,399 and access Python, JavaScript, HTML/CSS, and Java — plus lifetime content updates.
          </p>
          <button className="px-4 py-2 bg-yellow-500 text-black text-sm font-bold rounded-xl hover:bg-yellow-400 transition-colors">
            View Plans
          </button>
        </div>

      </div>
    </AuthGuard>
  );
}
