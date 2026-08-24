// Quiz 4: Parts 6-7 - Second Generation (1956-1963) & Third Generation (1964-1971)
// Professor-style format: 5 choices (a-e) with a "None of the Other Choices" option
const quiz4Questions = [
    // Part 6: Second Generation - Transistors
    {
        question: "Who invented the junction transistor in 1948?",
        options: ["Shockley, Bardeen and Brattain", "Kilby and Noyce", "Jobs and Wozniak", "Hewlett and Packard", "None of the Other Choices"],
        answer: "Shockley, Bardeen and Brattain"
    },
    {
        question: "Where was the junction transistor invented?",
        options: ["Bell Labs", "IBM Research", "MIT", "Xerox PARC", "None of the Other Choices"],
        answer: "Bell Labs"
    },
    {
        question: "Which company began commercial production of transistors for portable radios in 1954?",
        options: ["Texas Instruments", "Intel", "IBM", "Fairchild Semiconductor", "None of the Other Choices"],
        answer: "Texas Instruments"
    },
    {
        question: "Which company acquired transistor rights and went on to dominate the portable radio market?",
        options: ["Sony", "Panasonic", "Samsung", "Sharp", "None of the Other Choices"],
        answer: "Sony"
    },
    {
        question: "Who founded the Digital Equipment Corporation (DEC) in 1957?",
        options: ["Ken Olsen and Harlan Anderson", "William Bill Gates and Paul Allen", "Steve Jobs and Steve Wozniak", "William Hewlett and David Packard", "None of the Other Choices"],
        answer: "Ken Olsen and Harlan Anderson"
    },
    {
        question: "Who invented the integrated circuit in 1959?",
        options: ["Jack Kilby and Robert Noyce", "Shockley and Bardeen", "Turing and Flowers", "Eckert and Mauchly", "None of the Other Choices"],
        answer: "Jack Kilby and Robert Noyce"
    },
    {
        question: "Jack Kilby was working for which company when he invented the integrated circuit?",
        options: ["Texas Instruments", "Fairchild Semiconductor", "Intel", "IBM", "None of the Other Choices"],
        answer: "Texas Instruments"
    },
    {
        question: "Robert Noyce was working for which company when he invented the integrated circuit?",
        options: ["Fairchild Semiconductor", "Texas Instruments", "Intel", "Bell Labs", "None of the Other Choices"],
        answer: "Fairchild Semiconductor"
    },
    {
        question: "Whose team devised COBOL in 1959?",
        options: ["Grace Murray Hopper", "John Backus", "Dennis Ritchie", "Ken Thompson", "None of the Other Choices"],
        answer: "Grace Murray Hopper"
    },
    {
        question: "What does COBOL stand for?",
        options: ["COmmon Business-Oriented Language", "Computer Basic Operating Language", "Code Oriented Binary Object Language", "COmputing Business Object Library", "None of the Other Choices"],
        answer: "COmmon Business-Oriented Language"
    },
    {
        question: "Which computer and its corresponding year of invention had the first CRT monitor?",
        options: ["PDP-1, 1959", "IBM 709, 1958", "IBM 7094, 1962", "PDP-2, 1960", "None of the Other Choices"],
        answer: "PDP-1, 1959"
    },
    {
        question: "Which of the following is considered to be the first computer game?",
        options: ["Spacewar!", "Pong", "Tennis for Two", "Adventure", "None of the Other Choices"],
        answer: "Spacewar!"
    },
    {
        question: "Which song did the IBM 7094 synthesize in 1961?",
        options: ["Daisy Bell (Bicycle Built for Two)", "Happy Birthday", "Twinkle Twinkle Little Star", "Mary Had a Little Lamb", "None of the Other Choices"],
        answer: "Daisy Bell (Bicycle Built for Two)"
    },
    {
        question: "Who programmed the first computer-synthesized singing voice on the IBM 7094?",
        options: ["John L. Kelly Jr. and Carol Lockbaum", "Grace Murray Hopper", "John Backus", "Alan Turing", "None of the Other Choices"],
        answer: "John L. Kelly Jr. and Carol Lockbaum"
    },
    {
        question: "The PDP-4 of 1962 was a computer of which word size?",
        options: ["18-bit", "16-bit", "12-bit", "8-bit", "None of the Other Choices"],
        answer: "18-bit"
    },
    {
        question: "The PDP-5 of 1963 was a computer of which word size?",
        options: ["12-bit", "18-bit", "16-bit", "8-bit", "None of the Other Choices"],
        answer: "12-bit"
    },

    // Part 7: Third Generation - Integrated Circuits
    {
        question: "The integrated circuit was invented during which years?",
        options: ["1959 to 1961", "1964 to 1967", "1970 to 1971", "1955 to 1958", "None of the Other Choices"],
        answer: "1959 to 1961"
    },
    {
        question: "DEC released the PDP-6 through the PDP-10 during which years?",
        options: ["1964 to 1967", "1959 to 1963", "1970 to 1975", "1955 to 1960", "None of the Other Choices"],
        answer: "1964 to 1967"
    },
    {
        question: "IBM released which series of mainframes from 1964 to 1971?",
        options: ["System/360", "System/370", "AS/400", "IBM PC Series", "None of the Other Choices"],
        answer: "System/360"
    },
    {
        question: "Which DEC model was its most popular, with over 600,000 units sold?",
        options: ["PDP-11", "PDP-8", "PDP-1", "VAX-11/780", "None of the Other Choices"],
        answer: "PDP-11"
    },
    {
        question: "In which year was the PDP-11 released?",
        options: ["1970", "1965", "1975", "1980", "None of the Other Choices"],
        answer: "1970"
    },
    {
        question: "The PDP-11 was DEC's first and only computer of which word size?",
        options: ["16-bit", "8-bit", "32-bit", "18-bit", "None of the Other Choices"],
        answer: "16-bit"
    },
    {
        question: "IBM released the System/370 series during which years?",
        options: ["1970 to 1971", "1964 to 1965", "1975 to 1976", "1980 to 1981", "None of the Other Choices"],
        answer: "1970 to 1971"
    },
    {
        question: "Which model numbers made up the IBM System/370?",
        options: ["Models 155 to 195", "Models 20 to 65", "Models 1 to 10", "Models 300 to 500", "None of the Other Choices"],
        answer: "Models 155 to 195"
    },
    {
        question: "Which of the following is the first high-level programming language for business data processing?",
        options: ["FORTRAN", "BASIC", "ALGOL", "PL/I", "None of the Other Choices"],
        answer: "None of the Other Choices",
        explanation: "COBOL (1959), devised by Grace Murray Hopper's team, was the first business-oriented high-level language."
    }
];
