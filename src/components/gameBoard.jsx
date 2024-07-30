import React, { useState, useEffect } from 'react';
import { sudokuWithMissingNumbers, completeBoard } from './sudoku.js';
import Counter from './counter.jsx';
import './gameBoard.css';

function SudokuBoard({ onCountChange }) {
  const [board, setBoard] = useState(sudokuWithMissingNumbers);
  const [correctBoard, setCorrectBoard] = useState(Array.from({ length: 9 }, () => Array(9).fill(null)));
  const [incorrectCells, setIncorrectCells] = useState(Array.from({ length: 9 }, () => Array(9).fill(false)));

  useEffect(() => {
    const remainingCells = countRemainingCells();
    const incorrectCount = countIncorrectCells();
    onCountChange(remainingCells, incorrectCount);
  }, [board, onCountChange]);

  const handleChange = (rowIndex, cellIndex, event) => {
    const inputValue = event.target.value;
    const value = Number(inputValue);

    if (inputValue === '') {
      const updatedBoard = board.map((row, rIdx) =>
        row.map((cell, cIdx) =>
          rIdx === rowIndex && cIdx === cellIndex ? 0 : cell
        )
      );
      const updatedCorrectBoard = correctBoard.map((row, rIdx) =>
        row.map((cell, cIdx) =>
          rIdx === rowIndex && cIdx === cellIndex ? null : cell
        )
      );
      const updatedIncorrectCells = incorrectCells.map((row, rIdx) =>
        row.map((cell, cIdx) =>
          rIdx === rowIndex && cIdx === cellIndex ? false : cell
        )
      );

      setBoard(updatedBoard);
      setCorrectBoard(updatedCorrectBoard);
      setIncorrectCells(updatedIncorrectCells);
    } else if (value >= 1 && value <= 9) {
      const correctValue = completeBoard[rowIndex][cellIndex];
      const isCorrect = value === correctValue;

      const updatedBoard = board.map((row, rIdx) =>
        row.map((cell, cIdx) =>
          rIdx === rowIndex && cIdx === cellIndex ? value : cell
        )
      );

      const updatedCorrectBoard = correctBoard.map((row, rIdx) =>
        row.map((cell, cIdx) =>
          rIdx === rowIndex && cIdx === cellIndex ? (isCorrect ? value : cell) : cell
        )
      );
      const updatedIncorrectCells = incorrectCells.map((row, rIdx) =>
        row.map((cell, cIdx) =>
          rIdx === rowIndex && cIdx === cellIndex ? !isCorrect : cell
        )
      );

      setBoard(updatedBoard);
      setCorrectBoard(updatedCorrectBoard);
      setIncorrectCells(updatedIncorrectCells);
    } else {
      console.log('Please enter a number between 1 and 9');
    }
  };

  // Count remaining cells based on whether they are correct
  const countRemainingCells = () => {
    let count = 0;
    board.forEach((row, rIdx) => {
      row.forEach((cell, cIdx) => {
        if (cell === 0 && correctBoard[rIdx][cIdx] === null) {
          count++;
        }
      });
    });
    return count;
  };

  // Count incorrect cells
  const countIncorrectCells = () => {
    let count = 0;
    incorrectCells.forEach(row => {
      row.forEach(cell => {
        if (cell) count++;
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
