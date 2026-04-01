// src/lib/rateLimiter.ts
// ─────────────────────────────────────────────────────────────
// RATE LIMITER
//
// Two-mode rate limiting:
//   Mode 1: In-memory (Map) — works immediately, resets on restart
//   Mode 2: Redis (Upstash) — persistent across instances, recommended for production
//
// Rate limits by user UID + route:
//   /api/ai/*   → AI requests (20/hr free, 100/hr paid)
//   /api/code/* → Code execution (60/hr all plans)
//
// Returns:
//   { allowed: true }  → request is allowed
//   { allowed: false, retryAfter: 42 }  → blocked, retry in 42 seconds
//
// Usage in API route:
//   const limit = await checkRateLimit(uid, 'ai', plan);
//   if (!limit.allowed) return NextResponse.json({error:'Rate limit'}, {status:429});
// ─────────────────────────────────────────────────────────────

export interface RateLimitResult {
  allowed:      boolean;
  remaining:    number;
  resetAt:      number;    // Unix timestamp when window resets
  retryAfter?:  number;    // Seconds until retry (only when !allowed)
  limit:        number;    // Total limit for this window
}

// ── Rate limit config ──────────────────────────────────────────
const LIMITS = {
  ai: {
    free:    parseInt(process.env.RATE_LIMIT_AI_FREE || '20'),   // per hour
    starter: parseInt(process.env.RATE_LIMIT_AI_PAID || '100'),
    pro:     parseInt(process.env.RATE_LIMIT_AI_PAID || '100'),
    multi:   parseInt(process.env.RATE_LIMIT_AI_PAID || '100'),
    bundle:  parseInt(process.env.RATE_LIMIT_AI_PAID || '100'),
  },
  code: {
    free:    parseInt(process.env.RATE_LIMIT_CODE || '60'),      // per hour
    starter: 120,
    pro:     200,
    multi:   200,
    bundle:  300,
  },
};

const WINDOW_MS = 60 * 60 * 1000; // 1 hour

// ── In-memory store ────────────────────────────────────────────
// Key: "{uid}:{route}"  →  Value: { count, resetAt }
const memoryStore = new Map<string, { count: number; resetAt: number }>();

// Cleanup old entries every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, val] of memoryStore) {
      if (now > val.resetAt) memoryStore.delete(key);
    }
  }, 5 * 60 * 1000);
}

// ── Redis store (Upstash REST API) ───────────────────────────────
async function redisIncrement(key: string, windowSec: number): Promise<number> {
  const url   = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) return -1; // Redis not configured

  try {
    // INCR — atomically increment
    const incrRes = await fetch(`${url}/incr/${encodeURIComponent(key)}`, {
      method:  'POST',
      headers: { Authorization: `Bearer ${token}` },
    });
    const incrData = await incrRes.json();
    const count    = incrData.result as number;

    // Set expiry on first request
    if (count === 1) {
      await fetch(`${url}/expire/${encodeURIComponent(key)}/${windowSec}`, {
        method:  'POST',
        headers: { Authorization: `Bearer ${token}` },
      });
    }

    return count;
  } catch (err) {
    console.error('Redis rate limit error:', err);
    return -1; // Fail open — let request through if Redis is down
  }
}

async function redisTTL(key: string): Promise<number> {
  const url   = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return 3600;

  try {
    const res  = await fetch(`${url}/ttl/${encodeURIComponent(key)}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return data.result || 3600;
  } catch { return 3600; }
}

// ── Main rate check function ───────────────────────────────────
export async function checkRateLimit(
  uid:   string,
  route: 'ai' | 'code',
  plan:  string = 'free'
): Promise<RateLimitResult> {
  const limit  = LIMITS[route][plan as keyof typeof LIMITS['ai']] ?? LIMITS[route].free;
  const now    = Date.now();
  const key    = `rl:${uid}:${route}`;
  const useRedis = !!(process.env.UPSTASH_REDIS_REST_URL);

  if (useRedis) {
    // ── Redis mode ───────────────────────────────────────────
    const windowSec = Math.floor(WINDOW_MS / 1000);
    const count     = await redisIncrement(key, windowSec);

    if (count < 0) {
      // Redis failed — fail open
      return { allowed: true, remaining: limit, resetAt: now + WINDOW_MS, limit };
    }

    const ttl    = await redisTTL(key);
    const resetAt = now + ttl * 1000;

    if (count > limit) {
      return {
        allowed:    false,
        remaining:  0,
        resetAt,
        retryAfter: ttl,
        limit,
      };
    }

    return {
      allowed:   true,
      remaining: Math.max(0, limit - count),
      resetAt,
      limit,
    };

  } else {
    // ── In-memory mode ────────────────────────────────────────
    let entry = memoryStore.get(key);

    if (!entry || now > entry.resetAt) {
      // Start a new window
      entry = { count: 0, resetAt: now + WINDOW_MS };
      memoryStore.set(key, entry);
    }

    entry.count++;

    if (entry.count > limit) {
      const retryAfter = Math.ceil((entry.resetAt - now) / 1000);
      return {
        allowed:    false,
        remaining:  0,
        resetAt:    entry.resetAt,
        retryAfter,
        limit,
      };
    }

    return {
      allowed:   true,
      remaining: Math.max(0, limit - entry.count),
      resetAt:   entry.resetAt,
      limit,
    };
  }
}

// ── Rate limit headers helper ──────────────────────────────────
// Adds standard rate limit headers to the response
export function rateLimitHeaders(result: RateLimitResult): Record<string, string> {
  return {
    'X-RateLimit-Limit':     String(result.limit),
    'X-RateLimit-Remaining': String(result.remaining),
    'X-RateLimit-Reset':     String(Math.floor(result.resetAt / 1000)),
    ...(result.retryAfter ? { 'Retry-After': String(result.retryAfter) } : {}),
  };
}

// ── Rate limit response ────────────────────────────────────────
// Builds a standardized 429 response
export function rateLimitResponse(result: RateLimitResult) {
  const minutes = Math.ceil((result.retryAfter || 3600) / 60);
  return {
    error:   'Rate limit exceeded',
    message: `You've used all your AI requests for this hour. Try again in ${minutes} minute${minutes !== 1 ? 's' : ''}.`,
    retryAfter: result.retryAfter,
    resetAt:    result.resetAt,
  };
}
