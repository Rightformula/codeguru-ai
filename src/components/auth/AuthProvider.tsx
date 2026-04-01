'use client';
// src/components/auth/AuthProvider.tsx
// ─────────────────────────────────────────────────────────────
// AuthProvider creates a React Context so every component in
// the app can access the current Firebase user without prop-drilling.
//
// Usage in any component:
//   const { user, loading } = useAuth();
// ─────────────────────────────────────────────────────────────

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { User } from 'firebase/auth';
import { onAuthChange } from '@/lib/auth';
import { getUser }      from '@/lib/firestore';
import type { UserProfile } from '@/types/course';

// ── Context Shape ─────────────────────────────────────────────
interface AuthContextType {
  user:        User | null;          // Raw Firebase user (email, uid, photoURL)
  profile:     UserProfile | null;   // Our Firestore user document (xp, streak, plan)
  loading:     boolean;              // True during initial auth check
  refreshProfile: () => Promise<void>; // Re-fetch profile from Firestore
}

// ── Create Context ────────────────────────────────────────────
const AuthContext = createContext<AuthContextType>({
  user:            null,
  profile:         null,
  loading:         true,
  refreshProfile:  async () => {},
});

// ── Provider Component ────────────────────────────────────────
interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user,    setUser]    = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch our Firestore profile document for the logged-in user
  const fetchProfile = async (uid: string) => {
    try {
      const data = await getUser(uid);
      setProfile(data as UserProfile);
    } catch (err) {
      console.error('Failed to fetch user profile:', err);
      setProfile(null);
    }
  };

  // Re-fetch profile (useful after XP updates, plan upgrades etc.)
  const refreshProfile = async () => {
    if (user?.uid) {
      await fetchProfile(user.uid);
    }
  };

  useEffect(() => {
    // onAuthChange returns an unsubscribe function
    // Firebase calls our callback whenever the auth state changes:
    //   - User logs in → callback with User object
    //   - User logs out → callback with null
    //   - Page refresh → callback fires once with stored session
    const unsubscribe = onAuthChange(async (firebaseUser) => {
      setUser(firebaseUser);

      if (firebaseUser) {
        // User is logged in — load their Firestore profile
        await fetchProfile(firebaseUser.uid);
      } else {
        // User logged out — clear profile
        setProfile(null);
      }

      // Auth check complete — hide loading screen
      setLoading(false);
    });

    // Cleanup: unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const value: AuthContextType = {
    user,
    profile,
    loading,
    refreshProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// ── useAuth Hook ──────────────────────────────────────────────
// This is what components import to access auth state.
// Example usage:
//
//   import { useAuth } from '@/components/auth/AuthProvider';
//   const { user, profile, loading } = useAuth();
//
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside <AuthProvider>');
  }
  return context;
}
