let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

 
function computerChoice(choices){
    return choices[Math.floor(Math.random()*choices.length)];
}

//let computer = computerChoice(choices);

//let input = prompt("Enter your answer:");

function playerChoice(input){
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

//let player = playerChoice(input);

function playRound(player,computer){
    switch(player){
        case"Rock":
            switch(computer){
                case "Rock":
                    return("Its a tie");
                case "Paper":
                    computerScore++;
                    return("Computer Wins, paper beats rock!");
                    
                case "Scissors":
                    playerScore++;
                    return("you win. Rock breaks scissors");
                    
            }
            break;
    }
    switch(player){
        case "Paper":
            switch(computer){
                case "Paper":
                    return("its a tie.");
                case "Rock":
                    playerScore++;
                    return("player wins, paper beats rock");
                    
                case "Scissors":
                    computerScore++;
                    return("player loses.Scissors beat paper");
                    
            }
            break;
    }
    switch(player){
        case"Scissors":
            switch(computer){
                case"Scissors":
                    return("its a tie.");
                
                case"Paper":
                    playerScore++;
                    return("player wins, scissors cut paper");
                    
                case"Rock":
                    playerScore++;
                    return("computer wins,rock beats scissors");
            }       
            break;
    

    }
    
}

function game(){
    for(round = 1; round <= 5; round++){
        let computer = computerChoice(choices);

        let input = prompt("Enter your answer:");
        let player = playerChoice(input);
        console.log("Player entered: "+ player);
        console.log("Computer entered: "+ computer);

        let result = playRound(player,computer);
        console.log(result);

        console.log("\nPlayer score: "+ playerScore);
        console.log("Computer score: "+ computerScore);

        /*if(playerScore < computerScore){
            console.log("Computer wins the game!");
        } else{
            console.log("Player wins the game!");
        }*/

    }
    if(playerScore < computerScore){
        console.log("Computer wins the game!");
    } else if(playerScore > computerScore){
        console.log("Player wins the game!");
    }else {
        console.log("Game ends in a tie");
    }
}

game();


//console.log(playRound(player,computer));

//console.log("player entered:" + player);
//console.log("computer entered:" + computer);