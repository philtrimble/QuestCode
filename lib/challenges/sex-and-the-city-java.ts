import type { Challenge } from "@/types";

export const sexAndTheCityJavaChallenges: Challenge[] = [
  {
    id: "sc-java-01",
    themeId: "sex-and-the-city",
    languageId: "java",
    order: 1,
    title: "Variables & Data Types",
    themedTitle: "The Shoe Budget",
    narrative:
      "Charlotte needs a proper accounting of Carrie's shoe situation. Three data points tell the whole story: the brand name, number of pairs, and whether Carrie has acknowledged this is a problem.",
    prompt:
      "Write a `Main` class. Declare `String brand = \"Manolo Blahnik\"`, `int pairs = 100`, and `boolean problemAcknowledged = false`. Print all three.",
    hint: "Use `System.out.println()` for each variable.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String brand = "Manolo Blahnik";\n        int pairs = 100;\n        boolean problemAcknowledged = false;\n        System.out.println(brand);\n        System.out.println(pairs);\n        System.out.println(problemAcknowledged);\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String brand = ___;\n        int pairs = ___;\n        boolean problemAcknowledged = ___;\n        System.out.println(brand);\n        System.out.println(pairs);\n        System.out.println(problemAcknowledged);\n    }\n}`,
    testCases: [
      { input: "", expected: "Manolo Blahnik\n100\nfalse", description: "The shoe situation" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "sc-java-02",
    themeId: "sex-and-the-city",
    languageId: "java",
    order: 2,
    title: "Conditionals",
    themedTitle: "Is He Mr. Big?",
    narrative:
      "Carrie has a type. Miranda has a checklist. Write a Java program that evaluates a potential partner's availability and prints the appropriate response.",
    prompt:
      "Write `evaluateMan(boolean available)`. If `available` is `true`, print `\"He might be the one.\"`; otherwise print `\"It's complicated.\"`.\nTest with `true` and `false`.",
    hint: "Use an `if/else` on a boolean parameter.",
    solution: `public class Main {\n    static void evaluateMan(boolean available) {\n        if (available) {\n            System.out.println("He might be the one.");\n        } else {\n            System.out.println("It's complicated.");\n        }\n    }\n    public static void main(String[] args) {\n        evaluateMan(true);\n        evaluateMan(false);\n    }\n}`,
    starterCode: `public class Main {\n    static void evaluateMan(boolean available) {\n        if (___) {\n            System.out.println("He might be the one.");\n        } else {\n            System.out.println("It's complicated.");\n        }\n    }\n    public static void main(String[] args) {\n        evaluateMan(true);\n        evaluateMan(false);\n    }\n}`,
    testCases: [
      { input: "true", expected: "He might be the one.", description: "Available man — optimism" },
      { input: "false", expected: "It's complicated.", description: "Unavailable — classic Big" },
    ],
    concept: "Conditionals",
    difficulty: "beginner",
  },
  {
    id: "sc-java-03",
    themeId: "sex-and-the-city",
    languageId: "java",
    order: 3,
    title: "Methods & Arithmetic",
    themedTitle: "Column Word Rate",
    narrative:
      "Carrie gets paid per word for her New York Star column. Her editor needs a Java method to calculate her total earnings based on her word count and rate.",
    prompt:
      "Write `static int columnEarnings(int words, int ratePerWord)` that returns `words * ratePerWord`. In `main`, print `columnEarnings(850, 2)`.",
    hint: "`static int methodName(int a, int b) { return a * b; }`",
    solution: `public class Main {\n    static int columnEarnings(int words, int ratePerWord) {\n        return words * ratePerWord;\n    }\n    public static void main(String[] args) {\n        System.out.println(columnEarnings(850, 2));\n    }\n}`,
    starterCode: `public class Main {\n    static int columnEarnings(int words, int ratePerWord) {\n        return ___;\n    }\n    public static void main(String[] args) {\n        System.out.println(columnEarnings(850, 2));  // Should print: 1700\n    }\n}`,
    testCases: [
      { input: "850, 2", expected: "1700", description: "850 words at $2 = $1700" },
    ],
    concept: "Methods & Arithmetic",
    difficulty: "beginner",
  },
  {
    id: "sc-java-04",
    themeId: "sex-and-the-city",
    languageId: "java",
    order: 4,
    title: "Arrays",
    themedTitle: "The Ex-Boyfriend Roster",
    narrative:
      "For research purposes — and her column — Carrie has catalogued her ex-boyfriends alphabetically. Print the full roster so her therapist can see the pattern.",
    prompt:
      "Declare `String[] exes = {\"Aidan\", \"Berger\", \"Big\", \"Aleksandr\"}`. Loop through with for-each and print each name.",
    hint: "For-each: `for (String ex : exes) { System.out.println(ex); }`",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String[] exes = {"Aidan", "Berger", "Big", "Aleksandr"};\n        for (String ex : exes) {\n            System.out.println(ex);\n        }\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String[] exes = {___};\n        for (String ex : exes) {\n            System.out.println(ex);\n        }\n    }\n}`,
    testCases: [
      { input: "", expected: "Aidan\nBerger\nBig\nAleksandr", description: "The full ex-boyfriend list" },
    ],
    concept: "Arrays",
    difficulty: "beginner",
  },
  {
    id: "sc-java-05",
    themeId: "sex-and-the-city",
    languageId: "java",
    order: 5,
    title: "Loops",
    themedTitle: "Cosmos at Dinner",
    narrative:
      "The girls have a standing dinner. The bartender tracks how many Cosmos were ordered each round. Samantha always orders doubles, so the total usually surprises the accountant.",
    prompt:
      "Write a `for` loop that prints `\"Round \" + i + \": Cosmos ordered\"` for rounds 1 through 4.",
    hint: "Use `for (int i = 1; i <= 4; i++)` and concatenate.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 4; i++) {\n            System.out.println("Round " + i + ": Cosmos ordered");\n        }\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= ___; i++) {\n            System.out.println("Round " + i + ": Cosmos ordered");\n        }\n    }\n}`,
    testCases: [
      { input: "", expected: "Round 1: Cosmos ordered\nRound 2: Cosmos ordered\nRound 3: Cosmos ordered\nRound 4: Cosmos ordered", description: "Four rounds of Cosmos" },
    ],
    concept: "Loops",
    difficulty: "beginner",
  },
  {
    id: "sc-java-06",
    themeId: "sex-and-the-city",
    languageId: "java",
    order: 6,
    title: "String Methods",
    themedTitle: "The Column Title Processor",
    narrative:
      "Carrie's editor at the New York Star runs every column title through a standardization pipeline: uppercase for the layout team, a content check for the word 'LOVE', a cleaned version for print, and a character count for the layout budget. Carrie writes the words; the system does the rest.",
    prompt:
      "Declare `String title = \"I couldn't help but wonder about love\"`. Print `title.toUpperCase()`. Print `title.toUpperCase().contains(\"LOVE\")`. Print `title.replace(\"love\", \"shoes\")`. Print `title.length()`.",
    hint: "Use `.toUpperCase()`, `.contains(...)`, `.replace(old, new)`, and `.length()`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String title = "I couldn't help but wonder about love";\n        System.out.println(title.toUpperCase());\n        System.out.println(title.toUpperCase().contains("LOVE"));\n        System.out.println(title.replace("love", "shoes"));\n        System.out.println(title.length());\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String title = "I couldn't help but wonder about love";\n        System.out.println(title.___());\n        System.out.println(title.toUpperCase().contains(___));\n        System.out.println(title.replace(___, ___));\n        System.out.println(title.___());\n    }\n}`,
    testCases: [
      { input: "", expected: "I COULDN'T HELP BUT WONDER ABOUT LOVE", description: "Uppercased column title" },
      { input: "", expected: "true", description: "Title contains LOVE" },
      { input: "", expected: "I couldn't help but wonder about shoes", description: "Love replaced with shoes" },
      { input: "", expected: "37", description: "Title length is 37" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "sc-java-07",
    themeId: "sex-and-the-city",
    languageId: "java",
    order: 7,
    title: "ArrayList",
    themedTitle: "Samantha's Client List",
    narrative:
      "Samantha runs a PR firm and her client list is always in flux. New clients are added, difficult ones are dropped. She manages her roster with precision and absolutely no sentimentality — which is more than can be said for Carrie's relationship choices.",
    prompt:
      "Import `java.util.ArrayList`. Create `ArrayList<String> clients = new ArrayList<>()`. Add `\"Smith Jerrod\"`, `\"Bunny MacDougal\"`, and `\"Richard Wright\"`. Print the size. Add `\"Charlotte York\"`. Print `clients.get(3)`. Remove index 1. Print the size.",
    hint: "Use `.add()`, `.size()`, `.get(index)`, and `.remove(index)` on the ArrayList.",
    solution: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> clients = new ArrayList<>();\n        clients.add("Smith Jerrod");\n        clients.add("Bunny MacDougal");\n        clients.add("Richard Wright");\n        System.out.println(clients.size());\n        clients.add("Charlotte York");\n        System.out.println(clients.get(3));\n        clients.remove(1);\n        System.out.println(clients.size());\n    }\n}`,
    starterCode: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> clients = new ArrayList<>();\n        clients.add(___);\n        clients.add(___);\n        clients.add(___);\n        System.out.println(clients.size());\n        clients.add(___);\n        System.out.println(clients.get(3));\n        clients.remove(1);\n        System.out.println(clients.size());\n    }\n}`,
    testCases: [
      { input: "", expected: "3", description: "Three clients initially" },
      { input: "", expected: "Charlotte York", description: "Index 3 is Charlotte York" },
      { input: "", expected: "3", description: "Three clients after adding one and removing one" },
    ],
    concept: "ArrayList",
    difficulty: "intermediate",
  },
  {
    id: "sc-java-08",
    themeId: "sex-and-the-city",
    languageId: "java",
    order: 8,
    title: "HashMap",
    themedTitle: "Manhattan Hotspot Ratings",
    narrative:
      "The girls rate every restaurant, bar, and brunch spot in Manhattan. Miranda insists on a data structure — a HashMap maps venue names to their ratings. Charlotte rates everything either perfect or a disaster. The map handles both.",
    prompt:
      "Import `java.util.HashMap`. Create `HashMap<String, Integer> ratings = new HashMap<>()`. Put `\"Nobu\"` with `95`, `\"Pastis\"` with `88`, and `\"Balthazar\"` with `91`. Print `ratings.containsKey(\"Pastis\")`. Print `ratings.get(\"Nobu\")`.",
    hint: "Use `.put(key, value)`, `.containsKey(...)`, and `.get(...)` on the HashMap.",
    solution: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> ratings = new HashMap<>();\n        ratings.put("Nobu", 95);\n        ratings.put("Pastis", 88);\n        ratings.put("Balthazar", 91);\n        System.out.println(ratings.containsKey("Pastis"));\n        System.out.println(ratings.get("Nobu"));\n    }\n}`,
    starterCode: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> ratings = new HashMap<>();\n        ratings.put(___, ___);\n        ratings.put(___, ___);\n        ratings.put(___, ___);\n        System.out.println(ratings.containsKey("Pastis"));\n        System.out.println(ratings.get("Nobu"));\n    }\n}`,
    testCases: [
      { input: "", expected: "true", description: "Pastis is in the ratings map" },
      { input: "", expected: "95", description: "Nobu rates 95" },
    ],
    concept: "HashMap",
    difficulty: "intermediate",
  },
  {
    id: "sc-java-09",
    themeId: "sex-and-the-city",
    languageId: "java",
    order: 9,
    title: "Multiple Methods",
    themedTitle: "The Relationship Compatibility Score",
    narrative:
      "Miranda has developed a two-step compatibility algorithm for Carrie's dates — base chemistry plus bonus points for shared interests. One method calculates the raw score, the other applies the bonus. Charlotte thinks it's unromantic. Miranda has data.",
    prompt:
      "Write `chemistryScore(int looks, int humor)` that returns `looks + humor`. Write `compatibilityScore(int looks, int humor, int sharedInterests)` that calls `chemistryScore(looks, humor)` and adds `sharedInterests * 3`. In `main`, print `compatibilityScore(7, 8, 4)`.",
    hint: "In `compatibilityScore`, call `chemistryScore(looks, humor)` and add `sharedInterests * 3`.",
    solution: `public class Main {\n    public static int chemistryScore(int looks, int humor) {\n        return looks + humor;\n    }\n\n    public static int compatibilityScore(int looks, int humor, int sharedInterests) {\n        return chemistryScore(looks, humor) + sharedInterests * 3;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(compatibilityScore(7, 8, 4));  // 27\n    }\n}`,
    starterCode: `public class Main {\n    public static int chemistryScore(int looks, int humor) {\n        return looks + humor;\n    }\n\n    public static int compatibilityScore(int looks, int humor, int sharedInterests) {\n        // Call chemistryScore and add sharedInterests * 3\n        return ___ + sharedInterests * 3;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(compatibilityScore(7, 8, 4));  // 27\n    }\n}`,
    testCases: [
      { input: "7, 8, 4", expected: "27", description: "chemistryScore(7,8)=15 + 4*3=12 => 27" },
    ],
    concept: "Multiple Methods",
    difficulty: "advanced",
  },
  {
    id: "sc-java-10",
    themeId: "sex-and-the-city",
    languageId: "java",
    order: 10,
    title: "StringBuilder",
    themedTitle: "Carrie's Column Draft",
    narrative:
      "Carrie drafts her column line by line before sending it to the editor. Each question she asks is appended to the document in sequence. She uses a StringBuilder because she's tried string concatenation in a loop before and the performance was as bad as her breakup with Big.",
    prompt:
      "Create `String[] questions = {\"Could we have it all?\", \"Was he the one?\", \"And just like that...\"}`. Use a `StringBuilder` and a for-each loop to append each question followed by `\"\\n\"`. Print `sb.toString()`.",
    hint: "Create `StringBuilder sb = new StringBuilder()`. Append each question + `\"\\n\"` in the loop. Print with `System.out.print(sb.toString())`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String[] questions = {"Could we have it all?", "Was he the one?", "And just like that..."};\n        StringBuilder sb = new StringBuilder();\n        for (String q : questions) {\n            sb.append(q + "\\n");\n        }\n        System.out.print(sb.toString());\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String[] questions = {"Could we have it all?", "Was he the one?", "And just like that..."};\n        StringBuilder sb = new StringBuilder();\n        for (String q : questions) {\n            sb.append(___);\n        }\n        System.out.print(sb.toString());\n    }\n}`,
    testCases: [
      { input: "", expected: "Could we have it all?", description: "First column question" },
      { input: "", expected: "And just like that...", description: "Final column line" },
    ],
    concept: "StringBuilder",
    difficulty: "advanced",
  },
];
