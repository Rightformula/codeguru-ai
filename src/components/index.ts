// src/components/index.ts
// ─────────────────────────────────────────────────────────────
// COMPONENTS BARREL FILE
//
// Single import point for all reusable components.
// Instead of:
//   import { Button }      from '@/components/ui/Button';
//   import { Card }        from '@/components/ui/Card';
//   import { CourseCard }  from '@/components/course/CourseCard';
//
// Any file can do:
//   import { Button, Card, CourseCard } from '@/components';
// ─────────────────────────────────────────────────────────────

// ── UI ────────────────────────────────────────────────────────
export { Button, IconButton }                    from './ui/Button';
export type { ButtonVariant, ButtonSize }         from './ui/Button';

export { Card, StatCard, GlowCard }              from './ui/Card';

export { Badge, Loader, Modal, ConfirmModal }    from './ui/Badge';

export { ProgressBar, XPBar, StreakBadge, ModuleProgress } from './ui/ProgressBar';

export { ToastProvider, useToast }               from './ui/ToastProvider';
export { default as UpgradeModal }               from './ui/UpgradeModal';

// ── Auth ──────────────────────────────────────────────────────
export { default as AuthGuard }                  from './auth/AuthGuard';
export { AuthProvider, useAuth }                 from './auth/AuthProvider';
export { default as StoreSync }                  from './auth/StoreSync';

// ── Layout ────────────────────────────────────────────────────
export { default as AppNavbar }                  from './layout/AppNavbar';
export { default as BottomNav }                  from './layout/BottomNav';

// ── Course ────────────────────────────────────────────────────
export { CourseCard }                            from './course/CourseCard';
export type { CourseCardData }                   from './course/CourseCard';
export { LessonCard, ModuleCard, ModuleHeader }  from './course/LessonCard';

// ── Lesson ────────────────────────────────────────────────────
export { QuizBlock }                             from './lesson/QuizBlock';
export { ExplanationBlock }                      from './lesson/ExplanationBlock';
export { CodeEditor, OutputPanel }               from './lesson/CodeEditor';

// ── Progress ──────────────────────────────────────────────────
export { default as BadgePopup }                 from './progress/BadgePopup';
export { default as XpPopup }                    from './progress/XpPopup';
export { StreakCounter, LevelRing, BadgeGrid, StatsGrid } from './progress/StreakCounter';
