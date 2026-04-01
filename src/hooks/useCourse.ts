// src/hooks/useCourse.ts
// ─────────────────────────────────────────────────────────────
// useCourse HOOK
//
// This hook is the single source of truth for course data.
// Components never import course data directly — they use this hook.
//
// What it does:
//   1. Loads the correct course data from /src/data/courses/
//   2. Merges with user's progress to mark lessons complete/locked
//   3. Computes progress percentages per module and course
//   4. Determines which modules/lessons are locked by plan
//   5. Finds the "next lesson" to show on the dashboard
//
// Why a hook instead of direct import?
//   Because the component also needs progress data, and
//   computing "is lesson X locked?" requires both course data
//   AND the user's plan AND their completed lessons.
//   All three are in different places — this hook combines them.
// ─────────────────────────────────────────────────────────────

'use client';

import { useMemo }              from 'react';
import { useCompletedLessons, useCourseProgressPct } from '@/store/progressStore';
import { useCurrentUser }       from '@/components/auth/AuthProvider';
import { COURSES }              from '@/data/courses/index';
import type { Course, Module, Lesson } from '@/types/course';

// ── Course Registry ───────────────────────────────────────────
// Assembled courses — all 6 modules per language, all 4 languages
const COURSE_REGISTRY: Record<string, Course> = COURSES;

// ── Plan unlock rules ─────────────────────────────────────────
// Which plan unlocks which course
const PLAN_UNLOCK: Record<string, string[]> = {
  free:    ['python'],                                  // Free = Python only
  starter: ['python'],                                  // Starter = 1 language
  pro:     ['python', 'javascript'],                    // Pro = 2 languages
  multi:   ['python', 'javascript', 'html-css'],        // Multi = 3 languages
  bundle:  ['python', 'javascript', 'html-css', 'java'],// Bundle = all 4
};

// ── Enriched types (course data + progress merged) ────────────
export interface EnrichedLesson extends Lesson {
  isComplete: boolean;
  isLocked:   boolean; // locked by module sequence
}

export interface EnrichedModule extends Omit<Module, 'lessons'> {
  lessons:          EnrichedLesson[];
  completedCount:   number;
  progressPercent:  number;
  isLocked:         boolean; // locked until prev module complete
}

export interface EnrichedCourse extends Omit<Course, 'modules'> {
  modules:          EnrichedModule[];
  progressPercent:  number;
  isUnlocked:       boolean; // unlocked by user's plan
  nextLesson:       EnrichedLesson | null;
}

// ── Hook: useAllCourses ────────────────────────────────────────
// Returns all 4 courses with basic plan-lock info.
// Used on the dashboard course list.
export function useAllCourses() {
  const { profile } = useCurrentUser();
  const plan = profile?.plan || 'free';

  return useMemo(() => {
    const unlockedIds = PLAN_UNLOCK[plan] || PLAN_UNLOCK.free;

    return [
      { id: 'python',     icon: '🐍', name: 'Python',      color: '#3776AB', isUnlocked: unlockedIds.includes('python'),     plan: 'free'   },
      { id: 'javascript', icon: '⚡', name: 'JavaScript',  color: '#F7DF1E', isUnlocked: unlockedIds.includes('javascript'),  plan: 'pro'    },
      { id: 'html-css',   icon: '🌐', name: 'HTML / CSS',  color: '#E34F26', isUnlocked: unlockedIds.includes('html-css'),    plan: 'multi'  },
      { id: 'java',       icon: '☕', name: 'Java',         color: '#007396', isUnlocked: unlockedIds.includes('java'),         plan: 'bundle' },
    ];
  }, [plan]);
}

// ── Hook: useCourse ────────────────────────────────────────────
// Returns a single fully-enriched course.
// Used on the course detail page and lesson viewer.
export function useCourse(courseId: string): EnrichedCourse | null {
  const { profile }         = useCurrentUser();
  const completedLessons    = useCompletedLessons();
  const plan                = profile?.plan || 'free';

  return useMemo(() => {
    const raw = COURSE_REGISTRY[courseId];
    if (!raw) return null;

    const unlockedIds    = PLAN_UNLOCK[plan] || PLAN_UNLOCK.free;
    const isCourseUnlocked = unlockedIds.includes(courseId);

    let nextLesson: EnrichedLesson | null = null;
    let totalCompleted = 0;

    // Enrich each module
    const enrichedModules: EnrichedModule[] = raw.modules.map((module, mIdx) => {
      // A module is locked if:
      //   - The course is locked by plan, OR
      //   - It's not module 1 AND the previous module isn't 100% complete
      const prevModule    = mIdx > 0 ? raw.modules[mIdx - 1] : null;
      const prevComplete  = prevModule
        ? prevModule.lessons.every(l => completedLessons.includes(l.id))
        : true;
      const isModuleLocked = !isCourseUnlocked || (mIdx > 0 && !prevComplete);

      // Enrich each lesson within the module
      const enrichedLessons: EnrichedLesson[] = module.lessons.map((lesson, lIdx) => {
        const isComplete = completedLessons.includes(lesson.id);

        // A lesson is locked if:
        //   - Its module is locked, OR
        //   - It's not lesson 1 in the module AND the previous lesson isn't done
        const prevLesson    = lIdx > 0 ? module.lessons[lIdx - 1] : null;
        const prevLessonDone = prevLesson ? completedLessons.includes(prevLesson.id) : true;
        const isLessonLocked = isModuleLocked || (lIdx > 0 && !prevLessonDone);

        if (isComplete) totalCompleted++;

        // nextLesson = first incomplete, unlocked lesson
        if (!isComplete && !isLessonLocked && !nextLesson) {
          nextLesson = { ...lesson, isComplete: false, isLocked: false };
        }

        return { ...lesson, isComplete, isLocked: isLessonLocked };
      });

      const completedInModule = enrichedLessons.filter(l => l.isComplete).length;
      const progressPct       = module.lessons.length > 0
        ? Math.round((completedInModule / module.lessons.length) * 100)
        : 0;

      return {
        ...module,
        lessons:         enrichedLessons,
        completedCount:  completedInModule,
        progressPercent: progressPct,
        isLocked:        isModuleLocked,
      };
    });

    const totalLessons      = raw.totalLessons;
    const courseProgressPct = totalLessons > 0
      ? Math.round((totalCompleted / totalLessons) * 100)
      : 0;

    return {
      ...raw,
      modules:         enrichedModules,
      progressPercent: courseProgressPct,
      isUnlocked:      isCourseUnlocked,
      nextLesson,
    };
  }, [courseId, plan, completedLessons]);
}

// ── Hook: useLesson ────────────────────────────────────────────
// Returns a single enriched lesson by ID.
// Used in the lesson viewer page.
export function useLessonData(courseId: string, lessonId: string): EnrichedLesson | null {
  const course = useCourse(courseId);

  return useMemo(() => {
    if (!course) return null;
    for (const module of course.modules) {
      const lesson = module.lessons.find(l => l.id === lessonId);
      if (lesson) return lesson;
    }
    return null;
  }, [course, lessonId]);
}

// ── Hook: useNextLesson ────────────────────────────────────────
// Returns the next incomplete lesson for a course.
// Used by the "Continue" button on the dashboard.
export function useNextLesson(courseId: string): EnrichedLesson | null {
  const course = useCourse(courseId);
  return course?.nextLesson ?? null;
}

// ── Hook: useLessonNavigation ──────────────────────────────────
// Returns prev/next lesson IDs for the prev/next buttons
// in the lesson viewer header.
export function useLessonNavigation(courseId: string, lessonId: string) {
  const course = useCourse(courseId);

  return useMemo(() => {
    if (!course) return { prev: null, next: null };

    // Flatten all lessons across all modules in order
    const allLessons = course.modules.flatMap(m => m.lessons);
    const currentIdx = allLessons.findIndex(l => l.id === lessonId);

    if (currentIdx === -1) return { prev: null, next: null };

    const prevLesson = currentIdx > 0 ? allLessons[currentIdx - 1] : null;
    const nextLesson = currentIdx < allLessons.length - 1 ? allLessons[currentIdx + 1] : null;

    return {
      prev: prevLesson?.isLocked ? null : prevLesson,
      next: nextLesson?.isLocked ? null : nextLesson,
    };
  }, [course, lessonId]);
}
