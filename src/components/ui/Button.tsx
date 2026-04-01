'use client';
// src/components/ui/Button.tsx
// ─────────────────────────────────────────────────────────────
// BUTTON COMPONENT
//
// All button variants used across CodeGuru AI in one place.
// Using this instead of raw Tailwind classes ensures:
//   - Visual consistency across all pages
//   - Single place to update button styles
//   - Accessible focus states built in
//   - Loading state with spinner built in
//
// VARIANTS:
//   primary   → green, main CTA (Start Learning, Complete Lesson)
//   secondary → outlined, secondary actions (Back, Cancel)
//   ghost     → transparent, subtle actions
//   danger    → red, destructive actions (Delete, Reset)
//   ai        → purple, AI-related actions (Get Hint, Debug)
//
// SIZES:
//   sm  → 12px text, tight padding (chips, tags)
//   md  → 14px text, standard padding (default)
//   lg  → 16px text, spacious padding (hero CTAs)
// ─────────────────────────────────────────────────────────────

import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

// ── Types ─────────────────────────────────────────────────────
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'ai';
export type ButtonSize    = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:  ButtonVariant;
  size?:     ButtonSize;
  loading?:  boolean;       // Shows spinner, disables button
  fullWidth?: boolean;      // width: 100%
  leftIcon?: ReactNode;     // Icon before text
  rightIcon?: ReactNode;    // Icon after text
  children:  ReactNode;
}

// ── Style Maps ────────────────────────────────────────────────
const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:   'bg-green-500 text-black hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.35)] active:bg-green-600',
  secondary: 'bg-transparent text-[#E2E8F0] border border-[#2A2A3C] hover:bg-[#18182A] hover:border-[#3A4560]',
  ghost:     'bg-transparent text-[#64748B] hover:text-[#E2E8F0] hover:bg-[#18182A]',
  danger:    'bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 hover:border-red-500/60',
  ai:        'bg-purple-950/50 text-purple-400 border border-purple-700/40 hover:bg-purple-950/80',
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs gap-1.5 rounded-lg',
  md: 'px-4 py-2.5 text-sm gap-2 rounded-xl',
  lg: 'px-6 py-3.5 text-base gap-2.5 rounded-xl',
};

// ── Spinner ───────────────────────────────────────────────────
function Spinner({ variant }: { variant: ButtonVariant }) {
  const color = variant === 'primary' ? 'border-black/30 border-t-black' : 'border-current/30 border-t-current';
  return (
    <div className={`w-3.5 h-3.5 rounded-full border-2 animate-spin flex-shrink-0 ${color}`} />
  );
}

// ── Component ─────────────────────────────────────────────────
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant  = 'primary',
    size     = 'md',
    loading  = false,
    fullWidth = false,
    leftIcon,
    rightIcon,
    children,
    className,
    disabled,
    ...props
  }, ref) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={clsx(
          // Base styles — always applied
          'inline-flex items-center justify-center font-semibold',
          'transition-all duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/50',
          'active:scale-[0.97]',
          'select-none',
          // Disabled state
          isDisabled && 'opacity-50 cursor-not-allowed pointer-events-none',
          // Variant
          VARIANT_STYLES[variant],
          // Size
          SIZE_STYLES[size],
          // Full width
          fullWidth && 'w-full',
          // Custom classes
          className,
        )}
        {...props}
      >
        {/* Left icon or loading spinner */}
        {loading ? (
          <Spinner variant={variant} />
        ) : leftIcon ? (
          <span className="flex-shrink-0">{leftIcon}</span>
        ) : null}

        {/* Label */}
        <span>{children}</span>

        {/* Right icon */}
        {!loading && rightIcon && (
          <span className="flex-shrink-0">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

// ── Icon Button ───────────────────────────────────────────────
// Square button for icon-only use (close buttons, arrow buttons)
interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon:      ReactNode;
  label:     string;     // aria-label for accessibility
  size?:     ButtonSize;
  variant?:  ButtonVariant;
}

export function IconButton({
  icon,
  label,
  size    = 'md',
  variant = 'ghost',
  className,
  ...props
}: IconButtonProps) {
  const sizePx: Record<ButtonSize, string> = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  return (
    <button
      aria-label={label}
      className={clsx(
        'inline-flex items-center justify-center rounded-lg flex-shrink-0',
        'transition-all duration-150 active:scale-95',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/50',
        VARIANT_STYLES[variant],
        sizePx[size],
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  );
}
