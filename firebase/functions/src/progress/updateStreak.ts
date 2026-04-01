// functions/src/progress/updateStreak.ts
// ─────────────────────────────────────────────────────────────
// CALLABLE FUNCTION: updateStreak
//
// Called whenever the user completes any lesson.
// Calculates whether the streak should:
//   - Increment (studied yesterday)
//   - Stay the same (already studied today)
//   - Reset to 1 (missed a day or more)
//
// Also runs a scheduled function every day at midnight IST
// to send streak reminder notifications to users whose streak
// is at risk (studied yesterday but not today yet).
//
// STREAK LOGIC:
//   lastStudiedDate = 'YYYY-MM-DD' string in IST timezone
//
//   If lastStudied == today          → already done, no change
//   If lastStudied == yesterday      → increment streak
//   If lastStudied < yesterday       → streak broken, reset to 1
//   If lastStudied == null           → first lesson ever, set to 1
// ─────────────────────────────────────────────────────────────

import * as functions   from 'firebase-functions';
import * as admin       from 'firebase-admin';

const db = admin.firestore();

// ── Date helpers (IST = UTC+5:30) ─────────────────────────────
function getISTDateString(date: Date = new Date()): string {
  // IST is UTC+5:30
  const ist = new Date(date.getTime() + (5.5 * 60 * 60 * 1000));
  return ist.toISOString().split('T')[0]; // 'YYYY-MM-DD'
}

function getYesterdayISTString(): string {
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
  return getISTDateString(yesterday);
}

// ── Types ─────────────────────────────────────────────────────
interface UpdateStreakResponse {
  streak:      number;
  changed:     boolean;
  message:     string;
}

// ── Callable: updateStreak ────────────────────────────────────
export const updateStreak = functions
  .region('asia-south1')
  .https.onCall(async (_data, context): Promise<UpdateStreakResponse> => {
    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated', 'Login required.');
    }

    const uid     = context.auth.uid;
    const today   = getISTDateString();
    const yesterday = getYesterdayISTString();

    const userRef  = db.doc(`users/${uid}`);
    const userSnap = await userRef.get();

    if (!userSnap.exists) {
      throw new functions.https.HttpsError('not-found', 'User not found.');
    }

    const userData = userSnap.data()!;
    const lastDate = userData.lastStudiedDate as string | null;
    const currStreak = userData.streak as number || 0;

    // Already studied today — no change needed
    if (lastDate === today) {
      return {
        streak:  currStreak,
        changed: false,
        message: 'Already studied today!',
      };
    }

    let newStreak: number;
    let message:   string;

    if (lastDate === yesterday) {
      // Studied yesterday — extend streak
      newStreak = currStreak + 1;
      message   = newStreak >= 7
        ? `🔥 ${newStreak}-day streak! You're on fire!`
        : `🔥 ${newStreak}-day streak! Keep it up!`;
    } else {
      // Missed one or more days — reset
      newStreak = 1;
      message   = lastDate
        ? 'Streak reset — but Day 1 starts now! 💪'
        : 'First lesson! Streak begins 🌱';
    }

    await userRef.update({
      streak:          newStreak,
      lastStudiedDate: today,
      lastActive:      admin.firestore.FieldValue.serverTimestamp(),
    });

    functions.logger.info(
      `Streak updated: uid=${uid}, ${currStreak} → ${newStreak}, date=${today}`
    );

    return { streak: newStreak, changed: true, message };
  });

// ── Scheduled: Streak Reminder (Daily at 8 PM IST) ────────────
// Runs every day, finds users at risk of losing their streak,
// and creates a notification in their Firestore subcollection.
// (In production you'd also send a push notification or email here)
export const streakReminderScheduled = functions
  .region('asia-south1')
  .pubsub
  .schedule('30 14 * * *')     // 14:30 UTC = 20:00 IST
  .timeZone('UTC')
  .onRun(async () => {
    const today     = getISTDateString();
    const yesterday = getYesterdayISTString();

    functions.logger.info(`Running streak reminder for date: ${today}`);

    // Find users who:
    //   - Have a streak > 0
    //   - Last studied yesterday (not today)
    //   - Are at risk of losing their streak tonight
    const atRiskSnap = await db.collection('users')
      .where('streak',          '>',  0)
      .where('lastStudiedDate', '==', yesterday)
      .limit(500)                    // Process in batches for large user bases
      .get();

    functions.logger.info(`Found ${atRiskSnap.size} users at risk of streak loss`);

    const notifPromises = atRiskSnap.docs.map(doc => {
      const user = doc.data();
      return db.collection(`users/${doc.id}/notifications`).add({
        type:    'streak_reminder',
        title:   `🔥 Your ${user.streak}-day streak is at risk!`,
        message: 'Complete a lesson today before midnight to keep your streak alive!',
        read:    false,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    });

    await Promise.allSettled(notifPromises);
    functions.logger.info('Streak reminders sent successfully');
    return null;
  });

// ── Scheduled: Daily Streak Freeze Check (Midnight IST) ───────
// Runs at midnight IST and resets streaks for users who didn't study.
// This is a "lazy evaluation" approach — streaks are only reset
// when the user next logs in (via client-side check), but this
// scheduled function ensures the Firestore data stays accurate
// for leaderboards and certificates.
export const streakResetScheduled = functions
  .region('asia-south1')
  .pubsub
  .schedule('30 18 * * *')     // 18:30 UTC = 00:00 IST (next day)
  .timeZone('UTC')
  .onRun(async () => {
    const yesterday = getYesterdayISTString();

    // Find users with streaks who haven't studied today or yesterday
    const brokenSnap = await db.collection('users')
      .where('streak', '>', 0)
      .where('lastStudiedDate', '<', yesterday)  // Studied before yesterday
      .limit(500)
      .get();

    functions.logger.info(`Resetting streaks for ${brokenSnap.size} users`);

    const batch = db.batch();
    brokenSnap.docs.forEach(doc => {
      batch.update(doc.ref, { streak: 0 });
    });
    await batch.commit();

    functions.logger.info('Streak reset complete');
    return null;
  });
