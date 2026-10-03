// ComProg1 Week 10: File Streams
// Test 1: Multiple Choice (20 Questions) - Items 1-20
// Test 2: Identification (10 Questions) - Items 21-30
// Test 3: True or False (10 Questions) - Items 31-40

// ==========================================
// TEST 1: MULTIPLE CHOICE (20 Questions)
// ==========================================
const comprog1Week10Test1 = [
    // ---------- Why files, and the <fstream> header ----------
    {
        type: "multiple-choice",
        question: "Why would a program save its results in a text file instead of keeping them in variables?",
        options: [
            "A file keeps the data after the program ends, while a variable only holds it while the program runs",
            "A file can hold numbers, while a variable can only hold text",
            "A file makes the program run faster than using variables",
            "A file is the only place a program is allowed to store a number"
        ],
        answer: "A file keeps the data after the program ends, while a variable only holds it while the program runs",
        explanation: "Variables live only as long as the program does, so scores and profiles have to be written out if they are to survive. Speed is not the reason at all; the point is that the data is still there the next time the program starts."
    },
    {
        type: "multiple-choice",
        question: "Which header must be included before a program can declare a file stream?",
        options: ["#include <fstream>", "#include <iostream>", "#include <string>", "#include <filestream>"],
        answer: "#include <fstream>",
        explanation: "The file stream types ifstream, ofstream and fstream all come from <fstream>. <iostream> only brings in cin and cout, which is why leaving <fstream> out is listed among the common errors."
    },
    {
        type: "multiple-choice",
        question: "Which stream type is used to read values out of a text file?",
        options: ["ifstream", "ofstream", "cout", "ios::app"],
        answer: "ifstream",
        explanation: "The i stands for input, so an ifstream brings data from the file into the program. ofstream points the other way and sends data from the program out to the file."
    },
    {
        type: "multiple-choice",
        question: "A program must both read from and write to the same file. Which stream type covers both directions?",
        options: ["fstream", "ifstream", "ofstream", "iostream"],
        answer: "fstream",
        explanation: "fstream is the combined type, so one object can do input and output. Choosing ifstream or ofstream would commit the program to only one of the two directions."
    },
    {
        type: "multiple-choice",
        question: "A program keeps an activity log and must never lose the entries written on earlier runs. Which line opens the file correctly?",
        options: [
            "ofstream file(\"log.txt\", ios::app);",
            "ofstream file(\"log.txt\");",
            "ifstream file(\"log.txt\");",
            "ofstream file(\"log.txt\", ios::out);"
        ],
        answer: "ofstream file(\"log.txt\", ios::app);",
        explanation: "ios::app puts every new line at the end and leaves the earlier entries untouched. Opening the same file in plain output mode would wipe the whole log before the first new entry was even written."
    },

    // ---------- Writing a text file with ofstream ----------
    {
        type: "multiple-choice",
        question: "log.txt contains the single line First. What does the file contain after this code runs?\n\nofstream file(\"log.txt\", ios::app);\nfile << \"Second\" << endl;\nfile.close();",
        options: [
            "Two lines: First, then Second",
            "One line: Second",
            "Two lines: Second, then First",
            "One line: FirstSecond"
        ],
        answer: "Two lines: First, then Second",
        explanation: "Append mode leaves First in place and writes Second on the end, so both lines are there. The file would have held only Second if ios::app had been left out."
    },
    {
        type: "multiple-choice",
        question: "What is the purpose of the if statement in this code?\n\nofstream file(\"message.txt\");\nif (!file)\n{\n    cout << \"Error opening file.\" << endl;\n    return 1;\n}",
        options: [
            "It checks whether the file was opened successfully before the program tries to use it",
            "It checks whether the file is empty before writing to it",
            "It closes the file if it was already open somewhere else",
            "It checks whether the end of the file has been reached"
        ],
        answer: "It checks whether the file was opened successfully before the program tries to use it",
        explanation: "!file is true when the open failed, so the program reports the problem instead of writing into a stream that is not working. Emptiness and end of file are different questions entirely, and neither is what this test answers."
    },
    {
        type: "multiple-choice",
        question: "In the error check below, what does the statement return 1; do?\n\nif (!file)\n{\n    cout << \"Unable to open scores.txt\" << endl;\n    return 1;\n}",
        options: [
            "It ends main early and reports that the program did not finish normally",
            "It skips the rest of the if block and keeps reading the file",
            "It returns the first value stored in the file",
            "It reopens the file and tries the operation one more time"
        ],
        answer: "It ends main early and reports that the program did not finish normally",
        explanation: "Leaving main with a non-zero value is the usual way to signal failure, and it stops the program before it can process a file it never opened. Nothing is retried and no value is read; the function simply ends."
    },
    {
        type: "multiple-choice",
        question: "What does file.close(); do at the end of a program that has written to a file?",
        options: [
            "It releases the file, so the writing is finished and the stream is no longer attached to it",
            "It deletes the file from the disk",
            "It erases everything the program just wrote",
            "It reopens the file in append mode for the next run"
        ],
        answer: "It releases the file, so the writing is finished and the stream is no longer attached to it",
        explanation: "Closing finishes the work and lets go of the file, which is why every example ends with it. It never removes the file or its contents, and nothing in the pattern deletes anything."
    },

    // ---------- Reading values with ifstream ----------
    {
        type: "multiple-choice",
        question: "numbers.txt holds the three lines 10, 20 and 30. What does this code display?\n\nifstream file(\"numbers.txt\");\nint a, b, c;\nfile >> a;\nfile >> b;\nfile >> c;\ncout << a << endl;\ncout << b << endl;\ncout << c << endl;",
        options: [
            "10, then 20, then 30, each on its own line",
            "10, then 10, then 10, each on its own line",
            "30, then 20, then 10, each on its own line",
            "Nothing, because a file can only be read with getline"
        ],
        answer: "10, then 20, then 30, each on its own line",
        explanation: "Each >> picks up where the previous one stopped, so the three reads take the three values in order. The stream never rewinds, which is why the same value does not come back twice."
    },
    {
        type: "multiple-choice",
        question: "numbers.txt holds the three lines 10, 20 and 30. What does this loop display?\n\nint n;\nwhile (file >> n)\n{\n    cout << n << endl;\n}",
        options: [
            "10, then 20, then 30, each on its own line",
            "Only 10, because the loop runs once",
            "10, 20, 30 and then a fourth value of 0",
            "Nothing, because a while loop cannot test a read"
        ],
        answer: "10, then 20, then 30, each on its own line",
        explanation: "The read itself is the condition, so the loop takes one value per pass until there is nothing left. No extra pass happens, because the failing fourth read ends the loop instead of entering it."
    },
    {
        type: "multiple-choice",
        question: "In the loop while (file >> score), what makes the loop finally stop?",
        options: [
            "The read fails, which happens when the end of the file is reached",
            "A counter variable reaches the number of lines in the file",
            "The value of score becomes 0",
            "A close() call inside the loop body"
        ],
        answer: "The read fails, which happens when the end of the file is reached",
        explanation: "The read operation controls the loop, so the loop ends the moment a read cannot supply a value. No counter is involved, which is the whole advantage of this pattern over counting the lines yourself."
    },
    {
        type: "multiple-choice",
        question: "scores.txt holds the four values 70, 80, 90 and 100. What does this code display?\n\nint score, total = 0, count = 0;\nwhile (file >> score)\n{\n    total += score;\n    count++;\n}\nif (count > 0)\n{\n    double average = (double)total / count;\n    cout << \"Average: \" << average << endl;\n}",
        options: ["Average: 85", "Average: 84", "Average: 340", "Average: 4"],
        answer: "Average: 85",
        explanation: "The loop builds a total of 340 over 4 values, and the cast keeps the division honest at 85. Showing 340 would mean the division had been left out altogether."
    },
    {
        type: "multiple-choice",
        question: "scores.txt holds the three values 80, 85 and 90. What does this code display?\n\nint score, total = 0, count = 0;\nwhile (file >> score)\n{\n    total += score;\n    count++;\n}\ncout << total / count << endl;",
        options: [
            "85, because both operands are int so the division drops any fraction",
            "85.5, because the average of the three values keeps its decimal part",
            "255, because the division is ignored",
            "0, because total and count are never updated"
        ],
        answer: "85, because both operands are int so the division drops any fraction",
        explanation: "total is 255 and count is 3, and since both are int the result comes out as a whole number. Writing (double)total / count is what keeps the fractional part when the values do not divide evenly."
    },
    {
        type: "multiple-choice",
        question: "Why is the average printed inside if (count > 0) rather than on its own?",
        options: [
            "An empty file would leave count at 0, and dividing by 0 is not allowed",
            "The if statement is what makes the division produce a decimal result",
            "Without it the loop would never stop reading",
            "The if statement is needed to close the file afterwards"
        ],
        answer: "An empty file would leave count at 0, and dividing by 0 is not allowed",
        explanation: "The guard makes sure at least one value was actually read before the division is attempted. The decimal result comes from the cast, not from the if, and the loop ends on its own either way."
    },

    // ---------- Whole lines with getline ----------
    {
        type: "multiple-choice",
        question: "students.txt begins with the line Maria Santos. What does name hold after this code runs?\n\nstring name;\nfile >> name;",
        options: ["Maria", "Maria Santos", "Santos", "An empty string"],
        answer: "Maria",
        explanation: "The extraction operator stops at the first space, so it takes one word and leaves Santos in the stream. Using getline(file, name) is what captures the full name with its space intact."
    },
    {
        type: "multiple-choice",
        question: "students.txt holds the three lines Maria Santos, Juan dela Cruz and Ana Reyes. What does this code display?\n\nstring name;\nwhile (getline(file, name))\n{\n    cout << name << endl;\n}",
        options: [
            "The three full names, each on its own line",
            "Only the first words: Maria, Juan and Ana",
            "Only the first line, Maria Santos",
            "All the words run together on a single line"
        ],
        answer: "The three full names, each on its own line",
        explanation: "getline takes a whole line at a time, spaces included, and the loop repeats until there are no lines left. Stopping at the first word of each name is what file >> name would have done."
    },
    {
        type: "multiple-choice",
        question: "Which pair of lines shows the two ways of attaching a stream to scores.txt?",
        options: [
            "ifstream first(\"scores.txt\"); and ifstream second; second.open(\"scores.txt\");",
            "ifstream first(\"scores.txt\"); and ifstream second = \"scores.txt\";",
            "ifstream first; first.read(\"scores.txt\"); and ifstream second(\"scores.txt\");",
            "ifstream first(\"scores.txt\"); and ifstream second; second = open(\"scores.txt\");"
        ],
        answer: "ifstream first(\"scores.txt\"); and ifstream second; second.open(\"scores.txt\");",
        explanation: "The filename can be given when the stream is created, or supplied later through the open member function. Plain assignment is not one of the two ways, so a stream cannot be set up with an = and a filename."
    },

    // ---------- Common errors ----------
    {
        type: "multiple-choice",
        question: "A program compiles and runs but always prints File not found. Which explanation fits best?",
        options: [
            "The filename is misspelled or the file is not in the folder the program runs from",
            "The program forgot to call close() at the end",
            "The file has too many values for one ifstream to read",
            "ios::app was left out of the ifstream declaration"
        ],
        answer: "The filename is misspelled or the file is not in the folder the program runs from",
        explanation: "The open fails when the stream cannot find that exact name in the working directory, so the error check runs every time. A missing close() or a large file would not stop the stream from opening in the first place."
    },
    {
        type: "multiple-choice",
        question: "What is wrong with this code?\n\nifstream file(\"scores.txt\");\nint score;\nfile >> score;\ncout << score * 2 << endl;\nfile.close();",
        options: [
            "It uses the value even if the open or the read failed, because there is no error check",
            "It cannot compile, because an ifstream always needs ios::app",
            "It must use getline, because >> does not work on a file",
            "It closes the file too early, before the read happens"
        ],
        answer: "It uses the value even if the open or the read failed, because there is no error check",
        explanation: "With no if (!file) guard the program happily doubles whatever score happens to hold, which is the processing-after-a-failed-read mistake. The close() is in the right place and >> is perfectly valid on a file stream."
    }
];

// ==========================================
// TEST 2: IDENTIFICATION (10 Questions)
// ==========================================
const comprog1Week10Test2 = [
    {
        type: "identification",
        question: "Which header file must be included before a program can declare a file stream?",
        answer: ["<fstream>", "fstream", "#include <fstream>", "the fstream header"],
        explanation: "Written at the top as #include <fstream>, it supplies ifstream, ofstream and fstream. Leaving it out while still declaring a file stream is one of the common errors listed in Week 10."
    },
    {
        type: "identification",
        question: "Which stream type writes data from a program out to a text file?",
        answer: ["ofstream", "output file stream", "std::ofstream", "ofstream file"],
        explanation: "The o stands for output, so the data travels from the program to the file. Its counterpart ifstream carries values the other way, from the file into the program."
    },
    {
        type: "identification",
        question: "Which stream type reads data from a text file into a program?",
        answer: ["ifstream", "input file stream", "std::ifstream", "ifstream file"],
        explanation: "It plays the same role for a file that cin plays for the keyboard. Every reading example in Week 10 begins by declaring one of these."
    },
    {
        type: "identification",
        question: "Which single stream type can both read from and write to the same file?",
        answer: ["fstream", "std::fstream", "fstream file"],
        explanation: "It combines the two directions in one object, so no second stream is needed. The i and o versions each commit to only one direction."
    },
    {
        type: "identification",
        question: "Which mode flag, given as a second argument when opening an output file, adds new text to the end instead of replacing what is already there?",
        answer: ["ios::app", "app", "std::ios::app", "ios app", "the ios::app flag"],
        explanation: "Written as ofstream more(\"log.txt\", ios::app); it protects every entry already in the file. Opening the same file without it is what wipes the earlier content."
    },
    {
        type: "identification",
        question: "Which function reads a whole line from a file, spaces included, into a string variable?",
        answer: ["getline", "getline()", "getline(file, name)", "std::getline", "getline(file, line)"],
        explanation: "It keeps going to the end of the line rather than stopping at a space, which is what a full name needs. The extraction operator would have taken only the first word."
    },
    {
        type: "identification",
        question: "Which operator reads one whitespace-separated value out of a file stream?",
        answer: [">>", "extraction operator", "the extraction operator", "stream extraction operator", ">> operator"],
        explanation: "It is the same symbol used with cin, so file >> n fills n with the next value in the file. Treating a space as the end of the input is exactly why it cannot read a name that contains one."
    },
    {
        type: "identification",
        question: "Which member function releases the file once the program has finished with the stream?",
        answer: ["close", "close()", "file.close()", "the close function", "close();"],
        explanation: "Every reading and writing pattern in Week 10 finishes with it. It lets go of the file without changing or deleting anything that was written."
    },
    {
        type: "identification",
        question: "Besides naming the file when the stream is created, which member function attaches a file to a stream that was declared on an earlier line?",
        answer: ["open", "open()", "the open function", "file.open()", "second.open()"],
        explanation: "It is the second of the two ways to open a file, used as second.open(\"scores.txt\"); after a bare declaration. Either route still needs the same error check afterwards."
    },
    {
        type: "identification",
        question: "What is the name of the point where there is nothing left to read, so the next read fails and a reading loop stops?",
        answer: ["end of file", "end-of-file", "eof", "the end of the file", "end of the file"],
        explanation: "Reaching it is what makes while (file >> n) finish without any counter being needed. The read operation controls the loop, so a failed read is the signal to stop."
    }
];

// ==========================================
// TEST 3: TRUE OR FALSE (10 Questions)
// ==========================================
const comprog1Week10Test3 = [
    {
        type: "true-false",
        question: "A value stored in a variable is still available the next time the program is run.",
        options: ["True", "False"],
        answer: "False",
        explanation: "A variable holds its value only while the program is running, so it is gone once the program ends. Writing the value to a text file is what makes it last."
    },
    {
        type: "true-false",
        question: "Including only <iostream> is enough to declare an ifstream or an ofstream.",
        options: ["True", "False"],
        answer: "False",
        explanation: "<iostream> brings in cin and cout, but the file stream types come from <fstream>. Forgetting that second header is one of the common errors in the Week 10 list."
    },
    {
        type: "true-false",
        question: "Opening an existing file with ofstream file(\"log.txt\"); replaces whatever the file already contained.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Plain output mode writes a fresh file, so the earlier entries are lost. Adding ios::app as a second argument is what keeps them."
    },
    {
        type: "true-false",
        question: "Opening a file with ios::app adds new text to the end of the file.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Append mode is the right choice whenever earlier entries must remain, such as in a log. Without it the file is started over from empty."
    },
    {
        type: "true-false",
        question: "An ifstream can be used to write new lines into a file.",
        options: ["True", "False"],
        answer: "False",
        explanation: "An ifstream is for input only, so writing needs an ofstream or an fstream. The i in the name is the clue to which direction the data travels."
    },
    {
        type: "true-false",
        question: "file >> name captures a full name such as Maria Santos, space included.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The extraction operator treats the space as the end of the input, so name holds only Maria. Reading the whole line is what getline(file, name) is for."
    },
    {
        type: "true-false",
        question: "The loop while (file >> n) stops as soon as a read fails, including when the end of the file is reached.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The read operation is the condition, so the loop needs no counter and no line count. That is why this pattern works on a file of any length."
    },
    {
        type: "true-false",
        question: "The test if (!file) is true when the file could not be opened.",
        options: ["True", "False"],
        answer: "True",
        explanation: "It is the standard way to catch a bad filename or a missing file before anything else happens. Skipping the check leads to the program processing data it never actually read."
    },
    {
        type: "true-false",
        question: "Calling file.close() deletes the file from the disk.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Closing only releases the file and finishes the work of the stream; the contents stay exactly where they were written. Nothing in the Week 10 patterns removes a file at all."
    },
    {
        type: "true-false",
        question: "In the line double average = (double)total / count;, the cast is what keeps the fractional part of the average.",
        options: ["True", "False"],
        answer: "True",
        explanation: "With one operand turned into a double the division no longer drops the remainder. Writing total / count with two int values would give a whole number instead."
    }
];

// Export for quiz engine
const comprog1Week10Questions = {
    test1: comprog1Week10Test1,
    test2: comprog1Week10Test2,
    test3: comprog1Week10Test3,
    title: "ComProg1 Week 10: File Streams",
    test2Label: "Identification",
    test2Info: "10 questions - Type your answers",
    test3Label: "True or False",
    test3Info: "10 questions - Choose True or False"
};
