// logic.js
// 🔹 Contains only the game logic, no DOM manipulation

// All possible winning combinations (rows, columns, diagonals)
export const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

/**
 * Check if the given player has won
 * @param {Array} board - Array representing the board state
 * @param {string} player - "X" or "O"
 * @returns {boolean} - True if player has won
 */
export function checkWin(board, player) {
    return winningCombinations.some(combination =>
    combination.every(index => board[index] === player)
    );
}

/**
 * Check if the game is a draw
 * @param {Array} board - Array representing the board state
 * @returns {boolean} - True if the board is full and no winner
 */
export function isDraw(board) {
    return board.every(cell => cell === "X" || cell === "O");
}