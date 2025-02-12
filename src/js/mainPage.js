import React, { useState, useEffect } from 'react';
import '../css/mainPage.css'
import Button from './checkButton';

function MainPage({ checkedOptions, openWindow }) {
    const [usedNumbers, setUsedNumbers] = useState([]);
    const [currentNumber, setCurrentNumber] = useState(null);

    const coderef = { "ff" : "First Five", "fl" : "1st Line", "sl" : "2nd Line", "tl" : "3rd Line", "fh" : "1st Housie", "sh" : "2nd Housie", "th" : "3rd Housie" };
    const createNumberMatrix = () => {
        const matrix = [];
        let num = 1;
        
        for (let i = 0; i < 9; i++) {
            const row = [];
            for (let j = 0; j < 10; j++) {
                if (num <= 90) {
                    row.push(num);
                    num++;
                }
            }
            matrix.push(row);
        }
        return matrix;
    };

    const getRandomNumber = () => {
        if (usedNumbers.length >= 90) {
            alert("All numbers have been used!");
            return;
        }

        let randomNum;
        do {
            randomNum = Math.floor(Math.random() * 90) + 1;
        } while (usedNumbers.includes(randomNum));

        // Add new number at beginning of array
        setUsedNumbers([randomNum, ...usedNumbers]);
        setCurrentNumber(randomNum);
        if(isOn){
        speakNumber(randomNum);
        }
    };

    const speakNumber = (number) => {
        const synth = window.speechSynthesis;
        const utterThis = new SpeechSynthesisUtterance();

        if (number < 10) {
            utterThis.text = `only ${number.toString()}`;
        } else {
            const digits = number.toString().split('');
            utterThis.text = `${digits[0]} ${digits[1]}, ${number}`;
        }

        synth.speak(utterThis);
    };

    const resetData = () => {
        setUsedNumbers([]);
        setCurrentNumber(null);
        setReset(!reset);
        openWindow();
    };

    const [isOn, setIsOn] = useState(true);
    
        const toggleDialog = () => {
            setIsOn(!isOn);
        }

    const handleEnterPress = (e) => {
        const appMainElement = document.querySelector('.appmain');
        if (e.key === 'Enter' && e.target.tagName !== 'INPUT' && appMainElement && appMainElement.style.display === "block") {
            getRandomNumber();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleEnterPress);
        return () => {
            window.removeEventListener('keydown', handleEnterPress);
        };
    }, [usedNumbers]);
    const [reset, setReset] = useState(false);

    const numberMatrix = createNumberMatrix();
    return (
        <div className='bigBox'>
            <div className='leftBox'>
                <div className='controls'>
                    <div className='block1'>
                    <h3>Previous Numbers:</h3>
                        <div className="prev-numbers">
                            {usedNumbers.slice(0, 5).map((num) => (
                                <span className="prev-number">{num}</span>
                            ))}
                        </div>
                    </div>
                    <div className='block2'>
                        <a onClick={toggleDialog} className="sound">
                            {isOn ? '🔊' : '🔈' }
                        </a>
                        <a className='resetButton' onClick={(e) => {
                            e.preventDefault();
                            resetData();
                        }}>
                            &#8634; Reset
                        </a>
                        <a className='nextButton' onClick={(e) => {
                            e.preventDefault();
                            getRandomNumber();
                        }}>
                            Next --&gt;
                        </a>
                    </div>
                    <div className='block3'>
                        <h2>Current Number:</h2>
                        <div className="current-number">{currentNumber || '--'}</div>
                    </div>
                </div>
                <div className='numbers'>
                <table className='number-table'>
                        <tbody>
                            {numberMatrix.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((num, colIndex) => (
                                        <td key={colIndex} className={`number-cell ${usedNumbers.includes(num) ? 'marked' : ''}`}>
                                            {num}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='rightBox'>
                {
                    checkedOptions.map((option) => (
                        <Button code={coderef[option]} usedNumbers = {usedNumbers} reset = {reset} />
                    ))
                }

            </div>
        </div>
    );
}

export default MainPage;
