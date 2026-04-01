// src/lib/judge0.ts
// ─────────────────────────────────────────────────────────
// Judge0 CE API wrapper for code execution
// RapidAPI endpoint used for simplicity
// ─────────────────────────────────────────────────────────

const JUDGE0_HOST = 'https://judge0-ce.p.rapidapi.com';

// Judge0 Language IDs
export const LANGUAGE_IDS: Record<string, number> = {
  python:     71,   // Python 3.8
  javascript: 63,   // Node.js 12
  java:       62,   // Java 13
  html:       43,   // Plain text output (HTML rendered client-side)
  css:        43,
  'html-css': 43,
};

export interface ExecutionResult {
  stdout:       string | null;
  stderr:       string | null;
  compile_output: string | null;
  status:       { id: number; description: string };
  time:         string | null;
  memory:       number | null;
}

// ── Submit Code ──────────────────────────────────────────
export async function executeCode(
  code: string,
  language: string,
  stdin: string = ''
): Promise<ExecutionResult> {
  const languageId = LANGUAGE_IDS[language.toLowerCase()];

  if (!languageId) {
    return {
      stdout: null,
      stderr: `Language "${language}" is not supported.`,
      compile_output: null,
      status: { id: 0, description: 'Unsupported Language' },
      time: null,
      memory: null,
    };
  }

  // HTML/CSS: render in browser, not via Judge0
  if (language === 'html' || language === 'css' || language === 'html-css') {
    return {
      stdout:         '[HTML_RENDER]' + code,  // Special marker for client
      stderr:         null,
      compile_output: null,
      status:         { id: 3, description: 'Accepted' },
      time:           '0',
      memory:         0,
    };
  }

  try {
    // Step 1: Submit for execution
    const submitRes = await fetch(`${JUDGE0_HOST}/submissions?base64_encoded=false&wait=false`, {
      method:  'POST',
      headers: {
        'Content-Type':   'application/json',
        'X-RapidAPI-Key': process.env.JUDGE0_API_KEY!,
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
      },
      body: JSON.stringify({
        language_id:    languageId,
        source_code:    code,
        stdin:          stdin,
        cpu_time_limit: 5,
        memory_limit:   128000,
      }),
    });

    const { token } = await submitRes.json();

    // Step 2: Poll for result (max 10 attempts, 1s apart)
    for (let attempt = 0; attempt < 10; attempt++) {
      await new Promise(r => setTimeout(r, 1000));

      const resultRes = await fetch(
        `${JUDGE0_HOST}/submissions/${token}?base64_encoded=false&fields=stdout,stderr,status,time,memory,compile_output`,
        {
          headers: {
            'X-RapidAPI-Key':  process.env.JUDGE0_API_KEY!,
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
          },
        }
      );

      const result: ExecutionResult = await resultRes.json();

      // Status IDs: 1=In Queue, 2=Processing, 3=Accepted, 4+=Error
      if (result.status.id >= 3) {
        return result;
      }
    }

    return {
      stdout: null,
      stderr: 'Execution timed out. Please try again.',
      compile_output: null,
      status: { id: 0, description: 'Timeout' },
      time: null,
      memory: null,
    };

  } catch (error: any) {
    return {
      stdout: null,
      stderr: `Execution error: ${error.message}`,
      compile_output: null,
      status: { id: 0, description: 'Network Error' },
      time: null,
      memory: null,
    };
  }
}
