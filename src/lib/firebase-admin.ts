// src/lib/firebase-admin.ts
// ─────────────────────────────────────────────────────────────
// FIREBASE ADMIN SDK — Server-side only
//
// Used in Next.js API routes (/app/api/*) where we need:
//   - Verify Firebase ID tokens (auth)
//   - Read/write Firestore bypassing security rules
//   - Perform privileged operations (e.g. batch deletes)
//
// NEVER import this in client components — it contains
// server-only credentials and will break the build.
//
// INITIALIZATION:
//   In production (Vercel), credentials come from the
//   GOOGLE_APPLICATION_CREDENTIALS_JSON env variable.
//
//   In development, set up a Service Account key:
//     1. Firebase Console → Project Settings → Service Accounts
//     2. Generate new private key → download JSON
//     3. Add to .env.local as GOOGLE_APPLICATION_CREDENTIALS_JSON
//        (paste the entire JSON as a single-line string)
//
// SINGLETON PATTERN:
//   getApps().length check prevents re-initializing in
//   Next.js hot reload (which re-runs module code).
// ─────────────────────────────────────────────────────────────

import { getApps, initializeApp, cert, App } from 'firebase-admin/app';
import { getFirestore }                       from 'firebase-admin/firestore';
import { getAuth }                            from 'firebase-admin/auth';

// ── Initialize ────────────────────────────────────────────────
let adminApp: App;

if (!getApps().length) {
  const credJson = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;

  if (credJson) {
    // Production / staging: credentials from env variable
    try {
      const serviceAccount = JSON.parse(credJson);
      adminApp = initializeApp({
        credential: cert(serviceAccount),
        projectId:  serviceAccount.project_id,
      });
    } catch (err) {
      console.error('Failed to parse Firebase service account JSON:', err);
      throw new Error('Invalid GOOGLE_APPLICATION_CREDENTIALS_JSON format');
    }
  } else if (process.env.NODE_ENV === 'development') {
    // Development: use Application Default Credentials
    // (works with Firebase emulator or gcloud auth)
    adminApp = initializeApp({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    });
  } else {
    throw new Error(
      'GOOGLE_APPLICATION_CREDENTIALS_JSON environment variable is required in production.'
    );
  }
} else {
  adminApp = getApps()[0];
}

// ── Exported instances ────────────────────────────────────────
export const adminDb   = getFirestore(adminApp);
export const adminAuth = getAuth(adminApp);
export default adminApp;

// ── Helper: get ID token from request ────────────────────────
// Extracts and verifies the Firebase ID token from a request header
export async function verifyRequestToken(
  authHeader: string | null
): Promise<{ uid: string; email?: string } | null> {
  if (!authHeader?.startsWith('Bearer ')) return null;

  const token = authHeader.replace('Bearer ', '');
  try {
    const decoded = await adminAuth.verifyIdToken(token);
    return { uid: decoded.uid, email: decoded.email };
  } catch {
    return null;
  }
}
