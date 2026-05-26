import type { Challenge } from "@/types";

export const severanceJavaChallenges: Challenge[] = [
  {
    id: "sv-java-01",
    themeId: "severance",
    languageId: "java",
    order: 1,
    title: "Variables & Types",
    themedTitle: "Your Innie's Badge",
    narrative:
      "Welcome to Lumon Industries. You have just been severed. Ms. Cobel requires every new employee's record to be initialized on the system. Your innie's record needs a name, an employee number, and whether your severance procedure was successful.",
    prompt:
      "Inside `main`, declare a `String` variable `employeeName` set to `\"Mark S.\"`, an `int` variable `employeeNumber` set to `4247`, and a `boolean` variable `severed` set to `true`. Print each variable on its own line.",
    hint: "Declare each variable with its type: `String employeeName = \"Mark S.\";` then print with `System.out.println()`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String employeeName = "Mark S.";\n        int employeeNumber = 4247;\n        boolean severed = true;\n        System.out.println(employeeName);\n        System.out.println(employeeNumber);\n        System.out.println(severed);\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        // Declare employeeName, employeeNumber, and severed\n        String employeeName = ___;\n        int employeeNumber = ___;\n        boolean severed = ___;\n        System.out.println(employeeName);\n        System.out.println(employeeNumber);\n        System.out.println(severed);\n    }\n}`,
    testCases: [
      { input: "", expected: "Mark S.", description: "Prints the employee name" },
      { input: "", expected: "4247", description: "Prints the employee number" },
      { input: "", expected: "true", description: "Prints the severed status" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "sv-java-02",
    themeId: "severance",
    languageId: "java",
    order: 2,
    title: "Conditionals",
    themedTitle: "Macrodata Bin Classifier",
    narrative:
      "The numbers are unsettling. They vibrate with dread. The Macrodata Refinement team must classify each number into a bin: 'Woe' for values under 25, 'Frolic' for 25 to 49, 'Dread' for 50 to 74, and 'Malice' for 75 and above.",
    prompt:
      "Write a static method `classifyNumber(int n)` that returns `\"Woe\"` if `n < 25`, `\"Frolic\"` if `n < 50`, `\"Dread\"` if `n < 75`, and `\"Malice\"` otherwise. Call it from `main` and print the results for `10`, `40`, `60`, and `80`.",
    hint: "Chain `if`, `else if`, `else if`, and `else` blocks. Since you check from smallest upward, each threshold only needs one comparison.",
    solution: `public class Main {\n    public static String classifyNumber(int n) {\n        if (n < 25) {\n            return "Woe";\n        } else if (n < 50) {\n            return "Frolic";\n        } else if (n < 75) {\n            return "Dread";\n        } else {\n            return "Malice";\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(classifyNumber(10));  // Woe\n        System.out.println(classifyNumber(40));  // Frolic\n        System.out.println(classifyNumber(60));  // Dread\n        System.out.println(classifyNumber(80));  // Malice\n    }\n}`,
    starterCode: `public class Main {\n    public static String classifyNumber(int n) {\n        // Return "Woe" if n < 25, "Frolic" if n < 50,\n        // "Dread" if n < 75, "Malice" otherwise\n        if (n < 25) {\n            return ___;\n        } else if (n < 50) {\n            return ___;\n        } else if (n < 75) {\n            return ___;\n        } else {\n            return ___;\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(classifyNumber(10));  // Woe\n        System.out.println(classifyNumber(40));  // Frolic\n        System.out.println(classifyNumber(60));  // Dread\n        System.out.println(classifyNumber(80));  // Malice\n    }\n}`,
    testCases: [
      { input: "10", expected: "Woe", description: "10 classifies as Woe" },
      { input: "40", expected: "Frolic", description: "40 classifies as Frolic" },
      { input: "60", expected: "Dread", description: "60 classifies as Dread" },
      { input: "80", expected: "Malice", description: "80 classifies as Malice" },
    ],
    concept: "Conditionals",
    difficulty: "beginner",
  },
  {
    id: "sv-java-03",
    themeId: "severance",
    languageId: "java",
    order: 3,
    title: "Methods",
    themedTitle: "Compliance Score Calculator",
    narrative:
      "Ms. Cobel tracks every employee's compliance score. A score is calculated as the number of tasks completed multiplied by a reward multiplier. The Wellness team needs a method that computes this so they can prepare the quarterly Waffle Party invitations.",
    prompt:
      "Write a static method `complianceScore(int tasksCompleted, int multiplier)` that returns the product of the two parameters. Call it from `main` with `tasksCompleted = 12` and `multiplier = 8`, and print the result.",
    hint: "The return type is `int`. Use the `*` operator to multiply the two parameters.",
    solution: `public class Main {\n    public static int complianceScore(int tasksCompleted, int multiplier) {\n        return tasksCompleted * multiplier;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(complianceScore(12, 8));  // 96\n    }\n}`,
    starterCode: `public class Main {\n    public static int complianceScore(int tasksCompleted, int multiplier) {\n        // Return tasksCompleted multiplied by multiplier\n        return ___;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(complianceScore(12, 8));  // 96\n    }\n}`,
    testCases: [
      { input: "12, 8", expected: "96", description: "12 tasks times multiplier 8 equals 96" },
    ],
    concept: "Methods & Arithmetic",
    difficulty: "beginner",
  },
  {
    id: "sv-java-04",
    themeId: "severance",
    languageId: "java",
    order: 4,
    title: "Arrays",
    themedTitle: "The MDR Number Tray",
    narrative:
      "Helly R. has a tray of numbers from today's macrodata batch. She needs to look up the third number in the tray and replace the last number with a refined value. Dylan says it's all part of the process.",
    prompt:
      "Declare an `int[]` array called `tray` with values `{34, 17, 82, 55, 29}`. Print the element at index 2. Then replace the element at index 4 with `99`. Print the updated element at index 4.",
    hint: "Arrays are zero-indexed: `tray[2]` is the third element. Assign with `tray[4] = 99;`",
    solution: `public class Main {\n    public static void main(String[] args) {\n        int[] tray = {34, 17, 82, 55, 29};\n        System.out.println(tray[2]);\n        tray[4] = 99;\n        System.out.println(tray[4]);\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int[] tray = {34, 17, 82, 55, 29};\n        // Print the element at index 2\n        System.out.println(___);\n        // Replace index 4 with 99\n        tray[4] = ___;\n        System.out.println(tray[4]);\n    }\n}`,
    testCases: [
      { input: "", expected: "82", description: "Element at index 2 is 82" },
      { input: "", expected: "99", description: "Element at index 4 is updated to 99" },
    ],
    concept: "Arrays",
    difficulty: "beginner",
  },
  {
    id: "sv-java-05",
    themeId: "severance",
    languageId: "java",
    order: 5,
    title: "Loops",
    themedTitle: "Summing the Refined Numbers",
    narrative:
      "At end of shift, the MDR team submits their total refined number count to Ms. Cobel. The sum of all numbers in a completed bin must be calculated. Irving says precision matters — a wrong total means staying late.",
    prompt:
      "Write a static method `binTotal(int[] numbers)` that uses a `for` loop to sum all elements in the array and return the total. Call it from `main` with `{23, 41, 17, 68, 35}` and print the result.",
    hint: "Declare `int sum = 0;` before the loop. Add each element to `sum` inside the loop body.",
    solution: `public class Main {\n    public static int binTotal(int[] numbers) {\n        int sum = 0;\n        for (int i = 0; i < numbers.length; i++) {\n            sum += numbers[i];\n        }\n        return sum;\n    }\n\n    public static void main(String[] args) {\n        int[] numbers = {23, 41, 17, 68, 35};\n        System.out.println(binTotal(numbers));  // 184\n    }\n}`,
    starterCode: `public class Main {\n    public static int binTotal(int[] numbers) {\n        int sum = 0;\n        for (int i = 0; i < numbers.length; i++) {\n            // Add numbers[i] to sum\n        }\n        return sum;\n    }\n\n    public static void main(String[] args) {\n        int[] numbers = {23, 41, 17, 68, 35};\n        System.out.println(binTotal(numbers));  // 184\n    }\n}`,
    testCases: [
      { input: "{23, 41, 17, 68, 35}", expected: "184", description: "Sum of all five numbers is 184" },
    ],
    concept: "Loops & Summation",
    difficulty: "intermediate",
  },
];
