const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('your-choice');
const result = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');
let userChoice
let computerChoice;

// const rock = document.getElementById('rock');
// const paper = document.getElementById('paper');
// const scissor = document.getElementById('scissor');


possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    computerChoice = Math.floor(Math.random() * 3) + 1;

    switch(computerChoice) {
        case 1: computerChoice = 'rock';
        break;
        case 2: computerChoice = 'paper';
        break;
        case 3: computerChoice = 'scissor';
        break;
    }
    computerChoiceDisplay.innerHTML = computerChoice;

    if (userChoice === computerChoice){
        result.innerHTML = "It's a Draw";
    }
    if (userChoice === 'rock' && computerChoice === 'paper'){
        result.innerHTML = "You Lose!";
    }
    if (userChoice === 'rock' && computerChoice === 'scissor'){
        result.innerHTML = "You Win!";
    } 
     if (userChoice === 'paper' && computerChoice === 'rock'){
        result.innerHTML = "You Win!";
    } 
     if (userChoice === 'paper' && computerChoice === 'scissor'){
        result.innerHTML = "You Lose!";
    } 
     if (userChoice === 'paper' && computerChoice === 'rock'){
        result.innerHTML = "You Win!";
    } 
     if (userChoice === 'paper' && computerChoice === 'scissor'){
        result.innerHTML = "You Lose!";
    }
}))
