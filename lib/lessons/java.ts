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

  // ─── Arrested Development ─────────────────────────────────────────────────

  "ad-java-01": {
    intro: "George Bluth Sr. kept two sets of books for the Bluth Company — one for the IRS, one for the truth. This program covers the legitimate inventory: item name, quantity on hand, and the going price per unit.",
    concept: "Java is statically typed: every variable must declare its type. `String` holds text (always double-quoted), `int` holds whole numbers, and `double` holds decimals. Statements end with a semicolon.",
    example: `public class Main {
    public static void main(String[] args) {
        String item = "frozen banana";
        int quantity = 250;
        double priceEach = 1.50;
        System.out.println(item);
        System.out.println(quantity);
        System.out.println(priceEach);
    }
}`,
    exampleOutput: "frozen banana\n250\n1.5",
    notes: "Three variables of three different types are declared and printed. `System.out.println()` prints the value and advances to a new line.",
    keyPoints: [
      "Every variable needs a type: `String`, `int`, `double`, `boolean`.",
      "`String` values use double quotes; char literals use single quotes.",
      "Statements end with `;`.",
      "`System.out.println(val)` prints `val` followed by a newline.",
    ],
  },

  "ad-java-02": {
    intro: "Tobias is auditioning for an acting role and needs the casting director to understand his background. If he has an acting credit, he leads with that. Otherwise he falls back on his medical career — but only partially.",
    concept: "An `if/else` block routes execution to one of two paths based on a boolean condition. Only one branch runs; the other is skipped.",
    example: `public class Main {
    static void introduce(boolean hasCredit) {
        if (hasCredit) {
            System.out.println("Actor and analyst.");
        } else {
            System.out.println("Analyst and actor-in-waiting.");
        }
    }
    public static void main(String[] args) {
        introduce(true);
        introduce(false);
    }
}`,
    exampleOutput: "Actor and analyst.\nAnalyst and actor-in-waiting.",
    notes: "Called twice with different booleans. Each call executes exactly one branch of the `if/else`.",
    keyPoints: [
      "`if (condition) { }` runs the block when `condition` is `true`.",
      "`else { }` runs when the condition is `false`.",
      "Boolean variables don't need `== true`: just use `if (hasCredit)`.",
      "Both `true` and `false` paths are tested here.",
    ],
  },

  "ad-java-03": {
    intro: "There's always money in the banana stand — $250,000 hidden in the walls. George Sr.'s accountant wrote a method to calculate how much money is stored based on units and value per unit.",
    concept: "A `static` method in Java is called directly on the class without creating an instance. You declare its return type, name, and parameter list. `return` sends the computed value back to the caller.",
    example: `public class Main {
    static int totalValue(int units, int valueEach) {
        return units * valueEach;
    }
    public static void main(String[] args) {
        System.out.println(totalValue(250, 1000));
    }
}`,
    exampleOutput: "250000",
    notes: "`250 * 1000 = 250000`. The method computes the product and returns it; `main` prints the returned value.",
    keyPoints: [
      "`static int methodName(int a, int b) { return ...; }` — declare type, name, params.",
      "`return` exits the method and sends the value back.",
      "Call a static method from `main`: `ClassName.methodName(...)` or just `methodName(...)`.",
      "The return type must match what you actually return.",
    ],
  },

  "ad-java-04": {
    intro: "Michael needs a printed roster of the Bluth family for the company restructuring meeting. Each name goes on its own line, enumerated cleanly using a for-each loop.",
    concept: "Java arrays hold a fixed-size sequence of elements of the same type. A for-each loop iterates over every element without needing an index.",
    example: `public class Main {
    public static void main(String[] args) {
        String[] family = {"Michael", "George Sr.", "Lucille", "Buster"};
        for (String member : family) {
            System.out.println(member);
        }
    }
}`,
    exampleOutput: "Michael\nGeorge Sr.\nLucille\nBuster",
    notes: "The for-each loop reads as \"for each String `member` in `family`, run the block\". Cleaner than a traditional index loop when you don't need the index.",
    keyPoints: [
      "Array declaration: `String[] name = {\"a\", \"b\", \"c\"};`",
      "For-each: `for (Type var : array) { ... }` — iterates every element.",
      "`System.out.println()` prints each name on its own line.",
      "Arrays have a fixed length set at creation.",
    ],
  },

  "ad-java-05": {
    intro: "Gob is running the 'Stair Car' tour for investors. Each lap is announced over the PA. He needs a numbered printout: one announcement per lap, for exactly four laps around the parking lot.",
    concept: "A `for` loop with a counter variable repeats a block a known number of times. The counter can be used inside the loop body to produce numbered output.",
    example: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 4; i++) {
            System.out.println("Stair Car lap " + i);
        }
    }
}`,
    exampleOutput: "Stair Car lap 1\nStair Car lap 2\nStair Car lap 3\nStair Car lap 4",
    notes: "`i` starts at `1`, the loop runs while `i <= 4`, and `i++` increments after each iteration. String concatenation with `+` builds the message.",
    keyPoints: [
      "For loop: `for (init; condition; update) { body }`.",
      "Start at `1` when you want human-readable numbering.",
      "String concatenation: `\"text\" + variable` builds a combined string.",
      "`System.out.println()` prints and moves to the next line.",
    ],
  },

  // ─── Barbie ───────────────────────────────────────────────────────────────

  "ba-java-01": {
    intro: "Barbie's Dream House is legendary. It needs to be properly documented: the address, the number of floors, and the price — all declared in a typed Java program before the open house.",
    concept: "Java variables must declare their type before use. `String` holds text, `int` holds whole numbers, and `double` holds decimals. `System.out.println()` prints a value and adds a newline.",
    example: `public class Main {
    public static void main(String[] args) {
        String address = "1 Dream House Lane";
        int floors = 3;
        double price = 1250000.00;
        System.out.println(address);
        System.out.println(floors);
        System.out.println(price);
    }
}`,
    exampleOutput: "1 Dream House Lane\n3\n1250000.0",
    notes: "Three typed variables declared and printed. Java prints `double` values with a trailing `.0` if no fractional part is displayed.",
    keyPoints: [
      "Declare type before name: `String address = \"...\";`",
      "Use `double` for decimals; `int` for whole numbers.",
      "`System.out.println()` adds a newline after the value.",
      "Java won't let you use a variable before declaring it.",
    ],
  },

  "ba-java-02": {
    intro: "The Barbie Dream Closet has a minimum pink ratio — at least 80% of outfits must be pink. This program checks whether a given percentage qualifies, or whether the wardrobe needs a redesign.",
    concept: "`if/else` evaluates a boolean condition. If it's `true`, the first block runs. If `false`, the `else` block runs. Exactly one block executes per call.",
    example: `public class Main {
    static void checkWardrobe(int pinkPercent) {
        if (pinkPercent >= 80) {
            System.out.println("Dream Closet certified!");
        } else {
            System.out.println("Add more pink.");
        }
    }
    public static void main(String[] args) {
        checkWardrobe(90);
        checkWardrobe(60);
    }
}`,
    exampleOutput: "Dream Closet certified!\nAdd more pink.",
    notes: "90 ≥ 80 so the first call passes; 60 < 80 so the second call hits the `else`. Each call runs exactly one branch.",
    keyPoints: [
      "`if (condition)` — the block runs when condition is `true`.",
      "`else` handles every case where the `if` condition was `false`.",
      "Comparison operator `>=` checks greater-than-or-equal.",
      "The method is `static` — it can be called from `main` without an instance.",
    ],
  },

  "ba-java-03": {
    intro: "Barbie is planning her fashion week wardrobe. Each outfit requires a base cost plus accessories. The stylist's calculation method ensures everyone bills consistently — no surprises on the invoice.",
    concept: "A `static` method packages reusable logic. Declare the return type, name, and parameters; the `return` statement sends the computed value back to the caller.",
    example: `public class Main {
    static int outfitCost(int base, int accessories) {
        return base + accessories;
    }
    public static void main(String[] args) {
        System.out.println(outfitCost(200, 75));
    }
}`,
    exampleOutput: "275",
    notes: "`200 + 75 = 275`. The method adds the two parameters and returns the result. `main` prints the returned value.",
    keyPoints: [
      "Method signature: `static int name(int a, int b)`.",
      "`return expr;` exits the method and sends `expr` back.",
      "The return type in the signature must match the returned value.",
      "Call from `main` as: `outfitCost(200, 75)`.",
    ],
  },

  "ba-java-04": {
    intro: "Barbie has held every career — astronaut, doctor, president, teacher. For the career fair, all her job titles need to be printed on placards, one per line.",
    concept: "An array stores a fixed-size sequence of same-typed elements. A for-each loop visits every element in order, requiring no manual index management.",
    example: `public class Main {
    public static void main(String[] args) {
        String[] careers = {"Astronaut", "Doctor", "President", "Teacher"};
        for (String career : careers) {
            System.out.println(career);
        }
    }
}`,
    exampleOutput: "Astronaut\nDoctor\nPresident\nTeacher",
    notes: "The for-each loop reads as \"for each `career` in `careers`\". No index needed; each element is printed on its own line.",
    keyPoints: [
      "`String[] arr = {\"a\", \"b\"};` — array literal with curly braces.",
      "For-each: `for (String s : arr) { ... }` — clean and index-free.",
      "`System.out.println(s)` prints the element and a newline.",
      "Arrays are fixed-length; use `ArrayList` when you need to grow.",
    ],
  },

  "ba-java-05": {
    intro: "Every morning in Barbieland, each Barbie waves good morning to the others. This program prints a numbered wave for each Barbie in the lineup — six Barbies, six cheerful greetings.",
    concept: "A `for` loop with a counter repeats a block a specific number of times. The counter variable can be embedded in the output to produce numbered lines.",
    example: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 6; i++) {
            System.out.println("Good morning from Barbie " + i + "!");
        }
    }
}`,
    exampleOutput: "Good morning from Barbie 1!\nGood morning from Barbie 2!\nGood morning from Barbie 3!\nGood morning from Barbie 4!\nGood morning from Barbie 5!\nGood morning from Barbie 6!",
    notes: "`i` runs from 1 to 6 inclusive. String concatenation builds each greeting with the current value of `i`.",
    keyPoints: [
      "For loop: `for (int i = 1; i <= n; i++) { ... }` runs `n` times.",
      "`i++` is shorthand for `i = i + 1`.",
      "Use `+` to concatenate strings and numbers: `\"Barbie \" + 3` → `\"Barbie 3\"`.",
      "Start counter at `1` for human-readable numbering.",
    ],
  },

  // ─── Sex and the City ─────────────────────────────────────────────────────

  "sc-java-01": {
    intro: "Carrie Bradshaw's shoe collection is legendary. She has the pair name, how many pairs she owns, and the average cost per pair — all stored in properly typed Java variables before she tells Mr. Big the total.",
    concept: "Java's static typing requires declaring a type for every variable. `String` holds text, `int` holds whole numbers, `double` holds decimals with a fractional part.",
    example: `public class Main {
    public static void main(String[] args) {
        String brand = "Manolo Blahnik";
        int pairs = 112;
        double avgCost = 525.00;
        System.out.println(brand);
        System.out.println(pairs);
        System.out.println(avgCost);
    }
}`,
    exampleOutput: "Manolo Blahnik\n112\n525.0",
    notes: "Three variables of three types declared and printed. Java prints `double` with at least one decimal place.",
    keyPoints: [
      "Declare with type: `String brand = \"...\";`",
      "`int` for whole numbers, `double` for decimals, `boolean` for true/false.",
      "`System.out.println()` prints and adds a newline.",
      "Every statement ends with `;`.",
    ],
  },

  "sc-java-02": {
    intro: "Samantha evaluates every man by one simple metric: investment potential. If he scores above 70, she'll see him again. Otherwise, she's already mentally moved on.",
    concept: "`if/else` routes execution to exactly one of two blocks based on a boolean condition. You can compare numbers with `>`, `<`, `>=`, `<=`, `==`, or `!=`.",
    example: `public class Main {
    static void evaluate(int score) {
        if (score > 70) {
            System.out.println("Worth seeing again.");
        } else {
            System.out.println("Next!");
        }
    }
    public static void main(String[] args) {
        evaluate(85);
        evaluate(55);
    }
}`,
    exampleOutput: "Worth seeing again.\nNext!",
    notes: "85 > 70 passes; 55 > 70 fails. Each call takes exactly one path through the conditional.",
    keyPoints: [
      "`if (score > 70)` — only runs the block when `score` is greater than 70.",
      "`else` is the catch-all when the condition is false.",
      "Comparison operators work on numbers: `>`, `<`, `>=`, `<=`.",
      "Method parameters let you reuse the same logic with different inputs.",
    ],
  },

  "sc-java-03": {
    intro: "Carrie is paid per word for her columns. Her editor wants a method that calculates total earnings: words written multiplied by the rate per word. Clean and consistent billing.",
    concept: "A `static` method packages reusable arithmetic. Declare the return type, parameters, and use `return` to send the result back.",
    example: `public class Main {
    static double earnings(int words, double ratePerWord) {
        return words * ratePerWord;
    }
    public static void main(String[] args) {
        System.out.println(earnings(1200, 2.50));
    }
}`,
    exampleOutput: "3000.0",
    notes: "`1200 * 2.50 = 3000.0`. The method returns a `double` and `main` prints it.",
    keyPoints: [
      "Mixed-type arithmetic: `int * double` promotes to `double`.",
      "Return type in signature must match the returned value type.",
      "`static` methods belong to the class and don't need an instance to call.",
      "`System.out.println()` on a `double` prints the decimal representation.",
    ],
  },

  "sc-java-04": {
    intro: "Carrie keeps a mental list of significant exes — Big, Aidan, Petrovsky, Berger. For the memoir, they need to be printed in order, one per line.",
    concept: "A Java array holds a fixed sequence of same-typed values. A for-each loop visits every element in declaration order, printing each on its own line.",
    example: `public class Main {
    public static void main(String[] args) {
        String[] exes = {"Big", "Aidan", "Petrovsky", "Berger"};
        for (String ex : exes) {
            System.out.println(ex);
        }
    }
}`,
    exampleOutput: "Big\nAidan\nPetrovsky\nBerger",
    notes: "The for-each loop iterates every element in order. No index is needed when you just want to process each element.",
    keyPoints: [
      "Array literal: `String[] arr = {\"a\", \"b\", \"c\"};`",
      "For-each: `for (String s : arr)` — reads \"for each String s in arr\".",
      "`System.out.println(s)` prints `s` and advances to the next line.",
      "Arrays are fixed-size; the order matches the declaration.",
    ],
  },

  "sc-java-05": {
    intro: "The girls are on their third round of Cosmos. Charlotte is counting rounds so they can split the bill fairly at the end of the night.",
    concept: "A `for` loop with a counter repeats a block a specific number of times, optionally embedding the counter in the output.",
    example: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            System.out.println("Round " + i + " of Cosmos ordered.");
        }
    }
}`,
    exampleOutput: "Round 1 of Cosmos ordered.\nRound 2 of Cosmos ordered.\nRound 3 of Cosmos ordered.",
    notes: "`i` increments from 1 to 3. String concatenation builds the output message on each iteration.",
    keyPoints: [
      "For loop: `for (int i = start; i <= end; i++) { ... }`.",
      "`i++` increments the counter after each iteration.",
      "Concatenate with `+`: `\"Round \" + i + \" of Cosmos ordered.\"`.",
      "The loop body runs once per value of `i` in the range.",
    ],
  },

  // ─── Sopranos ─────────────────────────────────────────────────────────────

  "sp-java-01": {
    intro: "Satriale's Pork Store is the front — and the hangout. Paulie needs a proper inventory program to track the store's most important items for the weekly order.",
    concept: "Java requires each variable to declare its type. `String` for text, `int` for whole numbers, `double` for decimals. Every statement ends with a semicolon.",
    example: `public class Main {
    public static void main(String[] args) {
        String item = "capicola";
        int stock = 48;
        double pricePerLb = 12.99;
        System.out.println(item);
        System.out.println(stock);
        System.out.println(pricePerLb);
    }
}`,
    exampleOutput: "capicola\n48\n12.99",
    notes: "Three variables of three types declared and printed. Java displays `12.99` as-is for `double` values that have a precise decimal representation.",
    keyPoints: [
      "Every variable must have a declared type before use.",
      "`String`, `int`, `double`, `boolean` are the most common types.",
      "`System.out.println(val)` prints `val` with a trailing newline.",
      "Statements end with `;`.",
    ],
  },

  "sp-java-02": {
    intro: "The FBI is moving witnesses around again. Tony needs a quick check: if a crew member has been relocated, print a warning. Otherwise, confirm they're still around.",
    concept: "`if/else` evaluates a boolean and executes one of two branches. Boolean parameters are used directly in the condition — no need for `== true`.",
    example: `public class Main {
    static void checkStatus(boolean relocated) {
        if (relocated) {
            System.out.println("Gone. Don't ask.");
        } else {
            System.out.println("Still with us.");
        }
    }
    public static void main(String[] args) {
        checkStatus(true);
        checkStatus(false);
    }
}`,
    exampleOutput: "Gone. Don't ask.\nStill with us.",
    notes: "When `relocated` is `true`, the first branch runs. When `false`, the `else` runs. Each call hits exactly one path.",
    keyPoints: [
      "`if (relocated)` — boolean variables don't need `== true`.",
      "`else` runs when the `if` condition is false.",
      "Static methods are called from `main` without an instance.",
      "Test both `true` and `false` to verify both branches work.",
    ],
  },

  "sp-java-03": {
    intro: "Every capo kicks up a percentage of earnings to Tony. Bobby keeps track of the numbers. Write a method so the math is consistent and nobody gets shorted.",
    concept: "A `static` method packages reusable logic. Declare the return type, name, and parameter types. `return` sends the computed value back to the calling code.",
    example: `public class Main {
    static int tribute(int earnings, int percent) {
        return earnings * percent / 100;
    }
    public static void main(String[] args) {
        System.out.println(tribute(50000, 15));
    }
}`,
    exampleOutput: "7500",
    notes: "`50000 * 15 / 100 = 7500`. Integer division truncates — using all `int` values here keeps the result a whole number.",
    keyPoints: [
      "`static int tribute(int earnings, int percent)` — return type, name, params.",
      "`return earnings * percent / 100;` computes and returns the result.",
      "Integer division drops the remainder: `7 / 2 = 3` in `int` math.",
      "Call from `main`: `tribute(50000, 15)` passes arguments by position.",
    ],
  },

  "sp-java-04": {
    intro: "Tony needs a printed roster of his senior crew for a sit-down with New York. It needs to be clean, formal, and not include anyone who's currently a problem.",
    concept: "Arrays hold a fixed-size sequence of elements. A for-each loop iterates every element in order without needing an explicit index.",
    example: `public class Main {
    public static void main(String[] args) {
        String[] crew = {"Tony", "Paulie", "Silvio", "Christopher"};
        for (String member : crew) {
            System.out.println(member);
        }
    }
}`,
    exampleOutput: "Tony\nPaulie\nSilvio\nChristopher",
    notes: "The for-each visits every element in declaration order. Each name is printed on its own line.",
    keyPoints: [
      "Array literal: `String[] arr = {\"a\", \"b\", \"c\"};`",
      "For-each: `for (String s : arr)` iterates all elements.",
      "No index needed when you just want to process each element.",
      "`System.out.println()` adds a newline after each element.",
    ],
  },

  "sp-java-05": {
    intro: "Tony has been seeing Dr. Melfi every week for years. The insurance company needs a printout of each session on record for this quarter — four sessions, clearly documented.",
    concept: "A `for` loop with a counter variable repeats a block a known number of times. Embed the counter in the output to produce numbered lines.",
    example: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 4; i++) {
            System.out.println("Session #" + i + " with Dr. Melfi");
        }
    }
}`,
    exampleOutput: "Session #1 with Dr. Melfi\nSession #2 with Dr. Melfi\nSession #3 with Dr. Melfi\nSession #4 with Dr. Melfi",
    notes: "`i` goes from 1 to 4 inclusive. Concatenation builds the session label on each pass.",
    keyPoints: [
      "For loop: `for (int i = 1; i <= 4; i++)` — start, condition, increment.",
      "`i++` increments after each iteration.",
      "String + int concatenation: Java converts the int to a string automatically.",
      "The loop body executes once for each value of `i` in the range.",
    ],
  },

  // ─── Lesson 06 — String Methods ───────────────────────────────────────────

  "st-java-06": {
    intro: "Mike intercepts one of Dr. Brenner's lab memos. He uses Java's String methods to normalise the text — uppercasing it, checking whether 'eleven' appears, and slicing a prefix.",
    concept: "Java Strings have built-in methods. `.toUpperCase()` and `.toLowerCase()` change case. `.contains(str)` checks for a substring. `.substring(start, end)` extracts a portion.",
    example: `public class Main {
    public static void main(String[] args) {
        String memo = "eleven has escaped the lab";
        System.out.println(memo.toUpperCase());
        System.out.println(memo.contains("eleven"));
        System.out.println(memo.substring(0, 6));
    }
}`,
    exampleOutput: "ELEVEN HAS ESCAPED THE LAB\ntrue\neleven",
    notes: "`.toUpperCase()` returns a new uppercase String. `.contains()` returns a boolean. `.substring(0, 6)` extracts characters at indices 0–5.",
    keyPoints: [
      "Java Strings are immutable — all methods return new Strings.",
      "`.toUpperCase()` / `.toLowerCase()` change case.",
      "`.contains(str)` returns `true` or `false`.",
      "`.substring(start, end)` — `end` is exclusive.",
    ],
  },

  "sv-java-06": {
    intro: "Helly R. processes MDR file codes in Java. She uppercases each code for display, checks for 'refined', and extracts the batch prefix with `substring`.",
    concept: "Java Strings have built-in methods. `.toUpperCase()` and `.toLowerCase()` change case. `.contains(str)` checks for a substring. `.substring(start, end)` extracts a portion.",
    example: `public class Main {
    public static void main(String[] args) {
        String code = "refined-batch-04";
        System.out.println(code.toUpperCase());
        System.out.println(code.contains("refined"));
        System.out.println(code.substring(0, 7));
    }
}`,
    exampleOutput: "REFINED-BATCH-04\ntrue\nrefined",
    notes: "`.toUpperCase()` converts the full string. `.contains()` returns true. `.substring(0, 7)` gives the first 7 characters.",
    keyPoints: [
      "Strings are immutable — methods return new Strings.",
      "`.toUpperCase()` / `.toLowerCase()` do not modify the original.",
      "`.contains(str)` is case-sensitive.",
      "`.substring(start, end)` — `end` is exclusive.",
    ],
  },

  "bb-java-06": {
    intro: "Jesse formats the batch labels for Gus's distribution network. He uppercases each label, checks that 'blue' is present, and extracts the purity code prefix.",
    concept: "Java Strings have built-in methods. `.toUpperCase()` changes case. `.contains(str)` checks for a substring. `.substring(start, end)` extracts part of the string.",
    example: `public class Main {
    public static void main(String[] args) {
        String label = "blue-sky-batch";
        System.out.println(label.toUpperCase());
        System.out.println(label.contains("blue"));
        System.out.println(label.substring(0, 8));
    }
}`,
    exampleOutput: "BLUE-SKY-BATCH\ntrue\nblue-sky",
    notes: "`.toUpperCase()` capitalises every character. `.contains('blue')` returns true. `.substring(0, 8)` extracts the first 8 characters.",
    keyPoints: [
      "Strings are immutable — methods return new Strings.",
      "`.toUpperCase()` / `.toLowerCase()` return new String objects.",
      "`.contains(str)` returns a boolean.",
      "`.substring(start, end)` — `end` is exclusive.",
    ],
  },

  "to-java-06": {
    intro: "Pam is standardising the employee directory in Java. She uppercases each name, checks whether 'Scranton' is present in an address, and extracts a short code prefix.",
    concept: "Java Strings have built-in methods. `.toUpperCase()` changes case. `.contains(str)` checks for a substring. `.substring(start, end)` extracts a portion.",
    example: `public class Main {
    public static void main(String[] args) {
        String entry = "jim-halpert-scranton";
        System.out.println(entry.toUpperCase());
        System.out.println(entry.contains("scranton"));
        System.out.println(entry.substring(0, 3));
    }
}`,
    exampleOutput: "JIM-HALPERT-SCRANTON\ntrue\njim",
    notes: "`.toUpperCase()` converts the full entry. `.contains()` returns true. `.substring(0, 3)` extracts `'jim'`.",
    keyPoints: [
      "Strings are immutable in Java.",
      "`.toUpperCase()` / `.toLowerCase()` return new Strings.",
      "`.contains(str)` is case-sensitive.",
      "`.substring(start, end)` — `end` is exclusive.",
    ],
  },

  "got-java-06": {
    intro: "The Grand Maester formats house names for the Citadel registry. He uppercases each name, checks for 'lannister', and extracts the house abbreviation.",
    concept: "Java Strings have built-in methods. `.toUpperCase()` changes case. `.contains(str)` checks for a substring. `.substring(start, end)` extracts a portion.",
    example: `public class Main {
    public static void main(String[] args) {
        String house = "lannister-golden-tooth";
        System.out.println(house.toUpperCase());
        System.out.println(house.contains("lannister"));
        System.out.println(house.substring(0, 9));
    }
}`,
    exampleOutput: "LANNISTER-GOLDEN-TOOTH\ntrue\nlannistr",
    notes: "`.toUpperCase()` capitalises everything. `.contains('lannister')` returns true. `.substring(0, 9)` extracts 9 characters.",
    keyPoints: [
      "Strings are immutable in Java.",
      "`.toUpperCase()` / `.toLowerCase()` return new Strings.",
      "`.contains(str)` returns a boolean.",
      "`.substring(start, end)` — `end` is exclusive.",
    ],
  },

  "mx-java-06": {
    intro: "Neo intercepts an agent code string. He uses Java String methods to uppercase it, verify it contains 'agent', and extract the sector prefix.",
    concept: "Java Strings have built-in methods. `.toUpperCase()` changes case. `.contains(str)` checks for a substring. `.substring(start, end)` extracts a portion.",
    example: `public class Main {
    public static void main(String[] args) {
        String agentCode = "agent-smith-sector-7";
        System.out.println(agentCode.toUpperCase());
        System.out.println(agentCode.contains("agent"));
        System.out.println(agentCode.substring(0, 5));
    }
}`,
    exampleOutput: "AGENT-SMITH-SECTOR-7\ntrue\nagent",
    notes: "`.toUpperCase()` capitalises every character. `.contains('agent')` returns true. `.substring(0, 5)` gives `'agent'`.",
    keyPoints: [
      "Strings are immutable — methods return new Strings.",
      "`.toUpperCase()` / `.toLowerCase()` change case.",
      "`.contains(str)` is case-sensitive.",
      "`.substring(start, end)` — `end` is exclusive.",
    ],
  },

  "rm-java-06": {
    intro: "Rick labels portal cartridges with dimension codes. Morty uses Java to uppercase each label, verify it contains 'c-137', and extract the prefix.",
    concept: "Java Strings have built-in methods. `.toUpperCase()` changes case. `.contains(str)` checks for a substring. `.substring(start, end)` extracts a portion.",
    example: `public class Main {
    public static void main(String[] args) {
        String cartridge = "c-137-portal-fluid";
        System.out.println(cartridge.toUpperCase());
        System.out.println(cartridge.contains("c-137"));
        System.out.println(cartridge.substring(0, 5));
    }
}`,
    exampleOutput: "C-137-PORTAL-FLUID\ntrue\nc-137",
    notes: "`.toUpperCase()` capitalises everything. `.contains('c-137')` returns true. `.substring(0, 5)` extracts the dimension code.",
    keyPoints: [
      "Strings are immutable in Java.",
      "`.toUpperCase()` / `.toLowerCase()` return new Strings.",
      "`.contains(str)` is case-sensitive.",
      "`.substring(start, end)` — `end` is exclusive.",
    ],
  },

  "sg-java-06": {
    intro: "The game organisers format player codes in Java. Each code is uppercased for display, verified to contain 'player', and trimmed to just the number portion.",
    concept: "Java Strings have built-in methods. `.toUpperCase()` changes case. `.contains(str)` checks for a substring. `.substring(start, end)` extracts a portion.",
    example: `public class Main {
    public static void main(String[] args) {
        String code = "player-456-gi-hun";
        System.out.println(code.toUpperCase());
        System.out.println(code.contains("player"));
        System.out.println(code.substring(7, 10));
    }
}`,
    exampleOutput: "PLAYER-456-GI-HUN\ntrue\n456",
    notes: "`.toUpperCase()` uppercases everything. `.contains('player')` returns true. `.substring(7, 10)` extracts the player number.",
    keyPoints: [
      "Strings are immutable — methods return new Strings.",
      "`.toUpperCase()` / `.toLowerCase()` change case.",
      "`.contains(str)` returns a boolean.",
      "`.substring(start, end)` — `end` is exclusive.",
    ],
  },

  "ad-java-06": {
    intro: "The Bluth Company's asset names need formatting for the SEC audit. Michael uppercases each name, checks for 'banana', and extracts the asset type prefix.",
    concept: "Java Strings have built-in methods. `.toUpperCase()` changes case. `.contains(str)` checks for a substring. `.substring(start, end)` extracts a portion.",
    example: `public class Main {
    public static void main(String[] args) {
        String asset = "banana-stand-newport";
        System.out.println(asset.toUpperCase());
        System.out.println(asset.contains("banana"));
        System.out.println(asset.substring(0, 6));
    }
}`,
    exampleOutput: "BANANA-STAND-NEWPORT\ntrue\nbanana",
    notes: "`.toUpperCase()` converts the entire string. `.contains('banana')` returns true. `.substring(0, 6)` gives `'banana'`.",
    keyPoints: [
      "Strings are immutable — methods return new Strings.",
      "`.toUpperCase()` / `.toLowerCase()` change case.",
      "`.contains(str)` is case-sensitive.",
      "`.substring(start, end)` — `end` is exclusive.",
    ],
  },

  "ba-java-06": {
    intro: "Barbie's career title needs formatting for the official Barbieland registry. She uppercases it, checks for 'barbie', and extracts the career name portion.",
    concept: "Java Strings have built-in methods. `.toUpperCase()` changes case. `.contains(str)` checks for a substring. `.substring(start, end)` extracts a portion.",
    example: `public class Main {
    public static void main(String[] args) {
        String career = "barbie-astronaut-2024";
        System.out.println(career.toUpperCase());
        System.out.println(career.contains("barbie"));
        System.out.println(career.substring(7, 16));
    }
}`,
    exampleOutput: "BARBIE-ASTRONAUT-2024\ntrue\nastronaut",
    notes: "`.toUpperCase()` uppercases everything. `.contains('barbie')` returns true. `.substring(7, 16)` extracts `'astronaut'`.",
    keyPoints: [
      "Strings are immutable in Java.",
      "`.toUpperCase()` / `.toLowerCase()` return new Strings.",
      "`.contains(str)` returns a boolean.",
      "`.substring(start, end)` — `end` is exclusive.",
    ],
  },

  "sc-java-06": {
    intro: "Carrie's column titles come back from the editor in mixed case. She uses Java to uppercase the title, check it contains 'love', and extract the teaser word.",
    concept: "Java Strings have built-in methods. `.toUpperCase()` changes case. `.contains(str)` checks for a substring. `.substring(start, end)` extracts a portion.",
    example: `public class Main {
    public static void main(String[] args) {
        String title = "love in new york city";
        System.out.println(title.toUpperCase());
        System.out.println(title.contains("love"));
        System.out.println(title.substring(0, 4));
    }
}`,
    exampleOutput: "LOVE IN NEW YORK CITY\ntrue\nlove",
    notes: "`.toUpperCase()` capitalises every letter. `.contains('love')` returns true. `.substring(0, 4)` extracts `'love'`.",
    keyPoints: [
      "Strings are immutable — methods return new Strings.",
      "`.toUpperCase()` / `.toLowerCase()` change case.",
      "`.contains(str)` is case-sensitive.",
      "`.substring(start, end)` — `end` is exclusive.",
    ],
  },

  "sp-java-06": {
    intro: "Carmela formats venue names from Tony's records. She uppercases each name, verifies 'bada' is present, and extracts the venue prefix.",
    concept: "Java Strings have built-in methods. `.toUpperCase()` changes case. `.contains(str)` checks for a substring. `.substring(start, end)` extracts a portion.",
    example: `public class Main {
    public static void main(String[] args) {
        String venue = "bada-bing-club-nj";
        System.out.println(venue.toUpperCase());
        System.out.println(venue.contains("bada"));
        System.out.println(venue.substring(0, 4));
    }
}`,
    exampleOutput: "BADA-BING-CLUB-NJ\ntrue\nbada",
    notes: "`.toUpperCase()` converts everything. `.contains('bada')` returns true. `.substring(0, 4)` extracts `'bada'`.",
    keyPoints: [
      "Strings are immutable — methods return new Strings.",
      "`.toUpperCase()` / `.toLowerCase()` change case.",
      "`.contains(str)` returns a boolean.",
      "`.substring(start, end)` — `end` is exclusive.",
    ],
  },

  // ─── Lesson 07 — ArrayList ────────────────────────────────────────────────

  "st-java-07": {
    intro: "The Party keeps a dynamic roster — members join and leave. Dustin uses an `ArrayList` to track them, adding and printing the crew size.",
    concept: "An `ArrayList` is a resizable list in Java. Import `java.util.ArrayList`. Use `.add()` to append items, `.size()` for the count, and `.get(index)` to retrieve by position.",
    example: `import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        ArrayList<String> party = new ArrayList<>();
        party.add("Mike");
        party.add("Eleven");
        party.add("Dustin");
        System.out.println(party.size());
        System.out.println(party.get(1));
    }
}`,
    exampleOutput: "3\nEleven",
    notes: "`.add()` appends to the list. `.size()` returns 3. `.get(1)` retrieves the element at index 1 — `'Eleven'`.",
    keyPoints: [
      "Import: `import java.util.ArrayList;`",
      "Declare: `ArrayList<Type> list = new ArrayList<>();`",
      "`.add(item)` appends; `.get(index)` retrieves; `.size()` counts.",
      "Indices start at 0.",
    ],
  },

  "sv-java-07": {
    intro: "The MDR team keeps a dynamic list of refined data batches. Mark uses an `ArrayList` to store batch IDs and check the current count.",
    concept: "An `ArrayList` is a resizable list in Java. Import `java.util.ArrayList`. Use `.add()` to append, `.size()` for count, and `.get(index)` to retrieve.",
    example: `import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        ArrayList<String> batches = new ArrayList<>();
        batches.add("Batch-01");
        batches.add("Batch-02");
        batches.add("Batch-03");
        System.out.println(batches.size());
        System.out.println(batches.get(0));
    }
}`,
    exampleOutput: "3\nBatch-01",
    notes: "`.add()` appends each batch. `.size()` returns 3. `.get(0)` returns `'Batch-01'`.",
    keyPoints: [
      "Import: `import java.util.ArrayList;`",
      "Declare: `ArrayList<Type> list = new ArrayList<>();`",
      "`.add(item)` appends; `.get(index)` retrieves; `.size()` counts.",
      "Indices start at 0.",
    ],
  },

  "bb-java-07": {
    intro: "Walt keeps a dynamic list of cook locations that grows as the operation expands. He uses an `ArrayList` to manage the list and count the sites.",
    concept: "An `ArrayList` is a resizable list in Java. Import `java.util.ArrayList`. Use `.add()` to append, `.size()` for count, and `.get(index)` to retrieve.",
    example: `import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        ArrayList<String> locations = new ArrayList<>();
        locations.add("RV");
        locations.add("Superlab");
        locations.add("Laundry");
        System.out.println(locations.size());
        System.out.println(locations.get(1));
    }
}`,
    exampleOutput: "3\nSuperlab",
    notes: "`.add()` appends each location. `.size()` returns 3. `.get(1)` returns `'Superlab'`.",
    keyPoints: [
      "Import: `import java.util.ArrayList;`",
      "Declare: `ArrayList<Type> list = new ArrayList<>();`",
      "`.add(item)` appends; `.get(index)` retrieves; `.size()` counts.",
      "Use `.remove(index)` to delete an item.",
    ],
  },

  "to-java-07": {
    intro: "Michael manages a dynamic list of Scranton branch employees that changes with hirings. He uses an `ArrayList` to store names and check the headcount.",
    concept: "An `ArrayList` is a resizable list in Java. Import `java.util.ArrayList`. Use `.add()` to append, `.size()` for count, and `.get(index)` to retrieve.",
    example: `import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        ArrayList<String> employees = new ArrayList<>();
        employees.add("Michael");
        employees.add("Dwight");
        employees.add("Jim");
        System.out.println(employees.size());
        System.out.println(employees.get(2));
    }
}`,
    exampleOutput: "3\nJim",
    notes: "`.add()` appends each employee. `.size()` returns 3. `.get(2)` returns `'Jim'`.",
    keyPoints: [
      "Import: `import java.util.ArrayList;`",
      "Declare: `ArrayList<Type> list = new ArrayList<>();`",
      "`.add(item)` appends; `.get(index)` retrieves; `.size()` counts.",
      "Indices start at 0.",
    ],
  },

  "got-java-07": {
    intro: "The Small Council dynamically adds and removes members. Tyrion uses an `ArrayList` to track the current roster and get the count.",
    concept: "An `ArrayList` is a resizable list in Java. Import `java.util.ArrayList`. Use `.add()` to append, `.size()` for count, and `.get(index)` to retrieve.",
    example: `import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        ArrayList<String> council = new ArrayList<>();
        council.add("Tyrion");
        council.add("Varys");
        council.add("Littlefinger");
        System.out.println(council.size());
        System.out.println(council.get(0));
    }
}`,
    exampleOutput: "3\nTyrion",
    notes: "`.add()` appends each member. `.size()` returns 3. `.get(0)` returns `'Tyrion'`.",
    keyPoints: [
      "Import: `import java.util.ArrayList;`",
      "Declare: `ArrayList<Type> list = new ArrayList<>();`",
      "`.add()`, `.get()`, `.size()`, `.remove()` are core methods.",
      "Indices start at 0.",
    ],
  },

  "mx-java-07": {
    intro: "Morpheus builds the Nebuchadnezzar crew list dynamically using an `ArrayList`, adding each operative and printing the roster size.",
    concept: "An `ArrayList` is a resizable list in Java. Import `java.util.ArrayList`. Use `.add()` to append, `.size()` for count, and `.get(index)` to retrieve.",
    example: `import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        ArrayList<String> crew = new ArrayList<>();
        crew.add("Neo");
        crew.add("Trinity");
        crew.add("Tank");
        System.out.println(crew.size());
        System.out.println(crew.get(1));
    }
}`,
    exampleOutput: "3\nTrinity",
    notes: "`.add()` appends each crew member. `.size()` returns 3. `.get(1)` returns `'Trinity'`.",
    keyPoints: [
      "Import: `import java.util.ArrayList;`",
      "Declare: `ArrayList<Type> list = new ArrayList<>();`",
      "`.add()`, `.get()`, `.size()` are core operations.",
      "Indices start at 0.",
    ],
  },

  "rm-java-07": {
    intro: "Rick keeps a dynamic list of dimensions visited on the current adventure. He uses an `ArrayList` to add each dimension and check the count.",
    concept: "An `ArrayList` is a resizable list in Java. Import `java.util.ArrayList`. Use `.add()` to append, `.size()` for count, and `.get(index)` to retrieve.",
    example: `import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        ArrayList<String> visited = new ArrayList<>();
        visited.add("C-137");
        visited.add("Cronenberg Earth");
        visited.add("Pizza Dimension");
        System.out.println(visited.size());
        System.out.println(visited.get(2));
    }
}`,
    exampleOutput: "3\nPizza Dimension",
    notes: "`.add()` appends each dimension. `.size()` returns 3. `.get(2)` returns `'Pizza Dimension'`.",
    keyPoints: [
      "Import: `import java.util.ArrayList;`",
      "Declare: `ArrayList<Type> list = new ArrayList<>();`",
      "`.add()`, `.get()`, `.size()`, `.remove()` are core methods.",
      "Indices start at 0.",
    ],
  },

  "sg-java-07": {
    intro: "The game organisers track surviving players with a dynamic list. As players are eliminated, the list shrinks. They use an `ArrayList` to manage it.",
    concept: "An `ArrayList` is a resizable list in Java. Import `java.util.ArrayList`. Use `.add()` to append, `.size()` for count, and `.remove()` to delete.",
    example: `import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        ArrayList<String> survivors = new ArrayList<>();
        survivors.add("Gi-hun");
        survivors.add("Sae-byeok");
        survivors.add("Ali");
        System.out.println(survivors.size());
        System.out.println(survivors.get(0));
    }
}`,
    exampleOutput: "3\nGi-hun",
    notes: "`.add()` appends each survivor. `.size()` returns 3. `.get(0)` returns `'Gi-hun'`.",
    keyPoints: [
      "Import: `import java.util.ArrayList;`",
      "Declare: `ArrayList<Type> list = new ArrayList<>();`",
      "`.add()`, `.get()`, `.size()`, `.remove()` are core operations.",
      "Indices start at 0.",
    ],
  },

  "ad-java-07": {
    intro: "Michael's witness list for the SEC trial changes every week. He uses an `ArrayList` to add witnesses dynamically and keep a count.",
    concept: "An `ArrayList` is a resizable list in Java. Import `java.util.ArrayList`. Use `.add()` to append, `.size()` for count, and `.get(index)` to retrieve.",
    example: `import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        ArrayList<String> witnesses = new ArrayList<>();
        witnesses.add("Barry Zuckerkorn");
        witnesses.add("Bob Loblaw");
        witnesses.add("Lucille");
        System.out.println(witnesses.size());
        System.out.println(witnesses.get(1));
    }
}`,
    exampleOutput: "3\nBob Loblaw",
    notes: "`.add()` appends each witness. `.size()` returns 3. `.get(1)` returns `'Bob Loblaw'`.",
    keyPoints: [
      "Import: `import java.util.ArrayList;`",
      "Declare: `ArrayList<Type> list = new ArrayList<>();`",
      "`.add()`, `.get()`, `.size()` are the core methods.",
      "Indices start at 0.",
    ],
  },

  "ba-java-07": {
    intro: "Barbie's ever-growing career list needs to be managed dynamically. She uses an `ArrayList` to add new careers and check how many she has held.",
    concept: "An `ArrayList` is a resizable list in Java. Import `java.util.ArrayList`. Use `.add()` to append, `.size()` for count, and `.get(index)` to retrieve.",
    example: `import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        ArrayList<String> careers = new ArrayList<>();
        careers.add("Astronaut");
        careers.add("President");
        careers.add("Doctor");
        System.out.println(careers.size());
        System.out.println(careers.get(0));
    }
}`,
    exampleOutput: "3\nAstronaut",
    notes: "`.add()` appends each career. `.size()` returns 3. `.get(0)` returns `'Astronaut'`.",
    keyPoints: [
      "Import: `import java.util.ArrayList;`",
      "Declare: `ArrayList<Type> list = new ArrayList<>();`",
      "`.add()`, `.get()`, `.size()` are core methods.",
      "Indices start at 0.",
    ],
  },

  "sc-java-07": {
    intro: "Carrie's list of potential column topics changes weekly. She uses an `ArrayList` to track them, add new ones, and check the total count.",
    concept: "An `ArrayList` is a resizable list in Java. Import `java.util.ArrayList`. Use `.add()` to append, `.size()` for count, and `.get(index)` to retrieve.",
    example: `import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        ArrayList<String> topics = new ArrayList<>();
        topics.add("Love in the City");
        topics.add("Shoes and Heartbreak");
        topics.add("The Perfect Date");
        System.out.println(topics.size());
        System.out.println(topics.get(2));
    }
}`,
    exampleOutput: "3\nThe Perfect Date",
    notes: "`.add()` appends each topic. `.size()` returns 3. `.get(2)` returns the third topic.",
    keyPoints: [
      "Import: `import java.util.ArrayList;`",
      "Declare: `ArrayList<Type> list = new ArrayList<>();`",
      "`.add()`, `.get()`, `.size()` are core methods.",
      "Indices start at 0.",
    ],
  },

  "sp-java-07": {
    intro: "Tony keeps a dynamic list of the family's current businesses. As ventures open and close, the list changes. He manages it with an `ArrayList`.",
    concept: "An `ArrayList` is a resizable list in Java. Import `java.util.ArrayList`. Use `.add()` to append, `.size()` for count, and `.get(index)` to retrieve.",
    example: `import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        ArrayList<String> businesses = new ArrayList<>();
        businesses.add("Bada Bing");
        businesses.add("Waste Management");
        businesses.add("Pizzeria");
        System.out.println(businesses.size());
        System.out.println(businesses.get(1));
    }
}`,
    exampleOutput: "3\nWaste Management",
    notes: "`.add()` appends each business. `.size()` returns 3. `.get(1)` returns `'Waste Management'`.",
    keyPoints: [
      "Import: `import java.util.ArrayList;`",
      "Declare: `ArrayList<Type> list = new ArrayList<>();`",
      "`.add()`, `.get()`, `.size()`, `.remove()` are core methods.",
      "Indices start at 0.",
    ],
  },

  // ─── Lesson 08 — HashMap ──────────────────────────────────────────────────

  "st-java-08": {
    intro: "Joyce tracks each character's current location using a `HashMap`. She maps names to places and retrieves Will's location instantly.",
    concept: "A `HashMap` stores key-value pairs. Import `java.util.HashMap`. Use `.put(key, value)` to add entries, `.get(key)` to retrieve them, and `.containsKey(key)` to check existence.",
    example: `import java.util.HashMap;
public class Main {
    public static void main(String[] args) {
        HashMap<String, String> locations = new HashMap<>();
        locations.put("Will", "Upside Down");
        locations.put("Eleven", "Lab");
        System.out.println(locations.get("Will"));
        System.out.println(locations.containsKey("Eleven"));
    }
}`,
    exampleOutput: "Upside Down\ntrue",
    notes: "`.put()` adds key-value pairs. `.get('Will')` returns `'Upside Down'`. `.containsKey()` returns true for an existing key.",
    keyPoints: [
      "Import: `import java.util.HashMap;`",
      "Declare: `HashMap<KeyType, ValueType> map = new HashMap<>();`",
      "`.put(k, v)` adds/updates; `.get(k)` retrieves; `.containsKey(k)` checks.",
      "Keys must be unique; adding the same key overwrites the value.",
    ],
  },

  "sv-java-08": {
    intro: "The MDR department maps each employee ID to their clearance level using a `HashMap`. Mark uses it to look up his own clearance quickly.",
    concept: "A `HashMap` stores key-value pairs. Import `java.util.HashMap`. Use `.put(key, value)` to add entries and `.get(key)` to retrieve them.",
    example: `import java.util.HashMap;
public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> clearance = new HashMap<>();
        clearance.put("MDR-4", 2);
        clearance.put("MDR-1", 3);
        System.out.println(clearance.get("MDR-4"));
        System.out.println(clearance.containsKey("MDR-1"));
    }
}`,
    exampleOutput: "2\ntrue",
    notes: "`.put()` stores each employee's clearance level. `.get('MDR-4')` returns 2. `.containsKey('MDR-1')` returns true.",
    keyPoints: [
      "Import: `import java.util.HashMap;`",
      "Declare: `HashMap<KeyType, ValueType> map = new HashMap<>();`",
      "`.put(k, v)` adds/updates; `.get(k)` retrieves; `.containsKey(k)` checks.",
      "Keys must be unique.",
    ],
  },

  "bb-java-08": {
    intro: "Gus maps each distribution territory to its distributor contact using a `HashMap`. He looks up the ABQ contact instantly.",
    concept: "A `HashMap` stores key-value pairs. Import `java.util.HashMap`. Use `.put(key, value)` to add entries and `.get(key)` to retrieve them.",
    example: `import java.util.HashMap;
public class Main {
    public static void main(String[] args) {
        HashMap<String, String> contacts = new HashMap<>();
        contacts.put("ABQ", "Gustavo");
        contacts.put("Phoenix", "Tuco");
        System.out.println(contacts.get("ABQ"));
        System.out.println(contacts.containsKey("Phoenix"));
    }
}`,
    exampleOutput: "Gustavo\ntrue",
    notes: "`.put()` stores territory-to-contact mappings. `.get('ABQ')` returns `'Gustavo'`. `.containsKey('Phoenix')` returns true.",
    keyPoints: [
      "Import: `import java.util.HashMap;`",
      "Declare: `HashMap<KeyType, ValueType> map = new HashMap<>();`",
      "`.put()`, `.get()`, `.containsKey()` are core operations.",
      "Keys must be unique.",
    ],
  },

  "to-java-08": {
    intro: "Dwight tracks each employee's desk location with a `HashMap`. He maps names to desk codes and checks if Jim has been assigned yet.",
    concept: "A `HashMap` stores key-value pairs. Import `java.util.HashMap`. Use `.put(key, value)` to add entries and `.get(key)` to retrieve them.",
    example: `import java.util.HashMap;
public class Main {
    public static void main(String[] args) {
        HashMap<String, String> desks = new HashMap<>();
        desks.put("Dwight", "D-1");
        desks.put("Jim", "D-3");
        System.out.println(desks.get("Jim"));
        System.out.println(desks.containsKey("Dwight"));
    }
}`,
    exampleOutput: "D-3\ntrue",
    notes: "`.put()` stores name-to-desk mappings. `.get('Jim')` returns `'D-3'`. `.containsKey('Dwight')` returns true.",
    keyPoints: [
      "Import: `import java.util.HashMap;`",
      "Declare: `HashMap<KeyType, ValueType> map = new HashMap<>();`",
      "`.put()`, `.get()`, `.containsKey()` are core operations.",
      "Keys must be unique; duplicates overwrite.",
    ],
  },

  "got-java-08": {
    intro: "The Grand Maester maps each house to its current allegiance using a `HashMap`. Tyrion looks up House Stark's status instantly.",
    concept: "A `HashMap` stores key-value pairs. Import `java.util.HashMap`. Use `.put(key, value)` to add entries and `.get(key)` to retrieve them.",
    example: `import java.util.HashMap;
public class Main {
    public static void main(String[] args) {
        HashMap<String, String> allegiances = new HashMap<>();
        allegiances.put("Stark", "Targaryen");
        allegiances.put("Lannister", "themselves");
        System.out.println(allegiances.get("Stark"));
        System.out.println(allegiances.containsKey("Lannister"));
    }
}`,
    exampleOutput: "Targaryen\ntrue",
    notes: "`.put()` stores house-to-allegiance mappings. `.get('Stark')` returns `'Targaryen'`. `.containsKey()` returns true.",
    keyPoints: [
      "Import: `import java.util.HashMap;`",
      "Declare: `HashMap<KeyType, ValueType> map = new HashMap<>();`",
      "`.put()`, `.get()`, `.containsKey()` are core methods.",
      "Keys must be unique.",
    ],
  },

  "mx-java-08": {
    intro: "Tank maps each operative to their role on the Nebuchadnezzar using a `HashMap`. He looks up Neo's role before the mission briefing.",
    concept: "A `HashMap` stores key-value pairs. Import `java.util.HashMap`. Use `.put(key, value)` to add entries and `.get(key)` to retrieve them.",
    example: `import java.util.HashMap;
public class Main {
    public static void main(String[] args) {
        HashMap<String, String> roles = new HashMap<>();
        roles.put("Neo", "The One");
        roles.put("Morpheus", "Captain");
        System.out.println(roles.get("Neo"));
        System.out.println(roles.containsKey("Morpheus"));
    }
}`,
    exampleOutput: "The One\ntrue",
    notes: "`.put()` stores operative-to-role mappings. `.get('Neo')` returns `'The One'`. `.containsKey('Morpheus')` returns true.",
    keyPoints: [
      "Import: `import java.util.HashMap;`",
      "Declare: `HashMap<KeyType, ValueType> map = new HashMap<>();`",
      "`.put()`, `.get()`, `.containsKey()` are core operations.",
      "Keys must be unique.",
    ],
  },

  "rm-java-08": {
    intro: "Rick maps alien codenames to their species using a `HashMap`. He looks up Squanchy's species before introducing him at the party.",
    concept: "A `HashMap` stores key-value pairs. Import `java.util.HashMap`. Use `.put(key, value)` to add entries and `.get(key)` to retrieve them.",
    example: `import java.util.HashMap;
public class Main {
    public static void main(String[] args) {
        HashMap<String, String> aliens = new HashMap<>();
        aliens.put("Squanchy", "Cat Alien");
        aliens.put("Birdperson", "Bird Species");
        System.out.println(aliens.get("Squanchy"));
        System.out.println(aliens.containsKey("Birdperson"));
    }
}`,
    exampleOutput: "Cat Alien\ntrue",
    notes: "`.put()` stores name-to-species mappings. `.get('Squanchy')` returns `'Cat Alien'`. `.containsKey()` returns true.",
    keyPoints: [
      "Import: `import java.util.HashMap;`",
      "Declare: `HashMap<KeyType, ValueType> map = new HashMap<>();`",
      "`.put()`, `.get()`, `.containsKey()` are core methods.",
      "Duplicate keys overwrite the previous value.",
    ],
  },

  "sg-java-08": {
    intro: "The Front Man maps player numbers to their chosen shapes for the honeycomb game. He looks up player 456's shape instantly.",
    concept: "A `HashMap` stores key-value pairs. Import `java.util.HashMap`. Use `.put(key, value)` to add entries and `.get(key)` to retrieve them.",
    example: `import java.util.HashMap;
public class Main {
    public static void main(String[] args) {
        HashMap<Integer, String> shapes = new HashMap<>();
        shapes.put(456, "Umbrella");
        shapes.put(67, "Circle");
        System.out.println(shapes.get(456));
        System.out.println(shapes.containsKey(67));
    }
}`,
    exampleOutput: "Umbrella\ntrue",
    notes: "`.put()` stores player-to-shape mappings. `.get(456)` returns `'Umbrella'`. `.containsKey(67)` returns true.",
    keyPoints: [
      "Import: `import java.util.HashMap;`",
      "Declare: `HashMap<Integer, String>` for integer keys.",
      "`.put()`, `.get()`, `.containsKey()` are core operations.",
      "Keys must be unique.",
    ],
  },

  "ad-java-08": {
    intro: "Michael maps each Bluth family member to their role using a `HashMap`. He looks up George Sr.'s role during the annual performance review.",
    concept: "A `HashMap` stores key-value pairs. Import `java.util.HashMap`. Use `.put(key, value)` to add entries and `.get(key)` to retrieve them.",
    example: `import java.util.HashMap;
public class Main {
    public static void main(String[] args) {
        HashMap<String, String> roles = new HashMap<>();
        roles.put("George Sr.", "Founder");
        roles.put("Michael", "President");
        System.out.println(roles.get("George Sr."));
        System.out.println(roles.containsKey("Michael"));
    }
}`,
    exampleOutput: "Founder\ntrue",
    notes: "`.put()` stores name-to-role mappings. `.get('George Sr.')` returns `'Founder'`. `.containsKey('Michael')` returns true.",
    keyPoints: [
      "Import: `import java.util.HashMap;`",
      "Declare: `HashMap<KeyType, ValueType> map = new HashMap<>();`",
      "`.put()`, `.get()`, `.containsKey()` are core operations.",
      "Duplicate keys overwrite.",
    ],
  },

  "ba-java-08": {
    intro: "Barbie maps each career to its completion status using a `HashMap`. She looks up whether she has completed 'President' before applying.",
    concept: "A `HashMap` stores key-value pairs. Import `java.util.HashMap`. Use `.put(key, value)` to add entries and `.get(key)` to retrieve them.",
    example: `import java.util.HashMap;
public class Main {
    public static void main(String[] args) {
        HashMap<String, Boolean> careers = new HashMap<>();
        careers.put("Astronaut", true);
        careers.put("President", false);
        System.out.println(careers.get("Astronaut"));
        System.out.println(careers.containsKey("President"));
    }
}`,
    exampleOutput: "true\ntrue",
    notes: "`.put()` stores career-to-status mappings. `.get('Astronaut')` returns true (completed). `.containsKey('President')` returns true (it exists).",
    keyPoints: [
      "Import: `import java.util.HashMap;`",
      "Declare: `HashMap<String, Boolean>` for boolean values.",
      "`.put()`, `.get()`, `.containsKey()` are core methods.",
      "Keys must be unique.",
    ],
  },

  "sc-java-08": {
    intro: "Carrie maps each relationship to its status using a `HashMap`. She looks up Big's status before writing the next column.",
    concept: "A `HashMap` stores key-value pairs. Import `java.util.HashMap`. Use `.put(key, value)` to add entries and `.get(key)` to retrieve them.",
    example: `import java.util.HashMap;
public class Main {
    public static void main(String[] args) {
        HashMap<String, String> statuses = new HashMap<>();
        statuses.put("Big", "complicated");
        statuses.put("Aidan", "almost");
        System.out.println(statuses.get("Big"));
        System.out.println(statuses.containsKey("Aidan"));
    }
}`,
    exampleOutput: "complicated\ntrue",
    notes: "`.put()` stores name-to-status mappings. `.get('Big')` returns `'complicated'`. `.containsKey('Aidan')` returns true.",
    keyPoints: [
      "Import: `import java.util.HashMap;`",
      "Declare: `HashMap<KeyType, ValueType> map = new HashMap<>();`",
      "`.put()`, `.get()`, `.containsKey()` are core operations.",
      "Duplicate keys overwrite the previous value.",
    ],
  },

  "sp-java-08": {
    intro: "Silvio maps each crew member to their rank using a `HashMap`. Tony looks up Christopher's rank before the meeting.",
    concept: "A `HashMap` stores key-value pairs. Import `java.util.HashMap`. Use `.put(key, value)` to add entries and `.get(key)` to retrieve them.",
    example: `import java.util.HashMap;
public class Main {
    public static void main(String[] args) {
        HashMap<String, String> ranks = new HashMap<>();
        ranks.put("Tony", "Boss");
        ranks.put("Christopher", "Soldier");
        System.out.println(ranks.get("Christopher"));
        System.out.println(ranks.containsKey("Tony"));
    }
}`,
    exampleOutput: "Soldier\ntrue",
    notes: "`.put()` stores name-to-rank mappings. `.get('Christopher')` returns `'Soldier'`. `.containsKey('Tony')` returns true.",
    keyPoints: [
      "Import: `import java.util.HashMap;`",
      "Declare: `HashMap<KeyType, ValueType> map = new HashMap<>();`",
      "`.put()`, `.get()`, `.containsKey()` are core operations.",
      "Duplicate keys overwrite.",
    ],
  },

  // ─── Lesson 09 — Multiple Methods ────────────────────────────────────────

  "st-java-09": {
    intro: "The Party needs two separate tools: one to greet a character, and one to calculate how many superpowers they have. Dustin writes two static methods in the same class.",
    concept: "A class can contain multiple static methods. Each method is independent and can call others. Break logic into small, focused methods for reuse and clarity.",
    example: `public class Main {
    static String greet(String name) {
        return "Hello, " + name + "!";
    }
    static int powerCount(int level) {
        return level * 3;
    }
    public static void main(String[] args) {
        System.out.println(greet("Eleven"));
        System.out.println(powerCount(4));
    }
}`,
    exampleOutput: "Hello, Eleven!\n12",
    notes: "`greet()` builds a greeting string. `powerCount()` multiplies level by 3. `main()` calls both.",
    keyPoints: [
      "Multiple `static` methods can live in one class.",
      "Methods are called by name: `greet(\"Eleven\")`.",
      "Each method has its own return type and parameters.",
      "Breaking code into methods makes it easier to test and reuse.",
    ],
  },

  "sv-java-09": {
    intro: "The Lumon MDR system needs two operations: a quota formatter and a quota checker. Mark writes two static methods in one class.",
    concept: "A class can contain multiple static methods. Each is independent, with its own return type and parameters. Break logic into small, focused methods.",
    example: `public class Main {
    static String format(String id) {
        return "ID: " + id;
    }
    static boolean meetsQuota(int done, int target) {
        return done >= target;
    }
    public static void main(String[] args) {
        System.out.println(format("MDR-4"));
        System.out.println(meetsQuota(85, 80));
    }
}`,
    exampleOutput: "ID: MDR-4\ntrue",
    notes: "`format()` prepends `'ID: '`. `meetsQuota()` returns a boolean. Both are called from `main()`.",
    keyPoints: [
      "Multiple `static` methods can exist in one class.",
      "Each method has a return type: `String`, `boolean`, `int`, etc.",
      "Call methods from `main()` or from other methods.",
      "Small, focused methods are easier to test.",
    ],
  },

  "bb-java-09": {
    intro: "Walt's operation needs a purity formatter and a profit calculator. He writes two separate static methods in the same Java class.",
    concept: "A class can contain multiple static methods. Each is independent, with its own return type and parameters. Methods can call each other.",
    example: `public class Main {
    static String formatPurity(int pct) {
        return pct + "% pure";
    }
    static int profit(int revenue, int cost) {
        return revenue - cost;
    }
    public static void main(String[] args) {
        System.out.println(formatPurity(99));
        System.out.println(profit(500000, 120000));
    }
}`,
    exampleOutput: "99% pure\n380000",
    notes: "`formatPurity()` concatenates the percentage. `profit()` subtracts cost from revenue. Both called from `main()`.",
    keyPoints: [
      "Multiple `static` methods can live in one class.",
      "Each has its own signature: `returnType name(params)`.",
      "Call by name: `formatPurity(99)`.",
      "Methods promote code reuse and readability.",
    ],
  },

  "to-java-09": {
    intro: "The Dunder Mifflin system needs a branch formatter and a sales checker. Michael writes two static methods to handle both operations.",
    concept: "A class can contain multiple static methods, each with its own return type and parameters. Break logic into focused, reusable methods.",
    example: `public class Main {
    static String branchLabel(String name) {
        return "Branch: " + name;
    }
    static boolean aboveQuota(int sales, int target) {
        return sales > target;
    }
    public static void main(String[] args) {
        System.out.println(branchLabel("Scranton"));
        System.out.println(aboveQuota(65, 50));
    }
}`,
    exampleOutput: "Branch: Scranton\ntrue",
    notes: "`branchLabel()` builds a label string. `aboveQuota()` compares sales to target. Both called from `main()`.",
    keyPoints: [
      "Multiple `static` methods can live in one class.",
      "Each method has its own signature and return type.",
      "Call methods from `main()`: `branchLabel(\"Scranton\")`.",
      "Small, focused methods improve readability.",
    ],
  },

  "got-java-09": {
    intro: "The Citadel's registry system needs a house formatter and a battle counter. The Grand Maester writes two static methods for both tasks.",
    concept: "A class can contain multiple static methods, each with its own return type and parameters. Methods can call each other and be reused.",
    example: `public class Main {
    static String houseLabel(String name) {
        return "House " + name;
    }
    static int battleBonus(int wins) {
        return wins * 100;
    }
    public static void main(String[] args) {
        System.out.println(houseLabel("Stark"));
        System.out.println(battleBonus(7));
    }
}`,
    exampleOutput: "House Stark\n700",
    notes: "`houseLabel()` prepends `'House '`. `battleBonus()` multiplies wins by 100. Both called from `main()`.",
    keyPoints: [
      "Multiple `static` methods can live in one class.",
      "Each has a return type: `String`, `int`, etc.",
      "Call by name from `main()` or other methods.",
      "Focused methods are easier to maintain.",
    ],
  },

  "mx-java-09": {
    intro: "The Zion system needs two tools: a codename formatter and a threat level calculator. The Oracle writes two static methods in the same class.",
    concept: "A class can contain multiple static methods, each with its own return type and parameters. Methods can be called from `main()` or from each other.",
    example: `public class Main {
    static String formatCode(String name) {
        return "Agent: " + name;
    }
    static int threatLevel(int power, int speed) {
        return power + speed;
    }
    public static void main(String[] args) {
        System.out.println(formatCode("Smith"));
        System.out.println(threatLevel(80, 90));
    }
}`,
    exampleOutput: "Agent: Smith\n170",
    notes: "`formatCode()` prepends `'Agent: '`. `threatLevel()` sums power and speed. Both called from `main()`.",
    keyPoints: [
      "Multiple `static` methods can live in one class.",
      "Each has its own return type and parameters.",
      "Call from `main()` or from each other.",
      "Small methods are easier to test and reuse.",
    ],
  },

  "rm-java-09": {
    intro: "Rick's portal gun software needs two routines: a dimension labeller and a portal energy calculator. He writes two static methods in one class.",
    concept: "A class can contain multiple static methods. Each is independent, with its own return type and parameters.",
    example: `public class Main {
    static String dimensionLabel(String id) {
        return "Dimension: " + id;
    }
    static int portalEnergy(int base, int boost) {
        return base * boost;
    }
    public static void main(String[] args) {
        System.out.println(dimensionLabel("C-137"));
        System.out.println(portalEnergy(10, 5));
    }
}`,
    exampleOutput: "Dimension: C-137\n50",
    notes: "`dimensionLabel()` prepends `'Dimension: '`. `portalEnergy()` multiplies base by boost. Both called from `main()`.",
    keyPoints: [
      "Multiple `static` methods can live in one class.",
      "Each has its own return type and parameter list.",
      "Call methods by name from `main()`.",
      "Small, focused methods are cleaner and reusable.",
    ],
  },

  "sg-java-09": {
    intro: "The game management system needs a player formatter and a prize calculator. Two static methods handle both operations for the organisers.",
    concept: "A class can contain multiple static methods, each with its own return type and parameters. Methods can be called from `main()` or each other.",
    example: `public class Main {
    static String playerLabel(int num) {
        return "Player " + num;
    }
    static long prizePool(int players) {
        return (long) players * 100_000_000L;
    }
    public static void main(String[] args) {
        System.out.println(playerLabel(456));
        System.out.println(prizePool(456));
    }
}`,
    exampleOutput: "Player 456\n45600000000",
    notes: "`playerLabel()` formats the player number. `prizePool()` multiplies by 100 million. Both called from `main()`.",
    keyPoints: [
      "Multiple `static` methods can live in one class.",
      "Use `long` for very large integers.",
      "Call methods from `main()` by name.",
      "Methods can have different return types.",
    ],
  },

  "ad-java-09": {
    intro: "The Bluth Company's reporting system needs two tools: an asset formatter and a net value calculator. Michael writes both as static methods.",
    concept: "A class can contain multiple static methods, each with its own return type and parameters. Methods can call each other and be reused.",
    example: `public class Main {
    static String assetLabel(String name) {
        return "Asset: " + name;
    }
    static int netValue(int gross, int debt) {
        return gross - debt;
    }
    public static void main(String[] args) {
        System.out.println(assetLabel("Banana Stand"));
        System.out.println(netValue(500000, 300000));
    }
}`,
    exampleOutput: "Asset: Banana Stand\n200000",
    notes: "`assetLabel()` prepends `'Asset: '`. `netValue()` subtracts debt from gross. Both called from `main()`.",
    keyPoints: [
      "Multiple `static` methods can live in one class.",
      "Each method has its own return type and parameters.",
      "Call from `main()` or from each other.",
      "Methods promote reuse and keep code clean.",
    ],
  },

  "ba-java-09": {
    intro: "Barbieland's registry needs a career formatter and a points calculator. Ken writes two static methods to handle both.",
    concept: "A class can contain multiple static methods, each with its own return type and parameters. Break logic into focused, reusable methods.",
    example: `public class Main {
    static String careerLabel(String career) {
        return "Barbie " + career;
    }
    static int totalPoints(int base, int bonus) {
        return base + bonus;
    }
    public static void main(String[] args) {
        System.out.println(careerLabel("Astronaut"));
        System.out.println(totalPoints(80, 20));
    }
}`,
    exampleOutput: "Barbie Astronaut\n100",
    notes: "`careerLabel()` prepends `'Barbie '`. `totalPoints()` sums base and bonus. Both called from `main()`.",
    keyPoints: [
      "Multiple `static` methods can live in one class.",
      "Each has its own signature and return type.",
      "Call from `main()` by name.",
      "Small methods are reusable and easy to test.",
    ],
  },

  "sc-java-09": {
    intro: "Carrie's column management system needs a title formatter and a word count estimator. She writes two static methods in the same Java class.",
    concept: "A class can contain multiple static methods, each with its own return type and parameters. Methods can be called from `main()` or from each other.",
    example: `public class Main {
    static String formatTitle(String title) {
        return "Column: " + title;
    }
    static int wordEstimate(int pages) {
        return pages * 250;
    }
    public static void main(String[] args) {
        System.out.println(formatTitle("Love in the City"));
        System.out.println(wordEstimate(4));
    }
}`,
    exampleOutput: "Column: Love in the City\n1000",
    notes: "`formatTitle()` prepends `'Column: '`. `wordEstimate()` multiplies pages by 250. Both called from `main()`.",
    keyPoints: [
      "Multiple `static` methods can live in one class.",
      "Each has its own return type: `String`, `int`, etc.",
      "Call from `main()` by name.",
      "Small methods are cleaner and more maintainable.",
    ],
  },

  "sp-java-09": {
    intro: "Tony's accounting system needs a business formatter and a net earnings calculator. Silvio writes two static methods to handle both.",
    concept: "A class can contain multiple static methods, each with its own return type and parameters. Methods promote reuse and code clarity.",
    example: `public class Main {
    static String businessLabel(String name) {
        return "Business: " + name;
    }
    static int netEarnings(int gross, int expenses) {
        return gross - expenses;
    }
    public static void main(String[] args) {
        System.out.println(businessLabel("Bada Bing"));
        System.out.println(netEarnings(80000, 30000));
    }
}`,
    exampleOutput: "Business: Bada Bing\n50000",
    notes: "`businessLabel()` builds a label. `netEarnings()` subtracts expenses from gross. Both called from `main()`.",
    keyPoints: [
      "Multiple `static` methods can live in one class.",
      "Each method has its own return type and parameters.",
      "Call from `main()` by name.",
      "Methods improve code organisation and reuse.",
    ],
  },

  // ─── Lesson 10 — StringBuilder ────────────────────────────────────────────

  "st-java-10": {
    intro: "Mike is assembling Eleven's intercepted radio message piece by piece. He uses a `StringBuilder` to build the final string efficiently without creating multiple intermediate Strings.",
    concept: "`StringBuilder` builds a String incrementally. `.append(str)` adds text. `.toString()` converts it to a regular String at the end. More efficient than concatenation in loops.",
    example: `public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        sb.append("Eleven ");
        sb.append("is ");
        sb.append("here.");
        System.out.println(sb.toString());
        System.out.println(sb.length());
    }
}`,
    exampleOutput: "Eleven is here.\n15",
    notes: "`.append()` adds each chunk. `.toString()` produces the final String. `.length()` returns the character count.",
    keyPoints: [
      "`StringBuilder sb = new StringBuilder();` — starts empty.",
      "`.append(str)` adds to the end — can be chained.",
      "`.toString()` converts to a regular `String`.",
      "Use `StringBuilder` in loops to avoid creating many String objects.",
    ],
  },

  "sv-java-10": {
    intro: "The MDR system assembles formatted batch reports by appending chunks into a single string. Mark uses `StringBuilder` to build the report efficiently.",
    concept: "`StringBuilder` builds a String incrementally. `.append(str)` adds text. `.toString()` converts it to a regular String. More efficient than concatenation in loops.",
    example: `public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        sb.append("Batch: ");
        sb.append("MDR-04 ");
        sb.append("Status: refined");
        System.out.println(sb.toString());
    }
}`,
    exampleOutput: "Batch: MDR-04 Status: refined",
    notes: "Three `.append()` calls build the full report string. `.toString()` converts the `StringBuilder` to a `String` for printing.",
    keyPoints: [
      "`StringBuilder` starts empty: `new StringBuilder()`.",
      "`.append(str)` adds text to the end.",
      "`.toString()` converts to a `String`.",
      "More efficient than `+` concatenation in loops.",
    ],
  },

  "bb-java-10": {
    intro: "The batch report needs to combine the chemist's name, purity, and location into one label. Walt uses `StringBuilder` to assemble it efficiently.",
    concept: "`StringBuilder` builds a String incrementally. `.append(str)` adds text. `.toString()` converts it to a regular String.",
    example: `public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        sb.append("Chemist: Walter | ");
        sb.append("Purity: 99% | ");
        sb.append("Location: Superlab");
        System.out.println(sb.toString());
    }
}`,
    exampleOutput: "Chemist: Walter | Purity: 99% | Location: Superlab",
    notes: "Each `.append()` adds the next chunk. `.toString()` converts the result to a printable `String`.",
    keyPoints: [
      "`new StringBuilder()` starts with an empty buffer.",
      "`.append(str)` is chainable: `sb.append(a).append(b)`.",
      "`.toString()` converts to `String`.",
      "Use `StringBuilder` in loops to avoid object overhead.",
    ],
  },

  "to-java-10": {
    intro: "Michael wants to print a formatted meeting agenda by building it piece by piece. He uses `StringBuilder` to assemble the agenda string before printing.",
    concept: "`StringBuilder` builds a String incrementally. `.append(str)` adds text. `.toString()` converts it to a regular String.",
    example: `public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        sb.append("Agenda: ");
        sb.append("Sales Review, ");
        sb.append("Birthday Announcement");
        System.out.println(sb.toString());
    }
}`,
    exampleOutput: "Agenda: Sales Review, Birthday Announcement",
    notes: "Three `.append()` calls build the agenda. `.toString()` returns the assembled string.",
    keyPoints: [
      "`new StringBuilder()` creates an empty builder.",
      "`.append(str)` adds to the end.",
      "`.toString()` converts to a regular `String`.",
      "Use `StringBuilder` instead of `+` in loops.",
    ],
  },

  "got-java-10": {
    intro: "The Grand Maester is composing a raven message by building it from parts. He uses `StringBuilder` to assemble the message efficiently.",
    concept: "`StringBuilder` builds a String incrementally. `.append(str)` adds text. `.toString()` converts it to a regular String.",
    example: `public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        sb.append("From: Winterfell | ");
        sb.append("To: King's Landing | ");
        sb.append("Winter is Coming");
        System.out.println(sb.toString());
    }
}`,
    exampleOutput: "From: Winterfell | To: King's Landing | Winter is Coming",
    notes: "Three `.append()` calls build the raven message. `.toString()` returns the full assembled string.",
    keyPoints: [
      "`new StringBuilder()` starts empty.",
      "`.append(str)` adds to the end.",
      "`.toString()` converts to `String`.",
      "Chain appends: `sb.append(a).append(b)`.",
    ],
  },

  "mx-java-10": {
    intro: "The Oracle assembles Neo's prophecy message by combining multiple fragments. She uses `StringBuilder` for efficient string construction.",
    concept: "`StringBuilder` builds a String incrementally. `.append(str)` adds text. `.toString()` converts it to a regular String.",
    example: `public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        sb.append("He is ");
        sb.append("the One. ");
        sb.append("Make him believe it.");
        System.out.println(sb.toString());
    }
}`,
    exampleOutput: "He is the One. Make him believe it.",
    notes: "Three `.append()` calls assemble the prophecy. `.toString()` returns the complete `String`.",
    keyPoints: [
      "`new StringBuilder()` starts empty.",
      "`.append(str)` adds each fragment.",
      "`.toString()` converts to a `String`.",
      "Use `StringBuilder` in loops to avoid creating many intermediate objects.",
    ],
  },

  "rm-java-10": {
    intro: "Rick builds a multi-part portal gun status report using `StringBuilder`. He appends the charge level, target dimension, and fluid status.",
    concept: "`StringBuilder` builds a String incrementally. `.append(str)` adds text. `.toString()` converts it to a regular String.",
    example: `public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        sb.append("Charge: 100% | ");
        sb.append("Target: C-137 | ");
        sb.append("Fluid: OK");
        System.out.println(sb.toString());
    }
}`,
    exampleOutput: "Charge: 100% | Target: C-137 | Fluid: OK",
    notes: "Three `.append()` calls build the status report. `.toString()` converts the result to a printable `String`.",
    keyPoints: [
      "`new StringBuilder()` starts empty.",
      "`.append(str)` adds each chunk.",
      "`.toString()` converts to `String`.",
      "More efficient than `+` in loops.",
    ],
  },

  "sg-java-10": {
    intro: "The Front Man assembles a player status report by combining player number, game, and outcome. He uses `StringBuilder` for the task.",
    concept: "`StringBuilder` builds a String incrementally. `.append(str)` adds text. `.toString()` converts it to a regular String.",
    example: `public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        sb.append("Player: 456 | ");
        sb.append("Game: Marbles | ");
        sb.append("Result: Survived");
        System.out.println(sb.toString());
    }
}`,
    exampleOutput: "Player: 456 | Game: Marbles | Result: Survived",
    notes: "Three `.append()` calls build the report. `.toString()` converts the `StringBuilder` to a `String`.",
    keyPoints: [
      "`new StringBuilder()` starts empty.",
      "`.append(str)` adds to the end.",
      "`.toString()` returns the assembled `String`.",
      "Chain: `sb.append(a).append(b).append(c)`.",
    ],
  },

  "ad-java-10": {
    intro: "Michael assembles the Bluth Company's annual report header by combining the company name, year, and status. He uses `StringBuilder` for efficient assembly.",
    concept: "`StringBuilder` builds a String incrementally. `.append(str)` adds text. `.toString()` converts it to a regular String.",
    example: `public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        sb.append("Bluth Company | ");
        sb.append("Year: 2004 | ");
        sb.append("Status: Under Investigation");
        System.out.println(sb.toString());
    }
}`,
    exampleOutput: "Bluth Company | Year: 2004 | Status: Under Investigation",
    notes: "Three `.append()` calls build the header. `.toString()` returns the full assembled string.",
    keyPoints: [
      "`new StringBuilder()` starts empty.",
      "`.append(str)` adds to the end.",
      "`.toString()` converts to `String`.",
      "Use `StringBuilder` in loops instead of `+` concatenation.",
    ],
  },

  "ba-java-10": {
    intro: "Barbie assembles her résumé header by combining name, current career, and Barbieland location using `StringBuilder`.",
    concept: "`StringBuilder` builds a String incrementally. `.append(str)` adds text. `.toString()` converts it to a regular String.",
    example: `public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        sb.append("Name: Barbie | ");
        sb.append("Career: President | ");
        sb.append("Location: Barbieland");
        System.out.println(sb.toString());
    }
}`,
    exampleOutput: "Name: Barbie | Career: President | Location: Barbieland",
    notes: "Three `.append()` calls build the résumé header. `.toString()` returns the complete `String`.",
    keyPoints: [
      "`new StringBuilder()` starts empty.",
      "`.append(str)` adds each part.",
      "`.toString()` converts to `String`.",
      "Chain appends: `sb.append(a).append(b)`.",
    ],
  },

  "sc-java-10": {
    intro: "Carrie assembles the header for her column by combining her name, column title, and publication using `StringBuilder`.",
    concept: "`StringBuilder` builds a String incrementally. `.append(str)` adds text. `.toString()` converts it to a regular String.",
    example: `public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        sb.append("By: Carrie Bradshaw | ");
        sb.append("Column: Love in NYC | ");
        sb.append("New York Star");
        System.out.println(sb.toString());
    }
}`,
    exampleOutput: "By: Carrie Bradshaw | Column: Love in NYC | New York Star",
    notes: "Three `.append()` calls build the header. `.toString()` returns the full assembled `String`.",
    keyPoints: [
      "`new StringBuilder()` starts empty.",
      "`.append(str)` adds each fragment.",
      "`.toString()` converts to `String`.",
      "More efficient than `+` in loops.",
    ],
  },

  "sp-java-10": {
    intro: "Tony's accountant assembles the quarterly business summary by combining income, expenses, and net profit into one report line using `StringBuilder`.",
    concept: "`StringBuilder` builds a String incrementally. `.append(str)` adds text. `.toString()` converts it to a regular String.",
    example: `public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        sb.append("Income: $116,000 | ");
        sb.append("Expenses: $42,000 | ");
        sb.append("Net: $74,000");
        System.out.println(sb.toString());
    }
}`,
    exampleOutput: "Income: $116,000 | Expenses: $42,000 | Net: $74,000",
    notes: "Three `.append()` calls build the summary line. `.toString()` converts to a printable `String`.",
    keyPoints: [
      "`new StringBuilder()` starts empty.",
      "`.append(str)` adds to the end.",
      "`.toString()` converts to `String`.",
      "Use `StringBuilder` in loops to avoid creating many String objects.",
    ],
  },
};
