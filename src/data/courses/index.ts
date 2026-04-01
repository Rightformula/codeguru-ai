// src/data/courses/index.ts
// ─────────────────────────────────────────────────────────────
// COURSE ASSEMBLER
//
// Merges base course files (Modules 1-2) with extended module
// files (Modules 3-6) to produce complete Course objects.
//
// Each language:
//   python.ts          → Module 1, 2
//   python-extended.ts → Module 3, 4, 5, 6  (if exists)
//   python-modules-3-6.ts → alternate Module 3-6 (if exists)
//
// This file exports the final assembled Course objects that
// should be imported everywhere else in the app.
// ─────────────────────────────────────────────────────────────

import type { Course, Module } from '@/types/course';

// ── Base course files (Modules 1-2) ───────────────────────────
import { pythonCourse }     from './python';
import { javascriptCourse } from './javascript';
import { htmlCssCourse }    from './html-css';
import { javaCourse }       from './java';

// ── Extended modules (3-6) ────────────────────────────────────
// Import whichever exists — we try extended first, then modules-3-6

// Python extended modules
let pythonExtra: Module[] = [];
try {
  const mod = require('./python-extended');
  pythonExtra = mod.pythonModules3to6 || [];
} catch {
  try {
    const mod = require('./python-modules-3-6');
    pythonExtra = mod.pythonModules3to6 || [];
  } catch { /* no extended modules */ }
}

// JavaScript extended modules
let jsExtra: Module[] = [];
try {
  const mod = require('./javascript-extended');
  jsExtra = mod.javascriptModules3to6 || [];
} catch {
  try {
    const mod = require('./javascript-modules-3-6');
    jsExtra = mod.javascriptModules3to6 || [];
  } catch { /* no extended modules */ }
}

// HTML/CSS extended modules
let htmlCssExtra: Module[] = [];
try {
  const mod = require('./html-css-extended');
  htmlCssExtra = mod.htmlCssModules3to6 || [];
} catch { /* no extended modules */ }

// Java is complete in java.ts — no extra needed
const javaExtra: Module[] = [];

// ── Assembler function ────────────────────────────────────────
function assembleCourse(base: Course, extraModules: Module[]): Course {
  if (extraModules.length === 0) return base;

  // Merge: keep base modules, append extra modules
  // Deduplicate by module id (extra wins if same id)
  const baseModuleIds = new Set(base.modules.map(m => m.id));
  const newModules = extraModules.filter(m => !baseModuleIds.has(m.id));

  const allModules = [...base.modules, ...newModules]
    .sort((a, b) => a.order - b.order);

  // Recount totals
  const totalModules = allModules.length;
  const totalLessons = allModules.reduce((sum, m) => sum + m.lessons.length, 0);

  return {
    ...base,
    modules:      allModules,
    totalModules,
    totalLessons,
  };
}

// ── Assembled Course objects ──────────────────────────────────
export const python     = assembleCourse(pythonCourse,     pythonExtra);
export const javascript = assembleCourse(javascriptCourse, jsExtra);
export const htmlCss    = assembleCourse(htmlCssCourse,    htmlCssExtra);
export const java       = assembleCourse(javaCourse,       javaExtra);

// ── Registry ──────────────────────────────────────────────────
export const COURSES: Record<string, Course> = {
  python,
  javascript,
  'html-css': htmlCss,
  java,
};

// ── Summary (for debugging / admin) ──────────────────────────
export function getCourseStats() {
  return Object.entries(COURSES).map(([id, course]) => ({
    id,
    title:        course.title,
    totalModules: course.totalModules,
    totalLessons: course.totalLessons,
    modulesLoaded: course.modules.length,
    lessonsLoaded: course.modules.reduce((s, m) => s + m.lessons.length, 0),
  }));
}
