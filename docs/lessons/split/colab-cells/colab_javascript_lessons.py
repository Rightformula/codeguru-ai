# =================================================================
# ⚡  CodeGuru AI — JavaScript Course — All 18 Lessons
# =================================================================
# Copy this entire cell into Google Colab and run it.
# It defines `javascript_lessons` — a list of 18 lesson dicts.
#
# Lessons: 6 modules × 3 lessons each
# Total XP : 230
# Modules  : js-m1, js-m2, js-m3, js-m4, js-m5, js-m6
# =================================================================

import json

# ── js-m1 — Basics
# Lessons : js-m1-l1, js-m1-l2, js-m1-l3
# XP      : 35
javascript_m1_raw = json.loads(r'''
[
  {
    "id": "js-m1-l1",
    "moduleId": "js-m1",
    "title": "What is JavaScript?",
    "order": 1,
    "xpReward": 10,
    "duration": "9 min",
    "explanation": {
      "title": "What is JavaScript and Where Does It Run?",
      "content": "# What is JavaScript?\n\nImagine a web page as a building. HTML is the bricks and walls that give the building its structure. CSS is the paint and decoration that makes it look attractive. **JavaScript** is the electricity — it makes everything move, respond, and come alive.\n\nJavaScript is a **programming language** created by Brendan Eich in 1995. It was originally built to make web pages interactive: validate a form before it is submitted, show a menu when a button is clicked, update a counter without reloading the page. Today it does far more.\n\n## Where JavaScript Runs\n\n| Environment | What it means |\n|---|---|\n| **Browser** | Every modern browser has a built-in JavaScript engine (Chrome uses V8, Firefox uses SpiderMonkey). Code runs when a page loads. |\n| **Server (Node.js)** | JavaScript can also run on a server, outside any browser, using the Node.js runtime. |\n| **Mobile** | Frameworks like React Native let you build iOS and Android apps with JavaScript. |\n| **Desktop** | Electron lets you build desktop apps (VS Code itself is built with it). |\n\n## JavaScript vs Python vs Java\n\n| Feature | JavaScript | Python | Java |\n|---|---|---|---|\n| Primary use | Web and server apps | Data science, scripting | Enterprise software |\n| Typing | Dynamic | Dynamic | Static |\n| Runs in browser | Yes — natively | No | No |\n| Beginner-friendly | Yes | Very easy | Moderate |\n\n## The Console: Your Sandbox\n\nEvery browser has a **developer console** where you can run JavaScript instantly. Open it with `F12` → Console tab. Type any JavaScript and press Enter to run it immediately.\n\nIn this course, all code examples run in the **Node.js** environment (via Judge0), which behaves like the browser console but without the DOM. The `console.log()` function is your main output tool — it works identically in both environments.\n\nIn the code example below, you will see `console.log()` used in several ways to display text, numbers, and expressions."
    },
    "codeExample": {
      "title": "JavaScript Says Hello",
      "language": "javascript",
      "code": "// JavaScript executes from top to bottom, one statement at a time.\n// Lines beginning with // are single-line comments — JavaScript ignores them.\n\n/* This is a multi-line comment.\n   It spans as many lines as needed. */\n\n// console.log() displays output in the console.\nconsole.log(\"Hello, World!\");\n\n// You can log any value: strings, numbers, booleans.\nconsole.log(\"JavaScript was created in 1995.\");\nconsole.log(42);\nconsole.log(true);\n\n// console.log() accepts multiple arguments — prints them separated by spaces.\nconsole.log(\"Years since creation:\", 2025 - 1995);\n\n// The semicolon ; ends a statement. It is optional but recommended.\nconsole.log(\"Semicolons end statements\");",
      "explanation": "- `// comment` — a single-line comment; JavaScript ignores everything after `//` on that line\n- `/* ... */` — a multi-line comment; everything between the delimiters is ignored\n- `console.log(\"Hello, World!\")` — calls the built-in `console.log()` function; the argument is displayed in the console\n- `console.log(\"Years since:\", 2025 - 1995)` — multiple arguments are separated by a space; arithmetic is evaluated first\n- The semicolon `;` terminates a statement; JavaScript can often infer it, but writing it explicitly avoids subtle bugs"
    },
    "exercise": {
      "title": "Write Your JavaScript Introduction",
      "instructions": "Write a JavaScript program that logs four lines to the console: your name on line 1, your city on line 2, your age as a number on line 3, and your favourite programming language on line 4. Use console.log() for each line. A number does not need quotes; text must be in quotes.\n\nExpected output example:\nPriya Sharma\nMumbai\n21\nJavaScript",
      "starterCode": "// My JavaScript Introduction\n// Each console.log() prints one line.\n\n// Line 1 — your name\nconsole.log(\"Your Name Here\");\n\n// Line 2 — your city\nconsole.log(\"Your City Here\");\n\n// Line 3 — your age (number, no quotes)\n// Your code here\n\n// Line 4 — your favourite language\n// Your code here",
      "solutionCode": "console.log(\"Priya Sharma\");\nconsole.log(\"Mumbai\");\nconsole.log(21);\nconsole.log(\"JavaScript\");",
      "hints": [
        "💡 Each piece of information needs its own console.log() call on a separate line.",
        "💡 Text values like your name and city must be inside quotes; a number like your age must not have quotes.",
        "💡 Copy the pattern of the first two console.log() calls and add two more below them for age and language."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": null,
          "checkType": "contains_print"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "js-m1-l1-q1",
          "question": "Which function is used to display output in the JavaScript console?",
          "options": [
            "print()",
            "output()",
            "console.log()",
            "display()"
          ],
          "correct": 2,
          "explanation": "console.log() is JavaScript's primary output function. It writes its arguments to the browser console or terminal (in Node.js). Python uses print(), but JavaScript uses console.log(). There is no print() or display() function in standard JavaScript."
        },
        {
          "id": "js-m1-l1-q2",
          "question": "What does the // symbol do at the start of a line in JavaScript?",
          "options": [
            "Divides the value on the left by the value on the right",
            "Starts a single-line comment that JavaScript ignores",
            "Declares a new variable",
            "Causes a syntax error"
          ],
          "correct": 1,
          "explanation": "In JavaScript, // starts a single-line comment. Everything from // to the end of that line is ignored by the JavaScript engine when the program runs. Comments are notes written by the programmer for other humans. For multi-line comments, use /* ... */."
        },
        {
          "id": "js-m1-l1-q3",
          "question": "Where can JavaScript code run natively, without any extra installation?",
          "options": [
            "Only on Windows operating systems",
            "Only on a dedicated JavaScript server",
            "Inside every modern web browser",
            "Only when Python is installed"
          ],
          "correct": 2,
          "explanation": "Every modern browser — Chrome, Firefox, Safari, Edge — includes a built-in JavaScript engine. This means any JavaScript code can run directly in a browser without installing anything. This is what makes JavaScript the only language that runs natively on both the client (browser) and server (Node.js)."
        }
      ]
    }
  },
  {
    "id": "js-m1-l2",
    "moduleId": "js-m1",
    "title": "Variables: let, const, and var",
    "order": 2,
    "xpReward": 10,
    "duration": "11 min",
    "explanation": {
      "title": "Storing Values with let, const, and var",
      "content": "# Variables in JavaScript\n\nA **variable** is a named container for storing a value. Think of it as a labelled jar: you put something inside, give the jar a name, and later you pick it up by that name. JavaScript has three keywords for creating variables: `let`, `const`, and `var`.\n\n## let — the modern default for changeable values\n\n```javascript\nlet score = 0;\nscore = 10;       // reassignment is allowed\nscore = score + 5; // score is now 15\n```\n\nUse `let` when the value will change over time.\n\n## const — for values that should not change\n\n```javascript\nconst PI = 3.14159;\nconst MAX_USERS = 100;\n// PI = 3;   // TypeError — cannot reassign a const\n```\n\nUse `const` when the value must stay fixed. The name does not need to be uppercase, but uppercase is the convention for true constants.\n\n## var — the legacy keyword (avoid in modern code)\n\n`var` was the only option before 2015. It still works but has confusing scoping rules that `let` and `const` fixed. You will encounter it in older codebases, but prefer `let`/`const` for new code.\n\n## Naming Rules\n\n| Rule | Valid | Invalid | Reason |\n|---|---|---|---|\n| Start with letter, `$`, or `_` | `score` | `1score` | Cannot start with digit |\n| Letters, digits, `$`, `_` only | `user_name` | `user-name` | Hyphens not allowed |\n| Case-sensitive | `Score` ≠ `score` | | |\n| Not a keyword | `total` | `let` | Reserved word |\n\nBy convention, JavaScript uses **camelCase** for variable names: `firstName`, `totalScore`, `isLoggedIn`.\n\n## Declaring Without Initialising\n\n```javascript\nlet city;             // declared but not yet assigned\nconsole.log(city);    // undefined\ncity = \"Delhi\";       // now it has a value\n```\n\nA declared but unassigned variable holds the special value `undefined`.\n\nIn the code example below, you will see `let` and `const` used together in a realistic ticket booking scenario."
    },
    "codeExample": {
      "title": "Cinema Ticket Booking",
      "language": "javascript",
      "code": "// Cinema ticket booking — let and const in action\n\n// Constants: values that will never change\nconst TICKET_PRICE   = 200;    // price in rupees\nconst MAX_SEATS      = 100;    // total seats in the hall\nconst MOVIE_TITLE    = \"Dune: Part Three\";\n\n// Variables: values that will change as tickets are sold\nlet seatsBooked  = 0;\nlet totalRevenue = 0;\n\n// Simulate booking 3 tickets\nseatsBooked  += 3;\ntotalRevenue  = seatsBooked * TICKET_PRICE;\n\nconsole.log(\"Movie:\",         MOVIE_TITLE);\nconsole.log(\"Seats booked:\",  seatsBooked);\nconsole.log(\"Seats left:\",    MAX_SEATS - seatsBooked);\nconsole.log(\"Revenue (₹):\",   totalRevenue);\n\n// let allows reassignment\nlet customerName = \"Ananya\";\nconsole.log(\"Booked by:\", customerName);\ncustomerName = \"Rahul\";          // change the name\nconsole.log(\"Updated to:\", customerName);",
      "explanation": "- `const TICKET_PRICE = 200` — a constant; attempting to reassign it would throw a `TypeError` at runtime\n- `let seatsBooked = 0` — a mutable variable; its value will change as tickets are sold\n- `seatsBooked += 3` — shorthand for `seatsBooked = seatsBooked + 3`; updates the variable in place\n- `MAX_SEATS - seatsBooked` — arithmetic on a constant and a variable; constants can be read but not reassigned\n- `customerName = \"Rahul\"` — reassigning a `let` variable is legal; the old value `\"Ananya\"` is replaced"
    },
    "exercise": {
      "title": "Build a Shopping Cart Tracker",
      "instructions": "Create a shopping cart program. Declare const ITEM_PRICE = 350, let itemCount = 0, and let cartTotal = 0. Set itemCount to 4 and compute cartTotal as itemCount * ITEM_PRICE. Apply a 10% discount: compute discountAmount = cartTotal * 0.10 and finalTotal = cartTotal - discountAmount. Print itemCount, cartTotal, discountAmount, and finalTotal.\n\nExpected output:\nItems: 4\nCart Total: 1400\nDiscount: 140\nFinal Total: 1260",
      "starterCode": "// Shopping Cart Tracker\n\nconst ITEM_PRICE = 350;\n\nlet itemCount  = 0;\nlet cartTotal  = 0;\n\n// Add 4 items\nitemCount = 4;\ncartTotal = itemCount * ITEM_PRICE;\n\n// Apply 10% discount\nlet discountAmount = cartTotal * 0.10;\nlet finalTotal     = cartTotal - discountAmount;\n\n// Print all values\nconsole.log(\"Items:\",      itemCount);\nconsole.log(\"Cart Total:\", cartTotal);\n// Print discountAmount and finalTotal here",
      "solutionCode": "const ITEM_PRICE = 350;\n\nlet itemCount      = 0;\nlet cartTotal      = 0;\n\nitemCount = 4;\ncartTotal = itemCount * ITEM_PRICE;\n\nlet discountAmount = cartTotal * 0.10;\nlet finalTotal     = cartTotal - discountAmount;\n\nconsole.log(\"Items:\",      itemCount);\nconsole.log(\"Cart Total:\", cartTotal);\nconsole.log(\"Discount:\",   discountAmount);\nconsole.log(\"Final Total:\", finalTotal);",
      "hints": [
        "💡 Add two more console.log() calls — one for discountAmount and one for finalTotal.",
        "💡 Follow the same pattern: console.log(\"Discount:\", discountAmount); and console.log(\"Final Total:\", finalTotal);",
        "💡 The discount is already calculated — you only need to print it with the correct label."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Final Total: 1260",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "js-m1-l2-q1",
          "question": "Which keyword should you use when a variable's value will never change?",
          "options": [
            "var",
            "let",
            "const",
            "fixed"
          ],
          "correct": 2,
          "explanation": "const declares a constant — a variable whose binding cannot be reassigned after creation. Attempting to reassign a const throws a TypeError. Use const by default and switch to let only when you know the value must change. var is the legacy keyword from before 2015 and should be avoided in modern JavaScript."
        },
        {
          "id": "js-m1-l2-q2",
          "question": "What is the value of a let variable that has been declared but not yet assigned?",
          "options": [
            "null",
            "0",
            "\"\"",
            "undefined"
          ],
          "correct": 3,
          "explanation": "A declared but unassigned variable holds the special value undefined. This is JavaScript's way of saying 'this variable exists but has no value yet'. It is different from null, which is an explicit 'no value' that a programmer assigns intentionally, and from 0 or \"\" which are valid values of specific types."
        }
      ]
    }
  },
  {
    "id": "js-m1-l3",
    "moduleId": "js-m1",
    "title": "Data Types and typeof",
    "order": 3,
    "xpReward": 15,
    "duration": "12 min",
    "explanation": {
      "title": "JavaScript's Seven Primitive Data Types",
      "content": "# Data Types in JavaScript\n\nEvery value in a program has a **type** — a category that determines what kind of operations you can perform on it. You cannot multiply a name by a city, but you can multiply a price by a quantity. JavaScript has seven **primitive** types.\n\n## The Seven Primitive Types\n\n| Type | Example values | Used for |\n|---|---|---|\n| `string` | `\"hello\"`, `'Rahul'` | Text |\n| `number` | `42`, `3.14`, `-7` | All numbers (integers and decimals) |\n| `boolean` | `true`, `false` | Yes/no, on/off decisions |\n| `undefined` | `undefined` | Declared but not yet assigned |\n| `null` | `null` | Explicitly empty — no value |\n| `bigint` | `9007199254740991n` | Integers too large for number |\n| `symbol` | `Symbol(\"id\")` | Unique identifiers (advanced) |\n\nFor beginner code, you will use `string`, `number`, `boolean`, `undefined`, and `null` most of the time.\n\n## Strings in Detail\n\nStrings can use single quotes, double quotes, or backticks (template literals):\n\n```javascript\nconst a = 'single quotes';\nconst b = \"double quotes\";    // same result\nconst c = `template literal`; // backticks allow embedded expressions\n\nconst name  = \"Priya\";\nconst score = 95;\nconst msg   = `${name} scored ${score} marks.`; // interpolation\n```\n\nTemplate literals (backticks) are the modern preferred style because they support **string interpolation** — embedding expressions directly inside the string with `${}`.\n\n## The typeof Operator\n\n`typeof` returns a string describing the type of a value:\n\n```javascript\ntypeof 42           // \"number\"\ntypeof \"hello\"      // \"string\"\ntypeof true         // \"boolean\"\ntypeof undefined    // \"undefined\"\ntypeof null         // \"object\"  ← famous JavaScript quirk!\n```\n\nThe `typeof null` returning `\"object\"` is a known historical bug in JavaScript that was never fixed for backwards-compatibility reasons.\n\n## Type Coercion Warning\n\nJavaScript automatically converts types in some situations — this can produce surprising results:\n\n```javascript\n\"5\" + 3     // \"53\"  — number 3 coerced to string\n\"5\" - 3     // 2     — string \"5\" coerced to number\n```\n\nThe `+` operator with a string triggers **concatenation**, not addition. Always be explicit about types when doing arithmetic. In the code example below, you will see all five common types used and inspected with `typeof`."
    },
    "codeExample": {
      "title": "Exploring JavaScript Types",
      "language": "javascript",
      "code": "// Exploring all five common primitive types\n\n// string — text in quotes or backticks\nconst productName  = \"CodeGuru Pro Plan\";\nconst city         = 'Mumbai';\nconst templateDemo = `Product: ${productName}`; // template literal\n\n// number — integers and decimals use the same type\nconst price        = 2999;\nconst taxRate      = 0.18;\nconst discounted   = price * (1 - taxRate);\n\n// boolean — only two possible values\nconst isAvailable  = true;\nconst isExpired    = false;\n\n// undefined — declared but not assigned\nlet promoCode;\nconsole.log(\"promoCode:\", promoCode);   // undefined\n\n// null — explicitly empty\nconst selectedItem = null;\n\n// Log everything with their types\nconsole.log(productName,  \"|\", typeof productName);\nconsole.log(price,         \"|\", typeof price);\nconsole.log(isAvailable,  \"|\", typeof isAvailable);\nconsole.log(promoCode,    \"|\", typeof promoCode);\nconsole.log(selectedItem, \"|\", typeof selectedItem);  // note: typeof null\nconsole.log(templateDemo);\nconsole.log(\"After tax (₹):\", discounted.toFixed(2));",
      "explanation": "- `const templateDemo = \\`Product: ${productName}\\`` — a template literal; `${}` embeds any expression inside the string\n- `price * (1 - taxRate)` — standard arithmetic; parentheses control evaluation order\n- `let promoCode;` — declared without assignment; its value is `undefined` until explicitly set\n- `const selectedItem = null` — explicitly set to `null`; signals deliberate absence of a value\n- `typeof null` — returns `\"object\"`, a well-known historical JavaScript quirk, not a bug in your code\n- `.toFixed(2)` — a number method that formats the value to exactly two decimal places as a string"
    },
    "exercise": {
      "title": "Type Inspector Program",
      "instructions": "Declare five variables: userName (a string), userAge (a number), isPremium (a boolean), referralCode (set to null), and lastLogin (declared but not assigned, so it is undefined). For each variable, use console.log() to print the variable's value and its type using typeof, separated by a pipe character. Use template literals for the output.\n\nExpected output format:\nrahul | string\n25 | number\ntrue | boolean\nnull | object\nundefined | undefined",
      "starterCode": "// Type Inspector Program\n\nconst userName    = \"rahul\";\nconst userAge     = 25;\nconst isPremium   = true;\nconst referralCode = null;\nlet   lastLogin;          // deliberately left undefined\n\n// Print each value and its type using template literals\nconsole.log(`${userName} | ${typeof userName}`);\nconsole.log(`${userAge} | ${typeof userAge}`);\n// Print isPremium, referralCode, and lastLogin the same way",
      "solutionCode": "const userName     = \"rahul\";\nconst userAge      = 25;\nconst isPremium    = true;\nconst referralCode = null;\nlet   lastLogin;\n\nconsole.log(`${userName}     | ${typeof userName}`);\nconsole.log(`${userAge}      | ${typeof userAge}`);\nconsole.log(`${isPremium}    | ${typeof isPremium}`);\nconsole.log(`${referralCode} | ${typeof referralCode}`);\nconsole.log(`${lastLogin}    | ${typeof lastLogin}`);",
      "hints": [
        "💡 Follow the exact same pattern as the first two lines: console.log(`${variable} | ${typeof variable}`);",
        "💡 typeof null returns 'object' — this is expected JavaScript behaviour, not an error.",
        "💡 typeof lastLogin returns 'undefined' because the variable was declared but never assigned a value."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "undefined | undefined",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "js-m1-l3-q1",
          "question": "What does the typeof operator return for the value null?",
          "options": [
            "\"null\"",
            "\"undefined\"",
            "\"object\"",
            "\"empty\""
          ],
          "correct": 2,
          "explanation": "typeof null returns \"object\" — this is a well-known historical bug in JavaScript that was never corrected because fixing it would break millions of existing programs. To correctly check for null, use strict equality: value === null. Do not rely on typeof for detecting null."
        },
        {
          "id": "js-m1-l3-q2",
          "question": "What is the result of \"5\" + 3 in JavaScript?",
          "options": [
            "8",
            "\"53\"",
            "\"8\"",
            "TypeError"
          ],
          "correct": 1,
          "explanation": "When the + operator encounters a string on either side, JavaScript converts the other operand to a string and concatenates rather than adds. So \"5\" + 3 produces the string \"53\", not the number 8. Use Number(\"5\") + 3 or parseInt(\"5\") + 3 to force numeric addition."
        },
        {
          "id": "js-m1-l3-q3",
          "question": "What is the difference between null and undefined in JavaScript?",
          "options": [
            "They are identical and can always be used interchangeably",
            "null means a variable was declared but not assigned; undefined means it was explicitly set to empty",
            "undefined means declared but not assigned; null is an explicit intentional empty value",
            "null is for numbers; undefined is for strings"
          ],
          "correct": 2,
          "explanation": "undefined is the automatic value JavaScript assigns when a variable is declared but not given a value. null is a value that a programmer assigns explicitly to signal 'intentionally no value'. Think of undefined as 'not yet known' and null as 'known to be empty'."
        }
      ]
    }
  }
]
''')

# ── js-m2 — Variables and Data Types
# Lessons : js-m2-l1, js-m2-l2, js-m2-l3
# XP      : 35
javascript_m2_raw = json.loads(r'''
[
  {
    "id": "js-m2-l1",
    "moduleId": "js-m2",
    "title": "Numbers and Arithmetic Operators",
    "order": 1,
    "xpReward": 10,
    "duration": "11 min",
    "explanation": {
      "title": "Working with Numbers and Math in JavaScript",
      "content": "# Numbers in JavaScript\n\nUnlike Python or Java, JavaScript uses a **single type for all numbers** — both integers and decimals are represented as `number`. Under the hood, every number is a 64-bit floating-point value following the IEEE 754 standard.\n\n```javascript\nconst seats    = 30;       // integer — still type 'number'\nconst price    = 199.99;   // decimal — still type 'number'\nconst negative = -42;\nconst huge     = 1_000_000; // underscores improve readability\n```\n\n## Arithmetic Operators\n\n| Operator | Name | Example | Result |\n|---|---|---|---|\n| `+` | Addition | `7 + 3` | `10` |\n| `-` | Subtraction | `7 - 3` | `4` |\n| `*` | Multiplication | `7 * 3` | `21` |\n| `/` | Division | `7 / 2` | `3.5` |\n| `%` | Modulo (remainder) | `7 % 2` | `1` |\n| `**` | Exponentiation | `2 ** 8` | `256` |\n\nThere is no separate integer division operator in JavaScript. `7 / 2` always returns `3.5`.\n\n## Augmented Assignment Operators\n\n```javascript\nlet x = 10;\nx += 5;   // x = 15\nx -= 3;   // x = 12\nx *= 2;   // x = 24\nx /= 4;   // x = 6\nx **= 2;  // x = 36\n```\n\n## Increment and Decrement\n\n```javascript\nlet count = 0;\ncount++;   // count = 1  (post-increment)\ncount--;   // count = 0  (post-decrement)\n```\n\n## The Math Object\n\nJavaScript provides a built-in `Math` object with useful functions:\n\n| Method | What it does | Example |\n|---|---|---|\n| `Math.round(x)` | Round to nearest integer | `Math.round(4.6)` → `5` |\n| `Math.floor(x)` | Round down | `Math.floor(4.9)` → `4` |\n| `Math.ceil(x)` | Round up | `Math.ceil(4.1)` → `5` |\n| `Math.abs(x)` | Absolute value | `Math.abs(-7)` → `7` |\n| `Math.max(a,b)` | Larger value | `Math.max(3, 9)` → `9` |\n| `Math.min(a,b)` | Smaller value | `Math.min(3, 9)` → `3` |\n| `Math.sqrt(x)` | Square root | `Math.sqrt(16)` → `4` |\n\nIn the code example below, you will see arithmetic operators and several `Math` methods applied to a GST invoice calculation."
    },
    "codeExample": {
      "title": "GST Invoice Calculator",
      "language": "javascript",
      "code": "// GST Invoice Calculator\n\nconst unitPrice  = 1250;       // price before tax\nconst quantity   = 4;          // number of units\nconst GST_RATE   = 0.18;       // 18% GST\n\n// Basic arithmetic\nconst subtotal   = unitPrice * quantity;   // 5000\nconst gstAmount  = subtotal * GST_RATE;    // 900\nconst grandTotal = subtotal + gstAmount;   // 5900\n\nconsole.log(\"Unit Price :₹\", unitPrice);\nconsole.log(\"Quantity   :\",   quantity);\nconsole.log(\"Subtotal   :₹\", subtotal);\nconsole.log(\"GST (18%)  :₹\", gstAmount);\nconsole.log(\"Grand Total:₹\", grandTotal);\n\n// Math methods\nconst rawAvgPerUnit = grandTotal / quantity;         // 1475 exactly\nconst rounded       = Math.round(rawAvgPerUnit);     // 1475\nconst flooredDis    = Math.floor(grandTotal * 0.05); // floor of 5% discount\n\nconsole.log(\"Avg per unit:\", rounded);\nconsole.log(\"5% discount :\", flooredDis);\n\n// Modulo — check if quantity is even\nconsole.log(\"Even quantity?\", quantity % 2 === 0);",
      "explanation": "- `unitPrice * quantity` — multiplies two `number` values; result is always a `number`\n- `subtotal * GST_RATE` — multiplying by `0.18` computes 18% of the subtotal\n- `Math.round(rawAvgPerUnit)` — rounds to the nearest whole number; `.5` rounds up\n- `Math.floor(grandTotal * 0.05)` — rounds down, ensuring a discount does not exceed the actual computed value\n- `quantity % 2 === 0` — the modulo operator returns the remainder; `=== 0` checks for exact equality without type coercion"
    },
    "exercise": {
      "title": "Build a Simple Loan EMI Estimator",
      "instructions": "Write a program that estimates a monthly EMI (Equated Monthly Instalment) for a loan. Declare const PRINCIPAL = 100000, const ANNUAL_RATE = 0.12, and const MONTHS = 12. Compute monthlyRate = ANNUAL_RATE / 12 and simpleEMI = (PRINCIPAL + PRINCIPAL * ANNUAL_RATE) / MONTHS. Round simpleEMI using Math.round(). Print PRINCIPAL, ANNUAL_RATE, MONTHS, and the rounded EMI.\n\nExpected output:\nPrincipal: 100000\nAnnual Rate: 0.12\nMonths: 12\nEMI: 9333",
      "starterCode": "// Simple Loan EMI Estimator\n\nconst PRINCIPAL   = 100000;\nconst ANNUAL_RATE = 0.12;\nconst MONTHS      = 12;\n\n// Compute monthly rate and simple EMI\nconst monthlyRate = ANNUAL_RATE / 12;\nconst simpleEMI   = (PRINCIPAL + PRINCIPAL * ANNUAL_RATE) / MONTHS;\nconst roundedEMI  = Math.round(simpleEMI);\n\nconsole.log(\"Principal:   \", PRINCIPAL);\nconsole.log(\"Annual Rate: \", ANNUAL_RATE);\nconsole.log(\"Months:      \", MONTHS);\n// Print rounded EMI here",
      "solutionCode": "const PRINCIPAL   = 100000;\nconst ANNUAL_RATE = 0.12;\nconst MONTHS      = 12;\n\nconst monthlyRate = ANNUAL_RATE / 12;\nconst simpleEMI   = (PRINCIPAL + PRINCIPAL * ANNUAL_RATE) / MONTHS;\nconst roundedEMI  = Math.round(simpleEMI);\n\nconsole.log(\"Principal:   \", PRINCIPAL);\nconsole.log(\"Annual Rate: \", ANNUAL_RATE);\nconsole.log(\"Months:      \", MONTHS);\nconsole.log(\"EMI:         \", roundedEMI);",
      "hints": [
        "💡 The rounded EMI is already stored in the variable roundedEMI — you only need to print it.",
        "💡 Add console.log(\"EMI:\", roundedEMI); below the last existing console.log().",
        "💡 Math.round() rounds to the nearest integer — 9333.33 becomes 9333."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "EMI:",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "js-m2-l1-q1",
          "question": "What does the % operator return in JavaScript?",
          "options": [
            "The percentage of the left number relative to the right",
            "The remainder after dividing the left number by the right",
            "The rounded result of dividing two numbers",
            "The absolute difference between two numbers"
          ],
          "correct": 1,
          "explanation": "The % operator (modulo) returns the remainder after integer division. For example, 17 % 5 is 2 because 17 divided by 5 is 3 with 2 left over. It is commonly used to check divisibility: n % 2 === 0 is true when n is even."
        },
        {
          "id": "js-m2-l1-q2",
          "question": "What does Math.floor(4.9) return?",
          "options": [
            "5",
            "4",
            "4.9",
            "undefined"
          ],
          "correct": 1,
          "explanation": "Math.floor() always rounds down to the nearest integer, regardless of the decimal part. Math.floor(4.9) is 4, Math.floor(4.1) is also 4. Use Math.ceil() to round up, Math.round() to round to the nearest integer, or Math.floor() when you need a guaranteed lower bound."
        }
      ]
    }
  },
  {
    "id": "js-m2-l2",
    "moduleId": "js-m2",
    "title": "Strings and Template Literals",
    "order": 2,
    "xpReward": 10,
    "duration": "12 min",
    "explanation": {
      "title": "Working with Text: Strings and Template Literals",
      "content": "# Strings in JavaScript\n\nA **string** is a sequence of characters used to represent text. Strings are one of the most frequently used types in any program. JavaScript offers three ways to delimit them:\n\n```javascript\nconst a = 'single quotes';    // traditional\nconst b = \"double quotes\";    // traditional\nconst c = `template literal`; // modern — backticks\n```\n\nAll three store text equally well. Template literals (backticks) are the modern preference because they support interpolation and multi-line text.\n\n## String Concatenation vs Template Literals\n\n```javascript\nconst name  = \"Rahul\";\nconst score = 92;\n\n// Old way — concatenation with +\nconsole.log(\"Hello, \" + name + \"! Score: \" + score);\n\n// Modern way — template literal\nconsole.log(`Hello, ${name}! Score: ${score}`);\n```\n\nTemplate literals are cleaner: you embed any expression inside `${}` and it is evaluated and inserted automatically.\n\n## Essential String Properties and Methods\n\n| Property/Method | What it does | Example |\n|---|---|---|\n| `.length` | Character count | `\"hello\".length` → `5` |\n| `.toUpperCase()` | All uppercase | `\"hello\".toUpperCase()` → `\"HELLO\"` |\n| `.toLowerCase()` | All lowercase | `\"HELLO\".toLowerCase()` → `\"hello\"` |\n| `.trim()` | Remove surrounding whitespace | `\" hi \".trim()` → `\"hi\"` |\n| `.includes(s)` | Check if substring present | `\"hello\".includes(\"ell\")` → `true` |\n| `.startsWith(s)` | Check prefix | `\"hello\".startsWith(\"he\")` → `true` |\n| `.indexOf(s)` | Position of first match | `\"hello\".indexOf(\"l\")` → `2` |\n| `.slice(s, e)` | Extract substring | `\"hello\".slice(1, 4)` → `\"ell\"` |\n| `.replace(a, b)` | Replace first match | `\"cats\".replace(\"cats\",\"dogs\")` → `\"dogs\"` |\n| `.split(sep)` | Split into array | `\"a,b,c\".split(\",\")` → `[\"a\",\"b\",\"c\"]` |\n\n## Strings Are Immutable\n\nYou cannot change a character inside a string — string methods always return a **new** string without modifying the original:\n\n```javascript\nconst word = \"hello\";\nconst upper = word.toUpperCase(); // new string\nconsole.log(word);   // \"hello\" — unchanged\nconsole.log(upper);  // \"HELLO\"\n```\n\nIn the code example below, you will see string methods and template literals applied to an email address validator."
    },
    "codeExample": {
      "title": "Email and Name Formatter",
      "language": "javascript",
      "code": "// Email and Name Formatter — string methods in action\n\nconst rawName  = \"  ananya krishnan  \";   // messy input\nconst rawEmail = \"Ananya.Krishnan@Example.COM\";\n\n// Clean up the name\nconst trimmedName  = rawName.trim();            // remove spaces\nconst formattedName = trimmedName              // chain methods\n    .split(\" \")                                 // split into words\n    .map(w => w[0].toUpperCase() + w.slice(1)) // capitalise each\n    .join(\" \");                                 // rejoin\n\n// Normalise email\nconst cleanEmail = rawEmail.toLowerCase();\n\n// Extract username (before @)\nconst atIndex  = cleanEmail.indexOf(\"@\");\nconst username = cleanEmail.slice(0, atIndex);\n\n// Validate email has @ and .\nconst isValid  = cleanEmail.includes(\"@\") && cleanEmail.includes(\".\");\n\nconsole.log(`Name     : ${formattedName}`);\nconsole.log(`Email    : ${cleanEmail}`);\nconsole.log(`Username : ${username}`);\nconsole.log(`Valid    : ${isValid}`);\nconsole.log(`Length   : ${cleanEmail.length} characters`);",
      "explanation": "- `.trim()` — removes all leading and trailing whitespace without affecting internal spaces\n- `.split(\" \")` — splits the string on every space, producing an array of words\n- `.map(w => w[0].toUpperCase() + w.slice(1))` — capitalises the first letter of each word\n- `.join(\" \")` — reassembles the array back into a single string with spaces between words\n- `.indexOf(\"@\")` — returns the integer position of the first `@`; used to know where to slice\n- `.includes(\"@\") && .includes(\".\")` — combines two boolean checks with `&&`"
    },
    "exercise": {
      "title": "Build a Username Generator",
      "instructions": "Given the variable fullName = '  Rahul Sharma  ', create a username by: (1) trimming whitespace, (2) converting to lowercase, (3) replacing all spaces with underscores using replaceAll(). Print the original trimmed name and the generated username on separate labelled lines.\n\nExpected output:\nOriginal: Rahul Sharma\nUsername: rahul_sharma",
      "starterCode": "// Username Generator\n\nconst fullName = \"  Rahul Sharma  \";\n\n// Step 1 — trim whitespace\nconst trimmed  = fullName.trim();\n\n// Step 2 — convert to lowercase\nconst lower    = trimmed.toLowerCase();\n\n// Step 3 — replace all spaces with underscores\n// Your code here — store result in 'username'\n\nconsole.log(\"Original:\", trimmed);\nconsole.log(\"Username:\", username);",
      "solutionCode": "const fullName = \"  Rahul Sharma  \";\n\nconst trimmed  = fullName.trim();\nconst lower    = trimmed.toLowerCase();\nconst username = lower.replaceAll(\" \", \"_\");\n\nconsole.log(\"Original:\", trimmed);\nconsole.log(\"Username:\", username);",
      "hints": [
        "💡 Use lower.replaceAll(\" \", \"_\") to replace every space with an underscore and store it as username.",
        "💡 replaceAll() replaces every occurrence; replace() only replaces the first match.",
        "💡 The trimmed name and lowercase steps are already done — username only needs the replaceAll() step applied to lower."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "rahul_sharma",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "js-m2-l2-q1",
          "question": "What is the key advantage of template literals over string concatenation?",
          "options": [
            "Template literals are faster to execute",
            "Template literals support embedded expressions with ${} and multi-line text",
            "Template literals do not require quotes",
            "Template literals automatically convert numbers to strings"
          ],
          "correct": 1,
          "explanation": "Template literals (backtick strings) support two features concatenation cannot match easily: expression interpolation with ${} — which embeds any expression directly in the string — and multi-line strings without escape characters. Both make code more readable and less error-prone."
        },
        {
          "id": "js-m2-l2-q2",
          "question": "What does \"hello\".slice(1, 4) return?",
          "options": [
            "\"hello\"",
            "\"ello\"",
            "\"ell\"",
            "\"hel\""
          ],
          "correct": 2,
          "explanation": "slice(start, end) extracts characters from index start up to but not including index end. For \"hello\", index 1 is 'e', index 2 is 'l', index 3 is 'l' — so slice(1, 4) returns \"ell\". The character at index 4 ('o') is excluded because the end index is non-inclusive."
        }
      ]
    }
  },
  {
    "id": "js-m2-l3",
    "moduleId": "js-m2",
    "title": "Type Conversion and Coercion",
    "order": 3,
    "xpReward": 15,
    "duration": "12 min",
    "explanation": {
      "title": "Converting Types Explicitly and Understanding Coercion",
      "content": "# Type Conversion in JavaScript\n\nBecause JavaScript is dynamically typed, values often need to move between types. There are two kinds of type change: **explicit conversion** (you control it) and **implicit coercion** (JavaScript does it automatically, sometimes unexpectedly).\n\n## Explicit Conversion\n\nUse these built-in functions to convert types deliberately:\n\n| From → To | Function | Example | Result |\n|---|---|---|---|\n| string → number | `Number(x)` | `Number(\"42\")` | `42` |\n| string → integer | `parseInt(x)` | `parseInt(\"42.9\")` | `42` |\n| string → float | `parseFloat(x)` | `parseFloat(\"3.14\")` | `3.14` |\n| number → string | `String(x)` | `String(42)` | `\"42\"` |\n| anything → boolean | `Boolean(x)` | `Boolean(0)` | `false` |\n\n## Falsy Values\n\nThese six values are **falsy** — they convert to `false`:\n\n```\nfalse   0   \"\"   null   undefined   NaN\n```\n\nEvery other value is **truthy** — it converts to `true`.\n\n## Implicit Coercion — the Surprises\n\nJavaScript coerces types automatically in certain operations:\n\n```javascript\n\"5\" + 2      // \"52\"   — + with string triggers concatenation\n\"5\" - 2      // 3      — - forces numeric conversion\n\"5\" * \"3\"    // 15     — both coerced to numbers\ntrue + 1     // 2      — true coerces to 1\nnull + 1     // 1      — null coerces to 0\n```\n\n## NaN — Not a Number\n\n`NaN` is a special `number` value that means a numeric operation failed:\n\n```javascript\nNumber(\"hello\")  // NaN — \"hello\" is not a valid number\n0 / 0            // NaN — zero divided by zero is undefined\n```\n\nCheck for `NaN` with `isNaN()` or `Number.isNaN()`. Never use `x === NaN` — it always returns `false`.\n\n## Strict vs Loose Equality\n\n```javascript\n0  == false    // true  — loose equality coerces types first\n0  === false   // false — strict equality checks type AND value\n\"\"  == false   // true  — loose\n\"\"  === false  // false — strict\n```\n\nAlways prefer `===` (strict equality) to avoid coercion surprises. In the code example below, you will see explicit conversion, falsy checks, and the difference between `==` and `===`."
    },
    "codeExample": {
      "title": "Type Conversion Showcase",
      "language": "javascript",
      "code": "// Type Conversion Showcase\n\n// --- Explicit number conversion ---\nconst ageStr    = \"25\";\nconst ageNum    = Number(ageStr);     // 25 as number\nconst priceStr  = \"1299.99\";\nconst priceNum  = parseFloat(priceStr); // 1299.99\nconst pageStr   = \"42 pages\";\nconst pageNum   = parseInt(pageStr);  // 42 — stops at first non-digit\n\nconsole.log(ageNum   + 5);   // 30 (numeric addition)\nconsole.log(ageStr   + 5);   // \"255\" (string concat — coercion trap)\nconsole.log(priceNum.toFixed(2)); // \"1299.99\"\nconsole.log(pageNum);         // 42\n\n// --- Falsy check ---\nconst values = [0, \"\", null, undefined, \"hello\", 42, false];\nconsole.log(\"\\n--- Falsy / Truthy ---\");\nvalues.forEach(v => {\n    console.log(`${String(v).padEnd(10)} → ${Boolean(v)}`);\n});\n\n// --- Strict vs loose equality ---\nconsole.log(\"\\n--- Equality ---\");\nconsole.log(0 == false);   // true  (loose)\nconsole.log(0 === false);  // false (strict — different types)\nconsole.log(\"5\" == 5);     // true  (loose)\nconsole.log(\"5\" === 5);    // false (strict)",
      "explanation": "- `Number(\"25\")` — converts a clean numeric string to a number; returns `NaN` for non-numeric strings\n- `parseInt(\"42 pages\")` — parses digits from the start and stops at the first non-digit character\n- `ageStr + 5` — the `+` operator sees a string on the left and concatenates, producing `\"255\"` not `30`\n- `Boolean(v)` — explicitly converts each value; `0`, `\"\"`, `null`, `undefined`, `false` all produce `false`\n- `0 == false` is `true` because loose equality coerces types; `0 === false` is `false` because they differ in type"
    },
    "exercise": {
      "title": "Fix a Type Bug in a Score Calculator",
      "instructions": "The following program has a type bug: scores arrive as strings from a form, so adding them concatenates instead of summing. Fix the bug by converting each score to a number before summing. The three scores are score1 = '88', score2 = '92', score3 = '75'. Compute their numeric sum and average (rounded to 1 decimal with toFixed(1)). Print the total and average.\n\nExpected output:\nTotal: 255\nAverage: 85.0",
      "starterCode": "// Score Calculator — fix the type bug\n\nconst score1 = \"88\";   // comes in as a string\nconst score2 = \"92\";\nconst score3 = \"75\";\n\n// BUG: score1 + score2 + score3 concatenates strings!\n// Fix: convert each to a number first using Number()\nconst s1 = Number(score1);\n// Your code: convert score2 and score3\n\n// Compute total and average\nconst total   = s1 + s2 + s3;\nconst average = (total / 3).toFixed(1);\n\nconsole.log(\"Total:\",   total);\nconsole.log(\"Average:\", average);",
      "solutionCode": "const score1 = \"88\";\nconst score2 = \"92\";\nconst score3 = \"75\";\n\nconst s1 = Number(score1);\nconst s2 = Number(score2);\nconst s3 = Number(score3);\n\nconst total   = s1 + s2 + s3;\nconst average = (total / 3).toFixed(1);\n\nconsole.log(\"Total:\",   total);\nconsole.log(\"Average:\", average);",
      "hints": [
        "💡 Declare const s2 = Number(score2); and const s3 = Number(score3); following the same pattern as s1.",
        "💡 After converting, s1 + s2 + s3 will be numeric addition (255), not string concatenation.",
        "💡 .toFixed(1) is a number method that returns a string with exactly 1 decimal place — call it on the division result."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Total:   255",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "Average: 85.0",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "js-m2-l3-q1",
          "question": "Why should you use === instead of == when comparing values in JavaScript?",
          "options": [
            "=== is faster to execute",
            "=== checks both value and type without coercion, preventing unexpected matches",
            "== only works with numbers; === works with all types",
            "They behave identically in all situations"
          ],
          "correct": 1,
          "explanation": "=== is strict equality — it returns true only when both the value and the type are identical. == is loose equality — it coerces types before comparing, so 0 == false is true and \"\" == false is true. Using === everywhere prevents entire categories of subtle bugs caused by unexpected coercion."
        },
        {
          "id": "js-m2-l3-q2",
          "question": "What does Number(\"hello\") return in JavaScript?",
          "options": [
            "0",
            "null",
            "undefined",
            "NaN"
          ],
          "correct": 3,
          "explanation": "When Number() cannot parse its argument as a valid number, it returns NaN (Not a Number). NaN is a special number value that propagates through calculations — any arithmetic involving NaN produces NaN. To check for NaN, use Number.isNaN(value), not value === NaN (which always returns false)."
        },
        {
          "id": "js-m2-l3-q3",
          "question": "Which of the following values is truthy in JavaScript?",
          "options": [
            "0",
            "\"\"",
            "null",
            "\"false\""
          ],
          "correct": 3,
          "explanation": "The string \"false\" is truthy because it is a non-empty string. JavaScript's six falsy values are: false, 0, \"\" (empty string), null, undefined, and NaN. Any value not in that list is truthy — including the string \"false\", the string \"0\", empty arrays, and empty objects."
        }
      ]
    }
  }
]
''')

# ── js-m3 — Conditions
# Lessons : js-m3-l1, js-m3-l2, js-m3-l3
# XP      : 35
javascript_m3_raw = json.loads(r'''
[
  {
    "id": "js-m3-l1",
    "moduleId": "js-m3",
    "title": "if, else if, and else",
    "order": 1,
    "xpReward": 10,
    "duration": "11 min",
    "explanation": {
      "title": "Making Decisions with if, else if, and else",
      "content": "# Conditional Statements\n\nEvery useful program makes decisions. Think of an ATM: it checks your balance before dispensing cash. If the balance is sufficient, it dispenses. Otherwise it declines. An `if` statement lets your program do the same — run a block of code only when a condition is met.\n\n## The if Statement\n\n```javascript\nconst temperature = 38;\nif (temperature > 37) {\n    console.log(\"You have a fever.\");\n}\n```\n\nTwo important syntax rules:\n1. The condition goes inside **parentheses** `()`\n2. The body goes inside **curly braces** `{}`\n\nUnlike Python, JavaScript uses braces instead of indentation to define blocks.\n\n## Adding else\n\n```javascript\nif (temperature > 37) {\n    console.log(\"You have a fever.\");\n} else {\n    console.log(\"Temperature is normal.\");\n}\n```\n\nThe `else` block runs when the `if` condition is `false`. It has no condition of its own.\n\n## Multiple Conditions with else if\n\n```javascript\nconst score = 75;\n\nif (score >= 90) {\n    console.log(\"Grade: A\");\n} else if (score >= 80) {\n    console.log(\"Grade: B\");\n} else if (score >= 70) {\n    console.log(\"Grade: C\");\n} else {\n    console.log(\"Grade: F\");\n}\n```\n\nJavaScript evaluates `else if` conditions top to bottom and executes only the first matching block. All remaining branches are skipped.\n\n## One-Line if (no braces) — Use with Caution\n\nBraces are technically optional when the body is a single statement, but omitting them is a common source of bugs. Always use braces.\n\n## Truthy and Falsy in Conditions\n\nAny value can be used as a condition — not just booleans:\n\n```javascript\nconst username = \"Rahul\";\nif (username) {\n    console.log(\"Logged in as:\", username);\n}\n// '' (empty string) would be falsy, so the block would not run\n```\n\nIn the code example below, you will see a complete grade classifier using `if`, `else if`, and `else`."
    },
    "codeExample": {
      "title": "Exam Grade Classifier",
      "language": "javascript",
      "code": "// Exam Grade Classifier\n\nconst studentName = \"Kavitha\";\nconst score       = 83;\n\nlet grade, feedback;\n\nif (score >= 90) {\n    grade    = \"A\";\n    feedback = \"Outstanding! Keep it up.\";\n} else if (score >= 80) {\n    grade    = \"B\";\n    feedback = \"Great work!\";\n} else if (score >= 70) {\n    grade    = \"C\";\n    feedback = \"Good effort, room to improve.\";\n} else if (score >= 60) {\n    grade    = \"D\";\n    feedback = \"Needs more practice.\";\n} else {\n    grade    = \"F\";\n    feedback = \"Please seek extra help.\";\n}\n\nconsole.log(`Student  : ${studentName}`);\nconsole.log(`Score    : ${score}/100`);\nconsole.log(`Grade    : ${grade}`);\nconsole.log(`Feedback : ${feedback}`);\n\n// Truthy / falsy in a condition\nconst promoCode = \"SAVE20\";\nif (promoCode) {\n    console.log(`Promo code applied: ${promoCode}`);\n}",
      "explanation": "- `let grade, feedback;` — declares two `let` variables without assigning them yet; they will be set inside the branches\n- `if (score >= 90)` — the parentheses hold the boolean condition; `>=` is greater-than-or-equal\n- `} else if (score >= 80) {` — only evaluated when `score < 90`; once a branch matches, the rest are skipped\n- `grade = \"B\";` — variables declared with `let` outside the block are still in scope inside it\n- `if (promoCode)` — a non-empty string is truthy; if `promoCode` were `\"\"` or `null`, the block would not run"
    },
    "exercise": {
      "title": "Write an Age Category Classifier",
      "instructions": "Write a program that classifies a person into an age category. Declare const age = 17. Use if/else if/else to assign a category string: under 13 is 'Child', 13 to 17 is 'Teenager', 18 to 59 is 'Adult', and 60 or above is 'Senior'. Print the age and the category on separate labelled lines.\n\nExpected output with age = 17:\nAge: 17\nCategory: Teenager",
      "starterCode": "// Age Category Classifier\n\nconst age = 17;\nlet category;\n\nif (age < 13) {\n    category = \"Child\";\n} else if (age <= 17) {\n    category = \"Teenager\";\n}\n// Add else if for Adult (18-59) and else for Senior\n\nconsole.log(\"Age:\",      age);\nconsole.log(\"Category:\", category);",
      "solutionCode": "const age = 17;\nlet category;\n\nif (age < 13) {\n    category = \"Child\";\n} else if (age <= 17) {\n    category = \"Teenager\";\n} else if (age <= 59) {\n    category = \"Adult\";\n} else {\n    category = \"Senior\";\n}\n\nconsole.log(\"Age:\",      age);\nconsole.log(\"Category:\", category);",
      "hints": [
        "💡 Add else if (age <= 59) { category = \"Adult\"; } after the Teenager branch.",
        "💡 The final category (Senior) needs only else { category = \"Senior\"; } because all lower ages are already handled.",
        "💡 Each else if only needs to check the upper bound — the lower bound is guaranteed by the previous branch having been false."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Category: Teenager",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "js-m3-l1-q1",
          "question": "How many else if branches can a single if statement have in JavaScript?",
          "options": [
            "Only one",
            "At most three",
            "At most ten",
            "As many as needed"
          ],
          "correct": 3,
          "explanation": "There is no limit on the number of else if branches. You can chain as many as your logic requires. JavaScript evaluates them top to bottom and executes the first branch whose condition is true. If none match, the optional else block runs."
        },
        {
          "id": "js-m3-l1-q2",
          "question": "What does the grade classifier print when score = 85, given: if (score >= 90) A; else if (score >= 80) B; else C?",
          "options": [
            "A",
            "B",
            "C",
            "B and C"
          ],
          "correct": 1,
          "explanation": "JavaScript evaluates conditions top to bottom and stops at the first match. score >= 90 is false (85 < 90), so it moves to else if (score >= 80). Since 85 >= 80 is true, it prints B and skips the else. Only one branch executes in an if/else if/else chain."
        }
      ]
    }
  },
  {
    "id": "js-m3-l2",
    "moduleId": "js-m3",
    "title": "Comparison and Logical Operators",
    "order": 2,
    "xpReward": 10,
    "duration": "11 min",
    "explanation": {
      "title": "Comparing Values and Combining Conditions",
      "content": "# Comparison Operators\n\nA condition inside an `if` statement evaluates to `true` or `false`. Comparison operators produce these boolean values by comparing two operands:\n\n| Operator | Meaning | Example | Result |\n|---|---|---|---|\n| `===` | Strict equal | `5 === 5` | `true` |\n| `!==` | Strict not equal | `5 !== 3` | `true` |\n| `>` | Greater than | `7 > 3` | `true` |\n| `<` | Less than | `3 < 7` | `true` |\n| `>=` | Greater or equal | `5 >= 5` | `true` |\n| `<=` | Less or equal | `4 <= 3` | `false` |\n\nAlways use `===` and `!==` (strict), not `==` and `!=` (loose), to avoid coercion surprises.\n\n## Logical Operators\n\nCombine multiple conditions with logical operators:\n\n| Operator | Meaning | Returns true when |\n|---|---|---|\n| `&&` | AND | Both operands are truthy |\n| `\\|\\|` | OR | At least one operand is truthy |\n| `!` | NOT | The operand is falsy |\n\n```javascript\nconst age   = 25;\nconst hasId = true;\n\nif (age >= 18 && hasId) {\n    console.log(\"Access granted\");\n}\n```\n\n## Short-Circuit Evaluation\n\nJavaScript evaluates `&&` and `||` lazily:\n\n- `a && b` — if `a` is falsy, `b` is never evaluated\n- `a || b` — if `a` is truthy, `b` is never evaluated\n\nThis is used idiomatically to provide default values:\n\n```javascript\nconst username = inputName || \"Guest\";  // use \"Guest\" if inputName is falsy\nconst display  = user && user.name;     // safe — only reads .name if user exists\n```\n\n## The in Operator\n\n```javascript\nconst plan = \"pro\";\nconst validPlans = [\"starter\", \"pro\", \"bundle\"];\nif (validPlans.includes(plan)) {\n    console.log(\"Valid plan.\");\n}\n```\n\nIn the code example below, you will see logical operators used to build a complete access control check."
    },
    "codeExample": {
      "title": "Subscription Access Controller",
      "language": "javascript",
      "code": "// Subscription Access Controller\n\nconst isLoggedIn     = true;\nconst plan           = \"pro\";\nconst accountActive  = true;\nconst trialDaysLeft  = 0;\n\n// AND: all three must be true\nconst hasFullAccess = isLoggedIn && accountActive && plan === \"pro\";\n\n// OR: either trial or paid plan provides access\nconst hasAnyAccess  = hasFullAccess || trialDaysLeft > 0;\n\n// NOT: flip a boolean\nconst isBlocked     = !accountActive;\n\nconsole.log(\"Full access :\", hasFullAccess);  // true\nconsole.log(\"Any access  :\", hasAnyAccess);   // true\nconsole.log(\"Blocked     :\", isBlocked);      // false\n\n// Short-circuit default value\nconst displayName = \"\" || \"Guest User\"; // empty string is falsy\nconsole.log(\"Display     :\", displayName); // \"Guest User\"\n\n// Logical operators in if conditions\nif (isLoggedIn && plan !== \"free\") {\n    console.log(\"Premium features unlocked.\");\n}\n\nif (!isLoggedIn || !accountActive) {\n    console.log(\"Please log in or reactivate your account.\");\n}",
      "explanation": "- `isLoggedIn && accountActive && plan === \"pro\"` — all three conditions must be truthy for `hasFullAccess` to be `true`\n- `hasFullAccess || trialDaysLeft > 0` — `true` if either condition is met; `||` stops at the first truthy value\n- `!accountActive` — the `!` operator flips `true` to `false` and vice versa\n- `\"\" || \"Guest User\"` — short-circuit default: the empty string is falsy so JavaScript evaluates and returns the right side\n- `plan !== \"free\"` — strict not-equal; true for any plan string that is not exactly `\"free\"`"
    },
    "exercise": {
      "title": "Build a Loan Eligibility Checker",
      "instructions": "Write a program that checks loan eligibility using three variables: age (number), monthlyIncome (number), and hasExistingLoan (boolean). The criteria are: age must be between 21 and 60 inclusive, monthlyIncome must be at least 25000, and hasExistingLoan must be false. Print 'Eligible' if all criteria pass, otherwise print 'Not eligible'.\n\nTest values: age=30, monthlyIncome=35000, hasExistingLoan=false.\nExpected output: Eligible",
      "starterCode": "// Loan Eligibility Checker\n\nconst age              = 30;\nconst monthlyIncome    = 35000;\nconst hasExistingLoan  = false;\n\n// Check all three criteria with &&\nif (age >= 21 && age <= 60 && monthlyIncome >= 25000 && !hasExistingLoan) {\n    console.log(\"Eligible\");\n} else {\n    console.log(\"Not eligible\");\n}",
      "solutionCode": "const age             = 30;\nconst monthlyIncome   = 35000;\nconst hasExistingLoan = false;\n\nif (age >= 21 && age <= 60 && monthlyIncome >= 25000 && !hasExistingLoan) {\n    console.log(\"Eligible\");\n} else {\n    console.log(\"Not eligible\");\n}",
      "hints": [
        "💡 Use && to combine all conditions: age range, income threshold, and no existing loan.",
        "💡 Check the age range with age >= 21 && age <= 60 — both bounds must hold simultaneously.",
        "💡 Use !hasExistingLoan instead of hasExistingLoan === false — both work, but ! is more concise."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Eligible",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "js-m3-l2-q1",
          "question": "What does the && operator return when the left operand is falsy?",
          "options": [
            "true",
            "The left operand without evaluating the right",
            "false",
            "undefined"
          ],
          "correct": 1,
          "explanation": "JavaScript's && operator uses short-circuit evaluation. If the left operand is falsy, JavaScript immediately returns that falsy value without evaluating the right operand at all. For example, null && someFunction() returns null and someFunction is never called. This is why && is used as a safe property access guard."
        },
        {
          "id": "js-m3-l2-q2",
          "question": "What is the value of the expression: const name = '' || 'Anonymous'?",
          "options": [
            "''",
            "true",
            "'Anonymous'",
            "null"
          ],
          "correct": 2,
          "explanation": "The || operator returns the first truthy value it encounters, or the last value if none are truthy. An empty string '' is falsy, so JavaScript evaluates the right side and returns 'Anonymous'. This pattern is the standard JavaScript way to provide a default value when a variable might be falsy."
        }
      ]
    }
  },
  {
    "id": "js-m3-l3",
    "moduleId": "js-m3",
    "title": "Ternary Operator and switch",
    "order": 3,
    "xpReward": 15,
    "duration": "12 min",
    "explanation": {
      "title": "Concise Decisions with the Ternary Operator and switch",
      "content": "# The Ternary Operator\n\nThe ternary operator is JavaScript's one-line `if/else`. Its syntax is:\n\n```\ncondition ? valueIfTrue : valueIfFalse\n```\n\nIt is an **expression** — it produces a value, so you can use it anywhere a value is expected:\n\n```javascript\nconst age    = 20;\nconst status = age >= 18 ? \"Adult\" : \"Minor\";\nconsole.log(status); // \"Adult\"\n```\n\nCompared to `if/else`:\n\n```javascript\n// if/else version — 5 lines\nlet status;\nif (age >= 18) {\n    status = \"Adult\";\n} else {\n    status = \"Minor\";\n}\n\n// ternary — 1 line, same result\nconst status = age >= 18 ? \"Adult\" : \"Minor\";\n```\n\nUse ternary for simple two-outcome assignments. For complex logic, stick with `if/else if/else`.\n\n## The switch Statement\n\n`switch` compares one expression against a fixed list of values. It is cleaner than a long `if/else if` chain when you are matching a single variable against many specific values:\n\n```javascript\nconst day = \"Wednesday\";\n\nswitch (day) {\n    case \"Monday\":\n    case \"Tuesday\":\n    case \"Wednesday\":\n        console.log(\"Early week\");\n        break;\n    case \"Thursday\":\n    case \"Friday\":\n        console.log(\"Late week\");\n        break;\n    default:\n        console.log(\"Weekend\");\n}\n```\n\n### Important: the break keyword\n\nWithout `break`, execution **falls through** to the next case and runs it too. Always end each case with `break` (or `return` inside a function) unless you intentionally want fall-through.\n\n## Nullish Coalescing Operator ??\n\n```javascript\nconst input   = null;\nconst display = input ?? \"No value provided\";\n```\n\n`??` is similar to `||` but only falls back when the left side is `null` or `undefined` — not when it is `0` or `\"\"`. This makes it safer for optional fields that might legitimately be zero.\n\nIn the code example below, you will see the ternary operator, a `switch` statement, and `??` used in a plan feature checker."
    },
    "codeExample": {
      "title": "Plan Feature Checker",
      "language": "javascript",
      "code": "// Plan Feature Checker — ternary, switch, and ??\n\nconst userPlan   = \"pro\";\nconst userScore  = 87;\nconst nickname   = null;\n\n// Ternary — simple two-outcome\nconst accessLevel = userPlan === \"bundle\" ? \"Full\" : \"Limited\";\nconsole.log(`Access: ${accessLevel}`);\n\n// Ternary for inline grade display\nconst grade = userScore >= 90 ? \"A\" : userScore >= 80 ? \"B\" : \"C\";\nconsole.log(`Grade: ${grade}`);\n\n// switch — match plan to feature list\nswitch (userPlan) {\n    case \"bundle\":\n        console.log(\"Features: all 4 languages + AI mentor + offline\");\n        break;\n    case \"pro\":\n        console.log(\"Features: 2 languages + AI mentor\");\n        break;\n    case \"starter\":\n        console.log(\"Features: 1 language\");\n        break;\n    default:\n        console.log(\"Features: Python only (free tier)\");\n}\n\n// ?? — nullish coalescing\nconst displayName = nickname ?? \"CodeGuru Learner\";\nconsole.log(`Hello, ${displayName}!`);",
      "explanation": "- `userPlan === \"bundle\" ? \"Full\" : \"Limited\"` — evaluates the condition, returns `\"Full\"` when true, `\"Limited\"` when false\n- `userScore >= 90 ? \"A\" : userScore >= 80 ? \"B\" : \"C\"` — a chained ternary; equivalent to nested `if/else if/else`\n- `switch (userPlan)` — evaluates `userPlan` once and jumps to the matching `case` label\n- `break` — required to exit the `switch` block; without it execution falls into the next case\n- `nickname ?? \"CodeGuru Learner\"` — `??` returns the right side only when `nickname` is `null` or `undefined`"
    },
    "exercise": {
      "title": "Build a Day Type Classifier with switch",
      "instructions": "Write a program using a switch statement that classifies a day number (1=Mon through 7=Sun) into a type. Cases 1 and 2 should print 'Start of week', cases 3 and 4 print 'Mid week', case 5 prints 'End of week', and default (6 or 7) prints 'Weekend'. Then use a ternary to set isWorkday as true if dayNumber is 1-5, else false. Print the day number, day type, and isWorkday.\n\nTest with dayNumber = 3. Expected output:\nDay: 3\nType: Mid week\nWork day: true",
      "starterCode": "// Day Type Classifier\n\nconst dayNumber = 3;\nlet dayType;\n\nswitch (dayNumber) {\n    case 1:\n    case 2:\n        dayType = \"Start of week\";\n        break;\n    case 3:\n    case 4:\n        dayType = \"Mid week\";\n        break;\n    // Add case 5 and default here\n}\n\n// Ternary: isWorkday is true if dayNumber <= 5\nconst isWorkday = dayNumber <= 5 ? true : false;\n\nconsole.log(\"Day:\",      dayNumber);\nconsole.log(\"Type:\",     dayType);\nconsole.log(\"Work day:\", isWorkday);",
      "solutionCode": "const dayNumber = 3;\nlet dayType;\n\nswitch (dayNumber) {\n    case 1:\n    case 2:\n        dayType = \"Start of week\";\n        break;\n    case 3:\n    case 4:\n        dayType = \"Mid week\";\n        break;\n    case 5:\n        dayType = \"End of week\";\n        break;\n    default:\n        dayType = \"Weekend\";\n}\n\nconst isWorkday = dayNumber <= 5 ? true : false;\n\nconsole.log(\"Day:\",      dayNumber);\nconsole.log(\"Type:\",     dayType);\nconsole.log(\"Work day:\", isWorkday);",
      "hints": [
        "💡 Add case 5: dayType = \"End of week\"; break; after the Mid week block.",
        "💡 Add default: dayType = \"Weekend\"; after case 5 — no break needed on the last case.",
        "💡 The ternary is already written — it assigns true when dayNumber <= 5, otherwise false."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Type: Mid week",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "js-m3-l3-q1",
          "question": "What happens in a switch statement if you forget to add break at the end of a case?",
          "options": [
            "The program throws a SyntaxError",
            "Only the matching case runs",
            "Execution falls through and runs the next case's code too",
            "The switch statement exits immediately"
          ],
          "correct": 2,
          "explanation": "Without break, a switch statement falls through — after running the matched case's code, execution continues into the next case regardless of whether its label matches. This is occasionally useful (grouping multiple cases to share code), but usually a bug. Always add break unless fall-through is intentional."
        },
        {
          "id": "js-m3-l3-q2",
          "question": "What is the difference between || and ?? for providing a default value?",
          "options": [
            "They are completely identical in all situations",
            "|| falls back when left is any falsy value; ?? falls back only when left is null or undefined",
            "?? falls back when left is any falsy value; || only for null or undefined",
            "|| works with strings; ?? works only with numbers"
          ],
          "correct": 1,
          "explanation": "|| falls back when the left side is any falsy value (false, 0, '', null, undefined, NaN). ?? (nullish coalescing) only falls back when the left side is null or undefined. This distinction matters when 0 or '' are valid values: count || 10 replaces a count of 0, but count ?? 10 keeps the 0 as intended."
        }
      ]
    }
  }
]
''')

# ── js-m4 — Loops
# Lessons : js-m4-l1, js-m4-l2, js-m4-l3
# XP      : 35
javascript_m4_raw = json.loads(r'''
[
  {
    "id": "js-m4-l1",
    "moduleId": "js-m4",
    "title": "for Loops",
    "order": 1,
    "xpReward": 10,
    "duration": "12 min",
    "explanation": {
      "title": "Repeating Actions with the for Loop",
      "content": "# The for Loop\n\nImagine a cashier scanning 50 items at a checkout. Instead of writing 50 separate lines of code, you write the scanning logic once and tell JavaScript to repeat it 50 times. That is exactly what a loop does.\n\nThe `for` loop is the most common loop in JavaScript. It repeats a block of code a fixed number of times:\n\n```javascript\nfor (let i = 0; i < 5; i++) {\n    console.log(i);\n}\n// Prints: 0 1 2 3 4\n```\n\nThe header has three parts separated by semicolons:\n1. **Initialisation** `let i = 0` — runs once before the loop starts\n2. **Condition** `i < 5` — checked before every iteration; loop stops when false\n3. **Update** `i++` — runs after every iteration\n\n## Iterating Over an Array\n\nThe most common use of a `for` loop is processing every element of an array:\n\n```javascript\nconst scores = [85, 92, 78, 95];\n\nfor (let i = 0; i < scores.length; i++) {\n    console.log(`Score ${i + 1}: ${scores[i]}`);\n}\n```\n\n`scores.length` gives the count of elements. Using it as the condition means the loop works for any size array.\n\n## The for...of Loop — Modern and Clean\n\nWhen you need each element but not its index, `for...of` is cleaner:\n\n```javascript\nconst fruits = [\"apple\", \"banana\", \"mango\"];\n\nfor (const fruit of fruits) {\n    console.log(fruit);  // apple, banana, mango\n}\n```\n\n`for...of` works with any iterable: arrays, strings, Sets, Maps.\n\n## Accumulating Results in a Loop\n\n```javascript\nconst prices = [100, 250, 80, 430];\nlet total = 0;\n\nfor (const price of prices) {\n    total += price;\n}\nconsole.log(\"Total:\", total); // 860\n```\n\nInitialise the accumulator to a neutral value (`0` for sums, `1` for products, `[]` for collecting items) before the loop.\n\nIn the code example below, you will see both loop styles applied to compute a student ranking table."
    },
    "codeExample": {
      "title": "Student Ranking Table",
      "language": "javascript",
      "code": "// Student Ranking Table\n\nconst students = [\n    { name: \"Rahul\",  score: 88 },\n    { name: \"Priya\",  score: 95 },\n    { name: \"Amit\",   score: 72 },\n    { name: \"Sneha\",  score: 91 },\n    { name: \"Vikram\", score: 67 },\n];\n\n// --- Classic for loop with index ---\nconsole.log(\"=== Ranked Table ===\");\nfor (let i = 0; i < students.length; i++) {\n    const s     = students[i];\n    const grade = s.score >= 90 ? \"A\" : s.score >= 75 ? \"B\" : \"C\";\n    console.log(`${i + 1}. ${s.name.padEnd(8)} ${s.score}  ${grade}`);\n}\n\n// --- for...of to accumulate total ---\nlet total = 0;\nfor (const s of students) {\n    total += s.score;\n}\nconst average = (total / students.length).toFixed(1);\nconsole.log(`\\nClass average: ${average}`);\n\n// --- for...of to find the highest scorer ---\nlet topStudent = students[0];\nfor (const s of students) {\n    if (s.score > topStudent.score) {\n        topStudent = s;\n    }\n}\nconsole.log(`Top scorer: ${topStudent.name} (${topStudent.score})`);",
      "explanation": "- `for (let i = 0; i < students.length; i++)` — `let i` starts at 0; the loop runs while `i` is less than the array length\n- `students[i]` — array access by index; `i` goes 0, 1, 2... matching each element in order\n- `s.score >= 90 ? \"A\" : s.score >= 75 ? \"B\" : \"C\"` — a chained ternary assigning a grade inline\n- `s.name.padEnd(8)` — pads the name to 8 characters so all columns align neatly\n- `for (const s of students)` — iterates over objects directly; `s` is each student object in turn\n- `topStudent = s` — updates the reference when a higher score is found"
    },
    "exercise": {
      "title": "Compute Sum and Count of Even Numbers",
      "instructions": "Given the array numbers = [3, 8, 15, 4, 22, 7, 10, 1, 6], use a for...of loop to compute two things: the sum of all numbers in the array, and a count of how many numbers are even (divisible by 2 with no remainder). Print the total sum and the even count on separate labelled lines.\n\nExpected output:\nSum: 76\nEven count: 5",
      "starterCode": "// Sum and Even Counter\n\nconst numbers = [3, 8, 15, 4, 22, 7, 10, 1, 6];\n\nlet sum       = 0;\nlet evenCount = 0;\n\nfor (const num of numbers) {\n    sum += num;\n    // Check if num is even and increment evenCount\n    // Your code here\n}\n\nconsole.log(\"Sum:\",        sum);\nconsole.log(\"Even count:\", evenCount);",
      "solutionCode": "const numbers = [3, 8, 15, 4, 22, 7, 10, 1, 6];\n\nlet sum       = 0;\nlet evenCount = 0;\n\nfor (const num of numbers) {\n    sum += num;\n    if (num % 2 === 0) {\n        evenCount++;\n    }\n}\n\nconsole.log(\"Sum:\",        sum);\nconsole.log(\"Even count:\", evenCount);",
      "hints": [
        "💡 A number is even if num % 2 === 0 — the modulo operator gives the remainder.",
        "💡 Inside the loop, add if (num % 2 === 0) { evenCount++; } after the sum line.",
        "💡 evenCount++ increments the counter by 1 each time an even number is found."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Sum: 76",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "Even count: 5",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "js-m4-l1-q1",
          "question": "What are the three parts of a for loop header separated by semicolons?",
          "options": [
            "condition; body; update",
            "initialisation; condition; update",
            "variable; limit; step",
            "start; stop; increment"
          ],
          "correct": 1,
          "explanation": "A for loop header is: for (initialisation; condition; update). Initialisation runs once before the loop starts. The condition is checked before every iteration — the loop stops when it is false. The update runs after each iteration. For example: for (let i = 0; i < 10; i++)."
        },
        {
          "id": "js-m4-l1-q2",
          "question": "When is for...of preferred over a classic indexed for loop?",
          "options": [
            "When you need the index of each element",
            "When you only need the value of each element and do not need its index",
            "Only when the array contains strings",
            "for...of is always slower and should be avoided"
          ],
          "correct": 1,
          "explanation": "for...of is preferred when you only need each element's value and do not need to know its position. The syntax is cleaner and less error-prone. Use a classic for loop when you need the index (to access a parallel array, build a numbered list, or modify elements in place)."
        }
      ]
    }
  },
  {
    "id": "js-m4-l2",
    "moduleId": "js-m4",
    "title": "while and do...while Loops",
    "order": 2,
    "xpReward": 10,
    "duration": "11 min",
    "explanation": {
      "title": "Repeating Until a Condition Changes with while Loops",
      "content": "# while Loops\n\nA `for` loop is ideal when you know the number of iterations in advance. A `while` loop is better when you repeat until something changes and you do not know how many iterations that will take.\n\n```javascript\nwhile (condition) {\n    // runs as long as condition is true\n}\n```\n\nThe condition is checked **before** every iteration. If it is `false` from the start, the body never runs.\n\n```javascript\nlet count = 1;\nwhile (count <= 5) {\n    console.log(count);\n    count++;            // must change the condition eventually!\n}\n```\n\n## Danger: the Infinite Loop\n\nIf you forget to update the variable that controls the condition, the loop runs forever:\n\n```javascript\n// DANGEROUS — count never changes\nwhile (count <= 5) {\n    console.log(count); // runs forever\n}\n```\n\nAlways ensure the loop body contains something that eventually makes the condition `false`.\n\n## The do...while Loop\n\n`do...while` is like `while` but checks the condition **after** the body runs. This guarantees the body runs at least once:\n\n```javascript\nlet n = 10;\ndo {\n    console.log(n);\n    n++;\n} while (n < 5);  // condition is already false, but body ran once\n```\n\nUse `do...while` when you need to run the body before deciding whether to repeat.\n\n## break and continue\n\n```javascript\nfor (let i = 0; i < 10; i++) {\n    if (i === 3) continue;  // skip 3\n    if (i === 7) break;     // stop at 7\n    console.log(i);         // 0 1 2 4 5 6\n}\n```\n\n- `break` — exits the loop immediately\n- `continue` — skips the rest of the current iteration and moves to the next\n\nBoth work in `for`, `for...of`, and `while` loops.\n\nIn the code example below, you will see a `while` loop simulate a bank withdrawal session and `continue` skip invalid entries."
    },
    "codeExample": {
      "title": "Bank Withdrawal Session",
      "language": "javascript",
      "code": "// Bank Withdrawal Session — while loop\n\nlet balance    = 5000;\nconst requests = [500, 1200, 3000, 200]; // predefined (no prompt())\nlet idx        = 0;\n\nconsole.log(`Opening session. Balance: ₹${balance}`);\n\nwhile (idx < requests.length && balance > 0) {\n    const requested = requests[idx];\n    idx++;\n\n    if (requested <= 0) {\n        console.log(\"Invalid amount — skipped.\");\n        continue;         // skip to next iteration\n    }\n\n    if (requested > balance) {\n        console.log(`₹${requested} declined — insufficient funds.`);\n        continue;\n    }\n\n    balance -= requested;\n    console.log(`Withdrew ₹${requested} | Remaining: ₹${balance}`);\n\n    if (balance === 0) {\n        console.log(\"Balance zero. Session ending.\");\n        break;            // exit the loop early\n    }\n}\n\nconsole.log(`\\nSession closed. Final balance: ₹${balance}`);",
      "explanation": "- `while (idx < requests.length && balance > 0)` — two conditions joined with `&&`; either becoming false stops the loop\n- `idx++` — advances through the requests array on every iteration; prevents an infinite loop\n- `continue` — skips the remaining body for this iteration (the declined or invalid case) and evaluates the while condition again\n- `break` — exits the while loop immediately when the balance reaches zero\n- `balance -= requested` — shorthand for `balance = balance - requested`"
    },
    "exercise": {
      "title": "Simulate a Number Guessing Game",
      "instructions": "Simulate a number guessing game with a while loop. The secret number is 42. The guesses are stored in the array guesses = [15, 80, 42]. Loop through guesses using an index variable. Print 'Too low' for guesses below 42, 'Too high' for guesses above 42, and 'Correct in X attempt(s)!' when the guess equals 42, then break. Count attempts on every iteration.\n\nExpected output:\nGuess 15: Too low\nGuess 80: Too high\nGuess 42: Correct in 3 attempt(s)!",
      "starterCode": "// Number Guessing Game\n\nconst secret   = 42;\nconst guesses  = [15, 80, 42];\nlet idx        = 0;\nlet attempts   = 0;\n\nwhile (idx < guesses.length) {\n    const guess = guesses[idx];\n    idx++;\n    attempts++;\n\n    if (guess < secret) {\n        console.log(`Guess ${guess}: Too low`);\n    } else if (guess > secret) {\n        console.log(`Guess ${guess}: Too high`);\n    } else {\n        console.log(`Guess ${guess}: Correct in ${attempts} attempt(s)!`);\n        break;\n    }\n}",
      "solutionCode": "const secret  = 42;\nconst guesses = [15, 80, 42];\nlet idx       = 0;\nlet attempts  = 0;\n\nwhile (idx < guesses.length) {\n    const guess = guesses[idx];\n    idx++;\n    attempts++;\n\n    if (guess < secret) {\n        console.log(`Guess ${guess}: Too low`);\n    } else if (guess > secret) {\n        console.log(`Guess ${guess}: Too high`);\n    } else {\n        console.log(`Guess ${guess}: Correct in ${attempts} attempt(s)!`);\n        break;\n    }\n}",
      "hints": [
        "💡 The starter code is the complete solution — run it and observe the output.",
        "💡 attempts++ increments on every iteration, tracking how many guesses were made.",
        "💡 break exits the loop after the correct guess is found so no further guesses are processed."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Correct in 3 attempt(s)!",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "js-m4-l2-q1",
          "question": "What is the key difference between while and do...while?",
          "options": [
            "while can loop infinitely; do...while cannot",
            "while checks the condition before each iteration; do...while checks after, so the body runs at least once",
            "do...while is faster than while",
            "while only works with numbers; do...while works with any type"
          ],
          "correct": 1,
          "explanation": "while checks the condition before the body runs — if the condition is false initially, the body never executes. do...while runs the body first and then checks the condition — so the body always runs at least once. Use do...while when you need at least one execution before checking whether to repeat."
        },
        {
          "id": "js-m4-l2-q2",
          "question": "What does the continue statement do inside a loop?",
          "options": [
            "Exits the entire loop",
            "Restarts the loop from the beginning",
            "Skips the rest of the current iteration and moves to the next one",
            "Pauses the loop for one iteration"
          ],
          "correct": 2,
          "explanation": "continue skips all remaining statements in the current iteration's body and jumps to the update step (in a for loop) or the condition check (in a while loop) for the next iteration. break, by contrast, exits the loop entirely. Neither restarts the loop from the first iteration."
        }
      ]
    }
  },
  {
    "id": "js-m4-l3",
    "moduleId": "js-m4",
    "title": "Array Methods: forEach, map, filter",
    "order": 3,
    "xpReward": 15,
    "duration": "13 min",
    "explanation": {
      "title": "Processing Arrays with forEach, map, and filter",
      "content": "# Functional Array Methods\n\nJavaScript arrays have built-in methods that accept a **callback function** and apply it to every element. These methods replace many common loop patterns with one clean, expressive line.\n\n## forEach — run a function on every element\n\n`forEach` iterates over the array and calls the callback for each element. It does not return a new array:\n\n```javascript\nconst names = [\"Rahul\", \"Priya\", \"Amit\"];\nnames.forEach((name, index) => {\n    console.log(`${index + 1}. ${name}`);\n});\n```\n\nUse `forEach` when you want to **do something** with each element (print it, send it, save it) but do not need a new array.\n\n## map — transform every element into something new\n\n`map` creates a **new array** by applying a transformation to each element. The original is unchanged:\n\n```javascript\nconst prices    = [100, 200, 300];\nconst withGST   = prices.map(p => p * 1.18);\n// [118, 236, 354]  — original prices unchanged\n```\n\nThe callback receives the element and returns the transformed value.\n\n## filter — keep only elements that pass a test\n\n`filter` creates a **new array** containing only the elements for which the callback returns `true`:\n\n```javascript\nconst scores  = [85, 42, 92, 37, 78];\nconst passing = scores.filter(s => s >= 60);\n// [85, 92, 78]  — only scores >= 60\n```\n\n## Chaining Methods\n\nBecause `map` and `filter` both return new arrays, you can chain them:\n\n```javascript\nconst result = scores\n    .filter(s => s >= 60)     // keep passing scores\n    .map(s => s + \" ✓\");      // add a tick mark to each\n```\n\n## Arrow Functions — the compact callback syntax\n\n```javascript\n// These two are equivalent:\nprices.map(function(p) { return p * 1.18; });\nprices.map(p => p * 1.18);   // arrow function — shorter\n```\n\nArrow functions with a single expression can omit the braces and the `return` keyword — the expression value is returned automatically.\n\nIn the code example below, you will see `forEach`, `map`, and `filter` applied to a product catalogue."
    },
    "codeExample": {
      "title": "Product Catalogue Processor",
      "language": "javascript",
      "code": "// Product Catalogue Processor\n\nconst products = [\n    { name: \"Laptop\",    price: 45000, inStock: true  },\n    { name: \"Earbuds\",   price:  2000, inStock: true  },\n    { name: \"Tablet\",    price: 25000, inStock: false },\n    { name: \"Keyboard\",  price:  3500, inStock: true  },\n    { name: \"Monitor\",   price: 18000, inStock: false },\n];\n\n// forEach — print all products\nconsole.log(\"=== All Products ===\");\nproducts.forEach((p, i) => {\n    const status = p.inStock ? \"✓\" : \"✗\";\n    console.log(`${i + 1}. ${p.name.padEnd(10)} ₹${p.price}  ${status}`);\n});\n\n// filter — only in-stock products\nconst available = products.filter(p => p.inStock);\nconsole.log(`\\nIn stock: ${available.length} of ${products.length}`);\n\n// map — apply 10% discount to all prices\nconst discounted = products.map(p => ({\n    ...p,\n    price: Math.round(p.price * 0.90),\n}));\nconsole.log(`\\n=== After 10% Discount ===`);\ndiscounted.forEach(p => console.log(`${p.name}: ₹${p.price}`));\n\n// chain: in-stock products under ₹10,000\nconst affordable = products\n    .filter(p => p.inStock && p.price < 10000)\n    .map(p => p.name);\nconsole.log(`\\nAffordable in-stock: ${affordable.join(\", \")}`);",
      "explanation": "- `forEach((p, i) => { ... })` — the callback receives each product `p` and its index `i`\n- `filter(p => p.inStock)` — keeps only products where `inStock` is `true`\n- `map(p => ({ ...p, price: ... }))` — creates a new object for each product; `...p` copies all existing fields and `price:` overrides just the price\n- `Math.round(p.price * 0.90)` — applies a 10% discount and rounds to the nearest rupee\n- `.filter(...).map(p => p.name)` — method chaining; `filter` returns a new array that `map` immediately processes"
    },
    "exercise": {
      "title": "Filter and Transform a Scores List",
      "instructions": "Given the array scores = [55, 82, 90, 45, 73, 88, 38, 91], use array methods to: (1) use filter to create a passing array of scores >= 60, (2) use map on the passing array to add 5 bonus points to every score, (3) use forEach to print each boosted score. Print the count of passing students and each boosted score.\n\nExpected output:\nPassing: 5 students\n87 87 95 78 93 96",
      "starterCode": "// Scores Filter and Transform\n\nconst scores = [55, 82, 90, 45, 73, 88, 38, 91];\n\n// Step 1 — filter: keep scores >= 60\nconst passing = scores.filter(s => s >= 60);\nconsole.log(`Passing: ${passing.length} students`);\n\n// Step 2 — map: add 5 bonus points to each passing score\nconst boosted = passing.map(s => s + 5);\n\n// Step 3 — forEach: print each boosted score\n// Your code here",
      "solutionCode": "const scores = [55, 82, 90, 45, 73, 88, 38, 91];\n\nconst passing = scores.filter(s => s >= 60);\nconsole.log(`Passing: ${passing.length} students`);\n\nconst boosted = passing.map(s => s + 5);\n\nboosted.forEach(s => process.stdout.write(s + \" \"));\nconsole.log();",
      "hints": [
        "💡 Use boosted.forEach(s => console.log(s)); to print each boosted score on a new line.",
        "💡 Alternatively, print all on one line: boosted.forEach(s => process.stdout.write(s + ' ')); then console.log();",
        "💡 The filter and map steps are already complete — you only need to add the forEach for the print step."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Passing: 5 students",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "js-m4-l3-q1",
          "question": "What does the map() method return?",
          "options": [
            "The original array modified in place",
            "undefined — it only iterates",
            "A new array with each element transformed by the callback",
            "A single accumulated value"
          ],
          "correct": 2,
          "explanation": "map() always returns a new array of exactly the same length as the original, with each element replaced by the value returned from the callback. The original array is never modified. If you want to change the original, reassign the variable: arr = arr.map(...)."
        },
        {
          "id": "js-m4-l3-q2",
          "question": "What is the key difference between forEach and map?",
          "options": [
            "forEach is faster; map is for large arrays",
            "forEach returns a new array; map returns undefined",
            "forEach runs the callback for side effects and returns undefined; map collects return values into a new array",
            "They are identical and interchangeable"
          ],
          "correct": 2,
          "explanation": "forEach executes the callback for its side effects (logging, sending data) and always returns undefined — it never builds a new array. map executes the callback and collects each return value into a new array. Use forEach when you do not need the results; use map when you need a transformed array."
        }
      ]
    }
  }
]
''')

# ── js-m5 — Functions / Methods
# Lessons : js-m5-l1, js-m5-l2, js-m5-l3
# XP      : 35
javascript_m5_raw = json.loads(r'''
[
  {
    "id": "js-m5-l1",
    "moduleId": "js-m5",
    "title": "Defining and Calling Functions",
    "order": 1,
    "xpReward": 10,
    "duration": "12 min",
    "explanation": {
      "title": "Creating Reusable Blocks of Code with Functions",
      "content": "# Functions\n\nImagine a coffee machine. You press one button and a complex sequence of steps — heat water, grind beans, extract espresso — happens automatically. You do not need to understand or repeat all those steps every time you want coffee. A **function** works the same way: you write a set of instructions once, give them a name, and call that name whenever you need those instructions executed.\n\n## Function Declaration\n\n```javascript\nfunction greet(name) {\n    console.log(`Hello, ${name}!`);\n}\n\ngreet(\"Rahul\");  // Hello, Rahul!\ngreet(\"Priya\");  // Hello, Priya!\n```\n\nThe keyword `function` starts the declaration. Inside the parentheses are **parameters** — placeholder names for the values the function will receive. The body is the block inside `{}`.\n\n## Parameters and Arguments\n\n- **Parameter** — the name listed in the function definition (`name` above)\n- **Argument** — the actual value passed when calling the function (`\"Rahul\"` above)\n\n## Returning a Value\n\nA function that only `console.log()` is fine for output, but often you want the function to **compute** a result and send it back:\n\n```javascript\nfunction add(a, b) {\n    return a + b;       // sends the value back to the caller\n}\n\nconst sum = add(10, 5);  // sum = 15\nconsole.log(sum);\n```\n\nA function without a `return` statement automatically returns `undefined`.\n\n## Function Expressions\n\nIn JavaScript, functions are values. You can store them in variables:\n\n```javascript\nconst multiply = function(a, b) {\n    return a * b;\n};\n\nconsole.log(multiply(4, 5));  // 20\n```\n\n## Hoisting\n\nFunction **declarations** are hoisted — JavaScript moves them to the top of their scope, so you can call them before the line where they are defined. Function **expressions** are not hoisted.\n\n```javascript\nconsole.log(add(2, 3));   // 5 — works even before the declaration\n\nfunction add(a, b) {\n    return a + b;\n}\n```\n\nIn the code example below, you will see a set of pure functions that calculate invoice totals and grades."
    },
    "codeExample": {
      "title": "Invoice and Grade Functions",
      "language": "javascript",
      "code": "// Pure functions — take inputs, return outputs, no side effects\n\nfunction calculateGST(amount, rate) {\n    return amount * rate;\n}\n\nfunction calculateTotal(price, quantity, gstRate) {\n    const subtotal = price * quantity;\n    const gst      = calculateGST(subtotal, gstRate);\n    return subtotal + gst;\n}\n\nfunction assignGrade(score) {\n    if      (score >= 90) return \"A\";\n    else if (score >= 80) return \"B\";\n    else if (score >= 70) return \"C\";\n    else if (score >= 60) return \"D\";\n    else                  return \"F\";\n}\n\nfunction formatCurrency(amount) {\n    return `₹${amount.toFixed(2)}`;\n}\n\n// Use the functions\nconst total = calculateTotal(1500, 3, 0.18);\nconsole.log(\"Total (with GST):\", formatCurrency(total));\n\nconst examScores = [88, 95, 72, 55, 91];\nconsole.log(\"\\n--- Grades ---\");\nexamScores.forEach((score, i) => {\n    console.log(`Student ${i + 1}: ${score} → ${assignGrade(score)}`);\n});",
      "explanation": "- `function calculateGST(amount, rate)` — a pure function; given the same inputs, it always returns the same output\n- `return amount * rate` — sends the computed value back; execution ends here inside the function\n- `calculateGST(subtotal, gstRate)` — calling one function from inside another; the return value is used directly\n- `formatCurrency(amount)` — uses a template literal and `.toFixed(2)` to format numbers as currency strings\n- `.forEach((score, i) => { ... })` — passes a function as a callback; `i` is the index starting from 0"
    },
    "exercise": {
      "title": "Write a Temperature Converter with Functions",
      "instructions": "Write two functions: celsiusToFahrenheit(c) that returns (c * 9/5) + 32, and fahrenheitToCelsius(f) that returns (f - 32) * 5/9. Call each with a test value, round each result to one decimal place using toFixed(1), and print the conversions on separate lines.\n\nTest: celsiusToFahrenheit(100) should be 212.0, fahrenheitToCelsius(98.6) should be 37.0.\n\nExpected output:\n100C = 212.0F\n98.6F = 37.0C",
      "starterCode": "// Temperature Converter Functions\n\nfunction celsiusToFahrenheit(c) {\n    // Return (c * 9/5) + 32\n    // Your code here\n}\n\nfunction fahrenheitToCelsius(f) {\n    // Return (f - 32) * 5/9\n    // Your code here\n}\n\nconst fResult = celsiusToFahrenheit(100);\nconst cResult = fahrenheitToCelsius(98.6);\n\nconsole.log(`100C = ${fResult.toFixed(1)}F`);\nconsole.log(`98.6F = ${cResult.toFixed(1)}C`);",
      "solutionCode": "function celsiusToFahrenheit(c) {\n    return (c * 9 / 5) + 32;\n}\n\nfunction fahrenheitToCelsius(f) {\n    return (f - 32) * 5 / 9;\n}\n\nconst fResult = celsiusToFahrenheit(100);\nconst cResult = fahrenheitToCelsius(98.6);\n\nconsole.log(`100C = ${fResult.toFixed(1)}F`);\nconsole.log(`98.6F = ${cResult.toFixed(1)}C`);",
      "hints": [
        "💡 Add return (c * 9 / 5) + 32; as the single line inside celsiusToFahrenheit.",
        "💡 Add return (f - 32) * 5 / 9; inside fahrenheitToCelsius — mind the parentheses.",
        "💡 .toFixed(1) is called on the number returned by each function — it formats to one decimal place."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "100C = 212.0F",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "98.6F = 37.0C",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "js-m5-l1-q1",
          "question": "What does a JavaScript function return when it has no return statement?",
          "options": [
            "0",
            "null",
            "An empty string",
            "undefined"
          ],
          "correct": 3,
          "explanation": "A function without a return statement, or one that reaches the end of the function body, automatically returns undefined. This is also true of return; with no value. If you want the function to produce a result, you must include an explicit return statement with a value."
        },
        {
          "id": "js-m5-l1-q2",
          "question": "What is the difference between a parameter and an argument?",
          "options": [
            "Parameters are for arrow functions; arguments are for regular functions",
            "A parameter is the variable in the function definition; an argument is the value passed when calling",
            "A parameter is the returned value; an argument is the function name",
            "They are two names for exactly the same thing"
          ],
          "correct": 1,
          "explanation": "A parameter is the placeholder name written in the function definition: function greet(name) — name is the parameter. An argument is the actual value you supply at the call site: greet('Rahul') — 'Rahul' is the argument. The argument's value is bound to the parameter for the duration of the function call."
        },
        {
          "id": "js-m5-l1-q3",
          "question": "What is function hoisting in JavaScript?",
          "options": [
            "Moving functions to a separate file automatically",
            "Function declarations are moved to the top of their scope, allowing calls before the definition",
            "Arrow functions can be called before they are declared",
            "JavaScript copies functions into every block where they are used"
          ],
          "correct": 1,
          "explanation": "JavaScript hoists function declarations to the top of their scope before code runs. This means you can call a function declaration before the line where it is written. Function expressions (const fn = function() {}) and arrow functions (const fn = () => {}) are not hoisted — calling them before their assignment throws a ReferenceError."
        }
      ]
    }
  },
  {
    "id": "js-m5-l2",
    "moduleId": "js-m5",
    "title": "Default Parameters and Multiple Returns",
    "order": 2,
    "xpReward": 10,
    "duration": "12 min",
    "explanation": {
      "title": "Default Parameters, Rest Arguments, and Returning Objects",
      "content": "# Default Parameters\n\nA **default parameter** gives a function a fallback value when the caller does not provide that argument:\n\n```javascript\nfunction greet(name, language = \"English\") {\n    if (language === \"Hindi\") return `Namaste, ${name}!`;\n    return `Hello, ${name}!`;\n}\n\ngreet(\"Rahul\");              // Hello, Rahul! — default used\ngreet(\"Priya\", \"Hindi\");    // Namaste, Priya! — default overridden\n```\n\nDefault parameters must come **after** required parameters.\n\n## Rest Parameters\n\nWhen you do not know how many arguments a caller will pass, use a **rest parameter** — it collects all extra arguments into an array:\n\n```javascript\nfunction sum(...numbers) {\n    return numbers.reduce((total, n) => total + n, 0);\n}\n\nconsole.log(sum(1, 2, 3));           // 6\nconsole.log(sum(10, 20, 30, 40));    // 100\n```\n\nThe `...` syntax before the last parameter name turns it into a rest parameter. Only one rest parameter is allowed and it must be last.\n\n## Returning Multiple Values\n\nJavaScript functions can return only one value — but that value can be an **object** or **array** containing multiple pieces of data:\n\n```javascript\nfunction getStats(scores) {\n    const total = scores.reduce((s, n) => s + n, 0);\n    return {\n        count:   scores.length,\n        total,                       // shorthand: total: total\n        average: total / scores.length,\n        max:     Math.max(...scores),\n        min:     Math.min(...scores),\n    };\n}\n\nconst stats = getStats([85, 92, 78, 95, 88]);\nconsole.log(stats.average);  // 87.6\n```\n\n## Destructuring Return Values\n\nYou can unpack an object return value immediately:\n\n```javascript\nconst { average, max, min } = getStats([85, 92, 78]);\nconsole.log(average, max, min);\n```\n\nIn the code example below, you will see default parameters, rest parameters, and an object return used in a statistics calculator."
    },
    "codeExample": {
      "title": "Flexible Statistics Calculator",
      "language": "javascript",
      "code": "// Flexible Statistics Calculator\n\n// Rest parameter — accepts any number of values\nfunction computeStats(...values) {\n    if (values.length === 0) return null;\n    const total   = values.reduce((sum, v) => sum + v, 0);\n    const average = total / values.length;\n    return {\n        count:   values.length,\n        total,\n        average: parseFloat(average.toFixed(2)),\n        max:     Math.max(...values),\n        min:     Math.min(...values),\n    };\n}\n\n// Default parameter — label defaults to \"Data\"\nfunction printStats(stats, label = \"Data\") {\n    console.log(`\\n=== ${label} Statistics ===`);\n    console.log(`Count   : ${stats.count}`);\n    console.log(`Total   : ${stats.total}`);\n    console.log(`Average : ${stats.average}`);\n    console.log(`Max     : ${stats.max}`);\n    console.log(`Min     : ${stats.min}`);\n}\n\n// Call with any number of values\nconst examStats = computeStats(78, 92, 85, 67, 95, 88);\nprintStats(examStats, \"Exam Scores\");\n\nconst salesStats = computeStats(15000, 22000, 18500, 9000);\nprintStats(salesStats);   // uses default label \"Data\"\n\n// Destructure the return value\nconst { average, max } = computeStats(10, 20, 30, 40, 50);\nconsole.log(`\\nQuick: avg=${average}, max=${max}`);",
      "explanation": "- `function computeStats(...values)` — rest parameter; all arguments are collected into the `values` array\n- `values.reduce((sum, v) => sum + v, 0)` — iterates the array, accumulating a running sum starting from `0`\n- `total` inside the returned object — shorthand property: when key and variable have the same name, write it once\n- `Math.max(...values)` — the spread operator `...` expands the array into individual arguments for `Math.max`\n- `function printStats(stats, label = \"Data\")` — `label` defaults to `\"Data\"` if the caller passes only one argument"
    },
    "exercise": {
      "title": "Build a Configurable Discount Function",
      "instructions": "Write a function applyDiscount(price, discountPct = 10) where discountPct defaults to 10. Return an object with: original (the price), discountAmount (price * discountPct / 100), and finalPrice (original minus discount). Call it twice and print all three properties.\n\nTest: applyDiscount(2000) → discountAmount 200, finalPrice 1800.\nTest: applyDiscount(2000, 25) → discountAmount 500, finalPrice 1500.",
      "starterCode": "// Configurable Discount Function\n\nfunction applyDiscount(price, discountPct = 10) {\n    const discountAmount = price * discountPct / 100;\n    const finalPrice     = price - discountAmount;\n    // Return an object with original, discountAmount, finalPrice\n    // Your code here\n}\n\nconst result1 = applyDiscount(2000);\nconsole.log(\"Default 10%:\",   result1.original, result1.discountAmount, result1.finalPrice);\n\nconst result2 = applyDiscount(2000, 25);\nconsole.log(\"Custom 25%:\", result2.original, result2.discountAmount, result2.finalPrice);",
      "solutionCode": "function applyDiscount(price, discountPct = 10) {\n    const discountAmount = price * discountPct / 100;\n    const finalPrice     = price - discountAmount;\n    return { original: price, discountAmount, finalPrice };\n}\n\nconst result1 = applyDiscount(2000);\nconsole.log(\"Default 10%:\", result1.original, result1.discountAmount, result1.finalPrice);\n\nconst result2 = applyDiscount(2000, 25);\nconsole.log(\"Custom 25%:\",  result2.original, result2.discountAmount, result2.finalPrice);",
      "hints": [
        "💡 Return an object literal: return { original: price, discountAmount, finalPrice };",
        "💡 discountAmount and finalPrice are already computed — just include them in the returned object.",
        "💡 The shorthand { discountAmount } is the same as { discountAmount: discountAmount } when key and variable share the same name."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "200 1800",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "js-m5-l2-q1",
          "question": "What does a rest parameter (...args) collect in a function?",
          "options": [
            "The first argument only",
            "All keyword arguments as an object",
            "All remaining positional arguments into an array",
            "Only arguments that are numbers"
          ],
          "correct": 2,
          "explanation": "A rest parameter, written as ...paramName, collects all remaining positional arguments that were not matched by earlier parameters into a real JavaScript array. For example, function f(first, ...rest) called as f(1, 2, 3, 4) gives first=1 and rest=[2, 3, 4]."
        },
        {
          "id": "js-m5-l2-q2",
          "question": "Where must default parameters appear in a function signature?",
          "options": [
            "Before all required parameters",
            "After all required parameters",
            "They can appear in any position",
            "Default parameters are not allowed in JavaScript"
          ],
          "correct": 1,
          "explanation": "Default parameters must come after all required (non-default) parameters. Placing a default parameter before a required one causes confusion about which argument maps to which parameter. JavaScript will throw a SyntaxError or behave unexpectedly if defaults precede required parameters."
        }
      ]
    }
  },
  {
    "id": "js-m5-l3",
    "moduleId": "js-m5",
    "title": "Arrow Functions and Scope",
    "order": 3,
    "xpReward": 15,
    "duration": "13 min",
    "explanation": {
      "title": "Arrow Functions and Understanding Variable Scope",
      "content": "# Arrow Functions\n\nArrow functions are a concise syntax for writing functions, introduced in ES6. They are especially useful as callbacks:\n\n```javascript\n// Regular function\nconst double = function(x) { return x * 2; };\n\n// Arrow function — equivalent\nconst double = (x) => { return x * 2; };\n\n// Concise body — single expression, no braces, implicit return\nconst double = x => x * 2;\n```\n\n### Concise body rules\n\n- Omit braces `{}` when the body is a single expression\n- Omit `return` — the expression value is returned automatically\n- Omit parentheses `()` around the parameter when there is exactly one\n\n```javascript\nconst square   = x => x ** 2;               // one param, one expr\nconst add      = (a, b) => a + b;            // two params\nconst getObj   = x => ({ value: x });        // return object: wrap in ()\nconst greet    = () => \"Hello!\";             // no params\n```\n\n## Variable Scope\n\n**Scope** defines which parts of a program can access a variable.\n\n### Global scope\n\nVariables declared outside any function are **global** — accessible everywhere:\n\n```javascript\nconst appName = \"CodeGuru AI\";   // global\n\nfunction showName() {\n    console.log(appName);        // accessible inside functions\n}\n```\n\n### Function (local) scope\n\nVariables declared inside a function are **local** to that function:\n\n```javascript\nfunction calculate() {\n    const result = 100;    // local\n}\nconsole.log(result);       // ReferenceError: result is not defined\n```\n\n### Block scope with let and const\n\n`let` and `const` are **block-scoped** — limited to the `{}` block they are declared in:\n\n```javascript\nif (true) {\n    let x = 10;\n    const y = 20;\n}\nconsole.log(x);  // ReferenceError — x is not accessible here\n```\n\n`var` is function-scoped, not block-scoped — one reason to avoid it.\n\n## Closures\n\nA **closure** is a function that remembers variables from its outer scope even after that scope has exited:\n\n```javascript\nfunction makeCounter() {\n    let count = 0;\n    return () => ++count;   // inner function closes over count\n}\n\nconst counter = makeCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n```\n\nIn the code example below, you will see arrow functions, block scope, and a closure used in a practical counter utility."
    },
    "codeExample": {
      "title": "Arrow Functions and Closures",
      "language": "javascript",
      "code": "// Arrow functions — concise syntax\nconst square   = x => x ** 2;\nconst add      = (a, b) => a + b;\nconst isEven   = n => n % 2 === 0;\nconst greet    = name => `Hello, ${name}!`;\n\nconsole.log(square(7));          // 49\nconsole.log(add(12, 8));         // 20\nconsole.log(isEven(4));          // true\nconsole.log(greet(\"Ananya\"));    // Hello, Ananya!\n\n// Arrow functions as callbacks\nconst scores  = [78, 92, 55, 88, 61];\nconst passing = scores.filter(s => s >= 60);\nconst graded  = passing.map(s => ({ score: s, grade: s >= 90 ? \"A\" : \"B\" }));\nconsole.log(\"Passing with grades:\", graded);\n\n// Closure — makeMultiplier returns a function that \"remembers\" factor\nfunction makeMultiplier(factor) {\n    return x => x * factor;   // closes over factor\n}\n\nconst double = makeMultiplier(2);\nconst triple = makeMultiplier(3);\n\nconsole.log(double(5));   // 10\nconsole.log(triple(5));   // 15\n\n// Block scope\nfor (let i = 0; i < 3; i++) {\n    const msg = `Iteration ${i}`;  // new const on every loop\n    console.log(msg);\n}\n// i and msg are not accessible here",
      "explanation": "- `x => x ** 2` — concise arrow function: one parameter, one expression, implicit return\n- `(a, b) => a + b` — two parameters require parentheses; the expression `a + b` is the implicit return value\n- `scores.filter(s => s >= 60)` — arrow function as a callback; cleaner than writing `function(s) { return s >= 60; }`\n- `return x => x * factor` — returns an arrow function that closes over `factor`; each call to `makeMultiplier` creates an independent closure\n- `const msg` inside the `for` loop — block-scoped to one iteration; a fresh `msg` is created each time"
    },
    "exercise": {
      "title": "Build an Arrow Function Toolkit",
      "instructions": "Write three arrow functions: (1) clamp(value, min, max) that returns min if value < min, max if value > max, and value otherwise; (2) percentage(part, total) that returns (part / total * 100) rounded to 1 decimal place; (3) initials(fullName) that takes a full name string, splits it on spaces, and returns the first letter of each word joined with dots. Test all three and print the results.\n\nExpected output:\nClamp: 5 100 75\nPercentage: 85.0\nInitials: R.K.S",
      "starterCode": "// Arrow Function Toolkit\n\n// 1. clamp: keep value within [min, max]\nconst clamp = (value, min, max) => {\n    if (value < min) return min;\n    if (value > max) return max;\n    return value;\n};\n\n// 2. percentage: compute percentage rounded to 1 decimal\nconst percentage = (part, total) => parseFloat((part / total * 100).toFixed(1));\n\n// 3. initials: get first letter of each word, joined with dots\n// Your code here — store in const initials\n\nconsole.log(\"Clamp:\",      clamp(-5, 0, 100), clamp(150, 0, 100), clamp(75, 0, 100));\nconsole.log(\"Percentage:\", percentage(85, 100));\nconsole.log(\"Initials:\",   initials(\"Rahul Kumar Sharma\"));",
      "solutionCode": "const clamp = (value, min, max) => {\n    if (value < min) return min;\n    if (value > max) return max;\n    return value;\n};\n\nconst percentage = (part, total) => parseFloat((part / total * 100).toFixed(1));\n\nconst initials = fullName =>\n    fullName.split(\" \").map(w => w[0]).join(\".\");\n\nconsole.log(\"Clamp:\",      clamp(-5, 0, 100), clamp(150, 0, 100), clamp(75, 0, 100));\nconsole.log(\"Percentage:\", percentage(85, 100));\nconsole.log(\"Initials:\",   initials(\"Rahul Kumar Sharma\"));",
      "hints": [
        "💡 For initials: split the fullName on spaces, then map each word to its first character with w => w[0].",
        "💡 Join the array of first letters with dots: .join(\".\")",
        "💡 The whole initials function fits on one line: fullName => fullName.split(\" \").map(w => w[0]).join(\".\")"
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Initials: R.K.S",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "js-m5-l3-q1",
          "question": "What does an arrow function's concise body (without braces) return?",
          "options": [
            "undefined — you must always use a return statement",
            "The value of the single expression — implicit return",
            "A new arrow function",
            "null"
          ],
          "correct": 1,
          "explanation": "When an arrow function body is a single expression without curly braces, the expression is evaluated and its value is implicitly returned. So x => x * 2 is exactly equivalent to x => { return x * 2; }. If you add braces, you must include an explicit return statement."
        },
        {
          "id": "js-m5-l3-q2",
          "question": "What is a closure in JavaScript?",
          "options": [
            "A way to close or end a function early",
            "A function that has access to variables from its outer scope even after that scope has exited",
            "A method that prevents a variable from being modified",
            "The curly braces that define a function body"
          ],
          "correct": 1,
          "explanation": "A closure is a function that retains access to variables from the scope in which it was created, even after that outer scope has finished executing. In makeMultiplier(factor), the returned arrow function closes over factor and remembers it permanently. Each call to makeMultiplier creates a separate closure with its own factor."
        }
      ]
    }
  }
]
''')

# ── js-m6 — Mini Project
# Lessons : js-m6-l1, js-m6-l2, js-m6-l3
# XP      : 55
javascript_m6_raw = json.loads(r'''
[
  {
    "id": "js-m6-l1",
    "moduleId": "js-m6",
    "title": "Arrays: Core Methods and Patterns",
    "order": 1,
    "xpReward": 15,
    "duration": "13 min",
    "explanation": {
      "title": "Mastering JavaScript Arrays and Their Core Methods",
      "content": "# Arrays in JavaScript\n\nAn **array** is an ordered list of values. It is the most frequently used data structure in JavaScript. Arrays are **zero-indexed** — the first element is at position 0.\n\n```javascript\nconst fruits  = [\"apple\", \"banana\", \"mango\"];\nconst scores  = [85, 92, 78, 95];\nconst mixed   = [42, \"hello\", true];  // different types allowed\nconst empty   = [];\n```\n\n## Accessing and Modifying Elements\n\n```javascript\nfruits[0]          // \"apple\"\nfruits[fruits.length - 1]  // \"mango\" — last element\nfruits[1] = \"grape\";       // replace at index 1\n```\n\n## Mutating Methods — change the original array\n\n| Method | Effect |\n|---|---|\n| `.push(item)` | Add to the end |\n| `.pop()` | Remove and return the last item |\n| `.unshift(item)` | Add to the beginning |\n| `.shift()` | Remove and return the first item |\n| `.splice(i, n)` | Remove `n` items starting at index `i` |\n| `.sort()` | Sort in place (default: alphabetical) |\n| `.reverse()` | Reverse in place |\n\n## Non-Mutating Methods — return a new array or value\n\n| Method | Returns |\n|---|---|\n| `.slice(s, e)` | New array from index `s` to `e` (exclusive) |\n| `.concat(arr)` | New array joining two arrays |\n| `.indexOf(v)` | First index of value `v`, or `-1` |\n| `.includes(v)` | `true` if value `v` is in the array |\n| `.join(sep)` | String joining all elements with separator |\n| `.find(fn)` | First element where `fn` returns `true` |\n| `.findIndex(fn)` | Index of first match, or `-1` |\n| `.some(fn)` | `true` if any element passes `fn` |\n| `.every(fn)` | `true` if all elements pass `fn` |\n| `.reduce(fn, init)` | Single accumulated value |\n\n## Spread and Destructuring\n\n```javascript\nconst a = [1, 2, 3];\nconst b = [4, 5, 6];\nconst combined = [...a, ...b];       // [1,2,3,4,5,6]\n\nconst [first, second, ...rest] = combined;  // destructuring\n// first=1, second=2, rest=[3,4,5,6]\n```\n\nIn the code example below, you will see `reduce`, `find`, `some`, `every`, and destructuring applied to a product inventory."
    },
    "codeExample": {
      "title": "Product Inventory Analysis",
      "language": "javascript",
      "code": "// Product Inventory Analysis\n\nconst inventory = [120, 45, 0, 230, 88, 0, 310];\n\n// reduce — total stock\nconst totalStock = inventory.reduce((sum, qty) => sum + qty, 0);\nconsole.log(\"Total stock:\", totalStock);\n\n// some — any out-of-stock items?\nconst hasOutOfStock = inventory.some(qty => qty === 0);\nconsole.log(\"Has out-of-stock:\", hasOutOfStock);\n\n// every — all items stocked?\nconst allStocked = inventory.every(qty => qty > 0);\nconsole.log(\"All stocked:\", allStocked);\n\n// filter + reduce — total of only stocked items\nconst stockedTotal = inventory\n    .filter(qty => qty > 0)\n    .reduce((sum, qty) => sum + qty, 0);\nconsole.log(\"Stocked total:\", stockedTotal);\n\n// Spread to copy and sort without mutating original\nconst sorted = [...inventory].sort((a, b) => b - a);\nconsole.log(\"Sorted desc:\", sorted);\nconsole.log(\"Original unchanged:\", inventory);\n\n// Destructuring\nconst [highest, second] = sorted;\nconsole.log(`Top two: ${highest}, ${second}`);",
      "explanation": "- `reduce((sum, qty) => sum + qty, 0)` — accumulates a running total starting from `0`\n- `some(qty => qty === 0)` — returns `true` if any element is zero; stops at the first match\n- `every(qty => qty > 0)` — returns `true` only if every element is positive\n- `[...inventory].sort(...)` — the spread creates a copy so `sort()` does not mutate the original array\n- `.sort((a, b) => b - a)` — custom comparator; returns negative when `b < a`, sorting in descending order\n- `const [highest, second] = sorted` — array destructuring assigns the first two elements to named variables"
    },
    "exercise": {
      "title": "Analyse a Sales Figures Array",
      "instructions": "Given the array sales = [12000, 8500, 21000, 4500, 17000, 9000, 25000], compute: (1) total using reduce, (2) average as total divided by array length, (3) the highest sale using Math.max with spread, (4) count of sales above 10000 using filter. Print all four results on separate labelled lines.\n\nExpected output:\nTotal: 97000\nAverage: 13857.142857142857\nHighest: 25000\nAbove 10k: 4",
      "starterCode": "// Sales Analysis\n\nconst sales = [12000, 8500, 21000, 4500, 17000, 9000, 25000];\n\nconst total   = sales.reduce((sum, s) => sum + s, 0);\nconst average = total / sales.length;\nconst highest = Math.max(...sales);\nconst above10k = sales.filter(s => s > 10000).length;\n\nconsole.log(\"Total:\",   total);\nconsole.log(\"Average:\", average);\nconsole.log(\"Highest:\", highest);\nconsole.log(\"Above 10k:\", above10k);",
      "solutionCode": "const sales = [12000, 8500, 21000, 4500, 17000, 9000, 25000];\n\nconst total    = sales.reduce((sum, s) => sum + s, 0);\nconst average  = total / sales.length;\nconst highest  = Math.max(...sales);\nconst above10k = sales.filter(s => s > 10000).length;\n\nconsole.log(\"Total:\",    total);\nconsole.log(\"Average:\",  average);\nconsole.log(\"Highest:\",  highest);\nconsole.log(\"Above 10k:\", above10k);",
      "hints": [
        "💡 The starter code is already the complete solution — run it to see the output.",
        "💡 Math.max(...sales) uses the spread operator to pass all array elements as individual arguments.",
        "💡 .filter(s => s > 10000).length counts elements by filtering and checking the length of the result."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Total: 97000",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "Above 10k: 4",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "js-m6-l1-q1",
          "question": "What is the second argument of Array.reduce() used for?",
          "options": [
            "The maximum number of iterations",
            "The initial value of the accumulator",
            "The index to start from",
            "A callback to run when reduce finishes"
          ],
          "correct": 1,
          "explanation": "The second argument to reduce() is the initial value of the accumulator — the value that the first parameter starts with before the first iteration. For summing numbers, use 0. For building an array, use []. For counting, use 0. If omitted, reduce() uses the first array element as the initial value."
        },
        {
          "id": "js-m6-l1-q2",
          "question": "What does [...arr].sort() do that arr.sort() does not?",
          "options": [
            "It sorts faster because it uses spread",
            "It creates a sorted copy, leaving the original array unchanged",
            "It sorts in descending order by default",
            "They are identical — both mutate the original"
          ],
          "correct": 1,
          "explanation": "Array.sort() mutates the original array in place. Using the spread operator [...arr] creates a shallow copy first, so the sort() call modifies the copy and the original array remains unchanged. This is the standard pattern when you need a sorted version without destroying the original order."
        }
      ]
    }
  },
  {
    "id": "js-m6-l2",
    "moduleId": "js-m6",
    "title": "Objects: Properties and Methods",
    "order": 2,
    "xpReward": 15,
    "duration": "13 min",
    "explanation": {
      "title": "Organising Data with JavaScript Objects",
      "content": "# JavaScript Objects\n\nAn **object** groups related data and behaviour into one named container. Think of a student's record card: it has a name field, an age field, and a GPA field — all belonging to the same person. An object in JavaScript is exactly this: a set of **key-value pairs**.\n\n```javascript\nconst student = {\n    name:      \"Priya Sharma\",\n    age:       21,\n    gpa:       3.8,\n    isActive:  true,\n};\n```\n\n## Accessing Properties\n\n```javascript\nstudent.name         // \"Priya Sharma\" — dot notation\nstudent[\"name\"]      // \"Priya Sharma\" — bracket notation\n\nconst key = \"age\";\nstudent[key]         // 21 — dynamic key using bracket notation\n```\n\n## Adding, Updating, and Deleting\n\n```javascript\nstudent.email   = \"priya@example.com\";  // add\nstudent.gpa     = 3.9;                  // update\ndelete student.isActive;                // remove\n```\n\n## Methods — functions as properties\n\nAn object's value can be a function. Such a property is called a **method**:\n\n```javascript\nconst account = {\n    balance: 5000,\n    deposit(amount) {\n        this.balance += amount;\n    },\n    getBalance() {\n        return this.balance;\n    },\n};\n\naccount.deposit(1000);\nconsole.log(account.getBalance()); // 6000\n```\n\n`this` inside a method refers to the object the method belongs to.\n\n## Object Destructuring\n\n```javascript\nconst { name, age, city = \"Unknown\" } = student;\n// Extracts name, age, and city (defaulting to \"Unknown\")\n```\n\n## Iterating Over an Object\n\n```javascript\nfor (const key in student) {\n    console.log(`${key}: ${student[key]}`);\n}\n\nObject.keys(student)     // array of keys\nObject.values(student)   // array of values\nObject.entries(student)  // array of [key, value] pairs\n```\n\nIn the code example below, you will see an object with methods, destructuring, and `Object.entries()` used in a bank account simulation."
    },
    "codeExample": {
      "title": "Bank Account Object",
      "language": "javascript",
      "code": "// Bank Account Object — properties and methods\n\nconst account = {\n    owner:        \"Rahul Sharma\",\n    balance:      10000,\n    transactions: [],\n\n    deposit(amount) {\n        if (amount <= 0) return \"Invalid amount.\";\n        this.balance += amount;\n        this.transactions.push({ type: \"deposit\", amount });\n        return `Deposited ₹${amount}. New balance: ₹${this.balance}`;\n    },\n\n    withdraw(amount) {\n        if (amount <= 0)          return \"Invalid amount.\";\n        if (amount > this.balance) return \"Insufficient funds.\";\n        this.balance -= amount;\n        this.transactions.push({ type: \"withdraw\", amount });\n        return `Withdrew ₹${amount}. New balance: ₹${this.balance}`;\n    },\n\n    statement() {\n        console.log(`\\n--- Statement: ${this.owner} ---`);\n        this.transactions.forEach((t, i) => {\n            console.log(`  ${i + 1}. ${t.type}: ₹${t.amount}`);\n        });\n        console.log(`  Balance: ₹${this.balance}`);\n    },\n};\n\nconsole.log(account.deposit(5000));\nconsole.log(account.withdraw(2000));\nconsole.log(account.withdraw(20000));  // fails\naccount.statement();\n\n// Destructure properties\nconst { owner, balance } = account;\nconsole.log(`\\n${owner}'s balance: ₹${balance}`);",
      "explanation": "- `deposit(amount)` — method shorthand; equivalent to `deposit: function(amount) {}`\n- `this.balance += amount` — `this` refers to `account`; without `this`, JavaScript would look for a local `balance` variable\n- `this.transactions.push(...)` — `push` adds to the array stored as a property of the same object\n- `this.transactions.forEach(...)` — iterates over the transactions array using a callback\n- `const { owner, balance } = account` — destructuring extracts two properties into separate variables"
    },
    "exercise": {
      "title": "Build a Student Record Object",
      "instructions": "Create an object called student with properties: name (string), marks (an array of three numbers), and two methods: getAverage() that returns the average of the marks array, and getGrade() that returns 'A' if average >= 90, 'B' if >= 75, 'C' if >= 60, else 'F'. Add a property city after creation. Print name, city, average, and grade.\n\nTest: marks = [88, 92, 85]. Expected average 88.33..., grade B.",
      "starterCode": "// Student Record Object\n\nconst student = {\n    name:  \"Kavitha\",\n    marks: [88, 92, 85],\n\n    getAverage() {\n        const total = this.marks.reduce((s, m) => s + m, 0);\n        return total / this.marks.length;\n    },\n\n    getGrade() {\n        const avg = this.getAverage();\n        if      (avg >= 90) return \"A\";\n        else if (avg >= 75) return \"B\";\n        else if (avg >= 60) return \"C\";\n        else                return \"F\";\n    },\n};\n\n// Add city property after creation\nstudent.city = \"Chennai\";\n\nconsole.log(\"Name:\",    student.name);\nconsole.log(\"City:\",    student.city);\nconsole.log(\"Average:\", student.getAverage().toFixed(2));\nconsole.log(\"Grade:\",   student.getGrade());",
      "solutionCode": "const student = {\n    name:  \"Kavitha\",\n    marks: [88, 92, 85],\n    getAverage() {\n        return this.marks.reduce((s, m) => s + m, 0) / this.marks.length;\n    },\n    getGrade() {\n        const avg = this.getAverage();\n        if      (avg >= 90) return \"A\";\n        else if (avg >= 75) return \"B\";\n        else if (avg >= 60) return \"C\";\n        else                return \"F\";\n    },\n};\n\nstudent.city = \"Chennai\";\n\nconsole.log(\"Name:\",    student.name);\nconsole.log(\"City:\",    student.city);\nconsole.log(\"Average:\", student.getAverage().toFixed(2));\nconsole.log(\"Grade:\",   student.getGrade());",
      "hints": [
        "💡 The starter code is complete — run it to observe the output.",
        "💡 this.marks.reduce((s, m) => s + m, 0) sums the marks array; divide by this.marks.length for the average.",
        "💡 getGrade() calls this.getAverage() — one method can call another method on the same object using this."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Grade: B",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "js-m6-l2-q1",
          "question": "What does the this keyword refer to inside an object method?",
          "options": [
            "The global window object",
            "The function itself",
            "The object the method belongs to",
            "The parent scope of the function"
          ],
          "correct": 2,
          "explanation": "Inside a regular method (defined with the function keyword or method shorthand), this refers to the object the method was called on. So this.balance inside account.deposit() refers to account.balance. Arrow functions do not have their own this, so avoid arrow functions for object methods that need to access other properties."
        },
        {
          "id": "js-m6-l2-q2",
          "question": "What does Object.entries(obj) return?",
          "options": [
            "An array of all property values",
            "An array of all property keys",
            "An array of [key, value] pairs for each property",
            "A new object with swapped keys and values"
          ],
          "correct": 2,
          "explanation": "Object.entries(obj) returns an array of [key, value] pairs, one for each own enumerable property. For example, Object.entries({a: 1, b: 2}) returns [[\"a\", 1], [\"b\", 2]]. It is commonly used with for...of or forEach to iterate over an object's properties alongside their values."
        }
      ]
    }
  },
  {
    "id": "js-m6-l3",
    "moduleId": "js-m6",
    "title": "Mini Project: Student Report System",
    "order": 3,
    "xpReward": 25,
    "duration": "20 min",
    "explanation": {
      "title": "Putting It All Together: A Student Report System in JavaScript",
      "content": "# The Mini Project\n\nYou have now studied the six building blocks of JavaScript:\n\n1. **Variables and types** — `let`, `const`, strings, numbers, booleans\n2. **Operators and conditions** — arithmetic, comparison, `if/else`, `switch`\n3. **Loops** — `for`, `for...of`, `while`, `forEach`, `map`, `filter`\n4. **Functions** — declarations, arrow functions, default parameters, closures\n5. **Arrays** — methods like `reduce`, `find`, `sort`, spread, destructuring\n6. **Objects** — properties, methods, `this`, `Object.entries()`\n\nA real application combines all of these. In this lesson, you will build a **Student Report System** — a program that stores student records as an array of objects, computes statistics using array methods, and prints a formatted report using functions.\n\n## Design Before Coding\n\nA good programmer thinks about structure before writing code.\n\n**Data model** — each student is an object:\n```javascript\n{ name: \"Rahul\", maths: 88, science: 75, english: 82 }\n```\n\n**Functions needed:**\n- `getAverage(student)` — compute average of three subject marks\n- `getGrade(average)` — return letter grade\n- `printRow(student, rank)` — print one formatted table row\n- `printSummary(students)` — print class statistics\n\n**Array methods used:**\n- `map()` to add computed fields to each student\n- `sort()` to rank students by average\n- `reduce()` to compute class total\n\n## Why This Matters\n\nEvery professional JavaScript application uses this exact pattern: arrays of objects (from a database or API), processed through functions and array methods, rendered into a UI or report. When you add React or Node.js, you will recognise this foundation immediately.\n\nIn the code example below, you will see the complete Student Report System using every concept from this course."
    },
    "codeExample": {
      "title": "Complete Student Report System",
      "language": "javascript",
      "code": "// =============================================\n// Student Report System — Mini Project\n// Uses: objects, arrays, functions, arrow fns,\n//       map, filter, sort, reduce, template literals\n// =============================================\n\nconst students = [\n    { name: \"Rahul\",  maths: 88, science: 75, english: 82 },\n    { name: \"Priya\",  maths: 95, science: 91, english: 89 },\n    { name: \"Amit\",   maths: 62, science: 55, english: 70 },\n    { name: \"Sneha\",  maths: 78, science: 83, english: 91 },\n    { name: \"Vikram\", maths: 45, science: 50, english: 48 },\n];\n\nconst getAverage = s => (s.maths + s.science + s.english) / 3;\n\nconst getGrade = avg =>\n    avg >= 90 ? \"A\" : avg >= 75 ? \"B\" : avg >= 60 ? \"C\" : \"F\";\n\n// Enrich: add average and grade to each student object\nconst enriched = students\n    .map(s => ({ ...s, average: getAverage(s) }))\n    .map(s => ({ ...s, grade: getGrade(s.average) }))\n    .sort((a, b) => b.average - a.average);\n\n// Print ranked table\nconsole.log(\"=\" .repeat(52));\nconsole.log(\" STUDENT REPORT SYSTEM\");\nconsole.log(\"=\" .repeat(52));\nconsole.log(`  ${'Rank'} ${'Name'.padEnd(8)} ${'M'.padStart(4)} ${'S'.padStart(4)} ${'E'.padStart(4)} ${'Avg'.padStart(7)} ${'G'}`);\nconsole.log(\"-\".repeat(52));\n\nenriched.forEach((s, i) => {\n    const avg = s.average.toFixed(1);\n    console.log(`  ${i + 1}.   ${s.name.padEnd(8)} ${s.maths.toString().padStart(4)} ${s.science.toString().padStart(4)} ${s.english.toString().padStart(4)} ${avg.padStart(7)}  ${s.grade}`);\n});\n\n// Summary\nconst classTotal = enriched.reduce((sum, s) => sum + s.average, 0);\nconst classAvg   = (classTotal / enriched.length).toFixed(1);\nconst passCount  = enriched.filter(s => s.average >= 40).length;\nconsole.log(\"=\".repeat(52));\nconsole.log(`  Class Average : ${classAvg}`);\nconsole.log(`  Passed        : ${passCount}/${enriched.length}`);\nconsole.log(`  Top Student   : ${enriched[0].name}`);",
      "explanation": "- `getAverage` and `getGrade` — arrow functions; pure and reusable, each doing one job\n- `.map(s => ({ ...s, average: getAverage(s) }))` — spreads existing properties and adds a computed `average` field\n- `.sort((a, b) => b.average - a.average)` — sorts descending; `b - a` returns negative when `b < a`\n- `.padEnd(8)` and `.padStart(4)` — pad strings and numbers for aligned column output\n- `enriched.reduce((sum, s) => sum + s.average, 0)` — sums averages for the class total"
    },
    "exercise": {
      "title": "Add a Remark Column to the Report",
      "instructions": "Extend the Student Report System. Write an arrow function getRemark that accepts a grade string and returns: 'Excellent!' for A, 'Well done!' for B, 'Keep going!' for C, and 'Seek help.' for F. Then use map on the enriched array to add a remark property to each student. Finally, forEach over the result and print one line per student: name, grade, and remark.\n\nExpected output includes a line like: Priya A Excellent!",
      "starterCode": "// Extend the Student Report System\n\nconst students = [\n    { name: \"Rahul\",  maths: 88, science: 75, english: 82 },\n    { name: \"Priya\",  maths: 95, science: 91, english: 89 },\n    { name: \"Amit\",   maths: 62, science: 55, english: 70 },\n    { name: \"Sneha\",  maths: 78, science: 83, english: 91 },\n    { name: \"Vikram\", maths: 45, science: 50, english: 48 },\n];\n\nconst getAverage = s => (s.maths + s.science + s.english) / 3;\nconst getGrade   = avg => avg >= 90 ? \"A\" : avg >= 75 ? \"B\" : avg >= 60 ? \"C\" : \"F\";\n\n// Write getRemark arrow function here\n\nconst withRemarks = students\n    .map(s => ({ ...s, average: getAverage(s) }))\n    .map(s => ({ ...s, grade: getGrade(s.average) }))\n    .map(s => ({ ...s, remark: getRemark(s.grade) }));\n\n// forEach to print name, grade, remark\nwithRemarks.forEach(s => console.log(`${s.name} ${s.grade} ${s.remark}`));",
      "solutionCode": "const students = [\n    { name: \"Rahul\",  maths: 88, science: 75, english: 82 },\n    { name: \"Priya\",  maths: 95, science: 91, english: 89 },\n    { name: \"Amit\",   maths: 62, science: 55, english: 70 },\n    { name: \"Sneha\",  maths: 78, science: 83, english: 91 },\n    { name: \"Vikram\", maths: 45, science: 50, english: 48 },\n];\n\nconst getAverage = s => (s.maths + s.science + s.english) / 3;\nconst getGrade   = avg => avg >= 90 ? \"A\" : avg >= 75 ? \"B\" : avg >= 60 ? \"C\" : \"F\";\nconst getRemark  = grade =>\n    grade === \"A\" ? \"Excellent!\" :\n    grade === \"B\" ? \"Well done!\" :\n    grade === \"C\" ? \"Keep going!\" : \"Seek help.\";\n\nconst withRemarks = students\n    .map(s => ({ ...s, average: getAverage(s) }))\n    .map(s => ({ ...s, grade: getGrade(s.average) }))\n    .map(s => ({ ...s, remark: getRemark(s.grade) }));\n\nwithRemarks.forEach(s => console.log(`${s.name} ${s.grade} ${s.remark}`));",
      "hints": [
        "💡 Write getRemark as an arrow function using chained ternaries: grade === 'A' ? 'Excellent!' : grade === 'B' ? ... : 'Seek help.'",
        "💡 The third .map adds remark using getRemark(s.grade) — the function is already called in the starter code.",
        "💡 The forEach print line is already written — once getRemark is defined, the program runs correctly."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Priya A Excellent!",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "js-m6-l3-q1",
          "question": "Why is an array of objects a natural data structure for a list of student records?",
          "options": [
            "Arrays are the only structure JavaScript supports",
            "Each object groups a student's named fields together; the array gives ordered access to all students",
            "Objects are faster than arrays for all operations",
            "JavaScript requires objects for any data that includes strings"
          ],
          "correct": 1,
          "explanation": "An object groups related named fields (name, marks, grade) so you access them by meaningful key rather than by a hard-to-remember index. An array of these objects then lets you iterate, sort, filter, and map across all students with JavaScript's powerful array methods — the combination is the standard pattern for tabular data."
        },
        {
          "id": "js-m6-l3-q2",
          "question": "What does { ...s, grade: getGrade(s.average) } do inside a map callback?",
          "options": [
            "Modifies the original s object by adding grade",
            "Creates a new object with all of s's properties plus a computed grade property",
            "Removes all properties from s except grade",
            "Throws an error because you cannot spread inside map"
          ],
          "correct": 1,
          "explanation": "The spread operator ...s copies all of the original object's properties into the new object literal. Adding grade: getGrade(s.average) then appends the computed grade. The result is a brand new object — the original s is not modified. This is the standard immutable update pattern in functional JavaScript."
        },
        {
          "id": "js-m6-l3-q3",
          "question": "Which combination of array methods processes data without modifying the original array?",
          "options": [
            "sort() and reverse() — both are safe",
            "push() and splice() — they create copies",
            "map(), filter(), and reduce() — they return new arrays or values",
            "forEach() — it always returns a new array"
          ],
          "correct": 2,
          "explanation": "map(), filter(), and reduce() are non-mutating — they return new arrays or a single value without modifying the original. sort() and reverse() are mutating — they change the original array in place. forEach() iterates for side effects and returns undefined. Use [...arr].sort() to sort without mutation."
        }
      ]
    }
  }
]
''')

# ── Combine all modules into one list ─────────────────────
javascript_lessons = (
    javascript_m1_raw + \
         javascript_m2_raw + \
         javascript_m3_raw + \
         javascript_m4_raw + \
         javascript_m5_raw + \
         javascript_m6_raw
)

# ── Sanity check ──────────────────────────────────────────
print(f"Loaded {len(javascript_lessons)} JavaScript lessons")
for lesson in javascript_lessons:
    print(f'  {lesson["id"]:15} {lesson["title"]:50} {lesson["xpReward"]} XP')