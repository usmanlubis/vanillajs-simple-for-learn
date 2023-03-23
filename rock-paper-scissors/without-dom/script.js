function initGame(){
  confirm("Do you wanna play game?") ? playGame() : alert("Okay maybe next time, have a great day!")
}

function playGame(){
  let playAgain = true;
  while (playAgain){
    let playerChoice = prompt("Choose rock, paper, or scissors");
    if (typeof playerChoice !== "string"){
      abortGame();
      break;
    }
  
    playerChoice = formatChoice(playerChoice);
    if (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors'){
      invalidChoice();
      continue;
    }

    const computerChoice = getComputerChoice();
    getResult(playerChoice, computerChoice);

    playAgain = confirm("Do you want to play again?");
    if (playAgain){
      continue;
    }
    thanksForPlay()
  }


}

function validateChoice(choice){
  if (choice) {
    return choice;
  }
  return false;
}

function abortGame(){
  return alert("Maybe you change your mind")
}

function formatChoice(choice){
  choice = choice.trim().toLowerCase();
  return choice;
}

function invalidChoice(){
  return alert("You can only choose rock, paper, or scissors");
}

function getComputerChoice(){
  const arr = ["rock", "paper", "scissors"];
  const computerChoice = arr[Math.floor(Math.random() * arr.length)];
  return computerChoice;
}

function getResult(player, computer){
  return player === computer
  ? alert(`You choose ${player}\nComputer choose ${computer}\nThe result is DRAW!`)
  : player === "rock" && computer === "scissors"
  ? alert(`You choose ${player}\nComputer choose ${computer}\nThe result is YOU WIN!`)
  : player === "rock" && computer === "paper"
  ? alert(`You choose ${player}\nComputer choose ${computer}\nThe result is YOU LOSE!`)
  : player === "paper" && computer === "rock"
  ? alert(`You choose ${player}\nComputer choose ${computer}\nThe result is YOU WIN!`)
  : player === "paper" && computer === "scissors"
  ? alert(`You choose ${player}\nComputer choose ${computer}\nThe result is YOU LOSE!`)
  : player === "scissors" && computer === "paper"
  ? alert(`You choose ${player}\nComputer choose ${computer}\nThe result is YOU WIN!`)
  : alert(`You choose ${player}\nComputer choose ${computer}\nThe result is YOU LOSE!`);
}

function thanksForPlay(){
  return alert("Thanks for playing, see you next time!");
}

initGame()