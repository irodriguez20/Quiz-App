// In-memory database of questions
const STORE = [
    {
        question: 'What are the Great houses of Game of Thrones?',
        answers: [
            'Stark, Targaryen, Martell, Baelish, Greyjoy, Lannister',
            'Targaryen, Stark, Lannister, Arryn, Tully, Greyjoy, Baratheon, Tyrell, Martell, Bolton',
            'Lannister, Stark, Targaryen, Baratheon,',
            'Stark, Lannister, Targaryen, Dothraki, Tyrell, Baratheon'
        ],
        correctAnswer: 'Targaryen, Stark, Lannister, Arryn, Tully, Greyjoy, Baratheon, Tyrell, Martell, Bolton',
    },
    {
        question: 'Which Great House did the Mad King belong to?',
        answers: [
            'Tyrell',
            'Baratheon',
            'Stark',
            'Targaryen'
        ],
        correctAnswer: 'Targaryen'
    },
    {
        question: 'Who are Jon Snow\'s real parents?',
        answers: [
            'Eddard Stark & a mistress',
            'Robb Stark & Daenerys Targaryen',
            'Lyanna Stark & Ned Targaryen',
            'Lyanna Stark & Rhaegar Targaryen'
        ],
        correctAnswer: 'Lyanna Stark & Rhaegar Targaryen'
    },
    {
        question: 'Has the Baratheon blood line been wiped out?',
        answers: [
            'No, it lives on in Robert Baratheon\'s illegitimate son, Gendry.',
            'Yes, Joffrey Baratheon had all the illegitimate children killed before his death.',
            'Yes, all the Baratheon brothers are dead.',
            'No, Stannis Baratheon\'s daughter is still alive.'
        ],
        correctAnswer: 'No, it lives on in Robert Baratheon\'s illegitimate son, Gendry.'
    },
    {
        question: 'What happens at the Red Wedding?',
        answers: [
            'King Robb Stark, Queen Talisa Stark & Lady Catelyn Stark are among those murdered during the massacre.',
            'The Red Witch and Gendry Baratheon are married.',
            'Sansa Stark is forced to marry Tyrion Lannister.',
            'Sansa Stark agrees to marry Ramsay Bolton.'
        ],
        correctAnswer: 'King Robb Stark, Queen Talisa Stark & Lady Catelyn Stark are among those murdered during the massacre.'
    },
    {
        question: 'Which of Daenerys\' dragons did the Night King kill?',
        answers: [
            'Rhaegal',
            'Drogon',
            'Viserian',
            'Balerion'
        ],
        correctAnswer: 'Viserian'
    },
    {
        question: 'Who is the Red Witch?',
        answers: [
            'Tyene',
            'Ygritte',
            'Shae',
            'Melisandre'
        ],
        correctAnswer: 'Melisandre'
    },
    {
        question: 'How did Kahl Drogo die?',
        answers: [
            'Visery\'s Targaryen pours hot melted gold over Kahl Drogo\'s head.',
            'Daario Naharis is jealous & murders him in his sleep.',
            'Daenerys stabs him in his sleep.',
            'Daenerys smothers him with a pillow to end his suffering.'
        ],
        correctAnswer: 'Daenerys smothers him with a pillow to end his suffering.'
    },
    {
        question: 'Who was Jon Snow\'s first love?',
        answers: [
            'Daenerys',
            'Ygritte',
            'Margaery',
            'Shae'
        ],
        correctAnswer: 'Ygritte'
    },
    {
        question: 'What was Tyrion\'s advice to Jon Snow when the first met?',
        answers: [
            'A Lannister always pays his debts.',
            'A mind needs books like a sword needs a whetstone.',
            'Every time we deal with an enemy, we create two more.',
            'Never forget what you are. The rest of the world will not. Wear it like armor & it can never be used to hurt you.'
        ],
        correctAnswer: 'Never forget what you are. The rest of the world will not. Wear it like armor & it can never be used to hurt you.'
    }
];


let questionNumber = 0;
let score = 0;


//generate question
function generateQuestion () {
    if (questionNumber < STORE.length) {
        return `<div class="question-${questionNumber}">
        <h2>${STORE[questionNumber].question}</h2>
        <form>
        <fieldset>
        <label class="answerOption">
        <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
        <span>${STORE[questionNumber].answers[0]}</span>
        </label>
        <label class="answerOption">
        <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
        <span>${STORE[questionNumber].answers[1]}</span>
        </label>
        <label class="answerOption">
        <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
        <span>${STORE[questionNumber].answers[2]}</span>
        </label>
        <label class="answerOption">
        <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
        <span>${STORE[questionNumber].answers[3]}</span>
        </label>
        <button type="submit" class="submitButton">Submit</button>
        </fieldset>
        </form>
        </div>`;
    } else {
        renderResults();
        restartQuiz();
        $('.questionNumber').text(10);
    }
}


function changeQuestionNumber() {
    questionNumber ++;
    $('.questionNumber').text(questionNumber+1);
}

function changeScore() {
    score ++;
}

function startQuiz() {
    $('.intro').on('click', '.startButton', function (event){
        $('.intro').remove();
        $('.quizForm').css('display', 'block');
        $('.questionNumber').text(1);
    });
}

function renderQuestion() {
    $('.quizForm').html(generateQuestion());
}

function userPickAnswer() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        let selected = $('input:checked');
        let answer = selected.val();
        let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
        if (answer === correctAnswer) {
            selected.parent().addClass('correct');
            answerCorrect();
        } else {
            selected.parent().addClass('wrong');
            answerWrong();
        }
    });
}

function answerCorrect() {
    feedbackCorrectAnswer();
    updateScore();
}

function answerWrong() {
    feedbackWrongAnswer();
}



function feedbackCorrectAnswer() {
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    $('.quizForm').html(`<div class="correctFeedback"><p>That's correct!</p>
    <button type="button" class="nextButton">Continue</button></div>`);
}

function feedbackWrongAnswer() {
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    $('.quizForm').html(`<div class ="correctFeedback">
    <p>You got it wrong.<br>The correct answer is:<br><p>
    <div class='container'> 
    <p><span>"${correctAnswer}"</span></p>
    </div>
    <button type="button" class="nextButton">Continue</button></div>`);
}

function updateScore() {
    changeScore();
    $('.score').text(score);
}

function renderResults() {
    if (score >= 7) {
        $('.quizForm').html(`<div class="results correctFeedback">
        <h3>You belong in Westeros!</h3>
        <p>You got ${score}/10</p>
        <button type='reset' class='resetButton'>Restart Quiz</button></div>`);
    } else if (score < 7 && score >= 5) {
        $('.quizForm').html(`<div class="results correctFeedback">
        <h3>You're so close!</h3>
        <p>You got ${score}/10</p>
        <p>You could pass after a quick recap.</p>
        <button type='reset' class='resetButton'>Restart Quiz</button></div>`);
    } else {
        $('.quizForm').html(`<div class="results correctFeedback">
        <h3>You've got some binging to do!</h3>
        <p>You got ${score}/10</p>
        <button type='reset' class='resetButton'>Restart Quiz</button></div>`);
    }
}


function renderNextQuestion() {
    $('main').on('click', '.nextButton', function(event) {
        changeQuestionNumber();
        renderQuestion();
        userPickAnswer();
    });
}


function restartQuiz() {
    $('main').on('click', '.resetButton', function(event) {
        location.reload();
    });
}


function createQuiz() {
    startQuiz();
    renderQuestion();
    userPickAnswer();
    renderNextQuestion();
}

$(createQuiz);