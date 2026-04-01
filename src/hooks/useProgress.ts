// src/hooks/useProgress.ts
// ─────────────────────────────────────────────────────────────
// useProgress HOOK
//
// Provides everything the Progress screen and Dashboard need:
//   - XP, level, streak (from progressStore)
//   - Level progress percentage (XP bar fill amount)
//   - XP needed to reach next level
//   - Which badges are unlocked vs locked
//   - Formatted activity log entries
//   - Course-wise completion stats
//
// Also provides computed helpers:
//   - getLevelName() — "Beginner Coder", "Junior Dev", etc.
//   - getStreakMessage() — "Keep it up!", "You're on fire!" etc.
//   - getBadgeProgress() — how many badges out of total are earned
// ─────────────────────────────────────────────────────────────

'use client';

import { useMemo } from 'react';
import {
  useProgressStore,
  useXP,
  useLevel,
  useStreak,
  useUnlockedBadges,
  useActivityLog,
  useCodeRunCount,
  xpToLevel,
  xpInCurrentLevel,
  xpForNextLevel,
  ALL_BADGES,
} from '@/store/progressStore';

// ── Level Names ────────────────────────────────────────────────
// Each level has a name to make leveling up feel meaningful
const LEVEL_NAMES: Record<number, string> = {
  1:  'Beginner Coder',
  2:  'Code Explorer',
  3:  'Variable Ninja',
  4:  'Loop Learner',
  5:  'Function Finder',
  6:  'Object Observer',
  7:  'Debug Detective',
  8:  'Syntax Samurai',
  9:  'Algorithm Apprentice',
  10: 'Junior Developer',
  15: 'Mid-Level Dev',
  20: 'Senior Developer',
  25: 'Tech Lead',
  30: 'Code Architect',
  50: 'CodeGuru Legend 🏆',
};

export function getLevelName(level: number): string {
  // Find the highest defined level that is ≤ current level
  const defined = Object.keys(LEVEL_NAMES)
    .map(Number)
    .filter(n => n <= level)
    .sort((a, b) => b - a);
  return defined.length > 0 ? LEVEL_NAMES[defined[0]] : 'Beginner Coder';
}

// ── Streak Messages ────────────────────────────────────────────
export function getStreakMessage(streak: number): string {
  if (streak === 0)  return 'Start a lesson to begin your streak!';
  if (streak === 1)  return 'Day 1! Great start 🌱';
  if (streak < 3)    return `${streak} days! Keep going! 💪`;
  if (streak < 7)    return `${streak} days! You're on a roll! 🔥`;
  if (streak < 14)   return `${streak} days! Incredible! ⚡`;
  if (streak < 30)   return `${streak} days! You're unstoppable! 🚀`;
  return `${streak} days! LEGENDARY! 🏆`;
}

// ── Hook: useProgressStats ─────────────────────────────────────
// Main hook for the Progress screen
export interface ProgressStats {
  // Core stats
  xp:              number;
  level:           number;
  levelName:       string;
  streak:          number;
  streakMessage:   string;
  codeRunCount:    number;

  // XP progress within current level
  xpInLevel:       number;        // e.g. 45 (out of 100)
  xpForNext:       number;        // e.g. 100 (next level boundary)
  xpProgressPct:   number;        // e.g. 45 (%)
  xpToNextLevel:   number;        // e.g. 55 (remaining XP needed)

  // Completed lessons count
  lessonsCompleted: number;

  // Badges
  unlockedBadges:  typeof ALL_BADGES[number][];
  lockedBadges:    typeof ALL_BADGES[number][];
  badgeCount:      number;        // Unlocked count
  totalBadges:     number;        // Total possible

  // Activity
  activityLog:     ReturnType<typeof useActivityLog>;
}

export function useProgressStats(): ProgressStats {
  const xp              = useXP();
  const level           = useLevel();
  const streak          = useStreak();
  const unlockedBadges  = useUnlockedBadges();
  const activityLog     = useActivityLog();
  const codeRunCount    = useCodeRunCount();
  const completedLessons = useProgressStore(s => s.completedLessons);

  return useMemo(() => {
    const xpInLvl    = xpInCurrentLevel(xp);
    const xpForNxt   = xpForNextLevel(xp);
    const xpPct      = Math.round((xpInLvl / 100) * 100);
    const xpRemaining = 100 - xpInLvl;

    const unlockedIds  = new Set(unlockedBadges.map(b => b.id));
    const lockedBadges = ALL_BADGES.filter(b => !unlockedIds.has(b.id));

    return {
      xp,
      level,
      levelName:       getLevelName(level),
      streak,
      streakMessage:   getStreakMessage(streak),
      codeRunCount,
      xpInLevel:       xpInLvl,
      xpForNext:       xpForNxt,
      xpProgressPct:   xpPct,
      xpToNextLevel:   xpRemaining,
      lessonsCompleted: completedLessons.length,
      unlockedBadges:  ALL_BADGES.filter(b => unlockedIds.has(b.id)),
      lockedBadges,
      badgeCount:      unlockedBadges.length,
      totalBadges:     ALL_BADGES.length,
      activityLog,
    };
  }, [xp, level, streak, codeRunCount, unlockedBadges, activityLog, completedLessons]);
}

// ── Hook: useDashboardStats ────────────────────────────────────
// Lighter version for the dashboard stat cards
export interface DashboardStats {
  xp:              number;
  streak:          number;
  level:           number;
  levelName:       string;
  lessonsCompleted: number;
  xpProgressPct:   number;
  streakMessage:   string;
}

export function useDashboardStats(): DashboardStats {
  const xp               = useXP();
  const level            = useLevel();
  const streak           = useStreak();
  const completedLessons = useProgressStore(s => s.completedLessons);

  return useMemo(() => ({
    xp,
    streak,
    level,
    levelName:       getLevelName(level),
    lessonsCompleted: completedLessons.length,
    xpProgressPct:   xpInCurrentLevel(xp),
    streakMessage:   getStreakMessage(streak),
  }), [xp, level, streak, completedLessons]);
}

// ── Hook: useCourseBadges ──────────────────────────────────────
// Returns badges relevant to a specific course for the course page
export function useCourseBadges(courseId: string) {
  const unlockedBadges = useUnlockedBadges();

  return useMemo(() => {
    const courseBadgeIds: Record<string, string[]> = {
      python:     ['python_begin', 'first_lesson', 'perfect_quiz'],
      javascript: ['js_begin',    'first_lesson', 'perfect_quiz'],
      'html-css': ['first_lesson', 'perfect_quiz'],
      java:       ['first_lesson', 'perfect_quiz'],
    };

    const relevant = (courseBadgeIds[courseId] || []);
    const unlockedIds = new Set(unlockedBadges.map(b => b.id));

    return ALL_BADGES
      .filter(b => relevant.includes(b.id))
      .map(b => ({
        ...b,
        isUnlocked: unlockedIds.has(b.id),
      }));
  }, [courseId, unlockedBadges]);
}

// ── Hook: useIsLessonUnlocked ──────────────────────────────────
// Quick check — is this specific lesson done?
export function useIsLessonDone(lessonId: string): boolean {
  return useProgressStore(s => s.completedLessons.includes(lessonId));
}
