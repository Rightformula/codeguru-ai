// src/types/lesson.schema.ts
// ─────────────────────────────────────────────────────────────
// CODEGURU AI — LESSON SCHEMA (TypeScript)
//
// This file is the authoritative TypeScript definition of the
// lesson data structure used throughout the platform.
//
// It extends the base types in course.ts with:
//   - Full JSDoc on every field
//   - Validation constants and constraint comments
//   - Derived helper types used by the lesson viewer
//   - Content author guidelines as inline comments
//
// ALL content files (python.ts, javascript.ts, etc.) must
// produce objects that satisfy the Lesson interface defined here.
// ─────────────────────────────────────────────────────────────

// ════════════════════════════════════════════════════════════
//  PRIMITIVE CONSTRAINTS
// ════════════════════════════════════════════════════════════

/** All supported execution environments in the platform. */
export type SupportedLanguage = 'python' | 'javascript' | 'java' | 'html-css';

/** Difficulty tiers used at the module level. */
export type Level = 'beginner' | 'intermediate' | 'advanced';

/** How the test runner compares actual output to expected output. */
export type CheckType = 'exact' | 'contains' | 'contains_print' | 'regex';

// ════════════════════════════════════════════════════════════
//  EXPLANATION
// ════════════════════════════════════════════════════════════

/**
 * Tab 1 of the lesson viewer — the article that teaches the concept.
 *
 * Rendered by ExplanationBlock which parses a Markdown-like string
 * supporting: h1 (#), h2 (##), h3 (###), bold (**), inline code (`),
 * unordered lists (-), tables (|), and fenced code blocks (```lang).
 *
 * AUTHORING GUIDELINES:
 *
 *   Structure (in this order):
 *     1. A real-world analogy as the very first paragraph
 *     2. The technical definition using the analogy
 *     3. Syntax with a code block
 *     4. A reference table for related variants
 *     5. Common mistakes or important rules
 *     6. A bridge sentence to the code example
 *
 *   Tone:
 *     - Write as if explaining to a smart 16-year-old
 *     - Define every term when first introduced
 *     - Use Indian context for examples (names, cities, currency)
 *
 *   Length: 300 to 800 characters of content text.
 *   Recommended reading time: 3 to 5 minutes.
 */
export interface Explanation {
  /**
   * The heading displayed at the top of the explanation tab.
   *
   * Good:  "What is a Variable and Why Do We Need One?"
   * Bad:   "Variables" (too generic)
   * Bad:   "Storing Data Using Variables in Python 3" (too long)
   *
   * Length: 5 to 80 characters.
   */
  title: string;

  /**
   * The full explanation body as a Markdown-like string.
   *
   * Supported Markdown elements:
   *   # H1         — lesson title (use once at top)
   *   ## H2        — major section headings (rendered in blue)
   *   ### H3       — subsection headings (rendered in green)
   *   **bold**     — key terms and warnings
   *   `code`       — ALL code references, even single variable names
   *   - item       — unordered list items
   *   1. item      — ordered list items
   *   |col|col|    — tables (must include header and separator row)
   *   ```lang      — fenced code blocks (lang = python|javascript|java|html|css)
   *
   * Rules for code blocks inside explanation:
   *   - Use short, focused examples — max 10 lines
   *   - Must produce no errors when run
   *   - Must demonstrate one concept only
   *
   * Length: 300 to 2000 characters.
   */
  content: string;
}

// ════════════════════════════════════════════════════════════
//  CODE EXAMPLE
// ════════════════════════════════════════════════════════════

/**
 * Tab 2 of the lesson viewer — a complete runnable program.
 *
 * The learner reads the code, clicks Run, sees the output,
 * reads the explanation, then clicks "Next: Try It Yourself".
 *
 * The code is executed via:
 *   - python, javascript, java → Judge0 CE (sandboxed VM)
 *   - html-css → browser iframe (no server needed)
 *
 * AUTHORING GUIDELINES:
 *
 *   The code example must:
 *   - Be a complete, self-contained program (not a fragment)
 *   - Run without errors and produce deterministic output
 *   - Use only the standard library (no third-party packages)
 *   - Comment every non-obvious line
 *   - Demonstrate the lesson concept in a realistic scenario
 *   - Include multiple uses of the concept to show it in context
 *
 *   Java-specific: class must be named 'Main'.
 *   HTML-CSS-specific: must be a full document (DOCTYPE to </html>).
 */
export interface CodeExample {
  /**
   * Short title describing what the program does (not what it teaches).
   *
   * Good:  "Student Grade Calculator"
   * Bad:   "Demonstrating Variables"
   *
   * Length: 3 to 50 characters.
   */
  title: string;

  /**
   * The execution environment.
   *
   * Determines:
   *   - The syntax highlighter language in the editor
   *   - The Judge0 language_id for code execution
   *   - Whether to show HTML live preview instead of text output
   *
   * Judge0 IDs used:
   *   python     → 71 (Python 3.8.1)
   *   javascript → 63 (Node.js 12.14.0)
   *   java       → 62 (OpenJDK 13.0.1)
   *   html-css   → rendered in <iframe> (not sent to Judge0)
   */
  language: SupportedLanguage;

  /**
   * The complete source code of the example program.
   *
   * Constraints:
   *   - Maximum 40 lines (if longer, split into two lessons)
   *   - Comments are required on every non-obvious line
   *   - Must produce output that the learner can observe and understand
   *   - Cannot depend on any user input (no input() or prompt())
   *   - Cannot make network requests
   *   - Cannot access the file system
   *
   * For Java: the class name MUST be 'Main' exactly:
   *   public class Main { public static void main(String[] args) { ... } }
   */
  code: string;

  /**
   * Bullet-point explanation of key lines in the code.
   *
   * Rendered as Markdown below the output panel.
   * Format: each bullet references a code snippet in backticks,
   *         then explains WHAT it does and WHY.
   *
   * Example of a good bullet:
   *   `scores.sort(reverse=True)` sorts the list from highest to lowest —
   *   Python's sort() modifies the original list directly
   *
   * Rules:
   *   - 3 to 8 bullets maximum
   *   - Each bullet references a specific piece of code in backticks
   *   - Explains WHY, not just WHAT
   *   - Plain English — no assumed knowledge beyond current lesson
   *
   * Length: 50 to 600 characters.
   */
  explanation: string;
}

// ════════════════════════════════════════════════════════════
//  TEST CASE
// ════════════════════════════════════════════════════════════

/**
 * A single automated test case for the exercise.
 *
 * Test cases are optional. When provided, the exercise validator
 * runs the learner's code with the given input and checks the
 * output according to checkType.
 *
 * If no test cases are provided, validation is purely manual —
 * the learner runs their code, observes the output, and decides
 * whether they got it right.
 */
export interface TestCase {
  /**
   * The string passed to stdin when executing the code.
   * Use empty string '' for exercises that need no input.
   * For multiple input lines, separate with '\n'.
   */
  input: string;

  /**
   * The expected output string, or null.
   *
   * Set to null only when checkType is 'contains_print' —
   * meaning any non-empty stdout is acceptable.
   * For all other checkTypes, this must be a non-null string.
   */
  expectedOutput: string | null;

  /**
   * The comparison strategy:
   *
   *   'exact'          — output must match expectedOutput character-for-character
   *                      (including whitespace and newlines)
   *   'contains'       — output must include expectedOutput as a substring
   *   'contains_print' — any non-empty output passes (only checks something printed)
   *   'regex'          — expectedOutput is a regex pattern; output must match it
   *
   * Recommendation: prefer 'contains' over 'exact' to avoid failures
   * caused by minor formatting differences.
   */
  checkType: CheckType;
}

// ════════════════════════════════════════════════════════════
//  EXERCISE
// ════════════════════════════════════════════════════════════

/**
 * Tab 3 of the lesson viewer — the hands-on coding challenge.
 *
 * The learner writes code in an interactive editor.
 * They can run their code, get hints, and reveal the solution.
 *
 * AUTHORING GUIDELINES:
 *
 *   Difficulty calibration:
 *     - The exercise should require ~70% of what the code example demonstrated
 *     - A learner who understood the code example should be able to complete
 *       the exercise in 5-10 minutes without hints
 *     - With hints, it should be achievable in under 15 minutes
 *
 *   The exercise is NOT a test — it is practice.
 *   Its purpose is to build muscle memory and confidence,
 *   not to filter out weak learners.
 */
export interface Exercise {
  /**
   * The challenge title shown as the exercise heading.
   * Should sound like a concrete task, not an abstract concept.
   *
   * Good:  "Build a Temperature Converter"
   * Bad:   "Practice Using Functions"
   *
   * Length: 3 to 60 characters.
   */
  title: string;

  /**
   * The complete task description displayed in the instruction box.
   *
   * Must include:
   *   1. What the learner needs to build (first sentence)
   *   2. All specific requirements (numbered or listed)
   *   3. At least one concrete example of expected output
   *
   * Must NOT include:
   *   - Hints about implementation approach
   *   - References to functions not yet taught
   *
   * Plain text only — no Markdown (rendered in a styled box).
   * Length: 50 to 500 characters.
   */
  instructions: string;

  /**
   * The initial code loaded into the learner's editor.
   *
   * Must be syntactically valid — incomplete but not broken.
   *
   * Required elements:
   *   - Function/class signature if the exercise requires one
   *   - Comment placeholders: '# Your code here' or '// Add your code here'
   *   - Test calls at the bottom to verify the solution
   *   - Any boilerplate the learner shouldn't have to write themselves
   *
   * The learner only writes the core logic — everything else is provided.
   *
   * Length: 30 to 1500 characters.
   */
  starterCode: string;

  /**
   * The complete correct solution that replaces starter code
   * when the learner clicks "Reveal Solution".
   *
   * Must:
   *   - Be a complete, runnable program (not just the missing parts)
   *   - Produce exactly the output described in instructions
   *   - Use the simplest correct approach
   *   - Not use any language features not yet covered in the curriculum
   *
   * Length: 20 to 1500 characters.
   */
  solutionCode: string;

  /**
   * Progressive hints revealed one at a time as the learner clicks "Get Hint".
   *
   * After these static hints are exhausted, the AI hint system
   * calls Claude to generate a dynamic contextual hint.
   *
   * Rules:
   *   - Minimum 2, maximum 5 hints
   *   - Must start with the 💡 emoji
   *   - Must be a single sentence (10 to 30 words)
   *   - Ordered from most gentle to most explicit
   *   - First hint: nudge toward the right concept
   *   - Last hint: name the exact approach without giving code
   *
   * Example progression (for a sorting exercise):
   *   Hint 1: "💡 Look at the methods in the code example — one of them arranges items in order."
   *   Hint 2: "💡 The sort() method arranges a list in ascending order by default."
   *   Hint 3: "💡 To sort from highest to lowest, pass reverse=True to sort()."
   */
  hints: string[];

  /**
   * Optional automated test cases.
   *
   * If provided, the exercise runner executes the learner's code
   * with each test input and checks the output.
   *
   * If omitted, the learner validates manually by running their
   * code and comparing output to the instructions.
   *
   * Recommended: include test cases for exercises with precise
   * numerical or string outputs. Omit for open-ended exercises
   * where any valid creative output is acceptable.
   */
  testCases?: TestCase[];
}

// ════════════════════════════════════════════════════════════
//  QUIZ
// ════════════════════════════════════════════════════════════

/**
 * A single multiple-choice question in the lesson quiz.
 *
 * Displayed one at a time in the quiz tab. After the learner
 * selects an answer, the correct choice is highlighted in green,
 * wrong choices in red, and the explanation appears below.
 * The learner then clicks "Next Question" to advance.
 *
 * AUTHORING GUIDELINES:
 *
 *   What makes a good quiz question:
 *     - Tests understanding, not memorization
 *     - Has one clearly correct answer (no ambiguity)
 *     - All distractors are plausible (no obviously silly options)
 *     - Can be answered by someone who read the explanation carefully
 *     - Has a useful explanation that teaches something
 *
 *   What to avoid:
 *     - "According to the lesson, what is..." (rote recall)
 *     - "Which of the following is NOT..." (confusing negatives)
 *     - "All of the above" or "None of the above" options
 *     - Trick questions that depend on edge cases not covered
 */
export interface QuizQuestion {
  /**
   * Globally unique question identifier.
   *
   * Format: {lessonId}-q{number}
   * Examples: py-m1-l2-q1, js-m3-l2-q2, java-m4-l3-q1
   *
   * Used as document ID in Firestore quiz_results collection
   * and as the key in the weak topic detection system.
   */
  id: string;

  /**
   * The question text displayed above the four answer options.
   *
   * Rules:
   *   - Complete sentence ending with a question mark
   *   - Tests conceptual understanding, not syntax memorization
   *   - Maximum 200 characters (wraps on mobile at ~120)
   *   - No code in the question text (use the options for that)
   */
  question: string;

  /**
   * Exactly four answer options displayed as labeled buttons (A, B, C, D).
   *
   * Rules for all four options:
   *   - Roughly equal length (avoids the "longest option is correct" cue)
   *   - Grammatically consistent style
   *   - All distractors are things a beginner might genuinely believe
   *
   * Rules for the correct answer:
   *   - Must not always be in position 0 or 1 — vary the position
   *
   * Rules for distractors:
   *   - At least one distractor should be the most common misconception
   *   - At least one distractor should be a concept from a nearby lesson
   *     (tests that the learner can distinguish similar things)
   */
  options: [string, string, string, string];

  /**
   * Zero-based index of the correct answer in the options array.
   *
   *   0 → option A (first option)
   *   1 → option B (second option)
   *   2 → option C (third option)
   *   3 → option D (fourth option)
   *
   * The quiz engine highlights the correct option in green after
   * the learner submits, regardless of which option they chose.
   */
  correct: 0 | 1 | 2 | 3;

  /**
   * The explanation shown to the learner after they answer.
   *
   * Must contain:
   *   1. Why the correct answer is right (essential)
   *   2. Why the most tempting wrong answer is wrong (strongly recommended)
   *
   * Rules:
   *   - Plain English — no technical jargon without definition
   *   - 2 to 4 sentences
   *   - Must add information beyond "the correct answer is X"
   *   - Should reinforce the key takeaway from the lesson
   *
   * Length: 40 to 400 characters.
   */
  explanation: string;
}

/**
 * The quiz object stored on a lesson.
 *
 * Contains 2 to 3 questions. The quiz is sequential — questions
 * are displayed one at a time and cannot be skipped.
 *
 * Score is calculated as: (correct answers / total questions) * 100
 * and saved to Firestore by recordQuizScore().
 * A score of 100% unlocks the 'perfect_quiz' badge.
 */
export interface Quiz {
  /**
   * Array of 2 to 3 quiz questions.
   *
   * Each question must test a DIFFERENT concept from the lesson.
   * Do not ask two questions about the same thing.
   *
   * Recommended question types across a 3-question quiz:
   *   Q1: Conceptual understanding (what does X mean?)
   *   Q2: Behavioral prediction (what does this code do?)
   *   Q3: Error recognition or comparison (what is wrong / what is different?)
   */
  questions: [QuizQuestion, QuizQuestion] | [QuizQuestion, QuizQuestion, QuizQuestion];
}

// ════════════════════════════════════════════════════════════
//  LESSON (ROOT TYPE)
// ════════════════════════════════════════════════════════════

/**
 * The complete data structure for a single lesson in CodeGuru AI.
 *
 * A lesson is the smallest independently completable unit of learning.
 * Each lesson has four phases rendered as tabs in the lesson viewer:
 *
 *   Tab 1 — Explain (25% progress)
 *     The explanation article. The learner reads, then clicks "Next".
 *
 *   Tab 2 — Code (50% progress)
 *     A runnable code example. The learner runs it, reads the
 *     output and explanation, then clicks "Next".
 *
 *   Tab 3 — Exercise (75% progress)
 *     A coding challenge. The learner writes code, runs it to
 *     verify, uses hints if needed.
 *
 *   Tab 4 — Quiz (100% progress)
 *     A 2-3 question quiz. When complete, the "Complete Lesson"
 *     button awards XP and marks the lesson done in Firestore.
 *
 * DATA FLOW:
 *   Lesson data (this file) → useCourse() hook →
 *   EnrichedLesson (adds isComplete, isLocked) →
 *   Lesson viewer components
 *
 * FIRESTORE INTEGRATION:
 *   On completion: POST /api/progress { lessonId, courseId, xpReward }
 *   Quiz score:    recordQuizScore(lessonId, score, total, uid)
 *   XP validation: server-side SERVER_XP map (lesson id → xpReward)
 */
export interface Lesson {
  /**
   * Globally unique lesson identifier used as:
   *   - URL path segment: /courses/python/py-m1-l1
   *   - Firestore key in /progress/{uid}_python.completedLessons[]
   *   - XP validation key in server-side SERVER_XP map
   *   - Weak topic detector topic key
   *
   * Format: {language_prefix}-m{module_number}-l{lesson_number}
   *
   * Language prefixes:
   *   py   → Python
   *   js   → JavaScript
   *   java → Java
   *   html → HTML (Module 1)
   *   css  → CSS (Module 2+)
   *
   * Examples: py-m1-l1, js-m3-l2, java-m4-l3, html-m1-l2, css-m3-l1
   */
  id: string;

  /**
   * ID of the parent module.
   *
   * Must match the id of an existing Module object in the same course.
   * Used to determine lesson locking sequence — a lesson is locked
   * until all lessons in the same module with lower order are complete.
   *
   * Format: {language_prefix}-m{module_number}
   * Examples: py-m1, js-m3, java-m4, html-m1, css-m3
   */
  moduleId: string;

  /**
   * Human-readable lesson title displayed in:
   *   - Module lesson list (course detail page)
   *   - Lesson viewer top bar
   *   - Previous/next lesson navigation
   *   - Activity log entries
   *   - AI weak topic recommendations
   *
   * Good titles: specific, action-oriented, 4-8 words
   * Length: 3 to 60 characters.
   */
  title: string;

  /**
   * Sequential position within the module.
   *
   * Determines display order in the lesson list and enables
   * sequential locking. A learner cannot start lesson N until
   * lesson N-1 in the same module is complete.
   *
   * Starts at 1. Maximum 10 per module (platform design limit).
   */
  order: number;

  /**
   * XP awarded on lesson completion.
   *
   * The client sends this value to the server, but the server
   * validates it against an independent SERVER_XP lookup table
   * in /api/progress/route.ts. The server value wins in all cases.
   *
   * Guidelines:
   *   10 XP → short introductory lessons (first lesson of module)
   *   15 XP → standard lessons
   *   20 XP → complex lessons covering multiple concepts
   *   25 XP → advanced lessons at the end of later modules
   *
   * Must be a positive multiple of 5.
   */
  xpReward: number;

  /**
   * Estimated completion time shown on the module lesson list.
   *
   * Calculated as:
   *   reading time (words / 200 wpm)
   *   + code reading time (lines * 5 sec)
   *   + exercise time (5-10 min)
   *   + quiz time (2 min)
   *
   * Rounded up to the nearest minute.
   * Format: '{N} min' — e.g. '8 min', '12 min', '15 min'
   */
  duration: string;

  /**
   * The reading material for Tab 1.
   * See the Explanation interface for full authoring guidelines.
   */
  explanation: Explanation;

  /**
   * The runnable code demonstration for Tab 2.
   * See the CodeExample interface for full authoring guidelines.
   */
  codeExample: CodeExample;

  /**
   * The interactive coding challenge for Tab 3.
   * See the Exercise interface for full authoring guidelines.
   */
  exercise: Exercise;

  /**
   * The multiple-choice assessment for Tab 4.
   * See the Quiz and QuizQuestion interfaces for full authoring guidelines.
   */
  quiz: Quiz;
}

// ════════════════════════════════════════════════════════════
//  ENRICHED LESSON (runtime type — NOT stored in course data)
// ════════════════════════════════════════════════════════════

/**
 * A Lesson with runtime state injected by the useCourse() hook.
 *
 * This is the type used by all components and the useLesson() hook.
 * It is derived from the static Lesson data + the user's progress.
 * Never stored in Firestore — computed fresh on every render.
 */
export interface EnrichedLesson extends Lesson {
  /** True when this lesson's ID is in the user's completedLessons array. */
  isComplete: boolean;

  /**
   * True when this lesson's prerequisites have not been completed.
   *
   * A lesson is locked when any lesson in the same module with a
   * lower order value has not been completed by the current user.
   * Locked lessons are shown in the list but cannot be opened.
   */
  isLocked: boolean;
}

// ════════════════════════════════════════════════════════════
//  VALIDATION HELPERS
// ════════════════════════════════════════════════════════════

/**
 * Validates a lesson object against the schema rules.
 *
 * Returns an array of validation errors.
 * An empty array means the lesson is valid.
 *
 * Used in the content authoring pipeline to catch mistakes
 * before they reach production. Run via: npm run validate-content
 */
export function validateLesson(lesson: Lesson): string[] {
  const errors: string[] = [];

  // ID format
  if (!/^[a-z][a-z0-9]*-m\d+-l\d+$/.test(lesson.id)) {
    errors.push(`id "${lesson.id}" does not match pattern {lang}-m{N}-l{N}`);
  }

  // moduleId format
  if (!/^[a-z][a-z0-9]*-m\d+$/.test(lesson.moduleId)) {
    errors.push(`moduleId "${lesson.moduleId}" does not match pattern {lang}-m{N}`);
  }

  // ID must start with module ID
  if (!lesson.id.startsWith(lesson.moduleId)) {
    errors.push(`id "${lesson.id}" must start with moduleId "${lesson.moduleId}"`);
  }

  // Title length
  if (lesson.title.length < 3 || lesson.title.length > 60) {
    errors.push(`title must be 3-60 characters, got ${lesson.title.length}`);
  }

  // XP
  if (lesson.xpReward < 5 || lesson.xpReward > 50 || lesson.xpReward % 5 !== 0) {
    errors.push(`xpReward must be 5-50 in multiples of 5, got ${lesson.xpReward}`);
  }

  // Duration format
  if (!/^\d+ min$/.test(lesson.duration)) {
    errors.push(`duration must be "{N} min", got "${lesson.duration}"`);
  }

  // Explanation
  if (lesson.explanation.content.length < 300) {
    errors.push(`explanation.content too short (min 300 chars, got ${lesson.explanation.content.length})`);
  }

  // Code language
  const validLanguages: SupportedLanguage[] = ['python', 'javascript', 'java', 'html-css'];
  if (!validLanguages.includes(lesson.codeExample.language)) {
    errors.push(`codeExample.language "${lesson.codeExample.language}" is not one of ${validLanguages.join(', ')}`);
  }

  // Java class name
  if (lesson.codeExample.language === 'java' && !lesson.codeExample.code.includes('class Main')) {
    errors.push('Java codeExample.code must contain "class Main"');
  }

  // HTML completeness
  if (lesson.codeExample.language === 'html-css' && !lesson.codeExample.code.includes('<!DOCTYPE html>')) {
    errors.push('html-css codeExample.code must be a complete document starting with <!DOCTYPE html>');
  }

  // Exercise hints
  if (lesson.exercise.hints.length < 2 || lesson.exercise.hints.length > 5) {
    errors.push(`exercise.hints must have 2-5 items, got ${lesson.exercise.hints.length}`);
  }
  lesson.exercise.hints.forEach((hint, i) => {
    if (!hint.startsWith('💡')) {
      errors.push(`exercise.hints[${i}] must start with 💡`);
    }
  });

  // Quiz questions
  if (lesson.quiz.questions.length < 2 || lesson.quiz.questions.length > 3) {
    errors.push(`quiz.questions must have 2-3 items, got ${lesson.quiz.questions.length}`);
  }
  lesson.quiz.questions.forEach((q, i) => {
    // ID format
    if (!/^[a-z][a-z0-9]*-m\d+-l\d+-q\d+$/.test(q.id)) {
      errors.push(`quiz.questions[${i}].id "${q.id}" does not match pattern {lessonId}-q{N}`);
    }
    // ID must be prefixed with lesson ID
    if (!q.id.startsWith(lesson.id)) {
      errors.push(`quiz.questions[${i}].id must start with lesson id "${lesson.id}"`);
    }
    // Exactly 4 options
    if (q.options.length !== 4) {
      errors.push(`quiz.questions[${i}].options must have exactly 4 items, got ${q.options.length}`);
    }
    // Correct index range
    if (q.correct < 0 || q.correct > 3) {
      errors.push(`quiz.questions[${i}].correct must be 0-3, got ${q.correct}`);
    }
    // Explanation length
    if (q.explanation.length < 40) {
      errors.push(`quiz.questions[${i}].explanation too short (min 40 chars)`);
    }
    // Question ends with ?
    if (!q.question.trim().endsWith('?')) {
      errors.push(`quiz.questions[${i}].question must end with a question mark`);
    }
  });

  return errors;
}
