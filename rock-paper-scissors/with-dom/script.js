// UI
const resetButton = document.getElementById('reset-btn');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const result = document.getElementById('result');
const playerInput = document.querySelectorAll('.choice-item');
const overlay = document.getElementById('overlay');
const finalResult = document.getElementById('final-result');
const playAgain = document.getElementById('play-again');

// init value
let playerScore = 0;
let computerScore = 0;

function gameOn(e) {
  const playerChoice = e.target.value;
  const computerChoice = getComputerChoice();

  changePlayerChoiceDisplay(playerChoice);
  doRandomizeComputerChoice();
  const gameResult = getResult(playerChoice, computerChoice);
  setTimeout(() => {
    changeComputerChoiceDisplay(computerChoice);
    result.textContent = gameResult;
    if (gameResult === "You Win!"){
      playerScore++;
    }
    if (gameResult === "You Lose!"){
      computerScore++;
    }
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    if (isGameOver()){
      setModal();
    }
  }, 1000);
}

function changePlayerChoiceDisplay(choice){
  let playerChoice = "";
  if (choice === "rock"){
    playerChoice = "✊";
  }
  if (choice === "paper") {
    playerChoice = "✋";
  }
  if (choice === "scissors"){
    playerChoice = "✌";
  }
  playerChoiceDisplay.innerText = playerChoice;
}

function getComputerChoice(){
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }

  return computerChoice;
}

function getResult(player, computer){
  return player === computer
  ? "Tie Game!"
  : player === "rock" && computer === "paper"
  ? "You Lose!"
  : player === "rock" && computer === "scissors"
  ? "You Win!"
  : player === "paper" && computer === "scissors"
  ? "You Lose!"
  : player === "paper" && computer === "rock"
  ? "You Win!"
  : player === "scissors" && computer === "rock"
  ? "You Lose!"
  : "You Win!";
}

function doRandomizeComputerChoice(){
  let i = 0;
  const arr = ["✊", "✋", "✌"];
  const start = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - start >= 1000){
      clearInterval;
      return;
    }
    computerChoiceDisplay.textContent = arr[i++];
    if (i === arr.length) i = 0;
  }, 70);
}

function changeComputerChoiceDisplay(choice){
  if (choice === "rock") choice = "✊";
  if (choice === "paper") choice = "✋";
  if (choice === "scissors") choice = "✌";
  computerChoiceDisplay.textContent = choice;
  return;
}

function isGameOver(){
  return playerScore === 5 || computerScore === 5;
}

function setModal(){
  overlay.classList.remove('deactive');
  if (playerScore === 5){
    finalResult.textContent = "You Win!";
  }
  finalResult.textContent = "You Lose!";
}

function resetTheGame(){
  overlay.classList.add('deactive');
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  playerChoiceDisplay.textContent = "❔";
  computerChoiceDisplay.textContent = "❔";
  result.textContent = "";
}

playerInput.forEach(input => {
  input.addEventListener('click', gameOn);
})

resetButton.addEventListener('click', resetTheGame);
playAgain.addEventListener('click', resetTheGame);
