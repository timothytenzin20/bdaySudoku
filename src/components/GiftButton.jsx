import React from 'react';

function GiftButton({ onGiftClick }) {
    return (
        <button onClick={onGiftClick} style={{ margin: '10px', padding: '10px', fontSize: '16px' }}>
            🎁 Click me!
        </button>
    );
}

export default GiftButton;
