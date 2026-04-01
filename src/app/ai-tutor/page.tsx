'use client';
// src/app/ai-tutor/page.tsx
// ─────────────────────────────────────────────────────────────
// AI TUTOR PAGE — /ai-tutor
// Full multi-turn chat with Claude (CodeGuru AI persona).
//
// Features:
//   - Persistent chat history (in-session, via uiStore)
//   - Typing indicator (3-dot bounce animation)
//   - Suggestion chips for quick questions
//   - Markdown-formatted AI responses
//   - Context-aware (can be set to current lesson/language)
//   - Clear chat button
//   - Scroll-to-bottom on new message
//   - Enter to send, Shift+Enter for newline
// ─────────────────────────────────────────────────────────────

import { useState, useEffect, useRef, useCallback } from 'react';
import AuthGuard    from '@/components/auth/AuthGuard';
import { useAIChat } from '@/hooks/useAI';
import type { ChatMessage } from '@/store/uiStore';

// ── Suggestion chips ───────────────────────────────────────────
const SUGGESTIONS = [
  'What is a variable?',
  'Explain loops simply',
  'What is a function?',
  'Python vs JavaScript?',
  'What is an API?',
  'How does if/else work?',
  'What is a list/array?',
  'Explain OOP concepts',
];

// ── Message bubble ────────────────────────────────────────────
function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === 'user';
  const time   = new Date(message.timestamp).toLocaleTimeString('en-IN', {
    hour:   '2-digit',
    minute: '2-digit',
  });

  // Basic markdown rendering for assistant messages
  function renderContent(text: string): React.ReactNode {
    const lines = text.split('\n');
    return lines.map((line, i) => {
      // Code blocks (```...```)
      if (line.startsWith('```') || line.endsWith('```')) {
        return null; // handled in multi-line below
      }
      // Bold **text**
      const formatted = line
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/`(.+?)`/g, '<code class="bg-black/30 px-1.5 py-0.5 rounded text-xs font-mono">$1</code>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>');

      if (!line.trim()) return <br key={i} />;
      return (
        <span
          key={i}
          className="block leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formatted }}
        />
      );
    });
  }

  // Handle code blocks specially
  function renderWithCodeBlocks(text: string): React.ReactNode {
    const parts = text.split(/(```[\s\S]*?```)/g);
    return parts.map((part, i) => {
      if (part.startsWith('```') && part.endsWith('```')) {
        const lines = part.slice(3, -3).split('\n');
        const lang  = lines[0].trim() || '';
        const code  = lines.slice(1).join('\n');
        return (
          <pre key={i} className="mt-2 mb-2 bg-black/40 rounded-xl p-3 overflow-x-auto text-xs font-mono text-green-300 leading-relaxed">
            {lang && <div className="text-[#64748B] text-[10px] mb-1 uppercase">{lang}</div>}
            {code}
          </pre>
        );
      }
      return <span key={i}>{renderContent(part)}</span>;
    });
  }

  return (
    <div className={`flex gap-2 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Avatar */}
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-sm flex-shrink-0 mt-1">
          🤖
        </div>
      )}

      <div className={`max-w-[82%] ${isUser ? 'items-end' : 'items-start'} flex flex-col`}>
        <div
          className={`
            px-4 py-3 rounded-2xl text-sm leading-relaxed
            ${isUser
              ? 'bg-green-500 text-black font-medium rounded-br-sm'
              : 'bg-[#18182A] border border-[#1E1E2E] text-[#E2E8F0] rounded-bl-sm'
            }
          `}
        >
          {isUser ? message.content : renderWithCodeBlocks(message.content)}
        </div>
        <div className="text-[10px] text-[#3A4560] mt-1 px-1">{time}</div>
      </div>
    </div>
  );
}

// ── Typing indicator ──────────────────────────────────────────
function TypingIndicator() {
  return (
    <div className="flex gap-2 items-start">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-sm flex-shrink-0">
        🤖
      </div>
      <div className="bg-[#18182A] border border-[#1E1E2E] rounded-2xl rounded-bl-sm px-4 py-3">
        <div className="flex gap-1 items-center h-4">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-[#64748B]"
              style={{ animation: `typingBounce 1.2s ease infinite`, animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────
export default function AITutorPage() {
  const { messages, isLoading, sendMessage, clearChat } = useAIChat();
  const [input,      setInput]      = useState('');
  const messagesEndRef              = useRef<HTMLDivElement>(null);
  const inputRef                    = useRef<HTMLInputElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // ── Send handler ───────────────────────────────────────────
  const handleSend = useCallback(async () => {
    const text = input.trim();
    if (!text || isLoading) return;
    setInput('');
    await sendMessage(text);
  }, [input, isLoading, sendMessage]);

  // ── Enter key ──────────────────────────────────────────────
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  // ── Suggestion chip click ──────────────────────────────────
  function handleSuggestion(text: string) {
    setInput('');
    sendMessage(text);
    inputRef.current?.focus();
  }

  return (
    <AuthGuard>
      <div className="flex flex-col h-[calc(100vh-56px-64px)] sm:h-[calc(100vh-56px)]">

        {/* ── Chat Header ────────────────────────────────── */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#12121A] border-b border-[#1E1E2E] flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-lg">
              🤖
            </div>
            <div>
              <div className="font-display font-bold text-sm">CodeGuru AI</div>
              <div className="text-xs text-green-500 flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-slow" />
                Online · Powered by Claude
              </div>
            </div>
          </div>
          <button
            onClick={clearChat}
            className="text-xs text-[#64748B] hover:text-[#E2E8F0] border border-[#2A2A3C] px-3 py-1.5 rounded-lg transition-colors"
          >
            Clear Chat
          </button>
        </div>

        {/* ── Messages ───────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {messages.map(msg => (
            <MessageBubble key={msg.id} message={msg} />
          ))}

          {/* Typing indicator */}
          {isLoading && <TypingIndicator />}

          {/* Scroll anchor */}
          <div ref={messagesEndRef} />
        </div>

        {/* ── Suggestion chips ────────────────────────────── */}
        {messages.length <= 2 && !isLoading && (
          <div className="px-4 py-2 flex gap-2 overflow-x-auto flex-shrink-0">
            {SUGGESTIONS.map(s => (
              <button
                key={s}
                onClick={() => handleSuggestion(s)}
                className="
                  flex-shrink-0 px-3 py-1.5
                  bg-[#12121A] border border-[#2A2A3C] text-[#64748B]
                  text-xs font-medium rounded-full whitespace-nowrap
                  hover:border-green-500/50 hover:text-green-400 transition-all
                "
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* ── Input bar ───────────────────────────────────── */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#12121A] border-t border-[#1E1E2E] flex-shrink-0">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything about coding..."
            disabled={isLoading}
            className="
              flex-1 px-4 py-2.5 bg-[#18182A] border border-[#2A2A3C] rounded-full
              text-sm text-[#E2E8F0] placeholder-[#3A4560]
              outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/10
              transition-all disabled:opacity-60
            "
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="
              w-10 h-10 rounded-full bg-green-500 flex items-center justify-center
              hover:bg-green-400 transition-all
              disabled:opacity-40 disabled:cursor-not-allowed
              flex-shrink-0
            "
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="black" strokeWidth="2.5">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </button>
        </div>

      </div>
    </AuthGuard>
  );
}
