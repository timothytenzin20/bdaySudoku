import React, { useState } from 'react';
import SudokuBoard from './components/gameBoard';

function App() {
  return (
    <div className='App'>
      <main>
        <h1> Stardoku </h1>
        <SudokuBoard />
      </main>
    </div>
  )
}

export default App

