// logic.test.js
// 🔹 Unit tests for the game logic

import { checkWin, isDraw } from "./logic.js";

test("should detect a win", () => {
  const board = ["X", "X", "X", "", "", "", "", "", ""];
  expect(checkWin(board, "X")).toBe(true);
});

test("should detect no win", () => {
  const board = ["X", "O", "X", "", "", "", "", "", ""];
  expect(checkWin(board, "O")).toBe(false);
});

test("should detect a draw", () => {
  const board = ["X", "O", "X", "X", "O", "O", "O", "X", "X"];
  expect(isDraw(board)).toBe(true);
});

test("should detect not a draw", () => {
  const board = ["X", "O", "X", "", "", "", "", "", ""];
  expect(isDraw(board)).toBe(false);
});