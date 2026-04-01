'use client';
// src/components/ui/Card.tsx
// ─────────────────────────────────────────────────────────────
// CARD COMPONENTS
//
// Three card types used across CodeGuru AI:
//
//  Card        → Base card wrapper (border, bg, radius)
//  StatCard    → Single stat display (XP, Streak, Lessons)
//  GlowCard    → Card with gradient glow (Continue Learning, Level Up)
// ─────────────────────────────────────────────────────────────

import { ReactNode, HTMLAttributes } from 'react';
import { clsx } from 'clsx';

// ── Card ──────────────────────────────────────────────────────
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children:   ReactNode;
  padding?:   'none' | 'sm' | 'md' | 'lg';
  hover?:     boolean;   // adds hover lift effect
  clickable?: boolean;   // shows pointer cursor
}

const PADDING = {
  none: '',
  sm:   'p-3',
  md:   'p-4',
  lg:   'p-5',
};

export function Card({
  children,
  padding   = 'md',
  hover     = false,
  clickable = false,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        'bg-[#12121A] border border-[#1E1E2E] rounded-2xl',
        'transition-all duration-200',
        PADDING[padding],
        hover    && 'hover:border-[#2A2A3C] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30',
        clickable && 'cursor-pointer',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// ── Stat Card ─────────────────────────────────────────────────
// Used in dashboard and progress screen for XP / streak / level
interface StatCardProps {
  value:    string | number;
  label:    string;
  color?:   string;    // Tailwind text color class
  icon?:    string;    // emoji
  subtitle?: string;
  className?: string;
}

export function StatCard({
  value,
  label,
  color     = 'text-green-500',
  icon,
  subtitle,
  className,
}: StatCardProps) {
  return (
    <Card padding="md" className={className}>
      {icon && <div className="text-xl mb-1">{icon}</div>}
      <div className={`font-display font-extrabold text-2xl leading-none ${color}`}>
        {value}
      </div>
      <div className="text-xs text-[#64748B] mt-1 uppercase tracking-wider font-semibold">
        {label}
      </div>
      {subtitle && (
        <div className="text-xs text-[#3A4560] mt-0.5">{subtitle}</div>
      )}
    </Card>
  );
}

// ── Glow Card ─────────────────────────────────────────────────
// Gradient background card for featured content
interface GlowCardProps {
  children:  ReactNode;
  from?:     string;   // gradient from color (Tailwind)
  to?:       string;   // gradient to color
  border?:   string;   // border color
  className?: string;
  onClick?:  () => void;
}

export function GlowCard({
  children,
  from      = 'from-green-950/60',
  to        = 'to-blue-950/40',
  border    = 'border-green-800/40',
  className,
  onClick,
}: GlowCardProps) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        `bg-gradient-to-br ${from} ${to} border ${border} rounded-2xl p-5`,
        'transition-all duration-200',
        onClick && 'cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30',
        className,
      )}
    >
      {children}
    </div>
  );
}
