import React, { useState } from 'react';
import SudokuBoard from './components/gameBoard';
import Popup from './components/popup.jsx';
import GiftButton from './components/GiftButton.jsx';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  
  return (
    <div className='App'>
      <main>
        <h1> Stardoku </h1>
        <SudokuBoard />
        <GiftButton onGiftClick={() => setButtonPopup(true)} />
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>yooo</h3>
          <p> balls </p>
        </Popup>
      </main>
    </div>
  )
}

export default App;
