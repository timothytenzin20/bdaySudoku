import React, { useState } from 'react';

function Counter({ count }) {
    const [clickCount, setClickCount] = useState(0);

    const handleGiftClick = () => {
        setClickCount(clickCount + 1); // in case i need idk
    };

    return (
        <div style={{ margin: '0px', fontSize: '18px' }}>
            <strong>Numbers Remaining: {count}</strong>
        </div>
    );
}

export default Counter;
