// src/lib/ai/challengeGenerator.ts
// ─────────────────────────────────────────────────────────────
// EXERCISE SUGGESTION & CODING CHALLENGE GENERATOR
//
// Two systems:
//
// 1. ExerciseSuggester — picks relevant practice exercises
//    based on weak topics and completed lessons.
//    Uses a bank of pre-written exercises per topic.
//
// 2. ChallengeGenerator — calls Claude to generate small
//    coding challenges (10-20 lines) tailored to the user's
//    current lesson and level.
// ─────────────────────────────────────────────────────────────

// ── Types ─────────────────────────────────────────────────────

export interface SuggestedExercise {
  id:           string;
  title:        string;
  description:  string;
  difficulty:   'easy' | 'medium' | 'hard';
  language:     string;
  starterCode:  string;
  hint:         string;
  relatedTopic: string; // lesson ID it targets
}

export interface CodingChallenge {
  id:          string;
  title:       string;
  description: string;
  difficulty:  'easy' | 'medium' | 'hard';
  language:    string;
  starterCode: string;
  hints:       string[];
  testCases:   { input: string; expectedOutput: string }[];
  lessonId:    string;
}

// ── Pre-built exercise bank ────────────────────────────────────
// Exercises mapped by lesson topic (lessonId → exercises[])
const EXERCISE_BANK: Record<string, SuggestedExercise[]> = {

  'py-m1-l2': [ // Variables & Data Types
    {
      id: 'py-ex-vars-1',
      title: 'Temperature Converter Variables',
      description: 'Create variables for a temperature reading: celsius as float, location as string, is_freezing as boolean. Use an f-string to print all three.',
      difficulty: 'easy',
      language: 'python',
      starterCode: `celsius   = 0.0
location  = "Delhi"
is_freezing = False

# Print: "Delhi: 0.0°C (Freezing: False)"
print(f"")`,
      hint: 'Use f"{variable}" to insert variable values into a string.',
      relatedTopic: 'py-m1-l2',
    },
    {
      id: 'py-ex-vars-2',
      title: 'Swap Two Variables',
      description: 'Without using a third temporary variable, swap the values of a and b using Python\'s tuple unpacking trick.',
      difficulty: 'medium',
      language: 'python',
      starterCode: `a = 10
b = 20

# Swap a and b WITHOUT using a temp variable
# Hint: Python allows: x, y = y, x

print(f"Before: a={a}, b={b}")
# Your swap here
print(f"After:  a={a}, b={b}")  # Should print a=20, b=10`,
      hint: 'Python allows: a, b = b, a — this is simultaneous assignment.',
      relatedTopic: 'py-m1-l2',
    },
  ],

  'py-m3-l1': [ // Python Lists
    {
      id: 'py-ex-list-1',
      title: 'Top 3 Scores',
      description: 'Given a list of 8 scores, sort it descending and print only the top 3 scores using slicing.',
      difficulty: 'easy',
      language: 'python',
      starterCode: `scores = [85, 92, 78, 95, 88, 72, 91, 83]

# Sort descending and get top 3
# Your code here

print("Top 3:", top3)`,
      hint: 'scores.sort(reverse=True) then use slicing [:3]',
      relatedTopic: 'py-m3-l1',
    },
  ],

  'py-m4-l1': [ // Dictionaries
    {
      id: 'py-ex-dict-1',
      title: 'Inventory Counter',
      description: 'Given a list of items sold, count how many times each item appears using a dictionary.',
      difficulty: 'easy',
      language: 'python',
      starterCode: `sales = ["apple","banana","apple","cherry","banana","apple","cherry","cherry"]

# Count occurrences of each item
inventory = {}
for item in sales:
    # Your code here — use dict.get(key, 0) + 1

print(inventory)  # {"apple": 3, "banana": 2, "cherry": 3}`,
      hint: 'Use: inventory[item] = inventory.get(item, 0) + 1',
      relatedTopic: 'py-m4-l1',
    },
  ],

  'py-m5-l1': [ // for Loops
    {
      id: 'py-ex-loops-1',
      title: 'FizzBuzz Challenge',
      description: 'Print numbers 1-20. For multiples of 3 print "Fizz", multiples of 5 print "Buzz", multiples of both print "FizzBuzz".',
      difficulty: 'easy',
      language: 'python',
      starterCode: `for i in range(1, 21):
    # Check divisibility and print accordingly
    pass`,
      hint: 'Check for FizzBuzz (divisible by both 3 AND 5) first, before checking 3 or 5 alone.',
      relatedTopic: 'py-m5-l1',
    },
    {
      id: 'py-ex-loops-2',
      title: 'Sum of Even Squares',
      description: 'Calculate the sum of squares of all even numbers from 2 to 20 using a for loop.',
      difficulty: 'medium',
      language: 'python',
      starterCode: `total = 0
for i in range(2, 21, 2):  # step by 2 gives evens
    # Add i squared to total
    pass

print("Sum:", total)  # Should be 1540`,
      hint: 'range(2, 21, 2) gives 2, 4, 6...20. Use i**2 for squaring.',
      relatedTopic: 'py-m5-l1',
    },
  ],

  'py-m6-l1': [ // Functions
    {
      id: 'py-ex-func-1',
      title: 'String Validator',
      description: 'Write a function is_valid_username(username) that returns True if: length 3-15 chars, starts with a letter, contains only letters/numbers/underscores.',
      difficulty: 'medium',
      language: 'python',
      starterCode: `def is_valid_username(username):
    # Check length
    if len(username) < 3 or len(username) > 15:
        return False
    # Check starts with letter
    # Check only valid characters
    # Return True if all checks pass

# Tests
print(is_valid_username("rahul123"))   # True
print(is_valid_username("r"))          # False (too short)
print(is_valid_username("123rahul"))   # False (starts with number)
print(is_valid_username("rahul@123"))  # False (invalid char)`,
      hint: 'Use username[0].isalpha() to check first char. Use all(c.isalnum() or c == "_" for c in username) for the rest.',
      relatedTopic: 'py-m6-l1',
    },
  ],

  'js-m1-l2': [ // JS Variables
    {
      id: 'js-ex-vars-1',
      title: 'Profile Builder',
      description: 'Create const variables for name and birthYear. Calculate age. Use a template literal to print a complete bio.',
      difficulty: 'easy',
      language: 'javascript',
      starterCode: `const name      = "Rahul";
const birthYear = 2002;

// Calculate age (current year - birthYear)
const age = ;

// Print: "Hi, I'm Rahul! I'm 22 years old."
console.log(\`\`);`,
      hint: 'Use new Date().getFullYear() to get the current year.',
      relatedTopic: 'js-m1-l2',
    },
  ],

  'js-m3-l2': [ // map/filter/reduce
    {
      id: 'js-ex-arr-1',
      title: 'Price Pipeline',
      description: 'From a products array: filter products with stock > 0, apply 10% GST to prices, sort by final price, and sum the total.',
      difficulty: 'medium',
      language: 'javascript',
      starterCode: `const products = [
  { name: "Laptop",  price: 45000, stock: 5 },
  { name: "Phone",   price: 15000, stock: 0 },
  { name: "Tablet",  price: 25000, stock: 3 },
  { name: "Earbuds", price:  2000, stock: 10 },
];

// 1. Filter: only in-stock items
// 2. Map: add gstPrice (price * 1.18)
// 3. Sort by gstPrice ascending
// 4. Reduce: find total

const total = // chain here

console.log("Total:", total);`,
      hint: 'Chain: .filter().map().sort().reduce()',
      relatedTopic: 'js-m3-l2',
    },
  ],

  'html-m1-l3': [ // HTML Forms
    {
      id: 'html-ex-forms-1',
      title: 'Complete Registration Form',
      description: 'Build a registration form with: username (text, required), email, password, date of birth (date input), gender (radio buttons: Male/Female/Other), and a submit button.',
      difficulty: 'easy',
      language: 'html',
      starterCode: `<!DOCTYPE html>
<html>
<head><title>Registration</title></head>
<body>
  <h2>Create Account</h2>
  <form>
    <!-- Username field -->
    
    <!-- Email field -->
    
    <!-- Password field -->
    
    <!-- Date of birth -->
    
    <!-- Gender radio buttons -->
    
    <!-- Submit button -->
  </form>
</body>
</html>`,
      hint: 'Use type="date" for date of birth. Radio buttons with same name="gender" allow only one selection.',
      relatedTopic: 'html-m1-l3',
    },
  ],

  'java-m4-l1': [ // Java Classes
    {
      id: 'java-ex-class-1',
      title: 'Rectangle Class',
      description: 'Create a Rectangle class with width and height fields, a constructor, getArea(), getPerimeter(), isSquare() methods, and override toString().',
      difficulty: 'easy',
      language: 'java',
      starterCode: `class Rectangle {
    // Fields: width, height (double)
    
    // Constructor
    
    // getArea() — returns width * height
    
    // getPerimeter() — returns 2 * (width + height)
    
    // isSquare() — returns true if width == height
    
    // toString() — "Rectangle(5.0 x 3.0)"
}

public class Main {
    public static void main(String[] args) {
        Rectangle r1 = new Rectangle(5, 3);
        Rectangle r2 = new Rectangle(4, 4);
        System.out.println(r1);
        System.out.println("Area: " + r1.getArea());
        System.out.println("Is square: " + r2.isSquare());
    }
}`,
      hint: 'Use this.width in constructor to set the field. isSquare() returns width == height.',
      relatedTopic: 'java-m4-l1',
    },
  ],
};

// ── Exercise Suggester ────────────────────────────────────────
export function suggestExercises(
  weakTopics:       { lessonId: string }[],
  completedLessons: string[],
  limit:            number = 3
): SuggestedExercise[] {
  const suggestions: SuggestedExercise[] = [];
  const addedIds = new Set<string>();

  for (const topic of weakTopics) {
    const exercises = EXERCISE_BANK[topic.lessonId] || [];
    for (const ex of exercises) {
      if (!addedIds.has(ex.id) && suggestions.length < limit) {
        suggestions.push(ex);
        addedIds.add(ex.id);
      }
    }
    if (suggestions.length >= limit) break;
  }

  return suggestions;
}

// ── Challenge prompt builder ───────────────────────────────────
// Builds a Claude prompt that generates a coding challenge
export function buildChallengePrompt(
  lessonTitle:  string,
  lessonTopics: string[],   // key concepts from the lesson
  language:     string,
  difficulty:   'easy' | 'medium' | 'hard'
): string {
  const difficultyGuide = {
    easy:   '5-10 lines of code to solve',
    medium: '10-20 lines of code to solve',
    hard:   '20-30 lines of code to solve, may need multiple functions',
  };

  return `Generate a coding challenge for a beginner learning ${language}.

CONTEXT:
- Current lesson: "${lessonTitle}"
- Key concepts covered: ${lessonTopics.join(', ')}
- Difficulty: ${difficulty} (${difficultyGuide[difficulty]})
- Language: ${language}

REQUIREMENTS:
1. Title: Short, clear challenge name
2. Description: 2-3 sentences explaining what to build
3. Starter code: Working skeleton with comments showing where to add code
4. Hints: Exactly 3 hints, each starting with 💡
5. Example output: What the program should print when correct

CRITICAL RULES:
- Challenge MUST use the current lesson's concepts (${lessonTopics.slice(0,3).join(', ')})
- Beginner-friendly language — no jargon
- The solution should be achievable in under 15 minutes
- Include at least one realistic Indian context (names like Rahul/Priya, cities, rupees ₹)
- Starter code should have clear placeholder comments

RESPOND IN THIS EXACT JSON FORMAT (no markdown, just the object):
{
  "title": "Challenge title",
  "description": "What the learner needs to build",
  "starterCode": "// complete starter code here",
  "hints": ["💡 hint 1", "💡 hint 2", "💡 hint 3"],
  "exampleOutput": "What it prints when correct"
}`;
}
