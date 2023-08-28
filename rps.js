// For the player's turn 
function playerChoice() {
    let PT = prompt("Enter your Choice (Rock, paper, or scissors)");
    return PT.toLowerCase();
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
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "tie";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

function playGame() {
    console.log("Welcome to the game, LET'S START!!");
    while (true) {
        let PC = playerChoice();
        let CC = computerChoice();
        let roundWinner = determineWinner(PC, CC);

        console.log("Player Choice:", PC);
        console.log("Computer Choice:", CC);

        if (roundWinner === "tie") {
            console.log("It's a tie");
        } else {
            console.log(
                roundWinner.charAt(0).toUpperCase() + roundWinner.slice(1) + " wins"
            );
        }

        let ask = prompt("Do you want to play again? (yes/no)");
        if (ask.toLowerCase() !== "yes") {
            break;
        }
    }
}

// Call the playGame function to run the game
playGame();