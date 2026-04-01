// src/app/api/code/execute/route.ts
// ─────────────────────────────────────────────────────────────
// CODE EXECUTION API ROUTE
// Receives code from the client, sends it to Judge0,
// polls for result, returns output to client.
//
// POST /api/code/execute
// Body: { code: string, language: string, stdin?: string }
// ─────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server';

// ── Judge0 Language IDs ───────────────────────────────────────
const LANGUAGE_IDS: Record<string, number> = {
  python:     71,   // Python 3.8.1
  javascript: 63,   // JavaScript (Node.js 12.14.0)
  java:       62,   // Java (OpenJDK 13.0.1)
  'html-css': 0,    // HTML/CSS — rendered client-side, not via Judge0
};

const JUDGE0_HOST = 'https://judge0-ce.p.rapidapi.com';

// ── POST Handler ──────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const { code, language, stdin = '' } = await req.json();

    // Validate inputs
    if (!code || typeof code !== 'string') {
      return NextResponse.json({ error: 'Code is required' }, { status: 400 });
    }

    // HTML/CSS — rendered in browser, not executed server-side
    if (language === 'html-css' || language === 'html' || language === 'css') {
      return NextResponse.json({
        stdout:         '[HTML_RENDER]' + code,
        stderr:         null,
        compile_output: null,
        status:         { id: 3, description: 'Accepted' },
        time:           '0',
        memory:         0,
      });
    }

    const languageId = LANGUAGE_IDS[language];
    if (!languageId) {
      return NextResponse.json(
        { error: `Language "${language}" not supported` },
        { status: 400 }
      );
    }

    // ── Step 1: Submit to Judge0 ──────────────────────────
    const submitResponse = await fetch(
      `${JUDGE0_HOST}/submissions?base64_encoded=false&wait=false`,
      {
        method:  'POST',
        headers: {
          'Content-Type':    'application/json',
          'X-RapidAPI-Key':  process.env.JUDGE0_API_KEY!,
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        },
        body: JSON.stringify({
          language_id:    languageId,
          source_code:    code,
          stdin:          stdin,
          cpu_time_limit: 5,        // 5 second time limit
          memory_limit:   131072,   // 128MB memory limit
        }),
      }
    );

    if (!submitResponse.ok) {
      const err = await submitResponse.text();
      console.error('Judge0 submit error:', err);
      return NextResponse.json(
        { error: 'Submission to code executor failed' },
        { status: 502 }
      );
    }

    const { token } = await submitResponse.json();

    // ── Step 2: Poll for Result ───────────────────────────
    // Status IDs:
    //   1 = In Queue
    //   2 = Processing
    //   3 = Accepted (success)
    //   4 = Wrong Answer
    //   5 = Time Limit Exceeded
    //   6 = Compilation Error
    //   11+ = Runtime Error variants

    for (let attempt = 0; attempt < 12; attempt++) {
      // Wait 1 second between polls
      await new Promise(resolve => setTimeout(resolve, 1000));

      const resultResponse = await fetch(
        `${JUDGE0_HOST}/submissions/${token}?base64_encoded=false&fields=stdout,stderr,status,time,memory,compile_output`,
        {
          headers: {
            'X-RapidAPI-Key':  process.env.JUDGE0_API_KEY!,
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
          },
        }
      );

      if (!resultResponse.ok) continue;

      const result = await resultResponse.json();

      // Status 1 or 2 = still running, keep polling
      if (result.status?.id <= 2) continue;

      // Done — return result to client
      return NextResponse.json(result);
    }

    // Timeout after 12 seconds
    return NextResponse.json({
      stdout:         null,
      stderr:         'Execution timed out after 12 seconds. Check for infinite loops.',
      compile_output: null,
      status:         { id: 5, description: 'Time Limit Exceeded' },
      time:           null,
      memory:         null,
    });

  } catch (error: any) {
    console.error('Code execution error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
