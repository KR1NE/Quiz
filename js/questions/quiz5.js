// Quiz 5: Parts 8-9 - Fourth Generation (1971+) & Timelines
// Professor-style format: 5 choices (a-e) with a "None of the Other Choices" option
const quiz5Questions = [
    // Part 8: Fourth Generation - Microprocessors
    {
        question: "Which of the following is the first microprocessor?",
        options: ["Intel 4004", "Intel 8008", "Intel 8080", "Zilog Z80", "None of the Other Choices"],
        answer: "Intel 4004"
    },
    {
        question: "In which year was the Intel 4004 released?",
        options: ["1971", "1972", "1974", "1969", "None of the Other Choices"],
        answer: "1971"
    },
    {
        question: "The Intel 4004 was a microprocessor of which word size?",
        options: ["4-bit", "8-bit", "16-bit", "32-bit", "None of the Other Choices"],
        answer: "4-bit"
    },
    {
        question: "The Intel 8008 was originally called the '1201' and was commissioned by which company and for which machine?",
        options: ["CTC, for the Datapoint 2200", "IBM, for the IBM PC", "Apple, for the Macintosh", "Hewlett-Packard, for its calculators", "None of the Other Choices"],
        answer: "CTC, for the Datapoint 2200"
    },
    {
        question: "How much memory could the Intel 8008 address?",
        options: ["16 KB", "64 KB", "4 KB", "1 MB", "None of the Other Choices"],
        answer: "16 KB"
    },
    {
        question: "In which year was the Intel 8080 released?",
        options: ["1974", "1971", "1978", "1980", "None of the Other Choices"],
        answer: "1974"
    },
    {
        question: "Was the Intel 8080 binary compatible with the Intel 8008?",
        options: ["No, it extended the 8008 but was not binary compatible with it", "Yes, it was fully binary compatible", "Yes, but only for arithmetic instructions", "It used an entirely unrelated architecture", "None of the Other Choices"],
        answer: "No, it extended the 8008 but was not binary compatible with it"
    },
    {
        question: "Which of the following is the first commercially available microprocessor-based computer?",
        options: ["Micral N", "Altair 8800", "Apple I", "IBM PC", "None of the Other Choices"],
        answer: "Micral N"
    },
    {
        question: "The Altair 8800 is credited with sparking which of the following?",
        options: ["The microcomputer revolution", "The Internet", "The artificial intelligence boom", "The social media age", "None of the Other Choices"],
        answer: "The microcomputer revolution"
    },
    {
        question: "The bus of the Altair 8800 became which industry standard?",
        options: ["S-100 bus", "ISA bus", "PCI bus", "Universal Serial Bus", "None of the Other Choices"],
        answer: "S-100 bus"
    },
    {
        question: "Which of the following is the first operating system for microcomputers, and who created it?",
        options: ["CP/M, by Gary Kildall", "MS-DOS, by William Bill Gates", "UNIX, by Ken Thompson", "Apple DOS, by Steve Wozniak", "None of the Other Choices"],
        answer: "CP/M, by Gary Kildall"
    },
    {
        question: "Which of the following is the first among the products of Microsoft?",
        options: ["BASIC programming language", "MS-DOS", "MS Windows", "MS Office", "None of the Other Choices"],
        answer: "BASIC programming language"
    },
    {
        question: "Who founded Apple, and in which year?",
        options: ["Steve Jobs and Steve Wozniak, 1976", "William Bill Gates and Paul Allen, 1975", "Ken Olsen and Harlan Anderson, 1957", "Jerry Yang and David Filo, 1994", "None of the Other Choices"],
        answer: "Steve Jobs and Steve Wozniak, 1976"
    },
    {
        question: "Which of the following is considered to be the first electronic spreadsheet?",
        options: ["VisiCalc", "Lotus 1-2-3", "Google Sheets", "Microsoft Excel", "None of the Other Choices"],
        answer: "VisiCalc"
    },
    {
        question: "VisiCalc turned the microcomputer from a hobbyist device into which of the following?",
        options: ["A serious business tool", "A gaming console", "A scientific instrument", "A military system", "None of the Other Choices"],
        answer: "A serious business tool"
    },
    {
        question: "Which of the following is the first electronic word processor on a personal computer?",
        options: ["WordStar", "WordPerfect", "Microsoft Word", "Google Docs", "None of the Other Choices"],
        answer: "WordStar"
    },
    {
        question: "Where did Steve Jobs see the graphical user interface that inspired the Macintosh?",
        options: ["Xerox PARC", "IBM Research", "Bell Labs", "MIT Media Lab", "None of the Other Choices"],
        answer: "Xerox PARC"
    },
    {
        question: "Which computer had the first mouse?",
        options: ["Xerox Alto", "Apple Macintosh", "Apple Lisa", "IBM PC", "None of the Other Choices"],
        answer: "Xerox Alto"
    },
    {
        question: "In which year was the IBM PC released?",
        options: ["1981", "1979", "1984", "1976", "None of the Other Choices"],
        answer: "1981"
    },
    {
        question: "Which of the following is the first operating system on the IBM PC?",
        options: ["MS-DOS", "CP/M", "Windows 1.0", "Windows 3.0", "None of the Other Choices"],
        answer: "MS-DOS"
    },

    // Part 9: Timelines - Intel and IBM
    {
        question: "In which year was the Intel 8086/8088 released?",
        options: ["1978", "1974", "1981", "1985", "None of the Other Choices"],
        answer: "1978"
    },
    {
        question: "Which processor was used in the original IBM PC?",
        options: ["Intel 8088", "Intel 8086", "Intel 80286", "Intel 4004", "None of the Other Choices"],
        answer: "Intel 8088"
    },
    {
        question: "Which Intel processor introduced 32-bit computing?",
        options: ["Intel i386", "Intel 80286", "Intel Pentium", "Intel 8086", "None of the Other Choices"],
        answer: "Intel i386"
    },
    {
        question: "In which year was Windows 95 released?",
        options: ["1995", "1993", "1998", "2000", "None of the Other Choices"],
        answer: "1995"
    },
    {
        question: "Which version of Windows first came with a 64-bit version?",
        options: ["Windows XP", "Windows 95", "Windows 98", "Windows Vista", "None of the Other Choices"],
        answer: "Windows XP"
    },

    // Part 9: Internet Timeline
    {
        question: "The first concept of globally interconnected computers, which initiated the Internet, was called what?",
        options: ["Galactic Network Concept", "Packet Switching Concept", "DARPA Concept", "ARPANET Concept", "None of the Other Choices"],
        answer: "Galactic Network Concept"
    },
    {
        question: "Who conceived the Galactic Network concept in 1962?",
        options: ["J.C.R. Licklider", "Vint Cerf", "Tim Berners-Lee", "Leonard Kleinrock", "None of the Other Choices"],
        answer: "J.C.R. Licklider"
    },
    {
        question: "Who developed the theory of packet switching from 1961 to 1964?",
        options: ["Leonard Kleinrock", "J.C.R. Licklider", "Tim Berners-Lee", "Robert E. Kahn", "None of the Other Choices"],
        answer: "Leonard Kleinrock"
    },
    {
        question: "Who developed TCP/IP and is therefore called the Father of the Internet?",
        options: ["Vint Cerf and Robert E. Kahn", "Tim Berners-Lee", "J.C.R. Licklider", "Leonard Kleinrock", "None of the Other Choices"],
        answer: "Vint Cerf and Robert E. Kahn"
    },
    {
        question: "Who developed Ethernet at Xerox PARC in 1973?",
        options: ["Bob Metcalfe", "Vint Cerf", "Tim Berners-Lee", "Leonard Kleinrock", "None of the Other Choices"],
        answer: "Bob Metcalfe"
    },
    {
        question: "Who proposed the World Wide Web in 1989, and at which institution?",
        options: ["Tim Berners-Lee at CERN", "Vint Cerf at DARPA", "Marc Andreessen at NCSA", "Larry Page at Stanford", "None of the Other Choices"],
        answer: "Tim Berners-Lee at CERN"
    },
    {
        question: "Which of the following is the first commercial web browser?",
        options: ["Internet Explorer", "Mosaic", "Opera", "Lynx", "None of the Other Choices"],
        answer: "None of the Other Choices",
        explanation: "Netscape Navigator was the first commercial web browser. Mosaic came earlier but was not a commercial product."
    }
];
