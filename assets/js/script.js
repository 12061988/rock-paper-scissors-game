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
    computerDiv.innerHTML = convert(ComputerChoice);
    if(UserChoice === "paper" && ComputerChoice === "rock" || UserChoice === "rock" && ComputerChoice === "scissors" || UserChoice === "scissors" && ComputerChoice === "paper"){  
               win(UserChoice);
           } 
           else if(UserChoice === ComputerChoice) {
               draw(UserChoice);
           }
           else {
               lose(UserChoice);
           }
           function continuGame(){
            i = Math.floor(Math.random() * 3);
            ComputerChoice = choices[i];
            box.style.display = "none";
           }
           setTimeout(continuGame, 1200);

}

function win(btn) {
    UserPoints++;
    document.getElementById("who").innerHTML = "Well Done! You win!";
    var btn = document.getElementById(btn)
   
}
function draw(btn) {
    document.getElementById("who").innerHTML = "It's a Draw!";
    var btn = document.getElementById(btn)
    

}

function lose(btn) {
document.getElementById("who").innerHTML = "Sorry, You lose...";
var btn = document.getElementById(btn)

    

}
