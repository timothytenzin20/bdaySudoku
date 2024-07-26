import React, { useState, useEffect } from 'react';

function Sudoku() {
    const [board, setBoard] = useState([]);

    useEffect(() => {
        const completeBoard = generateSudoku();
        const sudokuWithMissingNumbers = removeNumbers(completeBoard, 20);
        setBoard(sudokuWithMissingNumbers);
    }, []);

    return (
        <div>
            {board.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex' }}>
                    {row.map((cell, colIndex) => (
                        <input
                            key={colIndex}
                            type="text"
                            value={cell === 0 ? '' : cell}
                            readOnly
                            style={{ width: '2em', height: '2em', textAlign: 'center' }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Sudoku;
