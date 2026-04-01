'use client';
// src/components/ui/ToastProvider.tsx
// ─────────────────────────────────────────────────────────────
// Global toast notification system.
// Any component can call showToast() from anywhere in the app.
//
// Usage:
//   const { showToast } = useToast();
//   showToast('Lesson complete! +10 XP 🎉', 'success');
// ─────────────────────────────────────────────────────────────

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react';

// ── Types ─────────────────────────────────────────────────────
type ToastType = 'success' | 'error' | 'warning' | 'info';

interface Toast {
  id:      string;
  message: string;
  type:    ToastType;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

// ── Context ───────────────────────────────────────────────────
const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
});

// ── Toast Icons ───────────────────────────────────────────────
const ICONS: Record<ToastType, string> = {
  success: '✅',
  error:   '❌',
  warning: '⚠️',
  info:    'ℹ️',
};

// ── Border Colors ─────────────────────────────────────────────
const BORDER_COLORS: Record<ToastType, string> = {
  success: 'border-l-green-500',
  error:   'border-l-red-500',
  warning: 'border-l-yellow-500',
  info:    'border-l-blue-500',
};

// ── Provider ──────────────────────────────────────────────────
export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType = 'success') => {
    const id = Date.now().toString();

    setToasts(prev => [...prev, { id, message, type }]);

    // Auto-remove after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  }, []);

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast Container — fixed top-right, stacks multiple toasts */}
      <div
        className="fixed top-4 right-4 z-[9999] flex flex-col gap-2 pointer-events-none"
        aria-live="polite"
        aria-label="Notifications"
      >
        {toasts.map((toast, index) => (
          <div
            key={toast.id}
            onClick={() => removeToast(toast.id)}
            style={{ animationDelay: `${index * 50}ms` }}
            className={`
              pointer-events-auto
              flex items-center gap-3
              bg-[#12121A] border border-[#1E1E2E] border-l-4 ${BORDER_COLORS[toast.type]}
              rounded-xl px-4 py-3
              text-sm font-medium text-[#E2E8F0]
              shadow-2xl shadow-black/50
              cursor-pointer
              animate-slide-right
              max-w-[320px]
              transition-all duration-200
              hover:bg-[#18182A]
            `}
          >
            <span className="text-base flex-shrink-0">{ICONS[toast.type]}</span>
            <span className="flex-1">{toast.message}</span>
            <button
              onClick={(e) => { e.stopPropagation(); removeToast(toast.id); }}
              className="text-[#64748B] hover:text-[#E2E8F0] ml-1 flex-shrink-0"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

// ── useToast Hook ─────────────────────────────────────────────
export function useToast(): ToastContextType {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used inside <ToastProvider>');
  }
  return context;
}
