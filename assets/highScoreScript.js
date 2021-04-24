// PSEUDO CODE 
// 1. define buttons : back + clear
// 2. create event listeners for buttons 
// 3. define user initials + final score
// 4. retrieve user initials + score (JSON parse?????)
// 5. create string (stringify) for user initials + scores 


var backButtonEl = document.querySelector("#goBack");
var clearButtonEl = document.querySelector("#clearHighscores");
var finalScore = JSON.parse(localStorage.getItem('highscores'))


backButtonEl.addEventListener("click", function(event) {
    console.log(event)
    window.location.replace("./index.html")
});

clearButtonEl.addEventListener("click", function(event) {
    console.log(event);
    event.preventDefault();
    localStorage.clear();
});

// function storeScores () {
//     var userInitialsEl = document.getElementById("")
// }



// // With Tom
// let scores = JSON.parse(localStorage.getItem('highscores'))

// localStorage.setItem('highscores',JSON.stringify(scores))
// var highScores = localStorage.getItem('highscores')


// let scores = []
// if (localStorage.getItem('highscores') === false) {
//     scores = []}
// else {
//     scores = JSON.parse(localStorage.getItem('highscores')
// }    
