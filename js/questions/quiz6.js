// Quiz 6: Parts 10-11 - Companies/Platforms & Modern Topics (AI, Chat, Social Media)
// Professor-style format: 5 choices (a-e) with a "None of the Other Choices" option
const quiz6Questions = [
    // Part 10: Yahoo
    {
        question: "Who founded Yahoo in 1994?",
        options: ["Jerry Yang and David Filo", "Larry Page and Sergey Brin", "William Bill Gates and Paul Allen", "Chad Hurley and Steve Chen", "None of the Other Choices"],
        answer: "Jerry Yang and David Filo",
        explanation: "Two Stanford graduate students, four years ahead of Google's founders at the same university. It started as a hand-made directory of websites."
    },
    {
        question: "What does YAHOO stand for?",
        options: ["Yet Another Hierarchical Officious Oracle", "Your Access to Help Online", "Young Americans Have Online Options", "You Always Have Open Opportunities", "None of the Other Choices"],
        answer: "Yet Another Hierarchical Officious Oracle",
        explanation: "Hierarchical is the meaningful word — Yahoo organized the web into a tree of categories, whereas Google would later just search it."
    },
    {
        question: "In 2002, Yahoo considered acquiring which company for around 3 billion dollars?",
        options: ["Google", "Facebook", "YouTube", "Android Inc.", "None of the Other Choices"],
        answer: "Google",
        explanation: "Yahoo offered about 3 billion, Google wanted 5, and the deal collapsed. Google is worth well over a thousand times that today."
    },
    {
        question: "In 2006, Yahoo offered roughly how much for Facebook?",
        options: ["1 billion dollars", "500 million dollars", "5 billion dollars", "10 billion dollars", "None of the Other Choices"],
        answer: "1 billion dollars",
        explanation: "Mark Zuckerberg turned it down. This is Yahoo's second famous miss, four years after failing to buy Google."
    },
    {
        question: "Microsoft offered to buy Yahoo in 2008 for roughly how much?",
        options: ["44.6 to 47.5 billion dollars", "10 billion dollars", "100 billion dollars", "1 billion dollars", "None of the Other Choices"],
        answer: "44.6 to 47.5 billion dollars",
        explanation: "Yahoo rejected it as too low, then sold its core business to Verizon nine years later for about 4.5 billion — a tenth of the price."
    },
    {
        question: "Which company acquired the core business of Yahoo in 2017?",
        options: ["Verizon", "AT&T", "Google", "Microsoft", "None of the Other Choices"],
        answer: "Verizon",
        explanation: "A telecoms company, not a tech rival, and for roughly a tenth of what Microsoft had offered in 2008."
    },

    // Part 10: Google
    {
        question: "What was Google originally called when it was still a Stanford research project?",
        options: ["PageRank", "SearchBot", "WebCrawler", "InfoSeek", "None of the Other Choices"],
        answer: "None of the Other Choices",
        explanation: "It was called BackRub, because it ranked pages by analysing their backlinks. PageRank is the algorithm inside it, not the project name."
    },
    {
        question: "Who founded Google?",
        options: ["Larry Page and Sergey Brin", "Jerry Yang and David Filo", "Steve Jobs and Steve Wozniak", "Andy Rubin and Rich Miner", "None of the Other Choices"],
        answer: "Larry Page and Sergey Brin",
        explanation: "Stanford graduate students, like Yahoo's founders before them. Their insight was ranking pages by who links to them rather than by keywords."
    },
    {
        question: "In which year was Google incorporated?",
        options: ["1998", "1994", "2000", "2004", "None of the Other Choices"],
        answer: "1998",
        explanation: "Four years after Yahoo, which explains why Yahoo was in a position to consider buying it in 2002."
    },
    {
        question: "Who founded Android Inc. in 2003?",
        options: ["Andy Rubin, Rich Miner, Nick Sears and Chris White", "Larry Page and Sergey Brin", "Chad Hurley, Steve Chen and Jawed Karim", "Eric Yuan and Jerry Yang", "None of the Other Choices"],
        answer: "Andy Rubin, Rich Miner, Nick Sears and Chris White",
        explanation: "Android was an independent company first, and was originally aimed at digital cameras before it was redirected at phones."
    },
    {
        question: "In which year did Google acquire Android?",
        options: ["2005", "2003", "2008", "2010", "None of the Other Choices"],
        answer: "2005",
        explanation: "Two years after founding, and two years before the iPhone appeared. Google bought it long before anyone knew smartphones would matter."
    },
    {
        question: "Who founded YouTube in 2004?",
        options: ["Chad Hurley, Steve Chen and Jawed Karim", "Larry Page and Sergey Brin", "Jerry Yang and David Filo", "Andy Rubin and Nick Sears", "None of the Other Choices"],
        answer: "Chad Hurley, Steve Chen and Jawed Karim",
        explanation: "Three founders, all former PayPal employees. Karim also uploaded the very first video, Me at the zoo, in 2005."
    },
    {
        question: "The founders of YouTube were formerly employees of which company?",
        options: ["PayPal", "Yahoo", "Google", "Netscape", "None of the Other Choices"],
        answer: "PayPal",
        explanation: "Part of the so-called PayPal Mafia, the group of early PayPal staff who went on to found YouTube, LinkedIn, Tesla and SpaceX."
    },
    {
        question: "In which year did Google acquire YouTube?",
        options: ["2006", "2004", "2008", "2010", "None of the Other Choices"],
        answer: "2006",
        explanation: "Just two years after YouTube was founded, for 1.65 billion dollars — the same year Yahoo failed to buy Facebook for 1 billion."
    },

    // Part 11: History of AI
    {
        question: "Who published 'Computing Machinery and Intelligence', which introduced the Turing Test in 1950?",
        options: ["Alan Turing", "John McCarthy", "Marvin Minsky", "Claude Shannon", "None of the Other Choices"],
        answer: "Alan Turing",
        explanation: "The paper opens with the question Can machines think? and replaces it with a practical test: can a machine's replies be told apart from a human's?"
    },
    {
        question: "Where and when was the term 'Artificial Intelligence' first coined?",
        options: ["Dartmouth Conference, 1956", "MIT, 1950", "Stanford University, 1960", "CERN, 1970", "None of the Other Choices"],
        answer: "Dartmouth Conference, 1956",
        explanation: "John McCarthy coined the phrase for this summer workshop, six years after Turing's paper. It is treated as the founding event of AI as a field."
    },
    {
        question: "In which year was OpenAI founded?",
        options: ["2015", "2010", "2018", "2020", "None of the Other Choices"],
        answer: "2015",
        explanation: "Five years after DeepMind and six years before Anthropic. Keep the order: DeepMind 2010, OpenAI 2015, Anthropic 2021."
    },
    {
        question: "When was ChatGPT launched?",
        options: ["November 2022", "January 2020", "March 2023", "June 2021", "None of the Other Choices"],
        answer: "November 2022",
        explanation: "Seven years after OpenAI was founded. March 2023 is when GPT-4 arrived, not the original launch."
    },
    {
        question: "How many users did ChatGPT reach within 5 days of launch?",
        options: ["1 million", "100 thousand", "10 million", "500 thousand", "None of the Other Choices"],
        answer: "1 million",
        explanation: "The fastest adoption of any consumer application at the time — Instagram took about two and a half months to reach the same figure."
    },
    {
        question: "How many parameters does GPT-3 have?",
        options: ["175 billion", "100 billion", "1 trillion", "50 billion", "None of the Other Choices"],
        answer: "175 billion",
        explanation: "Parameters are the adjustable weights learned during training. GPT-2 had 1.5 billion, so GPT-3 was more than a hundredfold larger."
    },
    {
        question: "In which year did AlphaGo of Google defeat Lee Sedol?",
        options: ["2016", "2014", "2018", "2020", "None of the Other Choices"],
        answer: "2016",
        explanation: "Go has far too many positions to brute-force, so this was a milestone for learning-based AI rather than raw search."
    },
    {
        question: "When and where was DeepMind founded?",
        options: ["2010 in London", "2015 in San Francisco", "2005 in Boston", "2018 in Beijing", "None of the Other Choices"],
        answer: "2010 in London",
        explanation: "London, not Silicon Valley — Google acquired it in 2014, and it went on to build AlphaGo and AlphaFold."
    },
    {
        question: "What does GPT stand for?",
        options: ["Generative Pre-trained Transformer", "General Processing Technology", "Global Pattern Tracking", "Graphical Processing Tool", "None of the Other Choices"],
        answer: "Generative Pre-trained Transformer",
        explanation: "Generative means it produces new text, pre-trained means it learns from a large corpus first, and Transformer is the 2017 neural network design it uses."
    },
    {
        question: "Anthropic, the creator of Claude, was founded by whom and in which year?",
        options: ["Former OpenAI researchers in 2021", "Google engineers in 2018", "Meta researchers in 2020", "Microsoft researchers in 2019", "None of the Other Choices"],
        answer: "Former OpenAI researchers in 2021",
        explanation: "Led by siblings Dario and Daniela Amodei, who left OpenAI over differences on AI safety. It is the newest of the three major AI labs."
    },

    // Part 11: Chat and Messaging
    {
        question: "Which of the following is considered to be the first chatbot?",
        options: ["ELIZA", "PARRY", "ALICE", "SmarterChild", "None of the Other Choices"],
        answer: "ELIZA",
        explanation: "The others all came later. PARRY in 1972 simulated a patient rather than a therapist, and the two were once made to talk to each other."
    },
    {
        question: "In which year was ELIZA created?",
        options: ["1966", "1956", "1972", "1980", "None of the Other Choices"],
        answer: "1966",
        explanation: "Built by Joseph Weizenbaum at MIT, ten years after the Dartmouth Conference. It only rephrased your words as questions, yet people confided in it anyway."
    },
    {
        question: "What does IRC stand for?",
        options: ["Internet Relay Chat", "Internal Resource Control", "Internet Resource Center", "Integrated Routing Connection", "None of the Other Choices"],
        answer: "Internet Relay Chat",
        explanation: "Created in 1988, it introduced the channel-and-server model that Slack and Discord still follow today."
    },
    {
        question: "Who released Zoom in 2011?",
        options: ["Eric Yuan, a former Cisco WebEx engineer", "William Bill Gates", "Jack Dorsey", "Jeff Bezos", "None of the Other Choices"],
        answer: "Eric Yuan, a former Cisco WebEx engineer",
        explanation: "He left Cisco because it would not let him rebuild WebEx for mobile users, then built the replacement himself."
    },

    // Part 11: Social Media
    {
        question: "Which of the following is considered to be the first modern social network, launched in 1997?",
        options: ["SixDegrees.com", "Friendster", "MySpace", "Facebook", "None of the Other Choices"],
        answer: "SixDegrees.com",
        explanation: "Named after the six degrees of separation idea. It had profiles and friend lists years before Friendster, MySpace or Facebook existed."
    },
    {
        question: "When and where was Facebook launched?",
        options: ["February 2004 at Harvard", "February 2004 at Stanford", "January 2003 at Harvard", "March 2005 at MIT", "None of the Other Choices"],
        answer: "February 2004 at Harvard",
        explanation: "Note the university: Harvard, not Stanford. Yahoo and Google are the Stanford companies."
    },
    {
        question: "In which year was Twitter founded?",
        options: ["2006", "2004", "2008", "2010", "None of the Other Choices"],
        answer: "2006",
        explanation: "Two years after Facebook. The 140-character limit came from SMS, since early tweets were meant to be sent by text message."
    },
    {
        question: "In which year was Instagram founded?",
        options: ["2010", "2008", "2012", "2006", "None of the Other Choices"],
        answer: "2010",
        explanation: "2012 is the trap — that is when Facebook bought it for 1 billion dollars, not when it was founded."
    },
    {
        question: "TikTok is owned by which company?",
        options: ["ByteDance", "Meta", "Google", "Tencent", "None of the Other Choices"],
        answer: "ByteDance",
        explanation: "A Chinese company, making TikTok the first major social platform not founded in the United States. ByteDance also runs Douyin, its Chinese counterpart."
    }
];
