// src/lib/ai/weakTopicDetector.ts
// ─────────────────────────────────────────────────────────────
// WEAK TOPIC DETECTOR
//
// Analyzes a user's quiz results and lesson completion patterns
// to identify which topics they're struggling with.
//
// Data sources:
//   - Quiz results (score per lesson)
//   - Completed lessons (which ones done)
//   - Attempt counts (how many retries)
//   - Time taken (if available)
//
// Output:
//   - WeakTopic[] — ordered by severity
//   - Suggested review lessons
//   - Personalized study plan
// ─────────────────────────────────────────────────────────────

// ── Types ─────────────────────────────────────────────────────

export interface QuizResult {
  lessonId:    string;
  courseId:    string;
  score:       number;   // correct answers
  total:       number;   // total questions
  percentage:  number;   // 0-100
  completedAt: number;   // timestamp
  attempts:    number;   // how many times tried
}

export interface WeakTopic {
  lessonId:     string;
  courseId:     string;
  topicName:    string;
  severity:     'critical' | 'moderate' | 'minor';  // how weak
  score:        number;    // percentage (0-100)
  attempts:     number;    // retries
  suggestedAction: string; // what to do
  relatedLessons: string[]; // prerequisite lessons to review
}

export interface StudyPlan {
  weakTopics:      WeakTopic[];
  topPriority:     WeakTopic | null;
  suggestedOrder:  string[];        // lessonIds in review order
  estimatedMinutes: number;
  message:         string;          // motivational summary
}

// ── Topic metadata ────────────────────────────────────────────
// Maps lesson IDs to human-readable topic names and prerequisites
const TOPIC_MAP: Record<string, { name: string; prerequisites: string[] }> = {
  // Python
  'py-m1-l1': { name: 'Python Basics',           prerequisites: [] },
  'py-m1-l2': { name: 'Variables & Data Types',  prerequisites: ['py-m1-l1'] },
  'py-m1-l3': { name: 'User Input & Strings',    prerequisites: ['py-m1-l2'] },
  'py-m2-l1': { name: 'if/else Conditions',      prerequisites: ['py-m1-l2'] },
  'py-m2-l2': { name: 'elif Chains',             prerequisites: ['py-m2-l1'] },
  'py-m2-l3': { name: 'Comparison Operators',    prerequisites: ['py-m2-l1'] },
  'py-m3-l1': { name: 'Python Lists',            prerequisites: ['py-m1-l2'] },
  'py-m3-l2': { name: 'List Methods',            prerequisites: ['py-m3-l1'] },
  'py-m3-l3': { name: 'Tuples',                  prerequisites: ['py-m3-l1'] },
  'py-m4-l1': { name: 'Dictionaries',            prerequisites: ['py-m3-l1'] },
  'py-m4-l2': { name: 'Dict Comprehensions',     prerequisites: ['py-m4-l1'] },
  'py-m4-l3': { name: 'Sets',                    prerequisites: ['py-m3-l1'] },
  'py-m5-l1': { name: 'for Loops',               prerequisites: ['py-m3-l1'] },
  'py-m5-l2': { name: 'while Loops',             prerequisites: ['py-m2-l1'] },
  'py-m5-l3': { name: 'List Comprehensions',     prerequisites: ['py-m5-l1'] },
  'py-m6-l1': { name: 'Function Arguments',      prerequisites: ['py-m5-l1'] },
  'py-m6-l2': { name: 'Lambda & HOF',            prerequisites: ['py-m6-l1'] },
  'py-m6-l3': { name: 'Closures & Decorators',   prerequisites: ['py-m6-l2'] },
  // JavaScript
  'js-m1-l1': { name: 'JavaScript Basics',       prerequisites: [] },
  'js-m1-l2': { name: 'Variables (let/const)',   prerequisites: ['js-m1-l1'] },
  'js-m1-l3': { name: 'Operators & if/else',     prerequisites: ['js-m1-l2'] },
  'js-m2-l1': { name: 'Function Declarations',   prerequisites: ['js-m1-l3'] },
  'js-m2-l2': { name: 'Arrow Functions',         prerequisites: ['js-m2-l1'] },
  'js-m2-l3': { name: 'Scope & Closures',        prerequisites: ['js-m2-l2'] },
  'js-m3-l1': { name: 'Arrays',                  prerequisites: ['js-m1-l2'] },
  'js-m3-l2': { name: 'map/filter/reduce',       prerequisites: ['js-m3-l1'] },
  'js-m3-l3': { name: 'Spread & Destructuring',  prerequisites: ['js-m3-l1'] },
  'js-m4-l1': { name: 'Objects',                 prerequisites: ['js-m1-l2'] },
  'js-m4-l2': { name: 'Classes & OOP',           prerequisites: ['js-m4-l1'] },
  'js-m4-l3': { name: 'Error Handling',          prerequisites: ['js-m4-l2'] },
  'js-m5-l1': { name: 'DOM Selection',           prerequisites: ['js-m1-l3'] },
  'js-m5-l2': { name: 'DOM Modification',        prerequisites: ['js-m5-l1'] },
  'js-m5-l3': { name: 'Events',                  prerequisites: ['js-m5-l2'] },
  'js-m6-l1': { name: 'Promises',                prerequisites: ['js-m4-l3'] },
  'js-m6-l2': { name: 'async/await',             prerequisites: ['js-m6-l1'] },
  'js-m6-l3': { name: 'Fetch API',               prerequisites: ['js-m6-l2'] },
  // HTML/CSS
  'html-m1-l1': { name: 'HTML Structure',        prerequisites: [] },
  'html-m1-l2': { name: 'Links, Images, Lists',  prerequisites: ['html-m1-l1'] },
  'html-m1-l3': { name: 'HTML Forms',            prerequisites: ['html-m1-l2'] },
  'css-m2-l1':  { name: 'CSS Selectors',         prerequisites: ['html-m1-l1'] },
  'css-m2-l2':  { name: 'Colors & Typography',   prerequisites: ['css-m2-l1'] },
  'css-m2-l3':  { name: 'Box Model',             prerequisites: ['css-m2-l1'] },
  // Java
  'java-m1-l1': { name: 'Java Basics',           prerequisites: [] },
  'java-m1-l2': { name: 'Java Data Types',       prerequisites: ['java-m1-l1'] },
  'java-m1-l3': { name: 'Java Conditionals',     prerequisites: ['java-m1-l2'] },
  'java-m2-l1': { name: 'Java Loops',            prerequisites: ['java-m1-l3'] },
  'java-m2-l2': { name: 'Java Arrays',           prerequisites: ['java-m2-l1'] },
  'java-m2-l3': { name: 'ArrayList',             prerequisites: ['java-m2-l2'] },
  'java-m3-l1': { name: 'Java Methods',          prerequisites: ['java-m2-l1'] },
  'java-m3-l2': { name: 'Recursion',             prerequisites: ['java-m3-l1'] },
  'java-m3-l3': { name: 'Variable Scope',        prerequisites: ['java-m3-l1'] },
  'java-m4-l1': { name: 'Classes & Objects',     prerequisites: ['java-m3-l1'] },
  'java-m4-l2': { name: 'Encapsulation',         prerequisites: ['java-m4-l1'] },
  'java-m4-l3': { name: 'Inheritance',           prerequisites: ['java-m4-l2'] },
};

// ── Severity thresholds ────────────────────────────────────────
const SEVERITY = {
  critical: 50,  // below 50% → critical
  moderate: 70,  // 50-70%   → moderate
  // above 70%                → minor (still flagged if multiple attempts)
};

// ── Core detector function ────────────────────────────────────
export function detectWeakTopics(
  quizResults:       QuizResult[],
  completedLessons:  string[],
  courseId?:         string
): WeakTopic[] {
  const weakTopics: WeakTopic[] = [];

  // Filter results by course if specified
  const results = courseId
    ? quizResults.filter(r => r.courseId === courseId)
    : quizResults;

  for (const result of results) {
    const pct      = result.percentage;
    const topicMeta = TOPIC_MAP[result.lessonId];
    const topicName = topicMeta?.name || result.lessonId;

    // Skip perfect scores (unless multiple attempts needed)
    if (pct >= 90 && result.attempts === 1) continue;

    // Determine severity
    let severity: WeakTopic['severity'];
    if (pct < SEVERITY.critical)                         severity = 'critical';
    else if (pct < SEVERITY.moderate)                    severity = 'moderate';
    else if (result.attempts > 2)                        severity = 'moderate';
    else                                                 severity = 'minor';

    // Build suggested action
    let suggestedAction: string;
    if (severity === 'critical') {
      suggestedAction = `Re-read the explanation and re-do the exercise for "${topicName}"`;
    } else if (severity === 'moderate') {
      suggestedAction = `Review "${topicName}" once more and practice the exercise`;
    } else {
      suggestedAction = `Quick review of "${topicName}" before moving forward`;
    }

    // Find prerequisite lessons that should be reviewed
    const relatedLessons = (topicMeta?.prerequisites || [])
      .filter(prereq => !completedLessons.includes(prereq) || // not completed
               quizResults.find(r => r.lessonId === prereq && r.percentage < 70)); // or weak

    weakTopics.push({
      lessonId:        result.lessonId,
      courseId:        result.courseId,
      topicName,
      severity,
      score:           pct,
      attempts:        result.attempts,
      suggestedAction,
      relatedLessons,
    });
  }

  // Sort by severity (critical first, then by score ascending)
  return weakTopics.sort((a, b) => {
    const severityOrder = { critical: 0, moderate: 1, minor: 2 };
    if (severityOrder[a.severity] !== severityOrder[b.severity]) {
      return severityOrder[a.severity] - severityOrder[b.severity];
    }
    return a.score - b.score;
  });
}

// ── Build study plan ──────────────────────────────────────────
export function buildStudyPlan(
  weakTopics:       WeakTopic[],
  completedLessons: string[]
): StudyPlan {
  if (weakTopics.length === 0) {
    return {
      weakTopics:       [],
      topPriority:      null,
      suggestedOrder:   [],
      estimatedMinutes: 0,
      message: 'Great job! No weak topics detected. Keep moving forward! 🎉',
    };
  }

  // Top priority is the first critical or moderate topic
  const topPriority = weakTopics[0];

  // Build review order (prerequisites before the weak topic)
  const suggestedOrder: string[] = [];
  const seen = new Set<string>();

  for (const topic of weakTopics.slice(0, 5)) { // focus on top 5
    // Add prerequisites first
    for (const prereq of topic.relatedLessons) {
      if (!seen.has(prereq)) {
        suggestedOrder.push(prereq);
        seen.add(prereq);
      }
    }
    // Then the weak topic itself
    if (!seen.has(topic.lessonId)) {
      suggestedOrder.push(topic.lessonId);
      seen.add(topic.lessonId);
    }
  }

  // Estimate review time (10 min per critical, 7 per moderate, 5 per minor)
  const timeMap = { critical: 10, moderate: 7, minor: 5 };
  const estimatedMinutes = weakTopics.slice(0, 5).reduce(
    (sum, t) => sum + timeMap[t.severity], 0
  );

  // Generate message
  const criticalCount  = weakTopics.filter(t => t.severity === 'critical').length;
  const moderateCount  = weakTopics.filter(t => t.severity === 'moderate').length;

  let message: string;
  if (criticalCount > 0) {
    message = `You have ${criticalCount} topic${criticalCount > 1 ? 's' : ''} that need urgent review. Start with "${topPriority.topicName}" — it's the foundation for upcoming lessons.`;
  } else if (moderateCount > 0) {
    message = `A few topics could use more practice. Spending ${estimatedMinutes} minutes reviewing will make upcoming lessons much easier.`;
  } else {
    message = `Minor gaps detected. A quick review will solidify your foundation before advancing.`;
  }

  return {
    weakTopics,
    topPriority,
    suggestedOrder,
    estimatedMinutes,
    message,
  };
}

// ── Analyze lesson skips ──────────────────────────────────────
// Detect if user skipped prerequisite lessons
export function detectSkippedPrerequisites(
  lessonId:         string,
  completedLessons: string[]
): string[] {
  const meta = TOPIC_MAP[lessonId];
  if (!meta) return [];

  return meta.prerequisites.filter(
    prereq => !completedLessons.includes(prereq)
  );
}
