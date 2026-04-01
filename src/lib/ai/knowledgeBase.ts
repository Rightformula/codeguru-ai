// src/lib/ai/knowledgeBase.ts
// ─────────────────────────────────────────────────────────────
// KNOWLEDGE BASE
//
// Pre-built explanations for the most commonly asked questions.
// When a user asks something that matches a KB entry, we return
// instantly WITHOUT calling Claude — saving cost and latency.
//
// KB entries are searchable by:
//   1. Exact keyword match
//   2. Topic tags
//   3. Fuzzy token match
//
// Structure: flat array of KBEntry objects
// Usage: knowledgeBase.search(query, language) → KBEntry | null
// ─────────────────────────────────────────────────────────────

export interface KBEntry {
  id:        string;
  title:     string;
  answer:    string;          // markdown-formatted answer
  keywords:  string[];        // for keyword matching
  tags:      string[];        // topic tags (python, loops, etc.)
  languages: string[];        // applicable languages
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

// ── Knowledge Base Entries ─────────────────────────────────────
export const KNOWLEDGE_BASE: KBEntry[] = [

  // ── Python ──────────────────────────────────────────────────
  {
    id: 'py-indexerror',
    title: 'IndexError: list index out of range',
    answer: `## IndexError: list index out of range

This error means you're trying to access an index that **doesn't exist** in the list.

**Common cause:**
\`\`\`python
my_list = [1, 2, 3]
print(my_list[5])   # ERROR! Only indices 0, 1, 2 exist
\`\`\`

**Fixes:**
1. Check the list length: \`len(my_list)\` = 3, so valid indices are 0, 1, 2
2. Use negative indexing for last item: \`my_list[-1]\`
3. Validate before accessing:
\`\`\`python
if index < len(my_list):
    print(my_list[index])
\`\`\`

**Remember:** Python lists are zero-indexed — a list of 3 items has indices 0, 1, 2 (NOT 1, 2, 3).`,
    keywords: ['indexerror', 'index', 'out of range', 'list index'],
    tags: ['python', 'lists', 'errors'],
    languages: ['python'],
    difficulty: 'beginner',
  },

  {
    id: 'py-nameerror',
    title: 'NameError: name is not defined',
    answer: `## NameError: name 'x' is not defined

This means you're using a variable before creating it, or you made a **typo** in the variable name.

**Common causes:**
\`\`\`python
# 1. Using before assigning
print(total)   # ERROR — total not defined yet
total = 100

# 2. Typo in variable name
naem = "Rahul"   # typo
print(name)      # ERROR — 'name' not defined (it's 'naem')

# 3. Out of scope
def my_func():
    x = 10
print(x)   # ERROR — x only exists inside the function
\`\`\`

**Fix:** Always define a variable before using it, and check for typos!`,
    keywords: ['nameerror', 'not defined', 'undefined variable'],
    tags: ['python', 'variables', 'errors', 'scope'],
    languages: ['python'],
    difficulty: 'beginner',
  },

  {
    id: 'py-typeerror',
    title: 'TypeError: unsupported operand type(s)',
    answer: `## TypeError: can only concatenate str (not "int") to str

You're trying to combine incompatible types — usually mixing a string and a number.

**Common causes:**
\`\`\`python
age  = 21
msg  = "I am " + age + " years old"  # ERROR!
# Can't + a string and integer directly
\`\`\`

**Fixes:**
\`\`\`python
# Option 1: Convert to string
msg = "I am " + str(age) + " years old"

# Option 2: Use f-string (best!)
msg = f"I am {age} years old"

# Option 3: Use print with comma
print("I am", age, "years old")
\`\`\``,
    keywords: ['typeerror', 'cannot concatenate', 'unsupported operand', 'str', 'int'],
    tags: ['python', 'types', 'strings', 'errors'],
    languages: ['python'],
    difficulty: 'beginner',
  },

  {
    id: 'py-indentation',
    title: 'IndentationError: unexpected indent',
    answer: `## IndentationError in Python

Python uses **indentation** (spaces/tabs) to define code blocks. Inconsistent indentation causes errors.

**Rules:**
- Use **4 spaces** per level (PEP 8 standard)
- Be consistent — don't mix tabs and spaces
- All code in a block must have the same indentation

\`\`\`python
# WRONG
if True:
print("hello")    # ERROR — should be indented

# CORRECT
if True:
    print("hello")

# WRONG — mixed indentation
for i in range(5):
    print(i)
      print("done")   # ERROR — extra spaces
\`\`\`

**Tip:** Set your editor to use 4 spaces (not tabs) for Python.`,
    keywords: ['indentationerror', 'indent', 'unexpected indent', 'indentation'],
    tags: ['python', 'syntax', 'errors'],
    languages: ['python'],
    difficulty: 'beginner',
  },

  {
    id: 'py-for-loop',
    title: 'How does a for loop work in Python?',
    answer: `## Python for Loops

A \`for\` loop iterates over each item in a sequence.

\`\`\`python
# Loop over a list
fruits = ["apple", "banana", "mango"]
for fruit in fruits:
    print(fruit)

# Loop with range() — count n times
for i in range(5):     # 0, 1, 2, 3, 4
    print(i)

# range(start, stop, step)
for i in range(1, 10, 2):  # 1, 3, 5, 7, 9
    print(i)

# enumerate — get index AND value
for i, fruit in enumerate(fruits, start=1):
    print(f"{i}. {fruit}")
\`\`\`

**Key point:** \`range(n)\` goes from 0 to **n-1** (NOT n).`,
    keywords: ['for loop', 'range', 'iterate', 'iteration', 'loop', 'enumerate'],
    tags: ['python', 'loops', 'fundamentals'],
    languages: ['python'],
    difficulty: 'beginner',
  },

  {
    id: 'py-list-dict-diff',
    title: 'Difference between list and dictionary',
    answer: `## List vs Dictionary in Python

| Feature | List | Dictionary |
|---------|------|------------|
| Access by | Index (0, 1, 2) | Key ("name", "age") |
| Order | Ordered | Ordered (Python 3.7+) |
| Duplicates | Allowed | Keys must be unique |
| Use for | Sequences of items | Named/labeled data |

**List example:**
\`\`\`python
fruits = ["apple", "banana", "mango"]
print(fruits[0])   # "apple"
\`\`\`

**Dictionary example:**
\`\`\`python
student = {"name": "Rahul", "age": 21}
print(student["name"])   # "Rahul"
\`\`\`

**Rule:** Use a list when order matters and items are similar. Use a dict when you need to label the data.`,
    keywords: ['list vs dict', 'dictionary', 'difference', 'list', 'when to use'],
    tags: ['python', 'lists', 'dictionaries', 'data structures'],
    languages: ['python'],
    difficulty: 'beginner',
  },

  // ── JavaScript ───────────────────────────────────────────────
  {
    id: 'js-undefined',
    title: 'Cannot read properties of undefined',
    answer: `## TypeError: Cannot read properties of undefined

You're trying to access a property or call a method on a value that is \`undefined\` or \`null\`.

**Common causes:**
\`\`\`javascript
// 1. Variable not initialized
let user;
console.log(user.name);   // ERROR — user is undefined

// 2. Wrong property name (typo)
const obj = { Name: "Rahul" };
console.log(obj.name);   // undefined.toUpperCase() would crash

// 3. Function that returned undefined
function getUser() { /* forgot return */ }
const user = getUser();
console.log(user.name);   // ERROR
\`\`\`

**Fixes:**
\`\`\`javascript
// Optional chaining — safe access
console.log(user?.name);         // undefined (no crash!)
console.log(obj?.address?.city); // undefined (no crash!)

// Check first
if (user) { console.log(user.name); }

// Nullish coalescing
const name = user?.name ?? "Guest";
\`\`\``,
    keywords: ['undefined', 'null', 'cannot read properties', 'typeerror'],
    tags: ['javascript', 'errors', 'null', 'undefined'],
    languages: ['javascript'],
    difficulty: 'beginner',
  },

  {
    id: 'js-array-map',
    title: 'How does map() work in JavaScript?',
    answer: `## JavaScript map()

\`map()\` transforms every item in an array and returns a **new array** of the same length.

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];

// Double every number
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

// Extract names from objects
const users = [{ name: "Rahul" }, { name: "Priya" }];
const names = users.map(u => u.name);
// ["Rahul", "Priya"]

// With index
const indexed = numbers.map((n, i) => \`\${i}: \${n}\`);
// ["0: 1", "1: 2", "2: 3", ...]
\`\`\`

**Key points:**
- Returns a **new** array — doesn't modify the original
- Same number of items in and out
- Arrow function: \`item => expression\``,
    keywords: ['map', 'array.map', 'transform', 'map function'],
    tags: ['javascript', 'arrays', 'functional'],
    languages: ['javascript'],
    difficulty: 'beginner',
  },

  {
    id: 'js-promise',
    title: 'What is a Promise and how does it work?',
    answer: `## JavaScript Promises

A Promise represents a value that will be available **in the future** — either resolved (success) or rejected (failure).

\`\`\`javascript
// Creating a Promise
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data loaded!");   // success
        // or reject(new Error("Failed!")); // failure
    }, 1000);
});

// Using a Promise
fetchData
    .then(data  => console.log(data))     // on success
    .catch(err  => console.log(err))      // on failure
    .finally(() => console.log("Done"));  // always runs
\`\`\`

**Modern way — async/await:**
\`\`\`javascript
async function loadData() {
    try {
        const data = await fetchData;
        console.log(data);
    } catch (err) {
        console.log("Error:", err);
    }
}
\`\`\``,
    keywords: ['promise', 'async', 'await', 'then', 'catch', 'asynchronous'],
    tags: ['javascript', 'async', 'promises'],
    languages: ['javascript'],
    difficulty: 'intermediate',
  },

  // ── CSS ──────────────────────────────────────────────────────
  {
    id: 'css-center',
    title: 'How to center an element in CSS?',
    answer: `## Centering in CSS

**Horizontally center a block element:**
\`\`\`css
.element {
    width: 300px;
    margin: 0 auto;   /* auto margins on left and right */
}
\`\`\`

**Center with Flexbox (most versatile):**
\`\`\`css
.container {
    display: flex;
    justify-content: center;  /* horizontal */
    align-items: center;      /* vertical */
    height: 100vh;            /* need height for vertical */
}
\`\`\`

**Center with CSS Grid:**
\`\`\`css
.container {
    display: grid;
    place-items: center;   /* centers both axes! */
    height: 100vh;
}
\`\`\`

**Center text:**
\`\`\`css
.text { text-align: center; }
\`\`\`

The Flexbox method is the most popular for centering divs.`,
    keywords: ['center', 'centering', 'align center', 'margin auto', 'flexbox center'],
    tags: ['css', 'layout', 'flexbox', 'centering'],
    languages: ['html-css'],
    difficulty: 'beginner',
  },

  {
    id: 'css-flexbox-vs-grid',
    title: 'Flexbox vs Grid — which one to use?',
    answer: `## Flexbox vs Grid

**Use Flexbox for 1D layouts** (one row OR one column):
\`\`\`css
/* Navigation bar — items in a row */
.navbar { display: flex; gap: 16px; }

/* Card content — items in a column */
.card { display: flex; flex-direction: column; }
\`\`\`

**Use Grid for 2D layouts** (rows AND columns simultaneously):
\`\`\`css
/* Page layout — header, sidebar, main, footer */
.page {
    display: grid;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
}

/* Card grid — multiple rows and columns */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
}
\`\`\`

**Quick rule:** One direction = Flexbox. Two directions = Grid.`,
    keywords: ['flexbox vs grid', 'flex grid', 'when to use flex', 'when to use grid'],
    tags: ['css', 'flexbox', 'grid', 'layout'],
    languages: ['html-css'],
    difficulty: 'beginner',
  },

  // ── Java ─────────────────────────────────────────────────────
  {
    id: 'java-npe',
    title: 'NullPointerException in Java',
    answer: `## NullPointerException (NPE)

The most common Java error — you're trying to use a variable that is \`null\` (has no value).

**Common causes:**
\`\`\`java
String name = null;
System.out.println(name.length());  // NPE! null has no methods

String[] arr = new String[5];
System.out.println(arr[0].length());  // NPE! arr[0] is null
\`\`\`

**Fixes:**
\`\`\`java
// 1. Check for null first
if (name != null) {
    System.out.println(name.length());
}

// 2. Initialize with a default
String name = "";  // empty string, not null

// 3. Optional (Java 8+)
Optional.ofNullable(name)
        .ifPresent(n -> System.out.println(n.length()));
\`\`\`

**Rule:** Never call methods on a variable that might be null without checking first.`,
    keywords: ['nullpointerexception', 'npe', 'null', 'null pointer'],
    tags: ['java', 'errors', 'null'],
    languages: ['java'],
    difficulty: 'beginner',
  },

  {
    id: 'java-arraylist-vs-array',
    title: 'Array vs ArrayList in Java',
    answer: `## Array vs ArrayList in Java

| Feature | Array | ArrayList |
|---------|-------|-----------|
| Size | Fixed at creation | Dynamic (grows/shrinks) |
| Syntax | \`int[] arr = new int[5]\` | \`ArrayList<Integer> list = new ArrayList<>()\` |
| Add items | Can't (fixed size) | \`list.add(item)\` |
| Get size | \`arr.length\` | \`list.size()\` |
| Types | Primitives + objects | Objects only (use Integer not int) |

**Use Array when:** Size is known and fixed, performance-critical code.

**Use ArrayList when:** Size may change, need to add/remove items.

\`\`\`java
// Array — fixed 5 integers
int[] scores = {85, 92, 78, 95, 88};

// ArrayList — dynamic
ArrayList<Integer> scoreList = new ArrayList<>();
scoreList.add(85); scoreList.add(92);
scoreList.remove(0);  // can remove!
\`\`\``,
    keywords: ['array vs arraylist', 'arraylist', 'array', 'difference', 'dynamic'],
    tags: ['java', 'arrays', 'arraylist', 'data structures'],
    languages: ['java'],
    difficulty: 'beginner',
  },

  // ── General Programming ──────────────────────────────────────
  {
    id: 'general-recursion',
    title: 'What is recursion and when to use it?',
    answer: `## Recursion

Recursion is when a function **calls itself** to solve a smaller version of the same problem.

**Two required parts:**
1. **Base case** — when to stop
2. **Recursive case** — call self with smaller input

\`\`\`python
def factorial(n):
    if n <= 1: return 1       # base case — STOP
    return n * factorial(n-1) # recursive case

# factorial(4) = 4 * factorial(3)
#              = 4 * 3 * factorial(2)
#              = 4 * 3 * 2 * factorial(1)
#              = 4 * 3 * 2 * 1 = 24
\`\`\`

**Use recursion for:**
- Tree/folder traversal
- Sorting (merge sort, quick sort)
- Problems naturally expressed recursively (Fibonacci, factorial)

**Use loops for:**
- Simple repetition
- When recursion depth could be large (risk of stack overflow)`,
    keywords: ['recursion', 'recursive', 'base case', 'call itself'],
    tags: ['python', 'java', 'javascript', 'algorithms', 'recursion'],
    languages: ['python', 'javascript', 'java'],
    difficulty: 'intermediate',
  },
];

// ── Search Engine ─────────────────────────────────────────────
class KnowledgeBaseSearch {

  // Tokenize a string into words
  private tokenize(text: string): string[] {
    return text.toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length > 2);
  }

  // Score a KB entry against a query
  private score(entry: KBEntry, tokens: string[], language?: string): number {
    let score = 0;

    // Language filter — must match if specified
    if (language && !entry.languages.includes(language) &&
        !entry.languages.includes('general')) {
      // Allow general entries, but prefer language-specific
      if (entry.languages.length > 0 && !entry.languages.includes(language)) {
        score -= 10;
      }
    }

    // Keyword match — highest weight
    for (const keyword of entry.keywords) {
      const kwTokens = this.tokenize(keyword);
      for (const token of tokens) {
        if (kwTokens.includes(token) || keyword.includes(token)) {
          score += 10;
        }
      }
    }

    // Tag match — medium weight
    for (const tag of entry.tags) {
      if (tokens.includes(tag)) score += 5;
    }

    // Title match — medium weight
    const titleTokens = this.tokenize(entry.title);
    for (const token of tokens) {
      if (titleTokens.includes(token)) score += 3;
    }

    return score;
  }

  // Search the knowledge base
  search(query: string, language?: string): KBEntry | null {
    const tokens = this.tokenize(query);
    if (tokens.length === 0) return null;

    let bestScore = 0;
    let bestEntry: KBEntry | null = null;

    for (const entry of KNOWLEDGE_BASE) {
      const s = this.score(entry, tokens, language);
      if (s > bestScore) {
        bestScore = s;
        bestEntry = entry;
      }
    }

    // Minimum score threshold — avoid irrelevant matches
    return bestScore >= 8 ? bestEntry : null;
  }

  // Get all entries for a language
  getByLanguage(language: string): KBEntry[] {
    return KNOWLEDGE_BASE.filter(e => e.languages.includes(language));
  }

  // Get entry by ID
  getById(id: string): KBEntry | null {
    return KNOWLEDGE_BASE.find(e => e.id === id) || null;
  }
}

// ── Singleton export ───────────────────────────────────────────
export const knowledgeBase = new KnowledgeBaseSearch();
