# =================================================================
# 🌐  CodeGuru AI — HTML/CSS Course — All 18 Lessons
# =================================================================
# Copy this entire cell into Google Colab and run it.
# It defines `html-css_lessons` — a list of 18 lesson dicts.
#
# Lessons: 6 modules × 3 lessons each
# Total XP : 230
# Modules  : html-m1, html-m2, html-m3, html-m4, html-m5, html-m6
# =================================================================

import json

# ── html-m1 — Basics
# Lessons : html-m1-l1, html-m1-l2, html-m1-l3
# XP      : 35
html-css_m1_raw = json.loads(r'''
[
  {
    "id": "html-m1-l1",
    "moduleId": "html-m1",
    "title": "What is HTML?",
    "order": 1,
    "xpReward": 10,
    "duration": "9 min",
    "explanation": {
      "title": "What is HTML and What Does It Build?",
      "content": "# What is HTML?\n\nImagine building a house. Before you paint the walls or lay the carpets, you need the bricks and beams — the raw structure that holds everything up. **HTML** (HyperText Markup Language) is exactly that structural layer for every webpage you have ever visited.\n\nHTML is not a programming language — it does not perform calculations or make decisions. It is a **markup language**, which means it uses special tags to label pieces of content and tell the browser what role each piece plays: this is a heading, this is a paragraph, this is an image, this is a link.\n\nWhen your browser receives an HTML file, it reads the tags and renders each piece of content according to its role.\n\n## A Brief History\n\nHTML was invented by Tim Berners-Lee in 1991 as a way to share documents between scientists over the internet. The current standard is **HTML5**, introduced in 2014, which added native support for video, audio, forms, and semantic elements.\n\n## The Three Languages of the Web\n\nEvery webpage is built from three languages working together:\n\n| Language | Role | Analogy |\n|---|---|---|\n| **HTML** | Structure and content | The bricks and walls |\n| **CSS** | Visual styling | The paint and decoration |\n| **JavaScript** | Behaviour and interaction | The electricity and plumbing |\n\nIn this course you will learn HTML first, then CSS, because structure must exist before style can be applied.\n\n## What HTML Files Look Like\n\nAn HTML file is a plain text file saved with the `.html` extension. You can open it in any text editor to write it, and in any browser to view it. No installation is required — every device already has a browser.\n\n## Tags, Elements, and Attributes\n\nHTML content is wrapped in **tags**. Most tags come in pairs:\n\n```html\n<p>This is a paragraph.</p>\n```\n\n- `<p>` is the **opening tag**\n- `</p>` is the **closing tag** (note the forward slash)\n- Together with the content, they form an **element**\n\nTags can also carry **attributes** — extra information written inside the opening tag:\n\n```html\n<a href=\"https://codeguru.ai\">Visit CodeGuru</a>\n```\n\nHere `href` is the attribute name and `\"https://codeguru.ai\"` is its value.\n\nIn the code example below, you will see a minimal but complete HTML page using the most essential tags."
    },
    "codeExample": {
      "title": "Your First HTML Page",
      "language": "html-css",
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My First Page</title>\n</head>\n<body>\n\n  <h1>Hello, World!</h1>\n  <p>This is my first HTML page.</p>\n\n  <p>HTML uses <strong>tags</strong> to give content meaning.</p>\n\n  <a href=\"https://codeguru.ai\">Visit CodeGuru AI</a>\n\n</body>\n</html>",
      "explanation": "- `<!DOCTYPE html>` — tells the browser this is HTML5; always the very first line\n- `<html lang=\"en\">` — the root element; `lang` helps screen readers pronounce content\n- `<head>` — contains metadata the browser reads but does not display\n- `<meta charset=\"UTF-8\">` — allows all characters including Indian scripts and emoji\n- `<title>` — text shown in the browser tab and search results\n- `<body>` — all visible page content goes here\n- `<h1>` — the most important heading; every page should have exactly one\n- `<a href=\"...\">` — a hyperlink; `href` specifies the destination URL"
    },
    "exercise": {
      "title": "Build Your Personal Introduction Page",
      "instructions": "Create a complete HTML page that introduces you. The page must include: the full DOCTYPE and html/head/body structure, a title tag set to 'About Me', one h1 heading with your name, one paragraph describing what you study or do, and one anchor tag linking to any website. The page must be valid HTML5.\n\nExpected: a complete page with DOCTYPE, head, body, h1, p, and a tags all present.",
      "starterCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>About Me</title>\n</head>\n<body>\n\n  <!-- Add your h1 heading here -->\n\n  <!-- Add a paragraph about yourself here -->\n\n  <!-- Add a link to any website here -->\n\n</body>\n</html>",
      "solutionCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>About Me</title>\n</head>\n<body>\n\n  <h1>Rahul Sharma</h1>\n  <p>I am a first-year computer science student at Delhi University.</p>\n  <a href=\"https://codeguru.ai\">Visit CodeGuru AI</a>\n\n</body>\n</html>",
      "hints": [
        "💡 Place your h1 tag between the opening body tag and the closing body tag.",
        "💡 A paragraph is written as: <p>Your text here.</p> — both tags are required.",
        "💡 A link is written as: <a href=\"https://example.com\">Link text</a> — the href attribute holds the URL."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "About Me",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "html-m1-l1-q1",
          "question": "What does HTML stand for?",
          "options": [
            "Hyper Transfer Markup Language",
            "HyperText Markup Language",
            "High-level Text Management Language",
            "Hyper Tool Marking Language"
          ],
          "correct": 1,
          "explanation": "HTML stands for HyperText Markup Language. HyperText refers to text that contains links to other documents. Markup means the language uses tags to annotate or label content, telling the browser what role each piece of content plays on the page."
        },
        {
          "id": "html-m1-l1-q2",
          "question": "Which part of an HTML document is displayed to the user in the browser window?",
          "options": [
            "Everything inside the head element",
            "Only the title element",
            "Everything inside the body element",
            "Only elements with a display attribute"
          ],
          "correct": 2,
          "explanation": "The body element contains all the content that the browser renders and displays to the user: headings, paragraphs, images, links, and so on. The head element contains metadata like the page title, character encoding, and CSS links, which the browser reads but does not render as visible content."
        },
        {
          "id": "html-m1-l1-q3",
          "question": "What is the purpose of the DOCTYPE declaration at the top of an HTML file?",
          "options": [
            "It sets the background colour of the page",
            "It tells the browser which version of HTML the document uses",
            "It links the HTML file to a CSS stylesheet",
            "It defines the page title shown in the browser tab"
          ],
          "correct": 1,
          "explanation": "The DOCTYPE declaration instructs the browser which version of HTML the document is written in. Writing <!DOCTYPE html> triggers HTML5 mode, which ensures modern, standards-based rendering. Without it, browsers enter 'quirks mode' and may display pages inconsistently across different browsers."
        }
      ]
    }
  },
  {
    "id": "html-m1-l2",
    "moduleId": "html-m1",
    "title": "HTML Document Structure",
    "order": 2,
    "xpReward": 10,
    "duration": "10 min",
    "explanation": {
      "title": "Inside an HTML Document: Head, Body, and Metadata",
      "content": "# HTML Document Structure\n\nEvery valid HTML page follows the same skeleton — a predictable hierarchy of nested elements. Understanding this structure is essential because every mistake you will encounter in HTML usually traces back to a missing or misplaced element in this hierarchy.\n\n## The Full Skeleton\n\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta name=\"description\" content=\"Page description\">\n  <title>Page Title</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <!-- Visible content goes here -->\n</body>\n</html>\n```\n\n## The head Element — Invisible Metadata\n\nThe `<head>` contains information for the browser and search engines, not for the user:\n\n| Tag | Purpose |\n|---|---|\n| `<meta charset=\"UTF-8\">` | Allow all characters and scripts |\n| `<meta name=\"viewport\" ...>` | Enable correct scaling on mobile devices |\n| `<meta name=\"description\" ...>` | The text search engines show under your link |\n| `<title>` | Text shown in the browser tab |\n| `<link rel=\"stylesheet\" href=\"...\">` | Connect an external CSS file |\n| `<script src=\"...\">` | Connect an external JavaScript file |\n\n## The viewport meta Tag\n\nThis tag is critical for mobile users:\n\n```html\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n```\n\nWithout it, mobile browsers zoom out to show the desktop version of your page, making text tiny and unreadable. With it, the page scales correctly to the device width.\n\n## HTML Comments\n\nComments are notes in your HTML that the browser ignores completely:\n\n```html\n<!-- This is a comment -->\n<!-- Comments help explain your code -->\n```\n\n## Nesting Rules\n\nElements must be properly nested — every opened tag must be closed before its parent is closed:\n\n```html\n<!-- Correct nesting -->\n<p>This is <strong>bold</strong> text.</p>\n\n<!-- Incorrect — strong is not closed before p -->\n<p>This is <strong>bold text.</p></strong>\n```\n\nBrowsers often forgive incorrect nesting, but it causes unpredictable display bugs. Always nest correctly.\n\nIn the code example below, you will see a fully structured HTML document with all head metadata filled in correctly."
    },
    "codeExample": {
      "title": "Complete Page Structure",
      "language": "html-css",
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <!-- Metadata — not visible on the page -->\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta name=\"description\" content=\"CodeGuru AI — learn to code in India\">\n  <meta name=\"author\" content=\"Rahul Sharma\">\n  <title>CodeGuru AI | Learn to Code</title>\n  <!-- Inline style for demonstration -->\n  <style>\n    body { font-family: Arial, sans-serif; padding: 20px; }\n    h1   { color: #22c55e; }\n  </style>\n</head>\n<body>\n\n  <!-- Main visible content -->\n  <h1>Welcome to CodeGuru AI</h1>\n\n  <!-- HTML comments are invisible to users -->\n  <!-- This paragraph describes the site -->\n  <p>Learn Python, JavaScript, Java, and HTML/CSS with AI guidance.</p>\n\n  <p>Built for <strong>Indian learners</strong> at affordable prices.</p>\n\n</body>\n</html>",
      "explanation": "- `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">` — the most important tag for mobile; makes the browser use the real device width\n- `<meta name=\"description\" content=\"...\">` — shown by Google under your page link; keep under 160 characters\n- `<style>` inside `<head>` — embeds CSS directly in the HTML file; use external `.css` files for larger projects\n- `<!-- comment -->` — the browser ignores everything between `<!--` and `-->`\n- `<strong>` — marks text as important; browsers render it bold by default"
    },
    "exercise": {
      "title": "Build a Product Landing Page Shell",
      "instructions": "Create a complete HTML document for a product page. Include in the head: charset meta, viewport meta, a description meta with content 'Affordable coding courses', and a title of 'CodeGuru Courses'. In the body, add one h1, one paragraph, and one HTML comment explaining what the page is. The document must be valid HTML5.\n\nExpected: complete structure with all required head tags and visible body content.",
      "starterCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <!-- Add charset meta here -->\n\n  <!-- Add viewport meta here -->\n\n  <!-- Add description meta here -->\n\n  <title>CodeGuru Courses</title>\n</head>\n<body>\n\n  <!-- Add a comment describing this page -->\n\n  <!-- Add an h1 heading here -->\n\n  <!-- Add a paragraph here -->\n\n</body>\n</html>",
      "solutionCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta name=\"description\" content=\"Affordable coding courses\">\n  <title>CodeGuru Courses</title>\n</head>\n<body>\n\n  <!-- This page showcases our coding courses -->\n\n  <h1>Our Courses</h1>\n  <p>Learn to code with AI-powered guidance at Indian prices.</p>\n\n</body>\n</html>",
      "hints": [
        "💡 The charset meta tag is: <meta charset=\"UTF-8\"> — no closing tag needed for meta elements.",
        "💡 The viewport meta tag is: <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
        "💡 A comment is written as: <!-- your comment text here --> — the browser ignores everything inside."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "CodeGuru Courses",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "html-m1-l2-q1",
          "question": "What is the purpose of the viewport meta tag in HTML?",
          "options": [
            "It sets the font size for all text on the page",
            "It enables correct page scaling on mobile devices",
            "It connects the HTML page to a CSS file",
            "It sets the page background colour"
          ],
          "correct": 1,
          "explanation": "The viewport meta tag tells mobile browsers to scale the page to the device's actual screen width rather than simulating a full desktop screen. Without it, mobile browsers zoom out so the page fits on the small screen, making all text tiny and unreadable. It is essential for any page that should work on phones."
        },
        {
          "id": "html-m1-l2-q2",
          "question": "Which HTML element contains information about the page that is not displayed to the user?",
          "options": [
            "body",
            "header",
            "head",
            "meta"
          ],
          "correct": 2,
          "explanation": "The head element is the container for all page metadata: the title shown in the browser tab, character encoding, viewport settings, CSS and JavaScript file links, and search engine descriptions. None of this content appears in the visible page. The body element contains all the visible content."
        }
      ]
    }
  },
  {
    "id": "html-m1-l3",
    "moduleId": "html-m1",
    "title": "Headings, Paragraphs, and Text Tags",
    "order": 3,
    "xpReward": 15,
    "duration": "11 min",
    "explanation": {
      "title": "Structuring Text with Headings, Paragraphs, and Inline Tags",
      "content": "# Headings and Paragraphs\n\nText is the foundation of almost every webpage. HTML provides specific elements for every kind of text, from page titles down to individual important words. Choosing the right element is important for accessibility, search engine optimisation, and visual clarity.\n\n## The Six Heading Levels\n\nHTML has six levels of headings, `<h1>` through `<h6>`:\n\n```html\n<h1>Main Page Title</h1>\n<h2>Section Heading</h2>\n<h3>Subsection</h3>\n<h4>Sub-subsection</h4>\n<h5>Minor heading</h5>\n<h6>Smallest heading</h6>\n```\n\nKey rules:\n- Use only **one `<h1>`** per page — it tells search engines and screen readers what the page is about\n- Headings must be used in **logical order** — never skip from h1 to h4\n- Choose heading levels based on **document structure**, not visual size\n\n## Paragraphs\n\n```html\n<p>A paragraph groups related sentences into a block of text.</p>\n<p>Each paragraph element creates vertical spacing above and below.</p>\n```\n\nBrowsers collapse all whitespace inside HTML to a single space. To force a line break within a paragraph, use `<br>`:\n\n```html\n<p>Line one.<br>Line two on the same paragraph.</p>\n```\n\n## Inline Text Elements\n\nThese elements style or label individual words or phrases inside a paragraph:\n\n| Element | Default appearance | Semantic meaning |\n|---|---|---|\n| `<strong>` | **Bold** | Importance |\n| `<em>` | *Italic* | Emphasis |\n| `<u>` | Underline | Stylistic |\n| `<mark>` | Highlighted | Highlighted |\n| `<small>` | Smaller | Fine print |\n| `<del>` | ~~Strikethrough~~ | Deleted text |\n| `<sub>` | Subscript | H₂O |\n| `<sup>` | Superscript | x² |\n| `<code>` | `Monospace` | Code snippet |\n\n## Horizontal Rule and Line Break\n\n```html\n<hr>   <!-- horizontal line — a thematic break -->\n<br>   <!-- line break — not a new paragraph -->\n```\n\nBoth `<hr>` and `<br>` are **void elements** — they have no content and no closing tag.\n\nIn the code example below, you will see all six heading levels and several inline text elements used in a realistic article layout."
    },
    "codeExample": {
      "title": "Article Text Elements",
      "language": "html-css",
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Python Guide</title>\n</head>\n<body>\n\n  <h1>The Complete Python Guide</h1>\n  <p><small>Last updated: 2025 | 10 min read</small></p>\n\n  <h2>What is Python?</h2>\n  <p>Python is a <strong>powerful</strong> yet <em>beginner-friendly</em>\n  programming language used worldwide.</p>\n\n  <h2>Why Learn Python?</h2>\n  <p>Python powers <mark>artificial intelligence</mark>, web development,\n  and data science.</p>\n\n  <h3>Key Facts</h3>\n  <p>Python was created in <strong>1991</strong>. The latest version is\n  Python <sup>3</sup>. Water is H<sub>2</sub>O — just for demo!</p>\n\n  <hr>\n\n  <h2>A Simple Example</h2>\n  <p>The classic first program uses the <code>print()</code> function:</p>\n\n  <h3>Getting Started</h3>\n  <p>Install Python, then run:<br>\n  Open terminal and type <code>python --version</code>.</p>\n\n  <h2>Summary</h2>\n  <p><del>Python is difficult.</del> Python is easy to learn!</p>\n\n</body>\n</html>",
      "explanation": "- `<h1>` through `<h3>` — three heading levels establish the content hierarchy for search engines and screen readers\n- `<strong>powerful</strong>` — bold text that also signals importance to assistive technology\n- `<em>beginner-friendly</em>` — italic text that signals stress emphasis\n- `<mark>artificial intelligence</mark>` — highlights text with a yellow background by default\n- `<hr>` — a horizontal line representing a thematic break; a void element with no closing tag\n- `<code>print()</code>` — renders text in a monospace font to indicate computer code"
    },
    "exercise": {
      "title": "Write a Formatted Bio Article",
      "instructions": "Create a bio page for a fictional person. Use: one h1 for the person's full name, one h2 for 'About', a paragraph with at least one strong and one em tag, one h2 for 'Skills', a paragraph with at least one code tag, one hr between sections, and one small tag for a footer note. The page must have complete HTML5 structure.\n\nExpected: page with h1, two h2 elements, hr, and inline text elements all used correctly.",
      "starterCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Bio Page</title>\n</head>\n<body>\n\n  <!-- h1: person's full name -->\n\n  <h2>About</h2>\n  <!-- paragraph with strong and em -->\n\n  <hr>\n\n  <h2>Skills</h2>\n  <!-- paragraph with a code tag -->\n\n  <!-- small tag for footer note -->\n\n</body>\n</html>",
      "solutionCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Bio Page</title>\n</head>\n<body>\n\n  <h1>Priya Verma</h1>\n\n  <h2>About</h2>\n  <p>Priya is a <strong>full-stack developer</strong> with <em>three years</em> of experience.</p>\n\n  <hr>\n\n  <h2>Skills</h2>\n  <p>She writes <code>Python</code> and <code>JavaScript</code> every day.</p>\n\n  <p><small>Last updated: January 2025</small></p>\n\n</body>\n</html>",
      "hints": [
        "💡 Place the h1 directly after the opening body tag with the person's name: <h1>Full Name</h1>",
        "💡 Inline tags go inside a p tag: <p>She is a <strong>developer</strong> with <em>experience</em>.</p>",
        "💡 The hr tag is a void element — write it as <hr> with no closing tag and no content."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "<h1>",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "html-m1-l3-q1",
          "question": "How many h1 elements should a well-structured HTML page have?",
          "options": [
            "As many as needed — one per section",
            "Exactly one — it represents the main topic of the page",
            "Between two and five",
            "None — h1 is deprecated in HTML5"
          ],
          "correct": 1,
          "explanation": "A well-structured HTML page should have exactly one h1 element representing the page's main topic. Search engines use the h1 to understand what the page is about, and screen readers use it as a navigation landmark. Using multiple h1 elements dilutes the page's focus for both users and search engines."
        },
        {
          "id": "html-m1-l3-q2",
          "question": "What is the semantic difference between strong and b in HTML?",
          "options": [
            "There is no difference — they render identically",
            "strong signals importance to browsers and assistive technology; b is purely visual bold",
            "b is stronger emphasis than strong",
            "strong only works inside headings; b works everywhere"
          ],
          "correct": 1,
          "explanation": "Both strong and b render text in bold by default, but they carry different semantic meanings. strong signals that the text is of serious importance — screen readers may announce it with extra emphasis. b is purely presentational bold with no extra meaning. HTML5 recommends using strong for important text and b only when no semantic meaning is intended."
        },
        {
          "id": "html-m1-l3-q3",
          "question": "Which element creates a line break without starting a new paragraph?",
          "options": [
            "<lb>",
            "<nl>",
            "<br>",
            "<line>"
          ],
          "correct": 2,
          "explanation": "The br element (break) inserts a single line break within the current paragraph or block without creating a new paragraph element. It is a void element — written as <br> with no closing tag. Use it sparingly; for separating unrelated content, a new p element is more semantically appropriate."
        }
      ]
    }
  }
]
''')

# ── html-m2 — Variables and Data Types
# Lessons : html-m2-l1, html-m2-l2, html-m2-l3
# XP      : 35
html-css_m2_raw = json.loads(r'''
[
  {
    "id": "html-m2-l1",
    "moduleId": "html-m2",
    "title": "Lists and Links",
    "order": 1,
    "xpReward": 10,
    "duration": "11 min",
    "explanation": {
      "title": "Organising Content with Lists and Navigating with Links",
      "content": "# Lists in HTML\n\nLists are everywhere on the web — navigation menus, product features, step-by-step instructions, and shopping carts all use HTML lists. There are three kinds:\n\n## Unordered Lists — `<ul>`\n\nAn **unordered list** displays bullet points. Use it when order does not matter:\n\n```html\n<ul>\n  <li>Python</li>\n  <li>JavaScript</li>\n  <li>HTML and CSS</li>\n</ul>\n```\n\nEach item inside the list uses the `<li>` (list item) element.\n\n## Ordered Lists — `<ol>`\n\nAn **ordered list** displays numbers (or letters). Use it when sequence matters:\n\n```html\n<ol>\n  <li>Install Python</li>\n  <li>Open a text editor</li>\n  <li>Write your first program</li>\n</ol>\n```\n\nThe `type` attribute changes the numbering style: `type=\"A\"` for uppercase letters, `type=\"i\"` for Roman numerals.\n\n## Description Lists — `<dl>`\n\nA **description list** pairs terms with their definitions:\n\n```html\n<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language — the structure of the web.</dd>\n  <dt>CSS</dt>\n  <dd>Cascading Style Sheets — the styling of the web.</dd>\n</dl>\n```\n\n## Nested Lists\n\nYou can place a list inside another `<li>` to create sub-levels:\n\n```html\n<ul>\n  <li>Frontend\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n    </ul>\n  </li>\n  <li>Backend</li>\n</ul>\n```\n\n## Links — `<a>`\n\nThe anchor element `<a>` creates a hyperlink. The `href` attribute holds the destination:\n\n```html\n<a href=\"https://codeguru.ai\">CodeGuru AI</a>        <!-- external -->\n<a href=\"about.html\">About Us</a>                    <!-- same site -->\n<a href=\"#skills\">Jump to Skills</a>                 <!-- same page -->\n<a href=\"mailto:hi@codeguru.ai\">Email us</a>          <!-- email -->\n<a href=\"https://x.com\" target=\"_blank\">X (Twitter)</a> <!-- new tab -->\n```\n\nThe `target=\"_blank\"` attribute opens the link in a new browser tab. When using it, also add `rel=\"noopener noreferrer\"` for security.\n\nIn the code example below, you will see all three list types and multiple link patterns used in a course catalogue page."
    },
    "codeExample": {
      "title": "Course Catalogue Page",
      "language": "html-css",
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Course Catalogue</title>\n</head>\n<body>\n\n  <h1>CodeGuru AI — Course Catalogue</h1>\n\n  <h2>Available Languages</h2>\n  <ul>\n    <li>Python</li>\n    <li>JavaScript</li>\n    <li>Java</li>\n    <li>HTML &amp; CSS</li>\n  </ul>\n\n  <h2>How to Enrol</h2>\n  <ol>\n    <li>Create a free account</li>\n    <li>Choose your language</li>\n    <li>Complete Lesson 1</li>\n    <li>Earn your first XP badge</li>\n  </ol>\n\n  <h2>Glossary</h2>\n  <dl>\n    <dt>XP</dt>\n    <dd>Experience points earned by completing lessons.</dd>\n    <dt>Module</dt>\n    <dd>A group of related lessons on one topic.</dd>\n  </dl>\n\n  <h2>Quick Links</h2>\n  <ul>\n    <li><a href=\"https://codeguru.ai\">Home</a></li>\n    <li><a href=\"https://codeguru.ai/courses\">All Courses</a></li>\n    <li>\n      <a href=\"https://codeguru.ai/signup\" target=\"_blank\"\n         rel=\"noopener noreferrer\">Sign Up (new tab)</a>\n    </li>\n    <li><a href=\"mailto:support@codeguru.ai\">Email Support</a></li>\n  </ul>\n\n</body>\n</html>",
      "explanation": "- `<ul>` with `<li>` — unordered list; browsers add bullet points by default\n- `&amp;` — the HTML entity for the `&` character; raw `&` can confuse browsers\n- `<ol>` with `<li>` — ordered list; browsers number items automatically starting from 1\n- `<dl>`, `<dt>`, `<dd>` — description list; `dt` is the term, `dd` is the indented definition\n- `<a href=\"https://...\">` — external link; always include `https://` for absolute URLs\n- `target=\"_blank\"` — opens the link in a new tab; combine with `rel=\"noopener noreferrer\"` to prevent security issues"
    },
    "exercise": {
      "title": "Build a Skills and Resources Page",
      "instructions": "Create an HTML page with three sections. Section 1: an h2 heading 'My Skills' followed by an unordered list of at least three programming skills. Section 2: an h2 heading 'Learning Steps' followed by an ordered list of at least three steps. Section 3: an h2 heading 'Resources' with two anchor links — one opening in a new tab using target='_blank'. All inside a complete HTML5 structure.\n\nExpected: page with ul, ol, and two a tags, one with target='_blank'.",
      "starterCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Skills</title>\n</head>\n<body>\n\n  <h1>My Developer Profile</h1>\n\n  <h2>My Skills</h2>\n  <!-- unordered list with 3+ skills -->\n\n  <h2>Learning Steps</h2>\n  <!-- ordered list with 3+ steps -->\n\n  <h2>Resources</h2>\n  <!-- two links, one with target=\"_blank\" -->\n\n</body>\n</html>",
      "solutionCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Skills</title>\n</head>\n<body>\n\n  <h1>My Developer Profile</h1>\n\n  <h2>My Skills</h2>\n  <ul>\n    <li>HTML</li>\n    <li>CSS</li>\n    <li>JavaScript</li>\n  </ul>\n\n  <h2>Learning Steps</h2>\n  <ol>\n    <li>Learn HTML structure</li>\n    <li>Style with CSS</li>\n    <li>Add interactivity with JavaScript</li>\n  </ol>\n\n  <h2>Resources</h2>\n  <ul>\n    <li><a href=\"https://codeguru.ai\">CodeGuru AI</a></li>\n    <li><a href=\"https://developer.mozilla.org\" target=\"_blank\" rel=\"noopener noreferrer\">MDN Docs</a></li>\n  </ul>\n\n</body>\n</html>",
      "hints": [
        "💡 An unordered list starts with <ul> and each item is wrapped in <li>...</li> tags.",
        "💡 An ordered list uses <ol> instead of <ul> — browsers automatically add numbers.",
        "💡 Add target=\"_blank\" inside the opening a tag to open a link in a new tab: <a href=\"...\" target=\"_blank\">."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "<ul>",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "<ol>",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "html-m2-l1-q1",
          "question": "Which HTML element is used for each item inside both ul and ol lists?",
          "options": [
            "<item>",
            "<list>",
            "<li>",
            "<dt>"
          ],
          "correct": 2,
          "explanation": "The li (list item) element is used for each individual item inside both ul (unordered) and ol (ordered) lists. The dt and dd elements belong to dl (description list). There are no HTML elements named item or list."
        },
        {
          "id": "html-m2-l1-q2",
          "question": "What attribute on an anchor tag opens the link in a new browser tab?",
          "options": [
            "rel=\"new\"",
            "target=\"_blank\"",
            "href=\"_new\"",
            "open=\"tab\""
          ],
          "correct": 1,
          "explanation": "The target=\"_blank\" attribute tells the browser to open the linked page in a new tab or window. For security, always pair it with rel=\"noopener noreferrer\" to prevent the new page from being able to access the original page via JavaScript."
        },
        {
          "id": "html-m2-l1-q3",
          "question": "Which list type should you use when the order of items matters?",
          "options": [
            "ul — unordered list",
            "dl — description list",
            "ol — ordered list",
            "ll — labelled list"
          ],
          "correct": 2,
          "explanation": "The ol (ordered list) element creates a numbered list where sequence is meaningful — for example, installation steps, recipe instructions, or rankings. Use ul when order does not matter, and dl for term-definition pairs. There is no ll element in HTML."
        }
      ]
    }
  },
  {
    "id": "html-m2-l2",
    "moduleId": "html-m2",
    "title": "Images and Tables",
    "order": 2,
    "xpReward": 10,
    "duration": "12 min",
    "explanation": {
      "title": "Displaying Images and Organising Data in Tables",
      "content": "# Images in HTML\n\nImages make pages visual and engaging. The `<img>` element embeds an image. It is a **void element** — no closing tag is needed:\n\n```html\n<img src=\"photo.jpg\" alt=\"A smiling student\" width=\"300\" height=\"200\">\n```\n\nThe two most important attributes are:\n\n- `src` — the path or URL of the image file\n- `alt` — a text description shown when the image cannot load and read aloud by screen readers\n\nThe `alt` attribute is **never optional**. An empty `alt=\"\"` is acceptable for purely decorative images, but descriptive text is required for informative ones.\n\n## Image Paths\n\n```html\n<!-- Same folder as the HTML file -->\n<img src=\"logo.png\" alt=\"CodeGuru logo\">\n\n<!-- Subfolder -->\n<img src=\"images/banner.jpg\" alt=\"Course banner\">\n\n<!-- External URL -->\n<img src=\"https://example.com/photo.jpg\" alt=\"External photo\">\n```\n\n## Tables in HTML\n\nTables organise data into rows and columns. A complete table uses several elements:\n\n```html\n<table>\n  <thead>\n    <tr>\n      <th>Language</th>\n      <th>Level</th>\n      <th>Duration</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Python</td>\n      <td>Beginner</td>\n      <td>40 hours</td>\n    </tr>\n  </tbody>\n</table>\n```\n\n| Element | Role |\n|---|---|\n| `<table>` | Outer container |\n| `<thead>` | Header row group |\n| `<tbody>` | Body row group |\n| `<tr>` | Table row |\n| `<th>` | Header cell (bold, centred by default) |\n| `<td>` | Data cell |\n\n## Spanning Cells\n\nA cell can span multiple columns or rows:\n\n```html\n<td colspan=\"2\">Spans two columns</td>\n<td rowspan=\"3\">Spans three rows</td>\n```\n\n## Table Caption\n\n```html\n<table>\n  <caption>CodeGuru Course Comparison</caption>\n  ...\n</table>\n```\n\nThe `<caption>` provides a title for the table that assistive technology can announce.\n\nIn the code example below, you will see a complete comparison table with thead, tbody, caption, and an image placed above the table."
    },
    "codeExample": {
      "title": "Course Comparison with Image",
      "language": "html-css",
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Course Comparison</title>\n  <style>\n    body  { font-family: Arial, sans-serif; padding: 20px; }\n    table { border-collapse: collapse; width: 100%; }\n    th, td { border: 1px solid #ccc; padding: 8px 12px; text-align: left; }\n    th    { background: #22c55e; color: white; }\n    img   { border-radius: 8px; margin-bottom: 16px; }\n  </style>\n</head>\n<body>\n\n  <h1>CodeGuru AI Courses</h1>\n\n  <!-- Placeholder image from picsum.photos -->\n  <img src=\"https://picsum.photos/400/150\" alt=\"Coding workspace\" width=\"400\" height=\"150\">\n\n  <table>\n    <caption>Beginner Course Comparison</caption>\n    <thead>\n      <tr>\n        <th>Language</th>\n        <th>Modules</th>\n        <th>Hours</th>\n        <th>Price</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Python</td>\n        <td>6</td>\n        <td>40</td>\n        <td>Free</td>\n      </tr>\n      <tr>\n        <td>JavaScript</td>\n        <td>6</td>\n        <td>35</td>\n        <td>Free</td>\n      </tr>\n      <tr>\n        <td>HTML &amp; CSS</td>\n        <td>6</td>\n        <td>30</td>\n        <td>Free</td>\n      </tr>\n    </tbody>\n  </table>\n\n</body>\n</html>",
      "explanation": "- `<img src=\"...\" alt=\"...\">` — void element; `src` is the image path, `alt` is the text fallback\n- `width=\"400\" height=\"150\"` — pre-reserves space in the layout, preventing content jumping as images load\n- `<table>` → `<thead>` → `<tr>` → `<th>` — four-level nesting required for an accessible table\n- `<caption>` — a title for the table rendered above it; read by screen readers before the data\n- `border-collapse: collapse` — CSS that removes the double border between adjacent cells\n- `&amp;` — the HTML entity for `&`; raw ampersands must always be escaped in HTML"
    },
    "exercise": {
      "title": "Build a Product Showcase Table",
      "instructions": "Create an HTML page with one img tag using a placeholder image from https://picsum.photos/300/120 with a descriptive alt attribute. Below the image, create a table with caption 'Product Prices', a thead row with three th cells (Product, Category, Price), and at least three tbody rows with td cells. The page must be complete HTML5 with all table elements.\n\nExpected: page with img, table, caption, thead, tbody, th, and td all present.",
      "starterCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Products</title>\n  <style>\n    table { border-collapse: collapse; }\n    th, td { border: 1px solid #999; padding: 8px; }\n    th { background: #334155; color: white; }\n  </style>\n</head>\n<body>\n\n  <h1>Our Products</h1>\n\n  <!-- Add img tag with picsum.photos URL and alt text -->\n\n  <!-- Add table with caption, thead (3 headers), 3 tbody rows -->\n\n</body>\n</html>",
      "solutionCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Products</title>\n  <style>\n    table { border-collapse: collapse; }\n    th, td { border: 1px solid #999; padding: 8px; }\n    th { background: #334155; color: white; }\n  </style>\n</head>\n<body>\n\n  <h1>Our Products</h1>\n\n  <img src=\"https://picsum.photos/300/120\" alt=\"Product banner\" width=\"300\" height=\"120\">\n\n  <table>\n    <caption>Product Prices</caption>\n    <thead>\n      <tr><th>Product</th><th>Category</th><th>Price</th></tr>\n    </thead>\n    <tbody>\n      <tr><td>Keyboard</td><td>Hardware</td><td>₹1200</td></tr>\n      <tr><td>Mouse</td><td>Hardware</td><td>₹650</td></tr>\n      <tr><td>VS Code</td><td>Software</td><td>Free</td></tr>\n    </tbody>\n  </table>\n\n</body>\n</html>",
      "hints": [
        "💡 An img tag looks like: <img src=\"https://picsum.photos/300/120\" alt=\"Description\" width=\"300\" height=\"120\">",
        "💡 Start your table with <table><caption>Product Prices</caption> then add thead and tbody sections.",
        "💡 Each row is a <tr> element containing either <th> cells (header) or <td> cells (data)."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "<table>",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "<img",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "html-m2-l2-q1",
          "question": "Why is the alt attribute on an img element important?",
          "options": [
            "It sets the size of the image on the page",
            "It links the image to a CSS style",
            "It provides a text description for screen readers and when the image fails to load",
            "It determines the file format of the image"
          ],
          "correct": 2,
          "explanation": "The alt attribute serves two critical purposes: it provides a text fallback shown when the image cannot load (due to a broken URL or slow connection), and it is read aloud by screen readers for users who cannot see images. Omitting alt entirely makes the page inaccessible. An empty alt=\"\" is only correct for purely decorative images."
        },
        {
          "id": "html-m2-l2-q2",
          "question": "What is the correct order of elements inside a well-structured HTML table?",
          "options": [
            "table > tr > th > td",
            "table > thead/tbody > tr > th/td",
            "table > th > tr > td",
            "table > row > cell > header"
          ],
          "correct": 1,
          "explanation": "A well-structured HTML table nests elements in this order: table contains thead and tbody, each containing tr (row) elements, which contain th (header cells) or td (data cells). Skipping thead/tbody is technically valid but reduces accessibility. There are no elements named row or cell in HTML."
        }
      ]
    }
  },
  {
    "id": "html-m2-l3",
    "moduleId": "html-m2",
    "title": "Forms and Input Elements",
    "order": 3,
    "xpReward": 15,
    "duration": "13 min",
    "explanation": {
      "title": "Collecting User Input with HTML Forms",
      "content": "# HTML Forms\n\nForms are how users send data to a server — login credentials, search queries, order details, feedback messages. Every form on the web is built with the `<form>` element.\n\n## The form Element\n\n```html\n<form action=\"/submit\" method=\"post\">\n  <!-- inputs go here -->\n</form>\n```\n\n- `action` — the URL where form data is sent on submission\n- `method` — how data is sent: `get` (appends to URL) or `post` (sends in request body)\n\n## Input Types\n\nThe `<input>` element is a void element that renders different controls based on its `type` attribute:\n\n| type | Renders |\n|---|---|\n| `text` | Single-line text box |\n| `email` | Text box with email format validation |\n| `password` | Text box that hides characters |\n| `number` | Numeric spinner |\n| `checkbox` | Tick box |\n| `radio` | Round selection button |\n| `date` | Date picker |\n| `file` | File chooser |\n| `submit` | Submit button |\n| `reset` | Clear form button |\n\n## Labels — Always Required\n\nEvery input needs a `<label>` for accessibility. The `for` attribute links the label to the input's `id`:\n\n```html\n<label for=\"email\">Email Address</label>\n<input type=\"email\" id=\"email\" name=\"email\" placeholder=\"you@example.com\">\n```\n\nWhen a user clicks the label, focus moves to the linked input. Screen readers read the label text when the input is focused.\n\n## Other Form Controls\n\n```html\n<!-- Multi-line text box -->\n<textarea id=\"msg\" name=\"message\" rows=\"4\" placeholder=\"Your message...\"></textarea>\n\n<!-- Drop-down selector -->\n<select id=\"level\" name=\"level\">\n  <option value=\"beginner\">Beginner</option>\n  <option value=\"intermediate\">Intermediate</option>\n</select>\n\n<!-- Button -->\n<button type=\"submit\">Send</button>\n```\n\n## Grouping with fieldset and legend\n\n```html\n<fieldset>\n  <legend>Preferred Language</legend>\n  <input type=\"radio\" id=\"py\" name=\"lang\" value=\"python\">\n  <label for=\"py\">Python</label>\n  <input type=\"radio\" id=\"js\" name=\"lang\" value=\"javascript\">\n  <label for=\"js\">JavaScript</label>\n</fieldset>\n```\n\n`<fieldset>` draws a box around related inputs; `<legend>` provides a caption for that group.\n\nIn the code example below, you will see a complete registration form using many input types, labels, a select, and a textarea."
    },
    "codeExample": {
      "title": "Student Registration Form",
      "language": "html-css",
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Registration Form</title>\n  <style>\n    body   { font-family: Arial, sans-serif; padding: 20px; max-width: 480px; }\n    label  { display: block; margin-top: 12px; font-weight: bold; }\n    input, select, textarea { width: 100%; padding: 8px; margin-top: 4px;\n                              border: 1px solid #ccc; border-radius: 4px; }\n    button { margin-top: 16px; padding: 10px 24px;\n             background: #22c55e; color: white; border: none;\n             border-radius: 4px; cursor: pointer; }\n  </style>\n</head>\n<body>\n\n  <h1>Create Account</h1>\n\n  <form action=\"/register\" method=\"post\">\n\n    <label for=\"name\">Full Name</label>\n    <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Priya Sharma\" required>\n\n    <label for=\"email\">Email</label>\n    <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"priya@example.com\" required>\n\n    <label for=\"password\">Password</label>\n    <input type=\"password\" id=\"password\" name=\"password\" required>\n\n    <label for=\"dob\">Date of Birth</label>\n    <input type=\"date\" id=\"dob\" name=\"dob\">\n\n    <label for=\"course\">Choose Course</label>\n    <select id=\"course\" name=\"course\">\n      <option value=\"python\">Python</option>\n      <option value=\"javascript\">JavaScript</option>\n      <option value=\"html\">HTML &amp; CSS</option>\n    </select>\n\n    <label for=\"bio\">Short Bio</label>\n    <textarea id=\"bio\" name=\"bio\" rows=\"3\" placeholder=\"Tell us about yourself...\"></textarea>\n\n    <button type=\"submit\">Register</button>\n\n  </form>\n\n</body>\n</html>",
      "explanation": "- `<form action=\"/register\" method=\"post\">` — `action` is the server URL; `post` keeps passwords out of the URL\n- `type=\"email\"` — the browser validates the value looks like an email before allowing submission\n- `type=\"password\"` — renders an input that shows dots instead of characters for security\n- `required` — boolean attribute; the browser blocks submission if this field is empty\n- `<label for=\"name\">` with `<input id=\"name\">` — clicking the label focuses the input; essential for accessibility\n- `<textarea rows=\"3\">` — a multi-line text input; `rows` sets the initial visible height"
    },
    "exercise": {
      "title": "Build a Contact Form",
      "instructions": "Create a contact form page. The form must contain: a text input for full name with a linked label, an email input with a linked label, a select dropdown with at least three subject options and a linked label, a textarea for message with a linked label, and a submit button. Use proper for/id pairing on all labels. The form must be inside a complete HTML5 page.\n\nExpected: form with all four inputs, a select, textarea, and submit button.",
      "starterCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Contact Us</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 20px; max-width: 500px; }\n    label { display: block; margin-top: 12px; font-weight: bold; }\n    input, select, textarea { width: 100%; padding: 8px; margin-top: 4px; }\n    button { margin-top: 12px; padding: 8px 20px; background: #22c55e; color: white; border: none; }\n  </style>\n</head>\n<body>\n\n  <h1>Contact Us</h1>\n\n  <form action=\"/contact\" method=\"post\">\n\n    <!-- label + text input for full name -->\n\n    <!-- label + email input -->\n\n    <!-- label + select with 3 subject options -->\n\n    <!-- label + textarea for message -->\n\n    <!-- submit button -->\n\n  </form>\n\n</body>\n</html>",
      "solutionCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Contact Us</title>\n  <style>\n    body { font-family: Arial, sans-serif; padding: 20px; max-width: 500px; }\n    label { display: block; margin-top: 12px; font-weight: bold; }\n    input, select, textarea { width: 100%; padding: 8px; margin-top: 4px; }\n    button { margin-top: 12px; padding: 8px 20px; background: #22c55e; color: white; border: none; }\n  </style>\n</head>\n<body>\n\n  <h1>Contact Us</h1>\n\n  <form action=\"/contact\" method=\"post\">\n\n    <label for=\"name\">Full Name</label>\n    <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Your name\" required>\n\n    <label for=\"email\">Email</label>\n    <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"you@email.com\" required>\n\n    <label for=\"subject\">Subject</label>\n    <select id=\"subject\" name=\"subject\">\n      <option value=\"general\">General Enquiry</option>\n      <option value=\"billing\">Billing</option>\n      <option value=\"support\">Technical Support</option>\n    </select>\n\n    <label for=\"message\">Message</label>\n    <textarea id=\"message\" name=\"message\" rows=\"4\" placeholder=\"Your message...\"></textarea>\n\n    <button type=\"submit\">Send Message</button>\n\n  </form>\n\n</body>\n</html>",
      "hints": [
        "💡 Each label needs a for attribute matching the id of its input: <label for=\"name\"> pairs with <input id=\"name\">.",
        "💡 A select element contains option elements: <select id=\"subject\"><option value=\"...\">Text</option></select>.",
        "💡 A textarea is not a void element — it needs a closing tag: <textarea id=\"message\" rows=\"4\"></textarea>."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "<form",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "<select",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "html-m2-l3-q1",
          "question": "What is the purpose of the for attribute on a label element?",
          "options": [
            "It sets the text direction of the label",
            "It links the label to an input by matching the input's id",
            "It specifies how many characters the label can contain",
            "It controls whether the label is visible"
          ],
          "correct": 1,
          "explanation": "The for attribute on a label element must match the id attribute of the input it describes. This creates an accessible connection: clicking the label moves focus to the input, and screen readers announce the label text when the input is focused. Without this pairing, users with disabilities cannot tell what each input is for."
        },
        {
          "id": "html-m2-l3-q2",
          "question": "What is the difference between the get and post methods on a form?",
          "options": [
            "get sends data in the request body; post appends it to the URL",
            "get appends form data to the URL; post sends it in the request body",
            "get is for text fields only; post works with all input types",
            "They are identical and produce the same result"
          ],
          "correct": 1,
          "explanation": "With method=\"get\", form data is appended to the URL as query parameters (visible in the browser's address bar). With method=\"post\", data is sent in the HTTP request body and not visible in the URL. Use post for sensitive data like passwords and for actions that change server data. Use get for searches where the URL can be shared."
        }
      ]
    }
  }
]
''')

# ── html-m3 — Conditions
# Lessons : html-m3-l1, html-m3-l2, html-m3-l3
# XP      : 35
html-css_m3_raw = json.loads(r'''
[
  {
    "id": "html-m3-l1",
    "moduleId": "html-m3",
    "title": "Introduction to CSS and Selectors",
    "order": 1,
    "xpReward": 10,
    "duration": "12 min",
    "explanation": {
      "title": "How CSS Works and How to Target Elements with Selectors",
      "content": "# What is CSS?\n\nIf HTML is the skeleton of a webpage, **CSS** (Cascading Style Sheets) is the skin, clothes, and cosmetics. It controls everything visual: colours, fonts, spacing, sizes, animations, and layout.\n\nCSS is a separate language from HTML. You write rules that say: find these elements, then apply these styles.\n\n## Three Ways to Add CSS\n\n**1. Inline** — directly on one element (least maintainable):\n```html\n<p style=\"color: red; font-size: 18px;\">Red text</p>\n```\n\n**2. Internal** — inside a `<style>` tag in `<head>` (fine for small pages):\n```html\n<style>\n  p { color: red; }\n</style>\n```\n\n**3. External** — a separate `.css` file (recommended for all real projects):\n```html\n<link rel=\"stylesheet\" href=\"styles.css\">\n```\n\n## CSS Rule Anatomy\n\n```css\nselector {\n  property: value;\n  property: value;\n}\n```\n\n- **Selector** — which HTML elements to style\n- **Property** — what to change (color, font-size, margin…)\n- **Value** — the new setting\n- Each property-value pair ends with a semicolon `;`\n\n## The Core Selectors\n\n| Selector | Syntax | Targets |\n|---|---|---|\n| Element | `p` | All `<p>` elements |\n| Class | `.card` | All elements with `class=\"card\"` |\n| ID | `#hero` | The one element with `id=\"hero\"` |\n| Group | `h1, h2, h3` | All h1, h2, and h3 elements |\n| Descendant | `nav a` | All `<a>` inside a `<nav>` |\n| Child | `ul > li` | Direct `<li>` children of `<ul>` |\n| Pseudo-class | `a:hover` | An `<a>` when the mouse is over it |\n\n## The Cascade and Specificity\n\n\"Cascading\" in CSS means that when multiple rules target the same element, the winner is determined by **specificity** (how specific the selector is):\n\n- ID selectors win over class selectors\n- Class selectors win over element selectors\n- Later rules beat earlier rules when specificity is equal\n- `!important` overrides everything (use sparingly)\n\nIn the code example below, you will see element, class, ID, and pseudo-class selectors all applied to the same page."
    },
    "codeExample": {
      "title": "CSS Selectors in Action",
      "language": "html-css",
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>CSS Selectors</title>\n  <style>\n    /* Element selector — targets all p elements */\n    p {\n      font-size: 16px;\n      line-height: 1.6;\n      color: #334155;\n    }\n\n    /* Class selector — targets elements with class=\"highlight\" */\n    .highlight {\n      background-color: #fef08a;\n      padding: 4px 8px;\n      border-radius: 4px;\n    }\n\n    /* ID selector — targets the one element with id=\"hero\" */\n    #hero {\n      font-size: 32px;\n      color: #22c55e;\n      text-align: center;\n    }\n\n    /* Group selector — targets both h2 and h3 */\n    h2, h3 {\n      color: #1e293b;\n      border-bottom: 2px solid #22c55e;\n      padding-bottom: 4px;\n    }\n\n    /* Descendant selector — only links inside nav */\n    nav a {\n      color: white;\n      text-decoration: none;\n      margin-right: 16px;\n    }\n\n    /* Pseudo-class — link on hover */\n    nav a:hover {\n      text-decoration: underline;\n    }\n\n    nav {\n      background: #1e293b;\n      padding: 12px 20px;\n    }\n  </style>\n</head>\n<body>\n\n  <nav>\n    <a href=\"#\">Home</a>\n    <a href=\"#\">Courses</a>\n    <a href=\"#\">About</a>\n  </nav>\n\n  <h1 id=\"hero\">Learn to Code</h1>\n\n  <h2>Why CodeGuru?</h2>\n  <p>We offer <span class=\"highlight\">free beginner courses</span> in multiple languages.</p>\n\n  <h3>Our Approach</h3>\n  <p>Every lesson includes a <span class=\"highlight\">code example</span> and an exercise.</p>\n\n</body>\n</html>",
      "explanation": "- `p { ... }` — element selector; applies to every `<p>` on the page\n- `.highlight { ... }` — class selector; the dot prefix targets elements with that class name\n- `#hero { ... }` — ID selector; the hash prefix targets the unique element with that id\n- `h2, h3 { ... }` — group selector; comma separates multiple targets sharing the same rules\n- `nav a { ... }` — descendant selector; styles only `<a>` elements that are inside `<nav>`\n- `nav a:hover { ... }` — pseudo-class; applies only when the cursor is positioned over the link"
    },
    "exercise": {
      "title": "Style a Profile Card with Selectors",
      "instructions": "Create an HTML page with a CSS style block that uses at least four different selector types. The page must have: an element selector styling all p tags, a class selector for a class named 'card' with a border and padding, an ID selector for id='headline' with a green color, and a pseudo-class hover style on anchor tags. Include matching HTML elements in the body to demonstrate each selector.\n\nExpected: page with element, class, ID, and pseudo-class selectors all applied.",
      "starterCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Profile Card</title>\n  <style>\n    /* Element selector: all p elements */\n    p {\n      font-size: 15px;\n      color: #334155;\n    }\n\n    /* Class selector: .card */\n    /* Add border: 1px solid #ccc and padding: 16px */\n\n    /* ID selector: #headline */\n    /* Add color: #22c55e */\n\n    /* Pseudo-class: a:hover */\n    /* Add text-decoration: underline and color: #16a34a */\n  </style>\n</head>\n<body>\n\n  <h1 id=\"headline\">Priya Verma</h1>\n\n  <div class=\"card\">\n    <p>Full-stack developer from Bangalore.</p>\n    <p>Loves Python and JavaScript.</p>\n    <a href=\"#\">View Portfolio</a>\n  </div>\n\n</body>\n</html>",
      "solutionCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Profile Card</title>\n  <style>\n    p { font-size: 15px; color: #334155; }\n    .card { border: 1px solid #ccc; padding: 16px; border-radius: 8px; }\n    #headline { color: #22c55e; }\n    a:hover { text-decoration: underline; color: #16a34a; }\n  </style>\n</head>\n<body>\n\n  <h1 id=\"headline\">Priya Verma</h1>\n\n  <div class=\"card\">\n    <p>Full-stack developer from Bangalore.</p>\n    <p>Loves Python and JavaScript.</p>\n    <a href=\"#\">View Portfolio</a>\n  </div>\n\n</body>\n</html>",
      "hints": [
        "💡 A class selector starts with a dot: .card { border: 1px solid #ccc; padding: 16px; }",
        "💡 An ID selector starts with a hash: #headline { color: #22c55e; }",
        "💡 A hover pseudo-class is written as a:hover { text-decoration: underline; } inside the style block."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": ".card",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "#headline",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "html-m3-l1-q1",
          "question": "Which CSS selector targets an element with the attribute class=\"card\"?",
          "options": [
            "#card",
            "card",
            ".card",
            "@card"
          ],
          "correct": 2,
          "explanation": "Class selectors in CSS start with a dot (period): .card targets all elements that have class=\"card\" in their HTML. The hash symbol (#) is used for ID selectors. Writing just card without a prefix would target elements with that tag name, which is only valid for actual HTML elements like p or h1."
        },
        {
          "id": "html-m3-l1-q2",
          "question": "What does a CSS pseudo-class like :hover do?",
          "options": [
            "It creates a fake element that appears on hover",
            "It applies styles only when the element is in a specific state",
            "It selects all hidden elements",
            "It overrides all other CSS rules"
          ],
          "correct": 1,
          "explanation": "A pseudo-class applies styles to an element only when it is in a particular state. a:hover applies styles when the cursor is over a link. Other common pseudo-classes include :focus (when an input is selected), :active (when a button is clicked), and :nth-child(n) (targeting elements by position)."
        },
        {
          "id": "html-m3-l1-q3",
          "question": "When two CSS rules target the same element with equal specificity, which one wins?",
          "options": [
            "The first rule defined always wins",
            "The shorter rule wins",
            "The later rule defined in the stylesheet wins",
            "Both rules are applied and merge their values"
          ],
          "correct": 2,
          "explanation": "When two rules have identical specificity, the cascade applies and the rule that appears later in the stylesheet wins. This is the 'cascading' part of Cascading Style Sheets. For properties that do not conflict, both rules apply. Understanding this order is essential for debugging unexpected CSS behaviour."
        }
      ]
    }
  },
  {
    "id": "html-m3-l2",
    "moduleId": "html-m3",
    "title": "Colors and Typography",
    "order": 2,
    "xpReward": 10,
    "duration": "12 min",
    "explanation": {
      "title": "Choosing Colours and Styling Text with CSS",
      "content": "# Colours in CSS\n\nColour is the single most impactful visual decision on any page. CSS offers five ways to specify colour:\n\n| Format | Example | Notes |\n|---|---|---|\n| Named | `red`, `coral`, `steelblue` | 140+ predefined names |\n| Hex | `#22c55e` | 6-digit RGB in hexadecimal |\n| Short hex | `#fff` | 3-digit shorthand when pairs match |\n| RGB | `rgb(34, 197, 94)` | Red, Green, Blue 0-255 |\n| RGBA | `rgba(34, 197, 94, 0.5)` | Same + alpha (0=transparent, 1=opaque) |\n| HSL | `hsl(142, 71%, 45%)` | Hue, Saturation, Lightness |\n\nHex and HSL are the formats professionals use most. Hex for precision, HSL for creating colour palettes (just change the lightness value).\n\n## Colour Properties\n\n```css\np {\n  color: #1e293b;            /* text colour */\n  background-color: #f8fafc; /* background fill */\n}\n```\n\n## Typography Properties\n\n```css\nbody {\n  font-family: 'Segoe UI', Arial, sans-serif; /* font stack */\n  font-size: 16px;      /* base size */\n  line-height: 1.6;     /* spacing between lines */\n  font-weight: 400;     /* normal weight */\n  font-style: normal;   /* or italic */\n  letter-spacing: 0.02em;\n  text-align: left;     /* left | center | right | justify */\n  text-transform: none; /* uppercase | lowercase | capitalize */\n  text-decoration: none; /* underline | line-through | none */\n}\n```\n\n## Font Stacks\n\nAlways specify a **font stack** — multiple fonts in priority order:\n\n```css\nfont-family: 'Poppins', 'Segoe UI', Arial, sans-serif;\n```\n\nIf Poppins is not installed, the browser tries Segoe UI, then Arial, then any available sans-serif font. Always end with a generic family: `serif`, `sans-serif`, `monospace`, or `cursive`.\n\n## Google Fonts\n\nGoogle Fonts provides hundreds of free, web-safe fonts:\n\n```html\n<link href=\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap\" rel=\"stylesheet\">\n```\n\nThen use it in CSS:\n```css\nbody { font-family: 'Poppins', sans-serif; }\n```\n\nIn the code example below, you will see a styled blog post card that uses colour variables, Google Fonts, and multiple typography properties."
    },
    "codeExample": {
      "title": "Styled Blog Post Card",
      "language": "html-css",
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Blog Post</title>\n  <link href=\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap\"\n        rel=\"stylesheet\">\n  <style>\n    body {\n      font-family: 'Poppins', sans-serif;\n      background-color: #f1f5f9;\n      padding: 40px 20px;\n      color: #1e293b;\n      line-height: 1.7;\n    }\n\n    .card {\n      background-color: #ffffff;\n      border-radius: 12px;\n      padding: 32px;\n      max-width: 600px;\n      margin: 0 auto;\n      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n    }\n\n    .tag {\n      background-color: #dcfce7;\n      color: #16a34a;\n      font-size: 12px;\n      font-weight: 600;\n      text-transform: uppercase;\n      letter-spacing: 0.08em;\n      padding: 4px 10px;\n      border-radius: 999px;\n    }\n\n    h1 {\n      font-size: 24px;\n      font-weight: 700;\n      color: #0f172a;\n      margin: 12px 0 8px;\n    }\n\n    .meta {\n      font-size: 13px;\n      color: #94a3b8;\n      margin-bottom: 16px;\n    }\n\n    p {\n      font-size: 15px;\n      color: #475569;\n    }\n\n    a {\n      color: #22c55e;\n      font-weight: 600;\n      text-decoration: none;\n    }\n\n    a:hover {\n      text-decoration: underline;\n    }\n  </style>\n</head>\n<body>\n\n  <div class=\"card\">\n    <span class=\"tag\">Python</span>\n    <h1>Getting Started with Python in 2025</h1>\n    <p class=\"meta\">By Rahul Sharma &middot; 8 min read</p>\n    <p>Python remains the most beginner-friendly language for coding.\n       In this guide you will set up your environment and write your\n       first real program in under 30 minutes.</p>\n    <a href=\"#\">Read more &rarr;</a>\n  </div>\n\n</body>\n</html>",
      "explanation": "- `font-family: 'Poppins', sans-serif` — uses Google Fonts Poppins; falls back to any system sans-serif\n- `background-color: #f1f5f9` on body sets the page background; `#ffffff` on `.card` creates contrast\n- `box-shadow: 0 4px 12px rgba(0,0,0,0.08)` — a subtle shadow; `rgba` alpha of `0.08` keeps it very light\n- `text-transform: uppercase; letter-spacing: 0.08em` — all-caps with extra spacing for the badge label\n- `border-radius: 999px` on `.tag` — a very large radius creates a pill shape on a short element\n- `&middot;` and `&rarr;` — HTML entities for the middle dot · and right arrow →"
    },
    "exercise": {
      "title": "Style a Pricing Card with Colours",
      "instructions": "Create a pricing card page. Apply a body background-color of #f8fafc. Create a div with class 'price-card' that has a white background, border-radius of 12px, padding of 32px, and max-width of 360px with margin 40px auto. Inside the card add an h2 with color #22c55e, a paragraph with font-size 15px and color #64748b, and a span showing a price with font-size 36px and font-weight 700.\n\nExpected: card with background-color, border-radius, green heading, and styled price.",
      "starterCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Pricing</title>\n  <style>\n    body {\n      font-family: Arial, sans-serif;\n      background-color: #f8fafc;\n      padding: 40px 20px;\n    }\n\n    .price-card {\n      /* Add: background-color white, border-radius 12px,\n         padding 32px, max-width 360px, margin 40px auto */\n    }\n\n    .price-card h2 {\n      /* Add: color #22c55e */\n    }\n\n    .price-card p {\n      /* Add: font-size 15px, color #64748b */\n    }\n\n    .price {\n      /* Add: font-size 36px, font-weight 700, color #0f172a */\n    }\n  </style>\n</head>\n<body>\n\n  <div class=\"price-card\">\n    <h2>Starter Plan</h2>\n    <span class=\"price\">₹299</span><span>/month</span>\n    <p>Access to 2 beginner courses with AI-powered hints.</p>\n  </div>\n\n</body>\n</html>",
      "solutionCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Pricing</title>\n  <style>\n    body { font-family: Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px; }\n    .price-card { background-color: white; border-radius: 12px; padding: 32px; max-width: 360px; margin: 40px auto; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }\n    .price-card h2 { color: #22c55e; }\n    .price-card p { font-size: 15px; color: #64748b; }\n    .price { font-size: 36px; font-weight: 700; color: #0f172a; }\n  </style>\n</head>\n<body>\n  <div class=\"price-card\">\n    <h2>Starter Plan</h2>\n    <span class=\"price\">₹299</span><span>/month</span>\n    <p>Access to 2 beginner courses with AI-powered hints.</p>\n  </div>\n</body>\n</html>",
      "hints": [
        "💡 Add background-color: white; border-radius: 12px; padding: 32px; max-width: 360px; margin: 40px auto; to .price-card.",
        "💡 Set .price-card h2 { color: #22c55e; } to colour the heading green.",
        "💡 Set .price { font-size: 36px; font-weight: 700; } to make the price large and bold."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "background-color",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "border-radius",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "html-m3-l2-q1",
          "question": "What does the alpha value in rgba(255, 0, 0, 0.5) control?",
          "options": [
            "The shade of red — 0.5 means medium red",
            "The opacity — 0 is fully transparent, 1 is fully opaque",
            "The size of the element",
            "The border thickness"
          ],
          "correct": 1,
          "explanation": "The fourth value in rgba() is the alpha channel, which controls opacity. A value of 0 makes the colour completely transparent (invisible), 1 makes it fully opaque (solid), and 0.5 makes it 50% transparent — the content beneath shows through. This is useful for overlays, shadows, and subtle backgrounds."
        },
        {
          "id": "html-m3-l2-q2",
          "question": "Why should you always end a font-family stack with a generic family like sans-serif?",
          "options": [
            "The generic family sets the font size",
            "It provides a guaranteed fallback if none of the named fonts are available",
            "It improves page load performance",
            "Generic families are required by the CSS specification"
          ],
          "correct": 1,
          "explanation": "Named fonts like 'Poppins' or 'Arial' may not be installed on every user's device. A generic family (sans-serif, serif, monospace) at the end of the font stack ensures the browser always has a fallback — it selects any available font in that category. Without it, the browser uses its own default, which varies between devices."
        }
      ]
    }
  },
  {
    "id": "html-m3-l3",
    "moduleId": "html-m3",
    "title": "The CSS Box Model",
    "order": 3,
    "xpReward": 15,
    "duration": "13 min",
    "explanation": {
      "title": "Understanding the Box Model: margin, border, padding, and content",
      "content": "# The CSS Box Model\n\nEvery single element on a webpage — every heading, paragraph, image, button — is a rectangular box. CSS treats them all this way. The **box model** describes how that box is structured from the inside out:\n\n```\n┌─────────────────────────────┐  ← margin (outside the border)\n│  ┌───────────────────────┐  │  ← border\n│  │  ┌─────────────────┐  │  │  ← padding (inside the border)\n│  │  │    CONTENT      │  │  │\n│  │  └─────────────────┘  │  │\n│  └───────────────────────┘  │\n└─────────────────────────────┘\n```\n\n- **Content** — the actual text, image, or child elements\n- **Padding** — transparent space between the content and the border\n- **Border** — the line around the padding and content\n- **Margin** — transparent space outside the border, pushing other elements away\n\n## Setting Each Layer\n\n```css\n.box {\n  /* Content size */\n  width: 300px;\n  height: 150px;\n\n  /* Padding — inside the border */\n  padding: 16px;               /* all four sides */\n  padding: 8px 16px;           /* top/bottom  left/right */\n  padding: 4px 8px 12px 16px;  /* top right bottom left (clockwise) */\n\n  /* Border */\n  border: 2px solid #22c55e;\n  border-radius: 8px;\n\n  /* Margin — outside the border */\n  margin: 24px;\n  margin: 0 auto;  /* centre horizontally */\n}\n```\n\n## box-sizing: border-box\n\nBy default, `width` and `height` apply only to the content area. Padding and border add to the total size:\n\n```css\n/* Default (content-box): width=300 + 32px padding + 4px border = 336px total */\n.box { width: 300px; padding: 16px; border: 2px solid; }\n\n/* border-box: total stays 300px — padding and border go INSIDE */\n* { box-sizing: border-box; }\n.box { width: 300px; padding: 16px; border: 2px solid; }\n```\n\nAdding `* { box-sizing: border-box; }` to every project makes sizing predictable. It is the first rule in almost every professional CSS file.\n\n## display Property\n\nEach element has a default `display` value:\n\n- `block` — takes the full width, starts on a new line (`div`, `p`, `h1`)\n- `inline` — flows with text, no width/height control (`span`, `a`, `em`)\n- `inline-block` — flows with text but accepts width/height\n- `none` — hides the element completely (removed from layout)\n\nIn the code example below, you will see the box model demonstrated with visible borders and background colours, plus box-sizing applied."
    },
    "codeExample": {
      "title": "Box Model Visual Demo",
      "language": "html-css",
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Box Model Demo</title>\n  <style>\n    /* Apply border-box to every element — always do this */\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n\n    body { font-family: Arial, sans-serif; padding: 32px; background: #f8fafc; }\n\n    /* Block element: full width, new line */\n    .block-box {\n      background-color: #dbeafe;\n      border: 3px solid #3b82f6;\n      padding: 24px;\n      margin-bottom: 24px;\n      width: 100%;\n    }\n\n    /* Fixed-width centred box */\n    .centred-box {\n      background-color: #dcfce7;\n      border: 3px solid #22c55e;\n      border-radius: 8px;\n      padding: 32px 24px;\n      margin: 0 auto 24px;\n      max-width: 400px;\n      text-align: center;\n    }\n\n    /* Inline-block: sit side by side */\n    .inline-block-box {\n      display: inline-block;\n      background-color: #fef9c3;\n      border: 2px solid #eab308;\n      padding: 12px 24px;\n      margin: 8px;\n      border-radius: 4px;\n    }\n  </style>\n</head>\n<body>\n\n  <div class=\"block-box\">\n    <strong>Block box</strong> — takes full width, starts on its own line.\n    Padding pushes content inward from the border.\n  </div>\n\n  <div class=\"centred-box\">\n    <strong>Centred box</strong><br>\n    max-width: 400px<br>\n    margin: 0 auto centres horizontally\n  </div>\n\n  <span class=\"inline-block-box\">Inline-block 1</span>\n  <span class=\"inline-block-box\">Inline-block 2</span>\n  <span class=\"inline-block-box\">Inline-block 3</span>\n\n</body>\n</html>",
      "explanation": "- `* { box-sizing: border-box; margin: 0; padding: 0; }` — the universal reset; makes sizing predictable across all elements\n- `padding: 24px` — adds 24px of space between the content and the border on all four sides\n- `margin-bottom: 24px` — pushes the next element 24px away from the bottom border\n- `margin: 0 auto` — zeroes top/bottom margin and centres a block element horizontally\n- `max-width: 400px` — the element cannot grow wider than 400px even on a large screen\n- `display: inline-block` — spans sit side-by-side but accept width, padding, and border"
    },
    "exercise": {
      "title": "Build a Feature Card Grid",
      "instructions": "Create a page with the universal box-sizing reset. Define a class 'feature' with: display inline-block, width 200px, background-color white, border 2px solid #e2e8f0, border-radius 8px, padding 20px, margin 12px, and text-align center. Add three div elements with class 'feature', each containing an h3 and a paragraph. The body should have background-color #f1f5f9 and padding 32px.\n\nExpected: three side-by-side styled feature cards.",
      "starterCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Features</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n\n    body {\n      font-family: Arial, sans-serif;\n      background-color: #f1f5f9;\n      padding: 32px;\n    }\n\n    .feature {\n      /* Add: display inline-block, width 200px,\n         background-color white, border 2px solid #e2e8f0,\n         border-radius 8px, padding 20px, margin 12px,\n         text-align center */\n    }\n\n    .feature h3 {\n      color: #22c55e;\n      margin-bottom: 8px;\n    }\n  </style>\n</head>\n<body>\n\n  <div class=\"feature\">\n    <h3>Learn</h3>\n    <p>Watch expert-led lessons.</p>\n  </div>\n\n  <div class=\"feature\">\n    <h3>Practice</h3>\n    <p>Write real code every day.</p>\n  </div>\n\n  <div class=\"feature\">\n    <h3>Earn XP</h3>\n    <p>Level up as you progress.</p>\n  </div>\n\n</body>\n</html>",
      "solutionCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Features</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; background-color: #f1f5f9; padding: 32px; }\n    .feature { display: inline-block; width: 200px; background-color: white; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 12px; text-align: center; }\n    .feature h3 { color: #22c55e; margin-bottom: 8px; }\n  </style>\n</head>\n<body>\n  <div class=\"feature\"><h3>Learn</h3><p>Watch expert-led lessons.</p></div>\n  <div class=\"feature\"><h3>Practice</h3><p>Write real code every day.</p></div>\n  <div class=\"feature\"><h3>Earn XP</h3><p>Level up as you progress.</p></div>\n</body>\n</html>",
      "hints": [
        "💡 Add display: inline-block; width: 200px; to .feature so the cards sit side by side.",
        "💡 Add padding: 20px; margin: 12px; background-color: white; to give each card internal space.",
        "💡 Add border: 2px solid #e2e8f0; border-radius: 8px; text-align: center; to complete the card style."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "inline-block",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "border-radius",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "html-m3-l3-q1",
          "question": "What is the difference between padding and margin in the CSS box model?",
          "options": [
            "Padding is outside the border; margin is inside",
            "They are identical — both add space around the content",
            "Padding is inside the border; margin is outside and pushes other elements away",
            "Padding controls element height; margin controls element width"
          ],
          "correct": 2,
          "explanation": "Padding is the transparent space between the content area and the border — it sits inside the border and takes the element's background-color. Margin is the transparent space outside the border — it creates distance between this element and its neighbours and is always transparent. Adding background-color to an element colours the padding but not the margin."
        },
        {
          "id": "html-m3-l3-q2",
          "question": "What does * { box-sizing: border-box } do in CSS?",
          "options": [
            "It makes all elements square",
            "It removes all default browser styles",
            "It makes width and height include padding and border, not just the content area",
            "It adds a border to every element on the page"
          ],
          "correct": 2,
          "explanation": "With the default content-box sizing, padding and border add to an element's declared width. So width: 300px with padding: 20px produces a 340px wide element. With border-box, the width declaration includes padding and border — the element stays at exactly 300px. This makes layout arithmetic much easier and is used in virtually every professional CSS project."
        }
      ]
    }
  }
]
''')

# ── html-m4 — Loops
# Lessons : html-m4-l1, html-m4-l2, html-m4-l3
# XP      : 35
html-css_m4_raw = json.loads(r'''
[
  {
    "id": "html-m4-l1",
    "moduleId": "html-m4",
    "title": "CSS Display and Positioning",
    "order": 1,
    "xpReward": 10,
    "duration": "12 min",
    "explanation": {
      "title": "Controlling Element Layout with Display and Position",
      "content": "# The display Property\n\nThe `display` property is the most fundamental layout tool in CSS. It controls how an element participates in the document flow.\n\n## Core display Values\n\n| Value | Behaviour |\n|---|---|\n| `block` | Full width, starts a new line — `div`, `p`, `h1`–`h6`, `section` |\n| `inline` | Flows with text, ignores width/height — `span`, `a`, `em`, `strong` |\n| `inline-block` | Flows with text but accepts width/height and box properties |\n| `none` | Element is completely removed from layout and invisible |\n| `flex` | Creates a flex container (covered next lesson) |\n| `grid` | Creates a grid container |\n\n## The position Property\n\n`position` controls where an element is placed relative to its normal location or a parent:\n\n| Value | How it works |\n|---|---|\n| `static` | Default — follows normal document flow |\n| `relative` | Offset from its normal position using top/right/bottom/left |\n| `absolute` | Removed from flow; positioned relative to nearest positioned ancestor |\n| `fixed` | Removed from flow; always stays in the same viewport position |\n| `sticky` | Scrolls normally, then sticks to the viewport when reaching a threshold |\n\n```css\n/* Relative — shifts 20px down from its normal position */\n.badge {\n  position: relative;\n  top: 20px;\n}\n\n/* Absolute — top-right corner of its positioned parent */\n.tooltip {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n/* Fixed — always visible in the bottom-right corner */\n.chat-button {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n}\n```\n\n## Positioned Ancestor\n\nFor `position: absolute` to work predictably, the parent element must have `position: relative` (or absolute/fixed/sticky). If no positioned ancestor exists, the element positions itself relative to the `<body>`.\n\n## overflow Property\n\n```css\n.container {\n  overflow: hidden;   /* clips content that extends beyond bounds */\n  overflow: scroll;   /* always shows scrollbars */\n  overflow: auto;     /* shows scrollbars only when needed */\n  overflow-x: hidden; /* hide only horizontal overflow */\n}\n```\n\n## z-index — Stacking Order\n\nPositioned elements (not `static`) stack on top of each other. Higher `z-index` values appear in front:\n\n```css\n.overlay { position: fixed; z-index: 100; } /* in front */\n.content { position: relative; z-index: 1;  } /* behind */\n```\n\nIn the code example below, you will see a notification badge using absolute positioning and a sticky navigation bar."
    },
    "codeExample": {
      "title": "Positioned Notification Badge",
      "language": "html-css",
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Positioning</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n\n    /* Sticky nav stays at top while scrolling */\n    nav {\n      position: sticky;\n      top: 0;\n      background: #1e293b;\n      color: white;\n      padding: 14px 24px;\n      z-index: 10;\n    }\n\n    body { font-family: Arial, sans-serif; }\n    main { padding: 32px; }\n\n    /* Icon wrapper — relative so the badge can anchor to it */\n    .icon-wrapper {\n      position: relative;\n      display: inline-block;\n      font-size: 32px;\n      cursor: pointer;\n      margin: 16px;\n    }\n\n    /* Badge — absolutely positioned in top-right corner */\n    .badge {\n      position: absolute;\n      top: -6px;\n      right: -10px;\n      background: #ef4444;\n      color: white;\n      font-size: 11px;\n      font-weight: 700;\n      padding: 2px 6px;\n      border-radius: 999px;\n      min-width: 20px;\n      text-align: center;\n    }\n\n    /* Fixed button always in bottom-right corner */\n    .fab {\n      position: fixed;\n      bottom: 24px;\n      right: 24px;\n      background: #22c55e;\n      color: white;\n      border: none;\n      border-radius: 50%;\n      width: 56px;\n      height: 56px;\n      font-size: 24px;\n      cursor: pointer;\n    }\n  </style>\n</head>\n<body>\n\n  <nav>CodeGuru AI — Navigation (sticky)</nav>\n\n  <main>\n    <h1>Notification Badges</h1>\n    <p>The red badges use <code>position: absolute</code> on a\n       <code>position: relative</code> parent.</p>\n\n    <div class=\"icon-wrapper\">\n      📬\n      <span class=\"badge\">3</span>\n    </div>\n\n    <div class=\"icon-wrapper\">\n      🔔\n      <span class=\"badge\">12</span>\n    </div>\n  </main>\n\n  <button class=\"fab\">+</button>\n\n</body>\n</html>",
      "explanation": "- `position: sticky; top: 0` on `nav` — scrolls with the page until it hits the top, then sticks there\n- `z-index: 10` on `nav` — keeps the nav above any content that scrolls underneath it\n- `position: relative` on `.icon-wrapper` — establishes the positioning context for the badge inside it\n- `position: absolute; top: -6px; right: -10px` on `.badge` — anchors the badge to the top-right corner of the wrapper\n- `position: fixed; bottom: 24px; right: 24px` on `.fab` — locks the button to the viewport corner regardless of scroll"
    },
    "exercise": {
      "title": "Create a Card with an Absolute Badge",
      "instructions": "Build a product card with an absolute-positioned sale badge. Create a div with class 'card' that has position relative, a border, padding 20px, max-width 260px, and border-radius 8px. Inside it add a span with class 'sale-badge' that has position absolute, top 0, right 0, background-color #ef4444, color white, padding 4px 10px, and border-radius 0 8px 0 8px. Also add an h3 product name and a p price inside the card.\n\nExpected: card with a red badge in the top-right corner.",
      "starterCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Product Card</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; padding: 40px; background: #f8fafc; }\n\n    .card {\n      /* Add: position relative, border, padding 20px,\n         max-width 260px, border-radius 8px, background white */\n    }\n\n    .sale-badge {\n      /* Add: position absolute, top 0, right 0,\n         background #ef4444, color white,\n         padding 4px 10px, border-radius 0 8px 0 8px */\n    }\n  </style>\n</head>\n<body>\n\n  <div class=\"card\">\n    <span class=\"sale-badge\">SALE</span>\n    <h3>Mechanical Keyboard</h3>\n    <p>₹2499 <del>₹3999</del></p>\n  </div>\n\n</body>\n</html>",
      "solutionCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Product Card</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; padding: 40px; background: #f8fafc; }\n    .card { position: relative; border: 1px solid #e2e8f0; padding: 20px; max-width: 260px; border-radius: 8px; background: white; }\n    .sale-badge { position: absolute; top: 0; right: 0; background: #ef4444; color: white; padding: 4px 10px; border-radius: 0 8px 0 8px; font-size: 12px; font-weight: 700; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <span class=\"sale-badge\">SALE</span>\n    <h3>Mechanical Keyboard</h3>\n    <p>₹2499 <del>₹3999</del></p>\n  </div>\n</body>\n</html>",
      "hints": [
        "💡 Add position: relative to .card so the badge can position itself inside it.",
        "💡 Add position: absolute; top: 0; right: 0; to .sale-badge to anchor it to the top-right of the card.",
        "💡 border-radius: 0 8px 0 8px sets corners individually: top-left, top-right, bottom-right, bottom-left."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "position: relative",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "position: absolute",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "html-m4-l1-q1",
          "question": "What must a parent element have for position: absolute to work predictably on a child?",
          "options": [
            "display: block",
            "position: relative (or absolute, fixed, or sticky)",
            "overflow: hidden",
            "z-index: 1"
          ],
          "correct": 1,
          "explanation": "An absolutely positioned element is placed relative to its nearest ancestor that has a position other than static. If no such ancestor exists, it positions itself relative to the initial viewport. Adding position: relative to the parent element (without changing its visual position) creates the positioning context the child needs."
        },
        {
          "id": "html-m4-l1-q2",
          "question": "What is the difference between position: fixed and position: sticky?",
          "options": [
            "They are identical — both fix the element to the viewport",
            "Fixed is always at the same viewport position; sticky scrolls normally then sticks at a threshold",
            "Sticky is always at the same viewport position; fixed scrolls normally then sticks",
            "Fixed only works horizontally; sticky only works vertically"
          ],
          "correct": 1,
          "explanation": "position: fixed removes the element from document flow and fixes it at a specific viewport position regardless of scrolling — it never moves. position: sticky keeps the element in the document flow and scrolls with the page normally until it reaches the threshold set by top/bottom/left/right, at which point it sticks until its parent scrolls out of view."
        }
      ]
    }
  },
  {
    "id": "html-m4-l2",
    "moduleId": "html-m4",
    "title": "Flexbox: Axes and Alignment",
    "order": 2,
    "xpReward": 10,
    "duration": "13 min",
    "explanation": {
      "title": "Arranging Elements in One Direction with Flexbox",
      "content": "# CSS Flexbox\n\nBefore Flexbox, centering a div vertically in CSS was famously difficult. Flexbox (Flexible Box Layout) changed everything. It lets you arrange items in a row or column, distribute space between them, and align them — all in a few lines of CSS.\n\n## Activating Flexbox\n\nAdd `display: flex` to a **container** element. All its direct children become **flex items**:\n\n```html\n<div class=\"container\">   <!-- flex container -->\n  <div>Item 1</div>        <!-- flex item -->\n  <div>Item 2</div>        <!-- flex item -->\n  <div>Item 3</div>        <!-- flex item -->\n</div>\n```\n\n```css\n.container { display: flex; }\n```\n\n## The Two Axes\n\nFlexbox works along two axes:\n\n- **Main axis** — the direction items flow (default: horizontal, left to right)\n- **Cross axis** — perpendicular to the main axis (default: vertical)\n\n`flex-direction` sets the main axis:\n\n| Value | Main axis direction |\n|---|---|\n| `row` | Left to right (default) |\n| `row-reverse` | Right to left |\n| `column` | Top to bottom |\n| `column-reverse` | Bottom to top |\n\n## Alignment Properties\n\n```css\n.container {\n  display: flex;\n  flex-direction: row;\n\n  /* Main axis alignment */\n  justify-content: flex-start;    /* default */\n  /* flex-end | center | space-between | space-around | space-evenly */\n\n  /* Cross axis alignment */\n  align-items: stretch;           /* default */\n  /* flex-start | flex-end | center | baseline */\n\n  /* Wrap when items overflow */\n  flex-wrap: nowrap;              /* default */\n  /* wrap | wrap-reverse */\n\n  gap: 16px;                     /* space between flex items */\n}\n```\n\n## Flex Item Properties\n\n```css\n.item {\n  flex: 1;          /* shorthand: grow=1, shrink=1, basis=0 */\n  flex-grow: 1;     /* how much extra space to absorb */\n  flex-shrink: 0;   /* do not shrink when space is tight */\n  align-self: center; /* override container's align-items for this item only */\n}\n```\n\n`flex: 1` on all items distributes available space equally. `flex: 2` on one item gives it twice as much space as the others.\n\nIn the code example below, you will see `justify-content` and `align-items` demonstrated with a navigation bar and a centred hero section."
    },
    "codeExample": {
      "title": "Flexbox Navigation and Hero",
      "language": "html-css",
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Flexbox Demo</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; }\n\n    /* Nav: logo left, links right */\n    nav {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      background: #1e293b;\n      color: white;\n      padding: 14px 32px;\n    }\n    nav .links { display: flex; gap: 24px; }\n    nav a { color: #94a3b8; text-decoration: none; font-size: 14px; }\n    nav a:hover { color: white; }\n\n    /* Hero: content centred vertically and horizontally */\n    .hero {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      min-height: 320px;\n      background: #f1f5f9;\n      text-align: center;\n      padding: 40px 20px;\n      gap: 16px;\n    }\n    .hero h1 { font-size: 36px; color: #0f172a; }\n    .hero p  { color: #64748b; max-width: 500px; }\n    .hero .btn {\n      background: #22c55e;\n      color: white;\n      padding: 12px 28px;\n      border: none;\n      border-radius: 8px;\n      font-size: 16px;\n      cursor: pointer;\n    }\n\n    /* Three equal-width cards */\n    .cards {\n      display: flex;\n      gap: 16px;\n      padding: 32px;\n    }\n    .card {\n      flex: 1;\n      background: white;\n      border: 1px solid #e2e8f0;\n      border-radius: 8px;\n      padding: 20px;\n    }\n    .card h3 { color: #22c55e; margin-bottom: 8px; }\n  </style>\n</head>\n<body>\n\n  <nav>\n    <strong>CodeGuru AI</strong>\n    <div class=\"links\">\n      <a href=\"#\">Home</a>\n      <a href=\"#\">Courses</a>\n      <a href=\"#\">Pricing</a>\n    </div>\n  </nav>\n\n  <section class=\"hero\">\n    <h1>Learn to Code in India</h1>\n    <p>AI-powered lessons in Python, JavaScript, Java, and HTML/CSS.</p>\n    <button class=\"btn\">Start for Free</button>\n  </section>\n\n  <div class=\"cards\">\n    <div class=\"card\"><h3>Learn</h3><p>Expert-made lessons with live examples.</p></div>\n    <div class=\"card\"><h3>Practice</h3><p>Hands-on coding in every lesson.</p></div>\n    <div class=\"card\"><h3>Progress</h3><p>Track your XP and streak daily.</p></div>\n  </div>\n\n</body>\n</html>",
      "explanation": "- `justify-content: space-between` on `nav` — pushes the logo to the left edge and links to the right edge\n- `align-items: center` on `nav` — vertically centres both the logo and the link group in the nav bar\n- `flex-direction: column` on `.hero` — stacks children vertically instead of horizontally\n- `justify-content: center; align-items: center` on `.hero` — centres children both vertically and horizontally\n- `gap: 16px` — adds uniform spacing between flex items without needing margins\n- `flex: 1` on `.card` — each card grows equally to fill the available width"
    },
    "exercise": {
      "title": "Build a Flexbox Pricing Row",
      "instructions": "Create a row of three pricing cards using Flexbox. The container div must have display flex, gap 24px, and padding 40px. Each card (class 'plan') must use flex: 1, have a border, border-radius 10px, padding 24px, and text-align center. The middle card should have background-color #22c55e and color white to highlight it. Each card needs an h3 plan name and a p description.\n\nExpected: three equal-width cards side by side, middle one green.",
      "starterCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Pricing Plans</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; background: #f8fafc; }\n\n    .plans {\n      /* Add: display flex, gap 24px, padding 40px */\n    }\n\n    .plan {\n      /* Add: flex 1, border, border-radius 10px, padding 24px, text-align center */\n      background: white;\n    }\n\n    .plan.featured {\n      background-color: #22c55e;\n      color: white;\n    }\n\n    .plan h3 { margin-bottom: 8px; font-size: 20px; }\n  </style>\n</head>\n<body>\n\n  <div class=\"plans\">\n    <div class=\"plan\">\n      <h3>Starter</h3>\n      <p>1 language, community support.</p>\n    </div>\n    <div class=\"plan featured\">\n      <h3>Pro</h3>\n      <p>All languages + AI mentor.</p>\n    </div>\n    <div class=\"plan\">\n      <h3>Bundle</h3>\n      <p>Teams and offline access.</p>\n    </div>\n  </div>\n\n</body>\n</html>",
      "solutionCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Pricing Plans</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; background: #f8fafc; }\n    .plans { display: flex; gap: 24px; padding: 40px; }\n    .plan { flex: 1; border: 1px solid #e2e8f0; border-radius: 10px; padding: 24px; text-align: center; background: white; }\n    .plan.featured { background-color: #22c55e; color: white; border-color: #16a34a; }\n    .plan h3 { margin-bottom: 8px; font-size: 20px; }\n  </style>\n</head>\n<body>\n  <div class=\"plans\">\n    <div class=\"plan\"><h3>Starter</h3><p>1 language, community support.</p></div>\n    <div class=\"plan featured\"><h3>Pro</h3><p>All languages + AI mentor.</p></div>\n    <div class=\"plan\"><h3>Bundle</h3><p>Teams and offline access.</p></div>\n  </div>\n</body>\n</html>",
      "hints": [
        "💡 Add display: flex; gap: 24px; padding: 40px; to .plans to activate Flexbox layout.",
        "💡 Add flex: 1; border: 1px solid #e2e8f0; border-radius: 10px; padding: 24px; text-align: center; to .plan.",
        "💡 The .plan.featured rule targets elements that have both classes — no extra HTML changes needed."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "display: flex",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "flex: 1",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "html-m4-l2-q1",
          "question": "Which property do you add to a container to make it a flex container?",
          "options": [
            "flex: 1",
            "display: flex",
            "flexbox: enabled",
            "flex-direction: row"
          ],
          "correct": 1,
          "explanation": "display: flex applied to a container element activates Flexbox. All of its direct children automatically become flex items. flex: 1 is a property for flex items, not the container. flex-direction: row is a container property but only controls the direction of an already-activated flex container."
        },
        {
          "id": "html-m4-l2-q2",
          "question": "What does justify-content: space-between do in a flex container?",
          "options": [
            "Centres all items vertically",
            "Adds equal space around all items",
            "Places the first item at the start, last at the end, with equal gaps between",
            "Makes all items the same width"
          ],
          "correct": 2,
          "explanation": "justify-content: space-between distributes items along the main axis so the first item is flush with the start, the last item is flush with the end, and remaining space is distributed equally between the items. Compare with space-around (equal space on both sides of each item) and space-evenly (equal space between all items and edges)."
        },
        {
          "id": "html-m4-l2-q3",
          "question": "What does flex: 1 do when applied to multiple flex items?",
          "options": [
            "Sets each item's width to 1 pixel",
            "Makes each item take up one row",
            "Allows each item to grow equally and share available space",
            "Fixes each item at the first position"
          ],
          "correct": 2,
          "explanation": "flex: 1 is shorthand for flex-grow: 1, flex-shrink: 1, flex-basis: 0. When multiple items all have flex: 1, they share the available space equally. If one item has flex: 2 and two others have flex: 1, the first item takes half the space and the others share the remaining half."
        }
      ]
    }
  },
  {
    "id": "html-m4-l3",
    "moduleId": "html-m4",
    "title": "Flexbox Layouts in Practice",
    "order": 3,
    "xpReward": 15,
    "duration": "14 min",
    "explanation": {
      "title": "Building Real Page Layouts with Flexbox",
      "content": "# Building Layouts with Flexbox\n\nNow that you know the Flexbox properties, the skill is combining them to build the page layouts you see every day: navigation bars, card grids, sidebars, footers, and centred hero sections.\n\n## Common Layout Patterns\n\n### Pattern 1 — Horizontal Navigation Bar\n```css\nnav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n```\n\n### Pattern 2 — Equal-Width Card Row\n```css\n.cards { display: flex; gap: 16px; }\n.card  { flex: 1; }\n```\n\n### Pattern 3 — Centred Content (vertical + horizontal)\n```css\n.hero {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n```\n\n### Pattern 4 — Sidebar + Main Content\n```css\n.layout  { display: flex; gap: 24px; }\n.sidebar { width: 240px; flex-shrink: 0; }\n.main    { flex: 1; }\n```\n\n### Pattern 5 — Wrapping Card Grid\n```css\n.grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.grid-item {\n  flex: 0 0 calc(33.333% - 11px); /* 3 columns with gap */\n}\n```\n\n## flex-wrap for Responsive Rows\n\nBy default, flex items never wrap — they shrink to fit. Adding `flex-wrap: wrap` lets items drop to the next line when there is not enough space:\n\n```css\n.cards {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.card { flex: 0 0 300px; }  /* minimum 300px each */\n```\n\n## Centering a Single Item\n\n```css\n.parent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n```\n\nThis is the modern replacement for the old `margin: auto` hack. Two lines of CSS and a child is perfectly centred both ways.\n\n## Order Property\n\n```css\n.item { order: 2; }  /* default is 0; higher = later in visual order */\n```\n\nYou can reorder flex items visually without changing the HTML source order. Useful for responsive design — show sidebar below content on mobile.\n\nIn the code example below, you will see a complete sidebar layout and a wrapping card grid built with Flexbox."
    },
    "codeExample": {
      "title": "Sidebar and Wrapping Card Grid",
      "language": "html-css",
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Flexbox Layouts</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; background: #f8fafc; color: #1e293b; }\n\n    /* Sticky top nav */\n    header {\n      background: #1e293b; color: white;\n      display: flex; justify-content: space-between; align-items: center;\n      padding: 14px 24px;\n    }\n    header nav { display: flex; gap: 20px; }\n    header a  { color: #94a3b8; text-decoration: none; font-size: 14px; }\n\n    /* Sidebar + Main layout */\n    .page-layout {\n      display: flex;\n      min-height: calc(100vh - 50px);\n    }\n\n    .sidebar {\n      width: 220px;\n      flex-shrink: 0;          /* sidebar keeps its width */\n      background: #fff;\n      border-right: 1px solid #e2e8f0;\n      padding: 24px 16px;\n    }\n    .sidebar h3 { font-size: 12px; text-transform: uppercase;\n                  color: #94a3b8; letter-spacing: 0.08em; margin-bottom: 12px; }\n    .sidebar ul { list-style: none; }\n    .sidebar li { padding: 8px 12px; border-radius: 6px; cursor: pointer; }\n    .sidebar li:hover { background: #f1f5f9; }\n    .sidebar li.active { background: #dcfce7; color: #16a34a; font-weight: 600; }\n\n    /* Main content area */\n    .main { flex: 1; padding: 24px; }\n    .main h2 { margin-bottom: 16px; }\n\n    /* Wrapping card grid */\n    .grid {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 16px;\n    }\n    .course-card {\n      flex: 0 0 calc(50% - 8px); /* 2 columns */\n      background: white;\n      border: 1px solid #e2e8f0;\n      border-radius: 10px;\n      padding: 20px;\n    }\n    .course-card h4 { color: #22c55e; margin-bottom: 6px; }\n    .course-card p  { font-size: 14px; color: #64748b; }\n  </style>\n</head>\n<body>\n\n  <header>\n    <strong>CodeGuru AI</strong>\n    <nav><a href=\"#\">Home</a><a href=\"#\">Dashboard</a><a href=\"#\">Profile</a></nav>\n  </header>\n\n  <div class=\"page-layout\">\n    <aside class=\"sidebar\">\n      <h3>Menu</h3>\n      <ul>\n        <li class=\"active\">My Courses</li>\n        <li>Progress</li>\n        <li>Leaderboard</li>\n        <li>Settings</li>\n      </ul>\n    </aside>\n\n    <main class=\"main\">\n      <h2>My Courses</h2>\n      <div class=\"grid\">\n        <div class=\"course-card\"><h4>Python Beginner</h4><p>6 modules · 40 hours</p></div>\n        <div class=\"course-card\"><h4>JavaScript Basics</h4><p>6 modules · 35 hours</p></div>\n        <div class=\"course-card\"><h4>HTML &amp; CSS</h4><p>6 modules · 30 hours</p></div>\n        <div class=\"course-card\"><h4>Java Fundamentals</h4><p>6 modules · 45 hours</p></div>\n      </div>\n    </main>\n  </div>\n\n</body>\n</html>",
      "explanation": "- `display: flex` on `.page-layout` with no `flex-direction` — items flow in a row (sidebar left, main right)\n- `flex-shrink: 0` on `.sidebar` — prevents the sidebar from shrinking when the window narrows\n- `flex: 1` on `.main` — the main content area absorbs all remaining horizontal space\n- `flex-wrap: wrap` on `.grid` — allows cards to drop to a new row when they cannot fit\n- `flex: 0 0 calc(50% - 8px)` on `.course-card` — sets grow=0, shrink=0, basis=half width minus half the 16px gap"
    },
    "exercise": {
      "title": "Build a Two-Column Profile Layout",
      "instructions": "Create a two-column layout using Flexbox. The outer container (class 'layout') needs display flex, gap 24px, padding 40px, and background #f8fafc. The left column (class 'sidebar') needs width 200px, flex-shrink 0, white background, border-radius 10px, and padding 20px. The right column (class 'content') needs flex 1, white background, border-radius 10px, and padding 20px.\n\nExpected: sidebar fixed at 200px, content fills remaining space.",
      "starterCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Profile</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n\n    .layout {\n      /* Add: display flex, gap 24px, padding 40px, background #f8fafc */\n    }\n\n    .sidebar {\n      /* Add: width 200px, flex-shrink 0, background white,\n         border-radius 10px, padding 20px, text-align center */\n    }\n\n    .content {\n      /* Add: flex 1, background white, border-radius 10px, padding 20px */\n    }\n  </style>\n</head>\n<body>\n\n  <div class=\"layout\">\n    <aside class=\"sidebar\">\n      <h2>Priya Verma</h2>\n      <p style=\"color:#64748b; font-size:14px;\">Full-Stack Developer</p>\n    </aside>\n\n    <main class=\"content\">\n      <h2>About Me</h2>\n      <p>I build web applications using Python and JavaScript. Currently\n         learning advanced CSS layouts at CodeGuru AI.</p>\n    </main>\n  </div>\n\n</body>\n</html>",
      "solutionCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Profile</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    .layout { display: flex; gap: 24px; padding: 40px; background: #f8fafc; }\n    .sidebar { width: 200px; flex-shrink: 0; background: white; border-radius: 10px; padding: 20px; text-align: center; }\n    .content { flex: 1; background: white; border-radius: 10px; padding: 20px; }\n  </style>\n</head>\n<body>\n  <div class=\"layout\">\n    <aside class=\"sidebar\">\n      <h2>Priya Verma</h2>\n      <p style=\"color:#64748b; font-size:14px;\">Full-Stack Developer</p>\n    </aside>\n    <main class=\"content\">\n      <h2>About Me</h2>\n      <p>I build web applications using Python and JavaScript. Currently learning advanced CSS layouts at CodeGuru AI.</p>\n    </main>\n  </div>\n</body>\n</html>",
      "hints": [
        "💡 Add display: flex; gap: 24px; padding: 40px; background: #f8fafc; to .layout to activate the Flexbox row.",
        "💡 Add width: 200px; flex-shrink: 0; to .sidebar so it stays at 200px and never shrinks.",
        "💡 Add flex: 1; to .content so it absorbs all the remaining space not taken by the sidebar."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "display: flex",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "flex-shrink: 0",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "html-m4-l3-q1",
          "question": "What does flex-shrink: 0 prevent a flex item from doing?",
          "options": [
            "It prevents the item from growing when there is extra space",
            "It prevents the item from shrinking when the container is too small",
            "It prevents the item from wrapping to a new line",
            "It prevents the item from accepting padding"
          ],
          "correct": 1,
          "explanation": "By default, flex items have flex-shrink: 1, which allows them to shrink below their natural or specified size when the container runs out of space. Setting flex-shrink: 0 on an item like a sidebar prevents it from shrinking — it will always maintain its declared width even when the screen narrows."
        },
        {
          "id": "html-m4-l3-q2",
          "question": "What does flex-wrap: wrap do in a flex container?",
          "options": [
            "It wraps text inside each flex item",
            "It allows flex items to flow onto multiple lines when they cannot fit on one line",
            "It reverses the order of items",
            "It makes all items the same height"
          ],
          "correct": 1,
          "explanation": "By default, flex containers force all items onto a single line and shrink them to fit. Adding flex-wrap: wrap allows items to break onto additional lines when there is not enough space. This is essential for responsive card grids — at wide screens all cards fit in one row; on narrow screens they wrap into two or more rows."
        }
      ]
    }
  }
]
''')

# ── html-m5 — Functions / Methods
# Lessons : html-m5-l1, html-m5-l2, html-m5-l3
# XP      : 35
html-css_m5_raw = json.loads(r'''
[
  {
    "id": "html-m5-l1",
    "moduleId": "html-m5",
    "title": "Media Queries",
    "order": 1,
    "xpReward": 10,
    "duration": "12 min",
    "explanation": {
      "title": "Making Pages Adapt to Any Screen with Media Queries",
      "content": "# Responsive Web Design\n\nOver 60% of web traffic now comes from mobile devices. A page that looks great on a desktop but breaks on a phone has failed half its audience. **Responsive web design** means building pages that adapt their layout and styling to any screen size.\n\nThe three tools that make a page responsive are:\n1. A flexible layout (Flexbox or Grid)\n2. Fluid images (`max-width: 100%`)\n3. **Media queries** — the CSS rule that applies styles only at certain screen widths\n\n## Media Query Syntax\n\n```css\n/* Applies when the viewport is 768px wide or narrower */\n@media (max-width: 768px) {\n  .sidebar { display: none; }\n  .hero h1  { font-size: 24px; }\n}\n```\n\nA media query wraps a block of CSS rules. The rules inside only take effect when the condition is true. Everything outside applies always.\n\n## Common Breakpoints\n\nA **breakpoint** is the viewport width at which a layout changes. These are widely used values:\n\n| Breakpoint | Width | Target |\n|---|---|---|\n| Mobile | `< 480px` | Phones |\n| Small tablet | `< 640px` | Large phones |\n| Tablet | `< 768px` | Tablets |\n| Laptop | `< 1024px` | Small laptops |\n| Desktop | `≥ 1024px` | Desktops |\n\n## max-width vs min-width\n\n```css\n/* max-width: applies when screen is AT MOST this wide */\n@media (max-width: 768px) { /* mobile styles */ }\n\n/* min-width: applies when screen is AT LEAST this wide */\n@media (min-width: 769px) { /* desktop styles */ }\n```\n\n## Combining Conditions\n\n```css\n/* Only tablets — 480px to 768px */\n@media (min-width: 480px) and (max-width: 768px) {\n  .grid { grid-template-columns: repeat(2, 1fr); }\n}\n```\n\n## Other Media Features\n\n```css\n@media (orientation: portrait) { /* phone held upright */ }\n@media (prefers-color-scheme: dark) { /* dark mode */ }\n@media print { /* when printing */ }\n```\n\nIn the code example below, you will see a three-column card grid that collapses to two columns on tablet and one column on mobile using media queries."
    },
    "codeExample": {
      "title": "Responsive Card Grid",
      "language": "html-css",
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Responsive Grid</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 24px; }\n\n    h1 { text-align: center; margin-bottom: 24px; color: #0f172a; }\n\n    /* Default: 3-column flex grid */\n    .grid {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 16px;\n    }\n\n    .card {\n      flex: 0 0 calc(33.333% - 11px); /* 3 columns */\n      background: white;\n      border-radius: 10px;\n      padding: 20px;\n      border: 1px solid #e2e8f0;\n    }\n\n    .card h3 { color: #22c55e; margin-bottom: 8px; }\n    .card p  { font-size: 14px; color: #64748b; }\n\n    /* Tablet: 2 columns */\n    @media (max-width: 768px) {\n      .card { flex: 0 0 calc(50% - 8px); }\n    }\n\n    /* Mobile: 1 column */\n    @media (max-width: 480px) {\n      .card { flex: 0 0 100%; }\n      body  { padding: 16px; }\n    }\n  </style>\n</head>\n<body>\n\n  <h1>Our Courses</h1>\n\n  <div class=\"grid\">\n    <div class=\"card\"><h3>Python</h3><p>The most popular beginner language. Build AI, web, and automation projects.</p></div>\n    <div class=\"card\"><h3>JavaScript</h3><p>The language of the web. Run code in every browser without installation.</p></div>\n    <div class=\"card\"><h3>Java</h3><p>Enterprise-grade language used by large companies and Android development.</p></div>\n    <div class=\"card\"><h3>HTML &amp; CSS</h3><p>The foundation of every website. Build and style pages from scratch.</p></div>\n    <div class=\"card\"><h3>Data Science</h3><p>Analyse real-world datasets using Python libraries.</p></div>\n    <div class=\"card\"><h3>React</h3><p>Build interactive UIs with the most popular JavaScript framework.</p></div>\n  </div>\n\n</body>\n</html>",
      "explanation": "- `flex: 0 0 calc(33.333% - 11px)` — each card occupies one-third of the container width minus gap compensation\n- `@media (max-width: 768px)` — tablet breakpoint; overrides the card width to 50% for two columns\n- `@media (max-width: 480px)` — mobile breakpoint; overrides to 100% for a single column\n- Rules inside a media query only override the specific properties listed; all other card styles still apply\n- Breakpoints cascade — at 480px both media queries match; the more specific (later) one wins for conflicting properties"
    },
    "exercise": {
      "title": "Add Mobile Breakpoints to a Nav Bar",
      "instructions": "Take the starter navigation bar and add two media queries. At max-width 768px: hide the .links div using display none, and change the nav font-size to 14px. At max-width 480px: change the nav h1 font-size to 18px and add padding 10px 16px to the nav. Leave all other styles untouched. The nav should look different at each breakpoint.\n\nExpected: nav links hidden at 768px, heading smaller at 480px.",
      "starterCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Responsive Nav</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    nav {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      background: #1e293b;\n      color: white;\n      padding: 14px 32px;\n    }\n    nav h1 { font-size: 22px; color: #22c55e; }\n    .links { display: flex; gap: 20px; }\n    .links a { color: #94a3b8; text-decoration: none; }\n\n    /* Add @media (max-width: 768px) here */\n\n    /* Add @media (max-width: 480px) here */\n  </style>\n</head>\n<body>\n  <nav>\n    <h1>CodeGuru AI</h1>\n    <div class=\"links\">\n      <a href=\"#\">Home</a>\n      <a href=\"#\">Courses</a>\n      <a href=\"#\">Pricing</a>\n    </div>\n  </nav>\n  <p style=\"padding:24px;\">Resize the preview to see the nav change.</p>\n</body>\n</html>",
      "solutionCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Responsive Nav</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    nav { display: flex; justify-content: space-between; align-items: center; background: #1e293b; color: white; padding: 14px 32px; }\n    nav h1 { font-size: 22px; color: #22c55e; }\n    .links { display: flex; gap: 20px; }\n    .links a { color: #94a3b8; text-decoration: none; }\n    @media (max-width: 768px) { .links { display: none; } nav { font-size: 14px; } }\n    @media (max-width: 480px) { nav h1 { font-size: 18px; } nav { padding: 10px 16px; } }\n  </style>\n</head>\n<body>\n  <nav><h1>CodeGuru AI</h1><div class=\"links\"><a href=\"#\">Home</a><a href=\"#\">Courses</a><a href=\"#\">Pricing</a></div></nav>\n  <p style=\"padding:24px;\">Resize the preview to see the nav change.</p>\n</body>\n</html>",
      "hints": [
        "💡 Write @media (max-width: 768px) { .links { display: none; } } to hide links at tablet size.",
        "💡 Add a second media query: @media (max-width: 480px) { nav h1 { font-size: 18px; } }",
        "💡 Each @media block only overrides the specific properties inside it; all existing nav styles still apply."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "@media",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "max-width",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "html-m5-l1-q1",
          "question": "What does @media (max-width: 768px) mean in CSS?",
          "options": [
            "Apply these styles only on screens wider than 768px",
            "Apply these styles only when the screen is 768px wide or narrower",
            "Set the maximum page width to 768px",
            "Apply these styles on screens exactly 768px wide"
          ],
          "correct": 1,
          "explanation": "max-width: 768px means 'at most 768px wide'. The styles inside this media query apply when the viewport width is 768px or smaller — covering phones and tablets. On wider screens (laptops, desktops), these styles are ignored and the styles outside the media query take effect."
        },
        {
          "id": "html-m5-l1-q2",
          "question": "Why is the viewport meta tag required for media queries to work on mobile devices?",
          "options": [
            "It enables JavaScript to read the screen width",
            "Without it, mobile browsers simulate a desktop screen so media queries trigger at wrong widths",
            "It speeds up loading of CSS files on mobile",
            "It is not required — media queries work the same with or without it"
          ],
          "correct": 1,
          "explanation": "Without the viewport meta tag, mobile browsers simulate a full desktop screen width (typically 980px) and then zoom out to fit the display. This means a phone screen appears to be 980px wide, so @media (max-width: 480px) would never trigger. The viewport meta tag makes the browser use the actual device width, enabling media queries to target real screen sizes."
        }
      ]
    }
  },
  {
    "id": "html-m5-l2",
    "moduleId": "html-m5",
    "title": "Mobile-First Design",
    "order": 2,
    "xpReward": 10,
    "duration": "12 min",
    "explanation": {
      "title": "Building for Mobile First, Then Scaling Up to Desktop",
      "content": "# What is Mobile-First Design?\n\nMobile-first is a CSS strategy where you write your base styles for the **smallest screen** first, then use media queries with `min-width` to enhance the design for larger screens.\n\nThis is the opposite of what many beginners do naturally (design for desktop, then try to fix mobile).\n\n## Desktop-First vs Mobile-First\n\n**Desktop-first** (starts big, breaks down):\n```css\n/* Default — desktop styles */\n.card { flex: 0 0 calc(33% - 11px); }\n\n/* Override for mobile */\n@media (max-width: 480px) {\n  .card { flex: 0 0 100%; }\n}\n```\n\n**Mobile-first** (starts small, scales up):\n```css\n/* Default — mobile styles */\n.card { flex: 0 0 100%; }\n\n/* Tablet and above */\n@media (min-width: 640px) {\n  .card { flex: 0 0 calc(50% - 8px); }\n}\n\n/* Desktop and above */\n@media (min-width: 1024px) {\n  .card { flex: 0 0 calc(33% - 11px); }\n}\n```\n\n## Why Mobile-First?\n\n- Mobile users are the majority — start with their experience\n- Simpler CSS — mobile layouts are naturally simpler; you add complexity for larger screens\n- Better performance — mobile devices download the base CSS first; media queries for desktop only trigger on larger screens\n- Forces good decisions — if your content makes sense on mobile, it works everywhere\n\n## Practical Rules for Mobile-First\n\n1. **Stack everything vertically by default** — `flex-direction: column` or block elements\n2. **Use full widths by default** — `width: 100%` on cards and inputs\n3. **Set comfortable font sizes** — `font-size: 16px` minimum to prevent zoom-in on iOS\n4. **Make tap targets large** — buttons and links at least `44px` tall\n5. **Add desktop enhancements with min-width** — multi-column layouts, larger headings\n\n## Responsive Units\n\n| Unit | Description |\n|---|---|\n| `px` | Fixed pixels — not responsive |\n| `%` | Relative to parent element |\n| `em` | Relative to parent font-size |\n| `rem` | Relative to root font-size (usually 16px) |\n| `vw` | 1% of viewport width |\n| `vh` | 1% of viewport height |\n| `clamp(min, val, max)` | Fluid value between min and max |\n\nIn the code example below, you will see a mobile-first profile page that grows to a two-column layout on wider screens."
    },
    "codeExample": {
      "title": "Mobile-First Profile Page",
      "language": "html-css",
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Mobile-First Profile</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n\n    /* ── MOBILE BASE (default) ───────────────────── */\n    body {\n      font-family: Arial, sans-serif;\n      background: #f8fafc;\n      color: #1e293b;\n      padding: 16px;\n      font-size: 16px;\n    }\n\n    .profile {\n      display: flex;\n      flex-direction: column;   /* stack vertically on mobile */\n      gap: 16px;\n    }\n\n    .avatar-section {\n      background: white;\n      border-radius: 12px;\n      padding: 24px;\n      text-align: center;\n    }\n\n    .avatar {\n      width: 80px;\n      height: 80px;\n      border-radius: 50%;\n      background: #22c55e;\n      color: white;\n      font-size: 32px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: 0 auto 12px;\n    }\n\n    .bio-section {\n      background: white;\n      border-radius: 12px;\n      padding: 24px;\n    }\n\n    .skill-tag {\n      display: inline-block;\n      background: #dcfce7;\n      color: #16a34a;\n      padding: 4px 12px;\n      border-radius: 999px;\n      font-size: 13px;\n      margin: 4px 4px 4px 0;\n    }\n\n    /* ── TABLET (≥ 640px) ────────────────────────── */\n    @media (min-width: 640px) {\n      body { padding: 24px; }\n      .profile {\n        flex-direction: row;     /* side by side on tablet+ */\n        align-items: flex-start;\n      }\n      .avatar-section { width: 220px; flex-shrink: 0; }\n      .bio-section    { flex: 1; }\n    }\n\n    /* ── DESKTOP (≥ 1024px) ──────────────────────── */\n    @media (min-width: 1024px) {\n      body { max-width: 900px; margin: 0 auto; padding: 40px; }\n    }\n  </style>\n</head>\n<body>\n\n  <div class=\"profile\">\n    <div class=\"avatar-section\">\n      <div class=\"avatar\">P</div>\n      <h2>Priya Verma</h2>\n      <p style=\"color:#64748b; font-size:14px;\">Full-Stack Developer</p>\n    </div>\n\n    <div class=\"bio-section\">\n      <h3>About</h3>\n      <p>Three years of experience building web applications with Python and JavaScript. Currently learning React and advanced CSS.</p>\n      <h3 style=\"margin-top:16px;\">Skills</h3>\n      <span class=\"skill-tag\">Python</span>\n      <span class=\"skill-tag\">JavaScript</span>\n      <span class=\"skill-tag\">HTML/CSS</span>\n      <span class=\"skill-tag\">React</span>\n    </div>\n  </div>\n\n</body>\n</html>",
      "explanation": "- Mobile base uses `flex-direction: column` — sections stack vertically, full width, easy to read on a phone\n- `@media (min-width: 640px)` switches to `flex-direction: row` — avatar and bio sit side by side on tablet\n- `width: 220px; flex-shrink: 0` pins the avatar section to a fixed width on wider screens\n- `@media (min-width: 1024px)` adds `max-width: 900px; margin: 0 auto` to centre the content on large screens\n- `font-size: 16px` on body — ensures iOS does not auto-zoom inputs, which requires 16px minimum"
    },
    "exercise": {
      "title": "Convert Desktop-First to Mobile-First",
      "instructions": "The starter code is desktop-first with max-width media queries. Rewrite it as mobile-first using min-width queries. The base styles should make the layout single-column (flex-direction column, cards 100% wide). Add a min-width 640px query for two columns (cards 50% minus gap). Add a min-width 1024px query for three columns (cards 33.333% minus gap). Keep all other card styles unchanged.\n\nExpected: single column on mobile, two on tablet, three on desktop.",
      "starterCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Mobile-First Refactor</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 24px; }\n    .grid { display: flex; flex-wrap: wrap; gap: 16px; }\n\n    /* Current desktop-first approach */\n    .card { flex: 0 0 calc(33.333% - 11px); background: white;\n            border-radius: 8px; padding: 20px; border: 1px solid #e2e8f0; }\n    .card h3 { color: #22c55e; margin-bottom: 8px; }\n    @media (max-width: 768px) { .card { flex: 0 0 calc(50% - 8px); } }\n    @media (max-width: 480px) { .card { flex: 0 0 100%; } }\n\n    /* TODO: rewrite as mobile-first using min-width queries */\n  </style>\n</head>\n<body>\n  <div class=\"grid\">\n    <div class=\"card\"><h3>Python</h3><p>Beginner friendly scripting and AI.</p></div>\n    <div class=\"card\"><h3>JavaScript</h3><p>The language of the browser.</p></div>\n    <div class=\"card\"><h3>HTML/CSS</h3><p>Build and style any webpage.</p></div>\n  </div>\n</body>\n</html>",
      "solutionCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Mobile-First Refactor</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 24px; }\n    .grid { display: flex; flex-wrap: wrap; gap: 16px; }\n    .card { flex: 0 0 100%; background: white; border-radius: 8px; padding: 20px; border: 1px solid #e2e8f0; }\n    .card h3 { color: #22c55e; margin-bottom: 8px; }\n    @media (min-width: 640px)  { .card { flex: 0 0 calc(50% - 8px); } }\n    @media (min-width: 1024px) { .card { flex: 0 0 calc(33.333% - 11px); } }\n  </style>\n</head>\n<body>\n  <div class=\"grid\">\n    <div class=\"card\"><h3>Python</h3><p>Beginner friendly scripting and AI.</p></div>\n    <div class=\"card\"><h3>JavaScript</h3><p>The language of the browser.</p></div>\n    <div class=\"card\"><h3>HTML/CSS</h3><p>Build and style any webpage.</p></div>\n  </div>\n</body>\n</html>",
      "hints": [
        "💡 Change the base .card rule to flex: 0 0 100% so cards are full-width on mobile by default.",
        "💡 Add @media (min-width: 640px) { .card { flex: 0 0 calc(50% - 8px); } } for two columns on tablet.",
        "💡 Add @media (min-width: 1024px) { .card { flex: 0 0 calc(33.333% - 11px); } } for three columns on desktop."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "min-width",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "100%",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "html-m5-l2-q1",
          "question": "What is the key difference between mobile-first and desktop-first CSS strategies?",
          "options": [
            "Mobile-first uses max-width queries; desktop-first uses min-width queries",
            "Mobile-first writes base styles for small screens and uses min-width to enhance; desktop-first does the opposite",
            "Mobile-first only works on Android; desktop-first works everywhere",
            "They produce different visual results and cannot be converted between each other"
          ],
          "correct": 1,
          "explanation": "Mobile-first writes the simplest styles first (for small screens) as the default, then uses @media (min-width: ...) to progressively enhance the design for larger screens. Desktop-first starts with complex desktop styles and uses @media (max-width: ...) to simplify for smaller screens. Both approaches can produce the same end result, but mobile-first is generally considered better practice."
        },
        {
          "id": "html-m5-l2-q2",
          "question": "What does the CSS unit vw stand for and what is 50vw equal to?",
          "options": [
            "Vertical width — 50vw is 50 pixels",
            "Viewport width — 50vw is always 50% of the browser window's width",
            "Variable width — 50vw changes based on the parent element",
            "View window — 50vw is 50% of the screen's physical resolution"
          ],
          "correct": 1,
          "explanation": "vw stands for viewport width. 1vw equals 1% of the browser window's current width. So 50vw is always exactly half the viewport width, regardless of screen size. This makes vw useful for elements that should always be a specific proportion of the screen — like a hero banner: width: 100vw fills the full viewport width."
        }
      ]
    }
  },
  {
    "id": "html-m5-l3",
    "moduleId": "html-m5",
    "title": "Responsive Images and Patterns",
    "order": 3,
    "xpReward": 15,
    "duration": "13 min",
    "explanation": {
      "title": "Responsive Images, CSS Variables, and Practical Patterns",
      "content": "# Responsive Images\n\nImages are the heaviest assets on most pages. Making them responsive involves two concerns: **visual** (images must not overflow their container) and **performance** (mobile devices should not download desktop-sized images).\n\n## Visual Responsiveness\n\nOne line of CSS makes all images visually responsive:\n\n```css\nimg { max-width: 100%; height: auto; }\n```\n\n- `max-width: 100%` — the image cannot be wider than its container\n- `height: auto` — maintains the original aspect ratio\n\n## The srcset Attribute\n\n`srcset` lets you provide multiple image files for different screen resolutions — the browser picks the best one:\n\n```html\n<img\n  src=\"photo-800.jpg\"\n  srcset=\"photo-400.jpg 400w, photo-800.jpg 800w, photo-1200.jpg 1200w\"\n  sizes=\"(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw\"\n  alt=\"Coding workspace\">\n```\n\n## CSS Custom Properties (Variables)\n\nCSS variables store values you reuse throughout a stylesheet. They start with `--`:\n\n```css\n:root {\n  --color-primary:   #22c55e;\n  --color-text:      #1e293b;\n  --color-bg:        #f8fafc;\n  --radius:          8px;\n  --spacing-md:      16px;\n  --spacing-lg:      32px;\n}\n\n.button {\n  background: var(--color-primary);\n  border-radius: var(--radius);\n  padding: var(--spacing-md);\n}\n```\n\nChange `--color-primary` in one place and every element that uses `var(--color-primary)` updates instantly.\n\n## Practical Responsive Patterns\n\n**Fluid typography with clamp():**\n```css\nh1 { font-size: clamp(24px, 5vw, 48px); }\n```\nFluid between 24px (minimum) and 48px (maximum). `5vw` is the preferred size between.\n\n**Responsive padding:**\n```css\n.section { padding: clamp(24px, 5vw, 80px) clamp(16px, 4vw, 120px); }\n```\n\n**Hiding elements at breakpoints:**\n```css\n.desktop-only { display: none; }\n@media (min-width: 1024px) { .desktop-only { display: block; } }\n\n.mobile-only {}\n@media (min-width: 1024px) { .mobile-only { display: none; } }\n```\n\nIn the code example below, you will see CSS variables, responsive images, clamp(), and breakpoints combined in a responsive feature section."
    },
    "codeExample": {
      "title": "Responsive Feature Section",
      "language": "html-css",
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Responsive Features</title>\n  <style>\n    /* CSS Custom Properties — change here, updates everywhere */\n    :root {\n      --primary:    #22c55e;\n      --dark:       #0f172a;\n      --text:       #475569;\n      --bg:         #f8fafc;\n      --card-bg:    #ffffff;\n      --radius:     10px;\n      --gap:        20px;\n    }\n\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n\n    body {\n      font-family: Arial, sans-serif;\n      background: var(--bg);\n      color: var(--text);\n      padding: 24px 16px;\n    }\n\n    /* Fluid heading using clamp() */\n    h1 {\n      font-size: clamp(22px, 4vw, 40px);\n      color: var(--dark);\n      text-align: center;\n      margin-bottom: 24px;\n    }\n\n    /* Responsive image */\n    .banner-img {\n      max-width: 100%;\n      height: auto;\n      border-radius: var(--radius);\n      display: block;\n      margin: 0 auto 32px;\n    }\n\n    /* Mobile-first grid */\n    .features { display: flex; flex-wrap: wrap; gap: var(--gap); }\n\n    .feature {\n      flex: 0 0 100%;             /* mobile: full width */\n      background: var(--card-bg);\n      border-radius: var(--radius);\n      padding: 20px;\n      border-left: 4px solid var(--primary);\n    }\n\n    .feature h3 { color: var(--primary); margin-bottom: 8px; }\n\n    /* Tablet */\n    @media (min-width: 640px) {\n      .feature { flex: 0 0 calc(50% - 10px); }\n    }\n\n    /* Desktop */\n    @media (min-width: 1024px) {\n      body { max-width: 960px; margin: 0 auto; padding: 48px 24px; }\n      .feature { flex: 0 0 calc(33.333% - 14px); }\n    }\n  </style>\n</head>\n<body>\n\n  <h1>Why Learn with CodeGuru AI?</h1>\n\n  <img class=\"banner-img\"\n       src=\"https://picsum.photos/800/300\"\n       alt=\"Students learning to code\">\n\n  <div class=\"features\">\n    <div class=\"feature\"><h3>AI Hints</h3><p>Get intelligent hints when you are stuck — without giving away the answer.</p></div>\n    <div class=\"feature\"><h3>XP System</h3><p>Earn experience points for every completed lesson and maintain your streak.</p></div>\n    <div class=\"feature\"><h3>Indian Prices</h3><p>Plans designed for the Indian market with UPI and card payment support.</p></div>\n  </div>\n\n</body>\n</html>",
      "explanation": "- `:root { --primary: #22c55e; }` — defines CSS variables on the root element, making them globally accessible\n- `var(--primary)` — reads the value of a CSS variable; change the variable once, update everywhere\n- `clamp(22px, 4vw, 40px)` — h1 is fluid: never smaller than 22px, never larger than 40px, ideally 4% of the viewport\n- `max-width: 100%; height: auto` on `.banner-img` — prevents the image from overflowing its container\n- Mobile-first: `.feature` starts at `100%` width, then `50%` at 640px, then `33.333%` at 1024px"
    },
    "exercise": {
      "title": "Add CSS Variables and a Responsive Image",
      "instructions": "Take the starter page and: (1) define three CSS variables in :root — --primary as #6366f1, --radius as 8px, --gap as 20px; (2) apply them with var() on the button background-color, card border-radius, and grid gap; (3) add an img tag with src https://picsum.photos/600/200 and alt 'Banner', with max-width 100% and height auto.\n\nExpected: CSS variables defined and used, responsive image present.",
      "starterCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>CSS Variables</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; padding: 32px; background: #f8fafc; }\n\n    /* Define :root variables here */\n\n    .grid { display: flex; gap: 20px; margin-top: 24px; }\n    .card { flex: 1; background: white; border-radius: 8px; padding: 20px;\n            border: 1px solid #e2e8f0; }\n    .card h3 { margin-bottom: 8px; }\n    .btn { background-color: #6366f1; color: white; padding: 10px 24px;\n           border: none; border-radius: 8px; cursor: pointer; }\n\n    /* Make img responsive */\n    img { /* add max-width and height */ }\n  </style>\n</head>\n<body>\n  <h1>Features</h1>\n  <!-- Add img tag here -->\n  <div class=\"grid\">\n    <div class=\"card\"><h3>Fast</h3><p>Optimised for all devices.</p></div>\n    <div class=\"card\"><h3>Safe</h3><p>Secure by design.</p></div>\n  </div>\n  <br>\n  <button class=\"btn\">Get Started</button>\n</body>\n</html>",
      "solutionCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>CSS Variables</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; padding: 32px; background: #f8fafc; }\n    :root { --primary: #6366f1; --radius: 8px; --gap: 20px; }\n    .grid { display: flex; gap: var(--gap); margin-top: 24px; }\n    .card { flex: 1; background: white; border-radius: var(--radius); padding: 20px; border: 1px solid #e2e8f0; }\n    .card h3 { margin-bottom: 8px; }\n    .btn { background-color: var(--primary); color: white; padding: 10px 24px; border: none; border-radius: var(--radius); cursor: pointer; }\n    img { max-width: 100%; height: auto; }\n  </style>\n</head>\n<body>\n  <h1>Features</h1>\n  <img src=\"https://picsum.photos/600/200\" alt=\"Banner\">\n  <div class=\"grid\">\n    <div class=\"card\"><h3>Fast</h3><p>Optimised for all devices.</p></div>\n    <div class=\"card\"><h3>Safe</h3><p>Secure by design.</p></div>\n  </div>\n  <br>\n  <button class=\"btn\">Get Started</button>\n</body>\n</html>",
      "hints": [
        "💡 Define variables in :root { --primary: #6366f1; --radius: 8px; --gap: 20px; } at the top of your style block.",
        "💡 Replace hard-coded values with var(): background-color: var(--primary); border-radius: var(--radius); gap: var(--gap);",
        "💡 Add an img tag: <img src=\"https://picsum.photos/600/200\" alt=\"Banner\"> and add max-width: 100%; height: auto; to the img rule."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "--primary",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "max-width: 100%",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "html-m5-l3-q1",
          "question": "What does max-width: 100% on an img element achieve?",
          "options": [
            "It sets the image to exactly 100 pixels wide",
            "It makes the image always fill the entire screen",
            "It prevents the image from overflowing its container while allowing it to be smaller",
            "It crops the image to a square"
          ],
          "correct": 2,
          "explanation": "max-width: 100% means the image can be at most as wide as its container. If the image is smaller than the container it renders at its natural size. If the container is smaller than the image, the image shrinks to fit. Adding height: auto ensures the aspect ratio is preserved during this scaling."
        },
        {
          "id": "html-m5-l3-q2",
          "question": "How do you read the value of a CSS custom property named --primary in a rule?",
          "options": [
            "primary()",
            "$(--primary)",
            "var(--primary)",
            "@primary"
          ],
          "correct": 2,
          "explanation": "CSS custom properties (variables) are read with the var() function: var(--primary). The double dash prefix (--) is mandatory both when defining the variable in :root and when reading it with var(). This syntax was introduced in CSS3 and is supported in all modern browsers."
        }
      ]
    }
  }
]
''')

# ── html-m6 — Mini Project
# Lessons : html-m6-l1, html-m6-l2, html-m6-l3
# XP      : 55
html-css_m6_raw = json.loads(r'''
[
  {
    "id": "html-m6-l1",
    "moduleId": "html-m6",
    "title": "Semantic HTML Elements",
    "order": 1,
    "xpReward": 15,
    "duration": "11 min",
    "explanation": {
      "title": "Writing Meaningful HTML with Semantic Elements",
      "content": "# What is Semantic HTML?\n\nSemantic HTML means using elements that describe the **meaning** of their content, not just its visual appearance. Compare:\n\n```html\n<!-- Non-semantic: tells the browser nothing about content -->\n<div id=\"nav\">...</div>\n<div class=\"article\">...</div>\n<div id=\"footer\">...</div>\n\n<!-- Semantic: the element name reveals the content's role -->\n<nav>...</nav>\n<article>...</article>\n<footer>...</footer>\n```\n\nBoth render identically in a browser. But semantic HTML gives three major benefits:\n\n1. **Accessibility** — screen readers use semantic elements to help blind users navigate: `<nav>` means they can jump to the navigation, `<main>` means they can skip to the main content\n2. **SEO** — search engines use `<h1>`, `<article>`, `<main>` to understand what the page is about and rank it accordingly\n3. **Maintainability** — other developers (and your future self) understand the structure immediately\n\n## The Key Semantic Elements\n\n| Element | Meaning | Replaces |\n|---|---|---|\n| `<header>` | Page or section header | `<div id=\"header\">` |\n| `<nav>` | Navigation links | `<div id=\"nav\">` |\n| `<main>` | Primary page content (use once) | `<div id=\"main\">` |\n| `<article>` | Self-contained content (blog post, card) | `<div class=\"post\">` |\n| `<section>` | Thematic grouping of content | `<div class=\"section\">` |\n| `<aside>` | Related but secondary content | `<div id=\"sidebar\">` |\n| `<footer>` | Page or section footer | `<div id=\"footer\">` |\n| `<figure>` | Image with caption | `<div class=\"image\">` |\n| `<figcaption>` | Caption for a figure | `<p class=\"caption\">` |\n| `<time>` | Date or time value | `<span>Jan 2025</span>` |\n| `<mark>` | Highlighted/relevant text | `<span class=\"highlight\">` |\n\n## Landmark Elements for Screen Readers\n\nScreen reader users navigate by landmark: they press a key to jump between `<header>`, `<nav>`, `<main>`, `<footer>`. A page with no semantic structure forces them to read every line from top to bottom.\n\n## Nesting Rules\n\n- Only one `<main>` per page\n- `<article>` can contain its own `<header>` and `<footer>`\n- `<nav>` goes inside `<header>` or at the top level, not inside `<main>`\n- `<section>` should always have a heading (`<h2>` or lower)\n\nIn the code example below, you will see a fully semantic blog article page using every key landmark element."
    },
    "codeExample": {
      "title": "Semantic Blog Article Page",
      "language": "html-css",
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta name=\"description\" content=\"A guide to learning Python in 2025\">\n  <title>Python Guide 2025 | CodeGuru AI</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; color: #1e293b; line-height: 1.7; }\n    header { background: #1e293b; color: white; padding: 14px 32px;\n             display: flex; justify-content: space-between; align-items: center; }\n    nav a  { color: #94a3b8; text-decoration: none; margin-left: 20px; font-size: 14px; }\n    main   { max-width: 720px; margin: 0 auto; padding: 40px 24px; }\n    article header { background: none; color: inherit; padding: 0;\n                     display: block; margin-bottom: 24px; }\n    h1  { font-size: 28px; color: #0f172a; margin-bottom: 8px; }\n    .meta { font-size: 13px; color: #94a3b8; }\n    section { margin: 32px 0; }\n    h2  { font-size: 20px; color: #0f172a; margin-bottom: 12px; }\n    figure { margin: 24px 0; }\n    figure img { max-width: 100%; border-radius: 8px; }\n    figcaption { font-size: 13px; color: #64748b; margin-top: 6px; }\n    aside { background: #f1f5f9; border-left: 4px solid #22c55e;\n            padding: 16px; border-radius: 0 8px 8px 0; margin: 24px 0; }\n    footer { background: #0f172a; color: #64748b; text-align: center;\n             padding: 24px; font-size: 14px; margin-top: 48px; }\n  </style>\n</head>\n<body>\n\n  <header>\n    <strong>CodeGuru AI</strong>\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">Courses</a>\n      <a href=\"#\">Blog</a>\n    </nav>\n  </header>\n\n  <main>\n    <article>\n      <header>\n        <h1>Getting Started with Python in 2025</h1>\n        <p class=\"meta\">\n          By <strong>Rahul Sharma</strong> &middot;\n          <time datetime=\"2025-01-15\">15 January 2025</time>\n          &middot; 8 min read\n        </p>\n      </header>\n\n      <figure>\n        <img src=\"https://picsum.photos/680/280\" alt=\"Python programming workspace\">\n        <figcaption>Setting up a Python development environment</figcaption>\n      </figure>\n\n      <section>\n        <h2>Why Python?</h2>\n        <p>Python is the most beginner-friendly programming language and\n           the top choice for AI, data science, and web development.</p>\n      </section>\n\n      <aside>\n        <strong>Pro Tip:</strong> Start with the official Python tutorial at\n        python.org before moving to third-party resources.\n      </aside>\n\n      <section>\n        <h2>Installing Python</h2>\n        <p>Visit python.org/downloads and click the yellow button.\n           Always choose Python 3, never Python 2.</p>\n      </section>\n    </article>\n  </main>\n\n  <footer>\n    <p>&copy; 2025 CodeGuru AI. All rights reserved.</p>\n  </footer>\n\n</body>\n</html>",
      "explanation": "- `position: sticky; top: 0; z-index: 10` on `header` — the nav sticks to the top as the user scrolls\n- `clamp(24px, 5vw, 44px)` on `h1` — fluid font size; scales between 24px and 44px with the viewport\n- Anchor links like `href=\"#projects\"` jump to the element with `id=\"projects\"` on the same page\n- `flex: 0 0 calc(33.333% - 14px)` — three-column cards with 20px gap compensation\n- Mobile breakpoints convert three columns to two at 768px and one at 480px"
    },
    "exercise": {
      "title": "Convert Divs to Semantic Elements",
      "instructions": "The starter code uses div elements with id attributes for all structure. Replace each div with the appropriate semantic element: div#header becomes header, div#nav becomes nav, div#main becomes main, div#article becomes article, div#sidebar becomes aside, and div#footer becomes footer. Keep all existing CSS classes and styles unchanged. Only change the HTML tag names.\n\nExpected: six semantic elements replacing six div elements.",
      "starterCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Semantic Refactor</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; }\n    #header { background: #1e293b; color: white; padding: 14px 32px;\n              display: flex; justify-content: space-between; align-items: center; }\n    #nav a  { color: #94a3b8; text-decoration: none; margin-left: 16px; }\n    #main   { display: flex; gap: 24px; padding: 32px; max-width: 960px; margin: 0 auto; }\n    #article { flex: 1; }\n    #sidebar { width: 200px; background: #f1f5f9; padding: 16px; border-radius: 8px; }\n    #footer  { background: #0f172a; color: white; text-align: center; padding: 20px; }\n  </style>\n</head>\n<body>\n  <div id=\"header\">\n    <strong>My Site</strong>\n    <div id=\"nav\"><a href=\"#\">Home</a><a href=\"#\">About</a></div>\n  </div>\n  <div id=\"main\">\n    <div id=\"article\"><h1>Welcome</h1><p>Main content here.</p></div>\n    <div id=\"sidebar\"><h3>Links</h3><p>Related content.</p></div>\n  </div>\n  <div id=\"footer\"><p>&copy; 2025 My Site</p></div>\n</body>\n</html>",
      "solutionCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Semantic Refactor</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; }\n    #header { background: #1e293b; color: white; padding: 14px 32px; display: flex; justify-content: space-between; align-items: center; }\n    #nav a  { color: #94a3b8; text-decoration: none; margin-left: 16px; }\n    #main   { display: flex; gap: 24px; padding: 32px; max-width: 960px; margin: 0 auto; }\n    #article { flex: 1; }\n    #sidebar { width: 200px; background: #f1f5f9; padding: 16px; border-radius: 8px; }\n    #footer  { background: #0f172a; color: white; text-align: center; padding: 20px; }\n  </style>\n</head>\n<body>\n  <header id=\"header\">\n    <strong>My Site</strong>\n    <nav id=\"nav\"><a href=\"#\">Home</a><a href=\"#\">About</a></nav>\n  </header>\n  <main id=\"main\">\n    <article id=\"article\"><h1>Welcome</h1><p>Main content here.</p></article>\n    <aside id=\"sidebar\"><h3>Links</h3><p>Related content.</p></aside>\n  </main>\n  <footer id=\"footer\"><p>&copy; 2025 My Site</p></footer>\n</body>\n</html>",
      "hints": [
        "💡 Replace <div id=\"header\"> with <header id=\"header\"> — keep the id so the CSS still targets it.",
        "💡 Replace <div id=\"nav\"> with <nav id=\"nav\">, div#sidebar with <aside id=\"sidebar\">, div#article with <article id=\"article\">.",
        "💡 Replace the outermost div#main with <main id=\"main\"> and div#footer with <footer id=\"footer\">."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "<header",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "<footer",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "html-m6-l1-q1",
          "question": "What is the main advantage of using semantic HTML elements over generic divs?",
          "options": [
            "Semantic elements load faster than divs",
            "Semantic elements give meaning to content, helping screen readers and search engines",
            "Semantic elements cannot be styled with CSS",
            "Semantic elements automatically add visual styling"
          ],
          "correct": 1,
          "explanation": "Semantic elements communicate the role of their content to browsers, screen readers, and search engines. A nav element tells assistive technology 'this is the navigation', enabling keyboard shortcuts for blind users. Search engines use article and main to understand page content better. Divs convey no meaning — they are purely structural containers."
        },
        {
          "id": "html-m6-l1-q2",
          "question": "How many main elements should a well-structured HTML page contain?",
          "options": [
            "One per section",
            "One per article",
            "Exactly one — it represents the single primary content area",
            "As many as needed for layout"
          ],
          "correct": 2,
          "explanation": "The main element should appear exactly once per page and contain the primary unique content of that page. Screen readers present main as a landmark that users can jump to directly. Having multiple main elements confuses both users and validators. Headers, footers, navigation, and sidebars all go outside main."
        }
      ]
    }
  },
  {
    "id": "html-m6-l2",
    "moduleId": "html-m6",
    "title": "Building a Complete Web Page",
    "order": 2,
    "xpReward": 15,
    "duration": "15 min",
    "explanation": {
      "title": "Combining HTML and CSS into a Full, Polished Page",
      "content": "# Building a Complete Page\n\nUp to this point you have learned individual skills in isolation. In this lesson, you will see how they combine into a single production-quality page. Every professional page follows the same assembly process.\n\n## The Page Assembly Checklist\n\n**HTML structure:**\n- [ ] `<!DOCTYPE html>` and `<html lang=\"en\">`\n- [ ] `<head>` with charset, viewport, description, title\n- [ ] Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`\n- [ ] One `<h1>` per page, heading hierarchy below it\n- [ ] All images have descriptive `alt` text\n- [ ] All form inputs have linked `<label>` elements\n\n**CSS foundations:**\n- [ ] Universal reset: `* { box-sizing: border-box; margin: 0; padding: 0; }`\n- [ ] CSS custom properties on `:root`\n- [ ] `img { max-width: 100%; height: auto; }`\n- [ ] Flexbox or Grid for all multi-column layouts\n- [ ] Media queries for tablet and mobile breakpoints\n\n**Visual polish:**\n- [ ] Consistent colour palette (2-3 colours)\n- [ ] One font family throughout\n- [ ] Adequate white space — padding and gap values\n- [ ] Hover states on all interactive elements\n\n## Common Page Sections\n\n```\n<header>  ← logo + navigation\n<main>\n  <section class=\"hero\">    ← big headline + call to action\n  <section class=\"features\"> ← icon + headline + text cards\n  <section class=\"pricing\">  ← plan comparison\n  <section class=\"contact\">  ← form or details\n</main>\n<footer>  ← links + copyright\n```\n\n## Performance Basics\n\n- Link CSS in `<head>` so styles apply before content renders\n- Put `<script>` tags before `</body>` so they do not block rendering\n- Use `loading=\"lazy\"` on images below the fold\n- Prefer system fonts for the fastest load times\n\n```html\n<img src=\"photo.jpg\" alt=\"Description\" loading=\"lazy\">\n```\n\n## Accessibility Quick Wins\n\n- Every page needs a clearly visible `:focus` style for keyboard users\n- Colour contrast must be at least 4.5:1 for body text (WCAG AA)\n- Use `aria-label` on icon-only buttons: `<button aria-label=\"Close menu\">`\n\nIn the code example below you will see a complete four-section landing page applying every concept from this course."
    },
    "codeExample": {
      "title": "Complete Landing Page",
      "language": "html-css",
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>CodeGuru AI | Learn to Code</title>\n  <style>\n    :root { --primary:#22c55e; --dark:#0f172a; --white:#fff; --radius:10px; }\n    * { box-sizing:border-box; margin:0; padding:0; }\n    body { font-family:Arial,sans-serif; background:#f8fafc; color:#475569; line-height:1.7; }\n    img  { max-width:100%; height:auto; }\n    header { background:var(--dark); padding:14px 32px; display:flex;\n             justify-content:space-between; align-items:center; }\n    header strong { color:var(--primary); font-size:20px; }\n    nav { display:flex; gap:20px; }\n    nav a { color:#94a3b8; text-decoration:none; font-size:14px; }\n    nav a:hover { color:var(--white); }\n    .hero { background:var(--dark); color:var(--white); text-align:center;\n            padding:80px 24px; display:flex; flex-direction:column;\n            align-items:center; gap:20px; }\n    .hero h1 { font-size:clamp(26px,5vw,48px); }\n    .hero p  { color:#94a3b8; max-width:520px; }\n    .btn { background:var(--primary); color:var(--white); padding:14px 32px;\n           border:none; border-radius:var(--radius); font-size:16px; cursor:pointer; }\n    .features { padding:60px 32px; max-width:960px; margin:0 auto; }\n    .features h2 { text-align:center; font-size:28px; color:var(--dark); margin-bottom:32px; }\n    .cards { display:flex; flex-wrap:wrap; gap:20px; }\n    .card { flex:0 0 calc(33.333% - 14px); background:white;\n            border-radius:var(--radius); padding:24px; border:1px solid #e2e8f0; }\n    .card h3 { color:var(--primary); margin-bottom:8px; }\n    footer { background:var(--dark); color:#64748b; text-align:center; padding:32px; font-size:14px; }\n    @media(max-width:768px){ .card { flex:0 0 calc(50% - 10px); } }\n    @media(max-width:480px){ .card { flex:0 0 100%; } }\n  </style>\n</head>\n<body>\n  <header>\n    <strong>CodeGuru AI</strong>\n    <nav><a href=\"#\">Home</a><a href=\"#\">Courses</a><a href=\"#\">Pricing</a></nav>\n  </header>\n  <main>\n    <section class=\"hero\">\n      <h1>Learn to Code.<br>Built for India.</h1>\n      <p>AI-powered courses in Python, JavaScript, Java, and HTML/CSS.</p>\n      <button class=\"btn\">Start for Free</button>\n    </section>\n    <section class=\"features\">\n      <h2>Why CodeGuru AI?</h2>\n      <div class=\"cards\">\n        <div class=\"card\"><h3>AI Hints</h3><p>Get smart hints when stuck.</p></div>\n        <div class=\"card\"><h3>XP &amp; Streaks</h3><p>Gamified progress daily.</p></div>\n        <div class=\"card\"><h3>Indian Prices</h3><p>Plans from Rs 199/month.</p></div>\n      </div>\n    </section>\n  </main>\n  <footer><p>&copy; 2025 CodeGuru AI &middot; Made with love in India</p></footer>\n</body>\n</html>",
      "explanation": "- `:root` CSS variables — a single place to change the entire colour scheme of the page\n- `clamp(26px, 5vw, 48px)` on `h1` — fluid font size; scales between 26px and 48px with the viewport\n- `display: flex; flex-direction: column; align-items: center` on `.hero` — stacks and centres the hero content\n- `flex: 0 0 calc(33.333% - 14px)` — three-column card grid; the subtraction compensates for the `20px` gap\n- `@media` blocks at the bottom — mobile-last is fine here since base styles are desktop; production code should be mobile-first"
    },
    "exercise": {
      "title": "Add a Pricing Section to the Page",
      "instructions": "Add a pricing section to the landing page. Create a section element (class 'pricing') with an h2 heading 'Simple Pricing' and a flex row of two div elements (class 'plan'). Each plan needs an h3 name, a price paragraph, and two li items. Style .pricing with padding 60px 32px and max-width 800px centred. Style .plan with flex 1, white background, border-radius 10px, padding 24px, and border. Place the section inside main after the existing features section.",
      "starterCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>CodeGuru AI</title>\n  <style>\n    :root { --primary: #22c55e; --dark: #0f172a; --radius: 10px; }\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; background: #f8fafc; color: #475569; }\n    header { background: var(--dark); color: white; padding: 14px 32px;\n             display: flex; justify-content: space-between; align-items: center; }\n    header strong { color: var(--primary); }\n    /* Add .pricing and .plan styles here */\n    footer { background: var(--dark); color: #64748b; text-align: center; padding: 24px; font-size: 14px; }\n  </style>\n</head>\n<body>\n  <header><strong>CodeGuru AI</strong><nav></nav></header>\n  <main>\n    <!-- Add pricing section here -->\n  </main>\n  <footer><p>&copy; 2025 CodeGuru AI</p></footer>\n</body>\n</html>",
      "solutionCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>CodeGuru AI</title>\n  <style>\n    :root { --primary: #22c55e; --dark: #0f172a; --radius: 10px; }\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; background: #f8fafc; color: #475569; }\n    header { background: var(--dark); color: white; padding: 14px 32px; display: flex; justify-content: space-between; align-items: center; }\n    header strong { color: var(--primary); }\n    .pricing { padding: 60px 32px; max-width: 800px; margin: 0 auto; }\n    .pricing h2 { text-align: center; color: var(--dark); margin-bottom: 32px; }\n    .plans { display: flex; gap: 24px; }\n    .plan { flex: 1; background: white; border-radius: var(--radius); padding: 24px; border: 1px solid #e2e8f0; }\n    .plan h3 { color: var(--primary); margin-bottom: 8px; }\n    .plan ul { margin-top: 12px; padding-left: 20px; }\n    footer { background: var(--dark); color: #64748b; text-align: center; padding: 24px; font-size: 14px; }\n  </style>\n</head>\n<body>\n  <header><strong>CodeGuru AI</strong><nav></nav></header>\n  <main>\n    <section class=\"pricing\">\n      <h2>Simple Pricing</h2>\n      <div class=\"plans\">\n        <div class=\"plan\">\n          <h3>Free</h3>\n          <p>₹0 / month</p>\n          <ul><li>Python Basics</li><li>Community support</li></ul>\n        </div>\n        <div class=\"plan\">\n          <h3>Pro</h3>\n          <p>₹299 / month</p>\n          <ul><li>All 4 languages</li><li>AI mentor hints</li></ul>\n        </div>\n      </div>\n    </section>\n  </main>\n  <footer><p>&copy; 2025 CodeGuru AI</p></footer>\n</body>\n</html>",
      "hints": [
        "💡 Add .pricing { padding: 60px 32px; max-width: 800px; margin: 0 auto; } to the style block.",
        "💡 Add .plans { display: flex; gap: 24px; } and .plan { flex: 1; background: white; border-radius: var(--radius); padding: 24px; border: 1px solid #e2e8f0; }",
        "💡 Inside main, add a section.pricing with an h2 and a div.plans containing two div.plan elements each with h3, p, and ul."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Simple Pricing",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "display: flex",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "html-m6-l2-q1",
          "question": "Where should a link to an external CSS stylesheet be placed in an HTML document?",
          "options": [
            "At the end of the body element",
            "Inside the body, before any content",
            "Inside the head element",
            "After the closing html tag"
          ],
          "correct": 2,
          "explanation": "CSS link tags must go inside the head element so styles load before the browser renders any content. If you place them in the body, users briefly see unstyled content (a 'flash of unstyled content') before styles apply. JavaScript files, in contrast, are usually placed just before the closing body tag so they do not block HTML rendering."
        },
        {
          "id": "html-m6-l2-q2",
          "question": "What does the loading=\"lazy\" attribute on an img element do?",
          "options": [
            "Makes the image load at low resolution first, then high resolution",
            "Defers loading the image until it is close to entering the visible viewport",
            "Prevents the image from loading at all until a button is clicked",
            "Reduces the image file size automatically"
          ],
          "correct": 1,
          "explanation": "loading=\"lazy\" tells the browser to defer downloading an image until the user scrolls near it. Images below the fold (not immediately visible) are not fetched on page load, reducing initial page weight and speeding up the time-to-interactive. Images above the fold (in the first screenful) should use loading=\"eager\" or omit the attribute entirely."
        }
      ]
    }
  },
  {
    "id": "html-m6-l3",
    "moduleId": "html-m6",
    "title": "Mini Project: Personal Portfolio Website",
    "order": 3,
    "xpReward": 25,
    "duration": "20 min",
    "explanation": {
      "title": "Putting It All Together: Build Your Personal Portfolio",
      "content": "# The Mini Project\n\nYou have now learned every fundamental skill in HTML and CSS:\n\n1. **HTML structure** — DOCTYPE, head, body, metadata\n2. **Text elements** — headings, paragraphs, lists, inline tags\n3. **Links and images** — anchors, img, tables, forms\n4. **CSS selectors** — element, class, ID, pseudo-class, descendant\n5. **Box model** — margin, padding, border, box-sizing\n6. **Typography and colour** — font stacks, colours, CSS variables\n7. **Flexbox** — axes, alignment, flex-wrap, flex-grow\n8. **Responsive design** — media queries, mobile-first, fluid units\n9. **Semantic HTML** — header, nav, main, article, section, footer\n\nIn this lesson, you will build a **personal portfolio website** — the most useful project a beginner can make. Employers and clients look at portfolios before deciding whether to hire someone.\n\n## Portfolio Structure\n\nA minimal portfolio has four sections:\n\n```\nheader  ← your name + nav links\nhero    ← your headline + one-sentence description\nprojects ← 3-4 cards, each with a title, description, and link\ncontact ← email link or a form\nfooter  ← copyright + social links\n```\n\n## What Makes a Good Portfolio?\n\n- **One clear h1** — your name or professional title\n- **A specific description** — not \"I am a developer\" but \"I build Python and JavaScript web apps\"\n- **Real project links** — even small projects count\n- **Clean, readable design** — white space is your friend\n- **Mobile responsive** — recruiters check on phones\n\n## Deploying Your Portfolio\n\nGitHub Pages is the fastest free hosting for HTML/CSS sites:\n\n1. Create a repository named `yourusername.github.io`\n2. Push your `index.html` and `style.css` files\n3. Your site is live at `https://yourusername.github.io`\n\nNetlify and Vercel are also free and require no Git knowledge — drag and drop your folder.\n\nIn the code example below, you will see a complete, fully styled, responsive portfolio page using every concept from this course. Study the structure carefully — your exercise is to personalise and extend it."
    },
    "codeExample": {
      "title": "Complete Personal Portfolio",
      "language": "html-css",
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Priya Verma | Developer</title>\n  <style>\n    :root{--p:#6366f1;--d:#0f172a;--w:#fff;--r:10px;}\n    *{box-sizing:border-box;margin:0;padding:0;}\n    body{font-family:Arial,sans-serif;background:#f8fafc;color:#475569;}\n    header{background:var(--d);padding:14px 32px;display:flex;\n           justify-content:space-between;align-items:center;}\n    header strong{color:var(--w);}\n    nav a{color:#94a3b8;text-decoration:none;margin-left:16px;font-size:14px;}\n    .hero{background:var(--d);color:var(--w);text-align:center;padding:60px 24px;}\n    .hero h1{font-size:clamp(24px,5vw,42px);margin-bottom:8px;}\n    .hero p{color:#94a3b8;}\n    .btn{background:var(--p);color:var(--w);padding:12px 28px;\n         border:none;border-radius:var(--r);cursor:pointer;\n         margin-top:16px;display:inline-block;text-decoration:none;}\n    section{padding:48px 32px;max-width:920px;margin:0 auto;}\n    h2{text-align:center;color:var(--d);font-size:24px;margin-bottom:24px;}\n    .skills{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;}\n    .tag{background:#ede9fe;color:#7c3aed;padding:4px 14px;\n         border-radius:999px;font-size:13px;font-weight:600;}\n    .grid{display:flex;flex-wrap:wrap;gap:16px;}\n    .card{flex:0 0 calc(33.333% - 11px);background:white;\n          border-radius:var(--r);padding:20px;border:1px solid #e2e8f0;}\n    .card h3{color:var(--d);margin-bottom:6px;}\n    .card p{font-size:13px;margin-bottom:10px;}\n    footer{background:var(--d);color:#64748b;text-align:center;\n           padding:24px;font-size:13px;}\n    @media(max-width:720px){.card{flex:0 0 calc(50% - 8px);}}\n    @media(max-width:480px){.card{flex:0 0 100%;}}\n  </style>\n</head>\n<body>\n  <header>\n    <strong>Priya Verma</strong>\n    <nav>\n      <a href=\"#skills\">Skills</a>\n      <a href=\"#projects\">Projects</a>\n    </nav>\n  </header>\n  <main>\n    <div class=\"hero\">\n      <h1>Priya Verma</h1>\n      <p>Full-Stack Developer &mdash; Python &amp; JavaScript</p>\n      <a class=\"btn\" href=\"#projects\">View Work</a>\n    </div>\n    <section id=\"skills\"><h2>Skills</h2>\n      <div class=\"skills\">\n        <span class=\"tag\">HTML</span>\n        <span class=\"tag\">CSS</span>\n        <span class=\"tag\">JavaScript</span>\n        <span class=\"tag\">Python</span>\n      </div>\n    </section>\n    <section id=\"projects\"><h2>Projects</h2>\n      <div class=\"grid\">\n        <div class=\"card\"><h3>Task Manager</h3>\n          <p>Full-stack to-do app.</p><a href=\"#\">View &rarr;</a></div>\n        <div class=\"card\"><h3>Weather App</h3>\n          <p>Live weather data.</p><a href=\"#\">View &rarr;</a></div>\n        <div class=\"card\"><h3>Portfolio</h3>\n          <p>Built with HTML &amp; CSS.</p><a href=\"#\">Source &rarr;</a></div>\n      </div>\n    </section>\n  </main>\n  <footer><p>&copy; 2025 Priya Verma</p></footer>\n</body>\n</html>",
      "explanation": "- `position: sticky; top: 0; z-index: 10` on `header` — the nav sticks to the top while the user scrolls through the page\n- `clamp(24px, 5vw, 44px)` on `h1` — the name scales fluidly between phone and desktop sizes\n- Anchor links like `href=\"#projects\"` — jump to the element with `id=\"projects\"` on the same page\n- `flex: 0 0 calc(33.333% - 14px)` for project cards — three columns with 20px gap compensation\n- Mobile breakpoints convert the three-column grid to two columns at 768px and one column at 480px"
    },
    "exercise": {
      "title": "Personalise the Portfolio",
      "instructions": "Take the portfolio starter and personalise it: change the name in header strong and h1 to your name, update the role paragraph to your actual role or aspiration, replace the four skill span tags with your real skills, update the three project cards with your own project names and descriptions, and update the contact email href to your address. Keep all HTML structure and CSS unchanged.\n\nExpected: your name visible, four skill tags, three project cards.",
      "starterCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Portfolio</title>\n  <style>\n    :root { --primary: #6366f1; --dark: #0f172a; --white: #fff; --radius: 10px; }\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; background: #f8fafc; color: #475569; }\n    header { background: var(--dark); padding: 14px 32px; display: flex; justify-content: space-between; align-items: center; }\n    header strong { color: var(--white); }\n    nav a { color: #94a3b8; text-decoration: none; margin-left: 16px; font-size: 14px; }\n    .hero { background: var(--dark); color: var(--white); text-align: center; padding: 60px 24px; }\n    .hero h1 { font-size: 36px; margin-bottom: 8px; }\n    .hero p  { color: #94a3b8; }\n    .skills { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; padding: 40px 24px; }\n    .skill-tag { background: #ede9fe; color: #7c3aed; padding: 6px 16px; border-radius: 999px; font-size: 14px; font-weight: 600; }\n    footer { background: var(--dark); color: #64748b; text-align: center; padding: 20px; font-size: 14px; }\n  </style>\n</head>\n<body>\n  <header>\n    <strong>Your Name Here</strong>\n    <nav><a href=\"#\">Skills</a><a href=\"#\">Projects</a></nav>\n  </header>\n  <main>\n    <div class=\"hero\">\n      <h1>Your Name Here</h1>\n      <p>Your role or aspiration here</p>\n    </div>\n    <div class=\"skills\">\n      <span class=\"skill-tag\">Skill 1</span>\n      <span class=\"skill-tag\">Skill 2</span>\n      <span class=\"skill-tag\">Skill 3</span>\n      <span class=\"skill-tag\">Skill 4</span>\n    </div>\n  </main>\n  <footer><p>&copy; 2025 Your Name</p></footer>\n</body>\n</html>",
      "solutionCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Rahul Sharma | Developer</title>\n  <style>\n    :root { --primary: #6366f1; --dark: #0f172a; --white: #fff; --radius: 10px; }\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; background: #f8fafc; color: #475569; }\n    header { background: var(--dark); padding: 14px 32px; display: flex; justify-content: space-between; align-items: center; }\n    header strong { color: var(--white); }\n    nav a { color: #94a3b8; text-decoration: none; margin-left: 16px; font-size: 14px; }\n    .hero { background: var(--dark); color: var(--white); text-align: center; padding: 60px 24px; }\n    .hero h1 { font-size: 36px; margin-bottom: 8px; }\n    .hero p  { color: #94a3b8; }\n    .skills { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; padding: 40px 24px; }\n    .skill-tag { background: #ede9fe; color: #7c3aed; padding: 6px 16px; border-radius: 999px; font-size: 14px; font-weight: 600; }\n    footer { background: var(--dark); color: #64748b; text-align: center; padding: 20px; font-size: 14px; }\n  </style>\n</head>\n<body>\n  <header>\n    <strong>Rahul Sharma</strong>\n    <nav><a href=\"#\">Skills</a><a href=\"#\">Projects</a></nav>\n  </header>\n  <main>\n    <div class=\"hero\">\n      <h1>Rahul Sharma</h1>\n      <p>Python and JavaScript Developer from Delhi</p>\n    </div>\n    <div class=\"skills\">\n      <span class=\"skill-tag\">HTML</span>\n      <span class=\"skill-tag\">CSS</span>\n      <span class=\"skill-tag\">Python</span>\n      <span class=\"skill-tag\">JavaScript</span>\n    </div>\n  </main>\n  <footer><p>&copy; 2025 Rahul Sharma</p></footer>\n</body>\n</html>",
      "hints": [
        "💡 Replace 'Your Name Here' in the header strong tag and h1 tag with your actual name.",
        "💡 Replace each 'Skill N' span text with a real skill you have or want to learn.",
        "💡 Update the footer copyright line to include your name instead of 'Your Name'."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "<span class=\"skill-tag\">",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "html-m6-l3-q1",
          "question": "What is the fastest free way to host a personal HTML/CSS website publicly?",
          "options": [
            "Buying a server and installing Apache",
            "Emailing the HTML file to visitors",
            "Using GitHub Pages, Netlify, or Vercel — all support static HTML for free",
            "Uploading to Google Drive and sharing the link"
          ],
          "correct": 2,
          "explanation": "GitHub Pages, Netlify, and Vercel all offer free hosting for static websites (pure HTML, CSS, and JavaScript). GitHub Pages is set up by creating a repository named yourusername.github.io. Netlify and Vercel support drag-and-drop deployment — no terminal required. All three provide HTTPS automatically."
        },
        {
          "id": "html-m6-l3-q2",
          "question": "Which of the following is the most important thing to include on a developer portfolio?",
          "options": [
            "A photo of your workspace",
            "Animated transitions on every element",
            "Actual links to real projects you have built",
            "A long list of every technology you have heard of"
          ],
          "correct": 2,
          "explanation": "Employers and clients hire based on what you can build, not what you claim. Links to real projects — even small ones — are far more convincing than a list of skills. A project link proves ability; a skill tag only makes a claim. Start with one or two genuine projects rather than an impressive-looking but empty portfolio."
        },
        {
          "id": "html-m6-l3-q3",
          "question": "What do the six concepts HTML, CSS selectors, box model, Flexbox, media queries, and semantic HTML have in common?",
          "options": [
            "They are all optional features only used by advanced developers",
            "They are the complete foundation needed to build any static webpage",
            "They only apply to mobile development",
            "They must be learned in a different order than listed"
          ],
          "correct": 1,
          "explanation": "These six areas form the complete foundation of static web development. HTML provides structure, CSS selectors target elements, the box model controls spacing and sizing, Flexbox handles layout, media queries add responsiveness, and semantic HTML adds meaning and accessibility. With these six skills you can build any website that does not require a server or database."
        }
      ]
    }
  }
]
''')

# ── Combine all modules into one list ─────────────────────
html-css_lessons = (
    html-css_m1_raw + \
         html-css_m2_raw + \
         html-css_m3_raw + \
         html-css_m4_raw + \
         html-css_m5_raw + \
         html-css_m6_raw
)

# ── Sanity check ──────────────────────────────────────────
print(f"Loaded {len(html-css_lessons)} HTML/CSS lessons")
for lesson in html-css_lessons:
    print(f'  {lesson["id"]:15} {lesson["title"]:50} {lesson["xpReward"]} XP')