// SudokuBoard.jsx
import React from 'react';
import sudokuWithMissingNumbers from './sudoku.js';

function SudokuBoard() {
    return (
        <div>
            {sudokuWithMissingNumbers.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex' }}>
                    {row.map((cell, cellIndex) => (
                        <div
                            key={cellIndex}
                            style={{
                                width: 30,
                                height: 30,
                                border: '1px solid black',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {cell === 0 ? '' : cell}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default SudokuBoard;
