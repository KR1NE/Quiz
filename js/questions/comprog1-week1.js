// ComProg1 Week 1: Introduction to Computer Programming
// Test 1: Multiple Choice (20 Questions) - Items 1-20
// Test 2: Identification (20 Questions) - Items 21-40

// ==========================================
// TEST 1: MULTIPLE CHOICE (20 Questions)
// ==========================================
const comprog1Week1Test1 = [
    // What is programming / Input-Process-Output
    {
        type: "multiple-choice",
        question: "Programming is best defined as:",
        options: [
            "Designing a solution to a problem and expressing it as instructions a computer can execute",
            "Typing commands into a computer until it produces a result",
            "Installing and configuring software on a computer",
            "Converting a computer's output back into human language"
        ],
        answer: "Designing a solution to a problem and expressing it as instructions a computer can execute",
        explanation: "Notice that designing comes first. The typing is only the last step, so the thinking that produces the solution is the actual programming."
    },
    {
        type: "multiple-choice",
        question: "In the Input-Process-Output model, which stage answers the question 'What steps solve the problem?'",
        options: ["Process", "Input", "Output", "Feedback"],
        answer: "Process",
        explanation: "Input asks what information we have and Output asks what result should appear, so the steps in between are the Process. Feedback is not part of this three-part model."
    },

    // Levels of programming languages
    {
        type: "multiple-choice",
        question: "The instructions MOV AX, 5 and ADD AX, 3 belong to which level of programming language?",
        options: ["Assembly", "Machine", "High-level", "Database"],
        answer: "Assembly",
        explanation: "Assembly replaces binary with short mnemonics such as MOV and ADD, which is why the lesson calls it closer to hardware. Machine level would be raw binary instead."
    },
    {
        type: "multiple-choice",
        question: "Why is machine language described as very hard for humans?",
        options: [
            "Instructions are written as binary patterns such as 10110000 01100001",
            "It requires a paid licence before it can be used",
            "Only assembly programmers are permitted to write it",
            "It can only be run on very old computers"
        ],
        answer: "Instructions are written as binary patterns such as 10110000 01100001",
        explanation: "It is the only level the processor understands directly, but a wall of ones and zeros carries no visible meaning for a person reading it."
    },
    {
        type: "multiple-choice",
        question: "Which statement is written in a high-level language?",
        options: [
            "total = price * quantity;",
            "MOV AX, 5",
            "10110000 01100001",
            "ADD AX, 3"
        ],
        answer: "total = price * quantity;",
        explanation: "It reads almost like ordinary algebra, which is what the lesson means by readable and expressive. The other three are assembly or machine level."
    },
    {
        type: "multiple-choice",
        question: "A C++ program written in a high-level language must first be translated because:",
        options: [
            "The computer can only execute machine language instructions",
            "High-level languages contain too many errors to run directly",
            "Translation makes the source code shorter",
            "The operating system refuses to open plain text files"
        ],
        answer: "The computer can only execute machine language instructions",
        explanation: "Readable code is for the programmer; the processor only runs binary. Translating a C++ program is the step that bridges the two."
    },

    // Programming languages table
    {
        type: "multiple-choice",
        question: "According to the lesson, which language is used for game engines and high-performance operating systems?",
        options: ["C++", "Python", "SQL", "JavaScript"],
        answer: "C++",
        explanation: "Its domain is Systems and Games, and it is the only language on the list rated Hard. That difficulty buys the low-level control those programs need."
    },
    {
        type: "multiple-choice",
        question: "Which language is listed with Enterprise Software as its primary domain and Android applications as a typical use case?",
        options: ["Java", "JavaScript", "C++", "Python"],
        answer: "Java",
        explanation: "Java and JavaScript are the classic mix-up here. Despite the name, JavaScript's domain is Web Development, not enterprise or Android."
    },
    {
        type: "multiple-choice",
        question: "SQL is listed in the lesson under which primary domain?",
        options: ["Database Management", "Data Science and AI", "Web Development", "Systems and Games"],
        answer: "Database Management",
        explanation: "Its typical use is querying and managing relational data. Data Science and AI is Python's domain, which is the usual confusion since both work with data."
    },

    // Programming paradigms
    {
        type: "multiple-choice",
        question: "Which paradigm uses a pipeline of mathematical equations as its mental model?",
        options: ["Functional", "Procedural", "Database", "Object-Oriented"],
        answer: "Functional",
        explanation: "Its key concepts are immutability and pure functions, which is exactly what makes it suited to concurrent, data-heavy systems."
    },
    {
        type: "multiple-choice",
        question: "The Procedural paradigm is built around which key concept?",
        options: ["Functions and Variables", "Classes and Objects", "Predicates and Queries", "Immutability and Pure Functions"],
        answer: "Functions and Variables",
        explanation: "Its mental model is a sequence of steps, making it the natural fit for linear scripts and automation. This is the paradigm a beginner C++ program follows."
    },
    {
        type: "multiple-choice",
        question: "Which paradigm describes a program as a set of facts and rules?",
        options: ["Logical", "Database", "Functional", "Procedural"],
        answer: "Logical",
        explanation: "Its key concepts are predicates and queries, and the lesson lists AI rule engines and optimization as its ideal uses."
    },

    // Program structure and line-by-line meaning
    {
        type: "multiple-choice",
        question: "Where does execution of a C++ program begin?",
        options: [
            "In the function main()",
            "At the first #include directive",
            "At the first cout statement",
            "At the line using namespace std;"
        ],
        answer: "In the function main()",
        explanation: "The #include and using lines are set-up handled before running; main() is where the first executable statement lives."
    },
    {
        type: "multiple-choice",
        question: "What does the line using namespace std; allow you to do?",
        options: [
            "Write cout and endl directly instead of spelling out their full names",
            "Make screen output available to the program",
            "Mark the starting point of the program",
            "End the program successfully"
        ],
        answer: "Write cout and endl directly instead of spelling out their full names",
        explanation: "Making screen output available is the job of #include <iostream>. Confusing these two is common because they always appear together at the top of a program."
    },
    {
        type: "multiple-choice",
        question: "What does return 0; mean at the end of main()?",
        options: [
            "The program ended successfully",
            "The program produced zero output",
            "The program should run again from the start",
            "The value zero is displayed on the screen"
        ],
        answer: "The program ended successfully",
        explanation: "It is a status report handed back to the operating system, not something the user sees. Zero conventionally means no errors occurred."
    },
    {
        type: "multiple-choice",
        question: "In a C++ program, what is the purpose of the braces { }?",
        options: [
            "They group statements into a block",
            "They mark the beginning of a comment",
            "They enclose text that will be printed",
            "They separate one variable from another"
        ],
        answer: "They group statements into a block",
        explanation: "The braces after int main() hold everything the function will run. Text to be printed is enclosed in quotation marks instead."
    },

    // System development / Waterfall
    {
        type: "multiple-choice",
        question: "In the system development steps, which stage comes immediately AFTER Design?",
        options: ["Code", "Analysis", "System Test", "Maintenance"],
        answer: "Code",
        explanation: "The order is System Requirements, Analysis, Design, Code, System Test, Maintenance. Design produces the plan, and Code turns that plan into a working program."
    },
    {
        type: "multiple-choice",
        question: "Preparing test cases and test data, then recording and correcting the errors found, belongs to which step?",
        options: ["System Test", "Code", "Analysis", "Maintenance"],
        answer: "System Test",
        explanation: "System Test checks the finished system against the documented requirements. Maintenance also fixes errors, but only those reported by users after installation."
    },

    // cout and the insertion operator
    {
        type: "multiple-choice",
        question: "In the statement cout << \"Hello, World!\" << endl; what is the symbol << called?",
        options: [
            "The insertion operator",
            "The extraction operator",
            "The assignment operator",
            "The comparison operator"
        ],
        answer: "The insertion operator",
        explanation: "It inserts information into the output stream, and the arrows point toward the screen. The matching >> used with cin is the extraction operator."
    },

    // C vs C++
    {
        type: "multiple-choice",
        question: "Which pair correctly describes output in the C language rather than C++?",
        options: [
            "stdio.h with printf()",
            "iostream with cout",
            "stdio.h with cout",
            "iostream with printf()"
        ],
        answer: "stdio.h with printf()",
        explanation: "C pairs stdio.h with printf(); C++ pairs iostream with cout. The mixed pairs are the trap, since each header goes with its own output tool."
    }
];

// ==========================================
// TEST 2: IDENTIFICATION (20 Questions)
// ==========================================
const comprog1Week1Test2 = [
    // Escape sequences
    {
        type: "identification",
        question: "What escape sequence moves output to a new line?",
        answer: ["\\n", "\\N", "/n", "newline"],
        explanation: "The backslash warns the compiler that the next character is a command rather than a letter n."
    },
    {
        type: "identification",
        question: "What escape sequence produces a horizontal tab?",
        answer: ["\\t", "\\T", "/t", "tab"],
        explanation: "It jumps to the next tab stop, which is how the Name-Score-Grade example lines its columns up without counting spaces."
    },
    {
        type: "identification",
        question: "What escape sequence prints a backslash character?",
        answer: ["\\\\", "backslash", "double backslash"],
        explanation: "Two are needed because a lone backslash is read as the start of an escape sequence, so the first one escapes the second."
    },
    {
        type: "identification",
        question: "What escape sequence produces an alert or bell?",
        answer: ["\\a", "\\A", "/a", "alert", "bell"],
        explanation: "Think a for alert. It makes a sound instead of printing a character, so nothing appears on the screen."
    },
    {
        type: "identification",
        question: "What escape sequence produces a backspace?",
        answer: ["\\b", "\\B", "/b", "backspace"],
        explanation: "Think b for backspace. It moves the cursor back one position rather than adding anything to the output."
    },
    {
        type: "identification",
        question: "What escape sequence prints a double quotation mark?",
        answer: ["\\\"", "double quote", "double quotation mark"],
        explanation: "Without the backslash the compiler would treat that quote as the end of the string, cutting the text short."
    },

    // cout, insertion, endl, iostream
    {
        type: "identification",
        question: "What is the name of the standard output object in C++ that sends information to the screen?",
        answer: ["cout", "COUT", "Cout", "std::cout"],
        explanation: "Read it as character out. It normally sends its information to the screen or terminal."
    },
    {
        type: "identification",
        question: "What is the two-word name of the << symbol used with cout?",
        answer: ["insertion operator", "insertion", "the insertion operator", "stream insertion operator"],
        explanation: "It inserts or sends information into the output stream. Its opposite, >>, is the extraction operator."
    },
    {
        type: "identification",
        question: "What is written at the end of a cout statement to move the cursor to the next line?",
        answer: ["endl", "ENDL", "Endl", "std::endl"],
        explanation: "The lesson's advice is to use endl when emphasizing separate output statements, and \\n when formatting several lines inside one string."
    },
    {
        type: "identification",
        question: "Which header file must be included to make screen output available? (without angle brackets)",
        answer: ["iostream", "IOSTREAM", "Iostream"],
        explanation: "The name reads as input output stream. Without it, every cout line fails to compile."
    },

    // Program structure
    {
        type: "identification",
        question: "What is the name of the function where every C++ program starts?",
        answer: ["main", "main()", "MAIN", "Main", "int main", "int main()"],
        explanation: "Everything above it is preparation. Execution begins at the first statement inside its braces."
    },
    {
        type: "identification",
        question: "What keyword is written before the 0 on the last line of main() to end the program successfully?",
        answer: ["return", "RETURN", "Return", "return 0", "return 0;"],
        explanation: "The 0 is a status handed back to the operating system, where zero conventionally means no errors."
    },

    // C vs C++
    {
        type: "identification",
        question: "Which header file does the C language use for input and output?",
        answer: ["stdio.h", "STDIO.H", "Stdio.h", "stdio"],
        explanation: "C++ replaced it with iostream. The .h ending marks it as an older C-style header."
    },
    {
        type: "identification",
        question: "What function does C use to display output, in place of the cout of C++?",
        answer: ["printf", "printf()", "PRINTF", "Printf"],
        explanation: "It comes from stdio.h and takes the newline inside the string, as in printf with Hello, World! followed by \\n."
    },

    // System development
    {
        type: "identification",
        question: "Which system development step interviews users and stakeholders and lists the required features?",
        answer: ["system requirements", "requirements", "system requirement", "1. system requirements"],
        explanation: "It is step 1, and it identifies what the users and the organization expect the system to accomplish before any solving begins."
    },
    {
        type: "identification",
        question: "Which system development step studies the current process and prepares flowcharts or data-flow diagrams?",
        answer: ["analysis", "ANALYSIS", "Analysis", "2. analysis"],
        explanation: "Step 2 examines the requirements to work out which problems the system must solve. Design comes next and turns those findings into a plan."
    },
    {
        type: "identification",
        question: "Which system development step supports and improves the system after users have installed it?",
        answer: ["maintenance", "MAINTENANCE", "Maintenance", "6. maintenance"],
        explanation: "The final step: correcting reported errors, updating features as requirements change, and improving security and performance."
    },

    // Paradigms and language levels
    {
        type: "identification",
        question: "Which programming paradigm uses classes and objects as its key concept?",
        answer: ["object-oriented", "object oriented", "objectoriented", "oop", "object-oriented programming"],
        explanation: "Its mental model is a network of interacting entities, which is why it suits complex software architecture."
    },
    {
        type: "identification",
        question: "Which programming paradigm treats a program as a list of instructions to access data, and is ideal for data storage, retrieval and manipulation?",
        answer: ["database", "DATABASE", "Database", "db"],
        explanation: "Its key concept is queries. The Logical paradigm also uses queries, but it models a program as a set of facts and rules instead."
    },
    {
        type: "identification",
        question: "Which level of programming language uses short mnemonics such as MOV and ADD and is described as closer to hardware?",
        answer: ["assembly", "ASSEMBLY", "Assembly", "assembly language"],
        explanation: "It sits between machine language, which is raw binary, and high-level languages such as C++, which read almost like ordinary algebra."
    }
];

// Export for quiz engine
const comprog1Week1Questions = {
    test1: comprog1Week1Test1,
    test2: comprog1Week1Test2,
    title: "ComProg1 Week 1: Introduction to Computer Programming",
    test2Label: "Identification",
    test2Info: "20 questions - Type your answers"
};
