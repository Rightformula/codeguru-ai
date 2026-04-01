'use client';
// src/app/dashboard/layout.tsx
// ─────────────────────────────────────────────────────────────
// DASHBOARD LAYOUT
// Wraps all protected app pages (/dashboard, /courses, /playground etc.)
// Contains:
//   - AuthGuard (redirect to login if not authenticated)
//   - Top Navbar (XP, streak, user avatar)
//   - Bottom Nav (mobile navigation)
// ─────────────────────────────────────────────────────────────

import { ReactNode }   from 'react';
import AuthGuard       from '@/components/auth/AuthGuard';
import AppNavbar       from '@/components/layout/AppNavbar';
import BottomNav       from '@/components/layout/BottomNav';
import BadgePopup      from '@/components/progress/BadgePopup';
import XpPopup         from '@/components/progress/XpPopup';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <AuthGuard>
      <div className="flex flex-col min-h-screen bg-[#0A0A0F] text-[#E2E8F0]">

        <AppNavbar />

        <main className="flex-1 overflow-y-auto pb-20 sm:pb-0">
          {children}
        </main>

        <BottomNav />

        {/* Global popups — rendered above everything */}
        <BadgePopup />
        <XpPopup />

      </div>
    </AuthGuard>
  );
}
