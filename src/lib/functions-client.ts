// src/lib/functions-client.ts
// ─────────────────────────────────────────────────────────────
// CLOUD FUNCTIONS CLIENT
//
// Helper module for calling Firebase Cloud Functions
// from the Next.js frontend (client side).
//
// Instead of importing getFunctions/httpsCallable in every
// component, centralise all callable function calls here.
//
// Usage in components:
//   import { callUpdateXP, callVerifyPlan } from '@/lib/functions-client';
//   const result = await callUpdateXP('py-m1-l1', 'python');
// ─────────────────────────────────────────────────────────────

import { getFunctions, httpsCallable, connectFunctionsEmulator } from 'firebase/functions';
import app from './firebase';

// ── Get Functions instance ────────────────────────────────────
const functions = getFunctions(app, 'asia-south1');

// ── Connect to emulator in development ────────────────────────
if (process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_USE_EMULATOR === 'true') {
  connectFunctionsEmulator(functions, 'localhost', 5001);
}

// ── Typed callable wrappers ───────────────────────────────────

// updateXP — award XP after completing a lesson
interface UpdateXPRequest  { lessonId: string; courseId: string; }
interface UpdateXPResponse {
  success: boolean; xpAwarded: number; newTotalXP: number;
  newLevel: number; leveledUp: boolean; message: string;
}
export async function callUpdateXP(
  lessonId: string,
  courseId: string
): Promise<UpdateXPResponse> {
  const fn = httpsCallable<UpdateXPRequest, UpdateXPResponse>(functions, 'updateXP');
  const result = await fn({ lessonId, courseId });
  return result.data;
}

// updateStreak — update daily study streak
interface UpdateStreakResponse {
  streak: number; changed: boolean; message: string;
}
export async function callUpdateStreak(): Promise<UpdateStreakResponse> {
  const fn = httpsCallable<void, UpdateStreakResponse>(functions, 'updateStreak');
  const result = await fn();
  return result.data;
}

// getUserBadges — get the user's earned badges
interface Badge {
  id: string; name: string; icon: string;
  description: string; awardedAt: string | null;
}
export async function callGetUserBadges(): Promise<{ badges: Badge[] }> {
  const fn = httpsCallable<void, { badges: Badge[] }>(functions, 'getUserBadges');
  const result = await fn();
  return result.data;
}

// verifyUserPlan — check plan status and expiry
interface VerifyPlanResponse {
  plan: string; isActive: boolean; expiresAt: string | null;
  daysRemaining: number | null; courses: string[];
}
export async function callVerifyPlan(): Promise<VerifyPlanResponse> {
  const fn = httpsCallable<void, VerifyPlanResponse>(functions, 'verifyUserPlan');
  const result = await fn();
  return result.data;
}
