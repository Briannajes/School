import React, { useState, useEffect } from 'react';
const DurationExercise = ({ name }) => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => setTime(prevTime => prevTime + 1), 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning]);
    const handleStartStop = () =>{
        setIsRunning(!isRunning);
    };
    const handleReset = () => {
        setTime(0);
        setIsRunning(false);
    };
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };
    return (
        <div>
            <h2>{name}</h2>
            <p>Time: {formatTime(time)}</p>
            <button onClick={handleStartStop}>
                {isRunning ? 'Stop' : 'Start'}
            </button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};
export default DurationExercise;