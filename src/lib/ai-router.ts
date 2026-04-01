// src/lib/ai-router.ts
// ─────────────────────────────────────────────────────────
// AI Router: Routes tasks between Claude (explanations)
// and OpenAI (debugging) based on task type.
// ─────────────────────────────────────────────────────────

export type AITask =
  | 'explain'      // Claude → Explain a concept in simple terms
  | 'debug'        // OpenAI → Debug code and find errors
  | 'hint'         // Claude → Give a hint for an exercise
  | 'review'       // Claude → Review learner's code
  | 'chat'         // Claude → General tutor conversation
  | 'quiz_explain' // Claude → Explain quiz answer
  | 'optimize';    // OpenAI → Suggest code optimizations

export interface AIRequest {
  task:      AITask;
  prompt:    string;
  code?:     string;
  language?: string;
  context?:  string;
}

export interface AIResponse {
  content:   string;
  provider:  'claude' | 'openai';
  tokensUsed?: number;
}

// ── Routing Logic ────────────────────────────────────────
// Claude tasks: conceptual, explanations, mentoring, hints
// OpenAI tasks: code debugging, optimization, error analysis
const CLAUDE_TASKS:  AITask[] = ['explain', 'hint', 'review', 'chat', 'quiz_explain'];
const OPENAI_TASKS:  AITask[] = ['debug', 'optimize'];

export function getProvider(task: AITask): 'claude' | 'openai' {
  if (CLAUDE_TASKS.includes(task))  return 'claude';
  if (OPENAI_TASKS.includes(task))  return 'openai';
  return 'claude'; // default fallback
}

// ── Prompt Builder ────────────────────────────────────────
export function buildSystemPrompt(task: AITask, language?: string): string {
  const lang = language || 'programming';

  const prompts: Record<AITask, string> = {
    explain: `You are CodeGuru, a friendly AI coding mentor for beginners learning ${lang}.
Explain concepts in simple, clear language with relatable analogies.
Use short sentences. Always include a simple example.
Avoid jargon. Be encouraging and patient.
Respond in Markdown format.`,

    debug: `You are a ${lang} debugging expert.
Analyze the code for errors, bugs, and issues.
Explain each error clearly, show the fix, and explain WHY it happened.
Format: 1) Issue found 2) Fixed code 3) Explanation.
Be precise and educational.`,

    hint: `You are CodeGuru, a coding tutor giving hints.
Give a helpful hint WITHOUT giving away the complete answer.
Guide the learner to think through the problem.
Be encouraging. Ask guiding questions.`,

    review: `You are CodeGuru reviewing a beginner's ${lang} code.
Be encouraging but honest. Point out:
1. What they did well
2. Issues to fix
3. One improvement suggestion
Keep feedback constructive and beginner-friendly.`,

    chat: `You are CodeGuru, a friendly AI coding tutor specializing in ${lang}.
You help beginners learn to code. Be conversational, patient, and encouraging.
Answer questions clearly. Use examples. Keep responses concise.
If you don't know something, say so honestly.`,

    quiz_explain: `You are CodeGuru explaining a quiz answer.
Explain WHY the correct answer is correct, and why other options are wrong.
Be clear, educational, and encouraging. Use simple language.`,

    optimize: `You are a ${lang} code optimization expert.
Analyze the code and suggest performance improvements.
Show before/after comparison. Explain trade-offs.
Focus on readability and efficiency.`,
  };

  return prompts[task] || prompts.chat;
}

// ── Client-side AI caller (calls our Next.js API routes) ──
export async function callAI(req: AIRequest): Promise<AIResponse> {
  const endpoint = req.task === 'debug' || req.task === 'optimize'
    ? '/api/ai/debug'
    : req.task === 'chat' || req.task === 'hint'
      ? '/api/ai/chat'
      : '/api/ai/explain';

  const response = await fetch(endpoint, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(req),
  });

  if (!response.ok) {
    throw new Error(`AI request failed: ${response.statusText}`);
  }

  return response.json();
}
