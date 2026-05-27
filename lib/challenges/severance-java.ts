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
  {
    id: "sv-java-06",
    themeId: "severance",
    languageId: "java",
    order: 6,
    title: "String Methods",
    themedTitle: "Lumon's Department Name Formatter",
    narrative:
      "Ms. Cobel requires all department names to be formatted precisely before appearing on official Lumon signage. The Macrodata Refinement team's name must be uppercased, its length verified, and a check performed to confirm it contains the word 'refinement'.",
    prompt:
      "Inside `main`, declare a `String` variable `dept` set to `\"macrodata refinement\"`. Print it in all uppercase using `toUpperCase()`. Print its length using `length()`. Print whether it contains `\"refinement\"` using `contains()`.",
    hint: "Call `dept.toUpperCase()`, `dept.length()`, and `dept.contains(\"refinement\")` — each in its own `System.out.println()`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String dept = "macrodata refinement";\n        System.out.println(dept.toUpperCase());\n        System.out.println(dept.length());\n        System.out.println(dept.contains("refinement"));\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String dept = "macrodata refinement";\n        // Print in uppercase\n        System.out.println(dept.___);\n        // Print the length\n        System.out.println(dept.___);\n        // Print whether it contains "refinement"\n        System.out.println(dept.___);\n    }\n}`,
    testCases: [
      { input: "", expected: "MACRODATA REFINEMENT", description: "Department name in uppercase" },
      { input: "", expected: "20", description: "Department name length is 20" },
      { input: "", expected: "true", description: "Name contains 'refinement'" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "sv-java-07",
    themeId: "severance",
    languageId: "java",
    order: 7,
    title: "ArrayList",
    themedTitle: "The MDR Team Tracker",
    narrative:
      "The MDR department has a fluid roster. Helly R. was added, then Irving transferred to a different floor, and a new hire named Burt joined. Dylan needs a dynamic list to keep accurate records for Ms. Cobel's weekly report.",
    prompt:
      "Import `java.util.ArrayList`. Create an `ArrayList<String>` called `team`. Add `\"Mark\"`, `\"Helly\"`, `\"Irving\"`, `\"Dylan\"`. Remove `\"Irving\"`. Add `\"Burt\"`. Print the size of the list, then print the element at index 1.",
    hint: "Use `list.add()`, `list.remove()`, `list.size()`, and `list.get(index)` for the operations.",
    solution: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> team = new ArrayList<>();\n        team.add("Mark");\n        team.add("Helly");\n        team.add("Irving");\n        team.add("Dylan");\n        team.remove("Irving");\n        team.add("Burt");\n        System.out.println(team.size());\n        System.out.println(team.get(1));\n    }\n}`,
    starterCode: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> team = new ArrayList<>();\n        team.add("Mark");\n        team.add("Helly");\n        team.add("Irving");\n        team.add("Dylan");\n        // Remove "Irving"\n        team.remove(___);\n        // Add "Burt"\n        team.add(___);\n        System.out.println(team.size());\n        System.out.println(team.get(1));\n    }\n}`,
    testCases: [
      { input: "", expected: "4", description: "Team has 4 members after the changes" },
      { input: "", expected: "Helly", description: "Element at index 1 is Helly" },
    ],
    concept: "ArrayList",
    difficulty: "intermediate",
  },
  {
    id: "sv-java-08",
    themeId: "severance",
    languageId: "java",
    order: 8,
    title: "HashMap",
    themedTitle: "Lumon Floor Directory",
    narrative:
      "Lumon Industries has many mysterious floors that employees must never discuss. The security desk keeps a HashMap mapping floor names to their access level codes. Ms. Cobel wants to confirm the Perpetuity Wing entry and check whether the Testing Floor is registered.",
    prompt:
      "Import `java.util.HashMap`. Create a `HashMap<String, Integer>` called `floors`. Add: `\"MDR Floor\"` → `1`, `\"Perpetuity Wing\"` → `5`, `\"Testing Floor\"` → `9`. Print the access code for `\"Perpetuity Wing\"`. Print whether `\"Testing Floor\"` is a key using `containsKey()`.",
    hint: "Use `map.put(key, value)`, `map.get(key)`, and `map.containsKey(key)` for the three operations.",
    solution: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> floors = new HashMap<>();\n        floors.put("MDR Floor", 1);\n        floors.put("Perpetuity Wing", 5);\n        floors.put("Testing Floor", 9);\n        System.out.println(floors.get("Perpetuity Wing"));\n        System.out.println(floors.containsKey("Testing Floor"));\n    }\n}`,
    starterCode: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> floors = new HashMap<>();\n        floors.put("MDR Floor", 1);\n        floors.put("Perpetuity Wing", 5);\n        floors.put("Testing Floor", 9);\n        // Print access code for "Perpetuity Wing"\n        System.out.println(floors.get(___));\n        // Print whether "Testing Floor" is a key\n        System.out.println(floors.containsKey(___));\n    }\n}`,
    testCases: [
      { input: "", expected: "5", description: "Perpetuity Wing has access code 5" },
      { input: "", expected: "true", description: "Testing Floor is in the directory" },
    ],
    concept: "HashMap",
    difficulty: "intermediate",
  },
  {
    id: "sv-java-09",
    themeId: "severance",
    languageId: "java",
    order: 9,
    title: "Multiple Methods",
    themedTitle: "The Wellness Session Evaluator",
    narrative:
      "Ms. Casey runs wellness sessions that evaluate employees in two stages: first compute a raw wellness score from tasks done and rest taken, then classify it with a wellness tier. The Wellness Department needs both methods working in concert to issue correct perks.",
    prompt:
      "Write two static methods: `wellnessScore(int tasks, int restHours)` that returns `tasks * 10 + restHours * 5`, and `wellnessTier(int tasks, int restHours)` that calls `wellnessScore` and returns `\"Flourishing\"` if the score is 100 or above, `\"Stable\"` if 60 or above, and `\"Needs Support\"` otherwise. Call `wellnessTier` from `main` with `(8, 4)` and `(3, 2)` and print the results.",
    hint: "In `wellnessTier`, call `wellnessScore(tasks, restHours)` and store it, then use if/else to return the tier string.",
    solution: `public class Main {\n    public static int wellnessScore(int tasks, int restHours) {\n        return tasks * 10 + restHours * 5;\n    }\n\n    public static String wellnessTier(int tasks, int restHours) {\n        int score = wellnessScore(tasks, restHours);\n        if (score >= 100) {\n            return "Flourishing";\n        } else if (score >= 60) {\n            return "Stable";\n        } else {\n            return "Needs Support";\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(wellnessTier(8, 4));  // Flourishing\n        System.out.println(wellnessTier(3, 2));  // Needs Support\n    }\n}`,
    starterCode: `public class Main {\n    public static int wellnessScore(int tasks, int restHours) {\n        // Return tasks * 10 + restHours * 5\n        return ___;\n    }\n\n    public static String wellnessTier(int tasks, int restHours) {\n        int score = wellnessScore(tasks, restHours);\n        // Return "Flourishing" if >= 100, "Stable" if >= 60, "Needs Support" otherwise\n        if (score >= 100) {\n            return ___;\n        } else if (score >= 60) {\n            return ___;\n        } else {\n            return ___;\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(wellnessTier(8, 4));  // Flourishing\n        System.out.println(wellnessTier(3, 2));  // Needs Support\n    }\n}`,
    testCases: [
      { input: "8, 4", expected: "Flourishing", description: "Score 100 — Flourishing tier" },
      { input: "3, 2", expected: "Needs Support", description: "Score 40 — Needs Support tier" },
    ],
    concept: "Multiple Methods",
    difficulty: "advanced",
  },
  {
    id: "sv-java-10",
    themeId: "severance",
    languageId: "java",
    order: 10,
    title: "StringBuilder",
    themedTitle: "Building the Refinement Report",
    narrative:
      "At the end of each quarter, the MDR team submits a formal refinement report to Ms. Cobel. The report must be assembled from several pieces of data and printed as a single string. Dylan insists on using StringBuilder for maximum efficiency.",
    prompt:
      "Use a `StringBuilder` to build an MDR report. Append `\"MDR REPORT | \"`, then `\"Employee: Mark S.\"`, then `\" | \"`, then `\"Bins Completed: 4\"`, then `\" | \"`, then `\"Status: Compliant\"`. Print the result using `toString()`.",
    hint: "Declare `StringBuilder sb = new StringBuilder();` then chain multiple `sb.append()` calls. End with `System.out.println(sb.toString())`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder();\n        sb.append("MDR REPORT | ");\n        sb.append("Employee: Mark S.");\n        sb.append(" | ");\n        sb.append("Bins Completed: 4");\n        sb.append(" | ");\n        sb.append("Status: Compliant");\n        System.out.println(sb.toString());\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder();\n        sb.append("MDR REPORT | ");\n        sb.append("Employee: Mark S.");\n        sb.append(" | ");\n        sb.append(___);\n        sb.append(" | ");\n        sb.append(___);\n        System.out.println(sb.toString());\n    }\n}`,
    testCases: [
      { input: "", expected: "MDR REPORT | Employee: Mark S. | Bins Completed: 4 | Status: Compliant", description: "Full MDR report string assembled" },
    ],
    concept: "StringBuilder",
    difficulty: "advanced",
  },
];
