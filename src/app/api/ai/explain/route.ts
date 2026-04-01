// src/app/api/ai/explain/route.ts
import { NextRequest, NextResponse }           from 'next/server';
import Anthropic                               from '@anthropic-ai/sdk';
import { buildSystemPrompt }                   from '@/lib/ai-router';
import { knowledgeBase }                       from '@/lib/ai/knowledgeBase';
import { aiCache, generateCacheKey }           from '@/lib/ai/responseCache';
import { checkRateLimit, rateLimitHeaders, rateLimitResponse } from '@/lib/rateLimiter';
import { verifyRequestToken }                  from '@/lib/firebase-admin';
import { serverLog }                           from '@/lib/monitoring';
import { adminDb }                             from '@/lib/firebase-admin';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! });

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { task, prompt, code, language, context } = body;

    // ── Auth + plan lookup ────────────────────────────────────
    const authHeader = req.headers.get("Authorization");
    const user       = await verifyRequestToken(authHeader);
    const uid        = user?.uid || "anonymous";

    // Get plan for rate limit
    let plan = "free";
    if (uid !== "anonymous") {
      try {
        const snap = await adminDb.doc(`users/${uid}`).get();
        plan = snap.data()?.plan || "free";
      } catch { /* use free */ }
    }

    // ── Rate limiting ─────────────────────────────────────────
    const rateResult = await checkRateLimit(uid, "ai", plan);
    if (!rateResult.allowed) {
      serverLog("warn", "Rate limit hit", { uid, plan, task });
      return NextResponse.json(
        rateLimitResponse(rateResult),
        { status: 429, headers: rateLimitHeaders(rateResult) }
      );
    }

    // ── Knowledge base lookup (free — no API call) ────────────
    const kbEntry = knowledgeBase.search(prompt, language);
    if (kbEntry && task === "explain") {
      return NextResponse.json({
        content:  kbEntry.answer,
        provider: "knowledge_base",
        cached:   false,
      }, { headers: rateLimitHeaders(rateResult) });
    }

    // ── Cache lookup ──────────────────────────────────────────
    const cacheKey = generateCacheKey(task || "explain", prompt, language, context);
    const cached   = aiCache.get(cacheKey);
    if (cached) {
      return NextResponse.json({
        content:  cached,
        provider: "claude",
        cached:   true,
      }, { headers: rateLimitHeaders(rateResult) });
    }

    // ── Call Claude ───────────────────────────────────────────
    const systemPrompt = buildSystemPrompt(task || "explain", language);
    let userMessage    = prompt;
    if (code)    userMessage += `

\`\`\`${language || ""}
${code}
\`\`\``;
    if (context) userMessage  = `Context: ${context}

${userMessage}`;

    const message = await anthropic.messages.create({
      model:      "claude-opus-4-20250514",
      max_tokens: 800,
      system:     systemPrompt,
      messages:   [{ role: "user", content: userMessage }],
    });

    const content = message.content[0].type === "text" ? message.content[0].text : "";

    // Cache the response
    if (content) aiCache.set(cacheKey, content, task || "explain", "claude");

    return NextResponse.json({
      content,
      provider:   "claude",
      cached:     false,
      tokensUsed: message.usage.input_tokens + message.usage.output_tokens,
    }, { headers: rateLimitHeaders(rateResult) });

  } catch (error: any) {
    serverLog("error", "Claude explain error", { error: error.message });
    if (error.status === 429) {
      return NextResponse.json({ error: "AI is busy — try again in a moment" }, { status: 429 });
    }
    return NextResponse.json(
      { error: "AI explanation failed", details: error.message },
      { status: 500 }
    );
  }
}
