// src/app/(auth)/layout.tsx
// ─────────────────────────────────────────────────────────────
// AUTH LAYOUT — wraps /login and /signup pages.
// The (auth) folder name with parentheses is a "route group" —
// it groups pages without affecting the URL path.
//
// So:
//   /login  → src/app/(auth)/login/page.tsx
//   /signup → src/app/(auth)/signup/page.tsx
//
// This layout:
// 1. Redirects already-logged-in users to /dashboard
// 2. Provides a centered card layout for auth forms
// ─────────────────────────────────────────────────────────────

'use client';

import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth }   from '@/components/auth/AuthProvider';
import Link          from 'next/link';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  // If user is already logged in, send them to dashboard
  useEffect(() => {
    if (!loading && user) {
      router.replace('/dashboard');
    }
  }, [user, loading, router]);

  // While checking auth, show minimal spinner
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0A0F]">
        <div className="w-8 h-8 rounded-full border-2 border-[#1E1E2E] border-t-green-500 animate-spin" />
      </div>
    );
  }

  // Don't flash the auth form if user is logged in and being redirected
  if (user) return null;

  return (
    <div
      className="min-h-screen flex flex-col bg-[#0A0A0F] text-[#E2E8F0]"
      style={{
        backgroundImage: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(34,197,94,0.07) 0%, transparent 60%)',
      }}
    >
      {/* Simple top bar with logo */}
      <div className="p-4 flex justify-between items-center">
        <Link href="/" className="font-display font-extrabold text-lg">
          ⚡ <span className="text-green-500">Code</span>Guru AI
        </Link>
        <Link href="/" className="text-sm text-[#64748B] hover:text-[#E2E8F0] transition-colors">
          ← Back to home
        </Link>
      </div>

      {/* Centered form area */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 text-center text-xs text-[#64748B]">
        © 2024 CodeGuru AI · Made with ❤️ for Indian learners
      </div>
    </div>
  );
}
