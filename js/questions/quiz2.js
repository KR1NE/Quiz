// Quiz 2: Parts 2-3 - Modern Period (1822-1884) & Pre-Electronic Period (1884-1945)
// Professor-style format: 5 choices (a-e) with a "None of the Other Choices" option
const quiz2Questions = [
    // Part 2: Modern Period
    {
        question: "Who designed the Difference Engine in 1822?",
        options: ["Charles Babbage", "Countess Ada Lovelace", "Herman Hollerith", "Blaise Pascal", "None of the Other Choices"],
        answer: "Charles Babbage",
        explanation: "Babbage designed both engines. He started with the Difference Engine in 1822, then abandoned it for the far more ambitious Analytical Engine in 1837."
    },
    {
        question: "The Difference Engine was designed to do which of the following?",
        options: ["Tabulate polynomial functions", "Weave textile patterns", "Process census data", "Break enemy codes", "None of the Other Choices"],
        answer: "Tabulate polynomial functions",
        explanation: "Navigation and engineering tables of the day were hand-computed and full of errors. Babbage wanted a machine that could not make mistakes."
    },
    {
        question: "In which year did Charles Babbage propose the Analytical Engine?",
        options: ["1837", "1822", "1842", "1884", "None of the Other Choices"],
        answer: "1837",
        explanation: "Remember the sequence: Difference Engine 1822, Analytical Engine 1837, Lovelace's notes 1842, Hollerith's tabulator 1884."
    },
    {
        question: "Because of his work on the Analytical Engine, Charles Babbage is known as which of the following?",
        options: ["Father of the Modern Computer", "Father of the Internet", "The first computer programmer", "Father of Binary Arithmetic", "None of the Other Choices"],
        answer: "Father of the Modern Computer",
        explanation: "The first programmer title belongs to Countess Ada Lovelace, and Father of the Internet to Vint Cerf and Robert Kahn. Do not mix the titles up."
    },
    {
        question: "Which of the following best states the key difference between the Difference Engine and the Analytical Engine?",
        options: ["The Difference Engine did one specific job; the Analytical Engine was general-purpose", "The Analytical Engine was the simpler of the two", "The Difference Engine was electronic", "The Analytical Engine could only add and subtract", "None of the Other Choices"],
        answer: "The Difference Engine did one specific job; the Analytical Engine was general-purpose",
        explanation: "This is the single most important distinction in the era. Special-purpose means fixed at build time; general-purpose means the punched cards decide what it does."
    },
    {
        question: "Who is considered to be the first ever computer programmer?",
        options: ["Countess Ada Lovelace", "Charles Babbage", "Herman Hollerith", "Grace Murray Hopper", "None of the Other Choices"],
        answer: "Countess Ada Lovelace",
        explanation: "She wrote an algorithm for a machine that was never built. Grace Murray Hopper comes a century later with COBOL and the first computer bug."
    },
    {
        question: "What is the complete title of Ada Lovelace?",
        options: ["Augusta Ada King, Countess of Lovelace", "Lady Augusta Byron of Lovelace", "Princess Ada Cambridge", "Duchess Ada of York", "None of the Other Choices"],
        answer: "Augusta Ada King, Countess of Lovelace",
        explanation: "Born Augusta Ada Byron, daughter of the poet Lord Byron; King is her married surname, and Countess of Lovelace is the title that came with it."
    },
    {
        question: "What did Ada Lovelace recognize about the Analytical Engine that Babbage himself did not emphasize?",
        options: ["That it had applications beyond pure calculation", "That it could only perform mathematics", "That it would be too slow to be useful", "That it needed electrical power", "None of the Other Choices"],
        answer: "That it had applications beyond pure calculation",
        explanation: "She saw that if numbers could stand for notes or letters, the machine could compose music or manipulate symbols. Babbage saw only a very good calculator."
    },
    {
        question: "Which of the following did Ada Lovelace publish?",
        options: ["The first algorithm intended to be carried out by a machine", "The first computer operating manual", "The first high-level programming language", "The first database schema", "None of the Other Choices"],
        answer: "The first algorithm intended to be carried out by a machine",
        explanation: "It appeared in 1842 as Note G of her translation notes, a step-by-step method for computing Bernoulli numbers on the Analytical Engine."
    },
    {
        question: "Who invented the punched card tabulating machine in 1884?",
        options: ["Herman Hollerith", "Charles Babbage", "Thomas de Colmar", "Joseph Marie Jacquard", "None of the Other Choices"],
        answer: "Herman Hollerith",
        explanation: "He took Jacquard's punched-card idea and applied it to data instead of cloth, cutting the 1890 US census from years down to months."
    },
    {
        question: "Hollerith's tabulating machine began which era of data handling?",
        options: ["Semiautomatic data processing", "Electronic computing", "Personal computing", "The Internet age", "None of the Other Choices"],
        answer: "Semiautomatic data processing",
        explanation: "Semiautomatic because a human still had to punch and feed every card. The machine only did the counting and sorting."
    },
    {
        question: "Which of the following are the three main components of the Analytical Engine?",
        options: ["Input, Mill, Store", "CPU, RAM, ROM", "Keyboard, Monitor, Printer", "Cards, Gears, Output", "None of the Other Choices"],
        answer: "Input, Mill, Store",
        explanation: "Map them to modern parts: Input is the punched card reader, the Mill is the CPU and the Store is memory. That is a full computer in 1837."
    },
    {
        question: "In the Analytical Engine, which component corresponds to the modern CPU?",
        options: ["The Mill", "The Store", "The Input", "The Barrel", "None of the Other Choices"],
        answer: "The Mill",
        explanation: "A mill grinds raw material into product, so Babbage used it for the part that processes numbers. The Store only holds them."
    },
    {
        question: "Which of the following best describes 'The Store' of the Analytical Engine?",
        options: ["Memory capable of holding 1,000 numbers of 40 decimal digits", "The arithmetic processing unit", "The punched card reader", "The printing output device", "None of the Other Choices"],
        answer: "Memory capable of holding 1,000 numbers of 40 decimal digits",
        explanation: "Roughly 16.6 kilobytes of storage built entirely from brass gears — more memory than the first personal computers shipped with 140 years later."
    },
    {
        question: "The Analytical Engine is architecturally closer to which of the following?",
        options: ["Harvard architecture", "von Neumann architecture", "RISC architecture", "CISC architecture", "None of the Other Choices"],
        answer: "Harvard architecture",
        explanation: "Its program lived on punched cards while its data lived in the Store — two separate memories, which is exactly what defines Harvard architecture."
    },

    // Part 3: Pre-Electronic Period
    {
        question: "Who invented the vacuum tube diode in 1904?",
        options: ["John Ambrose Fleming", "Thomas Alva Edison", "Nikola Tesla", "Lee de Forest", "None of the Other Choices"],
        answer: "John Ambrose Fleming",
        explanation: "Fleming's diode made electronic switching possible, which is what the entire First Generation would later be built from. De Forest added the third element two years later."
    },
    {
        question: "Hollerith's tabulating company eventually became which company in 1924?",
        options: ["IBM", "Microsoft", "Apple", "Intel", "None of the Other Choices"],
        answer: "IBM",
        explanation: "His Tabulating Machine Company merged into CTR, which was renamed International Business Machines. IBM's punched-card roots go straight back to the 1890 census."
    },
    {
        question: "Who built the first electrically powered mechanical analogue computer in 1912?",
        options: ["Arthur Pollen", "Vannevar Bush", "Howard Aiken", "Konrad Zuse", "None of the Other Choices"],
        answer: "Arthur Pollen",
        explanation: "Analogue means it modelled the problem with continuously moving parts rather than counting digits. Pollen built his for naval gunnery."
    },
    {
        question: "What was the name of Arthur Pollen's analogue computer?",
        options: ["The Argo Clock", "The Difference Engine", "The Colossus", "The Bombe", "None of the Other Choices"],
        answer: "The Argo Clock",
        explanation: "Called a clock because it ran continuously to predict where an enemy ship would be. Colossus and the Bombe are Second World War codebreakers, three decades later."
    },
    {
        question: "Who built the first practical general-purpose differential analyser between 1928 and 1931?",
        options: ["Vannevar Bush and Harold Locke Hazen", "Atanasoff and Berry", "Eckert and Mauchly", "Shockley and Bardeen", "None of the Other Choices"],
        answer: "Vannevar Bush and Harold Locke Hazen",
        explanation: "Built at MIT, it solved differential equations mechanically and trained a generation of engineers, including several who later worked on ENIAC."
    },
    {
        question: "Which of the following is the first automatic electronic digital binary computer?",
        options: ["ENIAC", "EDVAC", "Harvard Mark I", "Colossus Mark 1", "None of the Other Choices"],
        answer: "None of the Other Choices",
        explanation: "It was the ABC, the Atanasoff-Berry Computer of 1937-1942. ENIAC was decimal not binary, the Harvard Mark I was electromechanical, and Colossus was special-purpose."
    },
    {
        question: "Who conceived the ABC Computer?",
        options: ["Atanasoff and Berry", "Eckert and Mauchly", "Babbage and Lovelace", "Turing and Flowers", "None of the Other Choices"],
        answer: "Atanasoff and Berry",
        explanation: "John Atanasoff and his graduate student Clifford Berry at Iowa State. A 1973 court ruling credited them over Eckert and Mauchly's ENIAC patent."
    },
    {
        question: "Which of the following is the key limitation of the ABC Computer?",
        options: ["It was not programmable", "It was not electronic", "It was not binary", "It was not automatic", "None of the Other Choices"],
        answer: "It was not programmable",
        explanation: "It could only solve systems of linear equations, the one job it was wired for. That is why ENIAC still gets called the first general-purpose electronic computer."
    },
    {
        question: "Who proposed a mechanical computer to IBM in 1937?",
        options: ["Howard Aiken", "Jon Von Neumann", "Alan Turing", "Konrad Zuse", "None of the Other Choices"],
        answer: "Howard Aiken",
        explanation: "Aiken was a Harvard physicist who needed a machine for his own calculations. The proposal became the Harvard Mark I, delivered in 1944."
    },
    {
        question: "Who approved Howard Aiken's computer proposal at IBM in 1939?",
        options: ["Thomas Watson Sr.", "Thomas Watson Jr.", "Herman Hollerith", "William Bill Gates", "None of the Other Choices"],
        answer: "Thomas Watson Sr.",
        explanation: "The senior Watson ran IBM at the time; his son took over in 1952. Hollerith had already died in 1929."
    },
    {
        question: "Who used relays to build a demonstration adder at Bell Labs in 1937?",
        options: ["George Stibitz", "Claude Shannon", "Jon Von Neumann", "Howard Aiken", "None of the Other Choices"],
        answer: "George Stibitz",
        explanation: "He assembled it on his kitchen table from spare relays, so it is nicknamed the Model K for kitchen. Claude Shannon, also at Bell Labs, proved the theory behind it the same year."
    },
    {
        question: "In which year was Hewlett-Packard founded?",
        options: ["1939", "1945", "1950", "1976", "None of the Other Choices"],
        answer: "1939",
        explanation: "Founded in a Palo Alto garage, now treated as the birthplace of Silicon Valley. 1976 is Apple's founding year, not HP's."
    },
    {
        question: "Who finished the Z3 computer in 1941?",
        options: ["Konrad Zuse", "Howard Aiken", "Alan Turing", "John Atanasoff", "None of the Other Choices"],
        answer: "Konrad Zuse",
        explanation: "A German engineer working largely alone. The Z3 was relay-based but binary and program-controlled, and it was destroyed in a 1943 air raid."
    },
    {
        question: "The Harvard Mark I was also known by which name, and was delivered where in 1944?",
        options: ["ASCC, delivered to Harvard University", "ENIAC, delivered to the University of Pennsylvania", "ABC, delivered to Iowa State", "Z3, delivered to Berlin", "None of the Other Choices"],
        answer: "ASCC, delivered to Harvard University",
        explanation: "ASCC stands for Automatic Sequence Controlled Calculator, the name IBM gave it. Harvard Mark I is the name it got after delivery."
    },
    {
        question: "On which machine was the computing term 'bug' first coined?",
        options: ["Harvard Mark I", "ENIAC", "ABC", "Colossus Mark 1", "None of the Other Choices"],
        answer: "Harvard Mark I",
        explanation: "A moth was found trapped in a relay of a Harvard machine and taped into the logbook by Grace Murray Hopper's team, giving us bug and debugging."
    },
    {
        question: "Who built the ENIAC in 1945?",
        options: ["Mauchly and Eckert", "Atanasoff and Berry", "Babbage and Lovelace", "Turing and Flowers", "None of the Other Choices"],
        answer: "Mauchly and Eckert",
        explanation: "John Mauchly and J. Presper Eckert at the University of Pennsylvania, funded by the US Army for artillery firing tables. Atanasoff and Berry built the earlier ABC."
    }
];
