// Define all global variables
var timerEl = document.querySelector("#timer");
var timer;
var timeRemaining = 50;
var startScreen = document.querySelector("#startQuizButton");
var startButtonEl = document.querySelector("#startButton");
var questionEl = document.querySelector("#question");
var answerContainer = document.querySelector("#answerChoiceContainer");
var choiceButton = document.querySelectorAll(".choice");
var AC0El = document.querySelector("#answerChoice0");
var AC1El = document.querySelector("#answerChoice1");
var AC2El = document.querySelector("#answerChoice2");
var AC3El = document.querySelector("#answerChoice3");
var currentQuestionIndex = 0;
var allDoneEl = document.querySelector("#allDone");
var totalScore = document.querySelector("#finalScore");
var scoreCounter = 50;
var titleEl = document.querySelector("#CodeQuizChallenge");
var secondsLeftEl = document.querySelector("#secondsLeft");
var submitScoreEl = document.querySelector("#submitScore");
var submitButton = document.querySelector("#submit");
var getInitials = document.querySelector('#initials')

// Define all questions, answer choices and identify correct answer
var quiz = [
     {
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

// Event Listener to start the game + trigger timer
startButton.addEventListener("click", function() {
    startTimer();
    showCurrentQuestion();
})

// Function that creates timer that counts down 
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

//Function to display question + answer choices until there are no more questions and display results once finished
function showCurrentQuestion () {
    if (currentQuestionIndex > quiz.length - 1) {
        clearInterval(timer);
        console.log(currentQuestionIndex)
        displayQuizResults();
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

// Function to compare user selection to correct answer, retrieve the next question, and deduct 10 sec/points if incorrect
function checkAnswer(event){
    if(event.target.textContent === quiz[currentQuestionIndex].correctAnswer) {
        console.log('Correct!')
    } else {
        console.log('Incorrect!')
        timeRemaining = timeRemaining - 10
    }
        currentQuestionIndex++
        showCurrentQuestion()
}

// Function to display quiz results once the quiz is completed/user runs out of time
function displayQuizResults () {
    console.log('results')
    questionEl.hidden = true;
    answerChoiceContainer.hidden = true;
    totalScore.hidden = false;
    allDoneEl.hidden = false;
    titleEl.hidden = true;

    if (timeRemaining < 0){
        timeRemaining = 0
    } 

    timerEl.textContent = timeRemaining + ' seconds';
    secondsLeftEl.textContent = timeRemaining;
    submitScoreEl.hidden = false;
}

// Event listener for the submit button that will direct the user to the Highscores page
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("initials", getInitials.value) 
    localStorage.setItem("score", timeRemaining)
    window.location.replace("./highScores.html")
})


