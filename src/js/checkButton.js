import React, { useEffect, useState } from 'react';
import '../css/checkButton.css';

function Button({ code, usedNumbers, reset }) {
    const [isOpen, setIsOpen] = useState(false);
    const [inputNumber, setInputNumber] = useState('');
    const [checkedNumbers, setCheckedNumbers] = useState([]);
    const [playerName, setPlayerName] = useState('');
    const [winner, setWinner] = useState('');

    const toggleDialog = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setInputNumber('');
            setCheckedNumbers([]);
            setPlayerName('');
        }
    };

    const handleCheck = () => {
        if (usedNumbers.includes(parseInt(inputNumber))) {
            setCheckedNumbers([...checkedNumbers, inputNumber]);
        } else {
            setCheckedNumbers(['Invalid']);
        }
        setInputNumber('');
    };

    const handleAccept = () => {
        setWinner(playerName);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleCheck();
        }
    };
    const handleaccptPress = (e) => {
        if(e.key === 'Enter'){
            handleAccept();
        }
    }

    useEffect(() => {
        setWinner(null);
        setIsOpen(false);
    }, [reset]);

    return (
        <div>
            <a onClick={toggleDialog} style={{ display: !isOpen ? 'block' : 'none' }} className="checkbutton">{code}</a>
            <div className='checkdialog' style={{ display: isOpen ? 'block' : 'none' }}>
                {winner ? (
                    <div>{code} was won by <b>{winner}</b></div>
                ) : (
                    <>
                        <div className='line0'>
                            {code}
                        </div>
                        <div className='line1'>
                            <input
                                type="text"
                                value={inputNumber}
                                onChange={(e) => setInputNumber(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder='Number'
                            />
                            <a onClick={handleCheck} className="buttonincheck">Check</a>
                        </div>
                        <div className='line2'>
                            {checkedNumbers.length > 0 && (
                                <span style={{ color: checkedNumbers.includes('Invalid') ? 'red' : 'green' }}>
                                    {checkedNumbers.join(', ')}
                                </span>
                            )}
                        </div>
                        <div className='line3'>
                            <input
                                type="text"
                                value={playerName}
                                onChange={(e) => setPlayerName(e.target.value)}
                                onKeyPress={handleaccptPress}
                                placeholder="Player Name"
                            />
                        </div>
                        <div className='line4'>
                            <a onClick={toggleDialog} className="cancel">Cancel</a>
                            <a
                                onClick={handleAccept}
                                className="buttonincheck"
                                style={{ pointerEvents: checkedNumbers.includes('Invalid') ? 'none' : 'auto' }}
                            >
                                Accept
                            </a>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Button;
