// src/app/api/ai/tutor/route.ts
// ─────────────────────────────────────────────────────────────
// SMART AI TUTOR ENDPOINT
//
// POST /api/ai/tutor
//
// Unified endpoint for all enhanced AI tutor features:
//   task: 'error_explain'  → explain a code execution error
//   task: 'challenge'      → generate a coding challenge
//   task: 'hint'           → context-aware hint for exercise
//   task: 'review'         → review submitted code
//   task: 'explain'        → explain a concept (with KB + cache)
//   task: 'quiz_explain'   → explain quiz answer
//   task: 'weak_topic'     → personalized weak topic advice
//
// Uses smartRouter which layers:
//   1. Knowledge base lookup (instant, free)
//   2. Response cache (instant, free)
//   3. Local error parser (instant, free)
//   4. Claude or OpenAI (paid, last resort)
//
// Authentication: Bearer token required
// ─────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server';
import { verifyRequestToken }        from '@/lib/firebase-admin';
import { smartRoute }                from '@/lib/ai/smartRouter';

export async function POST(req: NextRequest) {
  try {
    // ── Auth verification ──────────────────────────────────────
    const authHeader = req.headers.get('Authorization');
    const user       = await verifyRequestToken(authHeader);

    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // ── Parse body ─────────────────────────────────────────────
    const body = await req.json();
    const {
      task,
      prompt,
      code,
      language,
      context,
      lessonTitle,
      lessonTopics,
      difficulty,
      forceRefresh,
    } = body;

    if (!task || !prompt) {
      return NextResponse.json(
        { error: 'task and prompt are required' },
        { status: 400 }
      );
    }

    // ── Valid tasks ────────────────────────────────────────────
    const VALID_TASKS = [
      'explain', 'hint', 'review', 'quiz_explain',
      'error_explain', 'challenge', 'weak_topic',
      'debug', 'optimize',
    ];

    if (!VALID_TASKS.includes(task)) {
      return NextResponse.json(
        { error: `Invalid task. Must be one of: ${VALID_TASKS.join(', ')}` },
        { status: 400 }
      );
    }

    // ── Get API keys ───────────────────────────────────────────
    const anthropicKey = process.env.ANTHROPIC_API_KEY;
    const openaiKey    = process.env.OPENAI_API_KEY;

    if (!anthropicKey) {
      return NextResponse.json(
        { error: 'AI service not configured' },
        { status: 503 }
      );
    }

    // ── Call smart router ──────────────────────────────────────
    const result = await smartRoute(
      {
        task,
        prompt,
        code,
        language,
        context,
        lessonTitle,
        lessonTopics,
        difficulty,
        forceRefresh: Boolean(forceRefresh),
      },
      anthropicKey,
      openaiKey || ''
    );

    // ── Return response with metadata ──────────────────────────
    return NextResponse.json({
      content:   result.content,
      source:    result.source,
      cached:    result.cached,
      latencyMs: result.latencyMs,
    });

  } catch (error: any) {
    console.error('AI tutor error:', error);

    // Rate limit
    if (error.message?.includes('rate_limit') || error.message === 'RATE_LIMIT') {
      return NextResponse.json(
        { error: 'AI is busy right now. Please try again in a moment.' },
        { status: 429 }
      );
    }

    // Auth error from AI provider
    if (error.message?.includes('401') || error.message?.includes('unauthorized')) {
      return NextResponse.json(
        { error: 'AI service authentication failed.' },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: 'AI tutor request failed', details: error.message },
      { status: 500 }
    );
  }
}
