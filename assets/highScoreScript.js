// Declare Global Variables
var backButtonEl = document.querySelector("#goBack");
var clearButtonEl = document.querySelector("#clearHighscores");
var finalScore = JSON.parse(localStorage.getItem('highscores'));
// var userInitialsEl = document.getElementById('initials').nodeValue;

// Event Listeners for the Back and Clear buttons on the webpage 
backButtonEl.addEventListener("click", function(event) {
    console.log(event)
    window.location.replace("./index.html")
});

clearButtonEl.addEventListener("click", function(event) {
    console.log(event);
    event.preventDefault();
    localStorage.clear();
});

// COULD NOT GET TO WORK Function to store scores locally and sort in decending order


// function storeScores () {
//     var userInitialsEl = document.getElementById('initials').nodeValue;
// }

// let scores = []
// if (localStorage.getItem('highscores') === false) {
//     scores = []}
// else {
//     scores = JSON.parse(localStorage.getItem('highscores')
// }    
