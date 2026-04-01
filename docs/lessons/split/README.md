# CodeGuru AI — Lesson JSON Split Files
# ========================================
# All 72 lessons across 4 languages, pre-split into sizes
# that are comfortable to copy-paste into Google Colab.

## File Structure

split/
├── codeguru-ai-all-lessons.ipynb      ← RECOMMENDED: Full Colab notebook, run cell by cell
│
├── by-language/                       ← 4 files, one per language (~145–177 KB each)
│   ├── python-all-lessons.json        18 lessons  py-m1 → py-m6
│   ├── html-css-all-lessons.json      18 lessons  html-m1 → html-m6
│   ├── java-all-lessons.json          18 lessons  java-m1 → java-m6
│   └── javascript-all-lessons.json    18 lessons  js-m1 → js-m6
│
├── by-module/                         ← 24 files, one per module (~21–36 KB each)
│   ├── python/
│   │   ├── py-m1-lessons.json         3 lessons  Basics
│   │   ├── py-m2-lessons.json         3 lessons  Variables and Data Types
│   │   ├── py-m3-lessons.json         3 lessons  Conditions
│   │   ├── py-m4-lessons.json         3 lessons  Loops
│   │   ├── py-m5-lessons.json         3 lessons  Functions
│   │   └── py-m6-lessons.json         3 lessons  Mini Project
│   ├── html-css/
│   │   ├── html-m1-lessons.json       3 lessons  HTML Basics
│   │   ├── html-m2-lessons.json       3 lessons  HTML Structure and Tags
│   │   ├── html-m3-lessons.json       3 lessons  CSS Basics
│   │   ├── html-m4-lessons.json       3 lessons  Layout and Flexbox
│   │   ├── html-m5-lessons.json       3 lessons  Responsive Design
│   │   └── html-m6-lessons.json       3 lessons  Mini Project
│   ├── java/
│   │   ├── java-m1-lessons.json       3 lessons  Java Basics
│   │   ├── java-m2-lessons.json       3 lessons  Variables and Data Types
│   │   ├── java-m3-lessons.json       3 lessons  Conditions
│   │   ├── java-m4-lessons.json       3 lessons  Loops
│   │   ├── java-m5-lessons.json       3 lessons  Methods
│   │   └── java-m6-lessons.json       3 lessons  Mini Project
│   └── javascript/
│       ├── js-m1-lessons.json         3 lessons  JavaScript Basics
│       ├── js-m2-lessons.json         3 lessons  Variables and Data Types
│       ├── js-m3-lessons.json         3 lessons  Conditions
│       ├── js-m4-lessons.json         3 lessons  Loops
│       ├── js-m5-lessons.json         3 lessons  Functions
│       └── js-m6-lessons.json         3 lessons  Mini Project
│
└── colab-cells/                       ← 4 single-cell .py files for Colab
    ├── colab_python_lessons.py        Paste into ONE Colab cell → py_lessons (18 items)
    ├── colab_html-css_lessons.py      Paste into ONE Colab cell → html_lessons (18 items)
    ├── colab_java_lessons.py          Paste into ONE Colab cell → java_lessons (18 items)
    └── colab_javascript_lessons.py    Paste into ONE Colab cell → js_lessons (18 items)

========================================
## Which file to use in Google Colab?

### OPTION A — Full notebook (recommended)
  1. Download `codeguru-ai-all-lessons.ipynb`
  2. File → Upload → open in Colab
  3. Runtime → Run all
  → `all_lessons` list contains all 72 lessons

### OPTION B — One module at a time (smallest chunks, ~21–36 KB)
  1. Open a `by-module/` file (e.g. py-m1-lessons.json)
  2. Copy the entire file content
  3. In Colab:
       import json
       py_m1 = json.loads('''<paste here>''')
       print(len(py_m1))  # 3

### OPTION C — One language at a time (~145–177 KB)
  1. Open a `by-language/` file (e.g. python-all-lessons.json)
  2. Copy the entire file content
  3. In Colab:
       import json
       python_lessons = json.loads('''<paste here>''')
       print(len(python_lessons))  # 18

### OPTION D — Pre-built Colab cells (colab-cells/)
  1. Open `colab_python_lessons.py` (or another language)
  2. Copy the ENTIRE file
  3. Paste into ONE Colab code cell and run
  → Defines `py_lessons`, `html_lessons`, `java_lessons`, or `js_lessons`

========================================
## Dataset Summary

Total lessons : 72
Total XP      : 840
Languages     : Python, HTML/CSS, Java, JavaScript
Modules each  : 6 (Basics → Variables → Conditions → Loops → Functions → Mini Project)
Lessons each  : 3 per module

Each lesson object contains:
  id           string   e.g. "py-m1-l1"
  moduleId     string   e.g. "py-m1"
  title        string
  order        int      1–3
  xpReward     int      10 or 15 or 25
  duration     string   e.g. "9 min"
  explanation  object   { title, content (markdown) }
  codeExample  object   { title, language, code, explanation }
  exercise     object   { title, instructions, starterCode, solutionCode, hints[], testCases[] }
  quiz         object   { questions[]: { id, question, options[4], correct, explanation } }
