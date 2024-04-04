//commit early and often
//Work through with pseudocode and test each part before moving to the next part

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


const buttonsArea = document.querySelector('.buttons')
function buttonGame (e) {
    let player = e.target.className
    console.log(player)
    console.log(playRound(player,getComputerChoice()))
}

buttonsArea.addEventListener('click', buttonGame)

function titleCase (word){
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
}


//     switch(game){
//         case `PlayerWin`:
//         console.log(`You win! ${titleCase(playerChoice)} beats ${(computerChoice)}`)
//         playerScore++
//         break;
//         case `ComputerWin`:
//         console.log(`You lose! ${(computerChoice)} beats ${titleCase(playerChoice)}`)
//         computerScore++
//         break;
//         case `Tie`:
//         console.log(`Tie, ${(computerChoice)} and ${titleCase(playerChoice)}`)
//         break;
//         case `Invalid`:
//         console.log('Invalid, try again')
//         i--
//         break;
// }