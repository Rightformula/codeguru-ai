'use client';
// src/app/courses/[courseId]/[lessonId]/page.tsx
// ─────────────────────────────────────────────────────────────
// LESSON VIEWER PAGE — /courses/python/py-m1-l1
//
// This is the most complex page in CodeGuru AI.
// It renders a 4-tab lesson experience:
//
//   Tab 1: Explain   — markdown explanation with rendered content
//   Tab 2: Code      — syntax-highlighted example + run button
//   Tab 3: Exercise  — code editor + run + hint + solution reveal
//   Tab 4: Quiz      — questions → answers → score → complete
//
// Uses:
//   useLessonData()  → gets enriched lesson from course data
//   useLesson()      → all lesson interaction logic (hook)
//   useUIStore()     → opens lesson in UI store on mount
// ─────────────────────────────────────────────────────────────

import { use, useEffect, useRef } from 'react';
import Link                       from 'next/link';
import { useRouter }              from 'next/navigation';
import AuthGuard                  from '@/components/auth/AuthGuard';
import { useLessonData, useLessonNavigation } from '@/hooks/useCourse';
import { useLesson }              from '@/hooks/useLesson';
import { useUIStore }             from '@/store/uiStore';
import type { LessonTab }         from '@/store/uiStore';
import type { EnrichedLesson }    from '@/hooks/useCourse';
import type { OutputLine }        from '@/hooks/useLesson';

// ════════════════════════════════════════════════════════════
//  SUB-COMPONENTS
// ════════════════════════════════════════════════════════════

// ── Tab Bar ───────────────────────────────────────────────────
const TABS: { id: LessonTab; label: string; emoji: string }[] = [
  { id: 'explain',  label: 'Explain',  emoji: '📖' },
  { id: 'code',     label: 'Code',     emoji: '💻' },
  { id: 'exercise', label: 'Exercise', emoji: '✏️' },
  { id: 'quiz',     label: 'Quiz',     emoji: '🧠' },
];

function TabBar({ activeTab, onSelect }: { activeTab: LessonTab; onSelect: (t: LessonTab) => void }) {
  return (
    <div className="flex border-b border-[#1E1E2E] bg-[#12121A] overflow-x-auto">
      {TABS.map(tab => (
        <button
          key={tab.id}
          onClick={() => onSelect(tab.id)}
          className={`
            flex-1 min-w-[80px] flex items-center justify-center gap-1.5
            py-3 text-xs font-bold uppercase tracking-wider
            border-b-2 transition-all duration-150 whitespace-nowrap px-3
            ${activeTab === tab.id
              ? 'text-green-500 border-green-500'
              : 'text-[#64748B] border-transparent hover:text-[#E2E8F0]'
            }
          `}
        >
          <span>{tab.emoji}</span>
          <span className="hidden sm:inline">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

// ── Code Block ────────────────────────────────────────────────
// Syntax-highlighted display of code examples
function CodeBlock({ code, language }: { code: string; language: string }) {
  // Simple token-based syntax coloring
  const LANG_COLORS: Record<string, string> = {
    python: '#3776AB', javascript: '#F7DF1E', java: '#007396',
  };
  const langColor = LANG_COLORS[language] || '#22C55E';

  return (
    <div className="bg-[#0D1117] border border-[#1E1E2E] rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#161B22] border-b border-[#1E1E2E]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <span
          className="text-xs font-bold px-2 py-0.5 rounded-full"
          style={{ background: langColor + '20', color: langColor }}
        >
          {language}
        </span>
      </div>
      {/* Code */}
      <pre className="p-4 overflow-x-auto text-xs leading-relaxed font-mono text-[#E2E8F0]">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// ── Output Panel ──────────────────────────────────────────────
function OutputPanel({ lines, isRunning }: { lines: OutputLine[]; isRunning: boolean }) {
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [lines]);

  return (
    <div className="bg-[#020810] border border-[#1E1E2E] rounded-xl p-4 min-h-[80px] max-h-[200px] overflow-y-auto font-mono text-xs">
      <div className="text-[#3A4560] text-[10px] font-bold uppercase tracking-widest mb-2">
        ▶ Output
      </div>
      {isRunning && (
        <div className="flex items-center gap-2 text-[#64748B]">
          <div className="w-3 h-3 rounded-full border border-[#64748B] border-t-green-500 animate-spin" />
          Running...
        </div>
      )}
      {lines.map((line, i) => (
        <div
          key={i}
          className={`leading-relaxed ${
            line.type === 'error' ? 'text-red-400' :
            line.type === 'info'  ? 'text-[#64748B]' :
            'text-green-400'
          }`}
        >
          {line.content}
        </div>
      ))}
      {!isRunning && lines.length === 0 && (
        <div className="text-[#3A4560]">Click Run to see output here...</div>
      )}
      <div ref={endRef} />
    </div>
  );
}

// ── Code Editor ───────────────────────────────────────────────
function CodeEditor({
  value,
  onChange,
  language,
  placeholder = 'Write your code here...',
  readOnly = false,
  minHeight = '180px',
}: {
  value:        string;
  onChange?:    (v: string) => void;
  language:     string;
  placeholder?: string;
  readOnly?:    boolean;
  minHeight?:   string;
}) {
  // Handle Tab key for indentation
  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Tab') {
      e.preventDefault();
      const el    = e.currentTarget;
      const start = el.selectionStart;
      const end   = el.selectionEnd;
      const newVal = el.value.substring(0, start) + '  ' + el.value.substring(end);
      onChange?.(newVal);
      requestAnimationFrame(() => {
        el.selectionStart = el.selectionEnd = start + 2;
      });
    }
  }

  return (
    <textarea
      value={value}
      onChange={e => onChange?.(e.target.value)}
      onKeyDown={handleKeyDown}
      readOnly={readOnly}
      placeholder={placeholder}
      spellCheck={false}
      className={`
        w-full p-4 bg-[#0D1117] border border-[#1E1E2E] rounded-xl
        font-mono text-xs text-[#E2E8F0] leading-relaxed
        resize-y outline-none
        focus:border-green-500/50 focus:ring-1 focus:ring-green-500/10
        transition-colors placeholder-[#3A4560]
        ${readOnly ? 'cursor-default' : ''}
      `}
      style={{ minHeight, tabSize: 2 }}
    />
  );
}

// ── Tab 1: Explain ────────────────────────────────────────────
function ExplainTab({ lesson, onNext }: { lesson: EnrichedLesson; onNext: () => void }) {
  // Render markdown-like content with basic formatting
  function renderContent(content: string): React.ReactNode {
    return content.split('\n').map((line, i) => {
      if (line.startsWith('# '))   return <h1 key={i} className="text-xl font-display font-bold mb-3 mt-5 first:mt-0">{line.slice(2)}</h1>;
      if (line.startsWith('## '))  return <h2 key={i} className="text-base font-display font-bold mb-2 mt-4 text-blue-400">{line.slice(3)}</h2>;
      if (line.startsWith('### ')) return <h3 key={i} className="text-sm font-display font-bold mb-2 mt-3 text-green-400">{line.slice(4)}</h3>;
      if (line.startsWith('- ') || line.startsWith('* ')) {
        return (
          <div key={i} className="flex gap-2 mb-1.5">
            <span className="text-green-500 flex-shrink-0 mt-0.5">•</span>
            <span className="text-sm text-[#94A3B8] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formatInline(line.slice(2)) }}
            />
          </div>
        );
      }
      if (line.startsWith('```')) return null; // skip fence markers
      if (line.startsWith('|')) {  // table row
        const cells = line.split('|').filter(c => c.trim() && !c.match(/^[-\s]+$/));
        if (cells.length === 0) return null;
        return (
          <div key={i} className="flex gap-0 mb-0.5">
            {cells.map((cell, ci) => (
              <div key={ci} className="flex-1 text-xs text-[#94A3B8] px-3 py-1.5 bg-[#12121A] border border-[#1E1E2E]">
                {cell.trim()}
              </div>
            ))}
          </div>
        );
      }
      if (!line.trim()) return <div key={i} className="h-2" />;
      return (
        <p key={i} className="text-sm text-[#94A3B8] leading-relaxed mb-2"
          dangerouslySetInnerHTML={{ __html: formatInline(line) }}
        />
      );
    }).filter(Boolean);
  }

  // Bold, code, italic
  function formatInline(text: string): string {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#E2E8F0] font-semibold">$1</strong>')
      .replace(/`(.+?)`/g, '<code class="bg-[#1E1E2E] text-yellow-400 px-1.5 py-0.5 rounded text-xs font-mono">$1</code>')
      .replace(/\*(.+?)\*/g, '<em class="text-[#94A3B8]">$1</em>');
  }

  return (
    <div className="max-w-2xl">
      {/* Lesson title */}
      <div className="mb-4">
        <span className="text-xs font-bold text-[#64748B] uppercase tracking-widest">
          {lesson.duration} · {lesson.xpReward} XP
        </span>
        <h2 className="text-xl font-display font-bold mt-1">{lesson.explanation.title}</h2>
      </div>

      {/* Content */}
      <div className="mb-6">
        {renderContent(lesson.explanation.content)}
      </div>

      {/* Next button */}
      <button
        onClick={onNext}
        className="flex items-center gap-2 px-5 py-2.5 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition-colors text-sm"
      >
        Next: See Code Example
        <svg viewBox="0 0 24 24" width="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    </div>
  );
}

// ── Tab 2: Code Example ───────────────────────────────────────
function CodeTab({
  lesson,
  onRun,
  isRunning,
  outputLines,
  onNext,
}: {
  lesson:      EnrichedLesson;
  onRun:       (code: string, lang: string) => void;
  isRunning:   boolean;
  outputLines: OutputLine[];
  onNext:      () => void;
}) {
  return (
    <div className="max-w-2xl">
      <h3 className="font-display font-bold text-base mb-3">
        💻 {lesson.codeExample.title}
      </h3>

      {/* Code block with run button */}
      <div className="bg-[#0D1117] border border-[#1E1E2E] rounded-xl overflow-hidden mb-3">
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#161B22] border-b border-[#1E1E2E]">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className="text-xs text-[#64748B] ml-2 font-mono">
              {lesson.codeExample.language}
            </span>
          </div>
          <button
            onClick={() => onRun(lesson.codeExample.code, lesson.codeExample.language)}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-3 py-1 bg-green-500 text-black text-xs font-bold rounded-lg hover:bg-green-400 transition-colors disabled:opacity-50"
          >
            {isRunning ? (
              <div className="w-3 h-3 border border-black/30 border-t-black rounded-full animate-spin" />
            ) : '▶'}
            Run
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-xs leading-relaxed font-mono text-[#E2E8F0] whitespace-pre">
          <code>{lesson.codeExample.code}</code>
        </pre>
      </div>

      {/* Output */}
      <OutputPanel lines={outputLines} isRunning={isRunning} />

      {/* Explanation of the code */}
      <div className="mt-4 mb-5 p-4 bg-blue-950/30 border border-blue-800/30 rounded-xl">
        <div className="text-xs font-bold text-blue-400 mb-2 uppercase tracking-wider">
          📝 What's happening here?
        </div>
        <div className="text-sm text-[#94A3B8] leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: lesson.codeExample.explanation
              .replace(/`(.+?)`/g, '<code class="bg-[#1E1E2E] text-yellow-400 px-1 rounded text-xs font-mono">$1</code>')
              .replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#E2E8F0]">$1</strong>')
              .replace(/\n/g, '<br>')
          }}
        />
      </div>

      <button
        onClick={onNext}
        className="flex items-center gap-2 px-5 py-2.5 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition-colors text-sm"
      >
        Next: Try It Yourself
        <svg viewBox="0 0 24 24" width="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    </div>
  );
}

// ── Tab 3: Exercise ───────────────────────────────────────────
function ExerciseTab({
  lesson,
  exerciseCode,
  onCodeChange,
  onRun,
  isRunning,
  outputLines,
  onHint,
  hint,
  isHintLoading,
  solutionRevealed,
  onRevealSolution,
  onNext,
}: {
  lesson:           EnrichedLesson;
  exerciseCode:     string;
  onCodeChange:     (code: string) => void;
  onRun:            (code: string, lang: string) => void;
  isRunning:        boolean;
  outputLines:      OutputLine[];
  onHint:           () => void;
  hint:             string | null;
  isHintLoading:    boolean;
  solutionRevealed: boolean;
  onRevealSolution: () => void;
  onNext:           () => void;
}) {
  return (
    <div className="max-w-2xl">
      {/* Instructions */}
      <div className="mb-4">
        <h3 className="font-display font-bold text-base mb-1">
          ✏️ {lesson.exercise.title}
        </h3>
        <p className="text-sm text-[#94A3B8] leading-relaxed bg-[#12121A] border border-[#1E1E2E] rounded-xl p-3">
          {lesson.exercise.instructions}
        </p>
      </div>

      {/* Code editor */}
      <div className="bg-[#0D1117] border border-[#1E1E2E] rounded-xl overflow-hidden mb-3">
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#161B22] border-b border-[#1E1E2E]">
          <span className="text-xs text-[#64748B]">
            {solutionRevealed ? '👁 Solution revealed' : 'Your code'}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => onRun(exerciseCode, lesson.codeExample.language)}
              disabled={isRunning}
              className="flex items-center gap-1.5 px-3 py-1 bg-green-500 text-black text-xs font-bold rounded-lg hover:bg-green-400 transition-colors disabled:opacity-50"
            >
              {isRunning ? <div className="w-3 h-3 border border-black/30 border-t-black rounded-full animate-spin" /> : '▶'}
              Run
            </button>
            {!solutionRevealed && (
              <button
                onClick={onRevealSolution}
                className="px-3 py-1 border border-[#2A2A3C] text-[#64748B] text-xs font-bold rounded-lg hover:border-[#3A4560] hover:text-[#E2E8F0] transition-colors"
              >
                👁 Solution
              </button>
            )}
          </div>
        </div>
        <CodeEditor
          value={exerciseCode}
          onChange={onCodeChange}
          language={lesson.codeExample.language}
          minHeight="160px"
        />
      </div>

      {/* Output */}
      <OutputPanel lines={outputLines} isRunning={isRunning} />

      {/* AI Hint */}
      <div className="mt-3">
        <button
          onClick={onHint}
          disabled={isHintLoading}
          className="flex items-center gap-2 px-4 py-2 bg-purple-950/50 border border-purple-700/40 text-purple-400 text-xs font-bold rounded-xl hover:bg-purple-950/80 transition-colors disabled:opacity-50"
        >
          {isHintLoading ? (
            <div className="w-3.5 h-3.5 border border-purple-400/30 border-t-purple-400 rounded-full animate-spin" />
          ) : '🤖'}
          Get AI Hint
        </button>

        {hint && (
          <div className="mt-2 p-3 bg-purple-950/30 border border-purple-800/30 rounded-xl text-sm text-[#94A3B8] leading-relaxed animate-fade-in">
            💡 {hint}
          </div>
        )}
      </div>

      {/* Next */}
      <button
        onClick={onNext}
        className="mt-5 flex items-center gap-2 px-5 py-2.5 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition-colors text-sm"
      >
        Next: Take the Quiz
        <svg viewBox="0 0 24 24" width="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    </div>
  );
}

// ── Tab 4: Quiz ───────────────────────────────────────────────
function QuizTab({
  lesson,
  quizState,
  onAnswer,
  onAdvance,
  onComplete,
  isCompleted,
}: {
  lesson:      EnrichedLesson;
  quizState:   ReturnType<typeof useLesson>['quizState'];
  onAnswer:    (qIdx: number, aIdx: number) => void;
  onAdvance:   () => void;
  onComplete:  () => void;
  isCompleted: boolean;
}) {
  const questions  = lesson.quiz.questions;
  const { currentQuestionIndex, answers, isComplete, score, totalQuestions } = quizState;

  // ── Score screen ───────────────────────────────────────────
  if (isComplete) {
    const pct   = Math.round((score / totalQuestions) * 100);
    const emoji = pct === 100 ? '🎉' : pct >= 66 ? '👏' : '📚';
    const msg   = pct === 100 ? 'Perfect score!' : pct >= 66 ? 'Great job!' : 'Keep practicing!';
    const circumference = 2 * Math.PI * 36;
    const strokeDash    = circumference - (circumference * pct) / 100;

    return (
      <div className="max-w-md mx-auto text-center py-4">
        {/* Score ring */}
        <div className="relative w-28 h-28 mx-auto mb-4">
          <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
            <circle cx="40" cy="40" r="36" fill="none" stroke="#1E1E2E" strokeWidth="6" />
            <circle
              cx="40" cy="40" r="36" fill="none"
              stroke={pct === 100 ? '#22c55e' : pct >= 66 ? '#3b82f6' : '#f59e0b'}
              strokeWidth="6" strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDash}
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display font-extrabold text-2xl text-[#E2E8F0]">{pct}%</span>
          </div>
        </div>

        <div className="text-2xl mb-1">{emoji}</div>
        <h3 className="font-display font-bold text-lg mb-1">{msg}</h3>
        <p className="text-sm text-[#64748B] mb-6">
          {score} of {totalQuestions} correct
        </p>

        {isCompleted ? (
          <div className="text-sm text-green-500 font-semibold py-3">
            ✓ Lesson already completed
          </div>
        ) : (
          <button
            onClick={onComplete}
            className="w-full py-3 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] text-sm"
          >
            Complete Lesson · +{lesson.xpReward} XP 🚀
          </button>
        )}
      </div>
    );
  }

  // ── Active question ────────────────────────────────────────
  const question   = questions[currentQuestionIndex];
  const answered   = answers[currentQuestionIndex];
  const hasAnswered = answered !== undefined;
  const isLast     = currentQuestionIndex >= totalQuestions - 1;

  return (
    <div className="max-w-lg">
      {/* Progress */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex gap-1.5">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i < currentQuestionIndex ? 'bg-green-500 w-6' :
                i === currentQuestionIndex ? 'bg-blue-500 w-8' :
                'bg-[#1E1E2E] w-6'
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-[#64748B] whitespace-nowrap">
          {currentQuestionIndex + 1} / {totalQuestions}
        </span>
      </div>

      {/* Question */}
      <p className="font-semibold text-base mb-4 leading-relaxed whitespace-pre-line">
        {question.question}
      </p>

      {/* Options */}
      <div className="flex flex-col gap-2 mb-4">
        {question.options.map((option, optIdx) => {
          const isChosen  = answered === optIdx;
          const isCorrect = optIdx === question.correct;
          const showResult = hasAnswered;

          let style = 'border-[#2A2A3C] bg-[#18182A] text-[#E2E8F0] hover:border-blue-500/50 hover:bg-blue-950/20';
          if (showResult && isCorrect)      style = 'border-green-500 bg-green-950/40 text-green-400';
          else if (showResult && isChosen)  style = 'border-red-500 bg-red-950/30 text-red-400';
          else if (showResult)              style = 'border-[#2A2A3C] bg-[#18182A] text-[#64748B] opacity-60';

          return (
            <button
              key={optIdx}
              onClick={() => !hasAnswered && onAnswer(currentQuestionIndex, optIdx)}
              disabled={hasAnswered}
              className={`
                w-full text-left px-4 py-3 rounded-xl border-2
                text-sm font-medium transition-all duration-200
                disabled:cursor-not-allowed
                ${style}
              `}
            >
              <span className="font-bold mr-2 text-[#64748B]">
                {String.fromCharCode(65 + optIdx)}.
              </span>
              {option}
            </button>
          );
        })}
      </div>

      {/* Explanation after answering */}
      {hasAnswered && (
        <div className="mb-4 p-3 bg-[#12121A] border-l-4 border-blue-500 rounded-r-xl text-sm text-[#94A3B8] leading-relaxed animate-fade-in">
          💡 {question.explanation}
        </div>
      )}

      {/* Next / Finish */}
      {hasAnswered && (
        <button
          onClick={onAdvance}
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors text-sm animate-fade-in"
        >
          {isLast ? 'See Results 🎉' : 'Next Question'}
          <svg viewBox="0 0 24 24" width="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      )}
    </div>
  );
}

// ════════════════════════════════════════════════════════════
//  MAIN PAGE COMPONENT
// ════════════════════════════════════════════════════════════

interface LessonPageProps {
  params: Promise<{ courseId: string; lessonId: string }>;
}

export default function LessonPage({ params }: LessonPageProps) {
  const { courseId, lessonId } = use(params);

  const lesson = useLessonData(courseId, lessonId);
  const { prev, next } = useLessonNavigation(courseId, lessonId);

  const openLesson  = useUIStore(s => s.openLesson);
  const resetLesson = useUIStore(s => s.resetLessonUI);

  // Open this lesson in UI store on mount
  useEffect(() => {
    if (lesson) {
      openLesson(lesson.id, courseId, lesson.moduleId);
    }
    return () => resetLesson();
  }, [lesson?.id]);

  const {
    activeTab, setTab, lessonProgressPct,
    exerciseCode, setExerciseCode,
    solutionRevealed, revealSolution,
    isRunning, outputLines, runCode, clearOutput,
    quizState, answerQuestion, advanceQuiz,
    hint, isHintLoading, requestHint,
    isCompleted, completeLesson,
  } = useLesson(lesson ?? null);

  // ── Not found ──────────────────────────────────────────────
  if (!lesson) {
    return (
      <AuthGuard>
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-4 text-center">
          <div className="text-5xl">🔍</div>
          <h2 className="font-display font-bold text-xl">Lesson not found</h2>
          <Link href={`/courses/${courseId}`} className="px-4 py-2 bg-green-500 text-black font-bold rounded-xl text-sm">
            ← Back to Course
          </Link>
        </div>
      </AuthGuard>
    );
  }

  // ── Locked ─────────────────────────────────────────────────
  if (lesson.isLocked) {
    return (
      <AuthGuard>
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-4 text-center">
          <div className="text-5xl">🔒</div>
          <h2 className="font-display font-bold text-xl">Lesson Locked</h2>
          <p className="text-sm text-[#64748B]">Complete the previous lesson first.</p>
          <Link href={`/courses/${courseId}`} className="px-4 py-2 bg-green-500 text-black font-bold rounded-xl text-sm">
            ← Back to Course
          </Link>
        </div>
      </AuthGuard>
    );
  }

  return (
    <AuthGuard>
      <div className="flex flex-col h-[calc(100vh-56px-64px)] sm:h-[calc(100vh-56px)]">

        {/* ── Lesson Top Bar ─────────────────────────────── */}
        <div className="bg-[#12121A] border-b border-[#1E1E2E] px-4 py-3 flex items-center gap-3 flex-shrink-0">
          {/* Back */}
          <Link
            href={`/courses/${courseId}`}
            onClick={resetLesson}
            className="text-[#64748B] hover:text-[#E2E8F0] transition-colors flex-shrink-0"
          >
            <svg viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M5 12l7 7M5 12l7-7"/>
            </svg>
          </Link>

          {/* Progress bar */}
          <div className="flex-1 h-2 bg-[#1E1E2E] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-500"
              style={{ width: `${lessonProgressPct}%` }}
            />
          </div>

          {/* Lesson title truncated */}
          <div className="text-xs font-semibold text-[#64748B] truncate max-w-[120px] sm:max-w-xs flex-shrink-0">
            {lesson.title}
          </div>

          {/* Completed badge */}
          {isCompleted && (
            <span className="text-xs bg-green-950 text-green-500 border border-green-800/50 px-2 py-0.5 rounded-full font-bold flex-shrink-0">
              ✓ Done
            </span>
          )}
        </div>

        {/* ── Tab Bar ────────────────────────────────────── */}
        <div className="flex-shrink-0">
          <TabBar activeTab={activeTab} onSelect={(tab) => { setTab(tab); clearOutput(); }} />
        </div>

        {/* ── Tab Content ────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto px-4 py-5">
          {activeTab === 'explain' && (
            <ExplainTab
              lesson={lesson}
              onNext={() => { setTab('code'); clearOutput(); }}
            />
          )}

          {activeTab === 'code' && (
            <CodeTab
              lesson={lesson}
              onRun={runCode}
              isRunning={isRunning}
              outputLines={outputLines}
              onNext={() => { setTab('exercise'); clearOutput(); }}
            />
          )}

          {activeTab === 'exercise' && (
            <ExerciseTab
              lesson={lesson}
              exerciseCode={exerciseCode}
              onCodeChange={setExerciseCode}
              onRun={runCode}
              isRunning={isRunning}
              outputLines={outputLines}
              onHint={() => requestHint(lesson)}
              hint={hint}
              isHintLoading={isHintLoading}
              solutionRevealed={solutionRevealed}
              onRevealSolution={revealSolution}
              onNext={() => { setTab('quiz'); clearOutput(); }}
            />
          )}

          {activeTab === 'quiz' && (
            <QuizTab
              lesson={lesson}
              quizState={quizState}
              onAnswer={answerQuestion}
              onAdvance={advanceQuiz}
              onComplete={() => completeLesson(lesson, courseId)}
              isCompleted={isCompleted}
            />
          )}
        </div>

        {/* ── Prev / Next lesson navigation ──────────────── */}
        <div className="flex-shrink-0 bg-[#12121A] border-t border-[#1E1E2E] px-4 py-2.5 flex justify-between items-center">
          {prev ? (
            <Link
              href={`/courses/${courseId}/${prev.id}`}
              className="flex items-center gap-1.5 text-xs text-[#64748B] hover:text-[#E2E8F0] transition-colors"
            >
              <svg viewBox="0 0 24 24" width="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              Previous
            </Link>
          ) : <div />}

          <span className="text-xs text-[#3A4560]">
            Lesson {lesson.order}
          </span>

          {next ? (
            <Link
              href={`/courses/${courseId}/${next.id}`}
              className="flex items-center gap-1.5 text-xs text-[#64748B] hover:text-[#E2E8F0] transition-colors"
            >
              Next
              <svg viewBox="0 0 24 24" width="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </Link>
          ) : <div />}
        </div>

      </div>
    </AuthGuard>
  );
}
