// src/app/layout.tsx
// ─────────────────────────────────────────────────────────────
// ROOT LAYOUT — wraps every single page in the app.
// This is where you put:
//   - HTML <head> metadata (title, description, OG tags)
//   - Global fonts
//   - Global providers (auth, theme, toasts)
//   - Persistent UI (navbar, footer if needed)
//
// Next.js App Router docs:
//   https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates
// ─────────────────────────────────────────────────────────────

import type { Metadata, Viewport } from 'next';
import './globals.css';
import { AuthProvider }  from '@/components/auth/AuthProvider';
import { ToastProvider } from '@/components/ui/ToastProvider';
import StoreSync         from '@/components/auth/StoreSync';

// ── Metadata ─────────────────────────────────────────────────
// Next.js exports this object to automatically populate <head>
export const metadata: Metadata = {
  title: {
    default:  'CodeGuru AI — Learn to Code',
    template: '%s | CodeGuru AI',       // e.g. "Python Basics | CodeGuru AI"
  },
  description:
    'AI-powered coding platform. Learn Python, JavaScript, HTML/CSS, and Java with Duolingo-style lessons, interactive coding, and a personal AI mentor.',
  keywords: [
    'learn coding', 'learn python', 'learn javascript',
    'coding for beginners', 'AI tutor', 'programming course India',
    'CodeGuru', 'online coding platform',
  ],
  authors:   [{ name: 'CodeGuru AI' }],
  creator:   'CodeGuru AI',

  // Open Graph (for WhatsApp, LinkedIn, Facebook previews)
  openGraph: {
    type:        'website',
    locale:      'en_IN',
    url:         'https://codeguru-ai.vercel.app',
    siteName:    'CodeGuru AI',
    title:       'CodeGuru AI — Learn to Code with AI',
    description: 'Duolingo-style coding lessons with AI mentor. Python, JavaScript, Java, HTML/CSS.',
    images: [
      {
        url:    '/og-image.png',    // Create this 1200×630 image in /public
        width:  1200,
        height: 630,
        alt:    'CodeGuru AI Platform',
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card:        'summary_large_image',
    title:       'CodeGuru AI — Learn to Code',
    description: 'AI-powered coding platform for Indian learners.',
    images:      ['/og-image.png'],
  },

  // PWA / Mobile
  manifest:  '/manifest.json',
  icons: {
    icon:   '/favicon.ico',
    apple:  '/apple-touch-icon.png',
  },

  // Prevent indexing in development
  robots: process.env.NODE_ENV === 'production'
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

// ── Viewport ──────────────────────────────────────────────────
// Separate export required in Next.js 14+
export const viewport: Viewport = {
  themeColor:         '#0A0A0F',      // Browser toolbar color (matches dark bg)
  colorScheme:        'dark',
  width:              'device-width',
  initialScale:       1,
  maximumScale:       1,              // Prevent zoom on input focus (mobile UX)
  userScalable:       false,
};

// ── Root Layout Component ─────────────────────────────────────
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      {/*
        IMPORTANT: Do NOT add manual <head> tags here.
        Use the `metadata` export above instead.
        Next.js injects it automatically.
      */}
      <body className="bg-[#0A0A0F] text-[#E2E8F0] antialiased">

        {/*
          AuthProvider: Wraps everything so any page can call
          useAuth() to get the current user.
          Defined in: src/components/auth/AuthProvider.tsx
        */}
        <AuthProvider>

          {/*
            StoreSync: Bridges Firebase user data → Zustand stores.
            Must be INSIDE AuthProvider so it can read the auth context.
            Renders nothing visible — pure side-effect component.
          */}
          <StoreSync />

          {/*
            ToastProvider: Enables toast notifications globally.
            Any component can call showToast() from useToast() hook.
            Defined in: src/components/ui/ToastProvider.tsx
          */}
          <ToastProvider>

            {/* All pages render here */}
            {children}

          </ToastProvider>
        </AuthProvider>

      </body>
    </html>
  );
}
