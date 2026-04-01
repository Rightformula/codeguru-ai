// functions/src/index.ts
// ─────────────────────────────────────────────────────────────
// CLOUD FUNCTIONS ENTRY POINT
//
// Firebase deploys whatever is exported from this file.
// Each named export becomes a separate Cloud Function.
//
// IMPORTANT: Initialize firebase-admin ONCE here, BEFORE
// importing any other modules. Admin init must happen exactly
// once per functions process — importing it in multiple files
// without this central init would cause errors.
//
// FUNCTION INVENTORY:
//
// Auth triggers:
//   onUserCreate         → auth.user().onCreate → creates user doc
//   onUserDelete         → auth.user().onDelete → deletes all user data
//
// Callable functions (called from frontend via Firebase SDK):
//   updateXP             → awards XP after lesson completion
//   updateStreak         → updates daily study streak
//   getUserBadges        → returns user's earned badges
//   verifyUserPlan       → checks/enforces plan expiry
//
// Firestore triggers:
//   checkBadgesOnUpdate  → users/{uid} onUpdate → awards badges
//
// HTTPS endpoints (called by external services):
//   razorpayWebhook      → POST from Razorpay on payment events
//
// Scheduled functions (cron jobs):
//   streakReminderScheduled → daily 8 PM IST reminder notifications
//   streakResetScheduled    → daily midnight IST streak resets
// ─────────────────────────────────────────────────────────────

import * as admin from 'firebase-admin';

// ── Initialize Firebase Admin SDK (MUST be first) ─────────────
// In Cloud Functions, credentials come from the environment
// automatically — no need for a service account key file.
admin.initializeApp();

// ── Auth Functions ────────────────────────────────────────────
export { onUserCreate }          from './auth/onCreate';
export { onUserDelete }          from './auth/onDelete';

// ── Progress Callable Functions ───────────────────────────────
export { updateXP }              from './progress/updateXP';
export {
  updateStreak,
  streakReminderScheduled,
  streakResetScheduled,
}                                from './progress/updateStreak';
export {
  checkBadgesOnUpdate,
  getUserBadges,
}                                from './progress/checkBadges';

// ── Subscription Functions ────────────────────────────────────
export {
  razorpayWebhook,
  verifyUserPlan,
}                                from './subscriptions/verifyPlan';
