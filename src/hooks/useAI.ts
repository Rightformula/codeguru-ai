// src/hooks/useAI.ts
// ─────────────────────────────────────────────────────────────
// useAI HOOK
//
// Central hook for ALL AI interactions in CodeGuru AI.
// Manages 3 types of AI calls:
//
//   1. useAIChat()    → AI Tutor chat (multi-turn conversation)
//   2. useAIExplain() → One-shot concept explanations
//   3. useAIDebug()   → Code debugging in Playground
//
// AI Routing (from ai-router.ts):
//   Claude  → explain, hint, review, chat, quiz_explain
//   OpenAI  → debug, optimize
//
// Error handling:
//   All AI calls have try/catch with user-friendly fallbacks.
//   Network errors show toasts but don't crash the UI.
//   Rate limit errors show a friendly "busy" message.
// ─────────────────────────────────────────────────────────────

'use client';

import { useState, useCallback } from 'react';
import { useUIStore }            from '@/store/uiStore';
import { useToast }              from '@/components/ui/ToastProvider';
import type { AITask }           from '@/lib/ai-router';

// ── Shared fetcher ─────────────────────────────────────────────
// All AI calls go through this function.
// It selects the correct API route based on task type.
async function callAIRoute(
  task:     AITask,
  payload:  Record<string, unknown>
): Promise<string> {
  // Route selection:
  //   debug/optimize → /api/ai/debug (OpenAI)
  //   chat/hint      → /api/ai/chat   (Claude, multi-turn)
  //   all others     → /api/ai/explain (Claude, single-shot)
  const route =
    task === 'debug' || task === 'optimize' ? '/api/ai/debug'   :
    task === 'chat'  || task === 'hint'     ? '/api/ai/chat'    :
    '/api/ai/explain';

  const response = await fetch(route, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ task, ...payload }),
  });

  // Handle HTTP errors
  if (!response.ok) {
    if (response.status === 429) {
      throw new Error('RATE_LIMIT');
    }
    if (response.status === 503) {
      throw new Error('AI_UNAVAILABLE');
    }
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || `AI request failed (${response.status})`);
  }

  const data = await response.json();
  return data.content || '';
}

// ── Hook: useAIChat ────────────────────────────────────────────
// Powers the AI Tutor chat screen.
// Maintains conversation history so Claude has context.
//
// Usage:
//   const { sendMessage, isLoading, messages } = useAIChat();
export function useAIChat() {
  const { showToast }   = useToast();
  const addMessage      = useUIStore(s => s.addChatMessage);
  const setChatLoading  = useUIStore(s => s.setChatLoading);
  const messages        = useUIStore(s => s.chatMessages);
  const isLoading       = useUIStore(s => s.isChatLoading);
  const chatContext     = useUIStore(s => s.chatContext);
  const clearChat       = useUIStore(s => s.clearChat);
  const setChatContext  = useUIStore(s => s.setChatContext);

  const sendMessage = useCallback(async (text: string): Promise<void> => {
    if (!text.trim() || isLoading) return;

    // 1. Add user message to UI immediately (optimistic)
    addMessage({ role: 'user', content: text });
    setChatLoading(true);

    try {
      // 2. Build history for Claude (exclude the welcome message, last 10 msgs)
      const history = messages
        .filter(m => m.id !== 'welcome')  // exclude the static welcome
        .slice(-10)                        // last 10 for context window
        .map(m => ({ role: m.role, content: m.content }));

      // 3. Call Claude via /api/ai/chat
      const response = await callAIRoute('chat', {
        message:       text,
        history,
        language:      chatContext || undefined,
        lessonContext: chatContext || undefined,
      });

      // 4. Add AI response to UI
      addMessage({ role: 'assistant', content: response });

    } catch (err: any) {
      // Show friendly error messages
      let errorMsg: string;
      if (err.message === 'RATE_LIMIT') {
        errorMsg = 'Main thoda busy hoon abhi 😅 Ek minute wait karo aur dobara try karo!';
      } else if (err.message === 'AI_UNAVAILABLE') {
        errorMsg = 'AI service temporarily unavailable. Please try again in a moment.';
      } else {
        errorMsg = 'Kuch technical dikkat aa gayi. Dobara try karo! 🙏';
      }
      addMessage({ role: 'assistant', content: errorMsg });
    } finally {
      setChatLoading(false);
    }
  }, [messages, isLoading, chatContext, addMessage, setChatLoading]);

  return {
    messages,
    isLoading,
    sendMessage,
    clearChat,
    setChatContext,
  };
}

// ── Hook: useAIExplain ─────────────────────────────────────────
// Single-shot explanation — used in lesson explain tab and quiz.
// NOT multi-turn — each call is independent.
//
// Usage:
//   const { explain, explanation, isLoading } = useAIExplain();
//   await explain('What is a for loop?', 'python');
export function useAIExplain() {
  const { showToast }   = useToast();
  const [explanation, setExplanation] = useState<string | null>(null);
  const [isLoading,   setIsLoading]   = useState(false);
  const [error,       setError]       = useState<string | null>(null);

  const explain = useCallback(async (
    topic:    string,
    language: string = 'python',
    context?: string
  ): Promise<string> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await callAIRoute('explain', {
        prompt:   topic,
        language,
        context,
      });
      setExplanation(response);
      return response;

    } catch (err: any) {
      const msg = 'Could not generate explanation. Please try again.';
      setError(msg);
      showToast(msg, 'error');
      return '';
    } finally {
      setIsLoading(false);
    }
  }, [showToast]);

  const clearExplanation = useCallback(() => {
    setExplanation(null);
    setError(null);
  }, []);

  return { explain, explanation, isLoading, error, clearExplanation };
}

// ── Hook: useAIDebug ───────────────────────────────────────────
// Code debugging — used in the Playground.
// Sends code to OpenAI for analysis.
//
// Usage:
//   const { debug, debugResult, isDebugging } = useAIDebug();
//   await debug(code, 'python');
export function useAIDebug() {
  const { showToast }   = useToast();
  const setDebugOutput  = useUIStore(s => s.setDebugOutput);
  const setIsDebugging  = useUIStore(s => s.setIsDebugging);
  const debugOutput     = useUIStore(s => s.debugOutput);
  const isDebugging     = useUIStore(s => s.isDebugging);

  const debug = useCallback(async (
    code:     string,
    language: string
  ): Promise<void> => {
    if (!code.trim()) {
      showToast('Write some code first before debugging!', 'error');
      return;
    }

    setIsDebugging(true);
    setDebugOutput(null);

    try {
      const response = await callAIRoute('debug', {
        prompt:   `Please debug this ${language} code and explain any issues clearly for a beginner:`,
        code,
        language,
      });
      setDebugOutput(response);

    } catch (err: any) {
      const fallback = `🤖 AI Debug temporarily unavailable.\n\nTry these manual debug steps:\n1. Check all brackets/parentheses are closed\n2. Check indentation (Python is strict about this)\n3. Check variable names for typos\n4. Read the error message carefully — it usually tells you the line number`;
      setDebugOutput(fallback);
    } finally {
      setIsDebugging(false);
    }
  }, [showToast, setDebugOutput, setIsDebugging]);

  const clearDebug = useCallback(() => {
    setDebugOutput(null);
  }, [setDebugOutput]);

  return { debug, debugOutput, isDebugging, clearDebug };
}

// ── Hook: useAIQuizExplain ─────────────────────────────────────
// Explains WHY a quiz answer is correct/incorrect.
// Called after user answers a question.
//
// Usage:
//   const { explainAnswer, answerExplanation, isLoading } = useAIQuizExplain();
export function useAIQuizExplain() {
  const [answerExplanation, setAnswerExplanation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const explainAnswer = useCallback(async (
    question:    string,
    correctAns:  string,
    chosenAns:   string,
    language:    string
  ): Promise<void> => {
    setIsLoading(true);
    try {
      const prompt = `Quiz question: "${question}"\nCorrect answer: "${correctAns}"\nStudent answered: "${chosenAns}"\n\nExplain why the correct answer is right and, if the student was wrong, why their answer is incorrect. Keep it simple and encouraging for a beginner.`;

      const response = await callAIRoute('quiz_explain', {
        prompt,
        language,
      });
      setAnswerExplanation(response);
    } catch {
      setAnswerExplanation(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearExplanation = useCallback(() => setAnswerExplanation(null), []);

  return { explainAnswer, answerExplanation, isLoading, clearExplanation };
}
