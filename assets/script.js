var timerEl = document.querySelector("#timer");
var timer;
var startButtonEl = document.querySelector("#startButton");
var timeRemaining = 10;
var questionEl = document.querySelector("#question");
var answerContainer = document.querySelector("#answerChoiceContainer");

var AC0El = document.querySelector("#answerChoice0");
var AC1El = document.querySelector("#answerChoice1");
var AC2El = document.querySelector("#answerChoice2");
var AC3El = document.querySelector("#answerChoice3");
var totalScore = document.querySelector("#finalScore");
var currentQuestionIndex=0;
var startScreen = document.querySelector("#startQuizButton");
var choiceButton = document.querySelectorAll(".choice");
console.log(choiceButton);
var scoreCounter = 50;
// var correctAnswer = 
// var chosen = 



// Define all questions, answer choices and identify correct answer
var quiz = [{
    question: 'What is The Dudes favorite drink?',
    AC0: 'Manhatten',
    AC1: 'Old Fashioned',
    AC2: 'White Russian',
    AC3: 'Arnold Palmer',
    correctAnswer: 'White Russian'
},
{
    question: 'What "really tied the room together"?',
    AC0: 'rug',
    AC1: 'painting',
    AC2: 'lamp',
    AC3:  'ropes',
    correctAnswer: 'rug'
},
{
    question: 'Fill in the blank: "This is not _____, this is bowling. There are rules.',
    AC0: 'prison',
    AC1: 'Nam',
    AC2: 'the circus',
    AC3: 'a playground',
    correctAnswer: 'Nam'
},
{
    question: 'Which of the following is *not* one of the alternative names The Dude suggests to The Big Lebowski?',
    AC0: 'His Dudeness',
    AC1: 'El Duderino',
    AC2: 'Duder',
    AC3: 'Mounsieur Dude',
    correctAnswer: 'Mounsieur Dude'
},
{
    question: 'Who kidnapped Bunny?',
    AC0: 'Bunny',
    AC1: 'The Big Lebowski',
    AC2: 'The Nihilists',
    AC3: 'Jackie Treehorn',
    correctAnswer: 'Bunny'
}
];


function showCurrentQuestion () {
    if (currentQuestionIndex >= quiz.length - 1) {
        clearInterval(timeRemaining);
        displayQuizResults();
        currentQuestionIndex = quiz.length - 1;
    }


    if(quiz[currentQuestionIndex] !== undefined) {
        startScreen.hidden = true;
        questionEl.hidden = false;
        answerChoiceContainer.hidden = false;
        questionEl.textContent=quiz[currentQuestionIndex].question;
        AC0El.textContent=quiz[currentQuestionIndex].AC0;
        AC1El.textContent=quiz[currentQuestionIndex].AC1;
        AC2El.textContent=quiz[currentQuestionIndex].AC2;
        AC3El.textContent=quiz[currentQuestionIndex].AC3;
    }
}

function displayQuizResults() {
    //TODO: put something here
}

// Function that creates timer

function startTimer () {
    timer = setInterval(function (){
        timeRemaining--;
        // console.log(timeRemaining + 'that we see')
        timerEl.textContent = timeRemaining + ' seconds';
    if (timeRemaining === 0) {
        clearInterval (timer);
        }
    }, 1000);  
}

// NEED TO: Create function to cycle through questions
function answerIsCorrect(questionMetadata, answerKey) {
    const correctAnswer = questionMetadata.correctAnswer;
    return questionMetadata[answerKey] === correctAnswer;
}

// NEED TO: Create functions to change score for correct/incorrect and display message to user 'Correct! or Incorrect!' 
function correctAnswer() {
    NOTSUREWHATGOESHERE.textContent = "Correct!";
    scoreCounter++;
}
function incorrectAnswer () {
    ORHERE.textContent = "Incorrect!";
    scoreCounter--;
}


// NEED TO: create function to calculate final score and open form for user to input initials. This will need to access local storage. 

function tallyResult(questionMetadata, selectedAnswer) {
    if(answerIsCorrect(questionMetadata, selectedAnswer)) {
        scoreCounter++;
    }

    currentQuestionIndex++;
    showCurrentQuestion();
}

// Event Listener to start the game + trigger timer
startButton.addEventListener("click", function() {
    startTimer();
    showCurrentQuestion();
})

choiceButton.addEventListener("click", function(e){
    e.preventDefault();
    console.log(e)
    console.log('buntton clicked')
    // var allChoices = document.getElementsByClassName('choice')

    // if (e.target.matches(allChoices[1].getAttribute('id'))) {
    //     tallyResult (quiz[currentQuestionIndex], "AC0")
    // }

    // console.log(scoreCounter);
})