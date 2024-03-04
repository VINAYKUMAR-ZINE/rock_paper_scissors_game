const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const rulesNot = document.getElementById("cross");
const rulesBody = document.querySelector(".rules-main");
const dhashboard = document.querySelector(".dhashboard");
const urScore = document.getElementById("urScore");
const cpScore = document.getElementById("cpScore");
document.getElementById("stop");
document.getElementById("ptor");
 document.getElementById("rtos");


let win = parseInt(localStorage.getItem('wins')) || 0; 
let loose = parseInt(localStorage.getItem('losses')) || 0; 
let draw = 100;
let clickFlag = 0;
let playerClick = 0;
let rulesFlag = 0;


// Update scores when the page loads
updateScores(); 



const clickfunc = (clickedId) => {
  paper.style.visibility = "hidden";
  rock.style.visibility = "hidden";
  scissors.style.visibility = "hidden";
  dhashboard.style.visibility = "hidden";
  document.getElementById("stop").style.visibility = "hidden";
  document.getElementById("ptor").style.visibility = "hidden";
  document.getElementById("rtos").style.visibility = "hidden";
  document.getElementById("replay").style.visibility = "visible";

  document.getElementById(clickedId).style.visibility = "visible";

  clickFlag = 1;
  
  if (clickedId === "scissors") {
    playerClick = 3;
  } else if (clickedId === "paper") {
    playerClick = 2;
  } else {
    playerClick = 1;
  }
  
  const compChoice = compClick();
  const result = rulesFunc(playerClick, compChoice);
  if(win===50 || loose===50)localStorage.clear();
  if (result === true) {
    win++;
    localStorage.setItem('wins', win); // Update wins in local storage

    urScore.textContent = "YOUR\nSCORE\n"+"\n" + win;
    document.getElementById("big").textContent = "YOU WIN";
    // document.getElementById("small").style.visibility = "visible";

    console.log("You win!");
  } else if (result === null) {
    // draw++;
    document.getElementById("big").textContent = "OOPS IT'S DRAW!..";
    // document.getElementById("small").style.visibility = "hidden";
    // console.log("It's a draw!");
  } else {
    loose++;
    localStorage.setItem('losses', loose); // Update losses in local storage
    cpScore.textContent = "Compputer\nScodre\n" + loose;
    document.getElementById("big").textContent = "YOU LOOSE";
    // document.getElementById("small").style.visibility = "visible";
    console.log("You lose!");
  }
};

const hideRules = () => {
  if (rulesFlag === 0) {
    rulesNot.style.visibility = "hidden";
    rulesBody.style.visibility = "hidden";
    rulesFlag = 1;
    console.log(rulesFlag);
  }
};

const showRules = () => {
  if (rulesFlag === 1) {
    rulesNot.style.visibility = "visible";
    rulesBody.style.visibility = "visible";
    rulesFlag = 0;
    console.log(rulesFlag);
  }
};


//Generating 
const compClick = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  return randomNumber;
};


//set rules for the game
const rulesFunc = (playerChoice, compChoice) => {
  if (playerChoice === 1 && compChoice === 3) {
    return true;
  } else if (playerChoice === 2 && compChoice === 1) {
    return true;
  } else if (playerChoice === 3 && compChoice === 2) {
    return true;
  } else if (playerChoice === compChoice) {
    return null;
  } else {
    return false;
  }
};

//showing the dashboard again
const playAgain = () => {
  dhashboard.style.visibility = "visible";
  paper.style.visibility = "visible";
  rock.style.visibility = "visible";
  scissors.style.visibility = "visible";
  document.getElementById("stop").style.visibility = "visible";
  document.getElementById("ptor").style.visibility = "visible";
  document.getElementById("rtos").style.visibility = "visible";
  document.getElementById("replay").style.visibility = "hidden"
}


function updateScores() {
  if(win>loose && win===50) {
    console.log("Hurray you win");
  }
  else{
    console.log("Ohh noo you loose!");
  }
  urScore.textContent = "YOUR\nSCORE\n" + win;
  cpScore.textContent = "Compputer\nScodre\n" + loose;
}
