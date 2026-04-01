'use client';
// src/components/layout/BottomNav.tsx
// Mobile-only bottom navigation. Hidden on sm screens and above.

import Link          from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  {
    href:  '/dashboard',
    label: 'Home',
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={active ? 2.5 : 2}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    href:  '/courses',
    label: 'Courses',
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={active ? 2.5 : 2}>
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
      </svg>
    ),
  },
  {
    href:  '/playground',
    label: 'Code',
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={active ? 2.5 : 2}>
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    href:  '/ai-tutor',
    label: 'AI Tutor',
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={active ? 2.5 : 2}>
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    href:  '/progress',
    label: 'Progress',
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={active ? 2.5 : 2}>
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#12121A] border-t border-[#1E1E2E] flex h-16 safe-bottom">
      {NAV_ITEMS.map(item => {
        const active = pathname === item.href || pathname.startsWith(item.href + '/');
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`
              flex-1 flex flex-col items-center justify-center gap-0.5
              text-[10px] font-bold uppercase tracking-widest
              transition-colors duration-150
              ${active ? 'text-green-500' : 'text-[#64748B]'}
            `}
          >
            {item.icon(active)}
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
