import { Util } from "./Util.js";
import React from 'react'

// Helper function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function isValid(board, row, col, num) {
    for (let x = 0; x < 9; x++) {
        if (board[row][x] === num || board[x][col] === num || 
            board[3 * Math.floor(row / 3) + Math.floor(x / 3)][3 * Math.floor(col / 3) + x % 3] === num) {
            return false;
        }
    }
    return true;
}

function solveSudoku(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                let numbers = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]); // Shuffle numbers before trying
                for (let num of numbers) {
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num;
                        if (solveSudoku(board)) {
                            return true;
                        }
                        board[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function generateSudoku() {
    let board = Array.from({ length: 9 }, () => Array(9).fill(0));
    if (solveSudoku(board)) {
        return board;
    } else {
        throw new Error("Failed to generate a valid Sudoku board");
    }
}

function removeNumbers(board, count) {
    // Create a deep copy of the board
    let clone = board.map(row => row.slice());
    let removed = 0;
    
    while (removed < count) {
        let row = Math.floor(Math.random() * 9);
        let col = Math.floor(Math.random() * 9);
        if (clone[row][col] !== 0) {
            clone[row][col] = 0;
            removed++;
        }
    }
    return clone;
}

let completeBoard = generateSudoku();
console.log("Complete Board:");
Util.print2DArray(completeBoard);

let sudokuWithMissingNumbers = removeNumbers(completeBoard, 20);
console.log("Sudoku with Missing Numbers:");
Util.print2DArray(sudokuWithMissingNumbers);

console.log("Complete Board (After Removal):");
Util.print2DArray(completeBoard);

export default sudokuWithMissingNumbers;

