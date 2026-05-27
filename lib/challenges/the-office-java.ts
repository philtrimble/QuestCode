import type { Challenge } from "@/types";

export const theOfficeJavaChallenges: Challenge[] = [
  {
    id: "to-java-01",
    themeId: "the-office",
    languageId: "java",
    order: 1,
    title: "Variables & Types",
    themedTitle: "Dunder Mifflin Employee Card",
    narrative:
      "Michael Scott insists that every Dunder Mifflin employee have a proper profile in the system. As the new IT person, you've been tasked with setting up the basic record for Scranton's most beloved (and only) regional manager.",
    prompt:
      "Inside `main`, declare a `String` variable `employeeName` set to `\"Michael Scott\"`, an `int` variable `yearsAtCompany` set to `15`, and a `boolean` variable `isManager` set to `true`. Print each variable on its own line.",
    hint: "Use `String`, `int`, and `boolean` as the variable types. Print each with `System.out.println()`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String employeeName = "Michael Scott";\n        int yearsAtCompany = 15;\n        boolean isManager = true;\n        System.out.println(employeeName);\n        System.out.println(yearsAtCompany);\n        System.out.println(isManager);\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        // Declare employeeName, yearsAtCompany, and isManager\n        String employeeName = ___;\n        int yearsAtCompany = ___;\n        boolean isManager = ___;\n        System.out.println(employeeName);\n        System.out.println(yearsAtCompany);\n        System.out.println(isManager);\n    }\n}`,
    testCases: [
      { input: "", expected: "Michael Scott", description: "Prints the employee name" },
      { input: "", expected: "15", description: "Prints years at company" },
      { input: "", expected: "true", description: "Prints manager status" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "to-java-02",
    themeId: "the-office",
    languageId: "java",
    order: 2,
    title: "Conditionals",
    themedTitle: "Dwight's Threat Level Assessment",
    narrative:
      "Dwight Schrute, Assistant (to the) Regional Manager, takes security seriously. He has devised a threat level system for the office. Write a method to classify any given threat score according to Dwight's manual.",
    prompt:
      "Write a static method `threatLevel(int score)` that returns `\"Severe\"` if score is 80 or above, `\"Elevated\"` if score is 50 or above, `\"Guarded\"` if score is 20 or above, and `\"Low\"` otherwise. Call it from `main` with `90`, `60`, `30`, and `5`.",
    hint: "Check from the highest value downward using `if`, `else if`, `else if`, and `else`.",
    solution: `public class Main {\n    public static String threatLevel(int score) {\n        if (score >= 80) {\n            return "Severe";\n        } else if (score >= 50) {\n            return "Elevated";\n        } else if (score >= 20) {\n            return "Guarded";\n        } else {\n            return "Low";\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(threatLevel(90));  // Severe\n        System.out.println(threatLevel(60));  // Elevated\n        System.out.println(threatLevel(30));  // Guarded\n        System.out.println(threatLevel(5));   // Low\n    }\n}`,
    starterCode: `public class Main {\n    public static String threatLevel(int score) {\n        // Return "Severe" >= 80, "Elevated" >= 50,\n        // "Guarded" >= 20, "Low" otherwise\n        if (score >= 80) {\n            return ___;\n        } else if (score >= 50) {\n            return ___;\n        } else if (score >= 20) {\n            return ___;\n        } else {\n            return ___;\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(threatLevel(90));  // Severe\n        System.out.println(threatLevel(60));  // Elevated\n        System.out.println(threatLevel(30));  // Guarded\n        System.out.println(threatLevel(5));   // Low\n    }\n}`,
    testCases: [
      { input: "90", expected: "Severe", description: "90 is a Severe threat" },
      { input: "60", expected: "Elevated", description: "60 is an Elevated threat" },
      { input: "30", expected: "Guarded", description: "30 is a Guarded threat" },
      { input: "5", expected: "Low", description: "5 is a Low threat" },
    ],
    concept: "Conditionals",
    difficulty: "beginner",
  },
  {
    id: "to-java-03",
    themeId: "the-office",
    languageId: "java",
    order: 3,
    title: "Methods",
    themedTitle: "Paper Sales Commission",
    narrative:
      "Jim Halpert is tallying his monthly paper sales commission. Dunder Mifflin pays a flat commission rate per ream sold. Jim needs a quick method to calculate how much he earns before heading to a prank planning session.",
    prompt:
      "Write a static method `commission(int reams, int ratePerReam)` that returns the total commission as the product of the two parameters. Call it from `main` with `reams = 150` and `ratePerReam = 3`, and print the result.",
    hint: "Multiply `reams` by `ratePerReam` and return the result. The return type is `int`.",
    solution: `public class Main {\n    public static int commission(int reams, int ratePerReam) {\n        return reams * ratePerReam;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(commission(150, 3));  // 450\n    }\n}`,
    starterCode: `public class Main {\n    public static int commission(int reams, int ratePerReam) {\n        // Return reams multiplied by ratePerReam\n        return ___;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(commission(150, 3));  // 450\n    }\n}`,
    testCases: [
      { input: "150, 3", expected: "450", description: "150 reams at 3 per ream is 450" },
    ],
    concept: "Methods & Arithmetic",
    difficulty: "beginner",
  },
  {
    id: "to-java-04",
    themeId: "the-office",
    languageId: "java",
    order: 4,
    title: "Arrays",
    themedTitle: "Beet Farm Harvest Log",
    narrative:
      "Dwight Schrute maintains a harvest log for Schrute Farms. The log tracks the weight (in pounds) of beets harvested each day of the week. There was a heavy frost on Wednesday so Dwight needs to update that day's entry to reflect the reduced haul.",
    prompt:
      "Declare an `int[]` array called `harvest` with values `{120, 95, 140, 88, 110}`. Print the element at index 0. Then replace the element at index 2 with `60`. Print the updated element at index 2.",
    hint: "Access with `harvest[0]`, assign with `harvest[2] = 60;`, then print the updated element.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        int[] harvest = {120, 95, 140, 88, 110};\n        System.out.println(harvest[0]);\n        harvest[2] = 60;\n        System.out.println(harvest[2]);\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int[] harvest = {120, 95, 140, 88, 110};\n        // Print the element at index 0\n        System.out.println(___);\n        // Replace index 2 with 60\n        harvest[2] = ___;\n        System.out.println(harvest[2]);\n    }\n}`,
    testCases: [
      { input: "", expected: "120", description: "Element at index 0 is 120" },
      { input: "", expected: "60", description: "Element at index 2 is updated to 60" },
    ],
    concept: "Arrays",
    difficulty: "beginner",
  },
  {
    id: "to-java-05",
    themeId: "the-office",
    languageId: "java",
    order: 5,
    title: "Loops",
    themedTitle: "Total Reams Sold This Quarter",
    narrative:
      "It is the end of the quarter and Michael needs the total number of reams sold by the Scranton branch. The sales figures for each week are stored in an array. Kevin, despite his best efforts with a spreadsheet, has asked you to write the program instead.",
    prompt:
      "Write a static method `totalReams(int[] weeklySales)` that uses a `for` loop to sum all values in the array and return the total. Call it from `main` with `{340, 275, 410, 390, 320}` and print the result.",
    hint: "Declare `int total = 0;` before the loop. Inside the loop, add each element to `total`. Return `total` after the loop.",
    solution: `public class Main {\n    public static int totalReams(int[] weeklySales) {\n        int total = 0;\n        for (int i = 0; i < weeklySales.length; i++) {\n            total += weeklySales[i];\n        }\n        return total;\n    }\n\n    public static void main(String[] args) {\n        int[] weeklySales = {340, 275, 410, 390, 320};\n        System.out.println(totalReams(weeklySales));  // 1735\n    }\n}`,
    starterCode: `public class Main {\n    public static int totalReams(int[] weeklySales) {\n        int total = 0;\n        for (int i = 0; i < weeklySales.length; i++) {\n            // Add weeklySales[i] to total\n        }\n        return total;\n    }\n\n    public static void main(String[] args) {\n        int[] weeklySales = {340, 275, 410, 390, 320};\n        System.out.println(totalReams(weeklySales));  // 1735\n    }\n}`,
    testCases: [
      { input: "{340, 275, 410, 390, 320}", expected: "1735", description: "Total weekly sales sum to 1735" },
    ],
    concept: "Loops & Summation",
    difficulty: "intermediate",
  },
  {
    id: "to-java-06",
    themeId: "the-office",
    languageId: "java",
    order: 6,
    title: "String Methods",
    themedTitle: "Michael's World's Best Boss Mug",
    narrative:
      "Michael Scott had his 'World's Best Boss' mug custom engraved. The system needs to uppercase the inscription for the trophy shop, check that it includes the word 'boss', and verify the character count fits on the mug.",
    prompt:
      "Inside `main`, declare a `String` variable `inscription` set to `\"world's best boss\"`. Print it in all uppercase using `toUpperCase()`. Print whether it contains `\"boss\"` using `contains()`. Print its length using `length()`.",
    hint: "Call methods on the variable: `inscription.toUpperCase()`, `inscription.contains(\"boss\")`, `inscription.length()`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String inscription = "world's best boss";\n        System.out.println(inscription.toUpperCase());\n        System.out.println(inscription.contains("boss"));\n        System.out.println(inscription.length());\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String inscription = "world's best boss";\n        // Print inscription in uppercase\n        System.out.println(inscription.___);\n        // Print whether it contains "boss"\n        System.out.println(inscription.___);\n        // Print the length\n        System.out.println(inscription.___);\n    }\n}`,
    testCases: [
      { input: "", expected: "WORLD'S BEST BOSS", description: "Inscription in uppercase" },
      { input: "", expected: "true", description: "Inscription contains 'boss'" },
      { input: "", expected: "17", description: "Inscription length is 17 characters" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "to-java-07",
    themeId: "the-office",
    languageId: "java",
    order: 7,
    title: "ArrayList",
    themedTitle: "Party Planning Committee Members",
    narrative:
      "Angela runs the Party Planning Committee with an iron fist. The membership keeps changing — Kevin got added, then removed when he ate the party supplies. Meredith was brought in as a replacement. Angela needs an accurate headcount.",
    prompt:
      "Import `java.util.ArrayList`. Create an `ArrayList<String>` called `committee`. Add `\"Angela\"`, `\"Pam\"`, `\"Kevin\"`, `\"Oscar\"`. Remove `\"Kevin\"`. Add `\"Meredith\"`. Print the size, then print the element at index 1.",
    hint: "Use `list.add()`, `list.remove()`, `list.size()`, and `list.get(index)` for the operations.",
    solution: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> committee = new ArrayList<>();\n        committee.add("Angela");\n        committee.add("Pam");\n        committee.add("Kevin");\n        committee.add("Oscar");\n        committee.remove("Kevin");\n        committee.add("Meredith");\n        System.out.println(committee.size());\n        System.out.println(committee.get(1));\n    }\n}`,
    starterCode: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> committee = new ArrayList<>();\n        committee.add("Angela");\n        committee.add("Pam");\n        committee.add("Kevin");\n        committee.add("Oscar");\n        // Remove "Kevin"\n        committee.remove(___);\n        // Add "Meredith"\n        committee.add(___);\n        System.out.println(committee.size());\n        System.out.println(committee.get(1));\n    }\n}`,
    testCases: [
      { input: "", expected: "4", description: "Committee has 4 members after changes" },
      { input: "", expected: "Pam", description: "Element at index 1 is Pam" },
    ],
    concept: "ArrayList",
    difficulty: "intermediate",
  },
  {
    id: "to-java-08",
    themeId: "the-office",
    languageId: "java",
    order: 8,
    title: "HashMap",
    themedTitle: "Dwight's Desk Ownership Map",
    narrative:
      "Dwight tracks every desk in the Scranton branch and who sits at it. As head of security, he needs an immediate lookup system. He must verify Jim's desk assignment and check whether the annex desk is on record.",
    prompt:
      "Import `java.util.HashMap`. Create a `HashMap<String, String>` called `desks`. Add: `\"Jim\"` → `\"Sales Floor A\"`, `\"Dwight\"` → `\"Assistant Desk\"`, `\"Pam\"` → `\"Reception\"`. Print the desk for `\"Jim\"`. Print whether `\"Annex\"` is a key using `containsKey()`.",
    hint: "Use `map.put(key, value)`, `map.get(key)`, and `map.containsKey(key)`. Note: this map uses String values, not Integer.",
    solution: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, String> desks = new HashMap<>();\n        desks.put("Jim", "Sales Floor A");\n        desks.put("Dwight", "Assistant Desk");\n        desks.put("Pam", "Reception");\n        System.out.println(desks.get("Jim"));\n        System.out.println(desks.containsKey("Annex"));\n    }\n}`,
    starterCode: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, String> desks = new HashMap<>();\n        desks.put("Jim", "Sales Floor A");\n        desks.put("Dwight", "Assistant Desk");\n        desks.put("Pam", "Reception");\n        // Print the desk for "Jim"\n        System.out.println(desks.get(___));\n        // Print whether "Annex" is a key\n        System.out.println(desks.containsKey(___));\n    }\n}`,
    testCases: [
      { input: "", expected: "Sales Floor A", description: "Jim's desk is Sales Floor A" },
      { input: "", expected: "false", description: "Annex is not in the desk map" },
    ],
    concept: "HashMap",
    difficulty: "intermediate",
  },
  {
    id: "to-java-09",
    themeId: "the-office",
    languageId: "java",
    order: 9,
    title: "Multiple Methods",
    themedTitle: "The Dundies Award Calculator",
    narrative:
      "Michael calculates Dundie awards in two phases: first compute the total prestige points from nominations and audience cheers, then assign a Dundie tier. The system must call the first method from inside the second to produce the final award level.",
    prompt:
      "Write two static methods: `prestigePoints(int nominations, int cheers)` that returns `nominations * 15 + cheers * 5`, and `dundieLevel(int nominations, int cheers)` that calls `prestigePoints` and returns `\"Gold Dundie\"` if points are 150 or above, `\"Silver Dundie\"` if 75 or above, and `\"Participation Dundie\"` otherwise. Call `dundieLevel` from `main` with `(8, 6)` and `(2, 3)` and print the results.",
    hint: "Inside `dundieLevel`, call `prestigePoints(nominations, cheers)` and save the result, then use if/else to return the tier.",
    solution: `public class Main {\n    public static int prestigePoints(int nominations, int cheers) {\n        return nominations * 15 + cheers * 5;\n    }\n\n    public static String dundieLevel(int nominations, int cheers) {\n        int points = prestigePoints(nominations, cheers);\n        if (points >= 150) {\n            return "Gold Dundie";\n        } else if (points >= 75) {\n            return "Silver Dundie";\n        } else {\n            return "Participation Dundie";\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(dundieLevel(8, 6));  // Gold Dundie\n        System.out.println(dundieLevel(2, 3));  // Participation Dundie\n    }\n}`,
    starterCode: `public class Main {\n    public static int prestigePoints(int nominations, int cheers) {\n        // Return nominations * 15 + cheers * 5\n        return ___;\n    }\n\n    public static String dundieLevel(int nominations, int cheers) {\n        int points = prestigePoints(nominations, cheers);\n        // Return "Gold Dundie" if >= 150, "Silver Dundie" if >= 75, "Participation Dundie" otherwise\n        if (points >= 150) {\n            return ___;\n        } else if (points >= 75) {\n            return ___;\n        } else {\n            return ___;\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(dundieLevel(8, 6));  // Gold Dundie\n        System.out.println(dundieLevel(2, 3));  // Participation Dundie\n    }\n}`,
    testCases: [
      { input: "8, 6", expected: "Gold Dundie", description: "Points 150 — Gold Dundie" },
      { input: "2, 3", expected: "Participation Dundie", description: "Points 45 — Participation Dundie" },
    ],
    concept: "Multiple Methods",
    difficulty: "advanced",
  },
  {
    id: "to-java-10",
    themeId: "the-office",
    languageId: "java",
    order: 10,
    title: "StringBuilder",
    themedTitle: "Michael's Inspirational Memo",
    narrative:
      "Michael Scott is composing an all-staff memo. He wants to assemble it from several inspirational fragments using StringBuilder — because, as he says, that's how you build something truly great, one piece at a time.",
    prompt:
      "Use a `StringBuilder` to build a memo. Append `\"MEMO | \"`, then `\"From: Michael Scott\"`, then `\" | \"`, then `\"To: Everyone\"`, then `\" | \"`, then `\"Message: You miss 100% of the shots you don't take\"`. Print the result using `toString()`.",
    hint: "Create `StringBuilder sb = new StringBuilder();` then call `sb.append()` for each part. End with `System.out.println(sb.toString())`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder();\n        sb.append("MEMO | ");\n        sb.append("From: Michael Scott");\n        sb.append(" | ");\n        sb.append("To: Everyone");\n        sb.append(" | ");\n        sb.append("Message: You miss 100% of the shots you don't take");\n        System.out.println(sb.toString());\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder();\n        sb.append("MEMO | ");\n        sb.append("From: Michael Scott");\n        sb.append(" | ");\n        sb.append(___);\n        sb.append(" | ");\n        sb.append(___);\n        System.out.println(sb.toString());\n    }\n}`,
    testCases: [
      { input: "", expected: "MEMO | From: Michael Scott | To: Everyone | Message: You miss 100% of the shots you don't take", description: "Full memo string assembled" },
    ],
    concept: "StringBuilder",
    difficulty: "advanced",
  },
];
