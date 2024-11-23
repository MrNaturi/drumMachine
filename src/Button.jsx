import React, { useState, useEffect } from 'react';

const Button = ({ letter, sound, name, activeKey, setActiveKey }) => {
    const play = () => {
        const audio = new Audio(sound);
        audio.play();
        setActiveKey(name); // Set the name of the sound when clicked
    };

    const handleKeyDown = (event) => {
        if (event.key.toUpperCase() === letter) {
            play();
            setActiveKey(name)
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [letter]);

    return (
        <button
            className={`drum-pad w-16 h-16 m-2 font-bold rounded-lg shadow-lg transition-all 
                        ${activeKey === name ? 'bg-blue-700 scale-105' : 'bg-blue-500'} 
                        ${activeKey === name ? 'shadow-xl' : ''} 
                        text-white hover:bg-blue-600 focus:ring focus:ring-blue-300 active:scale-95`}
            onClick={play}
        >
            {letter}
        </button>
    );
};

export default Button;
