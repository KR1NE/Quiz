// ComProg1 Week 6: Control Flow 1 (Selection)
// Test 1: Multiple Choice (20 Questions) - Items 1-20
// Test 2: Identification (20 Questions) - Items 21-40

// ==========================================
// TEST 1: MULTIPLE CHOICE (20 Questions)
// ==========================================
const comprog1Week6Test1 = [
    // Three ways a program flows
    {
        type: "multiple-choice",
        question: "What are the three ways a program can flow?",
        options: [
            "Sequence, selection and repetition",
            "Input, process and output",
            "Compile, link and run",
            "Declaration, assignment and initialization"
        ],
        answer: "Sequence, selection and repetition",
        explanation: "Control flow answers the question what happens next, and there are only these three answers. Input-process-output describes what a program does, not the order its statements run in."
    },
    {
        type: "multiple-choice",
        question: "Which control flow structure chooses a path based on a condition?",
        options: ["Selection", "Sequence", "Repetition", "Declaration"],
        answer: "Selection",
        explanation: "Selection is the if family, where a condition decides which block runs. Sequence just runs one step after another, and repetition repeats steps while a condition holds."
    },

    // Boolean conditions
    {
        type: "multiple-choice",
        question: "Which of these is the complete set of relational operators?",
        options: [
            "==  !=  <  >  <=  >=",
            "&&  ||  !",
            "+  -  *  /  %",
            "=  +=  -=  *=  /="
        ],
        answer: "==  !=  <  >  <=  >=",
        explanation: "Relational operators compare two values and produce true or false. The second set is the logical operators, which combine conditions rather than compare values."
    },
    {
        type: "multiple-choice",
        question: "Which of these is the complete set of logical operators?",
        options: [
            "&&  ||  !",
            "==  !=  <  >",
            "+  -  *  /",
            "++  --  %"
        ],
        answer: "&&  ||  !",
        explanation: "AND, OR and NOT join or reverse conditions that already have a true or false value. The == and < family compares values instead, which is a different job."
    },
    {
        type: "multiple-choice",
        question: "A condition evaluates to true or false. How does cout print those values by default?",
        options: ["As 1 and 0", "As true and false", "As T and F", "As yes and no"],
        answer: "As 1 and 0",
        explanation: "By default C++ prints a bool as 1 for true and 0 for false. Printing the words true and false requires the boolalpha manipulator."
    },
    {
        type: "multiple-choice",
        question: "Given:\n\nint x = 10;\nint y = 5;\n\nWhat does cout << (x > y); display?",
        options: ["1", "0", "true", "10"],
        answer: "1",
        explanation: "10 is greater than 5, so the condition is true and true prints as 1. What appears is the result of the comparison, not either of the numbers being compared."
    },
    {
        type: "multiple-choice",
        question: "Given:\n\nint x = 10;\nint y = 5;\n\nWhat does cout << (x > 5 && y < 10); display?",
        options: ["1", "0", "5", "15"],
        answer: "1",
        explanation: "Both sides are true, and && needs both sides to be true, so the whole condition is true and prints as 1. A single false side would have made the result 0."
    },
    {
        type: "multiple-choice",
        question: "Given int x = 10; what does cout << !(x == 10); display?",
        options: ["0", "1", "10", "true"],
        answer: "0",
        explanation: "x == 10 is true, and ! reverses it to false, which prints as 0. The exclamation mark always flips the result of the condition it sits in front of."
    },

    // One-way selection: if
    {
        type: "multiple-choice",
        question: "When should a one-way if statement be used?",
        options: [
            "When an action should happen only when a condition is true",
            "When exactly one of two paths must happen",
            "When one value must be compared against several exact cases",
            "When a block of code must repeat while a condition holds"
        ],
        answer: "When an action should happen only when a condition is true",
        explanation: "A plain if has no alternative path, so a false condition simply skips the block. Needing an alternative path is what calls for if-else instead."
    },
    {
        type: "multiple-choice",
        question: "What does this code display if the user enters 65?\n\nint score;\ncin >> score;\nif (score >= 72)\n{\n    cout << \"Passed\";\n}",
        options: [
            "Nothing is displayed",
            "Passed",
            "Failed",
            "65"
        ],
        answer: "Nothing is displayed",
        explanation: "65 is not at least 72, so the condition is false and the whole block is skipped. A one-way if has no else, so nothing is printed in its place."
    },
    {
        type: "multiple-choice",
        question: "Why is writing if (score = 72) a mistake?",
        options: [
            "A single = assigns 72 to score instead of comparing it",
            "A single = compares but ignores the value of score",
            "A single = is not allowed anywhere inside an if statement",
            "A single = compares the two values as text instead of as numbers"
        ],
        answer: "A single = assigns 72 to score instead of comparing it",
        explanation: "The assignment quietly changes score, and the if then tests the value that was just assigned. Comparison needs the double equals, ==."
    },
    {
        type: "multiple-choice",
        question: "What goes wrong here?\n\nif (score >= 72);\n{\n    cout << \"Passed\";\n}",
        options: [
            "The semicolon ends the if, so Passed is printed no matter what score is",
            "The semicolon is required, so the code is correct as written",
            "The program will not compile because of the semicolon",
            "The block is skipped no matter what score is"
        ],
        answer: "The semicolon ends the if, so Passed is printed no matter what score is",
        explanation: "The semicolon becomes the empty body of the if, leaving the braces as an ordinary block that always runs. It compiles cleanly, which is exactly what makes this error hard to spot."
    },

    // Two-way selection: if-else
    {
        type: "multiple-choice",
        question: "When should if-else be used instead of a plain if?",
        options: [
            "When exactly one of two paths must happen",
            "When an action happens only if a condition is true",
            "When a condition must be tested over and over",
            "When several exact values must be compared one at a time"
        ],
        answer: "When exactly one of two paths must happen",
        explanation: "if-else guarantees that one branch and only one branch runs. A plain if can leave nothing at all happening when its condition is false."
    },
    {
        type: "multiple-choice",
        question: "What does this code display if the user enters 11?\n\nint number;\ncin >> number;\nif (number % 2 == 0)\n{\n    cout << \"Even\";\n}\nelse\n{\n    cout << \"Odd\";\n}",
        options: ["Odd", "Even", "1", "11"],
        answer: "Odd",
        explanation: "11 % 2 leaves a remainder of 1, so the condition is false and the else branch runs. Only a remainder of 0 would have printed Even."
    },

    // Multiple selection: else-if chains
    {
        type: "multiple-choice",
        question: "In an else-if chain, in what order does C++ check the conditions?",
        options: [
            "From top to bottom, stopping at the first one that is true",
            "From bottom to top, stopping at the first one that is true",
            "All of them, then it runs whichever block matched last",
            "In whatever order makes the most conditions true"
        ],
        answer: "From top to bottom, stopping at the first one that is true",
        explanation: "Once a condition is true its block runs and the rest of the chain is skipped entirely. That is why the order the conditions are written in matters so much."
    },
    {
        type: "multiple-choice",
        question: "Using the grade chain (A 92-100, B+ 88-91, B 84-87, C+ 80-83, C 76-79, D 72-75, F below 72), what is printed for a grade of 89?",
        options: ["B+", "A", "B", "C+"],
        answer: "B+",
        explanation: "89 fails the first test of grade >= 92 but passes grade >= 88, so the chain stops there. It never reaches the lower bands even though 89 is also above 84 and 80."
    },
    {
        type: "multiple-choice",
        question: "Why is this chain wrong?\n\nif (grade >= 72)\n    cout << \"D\";\nelse if (grade >= 92)\n    cout << \"A\";",
        options: [
            "A grade of 95 prints D, because the first condition is true and the chain stops there",
            "A grade of 95 prints A, but only after also printing D",
            "The code will not compile because the conditions overlap",
            "A grade of 95 prints nothing, because two conditions are true at once"
        ],
        answer: "A grade of 95 prints D, because the first condition is true and the chain stops there",
        explanation: "95 is at least 72, so the D branch runs and the A test is never reached. The fix is to order the conditions from the highest boundary down to the lowest."
    },

    // Selecting with switch
    {
        type: "multiple-choice",
        question: "What does this code display if the user enters 2?\n\nint choice;\ncin >> choice;\nswitch (choice)\n{\n    case 1: cout << \"Add\"; break;\n    case 2: cout << \"Subtract\"; break;\n    case 3: cout << \"Multiply\"; break;\n    default: cout << \"Invalid choice\";\n}",
        options: ["Subtract", "Add", "Multiply", "Invalid choice"],
        answer: "Subtract",
        explanation: "Control jumps to case 2 and its break ends the switch right after printing. The default label only runs when no case matches the value."
    },
    {
        type: "multiple-choice",
        question: "What happens if the break is removed from case 1 of a switch?",
        options: [
            "Execution falls through and also runs the statements of the cases below it",
            "Execution jumps straight to the default label",
            "Execution leaves the switch as if the break were still there",
            "The program will not compile without a break in every case"
        ],
        answer: "Execution falls through and also runs the statements of the cases below it",
        explanation: "A case is a label rather than a block, so without a break execution keeps running into the next case. This fall-through behaviour is occasionally useful but is usually a bug."
    },
    {
        type: "multiple-choice",
        question: "Which situation calls for if-else rather than switch?",
        options: [
            "Testing ranges or complex conditions with <, >, && or ||",
            "Comparing one integer against several exact values",
            "Choosing an action from a numbered menu",
            "Matching a single character against a fixed list of commands"
        ],
        answer: "Testing ranges or complex conditions with <, >, && or ||",
        explanation: "A switch can only match one expression against exact constant values, so ranges are out of its reach. The other three all compare one value against a fixed list, which is what switch is for."
    }
];

// ==========================================
// TEST 2: IDENTIFICATION (20 Questions)
// ==========================================
const comprog1Week6Test2 = [
    // The selection statements
    {
        type: "identification",
        question: "Which C++ keyword begins a one-way selection statement?",
        answer: ["if", "IF", "If", "if statement"],
        explanation: "It runs its block only when the condition is true. On its own it has no alternative path, which is what makes it one-way."
    },
    {
        type: "identification",
        question: "Which keyword supplies the alternative path in a two-way selection?",
        answer: ["else", "ELSE", "Else", "else statement"],
        explanation: "It has no condition of its own; it simply catches everything the if did not. That is what guarantees exactly one of the two blocks runs."
    },
    {
        type: "identification",
        question: "Which statement is used to compare one expression against several exact cases?",
        answer: ["switch", "SWITCH", "Switch", "switch statement"],
        explanation: "It matches a single value against constant labels. Use if-else instead when you need ranges or conditions joined with && or ||."
    },
    {
        type: "identification",
        question: "Which keyword labels each value being matched inside a switch?",
        answer: ["case", "CASE", "Case", "case label"],
        explanation: "Written as case 1:, case 2: and so on. Each one is only a label, which is why execution needs a break to stop there."
    },
    {
        type: "identification",
        question: "Which keyword immediately exits a switch so it does not run the cases below?",
        answer: ["break", "BREAK", "Break", "break statement", "break;"],
        explanation: "It ends the switch at that point and execution continues after the closing brace. Leaving it out is what produces fall-through."
    },
    {
        type: "identification",
        question: "Which label inside a switch handles values that match none of the cases?",
        answer: ["default", "DEFAULT", "Default", "default label", "default:"],
        explanation: "It is the switch equivalent of a final else. In the menu example it is what prints Invalid choice."
    },
    {
        type: "identification",
        question: "What is the term for a switch running on into the statements of the following case because a break was left out?",
        answer: ["fall-through", "fallthrough", "fall through", "falling through", "Fall-through"],
        explanation: "Control simply keeps going past the next case label. Removing one break and watching the extra output is the quickest way to see it."
    },

    // Naming the three structures
    {
        type: "identification",
        question: "Which control flow structure executes one step after another with no condition involved?",
        answer: ["sequence", "SEQUENCE", "Sequence", "sequential"],
        explanation: "It is the default flow of any program, such as reading a value, computing with it, then printing it. The other two structures exist to break out of that straight line."
    },
    {
        type: "identification",
        question: "Which control flow structure chooses a path based on a condition?",
        answer: ["selection", "SELECTION", "Selection", "decision"],
        explanation: "It covers if, if-else, else-if chains and switch. Repetition is the structure that repeats steps instead of choosing between them."
    },
    {
        type: "identification",
        question: "Which control flow structure repeats steps while a condition holds?",
        answer: ["repetition", "REPETITION", "Repetition", "loop", "looping", "iteration"],
        explanation: "This is the loop family covered in the next lesson. Selection chooses a path once, while repetition runs the same path again and again."
    },
    {
        type: "identification",
        question: "What is the two-word name for the structure formed by an if paired with an else?",
        answer: ["two-way selection", "two way selection", "twoway selection", "if-else", "if else"],
        explanation: "Two paths exist and exactly one of them will run. A plain if is called one-way selection because it has only the true path."
    },
    {
        type: "identification",
        question: "What is the name for the structure formed by chaining several else if tests together?",
        answer: ["multiple selection", "multiple-selection", "multi-way selection", "else-if chain", "else if chain"],
        explanation: "It extends two-way selection to as many branches as needed. Because it is checked top to bottom, the order the conditions appear in changes the result."
    },

    // Operators used in conditions
    {
        type: "identification",
        question: "Which operator tests whether two values are equal?",
        answer: ["==", "equal to", "equality operator", "double equals"],
        explanation: "Two equals signs compare, one equals sign assigns. Confusing the two is the classic if (score = 72) bug."
    },
    {
        type: "identification",
        question: "Which operator tests whether two values are NOT equal?",
        answer: ["!=", "not equal to", "not equal", "inequality operator"],
        explanation: "The exclamation mark carries the sense of not. C++ has no <> operator for this."
    },
    {
        type: "identification",
        question: "Which logical operator requires BOTH conditions to be true?",
        answer: ["&&", "and", "AND", "logical and", "and operator"],
        explanation: "If either side is false the whole condition is false. Use || when only one side needs to be true."
    },
    {
        type: "identification",
        question: "Which logical operator is true when AT LEAST ONE condition is true?",
        answer: ["||", "or", "OR", "logical or", "or operator"],
        explanation: "It is false only when both sides are false. Its counterpart && needs both sides to be true."
    },
    {
        type: "identification",
        question: "Which logical operator reverses the result of a condition?",
        answer: ["!", "not", "NOT", "logical not", "not operator"],
        explanation: "It turns true into false and false into true, as in !(x == 10). Unlike && and ||, it works on a single condition."
    },
    {
        type: "identification",
        question: "Which operator gives the remainder of a division and is used to test whether a number is even or odd?",
        answer: ["%", "modulus", "modulo", "modulus operator", "remainder operator"],
        explanation: "number % 2 leaves 0 for even numbers and 1 for odd ones. The / operator would give the quotient instead."
    },

    // Conditions and their values
    {
        type: "identification",
        question: "What is the group name for operators such as <, >, <= and >= that compare two values?",
        answer: ["relational operators", "relational operator", "relational", "comparison operators"],
        explanation: "They compare and produce true or false. The logical operators &&, || and ! then combine those results."
    },
    {
        type: "identification",
        question: "Which C++ data type stores only the values true and false?",
        answer: ["bool", "BOOL", "Bool", "boolean"],
        explanation: "Every condition in an if or a switch ultimately produces one of these two values. cout prints them as 1 and 0 unless told otherwise."
    }
];

// Export for quiz engine
const comprog1Week6Questions = {
    test1: comprog1Week6Test1,
    test2: comprog1Week6Test2,
    title: "ComProg1 Week 6: Control Flow 1 (Selection)",
    test2Label: "Identification",
    test2Info: "20 questions - Type your answers"
};
