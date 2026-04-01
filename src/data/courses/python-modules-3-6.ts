// src/data/courses/python-modules-3-6.ts
// ─────────────────────────────────────────────────────────────
// Python Beginner Course — Modules 3 through 6
// Module 3: Lists & Tuples
// Module 4: Dictionaries & Sets
// Module 5: Loops
// Module 6: Functions Deep Dive
// ─────────────────────────────────────────────────────────────

import type { Module } from '@/types/course';

export const pythonModules3to6: Module[] = [

  // ════════════════════════════════════════════════
  //  MODULE 3 — Lists & Tuples
  // ════════════════════════════════════════════════
  {
    id:          'py-m3',
    courseId:    'python',
    title:       'Lists & Tuples',
    description: 'Store and manage collections of data. Lists are Python\'s most used data structure.',
    level:       'beginner',
    order:       3,
    icon:        '📋',
    xpReward:    120,
    locked:      true,
    lessons: [

      // ─── Lesson 1 ───────────────────────────────────────
      {
        id:       'py-m3-l1',
        moduleId: 'py-m3',
        title:    'Introduction to Lists',
        order:    1,
        xpReward: 15,
        duration: '12 min',

        explanation: {
          title:   'Lists — Python\'s Most Used Data Structure',
          content: `# Lists in Python

A **list** is a collection of items stored in a single variable. Think of it like a shopping list — multiple items, in order, under one name.

## Creating a List

\`\`\`python
fruits = ["apple", "banana", "mango"]
numbers = [1, 2, 3, 4, 5]
mixed = [42, "hello", True, 3.14]  # can mix types!
empty = []  # empty list
\`\`\`

## Accessing Items — Indexing

Lists are **zero-indexed** — the first item is at index 0:

\`\`\`python
fruits = ["apple", "banana", "mango"]
print(fruits[0])   # apple
print(fruits[1])   # banana
print(fruits[-1])  # mango (last item — negative indexing!)
\`\`\`

## List Properties

| Operation | Code | Result |
|-----------|------|--------|
| Length | \`len(fruits)\` | 3 |
| Add item | \`fruits.append("grape")\` | adds to end |
| Remove item | \`fruits.remove("banana")\` | removes by value |
| Check if in | \`"apple" in fruits\` | True |

## Slicing — get a portion

\`\`\`python
numbers = [10, 20, 30, 40, 50]
print(numbers[1:4])   # [20, 30, 40] — index 1 to 3
print(numbers[:3])    # [10, 20, 30] — from start to index 2
print(numbers[2:])    # [30, 40, 50] — from index 2 to end
\`\`\``,
        },

        codeExample: {
          title:    'Working with Lists',
          language: 'python',
          code: `# Create a list of students
students = ["Rahul", "Priya", "Amit", "Sneha"]

# Access items
print("First student:", students[0])
print("Last student:", students[-1])
print("Total students:", len(students))

# Add and remove
students.append("Vikram")      # add to end
print("After append:", students)

students.remove("Amit")        # remove by value
print("After remove:", students)

# Slicing
print("First two:", students[:2])
print("Last two:", students[-2:])

# Check membership
if "Priya" in students:
    print("Priya is in the class!")

# Change an item
students[0] = "Ravi"
print("After change:", students)`,
          explanation: `- Index starts at 0 — \`students[0]\` is the first student
- Negative indexing: \`students[-1]\` gets the last item from the end
- \`append()\` adds to the end, \`remove()\` deletes by value
- Slicing \`[start:end]\` gives a sublist — end index is NOT included`,
        },

        exercise: {
          title:        'Grocery List Manager',
          instructions: 'Create a grocery list with 4 items. Add 2 more items using append(). Remove one item. Print the final list and its length.',
          starterCode: `# Create your grocery list with 4 items
grocery = ["milk", "bread", "eggs", "rice"]

# Add 2 more items using append()


# Remove one item using remove()


# Print the final list
print("My grocery list:", grocery)
print("Total items:", len(grocery))`,
          solutionCode: `grocery = ["milk", "bread", "eggs", "rice"]

grocery.append("butter")
grocery.append("tomatoes")

grocery.remove("bread")

print("My grocery list:", grocery)
print("Total items:", len(grocery))`,
          hints: [
            '💡 Use grocery.append("item") to add items to the end',
            '💡 Use grocery.remove("item") to delete an item by name',
            '💡 len(grocery) gives the number of items in the list',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'py-m3-l1-q1',
              question:    'What is the index of the FIRST item in a Python list?',
              options:     ['1', '0', '-1', 'None'],
              correct:     1,
              explanation: 'Python uses zero-based indexing. The first item is at index 0, the second at 1, and so on. This is standard in most programming languages.',
            },
            {
              id:          'py-m3-l1-q2',
              question:    'What does fruits[-1] return?',
              options:     ['An error', 'The first item', 'The last item', 'None'],
              correct:     2,
              explanation: 'Negative indexing counts from the end. -1 is the last item, -2 is the second-to-last, etc. Very useful when you need the end of a list.',
            },
            {
              id:          'py-m3-l1-q3',
              question:    'Which method adds an item to the END of a list?',
              options:     ['add()', 'insert()', 'append()', 'push()'],
              correct:     2,
              explanation: 'append() adds a single item to the end of a list. It\'s the most commonly used method for growing a list.',
            },
          ],
        },
      },

      // ─── Lesson 2 ───────────────────────────────────────
      {
        id:       'py-m3-l2',
        moduleId: 'py-m3',
        title:    'List Methods & Operations',
        order:    2,
        xpReward: 15,
        duration: '12 min',

        explanation: {
          title:   'Powerful List Methods',
          content: `# List Methods

Python lists come with built-in methods that make data manipulation easy.

## Most Used List Methods

\`\`\`python
nums = [3, 1, 4, 1, 5, 9, 2, 6]

nums.sort()          # sorts in place: [1, 1, 2, 3, 4, 5, 6, 9]
nums.reverse()       # reverses in place: [9, 6, 5, 4, 3, 2, 1, 1]
nums.count(1)        # counts occurrences: 2
nums.index(5)        # finds position of value: 4
nums.insert(0, 99)   # insert 99 at index 0
nums.pop()           # removes AND returns last item
nums.pop(2)          # removes AND returns item at index 2
nums.clear()         # removes all items
\`\`\`

## Sorting

\`\`\`python
# sort() modifies the list
names = ["Zara", "Alice", "Bob"]
names.sort()                   # alphabetical: ['Alice', 'Bob', 'Zara']
names.sort(reverse=True)       # reverse: ['Zara', 'Bob', 'Alice']

# sorted() returns a NEW sorted list (original unchanged)
original = [3, 1, 2]
new_sorted = sorted(original)  # [1, 2, 3]
print(original)                # [3, 1, 2] — unchanged!
\`\`\`

## List Concatenation & Repetition

\`\`\`python
a = [1, 2, 3]
b = [4, 5, 6]
combined = a + b      # [1, 2, 3, 4, 5, 6]
repeated = a * 3      # [1, 2, 3, 1, 2, 3, 1, 2, 3]
\`\`\``,
        },

        codeExample: {
          title:    'List Methods in Action',
          language: 'python',
          code: `# Scores list
scores = [85, 92, 78, 95, 88, 72, 91]

print("Original scores:", scores)
print("Total students:", len(scores))
print("Highest score:", max(scores))
print("Lowest score:", min(scores))
print("Average score:", sum(scores) / len(scores))

# Sort scores
scores.sort()
print("Sorted (low to high):", scores)

scores.sort(reverse=True)
print("Sorted (high to low):", scores)

# Find specific score
if 95 in scores:
    pos = scores.index(95)
    print(f"Score 95 found at position {pos}")

# Add and remove
scores.append(100)
top = scores.pop(0)  # remove the highest (first after desc sort)
print("After adding 100 and removing top:", scores)

# Copy a list (important!)
backup = scores.copy()   # creates independent copy
backup.clear()
print("Original still intact:", scores)`,
          explanation: `- \`max()\`, \`min()\`, \`sum()\` are built-in functions that work on lists
- \`sort()\` modifies the list; \`sorted()\` creates a new sorted copy
- \`pop(index)\` both removes AND returns an item — useful when you need the value
- \`list.copy()\` creates an independent copy — assigning \`b = a\` does NOT copy!`,
        },

        exercise: {
          title:        'Student Score Analyzer',
          instructions: 'Given a list of 6 student scores, find the max, min, and average. Then sort the list in descending order and print the top 3 scores.',
          starterCode: `scores = [78, 92, 85, 67, 95, 81]

# Find and print max, min, and average
print("Max:", )
print("Min:", )
print("Average:", )

# Sort in descending order


# Print the top 3 scores (first 3 after sorting)
top3 = 
print("Top 3 scores:", top3)`,
          solutionCode: `scores = [78, 92, 85, 67, 95, 81]

print("Max:", max(scores))
print("Min:", min(scores))
print("Average:", sum(scores) / len(scores))

scores.sort(reverse=True)

top3 = scores[:3]
print("Top 3 scores:", top3)`,
          hints: [
            '💡 Use max(), min(), and sum() built-in functions',
            '💡 scores.sort(reverse=True) sorts highest to lowest',
            '💡 scores[:3] gives first 3 elements using slicing',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'py-m3-l2-q1',
              question:    'What is the difference between sort() and sorted()?',
              options:     [
                'No difference',
                'sort() modifies the original list; sorted() returns a new sorted list',
                'sorted() modifies the original; sort() returns a new list',
                'sort() works on numbers only; sorted() on strings',
              ],
              correct:     1,
              explanation: 'sort() is a list METHOD that modifies the list in-place and returns None. sorted() is a built-in FUNCTION that returns a new sorted list without modifying the original.',
            },
            {
              id:          'py-m3-l2-q2',
              question:    'What does pop() do when called with no argument?',
              options:     ['Removes the first item', 'Removes the last item and returns it', 'Clears the list', 'Returns the last item without removing'],
              correct:     1,
              explanation: 'pop() with no argument removes AND returns the last item. pop(i) removes and returns the item at index i.',
            },
          ],
        },
      },

      // ─── Lesson 3 ───────────────────────────────────────
      {
        id:       'py-m3-l3',
        moduleId: 'py-m3',
        title:    'Tuples & When to Use Them',
        order:    3,
        xpReward: 15,
        duration: '10 min',

        explanation: {
          title:   'Tuples — Immutable Sequences',
          content: `# Tuples in Python

A **tuple** is like a list, but **immutable** — you cannot change it after creation.

## Creating Tuples

\`\`\`python
coordinates = (10, 20)
rgb_color   = (255, 128, 0)
person      = ("Rahul", 21, "Delhi")
single      = (42,)   # note the comma! Without comma it's just (42)
\`\`\`

## Accessing Tuple Items

Same as lists — indexing and slicing:
\`\`\`python
coords = (10, 20, 30)
print(coords[0])   # 10
print(coords[-1])  # 30
print(coords[1:])  # (20, 30)
\`\`\`

## Why use Tuples instead of Lists?

| Use Tuple when | Use List when |
|----------------|---------------|
| Data won't change | Data will be modified |
| Coordinates, RGB, dates | Shopping carts, user lists |
| Dictionary keys | Collecting results |
| Returning multiple values | Building a collection |

## Tuple Unpacking — very Pythonic!

\`\`\`python
person = ("Priya", 22, "Mumbai")
name, age, city = person     # unpack all three

# Useful for functions that return multiple values
def min_max(numbers):
    return min(numbers), max(numbers)

low, high = min_max([3, 1, 4, 1, 5])
print(low, high)   # 1 5
\`\`\``,
        },

        codeExample: {
          title:    'Tuples in Practice',
          language: 'python',
          code: `# Tuple for fixed data — GPS coordinates
location = (28.6139, 77.2090)  # New Delhi
print(f"Latitude: {location[0]}, Longitude: {location[1]}")

# Tuple unpacking
lat, lon = location
print(f"Delhi is at {lat}°N, {lon}°E")

# RGB color as tuple
red   = (255, 0, 0)
green = (0, 255, 0)
blue  = (0, 0, 255)

def describe_color(rgb):
    r, g, b = rgb   # unpack
    return f"RGB({r}, {g}, {b})"

print(describe_color(red))
print(describe_color(green))

# Function returning multiple values as tuple
def student_stats(marks):
    return min(marks), max(marks), sum(marks) // len(marks)

marks = [78, 92, 85, 67, 95]
low, high, avg = student_stats(marks)
print(f"Lowest: {low}, Highest: {high}, Average: {avg}")

# Tuple vs List — try to change (will cause error)
coords = (10, 20)
try:
    coords[0] = 99   # This will fail!
except TypeError as e:
    print(f"Cannot change tuple: {e}")`,
          explanation: `- Tuples use \`()\` instead of \`[]\`
- They're immutable — attempting to change causes TypeError
- Tuple unpacking (\`a, b = (1, 2)\`) is a powerful Python pattern
- Functions can return multiple values as a tuple`,
        },

        exercise: {
          title:        'Student Profile with Tuple',
          instructions: 'Create a tuple for a student profile (name, age, city, gpa). Unpack it into separate variables. Write a function that takes a student tuple and returns a formatted profile string.',
          starterCode: `# Create a student tuple
student = ("Priya Sharma", 20, "Bangalore", 3.8)

# Unpack the tuple into 4 variables
name, age, city, gpa = student

# Print each variable
print("Name:", name)
print("Age:", age)

# Write a function that formats a student profile
def format_profile(student_tuple):
    name, age, city, gpa = student_tuple
    return f"{name}, {age} years old, from {city}. GPA: {gpa}"

print(format_profile(student))`,
          solutionCode: `student = ("Priya Sharma", 20, "Bangalore", 3.8)

name, age, city, gpa = student

print("Name:", name)
print("Age:", age)
print("City:", city)
print("GPA:", gpa)

def format_profile(student_tuple):
    name, age, city, gpa = student_tuple
    return f"{name}, {age} years old, from {city}. GPA: {gpa}"

print(format_profile(student))`,
          hints: [
            '💡 Unpack: name, age, city, gpa = student — one line, four variables',
            '💡 Access with index: student[0] is name, student[3] is gpa',
            '💡 f-strings make formatting easy: f"{name} from {city}"',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'py-m3-l3-q1',
              question:    'What makes tuples different from lists?',
              options:     [
                'Tuples can only hold numbers',
                'Tuples are immutable — cannot be changed after creation',
                'Tuples use square brackets',
                'Tuples can only hold 2 items',
              ],
              correct:     1,
              explanation: 'The key difference is immutability. Once a tuple is created, its contents cannot be changed. This makes tuples safer for data that should never be modified.',
            },
            {
              id:          'py-m3-l3-q2',
              question:    'What is tuple unpacking?',
              options:     [
                'Deleting a tuple',
                'Converting a tuple to a list',
                'Assigning each element of a tuple to a separate variable in one line',
                'Sorting the tuple',
              ],
              correct:     2,
              explanation: 'Tuple unpacking (a, b, c = my_tuple) assigns each element to a variable. It\'s a very clean Python pattern especially useful when a function returns multiple values.',
            },
          ],
        },
      },
    ],
  },

  // ════════════════════════════════════════════════
  //  MODULE 4 — Dictionaries & Sets
  // ════════════════════════════════════════════════
  {
    id:          'py-m4',
    courseId:    'python',
    title:       'Dictionaries & Sets',
    description: 'Store key-value data with dictionaries — Python\'s most powerful data structure.',
    level:       'beginner',
    order:       4,
    icon:        '🔑',
    xpReward:    130,
    locked:      true,
    lessons: [

      {
        id:       'py-m4-l1',
        moduleId: 'py-m4',
        title:    'Dictionaries — Key-Value Pairs',
        order:    1,
        xpReward: 15,
        duration: '12 min',

        explanation: {
          title:   'Dictionaries — Look Things Up by Name',
          content: `# Dictionaries in Python

A **dictionary** stores data as **key-value pairs** — like a real dictionary where you look up a word (key) to find its meaning (value).

## Creating a Dictionary

\`\`\`python
student = {
    "name":   "Rahul",
    "age":    21,
    "city":   "Delhi",
    "grade":  "A"
}
\`\`\`

## Accessing Values

\`\`\`python
print(student["name"])        # Rahul
print(student.get("age"))     # 21
print(student.get("phone", "N/A"))  # N/A (default if key missing)
\`\`\`

## Adding & Updating

\`\`\`python
student["email"] = "rahul@email.com"  # add new key
student["age"]   = 22                 # update existing key
\`\`\`

## Removing

\`\`\`python
del student["grade"]              # delete a key
phone = student.pop("email", None)  # remove & return value
\`\`\`

## Useful Methods

\`\`\`python
student.keys()    # all keys
student.values()  # all values
student.items()   # all key-value pairs as tuples
"name" in student # True — check if key exists
\`\`\``,
        },

        codeExample: {
          title:    'Dictionary Operations',
          language: 'python',
          code: `# Student record dictionary
student = {
    "name":    "Priya Sharma",
    "age":     20,
    "courses": ["Python", "Math", "English"],
    "gpa":     3.8,
    "active":  True
}

# Access values
print("Name:", student["name"])
print("GPA:", student["gpa"])
print("Courses:", student["courses"])

# Safe access with get()
print("Phone:", student.get("phone", "Not provided"))

# Add a new field
student["email"] = "priya@example.com"

# Update existing field
student["gpa"] = 3.9

# Iterate over items
print("\n--- Student Profile ---")
for key, value in student.items():
    print(f"  {key}: {value}")

# Check if key exists
if "email" in student:
    print(f"\nEmail found: {student['email']}")

# Dictionary of dictionaries
classroom = {
    "student1": {"name": "Rahul", "score": 85},
    "student2": {"name": "Amit",  "score": 92},
}
print("\nClassroom:", classroom["student1"]["name"])`,
          explanation: `- Keys can be strings, numbers, or tuples — must be unique and immutable
- \`dict.get("key", default)\` is safer than \`dict["key"]\` — won't crash if key missing
- \`dict.items()\` returns key-value pairs — perfect for looping
- Dictionaries can be nested — values can be other dictionaries`,
        },

        exercise: {
          title:        'Contact Book',
          instructions: 'Create a contact dictionary with 3 contacts. Each contact has name, phone, and city. Print all contacts. Add a new contact. Update one phone number.',
          starterCode: `# Create a contacts dictionary
contacts = {
    "rahul": {"name": "Rahul Sharma", "phone": "9876543210", "city": "Delhi"},
    "priya": {"name": "Priya Singh",  "phone": "9123456789", "city": "Mumbai"},
    "amit":  {"name": "Amit Kumar",   "phone": "9012345678", "city": "Bangalore"}
}

# Print all contacts
for contact_id, info in contacts.items():
    print(f"{info['name']} - {info['phone']} - {info['city']}")

# Add a new contact named "sneha"


# Update Rahul's phone to "9999999999"


print("\nUpdated contacts:")
for cid, info in contacts.items():
    print(f"{info['name']}: {info['phone']}")`,
          solutionCode: `contacts = {
    "rahul": {"name": "Rahul Sharma", "phone": "9876543210", "city": "Delhi"},
    "priya": {"name": "Priya Singh",  "phone": "9123456789", "city": "Mumbai"},
    "amit":  {"name": "Amit Kumar",   "phone": "9012345678", "city": "Bangalore"}
}

for contact_id, info in contacts.items():
    print(f"{info['name']} - {info['phone']} - {info['city']}")

contacts["sneha"] = {"name": "Sneha Patel", "phone": "9011223344", "city": "Chennai"}
contacts["rahul"]["phone"] = "9999999999"

print("\nUpdated contacts:")
for cid, info in contacts.items():
    print(f"{info['name']}: {info['phone']}")`,
          hints: [
            '💡 Add contact: contacts["sneha"] = {"name": "...", "phone": "...", "city": "..."}',
            '💡 Update nested value: contacts["rahul"]["phone"] = "new_number"',
            '💡 Use .items() to iterate: for id, info in contacts.items()',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'py-m4-l1-q1',
              question:    'How do you safely access a dictionary key that might not exist?',
              options:     ['dict[key]', 'dict.get(key, default)', 'dict.find(key)', 'dict.search(key)'],
              correct:     1,
              explanation: 'dict.get(key, default) safely returns the default value if the key doesn\'t exist, instead of raising a KeyError like dict[key] would.',
            },
            {
              id:          'py-m4-l1-q2',
              question:    'Which method returns all key-value pairs as tuples?',
              options:     ['dict.keys()', 'dict.values()', 'dict.pairs()', 'dict.items()'],
              correct:     3,
              explanation: 'dict.items() returns tuples of (key, value) pairs. It\'s used in for loops: for key, value in dict.items().',
            },
          ],
        },
      },

      {
        id:       'py-m4-l2',
        moduleId: 'py-m4',
        title:    'Dictionary Methods & Comprehensions',
        order:    2,
        xpReward: 20,
        duration: '14 min',

        explanation: {
          title:   'Advanced Dictionary Techniques',
          content: `# Dictionary Methods & Comprehensions

## Merging Dictionaries

\`\`\`python
default_settings = {"theme": "dark", "lang": "en", "font": 14}
user_settings    = {"theme": "light", "font": 16}

# Python 3.9+ merge operator
merged = default_settings | user_settings
# user_settings values win: {"theme": "light", "lang": "en", "font": 16}

# Or with update()
combined = default_settings.copy()
combined.update(user_settings)
\`\`\`

## Dictionary Comprehension

Just like list comprehensions but creates dictionaries:

\`\`\`python
# Create a squares dictionary
squares = {n: n**2 for n in range(1, 6)}
# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Filter while creating
even_squares = {n: n**2 for n in range(1, 11) if n % 2 == 0}
# {2: 4, 4: 16, 6: 36, 8: 64, 10: 100}

# Invert a dictionary (swap keys and values)
original = {"a": 1, "b": 2, "c": 3}
inverted = {v: k for k, v in original.items()}
# {1: 'a', 2: 'b', 3: 'c'}
\`\`\`

## Counting with Dictionaries

\`\`\`python
words = ["apple", "banana", "apple", "cherry", "banana", "apple"]
count = {}
for word in words:
    count[word] = count.get(word, 0) + 1
# {"apple": 3, "banana": 2, "cherry": 1}
\`\`\``,
        },

        codeExample: {
          title:    'Dictionary Comprehensions & Counting',
          language: 'python',
          code: `# Dictionary comprehension — squares
squares = {n: n**2 for n in range(1, 8)}
print("Squares:", squares)

# Filter: only even squares
even_sq = {n: n**2 for n in range(1, 11) if n % 2 == 0}
print("Even squares:", even_sq)

# Word frequency counter
text = "to be or not to be that is the question to be"
words = text.split()
frequency = {}
for word in words:
    frequency[word] = frequency.get(word, 0) + 1

print("\nWord frequencies:")
for word, count in sorted(frequency.items(), key=lambda x: x[1], reverse=True):
    print(f"  '{word}': {count}")

# Merge two dicts
defaults = {"color": "blue", "size": 12, "bold": False}
custom   = {"color": "green", "bold": True}
final    = {**defaults, **custom}   # ** unpacking syntax
print("\nMerged settings:", final)`,
          explanation: `- Dict comprehension: \`{key: value for item in iterable}\`
- \`count.get(word, 0) + 1\` is the classic "count occurrences" pattern
- \`**dict\` unpacks a dictionary — merging with \`{**a, **b}\` is very Pythonic
- \`sorted(..., key=lambda x: x[1])\` sorts by value — useful for rankings`,
        },

        exercise: {
          title:        'Grade Analyzer',
          instructions: 'Given a list of (student, score) tuples, use a dict comprehension to create a grades dictionary. Then create a second dict showing letter grades (A: 90+, B: 80+, C: 70+, D: below 70).',
          starterCode: `results = [
    ("Rahul", 88), ("Priya", 95), ("Amit", 73),
    ("Sneha", 91), ("Vikram", 65), ("Nisha", 82)
]

# Create scores dict using dict comprehension
scores = {name: score for name, score in results}
print("Scores:", scores)

# Create letter grades dict
# Hint: use a function to determine letter grade
def get_grade(score):
    if score >= 90:
        return "A"
    # add more conditions...

letter_grades = {name: get_grade(score) for name, score in scores.items()}
print("Letter grades:", letter_grades)`,
          solutionCode: `results = [
    ("Rahul", 88), ("Priya", 95), ("Amit", 73),
    ("Sneha", 91), ("Vikram", 65), ("Nisha", 82)
]

scores = {name: score for name, score in results}
print("Scores:", scores)

def get_grade(score):
    if score >= 90:   return "A"
    elif score >= 80: return "B"
    elif score >= 70: return "C"
    else:             return "D"

letter_grades = {name: get_grade(score) for name, score in scores.items()}
print("Letter grades:", letter_grades)`,
          hints: [
            '💡 Dict comprehension from list of tuples: {name: score for name, score in results}',
            '💡 Chain .items() with comprehension: {name: get_grade(score) for name, score in scores.items()}',
            '💡 Complete the get_grade function with elif for B and C',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'py-m4-l2-q1',
              question:    'What does {n: n**2 for n in range(5)} create?',
              options:     [
                'A list of squares',
                'A dictionary where keys are 0-4 and values are their squares',
                'A set of squares',
                'A tuple of squares',
              ],
              correct:     1,
              explanation: 'This is a dictionary comprehension. It creates {0:0, 1:1, 2:4, 3:9, 4:16} — each number mapped to its square.',
            },
            {
              id:          'py-m4-l2-q2',
              question:    'What is the classic pattern to count word occurrences in a dictionary?',
              options:     [
                'count[word] = count[word] + 1',
                'count[word] = count.get(word, 0) + 1',
                'count.add(word)',
                'count.increment(word)',
              ],
              correct:     1,
              explanation: 'count.get(word, 0) + 1 handles both new words (returns 0 + 1 = 1) and existing words (returns current_count + 1). It avoids a KeyError when the word hasn\'t been seen before.',
            },
          ],
        },
      },

      {
        id:       'py-m4-l3',
        moduleId: 'py-m4',
        title:    'Sets — Unique Collections',
        order:    3,
        xpReward: 15,
        duration: '10 min',

        explanation: {
          title:   'Sets — No Duplicates Allowed',
          content: `# Sets in Python

A **set** is an unordered collection of **unique** items. Duplicates are automatically removed.

## Creating Sets

\`\`\`python
fruits  = {"apple", "banana", "mango"}
numbers = {1, 2, 3, 2, 1}   # duplicates removed: {1, 2, 3}
empty   = set()              # NOT {} — that creates an empty dict!
\`\`\`

## Set Operations — Math-like!

\`\`\`python
a = {1, 2, 3, 4, 5}
b = {3, 4, 5, 6, 7}

a | b   # Union: {1, 2, 3, 4, 5, 6, 7} — all items
a & b   # Intersection: {3, 4, 5} — items in BOTH
a - b   # Difference: {1, 2} — in a but NOT in b
a ^ b   # Symmetric diff: {1, 2, 6, 7} — in one but not both
\`\`\`

## Common Use Cases

\`\`\`python
# Remove duplicates from a list
emails = ["a@b.com", "c@d.com", "a@b.com", "e@f.com"]
unique_emails = list(set(emails))

# Check membership (very fast)
valid_colors = {"red", "green", "blue"}
if "red" in valid_colors:
    print("Valid color!")

# Find common items between two lists
list1 = [1, 2, 3, 4]
list2 = [3, 4, 5, 6]
common = set(list1) & set(list2)  # {3, 4}
\`\`\``,
        },

        codeExample: {
          title:    'Sets for Real Problems',
          language: 'python',
          code: `# Remove duplicates instantly
votes = ["Alice", "Bob", "Alice", "Charlie", "Bob", "Alice"]
unique_voters = set(votes)
print("Unique voters:", unique_voters)
print("Duplicates found:", len(votes) - len(unique_voters))

# Set operations
python_students  = {"Rahul", "Priya", "Amit", "Sneha"}
js_students      = {"Priya", "Vikram", "Sneha", "Nisha"}

both_courses = python_students & js_students
print("\nStudents in BOTH courses:", both_courses)

either_course = python_students | js_students
print("Students in ANY course:", either_course)

only_python = python_students - js_students
print("Only Python students:", only_python)

# Fast membership testing
valid_plans = {"starter", "pro", "multi", "bundle"}
user_plan = "pro"
if user_plan in valid_plans:
    print(f"\nPlan '{user_plan}' is valid!")

# Convert between list and set
numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
print("\nOriginal:", numbers)
print("Unique sorted:", sorted(set(numbers)))`,
          explanation: `- Sets are unordered — you can't use indexing like \`set[0]\`
- \`set.add(item)\` adds one item; \`set.update(other)\` adds multiple
- \`set.discard(item)\` removes without error if missing; \`remove()\` raises error
- \`in\` check is MUCH faster for sets than lists (O(1) vs O(n))`,
        },

        exercise: {
          title:        'Course Enrollment Analyzer',
          instructions: 'Given two sets of students enrolled in Python and JavaScript courses, find: students in both courses, students in only one course, and the total unique students.',
          starterCode: `python_class = {"Rahul", "Priya", "Amit", "Sneha", "Karan"}
js_class     = {"Priya", "Sneha", "Vikram", "Nisha", "Karan"}

# Students enrolled in BOTH courses (intersection)
both = 
print("In both courses:", both)

# Students in only one course (symmetric difference)
only_one = 
print("In only one course:", only_one)

# Total unique students across both classes (union)
total = 
print("Total unique students:", len(total))`,
          solutionCode: `python_class = {"Rahul", "Priya", "Amit", "Sneha", "Karan"}
js_class     = {"Priya", "Sneha", "Vikram", "Nisha", "Karan"}

both = python_class & js_class
print("In both courses:", both)

only_one = python_class ^ js_class
print("In only one course:", only_one)

total = python_class | js_class
print("Total unique students:", len(total))`,
          hints: [
            '💡 & is intersection — items that appear in BOTH sets',
            '💡 | is union — all unique items from BOTH sets combined',
            '💡 ^ is symmetric difference — items in one set but NOT the other',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'py-m4-l3-q1',
              question:    'What happens when you add duplicate values to a Python set?',
              options:     ['Error is raised', 'Duplicates are stored', 'Duplicates are silently ignored', 'The set becomes a list'],
              correct:     2,
              explanation: 'Sets automatically ignore duplicates. Adding an existing value to a set does nothing — the set stays unchanged. This is the core property that makes sets useful.',
            },
            {
              id:          'py-m4-l3-q2',
              question:    'Which operator finds items that exist in BOTH sets?',
              options:     ['| (pipe)', '& (ampersand)', '- (minus)', '^ (caret)'],
              correct:     1,
              explanation: '& is the intersection operator — it returns only items that appear in both sets. | is union (all items), - is difference (in first but not second), ^ is symmetric difference.',
            },
          ],
        },
      },
    ],
  },

  // ════════════════════════════════════════════════
  //  MODULE 5 — Loops
  // ════════════════════════════════════════════════
  {
    id:          'py-m5',
    courseId:    'python',
    title:       'Loops',
    description: 'Automate repetition with for and while loops. Never write the same code twice.',
    level:       'beginner',
    order:       5,
    icon:        '🔄',
    xpReward:    130,
    locked:      true,
    lessons: [

      {
        id:       'py-m5-l1',
        moduleId: 'py-m5',
        title:    'for Loops',
        order:    1,
        xpReward: 15,
        duration: '12 min',

        explanation: {
          title:   'for Loops — Iterate Over Everything',
          content: `# for Loops in Python

A **for loop** repeats code for each item in a sequence — list, string, range, tuple, dictionary.

## Basic for Loop

\`\`\`python
fruits = ["apple", "banana", "mango"]
for fruit in fruits:
    print(fruit)
# apple
# banana
# mango
\`\`\`

## range() — loop a number of times

\`\`\`python
for i in range(5):         # 0, 1, 2, 3, 4
    print(i)

for i in range(1, 6):      # 1, 2, 3, 4, 5
    print(i)

for i in range(0, 10, 2):  # 0, 2, 4, 6, 8 (step of 2)
    print(i)
\`\`\`

## enumerate() — get index AND value

\`\`\`python
students = ["Rahul", "Priya", "Amit"]
for i, name in enumerate(students):
    print(f"{i+1}. {name}")
# 1. Rahul
# 2. Priya
# 3. Amit
\`\`\`

## Looping over a dictionary

\`\`\`python
scores = {"Rahul": 85, "Priya": 92, "Amit": 78}
for name, score in scores.items():
    print(f"{name}: {score}")
\`\`\``,
        },

        codeExample: {
          title:    'for Loop Patterns',
          language: 'python',
          code: `# Basic: loop over a list
languages = ["Python", "JavaScript", "Java", "HTML"]
print("=== Languages ===")
for lang in languages:
    print(f"  - {lang}")

# range(): count from 1 to 5
print("\n=== Countdown ===")
for i in range(5, 0, -1):
    print(i)
print("Go!")

# enumerate(): numbered list
print("\n=== Numbered List ===")
for idx, lang in enumerate(languages, start=1):
    print(f"{idx}. {lang}")

# Loop over string characters
word = "Python"
print(f"\n=== Letters in '{word}' ===")
for char in word:
    print(char, end=" ")
print()

# Accumulate with loop
numbers = [10, 25, 8, 42, 17, 33]
total = 0
for num in numbers:
    total += num
print(f"\nSum of {numbers} = {total}")
print(f"Average = {total / len(numbers):.1f}")`,
          explanation: `- \`for item in collection\` reads naturally: "for each item in collection"
- \`range(start, stop, step)\` — stop is exclusive (not included)
- \`enumerate(list, start=1)\` gives index+value pairs — start sets first index
- \`end=" "\` in print() keeps output on same line
- \`:.1f\` in f-string formats a float to 1 decimal place`,
        },

        exercise: {
          title:        'Multiplication Table',
          instructions: 'Use nested for loops to print a multiplication table for numbers 1 through 5. Each row should show: "1 × 1 = 1", "1 × 2 = 2", etc.',
          starterCode: `# Print multiplication table for 1 to 5
for i in range(1, 6):
    for j in range(1, 6):
        # Print: "i × j = result"
        print(f"{i} × {j} = {i*j}")
    print()  # blank line between tables`,
          solutionCode: `for i in range(1, 6):
    print(f"=== {i}'s Table ===")
    for j in range(1, 6):
        print(f"  {i} × {j} = {i*j}")
    print()`,
          hints: [
            '💡 Use two range() calls — outer for the table number, inner for multiplier',
            '💡 f"{i} × {j} = {i*j}" formats the output cleanly',
            '💡 print() with no arguments prints a blank line to separate tables',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'py-m5-l1-q1',
              question:    'What does range(2, 10, 3) produce?',
              options:     ['2, 3, 4, 5, 6, 7, 8, 9', '2, 5, 8', '2, 4, 6, 8, 10', '3, 6, 9'],
              correct:     1,
              explanation: 'range(start, stop, step) starts at 2, stops before 10, increments by 3: 2, 5, 8. The stop value (10) is never included.',
            },
            {
              id:          'py-m5-l1-q2',
              question:    'What does enumerate(["a", "b", "c"], start=1) return?',
              options:     [
                'Just the items: a, b, c',
                'Just the indices: 1, 2, 3',
                'Pairs: (1,"a"), (2,"b"), (3,"c")',
                'A dictionary {1:"a", 2:"b", 3:"c"}',
              ],
              correct:     2,
              explanation: 'enumerate() pairs each item with its index. With start=1, it begins counting from 1 instead of 0, producing (1,"a"), (2,"b"), (3,"c").',
            },
          ],
        },
      },

      {
        id:       'py-m5-l2',
        moduleId: 'py-m5',
        title:    'while Loops & Loop Control',
        order:    2,
        xpReward: 20,
        duration: '14 min',

        explanation: {
          title:   'while Loops & Controlling Loops',
          content: `# while Loops

A **while loop** keeps running as long as a condition is True — unlike for loops, you don't know how many times it will run.

## Basic while Loop

\`\`\`python
count = 1
while count <= 5:
    print(count)
    count += 1   # IMPORTANT: update condition variable!
# 1, 2, 3, 4, 5
\`\`\`

## ⚠️ Infinite Loop Danger!

\`\`\`python
# This NEVER stops — always have an exit condition!
while True:
    user_input = input("Type 'quit' to exit: ")
    if user_input == "quit":
        break   # exit the loop
\`\`\`

## Loop Control Keywords

\`\`\`python
for i in range(10):
    if i == 3:
        continue   # skip this iteration, go to next
    if i == 7:
        break      # exit the loop entirely
    print(i)
# Prints: 0, 1, 2, 4, 5, 6
\`\`\`

## for/while + else

\`\`\`python
for n in range(2, 10):
    for factor in range(2, n):
        if n % factor == 0:
            break
    else:
        # Only runs if loop completed WITHOUT a break
        print(f"{n} is prime")
\`\`\``,
        },

        codeExample: {
          title:    'while Loops & break/continue',
          language: 'python',
          code: `# while loop — user input simulation
print("=== Number Guessing Game Logic ===")
secret = 7
attempts = 0
guesses = [3, 9, 5, 7]   # simulating guesses

for guess in guesses:
    attempts += 1
    if guess < secret:
        print(f"Guess {guess}: Too low!")
    elif guess > secret:
        print(f"Guess {guess}: Too high!")
    else:
        print(f"Guess {guess}: Correct! in {attempts} attempts!")
        break

# continue — skip even numbers
print("\n=== Odd numbers 1-10 ===")
for i in range(1, 11):
    if i % 2 == 0:
        continue   # skip evens
    print(i, end=" ")
print()

# while with a counter
print("\n=== while countdown ===")
n = 10
while n > 0:
    print(n, end=" ")
    n -= 2   # subtract 2 each time
print("Blast off!")

# Finding first item matching condition
prices = [450, 320, 890, 150, 670, 220]
budget = 300
print(f"\n=== First item under ₹{budget} ===")
for price in prices:
    if price <= budget:
        print(f"Found: ₹{price}")
        break
else:
    print("Nothing in budget!")`,
          explanation: `- \`while\` loops need a condition that will eventually become False — otherwise infinite loop
- \`break\` immediately exits the loop
- \`continue\` skips the rest of this iteration and starts the next
- \`for...else\` — the else runs ONLY if the loop finished without hitting a break`,
        },

        exercise: {
          title:        'Prime Number Finder',
          instructions: 'Write a program that finds all prime numbers between 2 and 50. Use a for loop with a nested while/for loop to check divisibility. Use break and else to determine primality.',
          starterCode: `# Find all primes between 2 and 50
primes = []

for num in range(2, 51):
    is_prime = True
    for divisor in range(2, num):
        if num % divisor == 0:
            is_prime = False
            break
    if is_prime:
        primes.append(num)

print("Primes between 2 and 50:")
print(primes)
print(f"Count: {len(primes)}")`,
          solutionCode: `primes = []

for num in range(2, 51):
    for divisor in range(2, num):
        if num % divisor == 0:
            break
    else:
        primes.append(num)

print("Primes between 2 and 50:")
print(primes)
print(f"Count: {len(primes)}")`,
          hints: [
            '💡 A prime number is only divisible by 1 and itself',
            '💡 Check divisors from 2 to num-1 — if ANY divide evenly, it\'s not prime',
            '💡 Use for...else: the else block runs only if no break occurred (meaning no divisor was found)',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'py-m5-l2-q1',
              question:    'What does the "continue" statement do in a loop?',
              options:     [
                'Exits the loop completely',
                'Pauses the loop',
                'Skips the rest of the current iteration and moves to the next',
                'Restarts the loop from the beginning',
              ],
              correct:     2,
              explanation: 'continue skips remaining code in the current iteration and jumps to the next one. break exits the loop entirely. Neither restarts or pauses.',
            },
            {
              id:          'py-m5-l2-q2',
              question:    'When does the "else" block of a for loop run?',
              options:     [
                'When the loop encounters an error',
                'Always after the loop finishes',
                'Only when the loop exits because of a break statement',
                'Only when the loop completes without a break statement',
              ],
              correct:     3,
              explanation: 'The else block runs only if the for loop completed normally (no break). If the loop was exited by break, the else is skipped. This is useful for "search and not found" patterns.',
            },
          ],
        },
      },

      {
        id:       'py-m5-l3',
        moduleId: 'py-m5',
        title:    'List Comprehensions',
        order:    3,
        xpReward: 20,
        duration: '12 min',

        explanation: {
          title:   'List Comprehensions — Pythonic Power',
          content: `# List Comprehensions

List comprehensions are a concise, readable way to create lists. They're one of Python's most loved features.

## Basic Syntax

\`\`\`python
# Traditional for loop
squares = []
for n in range(1, 6):
    squares.append(n ** 2)

# List comprehension — same result, one line!
squares = [n ** 2 for n in range(1, 6)]
# [1, 4, 9, 16, 25]
\`\`\`

## With Condition (Filter)

\`\`\`python
# Only even numbers
evens = [n for n in range(1, 11) if n % 2 == 0]
# [2, 4, 6, 8, 10]

# Only passing scores
scores = [85, 42, 92, 37, 78, 55]
passing = [s for s in scores if s >= 60]
# [85, 92, 78]
\`\`\`

## Transforming Data

\`\`\`python
names = ["rahul", "priya", "amit"]

# Capitalize all names
capitalized = [name.capitalize() for name in names]
# ["Rahul", "Priya", "Amit"]

# Get lengths of each name
lengths = [len(name) for name in names]
# [5, 5, 4]
\`\`\`

## Nested Comprehension

\`\`\`python
matrix = [[i * j for j in range(1, 4)] for i in range(1, 4)]
# [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
\`\`\``,
        },

        codeExample: {
          title:    'List Comprehensions in Action',
          language: 'python',
          code: `# Transform: Celsius to Fahrenheit
celsius = [0, 20, 37, 100]
fahrenheit = [(c * 9/5 + 32) for c in celsius]
print("Celsius:", celsius)
print("Fahrenheit:", fahrenheit)

# Filter: students who passed (score >= 60)
student_scores = [
    ("Rahul", 85), ("Priya", 92), ("Amit", 55),
    ("Sneha", 78), ("Vikram", 45), ("Nisha", 88)
]
passed = [name for name, score in student_scores if score >= 60]
failed = [name for name, score in student_scores if score < 60]
print("\nPassed:", passed)
print("Failed:", failed)

# Create structured data
formatted = [f"{name}: {score}" for name, score in student_scores]
print("\nFormatted results:")
for line in formatted:
    print(f"  {line}")

# Flatten a nested list
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [num for row in matrix for num in row]
print("\nFlattened matrix:", flat)

# Conditional expression in comprehension
grades = ["A" if s >= 90 else "B" if s >= 80 else "C"
          for _, s in student_scores]
print("Grades:", grades)`,
          explanation: `- Comprehension syntax: \`[expression for item in iterable if condition]\`
- The \`if\` part is optional — use it to filter
- Can iterate over tuples: \`for name, score in student_scores\`
- Nested comprehension for flattening: \`for row in matrix for item in row\`
- Ternary in comprehension: \`"A" if score >= 90 else "B"\``,
        },

        exercise: {
          title:        'Data Transformation Pipeline',
          instructions: 'Given a list of product dictionaries with name and price, use list comprehensions to: 1) Get names of all products under ₹500. 2) Apply 10% discount to all prices. 3) Create formatted strings for each product.',
          starterCode: `products = [
    {"name": "Notebook", "price": 150},
    {"name": "Pen Set",  "price": 80},
    {"name": "Laptop",   "price": 45000},
    {"name": "Backpack", "price": 899},
    {"name": "Pencils",  "price": 40},
    {"name": "Headphones","price": 1299},
]

# 1. Names of products under ₹500
affordable = [p["name"] for p in products if p["price"] < 500]
print("Under ₹500:", affordable)

# 2. Apply 10% discount to all prices
discounted = [round(p["price"] * 0.9, 2) for p in products]
print("Discounted prices:", discounted)

# 3. Formatted strings: "Notebook - ₹150"
formatted = [f"{p['name']} - ₹{p['price']}" for p in products]
for item in formatted:
    print(item)`,
          solutionCode: `products = [
    {"name": "Notebook", "price": 150},
    {"name": "Pen Set",  "price": 80},
    {"name": "Laptop",   "price": 45000},
    {"name": "Backpack", "price": 899},
    {"name": "Pencils",  "price": 40},
    {"name": "Headphones","price": 1299},
]

affordable = [p["name"] for p in products if p["price"] < 500]
print("Under ₹500:", affordable)

discounted = [round(p["price"] * 0.9, 2) for p in products]
print("Discounted prices:", discounted)

formatted = [f"{p['name']} - ₹{p['price']}" for p in products]
for item in formatted:
    print(item)`,
          hints: [
            '💡 Access dict values in comprehension: p["name"] where p is each product',
            '💡 Filter condition: if p["price"] < 500',
            '💡 round(value, 2) rounds to 2 decimal places',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'py-m5-l3-q1',
              question:    'What does [x**2 for x in range(4) if x % 2 == 0] produce?',
              options:     ['[0, 4]', '[0, 1, 4, 9]', '[4, 16]', '[1, 4, 9]'],
              correct:     0,
              explanation: 'range(4) is 0,1,2,3. Filter keeps only even numbers: 0,2. Squaring gives [0, 4].',
            },
            {
              id:          'py-m5-l3-q2',
              question:    'What is the main advantage of list comprehensions over traditional for loops?',
              options:     [
                'They run faster always',
                'They are more concise and readable for simple transformations',
                'They can do things for loops cannot',
                'They use less memory',
              ],
              correct:     1,
              explanation: 'List comprehensions are more concise and often more readable for simple list creation. For complex logic, traditional loops are clearer. They may be slightly faster due to Python optimization, but readability is the primary benefit.',
            },
          ],
        },
      },
    ],
  },

  // ════════════════════════════════════════════════
  //  MODULE 6 — Functions Deep Dive
  // ════════════════════════════════════════════════
  {
    id:          'py-m6',
    courseId:    'python',
    title:       'Functions Deep Dive',
    description: 'Master Python functions — arguments, scope, lambdas, and higher-order functions.',
    level:       'beginner',
    order:       6,
    icon:        '⚙️',
    xpReward:    150,
    locked:      true,
    lessons: [

      {
        id:       'py-m6-l1',
        moduleId: 'py-m6',
        title:    'Function Arguments & Parameters',
        order:    1,
        xpReward: 20,
        duration: '14 min',

        explanation: {
          title:   'Mastering Function Arguments',
          content: `# Function Arguments in Python

Python gives you incredible flexibility in how you pass data to functions.

## Types of Arguments

**Positional** — matched by position:
\`\`\`python
def greet(name, city):
    print(f"Hello {name} from {city}!")

greet("Rahul", "Delhi")   # name=Rahul, city=Delhi
\`\`\`

**Keyword** — matched by name (order doesn't matter):
\`\`\`python
greet(city="Mumbai", name="Priya")
\`\`\`

**Default Parameters** — used when argument not provided:
\`\`\`python
def greet(name, city="India"):
    print(f"Hello {name} from {city}!")

greet("Amit")             # city defaults to "India"
greet("Sneha", "Pune")    # city overridden to "Pune"
\`\`\`

**\*args** — variable number of positional arguments:
\`\`\`python
def total(*numbers):
    return sum(numbers)

total(1, 2, 3)         # 6
total(10, 20, 30, 40)  # 100
\`\`\`

**\*\*kwargs** — variable keyword arguments (becomes a dict):
\`\`\`python
def profile(**info):
    for key, val in info.items():
        print(f"{key}: {val}")

profile(name="Rahul", age=21, city="Delhi")
\`\`\``,
        },

        codeExample: {
          title:    'All Argument Types',
          language: 'python',
          code: `# Default arguments
def create_user(name, role="student", active=True):
    return {"name": name, "role": role, "active": active}

print(create_user("Rahul"))
print(create_user("Admin", role="teacher", active=True))
print(create_user("Guest", active=False))

# *args — variable positional arguments
def calculate_total(*prices, tax_rate=0.18):
    subtotal = sum(prices)
    tax      = subtotal * tax_rate
    return subtotal + tax

print(f"\n2 items: ₹{calculate_total(100, 200):.2f}")
print(f"4 items: ₹{calculate_total(100, 200, 300, 400):.2f}")

# **kwargs — variable keyword arguments
def build_query(**filters):
    parts = [f"{k}={v}" for k, v in filters.items()]
    return "?" + "&".join(parts)

url = build_query(language="python", level="beginner", limit=10)
print(f"\nQuery: {url}")

# Combining all types
def full_function(required, *args, keyword="default", **kwargs):
    print(f"Required: {required}")
    print(f"Args: {args}")
    print(f"Keyword: {keyword}")
    print(f"Kwargs: {kwargs}")

full_function("hello", 1, 2, 3, keyword="custom", a=1, b=2)`,
          explanation: `- Default parameters must come AFTER required parameters
- \`*args\` collects extra positional args into a TUPLE
- \`**kwargs\` collects extra keyword args into a DICT
- Order rule: positional, *args, keyword-only, **kwargs`,
        },

        exercise: {
          title:        'Flexible Invoice Generator',
          instructions: 'Write a function create_invoice(customer, *items, discount=0, **extra_charges) that calculates the total price of items, applies an optional discount percentage, adds any extra charges (kwargs), and returns a formatted invoice dict.',
          starterCode: `def create_invoice(customer, *items, discount=0, **extra_charges):
    # items is a tuple of prices
    subtotal = sum(items)
    
    # Apply discount (e.g., discount=10 means 10% off)
    discount_amount = subtotal * (discount / 100)
    after_discount  = subtotal - discount_amount
    
    # Add extra charges (e.g., shipping=50, tax=45)
    total_extras = sum(extra_charges.values())
    
    total = after_discount + total_extras
    
    return {
        "customer":  customer,
        "subtotal":  subtotal,
        "discount":  discount_amount,
        "extras":    extra_charges,
        "total":     round(total, 2)
    }

# Test it
invoice = create_invoice("Rahul", 500, 300, 200, discount=10, shipping=50)
for k, v in invoice.items():
    print(f"{k}: {v}")`,
          solutionCode: `def create_invoice(customer, *items, discount=0, **extra_charges):
    subtotal        = sum(items)
    discount_amount = subtotal * (discount / 100)
    after_discount  = subtotal - discount_amount
    total_extras    = sum(extra_charges.values())
    total           = after_discount + total_extras

    return {
        "customer": customer,
        "subtotal": subtotal,
        "discount": discount_amount,
        "extras":   extra_charges,
        "total":    round(total, 2)
    }

invoice = create_invoice("Rahul", 500, 300, 200, discount=10, shipping=50)
for k, v in invoice.items():
    print(f"{k}: {v}")`,
          hints: [
            '💡 *items gives you a tuple — sum(items) calculates total',
            '💡 discount=10 means 10% off: subtotal * (discount / 100)',
            '💡 sum(extra_charges.values()) adds up all the extra charges',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'py-m6-l1-q1',
              question:    'What type does *args collect extra positional arguments into?',
              options:     ['List', 'Dictionary', 'Tuple', 'Set'],
              correct:     2,
              explanation: '*args collects extra positional arguments into a TUPLE. **kwargs collects extra keyword arguments into a DICTIONARY.',
            },
            {
              id:          'py-m6-l1-q2',
              question:    'In def f(a, b=5, *args), what value does b have if called as f(1, 2, 3, 4)?',
              options:     ['5', '2', '3', 'Error'],
              correct:     1,
              explanation: 'b=5 is a default parameter. When f(1,2,3,4) is called, a=1, b=2 (overrides default), and args=(3,4).',
            },
          ],
        },
      },

      {
        id:       'py-m6-l2',
        moduleId: 'py-m6',
        title:    'Lambda Functions & Higher-Order Functions',
        order:    2,
        xpReward: 20,
        duration: '14 min',

        explanation: {
          title:   'Lambda & Functional Programming',
          content: `# Lambda Functions

A **lambda** is a small anonymous function defined in one line.

## Syntax

\`\`\`python
lambda arguments: expression

# Same as:
def add(x, y):
    return x + y

add = lambda x, y: x + y
add(3, 5)  # 8
\`\`\`

## Higher-Order Functions

Functions that take other functions as arguments or return them.

### map() — transform every item

\`\`\`python
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda n: n**2, numbers))
# [1, 4, 9, 16, 25]
\`\`\`

### filter() — keep items that match

\`\`\`python
scores = [85, 42, 92, 37, 78]
passing = list(filter(lambda s: s >= 60, scores))
# [85, 92, 78]
\`\`\`

### sorted() with key

\`\`\`python
students = [("Rahul", 85), ("Priya", 92), ("Amit", 78)]
by_score = sorted(students, key=lambda s: s[1], reverse=True)
# [("Priya", 92), ("Rahul", 85), ("Amit", 78)]
\`\`\`

### reduce() — combine into one value

\`\`\`python
from functools import reduce
numbers = [1, 2, 3, 4, 5]
product = reduce(lambda acc, n: acc * n, numbers)
# 120 (1×2×3×4×5)
\`\`\``,
        },

        codeExample: {
          title:    'Lambda & map/filter/sorted',
          language: 'python',
          code: `# Lambda basics
double   = lambda n: n * 2
square   = lambda n: n ** 2
is_even  = lambda n: n % 2 == 0

print("Double 7:", double(7))
print("Square 5:", square(5))
print("Is 8 even:", is_even(8))

# map() — transform all items
prices    = [100, 250, 480, 90, 320]
with_gst  = list(map(lambda p: round(p * 1.18, 2), prices))
print("\nOriginal prices:", prices)
print("With 18% GST:  ", with_gst)

# filter() — keep matching items
scores  = [85, 42, 92, 37, 78, 55, 91, 63]
passing = list(filter(lambda s: s >= 60, scores))
failed  = list(filter(lambda s: s < 60, scores))
print(f"\nPassing ({len(passing)}):", passing)
print(f"Failed  ({len(failed)}):", failed)

# sorted() with key lambda
products = [
    ("Laptop",  45000),
    ("Phone",   15000),
    ("Tablet",  25000),
    ("Earbuds",  2000),
]
by_price  = sorted(products, key=lambda p: p[1])
by_name   = sorted(products, key=lambda p: p[0])
print("\nBy price:", [name for name, _ in by_price])
print("By name: ", [name for name, _ in by_name])`,
          explanation: `- Lambda is best for short, one-expression functions passed to other functions
- \`map(func, iterable)\` applies func to every item — always wrap in \`list()\`
- \`filter(func, iterable)\` keeps items where func returns True
- \`sorted(iterable, key=func)\` sorts using the return value of func as the sort key`,
        },

        exercise: {
          title:        'Product Catalog Sorter',
          instructions: 'Given a list of product dicts, use map() to add a "discounted_price" key (15% off), use filter() to keep only products with discounted price under ₹1000, and use sorted() to sort by discounted price.',
          starterCode: `products = [
    {"name": "Notebook",  "price": 150},
    {"name": "Pen Set",   "price": 80},
    {"name": "Headphones","price": 1299},
    {"name": "Backpack",  "price": 899},
    {"name": "Laptop Bag","price": 450},
    {"name": "Monitor",   "price": 8999},
]

# Add discounted_price (15% off) using map
def add_discount(p):
    return {**p, "discounted_price": round(p["price"] * 0.85, 2)}

with_discount = list(map(add_discount, products))

# Filter: keep only discounted price < 1000
affordable = list(filter(lambda p: p["discounted_price"] < 1000, with_discount))

# Sort by discounted_price
sorted_products = sorted(affordable, key=lambda p: p["discounted_price"])

for p in sorted_products:
    print(f"{p['name']}: ₹{p['price']} → ₹{p['discounted_price']}")`,
          solutionCode: `products = [
    {"name": "Notebook",  "price": 150},
    {"name": "Pen Set",   "price": 80},
    {"name": "Headphones","price": 1299},
    {"name": "Backpack",  "price": 899},
    {"name": "Laptop Bag","price": 450},
    {"name": "Monitor",   "price": 8999},
]

def add_discount(p):
    return {**p, "discounted_price": round(p["price"] * 0.85, 2)}

with_discount   = list(map(add_discount, products))
affordable      = list(filter(lambda p: p["discounted_price"] < 1000, with_discount))
sorted_products = sorted(affordable, key=lambda p: p["discounted_price"])

for p in sorted_products:
    print(f"{p['name']}: ₹{p['price']} → ₹{p['discounted_price']}")`,
          hints: [
            '💡 {**p, "new_key": value} creates a new dict with all existing keys plus a new one',
            '💡 filter() keeps items where the lambda returns True',
            '💡 sorted(list, key=lambda p: p["discounted_price"]) sorts by that field',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'py-m6-l2-q1',
              question:    'What does map(lambda x: x*2, [1, 2, 3]) return?',
              options:     ['[1, 2, 3]', 'A map object (need list() to convert)', '[2, 4, 6] directly', 'Error'],
              correct:     1,
              explanation: 'map() returns a map object (lazy iterator), not a list. You need list(map(...)) to get an actual list. This is memory-efficient for large datasets.',
            },
            {
              id:          'py-m6-l2-q2',
              question:    'What is the key difference between filter() and map()?',
              options:     [
                'No difference',
                'map() transforms items, filter() selects items',
                'filter() transforms items, map() selects items',
                'map() only works with numbers',
              ],
              correct:     1,
              explanation: 'map() applies a function to TRANSFORM every item (same number of items in, same number out). filter() SELECTS items — keeps only those where the function returns True (fewer or equal items out).',
            },
          ],
        },
      },

      {
        id:       'py-m6-l3',
        moduleId: 'py-m6',
        title:    'Scope, Closures & Decorators',
        order:    3,
        xpReward: 25,
        duration: '16 min',

        explanation: {
          title:   'Advanced Function Concepts',
          content: `# Scope, Closures & Decorators

## Variable Scope — LEGB Rule

Python looks for variables in this order:
1. **L**ocal — inside the current function
2. **E**nclosing — in any outer functions
3. **G**lobal — at module level
4. **B**uilt-in — Python's built-in names

\`\`\`python
x = "global"

def outer():
    x = "enclosing"
    def inner():
        x = "local"
        print(x)   # "local"
    inner()
    print(x)       # "enclosing"

outer()
print(x)           # "global"
\`\`\`

## global and nonlocal

\`\`\`python
count = 0
def increment():
    global count    # modify global variable
    count += 1
\`\`\`

## Closures

\`\`\`python
def multiplier(factor):
    def multiply(number):
        return number * factor   # remembers factor!
    return multiply

double = multiplier(2)
triple = multiplier(3)
print(double(5))   # 10
print(triple(5))   # 15
\`\`\`

## Decorators — modify functions without changing them

\`\`\`python
def timer(func):
    import time
    def wrapper(*args, **kwargs):
        start  = time.time()
        result = func(*args, **kwargs)
        end    = time.time()
        print(f"{func.__name__} took {end-start:.4f}s")
        return result
    return wrapper

@timer
def slow_function():
    import time
    time.sleep(0.1)

slow_function()   # prints: "slow_function took 0.1001s"
\`\`\``,
        },

        codeExample: {
          title:    'Closures & Decorators',
          language: 'python',
          code: `# Closure — counter factory
def make_counter(start=0, step=1):
    count = [start]   # list to allow mutation in closure

    def counter():
        current  = count[0]
        count[0] += step
        return current

    return counter

by_ones  = make_counter(0, 1)
by_twos  = make_counter(0, 2)
from_ten = make_counter(10)

print("By ones:", [by_ones() for _ in range(5)])
print("By twos:", [by_twos() for _ in range(5)])
print("From 10:", [from_ten() for _ in range(5)])

# Decorator — logging
def log_calls(func):
    call_count = [0]

    def wrapper(*args, **kwargs):
        call_count[0] += 1
        print(f"[Call #{call_count[0]}] {func.__name__}({args})")
        result = func(*args, **kwargs)
        print(f"  → returned: {result}")
        return result

    wrapper.__name__ = func.__name__
    return wrapper

@log_calls
def add(a, b):
    return a + b

@log_calls
def greet(name):
    return f"Hello, {name}!"

add(3, 4)
add(10, 20)
greet("Rahul")`,
          explanation: `- Closures "remember" their enclosing scope even after the outer function returns
- Using a list \`[value]\` instead of a plain variable allows mutation inside closures
- A decorator is a function that takes a function and returns a modified version
- \`@decorator_name\` is syntactic sugar for \`func = decorator_name(func)\``,
        },

        exercise: {
          title:        'Build a Memoization Decorator',
          instructions: 'Write a @memoize decorator that caches function results. If the same arguments are passed again, return the cached result instead of recalculating. Test it with a slow Fibonacci function.',
          starterCode: `def memoize(func):
    cache = {}  # store results here
    
    def wrapper(*args):
        if args in cache:
            print(f"Cache hit for {args}")
            return cache[args]
        result = func(*args)
        cache[args] = result
        return result
    
    return wrapper

@memoize
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# Test
print(fibonacci(10))
print(fibonacci(10))  # should say "Cache hit"
print(fibonacci(8))   # should be cached from earlier`,
          solutionCode: `def memoize(func):
    cache = {}

    def wrapper(*args):
        if args in cache:
            print(f"  Cache hit for {args}")
            return cache[args]
        result   = func(*args)
        cache[args] = result
        return result

    return wrapper

@memoize
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print("fib(10) =", fibonacci(10))
print("fib(10) =", fibonacci(10))
print("fib(8)  =", fibonacci(8))`,
          hints: [
            '💡 cache = {} stores args tuple → result pairs',
            '💡 args is a tuple in *args, so it can be a dict key: cache[args]',
            '💡 Check cache first: if args in cache: return cache[args]',
            '💡 Otherwise compute, store, then return: cache[args] = result',
          ],
        },

        quiz: {
          questions: [
            {
              id:          'py-m6-l3-q1',
              question:    'What is a Python decorator?',
              options:     [
                'A way to add CSS styling to Python output',
                'A function that takes a function and returns a modified function',
                'A comment style for documentation',
                'A way to add default values to functions',
              ],
              correct:     1,
              explanation: 'A decorator is a function that wraps another function to modify its behavior. The @decorator syntax is shorthand for func = decorator(func). Common uses: logging, timing, caching, authentication.',
            },
            {
              id:          'py-m6-l3-q2',
              question:    'What does the LEGB rule stand for?',
              options:     [
                'List, Enumerate, Generator, Boolean',
                'Local, Enclosing, Global, Built-in — Python\'s variable scope lookup order',
                'Lambda, Expression, Generator, Block',
                'Loop, Error, Global, Break',
              ],
              correct:     1,
              explanation: 'LEGB is Python\'s scope resolution order: Local (inside function) → Enclosing (outer functions) → Global (module level) → Built-in (Python\'s built-ins like print, len). Python searches in this order when you use a variable name.',
            },
          ],
        },
      },
    ],
  },
];
