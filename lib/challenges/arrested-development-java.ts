import type { Challenge } from "@/types";

export const arrestedDevelopmentJavaChallenges: Challenge[] = [
  {
    id: "ad-java-01",
    themeId: "arrested-development",
    languageId: "java",
    order: 1,
    title: "Variables & Data Types",
    themedTitle: "Lucille's Martini Budget",
    narrative:
      "Lucille Bluth has expensive tastes and zero financial accountability. Michael needs a program to track how many martinis she's ordered this month and what it's costing the company.",
    prompt:
      "Write a Java `Main` class with a `main` method. Declare a `String` variable `drink` set to `\"dry martini\"`, an `int` variable `count` set to `47`, and a `double` variable `cost` set to `282.0`. Print all three on separate lines.",
    hint: "Java uses `System.out.println()` to print. Declare variables like `int count = 47;`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String drink = "dry martini";\n        int count = 47;\n        double cost = 282.0;\n        System.out.println(drink);\n        System.out.println(count);\n        System.out.println(cost);\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String drink = ___;\n        int count = ___;\n        double cost = ___;\n        System.out.println(drink);\n        System.out.println(count);\n        System.out.println(cost);\n    }\n}`,
    testCases: [
      { input: "", expected: "dry martini\n47\n282.0", description: "Lucille's drink stats" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "ad-java-02",
    themeId: "arrested-development",
    languageId: "java",
    order: 2,
    title: "Conditionals",
    themedTitle: "The Analyst and the Therapist",
    narrative:
      "Tobias announced he's an 'analyst and therapist' — or as he calls it, an 'analrapist.' The licensing board needs a program to verify whether a given title is professionally appropriate.",
    prompt:
      "Write a `Main` class with a `checkTitle` method that takes a `String title`. If `title.equals(\"analrapist\")`, print `\"That's not appropriate, Tobias.\"`. Otherwise print `\"Welcome, \" + title + \".\"`. Test with both `\"analrapist\"` and `\"analyst\"`.",
    hint: "Use `.equals()` to compare strings in Java, not `==`.",
    solution: `public class Main {\n    static void checkTitle(String title) {\n        if (title.equals("analrapist")) {\n            System.out.println("That's not appropriate, Tobias.");\n        } else {\n            System.out.println("Welcome, " + title + ".");\n        }\n    }\n    public static void main(String[] args) {\n        checkTitle("analrapist");\n        checkTitle("analyst");\n    }\n}`,
    starterCode: `public class Main {\n    static void checkTitle(String title) {\n        if (title.equals(___)) {\n            System.out.println(___);\n        } else {\n            System.out.println("Welcome, " + title + ".");\n        }\n    }\n    public static void main(String[] args) {\n        checkTitle("analrapist");\n        checkTitle("analyst");\n    }\n}`,
    testCases: [
      { input: "analrapist", expected: "That's not appropriate, Tobias.", description: "Inappropriate title" },
      { input: "analyst", expected: "Welcome, analyst.", description: "Appropriate title" },
    ],
    concept: "Conditionals",
    difficulty: "beginner",
  },
  {
    id: "ad-java-03",
    themeId: "arrested-development",
    languageId: "java",
    order: 3,
    title: "Methods & Arithmetic",
    themedTitle: "Gob's Dove Count",
    narrative:
      "Each of Gob's illusions requires exactly 3 doves. They always escape. The Alliance of Magicians needs a method to calculate total doves required given the number of scheduled illusions.",
    prompt:
      "Write a `static int` method called `dovesNeeded` that takes `int illusions` and returns `illusions * 3`. In `main`, print the result of `dovesNeeded(7)`.",
    hint: "Declare the method as `static int dovesNeeded(int illusions)` and use `return`.",
    solution: `public class Main {\n    static int dovesNeeded(int illusions) {\n        return illusions * 3;\n    }\n    public static void main(String[] args) {\n        System.out.println(dovesNeeded(7));\n    }\n}`,
    starterCode: `public class Main {\n    static int dovesNeeded(int illusions) {\n        return ___;\n    }\n    public static void main(String[] args) {\n        System.out.println(dovesNeeded(7));  // Should print: 21\n    }\n}`,
    testCases: [
      { input: "7", expected: "21", description: "7 illusions need 21 doves" },
    ],
    concept: "Methods & Arithmetic",
    difficulty: "beginner",
  },
  {
    id: "ad-java-04",
    themeId: "arrested-development",
    languageId: "java",
    order: 4,
    title: "Arrays",
    themedTitle: "The Bluth Family Array",
    narrative:
      "Michael needs a proper roster of the Bluth family before the next board meeting. Nobody will show up, but at least the data will be accurate.",
    prompt:
      "Declare a `String[]` array `family` with four members: `\"Michael\"`, `\"Gob\"`, `\"Lindsay\"`, `\"Buster\"`. Use a for-each loop to print each name.",
    hint: "For-each loop syntax: `for (String member : family) { ... }`",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String[] family = {"Michael", "Gob", "Lindsay", "Buster"};\n        for (String member : family) {\n            System.out.println(member);\n        }\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String[] family = {___};\n        for (String member : family) {\n            System.out.println(member);\n        }\n    }\n}`,
    testCases: [
      { input: "", expected: "Michael\nGob\nLindsay\nBuster", description: "All four Bluth siblings" },
    ],
    concept: "Arrays",
    difficulty: "beginner",
  },
  {
    id: "ad-java-05",
    themeId: "arrested-development",
    languageId: "java",
    order: 5,
    title: "Loops",
    themedTitle: "Stair Car Trips",
    narrative:
      "The Bluth Company stair car has been repurposed as a getaway vehicle — again. Michael needs to log every trip it made this week to prove it was 'legitimate business.'",
    prompt:
      "Write a `for` loop that prints `\"Stair car trip #\"` followed by the trip number, for trips 1 through 5.",
    hint: "Use `for (int i = 1; i <= 5; i++)` and string concatenation inside `System.out.println`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            System.out.println("Stair car trip #" + i);\n        }\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        for (int i = ___; i <= ___; i++) {\n            System.out.println("Stair car trip #" + i);\n        }\n    }\n}`,
    testCases: [
      { input: "", expected: "Stair car trip #1\nStair car trip #2\nStair car trip #3\nStair car trip #4\nStair car trip #5", description: "Five stair car trips" },
    ],
    concept: "Loops",
    difficulty: "beginner",
  },
  {
    id: "ad-java-06",
    themeId: "arrested-development",
    languageId: "java",
    order: 6,
    title: "String Methods",
    themedTitle: "Tobias's Acting Resume",
    narrative:
      "Tobias is submitting his acting resume to the Blue Man Group — again. His agent insists the submission title be in all caps, and verified to contain the word 'ACTOR'. Tobias insists he's a 'triple threat.' Nobody checks that.",
    prompt:
      "Declare `String title = \"analrapist and actor\"`. Print `title.toUpperCase()`. Print `title.toUpperCase().contains(\"ACTOR\")`. Print `title.replace(\"analrapist\", \"analyst\")`. Print `title.length()`.",
    hint: "Chain calls where useful: `.toUpperCase().contains(...)`. `.replace(old, new)` does not modify the original.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String title = "analrapist and actor";\n        System.out.println(title.toUpperCase());\n        System.out.println(title.toUpperCase().contains("ACTOR"));\n        System.out.println(title.replace("analrapist", "analyst"));\n        System.out.println(title.length());\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String title = "analrapist and actor";\n        System.out.println(title.___());\n        System.out.println(title.toUpperCase().contains(___));\n        System.out.println(title.replace(___, ___));\n        System.out.println(title.___());\n    }\n}`,
    testCases: [
      { input: "", expected: "ANALRAPIST AND ACTOR", description: "Uppercased title" },
      { input: "", expected: "true", description: "Uppercase title contains ACTOR" },
      { input: "", expected: "analyst and actor", description: "Analrapist replaced with analyst" },
      { input: "", expected: "20", description: "Title length is 20" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "ad-java-07",
    themeId: "arrested-development",
    languageId: "java",
    order: 7,
    title: "ArrayList",
    themedTitle: "Gob's Magic Props Inventory",
    narrative:
      "Gob keeps a running list of his illusion props. New props are added when he splurges on the Alliance of Magicians' catalog. When an illusion fails — which is always — props get removed. It's not a trick. It's an ArrayList.",
    prompt:
      "Import `java.util.ArrayList`. Create `ArrayList<String> props = new ArrayList<>()`. Add `\"dove\"`, `\"cape\"`, and `\"sword\"`. Print the size. Add `\"smoke bomb\"`. Print `props.get(3)`. Then remove index 0. Print the size.",
    hint: "Use `.add()`, `.size()`, `.get(index)`, and `.remove(index)` on the ArrayList.",
    solution: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> props = new ArrayList<>();\n        props.add("dove");\n        props.add("cape");\n        props.add("sword");\n        System.out.println(props.size());\n        props.add("smoke bomb");\n        System.out.println(props.get(3));\n        props.remove(0);\n        System.out.println(props.size());\n    }\n}`,
    starterCode: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> props = new ArrayList<>();\n        props.add(___);\n        props.add(___);\n        props.add(___);\n        System.out.println(props.size());\n        props.add(___);\n        System.out.println(props.get(3));\n        props.remove(0);\n        System.out.println(props.size());\n    }\n}`,
    testCases: [
      { input: "", expected: "3", description: "Three props initially" },
      { input: "", expected: "smoke bomb", description: "Index 3 is smoke bomb" },
      { input: "", expected: "3", description: "Three props after adding one and removing one" },
    ],
    concept: "ArrayList",
    difficulty: "intermediate",
  },
  {
    id: "ad-java-08",
    themeId: "arrested-development",
    languageId: "java",
    order: 8,
    title: "HashMap",
    themedTitle: "Banana Stand Revenue by Location",
    narrative:
      "George Sr. insists there's always money in the banana stand. Michael decides to actually track it — by location. A HashMap lets him map each stand location to its weekly revenue, so the numbers are finally on paper.",
    prompt:
      "Import `java.util.HashMap`. Create `HashMap<String, Integer> revenue = new HashMap<>()`. Put `\"Newport Beach\"` with `4200`, `\"Balboa Island\"` with `3100`, and `\"Malibu\"` with `5500`. Print `revenue.containsKey(\"Malibu\")`. Print `revenue.get(\"Newport Beach\")`.",
    hint: "Use `revenue.put(key, value)`. `containsKey(...)` checks existence. `get(...)` retrieves the value.",
    solution: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> revenue = new HashMap<>();\n        revenue.put("Newport Beach", 4200);\n        revenue.put("Balboa Island", 3100);\n        revenue.put("Malibu", 5500);\n        System.out.println(revenue.containsKey("Malibu"));\n        System.out.println(revenue.get("Newport Beach"));\n    }\n}`,
    starterCode: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> revenue = new HashMap<>();\n        revenue.put(___, ___);\n        revenue.put(___, ___);\n        revenue.put(___, ___);\n        System.out.println(revenue.containsKey("Malibu"));\n        System.out.println(revenue.get("Newport Beach"));\n    }\n}`,
    testCases: [
      { input: "", expected: "true", description: "Malibu is in the revenue map" },
      { input: "", expected: "4200", description: "Newport Beach revenue is 4200" },
    ],
    concept: "HashMap",
    difficulty: "intermediate",
  },
  {
    id: "ad-java-09",
    themeId: "arrested-development",
    languageId: "java",
    order: 9,
    title: "Multiple Methods",
    themedTitle: "The Cornballer Settlement Calculator",
    narrative:
      "The Cornballer has burned people in multiple countries. George Sr. needs a settlement calculator: one method computes the base payout per claim, another multiplies that by the number of plaintiffs. Legal said to keep the math honest. George Sr. disagreed.",
    prompt:
      "Write `basePayout(int severity)` that returns `severity * 1000`. Write `totalSettlement(int severity, int plaintiffs)` that calls `basePayout(severity)` and multiplies it by `plaintiffs`. In `main`, print `totalSettlement(3, 12)`.",
    hint: "In `totalSettlement`, call `basePayout(severity)` and multiply by `plaintiffs`. Methods can call each other.",
    solution: `public class Main {\n    public static int basePayout(int severity) {\n        return severity * 1000;\n    }\n\n    public static int totalSettlement(int severity, int plaintiffs) {\n        return basePayout(severity) * plaintiffs;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(totalSettlement(3, 12));  // 36000\n    }\n}`,
    starterCode: `public class Main {\n    public static int basePayout(int severity) {\n        return severity * 1000;\n    }\n\n    public static int totalSettlement(int severity, int plaintiffs) {\n        // Call basePayout(severity) and multiply by plaintiffs\n        return ___ * plaintiffs;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(totalSettlement(3, 12));  // 36000\n    }\n}`,
    testCases: [
      { input: "3, 12", expected: "36000", description: "Severity 3 × 12 plaintiffs = $36,000" },
    ],
    concept: "Multiple Methods",
    difficulty: "advanced",
  },
  {
    id: "ad-java-10",
    themeId: "arrested-development",
    languageId: "java",
    order: 10,
    title: "StringBuilder",
    themedTitle: "Michael's Family Status Report",
    narrative:
      "Michael keeps a running report on every family member's current situation. He builds it line by line, each entry worse than the last. There's always something going wrong in the Bluth family — and now it's documented with a StringBuilder.",
    prompt:
      "Create a `String[] statuses = {\"Michael: holding it together\", \"Gob: lost the yacht\", \"Lindsay: at a spa\", \"Buster: found a hook\"}`. Use a `StringBuilder` and a for-each loop to append each status followed by `\"\\n\"`. Print `sb.toString()`.",
    hint: "Create `StringBuilder sb = new StringBuilder()`. In the loop, call `sb.append(s + \"\\n\")`. After the loop, use `System.out.print(sb.toString())`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String[] statuses = {"Michael: holding it together", "Gob: lost the yacht", "Lindsay: at a spa", "Buster: found a hook"};\n        StringBuilder sb = new StringBuilder();\n        for (String s : statuses) {\n            sb.append(s + "\\n");\n        }\n        System.out.print(sb.toString());\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String[] statuses = {"Michael: holding it together", "Gob: lost the yacht", "Lindsay: at a spa", "Buster: found a hook"};\n        StringBuilder sb = new StringBuilder();\n        for (String s : statuses) {\n            sb.append(___);\n        }\n        System.out.print(sb.toString());\n    }\n}`,
    testCases: [
      { input: "", expected: "Michael: holding it together", description: "First status in the report" },
      { input: "", expected: "Buster: found a hook", description: "Last status in the report" },
    ],
    concept: "StringBuilder",
    difficulty: "advanced",
  },
];
