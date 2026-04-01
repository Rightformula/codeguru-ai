'use client';
// src/app/courses/[courseId]/page.tsx
// ─────────────────────────────────────────────────────────────
// COURSE DETAIL PAGE — /courses/python
// Shows all modules and lessons for a given course.
// Lessons show locked/complete/available state.
// Clicking a lesson navigates to the lesson viewer.
// ─────────────────────────────────────────────────────────────

import { use }         from 'react';
import Link            from 'next/link';
import { useRouter }   from 'next/navigation';
import AuthGuard       from '@/components/auth/AuthGuard';
import { useCourse, useNextLesson } from '@/hooks/useCourse';
import type { EnrichedModule, EnrichedLesson } from '@/hooks/useCourse';

// ── Lesson Row ─────────────────────────────────────────────────
function LessonRow({
  lesson,
  courseId,
}: {
  lesson:   EnrichedLesson;
  courseId: string;
}) {
  if (lesson.isLocked) {
    return (
      <div className="flex items-center gap-3 px-4 py-3 opacity-50 cursor-not-allowed">
        {/* Lock icon */}
        <div className="w-8 h-8 rounded-full bg-[#1E1E2E] flex items-center justify-center flex-shrink-0 text-sm">
          🔒
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-[#64748B]">{lesson.title}</div>
          <div className="text-xs text-[#3A4560]">Complete previous lesson to unlock</div>
        </div>
        <div className="text-xs text-[#3A4560] flex-shrink-0">{lesson.duration}</div>
      </div>
    );
  }

  return (
    <Link
      href={`/courses/${courseId}/${lesson.id}`}
      className="
        flex items-center gap-3 px-4 py-3
        hover:bg-[#14141E] transition-colors duration-150
        group
      "
    >
      {/* Status indicator */}
      <div className={`
        w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold
        transition-all duration-200
        ${lesson.isComplete
          ? 'bg-green-500 text-black'
          : 'bg-[#1E1E2E] text-[#64748B] group-hover:bg-green-500/20 group-hover:text-green-500'
        }
      `}>
        {lesson.isComplete ? '✓' : lesson.order}
      </div>

      {/* Lesson info */}
      <div className="flex-1 min-w-0">
        <div className={`
          text-sm font-semibold truncate transition-colors
          ${lesson.isComplete ? 'text-[#64748B]' : 'text-[#E2E8F0] group-hover:text-green-400'}
        `}>
          {lesson.title}
        </div>
        <div className="text-xs text-[#3A4560]">{lesson.duration} · {lesson.xpReward} XP</div>
      </div>

      {/* Arrow */}
      <svg
        viewBox="0 0 24 24" width="14" height="14"
        fill="none" stroke="currentColor" strokeWidth="2"
        className="text-[#3A4560] group-hover:text-green-500 flex-shrink-0 transition-colors"
      >
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </Link>
  );
}

// ── Module Card ────────────────────────────────────────────────
function ModuleCard({
  module,
  courseId,
  isFirst,
}: {
  module:   EnrichedModule;
  courseId: string;
  isFirst:  boolean;
}) {
  return (
    <div className={`
      bg-[#12121A] border rounded-2xl overflow-hidden
      ${module.isLocked ? 'border-[#1A1A28] opacity-60' : 'border-[#1E1E2E]'}
    `}>
      {/* Module header */}
      <div className="px-4 pt-4 pb-3 border-b border-[#1E1E2E]">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xl">{module.icon}</span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#64748B] uppercase tracking-widest">
                  Module {module.order}
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded-full font-semibold capitalize
                  bg-[#1E1E2E] text-[#64748B]">
                  {module.level}
                </span>
              </div>
              <h3 className="font-display font-bold text-base">{module.title}</h3>
            </div>
          </div>

          {/* Progress or lock */}
          {module.isLocked ? (
            <div className="text-[#3A4560] text-lg">🔒</div>
          ) : (
            <div className="text-right">
              <div className="text-sm font-bold text-green-500">
                {module.completedCount}/{module.lessons.length}
              </div>
              <div className="text-xs text-[#64748B]">done</div>
            </div>
          )}
        </div>

        {/* Module progress bar */}
        {!module.isLocked && (
          <div className="h-1 bg-[#1E1E2E] rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full transition-all duration-700"
              style={{ width: `${module.progressPercent}%` }}
            />
          </div>
        )}

        <p className="text-xs text-[#64748B] mt-2">{module.description}</p>
      </div>

      {/* Lessons list */}
      <div className="divide-y divide-[#1A1A28]">
        {module.lessons.map(lesson => (
          <LessonRow key={lesson.id} lesson={lesson} courseId={courseId} />
        ))}
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────
interface CourseDetailPageProps {
  params: Promise<{ courseId: string }>;
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { courseId } = use(params);
  const course       = useCourse(courseId);
  const nextLesson   = useNextLesson(courseId);
  const router       = useRouter();

  if (!course) {
    return (
      <AuthGuard>
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-4">
          <div className="text-5xl">🔍</div>
          <h2 className="font-display font-bold text-xl">Course not found</h2>
          <p className="text-[#64748B] text-sm text-center">
            This course doesn't exist yet. Check back soon!
          </p>
          <button
            onClick={() => router.push('/courses')}
            className="px-4 py-2 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition-colors text-sm"
          >
            ← Back to Courses
          </button>
        </div>
      </AuthGuard>
    );
  }

  if (!course.isUnlocked) {
    return (
      <AuthGuard>
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-4 text-center">
          <div className="text-5xl">🔒</div>
          <h2 className="font-display font-bold text-xl">{course.title} is locked</h2>
          <p className="text-[#64748B] text-sm">Upgrade your plan to access this course.</p>
          <button className="px-5 py-2.5 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-400 transition-colors">
            View Plans
          </button>
        </div>
      </AuthGuard>
    );
  }

  return (
    <AuthGuard>
      <div className="max-w-2xl mx-auto px-4 py-6">

        {/* Back */}
        <Link href="/courses" className="inline-flex items-center gap-1 text-sm text-[#64748B] hover:text-[#E2E8F0] mb-4 transition-colors">
          <svg viewBox="0 0 24 24" width="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M5 12l7 7M5 12l7-7"/></svg>
          All Courses
        </Link>

        {/* Course header */}
        <div className="bg-[#12121A] border border-[#1E1E2E] rounded-2xl p-5 mb-6">
          <div className="flex items-start gap-4">
            <div className="text-4xl">{course.icon}</div>
            <div className="flex-1">
              <h1 className="font-display font-bold text-xl mb-1">{course.title}</h1>
              <p className="text-sm text-[#64748B] mb-3">{course.description}</p>
              <div className="flex gap-3 text-xs text-[#64748B] mb-3">
                <span>⏱ {course.estimatedHours}h estimated</span>
                <span>·</span>
                <span>📗 {course.totalLessons} lessons</span>
                <span>·</span>
                <span>🏆 {course.totalModules} modules</span>
              </div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-[#64748B]">{course.progressPercent}% complete</span>
                <span className="text-xs text-green-500 font-semibold">
                  {course.modules.reduce((acc, m) => acc + m.completedCount, 0)}/{course.totalLessons} lessons
                </span>
              </div>
              <div className="h-2 bg-[#1E1E2E] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width:      `${course.progressPercent}%`,
                    background: course.color,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Continue button */}
        {nextLesson && (
          <Link
            href={`/courses/${courseId}/${nextLesson.id}`}
            className="
              flex items-center gap-3 mb-6
              bg-gradient-to-r from-green-950/60 to-blue-950/40
              border border-green-800/40 rounded-2xl p-4
              hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200
              group
            "
          >
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black flex-shrink-0">
              ▶
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold text-green-400 mb-0.5">Continue Learning</div>
              <div className="font-semibold text-sm">{nextLesson.title}</div>
              <div className="text-xs text-[#64748B]">{nextLesson.duration} · {nextLesson.xpReward} XP</div>
            </div>
            <svg viewBox="0 0 24 24" width="16" fill="none" stroke="#22c55e" strokeWidth="2.5" className="flex-shrink-0 group-hover:translate-x-1 transition-transform">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </Link>
        )}

        {/* Modules */}
        <div className="flex flex-col gap-4">
          {course.modules.map((module, idx) => (
            <ModuleCard
              key={module.id}
              module={module}
              courseId={courseId}
              isFirst={idx === 0}
            />
          ))}
        </div>

      </div>
    </AuthGuard>
  );
}
