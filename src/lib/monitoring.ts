// src/lib/monitoring.ts
// ─────────────────────────────────────────────────────────────
// MONITORING & ERROR TRACKING
//
// Unified monitoring that:
//   1. Tracks errors with context (user, route, environment)
//   2. Logs structured events for analytics
//   3. Measures performance of AI calls and page loads
//   4. Alerts on critical errors (via Sentry)
//
// In development: logs to console
// In production: sends to Sentry + Vercel Logs
// ─────────────────────────────────────────────────────────────

// ── Types ─────────────────────────────────────────────────────

export interface ErrorContext {
  uid?:      string;
  route?:    string;
  lessonId?: string;
  courseId?: string;
  task?:     string;
  extra?:    Record<string, unknown>;
}

export interface PerformanceEntry {
  name:       string;
  durationMs: number;
  success:    boolean;
  metadata?:  Record<string, unknown>;
}

export interface AnalyticsEvent {
  event:      string;
  uid?:       string;
  properties: Record<string, unknown>;
}

// ── Environment helpers ────────────────────────────────────────
const isProd = process.env.NEXT_PUBLIC_APP_ENV === 'production';
const isDev  = process.env.NEXT_PUBLIC_APP_ENV === 'development';

// ── Logger class ──────────────────────────────────────────────
class Monitor {

  // ── Error logging ──────────────────────────────────────────
  captureError(
    error:   Error | unknown,
    context: ErrorContext = {}
  ): void {
    const err = error instanceof Error ? error : new Error(String(error));

    // Always log to console (Vercel captures this in production)
    const logEntry = {
      type:      'error',
      message:   err.message,
      stack:     err.stack?.split('\n').slice(0, 5).join(' | '),
      timestamp: new Date().toISOString(),
      env:       process.env.NEXT_PUBLIC_APP_ENV,
      ...context,
    };

    if (isProd) {
      console.error(JSON.stringify(logEntry));
    } else {
      console.error('[Monitor] Error:', err.message, context);
    }

    // Send to Sentry if configured
    if (typeof window !== 'undefined' && (window as any).__sentry_initialized__) {
      try {
        const Sentry = require('@sentry/nextjs');
        Sentry.withScope((scope: any) => {
          if (context.uid)      scope.setUser({ id: context.uid });
          if (context.route)    scope.setTag('route', context.route);
          if (context.lessonId) scope.setTag('lesson', context.lessonId);
          if (context.task)     scope.setTag('ai_task', context.task);
          if (context.extra)    scope.setContext('extra', context.extra);
          Sentry.captureException(err);
        });
      } catch {
        // Sentry not available — already logged to console
      }
    }
  }

  // ── Info/event logging ─────────────────────────────────────
  log(
    message:   string,
    data?:     Record<string, unknown>,
    level:     'info' | 'warn' | 'debug' = 'info'
  ): void {
    if (isDev && level === 'debug') {
      console.debug('[Monitor]', message, data);
      return;
    }

    const entry = {
      type:      level,
      message,
      timestamp: new Date().toISOString(),
      ...(data || {}),
    };

    if (isProd) {
      console.log(JSON.stringify(entry));
    } else {
      const fn = level === 'warn' ? console.warn : console.log;
      fn(`[Monitor:${level}]`, message, data || '');
    }
  }

  // ── Performance tracking ────────────────────────────────────
  async measureAsync<T>(
    name:     string,
    fn:       () => Promise<T>,
    metadata?: Record<string, unknown>
  ): Promise<T> {
    const start = Date.now();
    let success = true;

    try {
      const result = await fn();
      return result;
    } catch (err) {
      success = false;
      throw err;
    } finally {
      const durationMs = Date.now() - start;
      this.trackPerformance({ name, durationMs, success, metadata });
    }
  }

  trackPerformance(entry: PerformanceEntry): void {
    // Log slow operations
    const isSlowAI   = entry.name.startsWith('ai:') && entry.durationMs > 5000;
    const isSlowCode = entry.name.startsWith('code:') && entry.durationMs > 10000;
    const isSlow     = isSlowAI || isSlowCode || entry.durationMs > 15000;

    if (isSlow || !entry.success) {
      this.log(
        `Performance: ${entry.name}`,
        { ...entry, slow: isSlow },
        isSlow ? 'warn' : 'info'
      );
    }

    // Track in Vercel Speed Insights (auto-collected via @vercel/analytics)
    if (typeof window !== 'undefined' && (window as any).__vercel_speed_insights__) {
      (window as any).__vercel_speed_insights__.vitals?.([{
        name:  entry.name,
        value: entry.durationMs,
        id:    `perf-${Date.now()}`,
      }]);
    }
  }

  // ── Analytics events ────────────────────────────────────────
  trackEvent(event: AnalyticsEvent): void {
    this.log('analytics', event, 'info');

    // Vercel Analytics
    if (typeof window !== 'undefined') {
      try {
        const { track } = require('@vercel/analytics');
        track(event.event, event.properties);
      } catch { /* not installed */ }
    }
  }

  // ── AI-specific tracking ────────────────────────────────────
  trackAICall(
    task:     string,
    source:   string,
    latencyMs: number,
    uid?:     string
  ): void {
    this.log('ai_call', {
      task, source, latencyMs, uid,
      isCached: source === 'cache' || source === 'knowledge_base' || source === 'local_parser',
    });

    // Track cost if it was a real AI call
    if (source === 'claude' || source === 'openai') {
      this.trackEvent({
        event: 'ai_api_call',
        uid,
        properties: { task, provider: source, latencyMs },
      });
    }
  }

  // ── User action tracking ────────────────────────────────────
  trackLessonComplete(uid: string, lessonId: string, courseId: string, xp: number): void {
    this.trackEvent({
      event: 'lesson_complete',
      uid,
      properties: { lessonId, courseId, xp },
    });
  }

  trackPayment(uid: string, plan: string, amount: number): void {
    this.trackEvent({
      event: 'payment_success',
      uid,
      properties: { plan, amount, currency: 'INR' },
    });
  }

  trackSignup(uid: string, method: 'email' | 'google'): void {
    this.trackEvent({
      event: 'user_signup',
      uid,
      properties: { method },
    });
  }
}

// ── Singleton export ───────────────────────────────────────────
export const monitor = new Monitor();

// ── Server-side logger (for API routes) ───────────────────────
export function serverLog(
  level:   'info' | 'warn' | 'error',
  message: string,
  data?:   Record<string, unknown>
): void {
  const entry = {
    level,
    message,
    timestamp: new Date().toISOString(),
    service:   'codeguru-api',
    ...(data || {}),
  };

  // Vercel captures these automatically
  if (level === 'error')  console.error(JSON.stringify(entry));
  else if (level === 'warn') console.warn(JSON.stringify(entry));
  else                   console.log(JSON.stringify(entry));
}

// ── API route error handler wrapper ───────────────────────────
export function withErrorLogging(
  handler: Function,
  routeName: string
): Function {
  return async (...args: any[]) => {
    const start = Date.now();
    try {
      const result = await handler(...args);
      serverLog('info', `${routeName} completed`, { latencyMs: Date.now() - start });
      return result;
    } catch (err: any) {
      serverLog('error', `${routeName} failed`, {
        error:     err.message,
        stack:     err.stack?.split('\n').slice(0, 3).join(' | '),
        latencyMs: Date.now() - start,
      });
      throw err;
    }
  };
}
