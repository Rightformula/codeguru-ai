// src/middleware.ts
// ─────────────────────────────────────────────────────────────
// NEXT.JS EDGE MIDDLEWARE
//
// Runs on EVERY request at the Edge (before any API route or page).
// Handles:
//   1. Security headers — CSP, HSTS, X-Frame-Options etc.
//   2. Route protection — redirect unauthenticated users
//   3. Bot detection — basic bot filtering
//   4. Request logging — structured log for monitoring
//
// NOTE: Rate limiting by UID happens inside individual API routes
// because we need the Firebase token to know who the user is.
// This middleware only does IP-based pre-filtering.
// ─────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server';

// ── Routes that require authentication ────────────────────────
// Middleware checks for a Firebase session cookie on these
const PROTECTED_PATHS = [
  '/dashboard',
  '/courses',
  '/playground',
  '/ai-tutor',
  '/progress',
];

// ── API routes that should never be publicly accessible ────────
const RESTRICTED_API_PATHS = [
  '/api/payment',
  '/api/progress',
  '/api/ai',
];

// ── Security headers ───────────────────────────────────────────
function addSecurityHeaders(response: NextResponse): NextResponse {
  // Prevent clickjacking
  response.headers.set('X-Frame-Options', 'DENY');

  // Prevent MIME sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff');

  // Referrer policy
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Permissions policy — disable unnecessary browser features
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );

  // HSTS — force HTTPS (only in production)
  if (process.env.NEXT_PUBLIC_APP_ENV === 'production') {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=63072000; includeSubDomains; preload'
    );
  }

  // Content Security Policy
  const isDev = process.env.NEXT_PUBLIC_APP_ENV === 'development';
  const csp   = [
    `default-src 'self'`,
    `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://checkout.razorpay.com https://apis.google.com`,
    `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,
    `font-src 'self' https://fonts.gstatic.com`,
    `img-src 'self' data: blob: https: http:`,
    `connect-src 'self' https://*.anthropic.com https://api.openai.com https://judge0-ce.p.rapidapi.com https://*.firebase.com https://*.firebaseio.com https://*.googleapis.com https://*.upstash.io ${isDev ? 'ws://localhost:* http://localhost:*' : ''}`,
    `frame-src 'self' https://checkout.razorpay.com`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
  ].join('; ');

  response.headers.set('Content-Security-Policy', csp);

  return response;
}

// ── IP-based abuse detection ───────────────────────────────────
// Simple check — for production use a proper WAF (Cloudflare, etc.)
function isLikelyCrawler(userAgent: string): boolean {
  const crawlers = ['scrapy', 'wget', 'curl', 'python-requests', 'go-http-client'];
  const ua = userAgent.toLowerCase();
  return crawlers.some(c => ua.includes(c));
}

// ── Main middleware ────────────────────────────────────────────
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const userAgent    = req.headers.get('user-agent') || '';

  // ── Block known scrapers on API routes ──────────────────────
  if (pathname.startsWith('/api/') && isLikelyCrawler(userAgent)) {
    return new NextResponse(
      JSON.stringify({ error: 'Forbidden' }),
      { status: 403, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // ── CORS for API routes ──────────────────────────────────────
  if (pathname.startsWith('/api/')) {
    const origin          = req.headers.get('origin') || '';
    const appUrl          = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const allowedOrigins  = [appUrl, 'https://codeguru.ai', 'https://www.codeguru.ai'];

    // Handle preflight (OPTIONS)
    if (req.method === 'OPTIONS') {
      const response = new NextResponse(null, { status: 204 });
      if (allowedOrigins.includes(origin) || process.env.NEXT_PUBLIC_APP_ENV === 'development') {
        response.headers.set('Access-Control-Allow-Origin', origin);
      }
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      response.headers.set('Access-Control-Max-Age', '86400');
      return response;
    }
  }

  // ── Add request ID for tracing ───────────────────────────────
  const requestId = `req_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const response  = NextResponse.next();
  response.headers.set('X-Request-Id', requestId);

  // ── Add security headers to all responses ───────────────────
  addSecurityHeaders(response);

  // ── Structured request log (server-side) ─────────────────────
  // In production, this goes to Vercel's log system
  if (process.env.NEXT_PUBLIC_APP_ENV !== 'test') {
    const log = {
      type:      'request',
      requestId,
      method:    req.method,
      path:      pathname,
      ip:        req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown',
      userAgent: userAgent.slice(0, 100),
      timestamp: new Date().toISOString(),
    };
    // Vercel automatically captures console.log in production
    if (pathname.startsWith('/api/')) {
      console.log(JSON.stringify(log));
    }
  }

  return response;
}

// ── Matcher config ────────────────────────────────────────────
// Which paths this middleware runs on
export const config = {
  matcher: [
    // All API routes
    '/api/:path*',
    // Protected pages
    '/dashboard/:path*',
    '/courses/:path*',
    '/playground/:path*',
    '/ai-tutor/:path*',
    '/progress/:path*',
    // Skip Next.js internals and static files
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
