// Quiz 1: Parts 0-1 - The Big Picture & Mechanical Era (1642-1820)
// Professor-style format: 5 choices (a-e) with a "None of the Other Choices" option
const quiz1Questions = [
    // Part 0: The Big Picture - Era Questions
    {
        question: "Which of the following is the core technology of the Mechanical Era (1642-1820)?",
        options: ["Gears and cranks", "Vacuum tubes", "Transistors", "Integrated circuits", "None of the Other Choices"],
        answer: "Gears and cranks",
        explanation: "Nothing electrical existed yet, so every calculation was carried by turning toothed wheels by hand. Vacuum tubes only arrive in 1904, transistors in 1948."
    },
    {
        question: "Which era is described as using punched cards, relays, and the newly invented vacuum tube?",
        options: ["Pre-Electronic Period (1884-1945)", "First Generation (1946-1958)", "Mechanical Era (1642-1820)", "Modern/Design Era (1822-1884)", "None of the Other Choices"],
        answer: "Pre-Electronic Period (1884-1945)",
        explanation: "It is the transition era: machines were still mostly electromechanical (relays clicking open and shut), but the vacuum tube had just appeared. Fully electronic machines define the First Generation instead."
    },
    {
        question: "The First Generation of computers (1946-1958) is defined by which core technology?",
        options: ["Vacuum tubes", "Transistors", "Integrated circuits", "Microprocessors", "None of the Other Choices"],
        answer: "Vacuum tubes",
        explanation: "Each generation is named after its switching component. Vacuum tubes were fast but huge, hot and prone to burning out, which is why ENIAC filled a room."
    },
    {
        question: "Which of the following are the landmark machines of the Second Generation (1956-1963)?",
        options: ["PDP-1 and IBM 7094", "ENIAC and EDVAC", "IBM System/360", "Altair 8800 and Apple II", "None of the Other Choices"],
        answer: "PDP-1 and IBM 7094",
        explanation: "Both were transistorized. ENIAC and EDVAC are First Generation tube machines, System/360 is Third Generation, and the Altair and Apple II are Fourth."
    },
    {
        question: "The Third Generation (1964-1971) was defined by which core technology?",
        options: ["Integrated Circuits", "Transistors", "Microprocessors", "Vacuum tubes", "None of the Other Choices"],
        answer: "Integrated Circuits",
        explanation: "The IC put many transistors on one chip of silicon. The microprocessor is the next step, when the whole CPU fits on a single chip in 1971."
    },
    {
        question: "Which era spans from 1971 up to the present day?",
        options: ["Fourth Generation", "Third Generation", "Fifth Generation", "Modern/Design Era", "None of the Other Choices"],
        answer: "Fourth Generation",
        explanation: "1971 is the year of the Intel 4004, the first microprocessor. Every machine since then, including the one you are using now, is still Fourth Generation."
    },
    {
        question: "Which of the following are the landmark machines of the Fourth Generation?",
        options: ["Altair 8800, Apple II, IBM PC", "ENIAC and UNIVAC", "PDP-1 and PDP-11", "Z3 and Harvard Mark I", "None of the Other Choices"],
        answer: "Altair 8800, Apple II, IBM PC",
        explanation: "All three are microprocessor-based personal computers. They mark the shift from computers owned by institutions to computers owned by individuals."
    },
    {
        question: "The Modern/Design Era (1822-1884) is best characterized by which concept?",
        options: ["Mechanical, but programmable in concept", "Fully electronic computing", "Integrated circuit fabrication", "Binary stored-program processing", "None of the Other Choices"],
        answer: "Mechanical, but programmable in concept",
        explanation: "It is called the Design Era because the ideas ran ahead of the technology. Babbage designed a general-purpose programmable machine that Victorian engineering could not actually build."
    },
    {
        question: "Which machine is the landmark of the Modern/Design Era?",
        options: ["Analytical Engine", "ENIAC", "PDP-1", "Altair 8800", "None of the Other Choices"],
        answer: "Analytical Engine",
        explanation: "Babbage's 1837 design already had input, a processor (the Mill) and memory (the Store) — the shape of a modern computer, a century early."
    },
    {
        question: "The First and Second Generations of computers overlap during which years?",
        options: ["1956 to 1958", "1958 to 1960", "1960 to 1963", "1964 to 1966", "None of the Other Choices"],
        answer: "1956 to 1958",
        explanation: "The First Generation runs 1946-1958 and the Second runs 1956-1963, so they share 1956 to 1958. Generations overlap because tube machines stayed in service while transistor machines were being introduced."
    },
    {
        question: "Which of the following is considered to be the very first mechanical calculator?",
        options: ["Pascaline", "Arithmometer", "Step Reckoner", "Difference Engine", "None of the Other Choices"],
        answer: "Pascaline",
        explanation: "1642, the earliest of the four. Watch the wording: the Pascaline was FIRST, but the Arithmometer of 1820 was the first commercially SUCCESSFUL one."
    },

    // Part 1: Mechanical Era - People and Inventions
    {
        question: "Who invented the Pascaline in 1642?",
        options: ["Blaise Pascal", "Gottfried Wilhelm von Leibniz", "Joseph Marie Jacquard", "Thomas de Colmar", "None of the Other Choices"],
        answer: "Blaise Pascal",
        explanation: "Pascal built it at 19 to help his father, a tax collector, with endless sums. The machine carries his name."
    },
    {
        question: "Which operations could the Pascaline perform?",
        options: ["Addition and subtraction only", "All four arithmetic operations", "Multiplication only", "Addition only", "None of the Other Choices"],
        answer: "Addition and subtraction only",
        explanation: "Its geared wheels only turned one way, so subtraction had to be faked using nine's complement. Doing all four operations had to wait for Leibniz."
    },
    {
        question: "Who among the following is known as a strong advocate of the binary system?",
        options: ["Gottfried Wilhelm von Leibniz", "Blaise Pascal", "Charles Babbage", "Thomas de Colmar", "None of the Other Choices"],
        answer: "Gottfried Wilhelm von Leibniz",
        explanation: "He documented binary arithmetic in 1703, two and a half centuries before any machine used it. Ironically his own Step Reckoner was decimal."
    },
    {
        question: "Who invented the Step Reckoner in 1673?",
        options: ["Blaise Pascal", "Charles Babbage", "Thomas de Colmar", "Joseph Marie Jacquard", "None of the Other Choices"],
        answer: "None of the Other Choices",
        explanation: "It was Gottfried Wilhelm von Leibniz. He improved on Pascal's machine by making it the first calculator to do all four operations."
    },
    {
        question: "How did the Step Reckoner perform multiplication?",
        options: ["By repeated addition and shifting", "By direct gear ratios", "By reading punched cards", "By electronic pulses", "None of the Other Choices"],
        answer: "By repeated addition and shifting",
        explanation: "Its stepped drum added the same number over and over, shifting one place for each digit. Computers still multiply this way at the hardware level."
    },
    {
        question: "Who invented the Jacquard loom in 1801?",
        options: ["Joseph Marie Jacquard", "Thomas de Colmar", "Blaise Pascal", "Charles Babbage", "None of the Other Choices"],
        answer: "Joseph Marie Jacquard",
        explanation: "A French weaver, not a mathematician. His machine matters to computing for how it was controlled, not for what it calculated."
    },
    {
        question: "What is the significance of the Jacquard loom to the history of computing?",
        options: ["It used punched cards that Babbage and Hollerith later borrowed", "It was the first computer", "It was the first machine to use binary code", "It was the first machine to perform division", "None of the Other Choices"],
        answer: "It used punched cards that Babbage and Hollerith later borrowed",
        explanation: "It was the first stored set of instructions a machine could read. That idea passed to Babbage's Analytical Engine, then to Hollerith, then into IBM."
    },
    {
        question: "The Jacquard loom used punched wooden cards to automate which process?",
        options: ["Weaving patterns", "Mathematical tabulation", "Census data storage", "Book printing", "None of the Other Choices"],
        answer: "Weaving patterns",
        explanation: "A hole let a hook through to lift a thread; no hole blocked it. Changing the cards changed the cloth without rebuilding the loom — that is programming."
    },
    {
        question: "Who invented the Arithmometer in 1820?",
        options: ["Thomas de Colmar", "Blaise Pascal", "Gottfried Wilhelm von Leibniz", "Joseph Marie Jacquard", "None of the Other Choices"],
        answer: "Thomas de Colmar",
        explanation: "Charles Xavier Thomas de Colmar, a French insurance executive who needed reliable arithmetic for his business, built it on Leibniz's stepped drum."
    },
    {
        question: "Which of the following is considered to be the first commercially successful mechanical calculator?",
        options: ["Pascaline", "Step Reckoner", "Analytical Engine", "Difference Engine", "None of the Other Choices"],
        answer: "None of the Other Choices",
        explanation: "It was the Arithmometer of Thomas de Colmar. The Pascaline and Step Reckoner were built only in small numbers, and Babbage's two engines were never finished in his lifetime."
    },
    {
        question: "How many arithmetic operations could the Arithmometer perform?",
        options: ["All 4 operations", "2 operations", "3 operations", "1 operation", "None of the Other Choices"],
        answer: "All 4 operations",
        explanation: "Add, subtract, multiply and divide — it inherited this from Leibniz's stepped drum, unlike the Pascaline which managed only two."
    },
    {
        question: "During which years was the Arithmometer manufactured?",
        options: ["1851 to 1915", "1820 to 1850", "1800 to 1820", "1900 to 1950", "None of the Other Choices"],
        answer: "1851 to 1915",
        explanation: "Note the gap: invented in 1820 but not sold until 1851. That 60-year production run is the reason it counts as commercially successful."
    },
    {
        question: "Blaise Pascal came from which country?",
        options: ["France", "Germany", "England", "United States", "None of the Other Choices"],
        answer: "France",
        explanation: "France also gave us Jacquard and Thomas de Colmar. Leibniz is the German of the group, Babbage the Englishman."
    },
    {
        question: "Gottfried Wilhelm von Leibniz came from which country?",
        options: ["Germany", "France", "England", "Italy", "None of the Other Choices"],
        answer: "Germany",
        explanation: "He is the German in a mostly French mechanical era, and is also remembered for inventing calculus independently of Isaac Newton."
    }
];
