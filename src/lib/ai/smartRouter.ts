// src/lib/ai/smartRouter.ts
// ─────────────────────────────────────────────────────────────
// SMART AI ROUTER
//
// Enhanced routing that layers on top of the basic ai-router:
//
//   1. Check knowledge base → instant answer, no API call
//   2. Check response cache → cached answer, no API call
//   3. Parse known errors  → local explanation, no API call
//   4. Route to Claude or OpenAI based on task type
//   5. Save result to cache for future requests
//
// This dramatically reduces API costs and response times.
//
// Request flow:
//   Input → KB lookup → Cache lookup → AI call → Cache save → Output
// ─────────────────────────────────────────────────────────────

import { aiCache, generateCacheKey }          from './responseCache';
import { knowledgeBase }                       from './knowledgeBase';
import { parseError, buildErrorExplanationPrompt } from './errorExplainer';
import { buildChallengePrompt }                from './challengeGenerator';
import type { AITask }                         from '@/lib/ai-router';

// ── Request types ──────────────────────────────────────────────

export interface SmartAIRequest {
  task:        AITask | 'error_explain' | 'challenge' | 'weak_topic';
  prompt:      string;
  code?:       string;
  language?:   string;
  context?:    string;
  lessonTitle?:  string;
  lessonTopics?: string[];
  difficulty?: 'easy' | 'medium' | 'hard';
  forceRefresh?: boolean;  // skip cache
}

export interface SmartAIResponse {
  content:    string;
  source:     'knowledge_base' | 'cache' | 'claude' | 'openai' | 'local_parser';
  cached:     boolean;
  latencyMs:  number;
  tokensUsed?: number;
}

// ── System prompts per task ────────────────────────────────────
const SYSTEM_PROMPTS: Record<string, string> = {
  explain: `You are CodeGuru AI, a friendly coding mentor. Explain this concept clearly for a beginner.
- Use simple language and relatable analogies (Indian context when possible)
- Include a short code example
- Keep response under 200 words
- Format with markdown: **bold** for key terms, \`code\` for inline code`,

  hint: `You are CodeGuru AI giving a hint. Be helpful but DON'T give the answer away.
- Give ONE specific hint
- Ask a guiding question that helps the learner think
- Keep under 50 words
- Start with 💡`,

  quiz_explain: `You are CodeGuru AI explaining a quiz answer to a beginner.
- Explain WHY the correct answer is right
- Explain why the other options are wrong (briefly)
- Use simple language
- Keep under 150 words`,

  review: `You are CodeGuru AI reviewing beginner code. Be encouraging but honest.
- Start with what they did well (1 thing)
- Point out 1-2 specific issues with line references
- Suggest ONE improvement
- Keep under 200 words`,

  error_explain: `You are CodeGuru AI explaining a programming error to a beginner.
- Explain WHAT went wrong in plain English
- Explain WHY it happened
- Give a concrete fix with a code example
- Be encouraging — mistakes are normal
- Keep under 200 words`,

  challenge: `You are CodeGuru AI creating a coding challenge. Generate a challenge JSON object.
Respond ONLY with valid JSON — no markdown, no explanation.`,

  weak_topic: `You are CodeGuru AI creating a personalized study recommendation.
- Acknowledge the learner's progress first (encouraging)
- Explain which topic needs more work and why
- Give a specific 3-step action plan
- Keep it motivational and actionable
- Under 150 words`,

  debug: `You are a ${''} debugging expert. Analyze the code for errors.
1. Identify the issue
2. Explain why it's wrong
3. Show the fixed code
4. Brief explanation of the fix`,
};

// ── Main smart router function ────────────────────────────────
// Called from Next.js API routes — NOT from client directly
export async function smartRoute(
  req:        SmartAIRequest,
  anthropicKey: string,
  openaiKey:    string
): Promise<SmartAIResponse> {
  const startTime = Date.now();

  // ── Step 1: Knowledge Base lookup ────────────────────────────
  // Only for explain and quiz_explain tasks
  if (!req.forceRefresh && (req.task === 'explain' || req.task === 'quiz_explain')) {
    const kbResult = knowledgeBase.search(req.prompt, req.language);
    if (kbResult) {
      return {
        content:   kbResult.answer,
        source:    'knowledge_base',
        cached:    false,
        latencyMs: Date.now() - startTime,
      };
    }
  }

  // ── Step 2: Local error parser ────────────────────────────────
  if (req.task === 'error_explain' && req.code) {
    const parsed = parseError(req.prompt, req.language || 'python');
    if (parsed.isKnown && parsed.explanation) {
      const content = buildLocalErrorResponse(parsed);
      return {
        content,
        source:    'local_parser',
        cached:    false,
        latencyMs: Date.now() - startTime,
      };
    }
    // Unknown error — will fall through to Claude
    req.prompt = buildErrorExplanationPrompt(req.code, req.prompt, req.language || 'python');
    req.task   = 'explain'; // reroute to explain
  }

  // ── Step 3: Cache lookup ───────────────────────────────────────
  if (!req.forceRefresh && aiCache.isCacheable(req.task)) {
    const cacheKey = generateCacheKey(req.task, req.prompt, req.language, req.context);
    const cached   = aiCache.get(cacheKey);
    if (cached) {
      return {
        content:   cached,
        source:    req.task === 'debug' ? 'openai' : 'claude',
        cached:    true,
        latencyMs: Date.now() - startTime,
      };
    }
  }

  // ── Step 4: Challenge generation ─────────────────────────────
  if (req.task === 'challenge') {
    if (!req.lessonTitle || !req.lessonTopics) {
      return { content: 'Challenge generation requires lessonTitle and lessonTopics', source: 'claude', cached: false, latencyMs: 0 };
    }
    req.prompt = buildChallengePrompt(
      req.lessonTitle,
      req.lessonTopics,
      req.language || 'python',
      req.difficulty || 'easy'
    );
  }

  // ── Step 5: Route to appropriate AI ──────────────────────────
  const useOpenAI = req.task === 'debug' || req.task === 'optimize';
  let content: string;
  let tokensUsed: number | undefined;

  if (useOpenAI) {
    const result = await callOpenAI(req, openaiKey);
    content    = result.content;
    tokensUsed = result.tokens;
  } else {
    const result = await callClaude(req, anthropicKey);
    content    = result.content;
    tokensUsed = result.tokens;
  }

  // ── Step 6: Save to cache ─────────────────────────────────────
  if (aiCache.isCacheable(req.task) && content) {
    const cacheKey = generateCacheKey(req.task, req.prompt, req.language, req.context);
    aiCache.set(cacheKey, content, req.task, useOpenAI ? 'openai' : 'claude');
  }

  return {
    content,
    source:    useOpenAI ? 'openai' : 'claude',
    cached:    false,
    latencyMs: Date.now() - startTime,
    tokensUsed,
  };
}

// ── Claude caller ─────────────────────────────────────────────
async function callClaude(
  req:    SmartAIRequest,
  apiKey: string
): Promise<{ content: string; tokens: number }> {

  const systemPrompt = SYSTEM_PROMPTS[req.task] ||
    `You are CodeGuru AI, a friendly coding mentor for beginners. Be clear, encouraging, and concise.`;

  let userContent = req.prompt;
  if (req.code)    userContent += `\n\n\`\`\`${req.language || ''}\n${req.code}\n\`\`\``;
  if (req.context) userContent = `Context: ${req.context}\n\n${userContent}`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method:  'POST',
    headers: {
      'Content-Type':  'application/json',
      'x-api-key':     apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model:      'claude-opus-4-20250514',
      max_tokens: req.task === 'hint' ? 150 : req.task === 'challenge' ? 800 : 600,
      system:     systemPrompt,
      messages:   [{ role: 'user', content: userContent }],
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Claude API error ${response.status}`);
  }

  const data = await response.json();
  const content = data.content?.[0]?.text || '';
  const tokens  = (data.usage?.input_tokens || 0) + (data.usage?.output_tokens || 0);
  return { content, tokens };
}

// ── OpenAI caller ─────────────────────────────────────────────
async function callOpenAI(
  req:    SmartAIRequest,
  apiKey: string
): Promise<{ content: string; tokens: number }> {

  const language     = req.language || 'code';
  const systemPrompt = SYSTEM_PROMPTS.debug.replace('${\'\'}', language);

  let userContent = req.prompt;
  if (req.code)    userContent += `\n\n\`\`\`${language}\n${req.code}\n\`\`\``;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method:  'POST',
    headers: {
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model:       'gpt-4o-mini',
      temperature: 0.3,
      max_tokens:  800,
      messages:    [
        { role: 'system', content: systemPrompt },
        { role: 'user',   content: userContent },
      ],
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `OpenAI API error ${response.status}`);
  }

  const data    = await response.json();
  const content = data.choices?.[0]?.message?.content || '';
  const tokens  = data.usage?.total_tokens || 0;
  return { content, tokens };
}

// ── Local error response builder ──────────────────────────────
function buildLocalErrorResponse(parsed: ReturnType<typeof parseError>): string {
  return [
    `## ${parsed.type}`,
    '',
    parsed.explanation || parsed.message,
    '',
    parsed.suggestion ? `💡 **Quick fix:** ${parsed.suggestion}` : '',
  ].filter(l => l !== undefined).join('\n');
}
