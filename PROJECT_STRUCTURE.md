# CodeGuru AI — Complete Project Structure

```
codeguru-ai/
│
├── README.md
├── .gitignore
├── .env.example
├── package.json                          # Root monorepo config
│
├── /frontend                             # Next.js App
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── .env.local.example
│   │
│   ├── /public
│   │   ├── favicon.ico
│   │   ├── logo.svg
│   │   └── /icons
│   │       ├── python.svg
│   │       ├── javascript.svg
│   │       ├── html.svg
│   │       └── java.svg
│   │
│   ├── /src
│   │   ├── /app                          # Next.js 14 App Router
│   │   │   ├── layout.tsx                # Root layout
│   │   │   ├── page.tsx                  # Landing page
│   │   │   ├── globals.css
│   │   │   │
│   │   │   ├── /(auth)
│   │   │   │   ├── login/page.tsx
│   │   │   │   ├── signup/page.tsx
│   │   │   │   └── layout.tsx
│   │   │   │
│   │   │   ├── /dashboard
│   │   │   │   ├── page.tsx              # Main dashboard
│   │   │   │   └── layout.tsx
│   │   │   │
│   │   │   ├── /courses
│   │   │   │   ├── page.tsx              # Course catalog
│   │   │   │   ├── [courseId]/page.tsx   # Course detail
│   │   │   │   └── [courseId]/[lessonId]/page.tsx  # Lesson viewer
│   │   │   │
│   │   │   ├── /playground
│   │   │   │   └── page.tsx              # Coding playground
│   │   │   │
│   │   │   ├── /ai-tutor
│   │   │   │   └── page.tsx              # AI tutor chat
│   │   │   │
│   │   │   ├── /progress
│   │   │   │   └── page.tsx              # Progress tracking
│   │   │   │
│   │   │   └── /api                      # Next.js API Routes
│   │   │       ├── ai/
│   │   │       │   ├── explain/route.ts  # Claude explanation
│   │   │       │   ├── debug/route.ts    # OpenAI debug
│   │   │       │   └── chat/route.ts     # AI tutor chat
│   │   │       ├── code/
│   │   │       │   └── execute/route.ts  # Judge0 execution
│   │   │       └── progress/
│   │   │           └── route.ts          # Progress sync
│   │   │
│   │   ├── /components
│   │   │   ├── /ui                       # Base UI components
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── Badge.tsx
│   │   │   │   ├── Modal.tsx
│   │   │   │   ├── Loader.tsx
│   │   │   │   └── Toast.tsx
│   │   │   │
│   │   │   ├── /layout
│   │   │   │   ├── Navbar.tsx
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   ├── MobileNav.tsx
│   │   │   │   └── Footer.tsx
│   │   │   │
│   │   │   ├── /auth
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   ├── SignupForm.tsx
│   │   │   │   └── AuthGuard.tsx
│   │   │   │
│   │   │   ├── /course
│   │   │   │   ├── CourseCard.tsx
│   │   │   │   ├── CourseGrid.tsx
│   │   │   │   ├── ModuleList.tsx
│   │   │   │   └── LessonCard.tsx
│   │   │   │
│   │   │   ├── /lesson
│   │   │   │   ├── LessonViewer.tsx
│   │   │   │   ├── ExplanationBlock.tsx
│   │   │   │   ├── CodeExample.tsx
│   │   │   │   ├── MiniExercise.tsx
│   │   │   │   └── QuizBlock.tsx
│   │   │   │
│   │   │   ├── /playground
│   │   │   │   ├── CodeEditor.tsx        # Monaco Editor wrapper
│   │   │   │   ├── OutputPanel.tsx
│   │   │   │   ├── LanguageSelector.tsx
│   │   │   │   └── RunButton.tsx
│   │   │   │
│   │   │   ├── /ai-tutor
│   │   │   │   ├── ChatWindow.tsx
│   │   │   │   ├── ChatMessage.tsx
│   │   │   │   ├── ChatInput.tsx
│   │   │   │   └── SuggestedPrompts.tsx
│   │   │   │
│   │   │   └── /progress
│   │   │       ├── StreakCounter.tsx
│   │   │       ├── XPBar.tsx
│   │   │       ├── ProgressRing.tsx
│   │   │       └── BadgeDisplay.tsx
│   │   │
│   │   ├── /lib
│   │   │   ├── firebase.ts               # Firebase init
│   │   │   ├── auth.ts                   # Auth helpers
│   │   │   ├── firestore.ts              # Firestore helpers
│   │   │   ├── judge0.ts                 # Code execution
│   │   │   ├── ai-router.ts              # AI routing logic
│   │   │   └── utils.ts                  # General utilities
│   │   │
│   │   ├── /hooks
│   │   │   ├── useAuth.ts
│   │   │   ├── useCourse.ts
│   │   │   ├── useLesson.ts
│   │   │   ├── useProgress.ts
│   │   │   └── useAI.ts
│   │   │
│   │   ├── /store
│   │   │   ├── authStore.ts              # Zustand auth state
│   │   │   ├── progressStore.ts          # Progress state
│   │   │   └── uiStore.ts                # UI state
│   │   │
│   │   └── /types
│   │       ├── course.ts
│   │       ├── lesson.ts
│   │       ├── user.ts
│   │       └── progress.ts
│   │
│   └── /data
│       └── /courses
│           ├── python.ts                 # Python course data
│           ├── javascript.ts             # JS course data
│           ├── html-css.ts               # HTML/CSS course data
│           └── java.ts                   # Java course data
│
├── /firebase                             # Firebase backend
│   ├── firebase.json
│   ├── firestore.rules
│   ├── firestore.indexes.json
│   │
│   └── /functions                        # Cloud Functions
│       ├── package.json
│       ├── tsconfig.json
│       └── /src
│           ├── index.ts                  # Functions entry
│           ├── /auth
│           │   ├── onCreate.ts           # New user setup
│           │   └── onDelete.ts           # Cleanup
│           ├── /progress
│           │   ├── updateXP.ts
│           │   └── checkBadges.ts
│           └── /subscriptions
│               └── verifyPlan.ts
│
└── /docs
    ├── DEPLOYMENT.md
    ├── API_REFERENCE.md
    └── COURSE_SCHEMA.md
```
