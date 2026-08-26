// ComProg1 Quiz 2: Variables, Data Types, Operators, Functions & Classes
// Test 1: Multiple Choice (20 Questions) - Items 1-20
// Test 2: Identification (20 Questions) - Items 21-40

// ==========================================
// TEST 1: MULTIPLE CHOICE (20 Questions)
// ==========================================
const comprog1Quiz2Test1 = [
    // Identifiers (4 questions)
    {
        type: "multiple-choice",
        question: "Which identifier follows C++ naming conventions?",
        options: ["myVariable", "my-variable", "my variable", "123variable"],
        answer: "myVariable",
        explanation: "Only letters, digits and underscores are allowed. A hyphen would be read as minus, spaces split it into two tokens, and it cannot start with a digit."
    },
    {
        type: "multiple-choice",
        question: "Which character can be the FIRST character of a C++ identifier?",
        options: ["Underscore (_)", "Dollar sign ($)", "Hyphen (-)", "Digit (0-9)"],
        answer: "Underscore (_)",
        explanation: "Only a letter or an underscore may come first. Note that identifiers beginning with an underscore are usually reserved for the compiler and library."
    },
    {
        type: "multiple-choice",
        question: "Why can't you use 'double' as a variable name?",
        options: [
            "It is a reserved keyword",
            "It contains too many letters",
            "It starts with lowercase",
            "It has a vowel"
        ],
        answer: "It is a reserved keyword",
        explanation: "The compiler already has a meaning for it. The same applies to int, const, return and every other keyword — length and letter case have nothing to do with it."
    },
    {
        type: "multiple-choice",
        question: "Which is a valid C++ variable name?",
        options: ["_count", "1st_place", "total-sum", "my name"],
        answer: "_count",
        explanation: "An underscore is a legal first character. The other three break a rule each: starts with a digit, contains a hyphen, and contains a space."
    },

    // Data Types (4 questions)
    {
        type: "multiple-choice",
        question: "What is the default value of an uninitialized local int variable?",
        options: [
            "Undefined (garbage value)",
            "0",
            "1",
            "null"
        ],
        answer: "Undefined (garbage value)",
        explanation: "C++ does not clear memory for local variables, so you get whatever bytes were already there. This is why you should always initialize when you declare."
    },
    {
        type: "multiple-choice",
        question: "Which data type would you use to store 3.14159?",
        options: ["double", "int", "char", "bool"],
        answer: "double",
        explanation: "It has a decimal part, so it needs a floating-point type. An int would truncate it to 3, throwing away everything after the point."
    },
    {
        type: "multiple-choice",
        question: "What is the byte size of a 'double' data type?",
        options: ["8 bytes", "4 bytes", "2 bytes", "1 byte"],
        answer: "8 bytes",
        explanation: "Double the 4 bytes of a float, which is where the name comes from. More bytes means more precision, about 15 significant digits instead of 7."
    },
    {
        type: "multiple-choice",
        question: "Which data type uses the least memory?",
        options: ["char", "int", "double", "float"],
        answer: "char",
        explanation: "A char is 1 byte, the smallest addressable unit. int and float are 4 bytes and double is 8."
    },

    // Variables and Constants (4 questions)
    {
        type: "multiple-choice",
        question: "What does the following declare? const int MAX = 100;",
        options: [
            "A constant integer with value 100",
            "A variable that can change",
            "A function named MAX",
            "An array of 100 integers"
        ],
        answer: "A constant integer with value 100",
        explanation: "const locks the value, so MAX = 200; later would be a compiler error. The all-caps name is the usual convention for constants."
    },
    {
        type: "multiple-choice",
        question: "Which is the correct way to declare multiple variables of the same type?",
        options: [
            "int a, b, c;",
            "int a; b; c;",
            "int(a, b, c);",
            "int a & b & c;"
        ],
        answer: "int a, b, c;",
        explanation: "State the type once, then separate the names with commas. Using semicolons instead would make b and c look like undeclared variables."
    },
    {
        type: "multiple-choice",
        question: "What is initialization in C++?",
        options: [
            "Giving a variable its first value",
            "Creating a variable without a value",
            "Deleting a variable",
            "Changing a variable's type"
        ],
        answer: "Giving a variable its first value",
        explanation: "Creating it without a value is declaration. Initialization is the very first value it receives, as in int x = 5;."
    },
    {
        type: "multiple-choice",
        question: "What is wrong with: const double TAX_RATE;",
        options: [
            "Constants must be initialized when declared",
            "TAX_RATE cannot be uppercase",
            "double cannot be const",
            "Nothing is wrong"
        ],
        answer: "Constants must be initialized when declared",
        explanation: "Since a constant can never be assigned later, the declaration is its only chance to get a value. It should read const double TAX_RATE = 0.12;."
    },

    // Arithmetic Operators (4 questions)
    {
        type: "multiple-choice",
        question: "What is the result of 25 / 4 when both are integers?",
        options: ["6", "6.25", "7", "6.0"],
        answer: "6",
        explanation: "Integer division truncates rather than rounds, so 6.25 becomes 6, not 7. The decimal part is discarded entirely."
    },
    {
        type: "multiple-choice",
        question: "What is the result of 25 % 4?",
        options: ["1", "6", "6.25", "4"],
        answer: "1",
        explanation: "% gives the remainder: 4 goes into 25 six times making 24, leaving 1. The answer 6 is the quotient, which is what / would give."
    },
    {
        type: "multiple-choice",
        question: "In the expression 2 + 3 * 4, what is the result?",
        options: ["14", "20", "24", "9"],
        answer: "14",
        explanation: "Multiplication runs first, giving 3 * 4 = 12, then 2 + 12 = 14. Working strictly left to right would wrongly give 20."
    },
    {
        type: "multiple-choice",
        question: "What is the result of 10 - 3 - 2?",
        options: ["5", "9", "7", "3"],
        answer: "5",
        explanation: "Subtraction is left-associative, so it is (10 - 3) - 2 = 5. Grouping from the right would wrongly give 10 - 1 = 9."
    },

    // Prefix/Postfix and Functions (4 questions)
    {
        type: "multiple-choice",
        question: "If a = 10, what is a after: a++;",
        options: ["11", "10", "9", "12"],
        answer: "11",
        explanation: "On a line by itself, prefix and postfix do the same thing — a goes up by one either way. The difference only shows when the value is being used."
    },
    {
        type: "multiple-choice",
        question: "If b = 7, what is the value of c after: c = --b;",
        options: ["6", "7", "8", "5"],
        answer: "6",
        explanation: "Prefix decrement changes b first, then assigns, so both b and c end up 6. With c = b-- instead, c would get 7."
    },
    {
        type: "multiple-choice",
        question: "What does abs(-15) return?",
        options: ["15", "-15", "0", "1"],
        answer: "15",
        explanation: "Absolute value is the distance from zero, so the sign is dropped. abs(-15) and abs(15) both give 15."
    },
    {
        type: "multiple-choice",
        question: "What does pow(3, 4) return?",
        options: ["81", "12", "7", "64"],
        answer: "81",
        explanation: "3 to the power of 4 is 3 * 3 * 3 * 3 = 81. Watch the order: 64 would be 4 to the power of 3, with the arguments reversed."
    }
];

// ==========================================
// TEST 2: IDENTIFICATION (20 Questions)
// ==========================================
const comprog1Quiz2Test2 = [
    // Escape Sequences (4 questions)
    {
        type: "identification",
        question: "What escape sequence prints a double quote character?",
        answer: ["\\\"", "double quote", "quote"],
        explanation: "Inside a string the quote would otherwise end it early, so the backslash tells the compiler to print it instead."
    },
    {
        type: "identification",
        question: "What escape sequence moves the cursor to the beginning of the line?",
        answer: ["\\r", "\\R", "carriage return"],
        explanation: "Carriage return moves back without moving down, so anything printed next overwrites the line. \\n moves down as well."
    },
    {
        type: "identification",
        question: "What escape sequence creates a backslash character?",
        answer: ["\\\\", "backslash"],
        explanation: "Two are needed because one alone starts an escape sequence. This matters for Windows file paths, which need C:\\\\folder in code."
    },
    {
        type: "identification",
        question: "What escape sequence produces a beep/alert sound?",
        answer: ["\\a", "\\A", "alert", "beep"],
        explanation: "a for alert. It produces a sound rather than a printed character, though many modern terminals silence it."
    },

    // Operators (4 questions)
    {
        type: "identification",
        question: "What operator is used to get the remainder of division?",
        answer: ["%", "modulo", "mod", "percent"],
        explanation: "Called modulo. It only works on integers, and is the standard way to test divisibility — n % 2 == 0 means n is even."
    },
    {
        type: "identification",
        question: "What is the insertion operator used with cout?",
        answer: ["<<", "insertion", "left shift"],
        explanation: "The arrows point away from your data and toward cout, showing the direction the data flows — into the output stream."
    },
    {
        type: "identification",
        question: "What is the extraction operator used with cin?",
        answer: [">>", "extraction", "right shift"],
        explanation: "It points from cin toward your variable, pulling data out of the input stream. It is the mirror image of cout's <<."
    },
    {
        type: "identification",
        question: "What operator is used for string concatenation in C++?",
        answer: ["+", "plus", "addition"],
        explanation: "With numbers it adds, with strings it joins. \"Hello\" + \"World\" gives HelloWorld, and this dual behaviour is called operator overloading."
    },

    // Data Types and Keywords (4 questions)
    {
        type: "identification",
        question: "What keyword declares a variable that cannot be modified?",
        answer: ["const", "CONST", "Const", "constant"],
        explanation: "Short for constant. It must be given its value on the declaration line, since it can never be assigned afterwards."
    },
    {
        type: "identification",
        question: "What data type stores a single character?",
        answer: ["char", "CHAR", "Char", "character"],
        explanation: "One byte, holding one character in single quotes such as 'A'. Double quotes would make it a string instead."
    },
    {
        type: "identification",
        question: "What data type stores true or false values?",
        answer: ["bool", "boolean", "Bool", "BOOL"],
        explanation: "Named after George Boole. In C++ the keyword is bool, not boolean, and printing one shows 1 or 0 unless you use boolalpha."
    },
    {
        type: "identification",
        question: "What data type stores decimal numbers with double precision?",
        answer: ["double", "Double", "DOUBLE"],
        explanation: "Called double because it uses 8 bytes against float's 4, giving about twice the precision. It is the usual default for decimals."
    },

    // Functions (4 questions)
    {
        type: "identification",
        question: "What function returns the absolute value of a number?",
        answer: ["abs", "abs()", "ABS", "Abs"],
        explanation: "It removes the sign, giving the distance from zero. Use fabs when working with floating-point values."
    },
    {
        type: "identification",
        question: "What function calculates a number raised to a power?",
        answer: ["pow", "pow()", "POW", "Pow"],
        explanation: "The base comes first and the exponent second, so pow(2, 10) is 1024. C++ has no ^ operator for powers — that symbol is bitwise XOR."
    },
    {
        type: "identification",
        question: "What function calculates the square root?",
        answer: ["sqrt", "sqrt()", "SQRT", "Sqrt"],
        explanation: "From cmath, returning a double. Passing a negative number gives NaN, since real square roots of negatives do not exist."
    },
    {
        type: "identification",
        question: "What function reads an entire line including spaces?",
        answer: ["getline", "getline()", "Getline", "GETLINE"],
        explanation: "Written getline(cin, variable). It is needed because cin >> stops at the first space, so it cannot capture a full name or sentence."
    },

    // Headers and I/O (4 questions)
    {
        type: "identification",
        question: "What header file contains sqrt() and pow()?",
        answer: ["cmath", "CMATH", "Cmath", "math.h"],
        explanation: "cmath is the C++ form of the older C header math.h. It also supplies abs, ceil, floor and the trigonometric functions."
    },
    {
        type: "identification",
        question: "What header file is needed for the string class?",
        answer: ["string", "STRING", "String"],
        explanation: "Required for the string class and methods such as length(). Including iostream alone is not enough, even though cout can print strings."
    },
    {
        type: "identification",
        question: "What C++ object is used for keyboard input?",
        answer: ["cin", "CIN", "Cin"],
        explanation: "Character IN, from the iostream header, used with >>. It skips leading whitespace and stops at the next space or newline."
    },
    {
        type: "identification",
        question: "What function converts a value from one type to another explicitly?",
        answer: ["static_cast", "staticcast", "cast", "static cast"],
        explanation: "Written static_cast<double>(x). It is how you avoid integer division, since static_cast<double>(25) / 4 gives 6.25 instead of 6."
    }
];

// Export for quiz engine
const comprog1Quiz2Questions = {
    test1: comprog1Quiz2Test1,
    test2: comprog1Quiz2Test2,
    title: "ComProg1: Variables, Operators & Functions (Set 2)"
};
