// scripts/seed-lessons.ts
// ═══════════════════════════════════════════════════════════════
// CODEGURU AI — FIRESTORE LESSON SEEDER
//
// Reads every lesson JSON file from docs/lessons/**/*.json,
// validates each lesson against the schema, and inserts valid
// lessons into Firestore as documents in the "lessons" collection.
//
// USAGE:
//   npm run seed-lessons                      # seed all languages
//   npm run seed-lessons -- --lang python     # seed one language
//   npm run seed-lessons -- --dry-run         # validate only, no writes
//   npm run seed-lessons -- --force           # overwrite existing docs
//   npm run seed-lessons -- --verbose         # log field-level details
//
// IDEMPOTENCY:
//   Each lesson document is keyed by lesson.id.
//   By default, if a document already exists it is SKIPPED.
//   Use --force to overwrite existing documents.
//
// LOG SYMBOLS:
//   ✓  inserted           new document written to Firestore
//   ⚠  skipped duplicate  document already exists, not overwritten
//   ✗  validation error   lesson failed schema validation
//   ⊘  dry-run skip       --dry-run mode, no write performed
//   ⚡  batch committed    a batch of writes was committed
// ═══════════════════════════════════════════════════════════════

import * as fs      from 'fs';
import * as path    from 'path';
import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue, Timestamp, WriteBatch } from 'firebase-admin/firestore';

// ── Re-implement validateLesson inline ────────────────────────
// We re-implement the validation logic here as a plain JS/TS
// function so that this script can run with ts-node without
// needing the full Next.js module resolution chain.
function validateLesson(lesson: Record<string, unknown>): string[] {
  const errors: string[] = [];
  const ID_PAT  = /^[a-z][a-z0-9]*-m\d+-l\d+$/;
  const MID_PAT = /^[a-z][a-z0-9]*-m\d+$/;
  const QID_PAT = /^[a-z][a-z0-9]*-m\d+-l\d+-q\d+$/;
  const DUR_PAT = /^\d+ min$/;
  const LANGS   = ['python', 'javascript', 'java', 'html-css'] as const;

  const lid = lesson.id as string ?? '';

  // ── id ─────────────────────────────────────────────────────
  if (!ID_PAT.test(lid))
    errors.push(`id pattern fail: "${lid}"`);

  // ── moduleId ───────────────────────────────────────────────
  const mid = lesson.moduleId as string ?? '';
  if (!MID_PAT.test(mid))
    errors.push(`moduleId pattern fail: "${mid}"`);
  if (lid && mid && !lid.startsWith(mid))
    errors.push(`id "${lid}" must start with moduleId "${mid}"`);

  // ── title ──────────────────────────────────────────────────
  const title = lesson.title as string ?? '';
  if (title.length < 3 || title.length > 60)
    errors.push(`title length ${title.length} (need 3–60)`);

  // ── order ──────────────────────────────────────────────────
  const order = lesson.order as number ?? 0;
  if (order < 1 || order > 10)
    errors.push(`order ${order} (need 1–10)`);

  // ── xpReward ───────────────────────────────────────────────
  const xp = lesson.xpReward as number ?? 0;
  if (xp < 5 || xp > 50 || xp % 5 !== 0)
    errors.push(`xpReward ${xp} (need 5–50, multiple of 5)`);

  // ── duration ───────────────────────────────────────────────
  const dur = lesson.duration as string ?? '';
  if (!DUR_PAT.test(dur))
    errors.push(`duration "${dur}" (need "N min")`);

  // ── explanation ────────────────────────────────────────────
  const expl = lesson.explanation as Record<string, string> ?? {};
  const etitle = expl.title ?? '';
  if (etitle.length < 5 || etitle.length > 80)
    errors.push(`explanation.title length ${etitle.length} (need 5–80)`);
  const econtent = expl.content ?? '';
  if (econtent.length < 300)
    errors.push(`explanation.content ${econtent.length} chars (min 300)`);

  // ── codeExample ────────────────────────────────────────────
  const ce    = lesson.codeExample as Record<string, string> ?? {};
  const cetitle = ce.title ?? '';
  if (cetitle.length < 3 || cetitle.length > 50)
    errors.push(`codeExample.title length ${cetitle.length} (need 3–50)`);
  const lang = ce.language ?? '';
  if (!LANGS.includes(lang as (typeof LANGS)[number]))
    errors.push(`codeExample.language "${lang}" invalid`);
  const code = ce.code ?? '';
  if (code.length < 20 || code.length > 3000)
    errors.push(`codeExample.code length ${code.length} (need 20–3000)`);
  const cexpl = ce.explanation ?? '';
  if (cexpl.length < 50 || cexpl.length > 600)
    errors.push(`codeExample.explanation length ${cexpl.length} (need 50–600)`);
  if (lang === 'java' && !code.includes('class Main'))
    errors.push('Java codeExample.code must contain "class Main"');
  if (lang === 'html-css' && !code.includes('<!DOCTYPE html>'))
    errors.push('html-css codeExample.code must start with <!DOCTYPE html>');

  // ── exercise ───────────────────────────────────────────────
  const ex     = lesson.exercise as Record<string, unknown> ?? {};
  const xtitle = ex.title as string ?? '';
  if (xtitle.length < 3 || xtitle.length > 60)
    errors.push(`exercise.title length ${xtitle.length} (need 3–60)`);
  const ins = ex.instructions as string ?? '';
  if (ins.length < 50 || ins.length > 500)
    errors.push(`exercise.instructions length ${ins.length} (need 50–500)`);
  const sc = ex.starterCode as string ?? '';
  if (sc.length < 30 || sc.length > 1500)
    errors.push(`exercise.starterCode length ${sc.length} (need 30–1500)`);
  const sol = ex.solutionCode as string ?? '';
  if (sol.length < 20 || sol.length > 1500)
    errors.push(`exercise.solutionCode length ${sol.length} (need 20–1500)`);
  const hints = (ex.hints as string[]) ?? [];
  if (hints.length < 2 || hints.length > 5)
    errors.push(`exercise.hints count ${hints.length} (need 2–5)`);
  hints.forEach((h, i) => {
    if (!h.startsWith('💡'))
      errors.push(`exercise.hints[${i}] must start with 💡`);
    if (h.length < 15 || h.length > 150)
      errors.push(`exercise.hints[${i}] length ${h.length} (need 15–150)`);
  });

  // ── quiz ───────────────────────────────────────────────────
  const quiz = lesson.quiz as Record<string, unknown> ?? {};
  const questions = (quiz.questions as Record<string, unknown>[]) ?? [];
  if (questions.length < 2 || questions.length > 3)
    errors.push(`quiz.questions count ${questions.length} (need 2–3)`);
  questions.forEach((q, i) => {
    const qid = q.id as string ?? '';
    if (!QID_PAT.test(qid))
      errors.push(`quiz.questions[${i}].id pattern fail: "${qid}"`);
    if (lid && !qid.startsWith(lid))
      errors.push(`quiz.questions[${i}].id must start with "${lid}"`);
    const qt = q.question as string ?? '';
    if (!qt.trim().endsWith('?'))
      errors.push(`quiz.questions[${i}].question must end with ?`);
    if (qt.length < 15 || qt.length > 200)
      errors.push(`quiz.questions[${i}].question length ${qt.length} (need 15–200)`);
    const opts = (q.options as string[]) ?? [];
    if (opts.length !== 4)
      errors.push(`quiz.questions[${i}].options count ${opts.length} (must be exactly 4)`);
    opts.forEach((opt, j) => {
      if (opt.length < 1 || opt.length > 150)
        errors.push(`quiz.questions[${i}].options[${j}] length ${opt.length} (need 1–150)`);
    });
    const correct = q.correct as number ?? -1;
    if (correct < 0 || correct > 3)
      errors.push(`quiz.questions[${i}].correct ${correct} (need 0–3)`);
    const qe = q.explanation as string ?? '';
    if (qe.length < 40 || qe.length > 400)
      errors.push(`quiz.questions[${i}].explanation length ${qe.length} (need 40–400)`);
  });

  return errors;
}

// ── Colour helpers ─────────────────────────────────────────────
const C = {
  reset:  '\x1b[0m',
  bold:   '\x1b[1m',
  dim:    '\x1b[2m',
  green:  '\x1b[32m',
  yellow: '\x1b[33m',
  red:    '\x1b[31m',
  cyan:   '\x1b[36m',
  blue:   '\x1b[34m',
  white:  '\x1b[37m',
};

const fmt = {
  inserted:   (s: string) => `  ${C.green}✓${C.reset}  ${s}`,
  skipped:    (s: string) => `  ${C.yellow}⚠${C.reset}  ${s}`,
  error:      (s: string) => `  ${C.red}✗${C.reset}  ${s}`,
  dryrun:     (s: string) => `  ${C.blue}⊘${C.reset}  ${s}`,
  batch:      (s: string) => `  ${C.cyan}⚡${C.reset}  ${s}`,
  section:    (s: string) => `\n${C.bold}${C.cyan}▶ ${s}${C.reset}`,
  subsection: (s: string) => `\n  ${C.bold}${s}${C.reset}`,
  detail:     (s: string) => `     ${C.dim}${s}${C.reset}`,
};

// ── CLI argument parsing ───────────────────────────────────────
function parseArgs(): {
  lang:    string | null;
  dryRun:  boolean;
  force:   boolean;
  verbose: boolean;
} {
  const args = process.argv.slice(2);
  return {
    lang:    args.includes('--lang')
               ? args[args.indexOf('--lang') + 1] ?? null
               : null,
    dryRun:  args.includes('--dry-run'),
    force:   args.includes('--force'),
    verbose: args.includes('--verbose'),
  };
}

// ── Discover all lesson JSON files ────────────────────────────
function discoverLessonFiles(baseDir: string, langFilter: string | null): string[] {
  const results: string[] = [];

  function walk(dir: string): void {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.json')) {
        results.push(fullPath);
      }
    }
  }

  walk(baseDir);

  // Sort: top-level files first (py-*), then subdirs (html/, java/, js/)
  results.sort((a, b) => {
    const depthA = a.split(path.sep).length;
    const depthB = b.split(path.sep).length;
    if (depthA !== depthB) return depthA - depthB;
    return a.localeCompare(b);
  });

  // Apply language filter
  if (langFilter) {
    const prefix = langFilter.toLowerCase();
    return results.filter(f => path.basename(f).startsWith(prefix));
  }

  return results;
}

// ── Group lessons by moduleId ─────────────────────────────────
interface LessonGroup {
  moduleId:  string;
  courseId:  string;
  lessons:   Record<string, unknown>[];
  sourceFile: string;
}

function groupByModule(
  lessons:    Record<string, unknown>[],
  sourceFile: string,
): Map<string, LessonGroup> {
  const groups = new Map<string, LessonGroup>();

  for (const lesson of lessons) {
    const moduleId = lesson.moduleId as string;
    // Derive courseId from moduleId prefix (e.g. "py-m1" → "py" → "python")
    const prefix = moduleId.split('-')[0];
    const courseIdMap: Record<string, string> = {
      py:   'python',
      js:   'javascript',
      java: 'java',
      html: 'html-css',
      css:  'html-css',
    };
    const courseId = courseIdMap[prefix] ?? prefix;

    if (!groups.has(moduleId)) {
      groups.set(moduleId, { moduleId, courseId, lessons: [], sourceFile });
    }
    groups.get(moduleId)!.lessons.push(lesson);
  }

  return groups;
}

// ── Firestore batch writer ─────────────────────────────────────
// Firestore batches are limited to 500 operations.
// This helper auto-flushes when the limit approaches.
class BatchWriter {
  private db:       ReturnType<typeof getFirestore>;
  private batch:    WriteBatch;
  private count:    number   = 0;
  private total:    number   = 0;
  private readonly MAX = 400; // conservative limit

  constructor(db: ReturnType<typeof getFirestore>) {
    this.db    = db;
    this.batch = db.batch();
  }

  set(ref: FirebaseFirestore.DocumentReference, data: Record<string, unknown>): void {
    this.batch.set(ref, data);
    this.count++;
    this.total++;
  }

  async flushIfNeeded(verbose: boolean): Promise<void> {
    if (this.count >= this.MAX) {
      await this.commit(verbose);
    }
  }

  async commit(verbose: boolean): Promise<number> {
    if (this.count === 0) return 0;
    await this.batch.commit();
    if (verbose) {
      console.log(fmt.batch(`Committed batch of ${this.count} write(s)`));
    }
    const flushed = this.count;
    this.batch = this.db.batch();
    this.count = 0;
    return flushed;
  }

  get pendingCount(): number { return this.count; }
  get totalCount():   number { return this.total; }
}

// ── Main seeder ────────────────────────────────────────────────
async function seedLessons(): Promise<void> {
  const opts = parseArgs();

  // ── Banner ───────────────────────────────────────────────────
  console.log();
  console.log(`${C.bold}${C.cyan}╔══════════════════════════════════════════════╗${C.reset}`);
  console.log(`${C.bold}${C.cyan}║       CodeGuru AI — Lesson Seeder            ║${C.reset}`);
  console.log(`${C.bold}${C.cyan}╚══════════════════════════════════════════════╝${C.reset}`);
  console.log();

  if (opts.dryRun)  console.log(`  ${C.blue}DRY-RUN mode — no writes will be performed${C.reset}`);
  if (opts.force)   console.log(`  ${C.yellow}FORCE mode — existing documents will be overwritten${C.reset}`);
  if (opts.lang)    console.log(`  Language filter: ${C.bold}${opts.lang}${C.reset}`);
  console.log();

  // ── Firebase Admin initialisation ───────────────────────────
  if (!getApps().length) {
    const credJson = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
    if (credJson) {
      try {
        const sa = JSON.parse(credJson);
        initializeApp({ credential: cert(sa), projectId: sa.project_id });
      } catch {
        console.error(`${C.red}✗ Failed to parse GOOGLE_APPLICATION_CREDENTIALS_JSON${C.reset}`);
        process.exit(1);
      }
    } else {
      // Emulator / ADC fallback for local development
      const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? 'codeguru-ai-dev';
      initializeApp({ projectId });
      console.log(`  ${C.dim}Using Application Default Credentials (project: ${projectId})${C.reset}`);
    }
  }

  const db        = getFirestore();
  const COLLECTION = 'lessons';

  // ── Discover files ───────────────────────────────────────────
  const docsDir  = path.resolve(__dirname, '..', '..', 'docs', 'lessons');

  if (!fs.existsSync(docsDir)) {
    console.error(`${C.red}✗ Lessons directory not found: ${docsDir}${C.reset}`);
    process.exit(1);
  }

  const files = discoverLessonFiles(docsDir, opts.lang);

  if (files.length === 0) {
    console.warn(`${C.yellow}⚠ No lesson JSON files found${opts.lang ? ` for language "${opts.lang}"` : ''}${C.reset}`);
    process.exit(0);
  }

  console.log(`  Found ${C.bold}${files.length}${C.reset} lesson file(s)\n`);

  // ── Counters ─────────────────────────────────────────────────
  let totalFiles     = 0;
  let totalLessons   = 0;
  let totalInserted  = 0;
  let totalSkipped   = 0;
  let totalErrors    = 0;
  const errorLog: { file: string; lessonId: string; errors: string[] }[] = [];

  const writer = new BatchWriter(db);

  // ── Process each file ────────────────────────────────────────
  for (const filePath of files) {
    const relPath = path.relative(docsDir, filePath);
    console.log(fmt.section(`${relPath}`));
    totalFiles++;

    // Parse JSON
    let rawLessons: Record<string, unknown>[];
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      rawLessons    = JSON.parse(content) as Record<string, unknown>[];
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.log(fmt.error(`JSON parse failed: ${msg}`));
      totalErrors++;
      continue;
    }

    if (!Array.isArray(rawLessons) || rawLessons.length === 0) {
      console.log(fmt.error('File does not contain a non-empty array'));
      totalErrors++;
      continue;
    }

    // Group by module for organised output
    const groups = groupByModule(rawLessons, relPath);

    for (const [moduleId, group] of groups) {
      console.log(fmt.subsection(`Module ${moduleId}  [course: ${group.courseId}]`));

      // Sort lessons within the module by order
      group.lessons.sort((a, b) =>
        ((a.order as number) ?? 0) - ((b.order as number) ?? 0)
      );

      for (const raw of group.lessons) {
        totalLessons++;
        const lessonId = (raw.id as string) ?? '(unknown)';

        // ── Validate ─────────────────────────────────────────
        const validationErrors = validateLesson(raw);
        if (validationErrors.length > 0) {
          totalErrors++;
          console.log(fmt.error(`${lessonId}  [${raw.title ?? '?'}]`));
          validationErrors.forEach(e => console.log(fmt.detail(`• ${e}`)));
          errorLog.push({ file: relPath, lessonId, errors: validationErrors });
          continue;
        }

        // ── Check for existing document ───────────────────────
        const docRef = db.collection(COLLECTION).doc(lessonId);

        if (!opts.dryRun && !opts.force) {
          try {
            const snap = await docRef.get();
            if (snap.exists) {
              totalSkipped++;
              console.log(fmt.skipped(
                `${lessonId}  [${raw.title}]  — duplicate, skipped`
              ));
              continue;
            }
          } catch (err: unknown) {
            // If Firestore is unavailable (emulator not running, etc.), surface the error
            const msg = err instanceof Error ? err.message : String(err);
            console.log(fmt.error(`${lessonId}  — Firestore check failed: ${msg}`));
            totalErrors++;
            continue;
          }
        }

        // ── Build Firestore document ──────────────────────────
        const now = Timestamp.now();
        const document: Record<string, unknown> = {
          // Core identity fields
          id:        raw.id,
          moduleId:  raw.moduleId,
          courseId:  group.courseId,

          // Metadata
          title:     raw.title,
          order:     raw.order,
          xpReward:  raw.xpReward,
          duration:  raw.duration,

          // Content blocks (stored as nested maps)
          explanation: raw.explanation,
          codeExample: raw.codeExample,
          exercise:    raw.exercise,
          quiz:        raw.quiz,

          // Timestamps
          createdAt:   now,
          updatedAt:   now,
          seedVersion: '1.0.0',
        };

        // ── Dry-run: log but do not write ─────────────────────
        if (opts.dryRun) {
          totalInserted++; // count as "would insert"
          console.log(fmt.dryrun(
            `${lessonId}  [${raw.title}]  — would insert`
          ));
          if (opts.verbose) {
            console.log(fmt.detail(`  courseId  : ${group.courseId}`));
            console.log(fmt.detail(`  xpReward  : ${raw.xpReward}`));
            console.log(fmt.detail(`  duration  : ${raw.duration}`));
          }
          continue;
        }

        // ── Queue write in batch ──────────────────────────────
        if (opts.force) {
          // set() with merge:false overwrites the entire document
          writer.set(docRef, document);
        } else {
          writer.set(docRef, document);
        }

        totalInserted++;
        console.log(fmt.inserted(
          `${lessonId}  [${raw.title}]  — inserted`
        ));

        if (opts.verbose) {
          console.log(fmt.detail(`  moduleId  : ${raw.moduleId}`));
          console.log(fmt.detail(`  xpReward  : ${raw.xpReward}`));
          console.log(fmt.detail(`  duration  : ${raw.duration}`));
        }

        // Auto-flush batch if approaching limit
        await writer.flushIfNeeded(opts.verbose);
      }
    }
  }

  // ── Final batch flush ─────────────────────────────────────────
  if (!opts.dryRun && writer.pendingCount > 0) {
    console.log();
    await writer.commit(true);
  }

  // ── Summary report ────────────────────────────────────────────
  console.log();
  console.log(`${C.bold}${C.cyan}══════════════════════════════════════════════${C.reset}`);
  console.log(`${C.bold}  SEED COMPLETE${C.reset}`);
  console.log(`${C.cyan}══════════════════════════════════════════════${C.reset}`);
  console.log(`  Files processed   : ${totalFiles}`);
  console.log(`  Lessons parsed    : ${totalLessons}`);
  console.log(`  ${C.green}✓ Inserted${C.reset}         : ${totalInserted}${opts.dryRun ? ' (dry-run)' : ''}`);
  console.log(`  ${C.yellow}⚠ Skipped${C.reset}          : ${totalSkipped}`);
  console.log(`  ${C.red}✗ Errors${C.reset}           : ${totalErrors}`);
  console.log();

  // ── Detailed error report ────────────────────────────────────
  if (errorLog.length > 0) {
    console.log(`${C.bold}${C.red}── Validation Error Details ─────────────────${C.reset}`);
    for (const entry of errorLog) {
      console.log(`\n  ${C.red}${entry.lessonId}${C.reset}  (${entry.file})`);
      entry.errors.forEach(e => console.log(`    • ${e}`));
    }
    console.log();
  }

  // ── Exit code ────────────────────────────────────────────────
  if (totalErrors > 0) {
    console.log(`${C.red}Some lessons failed validation. Fix errors before re-running.${C.reset}\n`);
    process.exit(1);
  }

  if (opts.dryRun) {
    console.log(`${C.blue}Dry-run complete. Run without --dry-run to write to Firestore.${C.reset}\n`);
  } else {
    console.log(`${C.green}All lessons seeded successfully.${C.reset}\n`);
  }
}

// ── Entry point ────────────────────────────────────────────────
seedLessons().catch((err: unknown) => {
  const msg = err instanceof Error ? err.message : String(err);
  console.error(`\n${C.red}Fatal error: ${msg}${C.reset}\n`);
  if (err instanceof Error && err.stack) {
    console.error(C.dim + err.stack + C.reset);
  }
  process.exit(1);
});
