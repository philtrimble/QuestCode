import type { Challenge } from "@/types";

export const sopranosJavaChallenges: Challenge[] = [
  {
    id: "sp-java-01",
    themeId: "sopranos",
    languageId: "java",
    order: 1,
    title: "Variables & Data Types",
    themedTitle: "Satriale's Inventory",
    narrative:
      "Satriale's Pork Store is the front — and the hangout. Paulie needs a proper inventory program to track the store's most important items for the weekly order.",
    prompt:
      "Write a `Main` class. Declare `String item = \"capicola\"`, `int stock = 48`, and `double pricePerLb = 12.99`. Print all three.",
    hint: "Use `System.out.println()` for each variable.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String item = "capicola";\n        int stock = 48;\n        double pricePerLb = 12.99;\n        System.out.println(item);\n        System.out.println(stock);\n        System.out.println(pricePerLb);\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String item = ___;\n        int stock = ___;\n        double pricePerLb = ___;\n        System.out.println(item);\n        System.out.println(stock);\n        System.out.println(pricePerLb);\n    }\n}`,
    testCases: [
      { input: "", expected: "capicola\n48\n12.99", description: "Satriale's top item" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "sp-java-02",
    themeId: "sopranos",
    languageId: "java",
    order: 2,
    title: "Conditionals",
    themedTitle: "Witness Protection Check",
    narrative:
      "The FBI is moving witnesses around again. Tony needs a quick check program: if a crew member has been relocated, print a warning. Otherwise, confirm they're still around.",
    prompt:
      "Write `checkStatus(boolean relocated)`. If `true`, print `\"Gone. Don't ask.\"`; else print `\"Still with us.\"`.\nTest with `true` and `false`.",
    hint: "Use an `if/else` on the boolean parameter.",
    solution: `public class Main {\n    static void checkStatus(boolean relocated) {\n        if (relocated) {\n            System.out.println("Gone. Don't ask.");\n        } else {\n            System.out.println("Still with us.");\n        }\n    }\n    public static void main(String[] args) {\n        checkStatus(true);\n        checkStatus(false);\n    }\n}`,
    starterCode: `public class Main {\n    static void checkStatus(boolean relocated) {\n        if (___) {\n            System.out.println("Gone. Don't ask.");\n        } else {\n            System.out.println("Still with us.");\n        }\n    }\n    public static void main(String[] args) {\n        checkStatus(true);\n        checkStatus(false);\n    }\n}`,
    testCases: [
      { input: "true", expected: "Gone. Don't ask.", description: "Relocated — gone" },
      { input: "false", expected: "Still with us.", description: "Not relocated — present" },
    ],
    concept: "Conditionals",
    difficulty: "beginner",
  },
  {
    id: "sp-java-03",
    themeId: "sopranos",
    languageId: "java",
    order: 3,
    title: "Methods & Arithmetic",
    themedTitle: "The Tribute Calculator",
    narrative:
      "Every capo kicks up a percentage of earnings to Tony. Bobby keeps track of the numbers. Write a method so the math is consistent and nobody gets shorted.",
    prompt:
      "Write `static int tribute(int earnings, int percent)` that returns `earnings * percent / 100`. In `main`, print `tribute(50000, 15)`.",
    hint: "`static int methodName(int a, int b) { return a * b / 100; }`",
    solution: `public class Main {\n    static int tribute(int earnings, int percent) {\n        return earnings * percent / 100;\n    }\n    public static void main(String[] args) {\n        System.out.println(tribute(50000, 15));\n    }\n}`,
    starterCode: `public class Main {\n    static int tribute(int earnings, int percent) {\n        return ___;\n    }\n    public static void main(String[] args) {\n        System.out.println(tribute(50000, 15));  // Should print: 7500\n    }\n}`,
    testCases: [
      { input: "50000, 15", expected: "7500", description: "15% of $50,000 = $7,500" },
    ],
    concept: "Methods & Arithmetic",
    difficulty: "beginner",
  },
  {
    id: "sp-java-04",
    themeId: "sopranos",
    languageId: "java",
    order: 4,
    title: "Arrays",
    themedTitle: "The Crew Roster",
    narrative:
      "Tony needs a printed roster of his senior crew for a sit-down with New York. It needs to be clean, formal, and not include anyone who's currently a problem.",
    prompt:
      "Declare `String[] crew = {\"Tony\", \"Paulie\", \"Silvio\", \"Christopher\"}`. Loop through with for-each and print each name.",
    hint: "For-each: `for (String member : crew) { System.out.println(member); }`",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String[] crew = {"Tony", "Paulie", "Silvio", "Christopher"};\n        for (String member : crew) {\n            System.out.println(member);\n        }\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String[] crew = {___};\n        for (String member : crew) {\n            System.out.println(member);\n        }\n    }\n}`,
    testCases: [
      { input: "", expected: "Tony\nPaulie\nSilvio\nChristopher", description: "The senior crew" },
    ],
    concept: "Arrays",
    difficulty: "beginner",
  },
  {
    id: "sp-java-05",
    themeId: "sopranos",
    languageId: "java",
    order: 5,
    title: "Loops",
    themedTitle: "The Therapy Sessions",
    narrative:
      "Tony has been seeing Dr. Melfi every week for years. The insurance company needs a printout of each session on record for this quarter — four sessions, clearly documented.",
    prompt:
      "Write a `for` loop that prints `\"Session #\" + i + \" with Dr. Melfi\"` for sessions 1 through 4.",
    hint: "Use `for (int i = 1; i <= 4; i++)` and concatenate.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 4; i++) {\n            System.out.println("Session #" + i + " with Dr. Melfi");\n        }\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= ___; i++) {\n            System.out.println("Session #" + i + " with Dr. Melfi");\n        }\n    }\n}`,
    testCases: [
      { input: "", expected: "Session #1 with Dr. Melfi\nSession #2 with Dr. Melfi\nSession #3 with Dr. Melfi\nSession #4 with Dr. Melfi", description: "Four therapy sessions" },
    ],
    concept: "Loops",
    difficulty: "beginner",
  },
  {
    id: "sp-java-06",
    themeId: "sopranos",
    languageId: "java",
    order: 6,
    title: "String Methods",
    themedTitle: "The Wire Intercept Cleaner",
    narrative:
      "The FBI has intercepted a transmission. The analyst needs to uppercase it for the official record, verify it mentions 'BADA BING', sanitize it for court, and measure its length. The wire doesn't lie, but the transcription protocol requires precision.",
    prompt:
      "Declare `String intercept = \"meet at the bada bing at nine\"`. Print `intercept.toUpperCase()`. Print `intercept.toUpperCase().contains(\"BADA BING\")`. Print `intercept.replace(\"bada bing\", \"location\")`. Print `intercept.length()`.",
    hint: "Use `.toUpperCase()`, `.contains(...)`, `.replace(old, new)`, and `.length()` — standard String methods.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String intercept = "meet at the bada bing at nine";\n        System.out.println(intercept.toUpperCase());\n        System.out.println(intercept.toUpperCase().contains("BADA BING"));\n        System.out.println(intercept.replace("bada bing", "location"));\n        System.out.println(intercept.length());\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String intercept = "meet at the bada bing at nine";\n        System.out.println(intercept.___());\n        System.out.println(intercept.toUpperCase().contains(___));\n        System.out.println(intercept.replace(___, ___));\n        System.out.println(intercept.___());\n    }\n}`,
    testCases: [
      { input: "", expected: "MEET AT THE BADA BING AT NINE", description: "Uppercased intercept" },
      { input: "", expected: "true", description: "Intercept contains BADA BING" },
      { input: "", expected: "meet at the location at nine", description: "Bada bing replaced with location" },
      { input: "", expected: "29", description: "Intercept length is 29" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "sp-java-07",
    themeId: "sopranos",
    languageId: "java",
    order: 7,
    title: "ArrayList",
    themedTitle: "The Witness List",
    narrative:
      "The prosecution is building a witness list. Names are added as they come forward, and removed when they suddenly decide they can't remember anything. The DA uses an ArrayList because the list changes daily.",
    prompt:
      "Import `java.util.ArrayList`. Create `ArrayList<String> witnesses = new ArrayList<>()`. Add `\"Adriana\"`, `\"Big Pussy\"`, and `\"Jimmy Altieri\"`. Print the size. Add `\"Febby Petrulio\"`. Print `witnesses.get(3)`. Remove index 0. Print the size.",
    hint: "Use `.add()`, `.size()`, `.get(index)`, and `.remove(index)` on the ArrayList.",
    solution: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> witnesses = new ArrayList<>();\n        witnesses.add("Adriana");\n        witnesses.add("Big Pussy");\n        witnesses.add("Jimmy Altieri");\n        System.out.println(witnesses.size());\n        witnesses.add("Febby Petrulio");\n        System.out.println(witnesses.get(3));\n        witnesses.remove(0);\n        System.out.println(witnesses.size());\n    }\n}`,
    starterCode: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> witnesses = new ArrayList<>();\n        witnesses.add(___);\n        witnesses.add(___);\n        witnesses.add(___);\n        System.out.println(witnesses.size());\n        witnesses.add(___);\n        System.out.println(witnesses.get(3));\n        witnesses.remove(0);\n        System.out.println(witnesses.size());\n    }\n}`,
    testCases: [
      { input: "", expected: "3", description: "Three witnesses initially" },
      { input: "", expected: "Febby Petrulio", description: "Index 3 is Febby Petrulio" },
      { input: "", expected: "3", description: "Three witnesses after adding one and removing one" },
    ],
    concept: "ArrayList",
    difficulty: "intermediate",
  },
  {
    id: "sp-java-08",
    themeId: "sopranos",
    languageId: "java",
    order: 8,
    title: "HashMap",
    themedTitle: "Crew Earnings Ledger",
    narrative:
      "Bobby keeps the books. Every capo's weekly earnings are logged in a HashMap so Tony can review the numbers without Paulie arguing about the math. Bobby never argues with the math. That's why Tony trusts him.",
    prompt:
      "Import `java.util.HashMap`. Create `HashMap<String, Integer> ledger = new HashMap<>()`. Put `\"Paulie\"` with `18000`, `\"Christopher\"` with `14500`, and `\"Silvio\"` with `22000`. Print `ledger.containsKey(\"Silvio\")`. Print `ledger.get(\"Paulie\")`.",
    hint: "Use `.put(key, value)`, `.containsKey(...)`, and `.get(...)` on the HashMap.",
    solution: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> ledger = new HashMap<>();\n        ledger.put("Paulie", 18000);\n        ledger.put("Christopher", 14500);\n        ledger.put("Silvio", 22000);\n        System.out.println(ledger.containsKey("Silvio"));\n        System.out.println(ledger.get("Paulie"));\n    }\n}`,
    starterCode: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> ledger = new HashMap<>();\n        ledger.put(___, ___);\n        ledger.put(___, ___);\n        ledger.put(___, ___);\n        System.out.println(ledger.containsKey("Silvio"));\n        System.out.println(ledger.get("Paulie"));\n    }\n}`,
    testCases: [
      { input: "", expected: "true", description: "Silvio is in the ledger" },
      { input: "", expected: "18000", description: "Paulie earned 18000" },
    ],
    concept: "HashMap",
    difficulty: "intermediate",
  },
  {
    id: "sp-java-09",
    themeId: "sopranos",
    languageId: "java",
    order: 9,
    title: "Multiple Methods",
    themedTitle: "The Kickback Chain",
    narrative:
      "Tony's organization operates on a chain of tribute. Street-level earners kick up to capos, capos kick up to Tony. Two methods model this: one calculates what the earner keeps, the other calculates what rises to the top. Dr. Melfi thinks this is a metaphor. It isn't.",
    prompt:
      "Write `earnerKeeps(int total, int pct)` that returns `total * (100 - pct) / 100`. Write `tonyGets(int total, int pct)` that returns `total - earnerKeeps(total, pct)`. In `main`, print `tonyGets(60000, 25)`.",
    hint: "In `tonyGets`, call `earnerKeeps(total, pct)` and subtract it from `total`.",
    solution: `public class Main {\n    public static int earnerKeeps(int total, int pct) {\n        return total * (100 - pct) / 100;\n    }\n\n    public static int tonyGets(int total, int pct) {\n        return total - earnerKeeps(total, pct);\n    }\n\n    public static void main(String[] args) {\n        System.out.println(tonyGets(60000, 25));  // 15000\n    }\n}`,
    starterCode: `public class Main {\n    public static int earnerKeeps(int total, int pct) {\n        return total * (100 - pct) / 100;\n    }\n\n    public static int tonyGets(int total, int pct) {\n        // Return total minus earnerKeeps(total, pct)\n        return total - ___;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(tonyGets(60000, 25));  // 15000\n    }\n}`,
    testCases: [
      { input: "60000, 25", expected: "15000", description: "Tony gets 25% of $60,000 = $15,000" },
    ],
    concept: "Multiple Methods",
    difficulty: "advanced",
  },
  {
    id: "sp-java-10",
    themeId: "sopranos",
    languageId: "java",
    order: 10,
    title: "StringBuilder",
    themedTitle: "The Sit-Down Summary",
    narrative:
      "After every major sit-down, Silvio writes up a summary of who said what. He builds it line by line using a StringBuilder — because Tony doesn't want a wall of text, and Silvio is nothing if not organized when it comes to documentation.",
    prompt:
      "Create `String[] agenda = {\"Territory dispute resolved\", \"Tribute schedule confirmed\", \"No more Esplanade problems\"}`. Use a `StringBuilder` and a for-each loop to append each item followed by `\"\\n\"`. Print `sb.toString()`.",
    hint: "Create `StringBuilder sb = new StringBuilder()`. Append each item + `\"\\n\"`. Print using `System.out.print(sb.toString())`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String[] agenda = {"Territory dispute resolved", "Tribute schedule confirmed", "No more Esplanade problems"};\n        StringBuilder sb = new StringBuilder();\n        for (String item : agenda) {\n            sb.append(item + "\\n");\n        }\n        System.out.print(sb.toString());\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String[] agenda = {"Territory dispute resolved", "Tribute schedule confirmed", "No more Esplanade problems"};\n        StringBuilder sb = new StringBuilder();\n        for (String item : agenda) {\n            sb.append(___);\n        }\n        System.out.print(sb.toString());\n    }\n}`,
    testCases: [
      { input: "", expected: "Territory dispute resolved", description: "First agenda item" },
      { input: "", expected: "No more Esplanade problems", description: "Last agenda item" },
    ],
    concept: "StringBuilder",
    difficulty: "advanced",
  },
];
