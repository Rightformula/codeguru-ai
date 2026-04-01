// src/data/courses/javascript-extended.ts
// Modules 3–6 for JavaScript (Beginner)
import type { Module } from '@/types/course';

export const javascriptModules3to6: Module[] = [

  // ════════════════════════════════════════════════
  //  MODULE 3 — Arrays & Array Methods
  // ════════════════════════════════════════════════
  {
    id: 'js-m3', courseId: 'javascript',
    title: 'Arrays & Array Methods',
    description: 'JavaScript\'s most powerful data structure. Master map, filter, reduce and modern array methods.',
    level: 'beginner', order: 3, icon: '📦', xpReward: 130, locked: true,
    lessons: [
      {
        id: 'js-m3-l1', moduleId: 'js-m3',
        title: 'Arrays Fundamentals', order: 1, xpReward: 15, duration: '12 min',
        explanation: {
          title: 'Arrays — Ordered Collections',
          content: `# JavaScript Arrays

An **array** stores multiple values in a single variable, ordered by index.

\`\`\`javascript
const fruits  = ["apple", "banana", "mango"];
const scores  = [95, 87, 72, 100];
const mixed   = ["Rahul", 21, true, null];
const empty   = [];
\`\`\`

## Accessing & Modifying

\`\`\`javascript
console.log(fruits[0]);         // "apple"
console.log(fruits.at(-1));     // "mango" (last — modern JS!)
fruits[1] = "grape";            // modify in place
\`\`\`

## Core Methods

\`\`\`javascript
fruits.push("kiwi");            // add to end → returns new length
fruits.pop();                   // remove from end → returns removed item
fruits.unshift("pear");         // add to beginning
fruits.shift();                 // remove from beginning
fruits.splice(1, 2);            // remove 2 items starting at index 1
fruits.splice(1, 0, "mango");   // insert at index 1
\`\`\`

## Useful Properties & Methods

\`\`\`javascript
fruits.length                    // number of items
fruits.indexOf("banana")         // index of item (-1 if not found)
fruits.includes("apple")         // true/false
fruits.join(" — ")               // "apple — banana — mango"
fruits.reverse()                 // reverses in place
fruits.slice(1, 3)               // new array [banana, mango] — non-destructive
[...fruits, ...scores]           // spread — combine arrays
\`\`\``,
        },
        codeExample: {
          title: 'Arrays in Action',
          language: 'javascript',
          code: `// Array creation
const courses = ["Python", "JavaScript", "HTML/CSS", "Java"];
const prices  = [1499, 2999, 3599, 5399];

console.log("Total courses:", courses.length);
console.log("First:", courses[0]);
console.log("Last:", courses.at(-1));

// Add / Remove
courses.push("React");
console.log("After push:", courses);

const removed = courses.pop();
console.log("Removed:", removed);
console.log("After pop:", courses);

// Searching
console.log("Index of Java:", courses.indexOf("Java"));
console.log("Has Python?:", courses.includes("Python"));

// Joining and slicing
console.log("Joined:", courses.join(" | "));
const first2 = courses.slice(0, 2);
console.log("First 2:", first2);

// Spread to combine
const allInfo = courses.map((course, i) => \`\${course}: ₹\${prices[i]}\`);
console.log("Course prices:", allInfo);

// Destructuring assignment
const [first, second, ...rest] = courses;
console.log("First:", first, "| Second:", second, "| Rest:", rest);`,
          explanation: `- \`.at(-1)\` is the modern way to get the last element (no need for \`arr[arr.length-1]\`)
- \`.push()\` returns the new length; \`.pop()\` returns the removed item
- \`.slice(start, end)\` is non-destructive — returns a new array; \`.splice()\` modifies in place
- Spread operator \`...\` expands an array in place
- Array destructuring: \`const [a, b, ...rest] = arr\` unpacks into variables`,
        },
        exercise: {
          title: 'Shopping Cart Manager',
          instructions: 'Create a shoppingCart array. Add 3 items, remove the last item, check if a specific item exists, and print a formatted receipt with item number and name.',
          starterCode: `const shoppingCart = [];

// Add these items: "Laptop", "Mouse", "Keyboard", "Monitor"
// your code here

// Remove the last item
// your code here

// Check if "Mouse" is in the cart
const hasMouse = shoppingCart.includes("Mouse");
console.log("Has Mouse:", hasMouse);

// Print receipt
console.log("\\n=== Shopping Cart ===");
shoppingCart.forEach((item, index) => {
  console.log(\`\${index + 1}. \${item}\`);
});
console.log(\`Total items: \${shoppingCart.length}\`);`,
          solutionCode: `const shoppingCart = [];
shoppingCart.push("Laptop");
shoppingCart.push("Mouse");
shoppingCart.push("Keyboard");
shoppingCart.push("Monitor");
shoppingCart.pop();
const hasMouse = shoppingCart.includes("Mouse");
console.log("Has Mouse:", hasMouse);
console.log("\n=== Shopping Cart ===");
shoppingCart.forEach((item, index) => {
  console.log(\`\${index + 1}. \${item}\`);
});
console.log(\`Total items: \${shoppingCart.length}\`);`,
          hints: [
            '💡 Use .push("item") four times or push all at once: shoppingCart.push("Laptop", "Mouse", ...)',
            '💡 .pop() removes and returns the last item',
            '💡 .includes("Mouse") returns true or false',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'js-m3-l1-q1',
              question: 'What does .push() return?',
              options: ['The added item', 'The new length of the array', 'The array itself', 'undefined'],
              correct: 1,
              explanation: '.push() adds one or more items to the end of an array and returns the new length of the array.',
            },
            {
              id: 'js-m3-l1-q2',
              question: 'What is the difference between .slice() and .splice()?',
              options: [
                'No difference',
                '.slice() returns a new array without changing original; .splice() modifies the original array',
                '.splice() returns a new array; .slice() modifies the original',
                '.slice() only works with strings',
              ],
              correct: 1,
              explanation: '.slice(start, end) is non-destructive — it returns a new sub-array and does not change the original. .splice(start, deleteCount) modifies the original array in place.',
            },
          ],
        },
      },
      {
        id: 'js-m3-l2', moduleId: 'js-m3',
        title: 'map, filter, reduce', order: 2, xpReward: 20, duration: '14 min',
        explanation: {
          title: 'Functional Array Methods',
          content: `# The Big Three Array Methods

These three methods transform arrays without loops — the "functional" style of JavaScript.

## .map() — Transform every item

Returns a **new array** with each item transformed.

\`\`\`javascript
const nums    = [1, 2, 3, 4, 5];
const doubled = nums.map(n => n * 2);   // [2, 4, 6, 8, 10]
const squared = nums.map(n => n ** 2);  // [1, 4, 9, 16, 25]
\`\`\`

## .filter() — Keep items matching a condition

Returns a **new array** with only items that pass the test.

\`\`\`javascript
const ages   = [12, 18, 25, 15, 30, 17, 21];
const adults = ages.filter(age => age >= 18);   // [18, 25, 30, 21]
\`\`\`

## .reduce() — Reduce array to a single value

The most powerful — accumulates a result across all items.

\`\`\`javascript
const nums  = [10, 20, 30, 40];
const total = nums.reduce((acc, curr) => acc + curr, 0);  // 100
//                         ↑            ↑              ↑
//                   accumulator     current value   initial value
\`\`\`

## Chaining — combine multiple methods

\`\`\`javascript
const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .filter(n => n % 2 === 0)    // [2, 4, 6, 8, 10]
  .map(n => n * n)              // [4, 16, 36, 64, 100]
  .reduce((acc, n) => acc + n, 0);  // 220
\`\`\`

## Other useful methods

\`\`\`javascript
arr.find(fn)       // first item matching condition (or undefined)
arr.findIndex(fn)  // index of first match (-1 if none)
arr.some(fn)       // true if ANY item passes
arr.every(fn)      // true if ALL items pass
arr.flat()         // flatten nested arrays
arr.flatMap(fn)    // map then flatten
\`\`\``,
        },
        codeExample: {
          title: 'map, filter, reduce in Practice',
          language: 'javascript',
          code: `const students = [
  { name: "Rahul",   score: 88, course: "Python"     },
  { name: "Priya",   score: 54, course: "JavaScript" },
  { name: "Arjun",   score: 72, course: "Python"     },
  { name: "Meera",   score: 95, course: "JavaScript" },
  { name: "Kabir",   score: 41, course: "HTML/CSS"   },
  { name: "Divya",   score: 79, course: "Python"     },
];

// map — extract all names
const names = students.map(s => s.name);
console.log("Names:", names);

// filter — only students who passed
const passed = students.filter(s => s.score >= 60);
console.log("Passed:", passed.map(s => s.name));

// reduce — total score
const totalScore = students.reduce((sum, s) => sum + s.score, 0);
console.log("Total score:", totalScore);
console.log("Average:", (totalScore / students.length).toFixed(1));

// Chaining — names of Python students sorted by score
const topPython = students
  .filter(s => s.course === "Python")
  .sort((a, b) => b.score - a.score)
  .map(s => \`\${s.name} (\${s.score})\`);
console.log("Python ranking:", topPython);

// find — first student with score > 90
const star = students.find(s => s.score > 90);
console.log("Star student:", star?.name);

// some / every
const anyFailed = students.some(s => s.score < 60);
const allPassed  = students.every(s => s.score >= 60);
console.log("Any failed?", anyFailed, "| All passed?", allPassed);`,
          explanation: `- \`.map()\`, \`.filter()\`, \`.reduce()\` never modify the original array
- \`.sort((a, b) => b.score - a.score)\` sorts descending — positive return means b comes first
- \`.find()\` returns the first matching item (not an array); \`.filter()\` returns all matches
- Optional chaining (\`star?.name\`) prevents errors if \`.find()\` returns undefined
- Method chaining works because each returns a new array`,
        },
        exercise: {
          title: 'Sales Dashboard',
          instructions: 'Given a sales array, use map/filter/reduce to: 1) Get all sales above ₹10,000. 2) Calculate total revenue. 3) Find the highest single sale. 4) Create a formatted summary string for each sale.',
          starterCode: `const sales = [
  { product: "Laptop",  amount: 45000, region: "North" },
  { product: "Phone",   amount: 8500,  region: "South" },
  { product: "Tablet",  amount: 22000, region: "East"  },
  { product: "Watch",   amount: 6000,  region: "West"  },
  { product: "Earbuds", amount: 3500,  region: "North" },
  { product: "Monitor", amount: 18000, region: "South" },
];

// 1. Sales above ₹10,000
const bigSales = sales.filter(/* your code */);
console.log("Big sales:", bigSales.map(s => s.product));

// 2. Total revenue
const totalRevenue = sales.reduce(/* your code */, 0);
console.log("Total revenue: ₹" + totalRevenue.toLocaleString("en-IN"));

// 3. Highest sale
const highestSale = sales.reduce(/* your code */);
console.log("Highest sale:", highestSale.product, "₹" + highestSale.amount);

// 4. Formatted summary
const summary = sales.map(s => \`\${s.product} (\${s.region}): ₹\${s.amount.toLocaleString("en-IN")}\`);
summary.forEach(line => console.log(line));`,
          solutionCode: `const sales = [
  { product: "Laptop",  amount: 45000, region: "North" },
  { product: "Phone",   amount: 8500,  region: "South" },
  { product: "Tablet",  amount: 22000, region: "East"  },
  { product: "Watch",   amount: 6000,  region: "West"  },
  { product: "Earbuds", amount: 3500,  region: "North" },
  { product: "Monitor", amount: 18000, region: "South" },
];
const bigSales = sales.filter(s => s.amount > 10000);
console.log("Big sales:", bigSales.map(s => s.product));
const totalRevenue = sales.reduce((sum, s) => sum + s.amount, 0);
console.log("Total revenue: ₹" + totalRevenue.toLocaleString("en-IN"));
const highestSale = sales.reduce((max, s) => s.amount > max.amount ? s : max);
console.log("Highest sale:", highestSale.product);
const summary = sales.map(s => \`\${s.product} (\${s.region}): ₹\${s.amount.toLocaleString("en-IN")}\`);
summary.forEach(line => console.log(line));`,
          hints: [
            '💡 filter: s => s.amount > 10000',
            '💡 reduce for total: (sum, s) => sum + s.amount, 0',
            '💡 reduce for max: (max, s) => s.amount > max.amount ? s : max',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'js-m3-l2-q1',
              question: 'What does .map() return?',
              options: ['The modified original array', 'A new array with transformed items', 'A single value', 'undefined'],
              correct: 1,
              explanation: '.map() returns a brand new array of the same length where each item has been transformed by the callback. The original array is never modified.',
            },
            {
              id: 'js-m3-l2-q2',
              question: 'In reduce((acc, curr) => acc + curr, 0), what is 0?',
              options: ['The first element', 'The final result', 'The initial value of the accumulator', 'The step size'],
              correct: 2,
              explanation: 'The second argument to .reduce() is the initial value of the accumulator. Starting at 0 ensures the sum starts at zero, not at the first array element.',
            },
          ],
        },
      },
      {
        id: 'js-m3-l3', moduleId: 'js-m3',
        title: 'Loops & Iteration', order: 3, xpReward: 20, duration: '13 min',
        explanation: {
          title: 'Every Way to Loop in JavaScript',
          content: `# JavaScript Loops

## for loop — when you know the count

\`\`\`javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
\`\`\`

## while loop — when condition-driven

\`\`\`javascript
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
\`\`\`

## for...of — iterate over values (arrays, strings)

\`\`\`javascript
const fruits = ["apple", "banana", "mango"];
for (const fruit of fruits) {
  console.log(fruit);
}

for (const char of "hello") {
  console.log(char);
}
\`\`\`

## for...in — iterate over keys (objects)

\`\`\`javascript
const person = { name: "Rahul", age: 21 };
for (const key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}
\`\`\`

## forEach — array method (no break/continue)

\`\`\`javascript
[1, 2, 3].forEach((item, index) => {
  console.log(\`\${index}: \${item}\`);
});
\`\`\`

## Loop control: break & continue

\`\`\`javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) break;      // stop at 5
  if (i % 2 === 0) continue;  // skip even
  console.log(i);          // 1, 3
}
\`\`\``,
        },
        codeExample: {
          title: 'All Loop Types',
          language: 'javascript',
          code: `// for...of — array values
const languages = ["Python", "JavaScript", "Java", "HTML/CSS"];
console.log("=== for...of ===");
for (const lang of languages) {
  console.log(\`  Learning: \${lang}\`);
}

// for...in — object keys
const student = { name: "Priya", age: 20, course: "JavaScript", gpa: 3.8 };
console.log("\\n=== for...in ===");
for (const key in student) {
  console.log(\`  \${key}: \${student[key]}\`);
}

// forEach with index
console.log("\\n=== forEach ===");
languages.forEach((lang, i) => {
  console.log(\`  \${i + 1}. \${lang}\`);
});

// while — password attempt simulation
console.log("\\n=== while ===");
const correctPIN = "1234";
let attempts = 0;
const guesses = ["0000", "9999", "1234"];  // simulate user inputs
while (attempts < guesses.length) {
  const guess = guesses[attempts++];
  if (guess === correctPIN) {
    console.log(\`  Correct PIN! (\${attempts} attempts)\`);
    break;
  }
  console.log(\`  Wrong: \${guess}\`);
}

// Nested loops — multiplication table
console.log("\\n=== Nested loops ===");
for (let i = 1; i <= 3; i++) {
  const row = [];
  for (let j = 1; j <= 5; j++) {
    row.push(\`\${i}×\${j}=\${i*j}\`);
  }
  console.log(row.join("  "));
}`,
          explanation: `- \`for...of\` iterates over values — use for arrays, strings, Sets, Maps
- \`for...in\` iterates over keys — use for plain objects
- \`forEach\` is clean but can't use break/continue — use \`for...of\` when you need those
- In a for loop: \`let i = 0\` (init); \`i < 5\` (condition checked each time); \`i++\` (run after each iteration)`,
        },
        exercise: {
          title: 'Data Table Generator',
          instructions: 'Use nested loops to generate a multiplication table from 1×1 to 5×5. Format each cell as "N×M=R" where each row is printed on one line, with cells separated by " | ".',
          starterCode: `// Generate a 5x5 multiplication table
// Each row: "1×1=1 | 1×2=2 | 1×3=3 | 1×4=4 | 1×5=5"

for (let i = 1; i <= 5; i++) {
  const row = [];
  for (let j = 1; j <= 5; j++) {
    row.push(\`\${i}×\${j}=\${i*j}\`);
  }
  console.log(row.join(" | "));
}`,
          solutionCode: `for (let i = 1; i <= 5; i++) {
  const row = [];
  for (let j = 1; j <= 5; j++) {
    row.push(\`\${i}×\${j}=\${i*j}\`);
  }
  console.log(row.join(" | "));
}`,
          hints: [
            '💡 Outer loop for rows (i), inner loop for columns (j)',
            '💡 Build each row as an array, then join with " | "',
            '💡 Template literal: `${i}×${j}=${i*j}`',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'js-m3-l3-q1',
              question: 'Which loop should you use to iterate over an object\'s properties?',
              options: ['for...of', 'for...in', 'while', 'forEach'],
              correct: 1,
              explanation: 'for...in iterates over an object\'s enumerable property keys. for...of iterates over iterable values (arrays, strings, etc.) but does NOT work on plain objects.',
            },
            {
              id: 'js-m3-l3-q2',
              question: 'What is the limitation of forEach() compared to for...of?',
              options: [
                'forEach is slower',
                'forEach cannot use break or continue to stop iteration early',
                'forEach only works on strings',
                'forEach cannot access the index',
              ],
              correct: 1,
              explanation: 'forEach() cannot be stopped early — break and continue do not work inside it. If you need to stop early, use for...of or a regular for loop.',
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
    id: 'js-m4', courseId: 'javascript',
    title: 'Objects & Prototypes',
    description: 'Deep dive into JavaScript objects, methods, destructuring, and the prototype chain.',
    level: 'beginner', order: 4, icon: '🗂️', xpReward: 140, locked: true,
    lessons: [
      {
        id: 'js-m4-l1', moduleId: 'js-m4',
        title: 'Objects Deep Dive', order: 1, xpReward: 15, duration: '13 min',
        explanation: {
          title: 'JavaScript Objects Inside Out',
          content: `# JavaScript Objects

An **object** groups related data and behaviour together using key-value pairs.

## Creating Objects

\`\`\`javascript
// Object literal (most common)
const student = {
  name:   "Rahul",
  age:    21,
  course: "Python",
  grades: [88, 92, 78],
  
  // Method (function inside object)
  greet() {
    return \`Hi, I'm \${this.name}\`;
  },
  
  get average() {
    return this.grades.reduce((a, b) => a + b) / this.grades.length;
  }
};
\`\`\`

## Accessing Properties

\`\`\`javascript
student.name          // dot notation
student["course"]     // bracket notation (use for dynamic keys)
const key = "age";
student[key]          // 21 — dynamic property access
\`\`\`

## Destructuring

\`\`\`javascript
const { name, age, course } = student;  // extract to variables
const { name: studentName } = student;  // rename on extraction

// With default values
const { email = "not provided" } = student;

// In function parameters
function display({ name, course }) {
  console.log(\`\${name} studies \${course}\`);
}
\`\`\`

## Spread & Object.assign()

\`\`\`javascript
const updated = { ...student, age: 22 };           // shallow copy + update
const merged  = { ...obj1, ...obj2 };              // merge two objects
const copy    = Object.assign({}, student);        // another way to copy
\`\`\`

## Object Methods

\`\`\`javascript
Object.keys(student)    // ["name", "age", "course", ...]
Object.values(student)  // ["Rahul", 21, "Python", ...]
Object.entries(student) // [["name","Rahul"], ["age",21], ...]
\`\`\``,
        },
        codeExample: {
          title: 'Objects Deep Dive',
          language: 'javascript',
          code: `const course = {
  id:          "py-001",
  title:       "Python Programming",
  price:       1499,
  instructor:  "Dr. Mehta",
  students:    1245,
  ratings:     [4.8, 4.9, 4.7, 4.8, 5.0],
  tags:        ["python", "beginner", "programming"],

  get avgRating() {
    return (this.ratings.reduce((a, b) => a + b) / this.ratings.length).toFixed(1);
  },

  describe() {
    return \`\${this.title} by \${this.instructor} — ₹\${this.price}\`;
  },

  addStudent() {
    this.students++;
    return this;  // enables chaining
  }
};

// Access
console.log(course.title);
console.log(course.avgRating);
console.log(course.describe());

// Destructuring
const { title, price, instructor, tags } = course;
console.log(\`\${title}: ₹\${price} | Tags: \${tags.join(", ")}\`);

// Dynamic property access
const prop = "students";
console.log(\`Students: \${course[prop]}\`);

// Object.entries — iterate like a map
console.log("\\nCourse details:");
for (const [key, value] of Object.entries(course)) {
  if (typeof value !== "function" && !Array.isArray(value)) {
    console.log(\`  \${key}: \${value}\`);
  }
}

// Spread to create updated copy (immutable update)
const discountedCourse = { ...course, price: Math.round(course.price * 0.9) };
console.log(\`\\nOriginal: ₹\${course.price} | Discounted: ₹\${discountedCourse.price}\`);`,
          explanation: `- Method shorthand: \`describe() {}\` instead of \`describe: function() {}\`
- Getters (\`get avgRating()\`) are accessed like properties, not called as functions
- \`this\` inside a method refers to the object the method belongs to
- \`Object.entries()\` returns \`[key, value]\` pairs — combine with \`for...of\`
- Spread creates a **shallow copy** — nested objects/arrays are still references`,
        },
        exercise: {
          title: 'Product Catalogue Entry',
          instructions: 'Create a product object with name, price, category, and inStock. Add a method getDisplayPrice() that returns "₹1,499" formatted. Use destructuring to extract name and price. Create a discounted copy using spread.',
          starterCode: `const product = {
  name:     "Wireless Headphones",
  price:    2499,
  category: "Electronics",
  inStock:  true,
  
  getDisplayPrice() {
    // Return formatted price like "₹2,499"
    return \`₹\${this.price.toLocaleString("en-IN")}\`;
  }
};

// Destructure name and price
const { name, price } = product;
console.log(\`Product: \${name}, Price: \${price}\`);

// Use the method
console.log("Display:", product.getDisplayPrice());

// Create discounted copy (20% off) using spread
const saleProduct = { ...product, price: Math.round(product.price * 0.8) };
console.log(\`Sale price: \${saleProduct.getDisplayPrice()}\`);`,
          solutionCode: `const product = {
  name: "Wireless Headphones",
  price: 2499,
  category: "Electronics",
  inStock: true,
  getDisplayPrice() {
    return \`₹\${this.price.toLocaleString("en-IN")}\`;
  }
};
const { name, price } = product;
console.log(\`Product: \${name}, Price: \${price}\`);
console.log("Display:", product.getDisplayPrice());
const saleProduct = { ...product, price: Math.round(product.price * 0.8) };
console.log(\`Sale price: \${saleProduct.getDisplayPrice()}\`);`,
          hints: [
            '💡 .toLocaleString("en-IN") formats numbers with Indian comma style',
            '💡 Destructure: const { name, price } = product',
            '💡 Spread + override: { ...product, price: newPrice }',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'js-m4-l1-q1',
              question: 'What does the spread operator do when used with objects?',
              options: ['Deletes all properties', 'Creates a shallow copy of the object\'s properties', 'Deep-copies all nested objects', 'Converts the object to an array'],
              correct: 1,
              explanation: 'The spread operator (...) creates a shallow copy of the object\'s own enumerable properties. Nested objects and arrays are still referenced, not deeply copied.',
            },
            {
              id: 'js-m4-l1-q2',
              question: 'What does Object.entries() return?',
              options: ['An array of keys', 'An array of values', 'An array of [key, value] pairs', 'The number of properties'],
              correct: 2,
              explanation: 'Object.entries(obj) returns an array of [key, value] arrays for each own enumerable property. It\'s perfect for iterating over object properties with for...of.',
            },
          ],
        },
      },
      {
        id: 'js-m4-l2', moduleId: 'js-m4',
        title: 'Classes in JavaScript', order: 2, xpReward: 20, duration: '14 min',
        explanation: {
          title: 'ES6 Classes',
          content: `# JavaScript Classes

ES6 classes provide a cleaner syntax for creating objects with shared behaviour.

\`\`\`javascript
class Animal {
  constructor(name, sound) {
    this.name  = name;
    this.sound = sound;
  }

  speak() {
    return \`\${this.name} says \${this.sound}!\`;
  }

  toString() {
    return \`Animal(\${this.name})\`;
  }
}

const dog = new Animal("Buddy", "Woof");
console.log(dog.speak());    // Buddy says Woof!
\`\`\`

## Inheritance with extends

\`\`\`javascript
class Dog extends Animal {
  constructor(name) {
    super(name, "Woof");    // call parent constructor
    this.tricks = [];
  }

  learnTrick(trick) {
    this.tricks.push(trick);
  }

  showTricks() {
    return \`\${this.name} knows: \${this.tricks.join(", ")}\`;
  }
}

const dog = new Dog("Rex");
dog.learnTrick("sit");
dog.learnTrick("shake");
console.log(dog.showTricks());  // Rex knows: sit, shake
console.log(dog.speak());       // Rex says Woof! — inherited
\`\`\`

## Static methods — called on the class, not instances

\`\`\`javascript
class MathHelper {
  static square(n)  { return n * n; }
  static cube(n)    { return n * n * n; }
}

console.log(MathHelper.square(5));  // 25
// No need to create an instance!
\`\`\`

## Private fields (modern JS)

\`\`\`javascript
class BankAccount {
  #balance = 0;   // private — can't access from outside

  deposit(amount) { this.#balance += amount; }
  get balance()   { return this.#balance; }
}
\`\`\``,
        },
        codeExample: {
          title: 'OOP with Classes',
          language: 'javascript',
          code: `class Person {
  constructor(name, age) {
    this.name = name;
    this.age  = age;
  }
  greet() {
    return \`Hi, I'm \${this.name} (\${this.age})\`;
  }
  toString() {
    return \`Person(\${this.name})\`;
  }
}

class Student extends Person {
  #marks = [];

  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  addMark(mark) {
    this.#marks.push(mark);
    return this;  // method chaining
  }

  get average() {
    if (!this.#marks.length) return 0;
    return +(this.#marks.reduce((a, b) => a + b) / this.#marks.length).toFixed(1);
  }

  get grade() {
    const avg = this.average;
    if (avg >= 90) return "A+";
    if (avg >= 80) return "A";
    if (avg >= 70) return "B";
    if (avg >= 60) return "C";
    return "F";
  }

  report() {
    return \`\${this.name} | \${this.course} | Avg: \${this.average} | Grade: \${this.grade}\`;
  }
}

// Create students
const s1 = new Student("Rahul", 21, "Python");
const s2 = new Student("Priya", 20, "JavaScript");

// Method chaining
s1.addMark(85).addMark(92).addMark(88);
s2.addMark(78).addMark(95).addMark(91);

console.log(s1.greet());      // inherited from Person
console.log(s1.report());
console.log(s2.report());

// instanceof
console.log(s1 instanceof Student);   // true
console.log(s1 instanceof Person);    // true`,
          explanation: `- \`extends\` establishes inheritance; \`super()\` calls the parent constructor
- Private fields (\`#marks\`) cannot be accessed outside the class — true encapsulation
- \`get average()\` is a getter — accessed as a property, not called
- Returning \`this\` from methods enables method chaining
- \`instanceof\` checks the entire prototype chain`,
        },
        exercise: {
          title: 'E-commerce Product System',
          instructions: 'Create a Product class with name, price, and stock. Add methods: addStock(qty), sellStock(qty) that returns "Insufficient stock" if qty > stock, and a getInfo() method. Create an ElectronicProduct subclass that adds a warranty property.',
          starterCode: `class Product {
  constructor(name, price, stock) {
    this.name  = name;
    this.price = price;
    this.stock = stock;
  }

  addStock(qty) {
    this.stock += qty;
    return \`Stock updated: \${this.stock}\`;
  }

  sellStock(qty) {
    if (qty > this.stock) return "Insufficient stock!";
    this.stock -= qty;
    return \`Sold \${qty}. Remaining: \${this.stock}\`;
  }

  getInfo() {
    return \`\${this.name} | ₹\${this.price} | Stock: \${this.stock}\`;
  }
}

class ElectronicProduct extends Product {
  constructor(name, price, stock, warrantyMonths) {
    super(name, price, stock);
    this.warrantyMonths = warrantyMonths;
  }

  getInfo() {
    return super.getInfo() + \` | Warranty: \${this.warrantyMonths} months\`;
  }
}

const phone = new ElectronicProduct("Smartphone", 15000, 50, 12);
console.log(phone.getInfo());
console.log(phone.sellStock(5));
console.log(phone.sellStock(100));
console.log(phone.addStock(20));
console.log(phone.getInfo());`,
          solutionCode: `class Product {
  constructor(name, price, stock) {
    this.name = name; this.price = price; this.stock = stock;
  }
  addStock(qty)  { this.stock += qty; return \`Stock updated: \${this.stock}\`; }
  sellStock(qty) {
    if (qty > this.stock) return "Insufficient stock!";
    this.stock -= qty; return \`Sold \${qty}. Remaining: \${this.stock}\`;
  }
  getInfo() { return \`\${this.name} | ₹\${this.price} | Stock: \${this.stock}\`; }
}
class ElectronicProduct extends Product {
  constructor(name, price, stock, warrantyMonths) {
    super(name, price, stock); this.warrantyMonths = warrantyMonths;
  }
  getInfo() { return super.getInfo() + \` | Warranty: \${this.warrantyMonths} months\`; }
}
const phone = new ElectronicProduct("Smartphone", 15000, 50, 12);
console.log(phone.getInfo());
console.log(phone.sellStock(5));
console.log(phone.sellStock(100));
console.log(phone.addStock(20));`,
          hints: [
            '💡 super(name, price, stock) in ElectronicProduct passes args to Product',
            '💡 super.getInfo() calls the parent\'s getInfo() — then append warranty info',
            '💡 Check qty > this.stock before selling',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'js-m4-l2-q1',
              question: 'What is the purpose of super() in a class constructor?',
              options: [
                'Creates the parent class',
                'Calls the parent class constructor to initialize inherited properties',
                'Makes all methods public',
                'Copies all methods from the parent',
              ],
              correct: 1,
              explanation: 'super() inside a constructor calls the parent class\'s constructor. In JavaScript, you MUST call super() before accessing "this" in a derived class constructor.',
            },
            {
              id: 'js-m4-l2-q2',
              question: 'What does a "static" method mean in a JavaScript class?',
              options: [
                'The method cannot be changed',
                'The method is called on the class itself, not on instances',
                'The method runs faster',
                'The method is private',
              ],
              correct: 1,
              explanation: 'Static methods belong to the class, not to instances. You call them as ClassName.method() — no need to create an object first. They\'re useful for utility functions related to the class.',
            },
          ],
        },
      },
      {
        id: 'js-m4-l3', moduleId: 'js-m4',
        title: 'Asynchronous JavaScript', order: 3, xpReward: 25, duration: '16 min',
        explanation: {
          title: 'Promises, async/await',
          content: `# Asynchronous JavaScript

JavaScript is **single-threaded** — it executes one thing at a time. But some tasks take time (fetching data, reading files). **Async programming** lets JavaScript continue working while waiting.

## The Problem: Callbacks

\`\`\`javascript
setTimeout(() => console.log("Done!"), 1000);
console.log("This runs first!");
// "This runs first!"
// (1 second later) "Done!"
\`\`\`

## Promises — cleaner async

A **Promise** represents a value that will be available in the future.

\`\`\`javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data loaded!"), 1000);
});

promise
  .then(data   => console.log(data))    // "Data loaded!"
  .catch(error => console.log(error));  // if rejected
\`\`\`

## async/await — the modern way (looks synchronous!)

\`\`\`javascript
async function loadUser() {
  try {
    const response = await fetch("https://api.example.com/user");
    const user     = await response.json();
    console.log(user.name);
  } catch (error) {
    console.log("Failed:", error.message);
  }
}

loadUser();
\`\`\`

## Rules of async/await

- \`async\` before function: makes it return a Promise
- \`await\` can only be used INSIDE an \`async\` function
- \`await\` pauses that function — other code still runs
- Always wrap in \`try/catch\` for error handling

## Promise.all — run multiple in parallel

\`\`\`javascript
const [user, posts] = await Promise.all([
  fetchUser(1),
  fetchPosts(1),
]);
// Runs both simultaneously — faster than sequential await!
\`\`\``,
        },
        codeExample: {
          title: 'Async/Await in Action',
          language: 'javascript',
          code: `// Simulating async operations
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchUserData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: \`User_\${id}\`, email: \`user\${id}@email.com\` });
      } else {
        reject(new Error("Invalid user ID"));
      }
    }, 500);
  });
}

// Sequential async/await
async function getUser(id) {
  console.log(\`Fetching user \${id}...\`);
  try {
    const user = await fetchUserData(id);
    console.log(\`Got: \${user.name} (\${user.email})\`);
    return user;
  } catch (err) {
    console.log(\`Error: \${err.message}\`);
    return null;
  }
}

// Promise.all — fetch multiple in parallel
async function getMultipleUsers() {
  console.log("\\nFetching 3 users in parallel...");
  const start = Date.now();
  try {
    const users = await Promise.all([
      fetchUserData(1),
      fetchUserData(2),
      fetchUserData(3),
    ]);
    const elapsed = Date.now() - start;
    console.log(\`Got \${users.length} users in \${elapsed}ms\`);
    users.forEach(u => console.log(\`  - \${u.name}\`));
  } catch (err) {
    console.log("One failed:", err.message);
  }
}

// Run
getUser(1);
getUser(-1);  // error case
getMultipleUsers();`,
          explanation: `- Promises wrap async work — \`resolve\` = success, \`reject\` = failure
- \`async\` function always returns a Promise (even if you return a plain value)
- \`await\` pauses execution of the async function until the Promise resolves
- \`try/catch\` with await handles both network errors and application errors
- \`Promise.all()\` runs all Promises simultaneously — total time = longest single operation`,
        },
        exercise: {
          title: 'API Data Fetcher',
          instructions: 'Write an async function fetchAndProcess() that: 1) Fetches data from "https://jsonplaceholder.typicode.com/users" using fetch(). 2) Parses the JSON. 3) Extracts name and email from the first 3 users. 4) Prints a formatted list. Wrap in try/catch.',
          starterCode: `async function fetchAndProcess() {
  try {
    // 1. Fetch from the URL
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    // 2. Parse JSON
    const users = await response.json();
    
    // 3. Get first 3 users
    const first3 = users.slice(0, 3);
    
    // 4. Print formatted list
    console.log("=== First 3 Users ===");
    first3.forEach((user, i) => {
      console.log(\`\${i + 1}. \${user.name} — \${user.email}\`);
    });
    
  } catch (error) {
    console.log("Fetch failed:", error.message);
  }
}

fetchAndProcess();`,
          solutionCode: `async function fetchAndProcess() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error(\`HTTP error: \${response.status}\`);
    const users = await response.json();
    const first3 = users.slice(0, 3);
    console.log("=== First 3 Users ===");
    first3.forEach((user, i) => {
      console.log(\`\${i + 1}. \${user.name} — \${user.email}\`);
    });
  } catch (error) {
    console.log("Fetch failed:", error.message);
  }
}
fetchAndProcess();`,
          hints: [
            '💡 await fetch(url) gets the Response object; await response.json() parses it',
            '💡 .slice(0, 3) gets the first 3 items from the array',
            '💡 Check response.ok before parsing — HTTP 404/500 doesn\'t throw automatically',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'js-m4-l3-q1',
              question: 'What does the "await" keyword do?',
              options: [
                'Makes a function synchronous',
                'Pauses execution of the async function until the Promise resolves',
                'Cancels the Promise',
                'Makes any function return a Promise',
              ],
              correct: 1,
              explanation: 'await pauses the execution of the surrounding async function until the awaited Promise settles. Other code continues running — only the current async function waits.',
            },
            {
              id: 'js-m4-l3-q2',
              question: 'When should you use Promise.all()?',
              options: [
                'When promises must run one after another',
                'When you want the first promise to finish',
                'When you want multiple promises to run simultaneously and wait for all to complete',
                'When a promise fails',
              ],
              correct: 2,
              explanation: 'Promise.all([p1, p2, p3]) starts all promises simultaneously and resolves when ALL have resolved. If any rejects, the whole Promise.all rejects. Use it to run independent async operations in parallel.',
            },
          ],
        },
      },
    ],
  },

  // ════════════════════════════════════════════════
  //  MODULE 5 — DOM & Browser APIs
  // ════════════════════════════════════════════════
  {
    id: 'js-m5', courseId: 'javascript',
    title: 'DOM & Browser APIs',
    description: 'Make web pages interactive. Select elements, handle events, and manipulate the DOM dynamically.',
    level: 'beginner', order: 5, icon: '🖥️', xpReward: 150, locked: true,
    lessons: [
      {
        id: 'js-m5-l1', moduleId: 'js-m5',
        title: 'DOM Manipulation', order: 1, xpReward: 20, duration: '14 min',
        explanation: {
          title: 'The Document Object Model',
          content: `# DOM — The Page as a Tree

The **DOM** (Document Object Model) is a tree of objects representing the HTML page. JavaScript can read and modify it.

\`\`\`
document
└── html
    ├── head
    │   └── title
    └── body
        ├── h1
        ├── p
        └── div
            ├── button
            └── span
\`\`\`

## Selecting Elements

\`\`\`javascript
// Single element
document.getElementById("myId")
document.querySelector(".class")      // first match
document.querySelector("#id h2")      // CSS selector

// Multiple elements
document.querySelectorAll(".cards")   // NodeList
document.getElementsByClassName("btn")
\`\`\`

## Reading & Changing Content

\`\`\`javascript
const el = document.querySelector("h1");
el.textContent         // read text content
el.textContent = "New Title"   // set text
el.innerHTML  = "<strong>Bold!</strong>"  // set HTML

el.style.color = "red"         // inline style
el.style.fontSize = "24px"
\`\`\`

## CSS Classes

\`\`\`javascript
el.classList.add("active")
el.classList.remove("hidden")
el.classList.toggle("dark")
el.classList.contains("active")  // true/false
\`\`\`

## Creating & Inserting Elements

\`\`\`javascript
const div = document.createElement("div");
div.textContent = "New item";
div.classList.add("card");
document.body.appendChild(div);    // add to end of body
parent.insertBefore(div, sibling); // insert before a sibling
el.remove();                       // remove element
\`\`\``,
        },
        codeExample: {
          title: 'DOM Manipulation',
          language: 'javascript',
          code: `// This runs in the browser — output visible in the page, not console
// For the playground, we'll use console.log to simulate DOM operations

// Simulating DOM operations conceptually
const domSimulator = {
  elements: {},
  
  createElement(tag, id, content) {
    this.elements[id] = { tag, id, content, classes: [], style: {} };
    console.log(\`Created <\${tag}> #\${id}: "\${content}"\`);
    return id;
  },
  
  setContent(id, content) {
    if (this.elements[id]) {
      this.elements[id].content = content;
      console.log(\`Updated #\${id}: "\${content}"\`);
    }
  },
  
  addClass(id, cls) {
    this.elements[id]?.classes.push(cls);
    console.log(\`Added class "\${cls}" to #\${id}\`);
  },
  
  setStyle(id, prop, val) {
    if (this.elements[id]) this.elements[id].style[prop] = val;
    console.log(\`Styled #\${id}: \${prop}=\${val}\`);
  },
  
  print(id) {
    const el = this.elements[id];
    if (el) console.log(\`<\${el.tag} class="\${el.classes.join(" ")}">\${el.content}</\${el.tag}>\`);
  }
};

// Create a card component
domSimulator.createElement("div", "card1", "Python Course");
domSimulator.addClass("card1", "card");
domSimulator.addClass("card1", "featured");
domSimulator.setStyle("card1", "backgroundColor", "#12121A");
domSimulator.setStyle("card1", "borderRadius", "12px");
domSimulator.print("card1");

// Update content
domSimulator.setContent("card1", "Python — Beginner to Pro");
domSimulator.print("card1");

// Build a list
const items = ["Module 1", "Module 2", "Module 3"];
items.forEach((item, i) => {
  domSimulator.createElement("li", \`item-\${i}\`, item);
  domSimulator.addClass(\`item-\${i}\`, "module-item");
});`,
          explanation: `- In a real browser, you'd use \`document.querySelector()\` and \`element.textContent\`
- \`classList\` is the clean API for managing CSS classes
- Always create elements with \`document.createElement()\` then append with \`appendChild()\`
- DOM manipulation is synchronous — changes appear immediately in the browser
- In production, prefer frameworks (React, Vue) for complex DOM management`,
        },
        exercise: {
          title: 'Dynamic List Builder',
          instructions: 'Write JavaScript (as if in a browser) that: creates an h2 with "My Courses", creates an unordered list, adds 3 course items dynamically using createElement, and simulates styling each item. Use console.log to show what would render.',
          starterCode: `// Simulate building a DOM dynamically
// In a real browser, this would create visible HTML elements

function buildCourseList(courses) {
  console.log("<h2>My Courses</h2>");
  console.log("<ul id='course-list'>");
  
  courses.forEach((course, index) => {
    // Simulate: create li, set content, add class, append
    console.log(\`  <li class="course-item">\${index + 1}. \${course}</li>\`);
  });
  
  console.log("</ul>");
}

const myCourses = ["Python Programming", "JavaScript", "HTML & CSS"];
buildCourseList(myCourses);`,
          solutionCode: `function buildCourseList(courses) {
  console.log("<h2>My Courses</h2>");
  console.log("<ul id='course-list'>");
  courses.forEach((course, index) => {
    console.log(\`  <li class="course-item">\${index + 1}. \${course}</li>\`);
  });
  console.log("</ul>");
}
const myCourses = ["Python Programming", "JavaScript", "HTML & CSS"];
buildCourseList(myCourses);`,
          hints: [
            '💡 Use forEach with index to number each item',
            '💡 Template literals make building HTML strings clean',
            '💡 In a real browser: document.createElement("li"), set textContent, appendChild to ul',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'js-m5-l1-q1',
              question: 'What is the difference between querySelector and querySelectorAll?',
              options: [
                'No difference',
                'querySelector returns the first matching element; querySelectorAll returns a NodeList of all matches',
                'querySelectorAll is faster',
                'querySelector only works with IDs',
              ],
              correct: 1,
              explanation: 'querySelector returns the first element matching the CSS selector (or null). querySelectorAll returns a NodeList of ALL matching elements (which can be empty).',
            },
            {
              id: 'js-m5-l1-q2',
              question: 'What does el.classList.toggle("dark") do?',
              options: [
                'Adds "dark" class permanently',
                'Removes "dark" class permanently',
                'Adds "dark" if absent, removes it if present',
                'Checks if "dark" class exists',
              ],
              correct: 2,
              explanation: 'classList.toggle() adds the class if it\'s not present, or removes it if it is. It\'s perfect for dark mode toggles and show/hide functionality.',
            },
          ],
        },
      },
      {
        id: 'js-m5-l2', moduleId: 'js-m5',
        title: 'Events & Event Handling', order: 2, xpReward: 20, duration: '13 min',
        explanation: {
          title: 'Making Pages Interactive with Events',
          content: `# JavaScript Events

**Events** are things that happen in the browser — clicks, key presses, form submissions, mouse movements.

## Adding Event Listeners

\`\`\`javascript
const button = document.querySelector("#myBtn");

// Modern way — addEventListener (preferred)
button.addEventListener("click", function() {
  console.log("Button clicked!");
});

// With arrow function
button.addEventListener("click", () => {
  console.log("Clicked!");
});
\`\`\`

## The Event Object

\`\`\`javascript
button.addEventListener("click", (event) => {
  console.log(event.type);         // "click"
  console.log(event.target);       // the element clicked
  event.preventDefault();          // stop default behaviour
  event.stopPropagation();         // stop event bubbling
});
\`\`\`

## Common Events

| Event | Trigger |
|-------|---------|
| \`click\` | Mouse click |
| \`submit\` | Form submitted |
| \`input\` | Input value changes |
| \`keydown\` | Key pressed |
| \`mouseover\` | Mouse enters element |
| \`load\` | Page finished loading |
| \`DOMContentLoaded\` | HTML parsed (before images) |

## Event Delegation — efficient event handling

\`\`\`javascript
// Instead of adding listener to EACH button:
document.querySelector("#list").addEventListener("click", (e) => {
  if (e.target.classList.contains("item-btn")) {
    console.log("Item clicked:", e.target.dataset.id);
  }
});
\`\`\``,
        },
        codeExample: {
          title: 'Event Handling Patterns',
          language: 'javascript',
          code: `// Simulating browser events in Node.js/playground
// In a browser, these would attach to real DOM elements

class EventEmitter {
  constructor() { this.listeners = {}; }
  
  on(event, handler) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(handler);
    return this;
  }
  
  emit(event, data) {
    (this.listeners[event] || []).forEach(h => h({ type: event, data }));
    return this;
  }
  
  off(event, handler) {
    this.listeners[event] = (this.listeners[event] || []).filter(h => h !== handler);
  }
}

// Simulate a button
const button = new EventEmitter();
const form   = new EventEmitter();

// Click handler
button.on("click", (e) => {
  console.log(\`Button clicked! Event: \${e.type}\`);
});

// Double-click handler
button.on("dblclick", (e) => {
  console.log("Double click detected!");
});

// Form submit
const handleSubmit = (e) => {
  console.log(\`Form submitted with: \${JSON.stringify(e.data)}\`);
};
form.on("submit", handleSubmit);

// Input change
form.on("input", (e) => {
  console.log(\`Input changed: \${e.data.field} = "\${e.data.value}"\`);
});

// Trigger events
button.emit("click");
button.emit("dblclick");
form.emit("input",  { field: "email",    value: "rahul@email.com" });
form.emit("input",  { field: "password", value: "••••••••" });
form.emit("submit", { email: "rahul@email.com" });

// Remove a specific listener
form.off("submit", handleSubmit);
form.emit("submit", { test: true });   // no output — listener removed`,
          explanation: `- \`addEventListener(event, handler)\` attaches a listener; \`removeEventListener\` detaches
- The event object contains info about what happened: \`event.target\`, \`event.type\`
- \`event.preventDefault()\` stops the browser's default action (e.g., form submission/page reload)
- Event delegation: attach ONE listener to a parent, check \`event.target\` inside
- This example implements a custom EventEmitter — the browser's native one works the same way`,
        },
        exercise: {
          title: 'Interactive Counter',
          instructions: 'Simulate a counter component with events. Create a counter that handles "increment", "decrement", and "reset" events. Each event updates the count and displays the new value. Add a "change" event listener that logs whenever the value changes.',
          starterCode: `class Counter {
  constructor(initial = 0) {
    this.count = initial;
    this.handlers = {};
  }
  
  on(event, handler) {
    if (!this.handlers[event]) this.handlers[event] = [];
    this.handlers[event].push(handler);
    return this;
  }
  
  emit(event, value) {
    (this.handlers[event] || []).forEach(h => h(value));
  }
  
  increment() {
    this.count++;
    this.emit("change", this.count);
    console.log(\`Count: \${this.count}\`);
  }
  
  decrement() {
    this.count--;
    this.emit("change", this.count);
    console.log(\`Count: \${this.count}\`);
  }
  
  reset() {
    this.count = 0;
    this.emit("reset", this.count);
    console.log(\`Count reset to: \${this.count}\`);
  }
}

const counter = new Counter(5);

// Add a "change" event listener that logs the new value
counter.on("change", (val) => console.log(\`  → Changed to: \${val}\`));
counter.on("reset",  (val) => console.log(\`  → Reset to: \${val}\`));

// Trigger some events
counter.increment();
counter.increment();
counter.decrement();
counter.reset();
counter.increment();`,
          solutionCode: `class Counter {
  constructor(initial = 0) { this.count = initial; this.handlers = {}; }
  on(event, handler) { if (!this.handlers[event]) this.handlers[event] = []; this.handlers[event].push(handler); return this; }
  emit(event, value) { (this.handlers[event] || []).forEach(h => h(value)); }
  increment() { this.count++; this.emit("change", this.count); console.log(\`Count: \${this.count}\`); }
  decrement() { this.count--; this.emit("change", this.count); console.log(\`Count: \${this.count}\`); }
  reset() { this.count = 0; this.emit("reset", this.count); console.log(\`Count reset to: \${this.count}\`); }
}
const counter = new Counter(5);
counter.on("change", val => console.log(\`  → Changed to: \${val}\`));
counter.on("reset",  val => console.log(\`  → Reset to: \${val}\`));
counter.increment(); counter.increment(); counter.decrement(); counter.reset(); counter.increment();`,
          hints: [
            '💡 The emit() method calls all handlers for that event',
            '💡 counter.on("change", handler) registers a listener',
            '💡 Each action (increment/decrement/reset) emits a matching event',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'js-m5-l2-q1',
              question: 'What does event.preventDefault() do?',
              options: [
                'Stops the event from firing at all',
                'Prevents the event from bubbling up',
                'Stops the browser\'s default action (e.g., following a link or submitting a form)',
                'Removes the event listener',
              ],
              correct: 2,
              explanation: 'event.preventDefault() cancels the default browser action associated with the event — for example, preventing a form from reloading the page when submitted, or stopping a link from navigating.',
            },
            {
              id: 'js-m5-l2-q2',
              question: 'What is event delegation?',
              options: [
                'Adding the same event to multiple elements',
                'Attaching one event listener to a parent element to handle events from all children',
                'Delegating events to another JavaScript file',
                'Using setTimeout to delay events',
              ],
              correct: 1,
              explanation: 'Event delegation uses event bubbling — events from child elements bubble up to parent elements. By listening on a parent, you handle events from all current and future children with a single listener, which is more efficient.',
            },
          ],
        },
      },
      {
        id: 'js-m5-l3', moduleId: 'js-m5',
        title: 'Local Storage & JSON', order: 3, xpReward: 20, duration: '12 min',
        explanation: {
          title: 'Persisting Data in the Browser',
          content: `# Local Storage

**localStorage** stores data in the user's browser that persists between sessions (even after closing the tab).

## Basic Operations

\`\`\`javascript
// Store data (strings only)
localStorage.setItem("username", "rahul");

// Retrieve data
const name = localStorage.getItem("username");  // "rahul"

// Remove one item
localStorage.removeItem("username");

// Clear everything
localStorage.clear();
\`\`\`

## Storing Objects with JSON

localStorage only stores strings. Use JSON to store objects:

\`\`\`javascript
const user = { name: "Rahul", score: 92 };

// Store object — JSON.stringify converts to string
localStorage.setItem("user", JSON.stringify(user));

// Retrieve object — JSON.parse converts back
const stored = JSON.parse(localStorage.getItem("user"));
console.log(stored.name);   // "Rahul"
\`\`\`

## JSON.stringify & JSON.parse

\`\`\`javascript
// Stringify — object/array → string
JSON.stringify({ a: 1, b: [2, 3] })   // '{"a":1,"b":[2,3]}'
JSON.stringify({ a: 1 }, null, 2)     // pretty-printed with indentation

// Parse — string → object/array
JSON.parse('{"name":"Rahul","age":21}')  // { name: "Rahul", age: 21 }
\`\`\`

## sessionStorage — same API, tab-only

\`\`\`javascript
sessionStorage.setItem("key", "value");   // only until tab closes
\`\`\`

## Storage limits

- localStorage: ~5MB per domain
- Only strings (use JSON for objects)
- Synchronous — don't store huge data
- Not secure — don't store passwords/tokens`,
        },
        codeExample: {
          title: 'localStorage in Practice',
          language: 'javascript',
          code: `// Simulate localStorage for the playground
const storage = new Map();
const mockLocalStorage = {
  setItem: (key, val) => {
    storage.set(key, String(val));
    console.log(\`Stored: "\${key}" = \${val}\`);
  },
  getItem: (key) => storage.get(key) ?? null,
  removeItem: (key) => { storage.delete(key); console.log(\`Removed: "\${key}"\`); },
  clear: () => { storage.clear(); console.log("Storage cleared"); },
  get length() { return storage.size; },
};

// ---- Using the simulated storage ----

// 1. Store user preferences
const prefs = {
  theme:    "dark",
  language: "python",
  fontSize: 14,
};
mockLocalStorage.setItem("preferences", JSON.stringify(prefs));

// 2. Retrieve and use
const storedPrefs = JSON.parse(mockLocalStorage.getItem("preferences"));
console.log("Theme:", storedPrefs.theme);
console.log("Language:", storedPrefs.language);

// 3. Update one field
storedPrefs.language = "javascript";
mockLocalStorage.setItem("preferences", JSON.stringify(storedPrefs));

// 4. Course progress tracker
const progress = { python: 3, javascript: 0, totalXP: 30 };
mockLocalStorage.setItem("progress", JSON.stringify(progress));

const loaded = JSON.parse(mockLocalStorage.getItem("progress"));
loaded.python++;
loaded.totalXP += 10;
mockLocalStorage.setItem("progress", JSON.stringify(loaded));

const final = JSON.parse(mockLocalStorage.getItem("progress"));
console.log(\`Progress: Python lesson \${final.python}, XP: \${final.totalXP}\`);`,
          explanation: `- \`JSON.stringify()\` converts objects to strings for storage
- \`JSON.parse()\` converts the string back to an object on retrieval
- Always wrap \`JSON.parse()\` in try/catch — stored data could be corrupted
- localStorage persists until explicitly cleared; sessionStorage clears on tab close
- In CodeGuru AI, Zustand's persist middleware uses localStorage automatically`,
        },
        exercise: {
          title: 'Settings Manager',
          instructions: 'Create a SettingsManager that uses simulated localStorage. It should have saveSettings(obj), loadSettings() that returns settings or defaults, and updateSetting(key, value) that loads, updates one field, and saves back.',
          starterCode: `// Simulate localStorage
const store = new Map();
const ls = {
  setItem: (k, v) => store.set(k, String(v)),
  getItem: (k)    => store.get(k) ?? null,
};

const DEFAULT_SETTINGS = {
  theme:       "dark",
  fontSize:    14,
  language:    "python",
  soundOn:     true,
  streakGoal:  5,
};

class SettingsManager {
  static STORAGE_KEY = "app_settings";

  static saveSettings(settings) {
    ls.setItem(this.STORAGE_KEY, JSON.stringify(settings));
    console.log("Settings saved:", settings);
  }

  static loadSettings() {
    const stored = ls.getItem(this.STORAGE_KEY);
    if (!stored) {
      console.log("No settings found — using defaults");
      return { ...DEFAULT_SETTINGS };
    }
    return JSON.parse(stored);
  }

  static updateSetting(key, value) {
    const current = this.loadSettings();
    current[key]  = value;
    this.saveSettings(current);
    return current;
  }
}

// Test
const s1 = SettingsManager.loadSettings();
console.log("Default theme:", s1.theme);

SettingsManager.updateSetting("theme", "light");
SettingsManager.updateSetting("fontSize", 16);

const s2 = SettingsManager.loadSettings();
console.log("Updated theme:", s2.theme, "| fontSize:", s2.fontSize);`,
          solutionCode: `const store = new Map();
const ls = {
  setItem: (k, v) => store.set(k, String(v)),
  getItem: (k)    => store.get(k) ?? null,
};
const DEFAULT_SETTINGS = { theme: "dark", fontSize: 14, language: "python", soundOn: true, streakGoal: 5 };
class SettingsManager {
  static STORAGE_KEY = "app_settings";
  static saveSettings(s) { ls.setItem(this.STORAGE_KEY, JSON.stringify(s)); console.log("Saved:", s); }
  static loadSettings()  { const d = ls.getItem(this.STORAGE_KEY); return d ? JSON.parse(d) : {...DEFAULT_SETTINGS}; }
  static updateSetting(k, v) { const s = this.loadSettings(); s[k] = v; this.saveSettings(s); return s; }
}
const s1 = SettingsManager.loadSettings();
console.log("Default theme:", s1.theme);
SettingsManager.updateSetting("theme", "light");
SettingsManager.updateSetting("fontSize", 16);
const s2 = SettingsManager.loadSettings();
console.log("Updated theme:", s2.theme, "| fontSize:", s2.fontSize);`,
          hints: [
            '💡 saveSettings: ls.setItem(key, JSON.stringify(settings))',
            '💡 loadSettings: parse with JSON.parse — return defaults if null',
            '💡 updateSetting: load → update one key → save → return updated object',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'js-m5-l3-q1',
              question: 'Why do we use JSON.stringify() before storing to localStorage?',
              options: [
                'To compress the data',
                'Because localStorage only stores strings — JSON.stringify converts objects/arrays to strings',
                'To encrypt the data',
                'For faster retrieval',
              ],
              correct: 1,
              explanation: 'localStorage can only store strings. JSON.stringify() converts objects, arrays, and other values to their JSON string representation so they can be stored and later restored with JSON.parse().',
            },
            {
              id: 'js-m5-l3-q2',
              question: 'What is the key difference between localStorage and sessionStorage?',
              options: [
                'localStorage is faster',
                'sessionStorage has more storage space',
                'localStorage persists until explicitly cleared; sessionStorage clears when the tab is closed',
                'sessionStorage can store objects directly',
              ],
              correct: 2,
              explanation: 'localStorage data persists indefinitely until the user or code clears it. sessionStorage data is cleared automatically when the browser tab or window is closed.',
            },
          ],
        },
      },
    ],
  },

  // ════════════════════════════════════════════════
  //  MODULE 6 — Modern JS & Tooling
  // ════════════════════════════════════════════════
  {
    id: 'js-m6', courseId: 'javascript',
    title: 'Modern JavaScript & ES6+',
    description: 'Master the modern JavaScript features used in every real codebase — destructuring, modules, optional chaining, and more.',
    level: 'beginner', order: 6, icon: '⚡', xpReward: 160, locked: true,
    lessons: [
      {
        id: 'js-m6-l1', moduleId: 'js-m6',
        title: 'Destructuring & Spread', order: 1, xpReward: 15, duration: '12 min',
        explanation: {
          title: 'ES6 Destructuring and Spread',
          content: `# Destructuring

**Destructuring** extracts values from arrays and objects into distinct variables.

## Array Destructuring

\`\`\`javascript
const rgb = [255, 128, 0];
const [red, green, blue] = rgb;
console.log(red);    // 255

// Skip elements
const [first, , third] = [1, 2, 3];

// Rest operator
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head);   // 1
console.log(tail);   // [2, 3, 4, 5]

// Swap variables
let a = 1, b = 2;
[a, b] = [b, a];
\`\`\`

## Object Destructuring

\`\`\`javascript
const user = { name: "Rahul", age: 21, city: "Delhi" };

const { name, age } = user;
const { name: userName, city: location } = user;  // rename
const { email = "N/A" } = user;                   // default value

// Nested
const { address: { street, pin } } = user;

// In function parameters
function greet({ name, age = 18 }) {
  return \`\${name} is \${age}\`;
}
\`\`\`

## Spread Operator \`...\`

\`\`\`javascript
// Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];          // [1,2,3,4,5,6]
const copy = [...arr1];                        // shallow copy

// Objects
const base = { a: 1, b: 2 };
const extended = { ...base, c: 3, b: 99 };   // override b
\`\`\`

## Rest Parameters \`...\`

\`\`\`javascript
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4, 5)  // 15
\`\`\``,
        },
        codeExample: {
          title: 'Destructuring & Spread',
          language: 'javascript',
          code: `// Array destructuring
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first, second, rest);

// Variable swap
let x = "hello", y = "world";
[x, y] = [y, x];
console.log(x, y);   // world hello

// Object destructuring with rename & default
const course = {
  id:    "py-001",
  title: "Python Programming",
  price: 1499,
  level: "beginner",
};
const { title: courseName, price, level, students = 0 } = course;
console.log(\`\${courseName}: ₹\${price} (\${level}) — \${students} students\`);

// Function with destructured parameter
function formatCourse({ title, price, level = "all" }) {
  return \`[\${level.toUpperCase()}] \${title} — ₹\${price}\`;
}
console.log(formatCourse(course));

// Spread arrays
const python = ["py-1", "py-2", "py-3"];
const js     = ["js-1", "js-2"];
const all    = [...python, ...js];
console.log("All courses:", all);

// Spread objects — immutable update pattern
const user     = { name: "Priya", plan: "free", xp: 50 };
const upgraded = { ...user, plan: "pro", xp: user.xp + 100 };
console.log("Original:", user.plan);    // free
console.log("Upgraded:", upgraded.plan); // pro

// Rest parameters
function logInfo(message, ...details) {
  console.log(\`[\${message}]\`, details.join(" | "));
}
logInfo("Course", "Python", "Beginner", "₹1499");`,
          explanation: `- Destructuring = cleaner than \`const name = user.name; const age = user.age;\`
- \`...rest\` captures remaining elements/properties not explicitly destructured
- Spread copies values into a new array/object — the original is unchanged
- The immutable update pattern (\`{...obj, key: newValue}\`) is core to React state management
- Rest parameters (\`...args\`) collect all extra function arguments into an array`,
        },
        exercise: {
          title: 'Config Merger',
          instructions: 'Create a mergeConfigs(defaultConfig, userConfig) function that: 1) uses object destructuring, 2) merges configs with spread (user overrides default), 3) handles a nested "styles" object. Then create a getDisplayName({ firstName, lastName, username }) function with a default.',
          starterCode: `const defaultConfig = {
  theme:    "dark",
  fontSize: 14,
  language: "english",
  styles: { primaryColor: "#22c55e", fontFamily: "DM Sans" },
};

const userConfig = {
  theme:    "light",
  fontSize: 16,
  styles: { primaryColor: "#3b82f6" },
};

function mergeConfigs(defaults, user) {
  return {
    ...defaults,
    ...user,
    styles: { ...defaults.styles, ...user.styles },
  };
}

const merged = mergeConfigs(defaultConfig, userConfig);
console.log("Theme:", merged.theme);
console.log("Font size:", merged.fontSize);
console.log("Primary color:", merged.styles.primaryColor);
console.log("Font family:", merged.styles.fontFamily);

// Destructured parameter with default
function getDisplayName({ firstName, lastName, username = "anonymous" }) {
  if (firstName && lastName) return \`\${firstName} \${lastName}\`;
  return \`@\${username}\`;
}

console.log(getDisplayName({ firstName: "Rahul", lastName: "Sharma" }));
console.log(getDisplayName({ username: "coder42" }));
console.log(getDisplayName({}));`,
          solutionCode: `const defaultConfig = { theme: "dark", fontSize: 14, language: "english", styles: { primaryColor: "#22c55e", fontFamily: "DM Sans" } };
const userConfig    = { theme: "light", fontSize: 16, styles: { primaryColor: "#3b82f6" } };
function mergeConfigs(defaults, user) {
  return { ...defaults, ...user, styles: { ...defaults.styles, ...user.styles } };
}
const merged = mergeConfigs(defaultConfig, userConfig);
console.log("Theme:", merged.theme);
console.log("Font size:", merged.fontSize);
console.log("Primary color:", merged.styles.primaryColor);
console.log("Font family:", merged.styles.fontFamily);
function getDisplayName({ firstName, lastName, username = "anonymous" }) {
  if (firstName && lastName) return \`\${firstName} \${lastName}\`;
  return \`@\${username}\`;
}
console.log(getDisplayName({ firstName: "Rahul", lastName: "Sharma" }));
console.log(getDisplayName({ username: "coder42" }));
console.log(getDisplayName({}));`,
          hints: [
            '💡 Merge nested styles: styles: { ...defaults.styles, ...user.styles }',
            '💡 User properties override default: { ...defaults, ...user }',
            '💡 Default in destructure: { username = "anonymous" }',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'js-m6-l1-q1',
              question: 'What does { name: userName } do in object destructuring?',
              options: [
                'Creates an object with key "name" and value userName',
                'Extracts the "name" property and assigns it to a new variable called "userName"',
                'Renames the object to "userName"',
                'Creates an alias for the object',
              ],
              correct: 1,
              explanation: 'In object destructuring, "name: userName" means: extract the "name" property and store it in a variable named "userName". The colon renames the extracted value.',
            },
            {
              id: 'js-m6-l1-q2',
              question: 'What is the difference between rest (...) and spread (...)?',
              options: [
                'They are identical',
                'Rest collects multiple values into an array; spread expands an array/object into individual values',
                'Spread collects values; rest expands them',
                'Rest only works with objects',
              ],
              correct: 1,
              explanation: 'Same syntax, opposite purpose. Rest (...) in function params or destructuring COLLECTS remaining items into an array. Spread (...) in function calls or literals EXPANDS an iterable into individual values.',
            },
          ],
        },
      },
      {
        id: 'js-m6-l2', moduleId: 'js-m6',
        title: 'Modules & Imports', order: 2, xpReward: 20, duration: '13 min',
        explanation: {
          title: 'ES Modules — Organize Your Code',
          content: `# ES Modules

Modules let you split code into separate files and import what you need. This is how real JavaScript projects are organized.

## Exporting

\`\`\`javascript
// math.js — named exports
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}
\`\`\`

\`\`\`javascript
// user.js — default export (only one per file)
export default class User {
  constructor(name) { this.name = name; }
}
\`\`\`

## Importing

\`\`\`javascript
// Named imports — must match the exported name
import { PI, add, multiply } from "./math.js";

// Rename during import
import { add as addNumbers } from "./math.js";

// Import all as a namespace
import * as MathUtils from "./math.js";
console.log(MathUtils.PI);

// Default import — any name works
import User from "./user.js";

// Mix default and named
import User, { formatName } from "./user.js";
\`\`\`

## Re-exporting — barrel files

\`\`\`javascript
// index.js — re-export everything from one place
export { add, multiply } from "./math.js";
export { default as User } from "./user.js";
\`\`\`

## Dynamic imports — lazy loading

\`\`\`javascript
const module = await import("./heavy-module.js");
module.doSomething();
\`\`\``,
        },
        codeExample: {
          title: 'Module Patterns',
          language: 'javascript',
          code: `// Simulating ES Module pattern in one file
// In a real project, each section would be a separate .js file

// ---- mathUtils.js ----
const mathUtils = (() => {
  const PI = Math.PI;
  const add      = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide   = (a, b) => b !== 0 ? a / b : "Error: division by zero";
  const power    = (base, exp) => base ** exp;
  const sqrt     = (n) => n >= 0 ? Math.sqrt(n) : "Error: negative number";
  
  return { PI, add, subtract, multiply, divide, power, sqrt };
})();

// ---- validators.js ----
const validators = (() => {
  const isEmail  = str => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
  const isPhone  = str => /^\d{10}$/.test(str);
  const isStrong = pwd => pwd.length >= 8 && /[A-Z]/.test(pwd) && /\d/.test(pwd);
  
  return { isEmail, isPhone, isStrong };
})();

// ---- Using imported modules ----
console.log("=== Math Utils ===");
console.log("add(10, 5):", mathUtils.add(10, 5));
console.log("power(2, 8):", mathUtils.power(2, 8));
console.log("sqrt(144):", mathUtils.sqrt(144));
console.log("divide(10, 0):", mathUtils.divide(10, 0));

console.log("\\n=== Validators ===");
const testData = [
  { type: "email",  value: "rahul@gmail.com"  },
  { type: "email",  value: "not-an-email"      },
  { type: "phone",  value: "9876543210"        },
  { type: "phone",  value: "123"               },
  { type: "password", value: "Pass123!"        },
  { type: "password", value: "weak"            },
];

testData.forEach(({ type, value }) => {
  const fn = type === "email" ? validators.isEmail :
             type === "phone" ? validators.isPhone :
             validators.isStrong;
  console.log(\`\${type} "\${value}": \${fn(value) ? "✅" : "❌"}\`);
});`,
          explanation: `- IIFE (Immediately Invoked Function Expression) \`(() => { ... })()\` simulates module scope
- In real ES Modules: \`export const add = ...\` then \`import { add } from "./math.js"\`
- Named exports: must import with exact name (or rename); default export: any name works
- Barrel files (\`index.js\`) re-export from multiple files for a clean single import point
- In Next.js and React, you use ES Modules exclusively — \`import/export\` everywhere`,
        },
        exercise: {
          title: 'Utility Library',
          instructions: 'Create a module-pattern utility library with three namespaces: StringUtils (capitalize, truncate, countWords), ArrayUtils (unique, flatten, groupBy), and NumberUtils (clamp, round, randomBetween). Test each utility.',
          starterCode: `const StringUtils = {
  capitalize: str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(),
  truncate:   (str, n) => str.length > n ? str.slice(0, n) + "..." : str,
  countWords: str => str.trim().split(/\s+/).length,
};

const ArrayUtils = {
  unique:   arr => [...new Set(arr)],
  flatten:  arr => arr.flat(Infinity),
  groupBy:  (arr, key) => arr.reduce((groups, item) => {
    (groups[item[key]] = groups[item[key]] || []).push(item);
    return groups;
  }, {}),
};

const NumberUtils = {
  clamp:        (n, min, max) => Math.min(Math.max(n, min), max),
  round:        (n, decimals) => Number(n.toFixed(decimals)),
  randomBetween: (min, max)   => Math.floor(Math.random() * (max - min + 1)) + min,
};

// Test StringUtils
console.log(StringUtils.capitalize("hELLO wORLD"));
console.log(StringUtils.truncate("This is a long sentence", 10));
console.log(StringUtils.countWords("the quick brown fox"));

// Test ArrayUtils
console.log(ArrayUtils.unique([1, 2, 2, 3, 3, 4]));
console.log(ArrayUtils.flatten([1, [2, 3], [4, [5, 6]]]));

const students = [
  { name: "Alice", grade: "A" }, { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" }, { name: "Diana", grade: "B" },
];
console.log(ArrayUtils.groupBy(students, "grade"));

// Test NumberUtils
console.log(NumberUtils.clamp(150, 0, 100));
console.log(NumberUtils.round(3.14159, 2));
console.log(NumberUtils.randomBetween(1, 10));`,
          solutionCode: `const StringUtils = {
  capitalize: str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(),
  truncate:   (str, n) => str.length > n ? str.slice(0, n) + "..." : str,
  countWords: str => str.trim().split(/\s+/).length,
};
const ArrayUtils = {
  unique:   arr => [...new Set(arr)],
  flatten:  arr => arr.flat(Infinity),
  groupBy:  (arr, key) => arr.reduce((groups, item) => { (groups[item[key]] = groups[item[key]] || []).push(item); return groups; }, {}),
};
const NumberUtils = {
  clamp:         (n, min, max) => Math.min(Math.max(n, min), max),
  round:         (n, d)        => Number(n.toFixed(d)),
  randomBetween: (min, max)    => Math.floor(Math.random() * (max - min + 1)) + min,
};
console.log(StringUtils.capitalize("hELLO wORLD"));
console.log(StringUtils.truncate("This is a long sentence", 10));
console.log(StringUtils.countWords("the quick brown fox"));
console.log(ArrayUtils.unique([1, 2, 2, 3, 3, 4]));
console.log(ArrayUtils.flatten([1, [2, 3], [4, [5, 6]]]));
const students = [{name:"Alice",grade:"A"},{name:"Bob",grade:"B"},{name:"Charlie",grade:"A"},{name:"Diana",grade:"B"}];
console.log(ArrayUtils.groupBy(students, "grade"));
console.log(NumberUtils.clamp(150, 0, 100));
console.log(NumberUtils.round(3.14159, 2));
console.log(NumberUtils.randomBetween(1, 10));`,
          hints: [
            '💡 unique: [...new Set(arr)] creates a set (removes duplicates) then spreads back to array',
            '💡 flatten: arr.flat(Infinity) flattens all levels of nesting',
            '💡 clamp: Math.min(Math.max(n, min), max) keeps n between min and max',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'js-m6-l2-q1',
              question: 'What is a "default export" in an ES Module?',
              options: [
                'The first export in the file',
                'The only export that doesn\'t need a name — can be imported with any name',
                'An export that cannot be renamed',
                'A required export in every module',
              ],
              correct: 1,
              explanation: 'A default export (export default ...) is the main thing a module exports. When importing, you can give it any name: import User from "./user.js" or import Anything from "./user.js". Only one default export per file.',
            },
            {
              id: 'js-m6-l2-q2',
              question: 'What is a barrel file (index.js) used for?',
              options: [
                'To compress multiple files',
                'To re-export from multiple modules so consumers can import from one place',
                'To set the app entry point only',
                'To declare global variables',
              ],
              correct: 1,
              explanation: 'A barrel file re-exports from multiple modules: "export { add } from \'./math\'; export { User } from \'./user\'". Consumers can then import everything from one path instead of knowing each file\'s location.',
            },
          ],
        },
      },
      {
        id: 'js-m6-l3', moduleId: 'js-m6',
        title: 'Error Handling & Debugging', order: 3, xpReward: 25, duration: '14 min',
        explanation: {
          title: 'Handling Errors Gracefully',
          content: `# Error Handling in JavaScript

## try/catch/finally

\`\`\`javascript
try {
  const data = JSON.parse("invalid json");
} catch (error) {
  console.log(error.name);     // "SyntaxError"
  console.log(error.message);  // "Unexpected token..."
} finally {
  console.log("Always runs!");
}
\`\`\`

## Error Types

| Type | When it occurs |
|------|---------------|
| \`SyntaxError\` | Invalid JavaScript syntax |
| \`ReferenceError\` | Using an undefined variable |
| \`TypeError\` | Wrong type (e.g., null.property) |
| \`RangeError\` | Value out of range |

## Throwing Custom Errors

\`\`\`javascript
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  if (typeof a !== "number") throw new TypeError("Expected a number");
  return a / b;
}

try {
  divide(10, 0);
} catch (e) {
  console.log(e.message);   // "Cannot divide by zero"
}
\`\`\`

## Custom Error Classes

\`\`\`javascript
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name  = "ValidationError";
    this.field = field;
  }
}

throw new ValidationError("email", "Invalid email format");
\`\`\`

## Optional Chaining & Nullish Coalescing

\`\`\`javascript
const user = null;
user?.address?.city      // undefined — no error!
user?.greet?.()          // undefined — safe method call

const name = user?.name ?? "Guest";   // "Guest" if null/undefined
const age  = user?.age  || 18;        // 18 if falsy
\`\`\``,
        },
        codeExample: {
          title: 'Error Handling Patterns',
          language: 'javascript',
          code: `// Custom error classes
class AppError extends Error {
  constructor(message, code, statusCode = 500) {
    super(message);
    this.name       = "AppError";
    this.code       = code;
    this.statusCode = statusCode;
  }
}

class ValidationError extends AppError {
  constructor(field, message) {
    super(message, "VALIDATION_ERROR", 400);
    this.name  = "ValidationError";
    this.field = field;
  }
}

// Validate user input with custom errors
function validateUser({ name, email, age }) {
  if (!name || name.trim().length < 2)
    throw new ValidationError("name", "Name must be at least 2 characters");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    throw new ValidationError("email", "Invalid email format");
  if (!age || age < 0 || age > 120)
    throw new ValidationError("age", "Age must be between 0 and 120");
  return { name: name.trim(), email: email.toLowerCase(), age };
}

const testUsers = [
  { name: "Rahul", email: "rahul@email.com", age: 21 },
  { name: "A",     email: "rahul@email.com", age: 21 },
  { name: "Priya", email: "not-an-email",    age: 20 },
];

testUsers.forEach(userData => {
  try {
    const validated = validateUser(userData);
    console.log("✅ Valid:", validated);
  } catch (e) {
    if (e instanceof ValidationError) {
      console.log(\`❌ Validation [\${e.field}]: \${e.message}\`);
    } else {
      console.log("❌ Unexpected:", e.message);
    }
  }
});

// Optional chaining
const users = [
  { name: "Rahul", address: { city: "Delhi",   pin: "110001" } },
  { name: "Priya", address: null },
  { name: "Arjun" },
];

users.forEach(u => {
  const city = u?.address?.city ?? "Unknown city";
  const pin  = u?.address?.pin  ?? "N/A";
  console.log(\`\${u.name}: \${city} (\${pin})\`);
});`,
          explanation: `- Custom errors extend \`Error\` — add extra fields like \`field\` for context
- \`instanceof\` lets you catch different error types differently
- Optional chaining (\`?.\`) returns \`undefined\` instead of throwing when property doesn't exist
- Nullish coalescing (\`??\`) returns the right side only if left is \`null\` or \`undefined\` (not 0 or "")
- \`||\` returns right side for ANY falsy value (0, "", false, null, undefined) — be careful!`,
        },
        exercise: {
          title: 'Robust Data Parser',
          instructions: 'Create a safeJSONParse(str) function that returns parsed data or null on failure. Create a parseUserData(jsonStr) that parses and validates required fields (id, name, email), throwing descriptive errors for each issue.',
          starterCode: `function safeJSONParse(str) {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}

function parseUserData(jsonStr) {
  const data = safeJSONParse(jsonStr);
  
  if (!data) throw new Error("Invalid JSON string");
  if (!data.id)    throw new Error("Missing required field: id");
  if (!data.name)  throw new Error("Missing required field: name");
  if (!data.email) throw new Error("Missing required field: email");
  
  return {
    id:    data.id,
    name:  data.name?.trim(),
    email: data.email?.toLowerCase(),
    age:   data.age ?? null,
  };
}

// Tests
const testCases = [
  '{"id": 1, "name": "Rahul", "email": "r@g.com", "age": 21}',
  'not valid json',
  '{"id": 2, "name": "Priya"}',
  '{"name": "Arjun", "email": "a@g.com"}',
];

testCases.forEach(json => {
  try {
    const user = parseUserData(json);
    console.log("✅", user);
  } catch (e) {
    console.log("❌", e.message);
  }
});`,
          solutionCode: `function safeJSONParse(str) { try { return JSON.parse(str); } catch { return null; } }
function parseUserData(jsonStr) {
  const data = safeJSONParse(jsonStr);
  if (!data)       throw new Error("Invalid JSON string");
  if (!data.id)    throw new Error("Missing required field: id");
  if (!data.name)  throw new Error("Missing required field: name");
  if (!data.email) throw new Error("Missing required field: email");
  return { id: data.id, name: data.name?.trim(), email: data.email?.toLowerCase(), age: data.age ?? null };
}
const testCases = ['{"id":1,"name":"Rahul","email":"r@g.com","age":21}','not valid json','{"id":2,"name":"Priya"}','{"name":"Arjun","email":"a@g.com"}'];
testCases.forEach(json => {
  try { console.log("✅", parseUserData(json)); }
  catch (e) { console.log("❌", e.message); }
});`,
          hints: [
            '💡 safeJSONParse: wrap JSON.parse in try/catch, return null on error',
            '💡 Check each required field with if (!data.field) throw new Error(...)',
            '💡 Optional chaining in return: data.name?.trim() handles null name safely',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'js-m6-l3-q1',
              question: 'What is the difference between || and ?? for default values?',
              options: [
                'No difference',
                '?? only returns default for null/undefined; || returns default for any falsy value (0, "", false)',
                '|| is stricter than ??',
                '?? works with all types; || only with booleans',
              ],
              correct: 1,
              explanation: 'Nullish coalescing (??) only triggers for null and undefined. Logical OR (||) triggers for all falsy values including 0, "", false. Use ?? when 0 or "" are valid values you want to keep.',
            },
            {
              id: 'js-m6-l3-q2',
              question: 'What does optional chaining (?.) return when a property doesn\'t exist?',
              options: ['null', 'false', 'undefined', 'An error'],
              correct: 2,
              explanation: 'Optional chaining (?.) returns undefined (not null) when the object is null/undefined or the property doesn\'t exist. This lets you safely navigate deep object paths without try/catch.',
            },
          ],
        },
      },
    ],
  },
];
