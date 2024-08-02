import React from 'react';
import './popup.css';

function Popup({ trigger, setTrigger, children }) {
  return (
    trigger ? (
      <div className="popup fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex justify-center items-center">
        <div className="popup-inner bg-brat rounded-lg">
          <button 
            className="
            bg-lime-600
            hover:bg-lime-400
            text-black
            font-bold
            py-1
            px-2
            border-b-2
            border-lime-800
            hover:border-lime-600
            rounded-lg
            absolute
            top-2.5
            right-2.5
            text-sm
            "
            onClick={() => setTrigger(false)}
          >
            X
          </button>
          <div className="custom-scrollbar-container overflow-y-auto custom-scrollbar p-2 pr-4">
            {children}
          </div>
        </div>
      </div>
    ) : null
  );
}

export default Popup;
