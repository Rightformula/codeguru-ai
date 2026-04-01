# CodeGuru AI — Lesson Schema Reference Guide

## Overview

Every lesson in CodeGuru AI follows the same structure. This document explains every field, its purpose, its constraints, and how it appears in the user interface.

A lesson has four top-level sections that map exactly to the four tabs in the lesson viewer:

```
Lesson
├── id, moduleId, title, order, xpReward, duration   ← metadata
├── explanation   → Tab 1 "Explain"
├── codeExample   → Tab 2 "Code"
├── exercise      → Tab 3 "Exercise"
└── quiz          → Tab 4 "Quiz"
```

---

## Lesson Metadata

### `id` (string, required)

**What it is:** The primary key that uniquely identifies this lesson across the entire platform.

**Format:** `{language_prefix}-m{module_number}-l{lesson_number}`

| Language | Prefix |
|---|---|
| Python | `py` |
| JavaScript | `js` |
| Java | `java` |
| HTML (Module 1) | `html` |
| CSS (Module 2+) | `css` |

**Examples:**
```
py-m1-l1       Python, Module 1, Lesson 1
js-m3-l2       JavaScript, Module 3, Lesson 2
java-m4-l3     Java, Module 4, Lesson 3
html-m1-l2     HTML/CSS, Module 1, Lesson 2
css-m3-l1      HTML/CSS, Module 3, Lesson 1
```

**Used by:** URL routing, Firestore progress tracking, XP server validation, weak topic detection.

---

### `moduleId` (string, required)

**What it is:** The ID of the module that contains this lesson.

**Format:** `{language_prefix}-m{module_number}`

**Rule:** The lesson `id` must always start with the `moduleId`. A lesson with `moduleId: "py-m3"` must have an `id` that starts with `py-m3`.

---

### `title` (string, required)

**What it is:** The human-readable lesson name.

**Shown in:** Module lesson list, lesson viewer top bar, activity log, AI tutor recommendations.

**Length:** 3 to 60 characters.

**Guidelines:**
- Use title case: "Variables and Data Types" not "variables and data types"
- Be specific: "The CSS Box Model" not "CSS Layout"
- 4 to 8 words is the ideal length

---

### `order` (integer, required)

**What it is:** Sequential position of the lesson within its module.

**Range:** 1 to 10.

**Effect:** Lessons with lower `order` must be completed before higher-`order` lessons become unlocked. Lesson 2 is locked until Lesson 1 is complete.

---

### `xpReward` (integer, required)

**What it is:** Experience points awarded on lesson completion.

**Range:** 5 to 50, in multiples of 5.

**Guidelines:**

| XP | When to use |
|---|---|
| 10 | Short introductory lessons (first in module) |
| 15 | Standard lessons |
| 20 | Complex lessons covering multiple concepts |
| 25 | Advanced lessons at the end of later modules |

**Important:** The server validates this value against an independent table. Mismatches between the lesson data and the server table cause the server value to win. Always update both when changing XP.

---

### `duration` (string, required)

**What it is:** Estimated completion time shown to the learner before they start.

**Format:** `"{N} min"` — e.g., `"8 min"`, `"12 min"`, `"20 min"`

**How to estimate:** Reading time (words ÷ 200 wpm) + code reading (lines × 5 sec) + exercise (5–10 min) + quiz (2 min), rounded up.

---

## Section 1: Explanation

### Purpose

The explanation teaches the concept from scratch. The learner reads this article before seeing any code. It must be self-contained — the learner needs only to have completed prior lessons in the same course.

### `explanation.title` (string, required)

**Shown as:** The large heading at the top of Tab 1.

**Length:** 5 to 80 characters.

**Write it as a question or a clear statement about what will be learned:**
- Good: "What is a Variable and Why Do We Need One?"
- Good: "Understanding Python's List Methods"
- Bad: "Variables" (too vague)
- Bad: "Everything You Need to Know About Lists in Python" (too long)

---

### `explanation.content` (string, required)

**Shown as:** The full article body in Tab 1.

**Minimum length:** 300 characters. **Target:** 500 to 800 characters of content text.

**Supported formatting:**

| Markdown | Renders as |
|---|---|
| `# Heading` | Large white heading |
| `## Heading` | Medium blue heading |
| `### Heading` | Small green heading |
| `**text**` | Bold white text |
| `` `code` `` | Yellow monospace on dark background |
| `- item` | Bullet point |
| `\| col \| col \|` | Table (must have header + separator row) |
| ` ```python ` | Syntax-highlighted code block |

**Required structure (in this order):**
1. A real-world analogy as the very first paragraph — before any technical terms
2. The technical definition that uses the analogy
3. Syntax with a fenced code block showing the basic form
4. A reference table for related variants or rules
5. Common mistakes or important rules to remember
6. A bridge sentence: "In the code example below, you will see..."

**Rules:**
- Every technical term must be defined when it first appears
- Every piece of code — even a single variable name — must use backtick formatting
- Tables must always have a header row and a separator row (`|---|---|`)
- The explanation must not mention or depend on concepts from future lessons
- Use Indian context for examples: names like Rahul, Priya, Amit; cities like Delhi, Mumbai; currency in rupees

---

## Section 2: Code Example

### Purpose

A complete runnable program that demonstrates the concept in action. The learner reads it, runs it, sees the output, and then attempts the exercise.

### `codeExample.title` (string, required)

**Shown as:** The label in the code panel header.

**Write it as the name of what the program does, not what it teaches:**
- Good: "Student Grade Calculator"
- Bad: "Demonstrating For Loops"

---

### `codeExample.language` (string, required)

**Allowed values:** `"python"`, `"javascript"`, `"java"`, `"html-css"`

**Effect:**
- `python`, `javascript`, `java` → sent to Judge0 code execution engine
- `html-css` → rendered live in an iframe in the browser

**Java requirement:** The class must be named `Main` exactly:
```java
public class Main {
    public static void main(String[] args) {
        // code here
    }
}
```

**HTML/CSS requirement:** Must be a complete document:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <!-- content -->
</body>
</html>
```

---

### `codeExample.code` (string, required)

**Constraints:**
- Maximum 40 lines (split into two lessons if longer)
- Must run without errors
- Must produce deterministic, observable output
- Cannot use `input()`, `prompt()`, `Scanner(System.in)`, or any form of user input
- Cannot make network requests
- Cannot access the file system
- Standard library only — no third-party packages
- Every non-obvious line must have a comment

---

### `codeExample.explanation` (string, required)

**Shown as:** Bullet points below the output panel in Tab 2.

**Format:** Markdown bullet points. Each bullet references a code snippet in backticks and explains what it does and why.

**Length:** 3 to 8 bullets. 50 to 600 characters total.

**Template for each bullet:**
```
- `code snippet here` — what it does — why it matters
```

---

## Section 3: Exercise

### Purpose

The hands-on challenge where the learner writes their own code. The goal is practice, not evaluation. Every learner who understood the code example should be able to complete the exercise in under 15 minutes.

### `exercise.title` (string, required)

**Shown as:** The heading of the exercise panel.

**Write it as an achievable task:**
- Good: "Build a Temperature Converter"
- Bad: "Practice Using Functions"

---

### `exercise.instructions` (string, required)

**Shown as:** A highlighted box above the code editor.

**Must include:**
1. What the learner needs to build (first sentence)
2. Every specific requirement (can be numbered)
3. Expected output for at least one example

**Must not include:**
- Hints about how to implement it
- References to functions not yet taught

**Plain text only — no Markdown formatting.**

---

### `exercise.starterCode` (string, required)

**Shown as:** The initial code in the learner's editor.

**Requirements:**
- Must be syntactically valid (no syntax errors, even if incomplete)
- Must include the function signature or class skeleton if required
- Must include comment placeholders showing where to add code
- Must include test calls at the bottom so the learner can verify
- Should provide all boilerplate so the learner only writes the core logic

**Example structure (Python):**
```python
# Function signature already provided — fill in the body
def calculate_bmi(weight_kg, height_m):
    # Your code here — use the formula: BMI = weight / (height * height)
    pass

# Test calls are already written — just make them pass
print(calculate_bmi(70, 1.75))   # should print 22.9
print(calculate_bmi(90, 1.80))   # should print 27.8
```

---

### `exercise.solutionCode` (string, required)

**Shown as:** Replaces the learner's code when they click "Reveal Solution".

**Requirements:**
- Complete runnable program — not just the missing parts
- Produces exactly the output described in instructions
- Uses the simplest correct approach (not the most clever)
- Uses only concepts covered up to and including this lesson

---

### `exercise.hints` (array, required)

**Shown as:** One hint at a time in a purple box below the editor.

**Quantity:** 2 to 5 hints.

**Rules:**
- Every hint must begin with the 💡 emoji
- Every hint is a single sentence (10 to 30 words)
- Ordered from gentle to explicit
- First hint: nudge toward the right concept without naming it
- Last hint: name the specific approach but do not give code

**Example progression for a sorting exercise:**
```
Hint 1: 💡 Think about what operation arranges items in a specific order.
Hint 2: 💡 Python lists have a built-in method that sorts items in place.
Hint 3: 💡 Use list.sort(reverse=True) to sort from largest to smallest.
```

---

### `exercise.testCases` (array, optional)

**Used by:** The automated test runner when the learner clicks Run.

**When to include:** For exercises with precise, verifiable outputs (calculators, formatters, string processors).

**When to omit:** For open-ended exercises where any valid output is acceptable (e.g., "print a message that contains your name").

**`checkType` options:**

| Value | Behavior |
|---|---|
| `"exact"` | Entire output must match exactly (whitespace sensitive) |
| `"contains"` | Output must include expectedOutput as a substring |
| `"contains_print"` | Any non-empty stdout is acceptable |
| `"regex"` | expectedOutput is a regular expression pattern |

**Recommendation:** Use `"contains"` instead of `"exact"` to avoid false failures from minor whitespace differences.

---

## Section 4: Quiz

### Purpose

A 2–3 question multiple-choice assessment. The learner must complete it to mark the lesson done and earn XP. The score is saved and used by the weak topic detector to identify areas needing review.

### `quiz.questions` (array, required)

**Quantity:** 2 to 3 questions.

**Each question must test a different concept.** Do not write two questions about the same thing.

**Recommended question types for a 3-question quiz:**
1. Conceptual understanding — "What does X mean?"
2. Behavioral prediction — "What does this code output?"
3. Error recognition or comparison — "What is wrong?" or "What is the difference?"

---

### `quiz.questions[n].id` (string, required)

**Format:** `{lessonId}-q{questionNumber}`

**Examples:** `py-m1-l2-q1`, `py-m1-l2-q2`, `js-m3-l2-q1`

**Rules:** Must start with the lesson ID. Must be unique across the entire content library.

---

### `quiz.questions[n].question` (string, required)

**Rules:**
- Complete sentence ending with a question mark
- Tests understanding, not memorization or trivia
- Maximum 200 characters
- No code in the question text — code goes in the options if needed

**Good questions:**
- "What is the correct way to compare two strings in Java?"
- "Which method returns a new array without modifying the original?"
- "What does padding control in the CSS box model?"

**Bad questions:**
- "What does the lesson say about variables?" (rote recall)
- "Which of the following is NOT a valid variable name?" (confusing negative)

---

### `quiz.questions[n].options` (array of 4 strings, required)

**Exactly 4 options** — no more, no fewer.

**Rules for all options:**
- Roughly equal length (prevents "longest = correct" pattern)
- Grammatically consistent style
- No "All of the above" or "None of the above"

**Rules for distractors (wrong options):**
- All must be plausible — a partially-informed learner should pause before dismissing them
- At least one distractor should be the most common misconception about this topic
- At least one distractor should be a related concept from a nearby lesson

**Rules for the correct answer:**
- Vary its position across questions — do not always put it in position 0 or 1

---

### `quiz.questions[n].correct` (integer, required)

**Value:** 0, 1, 2, or 3 — the zero-based index of the correct option.

| Value | Option label |
|---|---|
| 0 | A (first option) |
| 1 | B (second option) |
| 2 | C (third option) |
| 3 | D (fourth option) |

---

### `quiz.questions[n].explanation` (string, required)

**Shown as:** A highlighted box below the answer options, revealed after the learner submits.

**Must contain:**
1. Why the correct answer is right
2. Why the most tempting wrong answer is wrong

**Length:** 40 to 400 characters (2 to 4 sentences).

**Rules:**
- Plain English — define any technical term used
- Must add value beyond restating the question
- Should reinforce the lesson's key takeaway

---

## Complete Lesson Example

The following is a complete, valid lesson that demonstrates every field:

```typescript
{
  id:       "py-m1-l2",
  moduleId: "py-m1",
  title:    "Variables and Data Types",
  order:    2,
  xpReward: 10,
  duration: "10 min",

  explanation: {
    title: "What is a Variable and Why Do We Need One?",
    content: `# What is a Variable?

Imagine you are working at a grocery store and you need to remember the
price of apples so you can use it in three places on the same receipt.
Instead of writing ₹50 three times, you write it once on a sticky note
labeled **apple_price** and refer to that note whenever you need the value.
That sticky note is a **variable**.

## Creating Variables

In Python, creating a variable takes exactly one line:

\`\`\`python
apple_price = 50
\`\`\`

The \`=\` sign here does not mean "equals" — it means **assign**.
Read it as: "put the value 50 into a container named apple_price".

## The Four Basic Data Types

| Type | Example | Stores |
|---|---|---|
| \`str\` | \`"Rahul"\` | Text (always in quotes) |
| \`int\` | \`21\` | Whole numbers |
| \`float\` | \`3.14\` | Decimal numbers |
| \`bool\` | \`True\` | Only True or False |

## Naming Rules

- Start with a letter or underscore — not a digit
- Use only letters, digits, and underscores
- Case-sensitive: \`age\` and \`Age\` are different variables
- Cannot use Python keywords: \`if\`, \`for\`, \`while\`, \`print\`

In the code example below, you will see all four data types
created and printed in a formatted message.`
  },

  codeExample: {
    title:    "Student Profile",
    language: "python",
    code: `# Variables store different types of data
name        = "Priya Sharma"   # str — text in quotes
age         = 20               # int — whole number, no quotes
gpa         = 3.85             # float — decimal number
is_enrolled = True             # bool — True or False

# Print each variable
print("Name:",     name)
print("Age:",      age)
print("GPA:",      gpa)
print("Enrolled:", is_enrolled)

# Check the type of any variable
print(type(name))   # <class 'str'>
print(type(age))    # <class 'int'>`,
    explanation: `- \`= \` is the assignment operator — it stores a value, it does not test equality
- String values must be in quotes; numbers and booleans must not be
- \`True\` and \`False\` are Python's boolean literals and are always capitalized
- \`type(variable)\` reveals the data type — useful when debugging unexpected behavior`
  },

  exercise: {
    title:        "Build a Contact Card",
    instructions: `Create four variables for a contact: full_name (a string), phone (a string like '9876543210'), age (an integer), and is_active (a boolean set to True). Then print each variable on its own labeled line. Expected output:\nName: [your name]\nPhone: [your number]\nAge: [your age]\nActive: True`,
    starterCode: `# Create the four variables
full_name = ""
phone     = ""
age       = 0
is_active = False

# Print each with a label
print("Name:",   full_name)
print("Phone:",  phone)
# Add the remaining two print statements here
`,
    solutionCode: `full_name = "Amit Verma"
phone     = "9876543210"
age       = 28
is_active = True

print("Name:",   full_name)
print("Phone:",  phone)
print("Age:",    age)
print("Active:", is_active)
`,
    hints: [
      "💡 String values go inside quotes — write phone as '9876543210', not as a number.",
      "💡 Boolean values are True or False — capitalized, with no quotes around them.",
      "💡 Copy the pattern of the first two print statements to complete the last two."
    ],
    testCases: [
      { input: "", expectedOutput: null, checkType: "contains_print" }
    ]
  },

  quiz: {
    questions: [
      {
        id:       "py-m1-l2-q1",
        question: "What does the = operator do in the statement name = 'Rahul'?",
        options: [
          "Tests whether name is equal to 'Rahul'",
          "Stores the string 'Rahul' in a variable called name",
          "Prints the word Rahul to the screen",
          "Creates a constant that cannot be changed later"
        ],
        correct:     1,
        explanation: "In Python, = is the assignment operator — it stores a value in a variable, it does not test equality. To test equality, Python uses == (two equals signs). Writing name = 'Rahul' creates a container called name and places the string 'Rahul' inside it."
      },
      {
        id:       "py-m1-l2-q2",
        question: "Which of the following is a valid Python variable name?",
        options: [
          "2nd_score",
          "total-price",
          "user_age",
          "for"
        ],
        correct:     2,
        explanation: "user_age is valid — it starts with a letter and uses only letters and underscores. '2nd_score' fails because variable names cannot start with a digit. 'total-price' fails because hyphens are not allowed (only underscores). 'for' is a reserved Python keyword and cannot be used as a variable name."
      }
    ]
  }
}
```

---

## Validation

Run the content validator before committing new lessons:

```bash
cd frontend
npm run validate-content
```

This checks every lesson in all course files against the schema rules listed in `src/types/lesson.schema.ts`. Fix all errors before opening a pull request. Warnings are non-blocking but should be addressed.

---

## ID Reference

### Language prefixes

| Language | Module ID format | Lesson ID format |
|---|---|---|
| Python | `py-m{N}` | `py-m{N}-l{N}` |
| JavaScript | `js-m{N}` | `js-m{N}-l{N}` |
| Java | `java-m{N}` | `java-m{N}-l{N}` |
| HTML/CSS Mod 1 | `html-m1` | `html-m1-l{N}` |
| HTML/CSS Mod 2+ | `css-m{N}` | `css-m{N}-l{N}` |

### Quiz question ID format

Quiz question IDs append `-q{N}` to the lesson ID:

```
py-m1-l2   → questions: py-m1-l2-q1, py-m1-l2-q2, py-m1-l2-q3
js-m3-l2   → questions: js-m3-l2-q1, js-m3-l2-q2
java-m4-l3 → questions: java-m4-l3-q1, java-m4-l3-q2, java-m4-l3-q3
```
