// functions/src/auth/onDelete.ts
// ─────────────────────────────────────────────────────────────
// TRIGGER: auth.user().onDelete
//
// Fires when a user deletes their account.
// GDPR compliance — we must delete ALL user data.
//
// What it deletes:
//   - /users/{uid}                   (user profile)
//   - /users/{uid}/notifications/*   (subcollection)
//   - /users/{uid}/chat_history/*    (subcollection)
//   - /progress/{uid}_*              (progress docs)
//   - /quiz_results/{uid}_*          (quiz results)
//   - /subscriptions/{uid}           (subscription)
//
// Uses batched deletes for atomicity.
// Subcollections are deleted recursively with recursive delete.
// ─────────────────────────────────────────────────────────────

import * as functions   from 'firebase-functions';
import * as admin       from 'firebase-admin';

const db = admin.firestore();

export const onUserDelete = functions
  .region('asia-south1')
  .auth.user()
  .onDelete(async (user) => {
    const { uid } = user;
    functions.logger.info(`Deleting all data for user: ${uid}`);

    const batch = db.batch();

    try {
      // ── 1. Delete main user document ─────────────────────────
      batch.delete(db.doc(`users/${uid}`));

      // ── 2. Delete subscription document ──────────────────────
      batch.delete(db.doc(`subscriptions/${uid}`));

      // ── 3. Find and delete all progress documents ─────────────
      // Progress doc IDs are: {uid}_{courseId}
      const progressSnap = await db.collection('progress')
        .where('uid', '==', uid)
        .get();

      progressSnap.docs.forEach(doc => batch.delete(doc.ref));

      // ── 4. Find and delete all quiz results ───────────────────
      // Quiz result IDs are: {uid}_{lessonId}
      const quizSnap = await db.collection('quiz_results')
        .where('uid', '==', uid)
        .get();

      quizSnap.docs.forEach(doc => batch.delete(doc.ref));

      // ── 5. Commit main batch ──────────────────────────────────
      await batch.commit();

      // ── 6. Recursively delete subcollections ──────────────────
      // Firestore doesn't auto-delete subcollections when parent is deleted.
      // firebase-admin's recursiveDelete handles this.
      await db.recursiveDelete(db.doc(`users/${uid}`));

      functions.logger.info(`All data deleted for user: ${uid}`);

    } catch (err) {
      functions.logger.error(`Error deleting data for user ${uid}:`, err);
      // Don't throw — the auth record is already deleted.
      // Failed cleanup can be retried via a Cloud Task if needed.
    }

    return null;
  });
