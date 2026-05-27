import type { Lesson } from "@/types";

export const goLessons: Record<string, Lesson> = {

  // ─── Stranger Things ──────────────────────────────────────────────────────

  "st-go-01": {
    intro: "Eleven's signal fragments arrive in separate variables. Go uses a short-hand declaration operator `:=` to infer types automatically — you don't have to spell out `string` or `int` every time.",
    concept: "In Go, `:=` declares a new variable and infers its type from the value on the right. No `var` keyword needed. `fmt.Println()` prints a value followed by a newline. Every Go file belongs to a package.",
    example: `package main

import "fmt"

func main() {
    codename := "Eleven"
    powerLevel := 10
    active := true
    fmt.Println(codename)
    fmt.Println(powerLevel)
    fmt.Println(active)
}`,
    exampleOutput: "Eleven\n10\ntrue",
    notes: "`:=` infers `string`, `int`, and `bool` from the right-hand values. `fmt.Println` prints each value on its own line.",
    keyPoints: [
      "`:=` declares and assigns in one step — Go infers the type.",
      "Use `var name type = value` when you need an explicit type declaration.",
      "`fmt.Println(value)` prints to stdout with a trailing newline.",
      "Every executable Go file must have `package main` and a `main()` function.",
    ],
  },

  "st-go-02": {
    intro: "Hopper's threat assessment needs to branch based on the number of Demogorgon sightings. Go's `if/else` blocks look familiar from other languages but have one key rule: no parentheses around the condition.",
    concept: "Go's `if` statement does not require parentheses around the condition — just the condition followed by the block in curly braces `{}`. `else if` and `else` work the same way as in most languages.",
    example: `package main

import "fmt"

func main() {
    signal := 65

    if signal >= 80 {
        fmt.Println("Strong signal")
    } else if signal >= 40 {
        fmt.Println("Weak signal")
    } else {
        fmt.Println("No signal")
    }
}`,
    exampleOutput: "Weak signal",
    notes: "65 is not ≥ 80 but is ≥ 40, so the second branch runs. Curly braces are mandatory in Go — even for single-line bodies.",
    keyPoints: [
      "No parentheses around the condition: `if x > 5 {` not `if (x > 5) {`",
      "Curly braces `{}` are always required — no optional braces.",
      "`else if` and `else` must be on the same line as the closing `}`.",
      "Go supports an init statement: `if x := compute(); x > 0 {`",
    ],
  },

  "st-go-03": {
    intro: "Hopper's threat formula needs to be encapsulated so any part of the program can call it. Go functions are declared with `func`, typed parameters, and a typed return value.",
    concept: "Go functions are declared with `func name(param type) returnType { ... }`. You must declare the types of parameters and return values explicitly. Functions without a return value use no return type (or `void` equivalent).",
    example: `package main

import "fmt"

func dangerScore(sightings int) int {
    return sightings * 5
}

func main() {
    fmt.Println(dangerScore(4))
    fmt.Println(dangerScore(9))
}`,
    exampleOutput: "20\n45",
    notes: "`func dangerScore(sightings int) int` declares a function taking one `int` and returning one `int`. Two calls with different arguments produce different results.",
    keyPoints: [
      "Function syntax: `func name(param type) returnType { return ... }`",
      "Parameter type goes after the name: `sightings int`, not `int sightings`.",
      "The return type appears after the parameter list.",
      "Go functions can return multiple values: `func f() (int, error)`",
    ],
  },

  "st-go-04": {
    intro: "The Party's walkie-talkie roster needs to grow dynamically. Go's slice is a flexible, growable list — append new members with the `append` function.",
    concept: "A Go slice is a dynamically-sized list. Declare it with `[]Type{...}`. Use `append(slice, value)` to add an element — `append` returns a new slice, so you must assign the result back. `len(slice)` gives the current count.",
    example: `package main

import "fmt"

func main() {
    party := []string{"Mike", "Dustin", "Lucas"}
    party = append(party, "Max")
    fmt.Println(len(party))
    fmt.Println(party[0])
}`,
    exampleOutput: "4\nMike",
    notes: "`append` returns a new slice with the added element — you must reassign it to `party`. `len` counts the current elements. `party[0]` accesses the first element.",
    keyPoints: [
      "Slice literal: `[]string{\"a\", \"b\", \"c\"}`",
      "`append(slice, value)` returns a new slice — always reassign: `s = append(s, v)`",
      "`len(slice)` returns the number of elements.",
      "Slices are zero-indexed: `party[0]` is the first element.",
    ],
  },

  "st-go-05": {
    intro: "The final scan of Hawkins survivors uses a `for range` loop. Go's range-based loop is the idiomatic way to iterate over slices without managing an index manually.",
    concept: "The `for _, item := range slice` loop visits every element in a slice. The first variable receives the index (use `_` to ignore it); the second receives the value. It's Go's equivalent of a for-each loop.",
    example: `package main

import "fmt"

func main() {
    threats := []int{3, 7, 2, 8, 1}
    total := 0
    for _, t := range threats {
        total += t
    }
    fmt.Println(total)
}`,
    exampleOutput: "21",
    notes: "`_` discards the index. `t` receives each element in turn. `total` accumulates the sum across all five iterations.",
    keyPoints: [
      "`for _, v := range slice` iterates every element; `_` ignores the index.",
      "Use `for i, v := range slice` when you need both index and value.",
      "Declare the accumulator outside the loop so it persists after.",
      "Go has only one loop keyword: `for`. It covers for, while, and for-each patterns.",
    ],
  },

  // ─── Severance ────────────────────────────────────────────────────────────

  "sv-go-01": {
    intro: "Every innie on the severed floor has an employee record — a name, an ID number, and a flag for whether their access is active. Go's `:=` operator creates all three variables with one clean syntax.",
    concept: "Go's short variable declaration `:=` infers the type from the assigned value. It's the most common way to declare variables inside functions. Outside functions you need `var`.",
    example: `package main

import "fmt"

func main() {
    name := "Helly R."
    employeeId := 1024
    severed := true
    fmt.Println(name)
    fmt.Println(employeeId)
    fmt.Println(severed)
}`,
    exampleOutput: "Helly R.\n1024\ntrue",
    notes: "Go infers `string`, `int`, and `bool` from the right-hand values. No type annotations required with `:=`.",
    keyPoints: [
      "`:=` declares and infers type simultaneously.",
      "Only usable inside functions — use `var` at package level.",
      "`fmt.Println` prints the value and a newline.",
      "Go is statically typed — the inferred type is fixed.",
    ],
  },

  "sv-go-02": {
    intro: "MDR workers classify numbers into bins. Go's `if/else if/else` chain implements the binning logic — clean, braces-required, no parentheses on the condition.",
    concept: "Go conditionals follow the same logic as other languages but require curly braces and forbid parentheses around conditions. The `else if` and `else` keywords must be on the same line as the previous closing brace.",
    example: `package main

import "fmt"

func main() {
    score := 72

    if score >= 90 {
        fmt.Println("High bin")
    } else if score >= 60 {
        fmt.Println("Medium bin")
    } else {
        fmt.Println("Low bin")
    }
}`,
    exampleOutput: "Medium bin",
    notes: "72 fails `>= 90` but passes `>= 60`. The second branch runs. Go's compiler will reject `} else {` on separate lines.",
    keyPoints: [
      "No parentheses on the condition: `if score >= 90 {`",
      "Curly braces are mandatory, even for one-line bodies.",
      "`else` must follow `}` on the same line: `} else {`",
      "Go supports short init statements: `if n := getValue(); n > 0 {`",
    ],
  },

  "sv-go-03": {
    intro: "The quarterly refinement calculation is always the same formula. Wrapping it in a Go function means it can be called with any score and return a consistent, testable result.",
    concept: "Go functions declare parameter types after the parameter name and list the return type after the parentheses. The function body ends with a `return` statement.",
    example: `package main

import "fmt"

func refinementScore(base int, bonus int) int {
    return base + bonus*2
}

func main() {
    fmt.Println(refinementScore(70, 10))
    fmt.Println(refinementScore(50, 15))
}`,
    exampleOutput: "90\n80",
    notes: "`refinementScore(70, 10)` returns `70 + 20 = 90`. Two parameters of the same type can be shortened: `base, bonus int`.",
    keyPoints: [
      "Function syntax: `func name(param type) returnType { return expr }`",
      "Type follows the parameter name: `base int`, not `int base`.",
      "Same-type parameters can be grouped: `func f(a, b int) int`",
      "Go requires all declared variables to be used — unused imports/variables are compile errors.",
    ],
  },

  "sv-go-04": {
    intro: "The MDR department roster is a slice of employee names. New hires are appended; the length is checked at any time. Go slices are the flexible, growable equivalent of arrays.",
    concept: "A Go slice is a dynamic list. Create one with `[]Type{...}` or `make([]Type, len)`. `append(slice, elem)` adds an element and returns the new slice. Always reassign the result.",
    example: `package main

import "fmt"

func main() {
    roster := []string{"Mark S.", "Helly R.", "Irving B."}
    roster = append(roster, "Dylan G.")
    fmt.Println(len(roster))
}`,
    exampleOutput: "4",
    notes: "`append` grows the slice by one and returns the updated version. The reassignment `roster = append(roster, ...)` is required — `append` doesn't mutate in place.",
    keyPoints: [
      "Slice literal: `[]string{\"a\", \"b\"}` — note the `[]` prefix.",
      "`append(s, v)` returns a new slice — always reassign.",
      "`len(s)` returns the current length.",
      "Access elements with `s[i]` — zero-indexed.",
    ],
  },

  "sv-go-05": {
    intro: "The refinement count for the quarter is the sum of all daily totals logged by the MDR team. A `for range` loop walks through each entry and accumulates the grand total.",
    concept: "Go's `for range` loop iterates over a slice, providing the index and value on each iteration. Use `_` to discard what you don't need. An accumulator pattern sums values across iterations.",
    example: `package main

import "fmt"

func main() {
    daily := []int{12, 8, 15, 10, 9}
    sum := 0
    for _, count := range daily {
        sum += count
    }
    fmt.Println(sum)
}`,
    exampleOutput: "54",
    notes: "`sum` starts at 0. Each iteration assigns the next slice element to `count` and adds it to `sum`. After the loop, `sum` is `12+8+15+10+9 = 54`.",
    keyPoints: [
      "`for _, v := range slice` iterates every element.",
      "Declare the accumulator before the loop.",
      "`sum += count` is shorthand for `sum = sum + count`.",
      "Go has only the `for` keyword — it handles all loop types.",
    ],
  },

  // ─── Breaking Bad ─────────────────────────────────────────────────────────

  "bb-go-01": {
    intro: "Walt's cook log tracks each batch's product name, purity percentage, and batch size. Go's `:=` lets him declare all three in clear, type-inferred lines without boilerplate.",
    concept: "Go uses type inference heavily. `:=` determines the type from the value: a quoted string becomes `string`, a whole number becomes `int`, a decimal becomes `float64`.",
    example: `package main

import "fmt"

func main() {
    product := "Blue Sky"
    purity := 99.1
    batchSize := 500
    fmt.Println(product)
    fmt.Println(purity)
    fmt.Println(batchSize)
}`,
    exampleOutput: "Blue Sky\n99.1\n500",
    notes: "Go infers `string` for `product`, `float64` for `purity`, and `int` for `batchSize`. Decimal literals default to `float64` in Go.",
    keyPoints: [
      "Decimal literals infer as `float64`, not `float32`.",
      "Integer literals infer as `int`.",
      "String literals infer as `string`.",
      "`fmt.Println` handles all types.",
    ],
  },

  "bb-go-02": {
    intro: "Every batch gets a grade: premium (≥99%), standard (≥90%), or reject. Go's if/else chain maps a purity value to its grade label — clean, no-parentheses style.",
    concept: "Go's `if/else if/else` evaluates conditions top-to-bottom. The first `true` condition runs its block and all others are skipped. Curly braces are mandatory; parentheses around conditions are forbidden.",
    example: `package main

import "fmt"

func main() {
    purity := 94.5

    if purity >= 99 {
        fmt.Println("Premium")
    } else if purity >= 90 {
        fmt.Println("Standard")
    } else {
        fmt.Println("Reject")
    }
}`,
    exampleOutput: "Standard",
    notes: "94.5 fails `>= 99` but passes `>= 90`. The second branch runs. Once a condition matches, the rest of the chain is skipped entirely.",
    keyPoints: [
      "No parentheses: `if purity >= 99 {` — the `{` must be on the same line.",
      "Conditions are checked top-to-bottom; the first match wins.",
      "`else if` and `else` must share the line with the preceding `}`.",
      "All bodies require curly braces, even single statements.",
    ],
  },

  "bb-go-03": {
    intro: "Jesse needs to calculate the payout for any batch size and rate. A Go function encapsulates the formula — same result every time for the same input, reusable for any cook.",
    concept: "Go functions declare parameter types after each parameter name and the return type after the closing parenthesis. The `return` statement sends the result back to the caller.",
    example: `package main

import "fmt"

func batchPayout(grams int, ratePerGram float64) float64 {
    return float64(grams) * ratePerGram
}

func main() {
    fmt.Println(batchPayout(500, 12.50))
}`,
    exampleOutput: "6250",
    notes: "`float64(grams)` converts the `int` to `float64` before multiplying — Go requires explicit type conversions; it won't coerce automatically.",
    keyPoints: [
      "Parameter type goes after the name: `grams int`.",
      "Return type follows the parentheses: `func f(x int) float64`.",
      "Go requires explicit type conversions — `float64(intVar)` not just `intVar`.",
      "All function parameters must be used, or the compiler rejects the code.",
    ],
  },

  "bb-go-04": {
    intro: "The distribution network roster is a slice of territory names. New territories are appended as the operation expands. Go's `append` keeps the slice growing dynamically.",
    concept: "Go slices are dynamically-sized. `append(slice, value)` returns a new slice containing the original elements plus the new one. You must reassign the result — `append` never mutates in place.",
    example: `package main

import "fmt"

func main() {
    territories := []string{"Albuquerque", "Santa Fe", "El Paso"}
    territories = append(territories, "Phoenix")
    fmt.Println(len(territories))
    fmt.Println(territories[3])
}`,
    exampleOutput: "4\nPhoenix",
    notes: "After the append, `territories` has 4 elements. `territories[3]` is the newly added `\"Phoenix\"` at index 3.",
    keyPoints: [
      "Slice literal: `[]string{\"a\", \"b\"}`",
      "`append` returns the extended slice — always reassign.",
      "`len(s)` counts elements.",
      "Index 0 is first; index `len(s)-1` is last.",
    ],
  },

  "bb-go-05": {
    intro: "Walt wants the maximum purity across all batches in a cook run. A `for range` loop walks every purity value and tracks the highest one — a classic maximum-finding pattern in Go.",
    concept: "The maximum-finding pattern: initialise `max` to the first element, then loop and update `max` whenever a larger value is found. Use `for _, v := range slice` to iterate.",
    example: `package main

import "fmt"

func main() {
    purities := []float64{91.2, 97.8, 88.5, 99.1, 93.4}
    max := purities[0]
    for _, p := range purities {
        if p > max {
            max = p
        }
    }
    fmt.Println(max)
}`,
    exampleOutput: "99.1",
    notes: "`max` starts at `purities[0]`. Each element is compared — if larger than `max`, it becomes the new `max`. After the loop, `max` holds the peak purity.",
    keyPoints: [
      "Initialise `max` to the first element, not to zero.",
      "`for _, p := range purities` visits every element.",
      "Update `max` only when `p > max`.",
      "The same logic finds the minimum — just flip the comparison to `<`.",
    ],
  },

  // ─── The Office ───────────────────────────────────────────────────────────

  "to-go-01": {
    intro: "Dunder Mifflin's employee system needs clean, typed records. Go's `:=` short declaration creates variables with minimal syntax — the compiler figures out the type.",
    concept: "`:=` is Go's most-used variable declaration. It declares a new variable, assigns a value, and infers the type — all in one line. Use it inside functions for clean, readable code.",
    example: `package main

import "fmt"

func main() {
    name := "Dwight Schrute"
    salesRank := 1
    employed := true
    fmt.Println(name)
    fmt.Println(salesRank)
    fmt.Println(employed)
}`,
    exampleOutput: "Dwight Schrute\n1\ntrue",
    notes: "Three variables, three types inferred automatically. `:=` works only inside function bodies.",
    keyPoints: [
      "`:=` inside a function — `var` at package level.",
      "Go infers `string`, `int`, `bool`, and `float64` from literal values.",
      "Variables declared with `:=` must be used — unused variables are compile errors.",
      "`fmt.Println` handles any type.",
    ],
  },

  "to-go-02": {
    intro: "The performance review system categorises employees. Go's if/else chain decides the category based on the sales score — braces required, parentheses forbidden.",
    concept: "Go's conditional syntax omits parentheses around conditions. Curly braces are always required. The `else` clause must follow the closing brace of the `if` body on the same line.",
    example: `package main

import "fmt"

func main() {
    salesScore := 78

    if salesScore >= 90 {
        fmt.Println("Regional Manager")
    } else if salesScore >= 65 {
        fmt.Println("Assistant to the Manager")
    } else {
        fmt.Println("General Staff")
    }
}`,
    exampleOutput: "Assistant to the Manager",
    notes: "78 falls in the 65–89 range so the second branch runs. Go's `else` must share a line with the `}` that closes the previous block.",
    keyPoints: [
      "Condition without parentheses: `if salesScore >= 90 {`",
      "Opening `{` must be on the same line as `if`/`else`.",
      "`} else if` and `} else` on the same line as `}`.",
      "All blocks require `{}` even for one-liners.",
    ],
  },

  "to-go-03": {
    intro: "The sales commission calculator is the same formula for every rep. Dwight encapsulates it in a Go function so HR can call it for any units-sold number and get a consistent result.",
    concept: "Go functions are declared with explicit parameter types and a return type. The compiler enforces that the returned value matches the declared type.",
    example: `package main

import "fmt"

func commission(units int) float64 {
    return float64(units) * 4.50
}

func main() {
    fmt.Println(commission(100))
    fmt.Println(commission(250))
}`,
    exampleOutput: "450\n1125",
    notes: "`float64(units)` explicitly converts `int` to `float64` — Go doesn't do this automatically. The return type `float64` must match the expression returned.",
    keyPoints: [
      "Parameters: `func name(param type) returnType`.",
      "Go doesn't implicitly convert numeric types — be explicit.",
      "Return type is after the parameter list.",
      "Multiple return types are possible: `func f() (int, error)`.",
    ],
  },

  "to-go-04": {
    intro: "The Party Planning Committee grows as volunteers sign up. A Go slice starts with the founding members and grows with `append` as new names are added.",
    concept: "Go slices are reference types that grow dynamically. `append` adds elements and returns the updated slice. The result must be assigned back to the original variable.",
    example: `package main

import "fmt"

func main() {
    committee := []string{"Phyllis", "Angela", "Oscar"}
    committee = append(committee, "Pam")
    committee = append(committee, "Meredith")
    fmt.Println(len(committee))
}`,
    exampleOutput: "5",
    notes: "Two consecutive `append` calls add two members. After both, `len(committee)` is 5.",
    keyPoints: [
      "Slice literal: `[]string{\"a\", \"b\"}`.",
      "Chain appends by reassigning: `s = append(s, v)`.",
      "`len(s)` reflects the current length after each append.",
      "Slices can grow without manually managing capacity.",
    ],
  },

  "to-go-05": {
    intro: "Michael wants to know the total number of sales calls made this quarter. A `for range` loop sums up each week's call count from a slice of weekly totals.",
    concept: "The accumulator loop is a fundamental Go pattern: initialise a sum to zero, range over the slice, and add each element to the sum. The result is available after the loop ends.",
    example: `package main

import "fmt"

func main() {
    weeklyCalls := []int{14, 22, 18, 29, 11}
    total := 0
    for _, calls := range weeklyCalls {
        total += calls
    }
    fmt.Println(total)
}`,
    exampleOutput: "94",
    notes: "`total` accumulates across 5 iterations: `14+22+18+29+11 = 94`. The `_` discards the index since we only need the value.",
    keyPoints: [
      "`for _, v := range slice` iterates every element, discarding the index.",
      "Declare the accumulator before the loop.",
      "`+=` updates the running total on each pass.",
      "Print after the loop to get the final result.",
    ],
  },

  // ─── Game of Thrones ──────────────────────────────────────────────────────

  "got-go-01": {
    intro: "A raven arrives at Castle Black with details of an army's strength. Jon Snow's records system needs variables for the house name, army size, and whether they've pledged allegiance — Go's `:=` handles all three.",
    concept: "`:=` in Go creates a new variable and infers its type. Quoted text becomes `string`. A whole number becomes `int`. `true`/`false` becomes `bool`. All inside a function body.",
    example: `package main

import "fmt"

func main() {
    house := "Stark"
    armySize := 8000
    pledged := true
    fmt.Println(house)
    fmt.Println(armySize)
    fmt.Println(pledged)
}`,
    exampleOutput: "Stark\n8000\ntrue",
    notes: "Go infers the types from the right-hand-side values. The program compiles correctly and prints three lines.",
    keyPoints: [
      "`:=` is the idiomatic way to declare variables in Go functions.",
      "Go is strongly typed — you can't assign a string to an int variable later.",
      "`fmt.Println` prints any value.",
      "All declared variables must be used — the Go compiler enforces this.",
    ],
  },

  "got-go-02": {
    intro: "Houses are classified by their army size: massive, capable, or minor. Go's if/else chain maps the size to the correct tier label — no parentheses, braces required.",
    concept: "Go's `if/else if/else` chain is the standard multi-way branch. Curly braces are always required. Parentheses around conditions are a syntax error.",
    example: `package main

import "fmt"

func main() {
    armySize := 6000

    if armySize >= 10000 {
        fmt.Println("Massive army")
    } else if armySize >= 4000 {
        fmt.Println("Capable army")
    } else {
        fmt.Println("Minor force")
    }
}`,
    exampleOutput: "Capable army",
    notes: "6000 is not ≥ 10000 but is ≥ 4000. The second branch executes. All other branches are skipped.",
    keyPoints: [
      "Condition syntax: `if armySize >= 10000 {` — no `()`.",
      "Only the first matching branch runs.",
      "`else if` and `else` must be on the same line as `}`.",
      "Go's compiler rejects unchecked variable declarations.",
    ],
  },

  "got-go-03": {
    intro: "The dragonglass weapon forger uses a fixed formula to rate each weapon. A Go function encapsulates the formula so it can be called for any shard weight.",
    concept: "Go functions explicitly declare the types of parameters and return values. The type follows the parameter name. Call the function with an argument of the correct type.",
    example: `package main

import "fmt"

func weaponRating(weight int) int {
    return weight * 6
}

func main() {
    fmt.Println(weaponRating(12))
    fmt.Println(weaponRating(20))
}`,
    exampleOutput: "72\n120",
    notes: "`weaponRating` takes an `int` and returns an `int`. Two calls demonstrate the formula with different inputs.",
    keyPoints: [
      "Function signature: `func name(param type) returnType`.",
      "Return type is declared after the parameter list.",
      "`return expr` must produce the declared return type.",
      "Functions can be called from `main` or from other functions.",
    ],
  },

  "got-go-04": {
    intro: "The Night's Watch recruits are added to a slice as they swear their oath. A Go slice of names grows with each new brother — `append` is the tool for joining the Watch.",
    concept: "A Go slice is a dynamically-sized list. Use a slice literal to initialise, then `append` to extend. The result of `append` must always be reassigned to the slice variable.",
    example: `package main

import "fmt"

func main() {
    brothers := []string{"Jon", "Sam", "Grenn"}
    brothers = append(brothers, "Pyp")
    fmt.Println(len(brothers))
    fmt.Println(brothers[0])
}`,
    exampleOutput: "4\nJon",
    notes: "After appending `\"Pyp\"`, the slice has 4 elements. `brothers[0]` is still `\"Jon\"` — existing elements aren't affected by append.",
    keyPoints: [
      "Slice literal: `[]string{\"a\", \"b\"}`.",
      "`s = append(s, v)` adds an element and returns the new slice.",
      "`len(s)` gives the current count.",
      "Slices are zero-indexed: `s[0]` is the first element.",
    ],
  },

  "got-go-05": {
    intro: "The Lord Commander needs the total White Walker sighting count across all watch posts. A `for range` loop sums up each post's count from the patrol slice.",
    concept: "`for _, v := range slice` iterates every element. Use an accumulator variable declared before the loop to compute a running total. Read the result after the loop completes.",
    example: `package main

import "fmt"

func main() {
    sightings := []int{3, 7, 2, 9, 4}
    total := 0
    for _, s := range sightings {
        total += s
    }
    fmt.Println(total)
}`,
    exampleOutput: "25",
    notes: "`3+7+2+9+4 = 25`. The `for range` loop visits every element and `total` grows on each pass.",
    keyPoints: [
      "`for _, v := range s` — `_` ignores the index.",
      "Accumulator declared before the loop persists after it.",
      "`total += s` is shorthand for `total = total + s`.",
      "Use `for i, v := range s` when you need the index too.",
    ],
  },

  // ─── The Matrix ───────────────────────────────────────────────────────────

  "mx-go-01": {
    intro: "Tank is logging anomaly details into Go variables: a codename string, a threat score, and an active flag. Go's `:=` creates all three in one clean syntax.",
    concept: "`:=` infers the type from the assigned value. It's idiomatic Go for variable declaration inside functions. The compiler enforces that declared variables are used.",
    example: `package main

import "fmt"

func main() {
    codename := "Smith"
    threatScore := 10
    active := true
    fmt.Println(codename)
    fmt.Println(threatScore)
    fmt.Println(active)
}`,
    exampleOutput: "Smith\n10\ntrue",
    notes: "Go infers `string`, `int`, and `bool`. Any of these variables left unused would be a compile error in Go.",
    keyPoints: [
      "`:=` = declare + assign + infer type.",
      "Only valid inside function bodies.",
      "Unused variables are compile errors — a Go safety feature.",
      "`fmt.Println` handles printing of any basic type.",
    ],
  },

  "mx-go-02": {
    intro: "Connection quality inside the Matrix needs classification: optimal, degraded, or lost. Go's if/else chain routes the connection speed value to the correct status label.",
    concept: "Go's conditional blocks have no optional syntax — curly braces are always required, conditions never use parentheses. `else` and `else if` must appear on the closing `}` line.",
    example: `package main

import "fmt"

func main() {
    connectionSpeed := 55

    if connectionSpeed >= 80 {
        fmt.Println("Optimal")
    } else if connectionSpeed >= 40 {
        fmt.Println("Degraded")
    } else {
        fmt.Println("Lost")
    }
}`,
    exampleOutput: "Degraded",
    notes: "55 passes `>= 40` but not `>= 80`. The second branch prints `\"Degraded\"`.",
    keyPoints: [
      "No `()` around conditions.",
      "Opening `{` must be on the `if` line.",
      "Closing `}` must share a line with `else`.",
      "All branches require `{}`.",
    ],
  },

  "mx-go-03": {
    intro: "Neo's dodge training rating is a precise formula based on his speed multiplier. A Go function encapsulates the calculation so Morpheus can call it for any training level.",
    concept: "Go function parameters and return types must be declared explicitly. Call the function with a matching argument type. The return value can be used directly in `fmt.Println`.",
    example: `package main

import "fmt"

func dodgeRating(speed int) int {
    return speed * 9
}

func main() {
    fmt.Println(dodgeRating(7))
    fmt.Println(dodgeRating(11))
}`,
    exampleOutput: "63\n99",
    notes: "`dodgeRating(7)` returns `63`; `dodgeRating(11)` returns `99`. The function is called twice — Go doesn't restrict how many times a function is called.",
    keyPoints: [
      "Parameter type goes after the name: `speed int`.",
      "Return type follows the `()`: `func f(x int) int`.",
      "`return` ends the function and delivers the result.",
      "Calling a function inside `fmt.Println(...)` is valid.",
    ],
  },

  "mx-go-04": {
    intro: "Tank is building the crew manifest for the next run into the Matrix. A Go slice of operative names grows as more are cleared for deployment — `append` extends the list.",
    concept: "Go slices grow with `append`. The function returns a new slice with the element added. Always assign the result back. `len` gives the current size.",
    example: `package main

import "fmt"

func main() {
    operatives := []string{"Morpheus", "Trinity", "Tank"}
    operatives = append(operatives, "Neo")
    fmt.Println(len(operatives))
    fmt.Println(operatives[3])
}`,
    exampleOutput: "4\nNeo",
    notes: "`Neo` is appended at index 3 (the fourth position). `len` updates to 4. Accessing `operatives[3]` retrieves the newly added element.",
    keyPoints: [
      "Slice literal: `[]string{\"a\", \"b\"}`.",
      "`s = append(s, v)` adds to the end.",
      "`len(s)` counts elements.",
      "Index starts at 0 — new element is at `len-1`.",
    ],
  },

  "mx-go-05": {
    intro: "The anomaly scanner returns threat readings from every node. Neo needs the total threat load across all nodes — a `for range` loop accumulates the sum.",
    concept: "`for _, v := range slice` visits every element without manual index management. Paired with an accumulator, it sums, counts, or analyses any slice.",
    example: `package main

import "fmt"

func main() {
    readings := []int{12, 25, 8, 31, 19}
    total := 0
    for _, r := range readings {
        total += r
    }
    fmt.Println(total)
}`,
    exampleOutput: "95",
    notes: "`12+25+8+31+19 = 95`. Each pass adds the current reading to `total`.",
    keyPoints: [
      "`_` discards the loop index.",
      "Loop variable `r` is a copy — modifying it doesn't change the slice.",
      "Declare accumulator before the loop, read it after.",
      "`for i, v := range s` gives both index and value.",
    ],
  },

  // ─── Rick and Morty ───────────────────────────────────────────────────────

  "rm-go-01": {
    intro: "Morty needs to log dimension details before Rick lets him operate the portal gun. Go's `:=` creates the dimension ID, danger rating, and visited flag in clean, minimal syntax.",
    concept: "Go's `:=` short declaration is the primary way to create variables inside functions. It infers type from the value, so you don't need to write `string`, `int`, or `bool` explicitly.",
    example: `package main

import "fmt"

func main() {
    dimensionId := "C-137"
    dangerLevel := 3
    visited := true
    fmt.Println(dimensionId)
    fmt.Println(dangerLevel)
    fmt.Println(visited)
}`,
    exampleOutput: "C-137\n3\ntrue",
    notes: "`\"C-137\"` → `string`, `3` → `int`, `true` → `bool`. All three types are inferred automatically.",
    keyPoints: [
      "`:=` inside a function body — no `var` needed.",
      "Go infers types from right-hand-side values.",
      "All declared variables must be used.",
      "`fmt.Println` prints value + newline.",
    ],
  },

  "rm-go-02": {
    intro: "Rick classifies each dimension before jumping in. Safe, risky, and lethal are the three tiers — a Go if/else chain maps the danger level to the right label.",
    concept: "Go conditionals require curly braces and forbid parentheses around the condition. `else` must be on the same line as the closing `}` of the previous block.",
    example: `package main

import "fmt"

func main() {
    dangerLevel := 6

    if dangerLevel >= 9 {
        fmt.Println("Lethal — abort")
    } else if dangerLevel >= 5 {
        fmt.Println("Risky — proceed with care")
    } else {
        fmt.Println("Safe to enter")
    }
}`,
    exampleOutput: "Risky — proceed with care",
    notes: "6 is in the 5–8 range, so the second branch runs. Go's compiler will reject `} else {` if `else` is on its own line.",
    keyPoints: [
      "Condition without `()`: `if dangerLevel >= 9 {`",
      "`else` on the same line as `}`: `} else if ...`",
      "Every block needs `{}`.",
      "Conditions are evaluated top-to-bottom; first match wins.",
    ],
  },

  "rm-go-03": {
    intro: "Portal gun charge depletes by a set amount per jump. Rick's formula needs a function — call it with any jump count and get the remaining charge instantly.",
    concept: "Go functions use explicit types for parameters and return values. Type follows the parameter name. The return type follows the parentheses. `return` delivers the result.",
    example: `package main

import "fmt"

func chargeLeft(jumps int) int {
    return 100 - jumps*8
}

func main() {
    fmt.Println(chargeLeft(5))
    fmt.Println(chargeLeft(10))
}`,
    exampleOutput: "60\n20",
    notes: "`chargeLeft(5)` returns `100 - 40 = 60`. `chargeLeft(10)` returns `100 - 80 = 20`. One function, two calls.",
    keyPoints: [
      "Signature: `func name(param type) returnType { return expr }`",
      "Go multiplication has higher precedence than subtraction.",
      "Return type must match what you actually return.",
      "Call from `main` or any other function.",
    ],
  },

  "rm-go-04": {
    intro: "Rick's dimensional travel log is a slice of visited dimension IDs. New dimensions are added with `append` as the adventure continues.",
    concept: "Slices in Go are reference types that grow dynamically with `append`. Always reassign the result of `append` to the original slice variable.",
    example: `package main

import "fmt"

func main() {
    visited := []string{"C-137", "J-22", "K-83"}
    visited = append(visited, "M-99")
    fmt.Println(len(visited))
    fmt.Println(visited[3])
}`,
    exampleOutput: "4\nM-99",
    notes: "`M-99` is added at index 3. `len` updates to 4. The previously existing elements remain at their original indexes.",
    keyPoints: [
      "Slice literal: `[]string{...}`.",
      "`append` returns the new slice — must be reassigned.",
      "`len(s)` = number of elements.",
      "New element is always at index `len(s)-1` after append.",
    ],
  },

  "rm-go-05": {
    intro: "Rick wants to know the total interdimensional distance travelled across all portal jumps. A `for range` loop accumulates all the jump distances from a slice.",
    concept: "The accumulator loop is fundamental Go: start at zero, range over the slice, and add each element. The final sum lives in the accumulator after the loop.",
    example: `package main

import "fmt"

func main() {
    jumpDistances := []int{42, 17, 83, 29, 55}
    total := 0
    for _, d := range jumpDistances {
        total += d
    }
    fmt.Println(total)
}`,
    exampleOutput: "226",
    notes: "`42+17+83+29+55 = 226`. Go's `for range` handles the iteration; `total += d` builds the sum.",
    keyPoints: [
      "`for _, v := range s` — `_` ignores the index.",
      "Accumulator initialised to 0 before the loop.",
      "`total += d` is shorthand for `total = total + d`.",
      "Result read after the loop ends.",
    ],
  },

  // ─── Squid Game ───────────────────────────────────────────────────────────

  "sg-go-01": {
    intro: "Player registration captures a number, a name, and their debt amount. Go's `:=` creates all three cleanly, with the compiler handling type inference.",
    concept: "`:=` is the shorthand declaration syntax in Go. It declares the variable, assigns the initial value, and infers the type from what's on the right side — all in one line.",
    example: `package main

import "fmt"

func main() {
    playerNumber := 456
    playerName := "Seong Gi-hun"
    debt := 160000000
    fmt.Println(playerNumber)
    fmt.Println(playerName)
    fmt.Println(debt)
}`,
    exampleOutput: "456\nSeong Gi-hun\n160000000",
    notes: "Three variables, three inferred types: `int`, `string`, `int`. All are required to be used in Go — unused variables are compile errors.",
    keyPoints: [
      "`:=` declares, assigns, and infers type in one step.",
      "Only inside functions — `var` for package-level declarations.",
      "Unused variables cause compile errors.",
      "`fmt.Println` handles any printable type.",
    ],
  },

  "sg-go-02": {
    intro: "The game phase is determined by how many players remain. A Go if/else chain maps the player count to the game phase label — no parentheses, mandatory braces.",
    concept: "Go's `if/else if/else` evaluates top-to-bottom, executes the first matching block, and skips the rest. Braces are mandatory; parentheses are forbidden.",
    example: `package main

import "fmt"

func main() {
    players := 82

    if players > 200 {
        fmt.Println("Opening phase")
    } else if players > 50 {
        fmt.Println("Mid-game phase")
    } else {
        fmt.Println("Final phase")
    }
}`,
    exampleOutput: "Mid-game phase",
    notes: "82 passes `> 50` but not `> 200`. The second branch prints `\"Mid-game phase\"`.",
    keyPoints: [
      "No `()` around the condition.",
      "Opening `{` on the same line as `if`.",
      "`} else if` on the same line as the preceding `}`.",
      "All block bodies require `{}`.",
    ],
  },

  "sg-go-03": {
    intro: "The prize pool calculation is consistent: multiply eliminations by the prize per player. A Go function encapsulates this formula for reuse across all game phases.",
    concept: "Go functions explicitly type their parameters and return values. This makes function contracts clear at a glance — the caller knows exactly what type to pass and what type they'll get back.",
    example: `package main

import "fmt"

func prizePool(eliminations int) int {
    return eliminations * 100000000
}

func main() {
    fmt.Println(prizePool(10))
    fmt.Println(prizePool(455))
}`,
    exampleOutput: "1000000000\n45500000000",
    notes: "`prizePool(10)` returns `10 * 100000000 = 1000000000`. Note: Go's `int` is 64-bit on modern systems, so large values are fine.",
    keyPoints: [
      "Parameter: `eliminations int` (name then type).",
      "Return type after `()`: `func f(x int) int`.",
      "`return` exits with the value.",
      "Go `int` is 64-bit on 64-bit systems — handles large numbers.",
    ],
  },

  "sg-go-04": {
    intro: "Guard assignments fill up as more shapes are assigned to posts. A Go slice of guard IDs grows with `append` as new guards are posted.",
    concept: "Go slices are flexible lists. Initialise with a literal, grow with `append`. The `append` function returns a new slice — assign it back. Use `len` to count elements.",
    example: `package main

import "fmt"

func main() {
    guards := []string{"Triangle-01", "Circle-07", "Square-12"}
    guards = append(guards, "Triangle-22")
    fmt.Println(len(guards))
    fmt.Println(guards[3])
}`,
    exampleOutput: "4\nTriangle-22",
    notes: "After appending, there are 4 guards. `guards[3]` retrieves the newly added element.",
    keyPoints: [
      "Slice literal: `[]string{\"a\", \"b\"}`.",
      "`guards = append(guards, v)` extends the slice.",
      "`len(guards)` reflects the current count.",
      "New element is at index `len(guards)-1`.",
    ],
  },

  "sg-go-05": {
    intro: "The glass bridge eliminated players round by round. A `for range` loop sums all the per-round elimination counts to give the total number of players who didn't make it.",
    concept: "Summing a slice with `for range` is a cornerstone Go pattern. Range gives you the element on each pass. The accumulator collects the running total outside the loop.",
    example: `package main

import "fmt"

func main() {
    eliminations := []int{4, 7, 3, 9, 2}
    total := 0
    for _, e := range eliminations {
        total += e
    }
    fmt.Println(total)
}`,
    exampleOutput: "25",
    notes: "`4+7+3+9+2 = 25`. Go's for-range handles iteration cleanly with no index management required.",
    keyPoints: [
      "`for _, v := range slice` iterates every element.",
      "Declare accumulator (`total := 0`) before the loop.",
      "`total += e` builds the sum on each pass.",
      "Print after the loop — not inside — for the final result.",
    ],
  },
};
