// src/store/uiStore.ts
// ─────────────────────────────────────────────────────────────
// UI STORE — manages all interface state that multiple components
// need to share, but that doesn't belong in auth or progress.
//
// What goes in the UI store?
//   ✅ Active lesson tab (explain/code/exercise/quiz)
//   ✅ Playground language selection
//   ✅ AI Tutor chat history (in-session)
//   ✅ Sidebar open/closed state
//   ✅ Loading states for AI calls
//   ✅ Hint panel visibility
//   ✅ Modal states (solution modal, upgrade modal)
//   ✅ Active course/lesson being viewed
//
// What does NOT go here?
//   ❌ Auth state → authStore
//   ❌ XP/progress → progressStore
//   ❌ Persistent data → those stores with persist middleware
//
// The UI store is NOT persisted (no persist middleware)
// because all UI state resets on page refresh — that's expected.
// ─────────────────────────────────────────────────────────────

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// ── Types ─────────────────────────────────────────────────────

export type LessonTab = 'explain' | 'code' | 'exercise' | 'quiz';

export type PlaygroundLanguage = 'python' | 'javascript' | 'java' | 'html-css';

export interface ChatMessage {
  id:        string;
  role:      'user' | 'assistant';
  content:   string;
  timestamp: number;
}

// ── State Shape ───────────────────────────────────────────────
interface UIState {

  // ── Lesson Viewer ─────────────────────────────────────────
  // Which lesson is currently open in the viewer
  activeLessonId:    string | null;
  activeCourseId:    string | null;
  activeModuleId:    string | null;
  // Which tab within the lesson is showing
  activeLessonTab:   LessonTab;
  // Whether the AI hint panel is expanded
  hintPanelOpen:     boolean;
  // Which hint index we're on (cycles through pre-written hints)
  hintIndex:         number;
  // Whether the solution code is revealed
  solutionRevealed:  boolean;

  // ── Playground ────────────────────────────────────────────
  playgroundLanguage: PlaygroundLanguage;
  // Code in playground editor (so it persists when switching tabs)
  playgroundCode:     Record<PlaygroundLanguage, string>;
  // Output from last run
  playgroundOutput:   string | null;
  // Is code currently running?
  isRunningCode:      boolean;

  // ── AI Tutor Chat ─────────────────────────────────────────
  chatMessages:       ChatMessage[];
  isChatLoading:      boolean;  // Waiting for AI response
  // Context passed with each chat message (current lesson, language)
  chatContext:        string | null;

  // ── AI Hint ───────────────────────────────────────────────
  isHintLoading:      boolean;
  currentHint:        string | null;

  // ── AI Debug (Playground) ─────────────────────────────────
  isDebugging:        boolean;
  debugOutput:        string | null;

  // ── Modals ────────────────────────────────────────────────
  upgradeModalOpen:   boolean;  // "Upgrade your plan" modal
  solutionModalOpen:  boolean;  // "Show solution" confirmation modal

  // ── Mobile ────────────────────────────────────────────────
  // Used for the hamburger menu on tablet sizes
  mobileSidebarOpen:  boolean;

  // ── Actions ───────────────────────────────────────────────

  // Lesson
  openLesson:          (lessonId: string, courseId: string, moduleId: string) => void;
  setLessonTab:        (tab: LessonTab)    => void;
  toggleHintPanel:     ()                  => void;
  incrementHintIndex:  ()                  => void;
  revealSolution:      ()                  => void;
  resetLessonUI:       ()                  => void;

  // Playground
  setPlaygroundLang:   (lang: PlaygroundLanguage) => void;
  setPlaygroundCode:   (lang: PlaygroundLanguage, code: string) => void;
  setPlaygroundOutput: (output: string | null) => void;
  setIsRunningCode:    (running: boolean) => void;
  setDebugOutput:      (output: string | null) => void;
  setIsDebugging:      (debugging: boolean) => void;

  // Chat
  addChatMessage:      (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
  setChatLoading:      (loading: boolean) => void;
  setChatContext:      (context: string | null) => void;
  clearChat:           ()                  => void;

  // Hint
  setHint:             (hint: string | null) => void;
  setHintLoading:      (loading: boolean)    => void;

  // Modals
  openUpgradeModal:    () => void;
  closeUpgradeModal:   () => void;
  openSolutionModal:   () => void;
  closeSolutionModal:  () => void;

  // Mobile
  toggleMobileSidebar: () => void;
  closeMobileSidebar:  () => void;
}

// ── Default Playground Code ───────────────────────────────────
// Pre-loaded starter code for each language in the playground
const DEFAULT_CODE: Record<PlaygroundLanguage, string> = {
  python: `# Welcome to Python Playground! 🐍
# Write your code here and click Run (or Ctrl+Enter)

name = "CodeGuru"
print(f"Hello from {name}!")

# Try some math
x = 10
y = 5
print(f"{x} + {y} = {x + y}")
print(f"{x} * {y} = {x * y}")
`,

  javascript: `// Welcome to JavaScript Playground! ⚡
// Write your code here and click Run

const name = "CodeGuru";
console.log(\`Hello from \${name}!\`);

// Try a function
function greet(person) {
  return \`Welcome to coding, \${person}!\`;
}

console.log(greet("Learner"));
`,

  java: `// Welcome to Java Playground! ☕
// Click Run to execute

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello from CodeGuru!");
        
        int x = 10;
        int y = 5;
        System.out.println(x + " + " + y + " = " + (x + y));
        System.out.println(x + " * " + y + " = " + (x * y));
    }
}
`,

  'html-css': `<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    body {
      font-family: sans-serif;
      background: #1a1a2e;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }
    h1 { color: #22c55e; }
    p  { color: #94a3b8; }
  </style>
</head>
<body>
  <div>
    <h1>Hello from HTML!</h1>
    <p>Edit this code and click Run to see changes.</p>
  </div>
</body>
</html>
`,
};

// ── Welcome Chat Message ──────────────────────────────────────
const WELCOME_MESSAGE: ChatMessage = {
  id:        'welcome',
  role:      'assistant',
  content:   'Namaste! 👋 Main hoon **CodeGuru AI** — tera personal coding mentor!\n\nKuch bhi puch — Python, JavaScript, Java, HTML/CSS — main explain karunga bilkul simple language mein.\n\nKya seekhna hai aaj? 🚀',
  timestamp: Date.now(),
};

// ── Store ─────────────────────────────────────────────────────
export const useUIStore = create<UIState>()(
  devtools(
    (set, get) => ({
      // ── Initial State ──────────────────────────────────────
      activeLessonId:     null,
      activeCourseId:     null,
      activeModuleId:     null,
      activeLessonTab:    'explain',
      hintPanelOpen:      false,
      hintIndex:          0,
      solutionRevealed:   false,

      playgroundLanguage: 'python',
      playgroundCode:     { ...DEFAULT_CODE },
      playgroundOutput:   null,
      isRunningCode:      false,

      chatMessages:       [WELCOME_MESSAGE],
      isChatLoading:      false,
      chatContext:        null,

      isHintLoading:      false,
      currentHint:        null,
      isDebugging:        false,
      debugOutput:        null,

      upgradeModalOpen:   false,
      solutionModalOpen:  false,

      mobileSidebarOpen:  false,

      // ── Lesson Actions ─────────────────────────────────────

      // openLesson: called when user clicks a lesson card
      // Resets all per-lesson state before opening new lesson
      openLesson: (lessonId, courseId, moduleId) => set({
        activeLessonId:   lessonId,
        activeCourseId:   courseId,
        activeModuleId:   moduleId,
        activeLessonTab:  'explain',  // Always start at the Explain tab
        hintPanelOpen:    false,
        hintIndex:        0,
        solutionRevealed: false,
        currentHint:      null,
      }, false, 'ui/openLesson'),

      setLessonTab: (tab) => set(
        { activeLessonTab: tab },
        false,
        'ui/setLessonTab'
      ),

      toggleHintPanel: () => set(
        s => ({ hintPanelOpen: !s.hintPanelOpen }),
        false,
        'ui/toggleHint'
      ),

      incrementHintIndex: () => set(
        s => ({ hintIndex: s.hintIndex + 1 }),
        false,
        'ui/nextHint'
      ),

      revealSolution: () => set(
        { solutionRevealed: true, solutionModalOpen: false },
        false,
        'ui/revealSolution'
      ),

      // Reset all lesson UI state — called when leaving a lesson
      resetLessonUI: () => set({
        activeLessonId:   null,
        activeLessonTab:  'explain',
        hintPanelOpen:    false,
        hintIndex:        0,
        solutionRevealed: false,
        currentHint:      null,
      }, false, 'ui/resetLesson'),

      // ── Playground Actions ─────────────────────────────────

      setPlaygroundLang: (lang) => set(
        { playgroundLanguage: lang, playgroundOutput: null, debugOutput: null },
        false,
        'ui/setPlaygroundLang'
      ),

      setPlaygroundCode: (lang, code) => set(
        s => ({ playgroundCode: { ...s.playgroundCode, [lang]: code } }),
        false,
        'ui/setPlaygroundCode'
      ),

      setPlaygroundOutput: (output) => set(
        { playgroundOutput: output },
        false,
        'ui/setPlaygroundOutput'
      ),

      setIsRunningCode: (running) => set(
        { isRunningCode: running },
        false,
        'ui/setRunningCode'
      ),

      setDebugOutput: (output) => set(
        { debugOutput: output },
        false,
        'ui/setDebugOutput'
      ),

      setIsDebugging: (debugging) => set(
        { isDebugging: debugging },
        false,
        'ui/setDebugging'
      ),

      // ── Chat Actions ───────────────────────────────────────

      addChatMessage: (message) => set(
        s => ({
          chatMessages: [
            ...s.chatMessages,
            {
              ...message,
              id:        `${message.role}-${Date.now()}-${Math.random()}`,
              timestamp: Date.now(),
            },
          ],
        }),
        false,
        'ui/addChatMessage'
      ),

      setChatLoading: (loading) => set(
        { isChatLoading: loading },
        false,
        'ui/setChatLoading'
      ),

      setChatContext: (context) => set(
        { chatContext: context },
        false,
        'ui/setChatContext'
      ),

      // Clear chat history (keep welcome message)
      clearChat: () => set(
        { chatMessages: [WELCOME_MESSAGE], chatContext: null },
        false,
        'ui/clearChat'
      ),

      // ── Hint Actions ───────────────────────────────────────

      setHint: (hint) => set(
        { currentHint: hint, hintPanelOpen: hint !== null },
        false,
        'ui/setHint'
      ),

      setHintLoading: (loading) => set(
        { isHintLoading: loading },
        false,
        'ui/setHintLoading'
      ),

      // ── Modal Actions ──────────────────────────────────────

      openUpgradeModal:   () => set({ upgradeModalOpen:  true  }, false, 'ui/openUpgrade'),
      closeUpgradeModal:  () => set({ upgradeModalOpen:  false }, false, 'ui/closeUpgrade'),
      openSolutionModal:  () => set({ solutionModalOpen: true  }, false, 'ui/openSolution'),
      closeSolutionModal: () => set({ solutionModalOpen: false }, false, 'ui/closeSolution'),

      // ── Mobile Actions ─────────────────────────────────────

      toggleMobileSidebar: () => set(
        s => ({ mobileSidebarOpen: !s.mobileSidebarOpen }),
        false,
        'ui/toggleSidebar'
      ),

      closeMobileSidebar: () => set(
        { mobileSidebarOpen: false },
        false,
        'ui/closeSidebar'
      ),
    }),
    { name: 'UIStore' }
  )
);

// ── Selector Hooks ────────────────────────────────────────────

// Lesson selectors
export const useActiveLessonId  = () => useUIStore(s => s.activeLessonId);
export const useActiveCourseId  = () => useUIStore(s => s.activeCourseId);
export const useActiveLessonTab = () => useUIStore(s => s.activeLessonTab);
export const useHintPanel       = () => useUIStore(s => ({
  open:     s.hintPanelOpen,
  hint:     s.currentHint,
  loading:  s.isHintLoading,
  index:    s.hintIndex,
}));
export const useSolutionRevealed = () => useUIStore(s => s.solutionRevealed);

// Playground selectors
export const usePlaygroundLang   = () => useUIStore(s => s.playgroundLanguage);
export const usePlaygroundCode   = (lang: PlaygroundLanguage) =>
  useUIStore(s => s.playgroundCode[lang]);
export const usePlaygroundOutput = () => useUIStore(s => s.playgroundOutput);
export const useIsRunningCode    = () => useUIStore(s => s.isRunningCode);
export const useDebugState       = () => useUIStore(s => ({
  output:   s.debugOutput,
  loading:  s.isDebugging,
}));

// Chat selectors
export const useChatMessages  = () => useUIStore(s => s.chatMessages);
export const useIsChatLoading = () => useUIStore(s => s.isChatLoading);

// Modal selectors
export const useUpgradeModal  = () => useUIStore(s => s.upgradeModalOpen);
export const useSolutionModal = () => useUIStore(s => s.solutionModalOpen);

// Mobile selector
export const useMobileSidebar = () => useUIStore(s => s.mobileSidebarOpen);
