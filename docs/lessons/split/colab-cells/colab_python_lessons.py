# =================================================================
# 🐍  CodeGuru AI — Python Course — All 18 Lessons
# =================================================================
# Copy this entire cell into Google Colab and run it.
# It defines `python_lessons` — a list of 18 lesson dicts.
#
# Lessons: 6 modules × 3 lessons each
# Total XP : 230
# Modules  : py-m1, py-m2, py-m3, py-m4, py-m5, py-m6
# =================================================================

import json

# ── py-m1 — Basics
# Lessons : py-m1-l1, py-m1-l2, py-m1-l3
# XP      : 35
python_m1_raw = json.loads(r'''
[
  {
    "id": "py-m1-l1",
    "moduleId": "py-m1",
    "title": "What is Python?",
    "order": 1,
    "xpReward": 10,
    "duration": "8 min",
    "explanation": {
      "title": "What is Python and Why Does It Matter?",
      "content": "# What is Python?\n\nImagine you want to give a set of instructions to a very obedient helper. The helper will do exactly what you say, every time, without complaint — but only if you speak in a language it understands. **Python** is one of those languages, designed for giving precise instructions to a computer.\n\nPython is a **programming language** — a formal set of words and rules that humans use to write programs. A **program** is simply a list of instructions the computer executes from top to bottom. Python was created by Guido van Rossum and first released in 1991. The name comes from the British comedy series *Monty Python's Flying Circus*, not from the reptile.\n\n## Why Python Is Unique\n\nAmong the hundreds of programming languages that exist, Python is consistently ranked the most popular in the world. Several properties make it stand out:\n\n- **Readable syntax** — Python code reads almost like plain English, so beginners can understand a program without memorising a long list of symbols\n- **Versatility** — the same language powers web servers, machine learning models, automation scripts, games, and scientific research\n- **Large standard library** — Python ships with thousands of pre-written tools so you do not have to build everything from scratch\n- **Active community** — millions of developers have published free packages you can use immediately\n\n## Where Python Is Used in the Real World\n\n| Industry | What Python Does There |\n|---|---|\n| Artificial Intelligence | Training models behind ChatGPT and image recognition |\n| Web Development | Running the backend of Instagram and Pinterest |\n| Data Science | Analysing stock prices, medical records, and census data |\n| Automation | Filling forms, renaming files, sending emails automatically |\n| Education | Taught as the first language at MIT, IITs, and most CS programs |\n\n## How Python Compares to Other Languages\n\n| Language | Lines to print \"Hello\" | Main use case | Difficulty for beginners |\n|---|---|---|---|\n| Python | 1 | Everything | Very easy |\n| Java | 5 | Enterprise software | Moderate |\n| C++ | 4 | System software | Difficult |\n\nPython's one-line \"Hello, World!\" — `print(\"Hello, World!\")` — perfectly illustrates why beginners choose it first. In the code example below, you will see this simplicity in action alongside a few other fundamental `print()` calls."
    },
    "codeExample": {
      "title": "Python Introduces Itself",
      "language": "python",
      "code": "# Python executes instructions from top to bottom, one line at a time.\n# Lines beginning with # are comments — Python ignores them completely.\n\n# The print() function displays text on the screen.\nprint(\"Hello, World!\")\n\n# You can print any text inside the quotes.\nprint(\"Python was created in 1991.\")\nprint(\"It is the most popular programming language today.\")\n\n# Python can also evaluate arithmetic and display the result.\nprint(\"Years since Python was created:\", 2025 - 1991)\n\n# Printing multiple items separated by commas adds a space between them.\nprint(\"Python\", \"is\", \"beginner\", \"friendly!\")",
      "explanation": "- `# text` — a **comment**; Python skips this line entirely; use comments to explain your code to other humans\n- `print(\"Hello, World!\")` — calls the built-in `print()` function; whatever you pass inside the parentheses is displayed\n- `\"Hello, World!\"` — a **string literal**; any characters surrounded by double quotes form a string\n- `2025 - 1991` — Python evaluates arithmetic before printing; the screen shows `34`, not the expression\n- `print(\"A\", \"B\", \"C\")` — commas separate multiple items; Python inserts one space between each automatically"
    },
    "exercise": {
      "title": "Write Your First Introduction Program",
      "instructions": "Write a Python program that prints exactly four lines about yourself: your name on line 1, your city on line 2, your age as a number on line 3, and your favourite subject on line 4. Each line must use its own print() statement. A number does not need quotes; text does. Expected output example:\nPriya Sharma\nMumbai\n19\nMathematics",
      "starterCode": "# My Introduction Program\n# Each print() statement outputs one line.\n\n# Line 1 — print your name\nprint(\"Your Name Here\")\n\n# Line 2 — print your city\nprint(\"Your City Here\")\n\n# Line 3 — print your age (a number, no quotes needed)\n# Your code here\n\n# Line 4 — print your favourite subject\n# Your code here",
      "solutionCode": "# My Introduction Program\n\nprint(\"Priya Sharma\")\nprint(\"Mumbai\")\nprint(19)\nprint(\"Mathematics\")",
      "hints": [
        "💡 Each piece of information needs its own print() statement on a separate line.",
        "💡 Text values like your name and city must go inside double quotes; a number like your age does not need quotes.",
        "💡 Copy the pattern of the first two print() calls and write two more below them for age and subject."
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
          "id": "py-m1-l1-q1",
          "question": "Which of the following best describes what Python is?",
          "options": [
            "A hardware component that makes computers faster",
            "A programming language used to write instructions for computers",
            "A type of database for storing information",
            "An operating system like Windows or macOS"
          ],
          "correct": 1,
          "explanation": "Python is a programming language — a formal set of rules and words that lets humans write instructions a computer can execute. It is not hardware, a database, or an operating system. After you write a Python program, the Python interpreter reads and runs those instructions."
        },
        {
          "id": "py-m1-l1-q2",
          "question": "What does the # symbol do at the beginning of a line in Python?",
          "options": [
            "It prints the rest of the line to the screen",
            "It multiplies the value that follows it",
            "It marks the line as a comment that Python ignores",
            "It declares a new variable"
          ],
          "correct": 2,
          "explanation": "The # symbol starts a comment. Python skips everything on that line after the # character when the program runs. Comments are notes written by the programmer to explain the code to other humans. They have no effect on the program's output or behaviour."
        },
        {
          "id": "py-m1-l1-q3",
          "question": "What will Python display when it runs print(\"Hello\", \"World\")?",
          "options": [
            "HelloWorld",
            "Hello,World",
            "Hello World",
            "\"Hello\" \"World\""
          ],
          "correct": 2,
          "explanation": "When you separate multiple items with a comma inside print(), Python automatically places a single space between them. So print(\"Hello\", \"World\") displays Hello World — no comma, just one space. The quotation marks are not displayed; they only mark where the string begins and ends."
        }
      ]
    }
  },
  {
    "id": "py-m1-l2",
    "moduleId": "py-m1",
    "title": "print() Function and Comments",
    "order": 2,
    "xpReward": 10,
    "duration": "10 min",
    "explanation": {
      "title": "How print() Works and Why Comments Matter",
      "content": "# The print() Function\n\nThink of `print()` as Python's loudspeaker. Anything you hand it, it broadcasts to the screen. You have already used it once, but it is capable of much more than displaying a single line of text.\n\n## Printing Different Kinds of Values\n\nPython can print several kinds of data:\n\n```python\nprint(\"Hello\")       # a string — text in quotes\nprint(42)            # an integer — a whole number\nprint(3.14)          # a float — a decimal number\nprint(True)          # a boolean — True or False\n```\n\nEach call to `print()` adds a **newline** at the end, so the next output starts on a fresh line.\n\n## Controlling the Separator and End Character\n\nBy default, `print()` puts a space between multiple items and a newline at the end. You can change both:\n\n```python\nprint(\"Name\", \"Age\", sep=\" | \")   # Name | Age\nprint(\"Loading\", end=\"...\")        # Loading... (no newline)\nprint(\" done\")                     # Loading... done\n```\n\n- `sep` sets the string placed **between** items (default is one space)\n- `end` sets the string placed **after** the last item (default is `\"\\n\"`, a newline)\n\n## Printing with f-strings\n\nAn **f-string** lets you embed variable values directly inside a string. Place `f` immediately before the opening quote, then put variable names inside `{}` braces:\n\n```python\nname  = \"Rahul\"\nmarks = 88\nprint(f\"{name} scored {marks} out of 100.\")\n```\n\nOutput: `Rahul scored 88 out of 100.`\n\n## Comments — Notes in Your Code\n\nA **comment** starts with `#` and runs to the end of the line. Python ignores comments entirely. You should use them to:\n\n- Explain *why* you wrote a piece of code\n- Leave a note for your future self\n- Temporarily disable a line while testing\n\n```python\n# This calculates the discounted price\nprice    = 500\ndiscount = 0.10        # 10% off\nfinal    = price - (price * discount)\nprint(final)           # expected: 450.0\n```\n\nWell-commented code is a mark of a professional programmer. In the code example below, you will see `print()` used with `sep`, `end`, and an f-string together."
    },
    "codeExample": {
      "title": "print() Options Showcase",
      "language": "python",
      "code": "# Demonstrate the many ways print() can display output\n\n# 1. Basic print — adds newline at end automatically\nprint(\"Line one\")\nprint(\"Line two\")\n\n# 2. Print multiple items — default separator is one space\nprint(\"Python\", \"3\", \"is\", \"great\")\n\n# 3. Custom separator between items\nprint(\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", sep=\"-\")\n\n# 4. Custom end character — stays on same line\nprint(\"Connecting\", end=\"\")\nprint(\"...\")\nprint(\"Connected!\")\n\n# 5. f-string — embed variable values inside text\ncourse = \"Python\"\nlevel  = \"Beginner\"\nprint(f\"Welcome to {course} {level}!\")\n\n# 6. Arithmetic result inside f-string\nyear_started = 1991\nage_of_python = 2025 - year_started\nprint(f\"Python has been around for {age_of_python} years.\")",
      "explanation": "- `print(\"Line one\")` — the simplest form; displays text and moves to the next line automatically\n- `sep=\"-\"` — replaces the default space separator; the five day names appear as `Mon-Tue-Wed-Thu-Fri`\n- `end=\"\"` — replaces the default newline with an empty string, so the next `print()` continues on the same line\n- `f\"Welcome to {course} {level}!\"` — an **f-string**; variables inside `{}` are substituted with their values before the string is displayed\n- `2025 - year_started` inside an f-string — Python evaluates the expression first and inserts the result"
    },
    "exercise": {
      "title": "Build a Formatted Name Badge",
      "instructions": "Create a program that prints a name badge for a student. Define two variables: name (a string) and batch (a string such as '2024'). Then print three lines: a separator line of 30 dashes, the badge content using an f-string that says 'Name: [name] | Batch: [batch]', and another separator line of 30 dashes. The dashes must be printed using the * operator: print('-' * 30).\n\nExpected output:\n------------------------------\nName: Rahul | Batch: 2024\n------------------------------",
      "starterCode": "# Name Badge Generator\n\n# Step 1 — define the variables\nname  = \"Rahul\"\nbatch = \"2024\"\n\n# Step 2 — print the top border (30 dashes)\nprint(\"-\" * 30)\n\n# Step 3 — print the badge content using an f-string\n# Your code here\n\n# Step 4 — print the bottom border (30 dashes)\n# Your code here",
      "solutionCode": "# Name Badge Generator\n\nname  = \"Rahul\"\nbatch = \"2024\"\n\nprint(\"-\" * 30)\nprint(f\"Name: {name} | Batch: {batch}\")\nprint(\"-\" * 30)",
      "hints": [
        "💡 Use an f-string: start the string with f before the quote, then put variable names inside curly braces like {name}.",
        "💡 The separator line is already shown as print(\"-\" * 30) — the * operator repeats the dash character 30 times.",
        "💡 The badge line should look like f\"Name: {name} | Batch: {batch}\" — both variables go inside their own pair of curly braces."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "------------------------------",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "py-m1-l2-q1",
          "question": "What does print(\"A\", \"B\", \"C\", sep=\"-\") display?",
          "options": [
            "A B C",
            "A-B-C",
            "ABC",
            "A, B, C"
          ],
          "correct": 1,
          "explanation": "The sep keyword argument sets the string placed between each item in a print() call. With sep=\"-\", Python places a dash between each adjacent item, producing A-B-C. The default separator is a single space, which is why print(\"A\", \"B\") normally shows A B."
        },
        {
          "id": "py-m1-l2-q2",
          "question": "Which line correctly uses an f-string to display 'Score: 95'?",
          "options": [
            "print(\"Score: \" + score)",
            "print(f\"Score: {score}\")",
            "print(f\"Score: score\")",
            "print(\"Score: {score}\")"
          ],
          "correct": 1,
          "explanation": "An f-string requires the letter f immediately before the opening quote: f\"...\". Variables are placed inside curly braces {}. Without the f prefix, Python treats the curly braces as literal characters and prints Score: {score} rather than the variable's value. Concatenation with + also works but f-strings are the modern, preferred approach."
        },
        {
          "id": "py-m1-l2-q3",
          "question": "What does the end parameter in print() control?",
          "options": [
            "The separator placed between multiple items",
            "The number of items you can print",
            "The character or string placed after the last item instead of a newline",
            "The colour of the printed text"
          ],
          "correct": 2,
          "explanation": "The end parameter replaces the default newline character that print() adds after the last item. Setting end=\"\" prevents moving to a new line, so the next print() continues on the same line. Setting end=\"\\n\\n\" would add an extra blank line after each call. The sep parameter (not end) controls what goes between items."
        }
      ]
    }
  },
  {
    "id": "py-m1-l3",
    "moduleId": "py-m1",
    "title": "Variables and User Input",
    "order": 3,
    "xpReward": 15,
    "duration": "12 min",
    "explanation": {
      "title": "Storing Information in Variables and Reading User Input",
      "content": "# Variables\n\nA **variable** is a named storage location in the computer's memory. Think of it as a labelled box: you put a value inside the box, give the box a name, and later you can open the box by using that name.\n\n```python\nstudent_name = \"Ananya\"\nage          = 20\ngpa          = 3.8\n```\n\nThe `=` sign is the **assignment operator** — it places the value on the right into the container on the left. It does not mean equality in the mathematical sense.\n\n## Naming Variables\n\nPython variable names must follow these rules:\n\n| Rule | Valid example | Invalid example | Reason |\n|---|---|---|---|\n| Start with a letter or `_` | `city` | `1city` | Cannot start with a digit |\n| Letters, digits, underscores only | `user_age` | `user-age` | Hyphens not allowed |\n| Case-sensitive | `Score` and `score` are different | | |\n| Not a Python keyword | `total` | `for` | Reserved word |\n\nBy convention, Python uses **snake_case** for variable names: all lowercase letters with underscores between words (`first_name`, `item_count`).\n\n## The Four Core Data Types\n\n| Type | Keyword | Example | Stores |\n|---|---|---|---|\n| String | `str` | `\"Rahul\"` | Text — any characters in quotes |\n| Integer | `int` | `21` | Whole numbers |\n| Float | `float` | `3.14` | Decimal numbers |\n| Boolean | `bool` | `True` | Only `True` or `False` |\n\n## Reading Input from the User\n\nThe `input()` function pauses the program and waits for the user to type something and press Enter. Whatever the user types is returned as a **string**:\n\n```python\nname = input(\"What is your name? \")\nprint(f\"Hello, {name}!\")\n```\n\nBecause `input()` always returns a string, you must convert it if you need a number:\n\n```python\nage = int(input(\"Enter your age: \"))   # convert string to integer\n```\n\nIn the code example below, you will see variables of all four types created, and `input()` used to personalise the program's greeting."
    },
    "codeExample": {
      "title": "Student Profile Builder",
      "language": "python",
      "code": "# Student Profile Builder\n# Demonstrates variables, data types, and user input\n\n# --- String variables ---\nfirst_name  = \"Vikram\"\nlast_name   = \"Mehta\"\ncity        = \"Pune\"\n\n# --- Integer variable ---\nroll_number = 17\n\n# --- Float variable ---\ngpa         = 3.75\n\n# --- Boolean variable ---\nis_enrolled = True\n\n# --- Print the profile ---\nprint(\"===== Student Profile =====\")\nprint(f\"Name      : {first_name} {last_name}\")\nprint(f\"City      : {city}\")\nprint(f\"Roll No.  : {roll_number}\")\nprint(f\"GPA       : {gpa}\")\nprint(f\"Enrolled  : {is_enrolled}\")\n\n# --- Demonstrate type() ---\nprint(\"\\n--- Data Types ---\")\nprint(type(first_name))    # <class 'str'>\nprint(type(roll_number))   # <class 'int'>\nprint(type(gpa))           # <class 'float'>\nprint(type(is_enrolled))   # <class 'bool'>",
      "explanation": "- `first_name = \"Vikram\"` — creates a **string** variable; the value is text enclosed in quotes\n- `roll_number = 17` — creates an **integer** variable; no quotes because it is a number, not text\n- `gpa = 3.75` — creates a **float** variable; contains a decimal point\n- `is_enrolled = True` — creates a **boolean** variable; `True` is always capitalised in Python\n- `f\"{first_name} {last_name}\"` — an f-string combining two variables with a space between them\n- `type(variable)` — a built-in function that returns the data type of any value"
    },
    "exercise": {
      "title": "Create a Personalised Greeting Card",
      "instructions": "Write a program that uses four variables: recipient (a string for the person's name), sender (a string for your name), age (an integer), and is_birthday (a boolean set to True). Using only these variables and f-strings, print three lines: 'Dear [recipient],' on line 1, 'Happy Birthday! You are [age] years old.' on line 2, and 'From: [sender]' on line 3. Do not use input() — set the values directly as shown.\n\nExpected output:\nDear Sneha,\nHappy Birthday! You are 21 years old.\nFrom: Rahul",
      "starterCode": "# Personalised Greeting Card\n\n# Step 1 — set the variables\nrecipient  = \"Sneha\"\nsender     = \"Rahul\"\nage        = 21\nis_birthday = True\n\n# Step 2 — print the three lines using f-strings\n# Line 1: Dear [recipient],\nprint(f\"Dear {recipient},\")\n\n# Line 2: Happy Birthday! You are [age] years old.\n# Your code here\n\n# Line 3: From: [sender]\n# Your code here",
      "solutionCode": "# Personalised Greeting Card\n\nrecipient   = \"Sneha\"\nsender      = \"Rahul\"\nage         = 21\nis_birthday = True\n\nprint(f\"Dear {recipient},\")\nprint(f\"Happy Birthday! You are {age} years old.\")\nprint(f\"From: {sender}\")",
      "hints": [
        "💡 An f-string starts with f before the quote and uses {variable_name} to insert variable values.",
        "💡 Line 2 needs both the fixed text 'Happy Birthday! You are' and the variable age inside curly braces, followed by 'years old.'",
        "💡 Line 3 follows the same pattern as line 1 — write f\"From: {sender}\" to insert the sender variable."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Dear",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "From:",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "py-m1-l3-q1",
          "question": "What does the = operator do in the statement city = \"Delhi\"?",
          "options": [
            "Tests whether city is equal to 'Delhi'",
            "Stores the string 'Delhi' in a variable named city",
            "Prints the word Delhi to the screen",
            "Declares city as a constant that cannot be changed"
          ],
          "correct": 1,
          "explanation": "In Python, = is the assignment operator — it stores the value on the right side into the variable named on the left side. It does not test equality. To compare two values, Python uses == (two equals signs). After city = \"Delhi\", the variable city holds the string \"Delhi\" and you can use it anywhere in the program."
        },
        {
          "id": "py-m1-l3-q2",
          "question": "What type does the input() function always return?",
          "options": [
            "int, because the user usually types a number",
            "str, regardless of what the user types",
            "float, because input can contain decimals",
            "bool, because input is either given or not"
          ],
          "correct": 1,
          "explanation": "input() always returns a string (str), no matter what the user types. If the user types 42, input() returns the string \"42\", not the integer 42. You must explicitly convert it using int() or float() if you need to do arithmetic with the value."
        },
        {
          "id": "py-m1-l3-q3",
          "question": "Which variable name follows Python naming conventions correctly?",
          "options": [
            "2nd-score",
            "StudentName",
            "student_name",
            "student name"
          ],
          "correct": 2,
          "explanation": "student_name follows Python's snake_case convention — all lowercase letters with underscores separating words. The name 2nd-score is invalid because it starts with a digit and contains a hyphen. StudentName uses PascalCase, which Python reserves for class names. student name is invalid because spaces are never allowed in variable names."
        }
      ]
    }
  }
]
''')

# ── py-m2 — Variables and Data Types
# Lessons : py-m2-l1, py-m2-l2, py-m2-l3
# XP      : 35
python_m2_raw = json.loads(r'''
[
  {
    "id": "py-m2-l1",
    "moduleId": "py-m2",
    "title": "Numbers and Arithmetic Operators",
    "order": 1,
    "xpReward": 10,
    "duration": "10 min",
    "explanation": {
      "title": "Working with Numbers and Arithmetic in Python",
      "content": "# Numbers in Python\n\nImagine a calculator that can not only add and subtract but also remember every result and use it in the next calculation. That is exactly what Python does with numbers and variables.\n\nPython has two primary numeric types:\n\n- **int** (integer) — a whole number with no decimal point: `5`, `100`, `-42`, `0`\n- **float** (floating-point) — a number with a decimal point: `3.14`, `-0.5`, `100.0`\n\nPython automatically chooses the right type based on whether you write a decimal point:\n\n```python\nx = 10      # int\ny = 10.0    # float\n```\n\n## Arithmetic Operators\n\n| Operator | Name | Example | Result |\n|---|---|---|---|\n| `+` | Addition | `7 + 3` | `10` |\n| `-` | Subtraction | `7 - 3` | `4` |\n| `*` | Multiplication | `7 * 3` | `21` |\n| `/` | Division | `7 / 2` | `3.5` |\n| `//` | Floor division | `7 // 2` | `3` |\n| `%` | Modulo (remainder) | `7 % 2` | `1` |\n| `**` | Exponentiation | `2 ** 8` | `256` |\n\n### Important rule: `/` always returns a float\n\n```python\nprint(10 / 2)    # 5.0  — NOT 5\nprint(10 // 2)   # 5    — floor division gives an int\n```\n\n## Operator Precedence\n\nPython follows standard mathematical order: parentheses first, then `**`, then `*`, `/`, `//`, `%`, then `+` and `-`.\n\n```python\nresult = 2 + 3 * 4      # 14, not 20 — multiplication first\nresult = (2 + 3) * 4    # 20 — parentheses override\n```\n\n## Augmented Assignment\n\nA shortcut for updating a variable:\n\n```python\nscore  = 100\nscore += 10    # same as: score = score + 10\nscore -= 5     # same as: score = score - 5\n```\n\nIn the code example below, you will see all seven operators applied to a realistic billing calculation."
    },
    "codeExample": {
      "title": "Shopping Bill Calculator",
      "language": "python",
      "code": "# Shopping Bill Calculator — demonstrates all arithmetic operators\n\nprice_per_kg = 80       # int: price of apples per kilogram\nkg_bought    = 2.5      # float: quantity purchased\n\n# Basic arithmetic\nsubtotal = price_per_kg * kg_bought    # multiplication\nprint(\"Subtotal:\", subtotal)           # 200.0\n\n# GST at 5%\ngst_rate = 0.05\ngst_amount = subtotal * gst_rate\nprint(\"GST (5%):\", gst_amount)         # 10.0\n\ntotal = subtotal + gst_amount\nprint(\"Total:\", total)                 # 210.0\n\n# Floor division — how many full dozens in 50 eggs?\neggs   = 50\ndozens = eggs // 12\nremain = eggs % 12\nprint(f\"{eggs} eggs = {dozens} dozen and {remain} left over\")\n\n# Exponentiation — compound interest for 3 years\nprincipal = 10000\nrate      = 1.08          # 8% annual growth\nfuture    = principal * (rate ** 3)\nprint(f\"Future value: {future:.2f}\")",
      "explanation": "- `price_per_kg * kg_bought` — multiplying an `int` by a `float` always produces a `float`\n- `subtotal * gst_rate` — Python evaluates the right side fully before assigning the result to `gst_amount`\n- `eggs // 12` — floor division discards the remainder; `50 // 12` gives `4` (four complete dozens)\n- `eggs % 12` — modulo returns only the remainder; `50 % 12` gives `2` (two eggs left over)\n- `rate ** 3` — exponentiation raises `rate` to the power `3`; `1.08 ** 3` equals `1.259712`\n- `:.2f` in the f-string — formats the float to exactly two decimal places"
    },
    "exercise": {
      "title": "Build a Simple Tax Invoice",
      "instructions": "Write a program that calculates a tax invoice. Define three variables: item_price (e.g. 1500.0), quantity as an integer (e.g. 3), and tax_rate as a float (e.g. 0.18 for 18%). Calculate subtotal, tax, and grand_total. Print all five values on separate labelled lines.\n\nExpected output:\nItem Price: 1500.0\nQuantity: 3\nSubtotal: 4500.0\nTax (18%): 810.0\nGrand Total: 5310.0",
      "starterCode": "# Simple Tax Invoice\n\n# Step 1 — define the variables\nitem_price = 1500.0\nquantity   = 3\ntax_rate   = 0.18\n\n# Step 2 — calculate subtotal (price * quantity)\nsubtotal = item_price * quantity\n\n# Step 3 — calculate tax (subtotal * tax_rate)\n# Your code here\n\n# Step 4 — calculate grand_total (subtotal + tax)\n# Your code here\n\n# Step 5 — print all values\nprint(\"Item Price:\", item_price)\nprint(\"Quantity:\",   quantity)\nprint(\"Subtotal:\",   subtotal)\n# Print tax and grand_total here",
      "solutionCode": "item_price = 1500.0\nquantity   = 3\ntax_rate   = 0.18\n\nsubtotal    = item_price * quantity\ntax         = subtotal * tax_rate\ngrand_total = subtotal + tax\n\nprint(\"Item Price:\", item_price)\nprint(\"Quantity:\",   quantity)\nprint(\"Subtotal:\",   subtotal)\nprint(f\"Tax (18%): {tax}\")\nprint(f\"Grand Total: {grand_total:.2f}\")",
      "hints": [
        "💡 Tax is calculated as subtotal multiplied by tax_rate — write tax = subtotal * tax_rate.",
        "💡 Grand total is subtotal plus tax — write grand_total = subtotal + tax.",
        "💡 Use f\"Grand Total: {grand_total:.2f}\" to print the total rounded to two decimal places."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Subtotal:",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "Grand Total:",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "py-m2-l1-q1",
          "question": "What is the result of 17 // 5 in Python?",
          "options": [
            "3.4",
            "2",
            "3",
            "0.4"
          ],
          "correct": 2,
          "explanation": "The // operator performs floor division — it divides and then discards the decimal part, returning only the whole number. 17 divided by 5 is 3.4, so 17 // 5 is 3. This differs from regular / division, which would return 3.4 as a float."
        },
        {
          "id": "py-m2-l1-q2",
          "question": "What does the % operator return when applied to two numbers?",
          "options": [
            "The percentage of the first number",
            "The result of dividing and rounding to the nearest integer",
            "The remainder after integer division",
            "The absolute difference between the two numbers"
          ],
          "correct": 2,
          "explanation": "The % operator (modulo) returns the remainder after integer division. For example, 17 % 5 is 2 because 17 divided by 5 gives 3 remainder 2. It is useful for checking divisibility — if a % b equals 0, then a is divisible by b."
        },
        {
          "id": "py-m2-l1-q3",
          "question": "What type does Python return when you compute 10 / 2?",
          "options": [
            "int, because the answer is a whole number",
            "float, because / always returns a float in Python 3",
            "str, because division produces text",
            "bool, because the result can be True or False"
          ],
          "correct": 1,
          "explanation": "In Python 3, the / operator always returns a float, even when the result is a whole number. So 10 / 2 returns 5.0, not 5. If you need an integer result, use // (floor division): 10 // 2 returns the integer 5."
        }
      ]
    }
  },
  {
    "id": "py-m2-l2",
    "moduleId": "py-m2",
    "title": "Strings and String Methods",
    "order": 2,
    "xpReward": 10,
    "duration": "12 min",
    "explanation": {
      "title": "Working with Text: Strings and Their Methods",
      "content": "# Strings in Python\n\nA **string** is a sequence of characters — letters, digits, spaces, punctuation, or emoji — enclosed in quotes. Think of a string as a necklace where each bead is one character. Python lets you inspect every bead, join necklaces together, and transform them in dozens of ways.\n\n```python\ngreeting = \"Hello, World!\"\ncity     = 'Mumbai'        # single quotes work identically\nempty    = \"\"              # a string with zero characters\n```\n\n## Creating Multi-line Strings\n\nUse triple quotes for strings that span multiple lines:\n\n```python\npoem = \"\"\"Roses are red,\nViolets are blue,\nPython is great,\nAnd so are you.\"\"\"\n```\n\n## String Operations\n\n| Operation | Code | Result |\n|---|---|---|\n| Concatenation | `\"Hello\" + \" \" + \"World\"` | `\"Hello World\"` |\n| Repetition | `\"ha\" * 3` | `\"hahaha\"` |\n| Length | `len(\"Python\")` | `6` |\n| Index | `\"Python\"[0]` | `\"P\"` |\n| Slice | `\"Python\"[1:4]` | `\"yth\"` |\n\n## Essential String Methods\n\nMethods are functions that belong to a string — you call them using a dot:\n\n| Method | What it does | Example |\n|---|---|---|\n| `.upper()` | All uppercase | `\"hello\".upper()` → `\"HELLO\"` |\n| `.lower()` | All lowercase | `\"HELLO\".lower()` → `\"hello\"` |\n| `.strip()` | Remove leading/trailing spaces | `\"  hi  \".strip()` → `\"hi\"` |\n| `.replace(a, b)` | Replace every `a` with `b` | `\"cats\".replace(\"cats\",\"dogs\")` → `\"dogs\"` |\n| `.split(sep)` | Split into a list | `\"a,b,c\".split(\",\")` → `['a','b','c']` |\n| `.startswith(s)` | Check prefix | `\"Python\".startswith(\"Py\")` → `True` |\n| `.count(s)` | Count occurrences | `\"banana\".count(\"a\")` → `3` |\n\n## String Indexing and Slicing\n\nEach character in a string has a position, starting from 0 at the left and -1 at the right:\n\n```python\nword = \"Python\"\nprint(word[0])      # P  — first character\nprint(word[-1])     # n  — last character\nprint(word[1:4])    # yth — characters 1, 2, 3\nprint(word[:2])     # Py  — from start to index 1\nprint(word[2:])     # thon — from index 2 to end\n```\n\nIn the code example below, you will see these operations applied to a name and email address."
    },
    "codeExample": {
      "title": "Name and Email Formatter",
      "language": "python",
      "code": "# Name and Email Formatter — string operations in practice\n\nfull_name = \"  ananya krishnan  \"   # notice leading and trailing spaces\nemail     = \"Ananya.Krishnan@Example.COM\"\n\n# Clean up the name\nclean_name = full_name.strip()          # remove extra spaces\nprint(\"Cleaned:\", clean_name)           # ananya krishnan\n\n# Convert to title case (capitalise each word)\ntitle_name = clean_name.title()\nprint(\"Title case:\", title_name)        # Ananya Krishnan\n\n# Normalise the email to lowercase\nnorm_email = email.lower()\nprint(\"Email:\", norm_email)             # ananya.krishnan@example.com\n\n# Extract the username (everything before @)\nat_position = norm_email.index(\"@\")\nusername    = norm_email[:at_position]\nprint(\"Username:\", username)            # ananya.krishnan\n\n# Count vowels in the name\nvowels = \"aeiou\"\ncount  = sum(1 for ch in title_name.lower() if ch in vowels)\nprint(f\"Vowels in '{title_name}': {count}\")\n\n# Check that the email is valid (contains @ and .)\nhas_at  = \"@\" in norm_email\nhas_dot = \".\" in norm_email\nprint(\"Valid email format:\", has_at and has_dot)",
      "explanation": "- `.strip()` — removes all leading and trailing whitespace without touching characters in the middle\n- `.title()` — capitalises the first letter of every word; `.capitalize()` only capitalises the very first letter\n- `.lower()` — converts all characters to lowercase; essential for case-insensitive comparisons\n- `.index(\"@\")` — returns the integer position of the first occurrence of the substring\n- `norm_email[:at_position]` — slices from the start up to but not including the `@` position\n- `\"@\" in norm_email` — the `in` operator tests substring presence; returns `True` or `False`"
    },
    "exercise": {
      "title": "Build a Username Generator",
      "instructions": "Write a program that takes a full name string and generates a username from it. The full name is stored in a variable called full_name. The username must be created by: (1) stripping whitespace, (2) converting to lowercase, (3) replacing all spaces with underscores. Then print the original name and the generated username on separate labelled lines.\n\nExample: full_name = '  Rahul Sharma  ' should produce username 'rahul_sharma'.\n\nExpected output:\nOriginal: Rahul Sharma\nUsername: rahul_sharma",
      "starterCode": "# Username Generator\n\nfull_name = \"  Rahul Sharma  \"\n\n# Step 1 — strip whitespace from both ends\nclean = full_name.strip()\n\n# Step 2 — convert to lowercase\n# Your code here (store result in variable 'lower')\n\n# Step 3 — replace spaces with underscores\n# Your code here (store result in variable 'username')\n\n# Print results\nprint(\"Original:\", clean)\nprint(\"Username:\", username)",
      "solutionCode": "full_name = \"  Rahul Sharma  \"\n\nclean    = full_name.strip()\nlower    = clean.lower()\nusername = lower.replace(\" \", \"_\")\n\nprint(\"Original:\", clean)\nprint(\"Username:\", username)",
      "hints": [
        "💡 After stripping, convert to lowercase with the .lower() method: lower = clean.lower()",
        "💡 Replace spaces with underscores using .replace(\" \", \"_\"): username = lower.replace(\" \", \"_\")",
        "💡 You can also chain all three methods on one line: full_name.strip().lower().replace(\" \", \"_\")"
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
          "id": "py-m2-l2-q1",
          "question": "What does \"Python\"[1:4] return?",
          "options": [
            "Pyt",
            "yth",
            "ytho",
            "Pyth"
          ],
          "correct": 1,
          "explanation": "String slicing [start:stop] returns characters from index start up to but not including index stop. \"Python\"[1:4] starts at index 1 (the letter 'y') and stops before index 4 (the letter 'o'), so it returns \"yth\". Remember that Python uses zero-based indexing, so index 0 is 'P', index 1 is 'y', and so on."
        },
        {
          "id": "py-m2-l2-q2",
          "question": "Which method removes whitespace from both ends of a string?",
          "options": [
            ".trim()",
            ".clean()",
            ".strip()",
            ".remove()"
          ],
          "correct": 2,
          "explanation": ".strip() removes all leading and trailing whitespace (spaces, tabs, newlines) from a string. Python also provides .lstrip() to strip only the left side and .rstrip() to strip only the right side. There is no .trim() or .clean() method in Python."
        },
        {
          "id": "py-m2-l2-q3",
          "question": "What is the result of \"ha\" * 3 in Python?",
          "options": [
            "ha3",
            "ha ha ha",
            "hahaha",
            "Error — you cannot multiply a string by a number"
          ],
          "correct": 2,
          "explanation": "The * operator on a string repeats it the given number of times. \"ha\" * 3 produces \"hahaha\" — three copies of \"ha\" joined directly with no separator. This is useful for printing borders: \"-\" * 30 prints 30 dashes in one line."
        }
      ]
    }
  },
  {
    "id": "py-m2-l3",
    "moduleId": "py-m2",
    "title": "Type Conversion and Type Checking",
    "order": 3,
    "xpReward": 15,
    "duration": "11 min",
    "explanation": {
      "title": "Converting Between Types and Checking What You Have",
      "content": "# Type Conversion in Python\n\nImagine you receive a package labelled \"text\" but you need to use the contents as a number. Before doing arithmetic, you must re-label it. This is exactly what **type conversion** does in Python — it transforms a value from one data type into another.\n\nPython provides built-in conversion functions:\n\n| Function | Converts to | Example | Result |\n|---|---|---|---|\n| `int()` | Integer | `int(\"42\")` | `42` |\n| `float()` | Float | `float(\"3.14\")` | `3.14` |\n| `str()` | String | `str(100)` | `\"100\"` |\n| `bool()` | Boolean | `bool(0)` | `False` |\n\n## Why Conversion Is Necessary\n\nThe `input()` function always returns a **string**, even when the user types a number. If you try to add a string to an integer without converting, Python raises a `TypeError`:\n\n```python\nage_text = \"20\"          # this is the string \"20\"\nresult   = age_text + 5  # TypeError: can't add str to int\n```\n\nThe fix is to convert before operating:\n\n```python\nage    = int(\"20\")       # now it is the integer 20\nresult = age + 5         # works: 25\n```\n\n## Truthy and Falsy Values\n\nWhen you convert any value to `bool`, Python follows these rules:\n\n- `False` values: `0`, `0.0`, `\"\"` (empty string), `None`, empty collections\n- `True` values: any non-zero number, any non-empty string, any non-empty collection\n\n```python\nprint(bool(0))       # False\nprint(bool(1))       # True\nprint(bool(\"\"))      # False\nprint(bool(\"hi\"))    # True\n```\n\n## Checking the Type of a Value\n\nUse `type()` to check the current type of any value, and `isinstance()` to test whether a value belongs to a specific type:\n\n```python\nx = 42\nprint(type(x))              # <class 'int'>\nprint(isinstance(x, int))   # True\nprint(isinstance(x, str))   # False\n```\n\n## What Cannot Be Converted\n\nNot every conversion is valid. Python raises a `ValueError` when conversion is impossible:\n\n```python\nint(\"hello\")    # ValueError — 'hello' is not a number\nfloat(\"abc\")   # ValueError — 'abc' is not a decimal\n```\n\nIn the code example below, you will see type conversion applied to a user input simulation where numeric strings must be converted before arithmetic can be performed."
    },
    "codeExample": {
      "title": "Age and Year Calculator",
      "language": "python",
      "code": "# Age and Year Calculator — demonstrates type conversion\n\n# Simulating input() responses as strings (as input() always returns str)\nbirth_year_str = \"2003\"    # this is a string, not a number\ncurrent_year   = 2025       # this is already an integer\n\n# Convert the string to int before arithmetic\nbirth_year = int(birth_year_str)\nage        = current_year - birth_year\nprint(f\"Birth year  : {birth_year}  (type: {type(birth_year).__name__})\")\nprint(f\"Age         : {age}\")\n\n# Float conversion example\ngpa_str = \"3.75\"\ngpa     = float(gpa_str)\nprint(f\"GPA         : {gpa}  (type: {type(gpa).__name__})\")\n\n# Converting number back to string for text joining\nage_label = \"Age: \" + str(age)    # without str() this would crash\nprint(age_label)\n\n# Checking types with isinstance()\nprint(\"\\n--- Type Checks ---\")\nprint(isinstance(age, int))     # True\nprint(isinstance(gpa, float))   # True\nprint(isinstance(\"hello\", str)) # True\nprint(isinstance(age, str))     # False",
      "explanation": "- `int(birth_year_str)` — converts `\"2003\"` into integer `2003` so subtraction is possible\n- `type(birth_year).__name__` — `type()` returns the class; `.__name__` gives the readable name as a string\n- `float(gpa_str)` — converts `\"3.75\"` into the float `3.75`; the string must contain only valid decimal digits\n- `\"Age: \" + str(age)` — concatenating a string and integer requires converting the integer with `str()` first\n- `isinstance(age, int)` — returns `True` if `age` is an `int`; preferred over `type(age) == int` in practice"
    },
    "exercise": {
      "title": "Convert and Compute a Student Score Report",
      "instructions": "Three test scores arrive as strings from a data file. Convert them to integers, then calculate and print the total and the average. The scores are stored in variables score1_str, score2_str, and score3_str. After converting, print each converted score, the total, and the average rounded to one decimal place.\n\nExpected output:\nScore 1: 85\nScore 2: 92\nScore 3: 78\nTotal: 255\nAverage: 85.0",
      "starterCode": "# Student Score Report\n\n# Scores provided as strings (as if read from a file or input)\nscore1_str = \"85\"\nscore2_str = \"92\"\nscore3_str = \"78\"\n\n# Step 1 — convert all three strings to integers\nscore1 = int(score1_str)\n# Your code here for score2 and score3\n\n# Step 2 — calculate total\n# Your code here\n\n# Step 3 — calculate average (total divided by 3)\n# Your code here\n\n# Step 4 — print results\nprint(\"Score 1:\", score1)\n# Print score2, score3, total, and average here",
      "solutionCode": "score1_str = \"85\"\nscore2_str = \"92\"\nscore3_str = \"78\"\n\nscore1  = int(score1_str)\nscore2  = int(score2_str)\nscore3  = int(score3_str)\ntotal   = score1 + score2 + score3\naverage = total / 3\n\nprint(\"Score 1:\", score1)\nprint(\"Score 2:\", score2)\nprint(\"Score 3:\", score3)\nprint(\"Total:\",   total)\nprint(f\"Average: {average:.1f}\")",
      "hints": [
        "💡 Convert each score with int(): score2 = int(score2_str) and score3 = int(score3_str).",
        "💡 Calculate total by adding all three converted scores: total = score1 + score2 + score3.",
        "💡 Divide total by 3 to get the average, then print with f\"Average: {average:.1f}\" to show one decimal place."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Total: 255",
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
          "id": "py-m2-l3-q1",
          "question": "Why must you call int() on the result of input() before doing arithmetic?",
          "options": [
            "Because input() returns None and None cannot be added",
            "Because input() always returns a string, and you cannot add a string to a number",
            "Because int() makes the program run faster",
            "Because Python 3 removed direct arithmetic on input values"
          ],
          "correct": 1,
          "explanation": "input() always returns a string (str), regardless of what the user types. Attempting to add a string to an integer raises a TypeError. You must use int() to convert the string to an integer first, or float() if you expect a decimal value. This is one of the most common beginner mistakes in Python."
        },
        {
          "id": "py-m2-l3-q2",
          "question": "What does bool(\"\") return in Python?",
          "options": [
            "True, because a string exists",
            "None, because the string has no value",
            "False, because an empty string is falsy",
            "Error, because bool() only accepts numbers"
          ],
          "correct": 2,
          "explanation": "An empty string \"\" is falsy in Python — bool(\"\") returns False. Any non-empty string is truthy. This rule extends to other types: 0 and 0.0 are falsy; any non-zero number is truthy. Empty lists, tuples, and dictionaries are also falsy. This behaviour is used in if statements to check whether a value is empty."
        }
      ]
    }
  }
]
''')

# ── py-m3 — Conditions
# Lessons : py-m3-l1, py-m3-l2, py-m3-l3
# XP      : 35
python_m3_raw = json.loads(r'''
[
  {
    "id": "py-m3-l1",
    "moduleId": "py-m3",
    "title": "if, elif, and else Statements",
    "order": 1,
    "xpReward": 10,
    "duration": "11 min",
    "explanation": {
      "title": "Making Decisions in Python with if, elif, and else",
      "content": "# Making Decisions with Conditions\n\nEvery useful program must make decisions. Think of a traffic light: it checks the current colour and acts accordingly — green means go, yellow means slow down, red means stop. An `if` statement works the same way in Python: it checks a condition and runs a block of code only when that condition is `True`.\n\n## The if Statement\n\n```python\ntemperature = 38\nif temperature > 37:\n    print(\"You have a fever.\")\n```\n\nNotice the two essential syntax rules:\n1. The condition is followed by a **colon** `:`\n2. The body is **indented** by four spaces (or one tab)\n\nPython uses indentation to define which lines belong to the `if` block. This is different from many other languages that use curly braces.\n\n## Adding an else Branch\n\n```python\nif temperature > 37:\n    print(\"You have a fever.\")\nelse:\n    print(\"Your temperature is normal.\")\n```\n\nThe `else` block runs when the condition is `False`. It is optional — you do not always need one.\n\n## Multiple Conditions with elif\n\nWhen you have more than two possible outcomes, use `elif` (short for \"else if\"):\n\n```python\nscore = 75\nif score >= 90:\n    print(\"Grade: A\")\nelif score >= 80:\n    print(\"Grade: B\")\nelif score >= 70:\n    print(\"Grade: C\")\nelse:\n    print(\"Grade: F\")\n```\n\nPython evaluates conditions top to bottom and stops at the **first** one that is `True`. Once a match is found, all remaining `elif` and `else` branches are skipped.\n\n## The Ternary Expression\n\nFor simple two-outcome decisions, Python offers a one-line shortcut:\n\n```python\nlabel = \"Adult\" if age >= 18 else \"Minor\"\n```\n\nThis is equivalent to an `if/else` block but fits on a single line when both outcomes are short.\n\nIn the code example below, you will see a grade classifier that uses `if`, `elif`, and `else` to assign a letter grade and feedback message."
    },
    "codeExample": {
      "title": "Student Grade Classifier",
      "language": "python",
      "code": "# Student Grade Classifier\n# Assigns a letter grade and feedback based on a numeric score\n\nstudent = \"Kiran\"\nscore   = 82\n\nif score >= 90:\n    grade    = \"A\"\n    feedback = \"Outstanding performance!\"\nelif score >= 80:\n    grade    = \"B\"\n    feedback = \"Great work, keep it up!\"\nelif score >= 70:\n    grade    = \"C\"\n    feedback = \"Good effort, room to improve.\"\nelif score >= 60:\n    grade    = \"D\"\n    feedback = \"Needs more practice.\"\nelse:\n    grade    = \"F\"\n    feedback = \"Please seek extra help.\"\n\nprint(f\"Student  : {student}\")\nprint(f\"Score    : {score}/100\")\nprint(f\"Grade    : {grade}\")\nprint(f\"Feedback : {feedback}\")\n\n# Ternary expression example\nstatus = \"Pass\" if score >= 50 else \"Fail\"\nprint(f\"Status   : {status}\")",
      "explanation": "- `if score >= 90:` — evaluates whether `score` is 90 or more; the colon is mandatory and the body must be indented\n- `elif score >= 80:` — only evaluated when all previous conditions were `False`; stops at the first `True` match\n- `grade = \"B\"` inside an `elif` block — any variable assigned inside a block is still accessible after the block ends\n- `else:` — catches everything that did not match any `if` or `elif`; has no condition of its own\n- `\"Pass\" if score >= 50 else \"Fail\"` — the ternary expression; the value before `if` is chosen when the condition is `True`"
    },
    "exercise": {
      "title": "Write a Ticket Price Calculator",
      "instructions": "Write a program that calculates the ticket price for a cinema based on the customer's age. Define a variable age (integer). Apply these rules: under 5 is free (price = 0), age 5 to 12 pays 100, age 13 to 17 pays 150, age 18 to 59 pays 200, and age 60 or above pays 120. Print the age and the ticket price on separate labelled lines.\n\nTest with age = 25. Expected output:\nAge: 25\nTicket Price: 200",
      "starterCode": "# Cinema Ticket Price Calculator\n\nage = 25\n\n# Use if, elif, and else to set ticket_price\nif age < 5:\n    ticket_price = 0\nelif age <= 12:\n    ticket_price = 100\n# Your code here for ages 13-17\n# Your code here for ages 18-59\n# Your code here for 60 and above\n\nprint(\"Age:\",          age)\nprint(\"Ticket Price:\", ticket_price)",
      "solutionCode": "age = 25\n\nif age < 5:\n    ticket_price = 0\nelif age <= 12:\n    ticket_price = 100\nelif age <= 17:\n    ticket_price = 150\nelif age <= 59:\n    ticket_price = 200\nelse:\n    ticket_price = 120\n\nprint(\"Age:\",          age)\nprint(\"Ticket Price:\", ticket_price)",
      "hints": [
        "💡 Think about the order — check from the smallest age range upward so earlier conditions eliminate lower ranges.",
        "💡 For ages 13 to 17, write elif age <= 17: because earlier branches already ruled out ages below 13.",
        "💡 The last range (60 and above) does not need a condition — use else: since all lower ages were already handled."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Ticket Price: 200",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "py-m3-l1-q1",
          "question": "What is the correct syntax to start an if statement in Python?",
          "options": [
            "if (condition) {",
            "if condition:",
            "if condition then",
            "IF condition:"
          ],
          "correct": 1,
          "explanation": "Python's if statement syntax is: if condition: — no parentheses around the condition (they are optional but not required), a colon at the end, and the body indented on the next line. Python is case-sensitive, so IF would cause a NameError. There are no curly braces in Python; indentation defines the block."
        },
        {
          "id": "py-m3-l1-q2",
          "question": "When does the else block of an if/elif/else chain execute?",
          "options": [
            "Always, regardless of the conditions above it",
            "Only when the first if condition is False",
            "When none of the if or elif conditions evaluated to True",
            "When every condition in the chain evaluated to True"
          ],
          "correct": 2,
          "explanation": "The else block runs only when every if and elif condition above it evaluated to False. If any if or elif condition is True, Python executes that block and then skips the rest of the chain including else. The else has no condition of its own — it acts as the default fallback."
        },
        {
          "id": "py-m3-l1-q3",
          "question": "What is the output of: label = \"Yes\" if 10 > 5 else \"No\" followed by print(label)?",
          "options": [
            "No",
            "True",
            "Yes",
            "10 > 5"
          ],
          "correct": 2,
          "explanation": "The ternary expression evaluates the condition 10 > 5, which is True. When the condition is True, the expression returns the value before the if keyword — which is \"Yes\". So label is assigned \"Yes\" and print(label) displays Yes."
        }
      ]
    }
  },
  {
    "id": "py-m3-l2",
    "moduleId": "py-m3",
    "title": "Comparison and Logical Operators",
    "order": 2,
    "xpReward": 10,
    "duration": "11 min",
    "explanation": {
      "title": "Comparing Values and Combining Conditions",
      "content": "# Comparison Operators\n\nA condition in an `if` statement always evaluates to `True` or `False`. The most direct way to produce this result is with a **comparison operator**, which compares two values:\n\n| Operator | Meaning | Example | Result |\n|---|---|---|---|\n| `==` | Equal to | `5 == 5` | `True` |\n| `!=` | Not equal to | `5 != 3` | `True` |\n| `>` | Greater than | `7 > 3` | `True` |\n| `<` | Less than | `3 < 7` | `True` |\n| `>=` | Greater than or equal | `5 >= 5` | `True` |\n| `<=` | Less than or equal | `4 <= 3` | `False` |\n\n**Critical distinction:** `=` assigns a value; `==` compares two values. Confusing them is one of the most common bugs beginners write.\n\n## Logical Operators\n\nTo combine multiple conditions, use the three logical operators:\n\n| Operator | Meaning | Example |\n|---|---|---|\n| `and` | Both must be `True` | `age >= 18 and has_id` |\n| `or` | At least one must be `True` | `is_admin or is_owner` |\n| `not` | Reverses `True`/`False` | `not is_banned` |\n\n### Truth tables\n\n| A | B | A and B | A or B |\n|---|---|---|---|\n| True | True | True | True |\n| True | False | False | True |\n| False | True | False | True |\n| False | False | False | False |\n\n## The in Operator\n\nThe `in` operator checks membership — whether a value exists inside a collection or string:\n\n```python\nfruits = [\"apple\", \"banana\", \"mango\"]\nif \"mango\" in fruits:\n    print(\"Mango is available!\")\n\nif \"@\" in email:\n    print(\"Email looks valid.\")\n```\n\n## Chaining Comparisons\n\nPython allows a readable shortcut for range checks:\n\n```python\nif 18 <= age <= 60:    # same as age >= 18 and age <= 60\n    print(\"Working age group\")\n```\n\nIn the code example below, you will see logical operators and comparison operators combined to build a login validator."
    },
    "codeExample": {
      "title": "Login Access Validator",
      "language": "python",
      "code": "# Login Access Validator — uses comparison and logical operators\n\nusername    = \"rahul_dev\"\npassword    = \"secret123\"\nlogin_count = 3\nis_banned   = False\n\n# Correct credentials (case-sensitive)\ncorrect_user = \"rahul_dev\"\ncorrect_pass = \"secret123\"\nmax_attempts = 5\n\n# Check all conditions\nvalid_credentials = (username == correct_user) and (password == correct_pass)\nwithin_limit      = login_count <= max_attempts\naccount_active    = not is_banned\n\nprint(\"Credentials OK :\", valid_credentials)\nprint(\"Within limit   :\", within_limit)\nprint(\"Account active :\", account_active)\n\nif valid_credentials and within_limit and account_active:\n    print(\"\\nAccess GRANTED — welcome!\", username)\nelif not account_active:\n    print(\"\\nAccess DENIED — account is banned.\")\nelif not within_limit:\n    print(\"\\nAccess DENIED — too many attempts.\")\nelse:\n    print(\"\\nAccess DENIED — incorrect username or password.\")",
      "explanation": "- `username == correct_user` — the `==` operator compares two string values; a single `=` would assign, not compare\n- `(username == correct_user) and (password == correct_pass)` — `and` requires both comparisons to be `True`\n- `not is_banned` — the `not` operator flips `False` to `True`, making `account_active` `True` when the account is not banned\n- `valid_credentials and within_limit and account_active` — all three boolean variables must be `True` for access to be granted\n- `not account_active` in the `elif` — shorthand for `account_active == False`; `not` is cleaner and more readable"
    },
    "exercise": {
      "title": "Build a Loan Eligibility Checker",
      "instructions": "Write a program that checks loan eligibility. Use three variables: age (integer), monthly_income (float), and has_existing_loan (boolean). Rules: age must be 21-60 inclusive, monthly_income must be at least 25000, and has_existing_loan must be False. Print \"Eligible for loan\" if all rules are met, otherwise print \"Not eligible\".\n\nTest: age=30, monthly_income=35000.0, has_existing_loan=False.\nExpected: Eligible for loan",
      "starterCode": "# Loan Eligibility Checker\n\nage               = 30\nmonthly_income    = 35000.0\nhas_existing_loan = False\n\n# Check all three conditions together using and\n# Age: 21 to 60 inclusive (use chained comparison)\n# Income: at least 25000\n# No existing loan: has_existing_loan must be False\n\nif 21 <= age <= 60 and monthly_income >= 25000 and not has_existing_loan:\n    print(\"Eligible for loan\")\nelse:\n    print(\"Not eligible\")",
      "solutionCode": "age               = 30\nmonthly_income    = 35000.0\nhas_existing_loan = False\n\nif 21 <= age <= 60 and monthly_income >= 25000 and not has_existing_loan:\n    print(\"Eligible for loan\")\nelse:\n    print(\"Not eligible\")",
      "hints": [
        "💡 Use a chained comparison for the age range: 21 <= age <= 60 is cleaner than two separate conditions joined with and.",
        "💡 Check income with monthly_income >= 25000 and combine it with the age check using and.",
        "💡 Use not has_existing_loan to check that no existing loan exists — this reads as 'does not have an existing loan'."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Eligible for loan",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "py-m3-l2-q1",
          "question": "What is the difference between = and == in Python?",
          "options": [
            "They are identical and can be used interchangeably",
            "= compares two values; == assigns a value to a variable",
            "= assigns a value to a variable; == compares two values",
            "= is used for integers; == is used for strings"
          ],
          "correct": 2,
          "explanation": "= is the assignment operator — it stores a value in a variable: x = 5. == is the equality comparison operator — it checks whether two values are equal and returns True or False: x == 5. Using = inside an if condition is a SyntaxError in Python (unlike some other languages where it is a silent bug)."
        },
        {
          "id": "py-m3-l2-q2",
          "question": "What does the expression True and False evaluate to?",
          "options": [
            "True",
            "False",
            "None",
            "Error"
          ],
          "correct": 1,
          "explanation": "The and operator returns True only when both operands are True. Since False is on the right side, True and False evaluates to False. If you think of and as 'both must agree', one False is enough to make the whole expression False."
        },
        {
          "id": "py-m3-l2-q3",
          "question": "What does 18 <= age <= 60 mean in Python?",
          "options": [
            "age is exactly 18 or exactly 60",
            "age is greater than 18 but less than 60",
            "age is at least 18 and at most 60 — a chained comparison",
            "This is a syntax error in Python"
          ],
          "correct": 2,
          "explanation": "Python supports chained comparisons, so 18 <= age <= 60 is valid and is equivalent to age >= 18 and age <= 60. Python evaluates both halves and requires both to be True. This syntax is more readable than the equivalent written with and, so it is widely used for range checks."
        }
      ]
    }
  },
  {
    "id": "py-m3-l3",
    "moduleId": "py-m3",
    "title": "Nested Conditions and match Statements",
    "order": 3,
    "xpReward": 15,
    "duration": "12 min",
    "explanation": {
      "title": "Nested Conditions and Python's match Statement",
      "content": "# Nested if Statements\n\nSometimes a decision depends on another decision. Imagine a vending machine: it first checks whether you inserted enough money, and only if you did, it then checks which button you pressed. This layered logic is called **nested conditions** — an `if` statement inside another `if` statement.\n\n```python\nbalance = 50\nitem    = \"chips\"\n\nif balance >= 10:\n    if item == \"chips\":\n        print(\"Dispensing chips.\")\n        balance -= 10\n    elif item == \"soda\":\n        print(\"Dispensing soda.\")\n        balance -= 15\n    else:\n        print(\"Unknown item.\")\nelse:\n    print(\"Insufficient balance.\")\n```\n\nEach level of nesting adds four spaces of indentation. Python uses indentation to determine which `if` owns which `elif`/`else`.\n\n## When to Avoid Deep Nesting\n\nNesting beyond two levels makes code hard to read. A common technique to reduce nesting is the **early return** or **guard clause** pattern — check failure conditions first and exit early:\n\n```python\n# Deep nesting (harder to read)\nif is_logged_in:\n    if has_permission:\n        if not is_banned:\n            process_request()\n\n# Guard clauses (easier to read)\nif not is_logged_in:   return\nif not has_permission: return\nif is_banned:          return\nprocess_request()\n```\n\n## The match Statement (Python 3.10+)\n\nPython 3.10 introduced `match`, a cleaner alternative to long `if/elif` chains when you are matching a value against a fixed set of possibilities:\n\n```python\nday_number = 3\n\nmatch day_number:\n    case 1: print(\"Monday\")\n    case 2: print(\"Tuesday\")\n    case 3: print(\"Wednesday\")\n    case 4: print(\"Thursday\")\n    case 5: print(\"Friday\")\n    case _: print(\"Weekend\")   # _ is the default case\n```\n\nThe `case _:` block (underscore) is the wildcard — it matches anything that did not match an earlier case, equivalent to `else`.\n\n## match with Multiple Values per Case\n\n```python\nmatch status_code:\n    case 200 | 201 | 204:\n        print(\"Success\")\n    case 400 | 422:\n        print(\"Client error\")\n    case 500 | 502 | 503:\n        print(\"Server error\")\n    case _:\n        print(\"Unknown code\")\n```\n\nThe `|` operator inside a `case` matches any of several values. In the code example below, you will see nested conditions and a `match` statement applied to a simple ATM simulator."
    },
    "codeExample": {
      "title": "Simple ATM Transaction Simulator",
      "language": "python",
      "code": "# ATM Transaction Simulator — nested conditions + match\n\npin_correct  = True\nbalance      = 5000\ntransaction  = \"withdraw\"   # options: withdraw, deposit, balance\namount       = 1500\n\n# Outer condition: pin must be correct before anything\nif pin_correct:\n    match transaction:\n        case \"withdraw\":\n            if amount <= 0:\n                print(\"Invalid amount.\")\n            elif amount > balance:\n                print(\"Insufficient funds.\")\n            else:\n                balance -= amount\n                print(f\"Withdrew: {amount}\")\n                print(f\"Remaining balance: {balance}\")\n        case \"deposit\":\n            if amount <= 0:\n                print(\"Invalid deposit amount.\")\n            else:\n                balance += amount\n                print(f\"Deposited: {amount}\")\n                print(f\"New balance: {balance}\")\n        case \"balance\":\n            print(f\"Current balance: {balance}\")\n        case _:\n            print(\"Unknown transaction type.\")\nelse:\n    print(\"Incorrect PIN. Access denied.\")",
      "explanation": "- `if pin_correct:` — the outer guard; nothing inside runs unless the PIN is correct\n- `match transaction:` — evaluates the string in `transaction` and jumps to the matching `case`\n- `case \"withdraw\":` — matches when `transaction` equals the string `\"withdraw\"` exactly\n- `elif amount > balance:` — nested inside the `\"withdraw\"` case; only reached when `amount > 0`\n- `balance -= amount` — the augmented subtraction operator; shorthand for `balance = balance - amount`\n- `case _:` — the wildcard default; runs when no other case matched"
    },
    "exercise": {
      "title": "Build a Restaurant Menu Order System",
      "instructions": "Write a menu ordering program. Define two variables: category (a string: 'food', 'drink', or 'dessert') and item (a string). Use a match statement on category. Inside each case, use nested if/elif to check the item name and set a price. For food: pizza=250, burger=150. For drink: cola=50, juice=80. For dessert: icecream=90, cake=120. Default case and unknown items should print 'Not available'. Print the item and its price.\n\nTest: category='food', item='pizza'. Expected output: pizza: 250",
      "starterCode": "# Restaurant Menu Order System\n\ncategory = \"food\"\nitem     = \"pizza\"\nprice    = 0\n\nmatch category:\n    case \"food\":\n        if item == \"pizza\":\n            price = 250\n        elif item == \"burger\":\n            price = 150\n        else:\n            price = -1    # -1 means not available\n    # Your code here for case \"drink\" (cola=50, juice=80)\n    # Your code here for case \"dessert\" (icecream=90, cake=120)\n    case _:\n        price = -1\n\nif price == -1:\n    print(\"Not available\")\nelse:\n    print(f\"{item}: {price}\")",
      "solutionCode": "category = \"food\"\nitem     = \"pizza\"\nprice    = 0\n\nmatch category:\n    case \"food\":\n        if   item == \"pizza\":   price = 250\n        elif item == \"burger\":  price = 150\n        else:                   price = -1\n    case \"drink\":\n        if   item == \"cola\":    price = 50\n        elif item == \"juice\":   price = 80\n        else:                   price = -1\n    case \"dessert\":\n        if   item == \"icecream\": price = 90\n        elif item == \"cake\":     price = 120\n        else:                    price = -1\n    case _:\n        price = -1\n\nif price == -1:\n    print(\"Not available\")\nelse:\n    print(f\"{item}: {price}\")",
      "hints": [
        "💡 Add case \"drink\": followed by indented if/elif blocks for cola and juice, using the same pattern as the food case.",
        "💡 Add case \"dessert\": the same way, with if/elif for icecream and cake, and an else that sets price = -1.",
        "💡 The final if price == -1 check handles both unknown categories and unknown items within a known category."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "pizza: 250",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "py-m3-l3-q1",
          "question": "In Python's match statement, what does case _ mean?",
          "options": [
            "It matches only the value None",
            "It matches only empty strings",
            "It is the wildcard default case that matches any value not caught above",
            "It causes a SyntaxError because _ is not a valid case value"
          ],
          "correct": 2,
          "explanation": "In a Python match statement, case _: is the wildcard pattern — the underscore matches any value that was not matched by any earlier case. It works like else in an if/elif chain. If no case _ is present and no case matches, the match statement simply does nothing."
        },
        {
          "id": "py-m3-l3-q2",
          "question": "What version of Python introduced the match statement?",
          "options": [
            "Python 2.7",
            "Python 3.6",
            "Python 3.8",
            "Python 3.10"
          ],
          "correct": 3,
          "explanation": "The match statement (structural pattern matching) was introduced in Python 3.10. If you run code containing match on Python 3.9 or earlier, you will get a SyntaxError. For older Python versions, use a chain of if/elif statements to achieve the same effect."
        },
        {
          "id": "py-m3-l3-q3",
          "question": "What is the main risk of deeply nested if statements?",
          "options": [
            "Python raises an error when nesting goes deeper than two levels",
            "Deeply nested code becomes difficult to read and maintain",
            "Nested if statements run slower than flat if/elif chains",
            "Variables defined inside inner if blocks are deleted after the block"
          ],
          "correct": 1,
          "explanation": "Python does not limit nesting depth, but deeply nested code is hard to read, test, and maintain. Each new level of indentation makes it harder to track which else belongs to which if. The professional solution is to use guard clauses — check failure conditions early and handle them at the top of the function — keeping the main logic at the lowest indentation level."
        }
      ]
    }
  }
]
''')

# ── py-m4 — Loops
# Lessons : py-m4-l1, py-m4-l2, py-m4-l3
# XP      : 35
python_m4_raw = json.loads(r'''
[
  {
    "id": "py-m4-l1",
    "moduleId": "py-m4",
    "title": "for Loops and range()",
    "order": 1,
    "xpReward": 10,
    "duration": "12 min",
    "explanation": {
      "title": "Repeating Actions with for Loops and range()",
      "content": "# for Loops\n\nImagine a teacher who must hand a report card to each student in a class of 30. Instead of writing 30 identical `print()` calls, the teacher walks down the row and repeats the same action for each student. A `for` loop does exactly this — it repeats a block of code once for each item in a sequence.\n\n## Basic for Loop Syntax\n\n```python\nfruits = [\"apple\", \"banana\", \"mango\"]\nfor fruit in fruits:\n    print(fruit)\n```\n\nRead this as: \"for each fruit in the fruits list, print that fruit.\" The variable `fruit` is the **loop variable** — it takes the value of each item in turn.\n\n## The range() Function\n\n`range()` generates a sequence of integers without creating a list in memory. It is the standard way to repeat something a fixed number of times:\n\n| Call | Sequence produced |\n|---|---|\n| `range(5)` | `0, 1, 2, 3, 4` |\n| `range(1, 6)` | `1, 2, 3, 4, 5` |\n| `range(0, 10, 2)` | `0, 2, 4, 6, 8` |\n| `range(10, 0, -1)` | `10, 9, 8, 7, 6, 5, 4, 3, 2, 1` |\n\n`range(start, stop, step)` — the `stop` value is **never included**.\n\n```python\nfor i in range(1, 6):     # i takes values 1, 2, 3, 4, 5\n    print(i)\n```\n\n## Iterating with enumerate()\n\nWhen you need both the index and the value, use `enumerate()`:\n\n```python\nstudents = [\"Rahul\", \"Priya\", \"Amit\"]\nfor index, name in enumerate(students, start=1):\n    print(f\"{index}. {name}\")\n```\n\nOutput:\n```\n1. Rahul\n2. Priya\n3. Amit\n```\n\n## Accumulating Results Inside a Loop\n\nA common pattern is to initialise a variable before the loop and update it inside:\n\n```python\ntotal = 0\nfor i in range(1, 101):    # sum numbers 1 to 100\n    total += i\nprint(total)               # 5050\n```\n\nIn the code example below, you will see a loop that builds a multiplication table and another that computes a running total from a list of scores."
    },
    "codeExample": {
      "title": "Score Summary and Times Table",
      "language": "python",
      "code": "# Score Summary — accumulate total and find max\nscores = [78, 92, 85, 67, 95, 88]\ntotal  = 0\nhighest = scores[0]   # start with the first score as the highest\n\nfor score in scores:\n    total += score                  # add each score to running total\n    if score > highest:\n        highest = score             # update highest if we find a bigger one\n\naverage = total / len(scores)\nprint(f\"Scores  : {scores}\")\nprint(f\"Total   : {total}\")\nprint(f\"Average : {average:.1f}\")\nprint(f\"Highest : {highest}\")\n\n# Times table using range()\nprint(\"\\n--- 7 Times Table ---\")\nfor i in range(1, 11):              # i goes from 1 to 10 inclusive\n    print(f\"7 x {i:2d} = {7 * i:3d}\")  # :2d pads i to 2 digits, :3d pads result",
      "explanation": "- `for score in scores:` — each iteration assigns the next list element to `score`\n- `total += score` — the augmented assignment adds `score` to `total` on every pass through the loop\n- `if score > highest:` — a condition inside a loop body runs on every iteration\n- `range(1, 11)` — produces integers 1 through 10; the stop value 11 is never included\n- `{i:2d}` — the `:2d` format code right-aligns the integer in a field of width 2, keeping columns aligned"
    },
    "exercise": {
      "title": "Print a Number Triangle Pattern",
      "instructions": "Write a program using nested for loops to print the following right-angle triangle pattern of numbers. The outer loop controls the row number (1 to 5), and the inner loop prints the numbers from 1 up to the current row number. Use print() with end=\" \" in the inner loop so numbers stay on one line, then print() with no arguments to move to the next row.\n\nExpected output:\n1\n1 2\n1 2 3\n1 2 3 4\n1 2 3 4 5",
      "starterCode": "# Number Triangle Pattern\n\nfor row in range(1, 6):            # row goes from 1 to 5\n    for col in range(1, row + 1):  # col goes from 1 to current row\n        print(col, end=\" \")        # stay on the same line\n    print()                        # move to the next line after each row",
      "solutionCode": "for row in range(1, 6):\n    for col in range(1, row + 1):\n        print(col, end=\" \")\n    print()",
      "hints": [
        "💡 The outer loop range(1, 6) gives row values 1, 2, 3, 4, 5 — one value for each row of the triangle.",
        "💡 The inner loop range(1, row + 1) goes from 1 up to and including the current row number.",
        "💡 Use end=\" \" in the inner print() to stay on one line, then a plain print() after the inner loop to add the newline."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "1 2 3 4 5",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "py-m4-l1-q1",
          "question": "What sequence does range(2, 8, 2) produce?",
          "options": [
            "2, 4, 6, 8",
            "2, 4, 6",
            "1, 3, 5, 7",
            "0, 2, 4, 6, 8"
          ],
          "correct": 1,
          "explanation": "range(start, stop, step) starts at 2, increments by 2 each time, and stops before reaching 8. So the sequence is 2, 4, 6 — the value 8 is never included because range's stop is exclusive. If you need to include 8, use range(2, 9, 2)."
        },
        {
          "id": "py-m4-l1-q2",
          "question": "What does enumerate(items, start=1) provide on each iteration?",
          "options": [
            "Only the index, starting from 1",
            "Only the item value",
            "Both the index starting from 1 and the item value as a pair",
            "The length of the items collection"
          ],
          "correct": 2,
          "explanation": "enumerate() wraps an iterable and yields pairs of (index, value) on each iteration. The start parameter sets the beginning index value. With start=1, the first pair is (1, first_item), then (2, second_item), and so on. You unpack the pair in the for statement: for index, value in enumerate(items, start=1)."
        },
        {
          "id": "py-m4-l1-q3",
          "question": "What is the value of total after: total = 0; for i in range(1, 5): total += i?",
          "options": [
            "15",
            "5",
            "10",
            "4"
          ],
          "correct": 2,
          "explanation": "range(1, 5) produces 1, 2, 3, 4 — the stop value 5 is excluded. total starts at 0 and accumulates: 0+1=1, 1+2=3, 3+3=6, 6+4=10. The final value is 10. If you wanted to include 5 in the sum, you would use range(1, 6)."
        }
      ]
    }
  },
  {
    "id": "py-m4-l2",
    "moduleId": "py-m4",
    "title": "while Loops",
    "order": 2,
    "xpReward": 10,
    "duration": "11 min",
    "explanation": {
      "title": "Repeating Until a Condition Changes with while Loops",
      "content": "# while Loops\n\nA `for` loop is ideal when you know in advance how many times to repeat. But sometimes you do not know the count — you just want to keep going until something changes. Think of waiting for a bus: you do not know exactly how many minutes you will wait, but you stop waiting when the bus arrives. A `while` loop expresses this perfectly.\n\n## Basic while Syntax\n\n```python\nwhile condition:\n    # body — runs as long as condition is True\n```\n\nThe condition is checked **before** each iteration. If it is `False` at the start, the body never runs at all.\n\n```python\ncountdown = 5\nwhile countdown > 0:\n    print(countdown)\n    countdown -= 1      # CRITICAL: must change the condition eventually\nprint(\"Liftoff!\")\n```\n\n## The Infinite Loop Danger\n\nIf the condition never becomes `False`, the loop runs forever. This is called an **infinite loop**:\n\n```python\n# DANGEROUS — condition never changes\nwhile True:\n    print(\"This runs forever\")\n```\n\nAlways ensure the loop body contains something that will eventually make the condition `False`.\n\n## while True with break\n\nA controlled infinite loop is sometimes intentional — run forever until an explicit `break` statement exits:\n\n```python\nattempts = 0\nwhile True:\n    answer = input(\"Enter the password: \")\n    attempts += 1\n    if answer == \"secret\":\n        print(\"Correct!\")\n        break             # exits the loop\n    if attempts >= 3:\n        print(\"Too many attempts.\")\n        break\n```\n\n## The do-while Pattern in Python\n\nPython has no `do-while` statement, but you can simulate one — run the body once, then check the condition:\n\n```python\nwhile True:\n    number = int(input(\"Enter a positive number: \"))\n    if number > 0:\n        break\nprint(f\"You entered: {number}\")\n```\n\nIn the code example below, you will see a `while` loop that simulates a bank ATM session continuing until the user decides to exit or the balance reaches zero."
    },
    "codeExample": {
      "title": "ATM Session Simulator",
      "language": "python",
      "code": "# ATM Session Simulator — while loop keeps session open\n\nbalance     = 3000\nmax_tries   = 3\ntry_count   = 0\n\n# Simulate a sequence of withdrawal requests\nwithdrawals = [500, 1000, 2000, 100]   # predefined requests (no input())\nrequest_idx = 0\n\nprint(f\"Opening session. Balance: {balance}\")\n\nwhile balance > 0 and request_idx < len(withdrawals):\n    amount = withdrawals[request_idx]\n    request_idx += 1\n\n    print(f\"\\nRequested: {amount}\")\n\n    if amount <= 0:\n        print(\"Invalid amount.\")\n    elif amount > balance:\n        print(\"Insufficient funds — transaction declined.\")\n    else:\n        balance -= amount\n        print(f\"Dispensed: {amount}\")\n        print(f\"Remaining: {balance}\")\n\n    if balance == 0:\n        print(\"Balance reached zero. Session ending.\")\n        break\n\nprint(f\"\\nSession closed. Final balance: {balance}\")",
      "explanation": "- `while balance > 0 and request_idx < len(withdrawals):` — two conditions joined with `and`; either becoming `False` stops the loop\n- `request_idx += 1` — advances through the pre-defined list; always changes each iteration to prevent an infinite loop\n- `elif amount > balance:` — a condition inside the `while` body; runs on every iteration\n- `break` — immediately exits the `while` loop regardless of whether the condition is still `True`\n- `print(f\"Session closed. Final balance: {balance}\")` — runs after the loop ends, whether from `break` or the condition"
    },
    "exercise": {
      "title": "Simulate a Number Guessing Game",
      "instructions": "Write a number guessing game using a while loop. The secret number is 42 (store it in a variable). Simulate guesses using a predefined list: guesses = [10, 70, 42]. Loop through each guess using an index variable, print 'Too low' or 'Too high' for wrong guesses, and print 'Correct! Found in X attempt(s).' when the guess equals 42, then break. Print the attempt count at the end.\n\nExpected output:\nGuess: 10 — Too low\nGuess: 70 — Too high\nGuess: 42 — Correct! Found in 3 attempt(s).",
      "starterCode": "# Number Guessing Game\n\nsecret  = 42\nguesses = [10, 70, 42]\nidx     = 0\nattempts = 0\n\nwhile idx < len(guesses):\n    guess    = guesses[idx]\n    idx      += 1\n    attempts += 1\n\n    if guess < secret:\n        print(f\"Guess: {guess} — Too low\")\n    elif guess > secret:\n        print(f\"Guess: {guess} — Too high\")\n    else:\n        print(f\"Guess: {guess} — Correct! Found in {attempts} attempt(s).\")\n        break",
      "solutionCode": "secret   = 42\nguesses  = [10, 70, 42]\nidx      = 0\nattempts = 0\n\nwhile idx < len(guesses):\n    guess     = guesses[idx]\n    idx      += 1\n    attempts += 1\n\n    if guess < secret:\n        print(f\"Guess: {guess} — Too low\")\n    elif guess > secret:\n        print(f\"Guess: {guess} — Too high\")\n    else:\n        print(f\"Guess: {guess} — Correct! Found in {attempts} attempt(s).\")\n        break",
      "hints": [
        "💡 Use idx to track your position in the guesses list and increment it with idx += 1 on every iteration.",
        "💡 Increment attempts on every pass through the loop, before the if/elif/else comparison.",
        "💡 When guess equals secret, print the success message with the attempt count and immediately call break to exit the loop."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Correct! Found in 3 attempt(s).",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "py-m4-l2-q1",
          "question": "When does a while loop check its condition?",
          "options": [
            "Once before the loop starts and never again",
            "Once after the loop body completes",
            "Before every iteration, including the very first one",
            "Only when the break statement is reached"
          ],
          "correct": 2,
          "explanation": "A while loop evaluates its condition before every iteration. If the condition is False when the loop is first reached, the body never executes at all. After each iteration completes, the condition is checked again before deciding whether to run the body once more."
        },
        {
          "id": "py-m4-l2-q2",
          "question": "What is the most common cause of an accidental infinite while loop?",
          "options": [
            "Using a variable in the condition",
            "Forgetting to update the variable that controls the condition",
            "Using while instead of for",
            "Having more than one statement in the loop body"
          ],
          "correct": 1,
          "explanation": "An infinite loop occurs when the condition never becomes False. This happens most often when the programmer forgets to change the variable that the condition checks — for example, incrementing a counter or updating a balance. Every while loop must contain at least one statement that will eventually make the condition False, or a break that exits."
        }
      ]
    }
  },
  {
    "id": "py-m4-l3",
    "moduleId": "py-m4",
    "title": "break, continue, and Loop else",
    "order": 3,
    "xpReward": 15,
    "duration": "11 min",
    "explanation": {
      "title": "Controlling Loop Flow with break, continue, and else",
      "content": "# Controlling Loops\n\nPython gives you three tools to control what happens inside a loop beyond the basic condition: `break`, `continue`, and `else`.\n\n## break — Exit the Loop Immediately\n\n`break` stops the loop right now, regardless of the condition or how many iterations remain:\n\n```python\nfor number in range(1, 11):\n    if number == 5:\n        break           # stop the loop when number reaches 5\n    print(number)       # prints 1 2 3 4\n```\n\n## continue — Skip to the Next Iteration\n\n`continue` skips the rest of the current iteration's body and jumps straight to the next iteration:\n\n```python\nfor number in range(1, 11):\n    if number % 2 == 0:\n        continue        # skip even numbers\n    print(number)       # prints 1 3 5 7 9\n```\n\n## The loop else Clause\n\nPython's loops support an `else` block — a feature unique to Python among mainstream languages. The `else` block runs **only if the loop completed normally** (without hitting a `break`):\n\n```python\nfor name in [\"Alice\", \"Bob\", \"Charlie\"]:\n    if name == \"Bob\":\n        print(\"Found Bob!\")\n        break\nelse:\n    print(\"Bob was not found.\")   # only runs if break never executed\n```\n\nThis pattern is perfect for **search loops** — the `else` represents the \"not found\" case.\n\n## Combining break and continue\n\n```python\nfor i in range(1, 21):\n    if i % 3 == 0 and i % 5 == 0:\n        break           # stop completely at the first FizzBuzz\n    if i % 3 == 0:\n        print(\"Fizz\", end=\" \")\n        continue        # skip the print below\n    if i % 5 == 0:\n        print(\"Buzz\", end=\" \")\n        continue\n    print(i, end=\" \")\n```\n\n## Nested Loop break\n\n`break` only exits the **innermost** loop it is in. To break out of nested loops, you typically set a flag variable:\n\n```python\nfound = False\nfor row in matrix:\n    for item in row:\n        if item == target:\n            found = True\n            break       # breaks the inner loop only\n    if found:\n        break           # now breaks the outer loop\n```\n\nIn the code example below, you will see `break`, `continue`, and `else` applied to a prime number finder and a search task."
    },
    "codeExample": {
      "title": "Prime Finder and Item Search",
      "language": "python",
      "code": "# --- Part 1: Prime Number Finder using for/else ---\nprint(\"Primes from 2 to 20:\")\nfor candidate in range(2, 21):\n    for divisor in range(2, candidate):\n        if candidate % divisor == 0:\n            break              # not prime — exit the inner loop\n    else:\n        print(candidate, end=\" \")   # only prints when no break occurred\nprint()\n\n# --- Part 2: Skip negatives with continue ---\nreadings = [12, -5, 34, -2, 0, 89, -11, 45]\nvalid_total = 0\nprint(\"\\nValid (non-negative) readings:\")\nfor r in readings:\n    if r < 0:\n        continue          # skip negative values\n    valid_total += r\n    print(r, end=\" \")\nprint(f\"\\nTotal of valid readings: {valid_total}\")\n\n# --- Part 3: Search with break and else ---\ninventory = [\"pen\", \"notebook\", \"ruler\", \"eraser\"]\nsearch    = \"stapler\"\nprint(f\"\\nSearching for '{search}':\")\nfor item in inventory:\n    if item == search:\n        print(f\"Found '{search}'.\")\n        break\nelse:\n    print(f\"'{search}' is not in inventory.\")",
      "explanation": "- `for divisor in range(2, candidate): ... else:` — the `else` runs when the inner loop finished without `break`, confirming the candidate is prime\n- `break` inside the inner `for` — exits only the inner loop; the outer loop continues with the next `candidate`\n- `if r < 0: continue` — skips remaining body for negative readings and jumps to the next iteration immediately\n- `for item in inventory: ... else:` — the `else` block runs only if the item was never found and no `break` executed\n- `end=\" \"` — keeps values on one line; a separate `print()` afterwards adds the terminating newline"
    },
    "exercise": {
      "title": "Filter and Search a Products List",
      "instructions": "Given a list of product prices, write a program that: (1) uses a for loop with continue to skip any price below 100 and print only valid prices, (2) uses a for/else to search for a specific price (target = 450) and print 'Found 450' if it exists or 'Price not found' if the loop completes without a break. Print the count of valid prices at the end.\n\nPrices list: [50, 200, 450, 80, 300, 999, 30]\nExpected output shows valid prices, then search result.",
      "starterCode": "# Filter and Search Products\n\nprices  = [50, 200, 450, 80, 300, 999, 30]\ntarget  = 450\ncount   = 0\n\nprint(\"Valid prices (>= 100):\")\nfor price in prices:\n    if price < 100:\n        continue          # skip prices below 100\n    print(price, end=\" \")\n    count += 1\nprint(f\"\\nValid count: {count}\")\n\n# Search for target using for/else\nfor price in prices:\n    if price == target:\n        print(f\"Found {target}\")\n        break\nelse:\n    print(\"Price not found\")",
      "solutionCode": "prices = [50, 200, 450, 80, 300, 999, 30]\ntarget = 450\ncount  = 0\n\nprint(\"Valid prices (>= 100):\")\nfor price in prices:\n    if price < 100:\n        continue\n    print(price, end=\" \")\n    count += 1\nprint(f\"\\nValid count: {count}\")\n\nfor price in prices:\n    if price == target:\n        print(f\"Found {target}\")\n        break\nelse:\n    print(\"Price not found\")",
      "hints": [
        "💡 Inside the first loop, use if price < 100: continue to skip small prices without using a negative condition.",
        "💡 Increment count += 1 after the continue check, so only valid prices are counted.",
        "💡 The for/else search loop needs no extra flag variable — the else clause runs automatically when no break occurred."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Found 450",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "Valid count: 4",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "py-m4-l3-q1",
          "question": "What is the difference between break and continue in a Python loop?",
          "options": [
            "break skips the current iteration; continue exits the entire loop",
            "break exits the entire loop immediately; continue skips to the next iteration",
            "They are identical and can be used interchangeably",
            "break only works in for loops; continue only works in while loops"
          ],
          "correct": 1,
          "explanation": "break immediately exits the loop and resumes execution after the loop. continue skips the rest of the current iteration's body and moves directly to the next iteration — the loop does not exit. Both work in both for and while loops."
        },
        {
          "id": "py-m4-l3-q2",
          "question": "When does the else clause of a for loop execute?",
          "options": [
            "When the loop body ran at least once",
            "Always, after every loop finishes",
            "Only when the loop completed all iterations without hitting a break",
            "Only when the loop body never executed"
          ],
          "correct": 2,
          "explanation": "A for loop's else clause runs only when the loop finished all its iterations naturally — without a break statement being triggered. If break exits the loop early, the else is skipped. This makes the for/else pattern ideal for search loops where else means 'the item was not found'."
        },
        {
          "id": "py-m4-l3-q3",
          "question": "If break is inside a nested for loop, which loop does it exit?",
          "options": [
            "All loops from the innermost to the outermost",
            "Only the outermost loop",
            "Only the innermost loop that directly contains the break",
            "The entire program stops"
          ],
          "correct": 2,
          "explanation": "break only exits the innermost loop that contains it. The outer loop continues normally. To exit multiple nested loops, the common Python approach is to use a boolean flag variable that the outer loop also checks, or to refactor the nested loops into a function and use return."
        }
      ]
    }
  }
]
''')

# ── py-m5 — Functions / Methods
# Lessons : py-m5-l1, py-m5-l2, py-m5-l3
# XP      : 35
python_m5_raw = json.loads(r'''
[
  {
    "id": "py-m5-l1",
    "moduleId": "py-m5",
    "title": "Defining and Calling Functions",
    "order": 1,
    "xpReward": 10,
    "duration": "12 min",
    "explanation": {
      "title": "Creating Reusable Blocks of Code with Functions",
      "content": "# Functions\n\nImagine a chef who makes the same omelette recipe every morning. Instead of re-reading the full recipe each time, they memorise the steps under the name \"make omelette\" and repeat them on demand. A **function** works the same way in Python — you write a block of code once, give it a name, and call that name whenever you need those steps.\n\n## Defining a Function\n\n```python\ndef greet():\n    print(\"Hello, World!\")\n    print(\"Welcome to Python.\")\n```\n\nA function definition starts with `def`, followed by the function name, parentheses, and a colon. The body is indented by four spaces. The function does not run yet — you have only described the recipe.\n\n## Calling a Function\n\nTo execute the function, write its name followed by parentheses:\n\n```python\ngreet()    # calls the function — runs both print() statements\ngreet()    # calls it again — same code, re-executed\n```\n\nThis is the central benefit of functions: **write once, call many times**.\n\n## Functions with Parameters\n\nA **parameter** is a placeholder variable that receives a value when the function is called. The value you pass is called an **argument**:\n\n```python\ndef greet(name):          # 'name' is the parameter\n    print(f\"Hello, {name}!\")\n\ngreet(\"Rahul\")            # \"Rahul\" is the argument\ngreet(\"Priya\")            # each call can use a different value\n```\n\n## Multiple Parameters\n\n```python\ndef introduce(name, city, age):\n    print(f\"{name}, {age}, from {city}\")\n\nintroduce(\"Amit\", \"Delhi\", 22)\n```\n\n## Returning a Value\n\nA `return` statement sends a value back to the caller:\n\n```python\ndef add(a, b):\n    return a + b\n\nresult = add(10, 5)    # result = 15\nprint(result)\n```\n\nIf there is no `return` statement, the function returns `None`. A `return` without a value also returns `None`.\n\nIn the code example below, you will see several functions that perform a calculation, return a result, and print a formatted report."
    },
    "codeExample": {
      "title": "Area and Perimeter Calculator",
      "language": "python",
      "code": "# Area and Perimeter Calculator — functions with parameters and return\n\ndef rectangle_area(width, height):\n    \"\"\"Return the area of a rectangle.\"\"\"\n    return width * height\n\ndef rectangle_perimeter(width, height):\n    \"\"\"Return the perimeter of a rectangle.\"\"\"\n    return 2 * (width + height)\n\ndef circle_area(radius):\n    \"\"\"Return the area of a circle (pi approximated as 3.14159).\"\"\"\n    pi = 3.14159\n    return pi * radius ** 2\n\ndef print_shape_report(shape_name, area, perimeter=None):\n    \"\"\"Print a formatted report for a shape.\"\"\"\n    print(f\"\\n--- {shape_name} ---\")\n    print(f\"Area     : {area:.2f}\")\n    if perimeter is not None:\n        print(f\"Perimeter: {perimeter:.2f}\")\n\n# Use the functions\nw, h = 8, 5\narea = rectangle_area(w, h)\nperim = rectangle_perimeter(w, h)\nprint_shape_report(\"Rectangle 8x5\", area, perim)\n\nr = 7\nc_area = circle_area(r)\nprint_shape_report(f\"Circle r={r}\", c_area)",
      "explanation": "- `def rectangle_area(width, height):` — defines a function with two parameters; the names `width` and `height` are local to this function\n- `\"\"\"Return the area...\"\"\"` — a **docstring**; a string on the first line of a function body that documents what the function does\n- `return width * height` — sends the computed value back to the caller; the function ends immediately at `return`\n- `perimeter=None` — a **default parameter**; if no perimeter is passed, it defaults to `None`\n- `if perimeter is not None:` — checks whether an optional value was actually provided before using it"
    },
    "exercise": {
      "title": "Build a Temperature Converter with Functions",
      "instructions": "Write two functions: celsius_to_fahrenheit(c) that returns the result of (c * 9/5) + 32, and fahrenheit_to_celsius(f) that returns (f - 32) * 5/9. Then call each function with test values and print the results rounded to 1 decimal place.\n\nTest calls: celsius_to_fahrenheit(100) should return 212.0, fahrenheit_to_celsius(98.6) should return 37.0.\n\nExpected output:\n100C = 212.0F\n98.6F = 37.0C",
      "starterCode": "# Temperature Converter Functions\n\ndef celsius_to_fahrenheit(c):\n    # Return (c * 9/5) + 32\n    # Your code here\n    pass\n\ndef fahrenheit_to_celsius(f):\n    # Return (f - 32) * 5/9\n    # Your code here\n    pass\n\n# Test the functions\nf_result = celsius_to_fahrenheit(100)\nc_result  = fahrenheit_to_celsius(98.6)\n\nprint(f\"100C = {f_result:.1f}F\")\nprint(f\"98.6F = {c_result:.1f}C\")",
      "solutionCode": "def celsius_to_fahrenheit(c):\n    return (c * 9 / 5) + 32\n\ndef fahrenheit_to_celsius(f):\n    return (f - 32) * 5 / 9\n\nf_result = celsius_to_fahrenheit(100)\nc_result  = fahrenheit_to_celsius(98.6)\n\nprint(f\"100C = {f_result:.1f}F\")\nprint(f\"98.6F = {c_result:.1f}C\")",
      "hints": [
        "💡 Replace pass with a return statement: return (c * 9 / 5) + 32 for the Celsius to Fahrenheit function.",
        "💡 For Fahrenheit to Celsius, return (f - 32) * 5 / 9 — mind the parentheses, subtraction before multiplication.",
        "💡 Use {result:.1f} in the f-string to display the returned value rounded to one decimal place."
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
          "id": "py-m5-l1-q1",
          "question": "What is the difference between a parameter and an argument in Python?",
          "options": [
            "They are two different names for the same thing",
            "A parameter is in the function definition; an argument is the value passed when calling the function",
            "A parameter is the returned value; an argument is the function name",
            "Parameters are only for built-in functions; arguments are for user-defined functions"
          ],
          "correct": 1,
          "explanation": "A parameter is the variable name in the function definition — it is a placeholder. An argument is the actual value you supply when you call the function. In def add(a, b), a and b are parameters. In add(10, 5), 10 and 5 are arguments. The argument's value is bound to the parameter for the duration of the function call."
        },
        {
          "id": "py-m5-l1-q2",
          "question": "What does a function return if it has no return statement?",
          "options": [
            "0",
            "An empty string",
            "None",
            "A SyntaxError is raised"
          ],
          "correct": 2,
          "explanation": "If a function body completes without hitting a return statement, or if it hits return with no value, Python automatically returns None. None is Python's way of representing 'no value'. This is why printing the result of a void-like function shows None."
        },
        {
          "id": "py-m5-l1-q3",
          "question": "When does the code inside a function definition actually execute?",
          "options": [
            "When Python reads the def line",
            "Never — def only stores the code for later",
            "Only when the function is called with its name followed by parentheses",
            "When the Python file is saved"
          ],
          "correct": 2,
          "explanation": "Defining a function with def only stores the code — it does not run it. The code executes only when the function is called: greet(). Every time you call the function, the body runs from the top. A function that is defined but never called simply has no effect on the program's output."
        }
      ]
    }
  },
  {
    "id": "py-m5-l2",
    "moduleId": "py-m5",
    "title": "Default Arguments and Multiple Return Values",
    "order": 2,
    "xpReward": 10,
    "duration": "12 min",
    "explanation": {
      "title": "Default Arguments, Keyword Arguments, and Returning Multiple Values",
      "content": "# Default Parameters\n\nA **default parameter** gives a function a fallback value when the caller does not supply that argument:\n\n```python\ndef greet(name, language=\"English\"):\n    if language == \"Hindi\":\n        print(f\"Namaste, {name}!\")\n    else:\n        print(f\"Hello, {name}!\")\n\ngreet(\"Rahul\")              # uses default: Hello, Rahul!\ngreet(\"Priya\", \"Hindi\")    # overrides default: Namaste, Priya!\n```\n\nDefault parameters must come **after** all required parameters in the function definition.\n\n## Keyword Arguments\n\nWhen calling a function, you can name the arguments explicitly. This lets you pass them in any order:\n\n```python\ndef register(name, age, city):\n    print(f\"{name}, {age}, {city}\")\n\nregister(age=22, city=\"Chennai\", name=\"Kavya\")  # order does not matter\n```\n\n## *args — Variable Positional Arguments\n\nWhen you do not know how many arguments a caller will pass, use `*args`. It collects all extra positional arguments into a **tuple**:\n\n```python\ndef total(*numbers):\n    return sum(numbers)\n\nprint(total(1, 2, 3))           # 6\nprint(total(10, 20, 30, 40))    # 100\n```\n\n## Returning Multiple Values\n\nA function can return more than one value by separating them with commas. Python packages them into a **tuple** automatically:\n\n```python\ndef min_max(numbers):\n    return min(numbers), max(numbers)\n\nlowest, highest = min_max([4, 9, 2, 7, 1])\nprint(lowest, highest)    # 1 9\n```\n\nThis is called **tuple unpacking** — you assign each returned value to a separate variable on the left side.\n\n## Docstrings\n\nEvery function should have a **docstring** — a string literal on the first line of the body that documents what the function does, its parameters, and its return value:\n\n```python\ndef circle_area(radius):\n    \"\"\"Calculate and return the area of a circle.\n\n    Args:\n        radius: The radius of the circle in centimetres.\n    Returns:\n        The area as a float.\n    \"\"\"\n    return 3.14159 * radius ** 2\n```\n\nIn the code example below, you will see default arguments, `*args`, and multiple return values combined in a statistics calculator."
    },
    "codeExample": {
      "title": "Statistics Calculator",
      "language": "python",
      "code": "# Statistics Calculator — default args, *args, multiple return values\n\ndef summarise(*numbers, label=\"Data\"):\n    \"\"\"Return count, total, minimum, and maximum of any number of values.\"\"\"\n    if not numbers:\n        return 0, 0, None, None\n    count   = len(numbers)\n    total   = sum(numbers)\n    minimum = min(numbers)\n    maximum = max(numbers)\n    return count, total, minimum, maximum\n\ndef print_summary(label, count, total, minimum, maximum):\n    \"\"\"Print a formatted statistics summary.\"\"\"\n    average = total / count if count > 0 else 0\n    print(f\"\\n=== {label} ===\")\n    print(f\"Count  : {count}\")\n    print(f\"Total  : {total}\")\n    print(f\"Average: {average:.2f}\")\n    print(f\"Min    : {minimum}\")\n    print(f\"Max    : {maximum}\")\n\n# Unpack multiple return values\ncount, total, lo, hi = summarise(78, 92, 85, 67, 95, 88, label=\"Exam Scores\")\nprint_summary(\"Exam Scores\", count, total, lo, hi)\n\n# Call with different numbers of arguments\ncount2, total2, lo2, hi2 = summarise(15, 30, 45)\nprint_summary(\"Quick Test\", count2, total2, lo2, hi2)",
      "explanation": "- `def summarise(*numbers, label=\"Data\"):` — `*numbers` collects any positional arguments into a tuple; `label` is a keyword-only default\n- `if not numbers:` — evaluates to `True` when the tuple is empty (an empty tuple is falsy)\n- `return count, total, minimum, maximum` — Python packs these four values into a tuple automatically\n- `count, total, lo, hi = summarise(...)` — **tuple unpacking** assigns each returned value to a separate variable\n- `average = total / count if count > 0 else 0` — a ternary expression guarding against division by zero"
    },
    "exercise": {
      "title": "Build a Flexible Discount Calculator",
      "instructions": "Write a function apply_discount(price, discount_pct=10) where discount_pct defaults to 10. The function must return two values: the discount amount and the final price after discount. Call it twice: once with just a price (using the default 10% discount), and once with a price and a custom 25% discount. Print both returned values for each call.\n\nTest: apply_discount(2000) should give discount=200.0, final=1800.0.\nTest: apply_discount(2000, 25) should give discount=500.0, final=1500.0.",
      "starterCode": "# Flexible Discount Calculator\n\ndef apply_discount(price, discount_pct=10):\n    \"\"\"Return (discount_amount, final_price) after applying the discount.\"\"\"\n    # Calculate discount amount (price * discount_pct / 100)\n    # Your code here\n\n    # Calculate final price (price minus discount)\n    # Your code here\n\n    # Return both values\n    # Your code here\n\n# Test with default discount (10%)\ndiscount, final = apply_discount(2000)\nprint(f\"Default 10%: discount={discount}, final={final}\")\n\n# Test with custom discount (25%)\ndiscount2, final2 = apply_discount(2000, 25)\nprint(f\"Custom 25%: discount={discount2}, final={final2}\")",
      "solutionCode": "def apply_discount(price, discount_pct=10):\n    discount_amount = price * discount_pct / 100\n    final_price     = price - discount_amount\n    return discount_amount, final_price\n\ndiscount, final = apply_discount(2000)\nprint(f\"Default 10%: discount={discount}, final={final}\")\n\ndiscount2, final2 = apply_discount(2000, 25)\nprint(f\"Custom 25%: discount={discount2}, final={final2}\")",
      "hints": [
        "💡 Calculate discount_amount as price * discount_pct / 100 inside the function body.",
        "💡 Calculate final_price as price - discount_amount.",
        "💡 Return both values on one line: return discount_amount, final_price — Python creates a tuple automatically."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "discount=200.0, final=1800.0",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "py-m5-l2-q1",
          "question": "What does *args collect in a Python function definition?",
          "options": [
            "All keyword arguments into a dictionary",
            "All extra positional arguments into a tuple",
            "All arguments into a list",
            "Only the first extra argument passed"
          ],
          "correct": 1,
          "explanation": "*args in a function definition collects any number of extra positional arguments into a tuple. For example, def total(*numbers) lets callers pass total(1), total(1,2,3), or total(1,2,3,4,5) and all the numbers are available inside numbers as a tuple."
        },
        {
          "id": "py-m5-l2-q2",
          "question": "When a function returns two values separated by a comma, what does Python create?",
          "options": [
            "A list containing both values",
            "Two separate return values that must each be assigned separately",
            "A tuple containing both values",
            "A dictionary mapping position to value"
          ],
          "correct": 2,
          "explanation": "When a return statement contains comma-separated values, Python automatically packs them into a tuple. The caller can unpack the tuple by assigning multiple variables: a, b = my_function(). If you assign the result to a single variable, that variable holds the full tuple."
        },
        {
          "id": "py-m5-l2-q3",
          "question": "Where must default parameters appear relative to required parameters?",
          "options": [
            "Before all required parameters",
            "After all required parameters",
            "They can appear in any position",
            "They must be placed at the start and end only"
          ],
          "correct": 1,
          "explanation": "Default parameters must always come after all required (non-default) parameters. Writing def f(x=1, y) is a SyntaxError because Python cannot determine which argument corresponds to which parameter when optional parameters precede required ones. The rule: required first, optional last."
        }
      ]
    }
  },
  {
    "id": "py-m5-l3",
    "moduleId": "py-m5",
    "title": "Scope: Local and Global Variables",
    "order": 3,
    "xpReward": 15,
    "duration": "11 min",
    "explanation": {
      "title": "Understanding Variable Scope in Python Functions",
      "content": "# Variable Scope\n\nImagine your living room and your neighbour's living room. You can see and rearrange everything in your own room, but not in your neighbour's. **Scope** works the same way in Python — it defines which parts of your program can see and use a particular variable.\n\n## Local Scope\n\nA variable created **inside** a function is **local** — it exists only for the duration of that function call and is invisible everywhere else:\n\n```python\ndef calculate():\n    result = 100     # local variable\n    print(result)    # works fine inside the function\n\ncalculate()\nprint(result)        # NameError: result is not defined here\n```\n\n## Global Scope\n\nA variable created **outside** all functions is **global** — it is visible to all code in the file, including inside functions (for reading):\n\n```python\ntax_rate = 0.18       # global variable\n\ndef calculate_gst(price):\n    return price * tax_rate    # can READ the global tax_rate\n```\n\n## Reading vs Modifying Global Variables\n\nFunctions can read global variables freely. But to **modify** a global variable from inside a function, you must declare it with `global`:\n\n```python\ncounter = 0\n\ndef increment():\n    global counter     # declare intent to modify the global\n    counter += 1\n\nincrement()\nincrement()\nprint(counter)         # 2\n```\n\nWithout the `global` keyword, `counter += 1` would create a new local variable named `counter` and leave the global untouched.\n\n## Why Limiting Global Variables Is Good Practice\n\nRelying on global variables makes programs hard to test and debug — any function could change a global at any time, making bugs difficult to trace. Prefer passing values as arguments and returning results instead.\n\n## The LEGB Rule\n\nWhen Python looks up a variable name, it searches scopes in this order:\n\n1. **L**ocal — inside the current function\n2. **E**nclosing — in any outer (enclosing) function\n3. **G**lobal — at the module (file) level\n4. **B**uilt-in — Python's built-in names like `print`, `len`, `range`\n\nIn the code example below, you will see local variables, a global constant, and the `global` keyword used to maintain a session counter."
    },
    "codeExample": {
      "title": "Session Counter with Scope",
      "language": "python",
      "code": "# Session Counter — local scope, global scope, and global keyword\n\n# Global constant — readable anywhere (convention: UPPER_CASE for constants)\nMAX_SESSIONS = 5\nsession_count = 0     # global variable we will modify\n\ndef start_session(user_name):\n    \"\"\"Start a new session for a user.\"\"\"\n    global session_count          # declare intent to modify the global\n    if session_count >= MAX_SESSIONS:\n        print(\"Maximum sessions reached.\")\n        return False\n    session_count += 1            # modifies the global\n    session_id = session_count    # local variable — unique to this call\n    print(f\"Session {session_id} started for {user_name}.\")\n    return session_id             # return the local value before it disappears\n\ndef session_report():\n    \"\"\"Print a report using the global counter.\"\"\"\n    remaining = MAX_SESSIONS - session_count    # reads both globals\n    print(f\"\\nSessions used  : {session_count}\")\n    print(f\"Sessions left  : {remaining}\")\n\n# Open several sessions\nstart_session(\"Rahul\")\nstart_session(\"Priya\")\nstart_session(\"Amit\")\nsession_report()",
      "explanation": "- `MAX_SESSIONS = 5` — a global constant; UPPER_CASE signals it should not be changed during the program\n- `global session_count` — required before `session_count += 1`; without it Python creates a new local variable\n- `session_id = session_count` — a local variable that exists only inside this function call\n- `return session_id` — sends the local value to the caller before the local scope is destroyed\n- `remaining = MAX_SESSIONS - session_count` — reads two globals; no `global` needed because it only reads, not modifies"
    },
    "exercise": {
      "title": "Build a Score Tracker with Global State",
      "instructions": "Create a quiz score tracker using a global variable. Define a global variable total_score = 0. Write a function add_score(points) that uses the global keyword to add points to total_score. Write a function get_grade() that reads total_score (no global keyword needed) and returns 'A' if >= 90, 'B' if >= 70, 'C' if >= 50, else 'F'. Call add_score three times (30, 45, 20), then print total_score and the grade.\n\nExpected output:\nTotal Score: 95\nGrade: A",
      "starterCode": "# Quiz Score Tracker\n\ntotal_score = 0    # global variable\n\ndef add_score(points):\n    \"\"\"Add points to the global total_score.\"\"\"\n    global total_score\n    # Your code here: add points to total_score\n\ndef get_grade():\n    \"\"\"Read total_score and return a letter grade.\"\"\"\n    # Your code here: return 'A', 'B', 'C', or 'F' based on total_score\n    pass\n\n# Add three scores\nadd_score(30)\nadd_score(45)\nadd_score(20)\n\nprint(\"Total Score:\", total_score)\nprint(\"Grade:\",       get_grade())",
      "solutionCode": "total_score = 0\n\ndef add_score(points):\n    global total_score\n    total_score += points\n\ndef get_grade():\n    if   total_score >= 90: return \"A\"\n    elif total_score >= 70: return \"B\"\n    elif total_score >= 50: return \"C\"\n    else:                   return \"F\"\n\nadd_score(30)\nadd_score(45)\nadd_score(20)\n\nprint(\"Total Score:\", total_score)\nprint(\"Grade:\",       get_grade())",
      "hints": [
        "💡 Inside add_score, write total_score += points to add to the global — but the global keyword must appear first.",
        "💡 get_grade() only reads total_score, so no global keyword is needed — Python finds it in the global scope automatically.",
        "💡 Use if/elif/else in get_grade() to check total_score against 90, 70, 50 in that order and return the letter."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Total Score: 95",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "Grade: A",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "py-m5-l3-q1",
          "question": "What happens to a local variable after the function it belongs to finishes?",
          "options": [
            "It becomes a global variable",
            "Its value is saved for the next call to the same function",
            "It is destroyed and can no longer be accessed",
            "It is moved to the built-in scope"
          ],
          "correct": 2,
          "explanation": "Local variables are created when a function is called and destroyed when the function returns. Each call creates a completely fresh set of local variables. If you need a value to persist between calls, you must either return it and store it outside the function, or use a global variable."
        },
        {
          "id": "py-m5-l3-q2",
          "question": "Why is the global keyword required to modify a global variable inside a function?",
          "options": [
            "It is not required — Python automatically detects global variables",
            "Without it, Python creates a new local variable with the same name instead of modifying the global",
            "It makes the operation faster",
            "It is only required for string variables, not integers"
          ],
          "correct": 1,
          "explanation": "Without the global keyword, any assignment inside a function creates a new local variable. So counter += 1 without global counter would try to read a local counter that does not exist yet, raising an UnboundLocalError. The global keyword tells Python 'do not create a local; use the existing global variable instead'."
        }
      ]
    }
  }
]
''')

# ── py-m6 — Mini Project
# Lessons : py-m6-l1, py-m6-l2, py-m6-l3
# XP      : 55
python_m6_raw = json.loads(r'''
[
  {
    "id": "py-m6-l1",
    "moduleId": "py-m6",
    "title": "Lists and Loops Together",
    "order": 1,
    "xpReward": 15,
    "duration": "13 min",
    "explanation": {
      "title": "Storing and Processing Collections with Lists and Loops",
      "content": "# Lists\n\nA **list** is an ordered, mutable collection of values. Think of it as a numbered shelf where each slot holds one item. You can read any item by its slot number, add new items, remove existing ones, and change what is stored in any slot.\n\n```python\nscores = [85, 92, 78, 95, 88]\nnames  = [\"Rahul\", \"Priya\", \"Amit\"]\nmixed  = [42, \"hello\", True, 3.14]    # different types are allowed\nempty  = []                           # an empty list\n```\n\n## Accessing List Items\n\nList indexing is zero-based — the first item is at index 0:\n\n```python\nscores[0]     # 85  — first item\nscores[-1]    # 88  — last item (negative counts from the end)\nscores[1:3]   # [92, 78]  — slice from index 1 up to (not including) 3\n```\n\n## Modifying Lists\n\n| Operation | Code | Effect |\n|---|---|---|\n| Add to end | `scores.append(90)` | Adds one item |\n| Insert at position | `scores.insert(0, 100)` | Inserts before index 0 |\n| Remove by value | `scores.remove(78)` | Removes the first match |\n| Remove by index | `del scores[2]` | Deletes item at index 2 |\n| Get and remove last | `scores.pop()` | Returns and removes last item |\n| Sort ascending | `scores.sort()` | Modifies in place |\n| Reverse | `scores.reverse()` | Modifies in place |\n| Length | `len(scores)` | Returns item count |\n| Check membership | `90 in scores` | Returns `True` or `False` |\n\n## Iterating Over a List\n\nThe most natural way to process every item is a `for` loop:\n\n```python\nfor score in scores:\n    print(score)\n```\n\nFor both index and value, use `enumerate()`:\n\n```python\nfor i, score in enumerate(scores, start=1):\n    print(f\"{i}. {score}\")\n```\n\n## List Comprehension — a Pythonic Shortcut\n\nA **list comprehension** creates a new list by applying an expression to every item in an existing iterable, optionally filtered by a condition:\n\n```python\ndoubled  = [x * 2 for x in scores]            # double every score\npassing  = [x for x in scores if x >= 60]     # keep only passing scores\n```\n\nIn the code example below, you will see a list comprehension, `sorted()`, and a loop working together to build a student ranking."
    },
    "codeExample": {
      "title": "Student Ranking Builder",
      "language": "python",
      "code": "# Student Ranking Builder — lists, loops, and list comprehension\n\n# Data as parallel lists\nnames  = [\"Kiran\", \"Divya\", \"Arjun\", \"Neha\", \"Rohan\"]\nscores = [72, 91, 85, 68, 95]\n\n# Pair names with scores using zip(), then sort by score descending\npaired  = list(zip(names, scores))\nranked  = sorted(paired, key=lambda pair: pair[1], reverse=True)\n\nprint(\"=== Rankings ===\")\nfor position, (name, score) in enumerate(ranked, start=1):\n    grade = \"A\" if score >= 90 else \"B\" if score >= 75 else \"C\"\n    print(f\"{position}. {name:<8} {score:3d}  ({grade})\")\n\n# List comprehension — extract only passing students (score >= 60)\npassing_names = [name for name, score in ranked if score >= 60]\nprint(f\"\\nAll {len(passing_names)} students passed.\")\n\n# Quick stats using built-ins\nprint(f\"Highest : {max(scores)}\")\nprint(f\"Lowest  : {min(scores)}\")\nprint(f\"Average : {sum(scores)/len(scores):.1f}\")",
      "explanation": "- `zip(names, scores)` — pairs each name with its corresponding score; `list()` converts the zip object into a concrete list\n- `sorted(paired, key=lambda pair: pair[1], reverse=True)` — sorts by the second element (score) in descending order\n- `for position, (name, score) in enumerate(ranked, start=1):` — unpacks the tuple pair directly in the loop header\n- `{name:<8}` — the `<8` format code left-aligns the name in a field of width 8, keeping columns tidy\n- `[name for name, score in ranked if score >= 60]` — a list comprehension with a filter condition"
    },
    "exercise": {
      "title": "Build a Marks Analyser",
      "instructions": "Given a list of student marks, write a program that: (1) prints all marks, (2) uses a list comprehension to create a new list of marks that are 80 or above and prints it, (3) calculates and prints the average of all marks rounded to 1 decimal place, (4) prints the count of marks below 50.\n\nMarks list: [55, 82, 90, 45, 73, 88, 38, 91, 60, 47]\n\nExpected output:\nAll marks: [55, 82, 90, 45, 73, 88, 38, 91, 60, 47]\nHigh marks (>=80): [82, 90, 88, 91]\nAverage: 66.9\nBelow 50: 3",
      "starterCode": "# Marks Analyser\n\nmarks = [55, 82, 90, 45, 73, 88, 38, 91, 60, 47]\n\n# 1. Print all marks\nprint(\"All marks:\", marks)\n\n# 2. List comprehension: marks >= 80\nhigh_marks = [m for m in marks if m >= 80]\nprint(\"High marks (>=80):\", high_marks)\n\n# 3. Calculate and print average\n# Your code here\n\n# 4. Count marks below 50 using a list comprehension or loop\n# Your code here",
      "solutionCode": "marks = [55, 82, 90, 45, 73, 88, 38, 91, 60, 47]\n\nprint(\"All marks:\", marks)\n\nhigh_marks = [m for m in marks if m >= 80]\nprint(\"High marks (>=80):\", high_marks)\n\naverage = sum(marks) / len(marks)\nprint(f\"Average: {average:.1f}\")\n\nbelow_50 = len([m for m in marks if m < 50])\nprint(\"Below 50:\", below_50)",
      "hints": [
        "💡 Calculate average with sum(marks) / len(marks) and print using f\"{average:.1f}\" for one decimal place.",
        "💡 Count marks below 50 with a list comprehension: [m for m in marks if m < 50], then use len() on the result.",
        "💡 You can also count with a loop: start count=0, then for m in marks: if m < 50: count += 1."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "High marks (>=80): [82, 90, 88, 91]",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "Average: 66.9",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "py-m6-l1-q1",
          "question": "What does scores[-1] return when scores = [85, 92, 78]?",
          "options": [
            "85 — the first element",
            "None — negative indices are invalid",
            "78 — the last element",
            "92 — the middle element"
          ],
          "correct": 2,
          "explanation": "Negative indices in Python count from the end of the list. Index -1 is always the last element, -2 is the second-to-last, and so on. For scores = [85, 92, 78], scores[-1] is 78. This is more reliable than scores[len(scores)-1] when you need the last element."
        },
        {
          "id": "py-m6-l1-q2",
          "question": "What does the expression [x * 2 for x in [1, 2, 3]] produce?",
          "options": [
            "6",
            "[2, 4, 6]",
            "[1, 2, 3, 1, 2, 3]",
            "(2, 4, 6)"
          ],
          "correct": 1,
          "explanation": "A list comprehension [expression for item in iterable] evaluates the expression for each item and collects the results in a new list. [x * 2 for x in [1, 2, 3]] doubles each element, producing [2, 4, 6]. The result is always a list (square brackets), not a tuple."
        },
        {
          "id": "py-m6-l1-q3",
          "question": "What is the difference between .sort() and sorted() on a list?",
          "options": [
            "They are identical in every way",
            ".sort() modifies the list in place and returns None; sorted() returns a new sorted list",
            "sorted() modifies the list in place; .sort() returns a new list",
            ".sort() only works on numbers; sorted() works on any type"
          ],
          "correct": 1,
          "explanation": "list.sort() is a method that modifies the list in place and returns None — the original list is changed. sorted() is a built-in function that returns a brand new sorted list and leaves the original unchanged. Use sorted() when you need to keep the original order and also have a sorted version."
        }
      ]
    }
  },
  {
    "id": "py-m6-l2",
    "moduleId": "py-m6",
    "title": "Dictionaries: Key-Value Storage",
    "order": 2,
    "xpReward": 15,
    "duration": "13 min",
    "explanation": {
      "title": "Organising Data as Key-Value Pairs with Dictionaries",
      "content": "# Dictionaries\n\nA **dictionary** stores data as **key-value pairs**. Think of a real dictionary: you look up a word (the key) and find its definition (the value). In Python, the key can be any immutable value (string, integer, tuple), and the value can be anything at all.\n\n```python\nstudent = {\n    \"name\":  \"Priya\",\n    \"age\":   21,\n    \"gpa\":   3.8,\n    \"active\": True\n}\n```\n\n## Accessing Values\n\n```python\nstudent[\"name\"]              # \"Priya\" — key access\nstudent.get(\"phone\")         # None — safe access (no KeyError)\nstudent.get(\"phone\", \"N/A\")  # \"N/A\" — default if missing\n```\n\n## Modifying Dictionaries\n\n| Operation | Code |\n|---|---|\n| Add or update a key | `student[\"email\"] = \"p@mail.com\"` |\n| Delete a key | `del student[\"active\"]` |\n| Remove and return | `student.pop(\"age\")` |\n| Check if key exists | `\"name\" in student` |\n\n## Iterating Over Dictionaries\n\n```python\nfor key in student:                     # iterate over keys\n    print(key, \":\", student[key])\n\nfor key, value in student.items():     # iterate over key-value pairs\n    print(f\"{key}: {value}\")\n\nstudent.keys()     # view of all keys\nstudent.values()   # view of all values\n```\n\n## Nested Dictionaries\n\nValues can themselves be dictionaries, creating nested structures:\n\n```python\nclassroom = {\n    \"student1\": {\"name\": \"Rahul\",  \"score\": 85},\n    \"student2\": {\"name\": \"Sneha\",  \"score\": 92},\n}\nprint(classroom[\"student1\"][\"name\"])    # Rahul\n```\n\n## Dictionary Comprehension\n\n```python\nscores  = [85, 92, 78]\nnames   = [\"Rahul\", \"Sneha\", \"Amit\"]\nresults = {name: score for name, score in zip(names, scores)}\n# {\"Rahul\": 85, \"Sneha\": 92, \"Amit\": 78}\n```\n\nIn the code example below, you will see a dictionary used to build a word frequency counter and a contact manager."
    },
    "codeExample": {
      "title": "Word Frequency Counter",
      "language": "python",
      "code": "# Word Frequency Counter — dictionary as a counter\n\nsentence = \"to be or not to be that is the question to be\"\nwords    = sentence.split()    # split on spaces into a list\n\n# Build frequency dictionary\nfrequency = {}\nfor word in words:\n    frequency[word] = frequency.get(word, 0) + 1\n\nprint(\"Word frequencies:\")\nfor word, count in sorted(frequency.items(), key=lambda x: x[1], reverse=True):\n    bar = \"#\" * count\n    print(f\"  {word:<12} {count:2d}  {bar}\")\n\n# Find the most common word\nmost_common = max(frequency, key=frequency.get)\nprint(f\"\\nMost common: '{most_common}' appears {frequency[most_common]} times.\")\n\n# Dictionary comprehension — words appearing more than once\nrepeated = {w: c for w, c in frequency.items() if c > 1}\nprint(f\"Repeated words: {repeated}\")",
      "explanation": "- `frequency.get(word, 0) + 1` — safely reads the current count (defaulting to 0 if unseen) and increments it\n- `sorted(frequency.items(), key=lambda x: x[1], reverse=True)` — sorts the `(word, count)` tuples by count in descending order\n- `{word:<12}` — left-aligns the word in a 12-character field; `{count:2d}` right-aligns the count in 2 characters\n- `max(frequency, key=frequency.get)` — iterates over keys and returns the key whose value `frequency.get` returns the maximum\n- `{w: c for w, c in frequency.items() if c > 1}` — dictionary comprehension with a filter"
    },
    "exercise": {
      "title": "Build a Student Grade Book",
      "instructions": "Create a grade book using a dictionary. The dictionary maps student names to their scores. Write a function add_student(book, name, score) that adds the name-score pair. Write a function class_average(book) that returns the average of all scores. Call add_student four times, then print all entries, the average, and the highest scorer.\n\nTest: Rahul=88, Priya=95, Amit=72, Sneha=91.\nExpected output includes 'Class Average:' and 'Top Scorer: Priya'.",
      "starterCode": "# Student Grade Book\n\ndef add_student(book, name, score):\n    \"\"\"Add a student and their score to the grade book.\"\"\"\n    book[name] = score\n\ndef class_average(book):\n    \"\"\"Return the average score of all students.\"\"\"\n    # Your code here — return sum of values / count\n    pass\n\ngrade_book = {}\nadd_student(grade_book, \"Rahul\",  88)\nadd_student(grade_book, \"Priya\",  95)\nadd_student(grade_book, \"Amit\",   72)\nadd_student(grade_book, \"Sneha\",  91)\n\nprint(\"Grade Book:\")\nfor name, score in grade_book.items():\n    print(f\"  {name}: {score}\")\n\navg = class_average(grade_book)\nprint(f\"Class Average: {avg:.1f}\")\n\n# Find top scorer — name with the maximum value\ntop = max(grade_book, key=grade_book.get)\nprint(f\"Top Scorer: {top}\")",
      "solutionCode": "def add_student(book, name, score):\n    book[name] = score\n\ndef class_average(book):\n    return sum(book.values()) / len(book)\n\ngrade_book = {}\nadd_student(grade_book, \"Rahul\",  88)\nadd_student(grade_book, \"Priya\",  95)\nadd_student(grade_book, \"Amit\",   72)\nadd_student(grade_book, \"Sneha\",  91)\n\nprint(\"Grade Book:\")\nfor name, score in grade_book.items():\n    print(f\"  {name}: {score}\")\n\navg = class_average(grade_book)\nprint(f\"Class Average: {avg:.1f}\")\n\ntop = max(grade_book, key=grade_book.get)\nprint(f\"Top Scorer: {top}\")",
      "hints": [
        "💡 In class_average, use sum(book.values()) to add all scores and len(book) to get the count.",
        "💡 Return the result of dividing: return sum(book.values()) / len(book).",
        "💡 max(grade_book, key=grade_book.get) finds the key (name) whose associated value (score) is the maximum."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Class Average: 86.5",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "Top Scorer: Priya",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "py-m6-l2-q1",
          "question": "What does dict.get(\"key\", \"default\") return when the key does not exist?",
          "options": [
            "It raises a KeyError",
            "It returns None always",
            "It returns the default value you provided",
            "It returns an empty string"
          ],
          "correct": 2,
          "explanation": "dict.get(key, default) is the safe way to access a dictionary. If the key exists, it returns the associated value. If the key does not exist, it returns the default value you provide as the second argument. Without a default, get() returns None. This avoids the KeyError that occurs with direct bracket access dict[key] on a missing key."
        },
        {
          "id": "py-m6-l2-q2",
          "question": "Which method returns all key-value pairs from a dictionary so you can iterate over them?",
          "options": [
            ".pairs()",
            ".entries()",
            ".items()",
            ".tuples()"
          ],
          "correct": 2,
          "explanation": ".items() returns a view of all (key, value) pairs as tuples. Use it in a for loop: for key, value in my_dict.items(). The dict also provides .keys() for all keys and .values() for all values. There is no .pairs(), .entries(), or .tuples() method."
        },
        {
          "id": "py-m6-l2-q3",
          "question": "What does the expression {name: score for name, score in zip(names, scores)} create?",
          "options": [
            "A list of tuples pairing each name with a score",
            "A set of name-score pairs",
            "A dictionary where each name is a key and its score is the value",
            "A generator that yields name-score pairs"
          ],
          "correct": 2,
          "explanation": "This is a dictionary comprehension with curly braces and a colon separating key and value. zip(names, scores) pairs up the two lists, and the comprehension builds a dictionary from those pairs. The result is {\"Rahul\": 85, \"Sneha\": 92, ...}. List comprehensions use square brackets; dictionary comprehensions use curly braces with key: value."
        }
      ]
    }
  },
  {
    "id": "py-m6-l3",
    "moduleId": "py-m6",
    "title": "Mini Project: Student Report System",
    "order": 3,
    "xpReward": 25,
    "duration": "20 min",
    "explanation": {
      "title": "Putting It All Together: A Complete Student Report System",
      "content": "# The Mini Project\n\nYou have now learned the six fundamental building blocks of Python programming:\n\n1. **Variables and data types** — storing information\n2. **print() and f-strings** — displaying output\n3. **Conditions** — making decisions\n4. **Loops** — repeating actions\n5. **Functions** — organising reusable logic\n6. **Lists and dictionaries** — storing collections\n\nA real program combines all of these together to solve a complete problem. In this lesson, you will see and build a **Student Report System** — a small application that stores student records, calculates grades, and prints a formatted report.\n\n## Designing the System\n\nBefore writing code, think about the data and the operations:\n\n**Data:** Each student has a name, and three subject scores.\n\n**Operations needed:**\n- Add a student to the system\n- Calculate the student's average score\n- Assign a letter grade based on the average\n- Print a formatted report for one student\n- Print a summary of the whole class\n\n**Data structure choice:** A list of dictionaries — each dictionary represents one student with keys for `name` and the three scores.\n\n```python\nstudents = [\n    {\"name\": \"Rahul\",  \"maths\": 88, \"science\": 75, \"english\": 82},\n    {\"name\": \"Priya\",  \"maths\": 95, \"science\": 91, \"english\": 89},\n]\n```\n\n## Function Design\n\nEach function should do exactly one thing:\n\n- `calculate_average(student)` — takes a student dict, returns float\n- `assign_grade(average)` — takes a float, returns letter string\n- `print_student_report(student)` — prints one student's card\n- `print_class_summary(students)` — prints the overall summary\n\n## Why This Matters\n\nEvery professional Python application — whether a web API, a data pipeline, or a desktop tool — is built using exactly these same elements. A web framework's request handler is a function. The database rows are dictionaries. The business rules are conditions. The data processing is loops. Mastering these six building blocks means you can read and write real Python code immediately.\n\nIn the code example below, you will see the complete Student Report System implemented using every concept from this course."
    },
    "codeExample": {
      "title": "Complete Student Report System",
      "language": "python",
      "code": "# ============================================\n# Student Report System — Mini Project\n# Uses: variables, conditions, loops, functions,\n#       lists, dictionaries, f-strings\n# ============================================\n\n# --- Data: list of student dictionaries ---\nstudents = [\n    {\"name\": \"Rahul\",  \"maths\": 88, \"science\": 75, \"english\": 82},\n    {\"name\": \"Priya\",  \"maths\": 95, \"science\": 91, \"english\": 89},\n    {\"name\": \"Amit\",   \"maths\": 62, \"science\": 55, \"english\": 70},\n    {\"name\": \"Sneha\",  \"maths\": 78, \"science\": 83, \"english\": 91},\n    {\"name\": \"Vikram\", \"maths\": 45, \"science\": 50, \"english\": 48},\n]\n\ndef calculate_average(student):\n    scores = [student[\"maths\"], student[\"science\"], student[\"english\"]]\n    return sum(scores) / len(scores)\n\ndef assign_grade(average):\n    if   average >= 90: return \"A\"\n    elif average >= 75: return \"B\"\n    elif average >= 60: return \"C\"\n    elif average >= 40: return \"D\"\n    else:               return \"F\"\n\ndef print_student_report(student):\n    avg   = calculate_average(student)\n    grade = assign_grade(avg)\n    status = \"PASS\" if avg >= 40 else \"FAIL\"\n    print(f\"  {student['name']:<10} M:{student['maths']:3d} \"\n          f\"S:{student['science']:3d} E:{student['english']:3d} \"\n          f\"Avg:{avg:5.1f}  {grade}  {status}\")\n\ndef print_class_summary(students):\n    all_averages = [calculate_average(s) for s in students]\n    class_avg    = sum(all_averages) / len(all_averages)\n    top_student  = max(students, key=calculate_average)\n    pass_count   = sum(1 for avg in all_averages if avg >= 40)\n    print(f\"\\n  Class Average : {class_avg:.1f}\")\n    print(f\"  Top Student   : {top_student['name']}\")\n    print(f\"  Passed        : {pass_count}/{len(students)}\")\n\n# --- Main program ---\nprint(\"=\" * 58)\nprint(\" STUDENT REPORT SYSTEM\")\nprint(\"=\" * 58)\nprint(f\"  {'Name':<10} {'M':>4} {'S':>4} {'E':>4} {'Avg':>6}  {'G'}  {'Status'}\")\nprint(\"-\" * 58)\nfor student in students:\n    print_student_report(student)\nprint(\"=\" * 58)\nprint_class_summary(students)\nprint(\"=\" * 58)",
      "explanation": "- `students` — a list of dictionaries; each dictionary stores one student's complete record\n- `calculate_average(student)` — builds a list of three scores and uses `sum()` / `len()` for the average\n- `assign_grade(average)` — a pure function: takes a number, returns a letter string; no side effects\n- `[calculate_average(s) for s in students]` — list comprehension calling a function on every item\n- `max(students, key=calculate_average)` — returns the student dict whose average is the highest\n- `sum(1 for avg in all_averages if avg >= 40)` — generator expression counting averages at least 40"
    },
    "exercise": {
      "title": "Extend the Report System with Remarks",
      "instructions": "Extend the Student Report System. Add a function get_remark(grade) that returns: 'Excellent!' for A, 'Well done!' for B, 'Good effort!' for C, 'Needs improvement.' for D, and 'Please seek help.' for F. Then loop over the students list and for each student calculate the average and grade, then print name, average (1 decimal place), grade, and remark on one line.\n\nExpected output for Priya (avg 91.7, grade A): Priya: 91.7 A Excellent!",
      "starterCode": "# Extended Student Report System\n\nstudents = [\n    {\"name\": \"Rahul\",  \"maths\": 88, \"science\": 75, \"english\": 82},\n    {\"name\": \"Priya\",  \"maths\": 95, \"science\": 91, \"english\": 89},\n    {\"name\": \"Amit\",   \"maths\": 62, \"science\": 55, \"english\": 70},\n    {\"name\": \"Sneha\",  \"maths\": 78, \"science\": 83, \"english\": 91},\n    {\"name\": \"Vikram\", \"maths\": 45, \"science\": 50, \"english\": 48},\n]\n\ndef calculate_average(student):\n    scores = [student[\"maths\"], student[\"science\"], student[\"english\"]]\n    return sum(scores) / len(scores)\n\ndef assign_grade(average):\n    if   average >= 90: return \"A\"\n    elif average >= 75: return \"B\"\n    elif average >= 60: return \"C\"\n    elif average >= 40: return \"D\"\n    else:               return \"F\"\n\ndef get_remark(grade):\n    # Return a remark string based on the grade\n    # Your code here\n    pass\n\n# Loop over students and print name, average, grade, remark\nfor student in students:\n    avg    = calculate_average(student)\n    grade  = assign_grade(avg)\n    remark = get_remark(grade)\n    # Your print statement here",
      "solutionCode": "students = [\n    {\"name\": \"Rahul\",  \"maths\": 88, \"science\": 75, \"english\": 82},\n    {\"name\": \"Priya\",  \"maths\": 95, \"science\": 91, \"english\": 89},\n    {\"name\": \"Amit\",   \"maths\": 62, \"science\": 55, \"english\": 70},\n    {\"name\": \"Sneha\",  \"maths\": 78, \"science\": 83, \"english\": 91},\n    {\"name\": \"Vikram\", \"maths\": 45, \"science\": 50, \"english\": 48},\n]\n\ndef calculate_average(s):\n    return sum([s[\"maths\"], s[\"science\"], s[\"english\"]]) / 3\n\ndef assign_grade(avg):\n    if   avg >= 90: return \"A\"\n    elif avg >= 75: return \"B\"\n    elif avg >= 60: return \"C\"\n    elif avg >= 40: return \"D\"\n    else:           return \"F\"\n\ndef get_remark(grade):\n    remarks = {\"A\": \"Excellent!\", \"B\": \"Well done!\", \"C\": \"Good effort!\",\n               \"D\": \"Needs improvement.\", \"F\": \"Please seek help.\"}\n    return remarks.get(grade, \"\")\n\nfor student in students:\n    avg    = calculate_average(student)\n    grade  = assign_grade(avg)\n    remark = get_remark(grade)\n    print(f\"{student['name']}: {avg:.1f} {grade} {remark}\")",
      "hints": [
        "💡 Use a dictionary inside get_remark to map each grade letter to its remark string, then return remarks.get(grade, '').",
        "💡 Calculate avg and grade for each student inside the loop before calling get_remark(grade).",
        "💡 Print with f\"{student['name']}: {avg:.1f} {grade} {remark}\" — note single quotes around dictionary keys inside f-strings."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Excellent!",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "Priya",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "py-m6-l3-q1",
          "question": "Why is a list of dictionaries a good data structure for storing multiple student records?",
          "options": [
            "Because dictionaries are always faster than other structures",
            "Each dictionary groups one student's named fields together, and the list provides ordered access to all students",
            "Python requires this structure for any program involving names",
            "Because lists cannot store raw numbers without a dictionary wrapper"
          ],
          "correct": 1,
          "explanation": "A dictionary naturally groups related fields (name, score, grade) under meaningful key names, making the code readable: student['name'] is clearer than student[0]. A list of these dictionaries lets you iterate over all students with a for loop, sort them, filter them, and pass the whole collection to functions."
        },
        {
          "id": "py-m6-l3-q2",
          "question": "What is the main benefit of breaking a program into multiple small functions?",
          "options": [
            "Smaller functions always run faster",
            "Each function can be tested and understood independently, making the whole program easier to maintain",
            "Python requires at least five functions in every program",
            "Functions reduce the total number of lines in a file"
          ],
          "correct": 1,
          "explanation": "Small, single-purpose functions are easier to test (you can call each one individually), easier to understand (each has one job), and easier to reuse (the same grade logic used in the report can also be used in a dashboard). This principle is called the Single Responsibility Principle and is fundamental to writing professional software."
        },
        {
          "id": "py-m6-l3-q3",
          "question": "Which concept allows a loop to call a function on every item in a list in a single line?",
          "options": [
            "A while loop with a counter",
            "A list comprehension",
            "A global variable",
            "A nested dictionary"
          ],
          "correct": 1,
          "explanation": "A list comprehension [f(item) for item in collection] calls the function f on every item in collection and collects the results in a new list, all in one line. For example, [calculate_average(s) for s in students] computes the average for every student and returns all averages as a list."
        }
      ]
    }
  }
]
''')

# ── Combine all modules into one list ─────────────────────
python_lessons = (
    python_m1_raw + \
         python_m2_raw + \
         python_m3_raw + \
         python_m4_raw + \
         python_m5_raw + \
         python_m6_raw
)

# ── Sanity check ──────────────────────────────────────────
print(f"Loaded {len(python_lessons)} Python lessons")
for lesson in python_lessons:
    print(f'  {lesson["id"]:15} {lesson["title"]:50} {lesson["xpReward"]} XP')