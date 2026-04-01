// functions/src/progress/updateXP.ts
// ─────────────────────────────────────────────────────────────
// CALLABLE FUNCTION: updateXP
//
// Awards XP to a user after completing a lesson.
// Called from the Next.js frontend via Firebase SDK.
//
// WHY server-side XP instead of client-side only?
//   Client-side (Zustand) is fast and works offline.
//   But for leaderboards, certificates, and plan verification
//   we need server-authoritative XP stored in Firestore.
//
//   Attack prevention: client can't just POST "give me 999 XP"
//   because this function validates:
//     - User is authenticated (context.auth)
//     - Lesson hasn't been completed before (idempotency)
//     - XP amount matches the lesson's defined reward
//
// USAGE from frontend:
//   import { getFunctions, httpsCallable } from 'firebase/functions';
//   const fn = httpsCallable(getFunctions(), 'updateXP');
//   await fn({ lessonId: 'py-m1-l1', courseId: 'python' });
// ─────────────────────────────────────────────────────────────

import * as functions   from 'firebase-functions';
import * as admin       from 'firebase-admin';

const db = admin.firestore();

// ── XP values per lesson (server-authoritative) ───────────────
// Must match the xpReward values in course data files.
// Having them server-side prevents XP manipulation.
const LESSON_XP: Record<string, number> = {
  // Python
  'py-m1-l1': 10, 'py-m1-l2': 10, 'py-m1-l3': 15,
  'py-m2-l1': 15, 'py-m2-l2': 15, 'py-m2-l3': 20,
  // JavaScript
  'js-m1-l1': 10, 'js-m1-l2': 10, 'js-m1-l3': 15,
  'js-m2-l1': 15, 'js-m2-l2': 15, 'js-m2-l3': 20,
  // HTML/CSS
  'html-m1-l1': 10, 'html-m1-l2': 10, 'html-m1-l3': 15,
  'css-m2-l1':  15, 'css-m2-l2':  15, 'css-m2-l3':  20,
  // Default for any unlisted lesson
  default: 10,
};

function getLessonXP(lessonId: string): number {
  return LESSON_XP[lessonId] ?? LESSON_XP.default;
}

// ── Callable Function ─────────────────────────────────────────
interface UpdateXPRequest {
  lessonId: string;
  courseId: string;
}

interface UpdateXPResponse {
  success:     boolean;
  xpAwarded:   number;
  newTotalXP:  number;
  newLevel:    number;
  leveledUp:   boolean;
  message:     string;
}

export const updateXP = functions
  .region('asia-south1')
  .https.onCall(async (data: UpdateXPRequest, context): Promise<UpdateXPResponse> => {
    // ── Auth check ────────────────────────────────────────────
    if (!context.auth) {
      throw new functions.https.HttpsError(
        'unauthenticated',
        'You must be logged in to earn XP.'
      );
    }

    const uid      = context.auth.uid;
    const { lessonId, courseId } = data;

    // ── Input validation ──────────────────────────────────────
    if (!lessonId || !courseId) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'lessonId and courseId are required.'
      );
    }

    functions.logger.info(`updateXP called: uid=${uid}, lesson=${lessonId}`);

    // ── Idempotency check ─────────────────────────────────────
    // Prevent double-rewarding the same lesson
    const progressRef = db.doc(`progress/${uid}_${courseId}`);
    const progressSnap = await progressRef.get();
    const progressData = progressSnap.data() || {};
    const completedLessons: string[] = progressData.completedLessons || [];

    if (completedLessons.includes(lessonId)) {
      functions.logger.info(`Lesson ${lessonId} already completed by ${uid} — no XP awarded`);
      const userSnap = await db.doc(`users/${uid}`).get();
      const userData = userSnap.data() || {};
      return {
        success:    false,
        xpAwarded:  0,
        newTotalXP: userData.xp || 0,
        newLevel:   userData.level || 1,
        leveledUp:  false,
        message:    'Lesson already completed.',
      };
    }

    // ── Calculate XP ──────────────────────────────────────────
    const xpToAward = getLessonXP(lessonId);

    // ── Run as a transaction for consistency ──────────────────
    // A transaction ensures XP update + lesson completion are atomic.
    // If either fails, neither is applied.
    const result = await db.runTransaction(async (tx) => {
      const userRef  = db.doc(`users/${uid}`);
      const userSnap = await tx.get(userRef);

      if (!userSnap.exists) {
        throw new functions.https.HttpsError('not-found', 'User not found.');
      }

      const userData  = userSnap.data()!;
      const oldXP     = userData.xp     || 0;
      const oldLevel  = userData.level  || 1;
      const newXP     = oldXP + xpToAward;
      const newLevel  = Math.floor(newXP / 100) + 1;
      const leveledUp = newLevel > oldLevel;

      // Update user document
      tx.update(userRef, {
        xp:         newXP,
        level:      newLevel,
        lastActive: admin.firestore.FieldValue.serverTimestamp(),
        totalLessonsCompleted: admin.firestore.FieldValue.increment(1),
      });

      // Update progress document
      if (progressSnap.exists) {
        tx.update(progressRef, {
          completedLessons: admin.firestore.FieldValue.arrayUnion(lessonId),
          totalXP:          admin.firestore.FieldValue.increment(xpToAward),
          lastUpdated:      admin.firestore.FieldValue.serverTimestamp(),
        });
      } else {
        tx.set(progressRef, {
          uid,
          courseId,
          completedLessons: [lessonId],
          totalXP:          xpToAward,
          startedAt:        admin.firestore.FieldValue.serverTimestamp(),
          lastUpdated:      admin.firestore.FieldValue.serverTimestamp(),
        });
      }

      return { newXP, newLevel, leveledUp };
    });

    functions.logger.info(
      `XP awarded: uid=${uid}, lesson=${lessonId}, +${xpToAward} XP, total=${result.newXP}`
    );

    return {
      success:    true,
      xpAwarded:  xpToAward,
      newTotalXP: result.newXP,
      newLevel:   result.newLevel,
      leveledUp:  result.leveledUp,
      message:    result.leveledUp
        ? `Level up! You're now Level ${result.newLevel}! 🎉`
        : `+${xpToAward} XP earned!`,
    };
  });
