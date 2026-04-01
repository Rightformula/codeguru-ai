'use client';
// src/components/lesson/CodeEditor.tsx
// ─────────────────────────────────────────────────────────────
// CODE EDITOR COMPONENT
//
// A textarea-based code editor used in:
//   - Lesson exercise tab
//   - Playground page
//
// Features:
//   - Tab key → inserts 2 spaces (doesn't change focus)
//   - Line numbers (optional)
//   - Language label in header
//   - macOS traffic-light dots in header (visual affordance)
//   - Run button built into header
//   - Read-only mode for code examples
//   - Ctrl+Enter keyboard shortcut fires onRun
// ─────────────────────────────────────────────────────────────

import { useRef, useCallback, memo } from 'react';
import { clsx }                      from 'clsx';
import { Button }                    from '@/components/ui/Button';

// ── Language dot colors ───────────────────────────────────────
const LANG_COLORS: Record<string, string> = {
  python:     '#3776AB',
  javascript: '#F7DF1E',
  java:       '#007396',
  'html-css': '#E34F26',
  html:       '#E34F26',
  css:        '#1572B6',
};

// ── Types ─────────────────────────────────────────────────────
interface CodeEditorProps {
  value:       string;
  onChange?:   (value: string) => void;
  language?:   string;
  readOnly?:   boolean;
  minHeight?:  string;           // CSS value e.g. "160px"
  maxHeight?:  string;
  label?:      string;           // Header label (overrides language)
  onRun?:      () => void;       // If provided, shows Run button
  isRunning?:  boolean;
  extraActions?: React.ReactNode; // Slot for extra header buttons
  className?:  string;
  placeholder?: string;
}

export const CodeEditor = memo(function CodeEditor({
  value,
  onChange,
  language    = 'python',
  readOnly    = false,
  minHeight   = '160px',
  maxHeight,
  label,
  onRun,
  isRunning   = false,
  extraActions,
  className,
  placeholder = 'Write your code here...',
}: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const langColor   = LANG_COLORS[language] || '#22C55E';
  const displayLabel = label || language;

  // ── Tab key handler ────────────────────────────────────────
  // Inserts 2 spaces at cursor position instead of changing focus
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Tab → indent
    if (e.key === 'Tab') {
      e.preventDefault();
      const el    = e.currentTarget;
      const start = el.selectionStart;
      const end   = el.selectionEnd;
      const next  = value.substring(0, start) + '  ' + value.substring(end);
      onChange?.(next);
      // Restore cursor position after React re-renders
      requestAnimationFrame(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = start + 2;
          textareaRef.current.selectionEnd   = start + 2;
        }
      });
    }

    // Ctrl+Enter or Cmd+Enter → run
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      onRun?.();
    }
  }, [value, onChange, onRun]);

  return (
    <div className={clsx(
      'bg-[#0D1117] border border-[#1E1E2E] rounded-xl overflow-hidden',
      className,
    )}>
      {/* ── Editor Header ─────────────────────────────────── */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#161B22] border-b border-[#1E1E2E]">
        {/* Left: traffic lights + language */}
        <div className="flex items-center gap-2">
          {/* macOS-style dots */}
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          {/* Language dot + label */}
          <div className="flex items-center gap-1.5 ml-1">
            <div className="w-2 h-2 rounded-full" style={{ background: langColor }} />
            <span className="text-xs text-[#64748B] font-mono capitalize">
              {displayLabel}
            </span>
          </div>
          {readOnly && (
            <span className="text-[10px] text-[#3A4560] border border-[#2A2A3C] px-1.5 py-0.5 rounded font-semibold uppercase tracking-wider ml-1">
              read only
            </span>
          )}
        </div>

        {/* Right: Run button + extra actions */}
        <div className="flex items-center gap-2">
          {extraActions}
          {onRun && (
            <button
              onClick={onRun}
              disabled={isRunning || readOnly}
              className="
                flex items-center gap-1.5 px-3 py-1
                bg-green-500 text-black text-xs font-bold rounded-lg
                hover:bg-green-400 transition-colors
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              {isRunning ? (
                <div className="w-3 h-3 border border-black/30 border-t-black rounded-full animate-spin" />
              ) : '▶'}
              Run
            </button>
          )}
        </div>
      </div>

      {/* ── Textarea ──────────────────────────────────────── */}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={e => onChange?.(e.target.value)}
        onKeyDown={handleKeyDown}
        readOnly={readOnly}
        placeholder={readOnly ? '' : placeholder}
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        className={clsx(
          'w-full p-4',
          'bg-transparent text-[#E2E8F0]',
          'font-mono text-xs leading-relaxed',
          'resize-y outline-none',
          'placeholder-[#3A4560]',
          readOnly ? 'cursor-default select-all' : 'cursor-text',
        )}
        style={{
          minHeight,
          maxHeight: maxHeight || undefined,
          tabSize:   2,
          // Subtle scrollbar
          scrollbarWidth: 'thin',
          scrollbarColor: '#2A2A3C transparent',
        }}
      />
    </div>
  );
});

// ── Output Panel ──────────────────────────────────────────────
// Displayed below the code editor after running
import type { OutputLine } from '@/hooks/useLesson';

interface OutputPanelProps {
  lines:      OutputLine[];
  isRunning:  boolean;
  minHeight?: string;
}

export function OutputPanel({ lines, isRunning, minHeight = '72px' }: OutputPanelProps) {
  return (
    <div
      className="bg-[#020810] border border-[#1E1E2E] rounded-xl p-4 font-mono text-xs overflow-y-auto"
      style={{ minHeight, maxHeight: '200px' }}
    >
      <div className="text-[#3A4560] text-[10px] font-bold uppercase tracking-widest mb-2">
        ▶ Output
      </div>

      {isRunning && (
        <div className="flex items-center gap-2 text-[#64748B]">
          <div className="w-3 h-3 rounded-full border border-[#64748B] border-t-green-500 animate-spin" />
          Running...
        </div>
      )}

      {!isRunning && lines.length === 0 && (
        <div className="text-[#3A4560]">Click Run to see output...</div>
      )}

      {lines.map((line, i) => (
        <div
          key={i}
          className={clsx(
            'leading-relaxed',
            line.type === 'error' ? 'text-red-400' :
            line.type === 'info'  ? 'text-[#64748B]' :
            'text-green-400',
          )}
        >
          {line.content || '\u00A0'}
        </div>
      ))}
    </div>
  );
}
