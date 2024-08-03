import React, { useState } from 'react';

function Counter({ count }) {
    // const [clickCount, setClickCount] = useState(0);

    // in case i need idk
    // const handleGiftClick = () => {
    //     setClickCount(clickCount + 1); 
    // };

    // ngl idk if this file is even needed? if im just passing counter count only for it to be an output, 
    // this literally is just a component to print
    return (
        <div style={{ margin: '0px', fontSize: '18px' }}>
            <strong>Numbers Remaining: {count}</strong>
        </div>
    );
}

export default Counter;
