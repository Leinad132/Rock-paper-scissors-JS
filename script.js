let choices = ["Rock", "Paper", "Scissors"];
 
function computerChoice(choices){
    return choices[Math.floor(Math.random()*choices.length)];
}

let computer = computerChoice(choices);

let input = prompt("Enter your answer:");

function playerChoice(input){
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

let player = playerChoice(input);

function playRound(player,computer){
    switch(player){
        case"Rock":
            switch(computer){
                case "Rock":
                    return("Its a tie");
                case "Paper":
                    return("Computer Wins, paper beats rock!");
                case "Scissors":
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
                    return("player wins, paper beats rock");
                case "Scissors":
                    return("player loses.Scissors beat paper")
            }
            break;
    }
    switch([player]){
        case"Scissors":
            switch(computer){
                case"Scissors":
                    return("its a tie.");
                
                case"Paper":
                    return("player wins, scissors cut paper");
                
                case"Rock":
                    return("computer wins,rock beats scissors");
            }
            break;
    

    }
    
}

console.log(playRound(player,computer));

console.log("player entered:" + player);
console.log("computer entered:" + computer);