// src/lib/ai/errorExplainer.ts
// ─────────────────────────────────────────────────────────────
// ERROR EXPLAINER
//
// When code execution fails, this module:
//   1. Parses the raw error message
//   2. Tries to identify the error type from a lookup table
//   3. If recognized → returns instant pre-built explanation
//   4. If unknown → builds a prompt for Claude to explain it
//
// This avoids calling Claude for common beginner errors like
// IndexError, NameError, IndentationError — saving cost.
// ─────────────────────────────────────────────────────────────

import { knowledgeBase } from './knowledgeBase';

// ── Types ─────────────────────────────────────────────────────

export interface ParsedError {
  type:         string;    // "IndexError", "TypeError", etc.
  message:      string;    // raw error message
  line?:        number;    // line number if detected
  snippet?:     string;    // offending code snippet
  explanation?: string;    // pre-built explanation if available
  suggestion?:  string;    // quick fix suggestion
  isKnown:      boolean;   // true if we have a pre-built explanation
}

export interface ErrorAnalysis {
  parsedError:   ParsedError;
  explanation:   string;     // human-friendly explanation
  fixSteps:      string[];   // step-by-step fix
  example:       string;     // correct code example
  source:        'local' | 'claude';  // where explanation came from
}

// ── Error pattern lookup ──────────────────────────────────────
interface ErrorPattern {
  regex:       RegExp;
  type:        string;
  explanation: (match: RegExpMatchArray, code: string) => string;
  suggestion:  string;
  kbId?:       string;  // knowledge base entry ID
}

const PYTHON_PATTERNS: ErrorPattern[] = [
  {
    regex:  /IndexError: list index out of range/i,
    type:   'IndexError',
    explanation: () => `**IndexError** — You tried to access an index that doesn't exist in your list.\n\nExample: If your list has 3 items, valid indices are 0, 1, 2. Accessing index 3 or higher causes this error.`,
    suggestion: 'Check `len(your_list)` and make sure your index is less than that.',
    kbId: 'py-indexerror',
  },
  {
    regex:  /NameError: name '(.+)' is not defined/i,
    type:   'NameError',
    explanation: (match) => `**NameError** — The variable \`${match[1]}\` doesn't exist yet when you're trying to use it.\n\nThis usually means:\n- You made a **typo** in the variable name\n- You're using the variable before assigning it\n- The variable is defined in a different scope`,
    suggestion: 'Check the spelling of your variable name, and make sure you assigned it before using it.',
    kbId: 'py-nameerror',
  },
  {
    regex:  /TypeError: can only concatenate str \(not "(.+)"\) to str/i,
    type:   'TypeError',
    explanation: (match) => `**TypeError** — You're trying to join a string with a \`${match[1]}\` using \`+\`, but Python can only \`+\` strings with other strings.\n\nFix: Convert to string first: \`str(your_value)\`, or use an f-string: \`f"text {your_variable}"\``,
    suggestion: 'Use f-string: `f"Your text {variable}"` instead of "text" + variable',
    kbId: 'py-typeerror',
  },
  {
    regex:  /IndentationError: (.*)/i,
    type:   'IndentationError',
    explanation: (match) => `**IndentationError** — Python uses indentation (spaces) to define code blocks, and something is misaligned.\n\nError detail: ${match[1]}\n\nMake sure code inside if/for/while/def blocks is indented by exactly 4 spaces.`,
    suggestion: 'Check that all lines in the same block have exactly 4 spaces of indentation.',
    kbId: 'py-indentation',
  },
  {
    regex:  /SyntaxError: (.+)/i,
    type:   'SyntaxError',
    explanation: (match) => `**SyntaxError** — Python can't understand your code because of a grammar mistake.\n\nDetail: ${match[1]}\n\nCommon causes:\n- Missing colon `:` after if/for/while/def\n- Mismatched brackets or quotes\n- Wrong operator (= instead of ==)`,
    suggestion: 'Look at the line mentioned in the error. Check for missing colons, brackets, or quotes.',
  },
  {
    regex:  /ZeroDivisionError/i,
    type:   'ZeroDivisionError',
    explanation: () => `**ZeroDivisionError** — You tried to divide by zero, which is mathematically impossible.\n\nFix: Check that your divisor isn't zero before dividing:`,
    suggestion: 'Add a check: `if denominator != 0:` before dividing.',
  },
  {
    regex:  /ValueError: invalid literal for int\(\) with base 10: '(.+)'/i,
    type:   'ValueError',
    explanation: (match) => `**ValueError** — You called \`int("${match[1]}")\` but \`"${match[1]}"\` cannot be converted to an integer.\n\nThis happens when the string contains letters, spaces, or decimal points.`,
    suggestion: 'Make sure the string contains only digits before calling int(). Use try/except to handle invalid input.',
  },
  {
    regex:  /AttributeError: '(.+)' object has no attribute '(.+)'/i,
    type:   'AttributeError',
    explanation: (match) => `**AttributeError** — You tried to call \`.${match[2]}\` on a \`${match[1]}\` object, but that method/property doesn't exist for that type.\n\nCheck the type of your variable — it might not be what you expect.`,
    suggestion: `Check the type of your variable with print(type(variable)). Maybe you have a typo in the method name?`,
  },
  {
    regex:  /KeyError: (.+)/i,
    type:   'KeyError',
    explanation: (match) => `**KeyError** — The dictionary key \`${match[1]}\` doesn't exist in your dictionary.\n\nUse \`.get(key, default)\` instead of \`dict[key]\` for safe access:`,
    suggestion: 'Use dict.get(key, default_value) instead of dict[key] to avoid crashes.',
  },
  {
    regex:  /RecursionError: maximum recursion depth exceeded/i,
    type:   'RecursionError',
    explanation: () => `**RecursionError** — Your recursive function called itself too many times (usually over 1000 times).\n\nThis happens when:\n- Your **base case** is missing or never reached\n- Your recursive case doesn't actually get closer to the base case`,
    suggestion: 'Check your base case — make sure the function eventually stops calling itself.',
  },
];

const JAVASCRIPT_PATTERNS: ErrorPattern[] = [
  {
    regex:  /TypeError: Cannot read propert(?:y|ies) of (undefined|null)/i,
    type:   'TypeError',
    explanation: (match) => `**TypeError** — You tried to access a property on \`${match[1]}\`.\n\nThis means the variable you're using has no value yet.\n\nFix with optional chaining: \`obj?.property\` returns undefined instead of crashing.`,
    suggestion: 'Check if the variable exists first: `if (variable)` or use `variable?.property`',
    kbId: 'js-undefined',
  },
  {
    regex:  /ReferenceError: (.+) is not defined/i,
    type:   'ReferenceError',
    explanation: (match) => `**ReferenceError** — The variable \`${match[1]}\` doesn't exist.\n\nPossible causes:\n- Typo in variable name\n- Variable defined with \`let\` or \`const\` in a different scope\n- Forgot to declare the variable`,
    suggestion: 'Check spelling and make sure the variable is declared before use.',
  },
  {
    regex:  /SyntaxError: Unexpected token (.+)/i,
    type:   'SyntaxError',
    explanation: (match) => `**SyntaxError** — JavaScript found an unexpected character: \`${match[1]}\`.\n\nCommon causes:\n- Missing closing bracket/parenthesis\n- Extra comma\n- Using = instead of === in condition`,
    suggestion: 'Check brackets are balanced — every { needs a }, every ( needs a ).',
  },
  {
    regex:  /TypeError: (.+) is not a function/i,
    type:   'TypeError',
    explanation: (match) => `**TypeError** — \`${match[1]}\` is not a function.\n\nYou're trying to call something as a function, but it's not.\n\nCheck:\n- Did you spell the method name correctly?\n- Is the variable actually an array/object with that method?`,
    suggestion: 'Check the spelling of the method name and confirm the variable type.',
  },
];

const JAVA_PATTERNS: ErrorPattern[] = [
  {
    regex:  /NullPointerException/i,
    type:   'NullPointerException',
    explanation: () => `**NullPointerException** — You called a method or accessed a field on a variable that is \`null\` (has no value).\n\nFix: Check for null before using:\n\`\`\`java\nif (variable != null) { variable.method(); }\n\`\`\``,
    suggestion: 'Add a null check before calling methods on the variable.',
    kbId: 'java-npe',
  },
  {
    regex:  /ArrayIndexOutOfBoundsException: Index (\d+) out of bounds/i,
    type:   'ArrayIndexOutOfBoundsException',
    explanation: (match) => `**ArrayIndexOutOfBoundsException** — You tried to access index \`${match[1]}\` which doesn't exist in your array.\n\nRemember: Arrays are zero-indexed. A 5-element array has indices 0-4.`,
    suggestion: 'Check array.length and make sure index < array.length.',
  },
  {
    regex:  /ClassCastException: (.+) cannot be cast to (.+)/i,
    type:   'ClassCastException',
    explanation: (match) => `**ClassCastException** — You tried to treat a \`${match[1]}\` as a \`${match[2]}\`, but they're incompatible types.`,
    suggestion: 'Use instanceof to check type before casting.',
  },
  {
    regex:  /StackOverflowError/i,
    type:   'StackOverflowError',
    explanation: () => `**StackOverflowError** — Your recursive method called itself too many times without reaching a base case.\n\nCheck your base case — it must be reachable and must return without calling the method again.`,
    suggestion: 'Review your base case — make sure it stops the recursion.',
  },
];

// ── Error Parser ──────────────────────────────────────────────

export function parseError(
  errorMessage: string,
  language:     string
): ParsedError {
  const cleanMsg = errorMessage.trim();

  // Select patterns for the language
  const patterns =
    language === 'python'     ? PYTHON_PATTERNS     :
    language === 'javascript' ? JAVASCRIPT_PATTERNS :
    language === 'java'       ? JAVA_PATTERNS        :
    [...PYTHON_PATTERNS, ...JAVASCRIPT_PATTERNS];

  // Try each pattern
  for (const pattern of patterns) {
    const match = cleanMsg.match(pattern.regex);
    if (match) {
      const explanation = pattern.explanation(match, cleanMsg);
      return {
        type:        pattern.type,
        message:     cleanMsg,
        explanation,
        suggestion:  pattern.suggestion,
        isKnown:     true,
      };
    }
  }

  // Extract line number if present
  const lineMatch = cleanMsg.match(/line (\d+)/i);
  const line = lineMatch ? parseInt(lineMatch[1]) : undefined;

  // Unknown error — will need Claude
  return {
    type:    extractErrorType(cleanMsg),
    message: cleanMsg,
    line,
    isKnown: false,
  };
}

function extractErrorType(message: string): string {
  const typeMatch = message.match(/^([A-Za-z]+Error|[A-Za-z]+Exception)/);
  return typeMatch ? typeMatch[1] : 'RuntimeError';
}

// ── Prompt builder for Claude (unknown errors) ────────────────
export function buildErrorExplanationPrompt(
  code:         string,
  errorMessage: string,
  language:     string
): string {
  return `A beginner learning ${language} got this error when running their code.

ERROR MESSAGE:
${errorMessage}

THEIR CODE:
\`\`\`${language}
${code.slice(0, 500)}  ${code.length > 500 ? '... (truncated)' : ''}
\`\`\`

Explain this error to them in SIMPLE, beginner-friendly language:
1. What went wrong (in plain English, no jargon)
2. WHY it happened (what caused it)
3. How to fix it (concrete steps)
4. A corrected code example (short, 5-10 lines max)

Be encouraging — mistakes are normal for beginners.
Use simple analogies if helpful.
Keep total response under 200 words.
Format with markdown: **bold** for key terms, \`code\` for code snippets.`;
}
