import React from 'react';

function Counter({ count }) {
    return (
        <div style={{ margin: '0px', fontSize: '18px' }}>
            <strong>Numbers Remaining: {count}</strong>
        </div>
    );
}

export default Counter;
