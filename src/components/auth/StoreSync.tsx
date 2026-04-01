'use client';
// src/components/auth/StoreSync.tsx
// ─────────────────────────────────────────────────────────────
// STORE SYNC — the bridge between Firebase Auth (React Context)
// and Zustand stores.
//
// PROBLEM IT SOLVES:
//   AuthProvider has the Firebase user object.
//   Zustand stores need that data (uid, name, plan, XP etc.).
//   They can't talk to each other directly.
//
// SOLUTION:
//   StoreSync is a "headless" component (renders nothing visible).
//   It sits inside AuthProvider, watches for auth changes,
//   and pushes the data into both authStore and progressStore.
//
// WHERE IT'S USED:
//   In src/app/layout.tsx, INSIDE AuthProvider:
//   <AuthProvider>
//     <StoreSync />         ← here
//     <ToastProvider>
//       {children}
//     </ToastProvider>
//   </AuthProvider>
//
// DATA FLOW:
//   Firebase → AuthProvider (context) → StoreSync → Zustand stores → Components
// ─────────────────────────────────────────────────────────────

import { useEffect } from 'react';
import { useAuth }   from '@/components/auth/AuthProvider';
import { useAuthStore }     from '@/store/authStore';
import { useProgressStore } from '@/store/progressStore';

export default function StoreSync() {
  const { user, profile, loading } = useAuth();

  const setUser          = useAuthStore(s => s.setUser);
  const clearUser        = useAuthStore(s => s.clearUser);
  const setIsAuthChecked = useAuthStore(s => s.setIsAuthChecked);
  const hydrateProgress  = useProgressStore(s => s.hydrateFromFirestore);

  useEffect(() => {
    // Still loading — Firebase hasn't responded yet
    if (loading) return;

    // Auth check complete
    setIsAuthChecked(true);

    if (user && profile) {
      // ── User is logged in ─────────────────────────────────
      // Push flat user data into authStore
      setUser({
        uid:       user.uid,
        name:      profile.name      || user.displayName || 'Learner',
        email:     profile.email     || user.email       || '',
        photoURL:  profile.photoURL  || user.photoURL    || null,
        plan:      profile.plan      || 'free',
        isStudent: profile.isStudent || false,
      });

      // Push server-side progress into progressStore
      // (merges with any local progress already there)
      hydrateProgress({
        xp:               profile.xp     || 0,
        streak:           profile.streak || 0,
        level:            Math.floor((profile.xp || 0) / 100) + 1,
      });

    } else if (!user) {
      // ── User logged out ───────────────────────────────────
      clearUser();
      // Note: we intentionally do NOT clear progressStore on logout
      // so local progress isn't lost if user logs back in
    }

  }, [user, profile, loading]);

  // Renders nothing — this is a pure side-effect component
  return null;
}
