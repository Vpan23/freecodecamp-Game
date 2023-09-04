const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('your-choice');
const result = document.getElementById('result');
const possibleChoice = document.querySelectorAll('.button');
const confirmButton = document.getElementById('confirm');
let userChoice
let computerChoice;

// const Rock = document.getElementById('Rock');
// const Paper = document.getElementById('Paper');
// const Scissor = document.getElementById('Scissor');


possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    computerChoice = Math.floor(Math.random() * 3) + 1;

    switch(computerChoice) {
        case 1: computerChoice = 'Rock';
        break;
        case 2: computerChoice = 'Paper';
        break;
        case 3: computerChoice = 'Scissor';
        break;
    }
    computerChoiceDisplay.innerHTML = computerChoice;

    if (userChoice === computerChoice){
        result.innerHTML = "It's a Draw";
    }
    if (userChoice === 'Rock' && computerChoice === 'Paper'){
        result.innerHTML = "You Lose!";
    }
    if (userChoice === 'Rock' && computerChoice === 'Scissor'){
        result.innerHTML = "You Win!";
    } 
     if (userChoice === 'Paper' && computerChoice === 'Rock'){
        result.innerHTML = "You Win!";
    } 
     if (userChoice === 'Paper' && computerChoice === 'Scissor'){
        result.innerHTML = "You Lose!";
    } 
     if (userChoice === 'Paper' && computerChoice === 'Rock'){
        result.innerHTML = "You Win!";
    } 
     if (userChoice === 'Paper' && computerChoice === 'Scissor'){
        result.innerHTML = "You Lose!";
    }
}))
confirmButton.addEventListener('click', function() {
    console.log('hola')
})