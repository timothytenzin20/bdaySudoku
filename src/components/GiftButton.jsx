import React from 'react';
import brat from '../../public/brat.png'; 
import './GiftButton.css'; 

function GiftButton({ onGiftClick }) {
  return (
    <button
      onClick={onGiftClick}
      className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-transparent border-4 border-black flex items-center justify-center transition-transform duration-300 hover:scale-110 animate-gift spin-on-hover"
      style={{
        boxShadow: '0 0 15px rgba(255, 223, 0, 0.8)',
        padding: 0, // Remove padding
      }}
    >
      <img
        src={brat} 
        alt="brat"
        className="w-full h-full object-cover" // Ensures the image covers the button area
      />
    </button>
  );
}

export default GiftButton;
