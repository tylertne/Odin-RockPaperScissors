//commit early and often
//Work through with pseudocode and test each part before moving to the next part

//generate a random number between 0 and 1
//if the number is less than 0.33, output rock
//if the number is between 0.33 and 0.667 output paper
//if the number is greater than 0.667 output scissors
//return the output

const computerOutputNumber = Math.random()

function getComputerChoice(){
    if(computerOutputNumber < 0.3333){
        return 'Rock'
    }
    else if(computerOutputNumber < 0.6667){
        return 'Paper'
    }
    else{
        return 'Scissors'
    }
}

//inputs are playerSelection (case insensative) and Computer Selection
//outputs are a string that declares the winner of the round or a tie

//create a function that takes in a case insensative player selection and computer selection
//if the player selection is rock and the computer seleciton is scissors, or if player selection is paper and the computer selection is rock, or if the player selection is scissors and the computer selection is paper, return 'You win' and the choice that beat the computers choice
//if the player selection is the same as the computer selection, return 'tie!'
//if the combination is anything player losing, return 'you lose' and the choice that loses to the computers choice
//if anything else is entered, that is invalid

function playRound(playerSelection, computerSelection){
    const playerChoice = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
    if(playerChoice === 'Rock' && computerSelection === 'Scissors' || playerChoice === 'Paper' && computerSelection === 'Rock' || playerChoice === 'Scissors' && computerSelection === 'Paper'){
        return `You win! ${playerChoice} beats ${computerSelection}`
    }
    else if(playerChoice === 'Rock' && computerSelection === 'Paper' || playerChoice === 'Paper' && computerSelection === 'Scissors' || playerChoice === 'Scissors' && computerSelection === 'Rock'){
        return `You lose! ${computerSelection} beats ${playerChoice}`
    }
    else if(playerChoice === computerSelection){
        return `Tie! ${playerChoice} and ${computerSelection} are the same.`
    }
    else{
        return 'Invalid Input'
    }
}
const playerSelection = "sCisSors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));