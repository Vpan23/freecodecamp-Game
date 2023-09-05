const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("your-choice");
const result = document.getElementById("result");
const possibleChoice = document.querySelectorAll(".button");
const confirmButton = document.getElementById("Confirm");
let userChoice;
let computerChoice;
let computerRandom;
const resultMsg = document.querySelector(".result ");

possibleChoice.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
  })
);

// When you click the Confirm Button will do the next function.
confirmButton.addEventListener("click", function () {
  computerChoice = Math.floor(Math.random() * 3) + 1;

  if (
    !(
      userChoice === "Rock" ||
      userChoice === "Paper" ||
      userChoice === "Scissor"
    )
  ) {
    resultMsg.classList.toggle("show");

    setTimeout(() => {
        resultMsg.classList.remove("show");
        // showResult.style.display = "none";
    }, 1500);

  } else {
    resultMsg.style.display = "flex";
    switch (computerChoice) {
      case 1:
        computerChoice = "Rock";
        break;
      case 2:
        computerChoice = "Paper";
        break;
      case 3:
        computerChoice = "Scissor";
        break;
    }
    
    
    // Carga para elementos de la eleccion de la Computador
    computerRandom = Math.floor(Math.random() * 3) + 1;
    for(let i=0; i<computerRandom; i++) {
        console.log(i);
    }
    
    computerChoiceDisplay.innerHTML = computerChoice;

    if (userChoice === computerChoice) {
      result.innerHTML = "It's a Draw!";
    }
    if (userChoice === "Rock" && computerChoice === "Paper") {
      result.innerHTML = "You Lose!";
    }
    if (userChoice === "Rock" && computerChoice === "Scissor") {
      result.innerHTML = "You Win!";
    }
    if (userChoice === "Paper" && computerChoice === "Rock") {
      result.innerHTML = "You Win!";
    }
    if (userChoice === "Paper" && computerChoice === "Scissor") {
      result.innerHTML = "You Lose!";
    }
    if (userChoice === "Paper" && computerChoice === "Rock") {
      result.innerHTML = "You Win!";
    }
    if (userChoice === "Paper" && computerChoice === "Scissor") {
      result.innerHTML = "You Lose!";
    }
    // cierre de la ventana de Resultado.
    setTimeout(() => {
        resultMsg.style.display = "none";
    }, 1500);
  }
});
