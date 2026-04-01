// src/lib/firestore.ts
import {
  doc, getDoc, setDoc, updateDoc, arrayUnion,
  collection, getDocs, query, where, orderBy,
  serverTimestamp, increment, Timestamp,
} from 'firebase/firestore';
import { db } from './firebase';

// ── USER ─────────────────────────────────────────────────
export async function getUser(uid: string) {
  const snap = await getDoc(doc(db, 'users', uid));
  return snap.exists() ? snap.data() : null;
}

export async function updateUser(uid: string, data: Record<string, any>) {
  await updateDoc(doc(db, 'users', uid), data);
}

// ── PROGRESS ─────────────────────────────────────────────
export async function getProgress(uid: string, courseId: string) {
  const id   = `${uid}_${courseId}`;
  const snap = await getDoc(doc(db, 'progress', id));
  return snap.exists() ? snap.data() : null;
}

export async function markLessonComplete(
  uid: string,
  courseId: string,
  lessonId: string,
  xpEarned: number = 10
) {
  const id  = `${uid}_${courseId}`;
  const ref = doc(db, 'progress', id);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      uid, courseId,
      completedLessons: [lessonId],
      totalXP:          xpEarned,
      lastUpdated:      serverTimestamp(),
    });
  } else {
    await updateDoc(ref, {
      completedLessons: arrayUnion(lessonId),
      totalXP:          increment(xpEarned),
      lastUpdated:      serverTimestamp(),
    });
  }

  // Update global user XP
  await updateDoc(doc(db, 'users', uid), {
    xp:         increment(xpEarned),
    lastActive: serverTimestamp(),
  });
}

export async function updateStreak(uid: string) {
  const userRef  = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) return;

  const data       = userSnap.data();
  const lastActive = data.lastActive?.toDate?.() || new Date(0);
  const now        = new Date();
  const diffHours  = (now.getTime() - lastActive.getTime()) / (1000 * 60 * 60);

  if (diffHours >= 20 && diffHours <= 48) {
    // Consecutive day — increment streak
    await updateDoc(userRef, { streak: increment(1) });
  } else if (diffHours > 48) {
    // Streak broken
    await updateDoc(userRef, { streak: 1 });
  }
}

// ── QUIZ RESULTS ─────────────────────────────────────────
export async function saveQuizResult(
  uid: string,
  lessonId: string,
  score: number,
  total: number
) {
  const ref = doc(db, 'quiz_results', `${uid}_${lessonId}`);
  await setDoc(ref, {
    uid, lessonId, score, total,
    percentage:  Math.round((score / total) * 100),
    completedAt: serverTimestamp(),
  });
}

// ── AI CHAT HISTORY ──────────────────────────────────────
export async function saveChatMessage(
  uid: string,
  role: 'user' | 'assistant',
  content: string,
  context?: string
) {
  const colRef = collection(db, 'users', uid, 'chat_history');
  await setDoc(doc(colRef), {
    role, content, context: context || null,
    timestamp: serverTimestamp(),
  });
}
