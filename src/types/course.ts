// src/types/course.ts

export type Level = 'beginner' | 'intermediate' | 'advanced';
export type Language = 'python' | 'javascript' | 'html-css' | 'java';

export interface Course {
  id:             Language;
  title:          string;
  description:    string;
  icon:           string;
  color:          string;
  colorLight:     string;
  totalModules:   number;
  totalLessons:   number;
  estimatedHours: number;
  levels:         Level[];
  modules:        Module[];
}

export interface Module {
  id:          string;
  courseId:    string;
  title:       string;
  description: string;
  level:       Level;
  order:       number;
  icon:        string;
  xpReward:    number;
  locked?:     boolean;
  lessons:     Lesson[];
}

export interface Lesson {
  id:          string;
  moduleId:    string;
  title:       string;
  order:       number;
  xpReward:    number;
  duration:    string;
  explanation: Explanation;
  codeExample: CodeExample;
  exercise:    Exercise;
  quiz:        Quiz;
}

export interface Explanation {
  title:   string;
  content: string;  // Markdown
}

export interface CodeExample {
  title:       string;
  language:    string;
  code:        string;
  explanation: string;
}

export interface Exercise {
  title:        string;
  instructions: string;
  starterCode:  string;
  solutionCode: string;
  hints:        string[];
  testCases?:   TestCase[];
}

export interface TestCase {
  input:          string;
  expectedOutput: string | null;
  checkType:      'exact' | 'contains' | 'contains_print' | 'regex';
}

export interface Quiz {
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id:          string;
  question:    string;
  options:     string[];
  correct:     number;
  explanation: string;
}


// src/types/user.ts
export type Plan = 'free' | 'starter' | 'pro' | 'multi' | 'bundle';

export interface UserProfile {
  uid:             string;
  name:            string;
  email:           string;
  photoURL:        string | null;
  plan:            Plan;
  isStudent:       boolean;
  xp:              number;
  streak:          number;
  lastActive:      any; // Firestore Timestamp
  joinedAt:        any;
  enrolledCourses: string[];
  badges:          string[];
}


// src/types/progress.ts
export interface CourseProgress {
  uid:              string;
  courseId:         string;
  completedLessons: string[];
  totalXP:          number;
  lastUpdated:      any;
}

export interface LessonProgress {
  lessonId:       string;
  completed:      boolean;
  quizScore?:     number;
  codeSubmitted?: boolean;
  completedAt?:   any;
}

export interface Badge {
  id:          string;
  name:        string;
  description: string;
  icon:        string;
  xpRequired?: number;
  condition:   string;
}

export const BADGES: Badge[] = [
  { id: 'first_lesson',    name: 'First Step',      icon: '👶', description: 'Completed your first lesson',    condition: 'complete_1_lesson' },
  { id: 'week_streak',     name: 'Week Warrior',    icon: '🔥', description: '7 day streak achieved',          condition: 'streak_7' },
  { id: 'xp_100',          name: 'XP Collector',    icon: '⭐', description: 'Earned 100 XP',                  condition: 'xp_100' },
  { id: 'xp_500',          name: 'XP Champion',     icon: '🏆', description: 'Earned 500 XP',                  condition: 'xp_500' },
  { id: 'first_module',    name: 'Module Master',   icon: '📚', description: 'Completed your first module',    condition: 'complete_1_module' },
  { id: 'perfect_quiz',    name: 'Quiz Perfect',    icon: '💯', description: 'Got 100% on a quiz',             condition: 'quiz_perfect' },
  { id: 'code_runner',     name: 'Code Runner',     icon: '🚀', description: 'Ran code 10 times',              condition: 'run_code_10' },
  { id: 'python_complete', name: 'Python Graduate', icon: '🐍', description: 'Completed Python Beginner path', condition: 'complete_python_beginner' },
];
