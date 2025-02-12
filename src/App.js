import './App.css';
import React, { useState } from 'react';
import MainPage from './js/mainPage';
import Button from './js/button';
import Window from './js/window';

function openWindow() {
    document.querySelector('.appbutton').style.display = "none";
    document.querySelector('.appwindow').style.display = "block";
    document.querySelector('.appmain').style.display = "none";
}

function closeWindow() {
    document.querySelector('.appbutton').style.display = "block";
    document.querySelector('.appwindow').style.display = "none";
}

function App() {
    const [checkedOptions, setCheckedOptions] = useState([]);

    const openMain = () => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        const newOptions = [];
        
        checkboxes.forEach((checkbox) => {
            newOptions.push(checkbox.value);
        });
        
        setCheckedOptions(newOptions);
        document.querySelector('.appbutton').style.display = "none";
        document.querySelector('.appwindow').style.display = "none";
        document.querySelector('.appmain').style.display = "block";
    };

    return (
        <div className="App">
            <div className='appheader'> <h1>Tambola</h1> </div>
            <div className='appbutton'> <Button openWindow={openWindow} /> </div>
            <div className='appwindow'>
                <Window closeWindow={closeWindow} openMain={openMain} />
            </div>
            <div className='appmain'>
                <MainPage checkedOptions={checkedOptions} openWindow={openWindow} />
            </div>
        </div>
    );
}

export default App;
