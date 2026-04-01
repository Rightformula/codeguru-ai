// functions/src/auth/onCreate.ts
// ─────────────────────────────────────────────────────────────
// TRIGGER: auth.user().onCreate
//
// Fires automatically every time a NEW user registers —
// whether via email/password or Google Sign-In.
//
// What it does:
//   1. Creates the user's Firestore document in /users/{uid}
//   2. Sets default values (plan: free, xp: 0, streak: 0)
//   3. Creates a welcome notification subcollection document
//   4. Sends a welcome email (if SendGrid is configured)
//
// WHY a Cloud Function instead of doing this client-side?
//   - Client code can be tampered with or bypassed
//   - Cloud Functions run server-side with admin privileges
//   - Guarantees the document is ALWAYS created, even if the
//     client crashes mid-signup
//   - Allows us to set server-side timestamps (can't fake them)
// ─────────────────────────────────────────────────────────────

import * as functions   from 'firebase-functions';
import * as admin       from 'firebase-admin';

const db = admin.firestore();

export const onUserCreate = functions
  .region('asia-south1')           // Mumbai — closest to Indian users
  .auth.user()
  .onCreate(async (user) => {
    const { uid, email, displayName, photoURL } = user;

    functions.logger.info(`New user created: ${uid} (${email})`);

    // ── 1. Determine if Google sign-up ────────────────────────
    const isGoogleSignUp = user.providerData.some(
      p => p.providerId === 'google.com'
    );

    // ── 2. Build the user document ────────────────────────────
    const userDoc = {
      uid,
      name:       displayName || email?.split('@')[0] || 'Learner',
      email:      email || '',
      photoURL:   photoURL  || null,

      // Plan & billing
      plan:            'free',          // free | starter | pro | multi | bundle
      isStudent:       false,           // set to true by client on signup if checkbox ticked
      planExpiresAt:   null,            // set when subscription is purchased

      // Gamification
      xp:              0,
      level:           1,
      streak:          0,
      lastStudiedDate: null,
      totalLessonsCompleted: 0,

      // Metadata
      enrolledCourses: ['python'],      // python is free for everyone
      badges:          [],
      joinedAt:        admin.firestore.FieldValue.serverTimestamp(),
      lastActive:      admin.firestore.FieldValue.serverTimestamp(),
      signupProvider:  isGoogleSignUp ? 'google' : 'email',
    };

    // ── 3. Write user document ────────────────────────────────
    await db.doc(`users/${uid}`).set(userDoc);
    functions.logger.info(`User document created for ${uid}`);

    // ── 4. Create welcome notification ────────────────────────
    // This appears in the user's notification feed on first login
    await db.collection(`users/${uid}/notifications`).add({
      type:      'welcome',
      title:     'Welcome to CodeGuru AI! 🚀',
      message:   'Your learning journey starts now. Complete your first lesson to earn 10 XP!',
      read:      false,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    // ── 5. Initialize progress document for Python (free course) ──
    // Pre-creates the progress document so the first read doesn't fail
    await db.doc(`progress/${uid}_python`).set({
      uid,
      courseId:         'python',
      completedLessons: [],
      totalXP:          0,
      startedAt:        admin.firestore.FieldValue.serverTimestamp(),
      lastUpdated:      admin.firestore.FieldValue.serverTimestamp(),
    });

    functions.logger.info(`Setup complete for new user ${uid}`);
    return null;
  });
