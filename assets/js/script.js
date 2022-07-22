const choices = ["paper", "rock", "scissors"];

let ComputerChoice = choices[Math.floor(Math.random() * 3)];

let UserPoints = 0;

let ComputerPoints = 0;

let box = document.getElementById("challenge");

let userDiv = document.getElementById("UserObject");

let computerDiv = document.getElementById("ComputerObject");



function score() {

    var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + ComputerPoints;

}



setInterval(score, 50);

function convert(word) {

    if(word === "paper") return '<i class="fa-solid fa-hand-paper"></i>';

    if(word === "rock") return '<i class="fa-solid fa-hand-rock"></i>';

    return '<i class="fa-solid fa-hand-rock"></i>';

}



function game(UserChoice) {

    box.style.display = "inline-flex";

    userDiv.innerHTML = convert(UserChoice);

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

            ComputerChoice = choices[Math.floor(Math.random() * 3)];

            box.style.display = "none";

           }

           setTimeout(continuGame, 1200);



}



function win(btn) {

    UserPoints++;

    document.getElementById("who").innerHTML = "Well Done! You win!";

    var btn = document.getElementById(btn);



    if(UserPoints >= 5) {

        gameOver();

    }

   

}

function draw(btn) {

    document.getElementById("who").innerHTML = "It's a Draw!";

    var btn = document.getElementById(btn);

}

    



function lose(btn) {

    ComputerPoints++;

    document.getElementById("who").innerHTML = "Sorry, You lose...";

    var btn = document.getElementById(btn);



    if(ComputerPoints >= 5) {

        gameOver();

    }



}



function gameOver() {

    // Things happen here. :)

}