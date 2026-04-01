// src/store/progressStore.ts
// ─────────────────────────────────────────────────────────────
// PROGRESS STORE — the heart of CodeGuru's gamification system.
//
// This store manages:
//   - XP (experience points) — earned by completing lessons and quizzes
//   - Levels — calculated from XP (every 100 XP = 1 level)
//   - Streaks — consecutive daily learning days
//   - Completed lessons — which lesson IDs are done
//   - Badges — unlocked achievements
//   - Activity log — history shown on the Progress screen
//   - Per-course progress — % complete per language
//
// DATA FLOW:
//   1. User completes lesson → completeLesson() called
//   2. XP added → level recalculated → badges checked
//   3. Firestore synced in background (non-blocking)
//   4. UI instantly updates via Zustand (no loading spinner needed)
//
// This is the "optimistic update" pattern:
//   Update UI immediately → sync to DB in background
// ─────────────────────────────────────────────────────────────

import { create }           from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { markLessonComplete, updateStreak, saveQuizResult } from '@/lib/firestore';

// ── Types ─────────────────────────────────────────────────────

export interface Badge {
  id:         string;
  name:       string;
  icon:       string;
  description: string;
  unlockedAt: number; // timestamp
}

export interface ActivityEntry {
  id:        string;
  type:      'lesson' | 'quiz' | 'badge' | 'streak';
  title:     string;
  subtitle:  string;
  xpEarned:  number;
  timestamp: number;
}

export interface CourseProgress {
  courseId:         string;
  completedLessons: string[]; // lesson IDs
  totalLessons:     number;
  lastLessonId:     string | null;
}

// ── Badge Definitions ──────────────────────────────────────────
// All possible badges in the system.
// `condition` is checked after every lesson/quiz completion.
export const ALL_BADGES = [
  { id: 'first_lesson',    name: 'First Step',         icon: '👶', description: 'Completed your first lesson'       },
  { id: 'five_lessons',    name: 'Getting Started',    icon: '📗', description: 'Completed 5 lessons'               },
  { id: 'ten_lessons',     name: 'Committed Learner',  icon: '📚', description: 'Completed 10 lessons'              },
  { id: 'streak_3',        name: 'On a Roll',          icon: '🔥', description: '3-day streak'                      },
  { id: 'streak_7',        name: 'Week Warrior',       icon: '⚡', description: '7-day streak'                      },
  { id: 'streak_30',       name: 'Month Master',       icon: '🏆', description: '30-day streak'                     },
  { id: 'xp_100',          name: 'XP Collector',       icon: '⭐', description: 'Earned 100 XP'                     },
  { id: 'xp_500',          name: 'XP Champion',        icon: '💫', description: 'Earned 500 XP'                     },
  { id: 'xp_1000',         name: 'XP Legend',          icon: '🌟', description: 'Earned 1000 XP'                    },
  { id: 'perfect_quiz',    name: 'Quiz Perfect',       icon: '💯', description: 'Got 100% on a quiz'                },
  { id: 'first_module',    name: 'Module Master',      icon: '🎯', description: 'Completed your first module'       },
  { id: 'code_runner',     name: 'Code Runner',        icon: '🚀', description: 'Ran code 10 times in playground'   },
  { id: 'python_begin',    name: 'Python Beginner',    icon: '🐍', description: 'Completed Python Beginner level'   },
  { id: 'js_begin',        name: 'JS Starter',         icon: '⚡', description: 'Completed JavaScript Beginner level'},
  { id: 'night_owl',       name: 'Night Owl',          icon: '🦉', description: 'Studied after midnight'            },
  { id: 'early_bird',      name: 'Early Bird',         icon: '🐦', description: 'Studied before 7am'               },
] as const;

// ── XP → Level Formula ────────────────────────────────────────
// Level 1:    0–99 XP
// Level 2:  100–199 XP
// Level n:  (n-1)*100 → n*100-1 XP
export function xpToLevel(xp: number): number {
  return Math.floor(xp / 100) + 1;
}

// XP needed for the NEXT level boundary
export function xpForNextLevel(xp: number): number {
  const level = xpToLevel(xp);
  return level * 100;
}

// XP within current level (0–99)
export function xpInCurrentLevel(xp: number): number {
  return xp % 100;
}

// ── State Shape ───────────────────────────────────────────────
interface ProgressState {
  // ── Core XP & Level ─────────────────────────────────────
  xp:              number;
  level:           number;

  // ── Streaks ──────────────────────────────────────────────
  streak:          number;
  lastStudiedDate: string | null; // ISO date string 'YYYY-MM-DD'

  // ── Completion Tracking ──────────────────────────────────
  completedLessons: string[];           // All completed lesson IDs across all courses
  courseProgress:   Record<string, CourseProgress>; // Per-course progress map

  // ── Quiz Results (for weak topic detection) ─────────────
  quizResults: {
    lessonId: string; courseId: string; score: number;
    total: number; percentage: number; completedAt: number; attempts: number;
  }[];

  // ── Badges ───────────────────────────────────────────────
  unlockedBadges:  Badge[];

  // ── Code Execution Count ──────────────────────────────────
  codeRunCount:    number;

  // ── Activity Log ─────────────────────────────────────────
  activityLog:     ActivityEntry[];

  // ── Newly unlocked (for animation/popup) ─────────────────
  newBadge:        Badge | null;    // Cleared after showing popup
  lastXpGain:      number;          // For the "+10 XP" popup animation

  // ── Sync state ───────────────────────────────────────────
  isSyncing:       boolean;         // True while writing to Firestore

  // ── Actions ──────────────────────────────────────────────
  completeLesson:  (lessonId: string, courseId: string, xpReward: number, uid: string) => Promise<void>;
  recordQuizScore: (lessonId: string, score: number, total: number, uid: string) => Promise<void>;
  incrementCodeRun: () => void;
  clearNewBadge:   () => void;
  hydrateFromFirestore: (data: Partial<ProgressState>) => void;
  resetProgress:   () => void; // Dev/testing only
}

// ── Store ─────────────────────────────────────────────────────
export const useProgressStore = create<ProgressState>()(
  devtools(
    persist(
      (set, get) => ({
        // ── Initial Values ─────────────────────────────────
        xp:               0,
        level:            1,
        streak:           0,
        lastStudiedDate:  null,
        completedLessons: [],
        courseProgress:   {},
        quizResults:      [],
        unlockedBadges:   [],
        codeRunCount:     0,
        activityLog:      [],
        newBadge:         null,
        lastXpGain:       0,
        isSyncing:        false,

        // ── completeLesson ─────────────────────────────────
        // The most important action in the entire app.
        // Called when a user finishes the quiz at the end of a lesson.
        completeLesson: async (lessonId, courseId, xpReward, uid) => {
          const state = get();

          // Idempotency: don't count the same lesson twice
          if (state.completedLessons.includes(lessonId)) return;

          // ── 1. Calculate new XP and level ─────────────────
          const newXp    = state.xp + xpReward;
          const newLevel = xpToLevel(newXp);
          const levelUp  = newLevel > state.level;

          // ── 2. Update streak ──────────────────────────────
          const today        = new Date().toISOString().split('T')[0]; // 'YYYY-MM-DD'
          const lastStudied  = state.lastStudiedDate;
          const yesterday    = new Date(Date.now() - 86400000).toISOString().split('T')[0];

          let newStreak = state.streak;
          if (lastStudied === today) {
            // Already studied today — streak unchanged
            newStreak = state.streak;
          } else if (lastStudied === yesterday) {
            // Studied yesterday — increment streak
            newStreak = state.streak + 1;
          } else {
            // Gap > 1 day — reset streak to 1
            newStreak = 1;
          }

          // ── 3. Update course progress map ─────────────────
          const existing = state.courseProgress[courseId] || {
            courseId,
            completedLessons: [],
            totalLessons:     54, // default — will be updated from course data
            lastLessonId:     null,
          };

          const updatedCourseProgress: CourseProgress = {
            ...existing,
            completedLessons: [...existing.completedLessons, lessonId],
            lastLessonId:     lessonId,
          };

          // ── 4. Add to activity log ─────────────────────────
          const newEntry: ActivityEntry = {
            id:        `${lessonId}-${Date.now()}`,
            type:      'lesson',
            title:     'Lesson Completed',
            subtitle:  lessonId,          // Will be replaced with real title in component
            xpEarned:  xpReward,
            timestamp: Date.now(),
          };

          // ── 5. Check badge conditions ──────────────────────
          const newCompletedCount = state.completedLessons.length + 1;
          let newBadge: Badge | null = null;
          const alreadyUnlocked = (id: string) =>
            state.unlockedBadges.some(b => b.id === id);

          const badgesToCheck = [
            { id: 'first_lesson',  condition: newCompletedCount >= 1  },
            { id: 'five_lessons',  condition: newCompletedCount >= 5  },
            { id: 'ten_lessons',   condition: newCompletedCount >= 10 },
            { id: 'streak_3',      condition: newStreak >= 3          },
            { id: 'streak_7',      condition: newStreak >= 7          },
            { id: 'streak_30',     condition: newStreak >= 30         },
            { id: 'xp_100',        condition: newXp >= 100            },
            { id: 'xp_500',        condition: newXp >= 500            },
            { id: 'xp_1000',       condition: newXp >= 1000           },
            // Night owl / early bird
            {
              id:        'night_owl',
              condition: new Date().getHours() >= 0 && new Date().getHours() < 4,
            },
            {
              id:        'early_bird',
              condition: new Date().getHours() >= 5 && new Date().getHours() < 7,
            },
          ];

          const newlyUnlocked: Badge[] = [];

          for (const check of badgesToCheck) {
            if (check.condition && !alreadyUnlocked(check.id)) {
              const def = ALL_BADGES.find(b => b.id === check.id);
              if (def) {
                const badge: Badge = { ...def, unlockedAt: Date.now() };
                newlyUnlocked.push(badge);
                // Show popup for first badge only (others silently unlock)
                if (!newBadge) newBadge = badge;
              }
            }
          }

          // ── 6. Update store (optimistic) ───────────────────
          set({
            xp:               newXp,
            level:            newLevel,
            streak:           newStreak,
            lastStudiedDate:  today,
            completedLessons: [...state.completedLessons, lessonId],
            courseProgress:   { ...state.courseProgress, [courseId]: updatedCourseProgress },
            unlockedBadges:   [...state.unlockedBadges, ...newlyUnlocked],
            activityLog:      [newEntry, ...state.activityLog].slice(0, 50), // keep last 50
            newBadge,
            lastXpGain:       xpReward,
          }, false, 'progress/completeLesson');

          // ── 7. Sync to Firestore (background, non-blocking) ─
          set({ isSyncing: true }, false, 'progress/syncStart');
          try {
            await markLessonComplete(uid, courseId, lessonId, xpReward);
            await updateStreak(uid);
          } catch (err) {
            console.error('Firestore sync error:', err);
            // Don't revert UI — local state is source of truth
            // Will sync on next successful operation
          } finally {
            set({ isSyncing: false }, false, 'progress/syncEnd');
          }
        },

        // ── recordQuizScore ────────────────────────────────
        // Called when user completes a quiz (whether or not it's perfect).
        recordQuizScore: async (lessonId, score, total, uid) => {
          // Track quiz result for weak topic detection
          const pct = total > 0 ? Math.round((score / total) * 100) : 0;
          const existingIdx = get().quizResults.findIndex(r => r.lessonId === lessonId);
          const courseId = lessonId.split('-')[0] + '-' + lessonId.split('-')[1]; // e.g. py-m1
          if (existingIdx >= 0) {
            // Update existing result — increment attempts
            const updated = [...get().quizResults];
            updated[existingIdx] = { ...updated[existingIdx], score, total, percentage: pct, completedAt: Date.now(), attempts: (updated[existingIdx].attempts || 1) + 1 };
            set({ quizResults: updated }, false, 'progress/updateQuizResult');
          } else {
            set({ quizResults: [...get().quizResults, { lessonId, courseId, score, total, percentage: pct, completedAt: Date.now(), attempts: 1 }] }, false, 'progress/addQuizResult');
          }

          // Check for perfect quiz badge
          const state = get();
          const alreadyHas = state.unlockedBadges.some(b => b.id === 'perfect_quiz');
          if (pct === 100 && !alreadyHas) {
            const def = ALL_BADGES.find(b => b.id === 'perfect_quiz')!;
            const badge: Badge = { ...def, unlockedAt: Date.now() };
            set({
              unlockedBadges: [...state.unlockedBadges, badge],
              newBadge:       badge,
            }, false, 'progress/perfectQuiz');
          }

          // Add quiz to activity log
          const entry: ActivityEntry = {
            id:        `quiz-${lessonId}-${Date.now()}`,
            type:      'quiz',
            title:     `Quiz: ${pct}%`,
            subtitle:  `${score}/${total} correct`,
            xpEarned:  0,
            timestamp: Date.now(),
          };
          set(
            s => ({ activityLog: [entry, ...s.activityLog].slice(0, 50) }),
            false,
            'progress/recordQuiz'
          );

          // Sync to Firestore
          try {
            await saveQuizResult(uid, lessonId, score, total);
          } catch (err) {
            console.error('Quiz sync error:', err);
          }
        },

        // ── incrementCodeRun ───────────────────────────────
        // Called every time user runs code in playground or exercise.
        // Unlocks 'code_runner' badge at 10 runs.
        incrementCodeRun: () => {
          const state    = get();
          const newCount = state.codeRunCount + 1;

          const updates: Partial<ProgressState> = { codeRunCount: newCount };

          if (newCount === 10 && !state.unlockedBadges.some(b => b.id === 'code_runner')) {
            const def    = ALL_BADGES.find(b => b.id === 'code_runner')!;
            const badge: Badge = { ...def, unlockedAt: Date.now() };
            updates.unlockedBadges = [...state.unlockedBadges, badge];
            updates.newBadge       = badge;
          }

          set(updates, false, 'progress/codeRun');
        },

        // ── clearNewBadge ──────────────────────────────────
        // Called after the badge popup animation finishes.
        clearNewBadge: () => set(
          { newBadge: null },
          false,
          'progress/clearBadge'
        ),

        // ── hydrateFromFirestore ───────────────────────────
        // Called on login to load server state into the store.
        // Merges server data, taking max values so local progress
        // is never LOST if Firestore sync was behind.
        hydrateFromFirestore: (data) => {
          const state = get();
          set({
            xp:               Math.max(state.xp, data.xp ?? 0),
            level:            Math.max(state.level, data.level ?? 1),
            streak:           Math.max(state.streak, data.streak ?? 0),
            completedLessons: Array.from(new Set([
              ...state.completedLessons,
              ...(data.completedLessons ?? []),
            ])),
          }, false, 'progress/hydrate');
        },

        // ── resetProgress (DEV ONLY) ───────────────────────
        resetProgress: () => set({
          xp:               0,
          level:            1,
          streak:           0,
          lastStudiedDate:  null,
          completedLessons: [],
          courseProgress:   {},
          unlockedBadges:   [],
          codeRunCount:     0,
          activityLog:      [],
          newBadge:         null,
          lastXpGain:       0,
        }, false, 'progress/reset'),
      }),

      {
        // ── Persist Config ─────────────────────────────────
        // All progress is persisted to localStorage.
        // This means offline support + instant load on refresh.
        name: 'codeguru-progress',
        partialize: (state) => ({
          xp:               state.xp,
          level:            state.level,
          streak:           state.streak,
          lastStudiedDate:  state.lastStudiedDate,
          completedLessons: state.completedLessons,
          courseProgress:   state.courseProgress,
          unlockedBadges:   state.unlockedBadges,
          codeRunCount:     state.codeRunCount,
          activityLog:      state.activityLog,
        }),
      }
    ),
    { name: 'ProgressStore' }
  )
);

// ── Selector Hooks ────────────────────────────────────────────
// Clean, memoized selectors — components subscribe only to what they need.

export const useXP           = () => useProgressStore(s => s.xp);
export const useLevel        = () => useProgressStore(s => s.level);
export const useStreak       = () => useProgressStore(s => s.streak);
export const useCompletedLessons = () => useProgressStore(s => s.completedLessons);
export const useUnlockedBadges   = () => useProgressStore(s => s.unlockedBadges);
export const useActivityLog      = () => useProgressStore(s => s.activityLog);
export const useNewBadge         = () => useProgressStore(s => s.newBadge);
export const useLastXpGain       = () => useProgressStore(s => s.lastXpGain);
export const useCodeRunCount     = () => useProgressStore(s => s.codeRunCount);

// Is this specific lesson done?
export const useIsLessonComplete = (lessonId: string) =>
  useProgressStore(s => s.completedLessons.includes(lessonId));

// Progress % for a specific course
export const useCourseProgressPct = (courseId: string, totalLessons: number) =>
  useProgressStore(s => {
    const progress = s.courseProgress[courseId];
    if (!progress) return 0;
    return Math.round((progress.completedLessons.length / totalLessons) * 100);
  });

// XP within current level (for the XP bar fill %)
export const useXpInLevel = () =>
  useProgressStore(s => xpInCurrentLevel(s.xp));

// XP needed to reach next level
export const useXpForNextLevel = () =>
  useProgressStore(s => xpForNextLevel(s.xp));
