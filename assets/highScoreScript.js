// Declare Global Variables
var backButtonEl = document.querySelector("#goBack");
var clearButtonEl = document.querySelector("#clearHighscores");
var finalScore = JSON.parse(localStorage.getItem('highscores'));
var AllListEl = document.querySelector("#userList");
var textScore = localStorage.getItem('score');
var textInitial = localStorage.getItem('initials');
var x = document.createElement("li");
x.setAttribute('id', textInitial);
var listEl = document.getElementById("userList").appendChild(x);                  
listEl.innerHTML = `${textInitial} - ${textScore}`

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

// IN PROGRESS: Ran out of time. Function to store scores locally and sort in decending order

if (finalScore !== null){
    for (let index = 0; index < finalScore.length; index++) {
        var x = document.createElement("li");
        var t = document.createTextNode(`${index + 1}. ${finalScore[index].textInitial} - ${finalScore[index].userScore}`);
        x.appendChild(t);
        document.getElementById('.highScores').appendChild(x);
        x.className += "userList";
    }
}
