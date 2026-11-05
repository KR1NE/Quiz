// ComProg1 Week 14: Two-Dimensional Arrays
// Test 1: Multiple Choice (20 Questions) - Items 1-20
// Test 2: Identification (10 Questions) - Items 21-30
// Test 3: True or False (10 Questions) - Items 31-40

// ==========================================
// TEST 1: MULTIPLE CHOICE (20 Questions)
// ==========================================

const comprog1Week14Test1 = [
    // ---------- Why a second dimension ----------
    {
        type: "multiple-choice",
        question: "A one-dimensional array holds the scores of five students. What changes when each of those five students takes three subjects?",
        options: [
            "Each value now needs two indices, one for the student and one for the subject",
            "The array has to be declared as a double instead of an int",
            "The scores can no longer be stored in an array at all",
            "Only the number of elements changes; one index is still enough"
        ],
        answer: "Each value now needs two indices, one for the student and one for the subject",
        explanation: "A single index can only pick one position in a list. Once the data is a table, it takes a row index and a column index to identify one value."
    },
    {
        type: "multiple-choice",
        question: "In a 2D grade table where the row is the student and the column is the subject, what does grades[2][1] refer to?",
        options: [
            "The third student's second subject",
            "The second student's first subject",
            "The second student's third subject",
            "The first student's second subject"
        ],
        answer: "The third student's second subject",
        explanation: "Both indices count from zero, so row 2 is the third student and column 1 is the second subject. Reading it as the second student would mean counting rows from one."
    },
    {
        type: "multiple-choice",
        question: "A class records 4 students who each take 3 subjects. How many grades does the table hold in total?",
        options: ["12", "7", "4", "3"],
        answer: "12",
        explanation: "The element count of a 2D array is rows times columns, so 4 times 3 gives 12. Adding the two numbers instead would give 7, which is a common slip."
    },

    // ---------- Shape, rows and columns ----------
    {
        type: "multiple-choice",
        question: "For int grades[3][4];  what are the valid row indices and the valid column indices?",
        options: [
            "Rows 0 to 2 and columns 0 to 3",
            "Rows 1 to 3 and columns 1 to 4",
            "Rows 0 to 3 and columns 0 to 4",
            "Rows 0 to 4 and columns 0 to 3"
        ],
        answer: "Rows 0 to 2 and columns 0 to 3",
        explanation: "Each dimension is zero-based, so three rows give indices 0 to 2 and four columns give 0 to 3. Using index 3 for the row or 4 for the column would be out of bounds."
    },
    {
        type: "multiple-choice",
        question: "In the declaration dataType arrayName[rows][columns];  which index comes first when an element is accessed?",
        options: [
            "The row index comes first and the column index second",
            "The column index comes first and the row index second",
            "The order does not matter, because both reach the same element",
            "Whichever of the two is the smaller number"
        ],
        answer: "The row index comes first and the column index second",
        explanation: "The first subscript always selects the row and the second selects the column. Swapping them reaches a completely different element, or goes out of bounds."
    },
    {
        type: "multiple-choice",
        question: "Given this 3 by 4 table of values, what is numbers[1][2]?\n\nRow 0:  10  20   30   40\nRow 1:  50  60   70   80\nRow 2:  90 100  110  120",
        options: ["70", "60", "30", "100"],
        answer: "70",
        explanation: "Row 1 is the middle row and column 2 is the third entry in it, which is 70. Reading 30 would mean swapping the two indices."
    },

    // ---------- Initializing a 2D array ----------
    {
        type: "multiple-choice",
        question: "In a 2D initializer, what does each inner pair of braces group together?",
        options: [
            "One row of the array",
            "One column of the array",
            "One diagonal of the array",
            "A single element of the array"
        ],
        answer: "One row of the array",
        explanation: "The inner braces group the values of one row, which is what makes the initializer read like the table it represents. The outer braces hold the list of rows."
    },
    {
        type: "multiple-choice",
        question: "What does this code print?\n\nint grades[3][4] = {\n    {85, 90, 78, 92},\n    {88, 76, 95, 89},\n    {91, 84, 87, 93}\n};\ncout << grades[0][1];",
        options: ["90", "85", "88", "78"],
        answer: "90",
        explanation: "Row 0 is the first row and column 1 is its second value, which is 90. Printing 85 would be grades[0][0]."
    },
    {
        type: "multiple-choice",
        question: "Using the same grades table, what does grades[1][2] = 98; do?",
        options: [
            "It replaces the 95 in the second row with 98",
            "It replaces the whole second row with 98",
            "It adds a new element to the end of the array",
            "It replaces the 89 in the second row with 98"
        ],
        answer: "It replaces the 95 in the second row with 98",
        explanation: "Row 1 column 2 holds 95, so the assignment overwrites exactly that one element. Every other value in the table is left alone."
    },

    // ---------- Nested loops for input and output ----------
    {
        type: "multiple-choice",
        question: "When nested loops traverse a 2D array row by row, which loop is the outer one?",
        options: [
            "The loop over the rows",
            "The loop over the columns",
            "Either one, because the result is identical",
            "Whichever loop uses the variable i"
        ],
        answer: "The loop over the rows",
        explanation: "Going row by row means staying on one row while the inner loop sweeps its columns, so the row loop has to be on the outside. Swapping them would visit the table column by column instead."
    },
    {
        type: "multiple-choice",
        question: "Which nested loop correctly reads values into int matrix[2][3];?",
        options: [
            "for (int i = 0; i < 2; i++) for (int j = 0; j < 3; j++) cin >> matrix[i][j];",
            "for (int i = 0; i < 3; i++) for (int j = 0; j < 2; j++) cin >> matrix[i][j];",
            "for (int i = 0; i <= 2; i++) for (int j = 0; j <= 3; j++) cin >> matrix[i][j];",
            "cin >> matrix;"
        ],
        answer: "for (int i = 0; i < 2; i++) for (int j = 0; j < 3; j++) cin >> matrix[i][j];",
        explanation: "The bounds have to match the declaration: 2 rows and 3 columns, each stopping one before the size. The version with 3 and 2 swaps the dimensions, and the <= version runs past the end of both."
    },
    {
        type: "multiple-choice",
        question: "What is the output of this code?\n\nint numbers[3][3] = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        cout << numbers[i][j] << \" \";\n    }\n    cout << endl;\n}",
        options: [
            "Three lines reading 1 2 3, then 4 5 6, then 7 8 9",
            "One single line reading 1 2 3 4 5 6 7 8 9",
            "Nine separate lines, one value on each",
            "Three lines reading 1 4 7, then 2 5 8, then 3 6 9"
        ],
        answer: "Three lines reading 1 2 3, then 4 5 6, then 7 8 9",
        explanation: "The inner loop prints one row on a single line and the endl after it moves to the next line. Putting the endl inside the inner loop is what would print one value per line."
    },

    // ---------- Accumulating, rows and columns ----------
    {
        type: "multiple-choice",
        question: "What does this code print, given the 3 by 3 array holding 1 through 9?\n\nint total = 0;\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        total += numbers[i][j];\n    }\n}\ncout << total;",
        options: ["45", "15", "9", "0"],
        answer: "45",
        explanation: "The nested loops visit all nine elements, and 1 through 9 add up to 45. The accumulator has to start at zero for this to be right."
    },
    {
        type: "multiple-choice",
        question: "In this row-total code, which index stays fixed while the inner loop runs?\n\nfor (int i = 0; i < 3; i++) {\n    int sum = 0;\n    for (int j = 0; j < 3; j++)\n        sum += numbers[i][j];\n    cout << sum << endl;\n}",
        options: [
            "The row index i stays fixed while j sweeps the columns",
            "The column index j stays fixed while i sweeps the rows",
            "Both indices change on every step",
            "Neither index changes inside the loops"
        ],
        answer: "The row index i stays fixed while j sweeps the columns",
        explanation: "Holding the row and sweeping the columns is what produces the total of a single row. Swapping the roles of i and j turns the same shape of code into column totals."
    },
    {
        type: "multiple-choice",
        question: "Which change turns a row-total program into a column-total program?",
        options: [
            "Put the column loop on the outside and let the row loop vary inside it",
            "Change the accumulator from int to double",
            "Replace the inner for loop with a while loop",
            "Move the newline to inside the inner loop"
        ],
        answer: "Put the column loop on the outside and let the row loop vary inside it",
        explanation: "A column total needs the column held steady while the rows are swept, which means the column loop moves to the outside. The arithmetic inside stays exactly the same."
    },

    // ---------- Diagonal and transpose ----------
    {
        type: "multiple-choice",
        question: "Which condition identifies an element on the main diagonal of a square matrix?",
        options: [
            "The row index equals the column index",
            "The row index is greater than the column index",
            "The row and column indices add up to zero",
            "The row index is always zero"
        ],
        answer: "The row index equals the column index",
        explanation: "A diagonal element sits where i equals j, which is why the sum can be written with a single index as numbers[i][i]. Any other relationship between the indices is off the diagonal."
    },
    {
        type: "multiple-choice",
        question: "What does this code print?\n\nint a[3][3] = {\n    {2, 4, 6},\n    {1, 3, 5},\n    {7, 8, 9}\n};\nint sum = 0;\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        if (i == j) sum += a[i][j];\n    }\n}\ncout << sum;",
        options: ["14", "15", "45", "12"],
        answer: "14",
        explanation: "Only the diagonal elements count, so the sum is a[0][0] + a[1][1] + a[2][2], which is 2 + 3 + 9 = 14. 45 would be the total of every element."
    },
    {
        type: "multiple-choice",
        question: "Which assignment correctly builds the transpose of array A?",
        options: [
            "transpose[j][i] = A[i][j];",
            "transpose[i][j] = A[i][j];",
            "transpose[i][j] = A[j][j];",
            "transpose[i][i] = A[j][j];"
        ],
        answer: "transpose[j][i] = A[i][j];",
        explanation: "Transposing means swapping the roles of the two indices, so what was at row i column j lands at row j column i. Copying with the indices in the same order would just duplicate the array."
    },
    {
        type: "multiple-choice",
        question: "A 2 by 3 array is transposed. What are the dimensions of the result?",
        options: ["3 by 2", "2 by 3", "3 by 3", "2 by 2"],
        answer: "3 by 2",
        explanation: "Swapping rows and columns swaps the dimensions too, so 2 rows by 3 columns becomes 3 rows by 2 columns. The element count stays at six either way."
    },

    // ---------- Debugging checklist ----------
    {
        type: "multiple-choice",
        question: "A program declares int m[3][4]; but loops with i <= 3 and j <= 4. What is wrong?",
        options: [
            "Both conditions run one step too far and reach indices that are out of bounds",
            "Nothing is wrong, because <= is the normal way to include the last element",
            "Only the column loop is wrong; the row loop is fine",
            "The loops are fine but the array should have been declared int m[4][5];"
        ],
        answer: "Both conditions run one step too far and reach indices that are out of bounds",
        explanation: "With 3 rows and 4 columns the valid indices stop at 2 and 3, so both loops should use < rather than <=. This is the most common source of 2D array bugs."
    }
];

// ==========================================
// TEST 2: IDENTIFICATION (10 Questions)
// ==========================================

const comprog1Week14Test2 = [
    {
        type: "identification",
        question: "In a two-dimensional array, what does the first index select?",
        answer: ["row", "the row", "rows"],
        explanation: "The first subscript always picks the row and the second picks the column. Writing them the other way round reaches a different element."
    },
    {
        type: "identification",
        question: "In a two-dimensional array, what does the second index select?",
        answer: ["column", "the column", "columns", "col"],
        explanation: "The second subscript picks the column within the chosen row. Together the two indices identify exactly one element."
    },
    {
        type: "identification",
        question: "What is the term for the loop structure used to traverse every element of a two-dimensional array?",
        answer: ["nested loops", "nested loop", "nested for loops", "nested", "nested for loop"],
        explanation: "One loop sits inside another, with the outer loop normally walking the rows and the inner one the columns. That same pattern is used to read, print and process a table."
    },
    {
        type: "identification",
        question: "How many elements does int a[3][4]; hold?",
        answer: ["12", "twelve"],
        explanation: "The element count is rows times columns, so 3 times 4 is 12. Adding the two numbers would give 7, which is a common mistake."
    },
    {
        type: "identification",
        question: "How many rows does int m[2][5]; have?",
        answer: ["2", "two"],
        explanation: "The first bracket gives the number of rows, so this array has 2 rows and 5 columns. Its valid row indices are 0 and 1."
    },
    {
        type: "identification",
        question: "What is the name of the operation that swaps the rows and columns of a matrix?",
        answer: ["transpose", "transposition", "the transpose", "transposing"],
        explanation: "A transpose assigns each A[i][j] to position [j][i], so a 2 by 3 array becomes 3 by 2. The indices must be swapped, not copied in the same order."
    },
    {
        type: "identification",
        question: "Write the condition that is true exactly when an element lies on the main diagonal of a square matrix.",
        answer: ["i == j", "i==j", "i = = j", "row == column", "i equals j"],
        explanation: "A diagonal element has equal row and column indices, which is why the diagonal can also be walked as numbers[i][i]. Everything off the diagonal fails that test."
    },
    {
        type: "identification",
        question: "What is the term for a two-dimensional array that has the same number of rows as columns?",
        answer: ["square matrix", "square", "a square matrix", "square array"],
        explanation: "Only a square matrix has a main diagonal running corner to corner. That is why diagonal problems always use equal row and column counts."
    },
    {
        type: "identification",
        question: "What kind of variable must be set to zero before a nested loop starts adding up every element?",
        answer: ["accumulator", "sum", "total", "an accumulator", "counter"],
        explanation: "The accumulator collects the running total, so it has to start at zero or the result includes whatever rubbish was in it. This appears on the debugging checklist for a reason."
    },
    {
        type: "identification",
        question: "A two-dimensional array organises values into the shape of what everyday structure?",
        answer: ["table", "matrix", "grid", "a table"],
        explanation: "Thinking of a 2D array as a table of rows and columns is what makes the two indices intuitive. A matrix or grid is the same idea."
    }
];

// ==========================================
// TEST 3: TRUE OR FALSE (10 Questions)
// ==========================================

const comprog1Week14Test3 = [
    {
        type: "true-false",
        question: "In numbers[1][2], the 1 is the row index and the 2 is the column index.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The first subscript is always the row and the second is always the column. Both of them count from zero."
    },
    {
        type: "true-false",
        question: "In a two-dimensional array, the second index selects the row.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The second index selects the column; it is the first that selects the row. Swapping them reaches a different element or goes out of bounds."
    },
    {
        type: "true-false",
        question: "The declaration int a[2][3]; creates an array of 6 elements.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The element count is rows times columns, so 2 times 3 gives 6. Adding them instead would wrongly suggest 5."
    },
    {
        type: "true-false",
        question: "When a 2D array is traversed row by row, the outer loop normally walks the columns.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Going row by row means the outer loop walks the rows while the inner loop sweeps the columns of each one. Putting the column loop outside traverses the table column by column."
    },
    {
        type: "true-false",
        question: "In a 2D initializer, the inner pairs of braces group the values by row.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Each inner brace holds one row, which makes the initializer look like the table it represents. The outer braces simply hold the list of rows."
    },
    {
        type: "true-false",
        question: "An element of a square matrix is on the main diagonal when its row index equals its column index.",
        options: ["True", "False"],
        answer: "True",
        explanation: "That is exactly the i == j test, which is why the diagonal can be walked with a single index as numbers[i][i]."
    },
    {
        type: "true-false",
        question: "The statement transpose[i][j] = A[i][j]; correctly transposes array A.",
        options: ["True", "False"],
        answer: "False",
        explanation: "That copies the array unchanged, because the indices stay in the same order. A real transpose needs transpose[j][i] = A[i][j]."
    },
    {
        type: "true-false",
        question: "When printing a matrix as a grid, the newline should be placed inside the inner loop.",
        options: ["True", "False"],
        answer: "False",
        explanation: "A newline inside the inner loop would break the line after every single element. It belongs after the inner loop, so it runs once per completed row."
    },
    {
        type: "true-false",
        question: "Every element of a two-dimensional array must have the same data type.",
        options: ["True", "False"],
        answer: "True",
        explanation: "A 2D array is a rectangular collection of same-type values, just like its one-dimensional counterpart. The declared type applies to every element."
    },
    {
        type: "true-false",
        question: "A two-dimensional array can be filled from the keyboard using cin inside a pair of nested loops.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The usual pattern is cin >> matrix[i][j] with the row loop outside and the column loop inside. The loop bounds just have to match the declared dimensions."
    }
];

// Export for quiz engine
const comprog1Week14Questions = {
    test1: comprog1Week14Test1,
    test2: comprog1Week14Test2,
    test3: comprog1Week14Test3,
    title: "ComProg1 Week 14: Two-Dimensional Arrays",
    test2Label: "Identification",
    test2Info: "10 questions - Type your answers",
    test3Label: "True or False",
    test3Info: "10 questions - Choose True or False"
};
