// functions/src/progress/checkBadges.ts
// ─────────────────────────────────────────────────────────────
// FIRESTORE TRIGGER: onUserUpdate → checkBadges
//
// Fires whenever a user's document is updated in Firestore.
// Checks whether any new badges should be awarded based on
// the updated values (XP, streak, lessons completed etc.)
//
// WHY a Firestore trigger vs client-side badge checking?
//
//   The client (progressStore) does optimistic badge checking
//   for instant UI feedback. But the server must also verify
//   because:
//   - Prevents badge manipulation (user editing localStorage)
//   - Ensures badges are correct even if client misses an update
//   - Server badges are used for certificates and leaderboards
//
// DEDUPLICATION:
//   Before awarding a badge, we check if user.badges array
//   already contains that badge ID. This is idempotent —
//   running it multiple times won't duplicate badges.
// ─────────────────────────────────────────────────────────────

import * as functions   from 'firebase-functions';
import * as admin       from 'firebase-admin';

const db = admin.firestore();

// ── Badge Definitions (server-authoritative) ──────────────────
interface BadgeDef {
  id:          string;
  name:        string;
  icon:        string;
  description: string;
  // Condition function: returns true if badge should be awarded
  condition:   (data: admin.firestore.DocumentData) => boolean;
}

const BADGE_DEFINITIONS: BadgeDef[] = [
  // ── Lesson count badges ──────────────────────────────────────
  {
    id:          'first_lesson',
    name:        'First Step',
    icon:        '👶',
    description: 'Completed your first lesson',
    condition:   d => (d.totalLessonsCompleted || 0) >= 1,
  },
  {
    id:          'five_lessons',
    name:        'Getting Started',
    icon:        '📗',
    description: 'Completed 5 lessons',
    condition:   d => (d.totalLessonsCompleted || 0) >= 5,
  },
  {
    id:          'ten_lessons',
    name:        'Committed Learner',
    icon:        '📚',
    description: 'Completed 10 lessons',
    condition:   d => (d.totalLessonsCompleted || 0) >= 10,
  },

  // ── XP badges ────────────────────────────────────────────────
  {
    id:          'xp_100',
    name:        'XP Collector',
    icon:        '⭐',
    description: 'Earned 100 XP',
    condition:   d => (d.xp || 0) >= 100,
  },
  {
    id:          'xp_500',
    name:        'XP Champion',
    icon:        '💫',
    description: 'Earned 500 XP',
    condition:   d => (d.xp || 0) >= 500,
  },
  {
    id:          'xp_1000',
    name:        'XP Legend',
    icon:        '🌟',
    description: 'Earned 1000 XP',
    condition:   d => (d.xp || 0) >= 1000,
  },

  // ── Streak badges ─────────────────────────────────────────────
  {
    id:          'streak_3',
    name:        'On a Roll',
    icon:        '🔥',
    description: '3-day streak',
    condition:   d => (d.streak || 0) >= 3,
  },
  {
    id:          'streak_7',
    name:        'Week Warrior',
    icon:        '⚡',
    description: '7-day streak',
    condition:   d => (d.streak || 0) >= 7,
  },
  {
    id:          'streak_30',
    name:        'Month Master',
    icon:        '🏆',
    description: '30-day streak',
    condition:   d => (d.streak || 0) >= 30,
  },

  // ── Level badges ──────────────────────────────────────────────
  {
    id:          'level_5',
    name:        'Rising Star',
    icon:        '🌠',
    description: 'Reached Level 5',
    condition:   d => (d.level || 1) >= 5,
  },
  {
    id:          'level_10',
    name:        'Junior Developer',
    icon:        '💻',
    description: 'Reached Level 10',
    condition:   d => (d.level || 1) >= 10,
  },
];

// ── Firestore Trigger ─────────────────────────────────────────
export const checkBadgesOnUpdate = functions
  .region('asia-south1')
  .firestore
  .document('users/{uid}')
  .onUpdate(async (change, context) => {
    const { uid }    = context.params;
    const afterData  = change.after.data();
    const beforeData = change.before.data();

    // Only run if XP, streak, or lessons changed
    const relevantChanged =
      afterData.xp                    !== beforeData.xp ||
      afterData.streak                !== beforeData.streak ||
      afterData.totalLessonsCompleted !== beforeData.totalLessonsCompleted ||
      afterData.level                 !== beforeData.level;

    if (!relevantChanged) return null;

    functions.logger.info(`Checking badges for user: ${uid}`);

    // Current badges (array of badge IDs)
    const currentBadgeIds: string[] = afterData.badges || [];
    const currentBadgeSet = new Set(currentBadgeIds);

    // Find badges to award
    const newBadges: { id: string; name: string; icon: string; description: string; awardedAt: admin.firestore.FieldValue }[] = [];

    for (const badge of BADGE_DEFINITIONS) {
      // Skip if already awarded
      if (currentBadgeSet.has(badge.id)) continue;

      // Check condition against updated user data
      if (badge.condition(afterData)) {
        newBadges.push({
          id:          badge.id,
          name:        badge.name,
          icon:        badge.icon,
          description: badge.description,
          awardedAt:   admin.firestore.FieldValue.serverTimestamp(),
        });
        functions.logger.info(`Badge unlocked: ${badge.id} for user ${uid}`);
      }
    }

    if (newBadges.length === 0) return null;

    // ── Award new badges ──────────────────────────────────────
    const batch = db.batch();
    const userRef = db.doc(`users/${uid}`);

    // Add badge IDs to user.badges array
    batch.update(userRef, {
      badges: admin.firestore.FieldValue.arrayUnion(...newBadges.map(b => b.id)),
    });

    // Create individual badge documents in subcollection
    // (for richer badge data and timestamp)
    newBadges.forEach(badge => {
      const badgeRef = db.doc(`users/${uid}/badges/${badge.id}`);
      batch.set(badgeRef, badge);
    });

    // Create notifications for each new badge
    newBadges.forEach(badge => {
      const notifRef = db.collection(`users/${uid}/notifications`).doc();
      batch.set(notifRef, {
        type:     'badge_unlocked',
        title:    `🏅 Badge Unlocked: ${badge.name}`,
        message:  badge.description,
        badgeId:  badge.id,
        badgeIcon: badge.icon,
        read:     false,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    });

    await batch.commit();
    functions.logger.info(`Awarded ${newBadges.length} badges to user ${uid}`);

    return null;
  });

// ── Callable: getBadges ───────────────────────────────────────
// Called by frontend to get the user's badge list with full details
export const getUserBadges = functions
  .region('asia-south1')
  .https.onCall(async (_data, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated', 'Login required.');
    }

    const uid = context.auth.uid;

    const badgesSnap = await db
      .collection(`users/${uid}/badges`)
      .orderBy('awardedAt', 'desc')
      .get();

    const badges = badgesSnap.docs.map(doc => ({
      id:          doc.id,
      ...doc.data(),
      // Convert server timestamp to ISO string for JSON serialization
      awardedAt: doc.data().awardedAt?.toDate?.()?.toISOString() || null,
    }));

    return { badges };
  });
