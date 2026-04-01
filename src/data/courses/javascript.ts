// src/data/courses/javascript.ts
import type { Course } from '@/types/course';

export const javascriptCourse: Course = {
  id:             'javascript',
  title:          'JavaScript Programming',
  description:    'The language of the web. Make websites interactive, build apps, and power the modern internet — from beginner to pro.',
  icon:           '⚡',
  color:          '#F7DF1E',
  colorLight:     '#FEFCE8',
  totalModules:   18,
  totalLessons:   54,
  estimatedHours: 45,
  levels:         ['beginner', 'intermediate', 'advanced'],

  modules: [

    // ════════════════════════════════════════════════
    //  MODULE 1 — JavaScript Basics (Beginner)
    // ════════════════════════════════════════════════
    {
      id:          'js-m1',
      courseId:    'javascript',
      title:       'JavaScript Basics',
      description: 'Your first steps in JavaScript. Variables, types, and your first interactive program.',
      level:       'beginner',
      order:       1,
      icon:        '🌟',
      xpReward:    100,
      lessons: [

        // ─── Lesson 1 ────────────────────────────────
        {
          id:       'js-m1-l1',
          moduleId: 'js-m1',
          title:    'What is JavaScript?',
          order:    1,
          xpReward: 10,
          duration: '8 min',

          explanation: {
            title:   'Welcome to JavaScript!',
            content: `# What is JavaScript?

JavaScript is the **programming language of the web**. Every interactive thing you see on a website — buttons that respond, forms that validate, animations that run — JavaScript is making it happen.

Think of a website like a house:
- **HTML** is the structure — walls, doors, rooms
- **CSS** is the decoration — paint, furniture, style
- **JavaScript** is the electricity — makes everything work!

## Where does JavaScript run?

- 🌐 **In the browser** — Chrome, Firefox, Safari all have a built-in JavaScript engine
- 🖥️ **On the server** — with Node.js, JavaScript runs backend code too
- 📱 **In mobile apps** — React Native uses JavaScript for iOS and Android

## Why learn JavaScript?

- 🟡 **Most popular language** in the world (for 12 years running!)
- 🟡 **Instant results** — open browser, write code, see it work
- 🟡 **Huge ecosystem** — React, Vue, Node, thousands of libraries
- 🟡 **High demand** — JavaScript developers are among the most hired

## Your first JavaScript program

JavaScript runs directly in the browser console. Press **F12** to open DevTools!`,
          },

          codeExample: {
            title:       'Hello from JavaScript!',
            language:    'javascript',
            code: `// This is a JavaScript comment — ignored by the computer

// console.log() prints output — like print() in Python
console.log("Hello, World!");
console.log("I am learning JavaScript!");

// You can print anything
console.log(42);
console.log(true);
console.log("CodeGuru AI is awesome! ⚡");

// Basic math works too
console.log(10 + 5);
console.log(100 - 37);`,
            explanation: `- \`console.log()\` outputs to the browser console (press F12 to see it)
- \`//\` starts a comment — JavaScript ignores everything after it
- Strings (text) go in quotes: \`"like this"\` or \`'like this'\`
- Numbers don't need quotes: \`42\`, \`3.14\`
- JavaScript runs top to bottom, line by line`,
          },

          exercise: {
            title:        'Your First Output',
            instructions: 'Use console.log() to print: your name, your age as a number, and whether you are a student (true or false).',
            starterCode: `// Print your name (as a string)
console.log("Your name here");

// Print your age (as a number — no quotes!)
console.log(0);

// Print whether you are a student (true or false)
console.log(false);`,
            solutionCode: `console.log("Rahul Sharma");
console.log(21);
console.log(true);`,
            hints: [
              '💡 Strings (text) need quotes — "Your Name" or \'Your Name\'',
              '💡 Numbers do NOT need quotes — just write the number: 21',
              '💡 Booleans are exactly true or false — no quotes, capital first letter',
            ],
          },

          quiz: {
            questions: [
              {
                id:          'js-m1-l1-q1',
                question:    'Which function outputs text in JavaScript?',
                options:     ['print()', 'console.log()', 'output()', 'display()'],
                correct:     1,
                explanation: 'console.log() is JavaScript\'s main output function. It prints to the browser\'s developer console.',
              },
              {
                id:          'js-m1-l1-q2',
                question:    'How do you write a comment in JavaScript?',
                options:     ['# This is a comment', '// This is a comment', '/* only this */', 'Both B and C are correct'],
                correct:     3,
                explanation: 'JavaScript supports both // for single-line comments and /* */ for multi-line comments. Python uses # but JavaScript does not.',
              },
              {
                id:          'js-m1-l1-q3',
                question:    'What will console.log(5 + 3) print?',
                options:     ['"5 + 3"', '53', '8', 'Error'],
                correct:     2,
                explanation: 'JavaScript evaluates the expression 5 + 3 = 8 first, then prints the result. To print "5 + 3" literally, you\'d need quotes.',
              },
            ],
          },
        },

        // ─── Lesson 2 ────────────────────────────────
        {
          id:       'js-m1-l2',
          moduleId: 'js-m1',
          title:    'Variables: let, const & var',
          order:    2,
          xpReward: 10,
          duration: '10 min',

          explanation: {
            title:   'Storing Data with Variables',
            content: `# Variables in JavaScript

A variable is a **named container** for data. JavaScript has three ways to declare them:

## let — for values that change

\`\`\`javascript
let score = 0;
score = 100;  // score can be changed
\`\`\`

## const — for values that stay fixed

\`\`\`javascript
const PI = 3.14159;
const appName = "CodeGuru AI";
// PI = 5;  // ❌ Error! const can't be changed
\`\`\`

## var — the old way (avoid it)

\`\`\`javascript
var oldStyle = "avoid this";  // has confusing scoping rules
\`\`\`

## The golden rule: **prefer const, use let when needed, avoid var**

## JavaScript Data Types

| Type | Example | Description |
|------|---------|-------------|
| String | \`"Hello"\` | Text |
| Number | \`42\`, \`3.14\` | All numbers |
| Boolean | \`true\`, \`false\` | Yes/No |
| null | \`null\` | Intentionally empty |
| undefined | \`undefined\` | Not yet assigned |

## Template Literals — the modern way to combine strings

Instead of \`"Hello " + name\`, use backticks:
\`\`\`javascript
const name = "Rahul";
console.log(\`Hello, \${name}!\`);  // Hello, Rahul!
\`\`\``,
          },

          codeExample: {
            title:    'Variables in Action',
            language: 'javascript',
            code: `// const — value never changes
const appName = "CodeGuru AI";
const version = 1.0;

// let — value can change
let currentUser = "Guest";
let score = 0;

console.log(\`App: \${appName} v\${version}\`);
console.log(\`User: \${currentUser}, Score: \${score}\`);

// Update let variables
currentUser = "Rahul";
score = score + 50;

console.log(\`Updated — User: \${currentUser}, Score: \${score}\`);

// typeof — check what type a variable is
console.log(typeof appName);   // "string"
console.log(typeof score);     // "number"
console.log(typeof true);      // "boolean"`,
            explanation: `- \`const\` is for values you set once and never change
- \`let\` is for values that may be updated
- Template literals use backtick (\` \`) not quote — variables go inside \`\${}\`
- \`typeof\` operator reveals the data type of any value`,
          },

          exercise: {
            title:        'Profile Builder',
            instructions: 'Create a profile using const and let. Use a template literal to print a formatted bio string.',
            starterCode: `// Create these variables:
// const: name, city
// let: age, isStudent

const name = "Your Name";
const city = "Your City";
let age = 0;
let isStudent = false;

// Print a bio using a template literal:
// "My name is [name], I'm [age] years old, from [city]."
console.log(\`My name is \${name}...\`);`,
            solutionCode: `const name = "Priya Sharma";
const city = "Bangalore";
let age = 20;
let isStudent = true;

console.log(\`My name is \${name}, I'm \${age} years old, from \${city}.\`);
console.log(\`Student: \${isStudent}\`);`,
            hints: [
              '💡 const is for name and city — they won\'t change',
              '💡 let is for age and isStudent — these could change',
              '💡 Template literals use backtick ` not quote " — put variables in ${}',
            ],
          },

          quiz: {
            questions: [
              {
                id:          'js-m1-l2-q1',
                question:    'Which keyword should you use for a variable that never changes?',
                options:     ['var', 'let', 'const', 'fixed'],
                correct:     2,
                explanation: 'const (constant) declares a variable whose value cannot be reassigned. Use it by default and switch to let only when you need to reassign.',
              },
              {
                id:          'js-m1-l2-q2',
                question:    'What is the output of: console.log(`Score: ${2 + 3}`)',
                options:     ['Score: ${2 + 3}', 'Score: 23', 'Score: 5', 'Error'],
                correct:     2,
                explanation: 'Inside template literal ${}, JavaScript evaluates the expression first. 2 + 3 = 5, so it prints "Score: 5".',
              },
              {
                id:          'js-m1-l2-q3',
                question:    'What does typeof "hello" return?',
                options:     ['"text"', '"string"', '"str"', '"word"'],
                correct:     1,
                explanation: 'typeof returns the data type as a string. For text values, it returns the string "string".',
              },
            ],
          },
        },

        // ─── Lesson 3 ────────────────────────────────
        {
          id:       'js-m1-l3',
          moduleId: 'js-m1',
          title:    'Operators & Conditionals',
          order:    3,
          xpReward: 15,
          duration: '12 min',

          explanation: {
            title:   'Making Decisions in JavaScript',
            content: `# Operators & if/else

JavaScript needs to compare values and make decisions — just like you do every day.

## Comparison Operators

| Operator | Meaning | Example |
|----------|---------|---------|
| \`===\` | Strictly equal | \`5 === 5\` → true |
| \`!==\` | Not equal | \`5 !== 6\` → true |
| \`>\` | Greater than | \`10 > 5\` → true |
| \`<\` | Less than | \`3 < 7\` → true |
| \`>=\` | Greater or equal | \`5 >= 5\` → true |

## ⚠️ == vs === (Important!)

\`\`\`javascript
5 == "5"   // true  (loose — converts type)
5 === "5"  // false (strict — checks type too)
\`\`\`

**Always use \`===\` in JavaScript** — it's safer.

## if / else if / else

\`\`\`javascript
if (condition) {
  // runs if true
} else if (otherCondition) {
  // runs if first is false, this is true
} else {
  // runs if all above are false
}
\`\`\`

## Logical Operators

- \`&&\` — AND (both must be true)
- \`||\` — OR (at least one must be true)
- \`!\`  — NOT (flips true/false)`,
          },

          codeExample: {
            title:    'Grade Classifier',
            language: 'javascript',
            code: `const marks = 78;

// Grade logic using if/else if/else
if (marks >= 90) {
  console.log("Grade: A+ 🌟 Outstanding!");
} else if (marks >= 75) {
  console.log("Grade: A 👏 Excellent!");
} else if (marks >= 60) {
  console.log("Grade: B 👍 Good work!");
} else if (marks >= 40) {
  console.log("Grade: C 📚 Keep studying!");
} else {
  console.log("Grade: F ❌ Please retry");
}

// Logical operators
const age = 20;
const hasID = true;

if (age >= 18 && hasID) {
  console.log("Entry allowed ✅");
} else {
  console.log("Entry denied ❌");
}

// Ternary — shorthand if/else
const status = age >= 18 ? "Adult" : "Minor";
console.log(\`Status: \${status}\`);`,
            explanation: `- Use \`===\` not \`==\` for comparisons in JavaScript
- \`&&\` means AND — both conditions must be true
- \`||\` means OR — at least one condition must be true
- Ternary \`condition ? valueIfTrue : valueIfFalse\` is a compact if/else for simple cases`,
          },

          exercise: {
            title:        'Age Group Classifier',
            instructions: 'Write a program that takes an age variable and prints the correct age group: "Child" (0-12), "Teen" (13-17), "Adult" (18-59), or "Senior" (60+).',
            starterCode: `const age = 25;  // Change this to test different values

// Write your if/else if/else chain here
if (age >= 0 && age <= 12) {
  console.log("Child");
} // add more conditions...`,
            solutionCode: `const age = 25;

if (age >= 0 && age <= 12) {
  console.log("Child");
} else if (age <= 17) {
  console.log("Teen");
} else if (age <= 59) {
  console.log("Adult");
} else {
  console.log("Senior");
}`,
            hints: [
              '💡 You need four branches: Child, Teen, Adult, Senior',
              '💡 Use && for ranges — age >= 13 && age <= 17 for Teen',
              '💡 Once inside a range, the lower bound is already checked — age <= 17 is enough for Teen if Child check already passed',
            ],
          },

          quiz: {
            questions: [
              {
                id:          'js-m1-l3-q1',
                question:    'What is the difference between == and === in JavaScript?',
                options:     [
                  'No difference',
                  '=== checks value only, == checks value and type',
                  '=== checks value and type, == only checks value (converts type)',
                  '== is newer than ===',
                ],
                correct:     2,
                explanation: '=== is strict equality — it checks both value AND type. 5 === "5" is false. == is loose — it converts types first, so 5 == "5" is true. Always use ===.',
              },
              {
                id:          'js-m1-l3-q2',
                question:    'What does && mean in JavaScript?',
                options:     ['OR — at least one is true', 'AND — both must be true', 'NOT — flips the value', 'EQUALS — same as ==='],
                correct:     1,
                explanation: '&& is the logical AND operator. Both conditions on either side must be true for the whole expression to be true.',
              },
            ],
          },
        },
      ],
    },

    // ════════════════════════════════════════════════
    //  MODULE 2 — Functions (Beginner)
    // ════════════════════════════════════════════════
    {
      id:          'js-m2',
      courseId:    'javascript',
      title:       'Functions',
      description: 'Write reusable code blocks. Learn declarations, expressions, and the modern arrow syntax.',
      level:       'beginner',
      order:       2,
      icon:        '🔧',
      xpReward:    120,
      locked:      true,
      lessons: [

        // ─── Lesson 1 ────────────────────────────────
        {
          id:       'js-m2-l1',
          moduleId: 'js-m2',
          title:    'Function Declarations',
          order:    1,
          xpReward: 15,
          duration: '12 min',

          explanation: {
            title:   'Reusable Code with Functions',
            content: `# Functions — Reusable Blocks of Code

Imagine writing the same recipe instructions every time you cook. Functions let you write it once, name it, and reuse it anytime.

## Declaring a Function

\`\`\`javascript
function greet(name) {
  return "Hello, " + name + "!";
}
\`\`\`

## Calling a Function

\`\`\`javascript
const message = greet("Rahul");
console.log(message);  // "Hello, Rahul!"

// Call it again with different input
console.log(greet("Priya"));  // "Hello, Priya!"
\`\`\`

## Anatomy of a Function

- **function** keyword — tells JS this is a function
- **name** — how you call it later (greet)
- **parameters** — inputs in brackets (name)
- **body** — code inside curly braces {}
- **return** — the output value sent back

## Functions without a return value

\`\`\`javascript
function sayHello() {
  console.log("Hello!");
  // No return needed — just does an action
}
sayHello();  // prints "Hello!"
\`\`\`

## Multiple parameters

\`\`\`javascript
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));  // 8
\`\`\``,
          },

          codeExample: {
            title:    'Functions in Action',
            language: 'javascript',
            code: `// Function declaration
function calculateArea(width, height) {
  const area = width * height;
  return area;
}

// Call it multiple times
console.log("Area 1:", calculateArea(5, 10));   // 50
console.log("Area 2:", calculateArea(3, 7));    // 21
console.log("Area 3:", calculateArea(12, 4));   // 48

// Function with default parameter
function greet(name = "Learner") {
  return \`Welcome back, \${name}! 👋\`;
}

console.log(greet("Rahul"));  // Welcome back, Rahul!
console.log(greet());         // Welcome back, Learner!

// Function that calls another function
function squareArea(side) {
  return calculateArea(side, side);  // call another function!
}
console.log("Square area:", squareArea(6));  // 36`,
            explanation: `- Functions are defined once, called many times with different inputs
- \`return\` sends a value back to whoever called the function
- Default parameters (\`name = "Learner"\`) are used when no argument is passed
- Functions can call other functions — this is called **composition**`,
          },

          exercise: {
            title:        'Build a Calculator Function',
            instructions: 'Write a function called calculate(a, b, operation) that performs addition, subtraction, multiplication, or division based on the operation string ("+", "-", "*", "/").',
            starterCode: `function calculate(a, b, operation) {
  // Your code here — use if/else if to check the operation
  // Return the result
}

// Test your function:
console.log(calculate(10, 5, "+"));  // should print 15
console.log(calculate(10, 5, "-"));  // should print 5
console.log(calculate(10, 5, "*"));  // should print 50
console.log(calculate(10, 5, "/"));  // should print 2`,
            solutionCode: `function calculate(a, b, operation) {
  if (operation === "+") {
    return a + b;
  } else if (operation === "-") {
    return a - b;
  } else if (operation === "*") {
    return a * b;
  } else if (operation === "/") {
    return a / b;
  } else {
    return "Unknown operation";
  }
}

console.log(calculate(10, 5, "+"));
console.log(calculate(10, 5, "-"));
console.log(calculate(10, 5, "*"));
console.log(calculate(10, 5, "/"));`,
            hints: [
              '💡 Use if/else if to check which operation string was passed',
              '💡 Use === for comparing strings: operation === "+"',
              '💡 Each branch should return the computed result',
            ],
          },

          quiz: {
            questions: [
              {
                id:          'js-m2-l1-q1',
                question:    'What does the "return" keyword do in a function?',
                options:     [
                  'Prints a value to the console',
                  'Sends a value back to the code that called the function',
                  'Restarts the function',
                  'Stops the program',
                ],
                correct:     1,
                explanation: 'return sends a value back to wherever the function was called from. The function ends immediately at the return statement.',
              },
              {
                id:          'js-m2-l1-q2',
                question:    'What is a default parameter?',
                options:     [
                  'A parameter that cannot be changed',
                  'A value used when no argument is provided',
                  'The first parameter always',
                  'A required parameter',
                ],
                correct:     1,
                explanation: 'A default parameter (e.g., name = "Guest") provides a fallback value when the caller doesn\'t pass that argument.',
              },
            ],
          },
        },

        // ─── Lesson 2 ────────────────────────────────
        {
          id:       'js-m2-l2',
          moduleId: 'js-m2',
          title:    'Arrow Functions',
          order:    2,
          xpReward: 15,
          duration: '10 min',

          explanation: {
            title:   'The Modern Way: Arrow Functions',
            content: `# Arrow Functions — Concise & Modern

Arrow functions are a shorter, more modern syntax for writing functions. They're everywhere in modern JavaScript.

## Regular function vs Arrow function

\`\`\`javascript
// Regular function
function add(a, b) {
  return a + b;
}

// Same function as an arrow function
const add = (a, b) => {
  return a + b;
};

// Even shorter — implicit return (one expression)
const add = (a, b) => a + b;
\`\`\`

## Arrow function shorthand rules

\`\`\`javascript
// One parameter — no parentheses needed
const double = n => n * 2;

// No parameters — empty parentheses required
const sayHi = () => "Hello!";

// Multiple lines — need curly braces AND explicit return
const greet = (name) => {
  const message = \`Hello, \${name}!\`;
  return message;
};
\`\`\`

## When to use which?

Use **arrow functions** for:
- Short, simple functions
- Callbacks (functions passed to other functions)

Use **regular functions** for:
- Named functions you'll reuse across your code
- Methods inside objects`,
          },

          codeExample: {
            title:    'Arrow Functions',
            language: 'javascript',
            code: `// Short arrow functions
const square   = n => n * n;
const double   = n => n * 2;
const isEven   = n => n % 2 === 0;
const greet    = name => \`Hello, \${name}!\`;

console.log(square(5));          // 25
console.log(double(7));          // 14
console.log(isEven(4));          // true
console.log(greet("Priya"));     // Hello, Priya!

// Arrow functions with multiple parameters
const add      = (a, b) => a + b;
const multiply = (a, b) => a * b;
const power    = (base, exp) => base ** exp;

console.log(add(10, 5));         // 15
console.log(multiply(4, 6));     // 24
console.log(power(2, 8));        // 256

// Multi-line arrow function
const describeNumber = (n) => {
  const type = isEven(n) ? "even" : "odd";
  return \`\${n} is an \${type} number\`;
};

console.log(describeNumber(7));  // 7 is an odd number`,
            explanation: `- Single parameter: \`n => n * 2\` (no parentheses around n)
- Multiple parameters: \`(a, b) => a + b\` (parentheses required)
- Single-expression body: no curly braces, value is automatically returned
- Multi-line body: needs \`{}\` and explicit \`return\``,
          },

          exercise: {
            title:        'Arrow Function Collection',
            instructions: 'Convert these three tasks into arrow functions: 1) A function that converts Celsius to Fahrenheit (F = C * 9/5 + 32). 2) A function that checks if a string is longer than 10 characters. 3) A function that returns the larger of two numbers.',
            starterCode: `// Convert to arrow functions:

// 1. Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius) => {
  // F = C * 9/5 + 32
};

// 2. Is string longer than 10 chars?
const isLongString = (str) => {
  // str.length gives the number of characters
};

// 3. Return the larger of two numbers
const max = (a, b) => {
  // use a ternary for extra style!
};

// Tests:
console.log(celsiusToFahrenheit(0));    // 32
console.log(celsiusToFahrenheit(100));  // 212
console.log(isLongString("Hi"));        // false
console.log(isLongString("Hello World")); // true
console.log(max(5, 9));                 // 9`,
            solutionCode: `const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;

const isLongString = (str) => str.length > 10;

const max = (a, b) => a > b ? a : b;

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));
console.log(isLongString("Hi"));
console.log(isLongString("Hello World"));
console.log(max(5, 9));`,
            hints: [
              '💡 Single-line arrow functions automatically return the expression',
              '💡 str.length gives the number of characters in a string',
              '💡 Use ternary for max: a > b ? a : b',
            ],
          },

          quiz: {
            questions: [
              {
                id:          'js-m2-l2-q1',
                question:    'What is the arrow function shorthand for: function square(n) { return n * n; }',
                options:     ['square = n { n * n }', 'const square = n => n * n;', 'const square = (n) { return n * n }', 'square => n * n'],
                correct:     1,
                explanation: 'const square = n => n * n; is the shortest form. Single parameter doesn\'t need parentheses, and a single expression is returned implicitly.',
              },
              {
                id:          'js-m2-l2-q2',
                question:    'When does an arrow function need explicit curly braces {}?',
                options:     ['Always', 'Never', 'When it has multiple lines of code', 'Only with multiple parameters'],
                correct:     2,
                explanation: 'Arrow functions need {} and an explicit return statement when the function body has multiple lines. For single-expression bodies, {} and return can both be omitted.',
              },
            ],
          },
        },

        // ─── Lesson 3 ────────────────────────────────
        {
          id:       'js-m2-l3',
          moduleId: 'js-m2',
          title:    'Scope & Closures',
          order:    3,
          xpReward: 20,
          duration: '14 min',

          explanation: {
            title:   'Where Variables Live: Scope',
            content: `# Scope — Where Variables Exist

**Scope** determines where in your code a variable can be accessed.

## Global Scope
Variables declared outside any function — accessible everywhere.

\`\`\`javascript
const appName = "CodeGuru";  // global scope

function show() {
  console.log(appName);  // ✅ can access it here
}
\`\`\`

## Local / Function Scope
Variables declared inside a function — only accessible inside that function.

\`\`\`javascript
function greet() {
  const message = "Hello!";  // local scope
  console.log(message);       // ✅ works here
}
// console.log(message);       // ❌ ReferenceError!
\`\`\`

## Block Scope (with let and const)
\`\`\`javascript
if (true) {
  let x = 10;     // block scope
  const y = 20;   // block scope
}
// console.log(x);  // ❌ ReferenceError!
\`\`\`

## Closures — Functions that Remember

A **closure** is when a function remembers variables from its outer scope even after the outer function has finished.

\`\`\`javascript
function makeCounter() {
  let count = 0;        // outer variable
  return function() {
    count++;            // inner function remembers count!
    return count;
  };
}

const counter = makeCounter();
console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3 — count is preserved!
\`\`\``,
          },

          codeExample: {
            title:    'Scope & Closures',
            language: 'javascript',
            code: `// Global scope
const language = "JavaScript";

function showLanguage() {
  console.log(language);  // accesses global variable
}
showLanguage();  // JavaScript

// Local scope
function createMessage() {
  const greeting = "Namaste";   // local to this function
  return \`\${greeting} from \${language}!\`;
}
console.log(createMessage());   // Namaste from JavaScript!
// console.log(greeting);       // ReferenceError!

// Closure example — counter factory
function makeCounter(start = 0) {
  let count = start;

  return {
    increment: () => ++count,
    decrement: () => --count,
    value:     () => count,
    reset:     () => { count = start; }
  };
}

const counter = makeCounter(10);
console.log(counter.value());       // 10
console.log(counter.increment());   // 11
console.log(counter.increment());   // 12
console.log(counter.decrement());   // 11
counter.reset();
console.log(counter.value());       // 10 — back to start`,
            explanation: `- Variables declared inside a function are NOT accessible outside it
- Global variables are accessible everywhere in the file
- Closures let inner functions remember and access outer variables
- The counter example returns an object of functions — each "closes over" the count variable`,
          },

          exercise: {
            title:        'Build a Score Tracker',
            instructions: 'Create a makeScoreTracker() function that returns an object with add(points), subtract(points), and getScore() methods. The score starts at 0.',
            starterCode: `function makeScoreTracker() {
  // Declare a score variable here
  let score = 0;

  return {
    // Add points to score
    add: (points) => {
      // your code
    },
    // Subtract points from score  
    subtract: (points) => {
      // your code
    },
    // Return current score
    getScore: () => {
      // your code
    }
  };
}

const tracker = makeScoreTracker();
tracker.add(50);
tracker.add(30);
tracker.subtract(10);
console.log(tracker.getScore());  // should be 70`,
            solutionCode: `function makeScoreTracker() {
  let score = 0;

  return {
    add:      (points) => { score += points; },
    subtract: (points) => { score -= points; },
    getScore: ()       => score,
  };
}

const tracker = makeScoreTracker();
tracker.add(50);
tracker.add(30);
tracker.subtract(10);
console.log(tracker.getScore());`,
            hints: [
              '💡 Declare score with let inside makeScoreTracker — the returned functions will close over it',
              '💡 score += points is shorthand for score = score + points',
              '💡 getScore just needs to return the current score variable',
            ],
          },

          quiz: {
            questions: [
              {
                id:          'js-m2-l3-q1',
                question:    'What is a closure in JavaScript?',
                options:     [
                  'A way to close the browser window',
                  'A function that can access variables from its outer scope even after the outer function has finished',
                  'A way to block access to a variable',
                  'A type of loop',
                ],
                correct:     1,
                explanation: 'A closure is a function that "closes over" (remembers) variables from its outer scope. This allows the inner function to access and modify those variables even after the outer function has returned.',
              },
              {
                id:          'js-m2-l3-q2',
                question:    'If you declare let x = 5 inside an if block, can you access x outside that block?',
                options:     ['Yes, let is globally scoped', 'No, let is block-scoped', 'Yes, but only if the if condition was true', 'It depends on the browser'],
                correct:     1,
                explanation: 'let and const are block-scoped — they only exist inside the {} block they were declared in. var is function-scoped and leaks out of blocks (another reason to avoid var).',
              },
            ],
          },
        },
      ],
    },
  ],
};

export default javascriptCourse;
