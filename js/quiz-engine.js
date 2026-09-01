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
    5: "ComProg1 Week 5: Operators for Fundamental Types"
};

// ComProg1 Quiz data mapping
const comprog1QuizData = {
    1: typeof comprog1Questions !== 'undefined' ? comprog1Questions : null,
    2: typeof comprog1Quiz2Questions !== 'undefined' ? comprog1Quiz2Questions : null,
    3: typeof comprog1Week1Questions !== 'undefined' ? comprog1Week1Questions : null,
    4: typeof comprog1Week4Questions !== 'undefined' ? comprog1Week4Questions : null,
    5: typeof comprog1Week5Questions !== 'undefined' ? comprog1Week5Questions : null
};

// Theology Quiz titles
const theologyQuizTitles = {
    1: "Theology: Understanding Theology, Faith & Philosophy"
};

// Theology Quiz data mapping
const theologyQuizData = {
    1: typeof theologyQuestions !== 'undefined' ? theologyQuestions : null
};

// Per-subject configuration. `twoTests` is what actually drives the Test 1 /
// Test 2 flow - it used to be a hardcoded check for the string 'comprog1'.
const SUBJECTS = {
    itc: {
        twoTests: false,
        quizTitles: itcQuizTitles,
        quizData: itcQuizData,
        fallbackTitle: 'Quiz',
        messages: [
            'Excellent! You really know your computing history!',
            'Great job! You have a solid understanding!',
            'Good effort! Keep studying to improve!',
            'Keep practicing! Review the study guide and try again.'
        ]
    },
    comprog1: {
        twoTests: true,
        quizTitles: comprog1QuizTitles,
        quizData: comprog1QuizData,
        fallbackTitle: 'ComProg1 Quiz',
        test1Label: 'MC',
        defaultTest2Label: 'Identification',
        defaultTest2Info: 'Type your answers',
        messages: [
            'Excellent! You have mastered C++ fundamentals!',
            'Great job! You have a solid understanding of C++!',
            'Good effort! Keep practicing your C++ skills!',
            'Keep practicing! Review the C++ concepts and try again.'
        ]
    },
    theology: {
        twoTests: true,
        quizTitles: theologyQuizTitles,
        quizData: theologyQuizData,
        fallbackTitle: 'Theology Quiz',
        test1Label: 'Modified MC',
        defaultTest2Label: 'True or False',
        defaultTest2Info: 'Choose True or False',
        messages: [
            'Excellent! You have mastered the Theology lessons!',
            'Great job! You have a solid grasp of the material!',
            'Good effort! Keep reviewing the key concepts!',
            'Keep studying! Go back over the lessons and try again.'
        ]
    }
};

// Config for the subject currently being taken
function subject() {
    return SUBJECTS[currentSubject] || SUBJECTS.itc;
}

// Labels for the second test of the current two-test quiz
let test2Label = 'Identification';

// State variables
let currentSubject = 'itc';
let currentQuiz = 1;
let currentQuestionIndex = 0;
let questions = [];
let score = 0;
let userAnswers = [];
let answered = false;

// ComProg1-specific state
let currentTest = 1; // 1 = Test 1 (MC), 2 = Test 2 (ID)
let test1Questions = [];
let test2Questions = [];
let test1Score = 0;
let test1Answers = [];

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

    if (subject().twoTests) {
        initTwoTestQuiz();
    } else {
        initItcQuiz();
    }
}

// Initialize ITC Quiz (original behavior)
function initItcQuiz() {
    // Set quiz title
    const cfg = subject();
    document.getElementById('quiz-title').textContent =
        cfg.quizTitles[currentQuiz] || cfg.fallbackTitle;

    // Get and shuffle questions
    questions = shuffleArray([...(cfg.quizData[currentQuiz] || [])]);

    // Reset state
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    answered = false;

    // Update total questions display
    document.getElementById('total-questions').textContent = questions.length;

    // Show first question
    showQuestion();
}

// Initialize a two-test quiz (Test 1 -> transition -> Test 2)
function initTwoTestQuiz() {
    const cfg = subject();

    // Set quiz title
    document.getElementById('quiz-title').textContent =
        cfg.quizTitles[currentQuiz] || cfg.fallbackTitle;

    // Get questions based on quiz number
    const quizData = cfg.quizData[currentQuiz];
    if (quizData) {
        test1Questions = shuffleArray([...quizData.test1]);
        // Some tests (e.g. the prefix/postfix tracing drill) are deliberately
        // ordered easy to hard, so they opt out of shuffling.
        test2Questions = quizData.shuffleTest2 === false
            ? [...quizData.test2]
            : shuffleArray([...quizData.test2]);
        test2Label = quizData.test2Label || cfg.defaultTest2Label;
    } else {
        test1Questions = [];
        test2Questions = [];
        test2Label = cfg.defaultTest2Label;
    }

    // Update the transition screen copy for this quiz
    const transitionMsg = document.querySelector('#test-transition-screen .transition-message');
    if (transitionMsg) {
        transitionMsg.textContent = `Ready for Test 2: ${test2Label}`;
    }
    const test2Info = document.getElementById('test2-info');
    if (test2Info && quizData) {
        test2Info.textContent = quizData.test2Info ||
            `${test2Questions.length} questions - ${cfg.defaultTest2Info}`;
    }

    // Start with Test 1
    currentTest = 1;
    questions = test1Questions;

    // Reset state
    currentQuestionIndex = 0;
    score = 0;
    test1Score = 0;
    userAnswers = [];
    test1Answers = [];
    answered = false;

    // Update total questions display
    document.getElementById('total-questions').textContent = questions.length;

    // Show first question
    showQuestion();
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

// Prompt shown above a prefix/postfix tracing table
const TRACE_PROMPT = 'Trace the code below. Enter the final value of x and the final value of y.';

// Short tag used in the question counter, e.g. "Test 2 - ID"
const TEST2_SHORT_LABELS = {
    'Identification': 'ID',
    'True or False': 'T/F'
};

function shortTest2Label() {
    return TEST2_SHORT_LABELS[test2Label] || test2Label;
}

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

// Fill the tracing table for the current question
function showTraceQuestion(question) {
    resetTraceInputs();

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

    finalX.focus();
}

// Submit a prefix/postfix tracing answer - BOTH values must be correct
function submitTraceAnswer() {
    if (answered) return;
    answered = true;

    const question = questions[currentQuestionIndex];
    const [finalX, finalY] = traceInputs();

    const rawX = finalX ? finalX.value.trim() : '';
    const rawY = finalY ? finalY.value.trim() : '';

    // An empty cell is always wrong; Number('') would otherwise be 0
    const xOk = rawX !== '' && Number(rawX) === question.answerX;
    const yOk = rawY !== '' && Number(rawY) === question.answerY;
    const isCorrect = xOk && yOk;

    // Mark each cell independently so the student sees which one was wrong
    if (finalX) finalX.classList.add(xOk ? 'cell-correct' : 'cell-incorrect');
    if (finalY) finalY.classList.add(yOk ? 'cell-correct' : 'cell-incorrect');

    // Store user answer
    userAnswers.push({
        question: `${question.code}   (starting from x = ${question.initialX}, y = ${question.initialY})`,
        userAnswer: `x = ${rawX || '(blank)'}, y = ${rawY || '(blank)'}`,
        correctAnswer: `x = ${question.answerX}, y = ${question.answerY}`,
        isCorrect: isCorrect,
        explanation: question.explanation
    });

    // Update score
    if (isCorrect) {
        score++;
    }

    // Disable the inputs and the submit button
    traceInputs().forEach(input => { input.disabled = true; });
    const traceSubmit = document.getElementById('trace-submit-btn');
    if (traceSubmit) traceSubmit.disabled = true;

    // Show feedback
    const feedback = document.getElementById('feedback');
    if (isCorrect) {
        feedback.className = 'feedback correct';
        feedback.textContent = 'Correct! Well done!';
    } else {
        feedback.className = 'feedback incorrect';
        feedback.textContent =
            `Incorrect. Final x = ${question.answerX}, final y = ${question.answerY}`;
    }
    appendExplanation(feedback, question);

    showNextButton();
}

// ---------------------------------------------------------------------------
// Modified multiple choice: five choices A-E where E is always "None of the
// above". The student enters how many choices are correct AND ticks exactly
// those choices. Both must be right - there is no partial credit.
// ---------------------------------------------------------------------------

const MULTI_LETTERS = ['A', 'B', 'C', 'D', 'E'];
const MULTI_NONE_TEXT = 'None of the above';

// The five checkboxes of the current question, in A-E order
function multiCheckboxes() {
    return [...document.querySelectorAll('#multi-options .multi-check')];
}

// Letters the student has ticked, e.g. ['A', 'C']
function multiSelectedLetters() {
    return multiCheckboxes().filter(box => box.checked).map(box => box.value);
}

// Clear and re-enable the whole block so it is ready for the next question
function resetMultiInputs() {
    const countInput = document.getElementById('multi-count');
    if (countInput) {
        countInput.value = '';
        countInput.disabled = false;
    }
    multiCheckboxes().forEach(box => {
        box.checked = false;
        box.disabled = false;
    });
    document.querySelectorAll('#multi-options .multi-option').forEach(row => {
        row.classList.remove('choice-correct', 'choice-wrong');
    });
    const hint = document.getElementById('multi-hint');
    if (hint) {
        hint.textContent = '';
        hint.className = 'multi-hint';
    }
    const submit = document.getElementById('multi-submit-btn');
    if (submit) submit.disabled = true;
}

// Keep the hint line and the Submit button in step with what has been entered.
// Submit stays locked until the number typed matches the boxes ticked, which is
// what stops impossible answers like "3" with only two choices selected.
function updateMultiState() {
    if (answered) return;

    const countInput = document.getElementById('multi-count');
    const hint = document.getElementById('multi-hint');
    const submit = document.getElementById('multi-submit-btn');
    if (!countInput || !submit) return;

    const selected = multiSelectedLetters().length;
    const raw = countInput.value.trim();
    const stated = Number(raw);
    const hasCount = raw !== '' && Number.isInteger(stated) && stated >= 1 && stated <= 5;

    const ready = hasCount && selected > 0 && selected === stated;
    submit.disabled = !ready;

    if (!hint) return;
    if (!hasCount) {
        hint.textContent = 'Enter how many choices are correct, then tick them below.';
        hint.className = 'multi-hint';
    } else {
        hint.textContent = `${selected} of ${stated} selected`;
        hint.className = ready ? 'multi-hint ready' : 'multi-hint';
    }
}

// Build the five choice rows for the current question
function showMultiQuestion(question) {
    resetMultiInputs();

    const container = document.getElementById('multi-options');
    if (!container) return;
    container.innerHTML = '';

    // The author supplies A-D; E is always "None of the above"
    const choices = [...question.options, MULTI_NONE_TEXT];

    choices.forEach((choice, index) => {
        const letter = MULTI_LETTERS[index];
        const row = document.createElement('label');
        row.className = 'multi-option';
        row.setAttribute('data-letter', letter);
        row.innerHTML = `
            <input type="checkbox" class="multi-check" value="${letter}">
            <span class="option-letter">${letter}</span>
            <span class="option-text">${escapeHtml(choice)}</span>
        `;
        container.appendChild(row);
    });

    // "None of the above" cannot be true at the same time as any other choice,
    // so ticking E clears A-D and ticking A-D clears E.
    multiCheckboxes().forEach(box => {
        box.onchange = function() {
            if (answered) return;
            if (box.value === 'E') {
                if (box.checked) {
                    multiCheckboxes().forEach(other => {
                        if (other.value !== 'E') other.checked = false;
                    });
                }
            } else if (box.checked) {
                const none = multiCheckboxes().find(other => other.value === 'E');
                if (none) none.checked = false;
            }
            updateMultiState();
        };
    });

    const countInput = document.getElementById('multi-count');
    if (countInput) {
        countInput.oninput = updateMultiState;
        countInput.focus();
    }

    updateMultiState();
}

// Render an answer key or a student response as "2 correct - A, C"
function describeMultiAnswer(letters) {
    if (!letters.length) return 'no choices selected';
    const sorted = [...letters].sort();
    return `${sorted.length} correct - ${sorted.join(', ')}`;
}

// Submit a modified multiple choice answer - the count AND the exact set must match
function submitMultiAnswer() {
    if (answered) return;

    const question = questions[currentQuestionIndex];
    const countInput = document.getElementById('multi-count');
    const selected = multiSelectedLetters();
    const stated = countInput ? Number(countInput.value.trim()) : NaN;

    // Both conditions are checked independently, per the exam rules
    const countOk = stated === question.answer.length;
    const setOk = selected.length === question.answer.length &&
        selected.every(letter => question.answer.includes(letter));
    const isCorrect = countOk && setOk;

    answered = true;

    // Mark every row: what was actually correct, and what was ticked wrongly
    document.querySelectorAll('#multi-options .multi-option').forEach(row => {
        const letter = row.getAttribute('data-letter');
        if (question.answer.includes(letter)) {
            row.classList.add('choice-correct');
        } else if (selected.includes(letter)) {
            row.classList.add('choice-wrong');
        }
    });

    // Store user answer
    userAnswers.push({
        question: question.question,
        userAnswer: countInput && countInput.value.trim() !== ''
            ? `${countInput.value.trim()} correct - ${selected.length ? [...selected].sort().join(', ') : 'none selected'}`
            : '(no answer)',
        correctAnswer: describeMultiAnswer(question.answer),
        isCorrect: isCorrect,
        explanation: question.explanation
    });

    // Update score
    if (isCorrect) {
        score++;
    }

    // Lock the inputs
    if (countInput) countInput.disabled = true;
    multiCheckboxes().forEach(box => { box.disabled = true; });
    const submit = document.getElementById('multi-submit-btn');
    if (submit) submit.disabled = true;
    const hint = document.getElementById('multi-hint');
    if (hint) hint.textContent = '';

    // Show feedback
    const feedback = document.getElementById('feedback');
    if (isCorrect) {
        feedback.className = 'feedback correct';
        feedback.textContent = 'Correct! Well done!';
    } else {
        feedback.className = 'feedback incorrect';
        feedback.textContent =
            `Incorrect. The correct answer is: ${describeMultiAnswer(question.answer)}`;
    }
    appendExplanation(feedback, question);

    showNextButton();
}

// Reveal the Next button with the right label. On a two-test subject the last
// question of Test 1 leads to the transition screen, not the results.
function showNextButton() {
    const nextBtn = document.getElementById('next-btn');
    nextBtn.style.display = 'block';

    const isLast = currentQuestionIndex === questions.length - 1;
    const finishes = subject().twoTests
        ? isLast && currentTest === 2
        : isLast;

    nextBtn.textContent = finishes ? 'See Results' : 'Next Question →';
}

// Append an optional explanation line under the feedback message
function appendExplanation(feedback, question) {
    if (!question.explanation) return;
    const note = document.createElement('div');
    note.className = 'feedback-note';
    note.textContent = question.explanation;
    feedback.appendChild(note);
}

// Display current question
function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        // Two-test subjects: check if we need to transition to Test 2
        if (subject().twoTests && currentTest === 1) {
            showTestTransition();
            return;
        }
        showResults();
        return;
    }

    const question = questions[currentQuestionIndex];
    answered = false;

    // Update progress
    updateProgress();

    // Calculate question number (Test 2 continues the numbering after Test 1)
    let displayQuestionNum = currentQuestionIndex + 1;
    if (subject().twoTests && currentTest === 2) {
        displayQuestionNum = test1Questions.length + currentQuestionIndex + 1;
    }

    // Update question number with test indicator for two-test subjects
    if (subject().twoTests) {
        const testLabel = currentTest === 1
            ? `Test 1 - ${subject().test1Label}`
            : `Test 2 - ${shortTest2Label()}`;
        document.getElementById('question-number').textContent =
            `${testLabel} | Question ${displayQuestionNum}`;
    } else {
        document.getElementById('question-number').textContent =
            `Question ${currentQuestionIndex + 1}`;
    }

    // Update question text
    document.getElementById('question-text').textContent =
        question.type === 'trace-table' ? TRACE_PROMPT : question.question;

    // Get containers
    const optionsContainer = document.getElementById('options-container');
    const identificationContainer = document.getElementById('identification-container');
    const traceContainer = document.getElementById('trace-container');
    const multiContainer = document.getElementById('multi-container');

    // Clear previous content
    optionsContainer.innerHTML = '';

    // Check question type
    if (question.type === 'identification') {
        // Show identification input, hide the others
        optionsContainer.style.display = 'none';
        if (traceContainer) traceContainer.style.display = 'none';
        if (multiContainer) multiContainer.style.display = 'none';
        if (identificationContainer) {
            identificationContainer.style.display = 'block';
            const answerInput = document.getElementById('answer-input');
            answerInput.value = '';
            answerInput.focus();
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
        if (multiContainer) multiContainer.style.display = 'none';
        if (traceContainer) {
            traceContainer.style.display = 'block';
            showTraceQuestion(question);
        }
    } else if (question.type === 'multi-select') {
        // Show the modified multiple choice block, hide the others
        optionsContainer.style.display = 'none';
        if (identificationContainer) identificationContainer.style.display = 'none';
        if (traceContainer) traceContainer.style.display = 'none';
        if (multiContainer) {
            multiContainer.style.display = 'block';
            showMultiQuestion(question);
        }
    } else {
        // Show options, hide the input containers
        optionsContainer.style.display = 'block';
        if (identificationContainer) {
            identificationContainer.style.display = 'none';
        }
        if (traceContainer) traceContainer.style.display = 'none';
        if (multiContainer) multiContainer.style.display = 'none';

        // True/False keeps its fixed order so True is always A and False is B
        const displayOptions = question.type === 'true-false'
            ? [...question.options]
            : shuffleArray([...question.options]);
        const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

        displayOptions.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.innerHTML = `
                <span class="option-letter">${letters[index]}</span>
                <span class="option-text">${escapeHtml(option)}</span>
            `;
            button.onclick = () => selectAnswer(option, button);
            optionsContainer.appendChild(button);
        });
    }

    // Hide feedback and next button
    document.getElementById('feedback').className = 'feedback';
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-btn').style.display = 'none';
}

// Handle answer selection
function selectAnswer(selectedOption, buttonElement) {
    if (answered) return;
    answered = true;

    const question = questions[currentQuestionIndex];
    const isCorrect = selectedOption === question.answer;

    // Store user answer
    userAnswers.push({
        question: question.question,
        userAnswer: selectedOption,
        correctAnswer: question.answer,
        isCorrect: isCorrect,
        explanation: question.explanation
    });

    // Update score
    if (isCorrect) {
        score++;
    }

    // Disable all buttons and show correct/incorrect
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.classList.add('disabled');
        const optionText = btn.querySelector('.option-text').textContent;

        if (optionText === question.answer) {
            btn.classList.add('correct');
        } else if (btn === buttonElement && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    // Show feedback
    const feedback = document.getElementById('feedback');
    if (isCorrect) {
        feedback.className = 'feedback correct';
        feedback.textContent = 'Correct! Well done!';
    } else {
        feedback.className = 'feedback incorrect';
        feedback.textContent = `Incorrect. The correct answer is: ${question.answer}`;
    }
    appendExplanation(feedback, question);

    showNextButton();
}

// Submit identification answer
function submitIdentificationAnswer() {
    if (answered) return;
    answered = true;

    const question = questions[currentQuestionIndex];
    const answerInput = document.getElementById('answer-input');
    const userAnswer = answerInput.value.trim();

    // Check if answer is correct (case-insensitive)
    const isCorrect = question.answer.some(validAnswer =>
        userAnswer.toLowerCase() === validAnswer.toLowerCase()
    );

    // Store user answer
    userAnswers.push({
        question: question.question,
        userAnswer: userAnswer || '(no answer)',
        correctAnswer: question.answer[0], // Show first valid answer
        isCorrect: isCorrect,
        explanation: question.explanation
    });

    // Update score
    if (isCorrect) {
        score++;
    }

    // Disable input
    answerInput.disabled = true;
    document.getElementById('submit-btn').disabled = true;

    // Show feedback
    const feedback = document.getElementById('feedback');
    if (isCorrect) {
        feedback.className = 'feedback correct';
        feedback.textContent = 'Correct! Well done!';
    } else {
        feedback.className = 'feedback incorrect';
        feedback.textContent = `Incorrect. The correct answer is: ${question.answer[0]}`;
    }
    appendExplanation(feedback, question);

    showNextButton();
}

// Show transition screen between Test 1 and Test 2 (ComProg1)
function showTestTransition() {
    document.getElementById('question-screen').style.display = 'none';
    document.getElementById('test-transition-screen').style.display = 'block';

    // Save Test 1 results
    test1Score = score;
    test1Answers = [...userAnswers];

    // Update Test 1 score display
    const percentage = Math.round((test1Score / test1Questions.length) * 100);
    document.getElementById('test1-score').textContent = test1Score;
    document.getElementById('test1-max').textContent = test1Questions.length;
    document.getElementById('test1-percentage').textContent = `${percentage}%`;

    // Update progress bar to show Test 1 complete
    const totalQuestions = test1Questions.length + test2Questions.length;
    const test1Progress = totalQuestions
        ? (test1Questions.length / totalQuestions) * 100
        : 0;
    document.getElementById('progress-bar').style.width = `${test1Progress}%`;
}

// Start Test 2 (ComProg1)
function startTest2() {
    document.getElementById('test-transition-screen').style.display = 'none';
    document.getElementById('question-screen').style.display = 'block';

    // Switch to Test 2
    currentTest = 2;
    questions = test2Questions;
    currentQuestionIndex = 0;
    // Don't reset score - continue from Test 1

    // Update total questions display
    document.getElementById('total-questions').textContent = test1Questions.length + test2Questions.length;

    // Re-enable input if needed
    const answerInput = document.getElementById('answer-input');
    if (answerInput) {
        answerInput.disabled = false;
    }
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.disabled = false;
    }
    resetTraceInputs();
    resetMultiInputs();

    // Show first Test 2 question
    showQuestion();
}

// Move to next question
function nextQuestion() {
    currentQuestionIndex++;

    // Re-enable identification input for next question
    const answerInput = document.getElementById('answer-input');
    if (answerInput) {
        answerInput.disabled = false;
    }
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.disabled = false;
    }
    resetTraceInputs();
    resetMultiInputs();

    showQuestion();
}

// Update progress bar and text
function updateProgress() {
    if (subject().twoTests) {
        // Calculate progress across both tests combined
        const totalQuestions = test1Questions.length + test2Questions.length;
        let answeredSoFar = currentQuestionIndex;
        if (currentTest === 2) {
            answeredSoFar = test1Questions.length + currentQuestionIndex;
        }
        const progress = (answeredSoFar / totalQuestions) * 100;
        document.getElementById('progress-bar').style.width = `${progress}%`;
        document.getElementById('current-question').textContent = answeredSoFar + 1;
        document.getElementById('total-questions').textContent = totalQuestions;
    } else {
        const progress = ((currentQuestionIndex) / questions.length) * 100;
        document.getElementById('progress-bar').style.width = `${progress}%`;
        document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    }
}

// Show results screen
function showResults() {
    document.getElementById('question-screen').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';

    let totalQuestions, finalScore, percentage;

    if (subject().twoTests) {
        // Combine Test 1 and Test 2 results
        totalQuestions = test1Questions.length + test2Questions.length;
        finalScore = score; // score already includes both tests
        percentage = Math.round((finalScore / totalQuestions) * 100);
    } else {
        totalQuestions = questions.length;
        finalScore = score;
        percentage = Math.round((finalScore / totalQuestions) * 100);
    }

    document.getElementById('final-score').textContent = finalScore;
    document.getElementById('max-score').textContent = totalQuestions;
    document.getElementById('score-percentage').textContent = `${percentage}%`;

    // Set message based on score, using this subject's ladder (90 / 70 / 50)
    const messages = subject().messages;
    let tier = 3;
    if (percentage >= 90) {
        tier = 0;
    } else if (percentage >= 70) {
        tier = 1;
    } else if (percentage >= 50) {
        tier = 2;
    }
    document.getElementById('score-message').textContent = messages[tier];

    // Update progress bar to 100%
    document.getElementById('progress-bar').style.width = '100%';
}

// Review answers
function reviewAnswers() {
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('review-screen').style.display = 'block';

    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = '';

    // For two-test subjects, combine Test 1 and Test 2 answers
    let allAnswers = userAnswers;
    if (subject().twoTests) {
        allAnswers = [...test1Answers, ...userAnswers.slice(test1Answers.length)];
    }

    allAnswers.forEach((answer, index) => {
        const item = document.createElement('div');
        item.className = `review-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;

        // Add test indicator for two-test subjects
        let testLabel = '';
        if (subject().twoTests) {
            testLabel = index < test1Questions.length
                ? `(Test 1 - ${subject().test1Label})`
                : `(Test 2 - ${shortTest2Label()})`;
        }

        let html = `
            <div class="review-question">
                <strong>Q${index + 1} ${testLabel}:</strong> ${escapeHtml(answer.question)}
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
}

// Back to results from review
function backToResults() {
    document.getElementById('review-screen').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';
}

// Restart the quiz
function restartQuiz() {
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('review-screen').style.display = 'none';
    document.getElementById('test-transition-screen').style.display = 'none';
    document.getElementById('question-screen').style.display = 'block';

    // Re-enable identification input if needed
    const answerInput = document.getElementById('answer-input');
    if (answerInput) {
        answerInput.disabled = false;
    }
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.disabled = false;
    }
    resetTraceInputs();
    resetMultiInputs();

    initQuiz();
}

// Link back to the quiz list, keeping the subject tab the user came from
function homeUrl() {
    // ITC is the tab index.html opens on by default, so it needs no parameter
    return currentSubject === 'itc' || !SUBJECTS[currentSubject]
        ? 'index.html'
        : `index.html?subject=${currentSubject}`;
}

// Go back to home page
function goHome() {
    window.location.href = homeUrl();
}
