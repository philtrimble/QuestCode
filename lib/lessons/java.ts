import type { Lesson } from "@/types";

export const javaLessons: Record<string, Lesson> = {

  // ─── Stranger Things ──────────────────────────────────────────────────────

  "st-java-01": {
    intro: "Hawkins Lab has a classified file on every test subject. In Java, every variable has a declared type — you can't just store anything anywhere. Eleven's file is a typed record, and Java enforces that discipline.",
    concept: "Java is a statically-typed language: every variable must declare its type before you can use it. Common types are `int` (whole numbers), `double` (decimal numbers), `String` (text), and `boolean` (true/false). Each line ends with a semicolon.",
    example: `public class Main {
    public static void main(String[] args) {
        String codename = "Eight";
        int powerLevel = 7;
        boolean containmentActive = true;
        System.out.println(codename);
        System.out.println(powerLevel);
        System.out.println(containmentActive);
    }
}`,
    exampleOutput: "Eight\n7\ntrue",
    notes: "Three variables of three different types are declared and printed. Java's `System.out.println()` prints the value and moves to a new line each time.",
    keyPoints: [
      "Every variable must be declared with a type: `String name = \"value\";`",
      "Common primitive types: `int`, `double`, `boolean`. `String` is a class (capital S).",
      "Statements end with a semicolon `;`.",
      "`System.out.println(value)` prints a value followed by a newline.",
    ],
  },

  "st-java-02": {
    intro: "Dustin's walkie-talkie signal strength determines whether the Party can communicate. Java's `if/else` chains let you route program logic based on conditions — perfect for a multi-tier signal check.",
    concept: "An `if` statement evaluates a boolean condition. If it's `true`, the block runs. You can chain `else if` to test additional conditions, and a final `else` handles anything that doesn't match.",
    example: `public class Main {
    public static void main(String[] args) {
        int signal = 65;

        if (signal >= 80) {
            System.out.println("Clear signal");
        } else if (signal >= 50) {
            System.out.println("Weak signal");
        } else {
            System.out.println("No signal");
        }
    }
}`,
    exampleOutput: "Weak signal",
    notes: "`signal` is 65, which is ≥ 50 but not ≥ 80. The first condition fails, the second passes, and `\"Weak signal\"` is printed. The `else` block is skipped.",
    keyPoints: [
      "`if (condition) { }` runs its block when the condition is `true`.",
      "`else if (condition) { }` is only checked if all prior conditions failed.",
      "`else { }` runs when no other condition matched.",
      "Comparison operators: `>`, `<`, `>=`, `<=`, `==`, `!=`.",
    ],
  },

  "st-java-03": {
    intro: "Hopper needs a reliable formula to calculate how far into the Upside Down a portal reaches based on energy input. Java methods package that formula and make it callable from anywhere.",
    concept: "A method is a named, reusable block of code. In Java you declare its return type, name, and parameters. `static` methods belong to the class itself and can be called without creating an object.",
    example: `public class Main {
    static int reach(int energy) {
        return energy * 3;
    }

    public static void main(String[] args) {
        System.out.println(reach(10));
        System.out.println(reach(25));
    }
}`,
    exampleOutput: "30\n75",
    notes: "`reach` is declared as `static int` — it returns an `int`. Two calls with different arguments each produce a different result using the same formula.",
    keyPoints: [
      "Method signature: `static returnType name(paramType param) { ... }`.",
      "`return` exits the method and sends the result back to the caller.",
      "Use `void` as the return type when the method doesn't return a value.",
      "`static` means you can call the method without instantiating the class.",
    ],
  },

  "st-java-04": {
    intro: "The Party has a fixed set of members and their walkie-talkie channels. Java arrays store a fixed-size, typed collection — once created, the size doesn't change, but the values can be updated.",
    concept: "A Java array stores a fixed number of values of the same type. You declare it with `type[]`, initialise it with `{v1, v2, ...}`, access items by index (starting at 0), and check size with `.length`.",
    example: `public class Main {
    public static void main(String[] args) {
        String[] members = {"Mike", "Dustin", "Lucas", "Max"};
        System.out.println(members[0]);
        System.out.println(members.length);
    }
}`,
    exampleOutput: "Mike\n4",
    notes: "`members[0]` retrieves the first element `\"Mike\"`. `.length` is a property of the array, not a method — no parentheses.",
    keyPoints: [
      "Array declaration: `String[] name = {\"a\", \"b\"};`",
      "Indexes start at 0 — the last valid index is `length - 1`.",
      "`.length` is a field (not a method) — no parentheses.",
      "Arrays in Java are fixed-size; you can't push or pop like in JavaScript.",
    ],
  },

  "st-java-05": {
    intro: "Demogorgon sightings are coming in fast. The team needs a running count of how many have been reported across Hawkins — a loop that steps through each entry and tallies the total.",
    concept: "A `for` loop repeats a block of code a set number of times. An enhanced `for-each` loop (`for (Type item : array)`) iterates over every element in an array without managing an index manually.",
    example: `public class Main {
    public static void main(String[] args) {
        int[] sightings = {2, 5, 1, 4, 3};
        int total = 0;
        for (int s : sightings) {
            total += s;
        }
        System.out.println(total);
    }
}`,
    exampleOutput: "15",
    notes: "The enhanced for-each loop assigns each element to `s` in turn. `total += s` adds it to the running sum. After the loop, `total` is `2+5+1+4+3 = 15`.",
    keyPoints: [
      "Enhanced for: `for (Type item : array)` iterates every element without an index.",
      "Accumulator pattern: initialise before the loop, update inside, use after.",
      "`+=` is shorthand for `total = total + s`.",
      "For index-based access use: `for (int i = 0; i < array.length; i++)`.",
    ],
  },

  // ─── Severance ────────────────────────────────────────────────────────────

  "sv-java-01": {
    intro: "Every innie on the Severed Floor has a badge. In Java, the badge is a typed record — the name is a `String`, the employee number is an `int`, and the access level is a `boolean`.",
    concept: "Java requires you to declare the type of every variable before using it. This catches type mismatches at compile time — you can't accidentally put a number where a name is expected.",
    example: `public class Main {
    public static void main(String[] args) {
        String name = "Helly R.";
        int employeeNumber = 1024;
        boolean clearanceGranted = false;
        System.out.println(name);
        System.out.println(employeeNumber);
        System.out.println(clearanceGranted);
    }
}`,
    exampleOutput: "Helly R.\n1024\nfalse",
    notes: "Three variables, three types, three print statements. Java's strict typing means the compiler will refuse to compile if you try to assign the wrong type.",
    keyPoints: [
      "Declare variables with their type: `String name = \"value\";`",
      "`String` holds text; `int` holds whole numbers; `boolean` holds `true` or `false`.",
      "Every statement ends with a semicolon.",
      "`System.out.println()` prints a value and advances to the next line.",
    ],
  },

  "sv-java-02": {
    intro: "MDR numbers are classified into bins: low, medium, or high. Java's `if/else if/else` chain is how you route a value through multiple thresholds and respond accordingly.",
    concept: "Conditionals in Java test boolean expressions. `if` checks the first condition; each subsequent `else if` is only tested if all prior conditions were false; `else` is the fallback.",
    example: `public class Main {
    public static void main(String[] args) {
        int value = 72;

        if (value >= 75) {
            System.out.println("High bin");
        } else if (value >= 40) {
            System.out.println("Medium bin");
        } else {
            System.out.println("Low bin");
        }
    }
}`,
    exampleOutput: "Medium bin",
    notes: "72 is not ≥ 75, but it is ≥ 40, so the `else if` block runs and `\"Medium bin\"` is printed.",
    keyPoints: [
      "Only the first matching branch runs — the rest are skipped.",
      "`else if` is checked only when all conditions above it were false.",
      "Curly braces `{}` wrap each branch's body.",
      "Java evaluates conditions top-to-bottom; order matters.",
    ],
  },

  "sv-java-03": {
    intro: "Lumon tracks compliance scores for every employee, and the quarterly bonus calculation follows a strict formula. A static method encapsulates that formula and makes it available everywhere in the class.",
    concept: "Static methods in Java belong to the class, not a specific instance. They take typed parameters, perform a calculation, and return a typed value. You call them by name from `main`.",
    example: `public class Main {
    static int bonusPoints(int score, int multiplier) {
        return score * multiplier;
    }

    public static void main(String[] args) {
        System.out.println(bonusPoints(85, 2));
        System.out.println(bonusPoints(40, 2));
    }
}`,
    exampleOutput: "170\n80",
    notes: "`bonusPoints` declares two `int` parameters and returns their product. Calling it twice with different `score` values gives different results from the same formula.",
    keyPoints: [
      "Method declaration: `static returnType name(type param, ...) { return ...; }`",
      "Parameters are typed — passing the wrong type is a compile error.",
      "`return` exits the method immediately with the given value.",
      "Call a static method by name: `bonusPoints(85, 2)` — no object needed.",
    ],
  },

  "sv-java-04": {
    intro: "MDR workers sort numbers into physical trays. In Java, a fixed-size array is the natural model — declare the size, fill the slots, and retrieve values by index.",
    concept: "Java arrays are fixed-size, typed collections. You can declare them with an initialiser list or specify the size and fill slots manually. Access any element with its zero-based index.",
    example: `public class Main {
    public static void main(String[] args) {
        int[] tray = {14, 87, 33, 56, 9};
        System.out.println(tray[1]);
        System.out.println(tray.length);
    }
}`,
    exampleOutput: "87\n5",
    notes: "`tray[1]` retrieves the element at index 1 (the second element), which is 87. `.length` is 5 because there are five elements in the array.",
    keyPoints: [
      "Array literal: `int[] name = {v1, v2, ...};`",
      "Indexes start at 0 — `tray[0]` is the first element.",
      "`.length` is a field — no parentheses.",
      "Accessing an out-of-bounds index throws `ArrayIndexOutOfBoundsException` at runtime.",
    ],
  },

  "sv-java-05": {
    intro: "The refinery wants the sum of all approved macrodata numbers. A loop steps through each value and accumulates a running total — a foundational pattern in any Java program that processes a list.",
    concept: "A `for-each` loop in Java iterates over every element in an array without requiring an index variable. Combine it with an accumulator variable to sum, count, or otherwise aggregate a list of values.",
    example: `public class Main {
    public static void main(String[] args) {
        int[] refined = {10, 30, 20, 40};
        int sum = 0;
        for (int n : refined) {
            sum += n;
        }
        System.out.println(sum);
    }
}`,
    exampleOutput: "100",
    notes: "`sum` starts at 0. Each pass through the loop adds the current element `n` to `sum`. After all four elements, `sum` is `100`.",
    keyPoints: [
      "Enhanced for syntax: `for (int n : array)` — reads as \"for each int n in array\".",
      "Declare the accumulator outside the loop so it persists after the loop ends.",
      "`sum += n` is shorthand for `sum = sum + n`.",
      "The loop runs exactly `array.length` times.",
    ],
  },

  // ─── Breaking Bad ─────────────────────────────────────────────────────────

  "bb-java-01": {
    intro: "Walter White's lab notebook is meticulous — every batch entry has a product name, purity rating, and batch size, each stored as a specific type. Java's type system enforces that discipline at compile time.",
    concept: "In Java, every variable is declared with an explicit type. `String` holds text, `int` holds integers, and `double` holds decimal numbers. Mixing them up is a compile error — Java catches mistakes before the program runs.",
    example: `public class Main {
    public static void main(String[] args) {
        String product = "Blue Sky";
        double purity = 99.1;
        int batchSize = 500;
        System.out.println(product);
        System.out.println(purity);
        System.out.println(batchSize);
    }
}`,
    exampleOutput: "Blue Sky\n99.1\n500",
    notes: "`product` is a `String`, `purity` is a `double` (decimal), and `batchSize` is an `int`. Each is printed on its own line with `System.out.println`.",
    keyPoints: [
      "`String` for text, `int` for whole numbers, `double` for decimals.",
      "Type is declared once and can't change: `int batchSize = 500;`",
      "Statements end with `;`.",
      "`System.out.println()` outputs and advances to the next line.",
    ],
  },

  "bb-java-02": {
    intro: "Walt grades every batch on a strict scale: 99%+ is premium, 90%+ is standard, anything below is reject. Java's if/else chain maps those thresholds to a result label.",
    concept: "Java conditionals use `if`, `else if`, and `else` blocks. Only the first matching condition runs. Comparison operators (`>=`, `<`, `==`) build the boolean expressions that decide which branch executes.",
    example: `public class Main {
    public static void main(String[] args) {
        double purity = 94.5;

        if (purity >= 99) {
            System.out.println("Premium");
        } else if (purity >= 90) {
            System.out.println("Standard");
        } else {
            System.out.println("Reject");
        }
    }
}`,
    exampleOutput: "Standard",
    notes: "94.5 fails the `>= 99` check but passes `>= 90`, so `\"Standard\"` is printed. Java evaluates conditions top to bottom and stops at the first match.",
    keyPoints: [
      "Conditions are evaluated in order; only one block runs.",
      "`else if` is only reached if all above conditions were false.",
      "`>=` means 'greater than or equal to'.",
      "Curly braces `{}` define the body of each branch.",
    ],
  },

  "bb-java-03": {
    intro: "Jesse needs a quick calculation for each cook — how many grams does a batch of given volume yield? A static method takes the volume in and returns the yield out.",
    concept: "Methods in Java have a declared return type, a name, and typed parameters. `static` lets you call the method from `main` without creating an object. `return` sends the result back to the call site.",
    example: `public class Main {
    static int batchYield(int volume) {
        return volume * 4;
    }

    public static void main(String[] args) {
        System.out.println(batchYield(50));
        System.out.println(batchYield(100));
    }
}`,
    exampleOutput: "200\n400",
    notes: "The method `batchYield` takes one `int` and returns `volume * 4`. Each call uses a different argument and produces a different result.",
    keyPoints: [
      "Signature format: `static returnType methodName(paramType param)`.",
      "The return type must match what you actually return.",
      "Call the method from `main` by name with the argument in parentheses.",
      "A method can be called many times — that's the whole point of defining one.",
    ],
  },

  "bb-java-04": {
    intro: "Saul has a list of Albuquerque drop points. Java's arrays let him store all the locations in a single variable, access any one by index, and check the total count instantly.",
    concept: "A Java array holds a fixed number of same-typed values. Initialise it with a literal list `{v1, v2, ...}`. Access individual elements with `[index]` (zero-based). Get the count with `.length`.",
    example: `public class Main {
    public static void main(String[] args) {
        String[] dropPoints = {"Octopus", "Wendy's", "Los Pollos"};
        System.out.println(dropPoints[2]);
        System.out.println(dropPoints.length);
    }
}`,
    exampleOutput: "Los Pollos\n3",
    notes: "`dropPoints[2]` is the third element (index 2). `.length` is 3. The array has three elements at indexes 0, 1, and 2.",
    keyPoints: [
      "Array literals: `String[] name = {\"a\", \"b\", \"c\"};`",
      "Zero-indexed: first element is `[0]`, last is `[length - 1]`.",
      "`.length` is a field — no `()` needed.",
      "Accessing a non-existent index throws `ArrayIndexOutOfBoundsException`.",
    ],
  },

  "bb-java-05": {
    intro: "Walt wants to know the peak purity achieved across a batch run. A loop scans every recorded purity value and tracks the highest one — a classic maximum-finding pattern.",
    concept: "Finding the maximum in an array is a common loop pattern: start by assuming the first element is the maximum, then compare each remaining element and update your tracker if a larger value is found.",
    example: `public class Main {
    public static void main(String[] args) {
        int[] purities = {91, 97, 88, 99, 94};
        int max = purities[0];
        for (int p : purities) {
            if (p > max) {
                max = p;
            }
        }
        System.out.println(max);
    }
}`,
    exampleOutput: "99",
    notes: "`max` starts at 91 (the first element). Each loop iteration compares the current value to `max` and updates it when a larger value is found. After the full loop, `max` is 99.",
    keyPoints: [
      "Initialise `max` to the first element before the loop, not to 0.",
      "Update `max` only when you find a strictly larger value: `if (p > max)`.",
      "After the loop, `max` holds the largest value seen.",
      "The same pattern works for finding the minimum — just flip `>` to `<`.",
    ],
  },

  // ─── The Office ───────────────────────────────────────────────────────────

  "to-java-01": {
    intro: "The Dunder Mifflin employee database stores each person's name, years of service, and active status. Java enforces that each field has the right type — no one can accidentally store a name where a number belongs.",
    concept: "Java variables are statically typed: you declare the type once and the compiler enforces it throughout. `String` for text, `int` for whole numbers, `double` for decimals, `boolean` for true/false.",
    example: `public class Main {
    public static void main(String[] args) {
        String employeeName = "Jim Halpert";
        int yearsService = 9;
        boolean isActive = true;
        System.out.println(employeeName);
        System.out.println(yearsService);
        System.out.println(isActive);
    }
}`,
    exampleOutput: "Jim Halpert\n9\ntrue",
    notes: "Three typed variables, three print statements. Each `System.out.println` call prints its argument followed by a newline.",
    keyPoints: [
      "Declare type before the variable name: `String name = \"Jim\";`",
      "`String` is capitalised — it's a class, not a primitive.",
      "Semicolons end every statement in Java.",
      "`System.out.println()` prints to the terminal.",
    ],
  },

  "to-java-02": {
    intro: "Dwight's quarterly sales report categorises reps by performance tier. Java's `if/else if/else` chain tests a score against multiple thresholds and outputs the correct tier label.",
    concept: "Java's conditional chain tests conditions in order. Only the first condition that evaluates to `true` will execute its block. All subsequent conditions and their blocks are skipped.",
    example: `public class Main {
    public static void main(String[] args) {
        int salesScore = 78;

        if (salesScore >= 90) {
            System.out.println("Top Performer");
        } else if (salesScore >= 70) {
            System.out.println("Solid Performer");
        } else {
            System.out.println("Needs Improvement");
        }
    }
}`,
    exampleOutput: "Solid Performer",
    notes: "78 doesn't satisfy `>= 90` but does satisfy `>= 70`. The `else if` block runs, printing `\"Solid Performer\"`.",
    keyPoints: [
      "Conditions are checked top-to-bottom; the first `true` wins.",
      "Only one branch executes — even if multiple conditions would be true.",
      "The `else` block is optional and runs only when no other condition matched.",
      "Combine conditions with `&&` (and) or `||` (or).",
    ],
  },

  "to-java-03": {
    intro: "The Dunder Mifflin commission calculator multiplies units sold by the per-unit rate. Wrapping it in a method means every salesperson's commission is computed consistently, no matter who runs the report.",
    concept: "Methods in Java are declared with a return type, name, and parameter list. The body contains the logic, and `return` sends the result back. Static methods can be called directly from `main`.",
    example: `public class Main {
    static double commission(int units, double rate) {
        return units * rate;
    }

    public static void main(String[] args) {
        System.out.println(commission(50, 4.50));
        System.out.println(commission(120, 4.50));
    }
}`,
    exampleOutput: "225.0\n540.0",
    notes: "`commission` takes an `int` and a `double` and returns a `double`. Multiplying an `int` by a `double` in Java produces a `double` result.",
    keyPoints: [
      "Mixed arithmetic: `int * double` produces a `double`.",
      "The return type in the signature must match what you actually return.",
      "Parameters can be of different types.",
      "Call the method as many times as needed with different arguments.",
    ],
  },

  "to-java-04": {
    intro: "The Party Planning Committee has exactly five confirmed members this quarter. A Java array of fixed size stores all their names, ready to be accessed by index for any report.",
    concept: "Java arrays hold a fixed number of same-typed values. Create one with an initialiser list, then access elements by their zero-based index. The `.length` field tells you how many elements it holds.",
    example: `public class Main {
    public static void main(String[] args) {
        String[] committee = {"Phyllis", "Angela", "Oscar", "Pam", "Meredith"};
        System.out.println(committee[0]);
        System.out.println(committee.length);
    }
}`,
    exampleOutput: "Phyllis\n5",
    notes: "`committee[0]` is the first element. `.length` is 5. Indexes run from 0 to `length - 1`.",
    keyPoints: [
      "Array syntax: `String[] name = {\"a\", \"b\", ...};`",
      "Zero-indexed: `name[0]` is the first element.",
      "`.length` is a field — unlike `String.length()` which is a method.",
      "The size is fixed at creation — you can't resize a Java array.",
    ],
  },

  "to-java-05": {
    intro: "Michael wants to know the total number of complaint forms filed this quarter. A loop walks through each month's count and accumulates the grand total — a pattern Java programmers use constantly.",
    concept: "The accumulator loop pattern: declare a sum variable outside the loop, iterate over the array with a `for-each`, and add each element to the sum inside the loop body.",
    example: `public class Main {
    public static void main(String[] args) {
        int[] complaints = {5, 3, 8, 2, 4};
        int total = 0;
        for (int c : complaints) {
            total += c;
        }
        System.out.println(total);
    }
}`,
    exampleOutput: "22",
    notes: "`total` accumulates across 5 iterations. After the loop `total = 5+3+8+2+4 = 22`. The for-each loop handles the iteration; the body handles the accumulation.",
    keyPoints: [
      "Declare the accumulator before the loop so it's accessible after.",
      "`for (int c : complaints)` visits every element in order.",
      "`total += c` adds c to total on each pass.",
      "Print `total` after the loop, not inside it.",
    ],
  },

  // ─── Game of Thrones ──────────────────────────────────────────────────────

  "got-java-01": {
    intro: "The Citadel archives every Maester's record: their name, how many links they've earned, and whether they've taken their vows. Java's type system maps these attributes to precise variable types.",
    concept: "Java is a statically-typed language — you declare the type of every variable at the point you create it. The compiler rejects any attempt to use a variable as the wrong type, preventing entire classes of bugs.",
    example: `public class Main {
    public static void main(String[] args) {
        String maester = "Aemon";
        int links = 18;
        boolean vowsTaken = true;
        System.out.println(maester);
        System.out.println(links);
        System.out.println(vowsTaken);
    }
}`,
    exampleOutput: "Aemon\n18\ntrue",
    notes: "Three different types: `String`, `int`, and `boolean`. Each `System.out.println` prints one value per line.",
    keyPoints: [
      "Declare with type: `String name = \"value\";`",
      "`int` for whole numbers, `double` for decimals, `boolean` for true/false.",
      "`String` is a class (capital S), not a primitive.",
      "Every statement ends with `;`.",
    ],
  },

  "got-java-02": {
    intro: "The ravens carry messages with different urgency ratings. Java's if/else chain classifies each message based on its priority value and routes it to the right response.",
    concept: "A Java `if/else if/else` chain evaluates boolean conditions in order, executes only the first matching block, and skips the rest. It's how Java implements branching decision logic.",
    example: `public class Main {
    public static void main(String[] args) {
        int priority = 2;

        if (priority == 1) {
            System.out.println("Urgent — King's landing");
        } else if (priority == 2) {
            System.out.println("Standard — Castle Black");
        } else {
            System.out.println("Routine dispatch");
        }
    }
}`,
    exampleOutput: "Standard — Castle Black",
    notes: "Priority is 2, so the `else if (priority == 2)` block runs. `==` checks equality for primitive types like `int`.",
    keyPoints: [
      "Use `==` to compare primitive values like `int`.",
      "Use `.equals()` to compare `String` objects: `str.equals(\"value\")`.",
      "Only one branch runs — the first where the condition is `true`.",
      "`else` is the catch-all fallback.",
    ],
  },

  "got-java-03": {
    intro: "The dragonglass forger needs to calculate weapon strength based on shard weight. A static method takes the weight as input, applies the formula, and returns the result — ready for the armoury log.",
    concept: "Static methods in Java let you define reusable logic with typed parameters and a guaranteed return type. The compiler checks that your `return` expression matches the declared type.",
    example: `public class Main {
    static int weaponStrength(int weight) {
        return weight * 6;
    }

    public static void main(String[] args) {
        System.out.println(weaponStrength(8));
        System.out.println(weaponStrength(15));
    }
}`,
    exampleOutput: "48\n90",
    notes: "`weaponStrength(8)` returns `8 * 6 = 48`. The method is called twice — the formula runs fresh each time with the given argument.",
    keyPoints: [
      "Declare the return type before the method name: `static int methodName(...)`.",
      "If the method says it returns `int`, the `return` expression must be an `int`.",
      "`void` is the return type for methods that don't return anything.",
      "Methods can call other methods — including `System.out.println`.",
    ],
  },

  "got-java-04": {
    intro: "The Night's Watch roster has exactly seven brothers at the Wall. A fixed-size Java array stores all their names — Jon Snow can access any entry by index for the morning report.",
    concept: "Java arrays store a set number of same-typed values. Define them with an initialiser list or with `new Type[size]`. Access any element instantly with a zero-based index.",
    example: `public class Main {
    public static void main(String[] args) {
        String[] brothers = {"Jon", "Sam", "Grenn", "Pyp", "Edd"};
        System.out.println(brothers[1]);
        System.out.println(brothers.length);
    }
}`,
    exampleOutput: "Sam\n5",
    notes: "`brothers[1]` is the second element, `\"Sam\"`. The array has 5 elements, so `.length` is 5.",
    keyPoints: [
      "Array literal: `String[] name = {\"a\", \"b\", ...};`",
      "Zero-indexed: first element is index 0.",
      "`.length` gives the element count — always one more than the last valid index.",
      "Java arrays can't grow — use `ArrayList` when you need a resizable list.",
    ],
  },

  "got-java-05": {
    intro: "The Lord Commander needs to know how many White Walkers were spotted across all watch points. A loop accumulates the total — a vital count before the battle plan is drawn.",
    concept: "Loops in Java process collections element by element. The enhanced for-each loop is the cleanest way to iterate over an array. Paired with an accumulator, it can sum, count, or analyse an entire dataset.",
    example: `public class Main {
    public static void main(String[] args) {
        int[] sightings = {3, 7, 2, 5, 1};
        int total = 0;
        for (int s : sightings) {
            total += s;
        }
        System.out.println(total);
    }
}`,
    exampleOutput: "18",
    notes: "`total` accumulates `3+7+2+5+1 = 18` across five iterations. The for-each assigns each element to `s` in turn.",
    keyPoints: [
      "Enhanced for: `for (int s : array)` reads as \"for each int s in array\".",
      "Initialise the accumulator to 0 before the loop.",
      "`total += s` updates the sum on each iteration.",
      "Read the accumulated result after the loop completes.",
    ],
  },

  // ─── The Matrix ───────────────────────────────────────────────────────────

  "mx-java-01": {
    intro: "Every agent in the Matrix has a designation, a threat rating, and an override flag. Java's type system models this exactly — no flexibility, no ambiguity, just precise typed variables.",
    concept: "Java's static typing means every variable's type is locked at declaration time. This makes code predictable: a `double` variable will always hold a decimal number, never a string or boolean.",
    example: `public class Main {
    public static void main(String[] args) {
        String designation = "Smith";
        int threatRating = 10;
        boolean overrideActive = false;
        System.out.println(designation);
        System.out.println(threatRating);
        System.out.println(overrideActive);
    }
}`,
    exampleOutput: "Smith\n10\nfalse",
    notes: "Mixing types is a compile error in Java — you can't assign `10` to a `String` variable. The types here are `String`, `int`, and `boolean`.",
    keyPoints: [
      "Declare type first: `int rating = 10;`",
      "Assigning the wrong type is a compile-time error.",
      "`boolean` holds exactly `true` or `false` — nothing else.",
      "`System.out.println()` converts any primitive to a string before printing.",
    ],
  },

  "mx-java-02": {
    intro: "The simulation tracks connection quality for every hardline jack in the city. Java's conditionals let you classify a connection speed as optimal, degraded, or lost based on its numeric value.",
    concept: "Java's `if/else if/else` chain provides multi-way branching. Each condition is a boolean expression evaluated in sequence; only the first `true` condition runs its block.",
    example: `public class Main {
    public static void main(String[] args) {
        int connectionSpeed = 45;

        if (connectionSpeed >= 80) {
            System.out.println("Optimal connection");
        } else if (connectionSpeed >= 30) {
            System.out.println("Degraded connection");
        } else {
            System.out.println("Connection lost");
        }
    }
}`,
    exampleOutput: "Degraded connection",
    notes: "45 fails `>= 80` but passes `>= 30`. The second branch prints `\"Degraded connection\"`.",
    keyPoints: [
      "Conditions are tested in the order they appear.",
      "Only the first matching branch executes.",
      "`else` handles everything that didn't match above.",
      "No `switch` is needed here — `if/else if` is clearer for range comparisons.",
    ],
  },

  "mx-java-03": {
    intro: "Neo's dodge probability scales with his training level. A static method takes the level as input and returns the calculated dodge chance — a reusable formula that Morpheus can call any time.",
    concept: "Java methods are self-contained units of logic. The method signature declares what goes in (parameter types) and what comes out (return type). The compiler enforces both.",
    example: `public class Main {
    static int dodgeChance(int trainingLevel) {
        return trainingLevel * 9;
    }

    public static void main(String[] args) {
        System.out.println(dodgeChance(8));
        System.out.println(dodgeChance(11));
    }
}`,
    exampleOutput: "72\n99",
    notes: "`dodgeChance(8)` computes `8 * 9 = 72`; `dodgeChance(11)` computes `99`. Same method, different arguments, different results.",
    keyPoints: [
      "Method signature: `static returnType name(paramType param)`.",
      "The return type tells the compiler — and callers — what type to expect back.",
      "You can call a method as many times as you like.",
      "Methods can be called inside `System.out.println()`.",
    ],
  },

  "mx-java-04": {
    intro: "The Nebuchadnezzar keeps a crew manifest. In Java, an array of `String` values stores the names in order — Tank can print any crew member by their position number.",
    concept: "Arrays in Java are fixed-size, typed collections. Once created, their size cannot change. Access any element in constant time using its zero-based index.",
    example: `public class Main {
    public static void main(String[] args) {
        String[] crew = {"Morpheus", "Trinity", "Tank", "Dozer", "Neo"};
        System.out.println(crew[4]);
        System.out.println(crew.length);
    }
}`,
    exampleOutput: "Neo\n5",
    notes: "`crew[4]` is the fifth element (index 4). `.length` is 5 for a five-element array.",
    keyPoints: [
      "Array indices are zero-based: `crew[0]` is `\"Morpheus\"`.",
      "The last valid index is always `array.length - 1`.",
      "`.length` is a field — no parentheses unlike `String.length()`.",
      "Arrays can store any type: `int[]`, `String[]`, `double[]`.",
    ],
  },

  "mx-java-05": {
    intro: "Tank needs to measure the total anomaly load across all hardline nodes. A loop accumulates each node's reading, delivering a single total that Morpheus can use for the breach calculation.",
    concept: "The accumulator loop is one of the most-used patterns in Java. Start with a sum of zero, iterate over the array with a for-each, and add each value to the sum inside the loop body.",
    example: `public class Main {
    public static void main(String[] args) {
        int[] anomalyReadings = {12, 25, 8, 31, 14};
        int total = 0;
        for (int r : anomalyReadings) {
            total += r;
        }
        System.out.println(total);
    }
}`,
    exampleOutput: "90",
    notes: "Five readings sum to `12+25+8+31+14 = 90`. The loop runs five times; `total` grows by the current reading on each pass.",
    keyPoints: [
      "For-each: `for (int r : array)` — concise and readable.",
      "Declare the accumulator as `0` before the loop.",
      "`total += r` is `total = total + r`.",
      "Use a standard `for` loop when you need the index.",
    ],
  },

  // ─── Rick and Morty ───────────────────────────────────────────────────────

  "rm-java-01": {
    intro: "Rick keeps detailed records on every dimension he visits: a dimension ID string, a stability rating as a decimal, and a boolean flag for whether he's been banned. Java's type system maps each field exactly.",
    concept: "Java's strict typing means you declare each variable's type upfront. The compiler rejects type mismatches before the program even runs — fewer runtime surprises, more predictable code.",
    example: `public class Main {
    public static void main(String[] args) {
        String dimensionId = "C-137";
        double stability = 8.5;
        boolean banned = false;
        System.out.println(dimensionId);
        System.out.println(stability);
        System.out.println(banned);
    }
}`,
    exampleOutput: "C-137\n8.5\nfalse",
    notes: "A `String`, a `double`, and a `boolean` — three different types, each declared precisely. `System.out.println` handles all of them.",
    keyPoints: [
      "`String` for text, `int` for whole numbers, `double` for decimals, `boolean` for flags.",
      "Type is declared at creation and can't change.",
      "All statements end with `;`.",
      "`System.out.println()` prints any primitive or String value.",
    ],
  },

  "rm-java-02": {
    intro: "Rick's portal gun has a stability classifier: if a dimension's reading is above 8, it's safe; 5-8 is risky; below 5 is lethal. Java's if/else chain gives this logic a home.",
    concept: "The `if/else if/else` construct allows multi-way branching. Only the first condition that evaluates to `true` executes; the rest are skipped regardless of whether they'd also be true.",
    example: `public class Main {
    public static void main(String[] args) {
        int stability = 6;

        if (stability > 8) {
            System.out.println("Safe");
        } else if (stability >= 5) {
            System.out.println("Risky");
        } else {
            System.out.println("Lethal");
        }
    }
}`,
    exampleOutput: "Risky",
    notes: "6 is not > 8, but it is >= 5. The second branch runs and prints `\"Risky\"`.",
    keyPoints: [
      "Top-to-bottom evaluation — the first `true` condition wins.",
      "Put the most specific (strictest) conditions first.",
      "Each branch's body is wrapped in `{}`.",
      "`>` means strictly greater than; `>=` means greater than or equal.",
    ],
  },

  "rm-java-03": {
    intro: "The portal gun's charge depletes with each jump. Rick needs a clean formula in a method — give it the number of jumps and it returns the remaining charge percentage.",
    concept: "Java methods define reusable calculations. Declare the return type (like `int`), name the method, list the parameters with their types, and end with a `return` statement that matches the declared type.",
    example: `public class Main {
    static int chargeLeft(int jumps) {
        return 100 - jumps * 7;
    }

    public static void main(String[] args) {
        System.out.println(chargeLeft(5));
        System.out.println(chargeLeft(10));
    }
}`,
    exampleOutput: "65\n30",
    notes: "`chargeLeft(5)` returns `100 - 35 = 65`. `chargeLeft(10)` returns `100 - 70 = 30`. One method, two calls, two different results.",
    keyPoints: [
      "`static int name(int param)` declares a method returning an `int`.",
      "Arithmetic in `return` follows standard order of operations.",
      "The return type and the actual returned value must match.",
      "Call the method from `main` — or from any other method in the class.",
    ],
  },

  "rm-java-04": {
    intro: "Morty's interdimensional travel log holds an entry for each dimension visited this week. A Java array of strings stores them in the order they were visited — indexed for fast lookback.",
    concept: "Java arrays are fixed-size typed collections declared with `Type[]`. Initialise with a literal list, then read any element by its zero-based index. `.length` tells you the total count.",
    example: `public class Main {
    public static void main(String[] args) {
        String[] visited = {"C-137", "J-22", "K-83", "M-99"};
        System.out.println(visited[2]);
        System.out.println(visited.length);
    }
}`,
    exampleOutput: "K-83\n4",
    notes: "`visited[2]` is the third element (index 2), `\"K-83\"`. There are four elements total, so `.length` is 4.",
    keyPoints: [
      "Declare: `String[] name = {\"a\", \"b\", ...};`",
      "Zero-indexed — first element is at index 0.",
      "`.length` is a field, not a method call.",
      "Accessing index `>= length` throws `ArrayIndexOutOfBoundsException`.",
    ],
  },

  "rm-java-05": {
    intro: "Rick needs the total interdimensional distance travelled across all jumps this week. A loop steps through each jump's distance and accumulates the running total into a single number.",
    concept: "Java's enhanced for-each loop is ideal for processing arrays when you need every element but not the index. Combine it with an accumulator variable declared before the loop to build up a total.",
    example: `public class Main {
    public static void main(String[] args) {
        int[] distances = {42, 17, 83, 29, 55};
        int total = 0;
        for (int d : distances) {
            total += d;
        }
        System.out.println(total);
    }
}`,
    exampleOutput: "226",
    notes: "Five distances sum to `42+17+83+29+55 = 226`. The loop visits each element; `total` grows by each distance.",
    keyPoints: [
      "For-each syntax: `for (int d : distances)`.",
      "The accumulator (`total`) must be declared outside the loop.",
      "`total += d` is shorthand for `total = total + d`.",
      "The loop runs exactly `distances.length` times.",
    ],
  },

  // ─── Squid Game ───────────────────────────────────────────────────────────

  "sg-java-01": {
    intro: "The Front Man's registration system logs every player with a number, a debt amount, and whether they've agreed to the contract. Java's typed variables model these fields with no ambiguity.",
    concept: "Java requires you to declare the type of every variable. `int` for whole numbers, `double` for decimals, `String` for text, `boolean` for true/false. The compiler enforces these rules at build time.",
    example: `public class Main {
    public static void main(String[] args) {
        int playerNumber = 456;
        double debt = 160000000.0;
        boolean contractSigned = true;
        System.out.println(playerNumber);
        System.out.println(debt);
        System.out.println(contractSigned);
    }
}`,
    exampleOutput: "456\n1.6E8\ntrue",
    notes: "Java prints large `double` values in scientific notation. `1.6E8` means `1.6 × 10^8 = 160,000,000`. Use `System.out.printf` for fixed decimal formatting if needed.",
    keyPoints: [
      "Type declaration is mandatory before first use: `int playerNumber = 456;`",
      "Large `double` values may print in scientific notation.",
      "Every statement ends with `;`.",
      "`System.out.println()` converts the value to its default string representation.",
    ],
  },

  "sg-java-02": {
    intro: "The game organisers assign rounds based on player count thresholds. Java's if/else chain maps the headcount to the appropriate round type — smooth, frantic, or overtime.",
    concept: "An `if/else if/else` chain in Java evaluates conditions in sequence and executes the first matching block. This is the standard tool for multi-way decisions based on numeric or boolean comparisons.",
    example: `public class Main {
    public static void main(String[] args) {
        int playerCount = 82;

        if (playerCount > 100) {
            System.out.println("Smooth round");
        } else if (playerCount > 50) {
            System.out.println("Frantic round");
        } else {
            System.out.println("Overtime round");
        }
    }
}`,
    exampleOutput: "Frantic round",
    notes: "82 is not > 100 but is > 50. The second branch runs: `\"Frantic round\"`. The `else` block is unreachable at this count.",
    keyPoints: [
      "Order matters — put the most restrictive condition first.",
      "A condition that passes stops the chain from continuing.",
      "Curly braces are required for multi-line blocks (optional but recommended for single-line).",
      "Use `&&` for AND: `playerCount > 50 && playerCount <= 100`.",
    ],
  },

  "sg-java-03": {
    intro: "The prize pool grows with each eliminated player. A static method encapsulates the formula — pass in the elimination count and get back the exact prize total.",
    concept: "Java static methods are declared with a return type that matches what they actually return. They're the building blocks of reusable logic — define once, call repeatedly with different inputs.",
    example: `public class Main {
    static long prizePool(int eliminations) {
        return eliminations * 100_000_000L;
    }

    public static void main(String[] args) {
        System.out.println(prizePool(10));
        System.out.println(prizePool(456));
    }
}`,
    exampleOutput: "1000000000\n45600000000",
    notes: "`long` is used instead of `int` because the values exceed `int`'s max (~2.1 billion). The `L` suffix makes the literal a `long`. `100_000_000L` — underscores improve readability.",
    keyPoints: [
      "Use `long` instead of `int` for very large numbers.",
      "Append `L` to a literal to make it `long`: `100_000_000L`.",
      "Underscores in numeric literals improve readability — Java ignores them.",
      "The return type in the signature must match the `return` expression's type.",
    ],
  },

  "sg-java-04": {
    intro: "Guards are assigned to posts by shape and number. An array of `String` values stores the post assignments in order — look up any guard's post by their index.",
    concept: "Java arrays are fixed-size, zero-indexed typed collections. They're perfect when you know exactly how many elements you'll have. Access any element in O(1) time using its index.",
    example: `public class Main {
    public static void main(String[] args) {
        String[] posts = {"Gate A", "Game Area", "VIP Floor", "Control Room"};
        System.out.println(posts[2]);
        System.out.println(posts.length);
    }
}`,
    exampleOutput: "VIP Floor\n4",
    notes: "`posts[2]` is `\"VIP Floor\"` (index 2 = third element). The array has four elements so `.length` is 4.",
    keyPoints: [
      "Array literal: `String[] name = {\"a\", \"b\", ...};`",
      "First element: `[0]`, last element: `[length - 1]`.",
      "`.length` is a property, not a method — no `()`.",
      "Java arrays hold a single type — you can't mix `int` and `String` in one array.",
    ],
  },

  "sg-java-05": {
    intro: "The glass bridge eliminated most players. The surviving player count across all glass pairs needs to be summed for the final report — a loop counts them up from the per-pair survivor array.",
    concept: "Java's enhanced for-each loop paired with an integer accumulator is the idiomatic way to sum an array. Start at 0, add each element, finish with the total.",
    example: `public class Main {
    public static void main(String[] args) {
        int[] survivors = {0, 1, 0, 2, 1};
        int total = 0;
        for (int s : survivors) {
            total += s;
        }
        System.out.println(total);
    }
}`,
    exampleOutput: "4",
    notes: "`0+1+0+2+1 = 4` survivors total. The for-each loop iterates every element; `total += s` accumulates the sum.",
    keyPoints: [
      "For-each: `for (int s : survivors)` — concise and avoids index errors.",
      "Initialise the accumulator to the identity value (0 for sum, 1 for product).",
      "`total += s` is the accumulation step.",
      "Print after the loop — not inside — to get the final result.",
    ],
  },
};
