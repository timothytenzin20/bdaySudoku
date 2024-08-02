import React, { useState, useCallback } from 'react';
import SudokuBoard from './components/gameBoard';
import Popup from './components/popup.jsx';
import GiftButton from './components/GiftButton.jsx'; 

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [showGiftButton, setShowGiftButton] = useState(false);
  const [incorrectCellsCount, setIncorrectCellsCount] = useState(0);

  const handleCountChange = useCallback((remainingCount, incorrectCount) => {
    // Show the GiftButton if there are empty cells and no incorrect cells
    setShowGiftButton(remainingCount < 20 && incorrectCount === 0);
    setIncorrectCellsCount(incorrectCount);
  }, []);

  const handlePopupClose = () => {
    setButtonPopup(false); // Close the Popup
    setShowGiftButton(false); // Hide the GiftButton
  };

  return (
    <div className='App'>
      <main>
        <SudokuBoard onCountChange={handleCountChange} />
        {showGiftButton && <GiftButton onGiftClick={() => setButtonPopup(true)} />}
        <Popup trigger={buttonPopup} setTrigger={handlePopupClose}>
          <h3>YOOOOOOO</h3>
          <p> balls ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballs balls ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs ballsballsballs  ballsballs </p>
        </Popup>
      </main>
    </div>
  );
}

export default App;
