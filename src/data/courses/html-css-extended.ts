// src/data/courses/html-css-extended.ts
// Modules 3–6 for HTML/CSS (Beginner)
import type { Module } from '@/types/course';

export const htmlCssModules3to6: Module[] = [

  // ════════════════════════════════════════════════
  //  MODULE 3 — Flexbox Layout
  // ════════════════════════════════════════════════
  {
    id: 'css-m3', courseId: 'html-css',
    title: 'Flexbox Layout',
    description: 'Build one-dimensional layouts with ease. The modern standard for aligning and distributing elements.',
    level: 'beginner', order: 3, icon: '↔️', xpReward: 130, locked: true,
    lessons: [
      {
        id: 'css-m3-l1', moduleId: 'css-m3',
        title: 'Flexbox Fundamentals', order: 1, xpReward: 15, duration: '13 min',
        explanation: {
          title: 'One-Dimensional Layouts with Flexbox',
          content: `# Flexbox — Flexible Box Layout

**Flexbox** makes it easy to align and distribute items in a row or column. It solved the hardest CSS problems: centering, equal-height columns, and space distribution.

## Activating Flexbox

\`\`\`css
.container {
  display: flex;
}
\`\`\`

The container's **direct children** automatically become **flex items**.

## flex-direction — which way?

\`\`\`css
flex-direction: row;            /* → left to right (default) */
flex-direction: row-reverse;    /* ← right to left */
flex-direction: column;         /* ↓ top to bottom */
flex-direction: column-reverse; /* ↑ bottom to top */
\`\`\`

## justify-content — align on main axis

\`\`\`css
justify-content: flex-start;    /* pack at start (default) */
justify-content: flex-end;      /* pack at end */
justify-content: center;        /* center all items */
justify-content: space-between; /* first/last at edges, equal gaps between */
justify-content: space-around;  /* equal space around each item */
justify-content: space-evenly;  /* equal space everywhere */
\`\`\`

## align-items — align on cross axis

\`\`\`css
align-items: stretch;     /* fill container height (default) */
align-items: flex-start;  /* align to top */
align-items: flex-end;    /* align to bottom */
align-items: center;      /* vertically center ← most useful! */
\`\`\`

## The golden centering trick

\`\`\`css
.container {
  display: flex;
  justify-content: center;  /* horizontal */
  align-items: center;      /* vertical */
}
\`\`\`

## gap — space between items

\`\`\`css
gap: 16px;          /* equal gap in both directions */
gap: 10px 20px;     /* row-gap column-gap */
\`\`\``,
        },
        codeExample: {
          title: 'Flexbox in Practice',
          language: 'html',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flexbox Demo</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0f; color: #e2e8f0; font-family: Arial, sans-serif; padding: 20px; display: flex; flex-direction: column; gap: 24px; }

    h3 { color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px; }

    .box {
      background: #22c55e; color: #000; font-weight: bold;
      width: 60px; height: 60px; border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
    }

    /* 1. Row with gap */
    .row { display: flex; gap: 10px; background: #12121a; padding: 16px; border-radius: 10px; }

    /* 2. Space between — navbar pattern */
    .space-between {
      display: flex; justify-content: space-between; align-items: center;
      background: #12121a; padding: 16px; border-radius: 10px;
    }

    /* 3. Perfect center */
    .centered {
      display: flex; justify-content: center; align-items: center;
      background: #12121a; height: 120px; border-radius: 10px; border: 1px dashed #1e1e2e;
    }

    /* 4. Real navbar */
    .navbar {
      display: flex; justify-content: space-between; align-items: center;
      background: #12121a; padding: 14px 20px; border-radius: 12px;
    }
    .brand { font-weight: bold; color: #22c55e; }
    .nav-links { display: flex; gap: 20px; list-style: none; }
    .nav-links a { color: #94a3b8; text-decoration: none; font-size: 14px; }
    .nav-btn { background: #22c55e; color: #000; border: none; padding: 8px 16px; border-radius: 8px; font-weight: bold; cursor: pointer; }
  </style>
</head>
<body>

  <section>
    <h3>1. flex-direction: row (default) + gap</h3>
    <div class="row">
      <div class="box">1</div>
      <div class="box" style="background:#3b82f6">2</div>
      <div class="box" style="background:#f59e0b">3</div>
    </div>
  </section>

  <section>
    <h3>2. justify-content: space-between</h3>
    <div class="space-between">
      <div class="box">A</div>
      <div class="box" style="background:#3b82f6">B</div>
      <div class="box" style="background:#f59e0b">C</div>
    </div>
  </section>

  <section>
    <h3>3. Perfect centering (justify + align = center)</h3>
    <div class="centered">
      <div class="box" style="width:140px; background:#7c3aed">Centered! 🎯</div>
    </div>
  </section>

  <section>
    <h3>4. Real navbar built with flexbox</h3>
    <nav class="navbar">
      <div class="brand">⚡ CodeGuru AI</div>
      <ul class="nav-links">
        <li><a href="#">Courses</a></li>
        <li><a href="#">Playground</a></li>
        <li><a href="#">Progress</a></li>
      </ul>
      <button class="nav-btn">Sign Up Free</button>
    </nav>
  </section>

</body>
</html>`,
          explanation: `- \`display: flex\` on a container makes all direct children flex items automatically
- \`gap\` adds space **between** flex items — cleaner than margins
- \`justify-content: space-between\` is the go-to pattern for navbars
- The centering combo \`justify-content: center; align-items: center;\` is the most-used flexbox pattern in all of web dev
- Flex items size themselves to content by default unless you give them a width`,
        },
        exercise: {
          title: 'Feature Cards Row',
          instructions: 'Create a row of 3 feature cards using flexbox with space-between. Each card needs an emoji icon, title, and short description. On the container add a colored top border using border-top.',
          starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Feature Cards</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0f; color: #e2e8f0; font-family: Arial, sans-serif; padding: 30px; }

    .features {
      /* Add: display flex, justify-content space-between, gap */
    }

    .feature-card {
      /* Add: background, border, border-radius, padding */
      /* Add: width so each is ~30% of container */
    }

    .feature-card .icon { font-size: 2.5rem; margin-bottom: 12px; }
    .feature-card h3    { margin-bottom: 8px; }
    .feature-card p     { color: #64748b; font-size: 14px; line-height: 1.6; }
  </style>
</head>
<body>
  <h1 style="margin-bottom:24px">Why CodeGuru AI?</h1>

  <div class="features">
    <div class="feature-card">
      <div class="icon">🤖</div>
      <h3>AI Mentor</h3>
      <p>Get instant explanations and hints powered by Claude AI.</p>
    </div>
    <div class="feature-card">
      <div class="icon">💻</div>
      <h3>Live Coding</h3>
      <p>Write and run real code in your browser — no setup needed.</p>
    </div>
    <div class="feature-card">
      <div class="icon">🏆</div>
      <h3>Gamified XP</h3>
      <p>Earn XP, maintain streaks, and unlock badges as you learn.</p>
    </div>
  </div>
</body>
</html>`,
          solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Feature Cards</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0f; color: #e2e8f0; font-family: Arial, sans-serif; padding: 30px; }
    .features { display: flex; justify-content: space-between; gap: 20px; }
    .feature-card { flex: 1; background: #12121a; border: 1px solid #1e1e2e; border-top: 3px solid #22c55e; border-radius: 12px; padding: 24px; }
    .feature-card .icon { font-size: 2.5rem; margin-bottom: 12px; }
    .feature-card h3 { margin-bottom: 8px; }
    .feature-card p { color: #64748b; font-size: 14px; line-height: 1.6; }
  </style>
</head>
<body>
  <h1 style="margin-bottom:24px">Why CodeGuru AI?</h1>
  <div class="features">
    <div class="feature-card"><div class="icon">🤖</div><h3>AI Mentor</h3><p>Get instant explanations and hints powered by Claude AI.</p></div>
    <div class="feature-card"><div class="icon">💻</div><h3>Live Coding</h3><p>Write and run real code in your browser — no setup needed.</p></div>
    <div class="feature-card"><div class="icon">🏆</div><h3>Gamified XP</h3><p>Earn XP, maintain streaks, and unlock badges as you learn.</p></div>
  </div>
</body>
</html>`,
          hints: [
            '💡 Add display: flex to .features container',
            '💡 Use flex: 1 on each .feature-card so they grow equally',
            '💡 border-top: 3px solid #22c55e adds a colored top accent line',
          ],
        },
        quiz: {
          questions: [
            { id: 'css-m3-l1-q1', question: 'Which CSS property centers flex items both horizontally and vertically inside a container?', options: ['align-content: center only', 'justify-content: center AND align-items: center', 'text-align: center', 'margin: auto'], correct: 1, explanation: 'justify-content: center aligns items along the main axis (horizontal in row), align-items: center aligns along the cross axis (vertical in row). Together they achieve perfect centering.' },
            { id: 'css-m3-l1-q2', question: 'What does justify-content: space-between do?', options: ['Adds equal space between all items and both edges', 'Places first item at start edge, last item at end edge, equal gaps between items', 'Centers all items', 'Stretches items to fill the container'], correct: 1, explanation: 'space-between places the first item at the start edge and last at the end edge, distributing remaining space equally BETWEEN items. Nothing goes before the first or after the last item.' },
          ],
        },
      },
      {
        id: 'css-m3-l2', moduleId: 'css-m3',
        title: 'Flex Items & Sizing', order: 2, xpReward: 15, duration: '12 min',
        explanation: {
          title: 'Controlling Individual Flex Items',
          content: `# Flex Item Properties

## flex-grow, flex-shrink, flex-basis

\`\`\`css
.item {
  flex-grow:   1;      /* how much to grow (relative to siblings) */
  flex-shrink: 1;      /* how much to shrink if container is small */
  flex-basis:  200px;  /* starting size before grow/shrink */
}

/* Shorthand */
flex: 1;           /* flex: 1 1 0  — grow, shrink, basis=0 */
flex: 0 0 250px;   /* fixed 250px — won't grow or shrink */
flex: 2;           /* takes twice the space of flex:1 siblings */
\`\`\`

## Common layout patterns

\`\`\`css
/* Sidebar + main */
.sidebar { flex: 0 0 250px; }  /* fixed width */
.main    { flex: 1; }          /* fills remaining */

/* Equal columns */
.col { flex: 1; }

/* One larger column */
.small { flex: 1; }
.large { flex: 2; }  /* twice as wide */
\`\`\`

## align-self — override for one item

\`\`\`css
.container { align-items: center; }  /* all centered */
.special   { align-self: flex-end; } /* this one goes to bottom */
\`\`\`

## flex-wrap — allow wrapping

\`\`\`css
flex-wrap: nowrap;   /* all on one line (default) */
flex-wrap: wrap;     /* wrap to next line if needed */
\`\`\`

## order — visual reordering

\`\`\`css
.item-1 { order: 2; }   /* appears second visually */
.item-2 { order: 1; }   /* appears first visually */
\`\`\``,
        },
        codeExample: {
          title: 'Flex Items in Action',
          language: 'html',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flex Items</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0f; color: #e2e8f0; font-family: Arial, sans-serif; padding: 20px; display: flex; flex-direction: column; gap: 24px; }

    h3 { color: #64748b; font-size: 12px; text-transform: uppercase; margin-bottom: 8px; }

    /* Sidebar + main layout */
    .app-layout {
      display: flex; gap: 12px; height: 160px;
    }
    .sidebar { flex: 0 0 180px; background: #12121a; border-radius: 10px; padding: 16px; border: 1px solid #1e1e2e; }
    .main    { flex: 1;         background: #1e293b; border-radius: 10px; padding: 16px; }
    .sidebar p, .main p { color: #64748b; font-size: 13px; }
    .sidebar h4, .main h4 { color: #22c55e; font-size: 14px; margin-bottom: 8px; }

    /* Equal + unequal columns */
    .cols { display: flex; gap: 10px; }
    .col  { flex: 1; background: #12121a; border-radius: 8px; padding: 14px; text-align: center; font-size: 13px; color: #94a3b8; }
    .col.double { flex: 2; background: #052a0f; color: #22c55e; }

    /* Wrapping tags */
    .tags { display: flex; flex-wrap: wrap; gap: 8px; }
    .tag  { flex: 0 0 auto; background: #1e1e2e; border-radius: 99px; padding: 6px 14px; font-size: 12px; }

    /* align-self demo */
    .align-demo { display: flex; gap: 10px; height: 100px; background: #12121a; border-radius: 10px; padding: 10px; align-items: flex-start; }
    .align-box  { width: 60px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; }
  </style>
</head>
<body>

  <section>
    <h3>Sidebar (fixed 180px) + Main (flexible)</h3>
    <div class="app-layout">
      <aside class="sidebar">
        <h4>Sidebar</h4>
        <p>flex: 0 0 180px<br>Never grows or shrinks</p>
      </aside>
      <main class="main">
        <h4>Main Content</h4>
        <p>flex: 1<br>Takes all remaining space automatically</p>
      </main>
    </div>
  </section>

  <section>
    <h3>Equal and Double-width columns</h3>
    <div class="cols">
      <div class="col">flex: 1</div>
      <div class="col double">flex: 2 (double)</div>
      <div class="col">flex: 1</div>
    </div>
  </section>

  <section>
    <h3>flex-wrap: wrap — tags wrap naturally</h3>
    <div class="tags">
      <span class="tag">Python</span><span class="tag">JavaScript</span>
      <span class="tag">HTML/CSS</span><span class="tag">Java</span>
      <span class="tag">React</span><span class="tag">Node.js</span>
      <span class="tag">TypeScript</span><span class="tag">MongoDB</span>
    </div>
  </section>

  <section>
    <h3>align-self — override for individual items</h3>
    <div class="align-demo">
      <div class="align-box" style="background:#22c55e; color:#000; height:40px">start</div>
      <div class="align-box" style="background:#3b82f6; align-self:center; height:40px">center</div>
      <div class="align-box" style="background:#f59e0b; color:#000; align-self:flex-end; height:40px">end</div>
      <div class="align-box" style="background:#7c3aed; align-self:stretch;">stretch</div>
    </div>
  </section>

</body>
</html>`,
          explanation: `- \`flex: 0 0 250px\` = grow:0, shrink:0, basis:250px → fixed width — perfect for sidebars
- \`flex: 1\` = grow:1 → fills all remaining space — perfect for main content
- \`flex: 2\` takes twice the space of \`flex: 1\` siblings (proportional ratios)
- \`flex-wrap: wrap\` with \`flex: 0 0 auto\` lets items use their natural size and wrap
- \`align-self\` on an individual item overrides the container's \`align-items\``,
        },
        exercise: {
          title: 'Dashboard Stat Cards',
          instructions: 'Build a stats row with 4 cards. The first card (Total Revenue) should be flex: 2 (twice as wide). The other 3 should be flex: 1. Add a flex-wrap so they stack on small screens. Each card shows a big number and a label.',
          starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stats Dashboard</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0f; color: #e2e8f0; font-family: Arial, sans-serif; padding: 24px; }

    .stats-row {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    .stat-card {
      flex: 1;
      min-width: 160px;
      background: #12121a;
      border: 1px solid #1e1e2e;
      border-radius: 14px;
      padding: 20px;
    }

    .stat-card.featured { flex: 2; border-color: #22c55e; background: #052a0f; }

    .stat-card .value { font-size: 2rem; font-weight: 800; margin-bottom: 4px; }
    .stat-card .label { color: #64748b; font-size: 13px; }
  </style>
</head>
<body>
  <h2 style="margin-bottom:20px">Dashboard Overview</h2>

  <div class="stats-row">
    <div class="stat-card featured">
      <div class="value" style="color:#22c55e">₹1,24,500</div>
      <div class="label">Total Revenue (flex: 2)</div>
    </div>
    <div class="stat-card">
      <div class="value" style="color:#3b82f6">1,245</div>
      <div class="label">Students</div>
    </div>
    <div class="stat-card">
      <div class="value" style="color:#f59e0b">92%</div>
      <div class="label">Completion Rate</div>
    </div>
    <div class="stat-card">
      <div class="value" style="color:#7c3aed">4.9 ⭐</div>
      <div class="label">Avg Rating</div>
    </div>
  </div>
</body>
</html>`,
          solutionCode: `<!-- Solution is the starter code — it already demonstrates flex: 2 vs flex: 1 pattern -->`,
          hints: [
            '💡 Add class="featured" to the revenue card and set flex: 2 in CSS',
            '💡 flex-wrap: wrap + min-width: 160px makes cards stack on small screens',
            '💡 border-color and background override on .featured makes it stand out',
          ],
        },
        quiz: {
          questions: [
            { id: 'css-m3-l2-q1', question: 'What does flex: 0 0 250px mean?', options: ['flex-grow:0, flex-shrink:0, flex-basis:250px — fixed size that never grows or shrinks', 'The element is 0% wide', 'The element grows at 250px per second', 'The element has zero margin and 250px padding'], correct: 0, explanation: 'flex: 0 0 250px is shorthand for flex-grow: 0 (do not grow), flex-shrink: 0 (do not shrink), flex-basis: 250px (start at 250px). The result is a fixed-size item — perfect for sidebars and fixed panels.' },
            { id: 'css-m3-l2-q2', question: 'What is the difference between flex-wrap: nowrap and flex-wrap: wrap?', options: ['nowrap hides overflowing items; wrap shows them', 'nowrap forces all items on one line; wrap allows items to wrap to the next line if needed', 'They are identical', 'wrap makes items smaller to fit'], correct: 1, explanation: 'flex-wrap: nowrap (default) keeps all items on a single line — items may overflow or shrink. flex-wrap: wrap allows items to flow onto the next line when they run out of space.' },
          ],
        },
      },
      {
        id: 'css-m3-l3', moduleId: 'css-m3',
        title: 'Responsive Design & Media Queries', order: 3, xpReward: 20, duration: '14 min',
        explanation: {
          title: 'Building for Every Screen Size',
          content: `# Responsive Design

A **responsive** website adapts its layout to look great on all screen sizes — phone, tablet, desktop.

## The viewport meta tag (essential!)

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

Without this, phones zoom out and show a tiny desktop view.

## Media Queries

\`\`\`css
/* Base styles — apply to ALL screens (mobile-first) */
.card { font-size: 14px; padding: 12px; }

/* At 640px and above, apply these overrides */
@media (min-width: 640px) {
  .card { font-size: 16px; padding: 20px; }
}

/* At 1024px and above */
@media (min-width: 1024px) {
  .card { font-size: 18px; }
}
\`\`\`

## Common Breakpoints

| Name | Width | Devices |
|------|-------|---------|
| Base | < 640px | Mobile phones |
| sm | 640px+ | Large phones |
| md | 768px+ | Tablets |
| lg | 1024px+ | Laptops |
| xl | 1280px+ | Desktops |

## Mobile-first (recommended approach)

Write CSS for **mobile first**, then override for larger screens using \`min-width\`.

\`\`\`css
/* Mobile: stacked */
.nav { flex-direction: column; }

/* Tablet+: horizontal */
@media (min-width: 768px) {
  .nav { flex-direction: row; }
}
\`\`\`

## Responsive units

\`\`\`css
font-size: 1rem;        /* relative to root (16px default) */
width: 90%;             /* 90% of parent */
height: 100vh;          /* 100% of viewport height */
max-width: 1200px;      /* never wider than this */
font-size: clamp(1rem, 2.5vw, 2rem);  /* fluid between 1rem and 2rem */
\`\`\``,
        },
        codeExample: {
          title: 'Responsive Layout',
          language: 'html',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Design</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0f; color: #e2e8f0; font-family: Arial, sans-serif; }

    /* ── Container ── */
    .container { width: 100%; max-width: 1100px; margin: 0 auto; padding: 16px; }

    /* ── Navbar: stacked on mobile, row on tablet+ ── */
    .navbar {
      display: flex;
      flex-direction: column;  /* mobile */
      gap: 12px;
      background: #12121a;
      padding: 16px 20px;
    }
    .brand    { font-weight: bold; color: #22c55e; font-size: 1.2rem; }
    .nav-links{ display: flex; flex-wrap: wrap; gap: 16px; list-style: none; }
    .nav-links a { color: #94a3b8; text-decoration: none; font-size: 14px; }

    /* ── Card grid: 1 col → 2 col → 3 col ── */
    .card-grid {
      display: flex;
      flex-direction: column;  /* 1 column — mobile */
      gap: 16px;
      margin-top: 24px;
    }
    .card {
      background: #12121a;
      border: 1px solid #1e1e2e;
      border-radius: 14px;
      padding: 20px;
    }
    .card h3 { color: #22c55e; margin-bottom: 8px; }
    .card p  { color: #94a3b8; font-size: 14px; line-height: 1.6; }

    /* Hero text: fluid size */
    .hero-title {
      font-size: clamp(1.5rem, 5vw, 3rem);
      font-weight: 800;
      color: #22c55e;
      margin: 24px 0 12px;
    }

    /* ── Tablet (640px+) ── */
    @media (min-width: 640px) {
      .navbar        { flex-direction: row; justify-content: space-between; align-items: center; }
      .card-grid     { flex-direction: row; flex-wrap: wrap; }
      .card          { flex: 1; min-width: calc(50% - 8px); }  /* 2 columns */
    }

    /* ── Desktop (1024px+) ── */
    @media (min-width: 1024px) {
      .container { padding: 24px; }
      .card { min-width: calc(33.33% - 11px); }  /* 3 columns */
    }
  </style>
</head>
<body>

  <nav class="navbar">
    <div class="brand">⚡ CodeGuru AI</div>
    <ul class="nav-links">
      <li><a href="#">Courses</a></li>
      <li><a href="#">Playground</a></li>
      <li><a href="#">AI Tutor</a></li>
    </ul>
    <button style="background:#22c55e;color:#000;border:none;padding:8px 18px;border-radius:8px;font-weight:bold;cursor:pointer;white-space:nowrap">
      Get Started
    </button>
  </nav>

  <div class="container">
    <h1 class="hero-title">Learn to Code with AI</h1>
    <p style="color:#64748b;margin-bottom:24px">Resize the window to see the responsive layout change!</p>

    <div class="card-grid">
      <div class="card"><h3>🐍 Python</h3><p>From beginner to pro. Build scripts, automation, and AI tools.</p></div>
      <div class="card"><h3>⚡ JavaScript</h3><p>The language of the web — interactive pages and full-stack apps.</p></div>
      <div class="card"><h3>🌐 HTML/CSS</h3><p>Structure and style every webpage — the web development foundation.</p></div>
    </div>
  </div>

</body>
</html>`,
          explanation: `- Start with mobile styles, then use \`@media (min-width: ...)\` to add complexity for larger screens
- \`clamp(min, preferred, max)\` creates fluid typography — auto-scales between limits
- \`calc(50% - 8px)\` for 2-column layout accounts for the 16px gap divided between 2 items
- \`max-width: 1100px\` + \`margin: 0 auto\` creates a centered content container
- Resize the preview window to watch the layout switch from 1 → 2 → 3 columns`,
        },
        exercise: {
          title: 'Mobile-First Portfolio',
          instructions: 'Build a responsive portfolio hero section: full-width on mobile with stacked text and button, side-by-side at 768px+ (text left, emoji avatar right). The heading font size should use clamp() for fluid scaling.',
          starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0f; color: #e2e8f0; font-family: Arial, sans-serif; padding: 32px 20px; }

    .hero {
      display: flex;
      flex-direction: column;  /* mobile: stacked */
      align-items: center;
      text-align: center;
      gap: 24px;
      max-width: 800px;
      margin: 0 auto;
    }

    .hero-text { }

    .hero-text h1 {
      font-size: clamp(1.8rem, 5vw, 3rem);
      font-weight: 800;
      margin-bottom: 12px;
      color: #22c55e;
    }

    .hero-text p  { color: #94a3b8; line-height: 1.7; margin-bottom: 20px; }

    .hero-btn {
      display: inline-block;
      background: #22c55e; color: #000;
      padding: 12px 28px; border-radius: 12px;
      font-weight: bold; text-decoration: none;
      font-size: 15px;
    }

    .hero-avatar {
      font-size: 6rem;
      background: #12121a; border: 2px solid #1e1e2e;
      border-radius: 50%; width: 140px; height: 140px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }

    /* Tablet+: side by side */
    @media (min-width: 768px) {
      .hero { flex-direction: row; text-align: left; }
      .hero-text { flex: 1; }
    }
  </style>
</head>
<body>
  <div class="hero">
    <div class="hero-text">
      <h1>Hi, I'm Rahul Sharma 👋</h1>
      <p>A full-stack developer learning Python and JavaScript at CodeGuru AI. I build things for the web and love open source.</p>
      <a href="#" class="hero-btn">View My Work →</a>
    </div>
    <div class="hero-avatar">👨‍💻</div>
  </div>
</body>
</html>`,
          solutionCode: `<!-- Solution is the starter code — study the mobile-first flex-direction change at 768px -->`,
          hints: [
            '💡 Mobile: flex-direction: column + text-align: center stacks and centers',
            '💡 Tablet+: flex-direction: row + text-align: left puts them side by side',
            '💡 clamp(1.8rem, 5vw, 3rem) scales the h1 between 1.8rem and 3rem based on viewport width',
          ],
        },
        quiz: {
          questions: [
            { id: 'css-m3-l3-q1', question: 'What is the mobile-first approach in CSS?', options: ['Build only for mobile', 'Write base CSS for mobile, enhance with min-width media queries for larger screens', 'Write CSS for desktop first, then override with max-width queries', 'Use a mobile framework only'], correct: 1, explanation: 'Mobile-first means writing base CSS that works on small screens, then using @media (min-width: ...) to progressively add styles for larger screens. It ensures core content works on all devices.' },
            { id: 'css-m3-l3-q2', question: 'What does the viewport meta tag do?', options: ['Zooms in on mobile', 'Tells mobile browsers to use the actual device width instead of a simulated desktop viewport', 'Makes the page responsive automatically', 'Sets the default font size to the device size'], correct: 1, explanation: 'Without the viewport meta tag, mobile browsers render the page at ~980px wide and zoom out. The viewport meta tag instructs the browser to match the device\'s actual screen width, making media queries work correctly.' },
          ],
        },
      },
    ],
  },

  // ════════════════════════════════════════════════
  //  MODULE 4 — CSS Grid
  // ════════════════════════════════════════════════
  {
    id: 'css-m4', courseId: 'html-css',
    title: 'CSS Grid',
    description: 'Master two-dimensional layouts. Build complex page structures that were impossible before Grid.',
    level: 'beginner', order: 4, icon: '🔲', xpReward: 140, locked: true,
    lessons: [
      {
        id: 'css-m4-l1', moduleId: 'css-m4',
        title: 'Grid Fundamentals', order: 1, xpReward: 15, duration: '13 min',
        explanation: {
          title: 'Two-Dimensional Layouts with CSS Grid',
          content: `# CSS Grid

**Grid** is the most powerful CSS layout system — it controls rows AND columns simultaneously.

**Flexbox vs Grid:**
- **Flexbox**: one direction — row OR column (navbar, card row, centering)
- **Grid**: two dimensions — full page layouts, image galleries, dashboards

## Activating Grid

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 80px 1fr 60px;
  gap: 16px;
}
\`\`\`

## The fr unit — fraction of available space

\`\`\`css
grid-template-columns: 1fr 2fr 1fr;      /* 25% 50% 25% */
grid-template-columns: repeat(3, 1fr);   /* 3 equal columns */
grid-template-columns: repeat(4, 250px); /* 4 fixed-width columns */
\`\`\`

## repeat(auto-fit, minmax()) — the responsive magic

\`\`\`css
grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
/* Creates as many 220px+ columns as fit — auto-responsive! */
\`\`\`

## Spanning items across multiple cells

\`\`\`css
.hero    { grid-column: 1 / 4; }   /* spans all 3 columns */
.sidebar { grid-row:    2 / 4; }   /* spans 2 rows */
.wide    { grid-column: span 2; }  /* spans 2 columns from current pos */
\`\`\`

## Named Template Areas

\`\`\`css
.layout {
  grid-template-areas:
    "header header  header"
    "sidebar main   main"
    "footer footer  footer";
  grid-template-columns: 200px 1fr;
}
.header  { grid-area: header;  }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main;    }
.footer  { grid-area: footer;  }
\`\`\``,
        },
        codeExample: {
          title: 'CSS Grid Layouts',
          language: 'html',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Grid Demo</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0f; color: #e2e8f0; font-family: Arial, sans-serif; padding: 20px; display: flex; flex-direction: column; gap: 30px; }

    h3 { color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px; }

    .cell { background: #12121a; border: 1px solid #1e1e2e; border-radius: 8px; padding: 14px; text-align: center; color: #94a3b8; font-size: 13px; }

    /* 1. Basic 3-col grid */
    .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
    .cell.span2 { grid-column: span 2; background: #052a0f; color: #22c55e; }

    /* 2. Named areas — full page layout */
    .page-layout {
      display: grid;
      grid-template-areas:
        "header  header"
        "sidebar content"
        "footer  footer";
      grid-template-columns: 160px 1fr;
      grid-template-rows: 44px 120px 36px;
      gap: 8px;
    }
    .pg-header  { grid-area: header;  background: #1e293b; border-radius: 8px; display: flex; align-items: center; padding: 0 16px; color: #22c55e; font-weight: bold; }
    .pg-sidebar { grid-area: sidebar; background: #12121a; border-radius: 8px; padding: 12px; color: #64748b; font-size: 12px; }
    .pg-content { grid-area: content; background: #12121a; border-radius: 8px; padding: 12px; color: #94a3b8; font-size: 13px; }
    .pg-footer  { grid-area: footer;  background: #0f172a; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #64748b; font-size: 11px; }

    /* 3. Auto-responsive image gallery */
    .auto-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 10px;
    }
    .photo { aspect-ratio: 1; background: #12121a; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 2rem; border: 1px solid #1e1e2e; }
    .photo.featured { grid-column: span 2; grid-row: span 2; font-size: 4rem; background: #052a0f; border-color: #22c55e; }
  </style>
</head>
<body>

  <section>
    <h3>1. Basic 3-column grid with span</h3>
    <div class="grid-3">
      <div class="cell">Item 1</div>
      <div class="cell span2">Item 2 (spans 2 columns)</div>
      <div class="cell">Item 3</div>
      <div class="cell">Item 4</div>
      <div class="cell">Item 5</div>
    </div>
  </section>

  <section>
    <h3>2. Named grid areas — page layout</h3>
    <div class="page-layout">
      <header class="pg-header">⚡ CodeGuru AI</header>
      <aside  class="pg-sidebar">📚 Courses<br>💻 Playground<br>📊 Progress</aside>
      <main   class="pg-content">Main content — takes all remaining space via grid-area: content</main>
      <footer class="pg-footer">© 2024 CodeGuru AI</footer>
    </div>
  </section>

  <section>
    <h3>3. Auto-responsive gallery (resize window!)</h3>
    <div class="auto-grid">
      <div class="photo featured">🏔️</div>
      <div class="photo">🌊</div>
      <div class="photo">🌸</div>
      <div class="photo">🦁</div>
      <div class="photo">🌅</div>
      <div class="photo">🏙️</div>
    </div>
  </section>

</body>
</html>`,
          explanation: `- \`repeat(3, 1fr)\` is shorthand for \`1fr 1fr 1fr\` — 3 equal columns
- Named areas make complex layouts readable — each string in quotes = one row
- \`grid-column: span 2\` makes an item occupy 2 columns from its current position
- \`repeat(auto-fit, minmax(100px, 1fr))\` — the most powerful one-liner in CSS: responsive columns with no media queries
- \`aspect-ratio: 1\` keeps items square regardless of width`,
        },
        exercise: {
          title: 'Blog Layout with Grid',
          instructions: 'Create a blog page layout using grid-template-areas: header (full width), a featured post (spans 2 of 3 columns), a sidebar (1 column), three smaller post cards in the main area, and a footer.',
          starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog Layout</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0f; color: #e2e8f0; font-family: Arial, sans-serif; padding: 20px; }

    .blog-layout {
      display: grid;
      grid-template-areas:
        "header  header  header"
        "feature feature sidebar"
        "p1      p2      sidebar"
        "footer  footer  footer";
      grid-template-columns: 1fr 1fr 220px;
      grid-template-rows: auto auto auto auto;
      gap: 16px;
      max-width: 1000px;
      margin: 0 auto;
    }

    /* Area assignments */
    .blog-header  { grid-area: header;  }
    .blog-feature { grid-area: feature; }
    .blog-sidebar { grid-area: sidebar; }
    .blog-post-1  { grid-area: p1;      }
    .blog-post-2  { grid-area: p2;      }
    .blog-footer  { grid-area: footer;  }

    /* Shared card style */
    .card { background: #12121a; border: 1px solid #1e1e2e; border-radius: 12px; padding: 18px; }
    .card h2, .card h3 { margin-bottom: 8px; }
    .card p { color: #94a3b8; font-size: 14px; line-height: 1.5; }
    .badge { display: inline-block; background: #052a0f; color: #22c55e; border-radius: 99px; padding: 3px 10px; font-size: 11px; font-weight: bold; margin-bottom: 10px; }
  </style>
</head>
<body>
  <div class="blog-layout">

    <header class="card blog-header" style="display:flex; justify-content:space-between; align-items:center;">
      <span style="color:#22c55e; font-weight:bold; font-size:1.1rem">⚡ CodeGuru Blog</span>
      <span style="color:#64748b; font-size:13px">Learn · Build · Grow</span>
    </header>

    <article class="card blog-feature" style="border-color:#22c55e">
      <span class="badge">🔥 Featured</span>
      <h2>Why Python is the Best First Language</h2>
      <p>Python reads like English, runs everywhere, and powers everything from AI to web apps. Here's why beginners should start with Python in 2024...</p>
    </article>

    <aside class="card blog-sidebar">
      <h3 style="color:#22c55e; margin-bottom:12px">Popular Tags</h3>
      <div style="display:flex; flex-wrap:wrap; gap:6px">
        <span class="badge">Python</span><span class="badge">JavaScript</span>
        <span class="badge">CSS</span><span class="badge">Beginner</span>
        <span class="badge">Career</span>
      </div>
      <h3 style="color:#22c55e; margin:16px 0 8px">Newsletter</h3>
      <p style="font-size:13px; color:#64748b; margin-bottom:10px">Get weekly coding tips.</p>
      <input style="width:100%; padding:8px; background:#1e1e2e; border:1px solid #2a2a3c; border-radius:6px; color:#e2e8f0; font-size:13px;" placeholder="your@email.com">
    </aside>

    <article class="card blog-post-1">
      <span class="badge">JavaScript</span>
      <h3>Mastering async/await</h3>
      <p>Say goodbye to callback hell. Learn modern async patterns that make your code clean and readable.</p>
    </article>

    <article class="card blog-post-2">
      <span class="badge">CSS</span>
      <h3>CSS Grid vs Flexbox</h3>
      <p>Both are powerful — but when do you use which? A practical guide with real examples.</p>
    </article>

    <footer class="card blog-footer" style="text-align:center; color:#64748b; font-size:13px;">
      © 2024 CodeGuru AI · Made with ❤️ for Indian learners
    </footer>

  </div>
</body>
</html>`,
          solutionCode: `<!-- Solution is the starter code — study grid-template-areas and how each element connects via grid-area -->`,
          hints: [
            '💡 Each element gets grid-area: name matching the name in grid-template-areas',
            '💡 "feature feature sidebar" means feature spans 2 columns, sidebar takes the third',
            '💡 grid-template-columns: 1fr 1fr 220px defines column widths',
          ],
        },
        quiz: {
          questions: [
            { id: 'css-m4-l1-q1', question: 'What does repeat(auto-fit, minmax(220px, 1fr)) do?', options: ['Creates exactly 220 columns', 'Creates as many columns as fit at minimum 220px, growing to fill remaining space', 'Creates one column of 220px', 'Repeats the grid automatically'], correct: 1, explanation: 'auto-fit fills the row with as many columns as possible. Each column is at least 220px wide and grows (1fr) to fill available space. This creates a fully responsive grid with zero media queries.' },
            { id: 'css-m4-l1-q2', question: 'What is the purpose of grid-template-areas?', options: ['To set column widths', 'To visually define the layout by naming areas — making complex layouts readable and maintainable', 'To add borders to grid areas', 'To control gap sizes'], correct: 1, explanation: 'grid-template-areas lets you define a visual map of your layout using names. Each child element then uses grid-area: name to be placed in the matching region. It makes complex layouts self-documenting.' },
          ],
        },
      },
      {
        id: 'css-m4-l2', moduleId: 'css-m4',
        title: 'Grid Advanced Techniques', order: 2, xpReward: 20, duration: '14 min',
        explanation: {
          title: 'Advanced Grid Patterns',
          content: `# Advanced Grid Techniques

## Implicit vs Explicit Grid

Lines you define are **explicit**. Lines grid creates automatically for overflow items are **implicit**.

\`\`\`css
.container {
  grid-template-columns: repeat(3, 1fr);  /* explicit: 3 columns */
  grid-auto-rows: 150px;                  /* implicit: auto-created rows are 150px */
  grid-auto-flow: row;                    /* default: fill row by row */
}
\`\`\`

## Alignment within Grid

\`\`\`css
/* Align ALL items */
.container {
  justify-items: center;   /* horizontal within cell */
  align-items: center;     /* vertical within cell */
}

/* Align THE GRID TRACKS in container */
.container {
  justify-content: center;    /* grid tracks horizontal */
  align-content: center;      /* grid tracks vertical */
}

/* Align ONE item */
.item {
  justify-self: end;
  align-self: start;
  place-self: center;  /* shorthand for both */
}
\`\`\`

## place-items shorthand

\`\`\`css
place-items: center;           /* both justify-items and align-items: center */
place-items: start end;        /* align-items: start, justify-items: end */
\`\`\`

## Dense packing — fill holes

\`\`\`css
grid-auto-flow: dense;
/* When items span multiple cells, grid fills gaps with smaller items */
\`\`\`

## minmax() for row heights

\`\`\`css
grid-template-rows: minmax(100px, auto);
/* Row is at least 100px, grows if content is taller */
\`\`\``,
        },
        codeExample: {
          title: 'Advanced Grid Patterns',
          language: 'html',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Advanced Grid</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0f; color: #e2e8f0; font-family: Arial, sans-serif; padding: 20px; display: flex; flex-direction: column; gap: 30px; }
    h3 { color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px; }

    /* Dense packing gallery */
    .masonry-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 80px;
      grid-auto-flow: dense;
      gap: 10px;
    }
    .grid-item {
      background: #12121a; border: 1px solid #1e1e2e; border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.5rem; color: #94a3b8;
    }
    .grid-item.tall  { grid-row:    span 2; background: #0a2540; border-color: #3b82f6; }
    .grid-item.wide  { grid-column: span 2; background: #052a0f; border-color: #22c55e; }
    .grid-item.big   { grid-column: span 2; grid-row: span 2; background: #1a0a3d; border-color: #7c3aed; font-size: 3rem; }

    /* Alignment demo */
    .align-grid {
      display: grid;
      grid-template-columns: repeat(3, 120px);
      grid-template-rows: repeat(2, 80px);
      gap: 8px;
      justify-content: center;
      background: #12121a; border-radius: 12px; padding: 16px;
    }
    .align-cell {
      background: #1e1e2e; border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
      font-size: 12px; color: #94a3b8;
    }
    .align-cell.special { background: #052a0f; color: #22c55e; justify-self: end; align-self: end; }

    /* Place-self demo */
    .place-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 80px;
      gap: 8px;
      place-items: center;
      background: #12121a; border-radius: 12px; padding: 16px;
    }
    .place-item {
      width: 50px; height: 50px; border-radius: 8px; background: #1e293b;
      display: flex; align-items: center; justify-content: center;
      font-weight: bold; font-size: 13px;
    }
    .place-item.start  { place-self: start;        background: #3b82f6; }
    .place-item.end    { place-self: end;           background: #22c55e; color: #000; }
    .place-item.center { place-self: center;        background: #7c3aed; }
  </style>
</head>
<body>

  <section>
    <h3>Dense packing — grid-auto-flow: dense fills gaps</h3>
    <div class="masonry-grid">
      <div class="grid-item big">🏆</div>
      <div class="grid-item">📚</div>
      <div class="grid-item tall">💻</div>
      <div class="grid-item">⚡</div>
      <div class="grid-item wide">🌐 Wide item</div>
      <div class="grid-item">🐍</div>
      <div class="grid-item">☕</div>
      <div class="grid-item tall">🤖</div>
      <div class="grid-item">🎯</div>
    </div>
  </section>

  <section>
    <h3>justify-content: center — grid centered in container</h3>
    <div class="align-grid">
      <div class="align-cell">1</div>
      <div class="align-cell">2</div>
      <div class="align-cell">3</div>
      <div class="align-cell">4</div>
      <div class="align-cell">5</div>
      <div class="align-cell special">special (justify/align-self: end)</div>
    </div>
  </section>

  <section>
    <h3>place-self on individual items</h3>
    <div class="place-grid">
      <div class="place-item start">start</div>
      <div class="place-item">normal</div>
      <div class="place-item end">end</div>
      <div class="place-item">normal</div>
      <div class="place-item center">center</div>
      <div class="place-item">normal</div>
    </div>
  </section>

</body>
</html>`,
          explanation: `- \`grid-auto-flow: dense\` tells the grid to fill holes with smaller items — useful for masonry-style galleries
- \`justify-content: center\` centers the grid tracks inside the container (not items inside cells)
- \`place-self: center\` on an individual item overrides container alignment for that one item
- \`place-items: center\` is shorthand for \`align-items: center; justify-items: center;\`
- Items spanning multiple cells (\`span 2\`) create interesting visual hierarchies`,
        },
        exercise: {
          title: 'Magazine-style Grid',
          instructions: 'Build a magazine-style grid with 4 columns. The first story spans 2 columns and 2 rows (featured). The second spans 2 columns (1 row). Fill the rest with regular 1×1 story cards. Use grid-auto-flow: dense.',
          starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Magazine Grid</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0f; color: #e2e8f0; font-family: Arial, sans-serif; padding: 24px; }

    .magazine {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: minmax(120px, auto);
      grid-auto-flow: dense;
      gap: 12px;
      max-width: 900px;
    }

    .story {
      background: #12121a; border: 1px solid #1e1e2e;
      border-radius: 12px; padding: 16px;
      display: flex; flex-direction: column; justify-content: flex-end;
    }

    .story.featured { grid-column: span 2; grid-row: span 2; background: #052a0f; border-color: #22c55e; justify-content: flex-start; }
    .story.wide     { grid-column: span 2; background: #0a2540; border-color: #3b82f6; }

    .story .tag   { font-size: 11px; font-weight: bold; padding: 3px 8px; border-radius: 99px; margin-bottom: 8px; display: inline-block; }
    .story h3     { font-size: 15px; margin-bottom: 6px; }
    .story p      { color: #64748b; font-size: 12px; line-height: 1.5; }
  </style>
</head>
<body>
  <h1 style="margin-bottom:16px">CodeGuru Blog</h1>

  <div class="magazine">
    <div class="story featured">
      <span class="tag" style="background:#22c55e20;color:#22c55e">🔥 Featured</span>
      <h3 style="font-size:1.3rem;margin-bottom:8px">Python in 2024: Why it Tops Every Chart</h3>
      <p>From AI to web to automation — Python has become the Swiss Army knife of programming. Here's what makes it so dominant.</p>
    </div>

    <div class="story wide">
      <span class="tag" style="background:#3b82f620;color:#3b82f6">JavaScript</span>
      <h3>React vs Vue vs Svelte: The 2024 Comparison</h3>
      <p>Which framework should you learn first?</p>
    </div>

    <div class="story"><span class="tag" style="background:#7c3aed20;color:#7c3aed">CSS</span><h3>Flexbox Cheat Sheet</h3></div>
    <div class="story"><span class="tag" style="background:#f59e0b20;color:#f59e0b">Career</span><h3>Getting Your First Dev Job</h3></div>
    <div class="story"><span class="tag" style="background:#22c55e20;color:#22c55e">Python</span><h3>List Comprehensions Explained</h3></div>
    <div class="story"><span class="tag" style="background:#3b82f620;color:#3b82f6">Node.js</span><h3>Building REST APIs</h3></div>
  </div>
</body>
</html>`,
          solutionCode: `<!-- Solution is the starter code — study how .featured spans 2 columns and 2 rows, and how dense packing fills the grid -->`,
          hints: [
            '💡 .featured { grid-column: span 2; grid-row: span 2; }',
            '💡 .wide { grid-column: span 2; } — spans 2 columns, 1 row',
            '💡 grid-auto-flow: dense fills any gaps created by spanning items',
          ],
        },
        quiz: {
          questions: [
            { id: 'css-m4-l2-q1', question: 'What does grid-auto-flow: dense do?', options: ['Makes the grid faster', 'Fills gaps in the grid by placing smaller items into holes left by spanning items', 'Makes all rows the same height', 'Prevents items from spanning multiple cells'], correct: 1, explanation: 'By default, grid leaves holes when items skip ahead. dense packing backfills those holes with items that fit, creating a tighter, more compact layout — great for masonry-style galleries.' },
            { id: 'css-m4-l2-q2', question: 'What is the difference between justify-items and justify-content in Grid?', options: ['No difference', 'justify-items aligns items within their cells; justify-content aligns the grid tracks within the container', 'justify-content is for flexbox only', 'justify-items only works on the first item'], correct: 1, explanation: 'justify-items controls how items are positioned within their individual grid cells. justify-content controls how the grid tracks (columns) as a whole are positioned within the grid container.' },
          ],
        },
      },
      {
        id: 'css-m4-l3', moduleId: 'css-m4',
        title: 'CSS Variables & Custom Properties', order: 3, xpReward: 25, duration: '14 min',
        explanation: {
          title: 'CSS Custom Properties (Variables)',
          content: `# CSS Variables — Custom Properties

CSS variables (officially called **custom properties**) let you store values and reuse them throughout your CSS. They're the foundation of design systems and theming.

## Declaring Variables

\`\`\`css
/* Declare on :root so they're available everywhere */
:root {
  --color-primary:   #22c55e;
  --color-bg:        #0a0a0f;
  --color-text:      #e2e8f0;
  --color-muted:     #64748b;
  --font-size-base:  16px;
  --radius:          12px;
  --spacing-md:      16px;
  --spacing-lg:      24px;
}
\`\`\`

## Using Variables

\`\`\`css
.button {
  background:    var(--color-primary);
  border-radius: var(--radius);
  padding:       var(--spacing-md);
  font-size:     var(--font-size-base);
}

/* With fallback */
color: var(--color-accent, #3b82f6);  /* uses #3b82f6 if --color-accent is undefined */
\`\`\`

## Overriding Variables Locally

\`\`\`css
:root { --color-btn: #22c55e; }

.danger-btn { --color-btn: #ef4444; }  /* override in scope */

.btn { background: var(--color-btn); }  /* uses local override */
\`\`\`

## Dark Mode with Variables

\`\`\`css
:root { --bg: #ffffff; --text: #000000; }

@media (prefers-color-scheme: dark) {
  :root { --bg: #0a0a0f; --text: #e2e8f0; }
}

body { background: var(--bg); color: var(--text); }
\`\`\`

## Calculating with Variables

\`\`\`css
:root { --base-size: 8px; }

.large  { padding: calc(var(--base-size) * 3); }  /* 24px */
.small  { padding: calc(var(--base-size) * 1); }  /* 8px */
\`\`\``,
        },
        codeExample: {
          title: 'CSS Variables and Theming',
          language: 'html',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Variables</title>
  <style>
    /* ── Design Tokens ── */
    :root {
      /* Colors */
      --bg:          #0a0a0f;
      --bg-card:     #12121a;
      --bg-card-2:   #18182a;
      --border:      #1e1e2e;
      --text:        #e2e8f0;
      --text-muted:  #64748b;
      --primary:     #22c55e;
      --accent-blue: #3b82f6;
      --accent-warn: #f59e0b;
      --danger:      #ef4444;

      /* Spacing scale */
      --space-1: 4px;  --space-2: 8px;
      --space-3: 12px; --space-4: 16px;
      --space-5: 24px; --space-6: 32px;

      /* Typography */
      --text-sm: 13px; --text-base: 15px; --text-lg: 18px; --text-xl: 24px;

      /* Shape */
      --radius-sm: 6px; --radius-md: 10px; --radius-lg: 16px; --radius-pill: 99px;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: var(--bg); color: var(--text); font-family: Arial, sans-serif; padding: var(--space-5); display: flex; flex-direction: column; gap: var(--space-5); }

    /* Button system */
    .btn {
      display: inline-flex; align-items: center; gap: var(--space-2);
      padding: var(--space-2) var(--space-4);
      border: none; border-radius: var(--radius-md);
      font-size: var(--text-sm); font-weight: bold; cursor: pointer;
      background: var(--btn-bg, var(--bg-card-2));
      color: var(--btn-color, var(--text));
    }
    .btn-primary { --btn-bg: var(--primary); --btn-color: #000; }
    .btn-blue    { --btn-bg: var(--accent-blue); --btn-color: #fff; }
    .btn-danger  { --btn-bg: var(--danger); --btn-color: #fff; }

    /* Card system */
    .card {
      background: var(--bg-card); border: 1px solid var(--border);
      border-radius: var(--radius-lg); padding: var(--space-5);
    }
    .card-title { font-size: var(--text-lg); margin-bottom: var(--space-2); }
    .card-body  { color: var(--text-muted); font-size: var(--text-sm); line-height: 1.6; }

    /* Badge variants using variable overrides */
    .badge {
      display: inline-block; padding: var(--space-1) var(--space-3);
      border-radius: var(--radius-pill); font-size: 11px; font-weight: bold;
      background: var(--badge-bg); color: var(--badge-text);
    }
    .badge-green  { --badge-bg: #052a0f; --badge-text: var(--primary); }
    .badge-blue   { --badge-bg: #0a2540; --badge-text: var(--accent-blue); }
    .badge-yellow { --badge-bg: #1a1200; --badge-text: var(--accent-warn); }

    .row { display: flex; gap: var(--space-3); flex-wrap: wrap; align-items: center; }
  </style>
</head>
<body>

  <h1 style="color: var(--primary); font-size: var(--text-xl)">CSS Variables Design System</h1>

  <div class="card">
    <div class="card-title">Button Variants (all use --btn-bg variable)</div>
    <div class="row" style="margin-top: var(--space-3)">
      <button class="btn btn-primary">✅ Confirm</button>
      <button class="btn btn-blue">📤 Submit</button>
      <button class="btn btn-danger">🗑 Delete</button>
      <button class="btn">Default</button>
    </div>
  </div>

  <div class="card">
    <div class="card-title">Badge Variants</div>
    <div class="row" style="margin-top: var(--space-3)">
      <span class="badge badge-green">Beginner</span>
      <span class="badge badge-blue">Pro</span>
      <span class="badge badge-yellow">⚡ New</span>
    </div>
  </div>

  <div class="card">
    <div class="card-title">Spacing Scale (var(--space-*))</div>
    <div class="card-body">
      All components use consistent spacing from the :root design tokens.
      Changing --space-4 in :root updates spacing everywhere at once.
    </div>
  </div>

</body>
</html>`,
          explanation: `- Define ALL design tokens in \`:root\` — change once, update everywhere
- Variable override: \`.btn-primary { --btn-bg: var(--primary); }\` sets a local value for that class
- The \`var(--name, fallback)\` syntax provides a default if the variable isn't defined
- CSS variables respond to JavaScript: \`element.style.setProperty('--primary', '#ff0000')\`
- This pattern is exactly how CodeGuru AI's dark theme is built!`,
        },
        exercise: {
          title: 'Themed Component Library',
          instructions: 'Create a mini design system with CSS variables. Define a :root with color, spacing, and radius tokens. Build a Card component, a Badge component, and an Alert component (success/warning/error variants) all using variables.',
          starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Design System</title>
  <style>
    :root {
      --bg:        #0a0a0f;
      --bg-card:   #12121a;
      --border:    #1e1e2e;
      --text:      #e2e8f0;
      --muted:     #64748b;
      --green:     #22c55e;
      --yellow:    #f59e0b;
      --red:       #ef4444;
      --radius:    12px;
      --space:     16px;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: var(--bg); color: var(--text); font-family: Arial, sans-serif; padding: var(--space); display: flex; flex-direction: column; gap: var(--space); }

    .card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: var(--space);
    }

    .badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 99px;
      font-size: 12px;
      font-weight: bold;
      background: var(--badge-bg, var(--border));
      color: var(--badge-color, var(--muted));
    }
    .badge-success { --badge-bg: #052a0f; --badge-color: var(--green); }
    .badge-warn    { --badge-bg: #1a1100; --badge-color: var(--yellow); }
    .badge-danger  { --badge-bg: #1a0505; --badge-color: var(--red); }

    .alert {
      border-left: 4px solid var(--alert-color, var(--border));
      background: var(--alert-bg, var(--bg-card));
      padding: var(--space);
      border-radius: 0 var(--radius) var(--radius) 0;
      font-size: 14px;
      color: var(--alert-color, var(--muted));
    }
    .alert-success { --alert-color: var(--green);  --alert-bg: #052a0f; }
    .alert-warn    { --alert-color: var(--yellow); --alert-bg: #1a1100; }
    .alert-danger  { --alert-color: var(--red);    --alert-bg: #1a0505; }
  </style>
</head>
<body>

  <div class="card">
    <h3 style="margin-bottom:10px">Course Badges</h3>
    <div style="display:flex; gap:8px; flex-wrap:wrap">
      <span class="badge badge-success">✓ Completed</span>
      <span class="badge badge-warn">⏳ In Progress</span>
      <span class="badge badge-danger">🔒 Locked</span>
      <span class="badge">Default</span>
    </div>
  </div>

  <div class="alert alert-success">✅ Lesson completed! You earned 10 XP.</div>
  <div class="alert alert-warn">⚠️ Your streak is at risk — complete a lesson today!</div>
  <div class="alert alert-danger">❌ Payment failed. Please try again.</div>

</body>
</html>`,
          solutionCode: `<!-- Solution is the starter code — study how --badge-bg and --alert-color variables are overridden per variant -->`,
          hints: [
            '💡 Define color tokens in :root, then reference them in components',
            '💡 Per-variant override: .badge-success { --badge-bg: ...; --badge-color: ...; }',
            '💡 var(--name, fallback) provides a default when the variable is not set',
          ],
        },
        quiz: {
          questions: [
            { id: 'css-m4-l3-q1', question: 'Why should you declare CSS variables on :root?', options: ['It makes them faster', ':root has the highest specificity, making variables available to all elements on the page', 'It is the only valid place', 'It makes the file smaller'], correct: 1, explanation: ':root selects the root element (html) and has a very high specificity. Variables declared here cascade down to every element on the page, making them globally available.' },
            { id: 'css-m4-l3-q2', question: 'What does var(--color, #ff0000) do?', options: ['Creates a new variable named #ff0000', 'Uses --color if defined, falls back to #ff0000 if --color is not defined', 'Sets --color to #ff0000', 'Requires both values'], correct: 1, explanation: 'The second argument to var() is a fallback value. If --color is defined and valid, it uses that. If --color is not defined or has an invalid value, it uses the fallback #ff0000.' },
          ],
        },
      },
    ],
  },

  // ════════════════════════════════════════════════
  //  MODULE 5 — Animations & Transitions
  // ════════════════════════════════════════════════
  {
    id: 'css-m5', courseId: 'html-css',
    title: 'Animations & Transitions',
    description: 'Bring your pages to life. Learn CSS transitions, keyframe animations, and transform effects.',
    level: 'beginner', order: 5, icon: '✨', xpReward: 150, locked: true,
    lessons: [
      {
        id: 'css-m5-l1', moduleId: 'css-m5',
        title: 'CSS Transitions', order: 1, xpReward: 15, duration: '12 min',
        explanation: {
          title: 'Smooth State Changes with Transitions',
          content: `# CSS Transitions

Transitions animate a property from one value to another — typically triggered by hover, focus, or class changes.

## Basic Syntax

\`\`\`css
.button {
  background: #22c55e;
  /* property  duration  timing-function  delay */
  transition: background 0.3s ease 0s;
}

.button:hover {
  background: #16a34a;   /* transition animates this change */
}
\`\`\`

## Transition Properties

\`\`\`css
transition-property:  background, transform;   /* what to animate */
transition-duration:  0.3s;                    /* how long */
transition-timing-function: ease;              /* speed curve */
transition-delay: 0.1s;                        /* wait before starting */

/* Shorthand */
transition: all 0.3s ease;                    /* animate ALL properties */
transition: background 0.2s, transform 0.3s;  /* multiple, different durations */
\`\`\`

## Timing Functions

| Value | Effect |
|-------|--------|
| \`ease\` | Slow start, fast middle, slow end (default) |
| \`linear\` | Constant speed |
| \`ease-in\` | Slow start, fast end |
| \`ease-out\` | Fast start, slow end (most natural-feeling) |
| \`ease-in-out\` | Slow start and end |
| \`cubic-bezier()\` | Custom curve |

## What can be transitioned?

\`\`\`css
/* ✅ These transition smoothly */
color, background-color, opacity, transform,
width, height, padding, margin, border-color,
box-shadow, font-size, border-radius

/* ❌ These don't transition (binary) */
display: none → block   /* use opacity + visibility instead */
\`\`\``,
        },
        codeExample: {
          title: 'Transitions in Practice',
          language: 'html',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Transitions</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0f; color: #e2e8f0; font-family: Arial, sans-serif; padding: 30px; display: flex; flex-direction: column; gap: 24px; }
    h3 { color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px; }

    /* 1. Button with multiple transitions */
    .btn {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 12px 24px; background: #22c55e; color: #000;
      border: none; border-radius: 10px; font-weight: bold; font-size: 15px;
      cursor: pointer;
      transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
    }
    .btn:hover {
      background: #16a34a;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(34,197,94,0.35);
    }
    .btn:active { transform: translateY(0); box-shadow: none; }

    /* 2. Card lift on hover */
    .card {
      background: #12121a; border: 1px solid #1e1e2e;
      border-radius: 14px; padding: 20px; max-width: 280px;
      transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
    }
    .card:hover {
      border-color: #22c55e;
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(0,0,0,0.4);
    }
    .card h4 { margin-bottom: 8px; }
    .card p  { color: #64748b; font-size: 14px; }

    /* 3. Link underline animation */
    .fancy-link {
      color: #e2e8f0; text-decoration: none; font-size: 16px;
      position: relative; display: inline-block;
    }
    .fancy-link::after {
      content: ''; position: absolute; bottom: -2px; left: 0;
      width: 0; height: 2px; background: #22c55e;
      transition: width 0.3s ease;
    }
    .fancy-link:hover::after { width: 100%; }
    .fancy-link:hover { color: #22c55e; transition: color 0.3s; }

    /* 4. Opacity/visibility fade */
    .notification {
      background: #052a0f; border: 1px solid #22c55e; border-radius: 10px;
      padding: 14px 20px; color: #22c55e; font-size: 14px;
      opacity: 0; visibility: hidden; max-width: 320px;
      transition: opacity 0.4s ease, visibility 0.4s ease;
    }
    .notification.show { opacity: 1; visibility: visible; }
    .show-btn { cursor: pointer; padding: 8px 16px; background: #1e1e2e; border: 1px solid #2a2a3c; border-radius: 8px; color: #e2e8f0; font-size: 13px; }
  </style>
  <script>
    function toggleNotification() {
      document.getElementById('notif').classList.toggle('show');
    }
  </script>
</head>
<body>

  <section>
    <h3>1. Button — background + transform + shadow transition</h3>
    <button class="btn">🚀 Start Learning — hover me!</button>
  </section>

  <section>
    <h3>2. Card lift on hover</h3>
    <div class="card">
      <h4>Python Basics</h4>
      <p>Hover to see the lift effect with border color change and shadow.</p>
    </div>
  </section>

  <section>
    <h3>3. Animated underline on links</h3>
    <a class="fancy-link" href="#">Hover over this link to see the underline grow</a>
  </section>

  <section>
    <h3>4. Fade in/out with opacity + visibility</h3>
    <button class="show-btn" onclick="toggleNotification()">Toggle Notification</button>
    <div id="notif" class="notification" style="margin-top:12px">
      ✅ Lesson completed! You earned +10 XP.
    </div>
  </section>

</body>
</html>`,
          explanation: `- List multiple properties in \`transition\` separated by commas, each with its own duration
- \`transform: translateY(-2px)\` lifts an element without affecting layout (GPU-accelerated!)
- The \`::after\` pseudo-element trick creates an animated underline that grows on hover
- Never use \`transition: all\` in production — it's expensive and can cause unexpected animations
- Fade: animate \`opacity\` AND \`visibility\` together — opacity alone still leaves the element clickable`,
        },
        exercise: {
          title: 'Interactive Card Gallery',
          instructions: 'Build 3 course cards. Each should transition on hover: border color changes to the course color, card lifts with translateY(-6px), a box-shadow appears, and the card title color changes. Add a transition on the card image emoji that scales up.',
          starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Transition Cards</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0f; color: #e2e8f0; font-family: Arial, sans-serif; padding: 30px; }

    .cards { display: flex; gap: 20px; flex-wrap: wrap; }

    .course-card {
      flex: 1; min-width: 200px; max-width: 260px;
      background: #12121a; border: 2px solid #1e1e2e;
      border-radius: 16px; padding: 24px; cursor: pointer;
      transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    }

    .course-card:hover {
      border-color: var(--course-color);
      transform: translateY(-6px);
      box-shadow: 0 16px 40px rgba(0,0,0,0.5);
    }

    .course-card .emoji {
      font-size: 3rem; margin-bottom: 14px; display: block;
      transition: transform 0.3s ease;
    }
    .course-card:hover .emoji { transform: scale(1.2); }

    .course-card h3 {
      margin-bottom: 8px; font-size: 17px;
      transition: color 0.3s ease;
    }
    .course-card:hover h3 { color: var(--course-color); }
    .course-card p { color: #64748b; font-size: 13px; line-height: 1.5; }
  </style>
</head>
<body>
  <h1 style="margin-bottom:24px; color:#22c55e">Course Gallery</h1>

  <div class="cards">
    <div class="course-card" style="--course-color: #3776AB">
      <span class="emoji">🐍</span>
      <h3>Python</h3>
      <p>From zero to building real applications. The most beginner-friendly language.</p>
    </div>

    <div class="course-card" style="--course-color: #f7df1e">
      <span class="emoji">⚡</span>
      <h3>JavaScript</h3>
      <p>Power the web. Build interactive pages and full-stack applications.</p>
    </div>

    <div class="course-card" style="--course-color: #e34f26">
      <span class="emoji">🌐</span>
      <h3>HTML/CSS</h3>
      <p>Structure and style the web. Essential foundation for all web developers.</p>
    </div>
  </div>
</body>
</html>`,
          solutionCode: `<!-- Solution is the starter code — it uses CSS custom property --course-color per card for the themed hover effects -->`,
          hints: [
            '💡 transition on .course-card: border-color, transform, box-shadow',
            '💡 transition on .emoji: transform (for scale)',
            '💡 --course-color is set inline per card, used by the :hover rules',
          ],
        },
        quiz: {
          questions: [
            { id: 'css-m5-l1-q1', question: 'Which transition timing function feels most natural for UI elements?', options: ['linear', 'ease-in', 'ease-out', 'step-start'], correct: 2, explanation: 'ease-out starts fast and slows down, mimicking how physical objects decelerate. This feels most natural for UI elements like menus opening, modals appearing, and cards lifting.' },
            { id: 'css-m5-l1-q2', question: 'Why should you avoid "transition: all 0.3s"?', options: ['It does not work', 'It animates ALL changing properties including ones you do not want animated, wastes performance', 'It is too slow', 'It only works in Chrome'], correct: 1, explanation: 'transition: all catches every property change — including layout properties like height or width that may cause expensive repaints. Always specify exactly which properties to transition.' },
          ],
        },
      },
      {
        id: 'css-m5-l2', moduleId: 'css-m5',
        title: 'CSS Keyframe Animations', order: 2, xpReward: 20, duration: '14 min',
        explanation: {
          title: 'Complex Animations with @keyframes',
          content: `# CSS @keyframes Animations

While transitions animate between two states, **keyframe animations** can have multiple steps and run automatically — no hover needed.

## Defining a Keyframe Animation

\`\`\`css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* With multiple stops */
@keyframes pulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.05); }
  100% { transform: scale(1); }
}
\`\`\`

## Using an Animation

\`\`\`css
.element {
  animation-name:            fadeIn;
  animation-duration:        0.5s;
  animation-timing-function: ease-out;
  animation-delay:           0.2s;
  animation-iteration-count: 1;        /* or infinite */
  animation-direction:       normal;   /* or reverse, alternate */
  animation-fill-mode:       forwards; /* keep final state */

  /* Shorthand */
  animation: fadeIn 0.5s ease-out 0.2s 1 normal forwards;
}
\`\`\`

## animation-fill-mode

\`\`\`css
animation-fill-mode: none;       /* default — returns to start */
animation-fill-mode: forwards;   /* holds last keyframe state */
animation-fill-mode: backwards;  /* applies first keyframe during delay */
animation-fill-mode: both;       /* combines both */
\`\`\`

## Staggered animations with delay

\`\`\`css
.item:nth-child(1) { animation-delay: 0.1s; }
.item:nth-child(2) { animation-delay: 0.2s; }
.item:nth-child(3) { animation-delay: 0.3s; }
\`\`\`

## Pausing animations

\`\`\`css
.element:hover {
  animation-play-state: paused;
}
\`\`\``,
        },
        codeExample: {
          title: 'Keyframe Animations',
          language: 'html',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Animations</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0f; color: #e2e8f0; font-family: Arial, sans-serif; padding: 30px; display: flex; flex-direction: column; gap: 30px; }
    h3 { color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px; }

    /* Keyframe definitions */
    @keyframes fadeSlideIn {
      from { opacity: 0; transform: translateY(30px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50%       { transform: scale(1.08); opacity: 0.8; }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      40%       { transform: translateY(-12px); }
      60%       { transform: translateY(-6px); }
    }
    @keyframes shimmer {
      0%   { background-position: -200% 0; }
      100% { background-position:  200% 0; }
    }
    @keyframes typewriter {
      from { width: 0; }
      to   { width: 100%; }
    }

    /* 1. Staggered slide-in cards */
    .card-row { display: flex; gap: 14px; }
    .anim-card {
      flex: 1; background: #12121a; border: 1px solid #1e1e2e;
      border-radius: 12px; padding: 18px; opacity: 0;
      animation: fadeSlideIn 0.5s ease-out forwards;
    }
    .anim-card:nth-child(1) { animation-delay: 0.1s; }
    .anim-card:nth-child(2) { animation-delay: 0.25s; }
    .anim-card:nth-child(3) { animation-delay: 0.4s; }
    .anim-card h4 { color: #22c55e; margin-bottom: 6px; }
    .anim-card p  { color: #64748b; font-size: 13px; }

    /* 2. Loading spinner */
    .spinner {
      width: 40px; height: 40px; border-radius: 50%;
      border: 3px solid #1e1e2e; border-top-color: #22c55e;
      animation: spin 0.8s linear infinite;
    }

    /* 3. Pulse */
    .pulse-dot {
      width: 14px; height: 14px; border-radius: 50%;
      background: #22c55e;
      animation: pulse 1.5s ease-in-out infinite;
      display: inline-block;
    }

    /* 4. Bouncing icons */
    .bounce-row { display: flex; gap: 16px; }
    .bounce-icon {
      font-size: 2rem;
      animation: bounce 1s ease-in-out infinite;
      display: inline-block;
    }
    .bounce-icon:nth-child(2) { animation-delay: 0.15s; }
    .bounce-icon:nth-child(3) { animation-delay: 0.30s; }

    /* 5. Skeleton loading */
    .skeleton {
      background: linear-gradient(90deg, #1e1e2e 25%, #2a2a3c 50%, #1e1e2e 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
      border-radius: 8px;
    }
    .skeleton-line { height: 14px; margin-bottom: 8px; }
    .skeleton-line.short { width: 60%; }
  </style>
</head>
<body>

  <section>
    <h3>1. Staggered fade-in cards</h3>
    <div class="card-row">
      <div class="anim-card"><h4>🐍 Python</h4><p>Beginner friendly language</p></div>
      <div class="anim-card"><h4>⚡ JavaScript</h4><p>Language of the web</p></div>
      <div class="anim-card"><h4>🌐 HTML/CSS</h4><p>Web foundations</p></div>
    </div>
  </section>

  <section>
    <h3>2. Loading spinner</h3>
    <div class="spinner"></div>
  </section>

  <section>
    <h3>3. Pulse — online indicator</h3>
    <div style="display:flex; align-items:center; gap:10px">
      <div class="pulse-dot"></div>
      <span style="color:#22c55e; font-size:14px">AI Tutor Online</span>
    </div>
  </section>

  <section>
    <h3>4. Bouncing icons with staggered delay</h3>
    <div class="bounce-row">
      <span class="bounce-icon">🐍</span>
      <span class="bounce-icon">⚡</span>
      <span class="bounce-icon">🌐</span>
    </div>
  </section>

  <section>
    <h3>5. Skeleton loading placeholder</h3>
    <div style="background:#12121a; border-radius:12px; padding:20px; max-width:300px">
      <div class="skeleton skeleton-line" style="height:18px; margin-bottom:12px"></div>
      <div class="skeleton skeleton-line"></div>
      <div class="skeleton skeleton-line"></div>
      <div class="skeleton skeleton-line short"></div>
    </div>
  </section>

</body>
</html>`,
          explanation: `- \`animation-fill-mode: forwards\` keeps the final keyframe state — essential for fade-in where opacity starts at 0
- Stagger animations by giving each item a slightly longer \`animation-delay\`
- The spinner uses \`border-top-color\` on a circle — one colored border creates the spinner look
- Skeleton loading uses a gradient that moves — much better UX than a blank page
- \`animation: bounce 1s ease-in-out infinite\` runs forever; \`1 forwards\` runs once and holds`,
        },
        exercise: {
          title: 'XP Earned Animation',
          instructions: 'Recreate the CodeGuru AI XP popup animation: a "+10 XP ⭐" text that starts invisible, flies upward and fades in for the first half, then continues up and fades out. Use @keyframes with 0%, 40%, and 100% stops.',
          starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>XP Animation</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0f; color: #e2e8f0; font-family: Arial, sans-serif; padding: 40px; display: flex; flex-direction: column; align-items: center; gap: 30px; }

    @keyframes xpFloat {
      0%   { transform: translateY(0);    opacity: 0; }
      30%  { transform: translateY(-20px); opacity: 1; }
      100% { transform: translateY(-70px); opacity: 0; }
    }

    .xp-popup {
      font-size: 1.4rem;
      font-weight: 800;
      color: #f59e0b;
      animation: xpFloat 1.8s ease-out forwards;
      text-shadow: 0 0 12px rgba(245,158,11,0.7);
      user-select: none;
    }

    @keyframes completePulse {
      0%   { transform: scale(0.8); opacity: 0; }
      60%  { transform: scale(1.1); opacity: 1; }
      100% { transform: scale(1);   opacity: 1; }
    }

    .complete-badge {
      background: #22c55e; color: #000;
      font-weight: 800; font-size: 1.1rem;
      padding: 14px 28px; border-radius: 14px;
      animation: completePulse 0.5s ease-out 0.2s both;
      box-shadow: 0 0 24px rgba(34,197,94,0.4);
    }

    @keyframes streakFlame {
      0%, 100% { transform: scale(1) rotate(-3deg); }
      50%       { transform: scale(1.15) rotate(3deg); }
    }
    .streak { font-size: 2.5rem; animation: streakFlame 0.8s ease-in-out infinite; display: inline-block; }

    @keyframes levelUp {
      0%   { transform: scale(0) rotate(-180deg); opacity: 0; }
      70%  { transform: scale(1.2) rotate(10deg);  opacity: 1; }
      100% { transform: scale(1)   rotate(0deg);   opacity: 1; }
    }
    .level-up-badge {
      background: linear-gradient(135deg, #7c3aed, #3b82f6);
      color: #fff; font-weight: 800; font-size: 1.1rem;
      padding: 12px 24px; border-radius: 14px;
      animation: levelUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
    }
  </style>
</head>
<body>

  <div>
    <p style="color:#64748b; font-size:13px; margin-bottom:16px">XP Float (one-shot, auto-play)</p>
    <div class="xp-popup">+10 XP ⭐</div>
  </div>

  <div class="complete-badge">✓ Lesson Complete!</div>

  <div>
    <p style="color:#64748b; font-size:13px; margin-bottom:10px">Streak flame (infinite)</p>
    <div class="streak">🔥</div>
  </div>

  <div class="level-up-badge">🎉 Level Up! You're Level 5</div>

</body>
</html>`,
          solutionCode: `<!-- Solution is the starter code — study how 0%/30%/100% keyframes create the float-and-fade effect -->`,
          hints: [
            '💡 Start at opacity: 0, peak at opacity: 1 around 30%, end at opacity: 0',
            '💡 translateY moves negative (upward) — start at 0, end at -70px',
            '💡 animation-fill-mode: forwards keeps the element at the final opacity: 0 state',
          ],
        },
        quiz: {
          questions: [
            { id: 'css-m5-l2-q1', question: 'What does animation-fill-mode: forwards do?', options: ['Plays the animation forward (normal direction)', 'Keeps the element at the final keyframe state after animation ends', 'Makes the animation run backwards', 'Fills the element with the animation color'], correct: 1, explanation: 'Without forwards, the element snaps back to its original state when the animation ends. forwards keeps the element stuck at the 100% keyframe values permanently after the animation completes.' },
            { id: 'css-m5-l2-q2', question: 'How do you create staggered animations for multiple elements?', options: ['Use animation-count', 'Give each element a different animation-delay', 'Use different @keyframes for each element', 'Use animation-stagger property'], correct: 1, explanation: 'Stagger by giving each element a progressively longer animation-delay. Combined with nth-child selectors, this creates a wave effect where each element starts its animation slightly after the previous one.' },
          ],
        },
      },
      {
        id: 'css-m5-l3', moduleId: 'css-m5',
        title: 'CSS Transforms', order: 3, xpReward: 25, duration: '13 min',
        explanation: {
          title: 'Moving, Scaling, Rotating with Transform',
          content: `# CSS Transform

\`transform\` moves, rotates, scales, and skews elements **without affecting layout** — other elements don't move.

## Transform Functions

\`\`\`css
/* Translate — move */
transform: translateX(50px);      /* move right 50px */
transform: translateY(-20px);     /* move up 20px */
transform: translate(50px, -20px); /* move right and up */
transform: translate(-50%, -50%); /* move left/up by 50% of own size */

/* Scale — resize */
transform: scale(1.5);            /* 150% of original size */
transform: scale(0.5);            /* 50% of original size */
transform: scaleX(2);             /* double width only */

/* Rotate */
transform: rotate(45deg);         /* clockwise 45° */
transform: rotate(-90deg);        /* counter-clockwise 90° */

/* Skew */
transform: skewX(15deg);          /* lean horizontally */

/* Multiple transforms (space-separated) */
transform: translate(10px, -5px) rotate(45deg) scale(1.1);
\`\`\`

## transform-origin — pivot point

\`\`\`css
transform-origin: center;         /* default */
transform-origin: top left;       /* rotate from corner */
transform-origin: 50% 100%;       /* rotate from bottom center */
\`\`\`

## The absolute centering trick

\`\`\`css
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  /* move back half own width/height */
}
\`\`\`

## 3D Transforms

\`\`\`css
transform: perspective(500px) rotateY(30deg);
transform: rotateX(45deg);
transform: rotateZ(45deg);     /* same as rotate() */
\`\`\``,
        },
        codeExample: {
          title: 'Transform Effects',
          language: 'html',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Transforms</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0f; color: #e2e8f0; font-family: Arial, sans-serif; padding: 30px; display: flex; flex-direction: column; gap: 30px; }
    h3 { color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px; }

    /* 1. Hover transforms */
    .transform-row { display: flex; gap: 16px; flex-wrap: wrap; }
    .transform-box {
      width: 80px; height: 80px; background: #12121a;
      border: 2px solid #1e1e2e; border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.8rem; cursor: pointer;
      transition: transform 0.3s ease, border-color 0.3s ease;
    }
    .box-lift:hover    { transform: translateY(-12px); border-color: #22c55e; }
    .box-scale:hover   { transform: scale(1.25); border-color: #3b82f6; }
    .box-rotate:hover  { transform: rotate(45deg); border-color: #f59e0b; }
    .box-skew:hover    { transform: skewX(-15deg); border-color: #7c3aed; }
    .box-combo:hover   { transform: translateY(-8px) scale(1.1) rotate(-5deg); border-color: #ef4444; }
    p.label { font-size: 11px; color: #3a4560; text-align: center; margin-top: 4px; }

    /* 2. Card flip */
    .flip-container {
      width: 200px; height: 120px;
      perspective: 800px; cursor: pointer;
    }
    .flip-inner {
      width: 100%; height: 100%;
      position: relative;
      transition: transform 0.6s ease;
      transform-style: preserve-3d;
    }
    .flip-container:hover .flip-inner { transform: rotateY(180deg); }
    .flip-front, .flip-back {
      position: absolute; inset: 0;
      border-radius: 12px; padding: 16px;
      display: flex; align-items: center; justify-content: center;
      font-weight: bold; backface-visibility: hidden;
    }
    .flip-front { background: #12121a; border: 1px solid #1e1e2e; color: #22c55e; font-size: 2rem; }
    .flip-back  { background: #052a0f; border: 1px solid #22c55e; color: #22c55e; transform: rotateY(180deg); font-size: 14px; text-align: center; }

    /* 3. Absolute centering */
    .center-demo {
      position: relative; height: 120px;
      background: #12121a; border: 1px solid #1e1e2e; border-radius: 12px;
    }
    .center-target {
      position: absolute; top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      background: #22c55e; color: #000;
      padding: 10px 20px; border-radius: 8px; font-weight: bold; white-space: nowrap;
    }
  </style>
</head>
<body>

  <section>
    <h3>1. Hover transform effects — hover each box</h3>
    <div class="transform-row">
      <div><div class="transform-box box-lift">⬆️</div><p class="label">translateY</p></div>
      <div><div class="transform-box box-scale">🔍</div><p class="label">scale</p></div>
      <div><div class="transform-box box-rotate">🔄</div><p class="label">rotate</p></div>
      <div><div class="transform-box box-skew">📐</div><p class="label">skewX</p></div>
      <div><div class="transform-box box-combo">✨</div><p class="label">combo</p></div>
    </div>
  </section>

  <section>
    <h3>2. 3D card flip — hover to flip</h3>
    <div class="flip-container">
      <div class="flip-inner">
        <div class="flip-front">🐍</div>
        <div class="flip-back">Python Programming<br>Beginner Friendly</div>
      </div>
    </div>
  </section>

  <section>
    <h3>3. Absolute centering with translate(-50%, -50%)</h3>
    <div class="center-demo">
      <div class="center-target">Perfectly Centered!</div>
    </div>
  </section>

</body>
</html>`,
          explanation: `- \`transform\` never affects the document flow — other elements don't shift
- The card flip uses \`perspective\` (3D depth), \`rotateY\`, and \`backface-visibility: hidden\`
- \`transform: translate(-50%, -50%)\` after \`top:50%; left:50%\` = perfect centering trick
- Combining transforms in one declaration: \`transform: translateY(-8px) scale(1.1) rotate(-5deg)\`
- \`transform-style: preserve-3d\` is required for child elements to participate in 3D space`,
        },
        exercise: {
          title: 'Interactive Icon Buttons',
          instructions: 'Create 4 icon buttons. On hover: button 1 lifts and glows (translateY + box-shadow). Button 2 rotates its icon 360 degrees. Button 3 scales up the icon. Button 4 does a wobbly animation (skewX back and forth via @keyframes).',
          starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Icon Buttons</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0f; color: #e2e8f0; font-family: Arial, sans-serif; padding: 40px; }

    @keyframes wobble {
      0%, 100% { transform: skewX(0deg); }
      25%       { transform: skewX(-8deg); }
      75%       { transform: skewX(8deg); }
    }

    .btn-row { display: flex; gap: 20px; flex-wrap: wrap; }

    .icon-btn {
      display: flex; flex-direction: column; align-items: center; gap: 8px;
      background: #12121a; border: 1px solid #1e1e2e;
      border-radius: 14px; padding: 20px 24px;
      cursor: pointer; user-select: none;
      transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    }
    .icon { font-size: 2rem; display: block; transition: transform 0.4s ease; }
    .label { font-size: 12px; color: #64748b; }

    /* 1. Lift + glow */
    .btn-lift:hover { transform: translateY(-8px); box-shadow: 0 12px 30px rgba(34,197,94,0.3); border-color: #22c55e; }

    /* 2. Spinning icon */
    .btn-spin:hover .icon { transform: rotate(360deg); }

    /* 3. Scale icon */
    .btn-scale:hover .icon { transform: scale(1.5); }

    /* 4. Wobble */
    .btn-wobble:hover { animation: wobble 0.5s ease; }
  </style>
</head>
<body>
  <h2 style="margin-bottom:24px; color:#22c55e">Interactive Icon Buttons</h2>

  <div class="btn-row">
    <div class="icon-btn btn-lift">
      <span class="icon">🚀</span>
      <span class="label">Lift + Glow</span>
    </div>

    <div class="icon-btn btn-spin">
      <span class="icon">⚙️</span>
      <span class="label">Spin</span>
    </div>

    <div class="icon-btn btn-scale">
      <span class="icon">🔍</span>
      <span class="label">Scale Up</span>
    </div>

    <div class="icon-btn btn-wobble">
      <span class="icon">🎯</span>
      <span class="label">Wobble</span>
    </div>
  </div>
</body>
</html>`,
          solutionCode: `<!-- Solution is the starter code — study each hover rule: translateY, rotate(360deg), scale(1.5), and the wobble animation -->`,
          hints: [
            '💡 .btn-lift:hover { transform: translateY(-8px); }',
            '💡 .btn-spin:hover .icon { transform: rotate(360deg); } — targets the .icon child',
            '💡 @keyframes wobble uses skewX to create a side-to-side shake',
          ],
        },
        quiz: {
          questions: [
            { id: 'css-m5-l3-q1', question: 'How does transform differ from changing margin or position?', options: ['Transform is slower', 'Transform moves elements without affecting the document layout — other elements stay in place', 'Transform cannot be animated', 'Transform changes the element\'s actual position in the DOM'], correct: 1, explanation: 'transform moves elements visually but does not affect layout. Other elements act as if the transformed element is in its original position. This is also why transforms are GPU-accelerated and smooth.' },
            { id: 'css-m5-l3-q2', question: 'What does transform: translate(-50%, -50%) do when combined with top: 50%; left: 50%?', options: ['Moves the element to the bottom-right', 'Perfectly centers the element within its positioned parent', 'Scales the element down by 50%', 'Moves the element outside the viewport'], correct: 1, explanation: 'top: 50%; left: 50% positions the element\'s top-left corner at the center. translate(-50%, -50%) then shifts the element back by half its own width and height, centering it perfectly.' },
          ],
        },
      },
    ],
  },

  // ════════════════════════════════════════════════
  //  MODULE 6 — Advanced CSS & Best Practices
  // ════════════════════════════════════════════════
  {
    id: 'css-m6', courseId: 'html-css',
    title: 'Advanced CSS & Best Practices',
    description: 'Pseudo-elements, specificity, CSS architecture, and real-world patterns used by professional developers.',
    level: 'beginner', order: 6, icon: '🎓', xpReward: 160, locked: true,
    lessons: [
      {
        id: 'css-m6-l1', moduleId: 'css-m6',
        title: 'Pseudo-classes & Pseudo-elements', order: 1, xpReward: 20, duration: '14 min',
        explanation: {
          title: 'Targeting States and Creating Virtual Elements',
          content: `# Pseudo-classes — Styling Element States

**Pseudo-classes** select elements based on their state or position.

## Interaction States

\`\`\`css
a:link      { color: #22c55e; }     /* unvisited link */
a:visited   { color: #16a34a; }     /* visited link */
a:hover     { color: #4ade80; }     /* mouse over */
a:active    { color: #15803d; }     /* being clicked */
a:focus     { outline: 2px solid #22c55e; }  /* keyboard focus */
\`\`\`

## Structural Pseudo-classes

\`\`\`css
li:first-child   { font-weight: bold; }
li:last-child    { border-bottom: none; }
li:nth-child(2)  { background: #1e1e2e; }
li:nth-child(even)  { background: #0a0a0f; }
li:nth-child(odd)   { background: #12121a; }
li:nth-child(3n)    { color: #22c55e; }  /* every 3rd */

p:not(.special)  { color: #94a3b8; }  /* every p without .special class */
\`\`\`

## Form Pseudo-classes

\`\`\`css
input:focus   { border-color: #22c55e; }
input:valid   { border-color: #22c55e; }
input:invalid { border-color: #ef4444; }
input:disabled { opacity: 0.5; cursor: not-allowed; }
input:checked  { /* styled checkbox/radio */ }
\`\`\`

# Pseudo-elements — Virtual Content

**Pseudo-elements** create virtual elements that don't exist in the HTML.

\`\`\`css
p::before {
  content: "👉 ";   /* must have content (even "" for decorative) */
  color: #22c55e;
}

p::after {
  content: " ✓";
}

/* Clear float hack (classic) */
.container::after { content: ""; display: block; clear: both; }

/* First line of a paragraph */
p::first-line { font-weight: bold; }

/* First letter — drop cap */
p::first-letter { font-size: 3em; float: left; line-height: 1; }

/* Selected text styling */
::selection { background: #22c55e; color: #000; }
\`\`\``,
        },
        codeExample: {
          title: 'Pseudo-classes and Pseudo-elements',
          language: 'html',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Pseudo Selectors</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0f; color: #e2e8f0; font-family: Arial, sans-serif; padding: 28px; display: flex; flex-direction: column; gap: 28px; }
    h3 { color: #64748b; font-size: 12px; text-transform: uppercase; margin-bottom: 10px; }

    /* nth-child zebra striping */
    .course-list { background: #12121a; border: 1px solid #1e1e2e; border-radius: 12px; overflow: hidden; }
    .course-item {
      display: flex; justify-content: space-between; align-items: center;
      padding: 14px 18px; border-bottom: 1px solid #1a1a28; font-size: 14px;
      transition: background 0.2s;
    }
    .course-item:last-child  { border-bottom: none; }
    .course-item:nth-child(even) { background: #14141e; }
    .course-item:hover       { background: #1e293b; }
    .course-item:first-child h4 { color: #22c55e; }

    /* ::before decorative */
    .feature-list { list-style: none; }
    .feature-list li {
      padding: 8px 0; font-size: 14px; color: #94a3b8;
      position: relative; padding-left: 22px;
    }
    .feature-list li::before {
      content: "✓"; position: absolute; left: 0;
      color: #22c55e; font-weight: bold;
    }

    /* Tooltip with ::after */
    .tooltip-wrap { position: relative; display: inline-block; }
    .tooltip-trigger {
      background: #12121a; border: 1px solid #1e1e2e; border-radius: 8px;
      padding: 10px 18px; cursor: help; font-size: 14px;
    }
    .tooltip-wrap::after {
      content: attr(data-tooltip);
      position: absolute; bottom: calc(100% + 8px); left: 50%;
      transform: translateX(-50%);
      background: #1e293b; color: #e2e8f0; font-size: 12px;
      padding: 6px 12px; border-radius: 8px; white-space: nowrap;
      opacity: 0; visibility: hidden;
      transition: opacity 0.2s, visibility 0.2s;
      pointer-events: none;
    }
    .tooltip-wrap:hover::after { opacity: 1; visibility: visible; }

    /* ::selection custom color */
    ::selection { background: #22c55e; color: #000; }

    /* :not() example */
    .tag-list { display: flex; gap: 8px; flex-wrap: wrap; }
    .tag { padding: 5px 12px; border-radius: 99px; font-size: 12px; font-weight: bold; background: #1e1e2e; color: #94a3b8; }
    .tag:not(.inactive) { background: #052a0f; color: #22c55e; }
  </style>
</head>
<body>

  <section>
    <h3>nth-child — zebra striping + :first-child + :hover</h3>
    <div class="course-list">
      <div class="course-item"><h4>🐍 Python</h4><span style="color:#64748b;font-size:12px">Beginner</span></div>
      <div class="course-item"><h4>⚡ JavaScript</h4><span style="color:#64748b;font-size:12px">Beginner</span></div>
      <div class="course-item"><h4>🌐 HTML/CSS</h4><span style="color:#64748b;font-size:12px">Beginner</span></div>
      <div class="course-item"><h4>☕ Java</h4><span style="color:#64748b;font-size:12px">Intermediate</span></div>
    </div>
  </section>

  <section>
    <h3>::before — custom bullet list</h3>
    <ul class="feature-list">
      <li>AI-powered hints and explanations</li>
      <li>Interactive code editor in browser</li>
      <li>Gamified XP and streak system</li>
      <li>Certificate on completion</li>
    </ul>
  </section>

  <section>
    <h3>::after — pure CSS tooltip (hover me!)</h3>
    <div class="tooltip-wrap" data-tooltip="Opens CodeGuru AI playground in your browser">
      <div class="tooltip-trigger">💻 Open Playground</div>
    </div>
  </section>

  <section>
    <h3>::selection — try selecting any text on this page</h3>
    <p style="color:#94a3b8; font-size:14px">Try selecting this text with your mouse — the selection color is custom green!</p>
  </section>

  <section>
    <h3>:not() — style all except .inactive</h3>
    <div class="tag-list">
      <span class="tag">Python</span>
      <span class="tag">JavaScript</span>
      <span class="tag inactive">Java</span>
      <span class="tag">HTML/CSS</span>
      <span class="tag inactive">React</span>
    </div>
  </section>

</body>
</html>`,
          explanation: `- \`::before\` and \`::after\` must have a \`content\` property (even \`content: ""\` works)
- They are inserted inside the element — before or after the actual content
- \`content: attr(data-tooltip)\` reads an HTML attribute value — powerful for tooltips
- \`:not(selector)\` selects all elements that DON'T match — great for "all except" patterns
- \`::selection\` styles highlighted text globally — a nice branding touch`,
        },
        exercise: {
          title: 'Feature Comparison Table',
          instructions: 'Build a comparison table using nth-child, :hover, :first-child and ::before/:after. Rows alternate background. First column is bold. Hovering highlights the row. Add a checkmark (::before) to "included" cells and an X to "excluded" cells.',
          starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Comparison Table</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0f; color: #e2e8f0; font-family: Arial, sans-serif; padding: 28px; }

    .table { width: 100%; max-width: 700px; border-radius: 12px; overflow: hidden; border: 1px solid #1e1e2e; }
    .row { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; }
    .cell { padding: 13px 16px; font-size: 14px; border-right: 1px solid #1e1e2e; }
    .cell:last-child { border-right: none; }

    /* Header row */
    .row.header .cell { background: #1e293b; font-weight: bold; color: #22c55e; }

    /* Data rows */
    .row:not(.header):nth-child(even) .cell { background: #12121a; }
    .row:not(.header):nth-child(odd)  .cell { background: #0e0e18; }
    .row:not(.header):hover           .cell { background: #1e293b; }

    /* First column bold */
    .row .cell:first-child { color: #e2e8f0; font-weight: 500; }

    /* Included: green check with ::before */
    .check { color: transparent; position: relative; }
    .check::before { content: "✓"; position: absolute; left: 50%; transform: translateX(-50%); color: #22c55e; font-weight: bold; font-size: 16px; }

    /* Not included: red X */
    .cross { color: transparent; position: relative; }
    .cross::before { content: "✗"; position: absolute; left: 50%; transform: translateX(-50%); color: #ef4444; font-size: 16px; }

    .text-center { text-align: center; }
  </style>
</head>
<body>
  <h2 style="margin-bottom:20px; color:#22c55e">Plan Comparison</h2>

  <div class="table">
    <div class="row header">
      <div class="cell">Feature</div>
      <div class="cell text-center">Starter</div>
      <div class="cell text-center">Pro</div>
      <div class="cell text-center">Bundle</div>
    </div>
    <div class="row">
      <div class="cell">Coding Playground</div>
      <div class="cell text-center"><span class="check">y</span></div>
      <div class="cell text-center"><span class="check">y</span></div>
      <div class="cell text-center"><span class="check">y</span></div>
    </div>
    <div class="row">
      <div class="cell">AI Mentor</div>
      <div class="cell text-center"><span class="check">y</span></div>
      <div class="cell text-center"><span class="check">y</span></div>
      <div class="cell text-center"><span class="check">y</span></div>
    </div>
    <div class="row">
      <div class="cell">AI Debug Assistant</div>
      <div class="cell text-center"><span class="cross">n</span></div>
      <div class="cell text-center"><span class="check">y</span></div>
      <div class="cell text-center"><span class="check">y</span></div>
    </div>
    <div class="row">
      <div class="cell">Interview Prep</div>
      <div class="cell text-center"><span class="cross">n</span></div>
      <div class="cell text-center"><span class="cross">n</span></div>
      <div class="cell text-center"><span class="check">y</span></div>
    </div>
    <div class="row">
      <div class="cell">Lifetime Content</div>
      <div class="cell text-center"><span class="cross">n</span></div>
      <div class="cell text-center"><span class="cross">n</span></div>
      <div class="cell text-center"><span class="check">y</span></div>
    </div>
  </div>
</body>
</html>`,
          solutionCode: `<!-- Solution is the starter code — study ::before on .check and .cross, nth-child alternating, and :hover -->`,
          hints: [
            '💡 .check::before { content: "✓"; } adds the checkmark as virtual content',
            '💡 :nth-child(even)/:nth-child(odd) alternate row backgrounds',
            '💡 .row:hover .cell applies background to ALL cells in the hovered row',
          ],
        },
        quiz: {
          questions: [
            { id: 'css-m6-l1-q1', question: 'What CSS property is REQUIRED for ::before and ::after to appear?', options: ['display: block', 'position: absolute', 'content: ""', 'visibility: visible'], correct: 2, explanation: '::before and ::after require the content property to exist in the DOM. Even an empty string content: "" is required. Without it, the pseudo-elements are not rendered.' },
            { id: 'css-m6-l1-q2', question: 'What does li:nth-child(3n) select?', options: ['Only the 3rd item', 'Every 3rd item: 3, 6, 9, 12...', 'The first 3 items', 'Items at positions 3, 30, 300...'], correct: 1, explanation: 'nth-child(3n) uses a formula: 3×1=3, 3×2=6, 3×3=9 etc. It selects every 3rd element. Similarly: 2n selects all even, 2n+1 selects all odd.' },
          ],
        },
      },
      {
        id: 'css-m6-l2', moduleId: 'css-m6',
        title: 'CSS Specificity & Architecture', order: 2, xpReward: 20, duration: '13 min',
        explanation: {
          title: 'How CSS Decides Which Styles Win',
          content: `# CSS Specificity

When multiple rules target the same element, the browser uses **specificity** to decide which one wins.

## Specificity Calculator

Each selector has a score: **(inline, id, class, element)**

\`\`\`
Inline style       → (1, 0, 0, 0) = 1000 points
ID selector #id    → (0, 1, 0, 0) = 100  points
Class .class       → (0, 0, 1, 0) = 10   points
Element tag        → (0, 0, 0, 1) = 1    point
Universal *        → (0, 0, 0, 0) = 0
\`\`\`

\`\`\`css
p                    { color: red; }      /* 0,0,0,1 = 1 */
.text                { color: blue; }     /* 0,0,1,0 = 10 */
p.text               { color: green; }   /* 0,0,1,1 = 11 */
#main                { color: purple; }  /* 0,1,0,0 = 100 */
#main .text          { color: orange; }  /* 0,1,1,0 = 110 */
style="color: pink"  /* 1,0,0,0 = 1000 */
\`\`\`

## !important — the nuclear option

\`\`\`css
.button { background: red !important; }
/* Overrides everything — use sparingly, signals a design problem */
\`\`\`

## Cascade — same specificity → last one wins

\`\`\`css
p { color: red; }
p { color: blue; }   /* blue wins — comes later */
\`\`\`

## CSS Architecture: BEM Naming Convention

**Block__Element--Modifier** keeps CSS maintainable:

\`\`\`css
/* Block */
.card { }

/* Element — part of a block */
.card__title { }
.card__body  { }
.card__footer { }

/* Modifier — variant of block or element */
.card--featured  { }
.card--dark      { }
.card__title--large { }
\`\`\`

\`\`\`html
<div class="card card--featured">
  <h3 class="card__title card__title--large">Python</h3>
  <p class="card__body">Learn Python from scratch</p>
</div>
\`\`\``,
        },
        codeExample: {
          title: 'Specificity and BEM',
          language: 'html',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Specificity & BEM</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0f; color: #e2e8f0; font-family: Arial, sans-serif; padding: 28px; display: flex; flex-direction: column; gap: 28px; }
    h3 { color: #64748b; font-size: 12px; text-transform: uppercase; margin-bottom: 12px; }

    /* ── BEM Card Component ── */
    .card {
      background: #12121a;
      border: 1px solid #1e1e2e;
      border-radius: 14px;
      padding: 20px;
      max-width: 280px;
    }
    .card__header  { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
    .card__icon    { font-size: 2rem; }
    .card__badge   { font-size: 11px; font-weight: bold; padding: 3px 8px; border-radius: 99px; background: #1e1e2e; color: #64748b; }
    .card__title   { font-size: 17px; font-weight: bold; margin-bottom: 8px; }
    .card__body    { color: #94a3b8; font-size: 13px; line-height: 1.6; margin-bottom: 14px; }
    .card__footer  { display: flex; justify-content: space-between; align-items: center; }
    .card__price   { font-weight: bold; font-size: 16px; color: #22c55e; }
    .card__cta     { background: #22c55e; color: #000; border: none; border-radius: 8px; padding: 7px 16px; font-size: 13px; font-weight: bold; cursor: pointer; transition: background 0.2s; }
    .card__cta:hover { background: #16a34a; }

    /* ── Modifier: featured card ── */
    .card--featured {
      border-color: #22c55e;
      background: linear-gradient(135deg, #052a0f, #0a1f1a);
      box-shadow: 0 0 24px rgba(34,197,94,0.15);
    }
    .card--featured .card__badge { background: #22c55e; color: #000; }
    .card--featured .card__title { color: #22c55e; }

    /* ── Modifier: locked card ── */
    .card--locked { opacity: 0.5; }
    .card--locked .card__cta { background: #1e1e2e; color: #64748b; cursor: not-allowed; }

    /* ── Specificity demo ── */
    .specificity-demo p          { color: #94a3b8; }                /* 0,0,1,1 = 11 */
    .specificity-demo p.special  { color: #22c55e; }               /* 0,0,2,1 = 21 — wins! */
    #unique-para                 { font-style: italic; }             /* 0,1,0,0 = 100 */

    .card-row { display: flex; gap: 16px; flex-wrap: wrap; }
  </style>
</head>
<body>

  <section>
    <h3>BEM card component with modifiers</h3>
    <div class="card-row">

      <!-- Default card -->
      <div class="card">
        <div class="card__header">
          <span class="card__icon">⚡</span>
          <span class="card__badge">Beginner</span>
        </div>
        <h3 class="card__title">JavaScript</h3>
        <p class="card__body">The language of the web. Build interactive apps and full-stack products.</p>
        <div class="card__footer">
          <span class="card__price">₹2,999</span>
          <button class="card__cta">Enroll</button>
        </div>
      </div>

      <!-- .card--featured modifier -->
      <div class="card card--featured">
        <div class="card__header">
          <span class="card__icon">🐍</span>
          <span class="card__badge">🔥 Popular</span>
        </div>
        <h3 class="card__title">Python</h3>
        <p class="card__body">From beginner to building real AI and web applications. Most popular language.</p>
        <div class="card__footer">
          <span class="card__price">₹1,499</span>
          <button class="card__cta">Enroll Now</button>
        </div>
      </div>

      <!-- .card--locked modifier -->
      <div class="card card--locked">
        <div class="card__header">
          <span class="card__icon">☕</span>
          <span class="card__badge">🔒 Locked</span>
        </div>
        <h3 class="card__title">Java</h3>
        <p class="card__body">Industry-standard language for Android and enterprise development.</p>
        <div class="card__footer">
          <span class="card__price">₹5,399</span>
          <button class="card__cta">Upgrade</button>
        </div>
      </div>

    </div>
  </section>

  <section>
    <h3>Specificity — which rule wins?</h3>
    <div class="specificity-demo">
      <p>Normal paragraph — color: #94a3b8 (wins: 11 points)</p>
      <p class="special" id="unique-para">Special paragraph — class wins over element, ID adds italic</p>
    </div>
  </section>

</body>
</html>`,
          explanation: `- BEM: \`.card\` (block) → \`.card__title\` (element) → \`.card--featured\` (modifier)
- Double underscores (\`__\`) separate block from element; double dashes (\`--\`) separate modifier
- Modifiers only ADD overrides — the base block styles still apply
- Keep specificity low — prefer classes over IDs in CSS to avoid specificity wars
- BEM eliminates the need for deeply nested selectors like \`.sidebar .nav .item a:hover\``,
        },
        exercise: {
          title: 'Button Component System with BEM',
          instructions: 'Build a complete button system using BEM. Create a .btn base class. Add size modifiers: .btn--sm, .btn--md (default), .btn--lg. Add variant modifiers: .btn--primary, .btn--secondary, .btn--danger. Add a .btn--full modifier for full-width.',
          starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>BEM Buttons</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0f; color: #e2e8f0; font-family: Arial, sans-serif; padding: 28px; display: flex; flex-direction: column; gap: 24px; }
    h3 { color: #64748b; font-size: 12px; text-transform: uppercase; margin-bottom: 10px; }
    .row { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }

    /* ── Base button ── */
    .btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 6px;
      font-weight: bold; font-family: inherit;
      border: none; cursor: pointer; border-radius: 10px;
      transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
    }
    .btn:hover  { transform: translateY(-1px); }
    .btn:active { transform: translateY(0); }

    /* ── Size modifiers ── */
    .btn--sm { padding: 6px 14px;  font-size: 12px; border-radius: 7px; }
    .btn--md { padding: 10px 20px; font-size: 14px; }
    .btn--lg { padding: 14px 28px; font-size: 16px; border-radius: 12px; }

    /* ── Variant modifiers ── */
    .btn--primary   { background: #22c55e; color: #000; }
    .btn--primary:hover { background: #16a34a; box-shadow: 0 4px 14px rgba(34,197,94,0.4); }

    .btn--secondary { background: transparent; color: #e2e8f0; border: 1px solid #2a2a3c; }
    .btn--secondary:hover { background: #18182a; border-color: #3a4560; }

    .btn--danger { background: #ef4444; color: #fff; }
    .btn--danger:hover { background: #dc2626; box-shadow: 0 4px 14px rgba(239,68,68,0.4); }

    /* ── Full-width modifier ── */
    .btn--full { width: 100%; }
  </style>
</head>
<body>

  <section>
    <h3>Size modifiers</h3>
    <div class="row">
      <button class="btn btn--primary btn--sm">Small</button>
      <button class="btn btn--primary btn--md">Medium</button>
      <button class="btn btn--primary btn--lg">Large</button>
    </div>
  </section>

  <section>
    <h3>Variant modifiers</h3>
    <div class="row">
      <button class="btn btn--primary btn--md">✅ Primary</button>
      <button class="btn btn--secondary btn--md">📤 Secondary</button>
      <button class="btn btn--danger btn--md">🗑 Danger</button>
    </div>
  </section>

  <section>
    <h3>Full-width modifier</h3>
    <div style="max-width:300px">
      <button class="btn btn--primary btn--md btn--full">🚀 Start Learning Free</button>
    </div>
  </section>

  <section>
    <h3>Combinations</h3>
    <div class="row">
      <button class="btn btn--danger btn--sm">Delete</button>
      <button class="btn btn--secondary btn--lg">← Go Back</button>
      <button class="btn btn--primary btn--sm">Save ✓</button>
    </div>
  </section>

</body>
</html>`,
          solutionCode: `<!-- Solution is the starter code — the BEM system is fully demonstrated. Study how modifiers combine. -->`,
          hints: [
            '💡 BEM modifiers only override specific properties — base .btn styles always apply',
            '💡 Use multiple classes together: class="btn btn--primary btn--lg"',
            '💡 Keep specificity equal across all .btn--* rules so order in CSS file determines precedence',
          ],
        },
        quiz: {
          questions: [
            { id: 'css-m6-l2-q1', question: 'Which selector has the highest specificity?', options: ['p.intro', '#header p', 'body header h1', '.nav .link'], correct: 1, explanation: '#header p = (0,1,0,1) = 101 points. p.intro = (0,0,1,1) = 11. body header h1 = (0,0,0,3) = 3. .nav .link = (0,0,2,0) = 20. The ID selector wins.' },
            { id: 'css-m6-l2-q2', question: 'In BEM, what is the correct way to write a "featured" modifier of a "card" block?', options: ['.card.featured', '.card-featured', '.card--featured', '.card__featured'], correct: 2, explanation: 'BEM uses double dashes for modifiers: .card--featured. Single dash is just for readability in names. Double underscore (__) is for elements (parts of a block), not modifiers.' },
          ],
        },
      },
      {
        id: 'css-m6-l3', moduleId: 'css-m6',
        title: 'CSS Best Practices & Performance', order: 3, xpReward: 25, duration: '14 min',
        explanation: {
          title: 'Writing Professional CSS',
          content: `# CSS Best Practices

## 1. Reset & Normalize

\`\`\`css
/* Universal reset — everyone uses this */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
\`\`\`

## 2. CSS Custom Properties for design tokens

\`\`\`css
:root {
  --color-primary: #22c55e;
  --radius-md:     12px;
  --space-4:       16px;
}
/* Change once → updates everywhere */
\`\`\`

## 3. Mobile-first media queries

\`\`\`css
/* Base: mobile */
.grid { grid-template-columns: 1fr; }

/* Enhance for larger screens */
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
\`\`\`

## 4. Performance tips

\`\`\`css
/* ✅ GPU-accelerated — use these for animations */
transform: translateY(-4px);
opacity: 0.5;

/* ⚠️ Causes layout recalculation — avoid animating */
width: 200px;     /* causes reflow */
height: 100px;    /* causes reflow */
top: 50px;        /* causes reflow */

/* ✅ will-change hints to browser */
.animated { will-change: transform; }
\`\`\`

## 5. Logical properties (modern CSS)

\`\`\`css
/* Instead of: */
margin-left: 16px; margin-right: 16px;

/* Use logical (supports RTL languages): */
margin-inline: 16px;
padding-block: 24px;    /* top + bottom */
padding-inline: 16px;   /* left + right */
\`\`\`

## 6. Container queries (cutting edge)

\`\`\`css
.card-container { container-type: inline-size; }

@container (min-width: 400px) {
  .card { flex-direction: row; }
}
\`\`\`

## 7. :is() and :where() — modern selectors

\`\`\`css
/* Instead of h1, h2, h3, h4 { } */
:is(h1, h2, h3, h4) { font-family: var(--font-display); }

/* :where() has 0 specificity — great for base styles */
:where(p, li) { line-height: 1.6; }
\`\`\``,
        },
        codeExample: {
          title: 'Professional CSS Patterns',
          language: 'html',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Best Practices</title>
  <style>
    /* ══ 1. RESET ══ */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    /* ══ 2. DESIGN TOKENS ══ */
    :root {
      --bg:          #0a0a0f;
      --bg-card:     #12121a;
      --border:      #1e1e2e;
      --text:        #e2e8f0;
      --muted:       #64748b;
      --primary:     #22c55e;
      --blue:        #3b82f6;
      --font-body:   Arial, sans-serif;
      --radius-sm:   6px;
      --radius-md:   12px;
      --radius-lg:   18px;
      --space-2:     8px;
      --space-3:     12px;
      --space-4:     16px;
      --space-5:     24px;
      --space-6:     32px;
    }

    /* ══ 3. BASE STYLES ══ */
    body {
      background:  var(--bg);
      color:       var(--text);
      font-family: var(--font-body);
      line-height: 1.6;
    }

    :where(h1, h2, h3, h4) { line-height: 1.2; }
    :where(p, li)           { color: var(--muted); font-size: 14px; }

    /* ══ 4. LAYOUT ══ */
    .page { max-width: 900px; margin: 0 auto; padding: var(--space-5); display: flex; flex-direction: column; gap: var(--space-5); }

    /* Mobile-first grid */
    .features-grid {
      display: grid;
      grid-template-columns: 1fr;          /* mobile: 1 col */
      gap: var(--space-4);
    }
    @media (min-width: 640px) {
      .features-grid { grid-template-columns: repeat(2, 1fr); }    /* tablet */
    }
    @media (min-width: 1024px) {
      .features-grid { grid-template-columns: repeat(3, 1fr); }    /* desktop */
    }

    /* ══ 5. BEM COMPONENT ══ */
    .feature-card {
      background:    var(--bg-card);
      border:        1px solid var(--border);
      border-radius: var(--radius-lg);
      padding:       var(--space-5);
      transition:    transform 0.25s ease, border-color 0.25s ease;
    }
    .feature-card:hover { transform: translateY(-4px); border-color: var(--primary); }
    .feature-card__icon  { font-size: 2rem; margin-bottom: var(--space-3); display: block; }
    .feature-card__title { font-size: 16px; font-weight: 700; margin-bottom: var(--space-2); color: var(--text); }
    .feature-card__body  { font-size: 13px; color: var(--muted); line-height: 1.6; }

    /* Modifier: highlight the AI card */
    .feature-card--highlight {
      border-color: var(--primary);
      background: linear-gradient(135deg, #052a0f 0%, var(--bg-card) 100%);
    }
    .feature-card--highlight .feature-card__title { color: var(--primary); }

    /* ══ 6. PERFORMANCE: GPU ANIMATION ══ */
    .spinning-badge {
      display: inline-flex; align-items: center; gap: 6px;
      background: var(--bg-card); border: 1px solid var(--border);
      border-radius: 99px; padding: var(--space-2) var(--space-3);
      font-size: 13px;
    }
    .spinning-badge .dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: var(--primary);
      /* GPU-accelerated — uses opacity + transform only */
      animation: livePulse 1.5s ease-in-out infinite;
      will-change: transform, opacity;
    }
    @keyframes livePulse {
      0%, 100% { transform: scale(1);    opacity: 1; }
      50%       { transform: scale(1.3); opacity: 0.6; }
    }
  </style>
</head>
<body>
  <div class="page">

    <div>
      <div class="spinning-badge">
        <div class="dot"></div>
        Live — CodeGuru AI Platform
      </div>
    </div>

    <div>
      <h2 style="margin-bottom:var(--space-4)">Why Learn with CodeGuru AI?</h2>
      <div class="features-grid">
        <div class="feature-card feature-card--highlight">
          <span class="feature-card__icon">🤖</span>
          <h3 class="feature-card__title">AI Mentor</h3>
          <p class="feature-card__body">Personalized hints and explanations powered by Claude. Like having a tutor available 24/7.</p>
        </div>
        <div class="feature-card">
          <span class="feature-card__icon">💻</span>
          <h3 class="feature-card__title">Live Coding</h3>
          <p class="feature-card__body">Write and run real code directly in your browser. No installation. No setup. Just code.</p>
        </div>
        <div class="feature-card">
          <span class="feature-card__icon">🏆</span>
          <h3 class="feature-card__title">Gamified Learning</h3>
          <p class="feature-card__body">Earn XP, maintain streaks, unlock badges. Learning should feel like a game.</p>
        </div>
      </div>
    </div>

  </div>
</body>
</html>`,
          explanation: `- All design values come from CSS variables — changing \`--primary\` updates the whole page
- \`:where()\` applies base styles with zero specificity — won't win any specificity battles
- \`will-change: transform\` is a hint to the browser to pre-optimize this element for animation
- The mobile-first grid goes 1→2→3 columns with two media queries
- BEM + variables together = highly maintainable, scalable CSS`,
        },
        exercise: {
          title: 'Complete Landing Section',
          instructions: 'Build a complete hero + features section applying all best practices: CSS variables, reset, BEM naming, mobile-first responsive grid, CSS transitions on hover, and keyframe animation on the headline badge.',
          starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Complete Landing</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #0a0a0f; --bg-card: #12121a; --border: #1e1e2e;
      --text: #e2e8f0; --muted: #64748b; --primary: #22c55e;
      --radius: 14px; --space: 16px;
    }

    body { background: var(--bg); color: var(--text); font-family: Arial, sans-serif; }

    .page { max-width: 960px; margin: 0 auto; padding: calc(var(--space) * 2); }

    @keyframes badgePop { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }

    /* Hero */
    .hero { text-align: center; padding: calc(var(--space) * 3) 0; }
    .hero__badge {
      display: inline-block; background: #052a0f; color: var(--primary);
      border: 1px solid rgba(34,197,94,0.3); border-radius: 99px;
      padding: 6px 16px; font-size: 13px; font-weight: bold; margin-bottom: calc(var(--space) * 1.5);
      animation: badgePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
    }
    .hero__title { font-size: clamp(1.8rem, 5vw, 3rem); font-weight: 800; margin-bottom: var(--space); }
    .hero__title span { color: var(--primary); }
    .hero__subtitle { color: var(--muted); max-width: 520px; margin: 0 auto calc(var(--space)*2); font-size: 15px; line-height: 1.7; }
    .hero__cta { display: inline-block; background: var(--primary); color: #000; font-weight: bold; padding: 14px 32px; border-radius: var(--radius); font-size: 15px; text-decoration: none; transition: background 0.2s, transform 0.2s, box-shadow 0.2s; }
    .hero__cta:hover { background: #16a34a; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(34,197,94,0.35); }

    /* Features */
    .features__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space);
      margin-top: calc(var(--space)*3);
    }
    @media (min-width: 640px) { .features__grid { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 900px) { .features__grid { grid-template-columns: repeat(3, 1fr); } }

    .feature-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); padding: calc(var(--space)*1.5); transition: transform 0.25s ease, border-color 0.25s ease; }
    .feature-card:hover { transform: translateY(-5px); border-color: var(--primary); }
    .feature-card__icon  { font-size: 2rem; display: block; margin-bottom: 12px; }
    .feature-card__title { font-weight: 700; margin-bottom: 8px; font-size: 15px; }
    .feature-card__text  { color: var(--muted); font-size: 13px; line-height: 1.6; }
  </style>
</head>
<body>
  <div class="page">
    <section class="hero">
      <div class="hero__badge">🇮🇳 Built for Indian Learners</div>
      <h1 class="hero__title">Learn to Code with <span>AI Guidance</span></h1>
      <p class="hero__subtitle">Duolingo-style lessons, interactive coding, and a personal AI mentor. Master Python, JavaScript, and more.</p>
      <a href="#" class="hero__cta">🚀 Start Free Today</a>
    </section>

    <section>
      <div class="features__grid">
        <div class="feature-card"><span class="feature-card__icon">🤖</span><h3 class="feature-card__title">AI Mentor</h3><p class="feature-card__text">Get instant help with Claude AI — explains concepts in simple, beginner-friendly language.</p></div>
        <div class="feature-card"><span class="feature-card__icon">💻</span><h3 class="feature-card__title">Live Coding</h3><p class="feature-card__text">Write and run real code in your browser. No installation needed — just open and code.</p></div>
        <div class="feature-card"><span class="feature-card__icon">🏆</span><h3 class="feature-card__title">XP & Badges</h3><p class="feature-card__text">Earn XP, maintain streaks, unlock badges. Make learning feel like a game you want to win.</p></div>
        <div class="feature-card"><span class="feature-card__icon">📱</span><h3 class="feature-card__title">Mobile First</h3><p class="feature-card__text">Learn on your phone during your commute. Designed for mobile from day one.</p></div>
        <div class="feature-card"><span class="feature-card__icon">📊</span><h3 class="feature-card__title">Track Progress</h3><p class="feature-card__text">See your growth clearly. Level up, unlock content, earn completion certificates.</p></div>
        <div class="feature-card"><span class="feature-card__icon">💰</span><h3 class="feature-card__title">Indian Pricing</h3><p class="feature-card__text">Starting at ₹1,499. UPI and net banking accepted. Student discount available.</p></div>
      </div>
    </section>
  </div>
</body>
</html>`,
          solutionCode: `<!-- Solution is the starter code — it applies ALL best practices: variables, reset, BEM, mobile-first, transitions, keyframes -->`,
          hints: [
            '💡 All colors and spacing use var(--name) from :root',
            '💡 The grid goes 1→2→3 columns using two min-width media queries',
            '💡 The badge uses cubic-bezier(0.34, 1.56, 0.64, 1) for a bouncy spring effect',
          ],
        },
        quiz: {
          questions: [
            { id: 'css-m6-l3-q1', question: 'Which CSS properties are GPU-accelerated and safe to animate?', options: ['width and height', 'margin and padding', 'transform and opacity', 'top and left'], correct: 2, explanation: 'transform and opacity are composited by the browser\'s GPU — they do not trigger layout recalculations. Animating width, height, margin, padding, top, or left causes expensive reflows on every frame.' },
            { id: 'css-m6-l3-q2', question: 'What is the benefit of using :where() for base styles?', options: ['It is faster than regular selectors', ':where() has zero specificity — base styles can be easily overridden by any class', 'It only selects elements in the first child', 'It automatically applies to all elements'], correct: 1, explanation: ':where() matches elements but contributes zero specificity to the selector. This means any class or ID rule will automatically override it, making it perfect for base/reset styles that should never win specificity battles.' },
          ],
        },
      },
    ],
  },
];
