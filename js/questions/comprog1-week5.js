// ComProg1 Week 5: Operators for Fundamental Types
// Test 1: Multiple Choice (20 Questions) - Items 1-20
// Test 2: Prefix/Postfix Tracing Table (20 Questions) - Items 21-40
//
// Every Test 2 row is evaluated from the same starting state:
//     int x = 5;
//     int y = 0;

// ==========================================
// TEST 1: MULTIPLE CHOICE (20 Questions)
// ==========================================
const comprog1Week5Test1 = [
    // Operator vocabulary
    {
        type: "multiple-choice",
        question: "What is an operator?",
        options: [
            "Something that tells C++ what action to perform on one or more operands",
            "A name given to a value stored in memory",
            "A keyword that reserves space for a variable",
            "The result produced after a calculation finishes"
        ],
        answer: "Something that tells C++ what action to perform on one or more operands",
        explanation: "The operator is the action and the operands are what it acts on. Together they form an expression, which is what produces the result."
    },
    {
        type: "multiple-choice",
        question: "In the statement int result = x + y; what are x and y called?",
        options: ["Operands", "Operators", "Expressions", "Statements"],
        answer: "Operands",
        explanation: "The + is the operator, x and y are its operands, and x + y as a whole is the expression."
    },
    {
        type: "multiple-choice",
        question: "Operators are classified by how many operands they take. How is -x classified?",
        options: ["Unary, because it acts on one operand", "Binary, because it acts on one operand", "Unary, because it acts on two operands", "Binary, because it acts on two operands"],
        answer: "Unary, because it acts on one operand",
        explanation: "Unary means one operand, as in -x or ++x. Binary means two, as in x + y. That count is the whole basis of the classification."
    },
    {
        type: "multiple-choice",
        question: "Which relational operator tests whether two values are NOT equal?",
        options: ["!=", "==", "=", "<>"],
        answer: "!=",
        explanation: "The exclamation mark carries the sense of not. A single = assigns, == compares for equality, and <> is not a C++ operator at all."
    },

    // Integer division and remainder
    {
        type: "multiple-choice",
        question: "If int a = 17, b = 5; what does a / b produce?",
        options: ["3", "3.4", "4", "2"],
        answer: "3",
        explanation: "Integer division discards the fractional part rather than rounding, so 3.4 becomes 3 and not 4. The 2 you may be thinking of is 17 % 5."
    },
    {
        type: "multiple-choice",
        question: "What is the value of 17.0 / 5?",
        options: ["3.4", "3", "4", "2"],
        answer: "3.4",
        explanation: "Making just one operand a floating-point value switches the whole operation to true division. This is the standard fix for unwanted integer division."
    },
    {
        type: "multiple-choice",
        question: "The lesson gives number % 2 as a way to test whether a number is:",
        options: ["Even or odd", "Positive or negative", "Larger than 2", "A whole number"],
        answer: "Even or odd",
        explanation: "Dividing by 2 leaves a remainder of 0 for even numbers and 1 for odd ones. The other listed uses of % are extracting the last digit and converting seconds."
    },
    {
        type: "multiple-choice",
        question: "If int number = 427; what does number % 10 produce?",
        options: ["7", "42", "42.7", "0"],
        answer: "7",
        explanation: "Taking the remainder after dividing by 10 always leaves the last digit. Using / 10 instead would give 42, which is the number with its last digit removed."
    },

    // Precedence
    {
        type: "multiple-choice",
        question: "What is the value of 10 + 6 * 3?",
        options: ["28", "48", "36", "19"],
        answer: "28",
        explanation: "Multiplication is evaluated first, so this is 10 + 18. The trap answer 48 comes from adding first, which would need parentheses: (10 + 6) * 3."
    },
    {
        type: "multiple-choice",
        question: "What is the value of 20 / 5 * 2?",
        options: ["8", "2", "50", "10"],
        answer: "8",
        explanation: "Division and multiplication share the same precedence level, so they run left to right: (20 / 5) * 2 = 8. Doing 5 * 2 first would wrongly give 2."
    },
    {
        type: "multiple-choice",
        question: "In the simplified precedence ladder, which of these is evaluated FIRST?",
        options: ["*", "<", "&&", "="],
        answer: "*",
        explanation: "The ladder runs arithmetic, then relational, then logical, with assignment last. So * beats <, which beats &&, which beats =."
    },

    // Unary operators
    {
        type: "multiple-choice",
        question: "If int x = 8; what do cout << +x; and cout << -x; display?",
        options: ["8 then -8", "8 then 8", "-8 then 8", "9 then 7"],
        answer: "8 then -8",
        explanation: "Unary + keeps the sign as it is while unary - reverses it. Neither one changes the variable x itself, unlike ++ and --."
    },
    {
        type: "multiple-choice",
        question: "What is the difference between prefix ++x and postfix x++ inside a larger expression?",
        options: [
            "Prefix increments first then uses the new value; postfix uses the value first then increments",
            "Prefix uses the value first then increments; postfix increments first then uses the new value",
            "Prefix adds 1 while postfix adds 2",
            "There is no difference; the two forms always behave identically"
        ],
        answer: "Prefix increments first then uses the new value; postfix uses the value first then increments",
        explanation: "The timing only matters inside a larger expression. As a statement on its own, x++; and ++x; leave x in exactly the same state."
    },

    // Assignment
    {
        type: "multiple-choice",
        question: "After int x; x = 2 + 5 * 3; what is the value of x?",
        options: ["17", "21", "10", "30"],
        answer: "17",
        explanation: "The right-hand side is fully evaluated before anything is stored, and 5 * 3 goes first, giving 2 + 15."
    },
    {
        type: "multiple-choice",
        question: "In the statement a = b = 10; how is the assignment grouped?",
        options: [
            "Right to left, so b receives 10 first and then a receives that value",
            "Left to right, so a receives 10 first and then b receives that value",
            "Both variables are assigned at exactly the same moment",
            "It is invalid, because only one variable can be assigned per statement"
        ],
        answer: "Right to left, so b receives 10 first and then a receives that value",
        explanation: "Assignment groups right to left, which is what makes chained assignment possible. Both end up holding 10, but b gets there first."
    },
    {
        type: "multiple-choice",
        question: "What is the value of x after this code?\n\nint x = 10;\nx += 5;\nx *= 2;\nx -= 4;\nx /= 2;",
        options: ["13", "11", "26", "16"],
        answer: "13",
        explanation: "Follow it one step at a time: 10 becomes 15, then 30, then 26, then 13. Each compound operator is shorthand for x = x <operator> value."
    },

    // Relational, equality and logical
    {
        type: "multiple-choice",
        question: "What is the output of this code?\n\nint a = 10;\nint b = 7;\ncout << boolalpha;\ncout << (a > b);",
        options: ["true", "false", "1", "10"],
        answer: "true",
        explanation: "Relational operators produce a Boolean result, and boolalpha displays it as a word. Without boolalpha it would print 1 instead."
    },
    {
        type: "multiple-choice",
        question: "What is the difference between x = 5 and x == 5?",
        options: [
            "x = 5 puts 5 into x, while x == 5 asks whether x is equal to 5",
            "x = 5 asks whether x is equal to 5, while x == 5 puts 5 into x",
            "They mean exactly the same thing in C++",
            "x == 5 is invalid C++ and will not compile"
        ],
        answer: "x = 5 puts 5 into x, while x == 5 asks whether x is equal to 5",
        explanation: "One assigns, the other compares. Writing = where you meant == is a mistake the compiler often accepts, which is why the lesson stresses it before selection statements."
    },
    {
        type: "multiple-choice",
        question: "If bool loggedIn = true; what is the value of !loggedIn?",
        options: ["false", "true", "1", "It causes a compiler error"],
        answer: "false",
        explanation: "The NOT operator reverses a truth value, so it turns true into false. Unlike && and ||, it works on a single operand."
    },
    {
        type: "multiple-choice",
        question: "What is the value of eligible in this code?\n\nint age = 20;\ndouble grade = 85;\nbool eligible = (age >= 18) && (grade >= 80);",
        options: ["true", "false", "20", "85"],
        answer: "true",
        explanation: "AND requires both sides to be true, and here 20 >= 18 and 85 >= 80 both hold. Had either side failed, the whole expression would be false."
    }
];

// ==========================================
// TEST 2: PREFIX / POSTFIX TRACING (20 Questions)
// Ordered easy to hard - this test is NOT shuffled.
// Every row starts from: int x = 5;  int y = 0;
// ==========================================
const comprog1Week5Test2 = [
    // --- Tier 1: a single operator in a simple assignment ---
    {
        type: "trace-table",
        code: "y = x++;",
        initialX: 5,
        initialY: 0,
        answerX: 6,
        answerY: 5,
        explanation: "Postfix hands over the old value first, so y receives 5, and only then does x become 6."
    },
    {
        type: "trace-table",
        code: "y = ++x;",
        initialX: 5,
        initialY: 0,
        answerX: 6,
        answerY: 6,
        explanation: "Prefix increments before the value is used, so x becomes 6 and that same 6 is copied into y. Compare with y = x++, where y would get 5."
    },
    {
        type: "trace-table",
        code: "y = x--;",
        initialX: 5,
        initialY: 0,
        answerX: 4,
        answerY: 5,
        explanation: "Postfix again, so y still receives the original 5. The decrement happens afterwards and leaves x at 4."
    },
    {
        type: "trace-table",
        code: "y = --x;",
        initialX: 5,
        initialY: 0,
        answerX: 4,
        answerY: 4,
        explanation: "Prefix decrements first, so x drops to 4 and y receives that new 4. Both variables end up the same."
    },
    {
        type: "trace-table",
        code: "x++; y = x;",
        initialX: 5,
        initialY: 0,
        answerX: 6,
        answerY: 6,
        explanation: "As a statement on its own the increment finishes completely, so the copy on the next line sees 6. Prefix or postfix makes no difference here."
    },
    {
        type: "trace-table",
        code: "++x; y = x;",
        initialX: 5,
        initialY: 0,
        answerX: 6,
        answerY: 6,
        explanation: "The same result as x++; y = x;. Timing only matters when the increment sits inside a larger expression."
    },

    // --- Tier 2: the operator inside an expression ---
    {
        type: "trace-table",
        code: "y = x++ + 2;",
        initialX: 5,
        initialY: 0,
        answerX: 6,
        answerY: 7,
        explanation: "The expression uses the old 5, giving 5 + 2 = 7 for y, and x is left at 6 afterwards."
    },
    {
        type: "trace-table",
        code: "y = ++x + 2;",
        initialX: 5,
        initialY: 0,
        answerX: 6,
        answerY: 8,
        explanation: "x rises to 6 before the addition, so the sum is 6 + 2 = 8. The single character of difference from the previous row changes y by one."
    },
    {
        type: "trace-table",
        code: "y = x-- + 3;",
        initialX: 5,
        initialY: 0,
        answerX: 4,
        answerY: 8,
        explanation: "Postfix supplies the original 5, so y is 5 + 3 = 8, and the decrement then drops x to 4."
    },
    {
        type: "trace-table",
        code: "y = --x + 3;",
        initialX: 5,
        initialY: 0,
        answerX: 4,
        answerY: 7,
        explanation: "x falls to 4 first, so the sum is 4 + 3 = 7. x ends the same as the previous row, but y does not."
    },
    {
        type: "trace-table",
        code: "y = x++ - 1;",
        initialX: 5,
        initialY: 0,
        answerX: 6,
        answerY: 4,
        explanation: "The old 5 is used in the subtraction, giving 5 - 1 = 4, and x is incremented to 6 afterwards."
    },
    {
        type: "trace-table",
        code: "y = --x * 2;",
        initialX: 5,
        initialY: 0,
        answerX: 4,
        answerY: 8,
        explanation: "Prefix acts before the multiplication, so it is 4 * 2 = 8. Using x-- instead would have given 5 * 2 = 10."
    },
    {
        type: "trace-table",
        code: "y = 10 - ++x;",
        initialX: 5,
        initialY: 0,
        answerX: 6,
        answerY: 4,
        explanation: "x becomes 6 first, so the subtraction is 10 - 6 = 4. Being on the right of the operator does not change when the increment happens."
    },

    // --- Tier 3: more than one statement ---
    {
        type: "trace-table",
        code: "y = x++; x++;",
        initialX: 5,
        initialY: 0,
        answerX: 7,
        answerY: 5,
        explanation: "The first statement gives y the old 5 and leaves x at 6; the second increment then pushes x to 7. y is never touched again."
    },
    {
        type: "trace-table",
        code: "y = ++x; x--;",
        initialX: 5,
        initialY: 0,
        answerX: 5,
        answerY: 6,
        explanation: "x rises to 6 and y copies that 6, then the decrement returns x to 5. y keeps the value it captured, so the two end up different."
    },
    {
        type: "trace-table",
        code: "y += x++;",
        initialX: 5,
        initialY: 0,
        answerX: 6,
        answerY: 5,
        explanation: "This means y = y + x++, so it is 0 + 5 = 5 for y, with x becoming 6 afterwards. The starting y of 0 is easy to forget here."
    },
    {
        type: "trace-table",
        code: "y = x--; --x; y++;",
        initialX: 5,
        initialY: 0,
        answerX: 3,
        answerY: 6,
        explanation: "Three steps: y takes the old 5 and x drops to 4, then --x drops x to 3, then y++ raises y to 6."
    },
    {
        type: "trace-table",
        code: "y = x++; y += ++x;",
        initialX: 5,
        initialY: 0,
        answerX: 7,
        answerY: 12,
        explanation: "First y becomes 5 and x becomes 6. Then ++x raises x to 7 and that 7 is added on, so y ends at 5 + 7 = 12."
    },

    // --- Tier 4: the same variable twice in one expression ---
    {
        type: "trace-table",
        code: "y = x++ + x;",
        initialX: 5,
        initialY: 0,
        answerX: 6,
        answerY: 11,
        explanation: "Reading left to right, x++ supplies 5 and leaves x at 6, so the second x is already 6, giving 5 + 6 = 11. Changing and reading x twice in one expression is not guaranteed by the C++ standard, so never write code like this in practice."
    },
    {
        type: "trace-table",
        code: "y = ++x + x;",
        initialX: 5,
        initialY: 0,
        answerX: 6,
        answerY: 12,
        explanation: "Prefix raises x to 6 before it is used, so both sides read 6 and the sum is 12. Like the previous row, this relies on evaluation order the standard does not actually promise."
    }
];

// Export for quiz engine
const comprog1Week5Questions = {
    test1: comprog1Week5Test1,
    test2: comprog1Week5Test2,
    title: "ComProg1 Week 5: Operators for Fundamental Types",
    test2Label: "Tracing",
    test2Info: "20 questions - Type the final value of x and y",
    shuffleTest2: false
};
