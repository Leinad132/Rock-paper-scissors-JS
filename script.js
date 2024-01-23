let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
//initiate varibles for the score
//create list for the strings that will serve as the choices
 
function computerChoice(choices){
    return choices[Math.floor(Math.random()*choices.length)];
}
//generate a random choice for the computer 


function playerChoice(input){
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
//grab the input from the player, regardless of characters's size


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
                    return("Player wins. Rock breaks scissors");
                    
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
    
}   //this function plays the game for one round, lists all the possibilites and the outcome
    //it also keeps track of the score at the end 

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

        

    }
    if(playerScore < computerScore){
        console.log("Computer wins the game!");
    } else if(playerScore > computerScore){
        console.log("Player wins the game!");
    }else {
        console.log("Game ends in a tie");
    }
}  /* the game function plays the actual game for 5 rounds, displays the selections
for both the computer and the player, displays the score at the end of each round and
finally compares scores to declare the winner.*/

game();


