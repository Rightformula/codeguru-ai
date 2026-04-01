'use client';
// src/app/(app)/layout.tsx
// ─────────────────────────────────────────────────────────────
// SHARED APP LAYOUT — wraps all protected pages that need the
// top navbar and bottom navigation:
//   /courses
//   /courses/[courseId]
//   /courses/[courseId]/[lessonId]
//   /playground
//   /ai-tutor
//   /progress
//
// Note: /dashboard has its own layout that also includes this.
// We use a route group (app) to share the layout without
// affecting the URL path.
// ─────────────────────────────────────────────────────────────

import { ReactNode }   from 'react';
import AuthGuard       from '@/components/auth/AuthGuard';
import AppNavbar       from '@/components/layout/AppNavbar';
import BottomNav       from '@/components/layout/BottomNav';
import BadgePopup      from '@/components/progress/BadgePopup';
import XpPopup         from '@/components/progress/XpPopup';
import UpgradeModal    from '@/components/ui/UpgradeModal';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <AuthGuard>
      <div className="flex flex-col min-h-screen bg-[#0A0A0F] text-[#E2E8F0]">

        <AppNavbar />

        <main className="flex-1 overflow-hidden">
          {children}
        </main>

        <BottomNav />

        {/* Global UI overlays */}
        <BadgePopup />
        <XpPopup />
        <UpgradeModal />

      </div>
    </AuthGuard>
  );
}
