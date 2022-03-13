// Create variables for the game state
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// Create variables to store references to the necessary DOM nodes
const message = document.getElementById("message");

const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");

const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");

const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

function showDisplayButton() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "block";
}

function reset() {
  player1Score = 0;
  player2Score = 0;
  player1Turn = true;
  rollBtn.style.display = "block";
  resetBtn.style.display = "none";

  player1Scoreboard.textContent = player1Score;
  player2Scoreboard.textContent = player2Score;
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  message.textContent = "Player 1 Turn";

  player1Dice.classList.remove("active");
  player2Dice.classList.remove("active");

  player1Dice.classList.add("active");
}

rollBtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  if (player1Turn) {
    player1Dice.textContent = randomNumber;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2 Turn";
    player1Score += randomNumber;
    player1Scoreboard.textContent = player1Score;
  } else {
    player2Dice.textContent = randomNumber;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = "Player 1 Turn";
    player2Score += randomNumber;
    player2Scoreboard.textContent = player2Score;
  }

  if (player1Score >= 20) {
    message.textContent = "Player 1 has won! 🥳";
    showDisplayButton();
  } else if (player2Score >= 20) {
    message.textContent = "Player 2 has won! 🎉";
    showDisplayButton();
  }

  player1Turn = !player1Turn;
});

resetBtn.addEventListener("click", reset);
