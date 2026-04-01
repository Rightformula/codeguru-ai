// src/data/courses/java.ts
import type { Course } from '@/types/course';

export const javaCourse: Course = {
  id:             'java',
  title:          'Java Programming',
  description:    'Master Java — the language powering Android, enterprise systems, and backend APIs. Build strong OOP foundations used by millions of developers worldwide.',
  icon:           '☕',
  color:          '#007396',
  colorLight:     '#E8F4FD',
  totalModules:   18,
  totalLessons:   54,
  estimatedHours: 50,
  levels:         ['beginner', 'intermediate', 'advanced'],

  modules: [

    // ════════════════════════════════════════════════
    //  MODULE 1 — Java Basics
    // ════════════════════════════════════════════════
    {
      id: 'java-m1', courseId: 'java',
      title: 'Java Basics',
      description: 'Your first steps in Java. Setup, syntax, variables, and printing output.',
      level: 'beginner', order: 1, icon: '🚀', xpReward: 100,
      lessons: [

        {
          id: 'java-m1-l1', moduleId: 'java-m1',
          title: 'What is Java?', order: 1, xpReward: 10, duration: '10 min',
          explanation: {
            title: 'Welcome to Java!',
            content: `# What is Java?

Java is one of the world's most popular programming languages — used for Android apps, enterprise software, banking systems, and much more.

## The "Write Once, Run Anywhere" Promise

Java compiles your code to **bytecode**, which runs on the **Java Virtual Machine (JVM)**. This means the SAME compiled code runs on Windows, Mac, Linux, Android — anywhere the JVM is installed.

\`\`\`
Source Code (.java) → Java Compiler → Bytecode (.class) → JVM → Runs anywhere
\`\`\`

## Where is Java Used?

- 📱 **Android apps** — Java was Android's primary language for years
- 🏦 **Banking & Finance** — high reliability, strong typing
- 🌐 **Backend APIs** — Spring Boot powers many large applications
- ☁️ **Enterprise systems** — Amazon, LinkedIn, Netflix use Java

## Java vs Python vs JavaScript

| Feature | Java | Python | JavaScript |
|---------|------|--------|------------|
| Typing | Static (declare types) | Dynamic | Dynamic |
| Speed | Fast | Medium | Fast (V8) |
| Verbosity | More code | Less code | Medium |
| Main use | Enterprise, Android | Data science, scripting | Web |

## Your First Java Program

Every Java program needs a **class** and a **main method** — that's where execution begins.`,
          },
          codeExample: {
            title: 'Hello, World in Java!',
            language: 'java',
            code: `// In Java, code lives inside a CLASS
public class Main {

    // The main method — Java starts here
    public static void main(String[] args) {

        // Print output
        System.out.println("Hello, World!");
        System.out.println("I am learning Java!");

        // Print without newline at the end
        System.out.print("Same line ");
        System.out.print("continues here");
        System.out.println(); // just a newline

        // Print with formatting
        System.out.printf("Java version: %d%n", 17);
    }
}`,
            explanation: `- Every Java program lives inside a \`class\`
- \`public static void main(String[] args)\` — the entry point, always exactly this signature
- \`System.out.println()\` prints and adds a newline at the end
- \`System.out.print()\` prints WITHOUT adding a newline
- \`System.out.printf()\` uses format specifiers like \`%d\` (integer), \`%s\` (string), \`%f\` (float)`,
          },
          exercise: {
            title: 'Your First Java Output',
            instructions: 'Write a Java program that prints: your name, your age as a number, and your favorite programming language. Use System.out.println() for each.',
            starterCode: `public class Main {
    public static void main(String[] args) {
        // Print your name
        System.out.println("Your Name");

        // Print your age
        System.out.println(0);

        // Print your favorite language
        System.out.println("Your favorite language");
    }
}`,
            solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Rahul Sharma");
        System.out.println(21);
        System.out.println("Java");
    }
}`,
            hints: [
              '💡 System.out.println() prints its argument and moves to the next line',
              '💡 Strings (text) go in double quotes: System.out.println("Hello")',
              '💡 Numbers do NOT need quotes: System.out.println(21)',
            ],
          },
          quiz: {
            questions: [
              { id: 'java-m1-l1-q1', question: 'What is the entry point of every Java program?', options: ['The first line of code', 'public static void main(String[] args)', 'The class definition', 'System.out.println()'], correct: 1, explanation: 'Java always starts execution at the main method: public static void main(String[] args). Every Java application must have exactly this method signature as its starting point.' },
              { id: 'java-m1-l1-q2', question: 'What does JVM stand for and why does it matter?', options: ['Java Verified Module', 'Java Virtual Machine — allows Java to run on any OS', 'Java Version Manager', 'Java Visual Mode'], correct: 1, explanation: 'JVM (Java Virtual Machine) is the runtime that executes Java bytecode. Because every OS has a JVM, Java code compiled once can run anywhere — the "Write Once, Run Anywhere" principle.' },
            ],
          },
        },

        {
          id: 'java-m1-l2', moduleId: 'java-m1',
          title: 'Variables & Data Types', order: 2, xpReward: 10, duration: '12 min',
          explanation: {
            title: 'Java\'s Strong Typing System',
            content: `# Variables in Java

Java is **statically typed** — you MUST declare the type of every variable before using it. This catches bugs at compile time.

## Declaring Variables

\`\`\`java
// type variableName = value;
int    age      = 21;
double gpa      = 3.8;
String name     = "Rahul";
boolean active  = true;
char   initial  = 'R';   // single char uses single quotes
\`\`\`

## Primitive Types

| Type | Size | Example | Range |
|------|------|---------|-------|
| \`int\` | 32-bit | \`42\` | -2B to 2B |
| \`long\` | 64-bit | \`42L\` | Very large |
| \`double\` | 64-bit | \`3.14\` | Decimals |
| \`float\` | 32-bit | \`3.14f\` | Smaller decimal |
| \`boolean\` | 1-bit | \`true\` | true/false |
| \`char\` | 16-bit | \`'A'\` | Single character |

## String — not a primitive, it's a class

\`\`\`java
String greeting = "Hello, World!";
int    length   = greeting.length();    // 13
String upper    = greeting.toUpperCase();
String sub      = greeting.substring(0, 5);  // "Hello"
\`\`\`

## var — type inference (Java 10+)

\`\`\`java
var name  = "Rahul";    // Java infers String
var score = 95;         // Java infers int
var price = 299.99;     // Java infers double
\`\`\`

## Constants with final

\`\`\`java
final double PI   = 3.14159;
final int    MAX  = 100;
// PI = 3.0;   // ERROR — cannot reassign final
\`\`\``,
          },
          codeExample: {
            title: 'Variables & Types',
            language: 'java',
            code: `public class Main {
    public static void main(String[] args) {

        // Primitive variables
        int    age     = 21;
        double gpa     = 3.85;
        boolean isStudent = true;
        char   grade   = 'A';

        // String (object type)
        String name    = "Priya Sharma";
        String city    = "Mumbai";

        // Print with concatenation
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("GPA: " + gpa);
        System.out.println("Student: " + isStudent);

        // Formatted output
        System.out.printf("Hello, %s! You are %d years old.%n", name, age);
        System.out.printf("GPA: %.2f%n", gpa);  // 2 decimal places

        // String methods
        System.out.println("Length: " + name.length());
        System.out.println("Upper: " + name.toUpperCase());
        System.out.println("Contains 'Priya': " + name.contains("Priya"));

        // Type casting
        double price  = 99.99;
        int    rounded = (int) price;   // cast to int — truncates decimal
        System.out.println("Rounded: " + rounded);

        // Arithmetic
        int x = 10, y = 3;
        System.out.println("Division: " + (x / y));      // 3 (integer division)
        System.out.println("Modulo: " + (x % y));        // 1 (remainder)
        System.out.println("Double div: " + (10.0 / 3)); // 3.333...
    }
}`,
            explanation: `- Java requires explicit type declarations: \`int age = 21;\`
- String is a class (capital S), not a primitive — it has methods like \`length()\`, \`toUpperCase()\`
- \`printf\` uses format specifiers: \`%s\` string, \`%d\` int, \`%f\` float, \`%n\` newline
- Integer division \`10/3\` = 3 (truncates) — use \`10.0/3\` for decimal result
- \`(int) price\` is explicit casting — converts double to int`,
          },
          exercise: {
            title: 'Student Profile',
            instructions: 'Declare variables for a student profile (name as String, age as int, gpa as double, isEnrolled as boolean). Print a formatted profile using printf with all four values.',
            starterCode: `public class Main {
    public static void main(String[] args) {
        // Declare student variables
        String name    = "Your Name";
        int    age     = 0;
        double gpa     = 0.0;
        boolean enrolled = false;

        // Print using printf — format: "Student: [name], Age: [age], GPA: [gpa], Enrolled: [enrolled]"
        System.out.printf("Student: %s, Age: %d, GPA: %.1f, Enrolled: %b%n",
                          name, age, gpa, enrolled);
    }
}`,
            solutionCode: `public class Main {
    public static void main(String[] args) {
        String  name     = "Rahul Sharma";
        int     age      = 21;
        double  gpa      = 3.8;
        boolean enrolled = true;

        System.out.printf("Student: %s, Age: %d, GPA: %.1f, Enrolled: %b%n",
                          name, age, gpa, enrolled);
    }
}`,
            hints: [
              '💡 String uses double quotes "text", char uses single quotes \'c\'',
              '💡 %s = String, %d = int, %.1f = double with 1 decimal, %b = boolean',
              '💡 %n is the portable newline in printf (prefer over \\n)',
            ],
          },
          quiz: {
            questions: [
              { id: 'java-m1-l2-q1', question: 'What is the difference between int and double in Java?', options: ['No difference', 'int stores whole numbers; double stores decimals', 'double is faster than int', 'int is for strings'], correct: 1, explanation: 'int stores whole numbers (32-bit integer): -2,147,483,648 to 2,147,483,647. double stores floating-point numbers with decimal precision. Use int for counting, double for measurements.' },
              { id: 'java-m1-l2-q2', question: 'How do you declare a constant in Java?', options: ['const PI = 3.14', 'final double PI = 3.14', 'static PI = 3.14', 'constant double PI = 3.14'], correct: 1, explanation: 'The final keyword prevents reassignment. By convention, constants use ALL_CAPS: final double PI = 3.14159. Attempting to reassign a final variable causes a compile error.' },
            ],
          },
        },

        {
          id: 'java-m1-l3', moduleId: 'java-m1',
          title: 'Operators & Conditionals', order: 3, xpReward: 15, duration: '12 min',
          explanation: {
            title: 'Making Decisions in Java',
            content: `# Operators & if/else in Java

Java conditionals work very similarly to JavaScript and C.

## Comparison Operators

\`\`\`java
==   // equal to
!=   // not equal
>    // greater than
<    // less than
>=   // greater or equal
<=   // less or equal
\`\`\`

## Logical Operators

\`\`\`java
&&   // AND — both must be true
||   // OR  — at least one must be true
!    // NOT — flips true to false
\`\`\`

## if / else if / else

\`\`\`java
int score = 85;

if (score >= 90) {
    System.out.println("Grade: A");
} else if (score >= 80) {
    System.out.println("Grade: B");
} else if (score >= 70) {
    System.out.println("Grade: C");
} else {
    System.out.println("Grade: F");
}
\`\`\`

## Ternary Operator

\`\`\`java
String status = age >= 18 ? "Adult" : "Minor";
\`\`\`

## switch Statement

\`\`\`java
int day = 3;
switch (day) {
    case 1: System.out.println("Monday");  break;
    case 2: System.out.println("Tuesday"); break;
    case 3: System.out.println("Wednesday"); break;
    default: System.out.println("Other day");
}
\`\`\``,
          },
          codeExample: {
            title: 'Conditionals in Java',
            language: 'java',
            code: `public class Main {
    public static void main(String[] args) {

        // Grade classifier
        int marks = 78;

        if (marks >= 90) {
            System.out.println("Grade A+ — Excellent!");
        } else if (marks >= 75) {
            System.out.println("Grade A — Great!");
        } else if (marks >= 60) {
            System.out.println("Grade B — Good!");
        } else if (marks >= 40) {
            System.out.println("Grade C — Pass");
        } else {
            System.out.println("Grade F — Retry");
        }

        // Logical operators
        int age = 20;
        boolean hasID = true;

        if (age >= 18 && hasID) {
            System.out.println("Access granted");
        }

        // Ternary
        String plan = "pro";
        int discount = plan.equals("student") ? 10 : 0;
        System.out.println("Discount: " + discount + "%");

        // switch
        String language = "java";
        switch (language) {
            case "python":
                System.out.println("Great for beginners!");
                break;
            case "java":
                System.out.println("Great for enterprise!");
                break;
            case "javascript":
                System.out.println("Great for web!");
                break;
            default:
                System.out.println("All languages are great!");
        }
    }
}`,
            explanation: `- Use \`==\` for primitives (int, boolean), but \`equals()\` for Strings
- \`&&\` and \`||\` are short-circuit: if left side determines result, right side is skipped
- Every \`case\` in a switch needs a \`break\` — otherwise it "falls through" to next case
- \`default\` runs when no case matches — like else in if/else`,
          },
          exercise: {
            title: 'BMI Calculator',
            instructions: 'Calculate BMI (weight in kg / height in meters squared). Use if/else to classify: Underweight (<18.5), Normal (18.5-24.9), Overweight (25-29.9), Obese (30+). Print the BMI and category.',
            starterCode: `public class Main {
    public static void main(String[] args) {
        double weight = 70.0;  // kg
        double height = 1.75;  // meters

        // Calculate BMI
        double bmi = weight / (height * height);
        System.out.printf("BMI: %.1f%n", bmi);

        // Classify BMI
        if (bmi < 18.5) {
            System.out.println("Category: Underweight");
        }
        // Add else if for Normal, Overweight, Obese
    }
}`,
            solutionCode: `public class Main {
    public static void main(String[] args) {
        double weight = 70.0;
        double height = 1.75;

        double bmi = weight / (height * height);
        System.out.printf("BMI: %.1f%n", bmi);

        if      (bmi < 18.5) System.out.println("Category: Underweight");
        else if (bmi < 25.0) System.out.println("Category: Normal");
        else if (bmi < 30.0) System.out.println("Category: Overweight");
        else                 System.out.println("Category: Obese");
    }
}`,
            hints: [
              '💡 BMI formula: weight / (height * height)',
              '💡 printf("%.1f", bmi) prints BMI with 1 decimal place',
              '💡 Once inside a range, the lower bound is already checked by earlier conditions',
            ],
          },
          quiz: {
            questions: [
              { id: 'java-m1-l3-q1', question: 'How should you compare two Strings in Java?', options: ['str1 == str2', 'str1.equals(str2)', 'str1.compare(str2)', 'str1 === str2'], correct: 1, explanation: '== compares object references for Strings (usually false even for equal content). Always use .equals() to compare String content. For case-insensitive: .equalsIgnoreCase().' },
              { id: 'java-m1-l3-q2', question: 'What happens if you forget "break" in a switch case?', options: ['Error', 'The program stops', 'Fall-through — it continues executing the next case', 'Nothing — break is optional'], correct: 2, explanation: 'Without break, Java "falls through" and executes ALL subsequent cases until it hits a break or the end of the switch. This is sometimes intentional but usually a bug.' },
            ],
          },
        },
      ],
    },

    // ════════════════════════════════════════════════
    //  MODULE 2 — Loops & Arrays
    // ════════════════════════════════════════════════
    {
      id: 'java-m2', courseId: 'java',
      title: 'Loops & Arrays',
      description: 'Automate repetitive tasks with loops and store collections of data with arrays.',
      level: 'beginner', order: 2, icon: '🔄', xpReward: 120, locked: true,
      lessons: [

        {
          id: 'java-m2-l1', moduleId: 'java-m2',
          title: 'for and while Loops', order: 1, xpReward: 15, duration: '12 min',
          explanation: {
            title: 'Repeating Code with Loops',
            content: `# Loops in Java

Java has three main loop types — each suited for different situations.

## for Loop — when you know the count

\`\`\`java
for (int i = 0; i < 5; i++) {
    System.out.println("Count: " + i);
}
// Count: 0, 1, 2, 3, 4
\`\`\`

Three parts: \`initialization; condition; update\`

## while Loop — when you don't know the count

\`\`\`java
int count = 1;
while (count <= 5) {
    System.out.println(count);
    count++;   // MUST update or infinite loop!
}
\`\`\`

## do-while — runs at least once

\`\`\`java
int n = 0;
do {
    System.out.println("Runs at least once: " + n);
    n++;
} while (n < 0);  // condition is false, but prints once
\`\`\`

## break and continue

\`\`\`java
for (int i = 0; i < 10; i++) {
    if (i == 3) continue;  // skip 3
    if (i == 7) break;     // stop at 7
    System.out.print(i + " ");
}
// Output: 0 1 2 4 5 6
\`\`\``,
          },
          codeExample: {
            title: 'Loops in Action',
            language: 'java',
            code: `public class Main {
    public static void main(String[] args) {

        // for loop — multiplication table
        System.out.println("=== 5's Table ===");
        for (int i = 1; i <= 10; i++) {
            System.out.printf("5 x %2d = %2d%n", i, 5 * i);
        }

        // while loop — countdown
        System.out.println("\n=== Countdown ===");
        int count = 5;
        while (count > 0) {
            System.out.print(count + " ");
            count--;
        }
        System.out.println("Go!");

        // Nested for — pattern
        System.out.println("\n=== Triangle ===");
        for (int row = 1; row <= 5; row++) {
            for (int col = 1; col <= row; col++) {
                System.out.print("* ");
            }
            System.out.println();
        }

        // Sum with loop
        int sum = 0;
        for (int i = 1; i <= 100; i++) {
            sum += i;
        }
        System.out.println("\nSum 1-100: " + sum);

        // break and continue
        System.out.println("\nOdd numbers < 15 (skip multiples of 5):");
        for (int i = 1; i < 15; i += 2) {
            if (i % 5 == 0) continue;
            System.out.print(i + " ");
        }
    }
}`,
            explanation: `- \`i++\` increments by 1 (same as \`i = i + 1\`); \`i--\` decrements
- \`%2d\` in printf pads integers to 2 characters (right-aligned) — useful for tables
- Nested loops: inner loop runs completely for each iteration of outer loop
- \`i += 2\` increments by 2 each iteration — useful for stepping`,
          },
          exercise: {
            title: 'FizzBuzz',
            instructions: 'Print numbers 1-30. For multiples of 3 print "Fizz", for multiples of 5 print "Buzz", for multiples of both print "FizzBuzz", otherwise print the number.',
            starterCode: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 30; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.println("FizzBuzz");
            } else if (i % 3 == 0) {
                System.out.println("Fizz");
            }
            // Add else if for Buzz and else for number
        }
    }
}`,
            solutionCode: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 30; i++) {
            if      (i % 15 == 0) System.out.println("FizzBuzz");
            else if (i % 3  == 0) System.out.println("Fizz");
            else if (i % 5  == 0) System.out.println("Buzz");
            else                  System.out.println(i);
        }
    }
}`,
            hints: [
              '💡 Check FizzBuzz (divisible by BOTH 3 and 5) FIRST — i % 15 == 0',
              '💡 % is the modulo operator — gives the remainder of division',
              '💡 The else clause (no condition) handles all remaining numbers',
            ],
          },
          quiz: {
            questions: [
              { id: 'java-m2-l1-q1', question: 'What are the three parts of a for loop header?', options: ['condition, body, update', 'initialization; condition; update', 'start, stop, step', 'type, name, value'], correct: 1, explanation: 'for (initialization; condition; update) — init runs once at start, condition is checked before each iteration, update runs after each iteration.' },
              { id: 'java-m2-l1-q2', question: 'When does a do-while loop check its condition?', options: ['Before the first iteration', 'After each iteration — body runs at least once', 'Never', 'Before every iteration'], correct: 1, explanation: 'do-while checks the condition AFTER the body runs. This guarantees the body executes at least once, even if the condition starts as false.' },
            ],
          },
        },

        {
          id: 'java-m2-l2', moduleId: 'java-m2',
          title: 'Arrays', order: 2, xpReward: 15, duration: '12 min',
          explanation: {
            title: 'Arrays — Fixed-Size Collections',
            content: `# Arrays in Java

A Java array stores a **fixed number** of elements of the **same type**. Once created, the size cannot change.

## Declaring and Creating

\`\`\`java
// Declaration + creation
int[]    scores = new int[5];        // 5 integers, default 0
String[] names  = new String[3];     // 3 Strings, default null

// Declaration + initialization
int[]    primes = {2, 3, 5, 7, 11};
String[] langs  = {"Java", "Python", "JavaScript"};
\`\`\`

## Accessing Elements

\`\`\`java
System.out.println(primes[0]);    // 2 — first element
System.out.println(primes[4]);    // 11 — last element
System.out.println(primes.length); // 5 — size of array
\`\`\`

## for-each Loop (Enhanced for)

\`\`\`java
for (int prime : primes) {
    System.out.println(prime);
}
// reads as: "for each prime in primes"
\`\`\`

## 2D Arrays

\`\`\`java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
System.out.println(matrix[1][2]);  // 6 (row 1, col 2)
\`\`\``,
          },
          codeExample: {
            title: 'Arrays in Practice',
            language: 'java',
            code: `public class Main {
    public static void main(String[] args) {

        // Create and fill an array
        int[] scores = {85, 92, 78, 95, 88, 72, 91};

        // Basic stats using a loop
        int sum  = 0;
        int max  = scores[0];
        int min  = scores[0];

        for (int score : scores) {
            sum += score;
            if (score > max) max = score;
            if (score < min) min = score;
        }

        System.out.println("Count:   " + scores.length);
        System.out.println("Sum:     " + sum);
        System.out.println("Average: " + (double) sum / scores.length);
        System.out.println("Max:     " + max);
        System.out.println("Min:     " + min);

        // String array
        String[] students = {"Rahul", "Priya", "Amit", "Sneha"};
        System.out.println("\nAll students:");
        for (int i = 0; i < students.length; i++) {
            System.out.printf("  %d. %s%n", i + 1, students[i]);
        }

        // Modify array elements
        scores[0] = 90;  // update first element
        System.out.println("\nUpdated first score: " + scores[0]);

        // 2D array — grade matrix
        int[][] grades = {
            {85, 90, 78},
            {92, 88, 95},
        };
        System.out.println("\nGrade [0][1]: " + grades[0][1]); // 90
    }
}`,
            explanation: `- Arrays are zero-indexed — first element at index 0
- \`.length\` property (NOT a method) gives the array size
- Enhanced for-each: \`for (type item : array)\` — clean iteration, read-only access
- \`(double) sum / scores.length\` — cast to double before division for decimal result
- 2D arrays: \`matrix[row][column]\``,
          },
          exercise: {
            title: 'Array Reversal',
            instructions: 'Create an array of 6 integers. Print the array forward. Then reverse it WITHOUT using a library method — use a loop to swap elements from both ends.',
            starterCode: `public class Main {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50, 60};

        // Print original
        System.out.print("Original: ");
        for (int n : numbers) System.out.print(n + " ");
        System.out.println();

        // Reverse the array using a loop (swap from ends toward middle)
        int left  = 0;
        int right = numbers.length - 1;
        while (left < right) {
            int temp       = numbers[left];
            numbers[left]  = numbers[right];
            numbers[right] = temp;
            left++;
            right--;
        }

        // Print reversed
        System.out.print("Reversed: ");
        for (int n : numbers) System.out.print(n + " ");
    }
}`,
            solutionCode: `public class Main {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50, 60};

        System.out.print("Original: ");
        for (int n : numbers) System.out.print(n + " ");
        System.out.println();

        int left = 0, right = numbers.length - 1;
        while (left < right) {
            int temp = numbers[left];
            numbers[left]  = numbers[right];
            numbers[right] = temp;
            left++; right--;
        }

        System.out.print("Reversed: ");
        for (int n : numbers) System.out.print(n + " ");
    }
}`,
            hints: [
              '💡 Use two pointers: left starting at 0, right starting at length-1',
              '💡 Swap using a temp variable: temp = a; a = b; b = temp;',
              '💡 Stop when left >= right (they\'ve met in the middle)',
            ],
          },
          quiz: {
            questions: [
              { id: 'java-m2-l2-q1', question: 'How do you get the number of elements in a Java array?', options: ['array.size()', 'array.length()', 'array.length', 'array.count'], correct: 2, explanation: 'Java arrays have a length PROPERTY (not a method) — no parentheses: array.length. Lists use .size(), Strings use .length() — but arrays use .length without parentheses.' },
              { id: 'java-m2-l2-q2', question: 'What is the enhanced for-each loop used for?', options: ['Modifying array elements', 'Reading each element in order — simpler syntax than index-based for', 'Only for String arrays', 'Running backwards through an array'], correct: 1, explanation: 'The enhanced for (type item : array) iterates over every element cleanly. It\'s read-only — you can\'t modify the original array through the loop variable.' },
            ],
          },
        },

        {
          id: 'java-m2-l3', moduleId: 'java-m2',
          title: 'ArrayList & Collections', order: 3, xpReward: 20, duration: '14 min',
          explanation: {
            title: 'ArrayList — Dynamic Arrays',
            content: `# ArrayList — When Arrays Are Too Rigid

Java arrays have a fixed size. **ArrayList** is a resizable alternative that grows as needed.

## Import and Create

\`\`\`java
import java.util.ArrayList;

ArrayList<String> names = new ArrayList<>();
ArrayList<Integer> scores = new ArrayList<>();  // note: Integer not int
\`\`\`

## Key Operations

\`\`\`java
names.add("Rahul");          // add to end
names.add(0, "First");       // insert at index
names.get(0);                // get by index
names.set(1, "NewName");     // replace at index
names.remove("Rahul");       // remove by value
names.remove(0);             // remove by index
names.size();                // number of elements
names.contains("Rahul");     // check existence
names.clear();               // remove all
\`\`\`

## Iterate with for-each

\`\`\`java
for (String name : names) {
    System.out.println(name);
}
\`\`\`

## Collections utility class

\`\`\`java
import java.util.Collections;

Collections.sort(names);              // alphabetical sort
Collections.sort(scores);             // ascending sort
Collections.reverse(names);           // reverse
Collections.max(scores);              // find max
Collections.min(scores);              // find min
Collections.frequency(names, "Bob");  // count occurrences
\`\`\``,
          },
          codeExample: {
            title: 'ArrayList Operations',
            language: 'java',
            code: `import java.util.ArrayList;
import java.util.Collections;

public class Main {
    public static void main(String[] args) {

        // Create and populate ArrayList
        ArrayList<String> students = new ArrayList<>();
        students.add("Rahul");
        students.add("Priya");
        students.add("Amit");
        students.add("Sneha");

        System.out.println("Students: " + students);
        System.out.println("Size: " + students.size());
        System.out.println("First: " + students.get(0));

        // Add and remove
        students.add("Vikram");
        students.remove("Amit");
        System.out.println("After changes: " + students);

        // Sort and reverse
        Collections.sort(students);
        System.out.println("Sorted: " + students);
        Collections.reverse(students);
        System.out.println("Reversed: " + students);

        // Integer ArrayList with stats
        ArrayList<Integer> scores = new ArrayList<>();
        scores.add(85); scores.add(92);
        scores.add(78); scores.add(95);
        scores.add(88);

        System.out.println("\nScores: " + scores);
        System.out.println("Max: " + Collections.max(scores));
        System.out.println("Min: " + Collections.min(scores));

        // Iterate and filter
        System.out.println("High scorers (>=90):");
        for (int score : scores) {
            if (score >= 90) System.out.println("  " + score);
        }

        // Convert to array if needed
        Object[] arr = scores.toArray();
        System.out.println("As array length: " + arr.length);
    }
}`,
            explanation: `- ArrayList uses generics: \`ArrayList<String>\` — type in angle brackets
- Use wrapper classes: \`Integer\` not \`int\`, \`Double\` not \`double\`
- \`Collections.sort()\` modifies the list in-place (like Python's list.sort())
- \`ArrayList\` prints nicely: \`System.out.println(students)\` shows \`[Rahul, Priya, ...]\``,
          },
          exercise: {
            title: 'Playlist Manager',
            instructions: 'Build a playlist using ArrayList<String>. Add 5 songs, remove one, sort the playlist alphabetically, find if a specific song is in it, and print the final playlist numbered.',
            starterCode: `import java.util.ArrayList;
import java.util.Collections;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> playlist = new ArrayList<>();

        // Add 5 songs
        playlist.add("Kesariya");
        playlist.add("Tum Hi Ho");
        playlist.add("Jai Ho");
        playlist.add("Chaiyya Chaiyya");
        playlist.add("Dil Se");

        // Remove one song
        playlist.remove("Jai Ho");

        // Sort alphabetically
        Collections.sort(playlist);

        // Check if a song is in the playlist
        System.out.println("Has Tum Hi Ho: " + playlist.contains("Tum Hi Ho"));

        // Print numbered playlist
        System.out.println("\nMy Playlist:");
        for (int i = 0; i < playlist.size(); i++) {
            System.out.println((i + 1) + ". " + playlist.get(i));
        }
    }
}`,
            solutionCode: `import java.util.ArrayList;
import java.util.Collections;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> playlist = new ArrayList<>();
        playlist.add("Kesariya"); playlist.add("Tum Hi Ho");
        playlist.add("Jai Ho"); playlist.add("Chaiyya Chaiyya"); playlist.add("Dil Se");

        playlist.remove("Jai Ho");
        Collections.sort(playlist);

        System.out.println("Has Tum Hi Ho: " + playlist.contains("Tum Hi Ho"));
        System.out.println("\nMy Playlist:");
        for (int i = 0; i < playlist.size(); i++) {
            System.out.println((i+1) + ". " + playlist.get(i));
        }
    }
}`,
            hints: [
              '💡 ArrayList<String> with angle brackets specifies the element type',
              '💡 .contains("song") returns true if the song is in the list',
              '💡 Use index-based for loop with .get(i) for numbered output',
            ],
          },
          quiz: {
            questions: [
              { id: 'java-m2-l3-q1', question: 'Why use ArrayList<Integer> instead of ArrayList<int>?', options: ['int is not a valid type in Java', 'ArrayList requires object types — Integer is the object wrapper for int', 'Integer is faster than int', 'No reason — both work'], correct: 1, explanation: 'Java generics work with object types only, not primitives. Each primitive has an object wrapper: int→Integer, double→Double, boolean→Boolean. Java auto-boxes (int→Integer) and unboxes (Integer→int) automatically.' },
              { id: 'java-m2-l3-q2', question: 'What does Collections.sort() do to an ArrayList?', options: ['Returns a new sorted list', 'Modifies the list in-place and returns void', 'Throws an error', 'Only works on numbers'], correct: 1, explanation: 'Collections.sort() sorts the list in-place (modifies the original). It works on any ArrayList whose elements implement Comparable — including String and all numeric wrapper types.' },
            ],
          },
        },
      ],
    },

    // ════════════════════════════════════════════════
    //  MODULE 3 — Methods & Scope
    // ════════════════════════════════════════════════
    {
      id: 'java-m3', courseId: 'java',
      title: 'Methods & Scope',
      description: 'Write reusable methods, understand return types, pass arguments, and master variable scope.',
      level: 'beginner', order: 3, icon: '⚙️', xpReward: 130, locked: true,
      lessons: [

        {
          id: 'java-m3-l1', moduleId: 'java-m3',
          title: 'Writing Methods', order: 1, xpReward: 15, duration: '12 min',
          explanation: {
            title: 'Methods — Reusable Code Blocks',
            content: `# Methods in Java

A **method** is a reusable block of code with a name. Java requires ALL methods to be inside a class.

## Method Syntax

\`\`\`java
accessModifier returnType methodName(parameterList) {
    // method body
    return value;  // if returnType is not void
}
\`\`\`

## Examples

\`\`\`java
// void — no return value
public static void greet(String name) {
    System.out.println("Hello, " + name + "!");
}

// returns int
public static int add(int a, int b) {
    return a + b;
}

// returns String
public static String capitalize(String s) {
    return s.substring(0, 1).toUpperCase() + s.substring(1);
}
\`\`\`

## Calling Methods

\`\`\`java
greet("Rahul");              // void — just call it
int sum  = add(5, 3);       // capture return value
String cap = capitalize("hello");
\`\`\`

## Method Overloading

Same name, different parameters:

\`\`\`java
public static int add(int a, int b)         { return a + b; }
public static double add(double a, double b){ return a + b; }
public static int add(int a, int b, int c)  { return a+b+c; }

add(1, 2);        // calls int version
add(1.5, 2.5);    // calls double version
add(1, 2, 3);     // calls 3-param version
\`\`\``,
          },
          codeExample: {
            title: 'Methods in Action',
            language: 'java',
            code: `public class Main {

    // Helper methods (declared outside main but inside class)
    public static double celsiusToFahrenheit(double c) {
        return c * 9.0 / 5.0 + 32;
    }

    public static boolean isPrime(int n) {
        if (n < 2) return false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    public static String gradeFromScore(int score) {
        if      (score >= 90) return "A";
        else if (score >= 80) return "B";
        else if (score >= 70) return "C";
        else if (score >= 60) return "D";
        else                  return "F";
    }

    // Overloaded methods
    public static int max(int a, int b)          { return a > b ? a : b; }
    public static double max(double a, double b) { return a > b ? a : b; }
    public static int max(int a, int b, int c)   { return max(max(a, b), c); }

    public static void main(String[] args) {

        // Temperature conversion
        for (double c = 0; c <= 100; c += 25) {
            System.out.printf("%.0f°C = %.1f°F%n", c, celsiusToFahrenheit(c));
        }

        // Prime check
        System.out.println("\nPrimes up to 20:");
        for (int i = 2; i <= 20; i++) {
            if (isPrime(i)) System.out.print(i + " ");
        }

        // Grade from score
        int[] scores = {95, 83, 71, 55};
        System.out.println("\n\nGrades:");
        for (int s : scores) {
            System.out.printf("  %d → %s%n", s, gradeFromScore(s));
        }

        // Overloaded max
        System.out.println("\nMax(5,3): " + max(5, 3));
        System.out.println("Max(3.14, 2.71): " + max(3.14, 2.71));
        System.out.println("Max(1,5,3): " + max(1, 5, 3));
    }
}`,
            explanation: `- Methods are declared inside the class but outside main()
- \`static\` means the method belongs to the class, not an instance — required to call from static main
- \`Math.sqrt(n)\` — Java's built-in math library for common operations
- Method overloading: Java selects the right version based on argument types and count`,
          },
          exercise: {
            title: 'Calculator with Methods',
            instructions: 'Create static methods: add(a,b), subtract(a,b), multiply(a,b), divide(a,b), and power(base,exp). Call each from main and print the results.',
            starterCode: `public class Main {

    public static double add(double a, double b) {
        return a + b;
    }

    public static double subtract(double a, double b) {
        return a - b;
    }

    // Add multiply, divide (return 0 if divisor is 0), power methods

    public static void main(String[] args) {
        System.out.println("10 + 5 = " + add(10, 5));
        System.out.println("10 - 5 = " + subtract(10, 5));
        // Call multiply, divide, power
    }
}`,
            solutionCode: `public class Main {
    public static double add(double a, double b)      { return a + b; }
    public static double subtract(double a, double b) { return a - b; }
    public static double multiply(double a, double b) { return a * b; }
    public static double divide(double a, double b)   { return b == 0 ? 0 : a / b; }
    public static double power(double base, int exp)  {
        double result = 1;
        for (int i = 0; i < exp; i++) result *= base;
        return result;
    }
    public static void main(String[] args) {
        System.out.println("10 + 5 = " + add(10, 5));
        System.out.println("10 - 5 = " + subtract(10, 5));
        System.out.println("10 * 5 = " + multiply(10, 5));
        System.out.println("10 / 5 = " + divide(10, 5));
        System.out.println("2^8   = " + power(2, 8));
    }
}`,
            hints: [
              '💡 Protect against division by zero: return b == 0 ? 0 : a / b',
              '💡 Power using a loop: result = 1; for each exponent multiply by base',
              '💡 All methods should be public static before main can call them',
            ],
          },
          quiz: {
            questions: [
              { id: 'java-m3-l1-q1', question: 'Why do Java methods called from main() need "static"?', options: ['It makes them faster', 'main() is static and can only directly call other static methods without an object', 'static is required for all methods', 'It allows multiple return values'], correct: 1, explanation: 'main() is a static method — it belongs to the class, not an instance. Static methods can only call other static methods directly. To call non-static methods from main, you need to create an object first.' },
              { id: 'java-m3-l1-q2', question: 'What is method overloading?', options: ['Calling a method too many times', 'Defining multiple methods with the same name but different parameter types/counts', 'Overriding a parent method', 'A method with no return type'], correct: 1, explanation: 'Overloading allows same method name with different signatures. Java picks the right one based on the argument types and count you pass at call time.' },
            ],
          },
        },

        {
          id: 'java-m3-l2', moduleId: 'java-m3',
          title: 'Recursion', order: 2, xpReward: 20, duration: '14 min',
          explanation: {
            title: 'Recursion — Functions Calling Themselves',
            content: `# Recursion in Java

**Recursion** is when a method calls itself. Every recursive solution has:
1. A **base case** — when to stop
2. A **recursive case** — where the method calls itself with a smaller problem

## Classic Example: Factorial

\`\`\`java
// n! = n × (n-1) × (n-2) × ... × 1
public static int factorial(int n) {
    if (n <= 1) return 1;          // base case
    return n * factorial(n - 1);   // recursive case
}

factorial(5)
  = 5 * factorial(4)
  = 5 * 4 * factorial(3)
  = 5 * 4 * 3 * factorial(2)
  = 5 * 4 * 3 * 2 * factorial(1)
  = 5 * 4 * 3 * 2 * 1 = 120
\`\`\`

## Fibonacci

\`\`\`java
public static int fibonacci(int n) {
    if (n <= 1) return n;           // base case: fib(0)=0, fib(1)=1
    return fibonacci(n-1) + fibonacci(n-2);
}
\`\`\`

## When to use recursion vs loops?

| Use Recursion | Use Loop |
|---------------|----------|
| Tree/graph traversal | Simple repetition |
| Divide and conquer | Performance-critical |
| Natural recursive structure | Large inputs (risk of stack overflow) |
| Cleaner code matters | Memory is a concern |`,
          },
          codeExample: {
            title: 'Recursive Algorithms',
            language: 'java',
            code: `public class Main {

    // Factorial — n!
    public static long factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }

    // Fibonacci
    public static int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    // Sum of digits: sumDigits(123) = 1+2+3 = 6
    public static int sumDigits(int n) {
        if (n < 10) return n;
        return n % 10 + sumDigits(n / 10);
    }

    // Power: power(2, 8) = 256
    public static double power(double base, int exp) {
        if (exp == 0) return 1;
        if (exp < 0)  return 1.0 / power(base, -exp);
        return base * power(base, exp - 1);
    }

    // Print array recursively
    public static void printArray(int[] arr, int index) {
        if (index == arr.length) return;  // base case
        System.out.print(arr[index] + " ");
        printArray(arr, index + 1);       // recursive case
    }

    public static void main(String[] args) {
        // Factorials
        for (int i = 1; i <= 10; i++) {
            System.out.printf("%2d! = %d%n", i, factorial(i));
        }

        // Fibonacci sequence
        System.out.print("\nFib: ");
        for (int i = 0; i <= 10; i++) {
            System.out.print(fibonacci(i) + " ");
        }

        // Sum of digits
        System.out.println("\n\nsum(9876) = " + sumDigits(9876));

        // Power
        System.out.println("2^10 = " + (int)power(2, 10));

        // Print array recursively
        int[] nums = {5, 3, 8, 1, 9};
        System.out.print("Array: ");
        printArray(nums, 0);
    }
}`,
            explanation: `- Every recursive method MUST have a base case that stops the recursion
- Without a base case → StackOverflowError (infinite recursion)
- Java has a call stack limit — deep recursion should be converted to iteration for large inputs
- Fibonacci with naive recursion is exponential time — use iteration or memoization for large n`,
          },
          exercise: {
            title: 'Reverse a String Recursively',
            instructions: 'Write a recursive method reverseString(String s) that reverses a string. Base case: empty string or single character. Recursive case: last character + reverse of rest.',
            starterCode: `public class Main {

    public static String reverseString(String s) {
        // Base case: empty string or single char
        if (s.length() <= 1) return s;

        // Recursive case: last char + reverse of everything except last
        return s.charAt(s.length() - 1) + reverseString(s.substring(0, s.length() - 1));
    }

    public static void main(String[] args) {
        System.out.println(reverseString("Hello"));     // olleH
        System.out.println(reverseString("Java"));      // avaJ
        System.out.println(reverseString("CodeGuru"));  // uruGedoC
        System.out.println(reverseString("a"));         // a
        System.out.println(reverseString(""));          // (empty)
    }
}`,
            solutionCode: `public class Main {
    public static String reverseString(String s) {
        if (s.length() <= 1) return s;
        return s.charAt(s.length() - 1) + reverseString(s.substring(0, s.length() - 1));
    }
    public static void main(String[] args) {
        System.out.println(reverseString("Hello"));
        System.out.println(reverseString("Java"));
        System.out.println(reverseString("CodeGuru"));
    }
}`,
            hints: [
              '💡 s.charAt(s.length()-1) gets the last character',
              '💡 s.substring(0, s.length()-1) gets everything except the last char',
              '💡 Base case: if length <= 1, return s unchanged',
            ],
          },
          quiz: {
            questions: [
              { id: 'java-m3-l2-q1', question: 'What happens if a recursive method has no base case?', options: ['It returns null', 'StackOverflowError — it calls itself infinitely until memory runs out', 'It returns 0', 'It runs once and stops'], correct: 1, explanation: 'Without a base case, the method keeps calling itself indefinitely. Java\'s call stack has limited memory — it overflows with StackOverflowError, similar to an infinite loop but worse.' },
              { id: 'java-m3-l2-q2', question: 'What are the two essential parts of every recursive method?', options: ['Loop and condition', 'Base case (when to stop) and recursive case (self-call with smaller input)', 'Input and output', 'Class and method'], correct: 1, explanation: 'The base case stops the recursion (prevents infinite calls). The recursive case calls the method with a smaller/simpler version of the problem, moving toward the base case.' },
            ],
          },
        },

        {
          id: 'java-m3-l3', moduleId: 'java-m3',
          title: 'Scope & Variable Lifetime', order: 3, xpReward: 15, duration: '10 min',
          explanation: {
            title: 'Variable Scope in Java',
            content: `# Scope in Java

**Scope** determines where a variable can be accessed. Java has four levels.

## Local Variables

Declared inside a method — only accessible within that method.

\`\`\`java
public static void myMethod() {
    int localVar = 10;       // only exists here
    System.out.println(localVar);
}
// System.out.println(localVar);  // ERROR!
\`\`\`

## Block Scope

Variables inside \`{}\` blocks (if, for, while) are local to that block.

\`\`\`java
for (int i = 0; i < 5; i++) {
    int temp = i * 2;   // only exists in this loop
}
// System.out.println(i);    // ERROR — i is out of scope
// System.out.println(temp); // ERROR — temp is out of scope
\`\`\`

## Instance Variables (Class-level)

Belong to an object — accessible in all instance methods.

\`\`\`java
public class Student {
    String name;   // instance variable
    int age;

    void display() {
        System.out.println(name + " " + age);  // accessible
    }
}
\`\`\`

## Static Variables (Class-level)

Shared by ALL instances of the class.

\`\`\`java
public class Counter {
    static int count = 0;  // shared across all instances

    Counter() { count++; }
}
\`\`\``,
          },
          codeExample: {
            title: 'Scope Examples',
            language: 'java',
            code: `public class Main {

    // Class-level static variable — shared
    static int programCallCount = 0;

    // Method demonstrates local scope
    public static int computeSum(int n) {
        programCallCount++;      // accessing class-level variable

        int sum = 0;             // local to this method
        for (int i = 1; i <= n; i++) {
            // i and sum accessible here
            sum += i;
        }
        // i is out of scope here (after the loop)
        return sum;
    }

    public static void demonstrateScope() {
        int outer = 100;         // local to this method

        if (outer > 50) {
            int inner = 200;     // local to this if-block
            System.out.println("outer = " + outer);  // OK — outer is in scope
            System.out.println("inner = " + inner);  // OK — inner is in scope
        }
        // inner is out of scope here
        System.out.println("outer still = " + outer);  // OK

        // Shadowing — local var with same name as outer
        for (int outer2 = 0; outer2 < 3; outer2++) {
            System.out.println("loop var: " + outer2);
        }
    }

    public static void main(String[] args) {
        System.out.println("Sum(5) = "  + computeSum(5));
        System.out.println("Sum(10) = " + computeSum(10));
        System.out.println("Method called: " + programCallCount + " times");

        demonstrateScope();
    }
}`,
            explanation: `- Local variables exist only during method execution — then garbage collected
- Block scope: variables in \`{}\` only exist inside those braces
- Static variables persist for the entire program lifetime
- Each method has its own scope — no variable "leaks" between methods`,
          },
          exercise: {
            title: 'Scope Predictor',
            instructions: 'Given code with multiple scopes, predict what each System.out.println prints. Then write a class-level counter that tracks how many times calculateArea() is called.',
            starterCode: `public class Main {

    static int callCount = 0;   // class-level — accessible everywhere

    public static double calculateArea(double width, double height) {
        callCount++;
        double area = width * height;   // local variable
        return area;
    }

    public static void main(String[] args) {
        // Call calculateArea multiple times
        System.out.println("Area 1: " + calculateArea(5, 3));
        System.out.println("Area 2: " + calculateArea(10, 4));
        System.out.println("Area 3: " + calculateArea(7.5, 2.5));

        // Print how many times it was called
        System.out.println("Called: " + callCount + " times");

        // Scope in a loop
        int total = 0;
        for (int i = 1; i <= 5; i++) {
            total += i;
        }
        System.out.println("Total: " + total);
        // What would happen if you printed i here? (it's out of scope)
    }
}`,
            solutionCode: `public class Main {
    static int callCount = 0;

    public static double calculateArea(double width, double height) {
        callCount++;
        return width * height;
    }

    public static void main(String[] args) {
        System.out.println("Area 1: " + calculateArea(5, 3));
        System.out.println("Area 2: " + calculateArea(10, 4));
        System.out.println("Area 3: " + calculateArea(7.5, 2.5));
        System.out.println("Called: " + callCount + " times");

        int total = 0;
        for (int i = 1; i <= 5; i++) total += i;
        System.out.println("Total: " + total);
    }
}`,
            hints: [
              '💡 static int callCount tracks calls across ALL method invocations',
              '💡 callCount++ inside the method increments on every call',
              '💡 The loop variable i is out of scope after the closing brace',
            ],
          },
          quiz: {
            questions: [
              { id: 'java-m3-l3-q1', question: 'Where can a local variable be accessed?', options: ['Anywhere in the class', 'Only inside the method or block where it was declared', 'In all methods', 'Only in static methods'], correct: 1, explanation: 'Local variables are scoped to the block they\'re declared in — the method body, or a specific if/for/while block. They\'re created when execution enters the block and destroyed when it exits.' },
              { id: 'java-m3-l3-q2', question: 'What is the difference between static and instance variables?', options: ['No difference', 'Static is shared by all instances; instance variables belong to each object separately', 'Instance is shared; static belongs to one object', 'Static is faster'], correct: 1, explanation: 'Static variables (class variables) have ONE copy shared across ALL instances. Instance variables have one copy PER object. Changing a static variable affects all objects.' },
            ],
          },
        },
      ],
    },

    // ════════════════════════════════════════════════
    //  MODULE 4 — Object-Oriented Programming
    // ════════════════════════════════════════════════
    {
      id: 'java-m4', courseId: 'java',
      title: 'Object-Oriented Programming',
      description: 'Classes, objects, constructors, encapsulation — the foundation of professional Java development.',
      level: 'beginner', order: 4, icon: '🏛️', xpReward: 150, locked: true,
      lessons: [

        {
          id: 'java-m4-l1', moduleId: 'java-m4',
          title: 'Classes & Objects', order: 1, xpReward: 20, duration: '14 min',
          explanation: {
            title: 'Classes — Blueprints for Objects',
            content: `# Object-Oriented Programming in Java

OOP organizes code around **objects** — bundles of data (fields) and behaviour (methods).

## Class — the Blueprint

\`\`\`java
public class Student {

    // Fields (attributes/instance variables)
    String name;
    int    age;
    double gpa;

    // Constructor — called when creating a new object
    public Student(String name, int age, double gpa) {
        this.name = name;   // this.name = field, name = parameter
        this.age  = age;
        this.gpa  = gpa;
    }

    // Methods (behaviour)
    public void introduce() {
        System.out.println("I'm " + name + ", age " + age);
    }

    public String getGradeStatus() {
        return gpa >= 3.0 ? "Good Standing" : "Academic Warning";
    }
}
\`\`\`

## Object — an Instance of the Class

\`\`\`java
Student s1 = new Student("Rahul",  21, 3.8);
Student s2 = new Student("Priya",  20, 3.5);

s1.introduce();                // "I'm Rahul, age 21"
System.out.println(s2.gpa);   // 3.5
\`\`\`

## this keyword

\`\`\`java
// In a method, "this" refers to the current object
public void updateGpa(double gpa) {
    this.gpa = gpa;  // this.gpa = field; gpa = parameter
}
\`\`\``,
          },
          codeExample: {
            title: 'Classes and Objects',
            language: 'java',
            code: `// BankAccount class
class BankAccount {
    String owner;
    double balance;
    int    transactionCount;

    // Constructor
    BankAccount(String owner, double initialBalance) {
        this.owner            = owner;
        this.balance          = initialBalance;
        this.transactionCount = 0;
    }

    void deposit(double amount) {
        if (amount <= 0) {
            System.out.println("Invalid deposit amount");
            return;
        }
        balance += amount;
        transactionCount++;
        System.out.printf("Deposited ₹%.2f. Balance: ₹%.2f%n", amount, balance);
    }

    void withdraw(double amount) {
        if (amount > balance) {
            System.out.println("Insufficient funds!");
            return;
        }
        balance -= amount;
        transactionCount++;
        System.out.printf("Withdrew ₹%.2f. Balance: ₹%.2f%n", amount, balance);
    }

    void printStatement() {
        System.out.println("\n=== Account: " + owner + " ===");
        System.out.printf("Balance: ₹%.2f%n", balance);
        System.out.println("Transactions: " + transactionCount);
    }
}

public class Main {
    public static void main(String[] args) {

        BankAccount acc1 = new BankAccount("Rahul", 5000);
        BankAccount acc2 = new BankAccount("Priya", 10000);

        acc1.deposit(2000);
        acc1.withdraw(500);
        acc1.withdraw(10000);  // will fail — insufficient
        acc1.printStatement();

        acc2.deposit(5000);
        acc2.printStatement();

        // Each object has its own data
        System.out.println("\nAcc1 balance: " + acc1.balance);
        System.out.println("Acc2 balance: " + acc2.balance);
    }
}`,
            explanation: `- Classes are usually defined in their own files (same name as class)
- For learning, inner classes or multiple classes in one file are okay
- Each \`new BankAccount()\` creates a completely independent object with its own data
- \`this.field\` disambiguates when parameter name matches field name`,
          },
          exercise: {
            title: 'Product Inventory Class',
            instructions: 'Create a Product class with fields: name, price, quantity. Constructor sets all three. Methods: sell(int qty) decreases quantity (reject if insufficient), restock(int qty) increases quantity, getTotal() returns price*quantity, display() prints all info.',
            starterCode: `class Product {
    String name;
    double price;
    int    quantity;

    Product(String name, double price, int quantity) {
        this.name     = name;
        this.price    = price;
        this.quantity = quantity;
    }

    void sell(int qty) {
        if (qty > quantity) {
            System.out.println("Cannot sell " + qty + " — only " + quantity + " in stock");
            return;
        }
        quantity -= qty;
        System.out.println("Sold " + qty + " " + name);
    }

    void restock(int qty) {
        quantity += qty;
        System.out.println("Restocked " + qty + " units of " + name);
    }

    double getTotal() { return price * quantity; }

    void display() {
        System.out.printf("%-15s ₹%6.2f x %3d = ₹%.2f%n", name, price, quantity, getTotal());
    }
}

public class Main {
    public static void main(String[] args) {
        Product laptop = new Product("Laptop", 45000.0, 10);
        Product phone  = new Product("Phone",  15000.0, 25);

        laptop.display();
        laptop.sell(3);
        laptop.sell(20);  // should fail
        laptop.restock(5);
        laptop.display();

        phone.display();
    }
}`,
            solutionCode: `class Product {
    String name; double price; int quantity;
    Product(String n, double p, int q) { name=n; price=p; quantity=q; }
    void sell(int q) {
        if (q>quantity){System.out.println("Only "+quantity+" in stock"); return;}
        quantity-=q; System.out.println("Sold "+q+" "+name);
    }
    void restock(int q) { quantity+=q; System.out.println("Restocked "+q+" "+name); }
    double getTotal() { return price*quantity; }
    void display() { System.out.printf("%-15s ₹%6.2f x %3d = ₹%.2f%n",name,price,quantity,getTotal()); }
}
public class Main {
    public static void main(String[] args) {
        Product laptop = new Product("Laptop",45000.0,10);
        laptop.display(); laptop.sell(3); laptop.sell(20); laptop.restock(5); laptop.display();
    }
}`,
            hints: [
              '💡 Check qty > quantity in sell() before subtracting',
              '💡 getTotal() just returns price * quantity',
              '💡 Use printf with %-15s for left-aligned name column',
            ],
          },
          quiz: {
            questions: [
              { id: 'java-m4-l1-q1', question: 'What is the purpose of a constructor in Java?', options: ['To destroy an object', 'To initialize an object\'s fields when it\'s created with "new"', 'To define static methods', 'To return a value from the class'], correct: 1, explanation: 'A constructor runs automatically when you use "new ClassName()". Its purpose is to initialize the object\'s fields to valid starting values. If you don\'t write one, Java provides a no-arg default constructor.' },
              { id: 'java-m4-l1-q2', question: 'What does "this" refer to inside an instance method?', options: ['The class itself', 'The current object instance', 'The parent class', 'The main method'], correct: 1, explanation: '"this" is a reference to the current object. It\'s used to: disambiguate fields from parameters (this.name = name), call other constructors (this(args)), or pass the current object as an argument.' },
            ],
          },
        },

        {
          id: 'java-m4-l2', moduleId: 'java-m4',
          title: 'Encapsulation & Access Modifiers', order: 2, xpReward: 20, duration: '14 min',
          explanation: {
            title: 'Encapsulation — Protecting Your Data',
            content: `# Encapsulation

**Encapsulation** hides internal data behind methods, controlling how it's accessed and modified. This is one of OOP's four pillars.

## Access Modifiers

| Modifier | Accessible from |
|----------|----------------|
| \`public\` | Anywhere |
| \`private\` | Only within same class |
| \`protected\` | Same class + subclasses |
| (default) | Same package |

## The Pattern — private fields + public getters/setters

\`\`\`java
public class Person {
    private String name;   // hidden — can't access directly
    private int    age;

    // Getter — controlled read access
    public String getName() { return name; }
    public int    getAge()  { return age; }

    // Setter — controlled write access with validation
    public void setAge(int age) {
        if (age < 0 || age > 150) {
            throw new IllegalArgumentException("Invalid age: " + age);
        }
        this.age = age;
    }
}

// Using the class
Person p = new Person("Rahul", 21);
System.out.println(p.getName());  // "Rahul" — via getter
p.setAge(-5);                     // throws exception — protected!
\`\`\`

## Why Encapsulate?

- Validation: prevent invalid values (age = -100)
- Computed properties: getter calculates from other fields
- Maintainability: change internal implementation without breaking callers`,
          },
          codeExample: {
            title: 'Encapsulation in Practice',
            language: 'java',
            code: `public class Student {
    private String name;
    private int    age;
    private double gpa;
    private String email;

    // Constructor
    public Student(String name, int age, double gpa, String email) {
        this.name  = name;
        setAge(age);      // use setter for validation!
        setGpa(gpa);
        setEmail(email);
    }

    // Getters
    public String getName()  { return name; }
    public int    getAge()   { return age; }
    public double getGpa()   { return gpa; }
    public String getEmail() { return email; }

    // Setters with validation
    public void setAge(int age) {
        if (age < 16 || age > 100)
            throw new IllegalArgumentException("Age must be 16-100");
        this.age = age;
    }

    public void setGpa(double gpa) {
        if (gpa < 0.0 || gpa > 4.0)
            throw new IllegalArgumentException("GPA must be 0.0-4.0");
        this.gpa = gpa;
    }

    public void setEmail(String email) {
        if (!email.contains("@"))
            throw new IllegalArgumentException("Invalid email");
        this.email = email;
    }

    // Computed property (derived from fields)
    public String getLetterGrade() {
        if (gpa >= 3.7) return "A";
        if (gpa >= 3.3) return "A-";
        if (gpa >= 3.0) return "B+";
        if (gpa >= 2.7) return "B";
        return "C";
    }

    // toString — used when printing the object
    @Override
    public String toString() {
        return String.format("Student{name='%s', age=%d, gpa=%.2f, grade=%s}",
                             name, age, gpa, getLetterGrade());
    }
}

class Main {
    public static void main(String[] args) {
        Student s = new Student("Rahul", 21, 3.8, "rahul@gmail.com");
        System.out.println(s);

        // Update via setters
        s.setGpa(3.9);
        System.out.println("Updated GPA: " + s.getGpa());
        System.out.println("Grade: " + s.getLetterGrade());

        // This would throw an exception:
        try {
            s.setAge(-5);
        } catch (IllegalArgumentException e) {
            System.out.println("Caught: " + e.getMessage());
        }
    }
}`,
            explanation: `- \`private\` fields cannot be accessed from outside the class — only via getters/setters
- Setters can validate data and throw exceptions for invalid input
- \`@Override\` annotation marks that we're overriding a parent class method (here, Object.toString())
- \`toString()\` is automatically called when you print an object: \`System.out.println(student)\``,
          },
          exercise: {
            title: 'Temperature Class',
            instructions: 'Create a Temperature class with a private double celsius field. Provide: constructor(celsius), getCelsius(), setCelsius(val) with validation (>= -273.15), getFahrenheit() returns computed F, getKelvin() returns computed K, and toString().',
            starterCode: `public class Temperature {
    private double celsius;

    public Temperature(double celsius) {
        setCelsius(celsius);
    }

    public double getCelsius() { return celsius; }

    public void setCelsius(double celsius) {
        if (celsius < -273.15)
            throw new IllegalArgumentException("Below absolute zero!");
        this.celsius = celsius;
    }

    public double getFahrenheit() { return celsius * 9.0/5.0 + 32; }
    public double getKelvin()     { return celsius + 273.15; }

    @Override
    public String toString() {
        return String.format("%.1f°C = %.1f°F = %.1fK", celsius, getFahrenheit(), getKelvin());
    }
}

class Main {
    public static void main(String[] args) {
        Temperature t1 = new Temperature(100);
        Temperature t2 = new Temperature(0);
        Temperature t3 = new Temperature(37);

        System.out.println(t1);
        System.out.println(t2);
        System.out.println(t3);

        t1.setCelsius(-40);
        System.out.println(t1);

        try {
            new Temperature(-300);
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,
            solutionCode: `public class Temperature {
    private double celsius;
    public Temperature(double c) { setCelsius(c); }
    public double getCelsius()   { return celsius; }
    public void setCelsius(double c) {
        if (c < -273.15) throw new IllegalArgumentException("Below absolute zero!");
        this.celsius = c;
    }
    public double getFahrenheit() { return celsius*9.0/5.0+32; }
    public double getKelvin()     { return celsius+273.15; }
    public String toString() { return String.format("%.1f°C = %.1f°F = %.1fK",celsius,getFahrenheit(),getKelvin()); }
}
class Main {
    public static void main(String[] args) {
        System.out.println(new Temperature(100));
        System.out.println(new Temperature(0));
        System.out.println(new Temperature(37));
        try { new Temperature(-300); } catch(IllegalArgumentException e){ System.out.println("Error: "+e.getMessage()); }
    }
}`,
            hints: [
              '💡 Absolute zero is -273.15°C — the minimum possible temperature',
              '💡 F = C * 9/5 + 32; K = C + 273.15',
              '💡 @Override toString() is called automatically by println(object)',
            ],
          },
          quiz: {
            questions: [
              { id: 'java-m4-l2-q1', question: 'What is the main benefit of making fields private?', options: ['It makes them faster', 'It prevents unauthorized or invalid modification — class controls its own state', 'It prevents the fields from being read', 'It is required by Java'], correct: 1, explanation: 'Private fields can only be accessed through the class\'s own methods. This allows adding validation in setters, computed properties in getters, and changing internal implementation without breaking external code.' },
              { id: 'java-m4-l2-q2', question: 'What method should you override to control how an object prints?', options: ['print()', 'display()', 'toString()', 'output()'], correct: 2, explanation: 'toString() is called automatically by System.out.println(object) and String concatenation. Override it to return a meaningful string representation of your object.' },
            ],
          },
        },

        {
          id: 'java-m4-l3', moduleId: 'java-m4',
          title: 'Inheritance & Polymorphism', order: 3, xpReward: 25, duration: '16 min',
          explanation: {
            title: 'Inheritance — Building on Existing Classes',
            content: `# Inheritance in Java

**Inheritance** lets a class inherit fields and methods from another class. Reduces code duplication.

## extends keyword

\`\`\`java
public class Animal {
    protected String name;
    protected String sound;

    public Animal(String name, String sound) {
        this.name  = name;
        this.sound = sound;
    }

    public void makeSound() {
        System.out.println(name + " says: " + sound);
    }
}

public class Dog extends Animal {
    private String breed;

    public Dog(String name, String breed) {
        super(name, "Woof");   // call parent constructor
        this.breed = breed;
    }

    public void fetch() {
        System.out.println(name + " fetches the ball!");
    }
}
\`\`\`

## Polymorphism — one interface, many forms

\`\`\`java
Animal a1 = new Dog("Bruno", "Labrador");
Animal a2 = new Cat("Whiskers");

a1.makeSound();  // "Bruno says: Woof" — Dog version
a2.makeSound();  // "Whiskers says: Meow" — Cat version
\`\`\`

## @Override — method overriding

\`\`\`java
public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println(name + " barks: " + sound + "!");
    }
}
\`\`\``,
          },
          codeExample: {
            title: 'Inheritance & Polymorphism',
            language: 'java',
            code: `// Shape hierarchy
abstract class Shape {
    protected String color;

    Shape(String color) { this.color = color; }

    // Abstract method — subclasses MUST implement
    public abstract double getArea();
    public abstract double getPerimeter();

    // Concrete method — inherited by all subclasses
    public void describe() {
        System.out.printf("%s %s: area=%.2f, perimeter=%.2f%n",
                          color, getClass().getSimpleName(),
                          getArea(), getPerimeter());
    }
}

class Circle extends Shape {
    private double radius;

    Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }

    @Override public double getArea()      { return Math.PI * radius * radius; }
    @Override public double getPerimeter() { return 2 * Math.PI * radius; }
}

class Rectangle extends Shape {
    private double width, height;

    Rectangle(String color, double width, double height) {
        super(color);
        this.width = width; this.height = height;
    }

    @Override public double getArea()      { return width * height; }
    @Override public double getPerimeter() { return 2 * (width + height); }
}

class Square extends Rectangle {
    Square(String color, double side) {
        super(color, side, side);   // square is a rectangle with equal sides
    }
}

public class Main {
    public static void main(String[] args) {

        // Polymorphism — Shape array holds different shapes
        Shape[] shapes = {
            new Circle("Red",    5.0),
            new Rectangle("Blue", 4.0, 6.0),
            new Square("Green",  3.0),
            new Circle("Yellow", 2.5),
        };

        System.out.println("=== All Shapes ===");
        for (Shape shape : shapes) {
            shape.describe();   // calls the correct override!
        }

        // Calculate total area
        double totalArea = 0;
        for (Shape s : shapes) totalArea += s.getArea();
        System.out.printf("%nTotal area: %.2f%n", totalArea);

        // instanceof check
        for (Shape s : shapes) {
            if (s instanceof Circle c) {  // Java 16+ pattern matching
                System.out.println(c.color + " circle found!");
            }
        }
    }
}`,
            explanation: `- \`abstract class\` cannot be instantiated directly — must be subclassed
- \`abstract method\` has no body — subclasses MUST provide implementation
- \`@Override\` annotation verifies you're actually overriding (helps catch typos)
- Polymorphism: \`Shape[] shapes\` can hold Circles, Rectangles, Squares
- \`getClass().getSimpleName()\` returns the class name as a String`,
          },
          exercise: {
            title: 'Employee Hierarchy',
            instructions: 'Create an Employee base class (name, salary, department). FullTimeEmployee extends Employee and adds overtime pay calculation. PartTimeEmployee has hourlyRate and hoursWorked fields. Override calculatePay() in each. Print all employee pay from a single Employee array.',
            starterCode: `class Employee {
    protected String name;
    protected String department;

    Employee(String name, String department) {
        this.name = name; this.department = department;
    }

    public double calculatePay()  { return 0; }

    @Override public String toString() {
        return String.format("%-15s %-12s ₹%.2f", name, department, calculatePay());
    }
}

class FullTimeEmployee extends Employee {
    private double monthlySalary;
    private double overtimeHours;

    FullTimeEmployee(String name, String dept, double salary, double overtime) {
        super(name, dept);
        this.monthlySalary = salary;
        this.overtimeHours = overtime;
    }

    @Override
    public double calculatePay() {
        double hourlyRate = monthlySalary / 160;   // 160 work hours/month
        return monthlySalary + (hourlyRate * 1.5 * overtimeHours);
    }
}

class PartTimeEmployee extends Employee {
    private double hourlyRate;
    private int    hoursWorked;

    PartTimeEmployee(String name, String dept, double rate, int hours) {
        super(name, dept);
        this.hourlyRate  = rate;
        this.hoursWorked = hours;
    }

    @Override
    public double calculatePay() { return hourlyRate * hoursWorked; }
}

public class Main {
    public static void main(String[] args) {
        Employee[] staff = {
            new FullTimeEmployee("Rahul",  "Engineering", 60000, 10),
            new FullTimeEmployee("Priya",  "Marketing",   50000,  5),
            new PartTimeEmployee("Amit",   "Support",     300,   80),
            new PartTimeEmployee("Sneha",  "Design",      400,   60),
        };

        System.out.println("=== Payroll ===");
        System.out.printf("%-15s %-12s %s%n", "Name", "Dept", "Pay");
        System.out.println("-".repeat(40));
        double total = 0;
        for (Employee e : staff) {
            System.out.println(e);
            total += e.calculatePay();
        }
        System.out.printf("%nTotal Payroll: ₹%.2f%n", total);
    }
}`,
            solutionCode: `// (same as starter — it's already the complete solution)`,
            hints: [
              '💡 super(name, dept) calls the parent Employee constructor',
              '💡 @Override calculatePay() in each subclass with different logic',
              '💡 Employee[] array holds FullTime and PartTime — polymorphism at work',
            ],
          },
          quiz: {
            questions: [
              { id: 'java-m4-l3-q1', question: 'What does "super(args)" do in a subclass constructor?', options: ['Creates a superclass object', 'Calls the parent class constructor — must be the first statement', 'Overrides the parent', 'Returns the parent class'], correct: 1, explanation: 'super(args) calls the parent class constructor. It must be the FIRST statement in the subclass constructor. Without an explicit super() call, Java implicitly calls the no-arg parent constructor.' },
              { id: 'java-m4-l3-q2', question: 'What is polymorphism in Java?', options: ['Having multiple constructors', 'Objects of different types being treated as their common parent type — each responds to the same method call with its own behavior', 'Inheriting from multiple classes', 'Having both static and non-static methods'], correct: 1, explanation: 'Polymorphism: a Shape variable can hold a Circle, Rectangle, or Square. Calling shape.getArea() executes the correct version for each actual type. This enables writing generic code that works with any subtype.' },
            ],
          },
        },
      ],
    },

    // ════════════════════════════════════════════════
    //  MODULE 5 — Interfaces & Abstract Classes
    // ════════════════════════════════════════════════
    {
      id: 'java-m5', courseId: 'java',
      title: 'Interfaces & Abstract Classes',
      description: 'Design flexible, contract-based code with interfaces and understand when to use abstract classes.',
      level: 'beginner', order: 5, icon: '📐', xpReward: 150, locked: true,
      lessons: [

        {
          id: 'java-m5-l1', moduleId: 'java-m5',
          title: 'Interfaces', order: 1, xpReward: 20, duration: '14 min',
          explanation: {
            title: 'Interfaces — Contracts for Behaviour',
            content: `# Interfaces in Java

An **interface** defines a contract — a set of methods that implementing classes MUST provide. It defines WHAT, not HOW.

## Defining an Interface

\`\`\`java
public interface Drawable {
    void draw();           // abstract by default
    void setColor(String color);
}

public interface Resizable {
    void resize(double factor);
    double getArea();
}
\`\`\`

## Implementing Interfaces

\`\`\`java
// A class can implement MULTIPLE interfaces
public class Circle implements Drawable, Resizable {
    private double radius;
    private String color;

    @Override
    public void draw() {
        System.out.println("Drawing a " + color + " circle");
    }

    @Override
    public void resize(double factor) { radius *= factor; }

    @Override
    public double getArea() { return Math.PI * radius * radius; }
}
\`\`\`

## Interface vs Abstract Class

| | Interface | Abstract Class |
|-|-----------|----------------|
| Methods | Abstract (default implementations via \`default\`) | Can have both |
| Fields | Only \`public static final\` constants | Any fields |
| Multiple | A class implements MANY interfaces | Can only extend ONE class |
| Use when | Defining a capability/contract | Sharing common implementation |`,
          },
          codeExample: {
            title: 'Interfaces in Practice',
            language: 'java',
            code: `// Interfaces
interface Printable {
    void print();
    default void printWithBorder() {    // default implementation (Java 8+)
        System.out.println("---");
        print();
        System.out.println("---");
    }
}

interface Saveable {
    void save(String filename);
    boolean isModified();
}

// Document implements both
class Document implements Printable, Saveable {
    private String title;
    private String content;
    private boolean modified = false;

    Document(String title, String content) {
        this.title   = title;
        this.content = content;
    }

    @Override
    public void print() {
        System.out.println("Title: " + title);
        System.out.println("Content: " + content);
    }

    @Override
    public void save(String filename) {
        System.out.println("Saving '" + title + "' to " + filename);
        modified = false;
    }

    @Override
    public boolean isModified() { return modified; }

    public void edit(String newContent) {
        content  = newContent;
        modified = true;
    }
}

public class Main {
    // Method accepting any Printable
    static void printAll(Printable[] items) {
        for (Printable item : items) {
            item.printWithBorder();   // uses default interface method
        }
    }

    public static void main(String[] args) {
        Document doc1 = new Document("Java Guide", "Learn OOP in Java");
        Document doc2 = new Document("CSS Tips", "Flexbox and Grid");

        doc1.edit("Learn OOP in Java — Updated!");

        Printable[] printables = {doc1, doc2};
        printAll(printables);

        System.out.println("Doc1 modified: " + doc1.isModified());
        doc1.save("java_guide.txt");
        System.out.println("After save modified: " + doc1.isModified());
    }
}`,
            explanation: `- \`implements\` is for interfaces (vs \`extends\` for classes)
- A class can implement multiple interfaces — solving Java's no multiple inheritance limitation
- \`default\` methods in interfaces provide a fallback implementation
- Interfaces are used as types: \`Printable[] items\` can hold any class implementing Printable`,
          },
          exercise: {
            title: 'Payment Interface',
            instructions: 'Define a Payable interface with methods: processPayment(double amount), getPaymentMethod(), and isValid(). Create two classes: CreditCardPayment and UPIPayment, each implementing Payable differently. Process payments polymorphically.',
            starterCode: `interface Payable {
    boolean processPayment(double amount);
    String  getPaymentMethod();
    boolean isValid();
}

class CreditCardPayment implements Payable {
    private String cardNumber;
    private double creditLimit;
    private double usedCredit;

    CreditCardPayment(String cardNumber, double creditLimit) {
        this.cardNumber  = cardNumber;
        this.creditLimit = creditLimit;
        this.usedCredit  = 0;
    }

    @Override
    public boolean processPayment(double amount) {
        if (!isValid() || usedCredit + amount > creditLimit) {
            System.out.println("Credit card payment FAILED: ₹" + amount);
            return false;
        }
        usedCredit += amount;
        System.out.printf("Credit card ****%s: ₹%.2f charged. Limit remaining: ₹%.2f%n",
                          cardNumber.substring(cardNumber.length()-4), amount, creditLimit-usedCredit);
        return true;
    }

    @Override public String  getPaymentMethod() { return "Credit Card"; }
    @Override public boolean isValid()          { return cardNumber != null && creditLimit > 0; }
}

class UPIPayment implements Payable {
    private String upiId;
    private double balance;

    UPIPayment(String upiId, double balance) {
        this.upiId   = upiId;
        this.balance = balance;
    }

    @Override
    public boolean processPayment(double amount) {
        if (!isValid() || balance < amount) {
            System.out.println("UPI payment FAILED: insufficient balance");
            return false;
        }
        balance -= amount;
        System.out.printf("UPI %s: ₹%.2f paid. Balance: ₹%.2f%n", upiId, amount, balance);
        return true;
    }

    @Override public String  getPaymentMethod() { return "UPI"; }
    @Override public boolean isValid()          { return upiId != null && upiId.contains("@"); }
}

public class Main {
    static void checkout(Payable payment, double amount) {
        System.out.println("Method: " + payment.getPaymentMethod());
        payment.processPayment(amount);
    }

    public static void main(String[] args) {
        Payable cc  = new CreditCardPayment("4111111111111234", 50000);
        Payable upi = new UPIPayment("rahul@okicici", 10000);

        checkout(cc,  15000);
        checkout(upi, 3500);
        checkout(upi, 8000);   // should fail — insufficient
    }
}`,
            solutionCode: `// (starter is the solution — already complete)`,
            hints: [
              '💡 implements Payable means the class must provide all interface methods',
              '💡 isValid() can check if fields have valid values before processing',
              '💡 static void checkout(Payable payment) works with ANY Payable — polymorphism',
            ],
          },
          quiz: {
            questions: [
              { id: 'java-m5-l1-q1', question: 'How many interfaces can a Java class implement?', options: ['Only one', 'Only two', 'As many as needed', 'Only interfaces from the same package'], correct: 2, explanation: 'A Java class can implement any number of interfaces: class MyClass implements A, B, C, D. This is Java\'s solution to the problem that you can only extend ONE class.' },
              { id: 'java-m5-l1-q2', question: 'What keyword does a class use to implement an interface?', options: ['extends', 'implements', 'interface', 'uses'], correct: 1, explanation: 'Classes use "implements" for interfaces: class Dog implements Animal. Classes use "extends" for other classes. Interfaces can "extend" other interfaces.' },
            ],
          },
        },

        {
          id: 'java-m5-l2', moduleId: 'java-m5',
          title: 'Abstract Classes', order: 2, xpReward: 20, duration: '14 min',
          explanation: {
            title: 'Abstract Classes — Partial Blueprints',
            content: `# Abstract Classes

An **abstract class** sits between a regular class and an interface. It can have:
- Concrete methods (with implementation — shared by subclasses)
- Abstract methods (no implementation — subclasses must override)
- Fields (state shared with subclasses)

## Defining Abstract Classes

\`\`\`java
public abstract class Vehicle {

    // Concrete fields and methods — shared by all vehicles
    protected String brand;
    protected int    year;

    public Vehicle(String brand, int year) {
        this.brand = brand;
        this.year  = year;
    }

    // Concrete method — inherited as-is
    public String getInfo() {
        return brand + " (" + year + ")";
    }

    // Abstract methods — each vehicle type defines these differently
    public abstract double calculateFuelCost(int km);
    public abstract String getFuelType();
}
\`\`\`

## Extending Abstract Classes

\`\`\`java
public class ElectricCar extends Vehicle {
    private double batteryCapacityKwh;
    private double kmPerKwh;

    @Override
    public double calculateFuelCost(int km) {
        double kwh = km / kmPerKwh;
        return kwh * 8.5;  // ₹8.5 per kWh
    }

    @Override
    public String getFuelType() { return "Electric"; }
}
\`\`\`

## When to use Abstract Class vs Interface?

**Abstract Class** when:
- Subclasses share common state (fields) and implementation
- You're modeling an "is-a" relationship with shared base behavior

**Interface** when:
- Defining a capability that unrelated classes might have
- Multiple inheritance of type is needed`,
          },
          codeExample: {
            title: 'Abstract Classes',
            language: 'java',
            code: `abstract class Instrument {
    protected String name;
    protected String material;

    Instrument(String name, String material) {
        this.name     = name;
        this.material = material;
    }

    // Abstract — every instrument plays differently
    public abstract void play();
    public abstract String getType();  // "String", "Wind", "Percussion"

    // Concrete — shared by all instruments
    public void tune() {
        System.out.println(name + " is being tuned...");
    }

    public String getInfo() {
        return String.format("%s (%s, made of %s)", name, getType(), material);
    }
}

class Guitar extends Instrument {
    private int strings;

    Guitar(String name, int strings) {
        super(name, "Wood");
        this.strings = strings;
    }

    @Override public void   play()    { System.out.println(name + " strums " + strings + " strings!"); }
    @Override public String getType() { return "String"; }
}

class Flute extends Instrument {
    Flute(String name) { super(name, "Metal"); }

    @Override public void   play()    { System.out.println(name + " plays a melodic tune!"); }
    @Override public String getType() { return "Wind"; }
}

class Tabla extends Instrument {
    Tabla() { super("Tabla", "Wood/Leather"); }

    @Override public void   play()    { System.out.println("Tabla beats dhaa dhin dhin dhaa!"); }
    @Override public String getType() { return "Percussion"; }
}

public class Main {
    public static void main(String[] args) {
        Instrument[] orchestra = {
            new Guitar("Acoustic Guitar", 6),
            new Guitar("Bass Guitar",     4),
            new Flute("Bansuri"),
            new Tabla()
        };

        System.out.println("=== Orchestra ===");
        for (Instrument inst : orchestra) {
            System.out.println(inst.getInfo());
            inst.tune();
            inst.play();
            System.out.println();
        }
    }
}`,
            explanation: `- \`abstract class\` cannot be instantiated with \`new\` directly
- Abstract methods have no body — just the signature
- Concrete methods in abstract class are inherited by all subclasses unchanged
- The power: \`Instrument[] orchestra\` holds different types, \`inst.play()\` calls each correctly`,
          },
          exercise: {
            title: 'Notification System',
            instructions: 'Create an abstract class Notification with abstract method send(String recipient, String message) and concrete method log(String message). Implement EmailNotification and SMSNotification with different send() implementations.',
            starterCode: `abstract class Notification {
    protected String sender;
    protected java.util.List<String> sentLog = new java.util.ArrayList<>();

    Notification(String sender) { this.sender = sender; }

    public abstract boolean send(String recipient, String message);

    // Concrete — shared logging
    protected void log(String entry) {
        sentLog.add(entry);
        System.out.println("[LOG] " + entry);
    }

    public void printLog() {
        System.out.println("\n=== Notification Log for " + sender + " ===");
        sentLog.forEach(e -> System.out.println("  " + e));
    }
}

class EmailNotification extends Notification {
    private String domain;

    EmailNotification(String sender, String domain) {
        super(sender);
        this.domain = domain;
    }

    @Override
    public boolean send(String recipient, String message) {
        if (!recipient.contains("@")) {
            log("FAILED email to " + recipient + " (invalid address)");
            return false;
        }
        log("Email sent to " + recipient + ": " + message.substring(0, Math.min(30, message.length())));
        return true;
    }
}

class SMSNotification extends Notification {
    SMSNotification(String sender) { super(sender); }

    @Override
    public boolean send(String recipient, String message) {
        if (message.length() > 160) {
            log("FAILED SMS (too long: " + message.length() + " chars)");
            return false;
        }
        log("SMS to " + recipient + ": " + message);
        return true;
    }
}

public class Main {
    public static void main(String[] args) {
        Notification email = new EmailNotification("CodeGuru", "codeguru.ai");
        Notification sms   = new SMSNotification("CodeGuru");

        email.send("rahul@gmail.com", "Your course is ready!");
        email.send("invalid-email",   "Will fail");
        sms.send("9876543210",        "OTP: 456789");
        sms.send("9123456789",        "A".repeat(200));  // too long

        email.printLog();
        sms.printLog();
    }
}`,
            solutionCode: `// (starter is the complete solution)`,
            hints: [
              '💡 abstract class uses abstract method + concrete method together',
              '💡 log() is protected — subclasses call it in their send() implementations',
              '💡 Notification email = new EmailNotification(...) — polymorphism',
            ],
          },
          quiz: {
            questions: [
              { id: 'java-m5-l2-q1', question: 'Can you instantiate (create an object of) an abstract class directly?', options: ['Yes', 'No — abstract classes must be subclassed', 'Only if it has no abstract methods', 'Only in the same package'], correct: 1, explanation: 'Abstract classes cannot be instantiated with "new AbstractClass()". They must be extended by a concrete subclass that implements all abstract methods. This enforces the pattern of providing a required implementation.' },
              { id: 'java-m5-l2-q2', question: 'What is the key difference between abstract class and interface fields?', options: ['No difference', 'Interface fields are implicitly public static final (constants); abstract class fields can be any type including instance variables', 'Abstract class fields must be static', 'Interface fields are private'], correct: 1, explanation: 'Interface fields are constants: public static final. You can\'t have instance state in an interface. Abstract classes can have regular instance variables — this is why abstract classes are chosen when shared state is needed.' },
            ],
          },
        },

        {
          id: 'java-m5-l3', moduleId: 'java-m5',
          title: 'Generics & Type Safety', order: 3, xpReward: 20, duration: '12 min',
          explanation: {
            title: 'Generics — Write Once, Use with Any Type',
            content: `# Generics in Java

**Generics** allow classes and methods to work with any type while still being type-safe.

## The Problem They Solve

\`\`\`java
// Without generics — have to cast and risk ClassCastException
ArrayList list = new ArrayList();
list.add("Hello");
String s = (String) list.get(0);   // risky cast!

// With generics — compiler checks the type
ArrayList<String> strings = new ArrayList<>();
strings.add("Hello");
String s = strings.get(0);   // no cast needed — always a String
\`\`\`

## Generic Class

\`\`\`java
public class Box<T> {       // T is the "type parameter"
    private T content;

    public void set(T content) { this.content = content; }
    public T    get()          { return content; }
}

Box<String>  strBox = new Box<>();
Box<Integer> intBox = new Box<>();
strBox.set("Hello");
intBox.set(42);
\`\`\`

## Generic Method

\`\`\`java
public static <T extends Comparable<T>> T findMax(T[] arr) {
    T max = arr[0];
    for (T item : arr) {
        if (item.compareTo(max) > 0) max = item;
    }
    return max;
}

findMax(new Integer[]{3, 1, 4, 1, 5});  // works with Integer
findMax(new String[]{"apple", "mango"});  // works with String
\`\`\``,
          },
          codeExample: {
            title: 'Generics in Action',
            language: 'java',
            code: `import java.util.ArrayList;

// Generic Stack
class Stack<T> {
    private ArrayList<T> items = new ArrayList<>();

    public void push(T item) {
        items.add(item);
        System.out.println("Pushed: " + item);
    }

    public T pop() {
        if (isEmpty()) throw new RuntimeException("Stack is empty!");
        T item = items.remove(items.size() - 1);
        System.out.println("Popped: " + item);
        return item;
    }

    public T peek()     { return isEmpty() ? null : items.get(items.size() - 1); }
    public boolean isEmpty() { return items.isEmpty(); }
    public int size()   { return items.size(); }

    @Override
    public String toString() { return "Stack" + items; }
}

// Generic Pair
class Pair<A, B> {
    private A first;
    private B second;

    Pair(A first, B second) { this.first = first; this.second = second; }

    public A getFirst()  { return first; }
    public B getSecond() { return second; }

    @Override
    public String toString() { return "(" + first + ", " + second + ")"; }
}

// Generic method — find max
static <T extends Comparable<T>> T findMax(T[] arr) {
    T max = arr[0];
    for (T item : arr) if (item.compareTo(max) > 0) max = item;
    return max;
}

public class Main {
    static <T extends Comparable<T>> T findMax(T[] arr) {
        T max = arr[0];
        for (T item : arr) if (item.compareTo(max) > 0) max = item;
        return max;
    }

    public static void main(String[] args) {

        // Integer Stack
        Stack<Integer> numStack = new Stack<>();
        numStack.push(10); numStack.push(20); numStack.push(30);
        System.out.println("Peek: " + numStack.peek());
        numStack.pop();
        System.out.println(numStack);

        // String Stack
        Stack<String> strStack = new Stack<>();
        strStack.push("Java"); strStack.push("Python"); strStack.push("Go");
        System.out.println(strStack);

        // Pairs
        Pair<String, Integer> student = new Pair<>("Rahul", 21);
        Pair<String, Double>  grade   = new Pair<>("Math", 3.8);
        System.out.println(student);
        System.out.println(grade);

        // Generic findMax
        Integer[] nums = {3, 1, 4, 1, 5, 9, 2, 6};
        String[]  strs = {"banana", "apple", "mango"};
        System.out.println("Max int: " + findMax(nums));
        System.out.println("Max str: " + findMax(strs));
    }
}`,
            explanation: `- \`<T>\` is a type parameter — replaced with actual type at compile time
- \`<T extends Comparable<T>>\` bounds T to types that can be compared
- Generics eliminate casting and provide compile-time type safety
- Same Stack class works perfectly for Integer, String, or any type`,
          },
          exercise: {
            title: 'Generic Pair Sorter',
            instructions: 'Create a generic method swap(T[] arr, int i, int j) that swaps two array elements. Then create sortBySecond that takes a Pair<String, Integer>[] and sorts by the integer value. Test with student-score pairs.',
            starterCode: `import java.util.Arrays;
import java.util.Comparator;

class Pair<A, B> {
    A first; B second;
    Pair(A a, B b) { first=a; second=b; }
    public String toString() { return "("+first+", "+second+")"; }
}

public class Main {

    // Generic swap
    public static <T> void swap(T[] arr, int i, int j) {
        T temp  = arr[i];
        arr[i]  = arr[j];
        arr[j]  = temp;
    }

    public static void main(String[] args) {
        // Test swap
        String[] names = {"Rahul", "Priya", "Amit", "Sneha"};
        System.out.println("Before: " + Arrays.toString(names));
        swap(names, 0, 3);
        System.out.println("After swap(0,3): " + Arrays.toString(names));

        // Sort pairs by second (Integer)
        @SuppressWarnings("unchecked")
        Pair<String, Integer>[] students = new Pair[]{
            new Pair<>("Rahul",  85),
            new Pair<>("Priya",  92),
            new Pair<>("Amit",   78),
            new Pair<>("Sneha",  95),
        };

        Arrays.sort(students, Comparator.comparingInt(p -> p.second));

        System.out.println("\nSorted by score:");
        for (Pair<String, Integer> p : students) {
            System.out.printf("  %s: %d%n", p.first, p.second);
        }
    }
}`,
            solutionCode: `import java.util.Arrays; import java.util.Comparator;
class Pair<A,B>{ A first; B second; Pair(A a,B b){first=a;second=b;} public String toString(){return "("+first+", "+second+")";}}
public class Main {
    public static <T> void swap(T[] arr, int i, int j){ T t=arr[i];arr[i]=arr[j];arr[j]=t; }
    public static void main(String[] args) {
        String[] names={"Rahul","Priya","Amit","Sneha"};
        System.out.println("Before: "+Arrays.toString(names));
        swap(names,0,3);
        System.out.println("After: "+Arrays.toString(names));
        @SuppressWarnings("unchecked") Pair<String,Integer>[] s=new Pair[]{new Pair<>("Rahul",85),new Pair<>("Priya",92),new Pair<>("Amit",78),new Pair<>("Sneha",95)};
        Arrays.sort(s,Comparator.comparingInt(p->p.second));
        for(Pair<String,Integer> p:s) System.out.printf("  %s: %d%n",p.first,p.second);
    }
}`,
            hints: [
              '💡 <T> before return type makes a method generic',
              '💡 swap uses T temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;',
              '💡 Comparator.comparingInt(p -> p.second) sorts by the second field',
            ],
          },
          quiz: {
            questions: [
              { id: 'java-m5-l3-q1', question: 'What is the main benefit of using Java Generics?', options: ['Makes code run faster', 'Allows writing type-safe code that works with multiple types without casting', 'Allows multiple return types', 'Prevents all runtime errors'], correct: 1, explanation: 'Generics provide compile-time type safety. Without generics, you\'d use Object and cast — risking ClassCastException at runtime. Generics catch type errors at compile time.' },
              { id: 'java-m5-l3-q2', question: 'What does <T extends Comparable<T>> mean?', options: ['T can be any type', 'T must be a subclass of Comparable — it can be compared to other Ts', 'T extends the integer limit', 'T requires comparison operator'], correct: 1, explanation: '<T extends Comparable<T>> bounds T to types implementing Comparable. This lets you call .compareTo() on T values. Strings, Integers, Doubles all implement Comparable.' },
            ],
          },
        },
      ],
    },

    // ════════════════════════════════════════════════
    //  MODULE 6 — Exception Handling & File I/O
    // ════════════════════════════════════════════════
    {
      id: 'java-m6', courseId: 'java',
      title: 'Exception Handling & I/O',
      description: 'Build robust programs by handling errors gracefully with try-catch and working with user input.',
      level: 'beginner', order: 6, icon: '🛡️', xpReward: 150, locked: true,
      lessons: [

        {
          id: 'java-m6-l1', moduleId: 'java-m6',
          title: 'Exception Handling', order: 1, xpReward: 20, duration: '14 min',
          explanation: {
            title: 'Handling Errors Gracefully',
            content: `# Exception Handling in Java

An **exception** is a problem that occurs during execution — division by zero, null pointer, array out of bounds. Java's exception system lets you catch and respond to these.

## try-catch-finally

\`\`\`java
try {
    int result = 10 / 0;   // ArithmeticException
} catch (ArithmeticException e) {
    System.out.println("Error: " + e.getMessage());
} finally {
    System.out.println("Always runs");
}
\`\`\`

## Multiple catch blocks

\`\`\`java
try {
    String s = null;
    s.length();            // NullPointerException
    int[] arr = {1,2,3};
    arr[10] = 5;           // ArrayIndexOutOfBoundsException
} catch (NullPointerException e) {
    System.out.println("Null pointer: " + e.getMessage());
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Array bounds: " + e.getMessage());
} catch (Exception e) {
    System.out.println("General error: " + e.getMessage());
}
\`\`\`

## Throwing exceptions

\`\`\`java
public static double divide(double a, double b) {
    if (b == 0) throw new ArithmeticException("Division by zero!");
    return a / b;
}
\`\`\`

## Custom Exceptions

\`\`\`java
public class InsufficientFundsException extends RuntimeException {
    private double amount;
    public InsufficientFundsException(double amount) {
        super("Need ₹" + amount + " more");
        this.amount = amount;
    }
}
\`\`\``,
          },
          codeExample: {
            title: 'Exception Handling Patterns',
            language: 'java',
            code: `// Custom exception
class InsufficientFundsException extends RuntimeException {
    private final double shortfall;

    InsufficientFundsException(double shortfall) {
        super(String.format("Insufficient funds — need ₹%.2f more", shortfall));
        this.shortfall = shortfall;
    }

    public double getShortfall() { return shortfall; }
}

class BankAccount {
    private String owner;
    private double balance;

    BankAccount(String owner, double balance) {
        this.owner   = owner;
        this.balance = balance;
    }

    void withdraw(double amount) {
        if (amount <= 0)         throw new IllegalArgumentException("Amount must be positive");
        if (amount > balance)    throw new InsufficientFundsException(amount - balance);
        balance -= amount;
        System.out.printf("₹%.2f withdrawn. Balance: ₹%.2f%n", amount, balance);
    }

    double getBalance() { return balance; }
}

public class Main {
    public static void main(String[] args) {

        BankAccount acc = new BankAccount("Rahul", 5000.0);

        // Normal withdrawal
        try {
            acc.withdraw(1000);
            acc.withdraw(3000);
            acc.withdraw(2000);   // will fail
        } catch (InsufficientFundsException e) {
            System.out.println("Error: " + e.getMessage());
            System.out.printf("You're short by ₹%.2f%n", e.getShortfall());
        } catch (IllegalArgumentException e) {
            System.out.println("Invalid input: " + e.getMessage());
        } finally {
            System.out.println("Transaction completed. Balance: ₹" + acc.getBalance());
        }

        // Parsing exception
        String[] inputs = {"42", "abc", "100", null};
        for (String input : inputs) {
            try {
                int value = Integer.parseInt(input);
                System.out.println("Parsed: " + value);
            } catch (NumberFormatException e) {
                System.out.println("Cannot parse '" + input + "': " + e.getMessage());
            } catch (NullPointerException e) {
                System.out.println("Null input — skipping");
            }
        }
    }
}`,
            explanation: `- Catch blocks are checked top-to-bottom — put specific exceptions before general Exception
- Custom exceptions extend RuntimeException (unchecked) or Exception (checked)
- finally block ALWAYS executes — perfect for cleanup (close files, connections)
- \`Integer.parseInt()\` throws NumberFormatException if string isn't a valid integer`,
          },
          exercise: {
            title: 'Safe Number Parser',
            instructions: 'Write a safeParseInt(String s) method that returns the parsed integer, or -1 if parsing fails. Then write calculateAverage(String[] numbers) that parses each, skips invalid values with a warning, and returns the average of valid numbers.',
            starterCode: `public class Main {

    public static int safeParseInt(String s) {
        try {
            return Integer.parseInt(s);
        } catch (NumberFormatException | NullPointerException e) {
            return -1;   // sentinel value for invalid
        }
    }

    public static double calculateAverage(String[] inputs) {
        int sum   = 0;
        int count = 0;

        for (String input : inputs) {
            int value = safeParseInt(input);
            if (value == -1) {
                System.out.println("Skipping invalid input: '" + input + "'");
            } else {
                sum   += value;
                count++;
            }
        }

        if (count == 0) throw new ArithmeticException("No valid numbers!");
        return (double) sum / count;
    }

    public static void main(String[] args) {
        String[] data = {"85", "92", "abc", "78", null, "95", "xyz", "88"};

        try {
            double avg = calculateAverage(data);
            System.out.printf("Average of valid numbers: %.2f%n", avg);
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,
            solutionCode: `public class Main {
    public static int safeParseInt(String s) {
        try { return Integer.parseInt(s); }
        catch (NumberFormatException | NullPointerException e) { return -1; }
    }
    public static double calculateAverage(String[] inputs) {
        int sum=0, count=0;
        for (String input : inputs) {
            int v = safeParseInt(input);
            if (v==-1) System.out.println("Skipping: '"+input+"'");
            else { sum+=v; count++; }
        }
        if (count==0) throw new ArithmeticException("No valid numbers!");
        return (double)sum/count;
    }
    public static void main(String[] args) {
        String[] data={"85","92","abc","78",null,"95","xyz","88"};
        try { System.out.printf("Average: %.2f%n", calculateAverage(data)); }
        catch (ArithmeticException e) { System.out.println("Error: "+e.getMessage()); }
    }
}`,
            hints: [
              '💡 Multi-catch: catch (NumberFormatException | NullPointerException e)',
              '💡 Return -1 as sentinel to indicate invalid input',
              '💡 Cast sum to double before division: (double) sum / count',
            ],
          },
          quiz: {
            questions: [
              { id: 'java-m6-l1-q1', question: 'When does the "finally" block execute?', options: ['Only on success', 'Only on exception', 'Always — whether an exception occurred or not', 'Only if catch block runs'], correct: 2, explanation: 'finally always executes after try/catch, regardless of whether an exception was thrown. Use it to close resources (files, connections) that must be cleaned up no matter what.' },
              { id: 'java-m6-l1-q2', question: 'What is the order when catching multiple exception types?', options: ['Alphabetical order', 'Most general first, most specific last', 'Most specific first, most general last', 'Any order — Java figures it out'], correct: 2, explanation: 'Catch most specific exceptions first. If you put catch(Exception e) first, it catches everything and the specific catches below are unreachable. Java enforces this — unreachable catches cause a compile error.' },
            ],
          },
        },

        {
          id: 'java-m6-l2', moduleId: 'java-m6',
          title: 'Scanner & User Input', order: 2, xpReward: 20, duration: '12 min',
          explanation: {
            title: 'Getting Input from Users with Scanner',
            content: `# Scanner — Reading User Input

The **Scanner** class reads input from the keyboard, files, or strings.

## Import and Setup

\`\`\`java
import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
\`\`\`

## Reading Different Types

\`\`\`java
System.out.print("Enter name: ");
String name = scanner.nextLine();        // reads entire line

System.out.print("Enter age: ");
int age     = scanner.nextInt();         // reads integer

System.out.print("Enter price: ");
double price = scanner.nextDouble();     // reads decimal

// ⚠️ After nextInt/nextDouble, call nextLine() to clear the newline
scanner.nextLine();   // consume leftover newline
\`\`\`

## Input Validation Loop

\`\`\`java
int score = -1;
while (score < 0 || score > 100) {
    System.out.print("Enter score (0-100): ");
    try {
        score = scanner.nextInt();
        if (score < 0 || score > 100) System.out.println("Out of range!");
    } catch (InputMismatchException e) {
        System.out.println("Please enter a number!");
        scanner.nextLine();  // clear invalid input
    }
}
\`\`\`

## Close Scanner when done

\`\`\`java
scanner.close();   // frees resource
\`\`\``,
          },
          codeExample: {
            title: 'Interactive Input Programs',
            language: 'java',
            code: `import java.util.Scanner;
import java.util.InputMismatchException;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("=== Student Grade Manager ===");

        // Read student name
        System.out.print("Enter student name: ");
        String name = sc.nextLine();

        // Read number of subjects with validation
        int numSubjects = 0;
        while (numSubjects < 1 || numSubjects > 10) {
            System.out.print("Number of subjects (1-10): ");
            try {
                numSubjects = sc.nextInt();
                if (numSubjects < 1 || numSubjects > 10)
                    System.out.println("Must be between 1 and 10");
            } catch (InputMismatchException e) {
                System.out.println("Please enter a valid number");
                sc.nextLine();
            }
        }
        sc.nextLine(); // clear newline after nextInt

        // Collect subject scores
        ArrayList<Integer> scores = new ArrayList<>();
        for (int i = 1; i <= numSubjects; i++) {
            int score = -1;
            while (score < 0 || score > 100) {
                System.out.printf("Score for subject %d (0-100): ", i);
                try {
                    score = sc.nextInt();
                    if (score < 0 || score > 100) System.out.println("Invalid range!");
                } catch (InputMismatchException e) {
                    System.out.println("Numbers only!");
                    sc.nextLine();
                    score = -1;
                }
            }
            scores.add(score);
            sc.nextLine();
        }

        // Calculate and display results
        int total = scores.stream().mapToInt(Integer::intValue).sum();
        double avg = (double) total / scores.size();

        System.out.println("\n=== Results for " + name + " ===");
        for (int i = 0; i < scores.size(); i++) {
            System.out.printf("  Subject %d: %d%n", i+1, scores.get(i));
        }
        System.out.printf("  Average: %.1f%n", avg);
        System.out.println("  Grade: " + (avg >= 90 ? "A" : avg >= 80 ? "B" : avg >= 70 ? "C" : "D"));

        sc.close();
    }
}`,
            explanation: `- \`Scanner(System.in)\` reads from keyboard; always close when done
- \`nextLine()\` reads the whole line including spaces; \`next()\` reads one word
- After \`nextInt()\` call \`nextLine()\` to clear the leftover newline character
- \`InputMismatchException\` is thrown when the input doesn't match expected type
- \`scores.stream().mapToInt(Integer::intValue).sum()\` is the stream API way to sum a list`,
          },
          exercise: {
            title: 'Number Guessing Game',
            instructions: 'Build an interactive number guessing game. Computer picks a random number 1-100. User guesses. Give "too high" / "too low" hints. Count attempts. Offer to play again.',
            starterCode: `import java.util.Scanner;
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        Scanner sc     = new Scanner(System.in);
        Random  random = new Random();
        boolean playAgain = true;

        while (playAgain) {
            int secret   = random.nextInt(100) + 1;  // 1-100
            int attempts = 0;
            boolean won  = false;

            System.out.println("\n=== Number Guessing Game ===");
            System.out.println("I'm thinking of a number between 1 and 100.");

            while (!won) {
                System.out.print("Your guess: ");
                int guess = sc.nextInt();
                attempts++;

                if      (guess < secret) System.out.println("Too low! Try higher.");
                else if (guess > secret) System.out.println("Too high! Try lower.");
                else {
                    System.out.println("🎉 Correct! You got it in " + attempts + " attempts!");
                    won = true;
                }
            }

            System.out.print("Play again? (yes/no): ");
            sc.nextLine();  // clear newline
            String answer = sc.nextLine().trim().toLowerCase();
            playAgain = answer.equals("yes") || answer.equals("y");
        }

        System.out.println("Thanks for playing! Goodbye.");
        sc.close();
    }
}`,
            solutionCode: `import java.util.Scanner; import java.util.Random;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in); Random rand=new Random();
        boolean again=true;
        while(again){
            int secret=rand.nextInt(100)+1, attempts=0; boolean won=false;
            System.out.println("Guess 1-100!");
            while(!won){
                System.out.print("Guess: "); int g=sc.nextInt(); attempts++;
                if(g<secret) System.out.println("Too low!");
                else if(g>secret) System.out.println("Too high!");
                else{System.out.println("Correct in "+attempts+" attempts!");won=true;}
            }
            System.out.print("Again? (yes/no): "); sc.nextLine();
            again=sc.nextLine().trim().equalsIgnoreCase("yes");
        }
        sc.close();
    }
}`,
            hints: [
              '💡 random.nextInt(100) + 1 gives 1-100 (nextInt(100) gives 0-99)',
              '💡 Compare guess to secret with < and > for hints',
              '💡 After nextInt(), call nextLine() to clear buffer before reading the yes/no String',
            ],
          },
          quiz: {
            questions: [
              { id: 'java-m6-l2-q1', question: 'Why must you call scanner.nextLine() after scanner.nextInt()?', options: ['To close the scanner', 'nextInt() leaves a newline character in the buffer — nextLine() clears it', 'To read the next line', 'It\'s not necessary'], correct: 1, explanation: 'nextInt() reads the integer but leaves the newline (Enter key press) in the buffer. The next nextLine() call immediately reads that empty line instead of waiting for user input. Always call nextLine() after nextInt() or nextDouble().' },
              { id: 'java-m6-l2-q2', question: 'What exception does Scanner throw if input type doesn\'t match?', options: ['IOException', 'ClassCastException', 'InputMismatchException', 'TypeException'], correct: 2, explanation: 'InputMismatchException (in java.util) is thrown when the next token doesn\'t match the expected type. For example, calling nextInt() when the user types "abc".' },
            ],
          },
        },

        {
          id: 'java-m6-l3', moduleId: 'java-m6',
          title: 'String Manipulation & StringBuilder', order: 3, xpReward: 20, duration: '12 min',
          explanation: {
            title: 'Mastering Strings in Java',
            content: `# String Methods & StringBuilder

Strings are one of the most-used types in Java. Master these methods.

## Essential String Methods

\`\`\`java
String s = "Hello, CodeGuru AI!";

s.length()              // 19
s.charAt(0)             // 'H'
s.indexOf("CodeGuru")   // 7
s.contains("Guru")      // true
s.startsWith("Hello")   // true
s.endsWith("!")         // true
s.toUpperCase()         // "HELLO, CODEGURU AI!"
s.toLowerCase()         // "hello, codeguru ai!"
s.trim()                // removes leading/trailing whitespace
s.replace("Hello", "Hi")   // "Hi, CodeGuru AI!"
s.split(", ")           // ["Hello", "CodeGuru AI!"]
s.substring(7, 15)      // "CodeGuru"
\`\`\`

## String Comparison

\`\`\`java
String a = "hello";
a.equals("hello")            // true
a.equalsIgnoreCase("HELLO")  // true
a.compareTo("world")         // negative (h < w)
\`\`\`

## StringBuilder — efficient concatenation

Strings are **immutable** — concatenating creates new objects. StringBuilder is mutable and efficient.

\`\`\`java
// Slow for many concatenations
String result = "";
for (int i = 0; i < 1000; i++) result += i;  // creates 1000 objects!

// Fast
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) sb.append(i);  // one object
String result = sb.toString();
\`\`\``,
          },
          codeExample: {
            title: 'String Processing',
            language: 'java',
            code: `public class Main {

    // Check if palindrome (ignoring case and spaces)
    static boolean isPalindrome(String s) {
        String clean = s.toLowerCase().replaceAll("[^a-z0-9]", "");
        String rev   = new StringBuilder(clean).reverse().toString();
        return clean.equals(rev);
    }

    // Count word frequency
    static void wordCount(String text) {
        String[] words = text.toLowerCase().split("\\\\s+");
        java.util.HashMap<String, Integer> freq = new java.util.HashMap<>();
        for (String word : words) {
            freq.put(word, freq.getOrDefault(word, 0) + 1);
        }
        freq.entrySet().stream()
            .sorted((a, b) -> b.getValue() - a.getValue())
            .forEach(e -> System.out.printf("  %-15s %d%n", e.getKey(), e.getValue()));
    }

    // Format Indian phone number
    static String formatPhone(String phone) {
        String digits = phone.replaceAll("[^0-9]", "");
        if (digits.length() == 10) {
            return digits.substring(0,5) + "-" + digits.substring(5);
        }
        return "Invalid: " + phone;
    }

    public static void main(String[] args) {

        // Palindrome tests
        String[] tests = {"racecar", "hello", "A man a plan a canal Panama", "CodeGuru"};
        for (String t : tests) {
            System.out.printf("'%s' palindrome: %b%n", t, isPalindrome(t));
        }

        // Word count
        String text = "to be or not to be that is the question to be";
        System.out.println("\nWord frequencies:");
        wordCount(text);

        // Phone formatting
        String[] phones = {"9876543210", "987-654-3210", "12345"};
        System.out.println("\nFormatted phones:");
        for (String p : phones) System.out.println("  " + formatPhone(p));

        // StringBuilder for building HTML
        StringBuilder html = new StringBuilder();
        String[] courses = {"Python", "JavaScript", "Java"};
        html.append("<ul>\\n");
        for (String course : courses) {
            html.append("  <li>").append(course).append("</li>\\n");
        }
        html.append("</ul>");
        System.out.println("\nGenerated HTML:\n" + html);
    }
}`,
            explanation: `- \`replaceAll(regex, replacement)\` — uses regular expressions for powerful pattern matching
- \`"[^a-z0-9]"\` matches any character that's NOT a letter or digit
- StringBuilder \`append()\` chains: \`sb.append("a").append("b").append("c")\`
- \`getOrDefault(key, default)\` — safe HashMap access with fallback
- Streams \`sorted().forEach()\` — functional approach to processing collections`,
          },
          exercise: {
            title: 'Password Validator',
            instructions: 'Write a validatePassword(String password) method that checks: length >= 8, contains uppercase, contains lowercase, contains digit, contains special char (!@#$%). Return a list of ALL failed checks, or "Valid password!" if all pass.',
            starterCode: `import java.util.ArrayList;

public class Main {

    public static ArrayList<String> validatePassword(String password) {
        ArrayList<String> errors = new ArrayList<>();

        if (password.length() < 8)
            errors.add("Must be at least 8 characters");

        if (!password.matches(".*[A-Z].*"))
            errors.add("Must contain at least one uppercase letter");

        if (!password.matches(".*[a-z].*"))
            errors.add("Must contain at least one lowercase letter");

        if (!password.matches(".*[0-9].*"))
            errors.add("Must contain at least one digit");

        if (!password.matches(".*[!@#$%].*"))
            errors.add("Must contain at least one special character (!@#$%)");

        return errors;
    }

    public static void main(String[] args) {
        String[] passwords = {
            "CodeGuru1!",      // valid
            "short",           // too short, missing upper, digit, special
            "ALLCAPS123!",     // missing lowercase
            "validpass1!",     // missing uppercase
            "GoodPassword",    // missing digit and special char
        };

        for (String pwd : passwords) {
            ArrayList<String> errors = validatePassword(pwd);
            if (errors.isEmpty()) {
                System.out.println("'" + pwd + "': Valid password!");
            } else {
                System.out.println("'" + pwd + "': " + errors.size() + " error(s):");
                errors.forEach(e -> System.out.println("  - " + e));
            }
            System.out.println();
        }
    }
}`,
            solutionCode: `import java.util.ArrayList;
public class Main {
    public static ArrayList<String> validatePassword(String p) {
        ArrayList<String> e = new ArrayList<>();
        if(p.length()<8) e.add("Min 8 chars");
        if(!p.matches(".*[A-Z].*")) e.add("Need uppercase");
        if(!p.matches(".*[a-z].*")) e.add("Need lowercase");
        if(!p.matches(".*[0-9].*")) e.add("Need digit");
        if(!p.matches(".*[!@#$%].*")) e.add("Need special char");
        return e;
    }
    public static void main(String[] args) {
        String[] pwds={"CodeGuru1!","short","ALLCAPS123!","validpass1!","GoodPassword"};
        for(String pwd:pwds){
            ArrayList<String> errs=validatePassword(pwd);
            if(errs.isEmpty()) System.out.println(pwd+": Valid!");
            else { System.out.println(pwd+": "+errs.size()+" errors:"); errs.forEach(er->System.out.println("  - "+er)); }
        }
    }
}`,
            hints: [
              '💡 matches(".*[A-Z].*") checks if string contains any uppercase letter',
              '💡 Collect ALL errors before returning — don\'t return early',
              '💡 errors.isEmpty() checks if the ArrayList has no items',
            ],
          },
          quiz: {
            questions: [
              { id: 'java-m6-l3-q1', question: 'Why is StringBuilder preferred over String concatenation in loops?', options: ['StringBuilder is easier to type', 'String is immutable — each + creates a new object; StringBuilder modifies one object in-place', 'StringBuilder has more methods', 'String concatenation causes exceptions'], correct: 1, explanation: 'Java Strings are immutable. "a" + "b" + "c" creates three String objects. In a 1000-iteration loop, that\'s 1000 objects. StringBuilder.append() modifies one object, making it O(n) instead of O(n²).' },
              { id: 'java-m6-l3-q2', question: 'What does str.matches(".*[0-9].*") check?', options: ['If the string is a number', 'If the string contains at least one digit anywhere', 'If the string ends with a digit', 'If the string has only digits'], correct: 1, explanation: '.*[0-9].* is a regex: .* matches any characters, [0-9] matches a single digit, .* matches any characters after. Together: "anything, a digit, anything" — i.e., contains at least one digit anywhere.' },
            ],
          },
        },
      ],
    },
  ],
};

export default javaCourse;
