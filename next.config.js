/** @type {import('next').NextConfig} */

const isDev  = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

const nextConfig = {

  reactStrictMode: true,

  // ── Image optimization ──────────────────────────────────────
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'firebasestorage.googleapis.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },

  // ── Bundle size: exclude heavy server-only packages from client ──

  // ── Webpack ────────────────────────────────────────────────────
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, path: false, os: false, crypto: false,
        stream: false, buffer: false,
      };
    }
    return config;
  },

  // ── Experimental ───────────────────────────────────────────────
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        'codeguru-ai.vercel.app',
        'codeguru.ai',
        'www.codeguru.ai',
      ],
    },
  },

  // ── Security & CORS headers ─────────────────────────────────────
  async headers() {
    const securityHeaders = [
      { key: 'X-Frame-Options',              value: 'DENY' },
      { key: 'X-Content-Type-Options',       value: 'nosniff' },
      { key: 'X-DNS-Prefetch-Control',       value: 'on' },
      { key: 'Referrer-Policy',              value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy',           value: 'camera=(), microphone=(), geolocation=()' },
      ...(isProd ? [{
        key:   'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
      }] : []),
    ];

    return [
      // Security headers on all pages
      {
        source:  '/(.*)',
        headers: securityHeaders,
      },
      // API CORS headers — restrict to our own origin in production
      {
        source:  '/api/:path*',
        headers: [
          {
            key:   'Access-Control-Allow-Origin',
            value: isProd ? appUrl : '*',
          },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
          { key: 'Access-Control-Max-Age',       value: '86400' },
        ],
      },
      // Cache static assets
      {
        source:  '/static/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      // No cache on API routes
      {
        source:  '/api/:path*',
        headers: [{ key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate' }],
      },
    ];
  },

  // ── Redirects ────────────────────────────────────────────────────
// async redirects() {
//   return [
//     { source: '/home', destination: '/', permanent: true },
//     { source: '/login', destination: '/(auth)/login', permanent: false },
//     { source: '/signup', destination: '/(auth)/signup', permanent: false },
//   ];
// }
// ── Sentry integration (only if DSN is configured) ──────────────
const sentinelDSN = process.env.NEXT_PUBLIC_SENTRY_DSN;

if (sentinelDSN) {
  try {
    const { withSentryConfig } = require('@sentry/nextjs');
    module.exports = withSentryConfig(
      nextConfig,
      {
        // Sentry organization and project
        org:     process.env.SENTRY_ORG     || '',
        project: process.env.SENTRY_PROJECT || 'codeguru-ai',
        // Upload source maps for better stack traces
        silent:  true,
        // Reduce bundle size by hiding source maps in production
        hideSourceMaps: isProd,
        // Disable Sentry SDK telemetry
        telemetry: false,
      },
      {
        // Sentry runtime config
        widenClientFileUpload:   true,
        transpileClientSDK:      true,
        tunnelRoute:             '/monitoring',
        disableLogger:           true,
        automaticVercelMonitors: true,
      }
    );
  } catch {
    // @sentry/nextjs not installed — skip
    module.exports = nextConfig;
  }
} else {
  module.exports = nextConfig;
}
