// Essentials of Catholic Faith and Life
// Chapter 1: Revelation in Creation
// 30 True or False questions
// Source of truth: Creation_and_Sin_and_Grace_Notes.md (Chapter 1)

const theologyCh1Questions = [
    {
        type: "true-false",
        question: "The word Genesis means origin or birth.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Genesis means origin or birth, which suits a book that deals with beginnings. The name describes the book's subject matter, not the date it was composed."
    },
    {
        type: "true-false",
        question: "Genesis is placed first in the Bible because it was the earliest of the biblical books to be written.",
        options: ["True", "False"],
        answer: "False",
        explanation: "It is placed first because it deals with beginnings: the cosmos, plants, animals and humankind. Being placed first is not the same as being written first."
    },
    {
        type: "true-false",
        question: "The Enuma Elish consists of 12 tablets written in Akkadian, recovered by Henry Layard from the ruins of Ashurbanipal in Nineveh.",
        options: ["True", "False"],
        answer: "True",
        explanation: "That is the background given for the Babylonian creation epic. Layard recovered the 12 Akkadian tablets at Ashurbanipal in Nineveh."
    },
    {
        type: "true-false",
        question: "In the Genesis account, day 4 is when the bodies of light - the sun, moon and stars - are created.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Light itself comes on day 1, and the bodies of light that carry it come on day 4. The pairing is the point of the account's parallel structure."
    },
    {
        type: "true-false",
        question: "The parallel between days 1-3 and days 4-6 shows that Genesis 1 is recording the actual chronological sequence in which creation happened.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Days 1-3 make the realms and days 4-6 fill them with their inhabitants. That is deliberate literary design, not a chronology."
    },
    {
        type: "true-false",
        question: "God's creation must be understood as a single completed event in the past, much like the Big Bang in science.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Creation must never be understood as a one-time event, but as an ongoing, sustaining creative act. God continually sustains everything in providence, wisdom and love."
    },
    {
        type: "true-false",
        question: "The Epic of Atrahasis states that man was created for the sole purpose of carrying the toil of the lower gods.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The Mesopotamian view makes humans slaves of the gods, with no reward and no share in the divine assembly. Genesis reverses this by making man God's steward."
    },
    {
        type: "true-false",
        question: "In the Enuma Elish, Tiamat is the sweet or fresh primeval waters and Apsu is the salt primeval waters.",
        options: ["True", "False"],
        answer: "False",
        explanation: "It is the other way round: Apsu is the sweet or fresh water of springs and rivers, and Tiamat is the salt primeval waters. Their mingling is the primordial state."
    },
    {
        type: "true-false",
        question: "In the Enuma Elish it is Ea who puts Apsu to sleep with an incantation and kills him, while Marduk is the one who later kills Tiamat.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Ea acts first against Apsu and takes his insignia of power. Marduk, son of Ea, is then declared avenger and kills Tiamat in a duel."
    },
    {
        type: "true-false",
        question: "The five-step pattern of each creative act in Genesis 1 is announcement, command, report, evaluation, and placement in a temporal framework.",
        options: ["True", "False"],
        answer: "True",
        explanation: "God said, let there be, and so it was, it was good, and the first day. The pattern shows plan and purpose rather than conflict."
    },
    {
        type: "true-false",
        question: "Being created in the image and likeness of God means that man becomes a god and a substitute for the Creator.",
        options: ["True", "False"],
        answer: "False",
        explanation: "A share of divine life is given and reflected, but the created is always different from its Creator. Man does not become a god or a substitute for him."
    },
    {
        type: "true-false",
        question: "Genesis 2.21 teaches that woman is inferior to man because she was taken from his rib.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The text actually affirms unity, complementarity and equality, willed from the start. Bone of my bones and flesh of my flesh makes exactly that point."
    },
    {
        type: "true-false",
        question: "In the ancient world the power to name is a sign of authority, so man's naming of the creatures marks him as God's steward rather than a slave of the gods.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Man is given dominion and the power to name the creatures in Genesis 2.19-20. This is the sharpest reversal of the Mesopotamian picture of man as a slave."
    },
    {
        type: "true-false",
        question: "Because Genesis uses male language for God, the text supports the view that the male is superior.",
        options: ["True", "False"],
        answer: "False",
        explanation: "God is neither male nor female, being pure Spirit. Male language about God therefore does not support male superiority."
    },
    {
        type: "true-false",
        question: "CCC 295 teaches that the world is not the product of necessity, blind fate or chance, but proceeds from God's free will.",
        options: ["True", "False"],
        answer: "True",
        explanation: "God created the world according to his wisdom, freely and not out of any need. This contrasts with the Mesopotamian gods, who created out of necessity to offload their labour."
    },
    {
        type: "true-false",
        question: "The ancient Hebrew picture of the universe shows that the authors were writing accurate physical science, which is why the account can be read as physics.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The three-tier diagram shows that the authors wrote within the science of their own time. That is precisely why the account is not read as physics."
    },
    {
        type: "true-false",
        question: "In the Babylonian creation epic the world is made from the body of a slain god, while in Genesis God creates by word and will, freely.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The comparison sets creation by violence against creation by word and will. In one the world is a by-product of conflict, in the other it is deliberate, ordered and declared good."
    },
    {
        type: "true-false",
        question: "In Genesis the proper human posture before God is fear, because of God's capacity for violence and vengeance.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Fear is the posture in the Babylonian epic, where the gods are potentially destructive, vindictive and selfish. In Genesis the posture is trust, since God punishes only moral evil and is quick to forgive."
    },
    {
        type: "true-false",
        question: "Only the living and the larger parts of creation are declared good; the non-living and the small are not included.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The repeated affirmation of goodness means creation is intrinsically and naturally good, all of it. Nothing is excluded, big or small, living or non-living."
    },
    {
        type: "true-false",
        question: "The breath that God breathes into man is the animating principle, without which the body is lifeless.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Man is made of the soil and vivified by that breath. Because it comes from God, the principle and end of man is God."
    },
    {
        type: "true-false",
        question: "The repeated five-step pattern of each creative act shows plan and purpose.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Each act moves from announcement and command through report and evaluation to placement in a temporal framework. The regularity is the point: this creating is ordered, not accidental."
    },
    {
        type: "true-false",
        question: "In Genesis God creates out of necessity, in order to relieve himself of labour.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Creating out of necessity to offload labour is the Mesopotamian picture. The God of Genesis creates freely, deliberately and lovingly."
    },
    {
        type: "true-false",
        question: "The creation of male and female also shows the social nature of every human being.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The text affirms unity, complementarity and equality, willed from the start. It also shows that the human being is made for relationship."
    },
    {
        type: "true-false",
        question: "In the first creation account humankind is made on a day of its own, separate from the land animals.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Land animals and humankind are both made on the sixth day. The seventh day is the one on which God rests, and blesses and hallows that day."
    },
    {
        type: "true-false",
        question: "Both the Babylonian epic and Genesis begin from an already ordered world.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Both begin in primeval chaos rather than order. One opens with the formless void and darkness over the deep, the other with the mingled primeval waters."
    },
    {
        type: "true-false",
        question: "One of the core theological points is that out of gratuitous love God destined all creation in glory and paradise.",
        options: ["True", "False"],
        answer: "True",
        explanation: "It is the second of the four points the chapter gives as its own summary. The love is gratuitous, that is, freely given and unearned."
    },
    {
        type: "true-false",
        question: "The ancient authors of the first creation account were chiefly concerned with historical and scientific accuracy.",
        options: ["True", "False"],
        answer: "False",
        explanation: "They were concerned with narrating religious belief and meaning, not historical or scientific accuracy. The account is to be read for the religious message carried in its symbols and language."
    },
    {
        type: "true-false",
        question: "From man's role as God's chief steward follows a vocation of care for ourselves, the people around us, the environment and all creation.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The chapter draws this directly from the last of its four core theological points. It is meant to be expressed in concrete advocacies."
    },
    {
        type: "true-false",
        question: "In the Babylonian epic humanity is created to share in the assembly of the gods and to be rewarded for its service.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Humans in that view are slaves of the gods, with no reward and no share in the divine assembly. Genesis reverses this by making man God's steward."
    },
    {
        type: "true-false",
        question: "The gods of the Babylonian epic are portrayed as potentially destructive, vindictive and selfish, while the God of Genesis is always the same, always faithful, always just and always loving.",
        options: ["True", "False"],
        answer: "True",
        explanation: "In the epic a god plots to destroy his own offspring for the sake of his own comfort. This contrast in divine character is the heart of the comparison."
    }
];
