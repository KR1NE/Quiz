// ComProg1 Quiz 1: Variables, Data Types, Operators, Functions & Classes
// Test 1: Multiple Choice (20 Questions) - Items 1-20
// Test 2: Identification (20 Questions) - Items 21-40

// ==========================================
// TEST 1: MULTIPLE CHOICE (20 Questions)
// ==========================================
const comprog1Test1 = [
    // Identifiers (4 questions)
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
        question: "C++ identifiers are:",
        options: ["Case-sensitive", "Case-insensitive", "Only uppercase", "Only lowercase"],
        answer: "Case-sensitive"
    },

    // Data Types (4 questions)
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

    // Variables and Constants (4 questions)
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

    // Arithmetic Operators (4 questions)
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
        question: "Which has the highest precedence in C++?",
        options: ["Parentheses ()", "Multiplication *", "Addition +", "Assignment ="],
        answer: "Parentheses ()"
    },

    // Prefix/Postfix and Functions (4 questions)
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
        question: "Which header file is required to use sqrt() and pow()?",
        options: ["<cmath>", "<iostream>", "<string>", "<cstdlib>"],
        answer: "<cmath>"
    },
    {
        type: "multiple-choice",
        question: "What is the result of pow(2, 3)?",
        options: ["8", "6", "5", "9"],
        answer: "8"
    }
];

// ==========================================
// TEST 2: IDENTIFICATION (20 Questions)
// ==========================================
const comprog1Test2 = [
    // Escape Sequences (4 questions)
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
        question: "What escape sequence prints a backslash character?",
        answer: ["\\\\", "backslash"]
    },
    {
        type: "identification",
        question: "What escape sequence prints a single quote?",
        answer: ["\\'", "single quote", "apostrophe"]
    },

    // I/O Objects (4 questions)
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
        question: "What manipulator inserts a newline and flushes the buffer?",
        answer: ["endl", "ENDL", "Endl"]
    },
    {
        type: "identification",
        question: "What header file is needed to use cin and cout? (without angle brackets)",
        answer: ["iostream", "IOSTREAM", "Iostream"]
    },

    // Functions (4 questions)
    {
        type: "identification",
        question: "What function returns the square root of a number?",
        answer: ["sqrt", "sqrt()", "SQRT", "Sqrt"]
    },
    {
        type: "identification",
        question: "What function raises a number to a power?",
        answer: ["pow", "pow()", "POW", "Pow"]
    },
    {
        type: "identification",
        question: "What function returns the absolute value of a number?",
        answer: ["abs", "abs()", "ABS", "Abs", "fabs"]
    },
    {
        type: "identification",
        question: "What function reads an entire line including spaces?",
        answer: ["getline", "getline()", "Getline", "GETLINE"]
    },

    // String and Data Types (4 questions)
    {
        type: "identification",
        question: "What method returns the number of characters in a string object?",
        answer: ["length", "length()", "size", "size()"]
    },
    {
        type: "identification",
        question: "What operator is used to concatenate strings?",
        answer: ["+", "plus", "addition"]
    },
    {
        type: "identification",
        question: "What data type stores whole numbers?",
        answer: ["int", "INT", "Int", "integer"]
    },
    {
        type: "identification",
        question: "What data type stores decimal numbers?",
        answer: ["double", "float", "Double", "Float"]
    },

    // Keywords and Conversion (4 questions)
    {
        type: "identification",
        question: "What C++ keyword is used for explicit type conversion?",
        answer: ["static_cast", "staticcast", "static cast", "cast"]
    },
    {
        type: "identification",
        question: "What keyword makes a variable's value unchangeable?",
        answer: ["const", "CONST", "Const", "constant"]
    },
    {
        type: "identification",
        question: "What header file contains sqrt() and pow()? (without angle brackets)",
        answer: ["cmath", "CMATH", "Cmath", "math"]
    },
    {
        type: "identification",
        question: "What header file is needed for the string class? (without angle brackets)",
        answer: ["string", "STRING", "String"]
    }
];

// Export for quiz engine
const comprog1Questions = {
    test1: comprog1Test1,
    test2: comprog1Test2,
    title: "ComProg1: Variables, Operators & Functions"
};
