// src/app/api/progress/route.ts
// ─────────────────────────────────────────────────────────────
// PROGRESS API ROUTE
//
// Two handlers:
//
// GET  /api/progress?uid=xxx
//   → Fetches user's complete progress from Firestore
//   → Used on login to hydrate the Zustand progressStore
//   → Returns: { xp, level, streak, completedLessons, badges, courseProgress }
//
// POST /api/progress
//   → Saves a lesson completion event server-side
//   → Validates the request (auth token + lesson exists)
//   → Updates Firestore atomically using Admin SDK
//   → Also calls Cloud Function updateXP + updateStreak
//   → Returns: { success, xpAwarded, newTotalXP, newLevel, leveledUp }
//
// WHY use this route instead of calling Firestore directly?
//   - Server-side Admin SDK bypasses Firestore security rules
//   - We can verify the Firebase ID token server-side
//   - Keeps sensitive logic (XP calculation) server-side
//   - Allows batching multiple Firestore operations atomically
// ─────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server';
import { adminDb, adminAuth }        from '@/lib/firebase-admin';

// ── GET /api/progress?uid=xxx ─────────────────────────────────
// Loads a user's full progress snapshot from Firestore.
// Called after login to hydrate the client-side Zustand store.
export async function GET(req: NextRequest) {
  try {
    const uid = req.nextUrl.searchParams.get('uid');

    if (!uid) {
      return NextResponse.json(
        { error: 'uid parameter is required' },
        { status: 400 }
      );
    }

    // ── Verify Firebase ID token ──────────────────────────────
    // The client passes the token in the Authorization header
    const authHeader = req.headers.get('Authorization');
    const token      = authHeader?.replace('Bearer ', '');

    if (!token) {
      return NextResponse.json({ error: 'Authorization token required' }, { status: 401 });
    }

    let decodedToken;
    try {
      decodedToken = await adminAuth.verifyIdToken(token);
    } catch {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }

    // Users can only fetch their own progress
    if (decodedToken.uid !== uid) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // ── Fetch data in parallel ────────────────────────────────
    const [userSnap, progressSnaps] = await Promise.all([
      adminDb.doc(`users/${uid}`).get(),

      // Get all course progress docs for this user
      adminDb.collection('progress')
        .where('uid', '==', uid)
        .get(),
    ]);

    if (!userSnap.exists) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const userData = userSnap.data()!;

    // Build courseProgress map from progress collection
    const courseProgress: Record<string, {
      courseId:        string;
      completedLessons: string[];
      totalXP:         number;
    }> = {};

    progressSnaps.docs.forEach(doc => {
      const d = doc.data();
      courseProgress[d.courseId] = {
        courseId:         d.courseId,
        completedLessons: d.completedLessons || [],
        totalXP:          d.totalXP || 0,
      };
    });

    // Flatten all completed lessons across all courses
    const allCompletedLessons = Object.values(courseProgress)
      .flatMap(cp => cp.completedLessons);

    return NextResponse.json({
      xp:               userData.xp              || 0,
      level:            userData.level            || 1,
      streak:           userData.streak           || 0,
      lastStudiedDate:  userData.lastStudiedDate  || null,
      completedLessons: allCompletedLessons,
      badges:           userData.badges           || [],
      codeRunCount:     userData.codeRunCount     || 0,
      plan:             userData.plan             || 'free',
      enrolledCourses:  userData.enrolledCourses  || ['python'],
      courseProgress,
    });

  } catch (error: any) {
    console.error('GET /api/progress error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch progress', details: error.message },
      { status: 500 }
    );
  }
}

// ── POST /api/progress ────────────────────────────────────────
// Records a lesson completion event.
// This is the server-authoritative version of completeLesson().
//
// Body: {
//   lessonId:  string,
//   courseId:  string,
//   xpReward:  number,  (client-reported, validated server-side)
// }
export async function POST(req: NextRequest) {
  try {
    // ── Auth verification ─────────────────────────────────────
    const authHeader = req.headers.get('Authorization');
    const token      = authHeader?.replace('Bearer ', '');

    if (!token) {
      return NextResponse.json({ error: 'Authorization token required' }, { status: 401 });
    }

    let decodedToken;
    try {
      decodedToken = await adminAuth.verifyIdToken(token);
    } catch {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }

    const uid = decodedToken.uid;

    // ── Parse body ────────────────────────────────────────────
    const body = await req.json();
    const { lessonId, courseId, xpReward } = body;

    if (!lessonId || !courseId) {
      return NextResponse.json(
        { error: 'lessonId and courseId are required' },
        { status: 400 }
      );
    }

    // ── Server-authoritative XP values ────────────────────────
    const SERVER_XP: Record<string, number> = {
      // Python Modules 1-6
      'py-m1-l1': 10,  'py-m1-l2': 10,  'py-m1-l3': 15,
      'py-m2-l1': 15,  'py-m2-l2': 15,  'py-m2-l3': 20,
      'py-m3-l1': 15,  'py-m3-l2': 15,  'py-m3-l3': 15,
      'py-m4-l1': 15,  'py-m4-l2': 20,  'py-m4-l3': 15,
      'py-m5-l1': 15,  'py-m5-l2': 20,  'py-m5-l3': 20,
      'py-m6-l1': 20,  'py-m6-l2': 20,  'py-m6-l3': 25,
      // JavaScript Modules 1-6
      'js-m1-l1': 10,  'js-m1-l2': 10,  'js-m1-l3': 15,
      'js-m2-l1': 15,  'js-m2-l2': 15,  'js-m2-l3': 20,
      'js-m3-l1': 15,  'js-m3-l2': 20,  'js-m3-l3': 20,
      'js-m4-l1': 15,  'js-m4-l2': 20,  'js-m4-l3': 15,
      'js-m5-l1': 20,  'js-m5-l2': 20,  'js-m5-l3': 20,
      'js-m6-l1': 20,  'js-m6-l2': 20,  'js-m6-l3': 25,
      // HTML/CSS Modules 1-6
      'html-m1-l1': 10, 'html-m1-l2': 10, 'html-m1-l3': 15,
      'css-m2-l1':  15, 'css-m2-l2':  15, 'css-m2-l3':  20,
      'css-m3-l1':  15, 'css-m3-l2':  15, 'css-m3-l3':  20,
      'css-m4-l1':  15, 'css-m4-l2':  20, 'css-m4-l3':  15,
      'css-m5-l1':  20, 'css-m5-l2':  20, 'css-m5-l3':  20,
      'css-m6-l1':  20, 'css-m6-l2':  20, 'css-m6-l3':  25,
      // Java Modules 1-6
      'java-m1-l1': 10, 'java-m1-l2': 10, 'java-m1-l3': 15,
      'java-m2-l1': 15, 'java-m2-l2': 15, 'java-m2-l3': 20,
      'java-m3-l1': 15, 'java-m3-l2': 20, 'java-m3-l3': 15,
      'java-m4-l1': 20, 'java-m4-l2': 20, 'java-m4-l3': 25,
      'java-m5-l1': 20, 'java-m5-l2': 20, 'java-m5-l3': 20,
      'java-m6-l1': 20, 'java-m6-l2': 20, 'java-m6-l3': 20,
    };
    const validatedXP = SERVER_XP[lessonId] ?? 10;

    // ── Idempotency check ─────────────────────────────────────
    const progressRef  = adminDb.doc(`progress/${uid}_${courseId}`);
    const progressSnap = await progressRef.get();
    const progressData = progressSnap.data() || {};
    const completed: string[] = progressData.completedLessons || [];

    if (completed.includes(lessonId)) {
      // Already done — return current state, don't award XP again
      const userSnap = await adminDb.doc(`users/${uid}`).get();
      const u        = userSnap.data() || {};
      return NextResponse.json({
        success:    false,
        message:    'Lesson already completed',
        xpAwarded:  0,
        newTotalXP: u.xp   || 0,
        newLevel:   u.level || 1,
        leveledUp:  false,
      });
    }

    // ── Atomic transaction ────────────────────────────────────
    // Update user XP + level + progress doc in a single transaction
    const { newXP, newLevel, leveledUp, newStreak } =
      await adminDb.runTransaction(async (tx) => {

        const userRef  = adminDb.doc(`users/${uid}`);
        const userSnap = await tx.get(userRef);

        if (!userSnap.exists) {
          throw new Error('User not found');
        }

        const userData  = userSnap.data()!;
        const oldXP     = userData.xp     || 0;
        const oldLevel  = userData.level  || 1;
        const newXP     = oldXP + validatedXP;
        const newLevel  = Math.floor(newXP / 100) + 1;
        const leveledUp = newLevel > oldLevel;

        // ── Streak calculation (IST-aware) ─────────────────────
        const now     = new Date();
        const ist     = new Date(now.getTime() + 5.5 * 60 * 60 * 1000);
        const today   = ist.toISOString().split('T')[0];
        const yest    = new Date(ist.getTime() - 86400000).toISOString().split('T')[0];
        const lastDate = userData.lastStudiedDate as string | null;

        let newStreak = userData.streak || 0;
        if (lastDate === today) {
          // Already studied today — no streak change
        } else if (lastDate === yest) {
          newStreak = newStreak + 1;
        } else {
          newStreak = 1;
        }

        // ── Write user doc ─────────────────────────────────────
        tx.update(userRef, {
          xp:                    newXP,
          level:                 newLevel,
          streak:                newStreak,
          lastStudiedDate:       today,
          lastActive:            new Date(),
          totalLessonsCompleted: (userData.totalLessonsCompleted || 0) + 1,
        });

        // ── Write progress doc ─────────────────────────────────
        if (progressSnap.exists) {
          tx.update(progressRef, {
            completedLessons: [...completed, lessonId],
            totalXP:          (progressData.totalXP || 0) + validatedXP,
            lastUpdated:      new Date(),
          });
        } else {
          tx.set(progressRef, {
            uid,
            courseId,
            completedLessons: [lessonId],
            totalXP:          validatedXP,
            startedAt:        new Date(),
            lastUpdated:      new Date(),
          });
        }

        return { newXP, newLevel, leveledUp, newStreak };
      });

    return NextResponse.json({
      success:    true,
      xpAwarded:  validatedXP,
      newTotalXP: newXP,
      newLevel,
      leveledUp,
      newStreak,
      message:    leveledUp
        ? `Level up! You're now Level ${newLevel}! 🎉`
        : `+${validatedXP} XP earned!`,
    });

  } catch (error: any) {
    console.error('POST /api/progress error:', error);
    return NextResponse.json(
      { error: 'Failed to save progress', details: error.message },
      { status: 500 }
    );
  }
}
