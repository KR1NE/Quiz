// ComProg1 Week 7: Control Flow 2 (Repetition)
// Test 1: Multiple Choice (20 Questions) - Items 1-20
// Test 2: Identification (20 Questions) - Items 21-40

// ==========================================
// TEST 1: MULTIPLE CHOICE (20 Questions)
// ==========================================
const comprog1Week7Test1 = [
    // Why loops
    {
        type: "multiple-choice",
        question: "What problem do loops solve?",
        options: [
            "They remove repeated code and make programs scalable",
            "They make a program run with fewer variables",
            "They let a program choose between two different paths",
            "They stop a program from needing any conditions at all"
        ],
        answer: "They remove repeated code and make programs scalable",
        explanation: "Writing cout << \"Hello\"; a hundred times is fragile, while one for loop handles any count you like. Choosing between paths is selection, which is a different structure."
    },
    {
        type: "multiple-choice",
        question: "What are the four parts every loop has?",
        options: [
            "Initialization, condition, body and update",
            "Declaration, assignment, comparison and output",
            "Header, body, footer and return",
            "Input, process, output and storage"
        ],
        answer: "Initialization, condition, body and update",
        explanation: "The four parts appear in every loop even when they are written far apart, as in a while loop. A for loop just gathers three of them onto one line."
    },

    // The while loop
    {
        type: "multiple-choice",
        question: "When does a while loop check its condition?",
        options: [
            "Before each pass, so the body may run zero times",
            "After each pass, so the body always runs at least once",
            "Only once, before the loop starts",
            "Only after the loop has finished running"
        ],
        answer: "Before each pass, so the body may run zero times",
        explanation: "This is why while is called a pre-test loop. A condition that is false at the very start means the body never runs at all."
    },
    {
        type: "multiple-choice",
        question: "What does this code display?\n\nint count = 1;\nwhile (count <= 5)\n{\n    cout << count << endl;\n    count++;\n}",
        options: [
            "The numbers 1 through 5, each on its own line",
            "The numbers 1 through 6, each on its own line",
            "The numbers 0 through 5, each on its own line",
            "The number 1 over and over forever"
        ],
        answer: "The numbers 1 through 5, each on its own line",
        explanation: "The value is printed first and only then incremented, so 5 is printed and the next test at 6 fails. The 6 exists in the variable but is never printed."
    },
    {
        type: "multiple-choice",
        question: "In the loop below, what is the value of count after the loop finishes?\n\nint count = 1;\nwhile (count <= 5)\n{\n    cout << count << endl;\n    count++;\n}",
        options: ["6", "5", "4", "1"],
        answer: "6",
        explanation: "The loop can only end once the condition is false, and count <= 5 first fails at 6. The last value printed is 5, which is one behind the value that stopped the loop."
    },
    {
        type: "multiple-choice",
        question: "What creates an infinite loop?",
        options: [
            "The loop has no update or any other way for its condition to become false",
            "The loop condition is true the first time it is tested",
            "The loop body contains more than one statement",
            "The loop variable is declared before the loop instead of inside it"
        ],
        answer: "The loop has no update or any other way for its condition to become false",
        explanation: "If nothing the body does can ever make the condition false, the loop never stops. Forgetting count++ inside a while loop is the usual cause."
    },

    // The do-while loop
    {
        type: "multiple-choice",
        question: "How many times is the body of a do-while loop guaranteed to run?",
        options: ["At least once", "Exactly once", "Zero times", "At least twice"],
        answer: "At least once",
        explanation: "The body runs before the condition is ever tested, so it always executes at least one time. A while loop can run its body zero times."
    },
    {
        type: "multiple-choice",
        question: "What is the difference between while and do-while?",
        options: [
            "while is a pre-test loop and do-while is a post-test loop",
            "while is a post-test loop and do-while is a pre-test loop",
            "while can count and do-while cannot",
            "There is no difference; the two forms always behave identically"
        ],
        answer: "while is a pre-test loop and do-while is a post-test loop",
        explanation: "while checks the condition first, do-while checks it last. That single difference is what lets do-while guarantee one pass."
    },
    {
        type: "multiple-choice",
        question: "Which task is do-while best suited for?\n\nint number;\ndo\n{\n    cout << \"Enter a positive number: \";\n    cin >> number;\n}\nwhile (number <= 0);",
        options: [
            "Input validation, where the user must be asked at least once",
            "Counting from 1 to a known number",
            "Choosing between two different outputs",
            "Reading a value without ever checking it"
        ],
        answer: "Input validation, where the user must be asked at least once",
        explanation: "You always have to ask before you can know whether the answer is valid, which matches a post-test loop exactly. A while loop here would need the prompt written out twice."
    },

    // The for loop
    {
        type: "multiple-choice",
        question: "What are the three parts inside the parentheses of a for statement, in order?",
        options: [
            "Initialization, condition, update",
            "Condition, initialization, update",
            "Initialization, update, condition",
            "Condition, body, update"
        ],
        answer: "Initialization, condition, update",
        explanation: "Written as for (initialization; condition; update), the structure keeps the whole loop setup on one line. The body then goes inside the braces below it."
    },
    {
        type: "multiple-choice",
        question: "Which while loop is equivalent to for (int i = 1; i <= 5; i++)?",
        options: [
            "int i = 1;  while (i <= 5) { ... i++; }",
            "int i = 1;  while (i < 5) { ... i++; }",
            "int i = 0;  while (i <= 5) { ... i++; }",
            "int i = 1;  while (i <= 5) { ... }"
        ],
        answer: "int i = 1;  while (i <= 5) { ... i++; }",
        explanation: "The same four parts are present, just written in different places. The last option drops the update, which would loop forever."
    },
    {
        type: "multiple-choice",
        question: "How many lines does this loop print?\n\nfor (int i = 1; i <= 5; i++)\n{\n    cout << i << endl;\n}",
        options: ["5", "4", "6", "1"],
        answer: "5",
        explanation: "It runs for i equal to 1, 2, 3, 4 and 5, then stops when the test at 6 fails. Starting at 1 with <= 5 is the standard count-to-n pattern."
    },

    // Choosing the right loop
    {
        type: "multiple-choice",
        question: "Which loop is the best choice when the number of repetitions is already known?",
        options: ["for", "while", "do-while", "switch"],
        answer: "for",
        explanation: "Printing 1 to 10 is a known count, so a for loop states the whole plan on one line. The quick test is asking whether you already know how many times it should run."
    },
    {
        type: "multiple-choice",
        question: "Which loop is the best choice for reading values until a sentinel value is entered?",
        options: ["while", "for", "do-while", "if-else"],
        answer: "while",
        explanation: "The repetition depends on an event rather than a count, which is what while is for. A for loop would need a count that nobody knows in advance."
    },
    {
        type: "multiple-choice",
        question: "Which loop is the best choice when the body must execute at least once?",
        options: ["do-while", "while", "for", "switch"],
        answer: "do-while",
        explanation: "Only do-while tests its condition after the body, so only it can promise a first pass. Asking for valid input is the classic example."
    },

    // break and continue
    {
        type: "multiple-choice",
        question: "What does this code display?\n\nfor (int i = 1; i <= 10; i++)\n{\n    if (i == 6) break;\n    cout << i << \" \";\n}",
        options: ["1 2 3 4 5", "1 2 3 4 5 6", "1 2 3 4 5 7 8 9 10", "1 2 3 4 5 6 7 8 9 10"],
        answer: "1 2 3 4 5",
        explanation: "At i equal to 6 the break leaves the loop before the cout runs, so 6 is never printed. break ends the loop entirely rather than skipping one pass."
    },
    {
        type: "multiple-choice",
        question: "What does this code display?\n\nfor (int i = 1; i <= 5; i++)\n{\n    if (i == 3) continue;\n    cout << i << \" \";\n}",
        options: ["1 2 4 5", "1 2", "1 2 3 4 5", "1 2 5"],
        answer: "1 2 4 5",
        explanation: "continue skips only the rest of that one pass, so 3 is missing but the loop carries on to 4 and 5. A break there would have stopped everything after 2."
    },
    {
        type: "multiple-choice",
        question: "What is the difference between break and continue inside a loop?",
        options: [
            "break exits the loop entirely, while continue skips the rest of the current iteration",
            "break skips the rest of the current iteration, while continue exits the loop entirely",
            "break works only in a switch, while continue works only in a loop",
            "Both exit the loop, but continue also resets the loop variable"
        ],
        answer: "break exits the loop entirely, while continue skips the rest of the current iteration",
        explanation: "break leaves for good and continue jumps ahead to the next pass. Both should be used intentionally, since they hide an exit point in the middle of the body."
    },

    // Tracing and the big picture
    {
        type: "multiple-choice",
        question: "What is displayed?\n\nint x = 7;\nif (x > 5)\n    x = x + 3;\nelse\n    x = x - 2;\ncout << x;",
        options: ["10", "5", "7", "4"],
        answer: "10",
        explanation: "7 is greater than 5, so only the true branch runs and x becomes 10. The else line is skipped completely, so the 2 is never subtracted."
    },
    {
        type: "multiple-choice",
        question: "Which group lists only repetition structures?",
        options: [
            "while, do-while, for",
            "if, if-else, switch",
            "if, while, switch",
            "for, switch, else-if"
        ],
        answer: "while, do-while, for",
        explanation: "Repetition covers the three loop forms, while if, if-else, else-if and switch all belong to selection. Sequence is the third category, where statements simply run in order."
    }
];

// ==========================================
// TEST 2: IDENTIFICATION (20 Questions)
// ==========================================
const comprog1Week7Test2 = [
    // The three loops
    {
        type: "identification",
        question: "Which loop is best when repetition depends on a condition or event and the body may need to run zero times?",
        answer: ["while", "WHILE", "While", "while loop"],
        explanation: "It tests before every pass, so a condition that starts out false skips the body entirely. Reading until a sentinel value is its classic use."
    },
    {
        type: "identification",
        question: "Which loop always executes its body at least once?",
        answer: ["do-while", "do while", "dowhile", "DO-WHILE", "Do-while", "do-while loop"],
        explanation: "The body comes first and the condition is checked afterwards. That is exactly what input validation needs, since you must ask before you can check."
    },
    {
        type: "identification",
        question: "Which loop is best when the number of repetitions is already known?",
        answer: ["for", "FOR", "For", "for loop"],
        explanation: "It keeps the initialization, condition and update together on one line. Printing 1 to 10 is the standard example."
    },
    {
        type: "identification",
        question: "What is the two-word term for a loop such as while that checks its condition before the body?",
        answer: ["pre-test loop", "pretest loop", "pre test loop", "pre-test", "pretest"],
        explanation: "Testing first is what allows zero passes. Its opposite is the post-test loop."
    },
    {
        type: "identification",
        question: "What is the two-word term for a loop such as do-while that checks its condition after the body?",
        answer: ["post-test loop", "posttest loop", "post test loop", "post-test", "posttest"],
        explanation: "Testing last is what guarantees at least one pass. Its opposite is the pre-test loop."
    },

    // The four parts
    {
        type: "identification",
        question: "Which of the four parts of a loop gives the control variable its starting value?",
        answer: ["initialization", "initialisation", "initialize", "init", "Initialization"],
        explanation: "In for (int i = 1; i <= 5; i++) it is the int i = 1 part. It runs once, before the first test."
    },
    {
        type: "identification",
        question: "Which of the four parts of a loop is the true or false test that decides whether to keep going?",
        answer: ["condition", "CONDITION", "Condition", "loop condition", "test condition"],
        explanation: "In for (int i = 1; i <= 5; i++) it is the i <= 5 part. The loop ends the moment this becomes false."
    },
    {
        type: "identification",
        question: "Which of the four parts of a loop is the block of statements that gets repeated?",
        answer: ["body", "BODY", "Body", "loop body"],
        explanation: "It is the code inside the braces. Everything else in a loop exists to control how often this part runs."
    },
    {
        type: "identification",
        question: "Which of the four parts of a loop changes the control variable so the loop can eventually stop?",
        answer: ["update", "UPDATE", "Update", "increment", "update statement"],
        explanation: "In for (int i = 1; i <= 5; i++) it is the i++ part. Leaving it out is the usual cause of an infinite loop."
    },

    // Things that go wrong or come up
    {
        type: "identification",
        question: "What is the term for a loop whose condition never becomes false, so it never stops?",
        answer: ["infinite loop", "infinite", "endless loop", "Infinite loop"],
        explanation: "It happens when nothing in the body can ever make the condition false. Adding the missing update is normally the fix."
    },
    {
        type: "identification",
        question: "What is the term for one complete pass through the body of a loop?",
        answer: ["iteration", "ITERATION", "Iteration", "pass", "loop iteration"],
        explanation: "A loop that prints 1 to 5 performs five of these. continue ends the current one early without ending the loop."
    },
    {
        type: "identification",
        question: "What is the term for a special value entered by the user to signal that input should stop?",
        answer: ["sentinel", "sentinel value", "SENTINEL", "Sentinel", "sentinel-controlled value"],
        explanation: "It is what a while loop watches for when the number of inputs is unknown. A for loop cannot be used here because there is no count to give it."
    },
    {
        type: "identification",
        question: "What is the name for a variable such as count or i that keeps track of how many passes a loop has made?",
        answer: ["counter", "COUNTER", "Counter", "counter variable", "control variable", "loop counter"],
        explanation: "It is set in the initialization, tested in the condition and changed in the update. In a for loop all three of those appear on one line."
    },

    // break and continue
    {
        type: "identification",
        question: "Which statement immediately exits a loop or a switch?",
        answer: ["break", "BREAK", "Break", "break statement", "break;"],
        explanation: "Nothing after it in the body runs and the loop is finished for good. Use continue when only the current pass should be cut short."
    },
    {
        type: "identification",
        question: "Which statement skips the rest of the current iteration but lets the loop carry on?",
        answer: ["continue", "CONTINUE", "Continue", "continue statement", "continue;"],
        explanation: "The loop jumps straight to its next pass, which is why 3 goes missing but 4 and 5 still print. break would have ended the loop instead."
    },
    {
        type: "identification",
        question: "Which operator adds 1 to a variable and is normally used as the update part of a counting loop?",
        answer: ["++", "increment", "increment operator", "i++", "plus plus"],
        explanation: "Written as i++ or count++. Its counterpart -- subtracts 1 for a loop that counts down."
    },

    // Structure and vocabulary
    {
        type: "identification",
        question: "Which punctuation mark is required immediately after the while (condition) at the end of a do-while loop?",
        answer: ["semicolon", ";", "semi-colon", "semi colon", "SEMICOLON"],
        explanation: "Written as while (number <= 0); to close the statement. An ordinary while loop must not have one there, or its body becomes empty."
    },
    {
        type: "identification",
        question: "Which of the three control flow structures do while, do-while and for all belong to?",
        answer: ["repetition", "REPETITION", "Repetition", "loop", "looping", "iteration"],
        explanation: "The other two structures are sequence and selection. Selection is where if, if-else, else-if and switch belong."
    },
    {
        type: "identification",
        question: "Which control flow structure would you use to keep asking for input until it is valid?",
        answer: ["do-while", "do while", "dowhile", "do-while loop", "repetition"],
        explanation: "The prompt has to happen before the value can be judged, which is a post-test situation. A while loop would force you to write the prompt twice."
    },
    {
        type: "identification",
        question: "Which loop would you use to print the numbers 1 to n?",
        answer: ["for", "FOR", "For", "for loop"],
        explanation: "The count is known the moment n is known, which is exactly the case a for loop is built for. A while loop would work but scatters the same four parts across three lines."
    }
];

// Export for quiz engine
const comprog1Week7Questions = {
    test1: comprog1Week7Test1,
    test2: comprog1Week7Test2,
    title: "ComProg1 Week 7: Control Flow 2 (Repetition)",
    test2Label: "Identification",
    test2Info: "20 questions - Type your answers"
};
