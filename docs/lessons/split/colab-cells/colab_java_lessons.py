# =================================================================
# ☕  CodeGuru AI — Java Course — All 18 Lessons
# =================================================================
# Copy this entire cell into Google Colab and run it.
# It defines `java_lessons` — a list of 18 lesson dicts.
#
# Lessons: 6 modules × 3 lessons each
# Total XP : 230
# Modules  : java-m1, java-m2, java-m3, java-m4, java-m5, java-m6
# =================================================================

import json

# ── java-m1 — Basics
# Lessons : java-m1-l1, java-m1-l2, java-m1-l3
# XP      : 35
java_m1_raw = json.loads(r'''
[
  {
    "id": "java-m1-l1",
    "moduleId": "java-m1",
    "title": "What is Java?",
    "order": 1,
    "xpReward": 10,
    "duration": "9 min",
    "explanation": {
      "title": "What is Java and Why Is It Everywhere?",
      "content": "# What is Java?\n\nImagine an instruction manual written so clearly that it works for any machine ever built — no matter if the machine was made in India, Germany, or Japan. **Java** is a programming language with the same promise: write your code once, and it runs on any device that has a Java Virtual Machine installed.\n\nJava was created at Sun Microsystems by James Gosling and released in 1995. Its famous slogan is **\"Write Once, Run Anywhere\"** — meaning the same compiled Java code runs identically on Windows, macOS, Linux, Android phones, and even smart cards.\n\n## Where Java Is Used Today\n\n| Industry | What Java Powers |\n|---|---|\n| Mobile | Android apps (billions of devices) |\n| Enterprise | Banking systems, ERP software, insurance platforms |\n| Web Back-End | Netflix, LinkedIn, Amazon back-end services |\n| Big Data | Apache Hadoop and Spark processing pipelines |\n| Embedded | Smart cards, Blu-ray players, ATMs |\n\n## How Java Works\n\nJava is a **compiled and interpreted** language:\n\n1. You write `.java` source code\n2. The Java compiler (`javac`) compiles it into **bytecode** (`.class` files)\n3. The **Java Virtual Machine (JVM)** reads the bytecode and executes it\n\nThis two-step process is why Java is platform-independent — the bytecode is the same everywhere, and the JVM handles platform-specific details.\n\n## Java vs Python vs JavaScript\n\n| Feature | Java | Python | JavaScript |\n|---|---|---|---|\n| Typing | Static | Dynamic | Dynamic |\n| Speed | Fast | Moderate | Fast (V8) |\n| Primary use | Enterprise, Android | Data science, AI | Web front-end |\n| Verbosity | High | Low | Medium |\n\nJava requires more boilerplate than Python, but this explicitness makes large codebases easier to maintain. In the code example below, you will see the minimum required structure for any valid Java program."
    },
    "codeExample": {
      "title": "Your First Java Program",
      "language": "java",
      "code": "// Every Java program starts with a class.\n// The class name MUST match the filename (here: Main.java).\npublic class Main {\n\n    // The main method is the entry point — Java starts here.\n    public static void main(String[] args) {\n\n        // System.out.println() prints text and moves to the next line.\n        System.out.println(\"Hello, World!\");\n        System.out.println(\"I am learning Java!\");\n\n        // You can print numbers directly — no quotes needed.\n        System.out.println(2025);\n\n        // Arithmetic is evaluated before printing.\n        System.out.println(100 + 200);\n    }\n}",
      "explanation": "- `public class Main` — every Java program lives inside a class; the class name must match the filename\n- `public static void main(String[] args)` — the entry point; Java starts executing here when you run the program\n- `System.out.println()` — prints the argument and moves to a new line; `println` means 'print line'\n- `2025` without quotes — a number literal; Java prints it directly without conversion\n- `100 + 200` — arithmetic evaluated to `300` before printing; Java computes first, then displays"
    },
    "exercise": {
      "title": "Print a Personal Profile",
      "instructions": "Write a Java program that prints four lines: your full name on line 1, your city on line 2, your age as a number on line 3, and the current year (2025) on line 4. Each line must use System.out.println(). Text values must be in double quotes; numbers must not have quotes.\n\nExpected output example:\nAmit Sharma\nDelhi\n22\n2025",
      "starterCode": "public class Main {\n    public static void main(String[] args) {\n\n        // Line 1: print your full name (use double quotes)\n        System.out.println(\"Your Name Here\");\n\n        // Line 2: print your city\n        System.out.println(\"Your City Here\");\n\n        // Line 3: print your age as a number (no quotes)\n        // Your code here\n\n        // Line 4: print the year 2025 as a number\n        // Your code here\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Amit Sharma\");\n        System.out.println(\"Delhi\");\n        System.out.println(22);\n        System.out.println(2025);\n    }\n}",
      "hints": [
        "💡 Each piece of information needs its own System.out.println() call on a separate line.",
        "💡 Text values like your name and city must be inside double quotes: System.out.println(\"Delhi\");",
        "💡 Numbers like your age and the year do not need quotes: System.out.println(22);"
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
          "id": "java-m1-l1-q1",
          "question": "What does Java's 'Write Once, Run Anywhere' promise mean?",
          "options": [
            "Java code can only be written once and never modified",
            "Java code compiles to bytecode that runs on any platform with a JVM",
            "Java runs faster than all other programming languages",
            "Java programs automatically install on any device"
          ],
          "correct": 1,
          "explanation": "Write Once, Run Anywhere means Java source code is compiled into bytecode, which runs identically on any platform that has a Java Virtual Machine (JVM) installed. The JVM handles all platform-specific differences, so you do not need to rewrite or recompile code for Windows, macOS, or Linux."
        },
        {
          "id": "java-m1-l1-q2",
          "question": "Which method is the entry point that Java executes first in every program?",
          "options": [
            "public static void start(String[] args)",
            "public void run()",
            "public static void main(String[] args)",
            "public static void begin()"
          ],
          "correct": 2,
          "explanation": "public static void main(String[] args) is the mandatory entry point for every Java application. When you run a Java program, the JVM looks for this exact method signature inside the specified class and begins execution there. Every keyword in this signature — public, static, void, main — is required."
        },
        {
          "id": "java-m1-l1-q3",
          "question": "What is the role of the Java Virtual Machine (JVM)?",
          "options": [
            "It writes Java source code automatically",
            "It converts bytecode into platform-specific machine instructions and executes them",
            "It compiles Java source files into bytecode",
            "It stores Java programs on the internet"
          ],
          "correct": 1,
          "explanation": "The JVM reads the compiled bytecode (.class files) and converts it into machine instructions specific to the operating system and hardware it is running on. This is what makes Java platform-independent: the compiler produces bytecode once, and the JVM on each platform handles the final execution."
        }
      ]
    }
  },
  {
    "id": "java-m1-l2",
    "moduleId": "java-m1",
    "title": "Printing Output and Comments",
    "order": 2,
    "xpReward": 10,
    "duration": "10 min",
    "explanation": {
      "title": "Displaying Output and Writing Comments in Java",
      "content": "# Java Output Methods\n\nJava provides three ways to display output. Choosing the right one depends on whether you want a newline after your text.\n\n## System.out.println() — Print and Move to Next Line\n\n```java\nSystem.out.println(\"Hello\");  // prints Hello then goes to next line\nSystem.out.println(\"World\");  // prints World on a new line\n```\n\nOutput:\n```\nHello\nWorld\n```\n\n## System.out.print() — Print Without Newline\n\n```java\nSystem.out.print(\"Hello\");\nSystem.out.print(\" World\");\nSystem.out.println(\"!\");  // only this one adds a newline\n```\n\nOutput: `Hello World!`\n\n## System.out.printf() — Formatted Output\n\n`printf` uses **format specifiers** to control how values are inserted:\n\n```java\nString name  = \"Rahul\";\nint    score = 92;\ndouble gpa   = 3.85;\n\nSystem.out.printf(\"Name: %s, Score: %d, GPA: %.2f%n\", name, score, gpa);\n// Output: Name: Rahul, Score: 92, GPA: 3.85\n```\n\n| Specifier | Type | Example |\n|---|---|---|\n| `%s` | String | `\"Rahul\"` |\n| `%d` | Integer | `42` |\n| `%f` | Float/double | `3.14` |\n| `%.2f` | Float to 2 decimals | `3.85` |\n| `%n` | Newline (platform-safe) | |\n\n## Comments\n\nComments are notes for humans — the Java compiler ignores them completely:\n\n```java\n// Single-line comment — everything after // is ignored\n\n/* Multi-line comment\n   spans as many lines\n   as needed */\n\n/** Javadoc comment — used to generate API documentation */\n```\n\nWrite comments to explain **why** your code does something, not just what it does. Good comments are the mark of a professional programmer.\n\nIn the code example below, you will see all three output methods and all three comment styles used in a student report scenario."
    },
    "codeExample": {
      "title": "Student Report Printer",
      "language": "java",
      "code": "public class Main {\n    public static void main(String[] args) {\n\n        // Student data\n        String name  = \"Priya Verma\";\n        int    marks = 88;\n        double gpa   = 3.75;\n\n        /* Print the report header using print (no newline)\n           then println for the final newline. */\n        System.out.print(\"=== \");\n        System.out.print(\"Student Report\");\n        System.out.println(\" ===\");\n\n        // Use println for each labelled field\n        System.out.println(\"Name  : \" + name);\n        System.out.println(\"Marks : \" + marks);\n\n        // Use printf for formatted decimal output\n        System.out.printf(\"GPA   : %.2f%n\", gpa);\n        System.out.printf(\"Grade : %s%n\", marks >= 90 ? \"A\" : \"B\");\n    }\n}",
      "explanation": "- `System.out.print(\"=== \")` — prints without a newline; the next print continues on the same line\n- `System.out.println(\" ===\")` — completes the header line and moves to the next line\n- `\"Name  : \" + name` — the `+` operator concatenates a string literal with the variable value\n- `System.out.printf(\"GPA   : %.2f%n\", gpa)` — `%.2f` formats `gpa` to exactly two decimal places; `%n` adds a newline\n- `marks >= 90 ? \"A\" : \"B\"` — a ternary expression evaluated inside `printf`; produces `\"A\"` or `\"B\"` at runtime"
    },
    "exercise": {
      "title": "Print a Formatted Invoice",
      "instructions": "Write a Java program that prints a formatted invoice using all three output methods. Define: String item = \"Laptop\", int qty = 2, double price = 45000.0. Print a header line using print() and println() combined. Then print item and qty using println(). Finally, use printf() to print the total (qty * price) formatted to 2 decimal places. Label each line clearly.\n\nExpected output includes item name, quantity, and formatted total like 90000.00",
      "starterCode": "public class Main {\n    public static void main(String[] args) {\n\n        String item  = \"Laptop\";\n        int    qty   = 2;\n        double price = 45000.0;\n\n        // Print header using print + println\n        System.out.print(\"--- \");\n        System.out.println(\"Invoice ---\");\n\n        // Print item and qty using println\n        System.out.println(\"Item     : \" + item);\n        // Your code: print qty\n\n        // Use printf to print total (qty * price) with 2 decimal places\n        // Your code here\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        String item  = \"Laptop\";\n        int    qty   = 2;\n        double price = 45000.0;\n\n        System.out.print(\"--- \");\n        System.out.println(\"Invoice ---\");\n        System.out.println(\"Item     : \" + item);\n        System.out.println(\"Quantity : \" + qty);\n        System.out.printf(\"Total    : %.2f%n\", qty * price);\n    }\n}",
      "hints": [
        "💡 Print qty with: System.out.println(\"Quantity : \" + qty);",
        "💡 For printf, compute the total inline: System.out.printf(\"Total    : %.2f%n\", qty * price);",
        "💡 %.2f formats a double to exactly two decimal places, and %n adds a platform-safe newline."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Invoice",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "90000",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "java-m1-l2-q1",
          "question": "What is the difference between System.out.print() and System.out.println()?",
          "options": [
            "print() is faster; println() formats numbers automatically",
            "println() adds a newline after output; print() does not",
            "print() only works with strings; println() works with all types",
            "They are identical — both add a newline after printing"
          ],
          "correct": 1,
          "explanation": "println() (print line) prints its argument and then moves the cursor to the beginning of the next line, so subsequent output appears on a new line. print() outputs its argument and leaves the cursor exactly where it stopped, so the next print() continues on the same line. Use println() for complete lines and print() when building a line piece by piece."
        },
        {
          "id": "java-m1-l2-q2",
          "question": "What does the format specifier %.2f do inside System.out.printf()?",
          "options": [
            "Prints a string with exactly 2 characters",
            "Prints an integer divided by 2",
            "Prints a floating-point number rounded to exactly 2 decimal places",
            "Prints a boolean value twice"
          ],
          "correct": 2,
          "explanation": "The format specifier %.2f instructs printf to format a float or double value with exactly two digits after the decimal point. The % starts the specifier, . sets decimal precision, 2 is the number of decimal places, and f indicates a floating-point argument. So 3.14159 formatted with %.2f displays as 3.14."
        }
      ]
    }
  },
  {
    "id": "java-m1-l3",
    "moduleId": "java-m1",
    "title": "Variables and Primitive Data Types",
    "order": 3,
    "xpReward": 15,
    "duration": "12 min",
    "explanation": {
      "title": "Storing Data with Variables and Java's Eight Primitive Types",
      "content": "# Variables in Java\n\nA **variable** is a named storage location in memory. Unlike Python or JavaScript, Java is **statically typed** — you must declare the type of a variable before you use it, and that type cannot change:\n\n```java\nint    age  = 21;          // integer\ndouble gpa  = 3.85;        // decimal number\nchar   grade = 'A';        // single character\nboolean isEnrolled = true; // true or false\n```\n\nThe `=` sign is the **assignment operator** — it stores the value on the right into the variable on the left.\n\n## The Eight Primitive Types\n\n| Type | Size | Range / Use | Example |\n|---|---|---|---|\n| `byte` | 1 byte | -128 to 127 | `byte b = 100;` |\n| `short` | 2 bytes | -32,768 to 32,767 | `short s = 1000;` |\n| `int` | 4 bytes | ±2.1 billion | `int x = 42;` |\n| `long` | 8 bytes | ±9.2 quintillion | `long l = 10_000_000L;` |\n| `float` | 4 bytes | ~6-7 decimal digits | `float f = 3.14f;` |\n| `double` | 8 bytes | ~15-16 decimal digits | `double d = 3.14;` |\n| `char` | 2 bytes | One Unicode character | `char c = 'A';` |\n| `boolean` | 1 bit | `true` or `false` | `boolean b = true;` |\n\n## Important Suffixes\n\n- `long` literals need the `L` suffix: `long population = 1_400_000_000L;`\n- `float` literals need the `f` suffix: `float tax = 0.18f;`\n- Without these, Java treats integer literals as `int` and decimal literals as `double`\n\n## String — Not a Primitive\n\n`String` is a class, not a primitive type. It holds a sequence of characters and is written with a capital S:\n\n```java\nString name = \"Rahul Sharma\";   // double quotes only\nchar   init = 'R';              // char uses single quotes\n```\n\n## Variable Naming Conventions\n\nJava uses **camelCase** for variable names:\n```java\nint    totalMarks = 450;\nString firstName = \"Priya\";\nboolean isActive = false;\n```\n\nIn the code example below, you will see all eight primitive types declared together with a String, and type inspection using type-specific operations."
    },
    "codeExample": {
      "title": "Data Types Explorer",
      "language": "java",
      "code": "public class Main {\n    public static void main(String[] args) {\n\n        // Integer types\n        byte  smallNum  = 100;\n        short medNum    = 30000;\n        int   age       = 21;\n        long  population = 1_400_000_000L;  // L suffix required\n\n        // Decimal types\n        float  taxRate = 0.18f;             // f suffix required\n        double price   = 1299.99;           // default for decimals\n\n        // Character and boolean\n        char    grade     = 'A';            // single quotes\n        boolean isActive  = true;\n\n        // String (not a primitive)\n        String  studentName = \"Kavitha\";\n\n        // Print each with its type\n        System.out.println(\"byte   : \" + smallNum);\n        System.out.println(\"int    : \" + age);\n        System.out.println(\"long   : \" + population);\n        System.out.printf (\"float  : %.2f%n\", taxRate);\n        System.out.printf (\"double : %.2f%n\", price);\n        System.out.println(\"char   : \" + grade);\n        System.out.println(\"boolean: \" + isActive);\n        System.out.println(\"String : \" + studentName);\n    }\n}",
      "explanation": "- `long population = 1_400_000_000L` — `L` suffix marks a `long` literal; underscores improve readability\n- `float taxRate = 0.18f` — `f` suffix required; without it `0.18` is a `double`, causing a type mismatch\n- `char grade = 'A'` — `char` uses single quotes; `String` uses double quotes; mixing them causes a compile error\n- `boolean isActive = true` — only `true` or `false` are valid; Java is case-sensitive (`True` does not work)\n- `String studentName = \"Kavitha\"` — `String` is a class (capital S), not a primitive type"
    },
    "exercise": {
      "title": "Build a Student Profile with Typed Variables",
      "instructions": "Declare six typed variables for a student: String name, int rollNumber, double gpa, char grade, boolean isPassed, and long studentId. Set meaningful values for each. Then print all six on separate labelled lines using System.out.println(). Use printf for gpa with 2 decimal places. Each variable declaration must include the correct Java type.\n\nExpected: six labelled output lines with correct types used.",
      "starterCode": "public class Main {\n    public static void main(String[] args) {\n\n        // Declare all six typed variables\n        String  name      = \"Vikram Singh\";\n        int     rollNumber = 42;\n        double  gpa        = 3.68;\n        char    grade      = 'B';\n        boolean isPassed   = true;\n        long    studentId  = 20250042L;\n\n        // Print each variable with a label\n        System.out.println(\"Name       : \" + name);\n        System.out.println(\"Roll No.   : \" + rollNumber);\n        // Your code: print gpa using printf with %.2f\n        // Your code: print grade, isPassed, studentId\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        String  name       = \"Vikram Singh\";\n        int     rollNumber = 42;\n        double  gpa        = 3.68;\n        char    grade      = 'B';\n        boolean isPassed   = true;\n        long    studentId  = 20250042L;\n\n        System.out.println(\"Name       : \" + name);\n        System.out.println(\"Roll No.   : \" + rollNumber);\n        System.out.printf (\"GPA        : %.2f%n\", gpa);\n        System.out.println(\"Grade      : \" + grade);\n        System.out.println(\"Passed     : \" + isPassed);\n        System.out.println(\"Student ID : \" + studentId);\n    }\n}",
      "hints": [
        "💡 Use System.out.printf(\"GPA : %.2f%n\", gpa); to print gpa with exactly two decimal places.",
        "💡 Print the remaining variables with System.out.println(\"Grade : \" + grade); and repeat for isPassed and studentId.",
        "💡 The + operator concatenates a String label with any variable — Java converts the variable to a string automatically."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Name",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "GPA",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "java-m1-l3-q1",
          "question": "Why does a float literal in Java require an 'f' suffix, like 3.14f?",
          "options": [
            "Without f, the number cannot be stored in memory",
            "Without f, Java treats the decimal literal as a double and assigning it to a float causes a type mismatch",
            "The f suffix makes the number compute faster",
            "f stands for formatted — it triggers number formatting"
          ],
          "correct": 1,
          "explanation": "In Java, any decimal literal like 3.14 is by default a double. Assigning a double to a float variable causes a possible loss of precision error because float has less precision than double. The f suffix tells the compiler this literal is a float, resolving the type mismatch. Similarly, long literals need an L suffix to distinguish them from int."
        },
        {
          "id": "java-m1-l3-q2",
          "question": "What is the key difference between char and String in Java?",
          "options": [
            "char holds any number of characters; String holds only one",
            "char uses single quotes and holds exactly one character; String uses double quotes and holds a sequence",
            "char and String are identical — both hold text values",
            "char is faster than String for all operations"
          ],
          "correct": 1,
          "explanation": "char is a primitive type that holds exactly one Unicode character and is written with single quotes: char c = 'A'. String is a class (not a primitive) that holds a sequence of zero or more characters and is written with double quotes: String s = \"Hello\". Using double quotes for a char or single quotes for a String causes a compile error."
        },
        {
          "id": "java-m1-l3-q3",
          "question": "Which Java primitive type should you use to store the population of India?",
          "options": [
            "int, because it handles most numbers",
            "short, because population is a whole number",
            "long, because 1.4 billion exceeds int's maximum of about 2.1 billion",
            "double, because large numbers need decimal precision"
          ],
          "correct": 2,
          "explanation": "int can hold values up to approximately 2.1 billion (2,147,483,647). India's population of roughly 1.4 billion fits in int, but to be safe for future growth or other large populations, long is the correct choice — it holds up to about 9.2 quintillion. The long literal must end with an L suffix: 1_400_000_000L."
        }
      ]
    }
  }
]
''')

# ── java-m2 — Variables and Data Types
# Lessons : java-m2-l1, java-m2-l2, java-m2-l3
# XP      : 35
java_m2_raw = json.loads(r'''
[
  {
    "id": "java-m2-l1",
    "moduleId": "java-m2",
    "title": "Arithmetic Operators and Math",
    "order": 1,
    "xpReward": 10,
    "duration": "11 min",
    "explanation": {
      "title": "Performing Calculations with Java's Arithmetic Operators",
      "content": "# Arithmetic Operators\n\nJava supports all standard arithmetic operations. Every Java program that handles numbers — from calculating a bank balance to computing a student's average — uses these operators.\n\n## The Six Arithmetic Operators\n\n| Operator | Name | Example | Result |\n|---|---|---|---|\n| `+` | Addition | `10 + 3` | `13` |\n| `-` | Subtraction | `10 - 3` | `7` |\n| `*` | Multiplication | `10 * 3` | `30` |\n| `/` | Division | `10 / 3` | `3` (integer!) |\n| `%` | Modulo (remainder) | `10 % 3` | `1` |\n| `**` | (No power in Java — use `Math.pow()`) | | |\n\n### Integer Division Warning\n\nWhen both operands are `int`, Java performs **integer division** — the decimal part is truncated:\n\n```java\nint result = 10 / 3;       // result is 3, not 3.333\ndouble d   = 10.0 / 3;    // d is 3.333... — one double operand forces double result\n```\n\nAlways use at least one `double` operand when you need a decimal result.\n\n## Augmented Assignment Operators\n\n```java\nint x = 10;\nx += 5;   // x = 15\nx -= 3;   // x = 12\nx *= 2;   // x = 24\nx /= 4;   // x = 6\nx %= 4;   // x = 2\n```\n\n## Increment and Decrement\n\n```java\nint count = 0;\ncount++;   // count = 1 (post-increment)\ncount--;   // count = 0 (post-decrement)\n```\n\n## The Math Class\n\nJava's `Math` class provides mathematical functions:\n\n| Method | Description | Example |\n|---|---|---|\n| `Math.abs(x)` | Absolute value | `Math.abs(-7)` → `7` |\n| `Math.pow(x, n)` | x raised to power n | `Math.pow(2, 8)` → `256.0` |\n| `Math.sqrt(x)` | Square root | `Math.sqrt(16)` → `4.0` |\n| `Math.round(x)` | Round to nearest long | `Math.round(3.7)` → `4` |\n| `Math.max(a, b)` | Larger value | `Math.max(10, 20)` → `20` |\n| `Math.min(a, b)` | Smaller value | `Math.min(10, 20)` → `10` |\n| `Math.floor(x)` | Round down | `Math.floor(3.9)` → `3.0` |\n| `Math.ceil(x)` | Round up | `Math.ceil(3.1)` → `4.0` |\n\nIn the code example below, you will see arithmetic operators and several Math methods applied to a GST invoice calculation."
    },
    "codeExample": {
      "title": "GST Invoice Calculator",
      "language": "java",
      "code": "public class Main {\n    public static void main(String[] args) {\n\n        int    quantity  = 4;\n        double unitPrice = 1250.0;\n        double gstRate   = 0.18;      // 18%\n\n        // Basic arithmetic\n        double subtotal  = unitPrice * quantity;\n        double gstAmount = subtotal * gstRate;\n        double total     = subtotal + gstAmount;\n\n        System.out.printf(\"Unit Price : Rs %.2f%n\", unitPrice);\n        System.out.printf(\"Quantity   : %d%n\",      quantity);\n        System.out.printf(\"Subtotal   : Rs %.2f%n\", subtotal);\n        System.out.printf(\"GST (18%%) : Rs %.2f%n\", gstAmount);\n        System.out.printf(\"Total      : Rs %.2f%n\", total);\n\n        // Integer division and modulo demo\n        int eggs   = 50;\n        int dozens = eggs / 12;          // integer division\n        int leftover = eggs % 12;        // remainder\n        System.out.printf(\"%d eggs = %d dozen + %d left over%n\",\n                          eggs, dozens, leftover);\n\n        // Math class\n        double discount = Math.round(total * 0.05 * 100.0) / 100.0;\n        System.out.printf(\"5%% discount: Rs %.2f%n\", discount);\n    }\n}",
      "explanation": "- `unitPrice * quantity` — multiplying a `double` by an `int` produces a `double` result automatically\n- `%%` inside `printf` — to print a literal `%` sign in a format string, write `%%`; a single `%` starts a specifier\n- `eggs / 12` — both are `int`, so result is `4` (integer division); `eggs % 12` gives the remainder `2`\n- `Math.round(total * 0.05 * 100.0) / 100.0` — multiplying by 100 then dividing rounds to 2 decimal places\n- `%d` in printf formats an `int`; `%.2f` formats a `double` to 2 decimal places"
    },
    "exercise": {
      "title": "Build a Simple EMI Calculator",
      "instructions": "Write a Java program that calculates a simple loan EMI. Declare: double principal = 100000.0, double annualRate = 0.12, int months = 12. Calculate: double interest = principal * annualRate, double total = principal + interest, double emi = total / months. Use Math.round() to round emi to the nearest whole number. Print principal, interest, total, and rounded EMI using printf.\n\nExpected output shows principal, interest, total, and EMI rounded to whole number.",
      "starterCode": "public class Main {\n    public static void main(String[] args) {\n\n        double principal  = 100000.0;\n        double annualRate = 0.12;\n        int    months     = 12;\n\n        // Calculate interest and total\n        double interest = principal * annualRate;\n        double total    = principal + interest;\n\n        // Calculate EMI and round to nearest whole number\n        double emi        = total / months;\n        long   roundedEmi = Math.round(emi);\n\n        // Print results using printf\n        System.out.printf(\"Principal : Rs %.2f%n\", principal);\n        System.out.printf(\"Interest  : Rs %.2f%n\", interest);\n        // Your code: print total and roundedEmi\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        double principal  = 100000.0;\n        double annualRate = 0.12;\n        int    months     = 12;\n\n        double interest   = principal * annualRate;\n        double total      = principal + interest;\n        double emi        = total / months;\n        long   roundedEmi = Math.round(emi);\n\n        System.out.printf(\"Principal : Rs %.2f%n\", principal);\n        System.out.printf(\"Interest  : Rs %.2f%n\", interest);\n        System.out.printf(\"Total     : Rs %.2f%n\", total);\n        System.out.printf(\"EMI       : Rs %d%n\",   roundedEmi);\n    }\n}",
      "hints": [
        "💡 Print total with: System.out.printf(\"Total : Rs %.2f%n\", total);",
        "💡 roundedEmi is a long, so use %d (not %.2f) in the format string: System.out.printf(\"EMI : Rs %d%n\", roundedEmi);",
        "💡 Math.round() returns a long — that is why roundedEmi is declared as long, not double."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Principal",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "EMI",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "java-m2-l1-q1",
          "question": "What is the result of 10 / 3 when both operands are int in Java?",
          "options": [
            "3.333...",
            "3",
            "4",
            "A compile error"
          ],
          "correct": 1,
          "explanation": "When both operands of the / operator are integers in Java, integer division is performed — the decimal portion is truncated (not rounded). So 10 / 3 equals 3, not 3.333. To get a decimal result, at least one operand must be a double or float: 10.0 / 3 gives 3.3333."
        },
        {
          "id": "java-m2-l1-q2",
          "question": "Which Math method returns the larger of two numeric values?",
          "options": [
            "Math.abs(a, b)",
            "Math.ceil(a, b)",
            "Math.max(a, b)",
            "Math.greater(a, b)"
          ],
          "correct": 2,
          "explanation": "Math.max(a, b) returns the larger of the two arguments. For example, Math.max(10, 20) returns 20. The complementary method Math.min(a, b) returns the smaller value. Math.abs() takes only one argument and returns its absolute value. There is no Math.greater() method in Java."
        },
        {
          "id": "java-m2-l1-q3",
          "question": "What does the % operator compute in Java?",
          "options": [
            "The percentage of the left number relative to the right",
            "The result of dividing and rounding to the nearest integer",
            "The remainder after integer division of the left by the right",
            "The absolute difference between two numbers"
          ],
          "correct": 2,
          "explanation": "The % operator (modulo) returns the remainder after integer division. For example, 10 % 3 is 1 because 10 divided by 3 is 3 with a remainder of 1. It is commonly used to check divisibility: n % 2 == 0 is true when n is even."
        }
      ]
    }
  },
  {
    "id": "java-m2-l2",
    "moduleId": "java-m2",
    "title": "Strings and String Methods",
    "order": 2,
    "xpReward": 10,
    "duration": "12 min",
    "explanation": {
      "title": "Working with Text: Java Strings and Their Methods",
      "content": "# Strings in Java\n\nIn Java, `String` is not a primitive type — it is a **class**. This means String values are objects with built-in methods you call using dot notation.\n\n```java\nString name = \"Priya Sharma\";\nSystem.out.println(name.length());        // 12\nSystem.out.println(name.toUpperCase());   // PRIYA SHARMA\n```\n\n## String Concatenation\n\nThe `+` operator joins strings:\n\n```java\nString first = \"Rahul\";\nString last  = \"Sharma\";\nString full  = first + \" \" + last;  // \"Rahul Sharma\"\n```\n\nWhen `+` is used with a non-String (like an `int`), Java converts it to String automatically:\n\n```java\nint score = 95;\nSystem.out.println(\"Score: \" + score);  // Score: 95\n```\n\n## Essential String Methods\n\n| Method | Returns | Example |\n|---|---|---|\n| `.length()` | int — character count | `\"Hello\".length()` → `5` |\n| `.toUpperCase()` | String | `\"hello\".toUpperCase()` → `\"HELLO\"` |\n| `.toLowerCase()` | String | `\"HELLO\".toLowerCase()` → `\"hello\"` |\n| `.trim()` | String — no surrounding spaces | `\" hi \".trim()` → `\"hi\"` |\n| `.charAt(i)` | char at index `i` | `\"Hello\".charAt(0)` → `'H'` |\n| `.substring(s, e)` | String from index `s` to `e` | `\"Hello\".substring(1, 4)` → `\"ell\"` |\n| `.contains(s)` | boolean | `\"Hello\".contains(\"ell\")` → `true` |\n| `.replace(a, b)` | String | `\"cats\".replace(\"cats\", \"dogs\")` → `\"dogs\"` |\n| `.equals(s)` | boolean — exact match | `\"hi\".equals(\"hi\")` → `true` |\n| `.equalsIgnoreCase(s)` | boolean — case-insensitive | `\"Hi\".equalsIgnoreCase(\"hi\")` → `true` |\n| `.indexOf(s)` | int — first position | `\"Hello\".indexOf(\"l\")` → `2` |\n| `.split(regex)` | String[] — array | `\"a,b,c\".split(\",\")` → `[\"a\",\"b\",\"c\"]` |\n\n## Comparing Strings: equals() Not ==\n\nNever use `==` to compare String content in Java:\n\n```java\nString a = \"hello\";\nString b = \"hello\";\na == b          // might be true or false (compares memory addresses)\na.equals(b)     // always true — compares actual characters\n```\n\nAlways use `.equals()` to compare string values.\n\nIn the code example below, you will see String methods applied to format and validate an email address."
    },
    "codeExample": {
      "title": "Email Formatter and Validator",
      "language": "java",
      "code": "public class Main {\n    public static void main(String[] args) {\n\n        String rawEmail = \"  Rahul.Sharma@Example.COM  \";\n\n        // Clean up\n        String trimmed = rawEmail.trim();           // remove spaces\n        String lower   = trimmed.toLowerCase();     // normalise case\n        System.out.println(\"Cleaned: \" + lower);\n\n        // Extract username (before @)\n        int    atIndex  = lower.indexOf(\"@\");\n        String username = lower.substring(0, atIndex);\n        System.out.println(\"Username: \" + username);\n\n        // Basic validation\n        boolean hasAt  = lower.contains(\"@\");\n        boolean hasDot = lower.contains(\".\");\n        System.out.println(\"Valid email: \" + (hasAt && hasDot));\n\n        // Length and case check\n        System.out.println(\"Length: \" + lower.length());\n        System.out.println(\"Uppercase: \" + lower.toUpperCase());\n\n        // Replace domain\n        String updated = lower.replace(\"example.com\", \"codeguru.ai\");\n        System.out.println(\"Updated: \" + updated);\n    }\n}",
      "explanation": "- `.trim()` — removes all leading and trailing whitespace; does not affect characters in the middle\n- `.toLowerCase()` — returns a new String with all characters in lowercase; strings are immutable in Java\n- `.indexOf(\"@\")` — returns the zero-based position of the first occurrence; returns `-1` if not found\n- `.substring(0, atIndex)` — extracts characters from index `0` up to (not including) `atIndex`\n- `.contains(\"@\")` — returns `true` if the substring appears anywhere in the string\n- `.replace(\"example.com\", \"codeguru.ai\")` — returns a new string with all occurrences replaced"
    },
    "exercise": {
      "title": "Build a Username Generator",
      "instructions": "Write a Java program that generates a username from a full name. Given String fullName = \"  Ananya Krishnan  \", generate a username by: (1) trimming whitespace, (2) converting to lowercase, (3) replacing the space between names with an underscore using replace(). Print the original trimmed name and the generated username on separate labelled lines.\n\nExpected output:\nOriginal: Ananya Krishnan\nUsername: ananya_krishnan",
      "starterCode": "public class Main {\n    public static void main(String[] args) {\n\n        String fullName = \"  Ananya Krishnan  \";\n\n        // Step 1: trim whitespace\n        String trimmed = fullName.trim();\n\n        // Step 2: convert to lowercase\n        String lower = trimmed.toLowerCase();\n\n        // Step 3: replace space with underscore\n        // Your code here — store result in 'username'\n\n        System.out.println(\"Original: \" + trimmed);\n        System.out.println(\"Username: \" + username);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        String fullName = \"  Ananya Krishnan  \";\n        String trimmed  = fullName.trim();\n        String lower    = trimmed.toLowerCase();\n        String username = lower.replace(\" \", \"_\");\n        System.out.println(\"Original: \" + trimmed);\n        System.out.println(\"Username: \" + username);\n    }\n}",
      "hints": [
        "💡 Use lower.replace(\" \", \"_\") to replace every space with an underscore and store it as username.",
        "💡 .replace() returns a new String — assign it: String username = lower.replace(\" \", \"_\");",
        "💡 The trimmed name and lowercase steps are already done — username only needs the replace step applied to lower."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "ananya_krishnan",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "java-m2-l2-q1",
          "question": "Why must you use .equals() instead of == to compare two String values in Java?",
          "options": [
            ".equals() is faster than == for strings",
            "== compares memory addresses of objects, not their character content",
            "== only works with primitive types, so it throws an error for strings",
            ".equals() is deprecated and should be replaced with =="
          ],
          "correct": 1,
          "explanation": "In Java, == compares whether two references point to the exact same object in memory. Two String objects with identical content may be stored at different memory locations, causing == to return false even when the content matches. .equals() compares the actual character sequences, so it reliably returns true when the strings have the same content."
        },
        {
          "id": "java-m2-l2-q2",
          "question": "What does \"Hello\".substring(1, 4) return in Java?",
          "options": [
            "\"Hell\"",
            "\"Hello\"",
            "\"ell\"",
            "\"ello\""
          ],
          "correct": 2,
          "explanation": "substring(start, end) extracts characters from index start up to but not including index end. In \"Hello\", index 0 is 'H', index 1 is 'e', index 2 is 'l', index 3 is 'l'. substring(1, 4) extracts indices 1, 2, and 3, giving \"ell\". The character at index 4 ('o') is excluded because the end index is non-inclusive."
        }
      ]
    }
  },
  {
    "id": "java-m2-l3",
    "moduleId": "java-m2",
    "title": "Type Casting and Conversion",
    "order": 3,
    "xpReward": 15,
    "duration": "11 min",
    "explanation": {
      "title": "Converting Between Types with Casting and Parsing",
      "content": "# Type Casting in Java\n\nBecause Java is statically typed, moving a value from one type to another requires explicit action. There are two kinds of casting: **widening** (safe, automatic) and **narrowing** (manual, may lose data).\n\n## Widening Conversion — Automatic\n\nJava automatically converts a smaller type to a larger compatible type:\n\n```java\nint    score = 88;\ndouble gpa   = score;   // int → double, automatic — no data loss\nSystem.out.println(gpa); // 88.0\n```\n\nWidening order: `byte` → `short` → `int` → `long` → `float` → `double`\n\n## Narrowing Conversion — Manual Cast\n\nGoing the other direction risks losing data, so Java requires an explicit cast:\n\n```java\ndouble pi    = 3.14159;\nint    whole = (int) pi;   // explicit cast — truncates to 3\nSystem.out.println(whole); // 3\n```\n\nThe cast operator `(int)` tells Java: \"I know there may be data loss — do it anyway.\"\n\n## Casting Between Numeric Types\n\n```java\nlong bigNum   = 100_000L;\nint  smallNum = (int) bigNum;    // OK if value fits in int\n\ndouble avg    = 7.0 / 3;        // 2.333...\nint    truncated = (int) avg;   // 2 — decimal dropped\nint    rounded   = (int) Math.round(avg); // 2 — nearest\n```\n\n## String to Number Conversion\n\nWhen data arrives as text (from user input or files), you must parse it:\n\n```java\nString ageText   = \"25\";\nint    age       = Integer.parseInt(ageText);    // \"25\" → 25\n\nString priceText = \"1299.99\";\ndouble price     = Double.parseDouble(priceText); // \"1299.99\" → 1299.99\n```\n\nIf the string is not a valid number (e.g., `\"hello\"`), `parseInt` throws a `NumberFormatException`.\n\n## Number to String Conversion\n\n```java\nint    code  = 42;\nString text  = String.valueOf(code);    // 42 → \"42\"\nString text2 = Integer.toString(code);  // equivalent\nString text3 = \"\" + code;              // concatenation trick\n```\n\nIn the code example below, you will see widening, narrowing, parsing, and String conversion all demonstrated together."
    },
    "codeExample": {
      "title": "Type Conversion Showcase",
      "language": "java",
      "code": "public class Main {\n    public static void main(String[] args) {\n\n        // Widening: int → double (automatic)\n        int    marks  = 87;\n        double dMarks = marks;               // no cast needed\n        System.out.printf(\"int to double: %.1f%n\", dMarks); // 87.0\n\n        // Narrowing: double → int (explicit cast, truncates)\n        double avg  = 73.89;\n        int    iAvg = (int) avg;             // 73 — decimal dropped\n        int    rAvg = (int) Math.round(avg); // 74 — nearest integer\n        System.out.println(\"Truncated: \" + iAvg);\n        System.out.println(\"Rounded  : \" + rAvg);\n\n        // char ↔ int (char stores Unicode code point)\n        char   letter = 'A';\n        int    code   = letter;              // 65 (widening)\n        char   back   = (char)(code + 1);   // 'B' (narrowing cast)\n        System.out.println(\"char to int: \" + code);\n        System.out.println(\"int to char: \" + back);\n\n        // String → number parsing\n        String scoreStr = \"92\";\n        int    score    = Integer.parseInt(scoreStr);\n        System.out.println(\"Parsed int: \" + (score + 8)); // 100\n\n        // Number → String\n        String label = \"Score: \" + String.valueOf(score);\n        System.out.println(label);\n    }\n}",
      "explanation": "- `double dMarks = marks` — widening; Java promotes `int` to `double` automatically, no data loss\n- `(int) avg` — narrowing cast; the decimal portion is truncated (not rounded): `73.89` becomes `73`\n- `(int) Math.round(avg)` — `Math.round` returns a `long`; the outer cast converts it to `int`\n- `int code = letter` — `char` widens to `int`, giving the Unicode code point (65 for 'A')\n- `Integer.parseInt(scoreStr)` — parses a numeric string to `int`; throws `NumberFormatException` if invalid\n- `String.valueOf(score)` — converts any primitive to its String representation"
    },
    "exercise": {
      "title": "Fix a Type Bug in a Score Calculator",
      "instructions": "Three exam scores arrive as Strings: score1 = \"78\", score2 = \"92\", score3 = \"85\". Parse each to int using Integer.parseInt(). Then compute the total and cast the average to int (truncated). Also compute a double average for printf output. Print total and both average versions on labelled lines.\n\nExpected output:\nTotal: 255\nAverage (truncated): 85\nAverage (decimal): 85.00",
      "starterCode": "public class Main {\n    public static void main(String[] args) {\n\n        // Scores arrive as Strings\n        String score1 = \"78\";\n        String score2 = \"92\";\n        String score3 = \"85\";\n\n        // Parse to int\n        int s1 = Integer.parseInt(score1);\n        // Your code: parse score2 and score3\n\n        // Compute total\n        int total = s1 + s2 + s3;\n\n        // Compute double average then cast to int\n        double avg     = (double) total / 3;\n        int    avgInt  = (int) avg;\n\n        System.out.println(\"Total: \" + total);\n        // Your code: print avgInt and avg\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        String score1 = \"78\";\n        String score2 = \"92\";\n        String score3 = \"85\";\n\n        int s1 = Integer.parseInt(score1);\n        int s2 = Integer.parseInt(score2);\n        int s3 = Integer.parseInt(score3);\n\n        int    total  = s1 + s2 + s3;\n        double avg    = (double) total / 3;\n        int    avgInt = (int) avg;\n\n        System.out.println(\"Total: \" + total);\n        System.out.println(\"Average (truncated): \" + avgInt);\n        System.out.printf (\"Average (decimal): %.2f%n\", avg);\n    }\n}",
      "hints": [
        "💡 Parse score2 and score3 with: int s2 = Integer.parseInt(score2); int s3 = Integer.parseInt(score3);",
        "💡 Print truncated average: System.out.println(\"Average (truncated): \" + avgInt);",
        "💡 Print decimal average: System.out.printf(\"Average (decimal): %.2f%n\", avg);"
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Total: 255",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "85",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "java-m2-l3-q1",
          "question": "What is the result of (int) 9.99 in Java?",
          "options": [
            "10 — it rounds to the nearest integer",
            "9 — it truncates the decimal portion",
            "An error because double cannot be cast to int",
            "9.0 — the decimal is kept as zero"
          ],
          "correct": 1,
          "explanation": "The narrowing cast (int) truncates the decimal portion — it does not round. So (int) 9.99 gives 9, not 10. If you need rounding, use Math.round() first: (int) Math.round(9.99) gives 10. Truncation always moves toward zero: (int) -9.99 gives -9, not -10."
        },
        {
          "id": "java-m2-l3-q2",
          "question": "Which method converts the String \"42\" to the integer 42 in Java?",
          "options": [
            "String.toInt(\"42\")",
            "Integer.parseInt(\"42\")",
            "(int) \"42\"",
            "Integer.convert(\"42\")"
          ],
          "correct": 1,
          "explanation": "Integer.parseInt(String s) parses a numeric string and returns the corresponding int value. It throws a NumberFormatException if the string is not a valid integer. The cast (int) does not work on String objects. String.toInt() and Integer.convert() do not exist in Java."
        }
      ]
    }
  }
]
''')

# ── java-m3 — Conditions
# Lessons : java-m3-l1, java-m3-l2, java-m3-l3
# XP      : 35
java_m3_raw = json.loads(r'''
[
  {
    "id": "java-m3-l1",
    "moduleId": "java-m3",
    "title": "if, else if, and else Statements",
    "order": 1,
    "xpReward": 10,
    "duration": "11 min",
    "explanation": {
      "title": "Making Decisions in Java with if, else if, and else",
      "content": "# Conditional Statements in Java\n\nEvery useful program makes decisions. Think of an ATM: it checks your PIN, then checks your balance before dispensing cash. An `if` statement lets your Java program do the same — run a block of code only when a specific condition is true.\n\n## The if Statement\n\n```java\nint temperature = 38;\nif (temperature > 37) {\n    System.out.println(\"You have a fever.\");\n}\n```\n\nTwo essential rules:\n1. The condition goes inside **parentheses** `()`\n2. The body goes inside **curly braces** `{}`\n\nUnlike Python, Java uses braces rather than indentation to define blocks.\n\n## Adding else\n\n```java\nif (temperature > 37) {\n    System.out.println(\"Fever detected.\");\n} else {\n    System.out.println(\"Temperature is normal.\");\n}\n```\n\nThe `else` block runs when the `if` condition is `false`. It has no condition of its own.\n\n## Multiple Conditions with else if\n\n```java\nint score = 75;\n\nif (score >= 90) {\n    System.out.println(\"Grade: A\");\n} else if (score >= 80) {\n    System.out.println(\"Grade: B\");\n} else if (score >= 70) {\n    System.out.println(\"Grade: C\");\n} else {\n    System.out.println(\"Grade: F\");\n}\n```\n\nJava evaluates conditions top to bottom and executes only the first block whose condition is `true`. All remaining branches are skipped.\n\n## The Ternary Operator\n\nFor simple two-outcome decisions, the ternary operator provides a one-line shortcut:\n\n```java\nString status = score >= 50 ? \"Pass\" : \"Fail\";\n```\n\nThis is equivalent to:\n```java\nString status;\nif (score >= 50) { status = \"Pass\"; }\nelse             { status = \"Fail\"; }\n```\n\n## Nested if Statements\n\nAn `if` block can contain another `if` block. Keep nesting depth to two levels maximum to maintain readability:\n\n```java\nif (hasAccount) {\n    if (balance >= amount) {\n        System.out.println(\"Transaction approved.\");\n    } else {\n        System.out.println(\"Insufficient funds.\");\n    }\n}\n```\n\nIn the code example below, you will see a complete grade classifier using all branching forms."
    },
    "codeExample": {
      "title": "Student Grade Classifier",
      "language": "java",
      "code": "public class Main {\n    public static void main(String[] args) {\n\n        String studentName = \"Sneha Patel\";\n        int    score       = 83;\n\n        // Multi-branch grade assignment\n        String grade, feedback;\n\n        if (score >= 90) {\n            grade    = \"A\";\n            feedback = \"Outstanding performance!\";\n        } else if (score >= 80) {\n            grade    = \"B\";\n            feedback = \"Great work, keep it up!\";\n        } else if (score >= 70) {\n            grade    = \"C\";\n            feedback = \"Good effort, room to improve.\";\n        } else if (score >= 60) {\n            grade    = \"D\";\n            feedback = \"Needs more practice.\";\n        } else {\n            grade    = \"F\";\n            feedback = \"Please seek extra help.\";\n        }\n\n        System.out.println(\"Student  : \" + studentName);\n        System.out.println(\"Score    : \" + score + \"/100\");\n        System.out.println(\"Grade    : \" + grade);\n        System.out.println(\"Feedback : \" + feedback);\n\n        // Ternary operator\n        String result = score >= 50 ? \"PASS\" : \"FAIL\";\n        System.out.println(\"Result   : \" + result);\n    }\n}",
      "explanation": "- `if (score >= 90)` — condition in parentheses; body in braces; both are required in Java\n- `else if (score >= 80)` — evaluated only when all previous conditions were `false`\n- `String grade, feedback;` — both variables declared before the if-chain; they must be assigned in every branch\n- `grade = \"B\"; feedback = \"Great work!\";` — assigning inside a branch; Java's compiler verifies every branch assigns both variables\n- `score >= 50 ? \"PASS\" : \"FAIL\"` — ternary; evaluates to `\"PASS\"` when condition is true, `\"FAIL\"` otherwise"
    },
    "exercise": {
      "title": "Write a Cinema Ticket Price Calculator",
      "instructions": "Write a Java program that determines cinema ticket price based on age. Use if/else if/else with these rules: under 5 = free (price 0), 5 to 12 = Rs 100, 13 to 17 = Rs 150, 18 to 59 = Rs 200, 60 and above = Rs 120. Declare int age = 25 and int ticketPrice. Assign ticketPrice in the branches. Print age and ticket price with labels.\n\nExpected output with age 25:\nAge: 25\nTicket Price: Rs 200",
      "starterCode": "public class Main {\n    public static void main(String[] args) {\n\n        int age         = 25;\n        int ticketPrice = 0;\n\n        if (age < 5) {\n            ticketPrice = 0;\n        } else if (age <= 12) {\n            ticketPrice = 100;\n        }\n        // Add else if for 13-17 (150) and 18-59 (200) and else (120)\n\n        System.out.println(\"Age: \" + age);\n        System.out.println(\"Ticket Price: Rs \" + ticketPrice);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int age         = 25;\n        int ticketPrice = 0;\n\n        if (age < 5) {\n            ticketPrice = 0;\n        } else if (age <= 12) {\n            ticketPrice = 100;\n        } else if (age <= 17) {\n            ticketPrice = 150;\n        } else if (age <= 59) {\n            ticketPrice = 200;\n        } else {\n            ticketPrice = 120;\n        }\n\n        System.out.println(\"Age: \" + age);\n        System.out.println(\"Ticket Price: Rs \" + ticketPrice);\n    }\n}",
      "hints": [
        "💡 Add else if (age <= 17) { ticketPrice = 150; } after the age <= 12 branch.",
        "💡 Add else if (age <= 59) { ticketPrice = 200; } for adults.",
        "💡 The final else covers age 60 and above — no condition needed since all lower ages are already handled."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Ticket Price: Rs 200",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "java-m3-l1-q1",
          "question": "What is the correct Java syntax to start an if statement?",
          "options": [
            "if condition {",
            "if (condition):",
            "if (condition) {",
            "IF (condition) {"
          ],
          "correct": 2,
          "explanation": "Java's if statement syntax requires parentheses around the condition and curly braces around the body: if (condition) { ... }. Java is case-sensitive — IF is invalid. Unlike Python, there is no colon. The parentheses are not optional as they are in some other languages."
        },
        {
          "id": "java-m3-l1-q2",
          "question": "What does the expression score >= 90 ? \"A\" : \"B\" evaluate to when score is 85?",
          "options": [
            "\"A\"",
            "\"B\"",
            "true",
            "A compile error"
          ],
          "correct": 1,
          "explanation": "The ternary operator evaluates the condition (score >= 90). Since 85 < 90, the condition is false, so the expression evaluates to the value after the colon — \"B\". The ternary operator is shorthand for a two-branch if/else and produces a value that can be assigned to a variable."
        }
      ]
    }
  },
  {
    "id": "java-m3-l2",
    "moduleId": "java-m3",
    "title": "Comparison and Logical Operators",
    "order": 2,
    "xpReward": 10,
    "duration": "11 min",
    "explanation": {
      "title": "Comparing Values and Combining Conditions in Java",
      "content": "# Comparison Operators\n\nA condition inside an `if` statement must evaluate to a `boolean` — either `true` or `false`. Comparison operators produce this boolean result by comparing two values:\n\n| Operator | Meaning | Example | Result |\n|---|---|---|---|\n| `==` | Equal to | `5 == 5` | `true` |\n| `!=` | Not equal to | `5 != 3` | `true` |\n| `>` | Greater than | `7 > 3` | `true` |\n| `<` | Less than | `3 < 7` | `true` |\n| `>=` | Greater or equal | `5 >= 5` | `true` |\n| `<=` | Less or equal | `4 <= 3` | `false` |\n\n**Critical rule:** Use `==` only for primitives. For `String` comparison, always use `.equals()`:\n\n```java\n\"hello\" == \"hello\"         // unreliable — compares references\n\"hello\".equals(\"hello\")    // always correct — compares content\n```\n\n## Logical Operators\n\nCombine multiple boolean conditions:\n\n| Operator | Meaning | Short-circuits? |\n|---|---|---|\n| `&&` | AND — both must be true | Yes — skips right if left is false |\n| `||` | OR — at least one must be true | Yes — skips right if left is true |\n| `!` | NOT — flips true/false | N/A |\n\n```java\nint age    = 25;\nboolean hasId = true;\n\nif (age >= 18 && hasId) {\n    System.out.println(\"Access granted.\");\n}\n\nif (!hasId || age < 18) {\n    System.out.println(\"Access denied.\");\n}\n```\n\n## Short-Circuit Evaluation\n\nWith `&&`, if the left operand is `false`, Java never evaluates the right operand. With `||`, if the left is `true`, the right is skipped. This is called **short-circuit evaluation** and prevents errors:\n\n```java\n// Safe: if s is null, s.length() is never called\nif (s != null && s.length() > 0) {\n    System.out.println(\"Non-empty string.\");\n}\n```\n\n## Operator Precedence\n\nIn an expression with multiple operators:\n1. `!` (NOT) — highest\n2. `>`, `<`, `>=`, `<=` — comparisons\n3. `==`, `!=` — equality checks\n4. `&&` (AND)\n5. `||` (OR) — lowest\n\nUse parentheses to make complex conditions clear:\n```java\nif ((a > b && b > c) || isSpecialCase) { ... }\n```\n\nIn the code example below, you will see logical operators used to build a complete bank loan eligibility checker."
    },
    "codeExample": {
      "title": "Loan Eligibility Checker",
      "language": "java",
      "code": "public class Main {\n    public static void main(String[] args) {\n\n        int     age           = 30;\n        double  monthlyIncome = 45000.0;\n        boolean hasLoan       = false;\n        String  creditRating  = \"Good\";\n\n        // All conditions must be true\n        boolean ageOk    = age >= 21 && age <= 60;\n        boolean incomeOk = monthlyIncome >= 25000.0;\n        boolean loanOk   = !hasLoan;  // no existing loan\n        boolean creditOk = creditRating.equals(\"Good\")\n                        || creditRating.equals(\"Excellent\");\n\n        System.out.println(\"Age check    : \" + ageOk);\n        System.out.println(\"Income check : \" + incomeOk);\n        System.out.println(\"No loan      : \" + loanOk);\n        System.out.println(\"Credit check : \" + creditOk);\n\n        if (ageOk && incomeOk && loanOk && creditOk) {\n            System.out.println(\"Result: ELIGIBLE for loan\");\n        } else {\n            System.out.println(\"Result: NOT eligible\");\n        }\n\n        // Short-circuit example: name is checked before length\n        String name = null;\n        if (name != null && name.length() > 0) {\n            System.out.println(\"Name: \" + name);\n        } else {\n            System.out.println(\"No name provided.\");\n        }\n    }\n}",
      "explanation": "- `age >= 21 && age <= 60` — both comparisons must be true; short-circuits on first false\n- `!hasLoan` — `!` flips `false` to `true`; eligible only when no existing loan exists\n- `creditRating.equals(\"Good\") || creditRating.equals(\"Excellent\")` — `.equals()` compares String content; `||` needs only one true\n- `ageOk && incomeOk && loanOk && creditOk` — all four must be true for loan approval\n- `name != null && name.length() > 0` — short-circuit safety; if `name` is `null`, `.length()` is never called, preventing a NullPointerException"
    },
    "exercise": {
      "title": "Build a Platform Access Validator",
      "instructions": "Write a Java program that validates access to an online platform. Declare: int age = 16, boolean hasParentConsent = true, String membershipType = \"free\". Using logical operators, determine: isAgeValid (age >= 13), canAccess (isAgeValid && (age >= 18 || hasParentConsent)), isPremium (membershipType.equals(\"premium\")). Print each boolean result and a final access message.\n\nExpected: isAgeValid=true, canAccess=true, isPremium=false, access granted.",
      "starterCode": "public class Main {\n    public static void main(String[] args) {\n\n        int     age              = 16;\n        boolean hasParentConsent = true;\n        String  membershipType   = \"free\";\n\n        // Compute boolean results\n        boolean isAgeValid = age >= 13;\n        boolean canAccess  = isAgeValid && (age >= 18 || hasParentConsent);\n        boolean isPremium  = membershipType.equals(\"premium\");\n\n        System.out.println(\"isAgeValid : \" + isAgeValid);\n        System.out.println(\"canAccess  : \" + canAccess);\n        System.out.println(\"isPremium  : \" + isPremium);\n\n        // Print access message based on canAccess\n        // Your code here\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int     age              = 16;\n        boolean hasParentConsent = true;\n        String  membershipType   = \"free\";\n\n        boolean isAgeValid = age >= 13;\n        boolean canAccess  = isAgeValid && (age >= 18 || hasParentConsent);\n        boolean isPremium  = membershipType.equals(\"premium\");\n\n        System.out.println(\"isAgeValid : \" + isAgeValid);\n        System.out.println(\"canAccess  : \" + canAccess);\n        System.out.println(\"isPremium  : \" + isPremium);\n\n        if (canAccess) {\n            System.out.println(\"Access granted.\");\n        } else {\n            System.out.println(\"Access denied.\");\n        }\n    }\n}",
      "hints": [
        "💡 Add an if/else block at the end: if (canAccess) { System.out.println(\"Access granted.\"); } else { ... }",
        "💡 canAccess is already computed — just use it as the condition in your if statement.",
        "💡 All the boolean logic is already done; you only need to print a message based on the canAccess result."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "canAccess  : true",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "Access granted.",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "java-m3-l2-q1",
          "question": "What is short-circuit evaluation in Java's && operator?",
          "options": [
            "Java evaluates both operands before checking the result",
            "If the left operand is false, Java skips evaluating the right operand",
            "The && operator only works with boolean primitives",
            "Java evaluates the right operand first to improve performance"
          ],
          "correct": 1,
          "explanation": "With &&, if the left operand evaluates to false, the entire expression is already false regardless of the right operand. Java skips evaluating the right side entirely. This is useful for safety checks like obj != null && obj.method() — if obj is null, the method call is never made and no NullPointerException occurs."
        },
        {
          "id": "java-m3-l2-q2",
          "question": "Why should you not use == to compare two String objects in Java?",
          "options": [
            "== does not compile for reference types",
            "== compares memory references, not character content, and may return false for equal strings",
            "== is slower than .equals() for strings",
            "== only works when both strings are literals"
          ],
          "correct": 1,
          "explanation": "For objects like String, == compares whether both variables point to the exact same object in memory. Two String objects containing identical characters can exist at different memory locations, causing == to return false even though their content is the same. .equals() always compares the actual character sequences, reliably returning true for equal content."
        }
      ]
    }
  },
  {
    "id": "java-m3-l3",
    "moduleId": "java-m3",
    "title": "The switch Statement",
    "order": 3,
    "xpReward": 15,
    "duration": "12 min",
    "explanation": {
      "title": "Branching on Exact Values with Java's switch Statement",
      "content": "# The switch Statement\n\nWhen you need to compare one variable against many specific values, a long `if/else if` chain becomes hard to read. The `switch` statement provides a cleaner alternative for matching a single expression against a fixed list of values.\n\n## Classic switch Syntax\n\n```java\nswitch (expression) {\n    case value1:\n        // code\n        break;\n    case value2:\n        // code\n        break;\n    default:\n        // code for no match\n}\n```\n\nThe `expression` is evaluated once. Java jumps to the matching `case` label and executes code until it hits a `break`. Without `break`, execution **falls through** to the next case.\n\n## Supported Types\n\nThe `switch` expression can be: `int`, `byte`, `short`, `char`, `String`, or an enum. It cannot be `long`, `double`, or `boolean`.\n\n## Fall-Through — Intentional and Accidental\n\n```java\nint day = 3;\nswitch (day) {\n    case 1:\n    case 2:\n    case 3:\n    case 4:\n    case 5:\n        System.out.println(\"Weekday\");  // all 5 cases share this\n        break;\n    case 6:\n    case 7:\n        System.out.println(\"Weekend\");\n        break;\n    default:\n        System.out.println(\"Invalid day\");\n}\n```\n\nGrouping cases this way is intentional fall-through — useful when multiple values should produce the same result.\n\n## Switch Expressions (Java 14+)\n\nJava 14 introduced enhanced switch expressions with arrow syntax — cleaner and safer:\n\n```java\nString dayName = switch (day) {\n    case 1 -> \"Monday\";\n    case 2 -> \"Tuesday\";\n    case 6, 7 -> \"Weekend\";    // multiple values per arrow case\n    default  -> \"Unknown\";\n};\n```\n\nArrow cases do not fall through and do not require `break`. They produce a value that can be assigned directly.\n\n## switch vs if/else if\n\nUse `switch` when:\n- Comparing one variable against specific literal values\n- You have 4 or more branches\n- All conditions test the same variable\n\nUse `if/else if` when:\n- Conditions involve ranges (`score >= 90`)\n- Different variables are tested in different branches\n\nIn the code example below, you will see both classic and enhanced switch handling a course plan selection."
    },
    "codeExample": {
      "title": "Course Plan Feature Selector",
      "language": "java",
      "code": "public class Main {\n    public static void main(String[] args) {\n\n        String plan = \"pro\";\n\n        // Classic switch with fall-through grouping\n        System.out.println(\"=== Classic switch ===\");\n        switch (plan) {\n            case \"bundle\":\n                System.out.println(\"All 4 languages\");\n                System.out.println(\"Offline mode\");\n                // falls through to pro features\n            case \"pro\":\n                System.out.println(\"AI mentor hints\");\n                System.out.println(\"Progress tracker\");\n                break;\n            case \"starter\":\n                System.out.println(\"1 language\");\n                break;\n            default:\n                System.out.println(\"Python only (free)\");\n        }\n\n        // Switch expression (Java 14+)\n        System.out.println(\"\\n=== Switch expression ===\");\n        int courseCount = switch (plan) {\n            case \"bundle\" -> 4;\n            case \"pro\"    -> 2;\n            case \"starter\"-> 1;\n            default       -> 0;\n        };\n        System.out.println(\"Courses in plan: \" + courseCount);\n\n        // Switch on char\n        char grade = 'B';\n        String feedback = switch (grade) {\n            case 'A' -> \"Outstanding!\";\n            case 'B' -> \"Well done!\";\n            case 'C' -> \"Keep practising.\";\n            default  -> \"Seek guidance.\";\n        };\n        System.out.println(\"Feedback: \" + feedback);\n    }\n}",
      "explanation": "- `switch (plan)` — evaluates `plan` once; jumps to the matching `case` label\n- `case \"bundle\":` without `break` — intentional fall-through; bundle plan first prints extra features, then falls into `pro`\n- `break` — required to exit the switch; without it execution continues into the next case\n- `int courseCount = switch (plan) { case \"bundle\" -> 4; ... }` — switch expression assigns a value; no `break` needed\n- `case 'A' -> \"Outstanding!\"` — arrow syntax; no fall-through, no `break`, produces a value directly\n- `default` — handles any value not matched by an explicit case; always include it"
    },
    "exercise": {
      "title": "Build a Month Name Converter",
      "instructions": "Write a Java program that converts a month number to its name using a switch expression (Java 14+ style). Declare int month = 8. Use a switch expression that maps 1 to 'January', 2 to 'February', ... 8 to 'August', and groups 9-12 by using separate arrow cases. For default return 'Invalid month'. Print 'Month 8 is: August'.\n\nExpected output: Month 8 is: August",
      "starterCode": "public class Main {\n    public static void main(String[] args) {\n\n        int month = 8;\n\n        // Use switch expression with arrow syntax\n        String monthName = switch (month) {\n            case 1  -> \"January\";\n            case 2  -> \"February\";\n            case 3  -> \"March\";\n            case 4  -> \"April\";\n            case 5  -> \"May\";\n            case 6  -> \"June\";\n            case 7  -> \"July\";\n            // Add case 8 for August\n            // Add cases 9-12 and default\n            default -> \"Invalid month\";\n        };\n\n        System.out.println(\"Month \" + month + \" is: \" + monthName);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int month = 8;\n\n        String monthName = switch (month) {\n            case 1  -> \"January\";\n            case 2  -> \"February\";\n            case 3  -> \"March\";\n            case 4  -> \"April\";\n            case 5  -> \"May\";\n            case 6  -> \"June\";\n            case 7  -> \"July\";\n            case 8  -> \"August\";\n            case 9  -> \"September\";\n            case 10 -> \"October\";\n            case 11 -> \"November\";\n            case 12 -> \"December\";\n            default -> \"Invalid month\";\n        };\n\n        System.out.println(\"Month \" + month + \" is: \" + monthName);\n    }\n}",
      "hints": [
        "💡 Add case 8 -> \"August\"; after the July case using the same arrow syntax pattern.",
        "💡 Add cases 9 through 12 with their month names, each on its own case line.",
        "💡 The default is already written — it handles any number outside 1-12."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Month 8 is: August",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "java-m3-l3-q1",
          "question": "What happens in a classic switch statement if you forget to add break at the end of a case?",
          "options": [
            "The program throws a runtime exception",
            "Only the matching case runs — break is optional",
            "Execution falls through and runs the next case's code too",
            "The compiler generates an error"
          ],
          "correct": 2,
          "explanation": "Without break, execution falls through from the matched case into the next case, running its code too — and continues falling through until either a break or the end of the switch is reached. This is sometimes intentional (grouping cases), but is usually a bug. Arrow-style switch expressions (Java 14+) never fall through."
        },
        {
          "id": "java-m3-l3-q2",
          "question": "Which of the following types CANNOT be used as a switch expression in Java?",
          "options": [
            "String",
            "int",
            "double",
            "char"
          ],
          "correct": 2,
          "explanation": "Java's switch statement supports int, byte, short, char, String, and enums as the switch expression. double and float are not supported because floating-point equality comparisons are unreliable due to precision issues. long is also not directly supported in switch."
        },
        {
          "id": "java-m3-l3-q3",
          "question": "What advantage does the switch expression arrow syntax (case x -> value) have over classic switch?",
          "options": [
            "It runs faster than classic switch",
            "It eliminates fall-through and does not require break statements",
            "It supports more data types than classic switch",
            "It can replace all if/else statements"
          ],
          "correct": 1,
          "explanation": "Arrow-case switch expressions (Java 14+) do not fall through between cases, so break statements are not needed. Each arrow case is isolated. They also produce a value that can be assigned to a variable or returned from a method, making them more expressive than classic switch statements."
        }
      ]
    }
  }
]
''')

# ── java-m4 — Loops
# Lessons : java-m4-l1, java-m4-l2, java-m4-l3
# XP      : 35
java_m4_raw = json.loads(r'''
[
  {
    "id": "java-m4-l1",
    "moduleId": "java-m4",
    "title": "for Loops and Iteration",
    "order": 1,
    "xpReward": 10,
    "duration": "12 min",
    "explanation": {
      "title": "Repeating Actions with Java's for Loop",
      "content": "# The for Loop\n\nImagine a teacher who must print 30 report cards with identical formatting. Instead of writing 30 almost-identical blocks of code, a loop repeats a block of code a fixed number of times.\n\nJava's `for` loop is the most common loop when you know the number of iterations in advance:\n\n```java\nfor (initialisation; condition; update) {\n    // body — executes while condition is true\n}\n```\n\nThe header has three parts, separated by semicolons:\n1. **Initialisation** — runs once before the loop starts: `int i = 0`\n2. **Condition** — checked before every iteration; the loop stops when this is `false`: `i < 5`\n3. **Update** — runs after every iteration: `i++`\n\n```java\nfor (int i = 0; i < 5; i++) {\n    System.out.println(\"Iteration: \" + i);\n}\n// Prints: Iteration: 0, Iteration: 1, ..., Iteration: 4\n```\n\n## Counting Backwards\n\n```java\nfor (int i = 5; i >= 1; i--) {\n    System.out.print(i + \" \");  // 5 4 3 2 1\n}\n```\n\n## Custom Step Size\n\n```java\nfor (int i = 0; i <= 10; i += 2) {\n    System.out.print(i + \" \");  // 0 2 4 6 8 10\n}\n```\n\n## The Enhanced for Loop (for-each)\n\nFor iterating over arrays or collections without needing an index:\n\n```java\nint[] scores = {85, 92, 78, 95, 88};\n\nfor (int score : scores) {\n    System.out.println(score);\n}\n```\n\nRead this as: \"for each `score` in `scores`, execute the body.\"\n\n## Accumulator Pattern\n\nDeclare a variable before the loop and update it inside:\n\n```java\nint[] marks  = {72, 88, 91, 65, 84};\nint   total  = 0;\nint   highest = marks[0];\n\nfor (int mark : marks) {\n    total += mark;\n    if (mark > highest) highest = mark;\n}\ndouble average = (double) total / marks.length;\n```\n\nIn the code example below, you will see a classic for loop, a for-each loop, and an accumulator applied to a student score report."
    },
    "codeExample": {
      "title": "Score Summary and Times Table",
      "language": "java",
      "code": "public class Main {\n    public static void main(String[] args) {\n\n        // --- Part 1: score analysis with for-each ---\n        int[] scores  = {78, 92, 85, 67, 95, 88};\n        int   total   = 0;\n        int   highest = scores[0];\n\n        for (int score : scores) {\n            total += score;\n            if (score > highest) highest = score;\n        }\n\n        double average = (double) total / scores.length;\n        System.out.printf(\"Scores  : %d entries%n\", scores.length);\n        System.out.printf(\"Total   : %d%n\",         total);\n        System.out.printf(\"Average : %.1f%n\",        average);\n        System.out.printf(\"Highest : %d%n\",          highest);\n\n        // --- Part 2: times table with classic for ---\n        System.out.println(\"\\n--- 7 Times Table ---\");\n        for (int i = 1; i <= 10; i++) {\n            System.out.printf(\"7 x %2d = %3d%n\", i, 7 * i);\n        }\n    }\n}",
      "explanation": "- `int[] scores = {78, 92, ...}` — an **array literal**; all values are specified between braces\n- `for (int score : scores)` — the enhanced for loop; `score` takes each array value in order\n- `total += score` — accumulator pattern; updates `total` on every iteration\n- `(double) total / scores.length` — casting `total` to `double` forces decimal division\n- `scores.length` — the `.length` field of an array; not a method, so no parentheses needed\n- `%2d` and `%3d` in printf — right-align integers in fields of width 2 and 3, keeping columns aligned"
    },
    "exercise": {
      "title": "Print a Number Triangle Pattern",
      "instructions": "Write a Java program using nested for loops to print the following triangle. The outer loop controls the row (1 to 5). The inner loop prints numbers from 1 up to the current row number. Use System.out.print(col + \" \") in the inner loop and System.out.println() after each row to move to the next line.\n\nExpected output:\n1\n1 2\n1 2 3\n1 2 3 4\n1 2 3 4 5",
      "starterCode": "public class Main {\n    public static void main(String[] args) {\n\n        // Outer loop: controls the row number (1 to 5)\n        for (int row = 1; row <= 5; row++) {\n\n            // Inner loop: prints numbers 1 to current row\n            for (int col = 1; col <= row; col++) {\n                System.out.print(col + \" \");\n            }\n\n            // Move to next line after each row\n            System.out.println();\n        }\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        for (int row = 1; row <= 5; row++) {\n            for (int col = 1; col <= row; col++) {\n                System.out.print(col + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
      "hints": [
        "💡 The starter code is already the complete solution — run it and observe the triangle pattern.",
        "💡 The inner loop runs from col=1 to col=row; as row increases, more numbers are printed per line.",
        "💡 System.out.println() with no argument just adds a newline — it moves to the next row of the triangle."
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
          "id": "java-m4-l1-q1",
          "question": "What are the three parts of a Java for loop header separated by semicolons?",
          "options": [
            "condition; body; update",
            "variable; limit; step",
            "initialisation; condition; update",
            "start; stop; increment"
          ],
          "correct": 2,
          "explanation": "A Java for loop header has three parts: for (initialisation; condition; update). Initialisation runs once before the loop starts. The condition is checked before every iteration — the loop stops when it is false. The update runs after each iteration. All three are separated by semicolons, and the entire header is inside parentheses."
        },
        {
          "id": "java-m4-l1-q2",
          "question": "What is the purpose of the enhanced for loop syntax: for (int score : scores)?",
          "options": [
            "It iterates in reverse order through the array",
            "It iterates forward through each element without needing an index variable",
            "It creates a copy of the array before iterating",
            "It only works when scores contains integers"
          ],
          "correct": 1,
          "explanation": "The enhanced for loop (for-each) iterates over every element in an array or collection from first to last without requiring an index variable. On each iteration, score is assigned the next element's value. Use it when you need each value but do not need to know its position. Use a classic for loop when you need the index."
        }
      ]
    }
  },
  {
    "id": "java-m4-l2",
    "moduleId": "java-m4",
    "title": "while and do-while Loops",
    "order": 2,
    "xpReward": 10,
    "duration": "11 min",
    "explanation": {
      "title": "Repeating Until a Condition Changes with while Loops",
      "content": "# The while Loop\n\nA `for` loop is ideal when you know the number of iterations. But sometimes you repeat until something changes — and you do not know how many steps that will take. Think of waiting for a server to respond: keep trying until you get a response.\n\nThe `while` loop keeps running its body as long as the condition remains `true`:\n\n```java\nwhile (condition) {\n    // body — runs while condition is true\n}\n```\n\nThe condition is checked **before** every iteration. If it is `false` at the start, the body never executes.\n\n```java\nint count = 1;\nwhile (count <= 5) {\n    System.out.println(\"Count: \" + count);\n    count++;  // MUST change the condition eventually!\n}\n```\n\n## The Infinite Loop Danger\n\nIf the condition never becomes `false`, the loop runs forever — crashing or freezing the program:\n\n```java\n// DANGEROUS: count never changes\nwhile (count <= 5) {\n    System.out.println(count); // runs forever\n}\n```\n\nEvery while loop must contain something that eventually makes the condition `false`.\n\n## The do-while Loop\n\nThe `do-while` loop executes the body **first**, then checks the condition. This guarantees the body runs at least once:\n\n```java\nint n = 10;\ndo {\n    System.out.println(n);\n    n++;\n} while (n < 5);   // condition is already false — but body ran once\n```\n\nUse `do-while` when you need at least one execution before the first check — for example, displaying a menu before asking the user to choose.\n\n## while vs for\n\n| Scenario | Prefer |\n|---|---|\n| Known number of iterations | `for` |\n| Repeat until condition changes | `while` |\n| Run once then check condition | `do-while` |\n\n## break and continue\n\n```java\nfor (int i = 0; i < 10; i++) {\n    if (i == 3) continue;  // skip 3, go to i = 4\n    if (i == 7) break;     // exit loop at 7\n    System.out.print(i + \" \");  // 0 1 2 4 5 6\n}\n```\n\n- `break` — exits the loop immediately\n- `continue` — skips the rest of the current iteration and jumps to the next\n\nBoth work in `for`, `while`, and `do-while` loops.\n\nIn the code example below, you will see a `while` loop simulating ATM withdrawals and `continue` filtering invalid values."
    },
    "codeExample": {
      "title": "ATM Withdrawal Session",
      "language": "java",
      "code": "public class Main {\n    public static void main(String[] args) {\n\n        double   balance     = 5000.0;\n        double[] requests    = {500.0, 1200.0, -50.0, 3000.0, 100.0};\n        int      idx         = 0;\n\n        System.out.printf(\"Opening balance: Rs %.2f%n\", balance);\n\n        while (idx < requests.length && balance > 0) {\n            double amount = requests[idx];\n            idx++;\n\n            if (amount <= 0) {\n                System.out.println(\"Invalid amount — skipped.\");\n                continue;  // skip rest of iteration\n            }\n\n            if (amount > balance) {\n                System.out.printf(\"Rs %.0f declined — insufficient funds.%n\", amount);\n                continue;\n            }\n\n            balance -= amount;\n            System.out.printf(\"Withdrew Rs %.0f | Remaining: Rs %.2f%n\",\n                              amount, balance);\n\n            if (balance == 0) {\n                System.out.println(\"Balance zero. Session ending.\");\n                break;  // exit the loop\n            }\n        }\n\n        System.out.printf(\"Final balance: Rs %.2f%n\", balance);\n    }\n}",
      "explanation": "- `while (idx < requests.length && balance > 0)` — two conditions with `&&`; either becoming false stops the loop\n- `idx++` — advances through the array; the loop variable must change on every iteration to prevent infinite looping\n- `continue` — skips the remaining body for this iteration and re-evaluates the while condition immediately\n- `break` — exits the while loop immediately when the balance reaches zero\n- `balance -= amount` — shorthand for `balance = balance - amount`"
    },
    "exercise": {
      "title": "Simulate a Number Guessing Game",
      "instructions": "Write a Java program that simulates a number guessing game. The secret number is 42. Simulate guesses using array int[] guesses = {15, 80, 42}. Loop through guesses with a while loop using an index. Print 'Too low', 'Too high', or 'Correct in X attempt(s)!' for each guess and use break when correct. Count attempts on every iteration.\n\nExpected output:\nGuess 15: Too low\nGuess 80: Too high\nGuess 42: Correct in 3 attempt(s)!",
      "starterCode": "public class Main {\n    public static void main(String[] args) {\n\n        int   secret   = 42;\n        int[] guesses  = {15, 80, 42};\n        int   idx      = 0;\n        int   attempts = 0;\n\n        while (idx < guesses.length) {\n            int guess = guesses[idx];\n            idx++;\n            attempts++;\n\n            if (guess < secret) {\n                System.out.println(\"Guess \" + guess + \": Too low\");\n            } else if (guess > secret) {\n                System.out.println(\"Guess \" + guess + \": Too high\");\n            } else {\n                System.out.println(\"Guess \" + guess + \": Correct in \" + attempts + \" attempt(s)!\");\n                break;\n            }\n        }\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int   secret   = 42;\n        int[] guesses  = {15, 80, 42};\n        int   idx      = 0;\n        int   attempts = 0;\n\n        while (idx < guesses.length) {\n            int guess = guesses[idx];\n            idx++;\n            attempts++;\n\n            if (guess < secret) {\n                System.out.println(\"Guess \" + guess + \": Too low\");\n            } else if (guess > secret) {\n                System.out.println(\"Guess \" + guess + \": Too high\");\n            } else {\n                System.out.println(\"Guess \" + guess + \": Correct in \" + attempts + \" attempt(s)!\");\n                break;\n            }\n        }\n    }\n}",
      "hints": [
        "💡 The starter code is the complete solution — run it to observe the output.",
        "💡 attempts++ is called on every iteration, counting every guess including correct and incorrect ones.",
        "💡 break exits the while loop as soon as the correct guess is found, stopping further iterations."
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
          "id": "java-m4-l2-q1",
          "question": "What is the key difference between a while loop and a do-while loop?",
          "options": [
            "while loops run faster; do-while loops are for complex conditions",
            "while checks the condition before the first execution; do-while runs the body at least once before checking",
            "do-while only works with numeric conditions; while works with all types",
            "They are identical — both check the condition before running the body"
          ],
          "correct": 1,
          "explanation": "A while loop checks the condition before the body executes. If the condition is false initially, the body never runs. A do-while loop executes the body first and then checks the condition, guaranteeing at least one execution. Use do-while when you need the body to run at least once regardless of the condition."
        },
        {
          "id": "java-m4-l2-q2",
          "question": "What does the continue statement do inside a loop?",
          "options": [
            "Exits the entire loop immediately",
            "Restarts the loop from the beginning",
            "Skips the rest of the current iteration and jumps to the next one",
            "Pauses the loop for one iteration"
          ],
          "correct": 2,
          "explanation": "continue skips all remaining statements in the current iteration and jumps directly to the loop's update step (for loops) or condition check (while loops) for the next iteration. break, in contrast, exits the entire loop. Neither restarts from the first iteration."
        }
      ]
    }
  },
  {
    "id": "java-m4-l3",
    "moduleId": "java-m4",
    "title": "Nested Loops and Loop Patterns",
    "order": 3,
    "xpReward": 15,
    "duration": "13 min",
    "explanation": {
      "title": "Combining Loops for Complex Patterns and Grid Processing",
      "content": "# Nested Loops\n\nA **nested loop** is a loop inside another loop. The inner loop completes all its iterations for every single iteration of the outer loop. This creates a \"for every row, for every column\" structure — perfect for tables, grids, and patterns.\n\n```java\nfor (int i = 1; i <= 3; i++) {           // outer: rows\n    for (int j = 1; j <= 3; j++) {       // inner: columns\n        System.out.print(i * j + \"\\t\"); // tab-separated\n    }\n    System.out.println();                // new row\n}\n```\n\nOutput:\n```\n1   2   3\n2   4   6\n3   6   9\n```\n\nIf the outer loop runs `n` times and the inner loop runs `m` times, the body executes `n × m` times total.\n\n## Labelled break\n\nA `break` without a label exits only the **innermost** loop. To exit multiple levels of nesting, use a **labelled break**:\n\n```java\nouterLoop:\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        if (i == 1 && j == 1) {\n            break outerLoop;   // exits BOTH loops\n        }\n        System.out.println(i + \",\" + j);\n    }\n}\n```\n\nLabels are identifiers followed by a colon placed immediately before a loop statement.\n\n## Common Nested Loop Patterns\n\n### Multiplication Table\n```java\nfor (int i = 1; i <= 10; i++) {\n    for (int j = 1; j <= 10; j++) {\n        System.out.printf(\"%4d\", i * j);\n    }\n    System.out.println();\n}\n```\n\n### Prime Number Check\n```java\nfor (int n = 2; n <= 20; n++) {\n    boolean isPrime = true;\n    for (int d = 2; d < n; d++) {\n        if (n % d == 0) { isPrime = false; break; }\n    }\n    if (isPrime) System.out.print(n + \" \");\n}\n```\n\n### 2D Array Processing\n```java\nint[][] matrix = {{1,2,3},{4,5,6},{7,8,9}};\nfor (int[] row : matrix) {\n    for (int val : row) {\n        System.out.printf(\"%3d\", val);\n    }\n    System.out.println();\n}\n```\n\nIn the code example below, you will see a multiplication table, prime number finder, and star pattern all produced with nested loops."
    },
    "codeExample": {
      "title": "Nested Loop Patterns",
      "language": "java",
      "code": "public class Main {\n    public static void main(String[] args) {\n\n        // --- Multiplication table (5x5) ---\n        System.out.println(\"=== 5x5 Multiplication Table ===\");\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 1; j <= 5; j++) {\n                System.out.printf(\"%4d\", i * j);\n            }\n            System.out.println();\n        }\n\n        // --- Prime numbers up to 30 ---\n        System.out.println(\"\\n=== Primes up to 30 ===\");\n        for (int n = 2; n <= 30; n++) {\n            boolean isPrime = true;\n            for (int d = 2; d < n; d++) {\n                if (n % d == 0) {\n                    isPrime = false;\n                    break;  // no need to check further\n                }\n            }\n            if (isPrime) System.out.print(n + \" \");\n        }\n        System.out.println();\n\n        // --- Right-angle star pattern ---\n        System.out.println(\"\\n=== Star Pattern ===\");\n        for (int row = 1; row <= 4; row++) {\n            for (int col = 0; col < row; col++) {\n                System.out.print(\"* \");\n            }\n            System.out.println();\n        }\n    }\n}",
      "explanation": "- `printf(\"%4d\", i * j)` — `%4d` right-aligns the integer in a 4-character field for neat columns\n- `for (int n = 2; n <= 30; n++)` — outer loop checks each candidate prime starting from 2\n- `for (int d = 2; d < n; d++)` — inner loop tries every potential divisor up to n-1\n- `if (n % d == 0) { isPrime = false; break; }` — if any divisor divides evenly, n is not prime; `break` exits early\n- `if (isPrime) System.out.print(n)` — executes after the inner loop finishes for each candidate\n- `for (int col = 0; col < row; col++)` — runs `row` times per outer iteration, printing one star per column"
    },
    "exercise": {
      "title": "Print a Multiplication Row Table",
      "instructions": "Write a Java program that prints a formatted multiplication table for the number 7 from 1 to 10. Use a single for loop (not nested). For each iteration i from 1 to 10, print in this exact format: '7 x  i =  result' using printf with %2d for i and %3d for the result to align columns.\n\nExpected output:\n7 x  1 =   7\n7 x  2 =  14\n...\n7 x 10 =  70",
      "starterCode": "public class Main {\n    public static void main(String[] args) {\n\n        System.out.println(\"--- 7 Times Table ---\");\n\n        for (int i = 1; i <= 10; i++) {\n            // Use printf to print: 7 x <i> = <result>\n            // Use %2d for i and %3d for the result\n            // Your code here\n        }\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"--- 7 Times Table ---\");\n        for (int i = 1; i <= 10; i++) {\n            System.out.printf(\"7 x %2d = %3d%n\", i, 7 * i);\n        }\n    }\n}",
      "hints": [
        "💡 Inside the loop, use System.out.printf(\"7 x %2d = %3d%n\", i, 7 * i);",
        "💡 %2d formats i right-aligned in a 2-character field; %3d formats the result in a 3-character field.",
        "💡 7 * i computes the product inline inside the printf call — no extra variable needed."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "7 x  1 =   7",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "7 x 10 =  70",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "java-m4-l3-q1",
          "question": "If the outer loop runs 4 times and the inner loop runs 3 times, how many total times does the inner body execute?",
          "options": [
            "4 times",
            "7 times",
            "3 times",
            "12 times"
          ],
          "correct": 3,
          "explanation": "In a nested loop, the inner body executes once for every combination of outer and inner iterations. If the outer loop runs 4 times and the inner runs 3 times for each outer iteration, the inner body executes 4 × 3 = 12 times total. This multiplicative relationship is why nested loops can be expensive for large iteration counts."
        },
        {
          "id": "java-m4-l3-q2",
          "question": "What does a labelled break statement do in nested loops?",
          "options": [
            "Breaks out of only the innermost loop",
            "Pauses execution of the specified loop",
            "Skips the current iteration of the labelled loop",
            "Breaks out of the loop identified by the label, including any loops inside it"
          ],
          "correct": 3,
          "explanation": "A plain break exits only the innermost loop. A labelled break (break labelName) exits the loop that the label is attached to, along with all loops nested inside it. Labels are placed immediately before the loop statement they name. This avoids needing a boolean flag variable to signal an exit from deeply nested loops."
        }
      ]
    }
  }
]
''')

# ── java-m5 — Functions / Methods
# Lessons : java-m5-l1, java-m5-l2, java-m5-l3
# XP      : 35
java_m5_raw = json.loads(r'''
[
  {
    "id": "java-m5-l1",
    "moduleId": "java-m5",
    "title": "Defining and Calling Methods",
    "order": 1,
    "xpReward": 10,
    "duration": "12 min",
    "explanation": {
      "title": "Creating Reusable Blocks of Code with Java Methods",
      "content": "# Methods in Java\n\nImagine a coffee machine. You press one button and the entire brewing sequence — heating water, grinding beans, extracting espresso — runs automatically. You do not repeat the steps every time. A **method** in Java works the same way: you write a block of code once, give it a name, and call it by that name whenever you need it.\n\n## Method Anatomy\n\n```java\naccess_modifier return_type methodName(parameters) {\n    // method body\n    return value;  // if return_type is not void\n}\n```\n\n```java\npublic static int add(int a, int b) {\n    return a + b;\n}\n```\n\n- `public` — access modifier (visible everywhere)\n- `static` — belongs to the class, not an object instance\n- `int` — return type (the type of value this method sends back)\n- `add` — the method name (camelCase convention)\n- `int a, int b` — parameters (typed input variables)\n- `return a + b` — the result sent back to the caller\n\n## void Methods — No Return Value\n\nIf a method produces output (like printing) but has no value to return, use `void`:\n\n```java\npublic static void printSeparator(int length) {\n    for (int i = 0; i < length; i++) {\n        System.out.print(\"-\");\n    }\n    System.out.println();\n}\n```\n\n## Calling a Method\n\n```java\npublic static void main(String[] args) {\n    int result = add(10, 5);        // result = 15\n    System.out.println(result);\n    printSeparator(20);             // calls void method\n}\n```\n\n## Parameters vs Arguments\n\n- **Parameter** — the variable declared in the method definition (`int a`)\n- **Argument** — the actual value passed when calling the method (`10`)\n\n## Why Methods Matter\n\n- **No repetition** — write the logic once, use it everywhere\n- **Testability** — each method can be tested independently\n- **Readability** — `calculateGST(price)` is clearer than 15 lines of arithmetic\n- **Maintainability** — fix a bug once in the method and it is fixed everywhere\n\nIn the code example below, you will see a complete set of utility methods for an invoice system, demonstrating void methods, return methods, and method calling patterns."
    },
    "codeExample": {
      "title": "Invoice Utility Methods",
      "language": "java",
      "code": "public class Main {\n\n    // void method — no return value\n    public static void printHeader(String title) {\n        System.out.println(\"==============================\");\n        System.out.println(\"  \" + title);\n        System.out.println(\"==============================\");\n    }\n\n    // Returns a double — calculated result\n    public static double calculateTotal(double price, int qty) {\n        return price * qty;\n    }\n\n    // Returns a double — applies GST\n    public static double applyGST(double subtotal, double rate) {\n        return subtotal * (1 + rate);\n    }\n\n    // Returns a String — letter grade\n    public static String getGrade(int score) {\n        if      (score >= 90) return \"A\";\n        else if (score >= 80) return \"B\";\n        else if (score >= 70) return \"C\";\n        else                  return \"F\";\n    }\n\n    public static void main(String[] args) {\n        printHeader(\"GST Invoice\");\n\n        double subtotal = calculateTotal(1250.0, 4);   // 5000.0\n        double total    = applyGST(subtotal, 0.18);    // 5900.0\n\n        System.out.printf(\"Subtotal : Rs %.2f%n\", subtotal);\n        System.out.printf(\"Total    : Rs %.2f%n\", total);\n\n        // Methods can be called multiple times with different arguments\n        System.out.println(\"Grade 95 : \" + getGrade(95));\n        System.out.println(\"Grade 72 : \" + getGrade(72));\n    }\n}",
      "explanation": "- `public static void printHeader(String title)` — `void` means no return; `static` lets it be called from `main` without an object\n- `return price * qty` — computes the product and sends it back immediately; the method ends here\n- `applyGST(subtotal, 0.18)` — passes the result of `calculateTotal` as an argument to the next method\n- `if (score >= 90) return \"A\";` — multiple return statements are allowed; Java exits at the first one hit\n- Methods can be called many times with different arguments — each call produces its own independent result"
    },
    "exercise": {
      "title": "Write a Temperature Converter with Methods",
      "instructions": "Write two static methods: celsiusToFahrenheit(double c) that returns (c * 9.0/5.0) + 32, and fahrenheitToCelsius(double f) that returns (f - 32) * 5.0/9.0. In main, call each with a test value and print the results using printf with one decimal place.\n\nTest: celsiusToFahrenheit(100.0) should give 212.0, fahrenheitToCelsius(98.6) should give 37.0.\n\nExpected output:\n100.0C = 212.0F\n98.6F = 37.0C",
      "starterCode": "public class Main {\n\n    // Method 1: Celsius to Fahrenheit\n    public static double celsiusToFahrenheit(double c) {\n        // Return (c * 9.0/5.0) + 32\n        // Your code here\n        return 0; // placeholder\n    }\n\n    // Method 2: Fahrenheit to Celsius\n    public static double fahrenheitToCelsius(double f) {\n        // Return (f - 32) * 5.0/9.0\n        // Your code here\n        return 0; // placeholder\n    }\n\n    public static void main(String[] args) {\n        double fResult = celsiusToFahrenheit(100.0);\n        double cResult = fahrenheitToCelsius(98.6);\n        System.out.printf(\"100.0C = %.1fF%n\", fResult);\n        System.out.printf(\"98.6F = %.1fC%n\",  cResult);\n    }\n}",
      "solutionCode": "public class Main {\n\n    public static double celsiusToFahrenheit(double c) {\n        return (c * 9.0 / 5.0) + 32;\n    }\n\n    public static double fahrenheitToCelsius(double f) {\n        return (f - 32) * 5.0 / 9.0;\n    }\n\n    public static void main(String[] args) {\n        double fResult = celsiusToFahrenheit(100.0);\n        double cResult = fahrenheitToCelsius(98.6);\n        System.out.printf(\"100.0C = %.1fF%n\", fResult);\n        System.out.printf(\"98.6F = %.1fC%n\",  cResult);\n    }\n}",
      "hints": [
        "💡 Replace return 0; with return (c * 9.0 / 5.0) + 32; in celsiusToFahrenheit.",
        "💡 Replace return 0; with return (f - 32) * 5.0 / 9.0; in fahrenheitToCelsius.",
        "💡 Use 9.0 and 5.0 (not 9 and 5) to ensure double division — otherwise integer division truncates the result."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "100.0C = 212.0F",
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
          "id": "java-m5-l1-q1",
          "question": "What does the void keyword in a method signature indicate?",
          "options": [
            "The method takes no parameters",
            "The method is not allowed to contain loops",
            "The method does not return a value to its caller",
            "The method can only be called once"
          ],
          "correct": 2,
          "explanation": "void is the return type that means the method performs an action but does not produce a value to send back. A void method can still use the return statement with no value (just return;) to exit early, but it cannot return a value. If a method needs to send data back, replace void with the appropriate type: int, double, String, etc."
        },
        {
          "id": "java-m5-l1-q2",
          "question": "What is the difference between a method parameter and an argument?",
          "options": [
            "They are identical — just two names for the same thing",
            "A parameter is the variable in the method definition; an argument is the value passed at the call site",
            "A parameter is the returned value; an argument is the method name",
            "Parameters are for void methods; arguments are for methods that return values"
          ],
          "correct": 1,
          "explanation": "A parameter is the typed variable name declared in the method signature: double c in celsiusToFahrenheit(double c). An argument is the actual value passed when the method is called: celsiusToFahrenheit(100.0) — 100.0 is the argument. The argument's value is assigned to the parameter for the duration of the method call."
        },
        {
          "id": "java-m5-l1-q3",
          "question": "Why must a Java method be declared with static to be called directly from main?",
          "options": [
            "static makes the method run faster",
            "main is a static method and can only call other static methods without creating an object",
            "Non-static methods are not allowed in a class that has a main method",
            "static prevents the method from being called more than once"
          ],
          "correct": 1,
          "explanation": "main is a static method, which means it belongs to the class itself rather than to any specific object instance. A static method can only directly call other static methods. To call a non-static method from main, you would first need to create an object of the class. Marking utility methods as static is standard practice for beginner Java programs."
        }
      ]
    }
  },
  {
    "id": "java-m5-l2",
    "moduleId": "java-m5",
    "title": "Parameters, Return Values, and Scope",
    "order": 2,
    "xpReward": 10,
    "duration": "12 min",
    "explanation": {
      "title": "How Java Passes Arguments and Controls Variable Scope",
      "content": "# Pass by Value\n\nJava always passes **primitive** arguments by value — the method receives a copy of the original value. Modifying the copy inside the method does not affect the original variable:\n\n```java\npublic static void doubleIt(int x) {\n    x = x * 2;   // modifies the local copy only\n}\n\npublic static void main(String[] args) {\n    int num = 10;\n    doubleIt(num);\n    System.out.println(num);  // still 10 — unchanged\n}\n```\n\nTo change a value, the method must `return` the new value:\n\n```java\npublic static int doubleIt(int x) {\n    return x * 2;\n}\nnum = doubleIt(num);   // num is now 20\n```\n\n## Multiple Return Values (via array)\n\nJava methods can return only one value. To return multiple values, return an array or use output parameters with arrays:\n\n```java\npublic static double[] getStats(int[] data) {\n    double total = 0;\n    for (int v : data) total += v;\n    double avg = total / data.length;\n    double max = data[0];\n    for (int v : data) if (v > max) max = v;\n    return new double[]{avg, max};   // return as array\n}\n```\n\n## Variable Scope\n\n**Scope** defines where a variable is visible and accessible.\n\n- **Local variable** — declared inside a method; exists only during that method's execution\n- **Parameter** — a special local variable initialised by the argument value\n- **Block variable** — declared inside a `{}` block (if/for/while); visible only within that block\n\n```java\npublic static void demo() {\n    int x = 10;              // local — visible in entire method\n    if (x > 5) {\n        int y = 20;          // block — visible only inside this if\n        System.out.println(x + y);  // OK\n    }\n    // System.out.println(y);  // ERROR — y is out of scope here\n}\n```\n\n## Returning from Multiple Points\n\nA method can have multiple `return` statements — execution ends at the first one reached:\n\n```java\npublic static String classify(int n) {\n    if (n > 0) return \"Positive\";\n    if (n < 0) return \"Negative\";\n    return \"Zero\";           // only reached when n == 0\n}\n```\n\nIn the code example below, you will see pass-by-value demonstrated, a method returning an array, and scope illustrated with a banking simulation."
    },
    "codeExample": {
      "title": "Bank Account Method Simulation",
      "language": "java",
      "code": "public class Main {\n\n    // Returns new balance — does not modify original directly\n    public static double deposit(double balance, double amount) {\n        if (amount <= 0) return balance;  // invalid amount\n        return balance + amount;\n    }\n\n    public static double withdraw(double balance, double amount) {\n        if (amount <= 0 || amount > balance) return balance;\n        return balance - amount;\n    }\n\n    // Returns two values as an array: {min, max}\n    public static double[] findMinMax(double[] values) {\n        double min = values[0], max = values[0];\n        for (double v : values) {\n            if (v < min) min = v;\n            if (v > max) max = v;\n        }\n        return new double[]{min, max};\n    }\n\n    public static void main(String[] args) {\n\n        // Pass-by-value demo\n        double balance = 5000.0;\n        balance = deposit(balance, 2000.0);   // must re-assign\n        balance = withdraw(balance, 1500.0);\n        System.out.printf(\"Balance: Rs %.2f%n\", balance);\n\n        // Block scope: i is only visible inside the loop\n        for (int i = 0; i < 3; i++) {\n            double bonus = 100.0 * (i + 1);   // bonus is block-scoped\n            System.out.println(\"Bonus: \" + bonus);\n        }\n        // i and bonus are not accessible here\n\n        // Multiple return values via array\n        double[] history  = {3200.0, 4800.0, 1500.0, 9100.0, 600.0};\n        double[] minMax   = findMinMax(history);\n        System.out.printf(\"Min: Rs %.0f, Max: Rs %.0f%n\",\n                          minMax[0], minMax[1]);\n    }\n}",
      "explanation": "- `balance = deposit(balance, 2000.0)` — reassignment required; Java passes primitives by value so the method works on a copy\n- `if (amount <= 0) return balance` — guard clause; returns the balance unchanged when input is invalid\n- `return new double[]{min, max}` — creates and returns an anonymous array literal with two values\n- `double[] minMax = findMinMax(history)` — the returned array is captured in a local variable, accessed by index\n- `double bonus` inside the for loop — block-scoped; destroyed when the loop block ends"
    },
    "exercise": {
      "title": "Write a Grade Statistics Method",
      "instructions": "Write a static method getStats(int[] marks) that returns a double[] array containing three values in order: [average, minimum, maximum]. In main, call getStats with int[] marks = {72, 88, 95, 61, 83}. Print the average with one decimal place, and the minimum and maximum as integers using printf.\n\nExpected output:\nAverage: 79.8\nMin: 61\nMax: 95",
      "starterCode": "public class Main {\n\n    public static double[] getStats(int[] marks) {\n        double total = 0;\n        int min = marks[0], max = marks[0];\n\n        for (int m : marks) {\n            total += m;\n            if (m < min) min = m;\n            if (m > max) max = m;\n        }\n\n        double avg = total / marks.length;\n        // Return array containing avg, min, max\n        // Your code here\n        return new double[]{0, 0, 0}; // placeholder\n    }\n\n    public static void main(String[] args) {\n        int[] marks = {72, 88, 95, 61, 83};\n        double[] stats = getStats(marks);\n\n        System.out.printf(\"Average: %.1f%n\", stats[0]);\n        // Your code: print min and max\n    }\n}",
      "solutionCode": "public class Main {\n\n    public static double[] getStats(int[] marks) {\n        double total = 0;\n        int min = marks[0], max = marks[0];\n\n        for (int m : marks) {\n            total += m;\n            if (m < min) min = m;\n            if (m > max) max = m;\n        }\n\n        double avg = total / marks.length;\n        return new double[]{avg, min, max};\n    }\n\n    public static void main(String[] args) {\n        int[] marks = {72, 88, 95, 61, 83};\n        double[] stats = getStats(marks);\n\n        System.out.printf(\"Average: %.1f%n\", stats[0]);\n        System.out.printf(\"Min: %d%n\", (int) stats[1]);\n        System.out.printf(\"Max: %d%n\", (int) stats[2]);\n    }\n}",
      "hints": [
        "💡 Replace return new double[]{0, 0, 0}; with return new double[]{avg, min, max}; to return computed values.",
        "💡 Print min: System.out.printf(\"Min: %d%n\", (int) stats[1]); — cast to int because %d requires an integer.",
        "💡 Print max the same way: System.out.printf(\"Max: %d%n\", (int) stats[2]);"
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Average: 79.8",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "Min: 61",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "java-m5-l2-q1",
          "question": "If a Java method modifies a primitive parameter inside its body, what happens to the original variable?",
          "options": [
            "The original variable is also modified",
            "A runtime exception is thrown",
            "Nothing — the method receives a copy, so the original is unchanged",
            "The original variable is set to zero"
          ],
          "correct": 2,
          "explanation": "Java passes primitive types by value — the method receives a copy of the argument. Modifying the copy inside the method has no effect on the original variable. To change the original, the method must return the new value and the caller must reassign it: num = doubleIt(num)."
        },
        {
          "id": "java-m5-l2-q2",
          "question": "A variable declared inside a for loop body — where is it accessible?",
          "options": [
            "Anywhere in the class",
            "Anywhere in the method that contains the loop",
            "Only within the loop body where it is declared",
            "Only in the first iteration of the loop"
          ],
          "correct": 2,
          "explanation": "Variables declared inside a block — including a for loop body — are block-scoped. They are created fresh on each iteration and destroyed when the block ends. Trying to access a for-loop variable outside the loop causes a compile error because the variable no longer exists at that point."
        }
      ]
    }
  },
  {
    "id": "java-m5-l3",
    "moduleId": "java-m5",
    "title": "Method Overloading",
    "order": 3,
    "xpReward": 15,
    "duration": "11 min",
    "explanation": {
      "title": "Defining Multiple Methods with the Same Name Using Overloading",
      "content": "# Method Overloading\n\nImagine a calculator with a single ADD button. You can add two integers, two decimals, or even three numbers — but you press the same ADD button each time. Java's **method overloading** lets you define multiple methods with the same name, as long as they differ in their parameter lists.\n\n## What Overloading Means\n\n```java\n// Three methods named 'add' — all valid in the same class\npublic static int    add(int a, int b)              { return a + b; }\npublic static double add(double a, double b)        { return a + b; }\npublic static int    add(int a, int b, int c)       { return a + b + c; }\n```\n\nThe compiler determines which version to call based on the **argument types and count** at the call site:\n\n```java\nadd(2, 3)          // calls add(int, int) → 5\nadd(2.5, 3.5)      // calls add(double, double) → 6.0\nadd(1, 2, 3)       // calls add(int, int, int) → 6\n```\n\n## Rules for Overloading\n\nOverloaded methods must differ in at least one of:\n- **Number of parameters** (2 vs 3 parameters)\n- **Type of parameters** (int vs double)\n- **Order of parameter types** (int, double vs double, int)\n\nThey cannot differ only in **return type** — that causes a compile error:\n```java\npublic static int  add(int a, int b)    { return a + b; }\npublic static void add(int a, int b)    { ... }  // compile error!\n```\n\n## Widening and Overloading\n\nWhen no exact match exists, Java widens the argument type to find the closest match:\n\n```java\nint x = 5;\nadd(x, 3.0);  // x is widened from int to double; calls add(double, double)\n```\n\n## Why Use Overloading?\n\nOverloading creates a clean, intuitive API. Instead of `printInt()`, `printDouble()`, `printString()`, Java's `System.out.println()` is overloaded to accept any type:\n\n```java\nSystem.out.println(42);        // println(int)\nSystem.out.println(3.14);      // println(double)\nSystem.out.println(\"Hello\");   // println(String)\nSystem.out.println(true);      // println(boolean)\n```\n\nIn the code example below, you will see an overloaded `describe()` method that works with different data types and parameter counts."
    },
    "codeExample": {
      "title": "Overloaded Describe Methods",
      "language": "java",
      "code": "public class Main {\n\n    // Overload 1: String only\n    public static void describe(String name) {\n        System.out.println(\"Name: \" + name);\n    }\n\n    // Overload 2: String + int\n    public static void describe(String name, int age) {\n        System.out.println(\"Name: \" + name + \", Age: \" + age);\n    }\n\n    // Overload 3: String + int + String\n    public static void describe(String name, int age, String city) {\n        System.out.println(\"Name: \" + name +\n                           \", Age: \" + age +\n                           \", City: \" + city);\n    }\n\n    // Overloaded area() methods\n    public static double area(double radius) {\n        return Math.PI * radius * radius;   // circle\n    }\n\n    public static double area(double width, double height) {\n        return width * height;              // rectangle\n    }\n\n    public static void main(String[] args) {\n        // Compiler picks the right overload automatically\n        describe(\"Rahul\");\n        describe(\"Priya\", 22);\n        describe(\"Amit\",  28, \"Mumbai\");\n\n        System.out.printf(\"Circle area    : %.2f%n\", area(5.0));\n        System.out.printf(\"Rectangle area : %.2f%n\", area(4.0, 6.0));\n    }\n}",
      "explanation": "- `describe(String name)` vs `describe(String name, int age)` — same name, different parameter count; both valid\n- `area(double radius)` vs `area(double width, double height)` — same name and types but different count\n- `describe(\"Rahul\")` — compiler matches to the one-parameter overload automatically\n- `describe(\"Amit\", 28, \"Mumbai\")` — compiler selects the three-parameter overload\n- `Math.PI` — a predefined constant in the `Math` class; no parentheses because it is a field, not a method"
    },
    "exercise": {
      "title": "Write Overloaded calculateDiscount Methods",
      "instructions": "Write three overloaded static methods named calculateDiscount. Method 1: calculateDiscount(double price) returns 10% off (price * 0.10). Method 2: calculateDiscount(double price, double rate) returns price * rate. Method 3: calculateDiscount(double price, double rate, String code) returns price * rate * 1.05 if code equals 'EXTRA', otherwise price * rate. In main, call all three and print results with printf.\n\nExpected: three different discount amounts printed.",
      "starterCode": "public class Main {\n\n    // Overload 1: default 10% discount\n    public static double calculateDiscount(double price) {\n        return price * 0.10;\n    }\n\n    // Overload 2: custom rate\n    public static double calculateDiscount(double price, double rate) {\n        // Your code here\n        return 0;\n    }\n\n    // Overload 3: custom rate + promo code\n    public static double calculateDiscount(double price, double rate, String code) {\n        // If code equals \"EXTRA\", apply extra 5% (multiply rate result by 1.05)\n        // Your code here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        System.out.printf(\"Default 10%%: Rs %.2f%n\",  calculateDiscount(2000.0));\n        System.out.printf(\"Custom 20%%: Rs %.2f%n\",   calculateDiscount(2000.0, 0.20));\n        System.out.printf(\"EXTRA code: Rs %.2f%n\",    calculateDiscount(2000.0, 0.20, \"EXTRA\"));\n    }\n}",
      "solutionCode": "public class Main {\n\n    public static double calculateDiscount(double price) {\n        return price * 0.10;\n    }\n\n    public static double calculateDiscount(double price, double rate) {\n        return price * rate;\n    }\n\n    public static double calculateDiscount(double price, double rate, String code) {\n        double discount = price * rate;\n        if (code.equals(\"EXTRA\")) return discount * 1.05;\n        return discount;\n    }\n\n    public static void main(String[] args) {\n        System.out.printf(\"Default 10%%: Rs %.2f%n\",  calculateDiscount(2000.0));\n        System.out.printf(\"Custom 20%%: Rs %.2f%n\",   calculateDiscount(2000.0, 0.20));\n        System.out.printf(\"EXTRA code: Rs %.2f%n\",    calculateDiscount(2000.0, 0.20, \"EXTRA\"));\n    }\n}",
      "hints": [
        "💡 Overload 2: replace return 0; with return price * rate;",
        "💡 Overload 3: compute double discount = price * rate; then return discount * 1.05; if code.equals(\"EXTRA\"), else return discount;",
        "💡 Use .equals() to compare the code String — never use == for String content comparison in Java."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Default 10%",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "EXTRA code",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "java-m5-l3-q1",
          "question": "Which of the following correctly describes method overloading in Java?",
          "options": [
            "Defining the same method in a subclass with different behaviour",
            "Defining multiple methods with the same name but different parameter lists in the same class",
            "Calling a method more than once in the same program",
            "Replacing a method body with an empty implementation"
          ],
          "correct": 1,
          "explanation": "Method overloading means defining two or more methods with the same name in the same class, where each method has a different parameter list (different number, types, or order of parameters). The compiler selects the correct version at compile time based on the argument types. Overloading is different from overriding, which applies to subclasses."
        },
        {
          "id": "java-m5-l3-q2",
          "question": "Can two overloaded methods differ only in their return type?",
          "options": [
            "Yes — different return types make methods unique",
            "Yes — if the method names are also different",
            "No — overloaded methods must differ in their parameter list",
            "No — overloaded methods are only allowed to differ in parameter count"
          ],
          "correct": 2,
          "explanation": "Overloaded methods must differ in their parameter list (number, type, or order of parameters). Return type alone is not enough to distinguish overloads because the compiler cannot determine which version to call from just the method name and argument types. Attempting to define two methods that differ only in return type causes a compile error: 'method already defined'."
        }
      ]
    }
  }
]
''')

# ── java-m6 — Mini Project
# Lessons : java-m6-l1, java-m6-l2, java-m6-l3
# XP      : 55
java_m6_raw = json.loads(r'''
[
  {
    "id": "java-m6-l1",
    "moduleId": "java-m6",
    "title": "Arrays: Storing Collections of Data",
    "order": 1,
    "xpReward": 15,
    "duration": "13 min",
    "explanation": {
      "title": "Storing and Processing Multiple Values with Java Arrays",
      "content": "# Arrays in Java\n\nImagine a classroom with 30 students. Without arrays, you would need 30 separate variables: `score1`, `score2`, ..., `score30`. An **array** stores multiple values of the same type under one name, accessed by a numeric index.\n\n## Declaring and Creating Arrays\n\n```java\n// Method 1: declare then allocate\nint[] scores = new int[5];       // 5 slots, all initialised to 0\n\n// Method 2: declare and initialise with values\nint[] marks = {85, 92, 78, 95, 88};\n\n// Method 3: typed array with new keyword\nString[] names = new String[]{\"Rahul\", \"Priya\", \"Amit\"};\n```\n\n## Accessing Elements\n\nJava arrays use **zero-based indexing** — the first element is at index 0:\n\n```java\nint[] arr = {10, 20, 30, 40, 50};\nSystem.out.println(arr[0]);   // 10 — first element\nSystem.out.println(arr[4]);   // 50 — last element\nSystem.out.println(arr.length); // 5 — count of elements (not a method)\n```\n\nAccessing `arr[5]` would throw an `ArrayIndexOutOfBoundsException`.\n\n## Modifying Elements\n\n```java\nmarks[2] = 90;   // replace index 2 (was 78, now 90)\n```\n\n## Iterating Over Arrays\n\n```java\n// Classic for — use when you need the index\nfor (int i = 0; i < scores.length; i++) {\n    System.out.println(\"Index \" + i + \": \" + scores[i]);\n}\n\n// Enhanced for — use when you only need the value\nfor (int score : scores) {\n    System.out.println(score);\n}\n```\n\n## Common Array Operations\n\n```java\n// Sum all elements\nint total = 0;\nfor (int v : arr) total += v;\n\n// Find maximum\nint max = arr[0];\nfor (int v : arr) if (v > max) max = v;\n\n// Sort (ascending) — from java.util.Arrays\njava.util.Arrays.sort(arr);   // modifies arr in place\n```\n\n## 2D Arrays\n\nA 2D array stores rows and columns — like a spreadsheet:\n\n```java\nint[][] matrix = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\nSystem.out.println(matrix[1][2]);  // row 1, column 2 → 6\n```\n\nIn the code example below, you will see array creation, iteration, and the accumulator pattern applied to a class score report."
    },
    "codeExample": {
      "title": "Class Score Report",
      "language": "java",
      "code": "public class Main {\n\n    public static void main(String[] args) {\n\n        String[] names  = {\"Rahul\", \"Priya\", \"Amit\", \"Sneha\", \"Vikram\"};\n        int[]    scores = {88, 95, 72, 91, 67};\n\n        // Compute total, average, highest\n        int    total   = 0;\n        int    highest = scores[0];\n        String topName = names[0];\n\n        for (int i = 0; i < scores.length; i++) {\n            total += scores[i];\n            if (scores[i] > highest) {\n                highest = scores[i];\n                topName = names[i];     // track who has the highest\n            }\n        }\n\n        double average = (double) total / scores.length;\n\n        // Print report\n        System.out.println(\"=== Class Report ===\");\n        for (int i = 0; i < names.length; i++) {\n            String grade = scores[i] >= 90 ? \"A\" :\n                           scores[i] >= 75 ? \"B\" : \"C\";\n            System.out.printf(\"%-10s %3d  %s%n\",\n                              names[i], scores[i], grade);\n        }\n        System.out.println(\"---\");\n        System.out.printf(\"Average : %.1f%n\", average);\n        System.out.printf(\"Top     : %s (%d)%n\", topName, highest);\n    }\n}",
      "explanation": "- `scores[0]` — zero-based indexing; the first element is at index 0, the last at `length - 1`\n- `for (int i = 0; i < scores.length; i++)` — classic for loop used because we need the index `i` for both arrays\n- `scores[i] > highest` — comparison inside the loop; updates `highest` and `topName` together when a new high is found\n- `(double) total / scores.length` — casting to `double` forces decimal division; without it, integer division truncates\n- `%-10s` in printf — left-aligns the string in a 10-character field; the minus sign flips the default right-alignment"
    },
    "exercise": {
      "title": "Compute Array Statistics",
      "instructions": "Given int[] data = {14, 38, 7, 56, 23, 45, 9}, write code to compute: sum of all elements, the minimum value, the maximum value, and the average as a double. Print all four results on separate labelled lines using printf. Use a single for-each loop to compute sum, min, and max together.\n\nExpected output:\nSum: 192\nMin: 7\nMax: 56\nAverage: 27.4",
      "starterCode": "public class Main {\n    public static void main(String[] args) {\n\n        int[] data = {14, 38, 7, 56, 23, 45, 9};\n\n        int    sum = 0;\n        int    min = data[0];\n        int    max = data[0];\n\n        for (int v : data) {\n            sum += v;\n            if (v < min) min = v;\n            if (v > max) max = v;\n        }\n\n        double average = (double) sum / data.length;\n\n        System.out.println(\"Sum: \" + sum);\n        // Your code: print min, max, average\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int[] data = {14, 38, 7, 56, 23, 45, 9};\n\n        int sum = 0, min = data[0], max = data[0];\n        for (int v : data) {\n            sum += v;\n            if (v < min) min = v;\n            if (v > max) max = v;\n        }\n        double average = (double) sum / data.length;\n\n        System.out.println(\"Sum: \" + sum);\n        System.out.println(\"Min: \" + min);\n        System.out.println(\"Max: \" + max);\n        System.out.printf(\"Average: %.1f%n\", average);\n    }\n}",
      "hints": [
        "💡 Print min: System.out.println(\"Min: \" + min); and max: System.out.println(\"Max: \" + max);",
        "💡 Print average with printf: System.out.printf(\"Average: %.1f%n\", average); to get exactly one decimal place.",
        "💡 The loop logic is already complete — you only need to add the three missing print statements."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Sum: 192",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "Average: 27.4",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "java-m6-l1-q1",
          "question": "What index holds the first element of a Java array?",
          "options": [
            "1",
            "0",
            "-1",
            "The length of the array"
          ],
          "correct": 1,
          "explanation": "Java arrays use zero-based indexing. The first element is at index 0, the second at index 1, and the last element at index array.length - 1. Attempting to access an index equal to or greater than array.length throws an ArrayIndexOutOfBoundsException at runtime."
        },
        {
          "id": "java-m6-l1-q2",
          "question": "How do you get the number of elements in a Java array?",
          "options": [
            "arr.size()",
            "arr.count()",
            "arr.length",
            "arr.length()"
          ],
          "correct": 2,
          "explanation": "For arrays in Java, the element count is accessed via the .length field — no parentheses because it is a property, not a method. Compare this with String where you call .length() with parentheses (it is a method). ArrayList and other collections use .size()."
        }
      ]
    }
  },
  {
    "id": "java-m6-l2",
    "moduleId": "java-m6",
    "title": "ArrayList and Working with Collections",
    "order": 2,
    "xpReward": 15,
    "duration": "13 min",
    "explanation": {
      "title": "Dynamic Collections with Java's ArrayList",
      "content": "# Limitations of Arrays\n\nJava arrays have a fixed size — once created, you cannot add or remove elements. If you do not know the final count in advance, or if the collection grows as the program runs, you need a more flexible data structure.\n\n## ArrayList\n\n`ArrayList` is a resizable list from `java.util`. It grows automatically as you add elements:\n\n```java\nimport java.util.ArrayList;\n\nArrayList<String> names = new ArrayList<>();\nnames.add(\"Rahul\");\nnames.add(\"Priya\");\nnames.add(\"Amit\");\nSystem.out.println(names.size());   // 3\nSystem.out.println(names.get(0));   // Rahul\n```\n\nThe `<String>` in angle brackets is a **type parameter** — it tells Java what type of objects the list holds.\n\n## Common ArrayList Methods\n\n| Method | Description |\n|---|---|\n| `.add(element)` | Appends to the end |\n| `.add(index, element)` | Inserts at position |\n| `.get(index)` | Returns element at index |\n| `.set(index, element)` | Replaces element at index |\n| `.remove(index)` | Removes by index |\n| `.remove(object)` | Removes first occurrence of object |\n| `.size()` | Returns count of elements |\n| `.contains(element)` | Returns true if element present |\n| `.indexOf(element)` | Returns first index or -1 |\n| `.clear()` | Removes all elements |\n| `.isEmpty()` | Returns true if size is 0 |\n\n## Iterating Over an ArrayList\n\n```java\n// Enhanced for — most readable\nfor (String name : names) {\n    System.out.println(name);\n}\n\n// Classic for — use when you need the index\nfor (int i = 0; i < names.size(); i++) {\n    System.out.println(i + \": \" + names.get(i));\n}\n```\n\n## ArrayList vs Array — When to Use Which\n\n| Situation | Use |\n|---|---|\n| Fixed size, known at creation | `int[]` array |\n| Size changes at runtime | `ArrayList<Integer>` |\n| Primitive performance critical | Array |\n| Need .contains(), .indexOf() | ArrayList |\n\nIn the code example below, you will see an ArrayList managing a dynamic student roster with add, remove, and search operations."
    },
    "codeExample": {
      "title": "Dynamic Student Roster",
      "language": "java",
      "code": "import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // Create an ArrayList of student names\n        ArrayList<String> roster = new ArrayList<>();\n        roster.add(\"Rahul Sharma\");\n        roster.add(\"Priya Verma\");\n        roster.add(\"Amit Patel\");\n        roster.add(\"Sneha Iyer\");\n        roster.add(\"Vikram Singh\");\n\n        // Display the roster\n        System.out.println(\"=== Current Roster ===\" );\n        for (int i = 0; i < roster.size(); i++) {\n            System.out.printf(\"%d. %s%n\", i + 1, roster.get(i));\n        }\n\n        // Add a student\n        roster.add(\"Kavitha Nair\");\n        System.out.println(\"\\nAdded: Kavitha Nair\");\n        System.out.println(\"Total students: \" + roster.size());\n\n        // Remove a student by name\n        boolean removed = roster.remove(\"Amit Patel\");\n        System.out.println(\"Removed Amit: \" + removed);\n\n        // Search\n        String search = \"Sneha Iyer\";\n        int    idx    = roster.indexOf(search);\n        System.out.println(search + \" is at position: \" + (idx + 1));\n\n        // Filter: names starting with 'P'\n        System.out.println(\"\\n=== Names starting with P ===\");\n        for (String name : roster) {\n            if (name.startsWith(\"P\")) {\n                System.out.println(name);\n            }\n        }\n    }\n}",
      "explanation": "- `ArrayList<String> roster = new ArrayList<>()` — the type parameter `<String>` ensures only Strings can be added\n- `.add(\"Kavitha Nair\")` — appends to the end; the list grows automatically\n- `.remove(\"Amit Patel\")` — removes the first matching element; returns `true` if found\n- `.indexOf(search)` — returns the zero-based position; `idx + 1` converts to 1-based for display\n- `for (String name : roster)` — the enhanced for loop works with ArrayList just like arrays\n- `.startsWith(\"P\")` — String method used inside the loop to filter matching elements"
    },
    "exercise": {
      "title": "Build a Course Enrolment Manager",
      "instructions": "Create an ArrayList<String> named courses. Add these four courses: 'Python', 'JavaScript', 'Java', 'HTML/CSS'. Print the count using size(). Check if 'Java' is in the list using contains() and print the result. Remove 'Python' and print the updated list using a for-each loop. Add 'React' and print the final count.\n\nExpected output includes size 4, Java present true, Python removed, and final size 4.",
      "starterCode": "import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        ArrayList<String> courses = new ArrayList<>();\n        courses.add(\"Python\");\n        courses.add(\"JavaScript\");\n        courses.add(\"Java\");\n        courses.add(\"HTML/CSS\");\n\n        System.out.println(\"Count: \" + courses.size());\n        System.out.println(\"Has Java: \" + courses.contains(\"Java\"));\n\n        // Remove Python and print updated list\n        courses.remove(\"Python\");\n        System.out.println(\"After removing Python:\");\n        // Your code: for-each loop to print each course\n\n        // Add React and print final count\n        courses.add(\"React\");\n        // Your code: print final count\n    }\n}",
      "solutionCode": "import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> courses = new ArrayList<>();\n        courses.add(\"Python\");\n        courses.add(\"JavaScript\");\n        courses.add(\"Java\");\n        courses.add(\"HTML/CSS\");\n\n        System.out.println(\"Count: \" + courses.size());\n        System.out.println(\"Has Java: \" + courses.contains(\"Java\"));\n\n        courses.remove(\"Python\");\n        System.out.println(\"After removing Python:\");\n        for (String c : courses) {\n            System.out.println(\"  \" + c);\n        }\n\n        courses.add(\"React\");\n        System.out.println(\"Final count: \" + courses.size());\n    }\n}",
      "hints": [
        "💡 Add a for-each loop: for (String c : courses) { System.out.println(\"  \" + c); }",
        "💡 After adding React, print: System.out.println(\"Final count: \" + courses.size());",
        "💡 ArrayList uses .size() (not .length) to return the number of elements."
      ],
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Has Java: true",
          "checkType": "contains"
        },
        {
          "input": "",
          "expectedOutput": "Final count: 4",
          "checkType": "contains"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "java-m6-l2-q1",
          "question": "What is the key advantage of ArrayList over a regular Java array?",
          "options": [
            "ArrayList holds primitive types directly; arrays require wrappers",
            "ArrayList can grow and shrink dynamically; arrays have a fixed size set at creation",
            "ArrayList is faster than arrays for all operations",
            "ArrayList can hold multiple types simultaneously; arrays cannot"
          ],
          "correct": 1,
          "explanation": "A Java array has a fixed size determined when it is created with new int[5] — you cannot add or remove elements. ArrayList dynamically resizes as you call add() and remove(). This makes ArrayList ideal when the number of elements is not known in advance or changes during program execution."
        },
        {
          "id": "java-m6-l2-q2",
          "question": "How do you access the element at index 2 in an ArrayList named list?",
          "options": [
            "list[2]",
            "list.element(2)",
            "list.get(2)",
            "list.fetch(2)"
          ],
          "correct": 2,
          "explanation": "ArrayList elements are accessed with the .get(index) method. Unlike arrays (which use arr[index] bracket notation), ArrayList requires a method call. list.get(2) returns the element at zero-based index 2. Attempting bracket notation on an ArrayList causes a compile error."
        }
      ]
    }
  },
  {
    "id": "java-m6-l3",
    "moduleId": "java-m6",
    "title": "Mini Project: Student Grade System",
    "order": 3,
    "xpReward": 25,
    "duration": "20 min",
    "explanation": {
      "title": "Building a Complete Student Grade System Using All Core Java Concepts",
      "content": "# The Mini Project\n\nYou have now learned every core building block of Java programming:\n\n1. **Java structure** — class, main method, output, comments\n2. **Variables and types** — primitives, String, casting, parsing\n3. **Operators** — arithmetic, comparison, logical, ternary\n4. **Conditions** — if/else if/else, switch\n5. **Loops** — for, for-each, while, break, continue\n6. **Methods** — declaration, parameters, return values, overloading\n7. **Arrays** — creation, access, iteration, common patterns\n8. **ArrayList** — dynamic collections, add, remove, search\n\nIn this lesson, you will build a **Student Grade System** — a complete program that stores student records, computes statistics, ranks students, and prints a formatted report. Every concept from every module is used here.\n\n## Design: What the System Must Do\n\n- Store each student's name and three subject scores\n- Compute average for each student\n- Assign a letter grade based on average\n- Find the top student\n- Compute class average\n- Print a formatted ranked report\n\n## Data Structure Choice\n\nWe use **parallel arrays** — separate arrays for names and scores that are linked by index. Student at `names[i]` has scores at `scores[i]`.\n\n```java\nString[] names  = {\"Rahul\", \"Priya\", ...};\nint[][]  scores = {{85, 72, 90}, {92, 88, 95}, ...};\n```\n\n## Method Decomposition\n\nBreaking the problem into focused methods:\n\n- `computeAverage(int[])` — average of a student's three scores\n- `assignGrade(double)` — letter grade for an average\n- `findTopStudent(String[], int[][])` — name of highest-average student\n- `printReport(String[], int[][], ...)` — formatted table output\n\nThis decomposition mirrors real professional Java code. Each method is independently testable and reusable.\n\nIn the code example below, you will see the complete Student Grade System implemented using every concept from this course. Study each method before reading the main method."
    },
    "codeExample": {
      "title": "Complete Student Grade System",
      "language": "java",
      "code": "public class Main {\n\n    // Average of three integer scores\n    public static double computeAverage(int[] subjectScores) {\n        int total = 0;\n        for (int s : subjectScores) total += s;\n        return (double) total / subjectScores.length;\n    }\n\n    // Letter grade based on average\n    public static String assignGrade(double avg) {\n        if      (avg >= 90) return \"A\";\n        else if (avg >= 75) return \"B\";\n        else if (avg >= 60) return \"C\";\n        else                return \"F\";\n    }\n\n    // Index of the student with the highest average\n    public static int findTopIndex(int[][] allScores) {\n        int    topIdx = 0;\n        double topAvg = computeAverage(allScores[0]);\n        for (int i = 1; i < allScores.length; i++) {\n            double avg = computeAverage(allScores[i]);\n            if (avg > topAvg) { topAvg = avg; topIdx = i; }\n        }\n        return topIdx;\n    }\n\n    public static void main(String[] args) {\n\n        // --- Data ---\n        String[] names = {\"Rahul\", \"Priya\", \"Amit\", \"Sneha\", \"Vikram\"};\n        int[][]  scores = {\n            {85, 72, 90},   // Rahul\n            {92, 88, 95},   // Priya\n            {62, 55, 70},   // Amit\n            {78, 83, 91},   // Sneha\n            {45, 50, 48}    // Vikram\n        };\n\n        // --- Report header ---\n        System.out.println(\"================================================\");\n        System.out.println(\"          STUDENT GRADE REPORT\");\n        System.out.println(\"================================================\");\n        System.out.printf(\"%-10s %4s %4s %4s %7s %5s%n\",\n                          \"Name\", \"M\", \"S\", \"E\", \"Avg\", \"Grade\");\n        System.out.println(\"------------------------------------------------\");\n\n        // --- Per-student rows + class total ---\n        double classTotal = 0;\n        for (int i = 0; i < names.length; i++) {\n            double avg   = computeAverage(scores[i]);\n            String grade = assignGrade(avg);\n            classTotal  += avg;\n            System.out.printf(\"%-10s %4d %4d %4d %7.1f %5s%n\",\n                names[i],\n                scores[i][0], scores[i][1], scores[i][2],\n                avg, grade);\n        }\n\n        // --- Summary ---\n        double classAvg = classTotal / names.length;\n        int    topIdx   = findTopIndex(scores);\n        System.out.println(\"================================================\");\n        System.out.printf(\"Class Average : %.1f%n\", classAvg);\n        System.out.printf(\"Top Student   : %s (%.1f)%n\",\n                          names[topIdx],\n                          computeAverage(scores[topIdx]));\n        System.out.printf(\"Pass count    : %d/%d%n\",\n                          countPassing(scores), names.length);\n    }\n\n    // Count students with average >= 60\n    public static int countPassing(int[][] allScores) {\n        int count = 0;\n        for (int[] s : allScores)\n            if (computeAverage(s) >= 60) count++;\n        return count;\n    }\n}",
      "explanation": "- `for (int s : subjectScores) total += s` — for-each over a method parameter array; accumulates the total\n- `(double) total / subjectScores.length` — cast before dividing to force decimal division\n- `int[][] scores` — a 2D array; each row is one student's three subject scores\n- `computeAverage(scores[i])` — passing a row of the 2D array to a method that accepts `int[]`\n- `%-10s %4s %4s %4d %7.1f %5s` — format string with width/alignment codes for a neat table layout\n- `countPassing` defined after `main` — Java allows methods in any order within a class"
    },
    "exercise": {
      "title": "Extend the Grade System with a Remark",
      "instructions": "Add a static method getRemark(String grade) to the grade system that returns: 'Excellent!' for A, 'Well done!' for B, 'Keep going!' for C, and 'Seek help.' for F. Then add a loop in main that prints each student's name, grade, and remark on one line. Use the same names and scores arrays from the code example.\n\nExpected output includes lines like: Priya A Excellent!",
      "starterCode": "public class Main {\n\n    public static double computeAverage(int[] s) {\n        int total = 0;\n        for (int v : s) total += v;\n        return (double) total / s.length;\n    }\n\n    public static String assignGrade(double avg) {\n        if      (avg >= 90) return \"A\";\n        else if (avg >= 75) return \"B\";\n        else if (avg >= 60) return \"C\";\n        else                return \"F\";\n    }\n\n    // Add getRemark(String grade) method here\n\n    public static void main(String[] args) {\n        String[] names  = {\"Rahul\", \"Priya\", \"Amit\", \"Sneha\", \"Vikram\"};\n        int[][]  scores = {\n            {85, 72, 90}, {92, 88, 95}, {62, 55, 70},\n            {78, 83, 91}, {45, 50, 48}\n        };\n\n        // Loop: print name, grade, remark for each student\n        for (int i = 0; i < names.length; i++) {\n            double avg    = computeAverage(scores[i]);\n            String grade  = assignGrade(avg);\n            // Your code: get remark and print name, grade, remark\n        }\n    }\n}",
      "solutionCode": "public class Main {\n\n    public static double computeAverage(int[] s) {\n        int total = 0;\n        for (int v : s) total += v;\n        return (double) total / s.length;\n    }\n\n    public static String assignGrade(double avg) {\n        if      (avg >= 90) return \"A\";\n        else if (avg >= 75) return \"B\";\n        else if (avg >= 60) return \"C\";\n        else                return \"F\";\n    }\n\n    public static String getRemark(String grade) {\n        switch (grade) {\n            case \"A\": return \"Excellent!\";\n            case \"B\": return \"Well done!\";\n            case \"C\": return \"Keep going!\";\n            default : return \"Seek help.\";\n        }\n    }\n\n    public static void main(String[] args) {\n        String[] names  = {\"Rahul\", \"Priya\", \"Amit\", \"Sneha\", \"Vikram\"};\n        int[][]  scores = {\n            {85, 72, 90}, {92, 88, 95}, {62, 55, 70},\n            {78, 83, 91}, {45, 50, 48}\n        };\n\n        for (int i = 0; i < names.length; i++) {\n            double avg    = computeAverage(scores[i]);\n            String grade  = assignGrade(avg);\n            String remark = getRemark(grade);\n            System.out.println(names[i] + \" \" + grade + \" \" + remark);\n        }\n    }\n}",
      "hints": [
        "💡 Write getRemark using a switch: switch (grade) { case \"A\": return \"Excellent!\"; case \"B\": return \"Well done!\"; ... default: return \"Seek help.\"; }",
        "💡 Inside the loop, call: String remark = getRemark(grade); then print: System.out.println(names[i] + \" \" + grade + \" \" + remark);",
        "💡 grade is already computed earlier in the loop — pass it directly to getRemark(grade)."
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
          "id": "java-m6-l3-q1",
          "question": "Why is breaking a large program into multiple static methods better than writing everything in main?",
          "options": [
            "Multiple methods run faster than a single main method",
            "Java requires at least five methods in every class",
            "Each method can be tested independently and the logic is easier to read and reuse",
            "Static methods use less memory than the code inside main"
          ],
          "correct": 2,
          "explanation": "Decomposing a program into focused methods makes each piece independently testable, easier to understand (a well-named method communicates intent), and reusable across the codebase. A change to one method only affects callers of that method. This is the Single Responsibility Principle — each method does one thing well."
        },
        {
          "id": "java-m6-l3-q2",
          "question": "How does passing int[][] scores[i] to a method that accepts int[] work?",
          "options": [
            "It does not work — a 2D array cannot be passed to a 1D array parameter",
            "scores[i] is one row of the 2D array, which is a regular int[] — an exact type match",
            "Java automatically converts the entire 2D array to 1D when passed to a method",
            "The method receives a copy of the entire 2D array, not just one row"
          ],
          "correct": 1,
          "explanation": "A 2D array in Java is an array of arrays. scores is an int[][] — an array of int[] rows. scores[i] accesses the i-th row, which is a regular int[] object. Passing scores[i] to a method that accepts int[] is a perfect type match — the method receives the row as a normal single-dimensional array."
        },
        {
          "id": "java-m6-l3-q3",
          "question": "Which six Java concepts did the Student Grade System mini project combine?",
          "options": [
            "GUI, networking, file I/O, databases, threads, and encryption",
            "Variables and types, conditions, loops, methods, arrays, and output formatting",
            "Classes, inheritance, polymorphism, interfaces, exceptions, and generics",
            "Recursion, sorting algorithms, searching algorithms, trees, graphs, and hashing"
          ],
          "correct": 1,
          "explanation": "The Student Grade System used: typed variables and arrays (Module 1-2), if/else conditions and switch for grading (Module 3), for and for-each loops to process data (Module 4), static methods with parameters and return values (Module 5), and 2D arrays with printf formatting (Module 6). These are the exact six beginner building blocks of Java."
        }
      ]
    }
  }
]
''')

# ── Combine all modules into one list ─────────────────────
java_lessons = (
    java_m1_raw + \
         java_m2_raw + \
         java_m3_raw + \
         java_m4_raw + \
         java_m5_raw + \
         java_m6_raw
)

# ── Sanity check ──────────────────────────────────────────
print(f"Loaded {len(java_lessons)} Java lessons")
for lesson in java_lessons:
    print(f'  {lesson["id"]:15} {lesson["title"]:50} {lesson["xpReward"]} XP')