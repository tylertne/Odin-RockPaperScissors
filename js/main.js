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
        return `Player Wins`
    }
    else if(playerChoice === 'rock' && computerSelection === 'Paper' || playerChoice === 'paper' && computerSelection === 'Scissors' || playerChoice === 'scissors' && computerSelection === 'Rock'){
        return `Computer Wins`
    }
    else if(playerChoice === computerSelection.toLowerCase()){
        return `Tie`
    }
    else{
        return 'Invalid'
    }
}

const resultsArea = document.querySelector('ul')
const buttonsArea = document.querySelector('.buttons')
const playerScore = document.querySelector('.playerNum')
const computerScore = document.querySelector('.computerNum')
const winnerBox = document.querySelector('.winner')
const winnerBoxText = document.querySelector('.winner span')
const resetBtn = document.querySelector('.reset')
playerScore.textContent = 0
computerScore.textContent = 0


function buttonGame (e) {
    let player = e.target.className
    const results = document.createElement('li')
    results.classList.add('results')
    const game = (playRound(player,getComputerChoice()))
    results.textContent = game
    resultsArea.appendChild(results)
    switch(game){
        case `Player Wins`:
        playerScore.textContent++
        break;
        case `Computer Wins`:
        computerScore.textContent++
        break;
    }
    if(playerScore.textContent >= 5){
        winnerBox.classList.remove('hidden')
        winnerBoxText.textContent = 'Player Wins'
    }
    else if(computerScore.textContent >= 5){
        winnerBox.classList.remove('hidden')
        winnerBoxText.textContent = 'Computer Wins'
    }
}

function reset(){
    resultsArea.textContent = ''
    playerScore.textContent = 0
    computerScore.textContent = 0
    winnerBox.classList.add('hidden')
}

buttonsArea.addEventListener('click', buttonGame)
resetBtn.addEventListener('click', reset)
