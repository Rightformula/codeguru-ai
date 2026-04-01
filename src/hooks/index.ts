// src/hooks/index.ts
// ─────────────────────────────────────────────────────────────
// BARREL FILE — re-exports all hooks for clean imports.
//
// Instead of:
//   import { useAuthActions } from '@/hooks/useAuth';
//   import { useDashboardStats } from '@/hooks/useProgress';
//   import { useAIChat } from '@/hooks/useAI';
//
// Components can do:
//   import { useAuthActions, useDashboardStats, useAIChat } from '@/hooks';
// ─────────────────────────────────────────────────────────────

// Auth
export {
  useAuthActions,
  useCurrentUser,
} from './useAuth';

// Course data
export {
  useAllCourses,
  useCourse,
  useLessonData,
  useNextLesson,
  useLessonNavigation,
} from './useCourse';

// Lesson viewer
export {
  useLesson,
} from './useLesson';
export type { QuizState, OutputLine } from './useLesson';
export type { EnrichedLesson, EnrichedModule, EnrichedCourse } from './useCourse';

// Progress & gamification
export {
  useProgressStats,
  useDashboardStats,
  useCourseBadges,
  useIsLessonDone,
  getLevelName,
  getStreakMessage,
} from './useProgress';

// AI features
export {
  useAIChat,
  useAIExplain,
  useAIDebug,
  useAIQuizExplain,
} from './useAI';
