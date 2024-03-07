//commit early and often
//Work through with pseudocode and test each part before moving to the next part

//generate a random number between 0 and 1
//if the number is less than 0.33, output rock
//if the number is between 0.33 and 0.667 output paper
//if the number is greater than 0.667 output scissors
//return the output


function getComputerChoice(){
    const computerOutputNumber = Math.random()
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
    const playerChoice = playerSelection.toLowerCase()
    if(playerChoice === 'rock' && computerSelection === 'Scissors' || playerChoice === 'paper' && computerSelection === 'Rock' || playerChoice === 'scissors' && computerSelection === 'Paper'){
        return `PlayerWin`
    }
    else if(playerChoice === 'rock' && computerSelection === 'Paper' || playerChoice === 'paper' && computerSelection === 'Scissors' || playerChoice === 'scissors' && computerSelection === 'Rock'){
        return `ComputerWin`
    }
    else if(playerChoice === computerSelection.toLowerCase()){
        return `Tie`
    }
    else{
        return 'Invalid'
    }
}

//no inputs
//outputs are who won, and the score of the match. We want to continue to log the individual games as well.

//create a function 
//take in user input for playerSelection parameter of individual games
//create variables to count score
//run a loop that counts from game 1 to game 5
//for each game, log the output of the game and add a score for the winner
//whoever has a higher score at the end of 5 games, output a winner and a message

function playGame() {
    let playerScore = 0
    let computerScore = 0
    for(let i = 1; i <= 5; i++){
        const playerChoice = prompt('Rock, Paper, or Scissors?');
        const computerChoice = getComputerChoice();
        const game = playRound(playerChoice,computerChoice)
        switch(game){
            case `PlayerWin`:
            console.log(`You win! ${playerChoice[0].toUpperCase()+playerChoice.slice(1).toLowerCase()} beats ${computerChoice[0].toUpperCase() + computerChoice.slice(1).toLowerCase()}`)
            playerScore++
            break;
            case `ComputerWin`:
            console.log(`You lose! ${computerChoice[0].toUpperCase()+computerChoice.slice(1).toLowerCase()} beats ${playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase()}`)
            computerScore++
            break;
            case `Tie`:
            console.log(`Tie, ${computerChoice[0].toUpperCase()+computerChoice.slice(1).toLowerCase()} and ${playerChoice[0].toUpperCase()+playerChoice.slice(1).toLowerCase()}`)
            break;
            case `Invalid`:
            console.log('Invalid, try again')
            i--
            break;
        }
    }
    if(playerScore > computerScore){
        console.log(`You win the series! ${playerScore} to ${computerScore}`)
    }
    else if(playerScore < computerScore){
        console.log(`You lose the series! ${playerScore} to ${computerScore}`)
    }
    else if(playerScore === computerScore){
        console.log(`Series Tie: ${playerScore} to ${computerScore}`)
    }
}