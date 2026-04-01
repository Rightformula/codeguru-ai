// src/hooks/useLesson.ts
// ─────────────────────────────────────────────────────────────
// useLesson HOOK
//
// This is the brain of the lesson viewer screen.
// It coordinates everything that happens during a lesson:
//
//   1. Tab navigation (Explain → Code → Exercise → Quiz)
//   2. Exercise code editor state
//   3. Code execution (calls /api/code/execute)
//   4. Quiz flow (questions → answers → score → completion)
//   5. Lesson completion (triggers XP + badge system)
//   6. AI hint requests
//
// The lesson viewer page/component just renders UI —
// ALL logic lives here so the component stays clean.
// ─────────────────────────────────────────────────────────────

'use client';

import { useState, useCallback, useRef } from 'react';
import { useRouter }                      from 'next/navigation';
import { useUIStore }                     from '@/store/uiStore';
import { useProgressStore }              from '@/store/progressStore';
import { useAuthStore }                  from '@/store/authStore';
import { useToast }                      from '@/components/ui/ToastProvider';
import type { LessonTab }                from '@/store/uiStore';
import type { EnrichedLesson }           from '@/hooks/useCourse';
import type { QuizQuestion }             from '@/types/course';

// ── Types ─────────────────────────────────────────────────────

export interface QuizState {
  currentQuestionIndex: number;
  answers:              Record<number, number>;  // questionIndex → chosen option index
  isComplete:           boolean;
  score:                number;
  totalQuestions:       number;
}

interface UseLessonReturn {
  // Tab
  activeTab:         LessonTab;
  setTab:            (tab: LessonTab) => void;
  lessonProgressPct: number;

  // Exercise code editor
  exerciseCode:      string;
  setExerciseCode:   (code: string) => void;
  solutionRevealed:  boolean;
  revealSolution:    () => void;

  // Code execution
  isRunning:         boolean;
  outputLines:       OutputLine[];
  runCode:           (code: string, language: string) => Promise<void>;
  clearOutput:       () => void;

  // Quiz
  quizState:         QuizState;
  answerQuestion:    (questionIndex: number, answerIndex: number) => void;
  advanceQuiz:       () => void;

  // Hint
  hint:              string | null;
  isHintLoading:     boolean;
  requestHint:       (lesson: EnrichedLesson) => Promise<void>;

  // Completion
  isCompleted:       boolean;
  completeLesson:    (lesson: EnrichedLesson, courseId: string) => Promise<void>;
}

export interface OutputLine {
  type:    'output' | 'error' | 'info';
  content: string;
}

// ── Tab → Progress Percentage ──────────────────────────────────
const TAB_PROGRESS: Record<LessonTab, number> = {
  explain:  25,
  code:     50,
  exercise: 75,
  quiz:     100,
};

// ── Hook ──────────────────────────────────────────────────────
export function useLesson(lesson: EnrichedLesson | null): UseLessonReturn {
  const { showToast }       = useToast();
  const router              = useRouter();
  const user                = useAuthStore(s => s.user);
  const completeProgressLesson = useProgressStore(s => s.completeLesson);
  const recordQuiz          = useProgressStore(s => s.recordQuizScore);
  const completedLessons    = useProgressStore(s => s.completedLessons);
  const isCompleted         = lesson ? completedLessons.includes(lesson.id) : false;

  // UI Store
  const activeTab           = useUIStore(s => s.activeLessonTab);
  const setActiveTab        = useUIStore(s => s.setLessonTab);
  const solutionRevealed    = useUIStore(s => s.solutionRevealed);
  const revealSolutionStore = useUIStore(s => s.revealSolution);
  const setHint             = useUIStore(s => s.setHint);
  const setHintLoading      = useUIStore(s => s.setHintLoading);
  const hint                = useUIStore(s => s.currentHint);
  const isHintLoading       = useUIStore(s => s.isHintLoading);

  // ── Local state ────────────────────────────────────────────
  // Exercise code — initialized from lesson starter code
  const [exerciseCode, setExerciseCode] = useState(
    lesson?.exercise.starterCode || ''
  );

  // Code execution output
  const [outputLines, setOutputLines] = useState<OutputLine[]>([]);
  const [isRunning,   setIsRunning]   = useState(false);

  // Quiz state
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers:              {},
    isComplete:           false,
    score:                0,
    totalQuestions:       lesson?.quiz.questions.length || 0,
  });

  // Prevent double-completion
  const completionInProgress = useRef(false);

  // ── setTab ─────────────────────────────────────────────────
  // Called when user clicks a tab button
  const setTab = useCallback((tab: LessonTab) => {
    setActiveTab(tab);
  }, [setActiveTab]);

  // ── runCode ────────────────────────────────────────────────
  // Sends code to /api/code/execute and formats the output
  const runCode = useCallback(async (code: string, language: string) => {
    if (!code.trim()) {
      showToast('Write some code first!', 'error');
      return;
    }

    setIsRunning(true);
    setOutputLines([{ type: 'info', content: '⏳ Running...' }]);

    try {
      const response = await fetch('/api/code/execute', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ code, language }),
      });

      const result = await response.json();

      const lines: OutputLine[] = [];

      // ── HTML/CSS special case: tell component to render preview
      if (result.stdout?.startsWith('[HTML_RENDER]')) {
        lines.push({ type: 'info', content: '[HTML_RENDER]' + result.stdout.slice(13) });

      } else if (result.compile_output) {
        // Compilation error (Java mostly)
        lines.push({ type: 'error', content: '❌ Compilation Error:' });
        result.compile_output.split('\n').forEach((line: string) => {
          if (line.trim()) lines.push({ type: 'error', content: line });
        });

      } else if (result.stderr) {
        // Runtime error
        lines.push({ type: 'error', content: '❌ Error:' });
        result.stderr.split('\n').forEach((line: string) => {
          if (line.trim()) lines.push({ type: 'error', content: line });
        });

      } else if (result.stdout) {
        // Success output
        result.stdout.split('\n').forEach((line: string) => {
          lines.push({ type: 'output', content: line });
        });
        // Execution stats
        if (result.time) {
          lines.push({ type: 'info', content: `✓ Done in ${result.time}s` });
        }

      } else {
        lines.push({ type: 'info', content: '✓ Code ran with no output (add print() to see results)' });
      }

      setOutputLines(lines);

      // Track code runs for the "Code Runner" badge
      useProgressStore.getState().incrementCodeRun();

    } catch (err) {
      setOutputLines([{
        type:    'error',
        content: '❌ Network error — check your connection and try again.',
      }]);
    } finally {
      setIsRunning(false);
    }
  }, [showToast]);

  // ── clearOutput ────────────────────────────────────────────
  const clearOutput = useCallback(() => setOutputLines([]), []);

  // ── revealSolution ─────────────────────────────────────────
  const revealSolution = useCallback(() => {
    if (!lesson) return;
    // Update exercise code to solution
    setExerciseCode(lesson.exercise.solutionCode);
    revealSolutionStore();
    showToast('Solution revealed — study it, then try writing it yourself!', 'info');
  }, [lesson, revealSolutionStore, showToast]);

  // ── answerQuestion ─────────────────────────────────────────
  // Records the user's answer for a quiz question.
  // Does NOT advance — user clicks "Next" separately.
  const answerQuestion = useCallback((questionIndex: number, answerIndex: number) => {
    setQuizState(prev => {
      // Don't allow re-answering
      if (prev.answers[questionIndex] !== undefined) return prev;

      const questions     = lesson?.quiz.questions || [];
      const question      = questions[questionIndex] as QuizQuestion | undefined;
      const isCorrect     = question ? answerIndex === question.correct : false;
      const newScore      = prev.score + (isCorrect ? 1 : 0);

      return {
        ...prev,
        answers: { ...prev.answers, [questionIndex]: answerIndex },
        score:   newScore,
      };
    });
  }, [lesson]);

  // ── advanceQuiz ────────────────────────────────────────────
  // Moves to next question or marks quiz complete if on last question.
  const advanceQuiz = useCallback(() => {
    if (!lesson) return;

    setQuizState(prev => {
      const total   = lesson.quiz.questions.length;
      const isLast  = prev.currentQuestionIndex >= total - 1;

      return {
        ...prev,
        currentQuestionIndex: isLast ? prev.currentQuestionIndex : prev.currentQuestionIndex + 1,
        isComplete:           isLast,
      };
    });
  }, [lesson]);

  // ── requestHint ────────────────────────────────────────────
  // First cycles through pre-written hints in lesson data,
  // then falls back to calling Claude API for a dynamic hint.
  const requestHint = useCallback(async (lesson: EnrichedLesson) => {
    const hintIndex   = useUIStore.getState().hintIndex;
    const staticHints = lesson.exercise.hints || [];

    // Use static hints first (fast + free)
    if (hintIndex < staticHints.length) {
      setHint(staticHints[hintIndex]);
      useUIStore.getState().incrementHintIndex();
      return;
    }

    // All static hints used — call Claude for a dynamic one
    setHintLoading(true);
    try {
      const response = await fetch('/api/ai/chat', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({
          message: `I need a hint for this exercise: "${lesson.exercise.instructions}". I'm writing ${lesson.language} code. Give me ONE helpful hint without revealing the full solution. Keep it to 2 sentences.`,
          history: [],
          language: lesson.language,
        }),
      });
      const data = await response.json();
      setHint(data.content || 'Try breaking the problem into smaller steps. What\'s the very first thing you need to do?');
      useUIStore.getState().incrementHintIndex();
    } catch {
      setHint('Try breaking the problem into smaller steps. What\'s the very first thing you need to do?');
    } finally {
      setHintLoading(false);
    }
  }, [setHint, setHintLoading]);

  // ── completeLesson ─────────────────────────────────────────
  // Called when user clicks "Complete Lesson" after finishing quiz.
  // Triggers: XP gain → level check → badge check → Firestore sync
  const completeLesson = useCallback(async (
    lesson:   EnrichedLesson,
    courseId: string
  ) => {
    if (completionInProgress.current) return;
    if (isCompleted) {
      showToast('You already completed this lesson!', 'info');
      return;
    }
    if (!user) {
      showToast('Please log in to save your progress', 'error');
      return;
    }

    completionInProgress.current = true;
    try {
      // Save quiz score to Firestore
      await recordQuiz(lesson.id, quizState.score, quizState.totalQuestions, user.uid);

      // Award XP, update streak, check badges, sync to Firestore
      await completeProgressLesson(lesson.id, courseId, lesson.xpReward, user.uid);

      showToast(`Lesson complete! +${lesson.xpReward} XP 🎉`, 'success');

      // Navigate to next lesson or back to course page after delay
      setTimeout(() => {
        router.push(`/courses/${courseId}`);
      }, 2500);

    } catch (err) {
      console.error('Failed to complete lesson:', err);
      showToast('Progress saved locally. Will sync when online.', 'info');
    } finally {
      completionInProgress.current = false;
    }
  }, [isCompleted, user, quizState, completeProgressLesson, recordQuiz, showToast, router]);

  return {
    // Tab
    activeTab,
    setTab,
    lessonProgressPct: TAB_PROGRESS[activeTab],

    // Exercise
    exerciseCode,
    setExerciseCode,
    solutionRevealed,
    revealSolution,

    // Code execution
    isRunning,
    outputLines,
    runCode,
    clearOutput,

    // Quiz
    quizState,
    answerQuestion,
    advanceQuiz,

    // Hint
    hint,
    isHintLoading,
    requestHint,

    // Completion
    isCompleted,
    completeLesson,
  };
}
