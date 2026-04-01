// src/app/api/ai/debug/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { buildSystemPrompt } from '@/lib/ai-router';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { task, prompt, code, language } = await req.json();

    const systemPrompt = buildSystemPrompt(task || 'debug', language);

    let userMessage = prompt || 'Please debug this code:';
    if (code) userMessage += `\n\n\`\`\`${language || ''}\n${code}\n\`\`\``;

    const completion = await openai.chat.completions.create({
      model:    'gpt-4o-mini',         // Cost-effective for debugging
      messages: [
        { role: 'system',  content: systemPrompt },
        { role: 'user',    content: userMessage },
      ],
      max_tokens:   1024,
      temperature:  0.3,               // Lower temp = more precise for debugging
    });

    const content = completion.choices[0]?.message?.content || '';

    return NextResponse.json({
      content,
      provider:   'openai',
      tokensUsed: completion.usage?.total_tokens,
    });

  } catch (error: any) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      { error: 'Debug failed', details: error.message },
      { status: 500 }
    );
  }
}
