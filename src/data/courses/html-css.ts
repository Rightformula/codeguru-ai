// src/data/courses/html-css.ts
import type { Course } from '@/types/course';

export const htmlCssCourse: Course = {
  id:             'html-css',
  title:          'HTML & CSS',
  description:    'Build the visual web. Learn to structure pages with HTML and style them beautifully with CSS — the foundation every web developer needs.',
  icon:           '🌐',
  color:          '#E34F26',
  colorLight:     '#FEF2EE',
  totalModules:   18,
  totalLessons:   54,
  estimatedHours: 35,
  levels:         ['beginner', 'intermediate', 'advanced'],

  modules: [

    // ════════════════════════════════════════════════
    //  MODULE 1 — HTML Foundations (Beginner)
    // ════════════════════════════════════════════════
    {
      id:          'html-m1',
      courseId:    'html-css',
      title:       'HTML Foundations',
      description: 'Build the skeleton of every webpage. Learn tags, structure, and semantic HTML.',
      level:       'beginner',
      order:       1,
      icon:        '🏗️',
      xpReward:    100,
      lessons: [

        // ─── Lesson 1 ────────────────────────────────
        {
          id:       'html-m1-l1',
          moduleId: 'html-m1',
          title:    'What is HTML?',
          order:    1,
          xpReward: 10,
          duration: '8 min',

          explanation: {
            title:   'The Skeleton of the Web',
            content: `# What is HTML?

**HTML** stands for **HyperText Markup Language**. It's not a programming language — it's a **markup language** that describes the structure and content of a webpage.

Think of a webpage like a human body:
- **HTML** is the skeleton — gives structure and shape
- **CSS** is the skin, clothes — makes it look good
- **JavaScript** is the muscles — makes it move and respond

## How HTML Works

HTML uses **tags** — special keywords wrapped in angle brackets:

\`\`\`html
<tagname>Content goes here</tagname>
\`\`\`

Most tags come in pairs — an opening tag and a closing tag (with a /):
- Opening: \`<h1>\`
- Closing: \`</h1>\`

## Basic HTML Page Structure

\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first webpage.</p>
  </body>
</html>
\`\`\`

## Key parts

- \`<!DOCTYPE html>\` — tells the browser this is HTML5
- \`<html>\` — root element, wraps everything
- \`<head>\` — metadata (title, styles, scripts) — not visible
- \`<body>\` — everything users SEE goes here`,
          },

          codeExample: {
            title:    'Your First HTML Page',
            language: 'html',
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Webpage</title>
</head>
<body>

  <!-- This is an HTML comment — invisible to users -->

  <!-- Headings: h1 is biggest, h6 is smallest -->
  <h1>Welcome to My Page! 🌐</h1>
  <h2>About Me</h2>
  <h3>My Skills</h3>

  <!-- Paragraph text -->
  <p>Hello! I am learning HTML with CodeGuru AI.</p>
  <p>HTML is the foundation of every webpage on the internet.</p>

  <!-- Line break -->
  <br>

  <!-- Horizontal rule (divider line) -->
  <hr>

  <p>This content is below the divider.</p>

</body>
</html>`,
            explanation: `- \`<h1>\` to \`<h6>\` are headings — h1 is the most important, h6 the smallest
- \`<p>\` is a paragraph — block of text with spacing above and below
- \`<br>\` is a self-closing tag (no content, no closing tag) — adds a line break
- \`<hr>\` is a horizontal rule — draws a dividing line
- HTML comments: \`<!-- comment -->\``,
          },

          exercise: {
            title:        'Build a Personal Bio Page',
            instructions: 'Create an HTML page with: your name as an h1, "About Me" as an h2, a paragraph describing yourself, and a horizontal rule followed by your favorite quote in another paragraph.',
            starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Bio</title>
</head>
<body>

  <!-- Add your h1 name here -->

  <!-- Add an h2 "About Me" -->

  <!-- Add a paragraph about yourself -->

  <!-- Add a horizontal rule -->

  <!-- Add your favorite quote in a paragraph -->

</body>
</html>`,
            solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Bio</title>
</head>
<body>

  <h1>Rahul Sharma</h1>

  <h2>About Me</h2>

  <p>I am a 21-year-old developer from Delhi, learning HTML and CSS with CodeGuru AI.</p>

  <hr>

  <p>"The best time to plant a tree was 20 years ago. The second best time is now."</p>

</body>
</html>`,
            hints: [
              '💡 h1 is the largest heading — use it for your name',
              '💡 hr is a self-closing tag — just write <hr> with no closing tag',
              '💡 Make sure all content is inside <body> and </body>',
            ],
          },

          quiz: {
            questions: [
              {
                id:          'html-m1-l1-q1',
                question:    'What does HTML stand for?',
                options:     ['Hyper Text Making Language', 'HyperText Markup Language', 'High Text Markup Language', 'HyperText Modern Language'],
                correct:     1,
                explanation: 'HTML stands for HyperText Markup Language. "HyperText" means text with links to other text. "Markup" means annotating text with tags that define structure.',
              },
              {
                id:          'html-m1-l1-q2',
                question:    'Where does visible content on a webpage go?',
                options:     ['Inside <head>', 'Inside <html>', 'Inside <body>', 'Inside <title>'],
                correct:     2,
                explanation: 'The <body> element contains all the visible content of the page — text, images, buttons, etc. The <head> contains metadata like the title and CSS links that are not directly visible.',
              },
              {
                id:          'html-m1-l1-q3',
                question:    'Which tag creates the LARGEST heading?',
                options:     ['<h6>', '<h3>', '<h1>', '<heading>'],
                correct:     2,
                explanation: '<h1> is the largest and most important heading. Headings go from h1 (biggest) to h6 (smallest). Always use one h1 per page — it\'s important for SEO.',
              },
            ],
          },
        },

        // ─── Lesson 2 ────────────────────────────────
        {
          id:       'html-m1-l2',
          moduleId: 'html-m1',
          title:    'Links, Images & Lists',
          order:    2,
          xpReward: 10,
          duration: '10 min',

          explanation: {
            title:   'Connecting and Enriching Pages',
            content: `# Links, Images, and Lists

These three HTML elements make pages truly useful — links navigate, images illustrate, lists organize.

## Links — <a> tag

\`\`\`html
<a href="https://google.com">Visit Google</a>
\`\`\`

- \`href\` — the URL to go to (required)
- \`target="_blank"\` — opens in a new tab
- Can link to other pages on your site: \`href="about.html"\`

## Images — <img> tag

\`\`\`html
<img src="photo.jpg" alt="A description of the photo">
\`\`\`

- \`src\` — the image file path or URL (required)
- \`alt\` — alternative text if image can't load (required for accessibility)
- Self-closing — no closing tag needed

## Lists — two types

**Unordered list (bullet points):**
\`\`\`html
<ul>
  <li>Python</li>
  <li>JavaScript</li>
  <li>HTML/CSS</li>
</ul>
\`\`\`

**Ordered list (numbered):**
\`\`\`html
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>
\`\`\`

\`<li>\` = list item (goes inside ul or ol)`,
          },

          codeExample: {
            title:    'Links, Images & Lists',
            language: 'html',
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Links, Images & Lists</title>
</head>
<body>

  <h1>My Favorite Things</h1>

  <!-- Unordered list (bullets) -->
  <h2>Programming Languages I'm Learning:</h2>
  <ul>
    <li>Python 🐍</li>
    <li>JavaScript ⚡</li>
    <li>HTML & CSS 🌐</li>
  </ul>

  <!-- Ordered list (numbered) -->
  <h2>Steps to Learn Coding:</h2>
  <ol>
    <li>Start with fundamentals</li>
    <li>Build small projects</li>
    <li>Practice every day</li>
    <li>Never stop learning</li>
  </ol>

  <!-- Link -->
  <h2>Useful Links:</h2>
  <p>
    <a href="https://codeguru.ai">Visit CodeGuru AI</a>
  </p>
  <p>
    <a href="https://developer.mozilla.org" target="_blank">
      MDN Web Docs (opens in new tab)
    </a>
  </p>

  <!-- Image from URL -->
  <h2>A Beautiful Image:</h2>
  <img 
    src="https://picsum.photos/400/200" 
    alt="Random beautiful photo"
    width="400"
  >

</body>
</html>`,
            explanation: `- \`<ul>\` = unordered list (bullets), \`<ol>\` = ordered list (numbers)
- \`<li>\` is always a child of \`<ul>\` or \`<ol>\` — never standalone
- \`<a href="">\` creates a clickable link — href is the destination
- \`target="_blank"\` opens link in a new tab
- \`<img>\` is self-closing — needs src and alt attributes`,
          },

          exercise: {
            title:        'Skills & Resources Page',
            instructions: 'Build a page with: an unordered list of 3 skills you want to learn, an ordered list of 3 steps for your learning plan, and 2 links to helpful websites.',
            starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Learning Plan</title>
</head>
<body>

  <h1>My Learning Plan</h1>

  <h2>Skills I Want to Learn:</h2>
  <!-- Add a <ul> with 3 <li> items -->

  <h2>My 3-Step Plan:</h2>
  <!-- Add an <ol> with 3 <li> steps -->

  <h2>Helpful Resources:</h2>
  <!-- Add 2 <a> links -->

</body>
</html>`,
            solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Learning Plan</title>
</head>
<body>

  <h1>My Learning Plan</h1>

  <h2>Skills I Want to Learn:</h2>
  <ul>
    <li>Python programming</li>
    <li>Web development</li>
    <li>Data Science</li>
  </ul>

  <h2>My 3-Step Plan:</h2>
  <ol>
    <li>Complete CodeGuru AI courses</li>
    <li>Build 3 personal projects</li>
    <li>Apply for developer internships</li>
  </ol>

  <h2>Helpful Resources:</h2>
  <p><a href="https://codeguru.ai">CodeGuru AI</a></p>
  <p><a href="https://developer.mozilla.org" target="_blank">MDN Web Docs</a></p>

</body>
</html>`,
            hints: [
              '💡 ul = unordered (bullets), ol = ordered (numbers) — both use li for items',
              '💡 The text between <a> and </a> is what the user clicks on',
              '💡 target="_blank" makes links open in a new browser tab',
            ],
          },

          quiz: {
            questions: [
              {
                id:          'html-m1-l2-q1',
                question:    'What attribute on <img> describes the image for screen readers and when image fails to load?',
                options:     ['title', 'src', 'alt', 'desc'],
                correct:     2,
                explanation: 'The alt attribute provides alternative text for images. Screen readers read it aloud for visually impaired users, and browsers show it when the image fails to load. Always include alt text.',
              },
              {
                id:          'html-m1-l2-q2',
                question:    'How do you make a link open in a new browser tab?',
                options:     ['href="_blank"', 'target="_blank"', 'open="new"', 'tab="true"'],
                correct:     1,
                explanation: 'Adding target="_blank" to an <a> tag makes the browser open the link in a new tab instead of the current one.',
              },
            ],
          },
        },

        // ─── Lesson 3 ────────────────────────────────
        {
          id:       'html-m1-l3',
          moduleId: 'html-m1',
          title:    'HTML Forms',
          order:    3,
          xpReward: 15,
          duration: '12 min',

          explanation: {
            title:   'Getting Input from Users',
            content: `# HTML Forms — Collecting User Input

Forms are how websites collect information from users — login pages, search bars, signup forms, contact pages.

## The <form> element

\`\`\`html
<form action="/submit" method="POST">
  <!-- inputs go here -->
</form>
\`\`\`

## Common Input Types

\`\`\`html
<!-- Text input -->
<input type="text" placeholder="Enter your name">

<!-- Email input (validates format) -->
<input type="email" placeholder="your@email.com">

<!-- Password input (hides characters) -->
<input type="password" placeholder="Password">

<!-- Number input -->
<input type="number" min="0" max="100">

<!-- Checkbox -->
<input type="checkbox"> Remember me

<!-- Radio buttons (pick one) -->
<input type="radio" name="plan" value="free"> Free
<input type="radio" name="plan" value="pro"> Pro

<!-- Submit button -->
<button type="submit">Submit</button>
\`\`\`

## Labels — for accessibility

Always connect a label to its input:

\`\`\`html
<label for="email">Email:</label>
<input type="email" id="email" name="email">
\`\`\`

The \`for\` attribute must match the input's \`id\`.

## Textarea — multi-line text

\`\`\`html
<textarea rows="4" placeholder="Write your message..."></textarea>
\`\`\``,
          },

          codeExample: {
            title:    'A Complete Contact Form',
            language: 'html',
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contact Form</title>
</head>
<body>

  <h1>Contact Us</h1>

  <form>
    <!-- Name field -->
    <label for="name">Full Name:</label><br>
    <input type="text" id="name" name="name" placeholder="Rahul Sharma"><br><br>

    <!-- Email field -->
    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" placeholder="rahul@example.com"><br><br>

    <!-- Course selection -->
    <label for="course">Interested Course:</label><br>
    <select id="course" name="course">
      <option value="">-- Choose a course --</option>
      <option value="python">Python</option>
      <option value="javascript">JavaScript</option>
      <option value="html-css">HTML & CSS</option>
    </select><br><br>

    <!-- Message textarea -->
    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="4" 
      placeholder="Write your message here..."></textarea><br><br>

    <!-- Checkbox -->
    <input type="checkbox" id="newsletter" name="newsletter">
    <label for="newsletter">Subscribe to newsletter</label><br><br>

    <!-- Submit button -->
    <button type="submit">Send Message</button>
  </form>

</body>
</html>`,
            explanation: `- \`<label for="id">\` connects to the input with matching id — clicking the label focuses the input
- \`type="email"\` auto-validates email format on submission
- \`<select>\` creates a dropdown — each \`<option>\` is one choice
- \`<textarea>\` for multi-line input — rows attribute sets visible height
- \`type="submit"\` button submits the form`,
          },

          exercise: {
            title:        'Build a Signup Form',
            instructions: 'Create a signup form with: a text input for name (with label), an email input (with label), a password input (with label), a dropdown to select your country (at least 3 options), and a submit button that says "Create Account".',
            starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Signup</title>
</head>
<body>

  <h1>Create an Account</h1>

  <form>

    <!-- Name input with label -->

    <!-- Email input with label -->

    <!-- Password input with label -->

    <!-- Country dropdown with label -->

    <!-- Submit button -->

  </form>

</body>
</html>`,
            solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Signup</title>
</head>
<body>

  <h1>Create an Account</h1>

  <form>

    <label for="name">Full Name:</label><br>
    <input type="text" id="name" placeholder="Your name"><br><br>

    <label for="email">Email:</label><br>
    <input type="email" id="email" placeholder="you@email.com"><br><br>

    <label for="password">Password:</label><br>
    <input type="password" id="password" placeholder="Min 8 characters"><br><br>

    <label for="country">Country:</label><br>
    <select id="country">
      <option value="">Select country</option>
      <option value="in">India</option>
      <option value="us">USA</option>
      <option value="uk">United Kingdom</option>
    </select><br><br>

    <button type="submit">Create Account</button>

  </form>

</body>
</html>`,
            hints: [
              '💡 Use type="password" to hide the password characters',
              '💡 label for="id" must match the input\'s id="id"',
              '💡 select + option creates the dropdown — first option is usually a placeholder',
            ],
          },

          quiz: {
            questions: [
              {
                id:          'html-m1-l3-q1',
                question:    'Which input type automatically validates email format?',
                options:     ['type="text"', 'type="email"', 'type="validate"', 'type="mail"'],
                correct:     1,
                explanation: 'type="email" tells the browser to validate that the input matches an email format (something@something.something) before allowing form submission.',
              },
              {
                id:          'html-m1-l3-q2',
                question:    'Why should you use <label for="id"> with inputs?',
                options:     [
                  'It makes the input required',
                  'It connects the label text to the input for accessibility — clicking the label focuses the input',
                  'It adds a border to the input',
                  'It styles the input text',
                ],
                correct:     1,
                explanation: 'The for attribute on a label connects it to an input\'s id. This improves accessibility (screen readers announce the label when the input is focused) and usability (clicking the label focuses the input).',
              },
            ],
          },
        },
      ],
    },

    // ════════════════════════════════════════════════
    //  MODULE 2 — CSS Styling (Beginner)
    // ════════════════════════════════════════════════
    {
      id:          'css-m2',
      courseId:    'html-css',
      title:       'CSS Styling',
      description: 'Make your HTML beautiful. Learn selectors, colors, fonts, and the box model.',
      level:       'beginner',
      order:       2,
      icon:        '🎨',
      xpReward:    120,
      locked:      true,
      lessons: [

        // ─── Lesson 1 ────────────────────────────────
        {
          id:       'css-m2-l1',
          moduleId: 'css-m2',
          title:    'Introduction to CSS',
          order:    1,
          xpReward: 15,
          duration: '10 min',

          explanation: {
            title:   'Making HTML Beautiful',
            content: `# What is CSS?

**CSS** stands for **Cascading Style Sheets**. It controls the visual presentation of HTML — colors, fonts, sizes, spacing, and layout.

## Three ways to add CSS

**1. Inline** — directly on the element (avoid for large projects):
\`\`\`html
<p style="color: red;">Red text</p>
\`\`\`

**2. Internal** — inside a \`<style>\` tag in \`<head>\`:
\`\`\`html
<head>
  <style>
    p { color: blue; }
  </style>
</head>
\`\`\`

**3. External** — separate .css file (best practice):
\`\`\`html
<head>
  <link rel="stylesheet" href="style.css">
</head>
\`\`\`

## CSS Syntax

\`\`\`css
selector {
  property: value;
  another-property: another-value;
}
\`\`\`

## Basic Selectors

\`\`\`css
/* Element selector — targets all h1 elements */
h1 { color: green; }

/* Class selector — targets elements with class="highlight" */
.highlight { background: yellow; }

/* ID selector — targets the element with id="main" */
#main { font-size: 20px; }
\`\`\``,
          },

          codeExample: {
            title:    'Your First Styled Page',
            language: 'html',
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Styled Page</title>
  <style>

    /* Style the whole page */
    body {
      background-color: #1a1a2e;
      color: #e2e8f0;
      font-family: Arial, sans-serif;
      padding: 40px;
    }

    /* Style all h1 elements */
    h1 {
      color: #22c55e;
      font-size: 36px;
      text-align: center;
    }

    /* Style elements with class="card" */
    .card {
      background-color: #16213e;
      border: 1px solid #0f3460;
      border-radius: 12px;
      padding: 20px;
      margin: 20px 0;
    }

    /* Style the element with id="special" */
    #special {
      color: #ffd166;
      font-weight: bold;
    }

  </style>
</head>
<body>

  <h1>Welcome to Styled HTML!</h1>

  <div class="card">
    <h2>This is a card</h2>
    <p>CSS makes everything look beautiful.</p>
    <p id="special">This text is special — styled by ID!</p>
  </div>

  <div class="card">
    <h2>Another card</h2>
    <p>Classes can be reused on multiple elements.</p>
  </div>

</body>
</html>`,
            explanation: `- \`background-color\` sets the background — use color names or hex codes like \`#1a1a2e\`
- \`.classname\` selects elements with that class — reusable across many elements
- \`#idname\` selects one specific element — each id should be unique on the page
- \`padding\` adds space INSIDE the element; \`margin\` adds space OUTSIDE`,
          },

          exercise: {
            title:        'Style Your Bio Page',
            instructions: 'Add CSS to your bio page: set a background color, change the h1 color and center it, add padding to the body, and create a .card class with background, border-radius, and padding. Apply it to a div.',
            starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Styled Bio</title>
  <style>

    body {
      /* Add background-color and padding */
    }

    h1 {
      /* Add color and text-align: center */
    }

    .card {
      /* Add background, border-radius: 12px, padding: 20px */
    }

  </style>
</head>
<body>

  <h1>Rahul Sharma</h1>

  <div class="card">
    <h2>About Me</h2>
    <p>I am learning HTML and CSS with CodeGuru AI!</p>
  </div>

</body>
</html>`,
            solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Styled Bio</title>
  <style>

    body {
      background-color: #0f172a;
      color: #e2e8f0;
      font-family: Arial, sans-serif;
      padding: 40px;
    }

    h1 {
      color: #22c55e;
      text-align: center;
    }

    .card {
      background-color: #1e293b;
      border-radius: 12px;
      padding: 20px;
      margin-top: 20px;
    }

  </style>
</head>
<body>

  <h1>Rahul Sharma</h1>

  <div class="card">
    <h2>About Me</h2>
    <p>I am learning HTML and CSS with CodeGuru AI!</p>
  </div>

</body>
</html>`,
            hints: [
              '💡 Color values: use names (red), hex (#ff0000), or rgb(255,0,0)',
              '💡 text-align: center centers the heading text horizontally',
              '💡 Apply .card to a div using: <div class="card">',
            ],
          },

          quiz: {
            questions: [
              {
                id:          'css-m2-l1-q1',
                question:    'What CSS selector targets elements with class="highlight"?',
                options:     ['highlight { }', '#highlight { }', '.highlight { }', '*highlight { }'],
                correct:     2,
                explanation: '.highlight (dot prefix) selects elements with class="highlight". # is for IDs, and no prefix is for element type selectors.',
              },
              {
                id:          'css-m2-l1-q2',
                question:    'What is the difference between padding and margin in CSS?',
                options:     [
                  'No difference — they are the same',
                  'Padding adds space inside the element, margin adds space outside',
                  'Padding adds space outside, margin adds space inside',
                  'Padding is for text, margin is for images',
                ],
                correct:     1,
                explanation: 'Padding is the space between an element\'s content and its border (inside). Margin is the space between an element and other elements around it (outside).',
              },
            ],
          },
        },

        // ─── Lesson 2 ────────────────────────────────
        {
          id:       'css-m2-l2',
          moduleId: 'css-m2',
          title:    'Colors, Fonts & Text',
          order:    2,
          xpReward: 15,
          duration: '12 min',

          explanation: {
            title:   'Typography and Color',
            content: `# Colors, Fonts & Text Styling

Typography and color are the most impactful design choices you can make.

## CSS Color Formats

\`\`\`css
/* Named color */
color: red;

/* Hex code — #RRGGBB */
color: #22c55e;     /* green */
color: #1a1a2e;     /* dark blue */

/* RGB — Red, Green, Blue (0–255 each) */
color: rgb(34, 197, 94);

/* RGBA — with opacity (0=transparent, 1=solid) */
color: rgba(34, 197, 94, 0.5);  /* 50% transparent */
\`\`\`

## Font Properties

\`\`\`css
p {
  font-family: 'Arial', sans-serif;
  font-size:   16px;         /* or em, rem, % */
  font-weight: bold;         /* or 400, 700, etc. */
  font-style:  italic;
  line-height: 1.6;          /* 1.6 × font-size spacing */
}
\`\`\`

## Text Properties

\`\`\`css
h1 {
  text-align:      center;        /* left | center | right */
  text-decoration: underline;     /* underline | none | line-through */
  text-transform:  uppercase;     /* uppercase | lowercase | capitalize */
  letter-spacing:  2px;           /* space between letters */
  word-spacing:    5px;           /* space between words */
}
\`\`\`

## Google Fonts (free, beautiful fonts)

Add to \`<head>\`:
\`\`\`html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
\`\`\`

Then use in CSS:
\`\`\`css
body { font-family: 'Poppins', sans-serif; }
\`\`\``,
          },

          codeExample: {
            title:    'Typography Showcase',
            language: 'html',
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Typography</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Fira+Code&display=swap" rel="stylesheet">
  <style>

    body {
      background: #0a0a0f;
      color: #e2e8f0;
      font-family: 'Poppins', sans-serif;
      padding: 40px;
      max-width: 700px;
      margin: 0 auto;
    }

    h1 {
      color: #22c55e;
      font-size: 2.5rem;
      font-weight: 700;
      letter-spacing: -1px;
      text-align: center;
    }

    h2 {
      color: #3b82f6;
      font-size: 1.3rem;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      line-height: 1.8;
      color: #94a3b8;
    }

    .highlight {
      color: #ffd166;
      font-weight: 700;
    }

    .code-text {
      font-family: 'Fira Code', monospace;
      background: #1e1e2e;
      color: #22c55e;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 0.9rem;
    }

    .quote {
      border-left: 4px solid #22c55e;
      padding-left: 20px;
      font-style: italic;
      color: #64748b;
    }

  </style>
</head>
<body>

  <h1>Typography Demo</h1>

  <h2>Why Typography Matters</h2>

  <p>
    Good typography makes your content <span class="highlight">readable and beautiful</span>.
    The right font choice sets the entire tone of your website.
  </p>

  <p>
    Use <span class="code-text">font-family</span> to set fonts,
    <span class="code-text">line-height</span> for readability,
    and <span class="code-text">letter-spacing</span> for style.
  </p>

  <p class="quote">
    "Typography is what language looks like." — Ellen Lupton
  </p>

</body>
</html>`,
            explanation: `- Import Google Fonts with a \`<link>\` tag in \`<head>\`
- \`rem\` units are relative to the root font size (better for responsive design)
- \`line-height: 1.8\` means 1.8× the font size — improves readability
- \`<span>\` is an inline element — wraps text without breaking the line (unlike \`<div>\`)`,
          },

          exercise: {
            title:        'Style a Blog Post',
            instructions: 'Create a styled blog post page. Use a Google Font, style h1 with a color and letter-spacing, style paragraphs with line-height and color, and create a .highlight class for an important phrase.',
            starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Blog Post</title>
  <!-- Add Google Font link here -->
  <style>

    body {
      /* Add font-family, background, padding, max-width */
    }

    h1 {
      /* Add color, font-size, letter-spacing */
    }

    p {
      /* Add line-height, color, font-size */
    }

    .highlight {
      /* Add a color and font-weight: bold */
    }

  </style>
</head>
<body>
  <h1>My First Blog Post</h1>
  <p>
    Learning web development is one of the best decisions I've made.
    Every day I discover something <span class="highlight">new and exciting</span>.
  </p>
  <p>
    HTML gives structure, CSS gives beauty, and JavaScript gives life.
    Together they create the entire web.
  </p>
</body>
</html>`,
            solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Blog Post</title>
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
  <style>

    body {
      font-family: 'Merriweather', serif;
      background: #fafaf9;
      color: #1c1917;
      padding: 60px 40px;
      max-width: 680px;
      margin: 0 auto;
    }

    h1 {
      color: #0f172a;
      font-size: 2rem;
      letter-spacing: -0.5px;
    }

    p {
      line-height: 1.8;
      color: #44403c;
      font-size: 1.05rem;
      margin-bottom: 16px;
    }

    .highlight {
      color: #16a34a;
      font-weight: 700;
    }

  </style>
</head>
<body>
  <h1>My First Blog Post</h1>
  <p>
    Learning web development is one of the best decisions I've made.
    Every day I discover something <span class="highlight">new and exciting</span>.
  </p>
  <p>
    HTML gives structure, CSS gives beauty, and JavaScript gives life.
    Together they create the entire web.
  </p>
</body>
</html>`,
            hints: [
              '💡 Google Fonts link goes in <head> before <style>',
              '💡 max-width: 680px with margin: 0 auto centers the content',
              '💡 line-height: 1.8 makes paragraphs much easier to read',
            ],
          },

          quiz: {
            questions: [
              {
                id:          'css-m2-l2-q1',
                question:    'What does rgba(0, 0, 0, 0.5) mean in CSS?',
                options:     [
                  'Black color at 50% transparency',
                  'White color at 50% transparency',
                  'Red color at 50% size',
                  'A color with 0.5 pixel border',
                ],
                correct:     0,
                explanation: 'rgba(0,0,0,0.5) is black (0,0,0) at 50% opacity (0.5). The fourth value in rgba is the alpha channel — 0 is fully transparent, 1 is fully opaque.',
              },
              {
                id:          'css-m2-l2-q2',
                question:    'What is line-height used for?',
                options:     ['The height of a line border', 'Spacing between lines of text', 'The font size', 'The width of text'],
                correct:     1,
                explanation: 'line-height controls the vertical spacing between lines of text. A value of 1.6-1.8 is recommended for body text as it greatly improves readability.',
              },
            ],
          },
        },

        // ─── Lesson 3 ────────────────────────────────
        {
          id:       'css-m2-l3',
          moduleId: 'css-m2',
          title:    'The Box Model',
          order:    3,
          xpReward: 20,
          duration: '14 min',

          explanation: {
            title:   'Understanding the Box Model',
            content: `# The CSS Box Model

Every HTML element is a rectangular box. The **box model** describes how that box's size is calculated.

## Four layers from inside out:

\`\`\`
┌─────────────────────────────┐
│          MARGIN             │  ← space outside the border
│  ┌───────────────────────┐  │
│  │       BORDER          │  │  ← the visible border
│  │  ┌─────────────────┐  │  │
│  │  │    PADDING      │  │  │  ← space between content & border
│  │  │  ┌───────────┐  │  │  │
│  │  │  │  CONTENT  │  │  │  │  ← actual text/image
│  │  │  └───────────┘  │  │  │
│  │  └─────────────────┘  │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
\`\`\`

## Box Model Properties

\`\`\`css
div {
  /* Content size */
  width:  300px;
  height: 150px;

  /* Padding — space INSIDE (between content and border) */
  padding:        20px;           /* all sides */
  padding-top:    10px;           /* individual sides */
  padding:        10px 20px;      /* top/bottom, left/right */
  padding:        10px 20px 30px 40px; /* top right bottom left */

  /* Border */
  border:         2px solid #22c55e;  /* width style color */
  border-radius:  12px;               /* rounded corners */

  /* Margin — space OUTSIDE (between this and other elements) */
  margin:    20px;
  margin:    0 auto;   /* center a block element horizontally */
}
\`\`\`

## box-sizing: border-box (IMPORTANT!)

By default, padding and border ADD to the element's width. This is confusing. Fix it:

\`\`\`css
* {
  box-sizing: border-box;  /* padding and border are INCLUDED in width */
}
\`\`\`

Always add this to your CSS!`,
          },

          codeExample: {
            title:    'Box Model in Practice',
            language: 'html',
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Box Model</title>
  <style>

    /* Always add this — makes sizing intuitive */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background: #0a0a0f;
      color: #e2e8f0;
      font-family: Arial, sans-serif;
      padding: 40px;
    }

    .card {
      width: 320px;
      background: #12121a;
      border: 2px solid #1e1e2e;
      border-radius: 16px;
      padding: 24px;
      margin: 20px auto;    /* margin: 0 auto centers it */
    }

    .card:hover {
      border-color: #22c55e;  /* border changes on hover */
    }

    .card h2 {
      color: #22c55e;
      margin-bottom: 12px;   /* space below h2 */
    }

    .card p {
      color: #94a3b8;
      line-height: 1.6;
      margin-bottom: 16px;
    }

    .badge {
      display: inline-block;
      background: #052a0f;
      color: #22c55e;
      border: 1px solid #166534;
      border-radius: 99px;     /* pill shape */
      padding: 4px 14px;
      font-size: 12px;
      font-weight: bold;
    }

  </style>
</head>
<body>

  <div class="card">
    <h2>Python Course</h2>
    <p>Learn Python from scratch. Build real projects and understand core concepts.</p>
    <span class="badge">Beginner</span>
  </div>

  <div class="card">
    <h2>JavaScript Course</h2>
    <p>Master the language of the web. From basics to React and Node.js.</p>
    <span class="badge">Beginner</span>
  </div>

</body>
</html>`,
            explanation: `- \`* { box-sizing: border-box }\` is a global reset — always add it
- \`margin: 0 auto\` horizontally centers block elements (width must be set)
- \`border-radius: 99px\` on a small element creates a pill/capsule shape
- \`:hover\` pseudo-class applies styles only when mouse is over the element
- \`display: inline-block\` lets a \`<span>\` have padding and margin like a block`,
          },

          exercise: {
            title:        'Build a Profile Card',
            instructions: 'Create a centered profile card using the box model. It should have: a set width (300px), background color, rounded corners (border-radius), padding, a top colored border (border-top: 4px solid), a name in h2, and a short bio in p.',
            starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Profile Card</title>
  <style>

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background: #0f172a;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      font-family: Arial, sans-serif;
    }

    .profile-card {
      /* Add: width, background, border-radius, padding */
      /* Add: border-top: 4px solid #22c55e */
    }

    .profile-card h2 {
      /* Add color and margin-bottom */
    }

    .profile-card p {
      /* Add color and line-height */
    }

  </style>
</head>
<body>
  <div class="profile-card">
    <h2>Rahul Sharma</h2>
    <p>Aspiring developer learning Python and JavaScript at CodeGuru AI.</p>
  </div>
</body>
</html>`,
            solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Profile Card</title>
  <style>

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background: #0f172a;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      font-family: Arial, sans-serif;
    }

    .profile-card {
      width: 300px;
      background: #1e293b;
      border-radius: 16px;
      padding: 28px;
      border-top: 4px solid #22c55e;
    }

    .profile-card h2 {
      color: #e2e8f0;
      margin-bottom: 10px;
    }

    .profile-card p {
      color: #94a3b8;
      line-height: 1.6;
    }

  </style>
</head>
<body>
  <div class="profile-card">
    <h2>Rahul Sharma</h2>
    <p>Aspiring developer learning Python and JavaScript at CodeGuru AI.</p>
  </div>
</body>
</html>`,
            hints: [
              '💡 border-top: 4px solid #22c55e adds a colored top border only',
              '💡 border-radius: 16px rounds all corners equally',
              '💡 The body already has display:flex set — add justify-content:center and align-items:center to center the card',
            ],
          },

          quiz: {
            questions: [
              {
                id:          'css-m2-l3-q1',
                question:    'In the CSS box model, what is padding?',
                options:     [
                  'Space between an element and its neighbors',
                  'Space between the element\'s content and its border',
                  'The element\'s visible border',
                  'The element\'s background color',
                ],
                correct:     1,
                explanation: 'Padding is the space INSIDE an element, between its content and its border. Margin is the space OUTSIDE an element, between it and other elements.',
              },
              {
                id:          'css-m2-l3-q2',
                question:    'What does "margin: 0 auto" do?',
                options:     [
                  'Removes all margins',
                  'Sets top/bottom margin to 0 and automatically centers the element horizontally',
                  'Sets all margins to automatic',
                  'Centers the text inside the element',
                ],
                correct:     1,
                explanation: 'margin: 0 auto sets top and bottom margins to 0, and the left/right margins to "auto" — which makes the browser split remaining space equally on both sides, centering the element. The element needs a set width for this to work.',
              },
            ],
          },
        },
      ],
    },
  ],
};

export default htmlCssCourse;
