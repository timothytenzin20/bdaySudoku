// import { Util } from "./Util.js";

// Helper function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function solveSudoku(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                let numbers = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]); // Shuffle numbers before trying
                for (let num of numbers) {
                    // Check if num being entered into row/column is valid
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num;
                        // Recursion to fill subgrids
                        if (solveSudoku(board)) {
                            return true;
                        }
                        board[row][col] = 0;
                    }
                }
                // Backtracking to see if config fails
                return false;
            }
        }
    }
    return true;
}

export function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
        // Check row, column, and sub 3x3 grids if game rules broken (number already contained)
        if (board[row][i] === num || board[i][col] === num || 
            board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + i % 3] === num) {
            return false;
        }
    }
    return true;
}

function generateSudoku() {
    // 9 elements in the outer array, creates a new array of length 9 where all elements are initialized to 0.
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
    
    // Until max reached, remove a random array entry, checking it hasn't already been removed
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

export const completeBoard = generateSudoku();
export const sudokuWithMissingNumbers = removeNumbers(completeBoard, 20);
