// src/lib/auth.ts
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile,
  User,
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from './firebase';

const googleProvider = new GoogleAuthProvider();

// ── Sign Up ──────────────────────────────────────────────
export async function signUp(email: string, password: string, name: string) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(cred.user, { displayName: name });
  await createUserDocument(cred.user, name);
  return cred.user;
}

// ── Sign In ──────────────────────────────────────────────
export async function signIn(email: string, password: string) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

// ── Google Sign In ───────────────────────────────────────
export async function signInWithGoogle() {
  const cred = await signInWithPopup(auth, googleProvider);
  const exists = await userExists(cred.user.uid);
  if (!exists) {
    await createUserDocument(cred.user, cred.user.displayName || 'Learner');
  }
  return cred.user;
}

// ── Sign Out ─────────────────────────────────────────────
export async function logout() {
  await signOut(auth);
}

// ── Auth State Observer ──────────────────────────────────
export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}

// ── Firestore User Doc ───────────────────────────────────
async function userExists(uid: string) {
  const snap = await getDoc(doc(db, 'users', uid));
  return snap.exists();
}

async function createUserDocument(user: User, name: string) {
  await setDoc(doc(db, 'users', user.uid), {
    uid:          user.uid,
    name,
    email:        user.email,
    photoURL:     user.photoURL || null,
    plan:         'free',               // free | starter | pro | multi | bundle
    isStudent:    false,
    xp:           0,
    streak:       0,
    lastActive:   serverTimestamp(),
    joinedAt:     serverTimestamp(),
    enrolledCourses: [],
    badges:       [],
  });
}
