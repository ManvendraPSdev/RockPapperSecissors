// For player choice

const rockbtn = document.querySelector('#rk');
const paperbtn = document.querySelector('#p');
const secissorsbtn  = document.querySelector('#s');


rockbtn.addEventListener("click" , function(){
    playGame("rock");
}
);

paperbtn.addEventListener("click" , function(){
    playGame("paper");
}
);

secissorsbtn.addEventListener("click" , function(){
    playGame("scissors");
});

// For the player's turn 
function playerChoice(PLchoice) {
    let pc = PLchoice;
    return pc.toLowerCase();   
}


// User Choice = pc
let PLAYER_SCORE  = 0;
let COMPUTER_SCORE = 0;
function playGame(userChoice) {

        let CC = computerChoice();
        let roundWinner = determineWinner(userChoice, CC);
        document.querySelector('#CompChoice').innerHTML = `<p>${CC}</p>`;
    


        if (roundWinner == "tie") {
            document.querySelector('#result').innerHTML = `<p>${"It is a tie"}</p>`;
        } 

        else {
            if(roundWinner == "player"){
                PLAYER_SCORE ++ ;
            }
            else{
                COMPUTER_SCORE ++;
            }
        }

        // let ask = prompt("Do you want to play again? (yes/no)");
        // if (ask.toLowerCase() !== "yes") {
        //     break;
        // }

        // const btn66 = document.querySelector('#RM');
        // btn66.addEventListener('click' , playGame);
        // playAgainBtn.style.display = "block";
        document.querySelector("#ps").textContent = PLAYER_SCORE;
        document.querySelector("#cs").textContent = COMPUTER_SCORE;
        if(PLAYER_SCORE == 5 || COMPUTER_SCORE == 5){
            gameend(roundWinner);
        }
}
function gameend(roundWinner){
    document.querySelector("#result").innerHTML = `<p>${roundWinner} wins </p>`
}



// For Computer turn 
// For comp to be Select the random choice 1st we make the list of the choice So that With the Math.Random function
// it get the random index and then we return the value at that in
// For Computer turn 
function computerChoice() {
    let CT = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * CT.length);
    return CT[randomIndex];
}

// Determine the winner 
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "tie";
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        return "player";
    } else if (userChoice === "paper" && computerChoice === "rock") {
        return "player";
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        return "player";
    } else {
        return "computer";
    }
}


// Call the playGame function to run the game
playGame();