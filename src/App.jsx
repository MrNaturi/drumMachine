import React, { useState } from 'react';
import Button from './Button';
import sounds from './sounds.json';

function App() {
    const [activeKey, setActiveKey] = useState('');

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
            {/* Display the name of the sound */}
            <div 
                id='display' 
                className="w-full py-4 text-center text-3xl font-semibold text-white bg-gray-700 rounded-lg mb-6 shadow-md"
            >
                {activeKey || 'Press a key'}
            </div>

            {/* Drum keys in a grid */}
            <div className="drum-machine grid grid-cols-3 gap-4 p-6 bg-gray-900 rounded-lg shadow-lg">
                {sounds.map((sound) => (
                    <Button
                        key={sound.id}
                        letter={sound.key}
                        name={sound.name}
                        sound={sound.sound}
                        activeKey={activeKey}
                        setActiveKey={setActiveKey}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
