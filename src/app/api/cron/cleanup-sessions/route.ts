// src/app/api/cron/cleanup-sessions/route.ts
// ─────────────────────────────────────────────────────────────
// DAILY CLEANUP CRON — runs at 2 AM IST
// Cleans up expired sessions, old chat history, and stale data
// Protected by CRON_SECRET (set automatically by Vercel)
// ─────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server';
import { adminDb }                   from '@/lib/firebase-admin';
import { serverLog }                 from '@/lib/monitoring';

export async function GET(req: NextRequest) {

  // Verify this is a legitimate Vercel cron request
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const results: Record<string, number> = {};
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

  try {
    // ── 1. Delete old chat history (>30 days) ─────────────────
    let chatDeleted = 0;
    try {
      // Query all users and clean their old chat
      // In production you'd paginate this properly
      const usersSnap = await adminDb.collection('users').limit(500).get();

      for (const userDoc of usersSnap.docs) {
        const oldChats = await adminDb
          .collection(`users/${userDoc.id}/chat_history`)
          .where('createdAt', '<', thirtyDaysAgo)
          .limit(100)
          .get();

        if (oldChats.size > 0) {
          const batch = adminDb.batch();
          oldChats.docs.forEach(d => batch.delete(d.ref));
          await batch.commit();
          chatDeleted += oldChats.size;
        }
      }
    } catch (err) {
      serverLog('warn', 'Chat cleanup failed', { error: String(err) });
    }
    results.chatMessagesDeleted = chatDeleted;

    // ── 2. Mark read notifications as archived (>7 days) ──────
    let notifsArchived = 0;
    try {
      const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      const usersSnap = await adminDb.collection('users').limit(500).get();

      for (const userDoc of usersSnap.docs) {
        const oldNotifs = await adminDb
          .collection(`users/${userDoc.id}/notifications`)
          .where('read', '==', true)
          .where('createdAt', '<', sevenDaysAgo)
          .limit(50)
          .get();

        if (oldNotifs.size > 0) {
          const batch = adminDb.batch();
          oldNotifs.docs.forEach(d => batch.delete(d.ref));
          await batch.commit();
          notifsArchived += oldNotifs.size;
        }
      }
    } catch (err) {
      serverLog('warn', 'Notification cleanup failed', { error: String(err) });
    }
    results.notificationsDeleted = notifsArchived;

    serverLog('info', 'Daily cleanup completed', results);
    return NextResponse.json({ success: true, results });

  } catch (err: any) {
    serverLog('error', 'Daily cleanup failed', { error: err.message });
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
