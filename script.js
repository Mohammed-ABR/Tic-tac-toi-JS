// script.js
// 🔹 Handles DOM interactions, imports and uses game logic

import { checkWin, isDraw, winningCombinations } from "./logic.js";

// DOM elements
const container = document.getElementById("container");
const gameResult = document.getElementById("gameResult");
const restart = document.getElementById("restart");

// Game state
let board = Array(9).fill(""); // Represents the 3x3 grid
let xTurn = true;              // Tracks whether it's X's turn
let boxes;                     // NodeList of all cells

// Start the game initially
startGame();
restart.addEventListener("click", () => startGame(true));

/**
 * Initializes or restarts the game
 * @param {boolean} isRestart - Indicates if this is a restart
 */
function startGame(isRestart = false) {
  container.innerHTML = ""; // Clear the board
  board = Array(9).fill("");
  xTurn = true;
  gameResult.innerText = "";
  container.style.pointerEvents = "auto";
  restart.classList.remove("show");

  // Create 9 cells dynamically
  for (let i = 0; i < 9; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("click", () => handleClick(i), { once: true });
    container.appendChild(box);
  }

  boxes = document.querySelectorAll(".box");
}

/**
 * Handles a player's click on a cell
 * @param {number} index - Index of the clicked cell
 */
function handleClick(index) {
  const currentPlayer = xTurn ? "X" : "O";
  board[index] = currentPlayer;
  boxes[index].innerText = currentPlayer;
  xTurn = !xTurn;

  if (checkWin(board, currentPlayer)) {
    gameOver("win", currentPlayer);
    highlightWinner();
  } else if (isDraw(board)) {
    gameOver("draw");
  }
}

/**
 * Displays the game result and disables further moves
 * @param {string} result - "win" or "draw"
 * @param {string} player - The winning player
 */
function gameOver(result, player = "") {
    gameResult.innerText = result === "win" ? `${player} wins!` : "Game Draw!";
    container.style.pointerEvents = "none";
    restart.classList.add("show");
}

/**
 * Highlights the winning combination
 */
function highlightWinner() {
    winningCombinations.forEach(comb => {
    if (comb.every(i => board[i] === board[comb[0]] && board[i] !== "")) {
    comb.forEach(i => (boxes[i].style.backgroundColor = "lightblue"));
    }
    });
}