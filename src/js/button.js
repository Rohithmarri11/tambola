import React from 'react';
import '../css/button.css';

function Button({ openWindow }) {
    return (
        <a className="bUtton" onClick={openWindow}>Start the Game</a>
    );
}

export default Button;
