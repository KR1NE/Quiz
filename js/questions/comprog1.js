// ComProg1 Quiz: Variables, Data Types, Operators, Functions & Classes
// Test 1: Multiple Choice (30 Questions) - Items 1-30
// Test 2: Identification (10 Questions) - Items 31-40

// ==========================================
// TEST 1: MULTIPLE CHOICE (30 Questions)
// ==========================================
const comprog1Test1 = [
    // Identifiers (5 questions)
    {
        type: "multiple-choice",
        question: "Which of the following is a VALID identifier in C++?",
        options: ["student_name", "2ndScore", "$sum", "sum-salary"],
        answer: "student_name"
    },
    {
        type: "multiple-choice",
        question: "Which of the following is an INVALID identifier in C++?",
        options: ["2names", "_Bool", "student_age", "INT_MIN"],
        answer: "2names"
    },
    {
        type: "multiple-choice",
        question: "What is the first rule for creating identifiers in C++?",
        options: [
            "First character must be alphabetic or underscore",
            "First character must be a digit",
            "First character must be a special symbol",
            "First character can be anything"
        ],
        answer: "First character must be alphabetic or underscore"
    },
    {
        type: "multiple-choice",
        question: "Why is 'int' an invalid identifier name?",
        options: [
            "It is a reserved keyword",
            "It starts with a lowercase letter",
            "It contains only 3 characters",
            "It contains a vowel"
        ],
        answer: "It is a reserved keyword"
    },
    {
        type: "multiple-choice",
        question: "C++ identifiers are:",
        options: ["Case-sensitive", "Case-insensitive", "Only uppercase", "Only lowercase"],
        answer: "Case-sensitive"
    },

    // Data Types (5 questions)
    {
        type: "multiple-choice",
        question: "Which data type is used to store true or false values?",
        options: ["bool", "char", "int", "string"],
        answer: "bool"
    },
    {
        type: "multiple-choice",
        question: "Which data type is used to store a single character?",
        options: ["char", "string", "int", "bool"],
        answer: "char"
    },
    {
        type: "multiple-choice",
        question: "Which data type provides the highest precision for decimal numbers?",
        options: ["double", "float", "int", "long"],
        answer: "double"
    },
    {
        type: "multiple-choice",
        question: "What is the typical byte size of an 'int' data type?",
        options: ["4 bytes", "2 bytes", "1 byte", "8 bytes"],
        answer: "4 bytes"
    },
    {
        type: "multiple-choice",
        question: "What is the byte size of a 'char' data type?",
        options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
        answer: "1 byte"
    },

    // Variables and Constants (5 questions)
    {
        type: "multiple-choice",
        question: "What is the correct syntax to declare a constant in C++?",
        options: [
            "const double PI = 3.14159;",
            "constant PI = 3.14159;",
            "double const PI;",
            "PI = const 3.14159;"
        ],
        answer: "const double PI = 3.14159;"
    },
    {
        type: "multiple-choice",
        question: "What happens if you try to modify a constant after declaration?",
        options: [
            "Compiler error",
            "The value changes normally",
            "Runtime error",
            "Nothing happens"
        ],
        answer: "Compiler error"
    },
    {
        type: "multiple-choice",
        question: "What is the difference between declaration and initialization?",
        options: [
            "Declaration reserves memory; initialization gives the first value",
            "They are the same thing",
            "Initialization reserves memory; declaration gives the first value",
            "Declaration is for constants only"
        ],
        answer: "Declaration reserves memory; initialization gives the first value"
    },
    {
        type: "multiple-choice",
        question: "Which statement correctly declares AND initializes an integer variable?",
        options: ["int count = 0;", "int count;", "count = 0;", "integer count = 0;"],
        answer: "int count = 0;"
    },
    {
        type: "multiple-choice",
        question: "What is the purpose of the 'const' keyword?",
        options: [
            "To create a variable whose value cannot be changed",
            "To create a variable that must be changed",
            "To define a function",
            "To declare a class"
        ],
        answer: "To create a variable whose value cannot be changed"
    },

    // Arithmetic Operators (5 questions)
    {
        type: "multiple-choice",
        question: "What is the result of 17 % 5 in C++?",
        options: ["2", "3", "3.4", "17"],
        answer: "2"
    },
    {
        type: "multiple-choice",
        question: "What is the result of 17 / 5 when both operands are integers?",
        options: ["3", "3.4", "4", "2"],
        answer: "3"
    },
    {
        type: "multiple-choice",
        question: "In the expression 'a + b * 2', which operation is performed first?",
        options: ["b * 2", "a + b", "a + 2", "All at once"],
        answer: "b * 2"
    },
    {
        type: "multiple-choice",
        question: "What does the modulo operator (%) return?",
        options: [
            "The remainder after division",
            "The quotient",
            "The product",
            "The difference"
        ],
        answer: "The remainder after division"
    },
    {
        type: "multiple-choice",
        question: "Which has the highest precedence in C++?",
        options: ["Parentheses ()", "Multiplication *", "Addition +", "Assignment ="],
        answer: "Parentheses ()"
    },

    // Prefix vs Postfix Increment (5 questions)
    {
        type: "multiple-choice",
        question: "If x = 5, what is the value of y after: y = x++;",
        options: ["5", "6", "4", "0"],
        answer: "5"
    },
    {
        type: "multiple-choice",
        question: "If x = 5, what is the value of y after: y = ++x;",
        options: ["6", "5", "4", "7"],
        answer: "6"
    },
    {
        type: "multiple-choice",
        question: "What is the main difference between ++x (prefix) and x++ (postfix)?",
        options: [
            "Prefix increments before using; postfix uses then increments",
            "They are exactly the same",
            "Prefix is for integers; postfix is for doubles",
            "Postfix increments before using; prefix uses then increments"
        ],
        answer: "Prefix increments before using; postfix uses then increments"
    },
    {
        type: "multiple-choice",
        question: "If x = 10, what is the value of x after: x--;",
        options: ["9", "10", "11", "0"],
        answer: "9"
    },
    {
        type: "multiple-choice",
        question: "What is the output of: int x = 3; cout << x++ << ++x;",
        options: ["35", "34", "44", "33"],
        answer: "35"
    },

    // Functions and Headers (5 questions)
    {
        type: "multiple-choice",
        question: "Which header file is required to use sqrt() and pow()?",
        options: ["<cmath>", "<iostream>", "<string>", "<cstdlib>"],
        answer: "<cmath>"
    },
    {
        type: "multiple-choice",
        question: "What does a void function return?",
        options: ["Nothing", "Zero", "An empty string", "Null"],
        answer: "Nothing"
    },
    {
        type: "multiple-choice",
        question: "What is the result of pow(2, 3)?",
        options: ["8", "6", "5", "9"],
        answer: "8"
    },
    {
        type: "multiple-choice",
        question: "What function reads an entire line of input including spaces?",
        options: ["getline()", "cin >>", "read()", "scanf()"],
        answer: "getline()"
    },
    {
        type: "multiple-choice",
        question: "What is the result of sqrt(25)?",
        options: ["5", "25", "12.5", "625"],
        answer: "5"
    }
];

// ==========================================
// TEST 2: IDENTIFICATION (10 Questions)
// ==========================================
const comprog1Test2 = [
    {
        type: "identification",
        question: "What escape sequence is used to create a new line?",
        answer: ["\\n", "\\N", "/n", "newline"]
    },
    {
        type: "identification",
        question: "What escape sequence is used to create a horizontal tab?",
        answer: ["\\t", "\\T", "/t", "tab"]
    },
    {
        type: "identification",
        question: "What C++ object is used to receive input from the keyboard?",
        answer: ["cin", "CIN", "Cin"]
    },
    {
        type: "identification",
        question: "What C++ object is used to display output to the screen?",
        answer: ["cout", "COUT", "Cout"]
    },
    {
        type: "identification",
        question: "What function returns the square root of a number? (function name only)",
        answer: ["sqrt", "SQRT", "Sqrt"]
    },
    {
        type: "identification",
        question: "What function raises a number to a power? (function name only)",
        answer: ["pow", "POW", "Pow"]
    },
    {
        type: "identification",
        question: "What method returns the number of characters in a string object?",
        answer: ["length", "length()", "size", "size()"]
    },
    {
        type: "identification",
        question: "What header file is needed to use cin and cout? (without angle brackets)",
        answer: ["iostream", "IOSTREAM", "Iostream"]
    },
    {
        type: "identification",
        question: "What C++ keyword is used for explicit type conversion?",
        answer: ["static_cast", "staticcast", "static cast", "cast"]
    },
    {
        type: "identification",
        question: "What keyword makes a variable's value unchangeable?",
        answer: ["const", "CONST", "Const", "constant"]
    }
];

// Export for quiz engine
const comprog1Questions = {
    test1: comprog1Test1,
    test2: comprog1Test2,
    title: "ComProg1: Variables, Operators & Functions"
};
