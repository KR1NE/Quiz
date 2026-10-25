// ComProg1 Week 11: Using Functions and Classes
// Test 1: Multiple Choice (20 Questions) - Items 1-20
// Test 2: Identification (10 Questions) - Items 21-30
// Test 3: True or False (10 Questions) - Items 31-40

// ==========================================
// TEST 1: MULTIPLE CHOICE (20 Questions)
// ==========================================

const comprog1Week11Test1 = [
    {
        type: "multiple-choice",
        question: "What is a function?",
        options: [
            "A reusable piece of program functionality that performs a specific task",
            "A variable that is able to store more than one value at a time",
            "A loop that repeats a block of statements a fixed number of times",
            "A file that must be included at the top of every program"
        ],
        answer: "A reusable piece of program functionality that performs a specific task",
        explanation: "That is the central idea of the lesson. sqrt() is the example: you hand it a number, it carries out the square-root task, and it hands a result back."
    },
    {
        type: "multiple-choice",
        question: "double x = sqrt(25.0);\n\nWhat is 25.0 in this statement?",
        options: ["The argument", "The return value", "The function name", "The function-call operator"],
        answer: "The argument",
        explanation: "25.0 is the argument handed to the function, and 5.0 is the return value that comes back. The name is sqrt and the parentheses are the function-call operator."
    },
    {
        type: "multiple-choice",
        question: "In a function call, what are the parentheses ( ) called?",
        options: [
            "The function-call operator",
            "The member access operator",
            "The scope resolution operator",
            "The argument separator"
        ],
        answer: "The function-call operator",
        explanation: "The parentheses are what actually invoke the function. The values written inside them are the arguments."
    },
    {
        type: "multiple-choice",
        question: "double answer = pow(2.0, 3.0);\n\nWhich values are the arguments?",
        options: ["2.0 and 3.0", "8.0 only", "2.0 only", "answer and 8.0"],
        answer: "2.0 and 3.0",
        explanation: "pow is the function name, 2.0 and 3.0 are the arguments, and 8.0 is the return value. pow(x,y) raises x to the power y."
    },
    {
        type: "multiple-choice",
        question: "double b = 5 + sqrt(81.0);\n\nWhat value does b hold?",
        options: ["14", "9", "86", "5"],
        answer: "14",
        explanation: "sqrt(81.0) returns 9, and the 5 is then added to it, so b is 14. A return value can take part in a larger expression."
    },
    {
        type: "multiple-choice",
        question: "cout << sqrt(81.0);\n\nWhat does this display?",
        options: ["9", "81", "8.1", "Nothing, because the result was not stored in a variable first"],
        answer: "9",
        explanation: "A return value can be used directly wherever a value is expected, including as something sent to cout. Storing it in a variable first is optional."
    },
    {
        type: "multiple-choice",
        question: "double pow(double, double);\n\nWhich of these does this prototype NOT tell the compiler?",
        options: [
            "The statements that make up the function body",
            "The function name",
            "The return type",
            "The number and types of the arguments"
        ],
        answer: "The statements that make up the function body",
        explanation: "A prototype describes the interface only: the name, the return type, how many arguments there are and what types they have. The body is not part of it."
    },
    {
        type: "multiple-choice",
        question: "Which header must be included to use sqrt() and pow()?",
        options: ["<cmath>", "<cstdlib>", "<iomanip>", "<cctype>"],
        answer: "<cmath>",
        explanation: "cmath supplies sqrt(), pow(), ceil() and floor(). A program that calls sqrt() without including it will not compile."
    },
    {
        type: "multiple-choice",
        question: "Which header provides rand() and srand()?",
        options: ["<cstdlib>", "<cmath>", "<string>", "<iostream>"],
        answer: "<cstdlib>",
        explanation: "The random number functions live in cstdlib. cmath is the header for the mathematical functions."
    },
    {
        type: "multiple-choice",
        question: "Which header provides the string class and getline()?",
        options: ["<string>", "<iostream>", "<cctype>", "<iomanip>"],
        answer: "<string>",
        explanation: "The string class and getline() come from the string header. iostream is what provides cin and cout."
    },
    {
        type: "multiple-choice",
        question: "What is the result of ceil(4.2)?",
        options: ["5", "4", "4.2", "4.5"],
        answer: "5",
        explanation: "ceil() rounds upward, so anything above 4 becomes 5. floor(4.8) is the mirror case and gives 4."
    },
    {
        type: "multiple-choice",
        question: "Which statement correctly describes a class and an object?",
        options: [
            "A class is a type that combines data with operations, and an object is an instance of a class",
            "A class is an instance of an object",
            "A class is a variable and an object is a function",
            "A class and an object are two names for the same thing"
        ],
        answer: "A class is a type that combines data with operations, and an object is an instance of a class",
        explanation: "string is a standard class for storing text, and names such as name, address and message are objects of that class. A member function of a class is also called a method."
    },
    {
        type: "multiple-choice",
        question: "What is the result of round(4.6)?",
        options: ["5", "4", "4.6", "6"],
        answer: "5",
        explanation: "round() gives the nearest integer, and 4.6 is nearer to 5 than to 4. Unlike ceil() it does not always go upward."
    },
    {
        type: "multiple-choice",
        question: "What is the result of fabs(-3.7)?",
        options: ["3.7", "-3.7", "4", "-4"],
        answer: "3.7",
        explanation: "fabs() gives the absolute floating value, so the sign is dropped and the decimal part is kept. It does no rounding at all."
    },
    {
        type: "multiple-choice",
        question: "What is the result of ceil(-4.2)?",
        options: ["-4", "-5", "4", "5"],
        answer: "-4",
        explanation: "ceil() always rounds upward, and upward from -4.2 is -4. This is the case students most often reverse."
    },
    {
        type: "multiple-choice",
        question: "What is the result of round(-4.5)?",
        options: ["-5", "-4", "5", "4"],
        answer: "-5",
        explanation: "round(-4.5) gives -5, matching floor(-4.2), which also gives -5. Only ceil(-4.2) moves toward zero, giving -4."
    },
    {
        type: "multiple-choice",
        question: "Given the prototypes double sqrt(double); and double pow(double, double);\n\nWhich call is valid?",
        options: ["pow(2.0, 3.0);", "sqrt();", "pow(2.0);", "pow(2.0, 3.0, 4.0);"],
        answer: "pow(2.0, 3.0);",
        explanation: "The number of arguments must match the prototype. sqrt() supplies none where one is required, while the other two pow() calls supply one and three where exactly two are required."
    },
    {
        type: "multiple-choice",
        question: "int value = rand();\n\nWhat does this call do?",
        options: [
            "It takes no arguments and returns a pseudorandom integer",
            "It takes one argument and returns a pseudorandom integer",
            "It takes no arguments and returns nothing",
            "It initializes the random number generator"
        ],
        answer: "It takes no arguments and returns a pseudorandom integer",
        explanation: "rand() is an example of a function that needs no arguments but still gives a value back. Initializing the generator is the separate job of srand()."
    },
    {
        type: "multiple-choice",
        question: "int x = srand(10);\n\nWhy is this statement invalid?",
        options: [
            "srand() has a return type of void, so there is no value to assign",
            "srand() requires two arguments instead of one",
            "srand() may only be called from inside a loop",
            "srand() returns a double, which cannot be stored in an int"
        ],
        answer: "srand() has a return type of void, so there is no value to assign",
        explanation: "srand() performs an action, initializing the generator, rather than producing a result. Written on its own as srand(10); it is perfectly correct."
    },
    {
        type: "multiple-choice",
        question: "sqrt(number);\ngetline(cin, name);\nname.length();\n\nWhich of these is a method call?",
        options: ["name.length();", "sqrt(number);", "getline(cin, name);", "All three are method calls"],
        answer: "name.length();",
        explanation: "The first two are ordinary function calls. A method is reached through an object and the member access dot, which is exactly what name.length() does."
    }
];

// ==========================================
// TEST 2: IDENTIFICATION (10 Questions)
// ==========================================

const comprog1Week11Test2 = [
    {
        type: "identification",
        question: "What is the term for a value that is handed to a function when it is called?",
        answer: ["argument", "arguments", "an argument", "the argument"],
        explanation: "In sqrt(25.0) the value 25.0 is the argument. The matching value that comes back out is the return value."
    },
    {
        type: "identification",
        question: "What is the term for the value a function hands back to the code that called it?",
        answer: ["return value", "the return value", "return", "returned value"],
        explanation: "In sqrt(25.0) the return value is 5.0. It can be stored in a variable or used straight away inside a larger expression."
    },
    {
        type: "identification",
        question: "What is the name of the ( ) that follows a function name in a call?",
        answer: ["function-call operator", "function call operator", "call operator", "the function-call operator"],
        explanation: "The parentheses are what invoke the function, and any arguments are written inside them."
    },
    {
        type: "identification",
        question: "What is the name for a declaration that gives a function's name, return type and argument types but not its body?",
        answer: ["prototype", "function prototype", "a prototype", "the prototype"],
        explanation: "double pow(double, double); is a prototype. It describes the interface so the compiler knows how the function may be called."
    },
    {
        type: "identification",
        question: "Which header must be included to use the mathematical functions such as sqrt(), pow(), ceil() and floor()?",
        answer: ["cmath", "<cmath>"],
        explanation: "Each standard function belongs to a header, and the mathematical ones live in cmath."
    },
    {
        type: "identification",
        question: "Which header supplies the formatting tools?",
        answer: ["iomanip", "<iomanip>"],
        explanation: "iomanip is listed as the header for formatting tools, separate from iostream, which supplies cin and cout."
    },
    {
        type: "identification",
        question: "What return type is used for a function that performs an action but gives no value back?",
        answer: ["void"],
        explanation: "srand() is the example: it initializes the generator and returns nothing, which is why its result cannot be assigned to a variable."
    },
    {
        type: "identification",
        question: "What is the term for a type that combines data together with operations?",
        answer: ["class", "a class"],
        explanation: "string is a standard class for storing text. Creating string name = \"Arthur\"; makes an instance of it."
    },
    {
        type: "identification",
        question: "What is the term for an instance of a class?",
        answer: ["object", "an object"],
        explanation: "In string name = \"Arthur\"; the class is string and name is the object. Objects are what you call methods on."
    },
    {
        type: "identification",
        question: "A member function of a class is also known by what other name?",
        answer: ["method", "a method", "methods"],
        explanation: "name.length() is a call to a method of the string class. It is reached through the object and the member access dot."
    }
];

// ==========================================
// TEST 3: TRUE OR FALSE (10 Questions)
// ==========================================

const comprog1Week11Test3 = [
    {
        type: "true-false",
        question: "A return value can be used directly inside a larger expression without first being stored in a variable.",
        options: ["True", "False"],
        answer: "True",
        explanation: "double b = 5 + sqrt(81.0); adds 5 to the returned 9 and gives 14. The same return value can also be sent straight to cout."
    },
    {
        type: "true-false",
        question: "ceil() always rounds upward, so ceil(-4.2) gives -4.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Rounding upward from -4.2 reaches -4. By contrast floor(-4.2) rounds downward and gives -5."
    },
    {
        type: "true-false",
        question: "A function prototype includes the statements that make up the function body.",
        options: ["True", "False"],
        answer: "False",
        explanation: "A prototype describes only the interface: the name, the return type, and the number and types of the arguments. The body is nowhere in it."
    },
    {
        type: "true-false",
        question: "srand() has a return type of void, so its result cannot be assigned to a variable.",
        options: ["True", "False"],
        answer: "True",
        explanation: "It performs an action rather than producing a value, which is why int x = srand(10); is invalid. Calling it as srand(10); on its own is correct."
    },
    {
        type: "true-false",
        question: "rand() must be given one argument that sets the largest value it may return.",
        options: ["True", "False"],
        answer: "False",
        explanation: "rand() takes no arguments at all. It still returns a value, namely a pseudorandom integer."
    },
    {
        type: "true-false",
        question: "The number of arguments in a call may differ from the number listed in the function's prototype.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The number of arguments matters and must match. That is why sqrt(); and pow(2.0); are both invalid, while pow(2.0, 3.0); is fine."
    },
    {
        type: "true-false",
        question: "getline(cin, name) is an ordinary function call, while name.length() is a method call.",
        options: ["True", "False"],
        answer: "True",
        explanation: "A method is reached through an object and the member access dot. getline() and sqrt() are called on their own, with no object in front of them."
    },
    {
        type: "true-false",
        question: "floor(4.8) evaluates to 5, because the digits after the decimal point round the value up.",
        options: ["True", "False"],
        answer: "False",
        explanation: "floor() rounds downward regardless of the digits after the point, so floor(4.8) is 4. It is ceil(4.2) that gives 5."
    },
    {
        type: "true-false",
        question: "string is a class, and a declaration such as string name = \"Arthur\"; creates an object of that class.",
        options: ["True", "False"],
        answer: "True",
        explanation: "A class is a type that combines data with operations, and an object is an instance of it. Using the string class requires including the string header."
    },
    {
        type: "true-false",
        question: "In the statement double x = sqrt(25.0); the value 5.0 is the argument and 25.0 is the return value.",
        options: ["True", "False"],
        answer: "False",
        explanation: "It is the other way round. 25.0 is the argument handed in, and 5.0 is the return value handed back."
    }
];

// Export for quiz engine
const comprog1Week11Questions = {
    test1: comprog1Week11Test1,
    test2: comprog1Week11Test2,
    test3: comprog1Week11Test3,
    title: "ComProg1 Week 11: Using Functions and Classes",
    test2Label: "Identification",
    test2Info: "10 questions - Type your answers",
    test3Label: "True or False",
    test3Info: "10 questions - Choose True or False"
};
