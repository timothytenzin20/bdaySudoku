import React, { useState, useCallback } from 'react';
import SudokuBoard from './components/gameBoard';
import Popup from './components/popup';
import GiftButton from './components/GiftButton';
import { messages } from '../private/messages'; // Import the messages

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [showGiftButton, setShowGiftButton] = useState(false);
  const [incorrectCellsCount, setIncorrectCellsCount] = useState(0);
  const [adjective, setAdjective] = useState('');
  const [message, setMessage] = useState('');
  const [images, setImages] = useState([]);

  const handleCountChange = useCallback((remainingCount, incorrectCount) => {
    if (remainingCount !== null && remainingCount !== undefined) {
      const result = messages.handleCount(remainingCount);
      setAdjective(result.adjective);
      setMessage(result.message);
      setImages(result.images || []);
    } else {
      setAdjective("Error");
      setMessage("Something went wrong");
      setImages([]);
    }

    setShowGiftButton(remainingCount < 20 && incorrectCount === 0);
    setIncorrectCellsCount(incorrectCount);
  }, []);

  const handlePopupClose = () => {
    setButtonPopup(false);
    setShowGiftButton(false);
  };

  return (
    <div className='App'>
      <main>
        <SudokuBoard onCountChange={handleCountChange} />
        {showGiftButton && <GiftButton onGiftClick={() => setButtonPopup(true)} />}
        <Popup trigger={buttonPopup} setTrigger={handlePopupClose}>
          <h3>{adjective}</h3>
          <p>{message}</p>
          <div className="image-gallery">
            {images.map((img, index) => (
              <img key={index} src={img} alt={`Image ${index}`} className="max-w-full h-auto mb-4" />
            ))}
          </div>
        </Popup>
      </main>
    </div>
  );
}

export default App;
