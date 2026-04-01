// src/data/courses/python.ts
import type { Course } from '@/types/course';

export const pythonCourse: Course = {
  id:          'python',
  title:       'Python Programming',
  description: 'Learn Python from zero to hero. Build real projects, understand core concepts, and think like a developer.',
  icon:        '🐍',
  color:       '#3776AB',
  colorLight:  '#E8F4FD',
  totalModules: 18,
  totalLessons: 54,
  estimatedHours: 40,
  levels: ['beginner', 'intermediate', 'advanced'],

  modules: [
    // ════════════════════════════════════════════════
    //  MODULE 1 — Python Basics (Beginner)
    // ════════════════════════════════════════════════
    {
      id:          'py-m1',
      courseId:    'python',
      title:       'Python Basics',
      description: 'Your first steps in Python. Learn the fundamentals.',
      level:       'beginner',
      order:       1,
      icon:        '🚀',
      xpReward:    100,
      lessons: [
        // ─── Lesson 1 ────────────────────────────────
        {
          id:       'py-m1-l1',
          moduleId: 'py-m1',
          title:    'What is Python?',
          order:    1,
          xpReward: 10,
          duration: '8 min',

          explanation: {
            title:   'Welcome to Python!',
            content: `# What is Python?

Python is a **programming language** — a way to give instructions to a computer.

Think of it like this: A computer is like a very obedient but very literal employee. It will do exactly what you tell it, but you need to speak in a language it understands. Python is that language!

## Why Python?

- 🟢 **Easy to read** — Python looks almost like English
- 🟢 **Powerful** — Used by Google, Netflix, Instagram
- 🟢 **Versatile** — Web apps, AI, games, automation
- 🟢 **Huge community** — Millions of developers worldwide

## Where is Python used?

| Field | Example |
|-------|---------|
| AI & ML | ChatGPT, image recognition |
| Web Dev | Instagram, Pinterest |
| Data Science | Stock analysis, research |
| Automation | Auto-filling forms, scripts |

## Your first Python program

Every programmer's first program says "Hello, World!" — it's a tradition!`,
          },

          codeExample: {
            title:       'Hello, World!',
            language:    'python',
            code: `# This is your first Python program!
# Lines starting with # are comments — Python ignores them

print("Hello, World!")
print("I am learning Python!")
print("This is awesome! 🐍")`,
            explanation: `- \`print()\` is a function that displays text on screen
- Text inside quotes \`"..."\` is called a **string**
- Each \`print()\` starts on a new line in the output`,
          },

          exercise: {
            title:       'Your Turn!',
            instructions: 'Modify the code to print YOUR name and your favorite hobby.',
            starterCode: `# Write your first Python program!
# Print your name on line 1
# Print your favorite hobby on line 2

print("Your name here")
print("Your hobby here")`,
            solutionCode: `print("Alex")
print("Playing cricket")`,
            hints: [
              'Use the print() function just like in the example',
              'Put your text inside double quotes ""',
              'Each print() should be on its own line',
            ],
            testCases: [
              { input: '', expectedOutput: null, checkType: 'contains_print' },
            ],
          },

          quiz: {
            questions: [
              {
                id:       'py-m1-l1-q1',
                question: 'Which function is used to display output in Python?',
                options:  ['show()', 'print()', 'display()', 'output()'],
                correct:  1,
                explanation: 'print() is Python\'s built-in function to display text and values on the screen.',
              },
              {
                id:       'py-m1-l1-q2',
                question: 'What does the # symbol do in Python?',
                options:  [
                  'Starts a comment — Python ignores it',
                  'Multiplies numbers',
                  'Causes an error',
                  'Starts a function',
                ],
                correct:     0,
                explanation: 'Lines starting with # are comments. They are notes for humans and are completely ignored by Python.',
              },
              {
                id:       'py-m1-l1-q3',
                question: 'What will print("CodeGuru") display?',
                options:  ['print("CodeGuru")', 'CodeGuru', '"CodeGuru"', 'Error'],
                correct:  1,
                explanation: 'print() displays the content inside the quotes, without the quotes themselves.',
              },
            ],
          },
        },

        // ─── Lesson 2 ────────────────────────────────
        {
          id:       'py-m1-l2',
          moduleId: 'py-m1',
          title:    'Variables & Data Types',
          order:    2,
          xpReward: 10,
          duration: '10 min',

          explanation: {
            title:   'Storing Information: Variables',
            content: `# Variables — Python's Storage Boxes

A **variable** is like a labeled box where you store information.

\`\`\`
Box label: age
Box content: 20
\`\`\`

## Creating Variables

In Python, creating a variable is simple:
\`\`\`python
name = "Rahul"
age = 20
\`\`\`

The \`=\` sign means "store this value in this box."

## Python's 4 Main Data Types

| Type | Example | What it stores |
|------|---------|----------------|
| **String** | \`"Hello"\` | Text |
| **Integer** | \`42\` | Whole numbers |
| **Float** | \`3.14\` | Decimal numbers |
| **Boolean** | \`True\` | Yes/No values |

## Python figures out the type automatically!

This is called **dynamic typing** — you don't have to specify the type.`,
          },

          codeExample: {
            title:    'Variables in Action',
            language: 'python',
            code: `# String variable (text)
name = "Priya"
city = "Mumbai"

# Integer variable (whole number)
age = 19
score = 95

# Float variable (decimal number)
gpa = 3.8
temperature = 36.6

# Boolean variable (True or False)
is_student = True
has_laptop = True

# Printing variables
print("Name:", name)
print("Age:", age)
print("City:", city)
print("GPA:", gpa)
print("Is student?", is_student)

# You can change a variable anytime!
score = 100
print("Updated score:", score)`,
            explanation: `- Variables are created with \`variable_name = value\`
- Use snake_case for variable names (words separated by underscore)
- Strings need quotes, numbers don't, booleans are \`True\`/\`False\``,
          },

          exercise: {
            title:        'Create Your Profile',
            instructions: 'Create variables for your own profile: name, age, city, and favorite_language. Then print them all!',
            starterCode: `# Create your profile variables here
name = 
age = 
city = 
favorite_language = 

# Now print them
print("Name:", name)
print("Age:", age)
print("City:", city)
print("Favorite Language:", favorite_language)`,
            solutionCode: `name = "Alex"
age = 21
city = "Delhi"
favorite_language = "Python"

print("Name:", name)
print("Age:", age)
print("City:", city)
print("Favorite Language:", favorite_language)`,
            hints: [
              'Text values need quotation marks: name = "Your Name"',
              'Number values don\'t need quotes: age = 21',
              'Variable names cannot have spaces — use underscore: favorite_language',
            ],
          },

          quiz: {
            questions: [
              {
                id:          'py-m1-l2-q1',
                question:    'What type of data is: score = 95',
                options:     ['String', 'Float', 'Integer', 'Boolean'],
                correct:     2,
                explanation: '95 is a whole number with no decimal point, so it is an Integer.',
              },
              {
                id:          'py-m1-l2-q2',
                question:    'Which variable name is correct in Python?',
                options:     ['my name', 'my-name', 'my_name', '1name'],
                correct:     2,
                explanation: 'Python variable names use underscore to separate words (snake_case). Spaces and hyphens are not allowed, and names cannot start with a number.',
              },
              {
                id:          'py-m1-l2-q3',
                question:    'What will this print?\n\nx = 5\nx = 10\nprint(x)',
                options:     ['5', '10', '5 10', 'Error'],
                correct:     1,
                explanation: 'Variables can be reassigned. x is first set to 5, then overwritten with 10. print(x) shows the current value: 10.',
              },
            ],
          },
        },

        // ─── Lesson 3 ────────────────────────────────
        {
          id:       'py-m1-l3',
          moduleId: 'py-m1',
          title:    'User Input & String Operations',
          order:    3,
          xpReward: 15,
          duration: '12 min',

          explanation: {
            title:   'Making Programs Interactive',
            content: `# Getting Input from Users

So far our programs were one-way — Python talks, user listens. Let's make it two-way!

The \`input()\` function pauses your program and waits for the user to type something.

## String Operations

Strings are super powerful in Python. You can:
- **Concatenate** (join): \`"Hello" + " World"\`
- **Format** (insert variables): f-strings \`f"Hello {name}"\`
- **Measure**: \`len("Hello")\` = 5
- **Change case**: \`.upper()\`, \`.lower()\``,
          },

          codeExample: {
            title:    'Interactive Greeter',
            language: 'python',
            code: `# Get user's name
name = input("What is your name? ")

# Get user's age (input always returns a string!)
age_str = input("What is your age? ")
age = int(age_str)  # Convert string to integer

# f-string formatting (the modern way)
print(f"Hello, {name}! 👋")
print(f"You are {age} years old.")
print(f"In 10 years, you will be {age + 10}!")

# String operations
print(f"Your name has {len(name)} characters.")
print(f"UPPERCASE: {name.upper()}")
print(f"lowercase: {name.lower()}")`,
            explanation: `- \`input()\` always returns a **string**
- Use \`int()\` to convert to integer, \`float()\` for decimals
- f-strings: prefix with \`f\` and use \`{variable}\` to insert values`,
          },

          exercise: {
            title:        'Calculator Intro',
            instructions: 'Create a program that asks for two numbers and prints their sum, difference, and product.',
            starterCode: `# Ask user for two numbers
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

# Calculate and print results
# Your code here...`,
            solutionCode: `num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

print(f"Sum: {num1 + num2}")
print(f"Difference: {num1 - num2}")
print(f"Product: {num1 * num2}")`,
            hints: [
              'Use int() to convert input to numbers',
              'Use + for addition, - for subtraction, * for multiplication',
              'Use f-strings to format the output nicely',
            ],
          },

          quiz: {
            questions: [
              {
                id:          'py-m1-l3-q1',
                question:    'What does input() always return?',
                options:     ['Integer', 'Float', 'String', 'Boolean'],
                correct:     2,
                explanation: 'input() always returns a String, even if the user types a number. Use int() or float() to convert it.',
              },
              {
                id:          'py-m1-l3-q2',
                question:    'What does f"Hello {name}" do?',
                options:     [
                  'Prints the letter f',
                  'Inserts the value of name into the string',
                  'Creates an error',
                  'Prints {name} literally',
                ],
                correct:     1,
                explanation: 'f-strings (formatted strings) replace {variable} with the actual value of the variable.',
              },
            ],
          },
        },
      ],
    },

    // ════════════════════════════════════════════════
    //  MODULE 2 — Control Flow (Beginner)
    // ════════════════════════════════════════════════
    {
      id:          'py-m2',
      courseId:    'python',
      title:       'Control Flow',
      description: 'Make your programs smart with conditions and loops.',
      level:       'beginner',
      order:       2,
      icon:        '🔀',
      xpReward:    120,
      locked:      true, // Unlocked after completing Module 1
      lessons: [
        {
          id:       'py-m2-l1',
          moduleId: 'py-m2',
          title:    'If / Else Statements',
          order:    1,
          xpReward: 15,
          duration: '12 min',

          explanation: {
            title:   'Making Decisions in Code',
            content: `# If/Else — Teaching Python to Decide

Imagine you're at a chai stall. The rule is:
- If you have ₹20 → buy chai
- Else → just smell it 😄

That's exactly how **if/else** works in Python!

## Syntax

\`\`\`python
if condition:
    # code runs if condition is True
else:
    # code runs if condition is False
\`\`\`

## Comparison Operators

| Operator | Meaning |
|----------|---------|
| \`==\` | Equal to |
| \`!=\` | Not equal to |
| \`>\` | Greater than |
| \`<\` | Less than |
| \`>=\` | Greater than or equal |
| \`<=\` | Less than or equal |`,
          },

          codeExample: {
            title:    'Grade Checker',
            language: 'python',
            code: `marks = int(input("Enter your marks (0-100): "))

if marks >= 90:
    print("Grade: A+ 🌟 Excellent!")
elif marks >= 75:
    print("Grade: A 👏 Great job!")
elif marks >= 60:
    print("Grade: B 👍 Good work!")
elif marks >= 40:
    print("Grade: C 📚 Keep studying!")
else:
    print("Grade: F ❌ Please retry")

print(f"Your marks: {marks}")`,
            explanation: `- \`if\` checks the first condition
- \`elif\` (else if) checks additional conditions
- \`else\` runs when no condition is True
- **Indentation matters!** Python uses spaces to define code blocks`,
          },

          exercise: {
            title:        'Even or Odd?',
            instructions: 'Write a program that takes a number and tells if it\'s even or odd. Hint: use the % (modulo) operator.',
            starterCode: `number = int(input("Enter a number: "))

# Check if even or odd
# Hint: number % 2 == 0 means even

# Your code here`,
            solutionCode: `number = int(input("Enter a number: "))

if number % 2 == 0:
    print(f"{number} is Even")
else:
    print(f"{number} is Odd")`,
            hints: [
              'The % operator gives the remainder of division',
              'If number % 2 equals 0, the number is even',
              'Otherwise it\'s odd — use else for that case',
            ],
          },

          quiz: {
            questions: [
              {
                id:          'py-m2-l1-q1',
                question:    'What does elif mean?',
                options:     ['Else If — another condition to check', 'A loop', 'A function', 'An error type'],
                correct:     0,
                explanation: 'elif stands for "else if" — it checks another condition if the previous if was False.',
              },
              {
                id:          'py-m2-l1-q2',
                question:    'What operator checks if two values are EQUAL?',
                options:     ['=', '==', '!=', '=>'],
                correct:     1,
                explanation: '== checks equality. Single = is for assignment (storing a value). These are different operations!',
              },
            ],
          },
        },
      ],
    },
  ],
};

export default pythonCourse;
