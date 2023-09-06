const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("your-choice");
const result = document.getElementById("result");
const possibleChoice = document.querySelectorAll(".button");
const confirmButton = document.getElementById("Confirm");
let userChoice;
let computerChoice;
let computerRandom;
const resultMsg = document.querySelector(".result ");
const imgShow = document.querySelector(".img__contain ");
const img1 = document.getElementById("img__1");
const img2 = document.getElementById("img__2");
const img3 = document.getElementById("img__3");
const userImg1 = document.getElementById("userImg__1");
const userImg2 = document.getElementById("userImg__2");
const userImg3 = document.getElementById("userImg__3");

possibleChoice.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {

    // Reset de las imagenes
    userImg1.style.display = "none";
    userImg2.style.display = "none";
    userImg3.style.display = "none";

    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    switch (userChoice) {
      case "Rock":
        if (userChoice === "Rock") {
          userImg1.style.display = "flex";
        }
        break;
      case "Paper":
        if (userChoice === "Paper") {
          userImg2.style.display = "flex";
        }
        break;
      case "Scissor":
        if (userChoice === "Scissor") {
          userImg3.style.display = "flex";
        }
        break;
    }
  })
);

// When you click the Confirm Button will do the next function.
confirmButton.addEventListener("click", function () {
  computerChoice = Math.floor(Math.random() * 3) + 1;

  img1.style.display = "none";
  img2.style.display = "none";
  img3.style.display = "none";

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
    }, 1000);
  } else {
    resultMsg.style.display = "flex";
    switch (computerChoice) {
      case 1:
        computerChoice = "Rock";
        if (computerChoice === "Rock") {
          img1.style.display = "flex";
        }
        break;
      case 2:
        computerChoice = "Paper";
        if (computerChoice === "Paper") {
          img2.style.display = "flex";
        }
        break;
      case 3:
        computerChoice = "Scissor";
        if (computerChoice === "Scissor") {
          img3.style.display = "flex";
        }
        break;
    }
    // se añade la funcion de mostrar la imagen.
    //  imgShow.style.display = 'flex';

    // Carga para elementos de la eleccion de la Computador
    // computerRandom = Math.floor(Math.random() * 3) + 1;
    // for(let i=0; i<computerRandom; i++) {
    //     console.log(i);
    // }

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

      // reestar de las imagenes de fondo.
      img1.style.display = "none";
      img2.style.display = "none";
      img3.style.display = "none";
      userImg1.style.display = "none";
      userImg2.style.display = "none";
      userImg3.style.display = "none";
    }, 1000);
  }
});
