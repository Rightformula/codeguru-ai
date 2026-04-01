// src/data/courses/javascript-modules-3-6.ts
// Module 3: Arrays & Array Methods
// Module 4: Objects & Prototypes
// Module 5: DOM Manipulation
// Module 6: Async JavaScript

import type { Module } from '@/types/course';

export const javascriptModules3to6: Module[] = [

  // ════════════════════════════════════════════════
  //  MODULE 3 — Arrays & Array Methods
  // ════════════════════════════════════════════════
  {
    id:          'js-m3',
    courseId:    'javascript',
    title:       'Arrays & Array Methods',
    description: 'Master JavaScript arrays — the most important data structure in modern JS development.',
    level:       'beginner',
    order:       3,
    icon:        '📦',
    xpReward:    120,
    locked:      true,
    lessons: [

      {
        id:       'js-m3-l1',
        moduleId: 'js-m3',
        title:    'Arrays — Create, Access, Modify',
        order:    1,
        xpReward: 15,
        duration: '12 min',

        explanation: {
          title:   'Arrays in JavaScript',
          content: `# Arrays in JavaScript

An **array** is an ordered list of values. Unlike Python lists, JavaScript arrays are objects.

## Creating Arrays

\`\`\`javascript
const fruits  = ["apple", "banana", "mango"];
const numbers = [1, 2, 3, 4, 5];
const mixed   = [42, "hello", true, null];  // mixed types OK
const empty   = [];
\`\`\`

## Accessing & Modifying

\`\`\`javascript
const fruits = ["apple", "banana", "mango"];
console.log(fruits[0]);      // apple
console.log(fruits.length);  // 3

fruits[1] = "grape";         // modify
fruits.push("cherry");       // add to end
fruits.unshift("kiwi");      // add to start
fruits.pop();                // remove from end
fruits.shift();              // remove from start
\`\`\`

## Useful Array Methods

| Method | Description |
|--------|-------------|
| \`push(item)\` | Add to end |
| \`pop()\` | Remove from end |
| \`unshift(item)\` | Add to start |
| \`shift()\` | Remove from start |
| \`indexOf(item)\` | Find position |
| \`includes(item)\` | Check existence |
| \`slice(start, end)\` | Get sub-array |
| \`splice(start, count)\` | Remove items |
| \`join(sep)\` | Array → string |`,
        },

        codeExample: {
          title:    'Array Operations',
          language: 'javascript',
          code: `const students = ["Rahul", "Priya", "Amit"];

// Basic operations
console.log("Length:", students.length);
console.log("First:", students[0]);
console.log("Last:", students[students.length - 1]);

// Adding and removing
students.push("Sneha");           // add to end
students.unshift("Vikram");       // add to start
console.log("After adds:", students);

const removed = students.pop();    // remove last
console.log("Removed:", removed);
console.log("After pop:", students);

// Search
console.log("Index of Priya:", students.indexOf("Priya"));
console.log("Has Amit:", students.includes("Amit"));

// Slice (non-destructive)
const first2 = students.slice(0, 2);
console.log("First 2:", first2);
console.log("Original unchanged:", students);

// Splice (destructive — modifies original)
const spliced = students.splice(1, 1);  // remove 1 at index 1
console.log("Spliced out:", spliced);
console.log("After splice:", students);

// Join array to string
const names = ["Python", "JavaScript", "Java"];
console.log(names.join(", "));    // Python, JavaScript, Java
console.log(names.join(" | "));   // Python | JavaScript | Java`,
          explanation: `- Arrays are zero-indexed like Python
- \`push/pop\` work at the END; \`unshift/shift\` work at the START
- \`slice(start, end)\` is NON-destructive — returns new array
- \`splice(start, deleteCount)\` is destructive — modifies the original
- \`join(separator)\` converts array to a string`,
        },

        exercise: {
          title:        'Shopping Cart Simulator',
          instructions: 'Build a shopping cart using array operations. Start with 3 items, add 2 more with push(), remove the first item with shift(), check if an item is in the cart, and print the final cart joined with " | ".',
          starterCode: `const cart = ["Laptop", "Keyboard", "Mouse"];

// Add 2 more items to the cart
cart.push("Monitor");
cart.push("Headphones");
console.log("After adding:", cart);

// Remove the first item
const removed = cart.shift();
console.log("Removed:", removed);

// Check if "Keyboard" is in the cart
console.log("Has Keyboard:", cart.includes("Keyboard"));

// Print cart as: "Item1 | Item2 | ..."
console.log("Cart:", cart.join(" | "));
console.log("Total items:", cart.length);`,
          solutionCode: `const cart = ["Laptop", "Keyboard", "Mouse"];

cart.push("Monitor");
cart.push("Headphones");
console.log("After adding:", cart);

const removed = cart.shift();
console.log("Removed:", removed);

console.log("Has Keyboard:", cart.includes("Keyboard"));
console.log("Cart:", cart.join(" | "));
console.log("Total items:", cart.length);`,
          hints: [
            '💡 push() adds to end, unshift() adds to start',
            '💡 shift() removes from start (returns the removed item)',
            '💡 join(" | ") combines all items with " | " between them',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'js-m3-l1-q1',
              question:    'What does arr.unshift("item") do?',
              options:     ['Adds to end', 'Removes from start', 'Adds to start', 'Removes from end'],
              correct:     2,
              explanation: 'unshift() adds one or more items to the BEGINNING of an array. It\'s the opposite of push() which adds to the end.',
            },
            {
              id:          'js-m3-l1-q2',
              question:    'What is the difference between slice() and splice()?',
              options:     [
                'No difference',
                'slice() returns a new array; splice() modifies the original',
                'splice() returns a new array; slice() modifies the original',
                'slice() only works with numbers',
              ],
              correct:     1,
              explanation: 'slice(start, end) returns a new sub-array without modifying the original. splice(start, count) modifies the original array by removing items and returns the removed items.',
            },
          ],
        },
      },

      {
        id:       'js-m3-l2',
        moduleId: 'js-m3',
        title:    'Array Methods: map, filter, reduce',
        order:    2,
        xpReward: 20,
        duration: '14 min',

        explanation: {
          title:   'Functional Array Methods',
          content: `# map, filter, reduce

These three methods are the cornerstone of modern JavaScript. They're used in every professional React/Node project.

## map() — transform every item

\`\`\`javascript
const prices  = [100, 200, 300];
const withGST = prices.map(p => p * 1.18);
// [118, 236, 354]
\`\`\`

## filter() — keep matching items

\`\`\`javascript
const scores  = [85, 42, 92, 37, 78];
const passing = scores.filter(s => s >= 60);
// [85, 92, 78]
\`\`\`

## reduce() — combine into one value

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];
const sum     = numbers.reduce((total, n) => total + n, 0);
// 15

// Building an object with reduce
const words = ["hello", "world", "hello", "code"];
const freq  = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});
// {hello: 2, world: 1, code: 1}
\`\`\`

## Chaining methods

\`\`\`javascript
const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .filter(n => n % 2 === 0)    // keep evens: [2,4,6,8,10]
    .map(n => n ** 2)             // square: [4,16,36,64,100]
    .reduce((sum, n) => sum + n, 0); // sum: 220
\`\`\``,
        },

        codeExample: {
          title:    'map / filter / reduce',
          language: 'javascript',
          code: `const students = [
    { name: "Rahul",  score: 85, city: "Delhi"     },
    { name: "Priya",  score: 92, city: "Mumbai"    },
    { name: "Amit",   score: 55, city: "Delhi"     },
    { name: "Sneha",  score: 78, city: "Bangalore" },
    { name: "Vikram", score: 45, city: "Mumbai"    },
];

// map: extract just names
const names = students.map(s => s.name);
console.log("Names:", names);

// filter: only passing (score >= 60)
const passing = students.filter(s => s.score >= 60);
console.log("Passing:", passing.map(s => s.name));

// reduce: total score
const total = students.reduce((sum, s) => sum + s.score, 0);
const avg   = (total / students.length).toFixed(1);
console.log(\`Total: \${total}, Average: \${avg}\`);

// reduce: group by city
const byCity = students.reduce((acc, s) => {
    acc[s.city] = acc[s.city] || [];
    acc[s.city].push(s.name);
    return acc;
}, {});
console.log("By city:", byCity);

// Chaining: names of Delhi students who passed
const delhiPassing = students
    .filter(s => s.city === "Delhi" && s.score >= 60)
    .map(s => \`\${s.name} (\${s.score})\`);
console.log("Delhi passing:", delhiPassing);`,
          explanation: `- \`map()\` always returns an array of the SAME length — just transformed
- \`filter()\` returns an array of SAME or FEWER items — based on condition
- \`reduce()\` returns a SINGLE value — the accumulated result
- The second argument of reduce is the initial value of the accumulator
- Methods can be chained — the result of one is passed to the next`,
        },

        exercise: {
          title:        'E-commerce Data Pipeline',
          instructions: 'Given product data, chain map/filter/reduce to: filter products in stock, calculate discounted prices (10% off), and find the total cost of affordable items (under ₹5000).',
          starterCode: `const products = [
    { name: "Laptop",    price: 45000, inStock: true  },
    { name: "Phone",     price: 15000, inStock: true  },
    { name: "Tablet",    price: 25000, inStock: false },
    { name: "Earbuds",   price: 2000,  inStock: true  },
    { name: "Charger",   price: 800,   inStock: true  },
    { name: "Keyboard",  price: 3500,  inStock: false },
];

// Step 1: Filter only in-stock products
const inStock = products.filter(p => p.inStock);
console.log("In stock:", inStock.map(p => p.name));

// Step 2: Apply 10% discount to prices
const discounted = inStock.map(p => ({
    ...p,
    discountedPrice: Math.round(p.price * 0.9)
}));

// Step 3: Filter affordable (discounted < 5000) and sum total
const total = discounted
    .filter(p => p.discountedPrice < 5000)
    .reduce((sum, p) => sum + p.discountedPrice, 0);

console.log("Affordable total: ₹" + total);`,
          solutionCode: `const products = [
    { name: "Laptop",    price: 45000, inStock: true  },
    { name: "Phone",     price: 15000, inStock: true  },
    { name: "Tablet",    price: 25000, inStock: false },
    { name: "Earbuds",   price: 2000,  inStock: true  },
    { name: "Charger",   price: 800,   inStock: true  },
    { name: "Keyboard",  price: 3500,  inStock: false },
];

const inStock    = products.filter(p => p.inStock);
const discounted = inStock.map(p => ({ ...p, discountedPrice: Math.round(p.price * 0.9) }));
const total      = discounted
    .filter(p => p.discountedPrice < 5000)
    .reduce((sum, p) => sum + p.discountedPrice, 0);

console.log("In stock:", inStock.map(p => p.name));
console.log("Affordable total: ₹" + total);`,
          hints: [
            '💡 filter(p => p.inStock) keeps products where inStock is true',
            '💡 ...p in map spreads existing properties; add new key: {...p, discountedPrice: ...}',
            '💡 reduce starts at 0 and adds each discountedPrice: (sum, p) => sum + p.discountedPrice',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'js-m3-l2-q1',
              question:    'What does [1,2,3].reduce((acc, n) => acc + n, 0) return?',
              options:     ['[1, 2, 3]', '6', '0', 'Error'],
              correct:     1,
              explanation: 'reduce starts with accumulator=0, then: 0+1=1, 1+2=3, 3+3=6. The second argument to reduce (0) is the initial value of the accumulator.',
            },
            {
              id:          'js-m3-l2-q2',
              question:    'Which method would you use to get names from an array of user objects?',
              options:     ['filter()', 'reduce()', 'map()', 'find()'],
              correct:     2,
              explanation: 'map() transforms every item and returns same-length array. users.map(u => u.name) returns an array of just the names.',
            },
          ],
        },
      },

      {
        id:       'js-m3-l3',
        moduleId: 'js-m3',
        title:    'Spread, Rest & Destructuring',
        order:    3,
        xpReward: 20,
        duration: '12 min',

        explanation: {
          title:   'Modern JavaScript Syntax',
          content: `# Spread, Rest & Destructuring

These ES6+ features are used everywhere in modern JavaScript and React.

## Spread Operator (...)

\`\`\`javascript
// Spread arrays
const a = [1, 2, 3];
const b = [4, 5, 6];
const combined = [...a, ...b];       // [1, 2, 3, 4, 5, 6]

// Copy array
const copy = [...a];                  // independent copy

// Spread into function arguments
Math.max(...[3, 1, 4, 1, 5]);        // 5
\`\`\`

## Array Destructuring

\`\`\`javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);   // 1
console.log(second);  // 2
console.log(rest);    // [3, 4, 5]

// Swap variables!
let x = 1, y = 2;
[x, y] = [y, x];    // x=2, y=1

// Skip elements
const [,, third] = [1, 2, 3];   // third = 3
\`\`\`

## Object Destructuring

\`\`\`javascript
const user = { name: "Rahul", age: 21, city: "Delhi" };

const { name, age }          = user;
const { name: userName }     = user;   // rename
const { phone = "N/A" }      = user;   // default value
const { city, ...rest }      = user;   // rest collects remaining

// In function parameters
function greet({ name, city }) {
    return \`Hello \${name} from \${city}!\`;
}
greet(user);
\`\`\``,
        },

        codeExample: {
          title:    'Spread, Rest & Destructuring',
          language: 'javascript',
          code: `// === ARRAY DESTRUCTURING ===
const [first, second, ...others] = [10, 20, 30, 40, 50];
console.log("First:", first);      // 10
console.log("Second:", second);    // 20
console.log("Others:", others);    // [30, 40, 50]

// Swap without temp variable
let a = 1, b = 2;
[a, b] = [b, a];
console.log(\`a=\${a}, b=\${b}\`);   // a=2, b=1

// === OBJECT DESTRUCTURING ===
const student = { name: "Priya", score: 92, city: "Mumbai", year: 2 };

const { name, score, city = "Unknown", phone = "N/A" } = student;
console.log(\`\${name}: \${score} from \${city}, phone: \${phone}\`);

// Rename while destructuring
const { name: studentName, score: studentScore } = student;
console.log(\`\${studentName} scored \${studentScore}\`);

// Rest in destructuring
const { city: location, ...profile } = student;
console.log("Location:", location);
console.log("Profile:", profile);

// === SPREAD ===
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, 10, ...arr2, 20];
console.log("Merged:", merged);

// Spread into function
const nums = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Max:", Math.max(...nums));
console.log("Min:", Math.min(...nums));`,
          explanation: `- Destructuring unpacks values from arrays/objects into variables
- Default values (\`= "N/A"\`) used when property is undefined
- Rest (\`...rest\`) collects remaining items into a new array/object
- Spread (\`...\`) expands an array/object into individual elements`,
        },

        exercise: {
          title:        'Config Merger',
          instructions: 'Write a function mergeConfig(defaults, overrides) that merges two config objects using spread. Extract specific fields with destructuring. Return a new config with overrides applied.',
          starterCode: `function mergeConfig(defaults, overrides) {
    // Merge defaults with overrides using spread
    // overrides should win
    const merged = { ...defaults, ...overrides };
    return merged;
}

const defaultConfig = {
    theme:     "dark",
    language:  "en",
    fontSize:  14,
    autoSave:  true,
    timeout:   30,
};

const userConfig = {
    theme:    "light",
    fontSize: 16,
};

const finalConfig = mergeConfig(defaultConfig, userConfig);
console.log("Final config:", finalConfig);

// Destructure specific values
const { theme, fontSize, language } = finalConfig;
console.log(\`Theme: \${theme}, Size: \${fontSize}, Lang: \${language}\`);`,
          solutionCode: `function mergeConfig(defaults, overrides) {
    return { ...defaults, ...overrides };
}

const defaultConfig = { theme: "dark", language: "en", fontSize: 14, autoSave: true, timeout: 30 };
const userConfig    = { theme: "light", fontSize: 16 };

const finalConfig = mergeConfig(defaultConfig, userConfig);
console.log("Final config:", finalConfig);

const { theme, fontSize, language } = finalConfig;
console.log(\`Theme: \${theme}, Size: \${fontSize}, Lang: \${language}\`);`,
          hints: [
            '💡 {...defaults, ...overrides} — later keys overwrite earlier ones',
            '💡 const { key1, key2 } = object extracts those properties',
            '💡 Default values in destructuring: const { phone = "N/A" } = obj',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'js-m3-l3-q1',
              question:    'What does const [a, ...b] = [1,2,3,4] give for b?',
              options:     ['[1,2,3,4]', '[2,3,4]', '2', '[1]'],
              correct:     1,
              explanation: 'a gets the first element (1), and ...b (rest) collects everything remaining into an array: [2,3,4].',
            },
            {
              id:          'js-m3-l3-q2',
              question:    'In {...obj1, ...obj2}, if both have the same key, which value wins?',
              options:     ['obj1\'s value', 'obj2\'s value', 'Error is thrown', 'Both values are kept'],
              correct:     1,
              explanation: 'Spread merges left to right — later objects overwrite earlier ones. {...defaults, ...overrides} means overrides wins for duplicate keys.',
            },
          ],
        },
      },
    ],
  },

  // ════════════════════════════════════════════════
  //  MODULE 4 — Objects & Prototypes
  // ════════════════════════════════════════════════
  {
    id:          'js-m4',
    courseId:    'javascript',
    title:       'Objects & Classes',
    description: 'Master JavaScript objects and modern class syntax for object-oriented programming.',
    level:       'beginner',
    order:       4,
    icon:        '🏗️',
    xpReward:    130,
    locked:      true,
    lessons: [

      {
        id:       'js-m4-l1',
        moduleId: 'js-m4',
        title:    'Objects Deep Dive',
        order:    1,
        xpReward: 15,
        duration: '12 min',

        explanation: {
          title:   'JavaScript Objects',
          content: `# Objects in JavaScript

An **object** stores related data and behaviour together as key-value pairs.

## Creating Objects

\`\`\`javascript
// Object literal (most common)
const user = {
    name:  "Rahul",
    age:   21,
    greet() {           // method shorthand
        return \`Hi, I'm \${this.name}!\`;
    }
};
\`\`\`

## Accessing Properties

\`\`\`javascript
user.name           // "Rahul" — dot notation
user["name"]        // "Rahul" — bracket notation
user["greet"]()     // bracket notation for methods

// Bracket notation useful for dynamic keys
const key = "name";
user[key]           // "Rahul"
\`\`\`

## this — refers to the current object

\`\`\`javascript
const counter = {
    count: 0,
    increment() { this.count++; },
    getCount() { return this.count; }
};
counter.increment();
counter.getCount();  // 1
\`\`\`

## Object Methods

\`\`\`javascript
Object.keys(user)     // ["name", "age", "greet"]
Object.values(user)   // ["Rahul", 21, [Function]]
Object.entries(user)  // [["name","Rahul"], ["age",21], ...]
Object.assign({}, user, { age: 22 })  // shallow copy + override
\`\`\``,
        },

        codeExample: {
          title:    'Objects in Practice',
          language: 'javascript',
          code: `// A bank account object
const account = {
    owner:   "Priya Sharma",
    balance: 5000,
    transactions: [],

    deposit(amount) {
        this.balance += amount;
        this.transactions.push({ type: "deposit", amount });
        console.log(\`Deposited ₹\${amount}. Balance: ₹\${this.balance}\`);
    },

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds!");
            return;
        }
        this.balance -= amount;
        this.transactions.push({ type: "withdraw", amount });
        console.log(\`Withdrew ₹\${amount}. Balance: ₹\${this.balance}\`);
    },

    statement() {
        console.log(\`\\n--- Account: \${this.owner} ---\`);
        this.transactions.forEach((t, i) => {
            console.log(\`  \${i+1}. \${t.type}: ₹\${t.amount}\`);
        });
        console.log(\`  Current Balance: ₹\${this.balance}\`);
    }
};

account.deposit(2000);
account.withdraw(500);
account.deposit(1000);
account.withdraw(10000);  // will fail
account.statement();

// Object.entries for iteration
console.log("\\nAccount info:");
Object.entries(account)
    .filter(([k]) => typeof account[k] !== 'function' && !Array.isArray(account[k]))
    .forEach(([k, v]) => console.log(\`  \${k}: \${v}\`));`,
          explanation: `- Methods inside objects use \`this\` to refer to the object itself
- Arrow functions do NOT have their own \`this\` — avoid them as object methods
- \`Object.entries()\` gives \`[key, value]\` pairs — great for iteration
- Objects are reference types — \`const a = obj\` makes a both point to same object`,
        },

        exercise: {
          title:        'Library Book Manager',
          instructions: 'Create a library object with a books array and methods: addBook(title, author), borrowBook(title), returnBook(title), and listAvailable(). Track whether each book is available.',
          starterCode: `const library = {
    books: [],

    addBook(title, author) {
        this.books.push({ title, author, available: true });
        console.log(\`Added: "\${title}" by \${author}\`);
    },

    borrowBook(title) {
        const book = this.books.find(b => b.title === title);
        if (!book) { console.log("Book not found!"); return; }
        if (!book.available) { console.log("Already borrowed!"); return; }
        book.available = false;
        console.log(\`Borrowed: "\${title}"\`);
    },

    returnBook(title) {
        const book = this.books.find(b => b.title === title);
        if (book) { book.available = true; console.log(\`Returned: "\${title}"\`); }
    },

    listAvailable() {
        const available = this.books.filter(b => b.available);
        console.log(\`\\nAvailable (\${available.length}):\`);
        available.forEach(b => console.log(\`  - "\${b.title}" by \${b.author}\`));
    }
};

library.addBook("Python Basics", "Guido");
library.addBook("JS Guide", "Brendan");
library.addBook("Clean Code", "Martin");
library.borrowBook("Python Basics");
library.borrowBook("Python Basics");  // should say "Already borrowed"
library.returnBook("Python Basics");
library.listAvailable();`,
          solutionCode: `const library = {
    books: [],
    addBook(title, author) {
        this.books.push({ title, author, available: true });
        console.log(\`Added: "\${title}" by \${author}\`);
    },
    borrowBook(title) {
        const book = this.books.find(b => b.title === title);
        if (!book) { console.log("Book not found!"); return; }
        if (!book.available) { console.log("Already borrowed!"); return; }
        book.available = false;
        console.log(\`Borrowed: "\${title}"\`);
    },
    returnBook(title) {
        const book = this.books.find(b => b.title === title);
        if (book) { book.available = true; console.log(\`Returned: "\${title}"\`); }
    },
    listAvailable() {
        const available = this.books.filter(b => b.available);
        console.log(\`Available (\${available.length}):\`);
        available.forEach(b => console.log(\`  - "\${b.title}" by \${b.author}\`));
    }
};

library.addBook("Python Basics", "Guido");
library.addBook("JS Guide", "Brendan");
library.addBook("Clean Code", "Martin");
library.borrowBook("Python Basics");
library.borrowBook("Python Basics");
library.returnBook("Python Basics");
library.listAvailable();`,
          hints: [
            '💡 this.books.find(b => b.title === title) finds matching book',
            '💡 book.available = false marks it as borrowed',
            '💡 filter(b => b.available) gets all available books',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'js-m4-l1-q1',
              question:    'Inside an object method, what does "this" refer to?',
              options:     ['The window/global object', 'The function itself', 'The object the method belongs to', 'undefined'],
              correct:     2,
              explanation: 'In a regular function method, "this" refers to the object the method belongs to. This is how methods access other properties of the same object.',
            },
            {
              id:          'js-m4-l1-q2',
              question:    'What does Object.keys(obj) return?',
              options:     ['The values of all properties', 'The number of properties', 'An array of all property names', 'A copy of the object'],
              correct:     2,
              explanation: 'Object.keys(obj) returns an array of strings — the names of all enumerable own properties. Object.values() returns values. Object.entries() returns [key, value] pairs.',
            },
          ],
        },
      },

      {
        id:       'js-m4-l2',
        moduleId: 'js-m4',
        title:    'Classes & OOP in JavaScript',
        order:    2,
        xpReward: 20,
        duration: '14 min',

        explanation: {
          title:   'Classes — Blueprint for Objects',
          content: `# JavaScript Classes

Classes are templates for creating objects. Introduced in ES6, they're the modern way to write OOP in JavaScript.

## Creating a Class

\`\`\`javascript
class Student {
    constructor(name, age) {
        this.name = name;
        this.age  = age;
        this.grades = [];
    }

    addGrade(subject, score) {
        this.grades.push({ subject, score });
    }

    getAverage() {
        if (!this.grades.length) return 0;
        const total = this.grades.reduce((sum, g) => sum + g.score, 0);
        return (total / this.grades.length).toFixed(1);
    }

    toString() {
        return \`Student: \${this.name}, Avg: \${this.getAverage()}\`;
    }
}

const s = new Student("Rahul", 21);
s.addGrade("Math", 88);
\`\`\`

## Inheritance — extend a class

\`\`\`javascript
class PremiumStudent extends Student {
    constructor(name, age, plan) {
        super(name, age);     // call parent constructor
        this.plan = plan;
    }

    getDiscount() {
        return this.plan === "annual" ? 20 : 10;
    }
}
\`\`\`

## Static Methods — belong to class, not instance

\`\`\`javascript
class MathHelper {
    static square(n) { return n ** 2; }
    static cube(n)   { return n ** 3; }
}

MathHelper.square(5);  // 25 — no new needed
\`\`\``,
        },

        codeExample: {
          title:    'Classes in Action',
          language: 'javascript',
          code: `class Animal {
    constructor(name, species) {
        this.name    = name;
        this.species = species;
        this.sounds  = [];
    }

    makeSound(sound) {
        this.sounds.push(sound);
        console.log(\`\${this.name} says: \${sound}\`);
    }

    describe() {
        return \`\${this.name} is a \${this.species}\`;
    }
}

// Inheritance
class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog");    // calls Animal constructor
        this.breed = breed;
    }

    fetch(item) {
        console.log(\`\${this.name} fetches the \${item}!\`);
    }

    describe() {
        // Override parent method
        return \`\${super.describe()} (\${this.breed})\`;
    }
}

const cat = new Animal("Whiskers", "Cat");
cat.makeSound("Meow");
console.log(cat.describe());

const dog = new Dog("Bruno", "Labrador");
dog.makeSound("Woof!");
dog.fetch("ball");
console.log(dog.describe());

// instanceof check
console.log(dog instanceof Dog);     // true
console.log(dog instanceof Animal);  // true — inheritance!

// Static method
class Calculator {
    static add(a, b)      { return a + b; }
    static multiply(a, b) { return a * b; }
}

console.log(Calculator.add(5, 3));       // 8
console.log(Calculator.multiply(4, 7));  // 28`,
          explanation: `- \`constructor()\` runs automatically when \`new ClassName()\` is called
- \`super()\` must be called first in a child class constructor
- \`extends\` creates inheritance — child gets all parent methods
- \`instanceof\` checks if an object is an instance of a class (including parent)
- \`static\` methods belong to the class, not instances — called as \`Class.method()\``,
        },

        exercise: {
          title:        'Course Platform Classes',
          instructions: 'Build a Course class with title, instructor, price, and a students array. Add methods: enroll(studentName), getStudentCount(), and applyDiscount(percent). Then create a FreeCourse class extending Course with price always 0.',
          starterCode: `class Course {
    constructor(title, instructor, price) {
        this.title      = title;
        this.instructor = instructor;
        this.price      = price;
        this.students   = [];
    }

    enroll(studentName) {
        this.students.push(studentName);
        console.log(\`\${studentName} enrolled in "\${this.title}"\`);
    }

    getStudentCount() {
        return this.students.length;
    }

    applyDiscount(percent) {
        this.price = Math.round(this.price * (1 - percent / 100));
        console.log(\`New price: ₹\${this.price}\`);
    }
}

class FreeCourse extends Course {
    constructor(title, instructor) {
        super(title, instructor, 0);
    }

    enroll(studentName) {
        super.enroll(studentName);
        console.log("  (Free enrollment — no payment needed)");
    }
}

const python = new Course("Python Basics", "Guido", 1499);
python.enroll("Rahul");
python.enroll("Priya");
python.applyDiscount(10);
console.log("Students:", python.getStudentCount());

const htmlCourse = new FreeCourse("HTML Intro", "Tim");
htmlCourse.enroll("Amit");`,
          solutionCode: `class Course {
    constructor(title, instructor, price) {
        this.title = title; this.instructor = instructor;
        this.price = price; this.students = [];
    }
    enroll(name)          { this.students.push(name); console.log(\`\${name} enrolled in "\${this.title}"\`); }
    getStudentCount()     { return this.students.length; }
    applyDiscount(pct)    { this.price = Math.round(this.price*(1-pct/100)); console.log(\`Price: ₹\${this.price}\`); }
}
class FreeCourse extends Course {
    constructor(title, instructor) { super(title, instructor, 0); }
    enroll(name) { super.enroll(name); console.log("  (Free)"); }
}
const python = new Course("Python", "Guido", 1499);
python.enroll("Rahul"); python.applyDiscount(10);
console.log("Count:", python.getStudentCount());
const html = new FreeCourse("HTML", "Tim");
html.enroll("Amit");`,
          hints: [
            '💡 super(title, instructor, 0) calls the parent constructor with price=0',
            '💡 super.enroll(name) calls the parent\'s enroll method',
            '💡 this.price * (1 - percent/100) calculates discounted price',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'js-m4-l2-q1',
              question:    'What is the purpose of "super()" in a child class constructor?',
              options:     [
                'It creates a new object',
                'It calls the parent class constructor and initializes inherited properties',
                'It overrides the parent method',
                'It creates a static method',
              ],
              correct:     1,
              explanation: 'super() calls the parent class\'s constructor. It must be called before accessing "this" in a child constructor. It initializes the inherited properties.',
            },
            {
              id:          'js-m4-l2-q2',
              question:    'How are static methods called?',
              options:     [
                'On instances: new ClassName().staticMethod()',
                'On the class itself: ClassName.staticMethod()',
                'They cannot be called',
                'Using super.staticMethod()',
              ],
              correct:     1,
              explanation: 'Static methods belong to the class, not instances. You call them directly on the class: ClassName.method(). No "new" needed.',
            },
          ],
        },
      },

      {
        id:       'js-m4-l3',
        moduleId: 'js-m4',
        title:    'Error Handling with try/catch',
        order:    3,
        xpReward: 15,
        duration: '10 min',

        explanation: {
          title:   'Handling Errors Gracefully',
          content: `# Error Handling in JavaScript

Real programs make mistakes. Error handling lets you catch problems and respond gracefully instead of crashing.

## try / catch / finally

\`\`\`javascript
try {
    // Code that might throw an error
    const result = riskyOperation();
    console.log(result);
} catch (error) {
    // Runs if an error occurs
    console.log("Error:", error.message);
} finally {
    // ALWAYS runs — clean up code
    console.log("Done");
}
\`\`\`

## Throwing custom errors

\`\`\`javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (e) {
    console.log(e.message);  // "Cannot divide by zero!"
}
\`\`\`

## Error Types

\`\`\`javascript
try {
    null.property;           // TypeError
} catch (e) {
    console.log(e instanceof TypeError);  // true
    console.log(e.name);                  // "TypeError"
    console.log(e.message);               // "Cannot read..."
}
\`\`\``,
        },

        codeExample: {
          title:    'Error Handling Patterns',
          language: 'javascript',
          code: `// Custom error class
class ValidationError extends Error {
    constructor(field, message) {
        super(message);
        this.name  = "ValidationError";
        this.field = field;
    }
}

// Function with validation
function createUser(name, age, email) {
    if (!name || name.length < 2) {
        throw new ValidationError("name", "Name must be at least 2 characters");
    }
    if (age < 0 || age > 150) {
        throw new ValidationError("age", "Age must be between 0 and 150");
    }
    if (!email.includes("@")) {
        throw new ValidationError("email", "Invalid email format");
    }
    return { name, age, email };
}

// Test with try/catch
const tests = [
    ["Rahul", 21, "rahul@example.com"],
    ["R",     21, "rahul@example.com"],   // name too short
    ["Priya", -5, "priya@example.com"],   // invalid age
    ["Amit",  22, "invalid-email"],        // bad email
];

tests.forEach(([name, age, email]) => {
    try {
        const user = createUser(name, age, email);
        console.log("✅ Created:", user.name);
    } catch (e) {
        if (e instanceof ValidationError) {
            console.log(\`❌ \${e.field}: \${e.message}\`);
        } else {
            console.log("Unexpected error:", e.message);
        }
    }
});`,
          explanation: `- \`try\` wraps code that might fail
- \`catch(e)\` receives the error object — check \`e.message\` and \`e.name\`
- \`finally\` always runs — use for cleanup (close connections, clear timers)
- \`throw\` creates an error — can throw any value but Error objects are best
- Custom errors \`extend Error\` and add context like the field name`,
        },

        exercise: {
          title:        'Safe Calculator',
          instructions: 'Write a safeCalculate(a, operator, b) function that handles division by zero, invalid operators, and non-number inputs using try/catch and custom throws.',
          starterCode: `function safeCalculate(a, operator, b) {
    // Validate inputs
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Both inputs must be numbers");
    }

    switch (operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/":
            if (b === 0) throw new Error("Division by zero!");
            return a / b;
        default:
            throw new Error(\`Unknown operator: \${operator}\`);
    }
}

// Test cases
const tests = [
    [10, "+", 5],
    [10, "/", 2],
    [10, "/", 0],
    [10, "%", 3],
    ["10", "+", 5],
];

tests.forEach(([a, op, b]) => {
    try {
        console.log(\`\${a} \${op} \${b} = \${safeCalculate(a, op, b)}\`);
    } catch (e) {
        console.log(\`Error: \${e.message}\`);
    }
});`,
          solutionCode: `function safeCalculate(a, operator, b) {
    if (typeof a !== "number" || typeof b !== "number")
        throw new TypeError("Both inputs must be numbers");
    switch (operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/":
            if (b === 0) throw new Error("Division by zero!");
            return a / b;
        default:  throw new Error(\`Unknown operator: \${operator}\`);
    }
}
const tests = [[10,"+",5],[10,"/",2],[10,"/",0],[10,"%",3],["10","+",5]];
tests.forEach(([a,op,b]) => {
    try { console.log(\`\${a} \${op} \${b} = \${safeCalculate(a,op,b)}\`); }
    catch (e) { console.log(\`Error: \${e.message}\`); }
});`,
          hints: [
            '💡 typeof value === "number" checks if it\'s actually a number',
            '💡 Use switch(operator) for the different operations',
            '💡 throw new Error("message") creates an error — catch it outside',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'js-m4-l3-q1',
              question:    'When does the "finally" block run?',
              options:     ['Only when no error occurs', 'Only when an error occurs', 'Always — whether or not an error occurs', 'Never automatically'],
              correct:     2,
              explanation: 'finally always runs, regardless of whether an error was thrown or caught. It\'s used for cleanup code that must run no matter what.',
            },
            {
              id:          'js-m4-l3-q2',
              question:    'What does "throw new Error(\'message\')" do?',
              options:     ['Logs a message', 'Pauses execution', 'Creates and throws an error that can be caught by try/catch', 'Exits the program'],
              correct:     2,
              explanation: 'throw stops the current function execution and creates an error that travels up the call stack until caught by a try/catch block.',
            },
          ],
        },
      },
    ],
  },

  // ════════════════════════════════════════════════
  //  MODULE 5 — DOM Manipulation
  // ════════════════════════════════════════════════
  {
    id:          'js-m5',
    courseId:    'javascript',
    title:       'DOM Manipulation',
    description: 'Make web pages interactive by reading and modifying HTML with JavaScript.',
    level:       'beginner',
    order:       5,
    icon:        '🌐',
    xpReward:    140,
    locked:      true,
    lessons: [

      {
        id:       'js-m5-l1',
        moduleId: 'js-m5',
        title:    'Selecting & Reading DOM Elements',
        order:    1,
        xpReward: 20,
        duration: '14 min',

        explanation: {
          title:   'The DOM — Talking to HTML',
          content: `# The Document Object Model (DOM)

The **DOM** is JavaScript's way of interacting with HTML. It represents every HTML element as a JavaScript object you can read and change.

## Selecting Elements

\`\`\`javascript
// By ID — returns one element
const heading = document.getElementById("main-title");

// By CSS selector — returns FIRST match
const btn     = document.querySelector(".btn-primary");
const input   = document.querySelector("input[type='text']");

// By CSS selector — returns ALL matches (NodeList)
const cards   = document.querySelectorAll(".card");
const buttons = document.querySelectorAll("button");
\`\`\`

## Reading Element Properties

\`\`\`javascript
const el = document.querySelector("h1");

el.textContent        // just the text
el.innerHTML          // HTML including tags
el.innerText          // visible text (respects CSS)

el.id                 // the id attribute
el.className          // the class attribute
el.getAttribute("href")       // any attribute
el.dataset.userId             // data-user-id attribute
\`\`\`

## Traversing the DOM

\`\`\`javascript
el.parentElement       // parent node
el.children            // direct children (HTMLCollection)
el.firstElementChild   // first child element
el.lastElementChild    // last child element
el.nextElementSibling  // next sibling
\`\`\``,
        },

        codeExample: {
          title:    'DOM Selection & Reading',
          language: 'html',
          code: `<!DOCTYPE html>
<html>
<head><title>DOM Demo</title></head>
<body>
  <h1 id="title">CodeGuru AI</h1>
  <p class="subtitle">Learn to Code</p>
  <ul id="course-list">
    <li data-id="py" class="course-item">Python</li>
    <li data-id="js" class="course-item">JavaScript</li>
    <li data-id="html" class="course-item">HTML/CSS</li>
  </ul>
  <button id="main-btn" class="btn">Click Me</button>

  <script>
    // Select by ID
    const title = document.getElementById("title");
    console.log("Title text:", title.textContent);

    // Select by class (first match)
    const subtitle = document.querySelector(".subtitle");
    console.log("Subtitle:", subtitle.innerText);

    // Select all list items
    const courses = document.querySelectorAll(".course-item");
    console.log("Course count:", courses.length);

    // Iterate NodeList
    courses.forEach(item => {
        console.log(\`Course: \${item.textContent} (id: \${item.dataset.id})\`);
    });

    // Traverse the DOM
    const list = document.getElementById("course-list");
    console.log("First course:", list.firstElementChild.textContent);
    console.log("Last course:", list.lastElementChild.textContent);
    console.log("Parent of list:", list.parentElement.tagName);
  </script>
</body>
</html>`,
          explanation: `- \`getElementById\` is fastest; \`querySelector\` is most flexible
- \`querySelectorAll\` returns a NodeList — use \`forEach\` to iterate
- \`textContent\` is raw text; \`innerHTML\` includes HTML tags
- \`dataset.propertyName\` accesses \`data-property-name\` attributes`,
        },

        exercise: {
          title:        'DOM Inspector',
          instructions: 'Build an HTML page with a heading, 3 paragraphs, and a list. Write JavaScript to: select all paragraphs, print their text to console, get the third list item using querySelectorAll, and read the heading text.',
          starterCode: `<!DOCTYPE html>
<html>
<head><title>DOM Exercise</title></head>
<body>
  <h1 id="main-heading">My Page</h1>
  <p class="content">First paragraph.</p>
  <p class="content">Second paragraph.</p>
  <p class="content">Third paragraph.</p>
  <ul id="items">
    <li>Item One</li>
    <li>Item Two</li>
    <li>Item Three</li>
  </ul>

  <script>
    // 1. Get heading text using getElementById
    const heading = document.getElementById("main-heading");
    console.log("Heading:", heading.textContent);

    // 2. Select all paragraphs and print each
    const paragraphs = document.querySelectorAll(".content");
    paragraphs.forEach((p, i) => console.log(\`P\${i+1}: \${p.textContent}\`));

    // 3. Get the THIRD list item
    const items = document.querySelectorAll("#items li");
    console.log("Third item:", items[2].textContent);

    // 4. Count total items
    console.log("Total items:", items.length);
  </script>
</body>
</html>`,
          solutionCode: `<!DOCTYPE html>
<html><head><title>DOM Exercise</title></head>
<body>
  <h1 id="main-heading">My Page</h1>
  <p class="content">First paragraph.</p>
  <p class="content">Second paragraph.</p>
  <p class="content">Third paragraph.</p>
  <ul id="items">
    <li>Item One</li><li>Item Two</li><li>Item Three</li>
  </ul>
  <script>
    const heading = document.getElementById("main-heading");
    console.log("Heading:", heading.textContent);
    const paragraphs = document.querySelectorAll(".content");
    paragraphs.forEach((p,i) => console.log(\`P\${i+1}: \${p.textContent}\`));
    const items = document.querySelectorAll("#items li");
    console.log("Third:", items[2].textContent);
    console.log("Total:", items.length);
  </script>
</body></html>`,
          hints: [
            '💡 getElementById("id") for single ID selection',
            '💡 querySelectorAll(".class") returns ALL matching elements',
            '💡 items[2] is the third item (zero-indexed)',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'js-m5-l1-q1',
              question:    'What does querySelectorAll() return?',
              options:     ['A single element', 'An array', 'A NodeList (array-like, use forEach)', 'Null if not found'],
              correct:     2,
              explanation: 'querySelectorAll() returns a NodeList — not exactly an array, but you can use forEach() and array indexing on it. Convert to array with Array.from() or [...nodeList] if you need all array methods.',
            },
            {
              id:          'js-m5-l1-q2',
              question:    'What is the difference between textContent and innerHTML?',
              options:     [
                'No difference',
                'textContent returns raw text; innerHTML includes HTML tags',
                'innerHTML returns raw text; textContent includes HTML',
                'textContent only works on headings',
              ],
              correct:     1,
              explanation: 'textContent returns only the text with no HTML. innerHTML returns the full HTML string including tags. For reading, textContent is safer; for writing with HTML tags, use innerHTML (but beware XSS!).',
            },
          ],
        },
      },

      {
        id:       'js-m5-l2',
        moduleId: 'js-m5',
        title:    'Modifying the DOM',
        order:    2,
        xpReward: 20,
        duration: '14 min',

        explanation: {
          title:   'Changing HTML with JavaScript',
          content: `# Modifying DOM Elements

## Changing Content & Attributes

\`\`\`javascript
const el = document.querySelector("h1");
el.textContent = "New Title";          // change text
el.innerHTML   = "<em>Italic!</em>";   // change HTML
el.setAttribute("class", "highlight");
el.removeAttribute("hidden");
el.id = "new-id";
\`\`\`

## Modifying CSS Classes

\`\`\`javascript
el.classList.add("active");          // add class
el.classList.remove("inactive");     // remove class
el.classList.toggle("highlight");    // add if missing, remove if present
el.classList.contains("active");     // check if class exists → boolean
\`\`\`

## Changing Inline Styles

\`\`\`javascript
el.style.color           = "red";
el.style.backgroundColor = "#1a1a2e";   // camelCase!
el.style.fontSize        = "18px";
el.style.display         = "none";      // hide element
el.style.display         = "block";     // show element
\`\`\`

## Creating & Adding Elements

\`\`\`javascript
// Create new element
const newLi = document.createElement("li");
newLi.textContent = "New Item";
newLi.classList.add("list-item");

// Add to DOM
const ul = document.querySelector("ul");
ul.appendChild(newLi);               // add at end
ul.prepend(newLi);                   // add at start
ul.removeChild(newLi);               // remove
newLi.remove();                      // remove self
\`\`\``,
        },

        codeExample: {
          title:    'Dynamic DOM Manipulation',
          language: 'html',
          code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .highlight { background: #ffd166; padding: 4px; border-radius: 4px; }
    .hidden    { display: none; }
    body       { font-family: Arial; padding: 20px; }
  </style>
</head>
<body>
  <h1 id="title">Course List</h1>
  <ul id="courses"></ul>
  <p id="count"></p>

  <script>
    const courses = [
        { name: "Python",     level: "beginner" },
        { name: "JavaScript", level: "beginner" },
        { name: "Java",       level: "intermediate" },
        { name: "React",      level: "advanced" },
    ];

    const list  = document.getElementById("courses");
    const count = document.getElementById("count");

    // Dynamically create list items
    courses.forEach(course => {
        const li   = document.createElement("li");
        const span = document.createElement("span");

        li.textContent    = course.name + " ";
        span.textContent  = course.level;
        span.style.background = course.level === "beginner" ? "#d1fae5" : "#fef3c7";
        span.style.padding    = "2px 8px";
        span.style.borderRadius = "99px";
        span.style.fontSize   = "12px";

        li.appendChild(span);
        list.appendChild(li);
    });

    // Update count
    count.textContent = \`Total: \${courses.length} courses\`;

    // Highlight the heading
    const title = document.getElementById("title");
    title.classList.add("highlight");

    // Modify existing content
    setTimeout(() => {
        title.textContent = "🎓 CodeGuru AI Courses";
    }, 2000);
  </script>
</body>
</html>`,
          explanation: `- \`createElement("tag")\` creates a new element — not in DOM yet
- \`appendChild(child)\` adds element as last child of parent
- \`classList.add/remove/toggle\` manages CSS classes cleanly
- \`style.property\` uses camelCase: \`backgroundColor\` not \`background-color\`
- Build elements fully in memory before adding to DOM for performance`,
        },

        exercise: {
          title:        'Dynamic Student List Builder',
          instructions: 'Create an HTML page. In JavaScript, build a dynamic student list from an array. Each list item should show the name, and a badge showing their score. Add a class "passing" to items with score >= 60.',
          starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial; padding: 20px; background: #f0f4f8; }
    li   { margin: 8px 0; padding: 10px; background: white; border-radius: 8px; }
    .passing { border-left: 4px solid green; }
    .failing { border-left: 4px solid red;   }
    .score   { float: right; font-weight: bold; }
  </style>
</head>
<body>
  <h1>Student Results</h1>
  <ul id="student-list"></ul>
  <p id="summary"></p>

  <script>
    const students = [
        { name: "Rahul",  score: 85 },
        { name: "Priya",  score: 92 },
        { name: "Amit",   score: 55 },
        { name: "Sneha",  score: 78 },
        { name: "Vikram", score: 45 },
    ];

    const list = document.getElementById("student-list");

    students.forEach(student => {
        const li    = document.createElement("li");
        const score = document.createElement("span");

        li.textContent    = student.name;
        score.textContent = student.score + "%";
        score.className   = "score";
        score.style.color = student.score >= 60 ? "green" : "red";

        li.classList.add(student.score >= 60 ? "passing" : "failing");
        li.appendChild(score);
        list.appendChild(li);
    });

    const passing = students.filter(s => s.score >= 60).length;
    document.getElementById("summary").textContent =
        \`\${passing}/\${students.length} students passed.\`;
  </script>
</body>
</html>`,
          solutionCode: `<!DOCTYPE html>
<html><head><style>
body{font-family:Arial;padding:20px}li{margin:8px 0;padding:10px;background:white;border-radius:8px}
.passing{border-left:4px solid green}.failing{border-left:4px solid red}.score{float:right;font-weight:bold}
</style></head><body>
<h1>Student Results</h1><ul id="student-list"></ul><p id="summary"></p>
<script>
const students=[{name:"Rahul",score:85},{name:"Priya",score:92},{name:"Amit",score:55},{name:"Sneha",score:78},{name:"Vikram",score:45}];
const list=document.getElementById("student-list");
students.forEach(s=>{
    const li=document.createElement("li");
    const sp=document.createElement("span");
    li.textContent=s.name; sp.textContent=s.score+"%"; sp.className="score";
    sp.style.color=s.score>=60?"green":"red";
    li.classList.add(s.score>=60?"passing":"failing");
    li.appendChild(sp); list.appendChild(li);
});
const pass=students.filter(s=>s.score>=60).length;
document.getElementById("summary").textContent=\`\${pass}/\${students.length} passed.\`;
</script></body></html>`,
          hints: [
            '💡 createElement("li") creates an li, then set textContent',
            '💡 classList.add(condition ? "passing" : "failing") adds the right class',
            '💡 appendChild adds the score span inside the li',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'js-m5-l2-q1',
              question:    'What does classList.toggle("active") do?',
              options:     [
                'Always adds the class',
                'Always removes the class',
                'Adds if absent, removes if present',
                'Only works if the element has no classes',
              ],
              correct:     2,
              explanation: 'classList.toggle() is a convenience method — if the class is present it removes it, if absent it adds it. Perfect for on/off states like showing/hiding a menu.',
            },
            {
              id:          'js-m5-l2-q2',
              question:    'Why use camelCase for style properties in JavaScript?',
              options:     [
                'It\'s just a convention',
                'JavaScript property names cannot contain hyphens',
                'CSS doesn\'t work in JavaScript',
                'It\'s faster',
              ],
              correct:     1,
              explanation: 'JavaScript property names cannot contain hyphens. So CSS "background-color" becomes element.style.backgroundColor in JS. "font-size" → fontSize, "border-radius" → borderRadius, etc.',
            },
          ],
        },
      },

      {
        id:       'js-m5-l3',
        moduleId: 'js-m5',
        title:    'Events & Event Listeners',
        order:    3,
        xpReward: 20,
        duration: '14 min',

        explanation: {
          title:   'Making Pages Interactive with Events',
          content: `# Events in JavaScript

**Events** are things that happen — clicks, key presses, form submissions, page loading. JavaScript lets you respond to them.

## Adding Event Listeners

\`\`\`javascript
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function(event) {
    console.log("Button clicked!");
    console.log(event.target);   // the element that was clicked
});

// Arrow function syntax
btn.addEventListener("click", (e) => {
    e.preventDefault();   // stop default behavior (e.g., form submit)
    console.log("Clicked!");
});
\`\`\`

## Common Events

| Event | Trigger |
|-------|---------|
| \`click\` | Mouse click |
| \`dblclick\` | Double click |
| \`mouseover\` | Mouse enters element |
| \`keydown\` | Key pressed |
| \`keyup\` | Key released |
| \`submit\` | Form submitted |
| \`input\` | Input value changes |
| \`change\` | Select/checkbox changed |
| \`load\` | Page fully loaded |

## Event Delegation

Instead of adding listeners to each child, add one to the parent:

\`\`\`javascript
const list = document.querySelector("ul");
list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("selected");
    }
});
\`\`\``,
        },

        codeExample: {
          title:    'Interactive Events',
          language: 'html',
          code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body  { font-family: Arial; padding: 20px; background: #f0f4f8; }
    input { padding: 8px; border: 2px solid #ccc; border-radius: 8px; width: 200px; }
    input:focus { border-color: #22c55e; outline: none; }
    button { padding: 8px 16px; background: #22c55e; color: white; border: none; border-radius: 8px; cursor: pointer; margin: 4px; }
    button:hover { background: #16a34a; }
    #output { margin-top: 16px; padding: 12px; background: white; border-radius: 8px; min-height: 40px; }
    li { cursor: pointer; padding: 6px; border-radius: 4px; }
    li:hover { background: #e0f2fe; }
    li.done { text-decoration: line-through; color: #94a3b8; }
  </style>
</head>
<body>
  <h2>Interactive Demo</h2>

  <input type="text" id="task-input" placeholder="Add a task...">
  <button id="add-btn">Add Task</button>
  <button id="clear-btn">Clear All</button>

  <ul id="task-list"></ul>
  <p id="count-display">0 tasks</p>

  <script>
    const input   = document.getElementById("task-input");
    const addBtn  = document.getElementById("add-btn");
    const clearBtn= document.getElementById("clear-btn");
    const list    = document.getElementById("task-list");
    const counter = document.getElementById("count-display");

    function updateCount() {
        const total = list.querySelectorAll("li").length;
        const done  = list.querySelectorAll("li.done").length;
        counter.textContent = \`\${done}/\${total} completed\`;
    }

    // Add task on button click
    addBtn.addEventListener("click", () => {
        const text = input.value.trim();
        if (!text) return;
        const li = document.createElement("li");
        li.textContent = text;
        list.appendChild(li);
        input.value = "";
        input.focus();
        updateCount();
    });

    // Add task on Enter key
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") addBtn.click();
    });

    // Toggle done on click (event delegation)
    list.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("done");
            updateCount();
        }
    });

    // Clear all
    clearBtn.addEventListener("click", () => {
        list.innerHTML = "";
        updateCount();
    });
  </script>
</body>
</html>`,
          explanation: `- \`addEventListener(type, handler)\` attaches an event listener
- The event object \`e\` has properties: \`e.target\`, \`e.key\`, \`e.preventDefault()\`
- Event delegation: listen on parent, check \`e.target\` to identify which child was clicked
- \`input.focus()\` returns focus to the input after adding a task`,
        },

        exercise: {
          title:        'Interactive Color Picker',
          instructions: 'Build a page with 4 colored buttons. When clicked, change the page background to that color. Display the current color name below. Add a "Reset" button that returns to white.',
          starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial; padding: 40px; transition: background 0.3s; text-align: center; }
    button { padding: 12px 24px; margin: 8px; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: bold; color: white; }
    #status { margin-top: 20px; font-size: 1.2rem; }
  </style>
</head>
<body>
  <h1>Color Picker</h1>
  <button data-color="#22c55e" data-name="Green">Green</button>
  <button data-color="#3b82f6" data-name="Blue">Blue</button>
  <button data-color="#f59e0b" data-name="Amber">Amber</button>
  <button data-color="#ef4444" data-name="Red">Red</button>
  <button id="reset-btn" style="background:#64748b;">Reset</button>
  <p id="status">Click a color!</p>

  <script>
    const buttons = document.querySelectorAll("[data-color]");
    const status  = document.getElementById("status");

    buttons.forEach(btn => {
        btn.style.backgroundColor = btn.dataset.color;
        btn.addEventListener("click", () => {
            document.body.style.backgroundColor = btn.dataset.color;
            status.textContent = \`Background: \${btn.dataset.name}\`;
        });
    });

    document.getElementById("reset-btn").addEventListener("click", () => {
        document.body.style.backgroundColor = "white";
        status.textContent = "Background: White (default)";
    });
  </script>
</body>
</html>`,
          solutionCode: `<!DOCTYPE html>
<html><head><style>
body{font-family:Arial;padding:40px;transition:background 0.3s;text-align:center}
button{padding:12px 24px;margin:8px;border:none;border-radius:8px;cursor:pointer;font-size:16px;font-weight:bold;color:white}
</style></head><body>
<h1>Color Picker</h1>
<button data-color="#22c55e" data-name="Green">Green</button>
<button data-color="#3b82f6" data-name="Blue">Blue</button>
<button data-color="#f59e0b" data-name="Amber">Amber</button>
<button data-color="#ef4444" data-name="Red">Red</button>
<button id="reset" style="background:#64748b">Reset</button>
<p id="status">Click a color!</p>
<script>
document.querySelectorAll("[data-color]").forEach(btn=>{
    btn.style.backgroundColor=btn.dataset.color;
    btn.addEventListener("click",()=>{
        document.body.style.backgroundColor=btn.dataset.color;
        document.getElementById("status").textContent="Background: "+btn.dataset.name;
    });
});
document.getElementById("reset").addEventListener("click",()=>{
    document.body.style.backgroundColor="white";
    document.getElementById("status").textContent="Reset to white";
});
</script></body></html>`,
          hints: [
            '💡 dataset.color reads the data-color attribute',
            '💡 document.body.style.backgroundColor changes the page background',
            '💡 CSS transition: background 0.3s makes the color change smooth',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'js-m5-l3-q1',
              question:    'What is event delegation and why is it useful?',
              options:     [
                'Adding the same listener to every element',
                'Adding a listener to a parent to handle events from its children — more efficient',
                'Removing event listeners after they fire once',
                'Using only built-in browser events',
              ],
              correct:     1,
              explanation: 'Event delegation adds ONE listener to a parent instead of many listeners to children. It\'s more memory-efficient and works for dynamically added elements. Use e.target to identify which child was clicked.',
            },
            {
              id:          'js-m5-l3-q2',
              question:    'What does e.preventDefault() do?',
              options:     [
                'Stops other listeners from firing',
                'Prevents the default browser behavior (e.g., stops a form from submitting)',
                'Removes the event listener',
                'Pauses the event',
              ],
              correct:     1,
              explanation: 'preventDefault() stops the browser\'s default action for that event — e.g., preventing a form submission, preventing a link from navigating, or preventing a key from being typed.',
            },
          ],
        },
      },
    ],
  },

  // ════════════════════════════════════════════════
  //  MODULE 6 — Async JavaScript
  // ════════════════════════════════════════════════
  {
    id:          'js-m6',
    courseId:    'javascript',
    title:       'Async JavaScript',
    description: 'Handle time-consuming operations with Promises and async/await — essential for APIs and web apps.',
    level:       'beginner',
    order:       6,
    icon:        '⏳',
    xpReward:    150,
    locked:      true,
    lessons: [

      {
        id:       'js-m6-l1',
        moduleId: 'js-m6',
        title:    'Callbacks & Promises',
        order:    1,
        xpReward: 20,
        duration: '14 min',

        explanation: {
          title:   'Asynchronous JavaScript',
          content: `# Asynchronous JavaScript

JavaScript is **single-threaded** — it can only do one thing at a time. But web operations (network requests, file reads, timers) take time. Async patterns let JavaScript wait without freezing.

## setTimeout & setInterval

\`\`\`javascript
// Run once after delay (milliseconds)
setTimeout(() => console.log("After 2 seconds!"), 2000);

// Run repeatedly
const id = setInterval(() => console.log("Every second"), 1000);
clearInterval(id);   // stop the interval
\`\`\`

## Callbacks — the old way

\`\`\`javascript
function fetchUser(id, callback) {
    setTimeout(() => {   // simulate network delay
        const user = { id, name: "Rahul" };
        callback(null, user);   // null = no error
    }, 1000);
}

fetchUser(1, (error, user) => {
    if (error) console.log("Error:", error);
    else       console.log("Got user:", user);
});
\`\`\`

## Promises — the better way

\`\`\`javascript
function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) resolve({ id, name: "Rahul" });
            else        reject(new Error("Invalid ID"));
        }, 1000);
    });
}

fetchUser(1)
    .then(user  => console.log("Got:", user))
    .catch(err  => console.log("Error:", err.message))
    .finally(() => console.log("Done"));
\`\`\``,
        },

        codeExample: {
          title:    'Promises in Action',
          language: 'javascript',
          code: `// Simulate an API call with a Promise
function getStudentData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const students = {
                1: { name: "Rahul",  score: 85, city: "Delhi"  },
                2: { name: "Priya",  score: 92, city: "Mumbai" },
                3: { name: "Amit",   score: 78, city: "Pune"   },
            };

            const student = students[id];
            if (student) {
                resolve(student);
            } else {
                reject(new Error(\`Student \${id} not found\`));
            }
        }, 500);  // 500ms delay
    });
}

// Chain promises
getStudentData(1)
    .then(student => {
        console.log("Found:", student.name);
        return student.score;   // pass to next .then
    })
    .then(score => {
        const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
        console.log("Grade:", grade);
    })
    .catch(err => console.log("Error:", err.message))
    .finally(()  => console.log("Request complete"));

// Test with invalid ID
getStudentData(99)
    .then(s  => console.log(s))
    .catch(e => console.log("Caught:", e.message));

// Promise.all — run multiple promises simultaneously
Promise.all([getStudentData(1), getStudentData(2), getStudentData(3)])
    .then(students => {
        console.log("All students:", students.map(s => s.name));
    });`,
          explanation: `- A Promise is either pending, resolved (success), or rejected (failure)
- \`.then()\` runs on success, \`.catch()\` on failure, \`.finally()\` always
- You can chain \`.then()\` — each one receives what the previous returned
- \`Promise.all()\` waits for ALL promises to resolve — fails if any rejects`,
        },

        exercise: {
          title:        'Promise Chain',
          instructions: 'Write three functions that each return a Promise with a delay: getUser(id), getCourses(userId), and getProgress(courseId). Chain them so you fetch a user, then their courses, then progress for the first course.',
          starterCode: `function getUser(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id, name: "Rahul", plan: "pro" }), 300);
    });
}

function getCourses(userId) {
    return new Promise(resolve => {
        setTimeout(() => resolve(["python", "javascript"]), 200);
    });
}

function getProgress(courseId) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ courseId, completed: 5, total: 18 }), 200);
    });
}

// Chain them: user → courses → progress for first course
getUser(1)
    .then(user => {
        console.log("User:", user.name);
        return getCourses(user.id);
    })
    .then(courses => {
        console.log("Courses:", courses);
        return getProgress(courses[0]);
    })
    .then(progress => {
        console.log(\`Progress: \${progress.completed}/\${progress.total} lessons\`);
    })
    .catch(err => console.log("Error:", err.message));`,
          solutionCode: `function getUser(id) {
    return new Promise(resolve => setTimeout(() => resolve({ id, name: "Rahul", plan: "pro" }), 300));
}
function getCourses(userId) {
    return new Promise(resolve => setTimeout(() => resolve(["python","javascript"]), 200));
}
function getProgress(courseId) {
    return new Promise(resolve => setTimeout(() => resolve({ courseId, completed: 5, total: 18 }), 200));
}
getUser(1)
    .then(user  => { console.log("User:", user.name); return getCourses(user.id); })
    .then(courses => { console.log("Courses:", courses); return getProgress(courses[0]); })
    .then(prog  => console.log(\`Progress: \${prog.completed}/\${prog.total}\`))
    .catch(err  => console.log("Error:", err.message));`,
          hints: [
            '💡 Return the next promise from inside .then() to chain it',
            '💡 Each .then() receives what the previous one returned',
            '💡 courses[0] gets the first course from the array',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'js-m6-l1-q1',
              question:    'What are the three states of a Promise?',
              options:     [
                'loading, success, failure',
                'pending, resolved, rejected',
                'waiting, done, error',
                'start, middle, end',
              ],
              correct:     1,
              explanation: 'A Promise starts as "pending", then settles to either "resolved" (success, .then fires) or "rejected" (failure, .catch fires). Once settled, a Promise never changes state again.',
            },
            {
              id:          'js-m6-l1-q2',
              question:    'What does Promise.all([p1, p2, p3]) do?',
              options:     [
                'Runs promises one after another',
                'Runs all promises at the same time and resolves when ALL complete',
                'Returns the first promise to resolve',
                'Ignores any rejected promises',
              ],
              correct:     1,
              explanation: 'Promise.all() runs all promises concurrently and resolves with an array of all results when ALL have resolved. If ANY promise rejects, Promise.all immediately rejects.',
            },
          ],
        },
      },

      {
        id:       'js-m6-l2',
        moduleId: 'js-m6',
        title:    'async/await',
        order:    2,
        xpReward: 20,
        duration: '12 min',

        explanation: {
          title:   'async/await — Write Async Code Like Sync',
          content: `# async / await

\`async/await\` makes Promise-based code look and read like synchronous code — much cleaner than chaining \`.then()\`.

## async function

\`\`\`javascript
async function fetchData() {
    // This function always returns a Promise
    return "data";   // auto-wrapped in Promise.resolve("data")
}
\`\`\`

## await — pause until Promise resolves

\`\`\`javascript
async function getUser() {
    const response = await fetch("https://api.example.com/user/1");
    const data     = await response.json();
    return data;
}
\`\`\`

## Error handling with try/catch

\`\`\`javascript
async function loadData() {
    try {
        const user    = await getUser(1);
        const courses = await getCourses(user.id);
        return { user, courses };
    } catch (error) {
        console.log("Failed:", error.message);
        return null;
    }
}
\`\`\`

## Parallel with await

\`\`\`javascript
// Sequential (slower — waits for each)
const a = await fetch(url1);
const b = await fetch(url2);

// Parallel (faster — both start at once)
const [a, b] = await Promise.all([fetch(url1), fetch(url2)]);
\`\`\``,
        },

        codeExample: {
          title:    'async/await in Practice',
          language: 'javascript',
          code: `// Simulate async operations
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function getStudent(id) {
    await delay(300);
    const students = {
        1: { id:1, name:"Rahul", plan:"pro" },
        2: { id:2, name:"Priya", plan:"bundle" }
    };
    if (!students[id]) throw new Error(\`Student \${id} not found\`);
    return students[id];
}

async function getEnrollments(studentId) {
    await delay(200);
    return { studentId, courses: ["python", "javascript"], progress: 35 };
}

// Clean async/await version
async function loadStudentDashboard(studentId) {
    try {
        console.log("Loading...");

        // Sequential (second waits for first)
        const student     = await getStudent(studentId);
        const enrollments = await getEnrollments(student.id);

        console.log(\`Dashboard for: \${student.name}\`);
        console.log(\`Plan: \${student.plan}\`);
        console.log(\`Courses: \${enrollments.courses.join(", ")}\`);
        console.log(\`Progress: \${enrollments.progress}%\`);

        return { student, enrollments };

    } catch (err) {
        console.log("Error loading dashboard:", err.message);
        return null;
    }
}

// Load two students in parallel
async function loadMultiple() {
    const [s1, s2] = await Promise.all([
        loadStudentDashboard(1),
        loadStudentDashboard(2)
    ]);
    console.log("Both loaded!");
}

loadStudentDashboard(1);
loadStudentDashboard(99);   // Will hit the catch block`,
          explanation: `- \`async\` before a function means it always returns a Promise
- \`await\` pauses execution until the Promise resolves — only works inside async functions
- Use \`try/catch\` with async/await for error handling (cleaner than .catch())
- \`await Promise.all([...])\` runs multiple async operations in parallel`,
        },

        exercise: {
          title:        'Async Data Fetcher',
          instructions: 'Write an async function fetchCourseData(courseId) that simulates: 1) fetching course info (300ms delay), 2) fetching lessons for that course (200ms), and 3) counting completed lessons. Handle errors if courseId is invalid.',
          starterCode: `const delay = ms => new Promise(r => setTimeout(r, ms));

const courseDB = {
    python: { title: "Python", instructor: "CodeGuru", price: 1499 },
    js:     { title: "JavaScript", instructor: "CodeGuru", price: 2999 },
};

const lessonsDB = {
    python: ["Variables", "Loops", "Functions", "OOP", "Modules"],
    js:     ["Basics", "Arrays", "Objects", "DOM", "Async"],
};

async function fetchCourseData(courseId) {
    try {
        // Fetch course info
        await delay(300);
        const course = courseDB[courseId];
        if (!course) throw new Error(\`Course "\${courseId}" not found\`);

        // Fetch lessons
        await delay(200);
        const lessons = lessonsDB[courseId] || [];

        return {
            ...course,
            id:          courseId,
            lessonCount: lessons.length,
            lessons
        };
    } catch (err) {
        console.log("Error:", err.message);
        return null;
    }
}

// Test
async function main() {
    const python = await fetchCourseData("python");
    console.log("Course:", python?.title, "- Lessons:", python?.lessonCount);

    const invalid = await fetchCourseData("java");
    console.log("Invalid result:", invalid);  // null
}

main();`,
          solutionCode: `const delay = ms => new Promise(r => setTimeout(r, ms));
const courseDB = { python:{title:"Python",instructor:"CodeGuru",price:1499}, js:{title:"JavaScript",instructor:"CodeGuru",price:2999} };
const lessonsDB = { python:["Variables","Loops","Functions","OOP","Modules"], js:["Basics","Arrays","Objects","DOM","Async"] };

async function fetchCourseData(courseId) {
    try {
        await delay(300);
        const course = courseDB[courseId];
        if (!course) throw new Error(\`Course "\${courseId}" not found\`);
        await delay(200);
        const lessons = lessonsDB[courseId] || [];
        return { ...course, id: courseId, lessonCount: lessons.length, lessons };
    } catch(err) { console.log("Error:", err.message); return null; }
}

async function main() {
    const python = await fetchCourseData("python");
    console.log("Course:", python?.title, "Lessons:", python?.lessonCount);
    const invalid = await fetchCourseData("java");
    console.log("Invalid:", invalid);
}
main();`,
          hints: [
            '💡 await delay(300) simulates network latency',
            '💡 if (!course) throw new Error("message") triggers the catch block',
            '💡 ...course spreads all course properties into the returned object',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'js-m6-l2-q1',
              question:    'Can you use "await" outside of an async function?',
              options:     [
                'Yes, anywhere',
                'No, await only works inside async functions (or top-level modules)',
                'Only in class methods',
                'Only in arrow functions',
              ],
              correct:     1,
              explanation: 'await can only be used inside async functions (or at top-level in ES modules). Using await outside causes a SyntaxError. You must mark the containing function as async.',
            },
            {
              id:          'js-m6-l2-q2',
              question:    'What is the main advantage of async/await over .then() chains?',
              options:     [
                'It\'s faster',
                'It doesn\'t use Promises',
                'Code reads like synchronous code — easier to write and debug',
                'It automatically handles all errors',
              ],
              correct:     2,
              explanation: 'async/await is syntactic sugar over Promises. The key benefit is readability — code flows top to bottom like synchronous code instead of nested callbacks or chained .then() calls.',
            },
          ],
        },
      },

      {
        id:       'js-m6-l3',
        moduleId: 'js-m6',
        title:    'Fetch API & Working with APIs',
        order:    3,
        xpReward: 25,
        duration: '16 min',

        explanation: {
          title:   'Fetching Data from the Internet',
          content: `# The Fetch API

The **Fetch API** is the modern way to make HTTP requests to external APIs from JavaScript.

## Basic GET Request

\`\`\`javascript
async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
    }

    const data = await response.json();
    return data;
}
\`\`\`

## POST Request (sending data)

\`\`\`javascript
async function createPost(title, body) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body, userId: 1 }),
    });

    const created = await response.json();
    return created;
}
\`\`\`

## Response Methods

\`\`\`javascript
response.json()    // parse JSON body → object
response.text()    // get body as string
response.ok        // true if status 200-299
response.status    // HTTP status code (200, 404, 500)
\`\`\`

## JSON — JavaScript Object Notation

\`\`\`javascript
// Object → JSON string
JSON.stringify({ name: "Rahul", age: 21 })
// '{"name":"Rahul","age":21}'

// JSON string → Object
JSON.parse('{"name":"Rahul","age":21}')
// { name: "Rahul", age: 21 }
\`\`\``,
        },

        codeExample: {
          title:    'Fetch API in Action',
          language: 'javascript',
          code: `// Using a free public API
async function fetchPosts() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=3"
        );

        if (!response.ok) {
            throw new Error(\`Failed: \${response.status}\`);
        }

        const posts = await response.json();

        console.log(\`Fetched \${posts.length} posts:\`);
        posts.forEach(post => {
            console.log(\`  [\${post.id}] \${post.title.substring(0, 40)}...\`);
        });

        return posts;
    } catch (err) {
        console.log("Fetch error:", err.message);
        return [];
    }
}

// POST — create new data
async function createPost(title, body) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ title, body, userId: 1 }),
    });

    const created = await response.json();
    console.log("Created post ID:", created.id);
    return created;
}

// JSON conversion
const user = { name: "Rahul", score: 95, courses: ["python", "js"] };
const jsonStr = JSON.stringify(user, null, 2);  // null, 2 = pretty print
console.log("JSON:", jsonStr);

const parsed = JSON.parse(jsonStr);
console.log("Parsed:", parsed.courses);

// Run async operations
fetchPosts();
createPost("My First Post", "Hello from CodeGuru AI!");`,
          explanation: `- Always check \`response.ok\` before calling \`response.json()\`
- \`await response.json()\` parses the JSON response body
- POST requests need \`method\`, \`headers\`, and \`body\` in the options
- \`JSON.stringify(obj, null, 2)\` creates pretty-printed JSON
- Wrap fetch calls in try/catch to handle network errors`,
        },

        exercise: {
          title:        'GitHub User Finder',
          instructions: 'Write an async function getGitHubUser(username) that fetches user data from the GitHub API (https://api.github.com/users/{username}). Display their name, public repos count, and followers. Handle 404 (user not found) separately.',
          starterCode: `async function getGitHubUser(username) {
    try {
        const response = await fetch(\`https://api.github.com/users/\${username}\`);

        if (response.status === 404) {
            throw new Error(\`User "\${username}" not found on GitHub\`);
        }

        if (!response.ok) {
            throw new Error(\`GitHub API error: \${response.status}\`);
        }

        const user = await response.json();

        return {
            name:     user.name || user.login,
            username: user.login,
            repos:    user.public_repos,
            followers: user.followers,
            bio:      user.bio || "No bio",
        };
    } catch (err) {
        console.log("Error:", err.message);
        return null;
    }
}

async function main() {
    const user = await getGitHubUser("torvalds");
    if (user) {
        console.log(\`Name: \${user.name}\`);
        console.log(\`Repos: \${user.repos}\`);
        console.log(\`Followers: \${user.followers}\`);
    }

    // Test 404
    await getGitHubUser("this_user_definitely_does_not_exist_12345");
}

main();`,
          solutionCode: `async function getGitHubUser(username) {
    try {
        const response = await fetch(\`https://api.github.com/users/\${username}\`);
        if (response.status === 404) throw new Error(\`User "\${username}" not found\`);
        if (!response.ok) throw new Error(\`API error: \${response.status}\`);
        const user = await response.json();
        return { name: user.name||user.login, username: user.login, repos: user.public_repos, followers: user.followers, bio: user.bio||"No bio" };
    } catch(err) { console.log("Error:", err.message); return null; }
}
async function main() {
    const user = await getGitHubUser("torvalds");
    if (user) { console.log(\`\${user.name}: \${user.repos} repos, \${user.followers} followers\`); }
    await getGitHubUser("this_user_definitely_does_not_exist_12345");
}
main();`,
          hints: [
            '💡 Check response.status === 404 BEFORE checking response.ok',
            '💡 const user = await response.json() parses the GitHub response',
            '💡 user.name might be null — use || to fallback: user.name || user.login',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'js-m6-l3-q1',
              question:    'What does response.ok check?',
              options:     [
                'If the data was valid JSON',
                'If the HTTP status code is in the 200-299 range',
                'If the response has data',
                'If the network connection is active',
              ],
              correct:     1,
              explanation: 'response.ok is true if status is 200-299 (success range). It\'s false for 404, 500, etc. Always check this before calling response.json() to avoid parsing error responses as data.',
            },
            {
              id:          'js-m6-l3-q2',
              question:    'What does JSON.stringify() do?',
              options:     [
                'Parses a JSON string into a JavaScript object',
                'Converts a JavaScript object into a JSON string',
                'Fetches data from a URL',
                'Validates JSON format',
              ],
              correct:     1,
              explanation: 'JSON.stringify() converts a JavaScript object/array into a JSON string. JSON.parse() does the reverse. You need JSON.stringify() when sending data in a fetch() request body.',
            },
          ],
        },
      },
    ],
  },
];
