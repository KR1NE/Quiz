// Quiz 4: Parts 6-7 - Second Generation (1956-1963) & Third Generation (1964-1971)
// Professor-style format: 5 choices (a-e) with a "None of the Other Choices" option
const quiz4Questions = [
    // Part 6: Second Generation - Transistors
    {
        question: "Who invented the junction transistor in 1948?",
        options: ["Shockley, Bardeen and Brattain", "Kilby and Noyce", "Jobs and Wozniak", "Hewlett and Packard", "None of the Other Choices"],
        answer: "Shockley, Bardeen and Brattain",
        explanation: "The three shared the 1956 Nobel Prize for it. Kilby and Noyce are the next step, the integrated circuit in 1959."
    },
    {
        question: "Where was the junction transistor invented?",
        options: ["Bell Labs", "IBM Research", "MIT", "Xerox PARC", "None of the Other Choices"],
        answer: "Bell Labs",
        explanation: "Bell Labs also gave us Shannon's information theory and later UNIX and C. Xerox PARC is the GUI and the mouse, two decades later."
    },
    {
        question: "Which company began commercial production of transistors for portable radios in 1954?",
        options: ["Texas Instruments", "Intel", "IBM", "Fairchild Semiconductor", "None of the Other Choices"],
        answer: "Texas Instruments",
        explanation: "TI moved first on transistors and would later employ Jack Kilby when he invented the IC. Intel did not exist until 1968."
    },
    {
        question: "Which company acquired transistor rights and went on to dominate the portable radio market?",
        options: ["Sony", "Panasonic", "Samsung", "Sharp", "None of the Other Choices"],
        answer: "Sony",
        explanation: "Licensing Bell Labs' patent turned a small Japanese firm into a global brand, and made the transistor radio the first mass-market electronic gadget."
    },
    {
        question: "Who founded the Digital Equipment Corporation (DEC) in 1957?",
        options: ["Ken Olsen and Harlan Anderson", "William Bill Gates and Paul Allen", "Steve Jobs and Steve Wozniak", "William Hewlett and David Packard", "None of the Other Choices"],
        answer: "Ken Olsen and Harlan Anderson",
        explanation: "DEC's minicomputers, the PDP line, were small and cheap enough for a single lab to own, breaking IBM's mainframe-only model."
    },
    {
        question: "Who invented the integrated circuit in 1959?",
        options: ["Jack Kilby and Robert Noyce", "Shockley and Bardeen", "Turing and Flowers", "Eckert and Mauchly", "None of the Other Choices"],
        answer: "Jack Kilby and Robert Noyce",
        explanation: "They worked independently at rival companies and arrived at the same idea months apart, so both are credited."
    },
    {
        question: "Jack Kilby was working for which company when he invented the integrated circuit?",
        options: ["Texas Instruments", "Fairchild Semiconductor", "Intel", "IBM", "None of the Other Choices"],
        answer: "Texas Instruments",
        explanation: "Kilby is TI, Noyce is Fairchild. Noyce later left Fairchild to co-found Intel in 1968."
    },
    {
        question: "Robert Noyce was working for which company when he invented the integrated circuit?",
        options: ["Fairchild Semiconductor", "Texas Instruments", "Intel", "Bell Labs", "None of the Other Choices"],
        answer: "Fairchild Semiconductor",
        explanation: "Intel is the trap here — Noyce did co-found it, but not until 1968, nine years after the IC."
    },
    {
        question: "Whose team devised COBOL in 1959?",
        options: ["Grace Murray Hopper", "John Backus", "Dennis Ritchie", "Ken Thompson", "None of the Other Choices"],
        answer: "Grace Murray Hopper",
        explanation: "Hopper wanted a language readable in plain English so business managers could check the code. Backus is FORTRAN; Ritchie and Thompson are C and UNIX."
    },
    {
        question: "What does COBOL stand for?",
        options: ["COmmon Business-Oriented Language", "Computer Basic Operating Language", "Code Oriented Binary Object Language", "COmputing Business Object Library", "None of the Other Choices"],
        answer: "COmmon Business-Oriented Language",
        explanation: "Common because it was meant to run on any manufacturer's machine, business-oriented because it targeted payroll and accounting rather than science."
    },
    {
        question: "Which computer and its corresponding year of invention had the first CRT monitor?",
        options: ["PDP-1, 1959", "IBM 709, 1958", "IBM 7094, 1962", "PDP-2, 1960", "None of the Other Choices"],
        answer: "PDP-1, 1959",
        explanation: "The PDP-1's screen is why it also ran the first computer game, Spacewar!. Before this, output meant printed paper or punched cards."
    },
    {
        question: "Which of the following is considered to be the first computer game?",
        options: ["Spacewar!", "Pong", "Tennis for Two", "Adventure", "None of the Other Choices"],
        answer: "Spacewar!",
        explanation: "Written at MIT in 1962 for the PDP-1 and its CRT display. Pong is the first commercially successful arcade game, ten years later."
    },
    {
        question: "Which song did the IBM 7094 synthesize in 1961?",
        options: ["Daisy Bell (Bicycle Built for Two)", "Happy Birthday", "Twinkle Twinkle Little Star", "Mary Had a Little Lamb", "None of the Other Choices"],
        answer: "Daisy Bell (Bicycle Built for Two)",
        explanation: "Arthur C. Clarke witnessed the demonstration, which is why HAL 9000 sings the same song as he is shut down in 2001: A Space Odyssey."
    },
    {
        question: "Who programmed the first computer-synthesized singing voice on the IBM 7094?",
        options: ["John L. Kelly Jr. and Carol Lockbaum", "Grace Murray Hopper", "John Backus", "Alan Turing", "None of the Other Choices"],
        answer: "John L. Kelly Jr. and Carol Lockbaum",
        explanation: "Another Bell Labs achievement — Max Mathews supplied the musical accompaniment for the same demonstration."
    },
    {
        question: "The PDP-4 of 1962 was a computer of which word size?",
        options: ["18-bit", "16-bit", "12-bit", "8-bit", "None of the Other Choices"],
        answer: "18-bit",
        explanation: "The PDP-4 was a cheaper, slower redesign of the 18-bit PDP-1, so it kept the same word size."
    },
    {
        question: "The PDP-5 of 1963 was a computer of which word size?",
        options: ["12-bit", "18-bit", "16-bit", "8-bit", "None of the Other Choices"],
        answer: "12-bit",
        explanation: "Learn the DEC word sizes as a set: PDP-1 and PDP-4 are 18-bit, PDP-5 and PDP-8 are 12-bit, and the PDP-11 is 16-bit."
    },

    // Part 7: Third Generation - Integrated Circuits
    {
        question: "The integrated circuit was invented during which years?",
        options: ["1959 to 1961", "1964 to 1967", "1970 to 1971", "1955 to 1958", "None of the Other Choices"],
        answer: "1959 to 1961",
        explanation: "It spans a range because Kilby's 1959 prototype had to be turned into Noyce's practical silicon version before it could be manufactured."
    },
    {
        question: "DEC released the PDP-6 through the PDP-10 during which years?",
        options: ["1964 to 1967", "1959 to 1963", "1970 to 1975", "1955 to 1960", "None of the Other Choices"],
        answer: "1964 to 1967",
        explanation: "This sits squarely inside the Third Generation, which is exactly when integrated circuits made these machines possible."
    },
    {
        question: "IBM released which series of mainframes from 1964 to 1971?",
        options: ["System/360", "System/370", "AS/400", "IBM PC Series", "None of the Other Choices"],
        answer: "System/360",
        explanation: "The 360 introduced one instruction set across a whole product family, so software written for a small model still ran on a big one. The System/370 follows in 1970."
    },
    {
        question: "Which DEC model was its most popular, with over 600,000 units sold?",
        options: ["PDP-11", "PDP-8", "PDP-1", "VAX-11/780", "None of the Other Choices"],
        answer: "PDP-11",
        explanation: "Its influence outlived the hardware: UNIX and the C language were both developed on a PDP-11 at Bell Labs."
    },
    {
        question: "In which year was the PDP-11 released?",
        options: ["1970", "1965", "1975", "1980", "None of the Other Choices"],
        answer: "1970",
        explanation: "Same year as the IBM System/370 — a useful pairing to remember, since both mark the close of the Third Generation."
    },
    {
        question: "The PDP-11 was DEC's first and only computer of which word size?",
        options: ["16-bit", "8-bit", "32-bit", "18-bit", "None of the Other Choices"],
        answer: "16-bit",
        explanation: "It broke DEC's habit of 12-bit and 18-bit machines. DEC's later 32-bit line was called VAX, not PDP."
    },
    {
        question: "IBM released the System/370 series during which years?",
        options: ["1970 to 1971", "1964 to 1965", "1975 to 1976", "1980 to 1981", "None of the Other Choices"],
        answer: "1970 to 1971",
        explanation: "It picks up right where the System/360 run ends in 1971, adding virtual memory while staying compatible with 360 software."
    },
    {
        question: "Which model numbers made up the IBM System/370?",
        options: ["Models 155 to 195", "Models 20 to 65", "Models 1 to 10", "Models 300 to 500", "None of the Other Choices"],
        answer: "Models 155 to 195",
        explanation: "The low model numbers, 20 to 65, belong to the earlier System/360 family instead."
    },
    {
        question: "Which of the following is the first high-level programming language for business data processing?",
        options: ["FORTRAN", "BASIC", "ALGOL", "PL/I", "None of the Other Choices"],
        answer: "None of the Other Choices",
        explanation: "It was COBOL in 1959, from Grace Murray Hopper's team. FORTRAN was first overall but aimed at science and engineering, not business."
    }
];
