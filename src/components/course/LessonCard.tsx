'use client';
// src/components/course/LessonCard.tsx
// ─────────────────────────────────────────────────────────────
// LESSON CARD
//
// Displays a single lesson in the module lesson list.
// Three visual states:
//
//  complete  → green checkmark, muted text, still clickable
//  available → numbered circle, full text, clickable, hover effect
//  locked    → lock icon, muted text, NOT clickable
//
// Also exports ModuleHeader for the module section header.
// ─────────────────────────────────────────────────────────────

import Link                   from 'next/link';
import { clsx }               from 'clsx';
import { Badge }              from '@/components/ui/Badge';
import { ProgressBar }        from '@/components/ui/ProgressBar';
import type { EnrichedLesson, EnrichedModule } from '@/hooks/useCourse';

// ── Lesson Card ───────────────────────────────────────────────
interface LessonCardProps {
  lesson:   EnrichedLesson;
  courseId: string;
}

export function LessonCard({ lesson, courseId }: LessonCardProps) {
  // ── Locked state ──────────────────────────────────────────
  if (lesson.isLocked) {
    return (
      <div className="flex items-center gap-3 px-4 py-3 opacity-40 select-none">
        {/* Lock circle */}
        <div className="w-8 h-8 rounded-full bg-[#1E1E2E] flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" width="14" fill="none" stroke="#64748B" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0110 0v4"/>
          </svg>
        </div>

        <div className="flex-1 min-w-0">
          <div className="text-sm text-[#64748B] truncate">{lesson.title}</div>
          <div className="text-xs text-[#3A4560]">Complete previous lesson first</div>
        </div>

        <div className="text-xs text-[#3A4560] flex-shrink-0 tabular-nums">{lesson.duration}</div>
      </div>
    );
  }

  // ── Available / Complete state ─────────────────────────────
  return (
    <Link
      href={`/courses/${courseId}/${lesson.id}`}
      className={clsx(
        'flex items-center gap-3 px-4 py-3 transition-all duration-150 group',
        'hover:bg-[#14141E]',
        lesson.isComplete && 'opacity-75',
      )}
    >
      {/* Status circle */}
      <div className={clsx(
        'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0',
        'text-sm font-bold transition-all duration-200',
        lesson.isComplete
          ? 'bg-green-500 text-black'
          : 'bg-[#1E1E2E] text-[#64748B] group-hover:bg-green-500/20 group-hover:text-green-400',
      )}>
        {lesson.isComplete ? '✓' : lesson.order}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className={clsx(
          'text-sm font-medium truncate transition-colors',
          lesson.isComplete
            ? 'text-[#64748B]'
            : 'text-[#E2E8F0] group-hover:text-green-400',
        )}>
          {lesson.title}
        </div>
        <div className="text-xs text-[#3A4560] flex items-center gap-1.5 mt-0.5">
          <span>{lesson.duration}</span>
          <span>·</span>
          <span className="text-yellow-600">{lesson.xpReward} XP</span>
        </div>
      </div>

      {/* Chevron */}
      <svg
        viewBox="0 0 24 24" width="13" fill="none" stroke="currentColor" strokeWidth="2"
        className={clsx(
          'flex-shrink-0 transition-colors',
          lesson.isComplete
            ? 'text-[#3A4560]'
            : 'text-[#3A4560] group-hover:text-green-500',
        )}
      >
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </Link>
  );
}

// ── Module Header ─────────────────────────────────────────────
// The collapsible header shown above each module's lesson list
interface ModuleHeaderProps {
  module:       EnrichedModule;
  isExpanded?:  boolean;
  onToggle?:    () => void;
}

const LEVEL_COLORS: Record<string, string> = {
  beginner:     'text-green-400 bg-green-950/60 border-green-800/40',
  intermediate: 'text-blue-400 bg-blue-950/60 border-blue-800/40',
  advanced:     'text-purple-400 bg-purple-950/60 border-purple-700/40',
};

export function ModuleHeader({ module, isExpanded = true, onToggle }: ModuleHeaderProps) {
  const levelStyle = LEVEL_COLORS[module.level] || LEVEL_COLORS.beginner;

  return (
    <button
      onClick={onToggle}
      className={clsx(
        'w-full px-4 pt-4 pb-3 text-left',
        'border-b border-[#1E1E2E]',
        onToggle ? 'cursor-pointer hover:bg-[#14141E] transition-colors' : 'cursor-default',
      )}
    >
      <div className="flex items-center justify-between gap-3 mb-2">
        {/* Left: icon + title */}
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-xl flex-shrink-0">{module.icon}</span>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">
                Module {module.order}
              </span>
              <span className={clsx(
                'text-[10px] px-1.5 py-0.5 rounded-full font-semibold border capitalize',
                levelStyle,
              )}>
                {module.level}
              </span>
            </div>
            <h3 className="font-display font-bold text-sm leading-tight truncate">
              {module.title}
            </h3>
          </div>
        </div>

        {/* Right: progress count + chevron */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {module.isLocked ? (
            <svg viewBox="0 0 24 24" width="16" fill="none" stroke="#64748B" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2"/>
              <path d="M7 11V7a5 5 0 0110 0v4"/>
            </svg>
          ) : (
            <span className="text-xs font-bold text-green-500 tabular-nums">
              {module.completedCount}/{module.lessons.length}
            </span>
          )}

          {onToggle && (
            <svg
              viewBox="0 0 24 24" width="14" fill="none" stroke="#64748B" strokeWidth="2"
              className={clsx('transition-transform duration-200', isExpanded ? 'rotate-180' : '')}
            >
              <path d="M6 9l6 6 6-6"/>
            </svg>
          )}
        </div>
      </div>

      {/* Progress bar (only when not locked) */}
      {!module.isLocked && (
        <ProgressBar value={module.progressPercent} height="xs" animated />
      )}
    </button>
  );
}

// ── Module Card ───────────────────────────────────────────────
// Complete collapsible module section (header + lesson list)
interface ModuleCardProps {
  module:      EnrichedModule;
  courseId:    string;
  defaultOpen?: boolean;
}

export function ModuleCard({ module, courseId, defaultOpen = false }: ModuleCardProps) {
  // We use defaultOpen but don't track toggle state here —
  // the parent page manages open/closed state for performance
  return (
    <div className={clsx(
      'bg-[#12121A] border rounded-2xl overflow-hidden',
      module.isLocked ? 'border-[#1A1A28] opacity-60' : 'border-[#1E1E2E]',
    )}>
      <ModuleHeader module={module} isExpanded />

      {/* Lesson list */}
      {!module.isLocked && (
        <div className="divide-y divide-[#1A1A28]">
          {module.lessons.map(lesson => (
            <LessonCard key={lesson.id} lesson={lesson} courseId={courseId} />
          ))}
        </div>
      )}

      {/* Locked placeholder */}
      {module.isLocked && (
        <div className="px-4 py-3 text-sm text-[#3A4560]">
          Complete Module {module.order - 1} to unlock this module.
        </div>
      )}
    </div>
  );
}
