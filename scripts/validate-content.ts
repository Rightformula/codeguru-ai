#!/usr/bin/env node
// scripts/validate-content.ts
// ─────────────────────────────────────────────────────────────
// CONTENT VALIDATION SCRIPT
//
// Validates all lesson data files against the lesson schema.
// Run from the frontend/ directory with:
//   npx ts-node scripts/validate-content.ts
//
// Exit code 0 = all lessons valid
// Exit code 1 = validation errors found
// ─────────────────────────────────────────────────────────────

import { validateLesson } from '../src/types/lesson.schema';
import { COURSES }       from '../src/data/courses/index';
import type { Lesson }   from '../src/types/course';

// ── Terminal colors ────────────────────────────────────────────
const RED    = '\x1b[31m';
const GREEN  = '\x1b[32m';
const YELLOW = '\x1b[33m';
const CYAN   = '\x1b[36m';
const RESET  = '\x1b[0m';
const BOLD   = '\x1b[1m';

// ── Validation run ─────────────────────────────────────────────
function main() {
  console.log(`\n${BOLD}${CYAN}CodeGuru AI — Content Validator${RESET}\n`);
  console.log('Validating all lessons against lesson.schema.ts...\n');

  let totalLessons   = 0;
  let totalErrors    = 0;
  let totalWarnings  = 0;

  for (const [courseId, course] of Object.entries(COURSES)) {
    console.log(`${BOLD}${CYAN}▶ ${course.title} (${courseId})${RESET}`);

    for (const module of course.modules) {
      console.log(`  ${YELLOW}Module ${module.order}: ${module.title}${RESET}`);

      for (const lesson of module.lessons as Lesson[]) {
        totalLessons++;
        const errors = validateLesson(lesson);

        // Additional warnings (non-fatal)
        const warnings: string[] = [];
        if (lesson.explanation.content.length < 500) {
          warnings.push(`explanation.content is short (${lesson.explanation.content.length} chars) — aim for 500+`);
        }
        if (lesson.exercise.hints.length < 3) {
          warnings.push('exercise has only 2 hints — a 3rd hint improves learner experience');
        }
        if (lesson.quiz.questions.length < 3) {
          warnings.push('quiz has only 2 questions — 3 questions provide better coverage');
        }
        if (!lesson.codeExample.code.includes('//') &&
            !lesson.codeExample.code.includes('#') &&
            lesson.codeExample.language !== 'html-css') {
          warnings.push('codeExample.code has no comments — all non-obvious lines should be commented');
        }

        const icon = errors.length > 0 ? `${RED}✗` : `${GREEN}✓`;
        const lessonLabel = `    ${icon} L${lesson.order}: ${lesson.title}${RESET}`;

        console.log(lessonLabel);

        errors.forEach(err => {
          console.log(`      ${RED}ERROR: ${err}${RESET}`);
          totalErrors++;
        });

        warnings.forEach(warn => {
          console.log(`      ${YELLOW}WARN: ${warn}${RESET}`);
          totalWarnings++;
        });
      }
    }

    // Per-course summary
    const courseLessons   = course.modules.reduce((s, m) => s + m.lessons.length, 0);
    const expectedLessons = course.totalModules * 3; // 3 lessons per module
    if (courseLessons < expectedLessons) {
      console.log(`  ${YELLOW}⚠ ${courseLessons}/${expectedLessons} lessons present${RESET}`);
    }
    console.log();
  }

  // ── Final report ────────────────────────────────────────────
  console.log(`${BOLD}─────────────────────────────────────${RESET}`);
  console.log(`${BOLD}Validation complete${RESET}`);
  console.log(`  Lessons checked: ${totalLessons}`);
  console.log(`  Errors:   ${totalErrors > 0   ? RED : GREEN}${totalErrors}${RESET}`);
  console.log(`  Warnings: ${totalWarnings > 0 ? YELLOW : GREEN}${totalWarnings}${RESET}`);

  if (totalErrors > 0) {
    console.log(`\n${RED}${BOLD}FAILED — ${totalErrors} error(s) must be fixed before deployment.${RESET}\n`);
    process.exit(1);
  } else {
    console.log(`\n${GREEN}${BOLD}PASSED — all lessons conform to the schema.${RESET}\n`);
    process.exit(0);
  }
}

main();
