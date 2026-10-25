// ComProg1 Week 12: User-Defined Functions
// Test 1: Multiple Choice (20 Questions) - Items 1-20
// Test 2: Identification (10 Questions) - Items 21-30
// Test 3: True or False (10 Questions) - Items 31-40

// ==========================================
// TEST 1: MULTIPLE CHOICE (20 Questions)
// ==========================================

const comprog1Week12Test1 = [
    {
        type: "multiple-choice",
        question: "Which principle describes dividing a larger problem into smaller tasks?",
        options: ["Modularity", "Reusability", "Readability", "Maintainability"],
        answer: "Modularity",
        explanation: "Modularity is about breaking a large problem down. Reusability, readability, maintainability and easier debugging are the other benefits listed."
    },
    {
        type: "multiple-choice",
        question: "Which principle describes being able to call the same logic many times?",
        options: ["Reusability", "Modularity", "Debugging", "Readability"],
        answer: "Reusability",
        explanation: "Writing add() once and calling it with different values is the reusable version of repeating the same arithmetic in main()."
    },
    {
        type: "multiple-choice",
        question: "Which benefit of using functions means that errors can be isolated to specific functions?",
        options: ["Debugging", "Reusability", "Readability", "Modularity"],
        answer: "Debugging",
        explanation: "When each task sits in its own function, a fault can be traced to one logical unit. Maintainability is the related benefit of updating that one unit."
    },
    {
        type: "multiple-choice",
        question: "Which of these is a user-defined function rather than one from the standard library?",
        options: ["calculateArea(3.5)", "sqrt(25)", "pow(2, 3)", "toupper('a')"],
        answer: "calculateArea(3.5)",
        explanation: "sqrt, pow and toupper come ready-made from the standard library. square, calculateArea and isEven are the programmer-written examples."
    },
    {
        type: "multiple-choice",
        question: "int multiply(int a, int b) {\n    int product = a * b;\n    return product;\n}\n\nWhat is the int at the very start of this definition?",
        options: ["The return type", "The function name", "A parameter", "The function body"],
        answer: "The return type",
        explanation: "The leading int is the return type and multiply is the function name. The type describes what kind of value the function hands back."
    },
    {
        type: "multiple-choice",
        question: "int multiply(int a, int b) {\n    int product = a * b;\n    return product;\n}\n\nWhat is (int a, int b) in this definition?",
        options: ["The parameter list", "The argument list", "The function body", "The prototype"],
        answer: "The parameter list",
        explanation: "The parameter list names the values the function expects to receive. The braces that follow enclose the function body."
    },
    {
        type: "multiple-choice",
        question: "void greet() { cout << \"Hi\"; }\n\nWhich of the four function forms is this?",
        options: [
            "No parameters and no return value",
            "Parameters but no return value",
            "No parameters but returns a value",
            "Parameters and a return value"
        ],
        answer: "No parameters and no return value",
        explanation: "The empty parentheses mean no parameters and the void return type means nothing is handed back. Adding a parameter would give void greet(string n)."
    },
    {
        type: "multiple-choice",
        question: "int square(int n) { return n*n; }\n\nWhich of the four function forms is this?",
        options: [
            "Parameters and a return value",
            "No parameters and no return value",
            "Parameters but no return value",
            "No parameters but returns a value"
        ],
        answer: "Parameters and a return value",
        explanation: "It takes n as a parameter and returns a result. int getNumber() { return 100; } is the form that returns a value while taking no parameters."
    },
    {
        type: "multiple-choice",
        question: "int add(int a, int b); appears above main(), and the full body of add appears below main().\n\nWhat is the line above main() called?",
        options: ["The declaration", "The definition", "The call", "The return statement"],
        answer: "The declaration",
        explanation: "The three steps are declare, call and define. The declaration lets the compiler accept the call inside main(), and the definition below supplies the body."
    },
    {
        type: "multiple-choice",
        question: "int add(int a, int b) { return a + b; }\n\nint main() {\n    cout << add(5, 10);\n}\n\nWhat is the order of events?",
        options: [
            "main() begins, main() calls add(5, 10), add() returns 15, main() prints 15",
            "add() begins, then main() begins, and 15 is printed at the end",
            "main() prints 15 and only then calls add(5, 10)",
            "add() runs twice and main() prints 30"
        ],
        answer: "main() begins, main() calls add(5, 10), add() returns 15, main() prints 15",
        explanation: "A call temporarily transfers control to another block of code. Once add() has returned its value, control comes back to main()."
    },
    {
        type: "multiple-choice",
        question: "void displayLine() {\n    cout << \"----------------\" << endl;\n}\n\nWhat does this function hand back to its caller?",
        options: [
            "Nothing, because it is a void function",
            "The line of dashes, as a string",
            "The number of characters it printed",
            "The value 0"
        ],
        answer: "Nothing, because it is a void function",
        explanation: "A void function performs an action but does not return a value. Printing a line, showing a message and displaying a menu are typical tasks for one."
    },
    {
        type: "multiple-choice",
        question: "double calculateArea(double radius) {\n    const double PI = 3.14159;\n    return PI * radius * radius;\n}\n\nWith an input of 5, what area does the program display?",
        options: ["78.5397", "31.4159", "15.70795", "25"],
        answer: "78.5397",
        explanation: "The function multiplies PI by the radius twice, giving the area for a radius of 5. The returned value is then displayed by the caller."
    },
    {
        type: "multiple-choice",
        question: "int multiply(int a, int b) {\n    return a * b;\n}\n\nint main() {\n    cout << multiply(4, 5);\n}\n\nWhich of these are the parameters?",
        options: ["a and b", "4 and 5", "20", "multiply and main"],
        answer: "a and b",
        explanation: "Parameters are the names written in the definition, while 4 and 5 at the call are the arguments. The call itself displays 20."
    },
    {
        type: "multiple-choice",
        question: "void sample() {\n    int x = 10;\n    cout << x;\n}\n\nint main() {\n    sample();\n    cout << x;\n}\n\nWhy does this program fail to compile?",
        options: [
            "x is local to sample() and is not accessible inside main()",
            "x was never given a value",
            "cout cannot be used in two different functions",
            "sample() must return a value before main() can print"
        ],
        answer: "x is local to sample() and is not accessible inside main()",
        explanation: "Local variables are accessible only within their scope. That is exactly why the lesson leaves the second cout line commented out."
    },
    {
        type: "multiple-choice",
        question: "void changeValue(int x) {\n    x = 100;\n}\n\nint main() {\n    int num = 10;\n    changeValue(num);\n    cout << num;\n}\n\nWhat is the output?",
        options: ["10", "100", "0", "110"],
        answer: "10",
        explanation: "The called function receives a copy, so assigning 100 changes only that copy. The caller's own variable is left untouched."
    },
    {
        type: "multiple-choice",
        question: "void changeValue(int &x) {\n    x = 100;\n}\n\nint main() {\n    int num = 10;\n    changeValue(num);\n    cout << num;\n}\n\nWhat is the output?",
        options: ["100", "10", "0", "110"],
        answer: "100",
        explanation: "The single added ampersand makes the parameter an alias for the original variable, so the assignment reaches num itself. Without it the output would be 10."
    },
    {
        type: "multiple-choice",
        question: "Which description correctly matches pass by reference?",
        options: [
            "Written as int &x, receives an alias for the original, and can update the caller's variable",
            "Written as int x, receives a copy, and cannot update the caller's variable",
            "Written as int &x, receives a copy, and cannot update the caller's variable",
            "Written as int x, receives an alias, and can update the caller's variable"
        ],
        answer: "Written as int &x, receives an alias for the original, and can update the caller's variable",
        explanation: "Pass by reference is for when the caller needs its variable modified. Pass by value, written as int x, is for a read-only calculation."
    },
    {
        type: "multiple-choice",
        question: "void swapValues(int &a, int &b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 10, y = 20;\n    swapValues(x, y);\n    cout << x << \" \" << y;\n}\n\nWhat is the output?",
        options: ["20 10", "10 20", "20 20", "10 10"],
        answer: "20 10",
        explanation: "Both parameters are references, so the swap reaches the caller's own variables. The temp variable holds the first value while the exchange happens."
    },
    {
        type: "multiple-choice",
        question: "double computeAverage(int a, int b, int c) {\n    return (a + b + c) / 3.0;\n}\n\nbool isPassing(double avg) {\n    return avg >= 75;\n}\n\nAfter computeAverage(80, 85, 90), what does the program print for the pass or fail result?",
        options: ["Passed", "Failed", "85", "true"],
        answer: "Passed",
        explanation: "The average of the three marks is 85, which is at or above the threshold of 75, so isPassing returns true. Splitting the work this way is what makes the program modular."
    },
    {
        type: "multiple-choice",
        question: "int calculate(int x) { return x * 2; }\n\nint process(int a, int b) {\n    return calculate(a) + calculate(b);\n}\n\nint main() {\n    cout << process(3, 5);\n}\n\nWhat is the final output?",
        options: ["16", "8", "30", "13"],
        answer: "16",
        explanation: "calculate(3) returns 6 and calculate(5) returns 10, so process returns their sum. main() runs first and calls process(), which then calls calculate() twice."
    }
];

// ==========================================
// TEST 2: IDENTIFICATION (10 Questions)
// ==========================================

const comprog1Week12Test2 = [
    {
        type: "identification",
        question: "Which programming principle means dividing a larger problem into smaller tasks?",
        answer: ["modularity", "modular", "modularity principle"],
        explanation: "Functions support modularity, reusability, readability, maintainability and easier debugging."
    },
    {
        type: "identification",
        question: "What is the term for the names listed in a function's definition that receive incoming values?",
        answer: ["parameters", "parameter", "parameter list", "the parameters"],
        explanation: "In int multiply(int a, int b) the parameters are a and b. The values supplied at the call are the arguments."
    },
    {
        type: "identification",
        question: "What is the term for the actual values supplied at the point where a function is called?",
        answer: ["arguments", "argument", "the arguments"],
        explanation: "In multiply(4, 5) the arguments are 4 and 5. They are matched up with the parameters named in the definition."
    },
    {
        type: "identification",
        question: "What name is given to the part of a function enclosed in braces, which holds its statements?",
        answer: ["function body", "body", "the function body", "the body"],
        explanation: "The braces enclose the body, where the work is done. The return statement inside it sends the result to the caller."
    },
    {
        type: "identification",
        question: "Which keyword sends a result from inside a function back to the code that called it?",
        answer: ["return", "return statement", "the return statement"],
        explanation: "return product; hands the computed value back. A void function has no such value to send."
    },
    {
        type: "identification",
        question: "What is the term for the parameter-passing method in which the function receives a copy of the value?",
        answer: ["pass-by-value", "pass by value", "passing by value", "by value", "call by value"],
        explanation: "Written as int x, it cannot update the caller's variable, which is why it suits a read-only calculation."
    },
    {
        type: "identification",
        question: "What is the term for the parameter-passing method in which the parameter is an alias for the original variable?",
        answer: ["pass-by-reference", "pass by reference", "passing by reference", "by reference", "call by reference"],
        explanation: "Written as int &x, it can update the caller's variable, which is what makes swapValues work."
    },
    {
        type: "identification",
        question: "Which symbol is written before a parameter name to make it a reference parameter?",
        answer: ["&", "ampersand", "the ampersand", "and sign"],
        explanation: "int &x differs from int x by that single character, and it is the difference between an output of 100 and an output of 10."
    },
    {
        type: "identification",
        question: "What is the term for the region of a program within which a local variable can be accessed?",
        answer: ["scope", "its scope", "local scope"],
        explanation: "A variable declared inside sample() lives only there, so main() cannot see it."
    },
    {
        type: "identification",
        question: "What term describes a function that already comes with the standard library, rather than one written by the programmer?",
        answer: ["predefined", "predefined function", "standard library function", "library function", "built-in"],
        explanation: "sqrt, pow and toupper are predefined. square, calculateArea and isEven are user-defined."
    }
];

// ==========================================
// TEST 3: TRUE OR FALSE (10 Questions)
// ==========================================

const comprog1Week12Test3 = [
    {
        type: "true-false",
        question: "With pass by value the called function receives a copy, so the caller's variable keeps its original value.",
        options: ["True", "False"],
        answer: "True",
        explanation: "That is why changeValue(int x) leaves num at 10. Changing the parameter to int &x is what makes the output 100 instead."
    },
    {
        type: "true-false",
        question: "A function's declaration belongs below main() while its definition belongs above main().",
        options: ["True", "False"],
        answer: "False",
        explanation: "It is the other way round in the example: the declaration sits above main() so the call will compile, and the definition with the body follows below."
    },
    {
        type: "true-false",
        question: "A void function performs an action but does not return a value.",
        options: ["True", "False"],
        answer: "True",
        explanation: "displayLine() prints a row of dashes and hands nothing back. A value-returning function such as computeAverage produces a result for the caller instead."
    },
    {
        type: "true-false",
        question: "Local variables are accessible only within their own scope.",
        options: ["True", "False"],
        answer: "True",
        explanation: "A variable declared inside sample() cannot be read from main(). This is the rule the lesson states directly."
    },
    {
        type: "true-false",
        question: "Writing int &x instead of int x makes no difference to whether the caller's variable can be changed.",
        options: ["True", "False"],
        answer: "False",
        explanation: "It makes all the difference. int x receives a copy and cannot update the caller, while int &x is an alias for the original and can."
    },
    {
        type: "true-false",
        question: "Parameters are the values written at the call, and arguments are the names written in the definition.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The two are swapped here. Parameters are the names in the definition, such as a and b, while the arguments are the values at the call, such as 4 and 5."
    },
    {
        type: "true-false",
        question: "A function call temporarily transfers control to another block of code, and control returns to the caller afterwards.",
        options: ["True", "False"],
        answer: "True",
        explanation: "main() calls add(5, 10), add() calculates and returns 15, and then main() carries on and prints it."
    },
    {
        type: "true-false",
        question: "A function that takes no parameters cannot return a value.",
        options: ["True", "False"],
        answer: "False",
        explanation: "One of the four function forms is exactly that: int getNumber() { return 100; } takes nothing and still returns a value."
    },
    {
        type: "true-false",
        question: "One of the key takeaways is that main() should stay focused on coordinating work.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The other takeaways are one clear responsibility per function, descriptive names, parameters rather than unnecessary globals, and returning computed results when appropriate."
    },
    {
        type: "true-false",
        question: "A reference parameter is marked by writing an asterisk before the parameter name.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The reference form is written with an ampersand, as in int &x. That one character is what separates it from pass by value."
    }
];

// Export for quiz engine
const comprog1Week12Questions = {
    test1: comprog1Week12Test1,
    test2: comprog1Week12Test2,
    test3: comprog1Week12Test3,
    title: "ComProg1 Week 12: User-Defined Functions",
    test2Label: "Identification",
    test2Info: "10 questions - Type your answers",
    test3Label: "True or False",
    test3Info: "10 questions - Choose True or False"
};
