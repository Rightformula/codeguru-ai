'use client';
// src/app/playground/page.tsx
// ─────────────────────────────────────────────────────────────
// PLAYGROUND PAGE — /playground
// A full interactive code editor with:
//   - Language selector (Python / JavaScript / Java / HTML-CSS)
//   - Code textarea with Tab key indent support
//   - Run button → calls /api/code/execute
//   - AI Debug button → calls Claude/OpenAI for code analysis
//   - HTML/CSS live preview panel
//   - Ctrl+Enter keyboard shortcut to run
// ─────────────────────────────────────────────────────────────

import { useEffect, useRef }     from 'react';
import AuthGuard                 from '@/components/auth/AuthGuard';
import { useAIDebug }            from '@/hooks/useAI';
import { useProgressStore }      from '@/store/progressStore';
import { useToast }              from '@/components/ui/ToastProvider';
import {
  useUIStore,
  usePlaygroundLang,
  usePlaygroundCode,
  usePlaygroundOutput,
  useIsRunningCode,
  type PlaygroundLanguage,
} from '@/store/uiStore';

// ── Language config ────────────────────────────────────────────
const LANGUAGES: { id: PlaygroundLanguage; label: string; icon: string; color: string }[] = [
  { id: 'python',     label: 'Python',      icon: '🐍', color: '#3776AB' },
  { id: 'javascript', label: 'JavaScript',  icon: '⚡', color: '#F7DF1E' },
  { id: 'java',       label: 'Java',        icon: '☕', color: '#007396' },
  { id: 'html-css',   label: 'HTML / CSS',  icon: '🌐', color: '#E34F26' },
];

// ── HTML Preview Panel ────────────────────────────────────────
function HtmlPreview({ html }: { html: string }) {
  return (
    <div className="flex flex-col h-full">
      <div className="text-xs font-bold text-[#64748B] uppercase tracking-widest px-3 py-2 border-b border-[#1E1E2E]">
        🌐 Live Preview
      </div>
      <iframe
        srcDoc={html}
        className="flex-1 w-full bg-white rounded-b-xl"
        sandbox="allow-scripts"
        title="HTML Preview"
      />
    </div>
  );
}

// ── Text Output Panel ─────────────────────────────────────────
function OutputPanel({
  output,
  isRunning,
  debugOutput,
  isDebugging,
}: {
  output:      string | null;
  isRunning:   boolean;
  debugOutput: string | null;
  isDebugging: boolean;
}) {
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [output, debugOutput]);

  const lines  = output?.split('\n') || [];
  const isError = lines.some(l =>
    l.toLowerCase().includes('error') ||
    l.toLowerCase().includes('traceback')
  );

  return (
    <div className="h-full bg-[#020810] overflow-y-auto p-4 font-mono text-xs">
      <div className="text-[#3A4560] text-[10px] font-bold uppercase tracking-widest mb-3">
        ▶ Output
      </div>

      {/* Loading spinner */}
      {(isRunning || isDebugging) && (
        <div className="flex items-center gap-2 text-[#64748B] mb-2">
          <div className="w-3 h-3 border border-[#64748B] border-t-green-500 rounded-full animate-spin" />
          {isDebugging ? '🤖 AI analyzing your code...' : 'Running code...'}
        </div>
      )}

      {/* AI Debug output */}
      {debugOutput && !isDebugging && (
        <div className="mb-3">
          <div className="text-purple-400 text-[10px] font-bold uppercase tracking-widest mb-2">
            🤖 AI Debug Analysis
          </div>
          <div className="text-[#94A3B8] leading-relaxed whitespace-pre-wrap text-xs">
            {debugOutput}
          </div>
        </div>
      )}

      {/* Code output */}
      {output && !isRunning && (
        <div>
          {debugOutput && (
            <div className="text-[#3A4560] text-[10px] font-bold uppercase tracking-widest mb-2 mt-3 pt-3 border-t border-[#1E1E2E]">
              ▶ Code Output
            </div>
          )}
          {lines.map((line, i) => (
            <div
              key={i}
              className={`leading-relaxed ${
                line.toLowerCase().includes('error') ||
                line.toLowerCase().includes('traceback')
                  ? 'text-red-400'
                  : line.startsWith('✓')
                    ? 'text-[#64748B]'
                    : 'text-green-400'
              }`}
            >
              {line || '\u00A0'}
            </div>
          ))}
        </div>
      )}

      {/* Empty state */}
      {!output && !isRunning && !debugOutput && !isDebugging && (
        <div className="text-[#3A4560]">
          Click ▶ Run to execute your code, or 🤖 AI Debug to analyze it.
          <br /><br />
          <span className="text-[#3A4560]">Tip: Press Ctrl+Enter to run</span>
        </div>
      )}

      <div ref={endRef} />
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────
export default function PlaygroundPage() {
  const { showToast }       = useToast();
  const { debug, debugOutput, isDebugging } = useAIDebug();
  const incrementCodeRun    = useProgressStore(s => s.incrementCodeRun);

  const lang                = usePlaygroundLang();
  const code                = usePlaygroundCode(lang);
  const output              = usePlaygroundOutput();
  const isRunning           = useIsRunningCode();

  const setLang             = useUIStore(s => s.setPlaygroundLang);
  const setCode             = useUIStore(s => s.setPlaygroundCode);
  const setOutput           = useUIStore(s => s.setPlaygroundOutput);
  const setIsRunning        = useUIStore(s => s.setIsRunningCode);

  // ── Run code ───────────────────────────────────────────────
  async function runCode() {
    if (!code.trim()) { showToast('Write some code first!', 'error'); return; }
    if (isRunning) return;

    setIsRunning(true);
    setOutput(null);

    try {
      const res = await fetch('/api/code/execute', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ code, language: lang }),
      });
      const result = await res.json();

      // HTML/CSS — live preview handles it, just signal
      if (result.stdout?.startsWith('[HTML_RENDER]')) {
        setOutput('[HTML_RENDER]' + result.stdout.slice(13));
        return;
      }

      // Collect output text
      let outputText = '';
      if (result.compile_output) outputText += '❌ Compilation Error:\n' + result.compile_output;
      else if (result.stderr)    outputText += '❌ Error:\n' + result.stderr;
      else if (result.stdout)    outputText = result.stdout + (result.time ? `\n✓ Done in ${result.time}s` : '');
      else                       outputText = '✓ Code ran with no output';

      setOutput(outputText);
      incrementCodeRun();

    } catch {
      setOutput('❌ Network error — check your connection and try again.');
    } finally {
      setIsRunning(false);
    }
  }

  // ── Keyboard shortcut: Ctrl+Enter ─────────────────────────
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        runCode();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [code, lang]);

  // ── Tab key in textarea ────────────────────────────────────
  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Tab') {
      e.preventDefault();
      const el    = e.currentTarget;
      const start = el.selectionStart;
      const end   = el.selectionEnd;
      const next  = code.substring(0, start) + '  ' + code.substring(end);
      setCode(lang, next);
      requestAnimationFrame(() => {
        el.selectionStart = el.selectionEnd = start + 2;
      });
    }
  }

  // ── Determine if we should show HTML preview ───────────────
  const showHtmlPreview = lang === 'html-css' && output?.startsWith('[HTML_RENDER]');
  const htmlContent     = showHtmlPreview ? output!.slice(13) : '';

  return (
    <AuthGuard>
      <div className="flex flex-col h-[calc(100vh-56px-64px)] sm:h-[calc(100vh-56px)]">

        {/* ── Toolbar ────────────────────────────────────── */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#12121A] border-b border-[#1E1E2E] flex-shrink-0 flex-wrap">
          {/* Language selector */}
          <div className="flex gap-1">
            {LANGUAGES.map(l => (
              <button
                key={l.id}
                onClick={() => { setLang(l.id); setOutput(null); }}
                className={`
                  flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all
                  ${lang === l.id
                    ? 'text-black'
                    : 'bg-transparent text-[#64748B] hover:text-[#E2E8F0] hover:bg-[#1E1E2E]'
                  }
                `}
                style={lang === l.id ? { background: l.color } : {}}
              >
                {l.icon}
                <span className="hidden sm:inline">{l.label}</span>
              </button>
            ))}
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Action buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => { setCode(lang, ''); setOutput(null); }}
              className="px-3 py-1.5 border border-[#2A2A3C] text-[#64748B] text-xs font-bold rounded-lg hover:text-[#E2E8F0] hover:border-[#3A4560] transition-colors"
            >
              🗑 Clear
            </button>
            <button
              onClick={() => debug(code, lang)}
              disabled={isDebugging || isRunning}
              className="px-3 py-1.5 bg-purple-950/50 border border-purple-700/40 text-purple-400 text-xs font-bold rounded-lg hover:bg-purple-950/80 transition-colors disabled:opacity-50"
            >
              🤖 Debug
            </button>
            <button
              onClick={runCode}
              disabled={isRunning}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-green-500 text-black text-xs font-bold rounded-lg hover:bg-green-400 transition-colors disabled:opacity-50"
            >
              {isRunning ? (
                <div className="w-3 h-3 border border-black/30 border-t-black rounded-full animate-spin" />
              ) : '▶'}
              Run
              <span className="hidden sm:inline text-black/60">Ctrl+↵</span>
            </button>
          </div>
        </div>

        {/* ── Editor + Output split ───────────────────────── */}
        <div className="flex-1 flex flex-col sm:flex-row overflow-hidden">

          {/* Editor panel */}
          <div className="flex-1 flex flex-col min-h-0 border-r border-[#1E1E2E]">
            <div className="text-[10px] font-bold text-[#3A4560] uppercase tracking-widest px-4 py-2 border-b border-[#1E1E2E] flex items-center justify-between">
              <span>Editor</span>
              <span className="text-[#3A4560]">{code.split('\n').length} lines</span>
            </div>
            <textarea
              value={code}
              onChange={e => setCode(lang, e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              className="
                flex-1 w-full p-4
                bg-[#020810] text-[#E2E8F0]
                font-mono text-xs leading-relaxed
                resize-none outline-none
                placeholder-[#3A4560]
              "
              style={{ tabSize: 2, minHeight: '200px' }}
              placeholder="Write your code here..."
            />
          </div>

          {/* Output / Preview panel */}
          <div className="h-48 sm:h-auto sm:w-[45%] flex flex-col border-t sm:border-t-0 border-[#1E1E2E] overflow-hidden">
            {showHtmlPreview ? (
              <HtmlPreview html={htmlContent} />
            ) : (
              <OutputPanel
                output={output}
                isRunning={isRunning}
                debugOutput={debugOutput}
                isDebugging={isDebugging}
              />
            )}
          </div>
        </div>

      </div>
    </AuthGuard>
  );
}
