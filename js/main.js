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