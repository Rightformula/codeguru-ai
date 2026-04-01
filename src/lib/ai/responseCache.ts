// src/lib/ai/responseCache.ts
// ─────────────────────────────────────────────────────────────
// AI RESPONSE CACHE
//
// Caches AI responses to:
//   1. Reduce API costs (don't call Claude twice for same question)
//   2. Speed up repeat queries (instant response from cache)
//   3. Work offline for common queries
//
// Two-level cache:
//   L1: In-memory (Map) — instant, session-scoped, ~100 entries
//   L2: localStorage   — persists across sessions, ~500 entries
//
// Cache key = hash of (task + prompt + language)
// TTL: 1 hour for explanations, 24 hours for static content
//
// Cache is NOT used for:
//   - Debug requests (code changes every time)
//   - Chat messages (context-dependent)
//   - User-specific data
// ─────────────────────────────────────────────────────────────

export interface CacheEntry {
  key:       string;
  content:   string;
  provider:  'claude' | 'openai';
  task:      string;
  createdAt: number;
  ttl:       number;    // milliseconds
  hitCount:  number;
}

// ── TTL per task type ──────────────────────────────────────────
const TTL_MAP: Record<string, number> = {
  explain:     60 * 60 * 1000,        // 1 hour
  hint:        30 * 60 * 1000,        // 30 min
  quiz_explain: 24 * 60 * 60 * 1000,  // 24 hours (static quiz answers)
  review:      15 * 60 * 1000,        // 15 min
  challenge:   10 * 60 * 1000,        // 10 min
  error:       5 * 60 * 1000,         // 5 min (errors vary)
  // debug: not cached — code changes
  // chat:  not cached — context-dependent
};

// ── Key generator ──────────────────────────────────────────────
// Creates a deterministic cache key from the request parameters
export function generateCacheKey(
  task:     string,
  prompt:   string,
  language?: string,
  context?: string
): string {
  // Normalize the prompt (lowercase, trim, remove extra spaces)
  const normalized = prompt.toLowerCase().trim().replace(/\s+/g, ' ');
  const input      = `${task}:${language || ''}:${context || ''}:${normalized}`;

  // Simple djb2 hash — fast, good distribution
  let hash = 5381;
  for (let i = 0; i < input.length; i++) {
    hash = ((hash << 5) + hash) + input.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  return `ai_cache_${Math.abs(hash).toString(36)}`;
}

// ── In-memory L1 cache ────────────────────────────────────────
class MemoryCache {
  private store = new Map<string, CacheEntry>();
  private maxSize = 100;

  get(key: string): CacheEntry | null {
    const entry = this.store.get(key);
    if (!entry) return null;

    // Check expiry
    if (Date.now() > entry.createdAt + entry.ttl) {
      this.store.delete(key);
      return null;
    }

    // Update hit count
    entry.hitCount++;
    return entry;
  }

  set(key: string, entry: CacheEntry): void {
    // Evict oldest if at capacity
    if (this.store.size >= this.maxSize) {
      const oldest = [...this.store.entries()]
        .sort((a, b) => a[1].createdAt - b[1].createdAt)[0];
      if (oldest) this.store.delete(oldest[0]);
    }
    this.store.set(key, entry);
  }

  has(key: string): boolean { return this.store.has(key); }
  clear(): void              { this.store.clear(); }
  size(): number             { return this.store.size; }

  stats() {
    const entries = [...this.store.values()];
    return {
      size:      entries.length,
      totalHits: entries.reduce((s, e) => s + e.hitCount, 0),
      tasks:     [...new Set(entries.map(e => e.task))],
    };
  }
}

// ── localStorage L2 cache ──────────────────────────────────────
class PersistentCache {
  private prefix = 'codeguru_ai_cache_';
  private maxEntries = 500;
  private indexKey  = 'codeguru_ai_cache_index';

  private getIndex(): string[] {
    try {
      return JSON.parse(localStorage.getItem(this.indexKey) || '[]');
    } catch { return []; }
  }

  private saveIndex(index: string[]): void {
    try { localStorage.setItem(this.indexKey, JSON.stringify(index)); }
    catch { /* quota exceeded */ }
  }

  get(key: string): CacheEntry | null {
    if (typeof window === 'undefined') return null;
    try {
      const raw = localStorage.getItem(this.prefix + key);
      if (!raw) return null;

      const entry: CacheEntry = JSON.parse(raw);

      // Check expiry
      if (Date.now() > entry.createdAt + entry.ttl) {
        this.delete(key);
        return null;
      }
      return entry;
    } catch { return null; }
  }

  set(key: string, entry: CacheEntry): void {
    if (typeof window === 'undefined') return;
    try {
      const index = this.getIndex();

      // Evict oldest if at capacity
      if (index.length >= this.maxEntries) {
        const toEvict = index.shift();
        if (toEvict) localStorage.removeItem(this.prefix + toEvict);
      }

      localStorage.setItem(this.prefix + key, JSON.stringify(entry));

      if (!index.includes(key)) {
        index.push(key);
        this.saveIndex(index);
      }
    } catch {
      // localStorage quota exceeded — clear old entries
      this.clearExpired();
    }
  }

  delete(key: string): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.removeItem(this.prefix + key);
      const index = this.getIndex().filter(k => k !== key);
      this.saveIndex(index);
    } catch { /* ignore */ }
  }

  clearExpired(): void {
    if (typeof window === 'undefined') return;
    const index = this.getIndex();
    const now   = Date.now();
    const alive: string[] = [];

    for (const key of index) {
      try {
        const raw = localStorage.getItem(this.prefix + key);
        if (raw) {
          const entry: CacheEntry = JSON.parse(raw);
          if (now <= entry.createdAt + entry.ttl) {
            alive.push(key);
          } else {
            localStorage.removeItem(this.prefix + key);
          }
        }
      } catch { /* skip corrupted entries */ }
    }
    this.saveIndex(alive);
  }

  size(): number {
    if (typeof window === 'undefined') return 0;
    return this.getIndex().length;
  }
}

// ── Main Cache Service ────────────────────────────────────────
class AIResponseCache {
  private l1 = new MemoryCache();
  private l2 = new PersistentCache();

  // Non-cacheable tasks
  private readonly NOT_CACHED = new Set(['debug', 'chat', 'optimize']);

  get(key: string): string | null {
    // Check L1 first (fastest)
    const l1Result = this.l1.get(key);
    if (l1Result) return l1Result.content;

    // Check L2 (persistent)
    const l2Result = this.l2.get(key);
    if (l2Result) {
      // Promote to L1
      this.l1.set(key, l2Result);
      return l2Result.content;
    }

    return null;
  }

  set(
    key:      string,
    content:  string,
    task:     string,
    provider: 'claude' | 'openai'
  ): void {
    // Don't cache non-cacheable tasks
    if (this.NOT_CACHED.has(task)) return;

    const ttl = TTL_MAP[task] || 30 * 60 * 1000; // default 30 min

    const entry: CacheEntry = {
      key,
      content,
      provider,
      task,
      createdAt: Date.now(),
      ttl,
      hitCount:  0,
    };

    this.l1.set(key, entry);
    this.l2.set(key, entry);
  }

  isCacheable(task: string): boolean {
    return !this.NOT_CACHED.has(task);
  }

  stats() {
    return {
      l1: this.l1.stats(),
      l2Size: this.l2.size(),
    };
  }

  clearAll(): void {
    this.l1.clear();
    this.l2.clearExpired();
  }
}

// ── Singleton export ───────────────────────────────────────────
export const aiCache = new AIResponseCache();
