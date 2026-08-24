// Quiz 6: Parts 10-11 - Companies/Platforms & Modern Topics (AI, Chat, Social Media)
// Professor-style format: 5 choices (a-e) with a "None of the Other Choices" option
const quiz6Questions = [
    // Part 10: Yahoo
    {
        question: "Who founded Yahoo in 1994?",
        options: ["Jerry Yang and David Filo", "Larry Page and Sergey Brin", "William Bill Gates and Paul Allen", "Chad Hurley and Steve Chen", "None of the Other Choices"],
        answer: "Jerry Yang and David Filo"
    },
    {
        question: "What does YAHOO stand for?",
        options: ["Yet Another Hierarchical Officious Oracle", "Your Access to Help Online", "Young Americans Have Online Options", "You Always Have Open Opportunities", "None of the Other Choices"],
        answer: "Yet Another Hierarchical Officious Oracle"
    },
    {
        question: "In 2002, Yahoo considered acquiring which company for around 3 billion dollars?",
        options: ["Google", "Facebook", "YouTube", "Android Inc.", "None of the Other Choices"],
        answer: "Google"
    },
    {
        question: "In 2006, Yahoo offered roughly how much for Facebook?",
        options: ["1 billion dollars", "500 million dollars", "5 billion dollars", "10 billion dollars", "None of the Other Choices"],
        answer: "1 billion dollars"
    },
    {
        question: "Microsoft offered to buy Yahoo in 2008 for roughly how much?",
        options: ["44.6 to 47.5 billion dollars", "10 billion dollars", "100 billion dollars", "1 billion dollars", "None of the Other Choices"],
        answer: "44.6 to 47.5 billion dollars"
    },
    {
        question: "Which company acquired the core business of Yahoo in 2017?",
        options: ["Verizon", "AT&T", "Google", "Microsoft", "None of the Other Choices"],
        answer: "Verizon"
    },

    // Part 10: Google
    {
        question: "What was Google originally called when it was still a Stanford research project?",
        options: ["PageRank", "SearchBot", "WebCrawler", "InfoSeek", "None of the Other Choices"],
        answer: "None of the Other Choices",
        explanation: "Google began as a Stanford research project called BackRub."
    },
    {
        question: "Who founded Google?",
        options: ["Larry Page and Sergey Brin", "Jerry Yang and David Filo", "Steve Jobs and Steve Wozniak", "Andy Rubin and Rich Miner", "None of the Other Choices"],
        answer: "Larry Page and Sergey Brin"
    },
    {
        question: "In which year was Google incorporated?",
        options: ["1998", "1994", "2000", "2004", "None of the Other Choices"],
        answer: "1998"
    },
    {
        question: "Who founded Android Inc. in 2003?",
        options: ["Andy Rubin, Rich Miner, Nick Sears and Chris White", "Larry Page and Sergey Brin", "Chad Hurley, Steve Chen and Jawed Karim", "Eric Yuan and Jerry Yang", "None of the Other Choices"],
        answer: "Andy Rubin, Rich Miner, Nick Sears and Chris White"
    },
    {
        question: "In which year did Google acquire Android?",
        options: ["2005", "2003", "2008", "2010", "None of the Other Choices"],
        answer: "2005"
    },
    {
        question: "Who founded YouTube in 2004?",
        options: ["Chad Hurley, Steve Chen and Jawed Karim", "Larry Page and Sergey Brin", "Jerry Yang and David Filo", "Andy Rubin and Nick Sears", "None of the Other Choices"],
        answer: "Chad Hurley, Steve Chen and Jawed Karim"
    },
    {
        question: "The founders of YouTube were formerly employees of which company?",
        options: ["PayPal", "Yahoo", "Google", "Netscape", "None of the Other Choices"],
        answer: "PayPal"
    },
    {
        question: "In which year did Google acquire YouTube?",
        options: ["2006", "2004", "2008", "2010", "None of the Other Choices"],
        answer: "2006"
    },

    // Part 11: History of AI
    {
        question: "Who published 'Computing Machinery and Intelligence', which introduced the Turing Test in 1950?",
        options: ["Alan Turing", "John McCarthy", "Marvin Minsky", "Claude Shannon", "None of the Other Choices"],
        answer: "Alan Turing"
    },
    {
        question: "Where and when was the term 'Artificial Intelligence' first coined?",
        options: ["Dartmouth Conference, 1956", "MIT, 1950", "Stanford University, 1960", "CERN, 1970", "None of the Other Choices"],
        answer: "Dartmouth Conference, 1956"
    },
    {
        question: "In which year was OpenAI founded?",
        options: ["2015", "2010", "2018", "2020", "None of the Other Choices"],
        answer: "2015"
    },
    {
        question: "When was ChatGPT launched?",
        options: ["November 2022", "January 2020", "March 2023", "June 2021", "None of the Other Choices"],
        answer: "November 2022"
    },
    {
        question: "How many users did ChatGPT reach within 5 days of launch?",
        options: ["1 million", "100 thousand", "10 million", "500 thousand", "None of the Other Choices"],
        answer: "1 million"
    },
    {
        question: "How many parameters does GPT-3 have?",
        options: ["175 billion", "100 billion", "1 trillion", "50 billion", "None of the Other Choices"],
        answer: "175 billion"
    },
    {
        question: "In which year did AlphaGo of Google defeat Lee Sedol?",
        options: ["2016", "2014", "2018", "2020", "None of the Other Choices"],
        answer: "2016"
    },
    {
        question: "When and where was DeepMind founded?",
        options: ["2010 in London", "2015 in San Francisco", "2005 in Boston", "2018 in Beijing", "None of the Other Choices"],
        answer: "2010 in London"
    },
    {
        question: "What does GPT stand for?",
        options: ["Generative Pre-trained Transformer", "General Processing Technology", "Global Pattern Tracking", "Graphical Processing Tool", "None of the Other Choices"],
        answer: "Generative Pre-trained Transformer"
    },
    {
        question: "Anthropic, the creator of Claude, was founded by whom and in which year?",
        options: ["Former OpenAI researchers in 2021", "Google engineers in 2018", "Meta researchers in 2020", "Microsoft researchers in 2019", "None of the Other Choices"],
        answer: "Former OpenAI researchers in 2021"
    },

    // Part 11: Chat and Messaging
    {
        question: "Which of the following is considered to be the first chatbot?",
        options: ["ELIZA", "PARRY", "ALICE", "SmarterChild", "None of the Other Choices"],
        answer: "ELIZA"
    },
    {
        question: "In which year was ELIZA created?",
        options: ["1966", "1956", "1972", "1980", "None of the Other Choices"],
        answer: "1966"
    },
    {
        question: "What does IRC stand for?",
        options: ["Internet Relay Chat", "Internal Resource Control", "Internet Resource Center", "Integrated Routing Connection", "None of the Other Choices"],
        answer: "Internet Relay Chat"
    },
    {
        question: "Who released Zoom in 2011?",
        options: ["Eric Yuan, a former Cisco WebEx engineer", "William Bill Gates", "Jack Dorsey", "Jeff Bezos", "None of the Other Choices"],
        answer: "Eric Yuan, a former Cisco WebEx engineer"
    },

    // Part 11: Social Media
    {
        question: "Which of the following is considered to be the first modern social network, launched in 1997?",
        options: ["SixDegrees.com", "Friendster", "MySpace", "Facebook", "None of the Other Choices"],
        answer: "SixDegrees.com"
    },
    {
        question: "When and where was Facebook launched?",
        options: ["February 2004 at Harvard", "February 2004 at Stanford", "January 2003 at Harvard", "March 2005 at MIT", "None of the Other Choices"],
        answer: "February 2004 at Harvard"
    },
    {
        question: "In which year was Twitter founded?",
        options: ["2006", "2004", "2008", "2010", "None of the Other Choices"],
        answer: "2006"
    },
    {
        question: "In which year was Instagram founded?",
        options: ["2010", "2008", "2012", "2006", "None of the Other Choices"],
        answer: "2010"
    },
    {
        question: "TikTok is owned by which company?",
        options: ["ByteDance", "Meta", "Google", "Tencent", "None of the Other Choices"],
        answer: "ByteDance"
    }
];
