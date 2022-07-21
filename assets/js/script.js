var choices = ["paper", "rock", "scissors"];
var i = Math.floor(Math.random() * 3);
var ComputerChoice = choices[i];
var UserPoints = 0;
var ComputerPoints = 0;
function score() {
    var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + ComputerPoints;
}

setInterval(score, 50);
function convert(word) {
    if(word === "paper") return '<i class="fa-solid fa-hand-paper"></i>';
    if(word === "rock") return '<i class="fa-solid fa-hand-rock"></i>';
    return '<i class="fa-solid fa-hand-rock"></i>'
}

function game(UserChoice) {
    var box = document.getElementById("challenge");
    box.style.display = "inline-flex";
    var userDiv = document.getElementById("UserObject");
    userDiv.innerHTML = convert(UserChoice);
    var computerDiv = document.getElementById("ComputerObject");
    
}
