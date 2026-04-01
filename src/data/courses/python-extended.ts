// src/data/courses/python-extended.ts
// Modules 3–6 for Python (Beginner levels 3-6)
// Merged into pythonCourse in index.ts
import type { Module } from '@/types/course';

export const pythonModules3to6: Module[] = [

  // ════════════════════════════════════════════════
  //  MODULE 3 — Lists & Loops
  // ════════════════════════════════════════════════
  {
    id:          'py-m3',
    courseId:    'python',
    title:       'Lists & Loops',
    description: 'Store multiple values and repeat actions. The power of automation begins here.',
    level:       'beginner',
    order:       3,
    icon:        '🔁',
    xpReward:    130,
    locked:      true,
    lessons: [
      {
        id: 'py-m3-l1', moduleId: 'py-m3',
        title: 'Python Lists', order: 1, xpReward: 15, duration: '12 min',
        explanation: {
          title: 'Lists — Storing Multiple Values',
          content: `# Python Lists

A **list** is a collection of items stored in a single variable. Think of it like a shopping list or a playlist.

\`\`\`python
fruits = ["apple", "banana", "mango"]
scores = [95, 87, 72, 100, 88]
mixed  = ["Rahul", 21, True, 3.14]
\`\`\`

## Accessing Items (Indexing)

Lists are **zero-indexed** — counting starts at 0.

\`\`\`python
fruits = ["apple", "banana", "mango"]
print(fruits[0])   # apple (first)
print(fruits[1])   # banana (second)
print(fruits[-1])  # mango (last — negative index!)
\`\`\`

## Common List Operations

| Operation | Code | Result |
|-----------|------|--------|
| Length | \`len(fruits)\` | 3 |
| Add item | \`fruits.append("grape")\` | adds to end |
| Remove item | \`fruits.remove("banana")\` | removes by value |
| Insert | \`fruits.insert(1, "kiwi")\` | inserts at index |
| Sort | \`fruits.sort()\` | sorts in place |
| Reverse | \`fruits.reverse()\` | reverses in place |

## Slicing — getting a sublist

\`\`\`python
scores = [95, 87, 72, 100, 88]
print(scores[1:3])   # [87, 72] — index 1 up to (not including) 3
print(scores[:2])    # [95, 87] — from start to index 2
print(scores[2:])    # [72, 100, 88] — from index 2 to end
\`\`\``,
        },
        codeExample: {
          title: 'Working with Lists',
          language: 'python',
          code: `# Creating lists
students = ["Priya", "Rahul", "Arjun", "Meera"]
marks    = [88, 92, 75, 95]

# Accessing elements
print("First student:", students[0])
print("Last student:",  students[-1])
print("Total students:", len(students))

# Modifying lists
students.append("Kabir")         # add to end
students.insert(1, "Divya")      # insert at index 1
students.remove("Arjun")         # remove by value

print("Updated list:", students)

# Slicing
top_3 = marks[:3]
print("First 3 marks:", top_3)

# Checking membership
if "Priya" in students:
    print("Priya is in the class!")

# List length and sorting
print("Count:", len(students))
sorted_students = sorted(students)
print("Alphabetical:", sorted_students)`,
          explanation: `- Index starts at 0; negative index counts from the end
- \`append()\` adds to the end; \`insert(i, val)\` adds at position i
- \`remove()\` deletes the first occurrence of a value
- \`in\` operator checks if an item exists in the list
- \`sorted()\` returns a new sorted list; \`.sort()\` sorts in-place`,
        },
        exercise: {
          title: 'Student Grade Manager',
          instructions: 'Create a list of 5 student names. Add one more student, remove the second student, then print the final list and its length.',
          starterCode: `# Create a list of 5 student names
students = ["Alice", "Bob", "Charlie", "Diana", "Eve"]

# Add "Frank" to the end of the list
# your code here

# Remove "Bob" from the list
# your code here

# Print the final list and its length
print(students)
print("Total students:", len(students))`,
          solutionCode: `students = ["Alice", "Bob", "Charlie", "Diana", "Eve"]
students.append("Frank")
students.remove("Bob")
print(students)
print("Total students:", len(students))`,
          hints: [
            '💡 Use students.append("Frank") to add to the end',
            '💡 Use students.remove("Bob") to remove by value',
            '💡 len(students) returns the number of items in the list',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'py-m3-l1-q1',
              question: 'What index is used to access the FIRST item in a Python list?',
              options: ['1', '0', '-1', 'first'],
              correct: 1,
              explanation: 'Python lists are zero-indexed — the first item is at index 0, the second at index 1, and so on.',
            },
            {
              id: 'py-m3-l1-q2',
              question: 'Which method adds an item to the END of a list?',
              options: ['insert()', 'add()', 'append()', 'push()'],
              correct: 2,
              explanation: 'append() adds an item to the end of a list. insert(i, val) adds at a specific position.',
            },
          ],
        },
      },
      {
        id: 'py-m3-l2', moduleId: 'py-m3',
        title: 'For Loops', order: 2, xpReward: 15, duration: '12 min',
        explanation: {
          title: 'Repeating Actions with For Loops',
          content: `# For Loops — Do Something for Each Item

A **for loop** repeats a block of code for each item in a sequence. It's the most common loop in Python.

## Loop over a list

\`\`\`python
fruits = ["apple", "banana", "mango"]
for fruit in fruits:
    print(fruit)
# apple
# banana
# mango
\`\`\`

## Loop with range()

\`\`\`python
# range(5) → 0, 1, 2, 3, 4
for i in range(5):
    print(i)

# range(1, 6) → 1, 2, 3, 4, 5
for i in range(1, 6):
    print(i)

# range(0, 10, 2) → 0, 2, 4, 6, 8 (step of 2)
for i in range(0, 10, 2):
    print(i)
\`\`\`

## enumerate() — get index AND value

\`\`\`python
students = ["Priya", "Rahul", "Arjun"]
for index, name in enumerate(students):
    print(f"{index + 1}. {name}")
# 1. Priya
# 2. Rahul
# 3. Arjun
\`\`\`

## Accumulating values in a loop

\`\`\`python
numbers = [10, 20, 30, 40, 50]
total = 0
for n in numbers:
    total = total + n
print("Sum:", total)  # 150
\`\`\``,
        },
        codeExample: {
          title: 'For Loops in Action',
          language: 'python',
          code: `# Loop over a list
languages = ["Python", "JavaScript", "Java", "HTML/CSS"]
print("Languages taught at CodeGuru AI:")
for lang in languages:
    print(f"  - {lang}")

# Loop with range
print("\nCounting 1 to 5:")
for i in range(1, 6):
    print(i, end=" ")   # end=" " keeps on same line
print()  # newline

# Multiplication table
number = 7
print(f"\nMultiplication table of {number}:")
for i in range(1, 11):
    result = number * i
    print(f"{number} x {i:2d} = {result}")

# Calculate sum and average using a loop
marks = [85, 92, 78, 95, 88]
total = 0
for mark in marks:
    total += mark   # total = total + mark
average = total / len(marks)
print(f"\nMarks: {marks}")
print(f"Sum: {total}, Average: {average:.1f}")`,
          explanation: `- \`for item in list:\` iterates over every element
- \`range(start, stop, step)\` generates a sequence of numbers
- \`end=" "\` in print() keeps output on the same line
- \`+=\` is shorthand for \`total = total + mark\`
- \`:.1f\` in f-string formats a float to 1 decimal place`,
        },
        exercise: {
          title: 'Times Table Generator',
          instructions: 'Write a program that prints the complete multiplication table (1 to 10) for any number the user specifies using a for loop.',
          starterCode: `number = int(input("Enter a number: "))

# Use a for loop with range(1, 11) to print:
# "5 x 1 = 5"
# "5 x 2 = 10"  etc.

for i in range(1, 11):
    # print the multiplication result
    pass  # remove this and write your code`,
          solutionCode: `number = int(input("Enter a number: "))
for i in range(1, 11):
    print(f"{number} x {i} = {number * i}")`,
          hints: [
            '💡 Use range(1, 11) to loop from 1 to 10 inclusive',
            '💡 Inside the loop, calculate number * i for each value of i',
            '💡 Use an f-string: f"{number} x {i} = {number * i}"',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'py-m3-l2-q1',
              question: 'What does range(2, 8, 2) produce?',
              options: ['2, 4, 6, 8', '2, 4, 6', '0, 2, 4, 6, 8', '2, 3, 4, 5, 6, 7'],
              correct: 1,
              explanation: 'range(start, stop, step) produces numbers from 2 up to (not including) 8, stepping by 2: 2, 4, 6.',
            },
            {
              id: 'py-m3-l2-q2',
              question: 'What does enumerate() provide in a for loop?',
              options: ['Only the index', 'Only the value', 'Both the index and the value', 'The length of the list'],
              correct: 2,
              explanation: 'enumerate() returns both the index and the value for each item: for index, value in enumerate(list):',
            },
          ],
        },
      },
      {
        id: 'py-m3-l3', moduleId: 'py-m3',
        title: 'While Loops & Loop Control', order: 3, xpReward: 20, duration: '14 min',
        explanation: {
          title: 'While Loops and Controlling Flow',
          content: `# While Loops

A **while loop** repeats as long as a condition is True. Unlike a for loop, you don't know how many times it will run upfront.

\`\`\`python
count = 1
while count <= 5:
    print(count)
    count += 1
# 1, 2, 3, 4, 5
\`\`\`

## Common while loop pattern — user input validation

\`\`\`python
while True:
    answer = input("Type 'quit' to exit: ")
    if answer == 'quit':
        break
    print(f"You typed: {answer}")
\`\`\`

## Loop Control Statements

### break — exit the loop immediately
\`\`\`python
for i in range(10):
    if i == 5:
        break   # stop when i reaches 5
    print(i)
# 0, 1, 2, 3, 4
\`\`\`

### continue — skip the rest of this iteration
\`\`\`python
for i in range(10):
    if i % 2 == 0:
        continue  # skip even numbers
    print(i)
# 1, 3, 5, 7, 9
\`\`\`

### else on loops — runs when loop finishes normally (no break)
\`\`\`python
for i in range(5):
    print(i)
else:
    print("Loop completed!")
\`\`\`

## ⚠️ Infinite Loop Warning
\`\`\`python
# DANGER — never do this without a break!
while True:
    print("This runs forever!")
\`\`\``,
        },
        codeExample: {
          title: 'While Loops & Control',
          language: 'python',
          code: `# While loop — countdown
count = 10
print("Countdown:")
while count > 0:
    print(count, end=" ")
    count -= 1
print("Go! 🚀")

# While with break — find first multiple of 7 > 50
print("\nFirst multiple of 7 greater than 50:")
num = 51
while True:
    if num % 7 == 0:
        print(num)
        break
    num += 1

# Continue — print only odd numbers 1–20
print("\nOdd numbers from 1 to 20:")
for i in range(1, 21):
    if i % 2 == 0:
        continue
    print(i, end=" ")
print()

# Nested loops — star pattern
print("\nStar pattern:")
for row in range(1, 6):
    for col in range(row):
        print("*", end="")
    print()`,
          explanation: `- \`count -= 1\` is shorthand for \`count = count - 1\`
- \`while True:\` creates an infinite loop — use \`break\` to exit
- \`continue\` skips the current iteration and jumps to the next
- Nested loops: outer loop controls rows, inner loop controls columns`,
        },
        exercise: {
          title: 'Number Guessing Game',
          instructions: 'Create a number guessing game. The secret number is 42. Keep asking the user to guess until they get it right, telling them "Too high!" or "Too low!" each time.',
          starterCode: `secret = 42
attempts = 0

# Use a while True loop
# Get input, convert to int
# Check if too high, too low, or correct
# Break when they guess correctly
# Count attempts with attempts += 1

while True:
    guess = int(input("Guess the number (1-100): "))
    attempts += 1
    # your code here`,
          solutionCode: `secret = 42
attempts = 0
while True:
    guess = int(input("Guess the number (1-100): "))
    attempts += 1
    if guess > secret:
        print("Too high!")
    elif guess < secret:
        print("Too low!")
    else:
        print(f"Correct! You got it in {attempts} attempts! 🎉")
        break`,
          hints: [
            '💡 Use while True: to keep asking until they guess correctly',
            '💡 Compare guess to secret using > and < and ==',
            '💡 Use break when guess == secret to exit the loop',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'py-m3-l3-q1',
              question: 'What does the break statement do in a loop?',
              options: ['Pauses the loop', 'Skips the current iteration', 'Exits the loop immediately', 'Restarts the loop'],
              correct: 2,
              explanation: 'break immediately exits the loop entirely. Execution continues with the first line after the loop.',
            },
            {
              id: 'py-m3-l3-q2',
              question: 'What is the difference between break and continue?',
              options: [
                'No difference',
                'break exits the loop; continue skips to the next iteration',
                'continue exits the loop; break skips to next iteration',
                'Both exit the loop',
              ],
              correct: 1,
              explanation: 'break stops the loop entirely. continue skips the remaining code in the current iteration and jumps to the next one.',
            },
          ],
        },
      },
    ],
  },

  // ════════════════════════════════════════════════
  //  MODULE 4 — Functions & Modules
  // ════════════════════════════════════════════════
  {
    id:          'py-m4',
    courseId:    'python',
    title:       'Functions & Modules',
    description: 'Write clean, reusable code. Organize your programs with functions and Python\'s built-in modules.',
    level:       'beginner',
    order:       4,
    icon:        '⚙️',
    xpReward:    140,
    locked:      true,
    lessons: [
      {
        id: 'py-m4-l1', moduleId: 'py-m4',
        title: 'Defining Functions', order: 1, xpReward: 15, duration: '12 min',
        explanation: {
          title: 'Functions — Write Once, Use Many Times',
          content: `# Functions in Python

A **function** is a reusable block of code that performs a specific task. You define it once and call it whenever you need it.

## Defining a function

\`\`\`python
def greet(name):
    message = f"Hello, {name}! Welcome to CodeGuru AI."
    return message
\`\`\`

## Calling a function

\`\`\`python
result = greet("Rahul")
print(result)   # Hello, Rahul! Welcome to CodeGuru AI.
\`\`\`

## Parameters and Arguments

- **Parameters** — the variable names in the function definition
- **Arguments** — the actual values you pass when calling

## Default Parameters

\`\`\`python
def power(base, exponent=2):   # exponent defaults to 2
    return base ** exponent

print(power(3))     # 9  (3²)
print(power(3, 3))  # 27 (3³)
\`\`\`

## Multiple Return Values

\`\`\`python
def min_max(numbers):
    return min(numbers), max(numbers)

low, high = min_max([5, 2, 8, 1, 9])
print(low, high)   # 1 9
\`\`\`

## Docstrings — documenting your function

\`\`\`python
def celsius_to_fahrenheit(c):
    """Convert Celsius temperature to Fahrenheit."""
    return c * 9/5 + 32
\`\`\``,
        },
        codeExample: {
          title: 'Functions in Practice',
          language: 'python',
          code: `# Simple function
def greet(name, language="Python"):
    return f"Hello {name}! You are learning {language}."

print(greet("Priya"))
print(greet("Rahul", "JavaScript"))

# Function with multiple return values
def analyze_list(numbers):
    """Return summary statistics for a list of numbers."""
    total   = sum(numbers)
    average = total / len(numbers)
    minimum = min(numbers)
    maximum = max(numbers)
    return total, average, minimum, maximum

scores = [85, 92, 78, 95, 88, 73, 96]
total, avg, low, high = analyze_list(scores)
print(f"Total: {total}")
print(f"Average: {avg:.1f}")
print(f"Lowest: {low}, Highest: {high}")

# Recursive function — factorial
def factorial(n):
    """Calculate n! (n factorial)."""
    if n <= 1:
        return 1
    return n * factorial(n - 1)

for i in range(1, 8):
    print(f"{i}! = {factorial(i)}")`,
          explanation: `- \`def\` keyword defines a function; \`return\` sends back a value
- Default parameters make arguments optional
- Multiple return values are separated by commas — unpack with multiple variables
- Docstrings (triple quotes) document what the function does
- Recursion: a function that calls itself (must have a base case to stop!)`,
        },
        exercise: {
          title: 'Build a Temperature Converter',
          instructions: 'Write three functions: celsius_to_fahrenheit(c), fahrenheit_to_celsius(f), and celsius_to_kelvin(c). Then create a convert_all(celsius) function that returns all three conversions.',
          starterCode: `def celsius_to_fahrenheit(c):
    # Formula: F = C * 9/5 + 32
    pass

def fahrenheit_to_celsius(f):
    # Formula: C = (F - 32) * 5/9
    pass

def celsius_to_kelvin(c):
    # Formula: K = C + 273.15
    pass

def convert_all(celsius):
    # Call all three functions and return results
    pass

# Test:
f, k = convert_all(100)
print(f"100°C = {f}°F = {k}K")`,
          solutionCode: `def celsius_to_fahrenheit(c):
    return c * 9/5 + 32

def fahrenheit_to_celsius(f):
    return (f - 32) * 5/9

def celsius_to_kelvin(c):
    return c + 273.15

def convert_all(celsius):
    f = celsius_to_fahrenheit(celsius)
    k = celsius_to_kelvin(celsius)
    return f, k

f, k = convert_all(100)
print(f"100°C = {f}°F = {k}K")`,
          hints: [
            '💡 Each function takes one parameter and returns the converted value',
            '💡 convert_all calls the other two functions and returns both results',
            '💡 Unpack with: f, k = convert_all(100)',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'py-m4-l1-q1',
              question: 'What is a default parameter in Python?',
              options: [
                'The first parameter of every function',
                'A parameter with a pre-set value used when no argument is provided',
                'A required parameter',
                'A parameter that cannot be changed',
              ],
              correct: 1,
              explanation: 'A default parameter has a preset value (e.g., def greet(name, lang="Python")). If the caller doesn\'t provide that argument, the default is used.',
            },
            {
              id: 'py-m4-l1-q2',
              question: 'What is a docstring?',
              options: [
                'A comment starting with #',
                'A string literal right after the def line that documents the function',
                'The return value of a function',
                'A special type of variable',
              ],
              correct: 1,
              explanation: 'A docstring is a string literal placed immediately after the function\'s def line (usually in triple quotes) that describes what the function does. It\'s accessible via help() and IDE tools.',
            },
          ],
        },
      },
      {
        id: 'py-m4-l2', moduleId: 'py-m4',
        title: 'Lambda & Higher-Order Functions', order: 2, xpReward: 20, duration: '14 min',
        explanation: {
          title: 'Lambda, map, filter, sorted',
          content: `# Lambda Functions

A **lambda** is a small, anonymous (unnamed) function written in one line.

\`\`\`python
# Normal function
def square(x):
    return x ** 2

# Same as lambda
square = lambda x: x ** 2
print(square(5))   # 25
\`\`\`

## Higher-Order Functions

Functions that take other functions as arguments.

### map() — apply a function to every item

\`\`\`python
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)   # [1, 4, 9, 16, 25]
\`\`\`

### filter() — keep items that match a condition

\`\`\`python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)   # [2, 4, 6, 8, 10]
\`\`\`

### sorted() with key — custom sort order

\`\`\`python
students = [("Rahul", 85), ("Priya", 92), ("Arjun", 78)]
# Sort by mark (second element of each tuple)
by_mark = sorted(students, key=lambda s: s[1], reverse=True)
print(by_mark)   # [('Priya', 92), ('Rahul', 85), ('Arjun', 78)]
\`\`\`

## List Comprehensions — Pythonic shorthand

\`\`\`python
# Long way
squares = []
for x in range(1, 6):
    squares.append(x**2)

# List comprehension — same result!
squares = [x**2 for x in range(1, 6)]
print(squares)   # [1, 4, 9, 16, 25]

# With condition
even_squares = [x**2 for x in range(1, 11) if x % 2 == 0]
\`\`\``,
        },
        codeExample: {
          title: 'Lambda and Comprehensions',
          language: 'python',
          code: `# Lambda basics
double  = lambda x: x * 2
greet   = lambda name: f"Hello, {name}!"
add     = lambda a, b: a + b

print(double(7))         # 14
print(greet("Priya"))    # Hello, Priya!
print(add(10, 5))        # 15

# map — transform all items
prices = [100, 250, 399, 1499, 2999]
discounted = list(map(lambda p: round(p * 0.9), prices))
print("Discounted:", discounted)

# filter — keep qualifying items
marks = [45, 72, 88, 35, 91, 60, 55, 78]
passed   = list(filter(lambda m: m >= 60, marks))
failed   = list(filter(lambda m: m < 60, marks))
print("Passed:", passed)
print("Failed:", failed)

# sorted with lambda key
courses = [
    {"name": "Python",     "students": 1200},
    {"name": "JavaScript", "students": 980},
    {"name": "Java",       "students": 750},
]
by_popularity = sorted(courses, key=lambda c: c["students"], reverse=True)
for course in by_popularity:
    print(f"{course['name']}: {course['students']} students")

# List comprehensions
squares     = [x**2       for x in range(1, 11)]
even_sq     = [x**2       for x in range(1, 11) if x % 2 == 0]
upper_names = [n.upper()  for n in ["rahul", "priya", "arjun"]]
print("Squares:", squares)
print("Even squares:", even_sq)
print("Upper:", upper_names)`,
          explanation: `- Lambda: \`lambda parameters: expression\` — one-line anonymous function
- \`map(func, list)\` applies func to every element — wrap in list() to get a list
- \`filter(func, list)\` keeps only items where func returns True
- \`sorted(list, key=func)\` sorts using the return value of key as the comparison value
- List comprehension: \`[expression for item in iterable if condition]\``,
        },
        exercise: {
          title: 'Data Processing Pipeline',
          instructions: 'Given a list of student dictionaries with name and score, use list comprehension and lambda to: 1) Get names of all students who passed (score >= 60). 2) Calculate grades (A: 90+, B: 75+, C: 60+, F: below 60). 3) Sort by score descending.',
          starterCode: `students = [
    {"name": "Rahul",  "score": 88},
    {"name": "Priya",  "score": 54},
    {"name": "Arjun",  "score": 72},
    {"name": "Meera",  "score": 95},
    {"name": "Kabir",  "score": 41},
]

# 1. List of names who passed (score >= 60)
passed_names = [s["name"] for s in students if s["score"] >= 60]
print("Passed:", passed_names)

# 2. Sort by score descending using sorted() with lambda
sorted_students = sorted(students, key=lambda s: s["score"], reverse=True)

# 3. Print each student with their grade
def get_grade(score):
    if score >= 90: return "A"
    elif score >= 75: return "B"
    elif score >= 60: return "C"
    else: return "F"

for s in sorted_students:
    print(f"{s['name']}: {s['score']} — Grade {get_grade(s['score'])}")`,
          solutionCode: `students = [
    {"name": "Rahul",  "score": 88},
    {"name": "Priya",  "score": 54},
    {"name": "Arjun",  "score": 72},
    {"name": "Meera",  "score": 95},
    {"name": "Kabir",  "score": 41},
]
passed_names = [s["name"] for s in students if s["score"] >= 60]
print("Passed:", passed_names)
sorted_students = sorted(students, key=lambda s: s["score"], reverse=True)
def get_grade(score):
    if score >= 90: return "A"
    elif score >= 75: return "B"
    elif score >= 60: return "C"
    else: return "F"
for s in sorted_students:
    print(f"{s['name']}: {s['score']} — Grade {get_grade(s['score'])}")`,
          hints: [
            '💡 List comprehension with condition: [s["name"] for s in students if s["score"] >= 60]',
            '💡 sorted(students, key=lambda s: s["score"], reverse=True) sorts highest first',
            '💡 Call get_grade(s["score"]) inside the print for each student',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'py-m4-l2-q1',
              question: 'What does filter(lambda x: x > 0, [-1, 2, -3, 4]) return?',
              options: ['[-1, -3]', '[2, 4]', '[1, 2, 3, 4]', 'Error'],
              correct: 1,
              explanation: 'filter() keeps only items for which the function returns True. x > 0 is True for 2 and 4, so the result is [2, 4]. Remember to wrap in list().',
            },
            {
              id: 'py-m4-l2-q2',
              question: 'What is the list comprehension equivalent of: list(map(lambda x: x*2, [1,2,3]))?',
              options: ['[x for x in [1,2,3] if x*2]', '[x*2 for x in [1,2,3]]', '[2,4,6 for x in range(3)]', '[map(x*2) for x in [1,2,3]]'],
              correct: 1,
              explanation: '[x*2 for x in [1,2,3]] produces [2, 4, 6] — same as map. List comprehensions are generally preferred in Python for readability.',
            },
          ],
        },
      },
      {
        id: 'py-m4-l3', moduleId: 'py-m4',
        title: 'Python Standard Library', order: 3, xpReward: 20, duration: '14 min',
        explanation: {
          title: 'Built-in Modules — Python\'s Superpowers',
          content: `# Python's Standard Library

Python ships with hundreds of ready-to-use modules. You don't need to install them — just import!

## math — mathematical operations

\`\`\`python
import math

print(math.sqrt(16))     # 4.0
print(math.pi)           # 3.14159...
print(math.floor(3.7))   # 3
print(math.ceil(3.2))    # 4
print(math.pow(2, 10))   # 1024.0
\`\`\`

## random — random numbers

\`\`\`python
import random

print(random.randint(1, 10))           # random int 1–10
print(random.choice(["a","b","c"]))    # random item from list
random.shuffle(my_list)                # shuffle in place
print(random.random())                 # float 0.0–1.0
\`\`\`

## datetime — dates and times

\`\`\`python
from datetime import datetime, date

now   = datetime.now()
today = date.today()
print(now.strftime("%d %B %Y"))   # "25 December 2024"
print(today.year)                  # 2024
\`\`\`

## os — operating system interface

\`\`\`python
import os

print(os.getcwd())             # current working directory
print(os.path.exists("file.txt"))  # check if file exists
os.makedirs("new_folder", exist_ok=True)
\`\`\`

## Two import styles

\`\`\`python
import math              # access as math.sqrt()
from math import sqrt    # access directly as sqrt()
from math import *       # import everything (avoid — pollutes namespace)
\`\`\``,
        },
        codeExample: {
          title: 'Standard Library in Action',
          language: 'python',
          code: `import math
import random
from datetime import datetime

# math module
print("=== Math Module ===")
print(f"π = {math.pi:.4f}")
print(f"√144 = {math.sqrt(144)}")
print(f"2^10 = {int(math.pow(2, 10))}")
print(f"sin(90°) = {math.sin(math.radians(90)):.1f}")

# random module
print("\n=== Random Module ===")
dice = random.randint(1, 6)
print(f"Dice roll: {dice}")

cards = ["♠ Ace", "♥ King", "♦ Queen", "♣ Jack"]
random.shuffle(cards)
print(f"Shuffled: {cards}")
print(f"Random card: {random.choice(cards)}")

# datetime module
print("\n=== Datetime Module ===")
now = datetime.now()
print(f"Right now: {now.strftime('%d %B %Y, %I:%M %p')}")
print(f"Year: {now.year}, Month: {now.month}, Day: {now.day}")

# Simple stats using math
scores = [78, 85, 92, 65, 88, 74, 91]
mean   = sum(scores) / len(scores)
variance = sum((x - mean)**2 for x in scores) / len(scores)
std_dev  = math.sqrt(variance)
print(f"\n=== Stats ===")
print(f"Mean: {mean:.1f}, Std Dev: {std_dev:.1f}")`,
          explanation: `- \`import module\` loads a module; access with \`module.function()\`
- \`from module import name\` lets you use the function directly
- \`math.radians(degrees)\` converts degrees to radians for trig functions
- \`datetime.strftime(format)\` formats a date as a string using format codes
- \`%d\` = day, \`%B\` = full month name, \`%Y\` = 4-digit year`,
        },
        exercise: {
          title: 'Random Quiz Generator',
          instructions: 'Use the random module to create a simple math quiz that generates 5 random addition/subtraction questions (numbers 1-20), checks user answers, and reports the final score.',
          starterCode: `import random

score = 0
total_questions = 5

for i in range(total_questions):
    # Generate two random numbers between 1 and 20
    a = random.randint(1, 20)
    b = random.randint(1, 20)
    
    # Randomly choose + or -
    operation = random.choice(["+", "-"])
    
    # Calculate correct answer
    if operation == "+":
        correct = a + b
    else:
        correct = a - b
    
    # Ask question and check
    # your code here
    pass

print(f"\nFinal Score: {score}/{total_questions}")`,
          solutionCode: `import random
score = 0
total_questions = 5
for i in range(total_questions):
    a = random.randint(1, 20)
    b = random.randint(1, 20)
    operation = random.choice(["+", "-"])
    correct = a + b if operation == "+" else a - b
    answer = int(input(f"Q{i+1}: {a} {operation} {b} = "))
    if answer == correct:
        print("Correct! ✅")
        score += 1
    else:
        print(f"Wrong ❌ Answer was {correct}")
print(f"\nFinal Score: {score}/{total_questions}")`,
          hints: [
            '💡 Use random.randint(1, 20) for both numbers',
            '💡 Use random.choice(["+", "-"]) to pick the operation',
            '💡 Compare the user\'s answer (converted to int) to the correct answer',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'py-m4-l3-q1',
              question: 'What is the difference between "import math" and "from math import sqrt"?',
              options: [
                'No difference',
                'import math: use math.sqrt(); from math import sqrt: use sqrt() directly',
                'from math import sqrt imports the entire math module',
                'import math only imports sqrt',
              ],
              correct: 1,
              explanation: 'import math requires you to prefix every function with "math." (e.g., math.sqrt()). from math import sqrt imports sqrt directly into your namespace so you can call sqrt() without the prefix.',
            },
            {
              id: 'py-m4-l3-q2',
              question: 'Which function generates a random integer between 1 and 10 inclusive?',
              options: ['random.random(1, 10)', 'random.int(1, 10)', 'random.randint(1, 10)', 'random.range(1, 10)'],
              correct: 2,
              explanation: 'random.randint(a, b) returns a random integer N such that a <= N <= b — both endpoints are included.',
            },
          ],
        },
      },
    ],
  },

  // ════════════════════════════════════════════════
  //  MODULE 5 — Dictionaries & Sets
  // ════════════════════════════════════════════════
  {
    id:          'py-m5',
    courseId:    'python',
    title:       'Dictionaries & Sets',
    description: 'Master key-value data storage and unique value collections — essential for real-world Python.',
    level:       'beginner',
    order:       5,
    icon:        '📖',
    xpReward:    150,
    locked:      true,
    lessons: [
      {
        id: 'py-m5-l1', moduleId: 'py-m5',
        title: 'Dictionaries', order: 1, xpReward: 15, duration: '13 min',
        explanation: {
          title: 'Key-Value Storage with Dictionaries',
          content: `# Dictionaries — Labelled Storage

A **dictionary** stores data as **key-value pairs** — like a real dictionary where each word (key) has a definition (value).

\`\`\`python
student = {
    "name":   "Rahul",
    "age":    21,
    "course": "Python",
    "grade":  "A"
}
\`\`\`

## Accessing Values

\`\`\`python
print(student["name"])        # "Rahul"
print(student.get("age"))     # 21
print(student.get("email", "Not found"))  # "Not found" (safe default)
\`\`\`

## Adding, Updating, Deleting

\`\`\`python
student["email"] = "rahul@email.com"   # add new key
student["age"]   = 22                  # update existing key
del student["grade"]                    # delete a key
\`\`\`

## Iterating over a Dictionary

\`\`\`python
# Keys only
for key in student:
    print(key)

# Values only
for value in student.values():
    print(value)

# Keys and values together
for key, value in student.items():
    print(f"{key}: {value}")
\`\`\`

## Useful Methods

| Method | Description |
|--------|-------------|
| \`.keys()\` | All keys |
| \`.values()\` | All values |
| \`.items()\` | All (key, value) pairs |
| \`.get(key, default)\` | Safe access |
| \`.pop(key)\` | Remove and return value |
| \`.update(other_dict)\` | Merge another dict |`,
        },
        codeExample: {
          title: 'Dictionaries Deep Dive',
          language: 'python',
          code: `# Student record
student = {
    "name":    "Priya Sharma",
    "roll_no": "CS2021042",
    "marks":   {"python": 92, "math": 85, "english": 78},
    "active":  True
}

print(f"Name: {student['name']}")
print(f"Roll: {student['roll_no']}")

# Accessing nested dict
print(f"Python marks: {student['marks']['python']}")

# Safe access with .get()
print(f"Email: {student.get('email', 'Not provided')}")

# Adding and updating
student["email"]      = "priya@college.edu"
student["marks"]["js"] = 88
print(f"Updated marks: {student['marks']}")

# Iterating .items()
print("\nAll student info:")
for key, value in student.items():
    if key != "marks":
        print(f"  {key}: {value}")

# Dictionary comprehension
raw_scores = {"Alice": 88, "Bob": 72, "Charlie": 95, "Diana": 60}
grades = {
    name: ("Pass" if score >= 70 else "Fail")
    for name, score in raw_scores.items()
}
print("\nGrades:", grades)

# Counting with a dictionary
sentence = "hello world hello python world hello"
word_count = {}
for word in sentence.split():
    word_count[word] = word_count.get(word, 0) + 1
print("\nWord count:", word_count)`,
          explanation: `- Use \`dict[key]\` for access — raises KeyError if missing; \`.get(key, default)\` is safer
- Nested dictionaries: \`student["marks"]["python"]\`
- \`.items()\` returns (key, value) tuples — ideal for loops
- Dictionary comprehension: \`{key: value for item in iterable}\`
- \`.get(word, 0) + 1\` is the classic pattern for counting occurrences`,
        },
        exercise: {
          title: 'Phone Book Application',
          instructions: 'Build a simple phone book using a dictionary. Start with 3 contacts, allow adding a new contact, looking up by name (with a "not found" message), and printing all contacts sorted by name.',
          starterCode: `phone_book = {
    "Rahul":  "9876543210",
    "Priya":  "8765432109",
    "Arjun":  "7654321098",
}

# Add a new contact "Meera" with number "6543210987"
# your code

# Look up "Priya" using .get() with a default message
result = phone_book.get("Priya", "Contact not found")
print(f"Priya's number: {result}")

# Look up someone who doesn't exist
result2 = phone_book.get("Kabir", "Contact not found")
print(f"Kabir's number: {result2}")

# Print all contacts sorted alphabetically by name
print("\nAll Contacts:")
for name in sorted(phone_book.keys()):
    print(f"  {name}: {phone_book[name]}")`,
          solutionCode: `phone_book = {
    "Rahul": "9876543210",
    "Priya": "8765432109",
    "Arjun": "7654321098",
}
phone_book["Meera"] = "6543210987"
result = phone_book.get("Priya", "Contact not found")
print(f"Priya's number: {result}")
result2 = phone_book.get("Kabir", "Contact not found")
print(f"Kabir's number: {result2}")
print("\nAll Contacts:")
for name in sorted(phone_book.keys()):
    print(f"  {name}: {phone_book[name]}")`,
          hints: [
            '💡 Add a contact: phone_book["Meera"] = "6543210987"',
            '💡 Safe lookup: phone_book.get("Name", "Contact not found")',
            '💡 Sort alphabetically: for name in sorted(phone_book.keys())',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'py-m5-l1-q1',
              question: 'What is the safest way to access a dictionary key that might not exist?',
              options: ['dict[key]', 'dict.fetch(key)', 'dict.get(key, default)', 'dict.find(key)'],
              correct: 2,
              explanation: 'dict.get(key, default) returns the value if the key exists, or the default value if it doesn\'t. dict[key] raises a KeyError if the key is missing.',
            },
            {
              id: 'py-m5-l1-q2',
              question: 'What does dict.items() return?',
              options: ['Only the keys', 'Only the values', 'A list of (key, value) tuples', 'The number of items'],
              correct: 2,
              explanation: 'dict.items() returns a view of all (key, value) pairs as tuples. Perfect for: for key, value in dict.items(): ...',
            },
          ],
        },
      },
      {
        id: 'py-m5-l2', moduleId: 'py-m5',
        title: 'Sets & Tuples', order: 2, xpReward: 15, duration: '12 min',
        explanation: {
          title: 'Sets for Unique Values, Tuples for Fixed Data',
          content: `# Sets — Unique, Unordered Collections

A **set** is like a list but:
- **No duplicates** — automatically removes repeated items
- **Unordered** — no indexing
- Very fast for membership testing

\`\`\`python
languages = {"Python", "Java", "Python", "JavaScript", "Java"}
print(languages)   # {'Python', 'Java', 'JavaScript'} — duplicates gone!
\`\`\`

## Set Operations (like Venn diagrams!)

\`\`\`python
a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}

print(a | b)   # Union: {1,2,3,4,5,6,7,8}
print(a & b)   # Intersection: {4, 5}
print(a - b)   # Difference: {1, 2, 3}
print(a ^ b)   # Symmetric diff: {1,2,3,6,7,8}
\`\`\`

## Tuples — Immutable, Ordered

A **tuple** is like a list but **cannot be changed** after creation.

\`\`\`python
coordinates = (28.6139, 77.2090)   # Delhi lat/long
rgb_red     = (255, 0, 0)

# Access like a list
print(coordinates[0])   # 28.6139

# Cannot modify — this would raise TypeError:
# coordinates[0] = 30
\`\`\`

## When to use what?

| Type | Ordered | Mutable | Duplicates | Use for |
|------|---------|---------|------------|---------|
| List | ✅ | ✅ | ✅ | General sequences |
| Tuple | ✅ | ❌ | ✅ | Fixed data (coordinates, RGB) |
| Set | ❌ | ✅ | ❌ | Unique items, fast lookup |
| Dict | ✅ (3.7+) | ✅ | ❌ (keys) | Key-value pairs |`,
        },
        codeExample: {
          title: 'Sets and Tuples',
          language: 'python',
          code: `# Sets — removing duplicates
emails = ["rahul@a.com", "priya@b.com", "rahul@a.com", "arjun@c.com", "priya@b.com"]
unique_emails = set(emails)
print(f"Original: {len(emails)} | Unique: {len(unique_emails)}")
print(unique_emails)

# Set operations
python_students = {"Rahul", "Priya", "Arjun", "Meera"}
js_students     = {"Priya", "Meera", "Kabir", "Divya"}

both    = python_students & js_students   # intersection
either  = python_students | js_students   # union
only_py = python_students - js_students   # only python
print(f"Both:        {both}")
print(f"Either:      {either}")
print(f"Python only: {only_py}")

# Membership test (sets are very fast!)
premium_users = {"user_101", "user_205", "user_309"}
print("user_205 premium?" , "user_205" in premium_users)
print("user_999 premium?" , "user_999" in premium_users)

# Tuples — fixed data
student = ("Rahul Sharma", 21, "CSE", 8.7)   # name, age, branch, CGPA
name, age, branch, cgpa = student             # tuple unpacking
print(f"\n{name}, {age}, {branch}, CGPA: {cgpa}")

# Named tuple for clarity
from collections import namedtuple
Point = namedtuple("Point", ["x", "y"])
delhi = Point(28.6139, 77.2090)
print(f"Delhi: ({delhi.x}, {delhi.y})")`,
          explanation: `- \`set(list)\` converts a list to a set, removing all duplicates
- Set operations use \`|\` (union), \`&\` (intersection), \`-\` (difference)
- \`in\` test on a set is O(1) — much faster than list search for large collections
- Tuple unpacking: \`a, b, c = (1, 2, 3)\` — each variable gets a value
- \`namedtuple\` adds named field access to tuples for better readability`,
        },
        exercise: {
          title: 'Enrollment Analysis',
          instructions: 'Given two sets of students enrolled in Python and JavaScript courses, find: students in both courses, students in only Python, students in only JavaScript, and total unique students.',
          starterCode: `python_enrolled = {"Alice", "Bob", "Charlie", "Diana", "Eve"}
js_enrolled     = {"Charlie", "Diana", "Frank", "Grace", "Bob"}

# 1. Students in BOTH courses (intersection)
both = python_enrolled & js_enrolled
print("Both courses:", both)

# 2. Only in Python (not in JS)
only_python = python_enrolled - js_enrolled
print("Only Python:", only_python)

# 3. Only in JS (not in Python)
only_js = js_enrolled - python_enrolled
print("Only JS:", only_js)

# 4. Total unique students across both courses
total_unique = python_enrolled | js_enrolled
print("Total unique students:", len(total_unique))`,
          solutionCode: `python_enrolled = {"Alice", "Bob", "Charlie", "Diana", "Eve"}
js_enrolled     = {"Charlie", "Diana", "Frank", "Grace", "Bob"}
both        = python_enrolled & js_enrolled
only_python = python_enrolled - js_enrolled
only_js     = js_enrolled - python_enrolled
total_unique = python_enrolled | js_enrolled
print("Both courses:", both)
print("Only Python:", only_python)
print("Only JS:", only_js)
print("Total unique students:", len(total_unique))`,
          hints: [
            '💡 Intersection (both): set1 & set2',
            '💡 Difference (only first): set1 - set2',
            '💡 Union (all unique): set1 | set2',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'py-m5-l2-q1',
              question: 'What happens when you add a duplicate item to a set?',
              options: ['An error is raised', 'The set stores it twice', 'The duplicate is silently ignored', 'The original is replaced'],
              correct: 2,
              explanation: 'Sets automatically maintain uniqueness. Adding a duplicate item is silently ignored — the set size does not increase.',
            },
            {
              id: 'py-m5-l2-q2',
              question: 'What is the key difference between a list and a tuple?',
              options: [
                'Tuples use () and lists use []',
                'Tuples are immutable (cannot be changed); lists are mutable',
                'Lists are faster than tuples',
                'Tuples can only store numbers',
              ],
              correct: 1,
              explanation: 'The fundamental difference is mutability. Tuples are immutable — once created, their contents cannot be changed. Lists are mutable — you can add, remove, and modify items.',
            },
          ],
        },
      },
      {
        id: 'py-m5-l3', moduleId: 'py-m5',
        title: 'String Methods & Formatting', order: 3, xpReward: 20, duration: '14 min',
        explanation: {
          title: 'Mastering Python Strings',
          content: `# Python Strings In-Depth

Strings are immutable sequences of characters. Python has dozens of built-in string methods.

## Common String Methods

\`\`\`python
text = "  Hello, Python World!  "

text.strip()          # "Hello, Python World!" — removes whitespace
text.lower()          # "  hello, python world!  "
text.upper()          # "  HELLO, PYTHON WORLD!  "
text.title()          # "  Hello, Python World!  "
text.replace("Python", "CodeGuru")   # "  Hello, CodeGuru World!  "
text.split(",")       # ["  Hello", " Python World!  "]
",".join(["a","b","c"])  # "a,b,c"
\`\`\`

## Checking String Content

\`\`\`python
"hello".startswith("hel")   # True
"hello".endswith("llo")     # True
"hello".find("ll")          # 2 (index)
"hello world".count("l")    # 3
"12345".isdigit()            # True
"hello".isalpha()            # True
\`\`\`

## f-Strings with Formatting

\`\`\`python
pi    = 3.14159
price = 1999.5
name  = "Python"

print(f"{pi:.2f}")          # 3.14 (2 decimal places)
print(f"{price:,.2f}")      # 1,999.50 (comma separator)
print(f"{name:>10}")        # "    Python" (right-align in 10 chars)
print(f"{name:<10}")        # "Python    " (left-align)
print(f"{name:^10}")        # "  Python  " (center)
print(f"{42:05d}")          # "00042" (zero-padded to 5 digits)
\`\`\`

## Multi-line Strings

\`\`\`python
message = """
Dear Rahul,

Your Python course is complete.
Congratulations!
"""
print(message)
\`\`\``,
        },
        codeExample: {
          title: 'String Processing',
          language: 'python',
          code: `# Cleaning and processing user input
raw_input = "  priya.sharma@GMAIL.COM  "
cleaned   = raw_input.strip().lower()
print(f"Cleaned: '{cleaned}'")

# Extracting parts of an email
parts    = cleaned.split("@")
username = parts[0]
domain   = parts[1]
print(f"Username: {username}, Domain: {domain}")

# String validation
phone = "9876543210"
print(f"Valid phone: {phone.isdigit() and len(phone) == 10}")

# Formatted report
courses = [
    ("Python",     1200, 92.5),
    ("JavaScript",  980, 88.3),
    ("HTML/CSS",    750, 95.1),
    ("Java",        650, 87.7),
]

print("\n" + "="*45)
print(f"{'Course':<15} {'Students':>10} {'Rating':>8}")
print("="*45)
for name, students, rating in courses:
    print(f"{name:<15} {students:>10,} {rating:>7.1f}%")
print("="*45)
total = sum(s for _, s, _ in courses)
print(f"{'TOTAL':<15} {total:>10,}")

# String manipulation
sentence = "the quick brown fox jumps over the lazy dog"
words = sentence.split()
word_lengths = {word: len(word) for word in words}
longest = max(word_lengths, key=word_lengths.get)
print(f"\nLongest word: '{longest}' ({word_lengths[longest]} chars)")
print(f"Unique words: {len(set(words))}")`,
          explanation: `- \`.strip()\` removes leading/trailing whitespace; \`.strip("x")\` removes specific chars
- \`.split(separator)\` splits into a list; \`separator.join(list)\` does the reverse
- Format specifiers: \`:<15\` left-align in 15 chars, \`:>10\` right-align, \`:,\` add commas
- \`:.2f\` formats a float to 2 decimal places
- Triple-quoted strings preserve newlines and can span multiple lines`,
        },
        exercise: {
          title: 'Password Strength Checker',
          instructions: 'Write a function check_password_strength(password) that returns "Weak", "Medium", or "Strong" based on: Weak = less than 8 chars. Medium = 8+ chars but missing uppercase, lowercase, or digit. Strong = 8+ chars with uppercase, lowercase, AND digit.',
          starterCode: `def check_password_strength(password):
    has_upper  = any(c.isupper() for c in password)
    has_lower  = any(c.islower() for c in password)
    has_digit  = any(c.isdigit() for c in password)
    length_ok  = len(password) >= 8
    
    # Implement the logic here:
    # Weak: length < 8
    # Medium: length >= 8 but not all three (upper, lower, digit) present
    # Strong: length >= 8 AND upper AND lower AND digit
    pass

# Tests
test_passwords = ["abc", "password", "Password1", "Pr1ya2024"]
for p in test_passwords:
    print(f"'{p}': {check_password_strength(p)}")`,
          solutionCode: `def check_password_strength(password):
    has_upper = any(c.isupper() for c in password)
    has_lower = any(c.islower() for c in password)
    has_digit = any(c.isdigit() for c in password)
    length_ok = len(password) >= 8
    if not length_ok:
        return "Weak"
    elif has_upper and has_lower and has_digit:
        return "Strong"
    else:
        return "Medium"

test_passwords = ["abc", "password", "Password1", "Pr1ya2024"]
for p in test_passwords:
    print(f"'{p}': {check_password_strength(p)}")`,
          hints: [
            '💡 any(c.isupper() for c in password) checks if ANY character is uppercase',
            '💡 Check length first with len(password) >= 8',
            '💡 Strong = length_ok AND has_upper AND has_lower AND has_digit',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'py-m5-l3-q1',
              question: 'What does "hello world".split() return?',
              options: ['"hello", "world"', '["hello", "world"]', '("hello", "world")', 'h,e,l,l,o, ,w,o,r,l,d'],
              correct: 1,
              explanation: '.split() with no argument splits on any whitespace and returns a list: ["hello", "world"].',
            },
            {
              id: 'py-m5-l3-q2',
              question: 'What does f"{3.14159:.2f}" produce?',
              options: ['3.14159', '3.14', '3.1', '3'],
              correct: 1,
              explanation: ':.2f in an f-string formats a float to exactly 2 decimal places: "3.14".',
            },
          ],
        },
      },
    ],
  },

  // ════════════════════════════════════════════════
  //  MODULE 6 — Object-Oriented Programming
  // ════════════════════════════════════════════════
  {
    id:          'py-m6',
    courseId:    'python',
    title:       'Object-Oriented Programming',
    description: 'Think in objects. Learn classes, inheritance, and encapsulation — the foundation of large Python projects.',
    level:       'beginner',
    order:       6,
    icon:        '🏛️',
    xpReward:    160,
    locked:      true,
    lessons: [
      {
        id: 'py-m6-l1', moduleId: 'py-m6',
        title: 'Classes & Objects', order: 1, xpReward: 20, duration: '14 min',
        explanation: {
          title: 'Blueprint and Instances',
          content: `# Classes & Objects

**OOP (Object-Oriented Programming)** models the real world using objects that have **attributes** (data) and **methods** (behaviour).

A **class** is the blueprint. An **object** is the thing created from that blueprint.

\`\`\`
Class: Car  →  Objects: my_car, your_car, taxi
\`\`\`

## Defining a Class

\`\`\`python
class Student:
    def __init__(self, name, age, course):
        # __init__ runs automatically when you create an object
        self.name   = name    # instance attribute
        self.age    = age
        self.course = course
        self.marks  = []       # starts empty

    def add_mark(self, mark):
        self.marks.append(mark)

    def average(self):
        if not self.marks:
            return 0
        return sum(self.marks) / len(self.marks)

    def __str__(self):
        # Called when you print() the object
        return f"Student({self.name}, {self.course})"
\`\`\`

## Creating Objects (Instances)

\`\`\`python
s1 = Student("Rahul",  21, "Python")
s2 = Student("Priya",  20, "JavaScript")

s1.add_mark(85)
s1.add_mark(92)
print(s1.average())    # 88.5
print(s1)              # Student(Rahul, Python)
print(s1.name)         # Rahul
\`\`\`

## self — the object's reference to itself

Every method receives \`self\` as the first parameter. You never pass it yourself — Python does it automatically.`,
        },
        codeExample: {
          title: 'Building a BankAccount Class',
          language: 'python',
          code: `class BankAccount:
    """A simple bank account class."""
    
    bank_name = "CodeGuru Bank"   # class attribute (shared by all)

    def __init__(self, owner, balance=0):
        self.owner   = owner          # instance attributes
        self.balance = balance
        self.transactions = []

    def deposit(self, amount):
        if amount <= 0:
            return "Amount must be positive"
        self.balance += amount
        self.transactions.append(f"+{amount}")
        return f"Deposited ₹{amount}. Balance: ₹{self.balance}"

    def withdraw(self, amount):
        if amount > self.balance:
            return "Insufficient funds!"
        self.balance -= amount
        self.transactions.append(f"-{amount}")
        return f"Withdrawn ₹{amount}. Balance: ₹{self.balance}"

    def get_statement(self):
        print(f"\n--- {self.bank_name} Statement ---")
        print(f"Account owner: {self.owner}")
        print(f"Transactions:  {', '.join(self.transactions)}")
        print(f"Balance:       ₹{self.balance}")

    def __str__(self):
        return f"Account({self.owner}: ₹{self.balance})"

# Create accounts
acc1 = BankAccount("Rahul", 1000)
acc2 = BankAccount("Priya")

print(acc1.deposit(500))
print(acc1.withdraw(200))
print(acc1.withdraw(2000))  # error case
print(acc2.deposit(3000))
print(acc2.withdraw(500))

acc1.get_statement()
print(acc2)`,
          explanation: `- \`__init__\` is the constructor — runs when you create an instance
- \`self.attribute\` creates instance attributes unique to each object
- Class attributes (like bank_name) are shared by ALL instances
- \`__str__\` controls what \`print(object)\` displays — always define it!
- Each method must have \`self\` as the first parameter`,
        },
        exercise: {
          title: 'Build a Student Management System',
          instructions: 'Create a Classroom class that holds a list of Student objects (name and marks list). Add methods: add_student(name), add_mark(name, mark), get_topper(), and print_report() that shows all students with averages.',
          starterCode: `class Student:
    def __init__(self, name):
        self.name  = name
        self.marks = []
    
    def average(self):
        return sum(self.marks) / len(self.marks) if self.marks else 0

class Classroom:
    def __init__(self):
        self.students = []
    
    def add_student(self, name):
        # Create a Student object and add to self.students
        pass
    
    def add_mark(self, name, mark):
        # Find student by name and add mark
        for s in self.students:
            if s.name == name:
                s.marks.append(mark)
                return
    
    def get_topper(self):
        # Return the student with highest average
        pass
    
    def print_report(self):
        # Print all students and their averages
        pass

# Test
room = Classroom()
room.add_student("Alice")
room.add_student("Bob")
room.add_mark("Alice", 88)
room.add_mark("Alice", 92)
room.add_mark("Bob", 75)
room.add_mark("Bob", 85)
room.print_report()
topper = room.get_topper()
print(f"Topper: {topper.name} ({topper.average():.1f})")`,
          solutionCode: `class Student:
    def __init__(self, name):
        self.name  = name
        self.marks = []
    def average(self):
        return sum(self.marks) / len(self.marks) if self.marks else 0

class Classroom:
    def __init__(self):
        self.students = []
    def add_student(self, name):
        self.students.append(Student(name))
    def add_mark(self, name, mark):
        for s in self.students:
            if s.name == name:
                s.marks.append(mark)
                return
    def get_topper(self):
        return max(self.students, key=lambda s: s.average())
    def print_report(self):
        for s in self.students:
            print(f"{s.name}: avg {s.average():.1f}")

room = Classroom()
room.add_student("Alice")
room.add_student("Bob")
room.add_mark("Alice", 88)
room.add_mark("Alice", 92)
room.add_mark("Bob", 75)
room.add_mark("Bob", 85)
room.print_report()
topper = room.get_topper()
print(f"Topper: {topper.name} ({topper.average():.1f})")`,
          hints: [
            '💡 add_student: self.students.append(Student(name))',
            '💡 get_topper: use max(self.students, key=lambda s: s.average())',
            '💡 print_report: loop over self.students and print s.name and s.average()',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'py-m6-l1-q1',
              question: 'What is __init__ in a Python class?',
              options: [
                'A method to delete an object',
                'The constructor — automatically called when a new object is created',
                'A method to print the object',
                'A class variable',
              ],
              correct: 1,
              explanation: '__init__ is the initializer/constructor. Python calls it automatically whenever you create a new instance. It sets up the initial state (attributes) of the object.',
            },
            {
              id: 'py-m6-l1-q2',
              question: 'What is "self" in a Python method?',
              options: [
                'A keyword like "this" in JavaScript',
                'A reference to the current instance of the class',
                'The class itself',
                'A required parameter name — you can name it anything',
              ],
              correct: 1,
              explanation: 'self refers to the specific instance calling the method. It\'s how the method accesses and modifies the instance\'s own attributes. By convention it\'s named "self" but technically any name works.',
            },
          ],
        },
      },
      {
        id: 'py-m6-l2', moduleId: 'py-m6',
        title: 'Inheritance', order: 2, xpReward: 20, duration: '14 min',
        explanation: {
          title: 'Code Reuse with Inheritance',
          content: `# Inheritance — Building on What Exists

Inheritance allows a class (child) to inherit attributes and methods from another class (parent). It's the "is-a" relationship.

\`\`\`
Animal (parent)
├── Dog (child) — inherits from Animal
└── Cat (child) — inherits from Animal
\`\`\`

## Basic Inheritance

\`\`\`python
class Animal:
    def __init__(self, name, sound):
        self.name  = name
        self.sound = sound

    def speak(self):
        return f"{self.name} says {self.sound}"

class Dog(Animal):     # Dog inherits from Animal
    def fetch(self):
        return f"{self.name} fetches the ball!"

dog = Dog("Buddy", "Woof")
print(dog.speak())    # Works! Inherited from Animal
print(dog.fetch())    # Dog's own method
\`\`\`

## super() — calling the parent method

\`\`\`python
class Employee:
    def __init__(self, name, salary):
        self.name   = name
        self.salary = salary

class Manager(Employee):
    def __init__(self, name, salary, team_size):
        super().__init__(name, salary)   # call parent __init__
        self.team_size = team_size       # add new attribute

    def info(self):
        return f"{self.name} manages {self.team_size} people"
\`\`\`

## Method Overriding

\`\`\`python
class Shape:
    def area(self):
        return 0

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):    # overrides parent's area()
        import math
        return math.pi * self.radius ** 2
\`\`\``,
        },
        codeExample: {
          title: 'Inheritance in Action',
          language: 'python',
          code: `import math

class Shape:
    """Base class for all shapes."""
    def __init__(self, color="black"):
        self.color = color
    
    def area(self):
        return 0
    
    def perimeter(self):
        return 0
    
    def describe(self):
        return (f"{self.__class__.__name__}: "
                f"area={self.area():.2f}, "
                f"perimeter={self.perimeter():.2f}, "
                f"color={self.color}")

class Rectangle(Shape):
    def __init__(self, width, height, color="black"):
        super().__init__(color)
        self.width  = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)

class Circle(Shape):
    def __init__(self, radius, color="black"):
        super().__init__(color)
        self.radius = radius
    
    def area(self):
        return math.pi * self.radius ** 2
    
    def perimeter(self):
        return 2 * math.pi * self.radius

class Square(Rectangle):
    def __init__(self, side, color="black"):
        super().__init__(side, side, color)  # square is a rectangle!

# Create shapes
shapes = [
    Rectangle(5, 3, "red"),
    Circle(4, "blue"),
    Square(6, "green"),
]

for shape in shapes:
    print(shape.describe())

# isinstance() — check class hierarchy
print(isinstance(shapes[2], Rectangle))   # True — Square IS a Rectangle
print(isinstance(shapes[2], Shape))       # True — Square IS a Shape`,
          explanation: `- \`class Child(Parent):\` establishes inheritance
- \`super().__init__()\` calls the parent class constructor
- \`self.__class__.__name__\` returns the actual class name at runtime
- Method overriding: child's method replaces parent's when called on child
- \`isinstance(obj, Class)\` checks if obj is an instance of Class (or its parent)`,
        },
        exercise: {
          title: 'Vehicle Hierarchy',
          instructions: 'Create a Vehicle base class with make, model, year. Then create Car(Vehicle) adding num_doors, and ElectricCar(Car) adding battery_size. Each should have a describe() method that shows all relevant info.',
          starterCode: `class Vehicle:
    def __init__(self, make, model, year):
        self.make  = make
        self.model = model
        self.year  = year
    
    def describe(self):
        return f"{self.year} {self.make} {self.model}"

class Car(Vehicle):
    def __init__(self, make, model, year, num_doors):
        # Call parent __init__ using super()
        # Set num_doors
        pass
    
    def describe(self):
        # Return parent description + door info
        pass

class ElectricCar(Car):
    def __init__(self, make, model, year, num_doors, battery_size):
        # Call Car's __init__ using super()
        # Set battery_size
        pass
    
    def describe(self):
        # Return Car description + battery info
        pass

# Test
v  = Vehicle("Toyota",  "Camry",   2022)
c  = Car("Honda",       "City",    2023, 4)
e  = ElectricCar("Tesla","Model 3", 2024, 4, 75)

print(v.describe())
print(c.describe())
print(e.describe())`,
          solutionCode: `class Vehicle:
    def __init__(self, make, model, year):
        self.make = make; self.model = model; self.year = year
    def describe(self):
        return f"{self.year} {self.make} {self.model}"

class Car(Vehicle):
    def __init__(self, make, model, year, num_doors):
        super().__init__(make, model, year)
        self.num_doors = num_doors
    def describe(self):
        return super().describe() + f", {self.num_doors} doors"

class ElectricCar(Car):
    def __init__(self, make, model, year, num_doors, battery_size):
        super().__init__(make, model, year, num_doors)
        self.battery_size = battery_size
    def describe(self):
        return super().describe() + f", {self.battery_size} kWh battery"

v = Vehicle("Toyota","Camry",2022)
c = Car("Honda","City",2023,4)
e = ElectricCar("Tesla","Model 3",2024,4,75)
print(v.describe()); print(c.describe()); print(e.describe())`,
          hints: [
            '💡 super().__init__(make, model, year) passes args to Vehicle',
            '💡 In describe(), call super().describe() to get the parent\'s description',
            '💡 ElectricCar inherits from Car which inherits from Vehicle',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'py-m6-l2-q1',
              question: 'What does super() do in Python?',
              options: [
                'Creates a new parent class',
                'Refers to and calls methods of the parent class',
                'Deletes the parent class',
                'Copies all parent attributes',
              ],
              correct: 1,
              explanation: 'super() returns a proxy object that delegates method calls to the parent class. super().__init__() calls the parent\'s __init__ — essential to initialize inherited attributes.',
            },
            {
              id: 'py-m6-l2-q2',
              question: 'What is method overriding?',
              options: [
                'Deleting a parent class method',
                'A child class providing its own implementation of a method already defined in the parent',
                'Adding new methods to a class',
                'Making a method private',
              ],
              correct: 1,
              explanation: 'Method overriding is when a child class redefines a method that exists in the parent. When the method is called on the child, the child\'s version runs instead of the parent\'s.',
            },
          ],
        },
      },
      {
        id: 'py-m6-l3', moduleId: 'py-m6',
        title: 'File I/O & Error Handling', order: 3, xpReward: 25, duration: '16 min',
        explanation: {
          title: 'Reading/Writing Files and Handling Errors',
          content: `# File I/O — Working with Files

Python makes reading and writing files straightforward.

## Reading a File

\`\`\`python
# Reading entire file
with open("data.txt", "r") as f:
    content = f.read()

# Reading line by line
with open("data.txt", "r") as f:
    for line in f:
        print(line.strip())

# Reading all lines into a list
with open("data.txt", "r") as f:
    lines = f.readlines()
\`\`\`

## Writing a File

\`\`\`python
# "w" = write (overwrites existing)
with open("output.txt", "w") as f:
    f.write("Hello, File!\n")
    f.write("Second line\n")

# "a" = append (adds to existing)
with open("output.txt", "a") as f:
    f.write("Appended line\n")
\`\`\`

## The \`with\` statement (context manager)

Always use \`with open()\` — it automatically closes the file even if an error occurs.

## Error Handling — try/except

\`\`\`python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
except (TypeError, ValueError) as e:
    print(f"Type or value error: {e}")
except Exception as e:        # catches any exception
    print(f"Unexpected error: {e}")
else:
    print("No error occurred!")  # runs if no exception
finally:
    print("This always runs!")   # cleanup code
\`\`\`

## Common Exception Types

| Exception | Cause |
|-----------|-------|
| \`ValueError\` | Wrong value type (e.g., int("abc")) |
| \`TypeError\` | Wrong type (e.g., "a" + 1) |
| \`FileNotFoundError\` | File doesn't exist |
| \`ZeroDivisionError\` | Division by zero |
| \`KeyError\` | Missing dictionary key |
| \`IndexError\` | List index out of range |`,
        },
        codeExample: {
          title: 'File I/O and Error Handling',
          language: 'python',
          code: `import os

# --- Writing data to a file ---
students = [
    ("Rahul",  88, "Python"),
    ("Priya",  92, "JavaScript"),
    ("Arjun",  75, "HTML/CSS"),
]

with open("students.txt", "w") as f:
    f.write("NAME,SCORE,COURSE\n")
    for name, score, course in students:
        f.write(f"{name},{score},{course}\n")
print("Written students.txt")

# --- Reading it back ---
with open("students.txt", "r") as f:
    lines = f.readlines()

header = lines[0].strip()
data   = [line.strip().split(",") for line in lines[1:]]
print(f"\nHeader: {header}")
print("Students:")
for row in data:
    print(f"  {row[0]}: {row[1]} ({row[2]})")

# --- Error handling ---
def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Error: Cannot divide by zero"
    except TypeError:
        return f"Error: Both inputs must be numbers"

print(f"\n10 / 2  = {safe_divide(10, 2)}")
print(f"10 / 0  = {safe_divide(10, 0)}")
print(f"10 / 'x'= {safe_divide(10, 'x')}")

# --- Safe file reading ---
def read_file_safe(filename):
    try:
        with open(filename, "r") as f:
            return f.read()
    except FileNotFoundError:
        return f"Error: {filename} not found"

print(f"\nReading students.txt: {len(read_file_safe('students.txt'))} chars")
print(read_file_safe("nonexistent.txt"))

# Cleanup
os.remove("students.txt")`,
          explanation: `- Always use \`with open()\` — the file closes automatically (even on error)
- "r" = read, "w" = write (overwrites), "a" = append, "rb"/"wb" = binary
- \`try/except\` catches specific exceptions; use multiple except blocks for different errors
- \`finally\` always runs — use for cleanup (closing connections, files)
- \`else\` after try runs only if NO exception was raised`,
        },
        exercise: {
          title: 'Grade File Processor',
          instructions: 'Write a program that: 1) Creates a grades.txt file with at least 5 student records (name,score). 2) Reads the file back. 3) Uses try/except to handle any file errors. 4) Calculates and prints the class average, highest score, and lowest score.',
          starterCode: `# Step 1: Write grade data to file
grade_data = """Alice,88
Bob,72
Charlie,95
Diana,61
Eve,84"""

with open("grades.txt", "w") as f:
    f.write(grade_data)

# Step 2: Read and process with error handling
try:
    with open("grades.txt", "r") as f:
        lines = f.readlines()
    
    students = []
    for line in lines:
        parts = line.strip().split(",")
        name  = parts[0]
        score = int(parts[1])
        students.append((name, score))
    
    # Step 3: Calculate stats
    scores  = [s[1] for s in students]
    average = sum(scores) / len(scores)
    highest = max(students, key=lambda s: s[1])
    lowest  = min(students, key=lambda s: s[1])
    
    print(f"Average score: {average:.1f}")
    print(f"Highest: {highest[0]} ({highest[1]})")
    print(f"Lowest:  {lowest[0]} ({lowest[1]})")

except FileNotFoundError:
    print("grades.txt not found!")
except ValueError as e:
    print(f"Data format error: {e}")`,
          solutionCode: `grade_data = "Alice,88\nBob,72\nCharlie,95\nDiana,61\nEve,84"
with open("grades.txt", "w") as f:
    f.write(grade_data)
try:
    with open("grades.txt", "r") as f:
        lines = f.readlines()
    students = [(l.strip().split(",")[0], int(l.strip().split(",")[1])) for l in lines]
    scores   = [s[1] for s in students]
    print(f"Average: {sum(scores)/len(scores):.1f}")
    print(f"Highest: {max(students, key=lambda s: s[1])}")
    print(f"Lowest:  {min(students, key=lambda s: s[1])}")
except FileNotFoundError:
    print("File not found!")
except ValueError as e:
    print(f"Format error: {e}")`,
          hints: [
            '💡 Use with open("grades.txt", "w") to write, "r" to read',
            '💡 line.strip().split(",") splits "Alice,88" into ["Alice", "88"]',
            '💡 max(students, key=lambda s: s[1]) finds the student with the highest score',
          ],
        },
        quiz: {
          questions: [
            {
              id: 'py-m6-l3-q1',
              question: 'Why should you use "with open()" instead of just "open()"?',
              options: [
                'with open() is faster',
                'with open() automatically closes the file even if an exception occurs',
                'open() cannot write files',
                'with open() can only read files',
              ],
              correct: 1,
              explanation: 'The "with" statement (context manager) guarantees the file is closed when the block exits, even if an exception is raised. Plain open() requires manual f.close() and fails to close if an error occurs.',
            },
            {
              id: 'py-m6-l3-q2',
              question: 'When does the "finally" block run?',
              options: [
                'Only when an exception occurs',
                'Only when no exception occurs',
                'Always — whether or not an exception occurred',
                'Only when explicitly called',
              ],
              correct: 2,
              explanation: 'The finally block ALWAYS runs regardless of whether an exception occurred. Use it for cleanup code like closing database connections or deleting temp files.',
            },
          ],
        },
      },
    ],
  },
];
