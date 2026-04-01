'use client';
// src/components/auth/AuthGuard.tsx
// ─────────────────────────────────────────────────────────────
// AuthGuard wraps protected pages (dashboard, courses, etc.)
// If user is NOT logged in → redirects to /login
// If auth is still loading → shows a spinner
// If user IS logged in → renders the page normally
//
// Usage — wrap any protected page:
//   export default function DashboardPage() {
//     return (
//       <AuthGuard>
//         <DashboardContent />
//       </AuthGuard>
//     );
//   }
// ─────────────────────────────────────────────────────────────

import { useEffect, ReactNode }    from 'react';
import { useRouter }               from 'next/navigation';
import { useAuth }                 from '@/components/auth/AuthProvider';

interface AuthGuardProps {
  children:  ReactNode;
  fallback?: ReactNode; // Optional custom loading UI
}

export default function AuthGuard({ children, fallback }: AuthGuardProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Wait until Firebase finishes checking the session
    if (loading) return;

    // No user → redirect to login
    if (!user) {
      router.replace('/login');
    }
  }, [user, loading, router]);

  // ── Loading State ──────────────────────────────────────
  // Show this while Firebase is checking the auth session
  // (happens on every page refresh — usually < 500ms)
  if (loading) {
    return fallback || (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0F] gap-4">
        {/* Spinner */}
        <div className="w-10 h-10 rounded-full border-2 border-[#1E1E2E] border-t-green-500 animate-spin" />
        <p className="text-[#64748B] text-sm">Loading CodeGuru AI...</p>
      </div>
    );
  }

  // ── Not Logged In ──────────────────────────────────────
  // Show nothing while redirect is happening
  if (!user) {
    return null;
  }

  // ── Logged In ──────────────────────────────────────────
  return <>{children}</>;
}
