// Quiz Engine - History of Computing & ComProg1
// Handles quiz logic, scoring, and navigation

// ITC Quiz titles
const itcQuizTitles = {
    1: "Quiz 1: The Big Picture & Mechanical Era",
    2: "Quiz 2: Modern & Pre-Electronic Period",
    3: "Quiz 3: First Generation & Comparisons",
    4: "Quiz 4: Second & Third Generation",
    5: "Quiz 5: Fourth Generation & Timelines",
    6: "Quiz 6: Companies & Modern Topics",
    7: "Quiz 7: CPU Components & Quick Recall"
};

// ITC Quiz data mapping
const itcQuizData = {
    1: typeof quiz1Questions !== 'undefined' ? quiz1Questions : [],
    2: typeof quiz2Questions !== 'undefined' ? quiz2Questions : [],
    3: typeof quiz3Questions !== 'undefined' ? quiz3Questions : [],
    4: typeof quiz4Questions !== 'undefined' ? quiz4Questions : [],
    5: typeof quiz5Questions !== 'undefined' ? quiz5Questions : [],
    6: typeof quiz6Questions !== 'undefined' ? quiz6Questions : [],
    7: typeof quiz7Questions !== 'undefined' ? quiz7Questions : []
};

// ComProg1 Quiz titles
const comprog1QuizTitles = {
    1: "ComProg1: Variables, Operators & Functions",
    2: "ComProg1: Variables, Operators & Functions (Set 2)",
    3: "ComProg1 Week 1: Introduction to Computer Programming",
    4: "ComProg1 Week 4: Input and Output with Streams",
    5: "ComProg1 Week 5: Operators for Fundamental Types",
    6: "ComProg1 Week 6: Control Flow 1 (Selection)",
    7: "ComProg1 Week 7: Control Flow 2 (Repetition)",
    8: "ComProg1 Week 8: Nested Loops",
    9: "ComProg1 Week 9: Arithmetic Conversions & the string Class",
    10: "ComProg1 Week 10: File Streams",
    11: "ComProg1 Week 11: Using Functions and Classes",
    12: "ComProg1 Week 12: User-Defined Functions"
};

// ComProg1 Quiz data mapping
const comprog1QuizData = {
    1: typeof comprog1Questions !== 'undefined' ? comprog1Questions : null,
    2: typeof comprog1Quiz2Questions !== 'undefined' ? comprog1Quiz2Questions : null,
    3: typeof comprog1Week1Questions !== 'undefined' ? comprog1Week1Questions : null,
    4: typeof comprog1Week4Questions !== 'undefined' ? comprog1Week4Questions : null,
    5: typeof comprog1Week5Questions !== 'undefined' ? comprog1Week5Questions : null,
    6: typeof comprog1Week6Questions !== 'undefined' ? comprog1Week6Questions : null,
    7: typeof comprog1Week7Questions !== 'undefined' ? comprog1Week7Questions : null,
    8: typeof comprog1Week8Questions !== 'undefined' ? comprog1Week8Questions : null,
    9: typeof comprog1Week9Questions !== 'undefined' ? comprog1Week9Questions : null,
    10: typeof comprog1Week10Questions !== 'undefined' ? comprog1Week10Questions : null,
    11: typeof comprog1Week11Questions !== 'undefined' ? comprog1Week11Questions : null,
    12: typeof comprog1Week12Questions !== 'undefined' ? comprog1Week12Questions : null
};

// Theology Quiz titles
const theologyQuizTitles = {
    1: "Essentials of Catholic Faith and Life - Chapter 1: Revelation in Creation",
    2: "Essentials of Catholic Faith and Life - Chapter 2: Sin and Grace",
    3: "Essentials of Catholic Faith and Life - Chapter 3: Passion, Death and Resurrection"
};

// Theology Quiz data mapping.
// Each chapter is a flat list of True or False questions, like the ITC quizzes.
const theologyQuizData = {
    1: typeof theologyCh1Questions !== 'undefined' ? theologyCh1Questions : [],
    2: typeof theologyCh2Questions !== 'undefined' ? theologyCh2Questions : [],
    3: typeof theologyCh3Questions !== 'undefined' ? theologyCh3Questions : []
};

// State variables
let currentSubject = 'itc';
let currentQuiz = 1;

// Every quiz is a list of parts - "tests" in the question files - even the
// single-part ITC and Theology ones, so the part navigation works the same way
// everywhere. A part looks like:
//   { label, short, info, questions, answers, optionOrder }
// `answers` holds one record per question and starts out all null, which is
// what lets the taker leave a part half done and come back to it. The score and
// the progress are derived from those records rather than counted along the
// way, so taking the parts out of order cannot desync anything.
let sections = [];
let currentSectionIndex = 0;
let currentQuestionIndex = 0;   // index within the current part
let questions = [];             // alias of sections[currentSectionIndex].questions
let answered = false;           // derived in showQuestion() from the stored record

// Which part the transition screen is currently offering
let transitionTargetIndex = 0;

// Initialize quiz on page load
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    currentSubject = urlParams.get('subject') || 'itc';
    currentQuiz = parseInt(urlParams.get('quiz')) || 1;

    initQuiz();
});

// Initialize the quiz
function initQuiz() {
    // Keep the nav link pointing back at the tab this quiz came from
    const homeLink = document.getElementById('home-link');
    if (homeLink) {
        homeLink.href = homeUrl();
    }

    if (currentSubject === 'comprog1') {
        initComprog1Quiz();
    } else if (currentSubject === 'theology') {
        initTheologyQuiz();
    } else {
        initItcQuiz();
    }
}

// Build one part. The answer and option-order slots are allocated here, so
// every rebuild - Try Again included - starts from a clean slate.
function makeSection(label, short, info, sectionQuestions) {
    return {
        label: label,
        short: short,
        info: info,
        questions: sectionQuestions,
        answers: new Array(sectionQuestions.length).fill(null),
        optionOrder: new Array(sectionQuestions.length).fill(null)
    };
}

// One unnamed part for the subjects that are a single flat list
function buildSingleSection(questionList) {
    const list = shuffleArray([...questionList]);
    return [makeSection('Questions', '', `${list.length} questions`, list)];
}

// Shared tail of the three init functions
function startAtFirstSection() {
    currentSectionIndex = 0;
    currentQuestionIndex = 0;
    transitionTargetIndex = 0;
    questions = sections.length ? sections[0].questions : [];
    answered = false;

    // Start on the question screen rather than inheriting whichever screen was
    // showing, so a restart does not depend on who hid what
    showScreen('question-screen');

    document.getElementById('total-questions').textContent = totalQuestionCount();

    renderPartTabs();
    showQuestion();
}

// Initialize ITC Quiz (one flat list, so a single part)
function initItcQuiz() {
    document.getElementById('quiz-title').textContent = itcQuizTitles[currentQuiz] || 'Quiz';

    sections = buildSingleSection(itcQuizData[currentQuiz] || []);

    startAtFirstSection();
}

// Initialize Theology Quiz (one flat list of True or False questions per chapter)
function initTheologyQuiz() {
    document.getElementById('quiz-title').textContent =
        theologyQuizTitles[currentQuiz] || 'Theology Quiz';

    sections = buildSingleSection(theologyQuizData[currentQuiz] || []);

    startAtFirstSection();
}

// Build the part list for a ComProg1 quiz.
// test1 and test2 are always present; test3 is optional, so the quizzes that
// only have two tests are unaffected.
function buildSections(quizData) {
    const built = [];

    built.push(makeSection(
        'Multiple Choice',
        'MC',
        quizData.test1Info || `${quizData.test1.length} questions`,
        shuffleArray([...quizData.test1])
    ));

    const test2Label = quizData.test2Label || 'Identification';
    built.push(makeSection(
        test2Label,
        // Only "Identification" is abbreviated in the counter
        test2Label === 'Identification' ? 'ID' : test2Label,
        quizData.test2Info || `${quizData.test2.length} questions - Type your answers`,
        // Some tests (e.g. the prefix/postfix tracing drill) are deliberately
        // ordered easy to hard, so they opt out of shuffling.
        quizData.shuffleTest2 === false
            ? [...quizData.test2]
            : shuffleArray([...quizData.test2])
    ));

    if (quizData.test3 && quizData.test3.length) {
        const test3Label = quizData.test3Label || 'True or False';
        built.push(makeSection(
            test3Label,
            test3Label,
            quizData.test3Info ||
                `${quizData.test3.length} questions - Choose True or False`,
            quizData.shuffleTest3 === false
                ? [...quizData.test3]
                : shuffleArray([...quizData.test3])
        ));
    }

    return built;
}

// Initialize ComProg1 Quiz (two or three tests)
function initComprog1Quiz() {
    document.getElementById('quiz-title').textContent = comprog1QuizTitles[currentQuiz] || 'ComProg1 Quiz';

    // Build the sections for this quiz
    const quizData = comprog1QuizData[currentQuiz];
    sections = quizData ? buildSections(quizData) : [];

    startAtFirstSection();
}

// Shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Escape HTML special characters to prevent XSS and render issues
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Same, for text going into a double-quoted attribute, which also needs the
// quotes escaped - section labels come from the question files
function escapeAttr(text) {
    return escapeHtml(text).replace(/"/g, '&quot;');
}

// Prompt shown above a prefix/postfix tracing table
const TRACE_PROMPT = 'Trace the code below. Enter the final value of x and the final value of y.';

// ---- Section helpers ------------------------------------------------------

// The part being taken right now
function currentSection() {
    return sections[currentSectionIndex] || null;
}

// The record for the question on screen, or null if it is still unanswered
function currentAnswer() {
    const section = currentSection();
    return section ? section.answers[currentQuestionIndex] : null;
}

// Total questions across every section of the current quiz
function totalQuestionCount() {
    return sections.reduce((sum, section) => sum + section.questions.length, 0);
}

// How many questions come before section i, so numbering runs on continuously
function questionsBeforeSection(index) {
    return sections
        .slice(0, index)
        .reduce((sum, section) => sum + section.questions.length, 0);
}

// Short tag used in the question counter, e.g. "Test 2 - ID"
function sectionShort(index) {
    return sections[index] ? sections[index].short : '';
}

// How many of section i's questions have been answered
function sectionAnsweredCount(index) {
    return sections[index].answers.filter(answer => answer !== null).length;
}

// How many of section i's questions were answered correctly.
// Named ...Of so it cannot be shadowed by a local inside showTestTransition().
function sectionScoreOf(index) {
    return sections[index].answers.filter(answer => answer && answer.isCorrect).length;
}

function sectionIsComplete(index) {
    return sectionAnsweredCount(index) === sections[index].questions.length;
}

// The question a part should reopen on, or -1 once the part is finished
function firstUnansweredIndex(index) {
    return sections[index].answers.indexOf(null);
}

function totalAnsweredCount() {
    return sections.reduce((sum, section, i) => sum + sectionAnsweredCount(i), 0);
}

// The score, derived from the stored records, so it cannot be double-counted
function totalScore() {
    return sections.reduce((sum, section, i) => sum + sectionScoreOf(i), 0);
}

function allSectionsComplete() {
    return sections.length > 0 && sections.every((section, i) => sectionIsComplete(i));
}

// The next part with questions left, searching forward from `from` and wrapping
// round, since the parts can be taken in any order. -1 when everything is done.
function nextIncompleteSectionIndex(from) {
    for (let step = 1; step <= sections.length; step++) {
        const index = (from + step) % sections.length;
        if (!sectionIsComplete(index)) return index;
    }
    return -1;
}

// Results are only reachable once every question in every part is answered
function nextButtonLabel() {
    if (allSectionsComplete()) return 'See Results';
    if (firstUnansweredIndex(currentSectionIndex) === -1) return 'Next Test →';
    return 'Next Question →';
}

// ---- Tracing table --------------------------------------------------------

// Collect the two tracing inputs (may be absent on pages without the table)
function traceInputs() {
    return [
        document.getElementById('trace-final-x'),
        document.getElementById('trace-final-y')
    ].filter(Boolean);
}

// Clear and re-enable the tracing table so it is ready for the next question
function resetTraceInputs() {
    traceInputs().forEach(input => {
        input.value = '';
        input.disabled = false;
        input.classList.remove('cell-correct', 'cell-incorrect');
    });
    const traceSubmit = document.getElementById('trace-submit-btn');
    if (traceSubmit) traceSubmit.disabled = false;
}

// Fill the tracing table for the current question.
// `record` is set when the question has already been answered, in which case
// the cells must not be cleared or focused - lockQuestionUi refills them.
function showTraceQuestion(question, record) {
    if (!record) resetTraceInputs();

    document.getElementById('trace-code').textContent = question.code;
    document.getElementById('trace-init-x').textContent = question.initialX;
    document.getElementById('trace-init-y').textContent = question.initialY;

    const preamble = document.getElementById('trace-preamble');
    if (preamble) {
        preamble.textContent =
            `Assume:  int x = ${question.initialX};   int y = ${question.initialY};`;
    }

    const [finalX, finalY] = traceInputs();
    if (!finalX || !finalY) return;

    // Enter moves on to the y cell, or submits once both are filled in
    finalX.onkeypress = function(e) {
        if (e.key !== 'Enter' || answered) return;
        if (finalY.value.trim() === '') {
            finalY.focus();
        } else {
            submitTraceAnswer();
        }
    };
    finalY.onkeypress = function(e) {
        if (e.key === 'Enter' && !answered) {
            submitTraceAnswer();
        }
    };

    if (!record) finalX.focus();
}

// Submit a prefix/postfix tracing answer - BOTH values must be correct
function submitTraceAnswer() {
    if (answered || currentAnswer()) return;

    const question = questions[currentQuestionIndex];
    const [finalX, finalY] = traceInputs();

    const rawX = finalX ? finalX.value.trim() : '';
    const rawY = finalY ? finalY.value.trim() : '';

    // An empty cell is always wrong; Number('') would otherwise be 0
    const xOk = traceCellIsCorrect(rawX, question.answerX);
    const yOk = traceCellIsCorrect(rawY, question.answerY);

    recordAnswer({
        question: `${question.code}   (starting from x = ${question.initialX}, y = ${question.initialY})`,
        userAnswer: `x = ${rawX || '(blank)'}, y = ${rawY || '(blank)'}`,
        correctAnswer: `x = ${question.answerX}, y = ${question.answerY}`,
        isCorrect: xOk && yOk,
        explanation: question.explanation,
        // Kept so the cells can be refilled and re-marked on a revisit
        rawX: rawX,
        rawY: rawY
    }, `Incorrect. Final x = ${question.answerX}, final y = ${question.answerY}`);
}

// A blank cell never counts; otherwise compare numerically
function traceCellIsCorrect(raw, expected) {
    return raw !== '' && Number(raw) === expected;
}

// ---- Recording and replaying answers --------------------------------------

// Store the answer in its own slot, then paint the feedback and refresh the
// counters. Assigning - never pushing - is what keeps a revisit idempotent.
function recordAnswer(record, incorrectMessage) {
    const section = currentSection();
    if (!section) return;

    section.answers[currentQuestionIndex] = record;
    answered = true;

    renderFeedback(record, questions[currentQuestionIndex], incorrectMessage);
    // The part counter should tick the moment the answer lands, not on Next
    updateProgress();
    renderNextButton();
}

// Append an optional explanation line under the feedback message
function appendExplanation(feedback, question) {
    if (!question.explanation) return;
    const note = document.createElement('div');
    note.className = 'feedback-note';
    note.textContent = question.explanation;
    feedback.appendChild(note);
}

// Feedback for one record. Shared by the live submit handlers and the replay
// path, so a revisited question reads exactly as it first did.
function renderFeedback(record, question, incorrectMessage) {
    const feedback = document.getElementById('feedback');
    if (record.isCorrect) {
        feedback.className = 'feedback correct';
        feedback.textContent = 'Correct! Well done!';
    } else {
        feedback.className = 'feedback incorrect';
        feedback.textContent = incorrectMessage ||
            `Incorrect. The correct answer is: ${record.correctAnswer}`;
    }
    appendExplanation(feedback, question);
}

function renderNextButton() {
    const nextBtn = document.getElementById('next-btn');
    nextBtn.style.display = 'block';
    nextBtn.textContent = nextButtonLabel();
}

// Put an already-answered question back the way the taker left it
function lockQuestionUi(question, record) {
    if (question.type === 'identification') {
        const answerInput = document.getElementById('answer-input');
        if (answerInput) {
            answerInput.value = record.raw !== undefined ? record.raw : record.userAnswer;
            answerInput.disabled = true;
        }
        const submitBtn = document.getElementById('submit-btn');
        if (submitBtn) submitBtn.disabled = true;
    } else if (question.type === 'trace-table') {
        const [finalX, finalY] = traceInputs();
        if (!finalX || !finalY) return;
        finalX.value = record.rawX;
        finalY.value = record.rawY;
        finalX.classList.add(
            traceCellIsCorrect(record.rawX, question.answerX) ? 'cell-correct' : 'cell-incorrect');
        finalY.classList.add(
            traceCellIsCorrect(record.rawY, question.answerY) ? 'cell-correct' : 'cell-incorrect');
        finalX.disabled = true;
        finalY.disabled = true;
        const traceSubmit = document.getElementById('trace-submit-btn');
        if (traceSubmit) traceSubmit.disabled = true;
    } else {
        // Match by text, because the rendered order is not the data order
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.add('disabled');
            const optionText = btn.querySelector('.option-text').textContent;

            if (optionText === question.answer) {
                btn.classList.add('correct');
            } else if (!record.isCorrect && optionText === record.userAnswer) {
                btn.classList.add('incorrect');
            }
        });
    }
}

// Display current question
function showQuestion() {
    const section = currentSection();
    if (!section || currentQuestionIndex >= section.questions.length) {
        // Defensive: nextQuestion() and jumpToTest() keep the index in range
        showResults();
        return;
    }

    const question = questions[currentQuestionIndex];
    const record = section.answers[currentQuestionIndex];

    // The one place `answered` is set, so however the taker arrived at this
    // question it reflects the store rather than the route taken
    answered = record !== null;

    // Update progress (also redraws the part tabs)
    updateProgress();

    // Update question number. Multi-part quizzes name the part and keep the
    // numbering running on across the parts.
    const displayQuestionNum =
        questionsBeforeSection(currentSectionIndex) + currentQuestionIndex + 1;
    const alreadyAnswered = record ? ' · already answered' : '';
    document.getElementById('question-number').textContent = sections.length > 1
        ? `Test ${currentSectionIndex + 1} - ${sectionShort(currentSectionIndex)} | Question ${displayQuestionNum}${alreadyAnswered}`
        : `Question ${displayQuestionNum}${alreadyAnswered}`;

    // Update question text
    document.getElementById('question-text').textContent =
        question.type === 'trace-table' ? TRACE_PROMPT : question.question;

    // Get containers
    const optionsContainer = document.getElementById('options-container');
    const identificationContainer = document.getElementById('identification-container');
    const traceContainer = document.getElementById('trace-container');

    // Clear previous content
    optionsContainer.innerHTML = '';

    // Check question type
    if (question.type === 'identification') {
        // Show identification input, hide the others
        optionsContainer.style.display = 'none';
        if (traceContainer) traceContainer.style.display = 'none';
        if (identificationContainer) {
            identificationContainer.style.display = 'block';
            const answerInput = document.getElementById('answer-input');
            // Leave the box alone when replaying - lockQuestionUi refills it
            if (!record) {
                answerInput.value = '';
                answerInput.focus();
            }
            // Add Enter key listener
            answerInput.onkeypress = function(e) {
                if (e.key === 'Enter' && !answered) {
                    submitIdentificationAnswer();
                }
            };
        }
    } else if (question.type === 'trace-table') {
        // Show the tracing table, hide the others
        optionsContainer.style.display = 'none';
        if (identificationContainer) identificationContainer.style.display = 'none';
        if (traceContainer) {
            traceContainer.style.display = 'block';
            showTraceQuestion(question, record);
        }
    } else {
        // Show options, hide the input containers.
        // True/False reuses this path so it looks just like multiple choice.
        optionsContainer.style.display = 'block';
        if (identificationContainer) {
            identificationContainer.style.display = 'none';
        }
        if (traceContainer) traceContainer.style.display = 'none';

        // Freeze the option order the first time a question is shown, so that
        // revisiting it lines the recorded answer up with what is on screen.
        // True/False keeps its given order so True always sits above False.
        if (!section.optionOrder[currentQuestionIndex]) {
            section.optionOrder[currentQuestionIndex] = question.type === 'true-false'
                ? [...question.options]
                : shuffleArray([...question.options]);
        }
        const displayOptions = section.optionOrder[currentQuestionIndex];
        const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

        displayOptions.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.innerHTML = `
                <span class="option-letter">${letters[index]}</span>
                <span class="option-text">${escapeHtml(option)}</span>
            `;
            button.onclick = () => selectAnswer(option);
            optionsContainer.appendChild(button);
        });
    }

    // Hide feedback and next button
    document.getElementById('feedback').className = 'feedback';
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-btn').style.display = 'none';

    // Already answered? Replay it instead of asking again
    if (record) {
        lockQuestionUi(question, record);
        renderFeedback(record, question, question.type === 'trace-table'
            ? `Incorrect. Final x = ${question.answerX}, final y = ${question.answerY}`
            : null);
        renderNextButton();
    }
}

// Handle answer selection (multiple choice and True or False)
function selectAnswer(selectedOption) {
    if (answered || currentAnswer()) return;

    const question = questions[currentQuestionIndex];
    const record = {
        question: question.question,
        userAnswer: selectedOption,
        correctAnswer: question.answer,
        isCorrect: selectedOption === question.answer,
        explanation: question.explanation
    };

    recordAnswer(record);
    lockQuestionUi(question, record);
}

// Submit identification answer
function submitIdentificationAnswer() {
    if (answered || currentAnswer()) return;

    const question = questions[currentQuestionIndex];
    const answerInput = document.getElementById('answer-input');
    const typed = answerInput.value.trim();

    // Check if answer is correct (case-insensitive)
    const isCorrect = question.answer.some(validAnswer =>
        typed.toLowerCase() === validAnswer.toLowerCase()
    );

    const record = {
        question: question.question,
        userAnswer: typed || '(no answer)',
        // The literal text, so the box can be refilled on a revisit
        raw: typed,
        correctAnswer: question.answer[0], // Show first valid answer
        isCorrect: isCorrect,
        explanation: question.explanation
    };

    recordAnswer(record);
    lockQuestionUi(question, record);
}

// ---- Screens and navigation -----------------------------------------------

// Show one of the four screens and hide the rest
function showScreen(id) {
    ['question-screen', 'test-transition-screen', 'results-screen', 'review-screen']
        .forEach(screenId => {
            const screen = document.getElementById(screenId);
            if (screen) screen.style.display = screenId === id ? 'block' : 'none';
        });
}

// Re-enable the typed inputs, which get disabled once a question is answered
function resetAnswerInputs() {
    const answerInput = document.getElementById('answer-input');
    if (answerInput) {
        answerInput.value = '';
        answerInput.disabled = false;
    }
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.disabled = false;
    }
    resetTraceInputs();
}

// Jump to a part, picking up at its first unanswered question. The only
// function that moves currentSectionIndex - the part tabs and the button on
// the transition screen both come through here.
function jumpToTest(index) {
    const section = sections[index];
    if (!section || !section.questions.length) return;

    const questionScreen = document.getElementById('question-screen');
    const onQuestionScreen = questionScreen && questionScreen.style.display !== 'none';
    // A stray click on the tab you are already on must not wipe half-typed text
    if (onQuestionScreen && index === currentSectionIndex) return;

    showScreen('question-screen');

    currentSectionIndex = index;
    questions = section.questions;

    // A finished part reopens on its last question, still locked, so Next
    // carries on to the transition screen or the results from there.
    const next = firstUnansweredIndex(index);
    currentQuestionIndex = next === -1 ? section.questions.length - 1 : next;

    resetAnswerInputs();
    showQuestion();
}

// Move to the next unanswered question of this part, or on to whatever is next
// once the part is finished
function nextQuestion() {
    resetAnswerInputs();

    if (allSectionsComplete()) {
        showResults();
        return;
    }

    const next = firstUnansweredIndex(currentSectionIndex);
    if (next === -1) {
        showTestTransition(currentSectionIndex);
        return;
    }

    currentQuestionIndex = next;
    showQuestion();
}

// Show the screen between two parts. Reached only by finishing a part while
// another still has questions left, so the part named in the heading did just
// end - free navigation only changes which part is offered next.
function showTestTransition(finishedIndex) {
    const target = nextIncompleteSectionIndex(finishedIndex);
    if (target === -1) {
        showResults();
        return;
    }
    transitionTargetIndex = target;

    showScreen('test-transition-screen');

    const finished = sections[finishedIndex];
    const earned = sectionScoreOf(finishedIndex);
    const percentage = finished.questions.length
        ? Math.round((earned / finished.questions.length) * 100)
        : 0;

    const heading = document.getElementById('transition-heading');
    if (heading) heading.textContent = `Test ${finishedIndex + 1} Complete!`;

    document.getElementById('test1-score').textContent = earned;
    document.getElementById('test1-max').textContent = finished.questions.length;
    document.getElementById('test1-percentage').textContent = `${percentage}%`;

    // The offered part may already be part-done, if the taker started it earlier
    const done = sectionAnsweredCount(target);
    const resuming = done > 0;

    const transitionMsg = document.querySelector('#test-transition-screen .transition-message');
    if (transitionMsg) {
        transitionMsg.textContent =
            `${resuming ? 'Resume' : 'Ready for'} Test ${target + 1}: ${sections[target].label}`;
    }
    const nextInfo = document.getElementById('test2-info');
    if (nextInfo) {
        nextInfo.textContent = resuming
            ? `${sections[target].info} · ${done}/${sections[target].questions.length} answered`
            : sections[target].info;
    }
    const startBtn = document.getElementById('start-next-test-btn');
    if (startBtn) {
        startBtn.textContent = `${resuming ? 'Resume' : 'Start'} Test ${target + 1}`;
    }

    renderPartTabs();
    renderProgressBar();
}

// Go to the part the transition screen is offering. The tabs on the same screen
// offer every other remaining part, so this is just the suggested default.
function startNextTest() {
    jumpToTest(transitionTargetIndex);
}

// ---- Progress and part tabs -----------------------------------------------

// The bar tracks how much has actually been answered, which stays correct when
// the parts are taken out of order
function renderProgressBar() {
    const total = totalQuestionCount();
    const progress = total ? (totalAnsweredCount() / total) * 100 : 0;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

// Update progress bar, counter and part tabs
function updateProgress() {
    renderProgressBar();

    // The counter names the question on screen
    document.getElementById('current-question').textContent =
        questionsBeforeSection(currentSectionIndex) + currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = totalQuestionCount();

    renderPartTabs();
}

function setPartTabsVisible(visible) {
    const bar = document.getElementById('part-tabs');
    if (bar) bar.style.display = visible && sections.length > 1 ? 'flex' : 'none';
}

// Draw the row of part tabs. Hidden for single-part quizzes (ITC, Theology),
// where there is nothing to move between.
function renderPartTabs() {
    const bar = document.getElementById('part-tabs');
    if (!bar) return;

    if (sections.length < 2) {
        bar.innerHTML = '';
        bar.style.display = 'none';
        return;
    }

    bar.innerHTML = sections.map((section, index) => {
        const done = sectionAnsweredCount(index);
        const total = section.questions.length;
        const complete = sectionIsComplete(index);
        const current = index === currentSectionIndex;

        const classes = ['test-tab'];
        if (current) classes.push('is-current');
        if (complete) classes.push('is-complete');

        // The visible "12/20" does not describe itself out of context
        const label = `Test ${index + 1}, ${section.label}, ${done} of ${total} answered` +
            (current ? ', current part' : complete ? ', complete' : '');

        return `
            <button type="button" class="${classes.join(' ')}" onclick="jumpToTest(${index})"
                    ${current ? 'aria-current="true"' : ''} aria-label="${escapeAttr(label)}">
                <span class="test-tab-name">Test ${index + 1} · ${escapeHtml(sectionShort(index))}</span>
                <span class="test-tab-count">${done}/${total}</span>
                ${complete ? '<span class="test-tab-check" aria-hidden="true">✓</span>' : ''}
            </button>
        `;
    }).join('');

    bar.style.display = 'flex';
}

// ---- Results and review ---------------------------------------------------

// Show results screen
function showResults() {
    showScreen('results-screen');
    // Jumping back into a finished quiz from the results would be a back door
    setPartTabsVisible(false);

    const totalQuestions = totalQuestionCount();
    const finalScore = totalScore();
    const percentage = totalQuestions ? Math.round((finalScore / totalQuestions) * 100) : 0;

    document.getElementById('final-score').textContent = finalScore;
    document.getElementById('max-score').textContent = totalQuestions;
    document.getElementById('score-percentage').textContent = `${percentage}%`;

    // Set message based on score
    let message = '';
    if (currentSubject === 'comprog1') {
        if (percentage >= 90) {
            message = 'Excellent! You have mastered C++ fundamentals!';
        } else if (percentage >= 70) {
            message = 'Great job! You have a solid understanding of C++!';
        } else if (percentage >= 50) {
            message = 'Good effort! Keep practicing your C++ skills!';
        } else {
            message = 'Keep practicing! Review the C++ concepts and try again.';
        }
    } else if (currentSubject === 'theology') {
        if (percentage >= 90) {
            message = 'Excellent! You have mastered this chapter!';
        } else if (percentage >= 70) {
            message = 'Great job! You have a solid grasp of the material!';
        } else if (percentage >= 50) {
            message = 'Good effort! Keep reviewing the key points!';
        } else {
            message = 'Keep studying! Go back over the chapter and try again.';
        }
    } else {
        if (percentage >= 90) {
            message = 'Excellent! You really know your computing history!';
        } else if (percentage >= 70) {
            message = 'Great job! You have a solid understanding!';
        } else if (percentage >= 50) {
            message = 'Good effort! Keep studying to improve!';
        } else {
            message = 'Keep practicing! Review the study guide and try again.';
        }
    }
    document.getElementById('score-message').textContent = message;

    // Update progress bar to 100%
    document.getElementById('progress-bar').style.width = '100%';
}

// Review answers
function reviewAnswers() {
    showScreen('review-screen');
    setPartTabsVisible(false);

    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = '';

    const multiPart = sections.length > 1;
    let questionNumber = 0;

    sections.forEach((section, sectionIndex) => {
        // Group the review by part, so it reads in the quiz's own order even
        // when the parts were answered out of order
        if (multiPart) {
            const header = document.createElement('div');
            header.className = 'review-part-header';
            header.textContent = `Test ${sectionIndex + 1} · ${section.label} — ` +
                `${sectionScoreOf(sectionIndex)}/${section.questions.length}`;
            reviewContainer.appendChild(header);
        }

        section.answers.forEach(answer => {
            // Numbering counts every question, so it stays continuous
            questionNumber++;
            if (!answer) return;   // defensive: results need every question answered

            const item = document.createElement('div');
            item.className = `review-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;

            const testLabel = multiPart
                ? `(Test ${sectionIndex + 1} - ${sectionShort(sectionIndex)})`
                : '';

            let html = `
                <div class="review-question">
                    <strong>Q${questionNumber} ${testLabel}:</strong> ${escapeHtml(answer.question)}
                </div>
            `;

            if (answer.isCorrect) {
                html += `
                    <div class="review-answer user-correct">
                        Your answer: ${escapeHtml(answer.userAnswer)}
                    </div>
                `;
            } else {
                html += `
                    <div class="review-answer user-incorrect">
                        Your answer: ${escapeHtml(answer.userAnswer)}
                    </div>
                    <div class="review-answer correct-answer">
                        Correct answer: ${escapeHtml(answer.correctAnswer)}
                    </div>
                `;
            }

            if (answer.explanation) {
                html += `
                    <div class="review-explanation">
                        ${escapeHtml(answer.explanation)}
                    </div>
                `;
            }

            item.innerHTML = html;
            reviewContainer.appendChild(item);
        });
    });
}

// Back to results from review
function backToResults() {
    showScreen('results-screen');
    setPartTabsVisible(false);
}

// Restart the quiz. initQuiz() rebuilds the parts, so the recorded answers and
// the frozen option orders are replaced with fresh ones, and it brings the
// question screen back up.
function restartQuiz() {
    resetAnswerInputs();

    initQuiz();
}

// Link back to the quiz list, keeping the subject tab the user came from
function homeUrl() {
    if (currentSubject === 'comprog1') return 'index.html?subject=comprog1';
    if (currentSubject === 'theology') return 'index.html?subject=theology';
    return 'index.html';
}

// Go back to home page
function goHome() {
    window.location.href = homeUrl();
}
