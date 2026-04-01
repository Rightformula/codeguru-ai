// src/store/authStore.ts
// ─────────────────────────────────────────────────────────────
// AUTH STORE — manages logged-in user state globally.
//
// WHY ZUSTAND + Firebase AuthProvider both?
//   - AuthProvider (React Context): handles the Firebase session listener.
//     It runs onAuthStateChanged and keeps the raw Firebase `User` object.
//
//   - authStore (Zustand): a lightweight, fast client-side store for
//     UI-level state — things like "is the auth modal open?", "is a login
//     request in-flight?", and a flat copy of user data that any component
//     can read WITHOUT a React Context provider above it.
//
// Rule of thumb:
//   useAuth()      → when you need user/profile inside a React component
//   useAuthStore() → when you need auth state in a utility/hook/store
//
// ─────────────────────────────────────────────────────────────

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// ── Types ─────────────────────────────────────────────────────
export interface AuthUser {
  uid:       string;
  name:      string;
  email:     string;
  photoURL:  string | null;
  plan:      'free' | 'starter' | 'pro' | 'multi' | 'bundle';
  isStudent: boolean;
}

interface AuthState {
  // ── State ──────────────────────────────────────────────
  user:           AuthUser | null;    // Currently logged-in user (flat, serializable)
  isLoading:      boolean;            // True during login/signup API call
  isAuthChecked:  boolean;            // True once Firebase has confirmed session status
  authModalOpen:  boolean;            // Is the login/signup modal showing?
  authModalTab:   'login' | 'signup'; // Which tab is the modal on?

  // ── Actions ────────────────────────────────────────────
  setUser:          (user: AuthUser | null) => void;
  setIsLoading:     (loading: boolean)      => void;
  setIsAuthChecked: (checked: boolean)      => void;
  openAuthModal:    (tab?: 'login' | 'signup') => void;
  closeAuthModal:   ()                      => void;
  clearUser:        ()                      => void;
}

// ── Store ─────────────────────────────────────────────────────
export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        // ── Initial State ──────────────────────────────────
        user:           null,
        isLoading:      false,
        isAuthChecked:  false,
        authModalOpen:  false,
        authModalTab:   'login',

        // ── setUser ────────────────────────────────────────
        // Called by AuthProvider when Firebase reports a logged-in user.
        // Stores a flat, serializable version of the user (no Firebase
        // User methods — just the data fields we need in the UI).
        setUser: (user) => set(
          { user },
          false,
          'auth/setUser'
        ),

        // ── setIsLoading ───────────────────────────────────
        // Called before and after login/signup network requests.
        // Used to show loading spinners on buttons.
        setIsLoading: (isLoading) => set(
          { isLoading },
          false,
          'auth/setIsLoading'
        ),

        // ── setIsAuthChecked ───────────────────────────────
        // Called once by AuthProvider after the first onAuthStateChanged
        // fires. Until this is true, we show a full-page loading screen
        // so the user doesn't see a flash of the login page.
        setIsAuthChecked: (isAuthChecked) => set(
          { isAuthChecked },
          false,
          'auth/setIsAuthChecked'
        ),

        // ── openAuthModal ──────────────────────────────────
        // Used by CTA buttons like "Start Free" on the landing page
        // to open the login/signup modal without navigating.
        openAuthModal: (tab = 'login') => set(
          { authModalOpen: true, authModalTab: tab },
          false,
          'auth/openModal'
        ),

        // ── closeAuthModal ─────────────────────────────────
        closeAuthModal: () => set(
          { authModalOpen: false },
          false,
          'auth/closeModal'
        ),

        // ── clearUser ──────────────────────────────────────
        // Called on logout. Clears user data from store AND from
        // localStorage (because of the persist middleware).
        clearUser: () => set(
          { user: null, isAuthChecked: true },
          false,
          'auth/clearUser'
        ),
      }),

      {
        // ── Persist Config ─────────────────────────────────
        // Saves auth state to localStorage so user stays "logged in"
        // on page refresh (Firebase also does this, but this gives us
        // instant UI without waiting for Firebase to respond).
        name: 'codeguru-auth',

        // Only persist these fields — NOT isLoading or modal state
        partialize: (state) => ({
          user:          state.user,
          isAuthChecked: state.isAuthChecked,
        }),
      }
    ),
    { name: 'AuthStore' } // DevTools label
  )
);

// ── Selector Helpers ──────────────────────────────────────────
// Use these for cleaner component code:
//   const isLoggedIn = useIsLoggedIn();
//   const user = useCurrentUser();

export const useCurrentUser   = () => useAuthStore(s => s.user);
export const useIsLoggedIn    = () => useAuthStore(s => s.user !== null);
export const useAuthLoading   = () => useAuthStore(s => s.isLoading);
export const useIsAuthChecked = () => useAuthStore(s => s.isAuthChecked);
export const useAuthModal     = () => useAuthStore(s => ({
  open: s.authModalOpen,
  tab:  s.authModalTab,
}));
