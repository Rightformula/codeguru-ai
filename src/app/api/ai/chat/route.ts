// src/app/api/ai/chat/route.ts
// ─────────────────────────────────────────────────────────────
// AI CHAT API ROUTE — Powers the AI Tutor chat screen.
// Uses Claude with the CodeGuru tutor persona.
// Supports multi-turn conversation history.
//
// POST /api/ai/chat
// Body: {
//   message:  string,            // Latest user message
//   history:  Array<{role, content}>, // Previous conversation
//   language?: string,           // Current course language for context
//   lessonContext?: string,       // What lesson the user is on
// }
// ─────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

// ── CodeGuru Tutor System Prompt ──────────────────────────────
const TUTOR_SYSTEM_PROMPT = `You are CodeGuru AI, a friendly and encouraging coding mentor built specifically for Indian beginner developers.

YOUR PERSONA:
- Name: CodeGuru AI
- Tone: Warm, encouraging, patient, like a dost (friend) who knows coding
- Language: Primarily English but you can sprinkle Hinglish naturally (like "bilkul sahi!", "ekdam sahi bola!", "koi baat nahi") — but only when it feels natural, not forced
- Level: Always explain as if to a complete beginner unless told otherwise

YOUR TEACHING APPROACH:
- Break complex things into simple analogies relatable to Indian life
- Always give a concrete example with every explanation
- When someone is stuck, give hints not full answers
- Celebrate small wins enthusiastically
- When code has errors, explain WHY the error happened, not just the fix
- Use bullet points and short paragraphs for readability
- Format code examples with triple backticks

WHAT YOU TEACH:
- Python, JavaScript, HTML/CSS, Java
- All beginner to advanced concepts
- Programming fundamentals, logic, debugging

WHAT YOU DON'T DO:
- Don't write complete homework/assignment solutions
- Don't be condescending
- Don't use very technical jargon without explaining it
- Don't give very long responses — be concise and conversational

RESPONSE FORMAT:
- Keep responses under 200 words when possible
- Use markdown formatting (bold, code blocks, bullet points)
- End with an encouraging note or a follow-up question when relevant`;

export async function POST(req: NextRequest) {
  try {
    const { message, history = [], language, lessonContext } = await req.json();

    if (!message?.trim()) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // ── Build System Prompt ────────────────────────────────
    let systemPrompt = TUTOR_SYSTEM_PROMPT;
    if (language) {
      systemPrompt += `\n\nCURRENT CONTEXT: The learner is currently studying ${language.toUpperCase()}.`;
    }
    if (lessonContext) {
      systemPrompt += `\nLESSON CONTEXT: ${lessonContext}`;
    }

    // ── Build Message History ──────────────────────────────
    // Limit history to last 10 messages to keep context window manageable
    // and costs predictable
    const recentHistory = history.slice(-10);

    // Format history for Anthropic API
    const messages: Anthropic.MessageParam[] = [
      ...recentHistory.map((msg: { role: string; content: string }) => ({
        role:    msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
      // Append the latest user message
      { role: 'user' as const, content: message },
    ];

    // ── Call Claude ────────────────────────────────────────
    const response = await anthropic.messages.create({
      model:      'claude-opus-4-20250514',
      max_tokens: 600,    // Keep responses concise
      system:     systemPrompt,
      messages,
    });

    const content = response.content[0].type === 'text'
      ? response.content[0].text
      : '';

    return NextResponse.json({
      content,
      provider:    'claude',
      inputTokens: response.usage.input_tokens,
      outputTokens: response.usage.output_tokens,
    });

  } catch (error: any) {
    console.error('AI chat error:', error);

    // Return a graceful fallback instead of a 500 error
    // so the chat UI doesn't break
    return NextResponse.json({
      content:  'Abhi thodi technical problem aa rahi hai. Ek minute mein dobara try karo! 🙏',
      provider: 'claude',
      error:    true,
    });
  }
}
