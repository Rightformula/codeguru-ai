'use client';
// src/components/lesson/QuizBlock.tsx
// ─────────────────────────────────────────────────────────────
// QUIZ BLOCK COMPONENT
//
// Self-contained quiz UI used inside the lesson viewer.
// Manages its own internal state (current question, answers)
// and calls parent callbacks on completion.
//
// Flow:
//   1. Shows question with A/B/C/D options
//   2. User taps option → correct/wrong highlighted + explanation shown
//   3. "Next Question" button advances
//   4. After all questions → score ring with percentage
//   5. "Complete Lesson" button calls onComplete
// ─────────────────────────────────────────────────────────────

import { useState, useMemo } from 'react';
import { clsx }              from 'clsx';
import { Button }            from '@/components/ui/Button';
import type { QuizQuestion } from '@/types/course';

// ── Types ─────────────────────────────────────────────────────
interface QuizBlockProps {
  questions:   QuizQuestion[];
  xpReward:    number;
  isCompleted: boolean;
  onComplete:  () => void;
}

// ── Score Ring ────────────────────────────────────────────────
function ScoreRing({ pct }: { pct: number }) {
  const r    = 44;
  const circ = 2 * Math.PI * r;
  const dash = circ - (circ * pct) / 100;

  const color = pct === 100 ? '#22c55e' : pct >= 66 ? '#3b82f6' : '#f59e0b';

  return (
    <div className="relative w-28 h-28 mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#1E1E2E" strokeWidth="8" />
        <circle
          cx="50" cy="50" r={r}
          fill="none" stroke={color} strokeWidth="8" strokeLinecap="round"
          strokeDasharray={circ} strokeDashoffset={dash}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display font-extrabold text-2xl" style={{ color }}>
          {pct}%
        </span>
      </div>
    </div>
  );
}

// ── Option Button ─────────────────────────────────────────────
interface OptionProps {
  index:      number;
  text:       string;
  isCorrect:  boolean;
  isChosen:   boolean;
  isAnswered: boolean;
  onClick:    () => void;
}

function OptionButton({ index, text, isCorrect, isChosen, isAnswered, onClick }: OptionProps) {
  let style = 'border-[#2A2A3C] bg-[#18182A] text-[#E2E8F0] hover:border-blue-500/60 hover:bg-blue-950/20';

  if (isAnswered) {
    if (isCorrect)            style = 'border-green-500 bg-green-950/50 text-green-400';
    else if (isChosen)        style = 'border-red-500 bg-red-950/30 text-red-400';
    else                      style = 'border-[#1E1E2E] bg-[#12121A] text-[#3A4560] opacity-60';
  }

  return (
    <button
      onClick={() => !isAnswered && onClick()}
      disabled={isAnswered}
      className={clsx(
        'w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium',
        'transition-all duration-200',
        'disabled:cursor-not-allowed',
        style,
      )}
    >
      <span className="font-bold text-[#64748B] mr-2">
        {String.fromCharCode(65 + index)}.
      </span>
      {text}
    </button>
  );
}

// ── Component ─────────────────────────────────────────────────
export function QuizBlock({ questions, xpReward, isCompleted, onComplete }: QuizBlockProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers,    setAnswers]    = useState<Record<number, number>>({});
  const [isDone,     setIsDone]     = useState(false);

  // Score — computed from answers map
  const score = useMemo(() => {
    return Object.entries(answers).reduce((acc, [idx, chosen]) => {
      const q = questions[Number(idx)];
      return acc + (q && chosen === q.correct ? 1 : 0);
    }, 0);
  }, [answers, questions]);

  const pct       = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
  const question  = questions[currentIdx];
  const answered  = answers[currentIdx] !== undefined;
  const isLast    = currentIdx >= questions.length - 1;

  function handleAnswer(optIdx: number) {
    if (answered) return;
    setAnswers(prev => ({ ...prev, [currentIdx]: optIdx }));
  }

  function handleAdvance() {
    if (isLast) {
      setIsDone(true);
    } else {
      setCurrentIdx(prev => prev + 1);
    }
  }

  // ── Score Screen ─────────────────────────────────────────────
  if (isDone) {
    const emoji = pct === 100 ? '🎉' : pct >= 66 ? '👏' : '📚';
    const msg   = pct === 100 ? 'Perfect score! Legendary!' :
                  pct >= 66   ? 'Great job! Keep going!' :
                  'Good effort! Review and try again.';

    return (
      <div className="max-w-sm mx-auto text-center py-4 animate-fade-in">
        <ScoreRing pct={pct} />

        <div className="text-2xl mt-4 mb-1">{emoji}</div>
        <h3 className="font-display font-bold text-lg mb-1">{msg}</h3>
        <p className="text-sm text-[#64748B] mb-6">
          {score} of {questions.length} correct
        </p>

        {isCompleted ? (
          <div className="text-sm text-green-500 font-semibold">
            ✓ Lesson already completed
          </div>
        ) : (
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={onComplete}
            rightIcon={<span>🚀</span>}
          >
            Complete Lesson · +{xpReward} XP
          </Button>
        )}
      </div>
    );
  }

  // ── Question Screen ───────────────────────────────────────────
  return (
    <div className="max-w-lg animate-fade-in">
      {/* Progress dots */}
      <div className="flex items-center gap-2 mb-5">
        <div className="flex gap-1.5">
          {questions.map((_, i) => (
            <div
              key={i}
              className={clsx(
                'rounded-full transition-all duration-300',
                i < currentIdx  ? 'w-5 h-1.5 bg-green-500' :
                i === currentIdx ? 'w-7 h-1.5 bg-blue-500' :
                'w-5 h-1.5 bg-[#1E1E2E]',
              )}
            />
          ))}
        </div>
        <span className="text-xs text-[#64748B] ml-1">
          {currentIdx + 1} / {questions.length}
        </span>
      </div>

      {/* Question */}
      <p className="font-semibold text-base mb-4 leading-relaxed whitespace-pre-line">
        {question.question}
      </p>

      {/* Options */}
      <div className="flex flex-col gap-2 mb-4">
        {question.options.map((opt, i) => (
          <OptionButton
            key={i}
            index={i}
            text={opt}
            isCorrect={i === question.correct}
            isChosen={answers[currentIdx] === i}
            isAnswered={answered}
            onClick={() => handleAnswer(i)}
          />
        ))}
      </div>

      {/* Explanation (shown after answering) */}
      {answered && (
        <div className="mb-4 p-3 bg-[#12121A] border-l-4 border-blue-500 rounded-r-xl text-sm text-[#94A3B8] leading-relaxed animate-fade-in">
          💡 {question.explanation}
        </div>
      )}

      {/* Next button (shown after answering) */}
      {answered && (
        <Button
          variant="secondary"
          size="md"
          onClick={handleAdvance}
          rightIcon={
            <svg viewBox="0 0 24 24" width="14" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          }
          className="animate-fade-in"
        >
          {isLast ? 'See Results 🎉' : 'Next Question'}
        </Button>
      )}
    </div>
  );
}
