import React, { useState, useCallback } from 'react';
import SudokuBoard from './components/gameBoard';
import Popup from './components/popup.jsx';
import GiftButton from './components/GiftButton.jsx';
import { messages } from '../private/messages.js'; // Import the messages

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [showGiftButton, setShowGiftButton] = useState(false);
  const [incorrectCellsCount, setIncorrectCellsCount] = useState(0);
  const [adjective, setAdjective] = useState('');
  const [message, setMessage] = useState('');

  const handleCountChange = useCallback((remainingCount, incorrectCount) => {
    if (remainingCount !== null && remainingCount !== undefined) {
      const result = messages.handleCount(remainingCount);
      setAdjective(result.adjective);
      setMessage(result.message);
    } else {
      setAdjective("Error");
      setMessage("Something went wrong");
    }

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
          <h3>{adjective}</h3>
          <p>{message}</p>
        </Popup>
      </main>
    </div>
  );
}

export default App;
