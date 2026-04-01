// src/app/api/health/route.ts
// ─────────────────────────────────────────────────────────────
// HEALTH CHECK ENDPOINT
//
// GET /api/health
// GET /api/health?deep=1  (checks all dependencies)
//
// Used by:
//   - Vercel deployment: verifies app started correctly
//   - Uptime monitors (UptimeRobot, BetterUptime)
//   - Load balancers
//
// Returns:
//   200 → healthy
//   503 → unhealthy (a critical service is down)
//
// Deep check (?deep=1):
//   - Tests Firestore connection
//   - Tests AI API connectivity (without burning tokens)
//   - Tests Judge0 connectivity
// ─────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server';

interface HealthStatus {
  status:   'healthy' | 'degraded' | 'unhealthy';
  version:  string;
  env:      string;
  uptime:   number;
  checks:   Record<string, {
    status:  'ok' | 'error';
    latency?: number;
    error?:  string;
  }>;
  timestamp: string;
}

const startTime = Date.now();

export async function GET(req: NextRequest) {
  const isDeep = req.nextUrl.searchParams.get('deep') === '1';

  const status: HealthStatus = {
    status:    'healthy',
    version:   process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
    env:       process.env.NEXT_PUBLIC_APP_ENV     || 'development',
    uptime:    Math.floor((Date.now() - startTime) / 1000),
    checks:    {},
    timestamp: new Date().toISOString(),
  };

  // ── Basic checks (always run) ──────────────────────────────
  // Check env vars are set
  const requiredEnvVars = [
    'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
    'ANTHROPIC_API_KEY',
    'JUDGE0_API_KEY',
  ];

  const missingVars = requiredEnvVars.filter(v => !process.env[v]);
  if (missingVars.length > 0) {
    status.checks.env = {
      status: 'error',
      error:  `Missing: ${missingVars.join(', ')}`,
    };
    status.status = 'degraded';
  } else {
    status.checks.env = { status: 'ok' };
  }

  // ── Deep checks (only when ?deep=1) ───────────────────────
  if (isDeep) {

    // Check Firestore connectivity
    try {
      const start = Date.now();
      const { adminDb } = await import('@/lib/firebase-admin');
      await adminDb.collection('system').limit(1).get();
      status.checks.firestore = {
        status:  'ok',
        latency: Date.now() - start,
      };
    } catch (err: any) {
      status.checks.firestore = {
        status: 'error',
        error:  err.message,
      };
      status.status = 'degraded';
    }

    // Check Anthropic API key validity (model list, no tokens burned)
    try {
      const start    = Date.now();
      const response = await fetch('https://api.anthropic.com/v1/models', {
        headers: {
          'x-api-key':         process.env.ANTHROPIC_API_KEY || '',
          'anthropic-version': '2023-06-01',
        },
      });
      status.checks.claude = {
        status:  response.ok ? 'ok' : 'error',
        latency: Date.now() - start,
        error:   response.ok ? undefined : `HTTP ${response.status}`,
      };
      if (!response.ok) status.status = 'degraded';
    } catch (err: any) {
      status.checks.claude = { status: 'error', error: err.message };
      status.status = 'degraded';
    }

    // Check Judge0 (ping the status endpoint)
    try {
      const start    = Date.now();
      const response = await fetch(
        'https://judge0-ce.p.rapidapi.com/statuses',
        {
          headers: {
            'X-RapidAPI-Key':  process.env.JUDGE0_API_KEY || '',
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
          },
        }
      );
      status.checks.judge0 = {
        status:  response.ok ? 'ok' : 'error',
        latency: Date.now() - start,
        error:   response.ok ? undefined : `HTTP ${response.status}`,
      };
      if (!response.ok) status.status = 'degraded';
    } catch (err: any) {
      status.checks.judge0 = { status: 'error', error: err.message };
      status.status = 'degraded';
    }
  }

  const httpStatus = status.status === 'unhealthy' ? 503 : 200;

  return NextResponse.json(status, {
    status: httpStatus,
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type':  'application/json',
    },
  });
}
