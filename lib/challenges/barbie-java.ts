import type { Challenge } from "@/types";

export const barbieJavaChallenges: Challenge[] = [
  {
    id: "ba-java-01",
    themeId: "barbie",
    languageId: "java",
    order: 1,
    title: "Variables & Data Types",
    themedTitle: "The Dream House Registry",
    narrative:
      "Every Dream House in Barbieland must be registered with the Barbieland Department of Perfect Homes. The registry needs the address, room count, and whether the pool is slide-equipped.",
    prompt:
      "Write a `Main` class. Declare `String address = \"Malibu\"`, `int rooms = 12`, and `boolean hasSlide = true`. Print all three.",
    hint: "Use `System.out.println()` for each variable.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String address = "Malibu";\n        int rooms = 12;\n        boolean hasSlide = true;\n        System.out.println(address);\n        System.out.println(rooms);\n        System.out.println(hasSlide);\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String address = ___;\n        int rooms = ___;\n        boolean hasSlide = ___;\n        System.out.println(address);\n        System.out.println(rooms);\n        System.out.println(hasSlide);\n    }\n}`,
    testCases: [
      { input: "", expected: "Malibu\n12\ntrue", description: "Dream House details" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "ba-java-02",
    themeId: "barbie",
    languageId: "java",
    order: 2,
    title: "Conditionals",
    themedTitle: "The Pink Threshold",
    narrative:
      "Not everything in Barbieland can be pink — but the Pink Threshold Committee insists that at least 70% of any outfit must qualify. Write a program to check if the pink percentage is Barbieland-compliant.",
    prompt:
      "Write a `checkPink(int pinkPercent)` method. If `pinkPercent >= 70`, print `\"Barbieland approved!\"`. Otherwise print `\"Add more pink.\"`.\nTest with `checkPink(85)` and `checkPink(45)`.",
    hint: "Use `if/else` with `>=` comparison.",
    solution: `public class Main {\n    static void checkPink(int pinkPercent) {\n        if (pinkPercent >= 70) {\n            System.out.println("Barbieland approved!");\n        } else {\n            System.out.println("Add more pink.");\n        }\n    }\n    public static void main(String[] args) {\n        checkPink(85);\n        checkPink(45);\n    }\n}`,
    starterCode: `public class Main {\n    static void checkPink(int pinkPercent) {\n        if (pinkPercent >= ___) {\n            System.out.println("Barbieland approved!");\n        } else {\n            System.out.println("Add more pink.");\n        }\n    }\n    public static void main(String[] args) {\n        checkPink(85);\n        checkPink(45);\n    }\n}`,
    testCases: [
      { input: "85", expected: "Barbieland approved!", description: "85% pink — approved" },
      { input: "45", expected: "Add more pink.", description: "45% pink — not enough" },
    ],
    concept: "Conditionals",
    difficulty: "beginner",
  },
  {
    id: "ba-java-03",
    themeId: "barbie",
    languageId: "java",
    order: 3,
    title: "Methods & Arithmetic",
    themedTitle: "Barbie's Outfit Counter",
    narrative:
      "Barbie has a different outfit for every 3 hours of the day. The Barbieland Wardrobe Department needs a method to calculate how many outfits are required for any given number of days.",
    prompt:
      "Write a `static int outfitsNeeded(int days)` method that returns `days * 8`. In `main`, print `outfitsNeeded(7)`.",
    hint: "`static int methodName(int param)` — use `return` to give back the result.",
    solution: `public class Main {\n    static int outfitsNeeded(int days) {\n        return days * 8;\n    }\n    public static void main(String[] args) {\n        System.out.println(outfitsNeeded(7));\n    }\n}`,
    starterCode: `public class Main {\n    static int outfitsNeeded(int days) {\n        return ___;\n    }\n    public static void main(String[] args) {\n        System.out.println(outfitsNeeded(7));  // Should print: 56\n    }\n}`,
    testCases: [
      { input: "7", expected: "56", description: "7 days × 8 outfits = 56" },
    ],
    concept: "Methods & Arithmetic",
    difficulty: "beginner",
  },
  {
    id: "ba-java-04",
    themeId: "barbie",
    languageId: "java",
    order: 4,
    title: "Arrays",
    themedTitle: "Barbie's Job Titles",
    narrative:
      "The Barbieland Career Office needs to print the official list of available careers. Use a Java array to store and display each one.",
    prompt:
      "Declare `String[] jobs = {\"Astronaut\", \"Doctor\", \"President\", \"Architect\"}`. Loop through with a for-each and print each job.",
    hint: "For-each: `for (String job : jobs) { System.out.println(job); }`",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String[] jobs = {"Astronaut", "Doctor", "President", "Architect"};\n        for (String job : jobs) {\n            System.out.println(job);\n        }\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String[] jobs = {___};\n        for (String job : jobs) {\n            System.out.println(job);\n        }\n    }\n}`,
    testCases: [
      { input: "", expected: "Astronaut\nDoctor\nPresident\nArchitect", description: "Four Barbie careers" },
    ],
    concept: "Arrays",
    difficulty: "beginner",
  },
  {
    id: "ba-java-05",
    themeId: "barbie",
    languageId: "java",
    order: 5,
    title: "Loops",
    themedTitle: "The Wave",
    narrative:
      "When one Barbie waves, they all wave. It ripples through Barbieland in perfect unison. The synchronization algorithm starts with Barbie #1 and counts up to the last Barbie in the row.",
    prompt:
      "Write a `for` loop that prints `\"Barbie #1 waves!\"` through `\"Barbie #6 waves!\"`.",
    hint: "Use `for (int i = 1; i <= 6; i++)` and concatenate `i` into the message.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 6; i++) {\n            System.out.println("Barbie #" + i + " waves!");\n        }\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= ___; i++) {\n            System.out.println("Barbie #" + i + " waves!");\n        }\n    }\n}`,
    testCases: [
      { input: "", expected: "Barbie #1 waves!\nBarbie #2 waves!\nBarbie #3 waves!\nBarbie #4 waves!\nBarbie #5 waves!\nBarbie #6 waves!", description: "Six Barbies waving" },
    ],
    concept: "Loops",
    difficulty: "beginner",
  },
  {
    id: "ba-java-06",
    themeId: "barbie",
    languageId: "java",
    order: 6,
    title: "String Methods",
    themedTitle: "Barbieland Job Title Formatter",
    narrative:
      "The Barbieland Career Registry requires all job titles to be standardized: uppercased for official signage, verified to contain the word 'BARBIE', and trimmed to the exact character count. Even in Barbieland, paperwork is paperwork.",
    prompt:
      "Declare `String career = \"Barbie the Astronaut\"`. Print `career.toUpperCase()`. Print `career.toUpperCase().contains(\"BARBIE\")`. Print `career.replace(\"Barbie\", \"Weird Barbie\")`. Print `career.length()`.",
    hint: "Use `.toUpperCase()`, `.contains(...)`, `.replace(old, new)`, and `.length()` on the string.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String career = "Barbie the Astronaut";\n        System.out.println(career.toUpperCase());\n        System.out.println(career.toUpperCase().contains("BARBIE"));\n        System.out.println(career.replace("Barbie", "Weird Barbie"));\n        System.out.println(career.length());\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String career = "Barbie the Astronaut";\n        System.out.println(career.___());\n        System.out.println(career.toUpperCase().contains(___));\n        System.out.println(career.replace(___, ___));\n        System.out.println(career.___());\n    }\n}`,
    testCases: [
      { input: "", expected: "BARBIE THE ASTRONAUT", description: "Uppercased career title" },
      { input: "", expected: "true", description: "Uppercase title contains BARBIE" },
      { input: "", expected: "Weird Barbie the Astronaut", description: "Barbie replaced with Weird Barbie" },
      { input: "", expected: "19", description: "Career string length is 19" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "ba-java-07",
    themeId: "barbie",
    languageId: "java",
    order: 7,
    title: "ArrayList",
    themedTitle: "The Barbieland Visitor Log",
    narrative:
      "Weird Barbie keeps track of every Barbie who visits her house seeking answers. The list grows as more Barbies arrive with existential questions, and shrinks when they go back to being perfect. She uses an ArrayList because it flexes.",
    prompt:
      "Import `java.util.ArrayList`. Create `ArrayList<String> visitors = new ArrayList<>()`. Add `\"Stereotypical Barbie\"`, `\"Doctor Barbie\"`, and `\"Lawyer Barbie\"`. Print the size. Add `\"President Barbie\"`. Print `visitors.get(3)`. Remove index 1. Print the size.",
    hint: "Use `.add()`, `.size()`, `.get(index)`, and `.remove(index)` on the ArrayList.",
    solution: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> visitors = new ArrayList<>();\n        visitors.add("Stereotypical Barbie");\n        visitors.add("Doctor Barbie");\n        visitors.add("Lawyer Barbie");\n        System.out.println(visitors.size());\n        visitors.add("President Barbie");\n        System.out.println(visitors.get(3));\n        visitors.remove(1);\n        System.out.println(visitors.size());\n    }\n}`,
    starterCode: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> visitors = new ArrayList<>();\n        visitors.add(___);\n        visitors.add(___);\n        visitors.add(___);\n        System.out.println(visitors.size());\n        visitors.add(___);\n        System.out.println(visitors.get(3));\n        visitors.remove(1);\n        System.out.println(visitors.size());\n    }\n}`,
    testCases: [
      { input: "", expected: "3", description: "Three visitors initially" },
      { input: "", expected: "President Barbie", description: "Index 3 is President Barbie" },
      { input: "", expected: "3", description: "Three visitors after adding one and removing one" },
    ],
    concept: "ArrayList",
    difficulty: "intermediate",
  },
  {
    id: "ba-java-08",
    themeId: "barbie",
    languageId: "java",
    order: 8,
    title: "HashMap",
    themedTitle: "Ken's Mojo Dojo Casa House Inventory",
    narrative:
      "Ken has filled the Mojo Dojo Casa House with horseback riding gear and man-cave furniture. He uses a HashMap to track how many of each item he owns — because Ken is very into organization, when it suits him.",
    prompt:
      "Import `java.util.HashMap`. Create `HashMap<String, Integer> inventory = new HashMap<>()`. Put `\"guitar\"` with `3`, `\"horse poster\"` with `12`, and `\"rollerblades\"` with `2`. Print `inventory.containsKey(\"guitar\")`. Print `inventory.get(\"horse poster\")`.",
    hint: "Use `.put(key, value)` to add items. `.containsKey(...)` checks for a key. `.get(...)` retrieves the value.",
    solution: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> inventory = new HashMap<>();\n        inventory.put("guitar", 3);\n        inventory.put("horse poster", 12);\n        inventory.put("rollerblades", 2);\n        System.out.println(inventory.containsKey("guitar"));\n        System.out.println(inventory.get("horse poster"));\n    }\n}`,
    starterCode: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> inventory = new HashMap<>();\n        inventory.put(___, ___);\n        inventory.put(___, ___);\n        inventory.put(___, ___);\n        System.out.println(inventory.containsKey("guitar"));\n        System.out.println(inventory.get("horse poster"));\n    }\n}`,
    testCases: [
      { input: "", expected: "true", description: "Guitar is in the inventory" },
      { input: "", expected: "12", description: "12 horse posters" },
    ],
    concept: "HashMap",
    difficulty: "intermediate",
  },
  {
    id: "ba-java-09",
    themeId: "barbie",
    languageId: "java",
    order: 9,
    title: "Multiple Methods",
    themedTitle: "The Barbieland Outfit Score",
    narrative:
      "The Barbieland Fashion Council uses a two-step scoring system. First it calculates the base outfit score, then applies a bonus for accessories. One method feeds into the other — because in Barbieland, everything is connected and extremely pink.",
    prompt:
      "Write `baseScore(int pink, int sparkle)` that returns `pink + sparkle`. Write `finalScore(int pink, int sparkle, int accessories)` that calls `baseScore(pink, sparkle)` and adds `accessories * 2`. In `main`, print `finalScore(40, 30, 5)`.",
    hint: "In `finalScore`, call `baseScore(pink, sparkle)` and add `accessories * 2` to the result.",
    solution: `public class Main {\n    public static int baseScore(int pink, int sparkle) {\n        return pink + sparkle;\n    }\n\n    public static int finalScore(int pink, int sparkle, int accessories) {\n        return baseScore(pink, sparkle) + accessories * 2;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(finalScore(40, 30, 5));  // 80\n    }\n}`,
    starterCode: `public class Main {\n    public static int baseScore(int pink, int sparkle) {\n        return pink + sparkle;\n    }\n\n    public static int finalScore(int pink, int sparkle, int accessories) {\n        // Call baseScore and add accessories * 2\n        return ___ + accessories * 2;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(finalScore(40, 30, 5));  // 80\n    }\n}`,
    testCases: [
      { input: "40, 30, 5", expected: "80", description: "baseScore(40,30)=70 + 5*2=10 => 80" },
    ],
    concept: "Multiple Methods",
    difficulty: "advanced",
  },
  {
    id: "ba-java-10",
    themeId: "barbie",
    languageId: "java",
    order: 10,
    title: "StringBuilder",
    themedTitle: "The Barbieland Welcome Announcement",
    narrative:
      "When each Barbie arrives at the Dream House, the PA system announces their career. The announcement is built one line at a time using a StringBuilder — because even in Barbieland, string concatenation in a loop is better than repeated `+` operations.",
    prompt:
      "Create `String[] arrivals = {\"Astronaut Barbie\", \"President Barbie\", \"Doctor Barbie\"}`. Use a `StringBuilder` and a for-each loop to append `\"Welcome, \" + name + \"!\\n\"` for each. Print `sb.toString()`.",
    hint: "Create `StringBuilder sb = new StringBuilder()`. Append `\"Welcome, \" + name + \"!\\n\"` for each name in the array.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String[] arrivals = {"Astronaut Barbie", "President Barbie", "Doctor Barbie"};\n        StringBuilder sb = new StringBuilder();\n        for (String name : arrivals) {\n            sb.append("Welcome, " + name + "!\\n");\n        }\n        System.out.print(sb.toString());\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String[] arrivals = {"Astronaut Barbie", "President Barbie", "Doctor Barbie"};\n        StringBuilder sb = new StringBuilder();\n        for (String name : arrivals) {\n            sb.append(___);\n        }\n        System.out.print(sb.toString());\n    }\n}`,
    testCases: [
      { input: "", expected: "Welcome, Astronaut Barbie!", description: "First arrival announced" },
      { input: "", expected: "Welcome, Doctor Barbie!", description: "Last arrival announced" },
    ],
    concept: "StringBuilder",
    difficulty: "advanced",
  },
];
