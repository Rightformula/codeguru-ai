// src/app/api/cron/cache-warmup/route.ts
// ─────────────────────────────────────────────────────────────
// CACHE WARMUP CRON — runs at 6 AM IST
// Pre-fetches the most common AI explanations so users get
// instant responses during peak hours (8 AM–12 PM IST).
// ─────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server';
import { serverLog }                 from '@/lib/monitoring';

// Most commonly requested explanations
const WARMUP_REQUESTS = [
  { task: 'explain', prompt: 'What is a variable in Python?',       language: 'python' },
  { task: 'explain', prompt: 'How does a for loop work in Python?', language: 'python' },
  { task: 'explain', prompt: 'What is a function in JavaScript?',   language: 'javascript' },
  { task: 'explain', prompt: 'What is the box model in CSS?',       language: 'html-css' },
  { task: 'explain', prompt: 'What is a class in Java?',            language: 'java' },
];

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const baseUrl   = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const secretKey = process.env.INTERNAL_API_SECRET;

  if (!secretKey) {
    return NextResponse.json({ error: 'INTERNAL_API_SECRET not set' }, { status: 500 });
  }

  let warmedUp = 0;
  const errors: string[] = [];

  for (const request of WARMUP_REQUESTS) {
    try {
      const res = await fetch(`${baseUrl}/api/ai/tutor`, {
        method:  'POST',
        headers: {
          'Content-Type':     'application/json',
          'Authorization':    `Bearer ${secretKey}`,
          'X-Internal-Cron': '1',
        },
        body: JSON.stringify(request),
      });

      if (res.ok) {
        const data = await res.json();
        if (!data.cached) warmedUp++;
      }
    } catch (err: any) {
      errors.push(err.message);
    }

    // Small delay between requests to avoid overwhelming Claude
    await new Promise(r => setTimeout(r, 500));
  }

  serverLog('info', 'Cache warmup completed', { warmedUp, errors: errors.length });

  return NextResponse.json({
    success:  true,
    warmedUp,
    total:    WARMUP_REQUESTS.length,
    errors:   errors.length > 0 ? errors : undefined,
  });
}
