'use client';
// src/components/ui/Badge.tsx
// ─────────────────────────────────────────────────────────────
// BADGE + LOADER + MODAL — small reusable UI primitives
// ─────────────────────────────────────────────────────────────

import { ReactNode, useEffect } from 'react';
import { clsx } from 'clsx';

// ════════════════════════════════════════════════════════════
//  BADGE — inline status/label chip
// ════════════════════════════════════════════════════════════

type BadgeColor = 'green' | 'blue' | 'yellow' | 'orange' | 'purple' | 'red' | 'gray';

interface BadgeProps {
  children:  ReactNode;
  color?:    BadgeColor;
  dot?:      boolean;   // animated pulse dot before text
  className?: string;
}

const BADGE_STYLES: Record<BadgeColor, string> = {
  green:  'bg-green-950/60 text-green-400 border-green-800/40',
  blue:   'bg-blue-950/60 text-blue-400 border-blue-800/40',
  yellow: 'bg-yellow-950/60 text-yellow-400 border-yellow-800/40',
  orange: 'bg-orange-950/60 text-orange-400 border-orange-800/40',
  purple: 'bg-purple-950/60 text-purple-400 border-purple-700/40',
  red:    'bg-red-950/60 text-red-400 border-red-800/40',
  gray:   'bg-[#1E1E2E] text-[#64748B] border-[#2A2A3C]',
};

const DOT_COLORS: Record<BadgeColor, string> = {
  green:  'bg-green-400',
  blue:   'bg-blue-400',
  yellow: 'bg-yellow-400',
  orange: 'bg-orange-400',
  purple: 'bg-purple-400',
  red:    'bg-red-400',
  gray:   'bg-[#64748B]',
};

export function Badge({ children, color = 'gray', dot = false, className }: BadgeProps) {
  return (
    <span className={clsx(
      'inline-flex items-center gap-1.5 px-2.5 py-0.5',
      'text-xs font-semibold rounded-full border',
      BADGE_STYLES[color],
      className,
    )}>
      {dot && (
        <span className={clsx(
          'w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0',
          DOT_COLORS[color],
        )} />
      )}
      {children}
    </span>
  );
}

// ════════════════════════════════════════════════════════════
//  LOADER — full-page and inline loading states
// ════════════════════════════════════════════════════════════

interface LoaderProps {
  size?:    'sm' | 'md' | 'lg';
  label?:  string;
  fullPage?: boolean;
}

const LOADER_SIZES = {
  sm: 'w-4 h-4 border-2',
  md: 'w-8 h-8 border-2',
  lg: 'w-12 h-12 border-[3px]',
};

export function Loader({ size = 'md', label, fullPage = false }: LoaderProps) {
  const spinner = (
    <div className={clsx(
      'rounded-full border-[#1E1E2E] border-t-green-500 animate-spin',
      LOADER_SIZES[size],
    )} />
  );

  if (fullPage) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#0A0A0F] gap-4 z-50">
        {spinner}
        {label && <p className="text-sm text-[#64748B]">{label}</p>}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3 py-8">
      {spinner}
      {label && <p className="text-sm text-[#64748B]">{label}</p>}
    </div>
  );
}

// ════════════════════════════════════════════════════════════
//  MODAL — accessible dialog overlay
// ════════════════════════════════════════════════════════════

interface ModalProps {
  isOpen:    boolean;
  onClose:   () => void;
  title?:    string;
  children:  ReactNode;
  size?:     'sm' | 'md' | 'lg';
  closeOnOverlay?: boolean;
}

const MODAL_SIZES = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
};

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size             = 'md',
  closeOnOverlay   = true,
}: ModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={closeOnOverlay ? onClose : undefined}
      />

      {/* Panel */}
      <div className={clsx(
        'relative w-full z-10',
        'bg-[#12121A] border border-[#1E1E2E] rounded-2xl',
        'shadow-2xl shadow-black/50',
        'animate-slide-up',
        MODAL_SIZES[size],
      )}>
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#1E1E2E]">
            <h3 className="font-display font-bold text-base">{title}</h3>
            <button
              onClick={onClose}
              className="text-[#64748B] hover:text-[#E2E8F0] transition-colors w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#1E1E2E]"
            >
              ✕
            </button>
          </div>
        )}

        {/* Content */}
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

// ── Confirm Modal ─────────────────────────────────────────────
// Pre-built confirmation dialog (used for "Show Solution?")
interface ConfirmModalProps {
  isOpen:    boolean;
  onClose:   () => void;
  onConfirm: () => void;
  title:     string;
  message:   string;
  confirmLabel?:  string;
  cancelLabel?:   string;
  danger?:        boolean;
}

export function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel  = 'Cancel',
  danger       = false,
}: ConfirmModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="sm">
      <p className="text-sm text-[#94A3B8] mb-5">{message}</p>
      <div className="flex gap-3 justify-end">
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm font-semibold text-[#64748B] border border-[#2A2A3C] rounded-xl hover:bg-[#18182A] transition-colors"
        >
          {cancelLabel}
        </button>
        <button
          onClick={() => { onConfirm(); onClose(); }}
          className={clsx(
            'px-4 py-2 text-sm font-bold rounded-xl transition-colors',
            danger
              ? 'bg-red-500/20 text-red-400 border border-red-500/40 hover:bg-red-500/30'
              : 'bg-green-500 text-black hover:bg-green-400',
          )}
        >
          {confirmLabel}
        </button>
      </div>
    </Modal>
  );
}
