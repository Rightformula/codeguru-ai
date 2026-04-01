// src/hooks/useAuth.ts
// ─────────────────────────────────────────────────────────────
// useAuth HOOK
//
// WHY THIS EXISTS when AuthProvider already has useAuth()?
//
//   AuthProvider's useAuth() gives you raw Firebase state:
//     { user: FirebaseUser, profile: UserProfile, loading }
//
//   This hook wraps ACTIONS — login, signup, logout, Google auth.
//   It combines:
//     - Firebase auth lib functions (src/lib/auth.ts)
//     - authStore state updates
//     - Toast notifications
//     - Loading state management
//     - Router navigation after success
//
//   So components don't need to import from 4 different places.
//   They just call: const { login, signup, logout } = useAuthActions()
//
// NAMING CONVENTION:
//   useAuth()        → from AuthProvider — reads user/profile STATE
//   useAuthActions() → from this file   — executes auth ACTIONS
// ─────────────────────────────────────────────────────────────

'use client';

import { useState, useCallback }              from 'react';
import { useRouter }                           from 'next/navigation';
import { signIn, signUp, signInWithGoogle, logout } from '@/lib/auth';
import { useAuthStore }                        from '@/store/authStore';
import { useToast }                            from '@/components/ui/ToastProvider';
import { useAuth as useFirebaseAuth }          from '@/components/auth/AuthProvider';

// ── Re-export the Firebase auth state hook under a cleaner name ──
// Components can import both from this one file:
//   import { useCurrentUser, useAuthActions } from '@/hooks/useAuth'
export { useAuth as useCurrentUser } from '@/components/auth/AuthProvider';

// ── Return type for useAuthActions ────────────────────────────
interface AuthActions {
  // Actions
  login:          (email: string, password: string) => Promise<boolean>;
  signup:         (name: string, email: string, password: string, isStudent?: boolean) => Promise<boolean>;
  loginWithGoogle: ()                               => Promise<boolean>;
  logoutUser:     ()                                => Promise<void>;

  // State
  isLoading:      boolean;
  isLoggedIn:     boolean;
  user:           ReturnType<typeof useFirebaseAuth>['user'];
  profile:        ReturnType<typeof useFirebaseAuth>['profile'];
}

// ── Hook ──────────────────────────────────────────────────────
export function useAuthActions(): AuthActions {
  const router           = useRouter();
  const { showToast }    = useToast();
  const { user, profile } = useFirebaseAuth();
  const setIsLoading     = useAuthStore(s => s.setIsLoading);
  const isLoading        = useAuthStore(s => s.isLoading);
  const isLoggedIn       = useAuthStore(s => s.user !== null);

  // ── login ──────────────────────────────────────────────────
  // Returns true on success, false on failure (so caller can
  // conditionally redirect or update UI)
  const login = useCallback(async (
    email: string,
    password: string
  ): Promise<boolean> => {
    if (!email.trim() || !password.trim()) {
      showToast('Please fill in all fields', 'error');
      return false;
    }

    setIsLoading(true);
    try {
      await signIn(email, password);
      showToast('Welcome back! 🚀', 'success');
      router.push('/dashboard');
      return true;
    } catch (err: any) {
      // Map Firebase error codes to user-friendly messages
      const messages: Record<string, string> = {
        'auth/user-not-found':       'No account found with this email.',
        'auth/wrong-password':       'Incorrect password. Please try again.',
        'auth/invalid-email':        'Please enter a valid email address.',
        'auth/invalid-credential':   'Invalid email or password.',
        'auth/too-many-requests':    'Too many attempts. Please wait and try again.',
        'auth/user-disabled':        'This account has been disabled.',
        'auth/network-request-failed': 'Network error. Check your internet connection.',
      };
      showToast(messages[err.code] || 'Login failed. Please try again.', 'error');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [router, showToast, setIsLoading]);

  // ── signup ─────────────────────────────────────────────────
  const signup = useCallback(async (
    name:      string,
    email:     string,
    password:  string,
    isStudent: boolean = false
  ): Promise<boolean> => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      showToast('Please fill in all fields', 'error');
      return false;
    }
    if (password.length < 6) {
      showToast('Password must be at least 6 characters', 'error');
      return false;
    }
    if (!email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return false;
    }

    setIsLoading(true);
    try {
      await signUp(email, password, name);
      // Note: isStudent flag will be saved to Firestore via signUp → createUserDocument
      showToast(`Welcome to CodeGuru AI, ${name.split(' ')[0]}! 🎉`, 'success');
      router.push('/dashboard');
      return true;
    } catch (err: any) {
      const messages: Record<string, string> = {
        'auth/email-already-in-use': 'This email is already registered. Try logging in.',
        'auth/invalid-email':        'Please enter a valid email address.',
        'auth/weak-password':        'Password is too weak. Use at least 6 characters.',
        'auth/network-request-failed': 'Network error. Check your internet connection.',
      };
      showToast(messages[err.code] || 'Signup failed. Please try again.', 'error');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [router, showToast, setIsLoading]);

  // ── loginWithGoogle ────────────────────────────────────────
  const loginWithGoogle = useCallback(async (): Promise<boolean> => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      showToast('Welcome! 🎉', 'success');
      router.push('/dashboard');
      return true;
    } catch (err: any) {
      // popup-closed-by-user is not an error — user just cancelled
      if (err.code === 'auth/popup-closed-by-user') return false;
      showToast('Google sign-in failed. Please try again.', 'error');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [router, showToast, setIsLoading]);

  // ── logoutUser ─────────────────────────────────────────────
  const logoutUser = useCallback(async (): Promise<void> => {
    try {
      await logout();
      showToast('Logged out. See you soon! 👋', 'info');
      router.push('/');
    } catch {
      showToast('Logout failed. Please try again.', 'error');
    }
  }, [router, showToast]);

  return {
    login,
    signup,
    loginWithGoogle,
    logoutUser,
    isLoading,
    isLoggedIn,
    user,
    profile,
  };
}
