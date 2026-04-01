// functions/src/lib/helpers.ts
// ─────────────────────────────────────────────────────────────
// SHARED HELPERS — utilities used across multiple Cloud Functions
//
// Keeps individual function files clean and avoids duplication.
// ─────────────────────────────────────────────────────────────

import * as admin     from 'firebase-admin';
import * as functions from 'firebase-functions';

const db = admin.firestore();

// ── Get user document ─────────────────────────────────────────
export async function getUser(uid: string): Promise<admin.firestore.DocumentData | null> {
  const snap = await db.doc(`users/${uid}`).get();
  return snap.exists ? snap.data()! : null;
}

// ── Safe update (won't throw if doc doesn't exist) ────────────
export async function safeUpdate(
  ref: admin.firestore.DocumentReference,
  data: Record<string, unknown>
): Promise<void> {
  try {
    await ref.update(data);
  } catch (err: any) {
    if (err.code === 5) { // NOT_FOUND
      functions.logger.warn(`Document not found for update: ${ref.path}`);
    } else {
      throw err;
    }
  }
}

// ── Create notification for a user ────────────────────────────
export async function createNotification(
  uid:     string,
  title:   string,
  message: string,
  type:    string,
  extra?:  Record<string, unknown>
): Promise<void> {
  await db.collection(`users/${uid}/notifications`).add({
    type,
    title,
    message,
    read:      false,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    ...(extra || {}),
  });
}

// ── IST date helpers ──────────────────────────────────────────
// India Standard Time = UTC+5:30
export function getISTDate(date: Date = new Date()): Date {
  return new Date(date.getTime() + 5.5 * 60 * 60 * 1000);
}

export function getISTDateString(date: Date = new Date()): string {
  return getISTDate(date).toISOString().split('T')[0];
}

// ── XP → Level formula ────────────────────────────────────────
export function xpToLevel(xp: number): number {
  return Math.floor(xp / 100) + 1;
}

// ── Batch delete helper ───────────────────────────────────────
// Deletes a collection in batches of 500
export async function deleteCollection(
  collectionPath: string,
  batchSize = 500
): Promise<void> {
  const colRef = db.collection(collectionPath);

  while (true) {
    const snap = await colRef.limit(batchSize).get();
    if (snap.empty) break;

    const batch = db.batch();
    snap.docs.forEach(doc => batch.delete(doc.ref));
    await batch.commit();

    functions.logger.info(`Deleted ${snap.size} docs from ${collectionPath}`);
    if (snap.size < batchSize) break;
  }
}

// ── Validate auth context ─────────────────────────────────────
// Throws HttpsError if not authenticated
export function requireAuth(
  context: functions.https.CallableContext
): string {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'Authentication required.'
    );
  }
  return context.auth.uid;
}
