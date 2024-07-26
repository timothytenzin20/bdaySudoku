import React, { useState } from 'react';
import { sudokuWithMissingNumbers, completeBoard } from './sudoku.js';
import { isValid } from './sudoku.js';
import Counter from './counter.jsx'; // Import the Counter component
import './gameBoard.css';
import popup from './popup.js';

// yea idk wtf chat cooked here but chat cooked
function SudokuBoard() {
    const [board, setBoard] = useState(sudokuWithMissingNumbers);
    const [correctBoard, setCorrectBoard] = useState(Array.from({ length: 9 }, () => Array(9).fill(null)));
    const [incorrectCells, setIncorrectCells] = useState(Array.from({ length: 9 }, () => Array(9).fill(false)));

    const handleChange = (rowIndex, cellIndex, event) => {
        const inputValue = event.target.value;
        const value = Number(inputValue);

        if (inputValue === '') {
            // Reset to 0 if input is cleared
            const updatedBoard = board.map((row, rIdx) =>
                row.map((cell, cIdx) =>
                    rIdx === rowIndex && cIdx === cellIndex ? 0 : cell
                )
            );

            // Remove from correctBoard
            const updatedCorrectBoard = correctBoard.map((row, rIdx) =>
                row.map((cell, cIdx) =>
                    rIdx === rowIndex && cIdx === cellIndex ? null : cell
                )
            );

            // Reset incorrect cell flag
            const updatedIncorrectCells = incorrectCells.map((row, rIdx) =>
                row.map((cell, cIdx) =>
                    rIdx === rowIndex && cIdx === cellIndex ? false : cell
                )
            );

            setBoard(updatedBoard);
            setCorrectBoard(updatedCorrectBoard);
            setIncorrectCells(updatedIncorrectCells);
        } 
        else if (value >= 1 && value <= 9) {
            const updatedBoard = board.map((row, rIdx) =>
                row.map((cell, cIdx) =>
                    rIdx === rowIndex && cIdx === cellIndex ? value : cell
                )
            );

            // Check if input matches correct value
            const correctValue = completeBoard[rowIndex][cellIndex];
            const isCorrect = value === correctValue;

            // Update correctBoard only if the entered value is correct
            const updatedCorrectBoard = correctBoard.map((row, rIdx) =>
                row.map((cell, cIdx) =>
                    rIdx === rowIndex && cIdx === cellIndex ? (isCorrect ? value : cell) : cell
                )
            );
            setCorrectBoard(updatedCorrectBoard);

            // Update incorrect cell flag
            const updatedIncorrectCells = incorrectCells.map((row, rIdx) =>
                row.map((cell, cIdx) =>
                    rIdx === rowIndex && cIdx === cellIndex ? !isCorrect : cell
                )
            );
            setIncorrectCells(updatedIncorrectCells);

            setBoard(updatedBoard);
        } else {
            console.log('Please enter a number between 1 and 9');
        }
    };

    // Function to count remaining cells to be filled
    const countRemainingCells = () => {
        let count = 0;
        board.forEach(row => {
            row.forEach(cell => {
                if (cell === 0) {
                    count++;
                }
            });
        });
        return count;
    };

    return (
        <div>
            <Counter count={countRemainingCells()} /> {/* Display the counter */}
            {board.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex' }}>
                    {row.map((cell, cellIndex) => {
                        const isIncorrect = incorrectCells[rowIndex][cellIndex];

                        return (
                            <input
                                key={cellIndex}
                                type="number"
                                min="1"
                                max="9"
                                value={cell === 0 ? '' : cell}
                                onChange={(e) => handleChange(rowIndex, cellIndex, e)}
                                disabled={correctBoard[rowIndex][cellIndex] !== null}
                                style={{
                                    width: 30,
                                    height: 30,
                                    border: '1px solid black',
                                    textAlign: 'center',
                                    fontSize: '16px',
                                    backgroundColor: cell === 0 ? 'white' : 'lightgrey',
                                    color: isIncorrect ? 'red' : 'black' // Style for incorrect numbers

                                }}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

export default SudokuBoard;