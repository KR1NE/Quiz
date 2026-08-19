// Quiz 5: Parts 8-9 - Fourth Generation (1971+) & Timelines
const quiz5Questions = [
    // Part 8: Fourth Generation - Microprocessors
    {
        question: "What was the first microprocessor?",
        options: ["Intel 4004", "Intel 8008", "Intel 8080", "Zilog Z80"],
        answer: "Intel 4004"
    },
    {
        question: "When was the Intel 4004 released?",
        options: ["1971", "1972", "1974", "1969"],
        answer: "1971"
    },
    {
        question: "How many bits was the Intel 4004?",
        options: ["4-bit", "8-bit", "16-bit", "32-bit"],
        answer: "4-bit"
    },
    {
        question: "The Intel 8008 was originally called the '1201' and commissioned by which company?",
        options: ["CTC for the Datapoint 2200", "IBM for the PC", "Apple for the Macintosh", "HP for calculators"],
        answer: "CTC for the Datapoint 2200"
    },
    {
        question: "How much memory could the Intel 8008 address?",
        options: ["16 KB", "64 KB", "4 KB", "1 MB"],
        answer: "16 KB"
    },
    {
        question: "When was the Intel 8080 released?",
        options: ["1974", "1971", "1978", "1980"],
        answer: "1974"
    },
    {
        question: "Was the Intel 8080 binary compatible with the 8008?",
        options: ["No, it extended but was not compatible", "Yes, fully compatible", "Partially compatible", "It used a different architecture"],
        answer: "No, it extended but was not compatible"
    },
    {
        question: "What was the first commercially available microprocessor-based computer?",
        options: ["Micral N (France)", "Altair 8800", "Apple I", "IBM PC"],
        answer: "Micral N (France)"
    },
    {
        question: "The Altair 8800 sparked what?",
        options: ["The microcomputer revolution", "The internet", "AI development", "Social media"],
        answer: "The microcomputer revolution"
    },
    {
        question: "The Altair 8800's bus became what standard?",
        options: ["S-100 bus", "ISA bus", "PCI bus", "USB"],
        answer: "S-100 bus"
    },
    {
        question: "Who created CP/M, the first OS for microcomputers?",
        options: ["Gary Kildall", "Bill Gates", "Steve Jobs", "Linus Torvalds"],
        answer: "Gary Kildall"
    },
    {
        question: "What was Microsoft's founding product?",
        options: ["Altair BASIC", "MS-DOS", "Windows", "Microsoft Office"],
        answer: "Altair BASIC"
    },
    {
        question: "Who founded Apple and when?",
        options: ["Steve Jobs and Steve Wozniak, 1976", "Bill Gates and Paul Allen, 1975", "Larry Page and Sergey Brin, 1998", "Mark Zuckerberg, 2004"],
        answer: "Steve Jobs and Steve Wozniak, 1976"
    },
    {
        question: "What was the first spreadsheet for microcomputers?",
        options: ["VisiCalc", "Lotus 1-2-3", "Excel", "Quattro Pro"],
        answer: "VisiCalc"
    },
    {
        question: "VisiCalc turned the microcomputer from hobby into what?",
        options: ["Business tool", "Gaming device", "Scientific instrument", "Military equipment"],
        answer: "Business tool"
    },
    {
        question: "Where did Steve Jobs see the GUI that inspired the Macintosh?",
        options: ["Xerox PARC", "IBM Research", "Bell Labs", "MIT"],
        answer: "Xerox PARC"
    },
    {
        question: "When was the IBM PC released?",
        options: ["1981", "1979", "1984", "1976"],
        answer: "1981"
    },

    // Part 9: Timelines - Intel and IBM
    {
        question: "When was the Intel 8086/8088 released?",
        options: ["1978", "1974", "1981", "1985"],
        answer: "1978"
    },
    {
        question: "Which processor was used in the original IBM PC?",
        options: ["Intel 8088", "Intel 8086", "Intel 80286", "Intel 4004"],
        answer: "Intel 8088"
    },
    {
        question: "Which Intel processor introduced 32-bit computing?",
        options: ["i386", "80286", "Pentium", "8086"],
        answer: "i386"
    },
    {
        question: "When was Windows 95 released?",
        options: ["1995", "1993", "1998", "2000"],
        answer: "1995"
    },

    // Part 9: Internet Timeline
    {
        question: "Who conceived the 'Galactic Network' concept in 1962?",
        options: ["J.C.R. Licklider", "Vint Cerf", "Tim Berners-Lee", "Leonard Kleinrock"],
        answer: "J.C.R. Licklider"
    },
    {
        question: "Who developed packet switching theory (1961-1964)?",
        options: ["Leonard Kleinrock", "J.C.R. Licklider", "Tim Berners-Lee", "Robert Kahn"],
        answer: "Leonard Kleinrock"
    },
    {
        question: "Who created the first wide-area network in 1965?",
        options: ["Lawrence G. Roberts and Thomas Merrill", "Vint Cerf and Robert Kahn", "Tim Berners-Lee", "Marc Andreessen"],
        answer: "Lawrence G. Roberts and Thomas Merrill"
    },
    {
        question: "Who developed TCP/IP and is called the Father of the Internet?",
        options: ["Vint Cerf and Robert E. Kahn", "Tim Berners-Lee", "J.C.R. Licklider", "Leonard Kleinrock"],
        answer: "Vint Cerf and Robert E. Kahn"
    },
    {
        question: "Who developed Ethernet at Xerox PARC in 1973?",
        options: ["Bob Metcalfe", "Vint Cerf", "Tim Berners-Lee", "Steve Jobs"],
        answer: "Bob Metcalfe"
    },
    {
        question: "Who proposed the World Wide Web in 1989?",
        options: ["Tim Berners-Lee at CERN", "Vint Cerf at DARPA", "Marc Andreessen at NCSA", "Larry Page at Stanford"],
        answer: "Tim Berners-Lee at CERN"
    },
    {
        question: "What did Tim Berners-Lee build in 1990?",
        options: ["HTTP, HTML, first browser, first web server", "TCP/IP protocol", "Email system", "DNS system"],
        answer: "HTTP, HTML, first browser, first web server"
    },
    {
        question: "What was the first commercial web browser?",
        options: ["Netscape Navigator", "Internet Explorer", "Mosaic", "Lynx"],
        answer: "Netscape Navigator"
    },
    {
        question: "Key distinction: The Internet is ___, the Web is ___.",
        options: ["The network (1969+), an application on it (1989-1990)", "An application, the network", "Software, hardware", "American, European"],
        answer: "The network (1969+), an application on it (1989-1990)"
    }
];
