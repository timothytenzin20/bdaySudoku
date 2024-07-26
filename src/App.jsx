import React, { useState } from 'react';
import SudokuBoard from './components/gameBoard';
import popup from './components/popup.jsx';

function App() {
  return (
    <div className='App'>
      <main>
        <h1> Stardoku </h1>
        <SudokuBoard />
        <popup trigger = {false}> 
          <h3>yooo</h3>
        </popup>
      </main>
    </div>
  )
}

export default App

