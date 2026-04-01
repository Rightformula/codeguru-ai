// src/app/api/ai/analyze/route.ts
// ─────────────────────────────────────────────────────────────
// LEARNER ANALYSIS ENDPOINT
//
// POST /api/ai/analyze
//
// Analyzes a learner's quiz results to identify weak topics,
// generate a study plan, and suggest exercises.
//
// Body: {
//   quizResults:       QuizResult[]
//   completedLessons:  string[]
//   courseId?:         string
//   requestStudyPlan?: boolean
//   requestExercises?: boolean
// }
//
// Response: {
//   weakTopics:       WeakTopic[]
//   studyPlan:        StudyPlan
//   exercises:        SuggestedExercise[]
//   aiAdvice?:        string   (Claude-generated if weakTopics found)
// }
// ─────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server';
import { verifyRequestToken }        from '@/lib/firebase-admin';
import {
  detectWeakTopics,
  buildStudyPlan,
  type QuizResult,
}                                    from '@/lib/ai/weakTopicDetector';
import { suggestExercises }          from '@/lib/ai/challengeGenerator';
import { aiCache, generateCacheKey } from '@/lib/ai/responseCache';

export async function POST(req: NextRequest) {
  try {
    // ── Auth ────────────────────────────────────────────────────
    const user = await verifyRequestToken(req.headers.get('Authorization'));
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    // ── Parse body ──────────────────────────────────────────────
    const {
      quizResults,
      completedLessons,
      courseId,
      requestStudyPlan  = true,
      requestExercises  = true,
      requestAiAdvice   = false,  // only if explicitly requested (costs tokens)
    } = await req.json();

    if (!quizResults || !Array.isArray(quizResults)) {
      return NextResponse.json(
        { error: 'quizResults array is required' },
        { status: 400 }
      );
    }

    // ── Detect weak topics ─────────────────────────────────────
    const weakTopics = detectWeakTopics(
      quizResults as QuizResult[],
      completedLessons || [],
      courseId
    );

    // ── Build study plan ───────────────────────────────────────
    const studyPlan = requestStudyPlan
      ? buildStudyPlan(weakTopics, completedLessons || [])
      : null;

    // ── Suggest exercises ──────────────────────────────────────
    const exercises = requestExercises
      ? suggestExercises(weakTopics, completedLessons || [], 3)
      : [];

    // ── Generate AI advice for top weak topic ──────────────────
    let aiAdvice: string | null = null;

    if (requestAiAdvice && weakTopics.length > 0) {
      const topTopic   = weakTopics[0];
      const cacheKey   = generateCacheKey(
        'weak_topic',
        `${topTopic.lessonId}:${topTopic.score}`,
        courseId
      );

      // Check cache first
      const cached = aiCache.get(cacheKey);
      if (cached) {
        aiAdvice = cached;
      } else {
        // Call Claude for personalized advice
        const apiKey = process.env.ANTHROPIC_API_KEY;
        if (apiKey) {
          try {
            const prompt = buildWeakTopicPrompt(topTopic, studyPlan?.estimatedMinutes || 15);
            const response = await fetch('https://api.anthropic.com/v1/messages', {
              method:  'POST',
              headers: {
                'Content-Type':      'application/json',
                'x-api-key':         apiKey,
                'anthropic-version': '2023-06-01',
              },
              body: JSON.stringify({
                model:      'claude-opus-4-20250514',
                max_tokens: 300,
                system: `You are CodeGuru AI, a friendly mentor. Give encouraging, actionable advice to a learner who struggled with a topic. Be warm, specific, and under 150 words. Use simple language. Include at least one actionable step.`,
                messages: [{ role: 'user', content: prompt }],
              }),
            });

            if (response.ok) {
              const data = await response.json();
              aiAdvice   = data.content?.[0]?.text || null;
              if (aiAdvice) {
                aiCache.set(cacheKey, aiAdvice, 'weak_topic', 'claude');
              }
            }
          } catch (err) {
            console.error('AI advice generation failed:', err);
            // Non-fatal — return without AI advice
          }
        }
      }
    }

    return NextResponse.json({
      weakTopics,
      studyPlan,
      exercises,
      aiAdvice,
      summary: {
        criticalCount:  weakTopics.filter(t => t.severity === 'critical').length,
        moderateCount:  weakTopics.filter(t => t.severity === 'moderate').length,
        minorCount:     weakTopics.filter(t => t.severity === 'minor').length,
        hasWeakTopics:  weakTopics.length > 0,
      },
    });

  } catch (error: any) {
    console.error('Analyze route error:', error);
    return NextResponse.json(
      { error: 'Analysis failed', details: error.message },
      { status: 500 }
    );
  }
}

// ── Prompt builder ─────────────────────────────────────────────
function buildWeakTopicPrompt(
  topic:             { topicName: string; score: number; severity: string; suggestedAction: string },
  estimatedMinutes:  number
): string {
  return `A beginner learner scored ${topic.score}% on "${topic.topicName}" (${topic.severity} weakness).

Their suggested action: ${topic.suggestedAction}

Write an encouraging 2-3 sentence message that:
1. Acknowledges it's okay to struggle
2. Gives ONE specific tip for this topic
3. Mentions they can master it in about ${estimatedMinutes} minutes of focused review`;
}
