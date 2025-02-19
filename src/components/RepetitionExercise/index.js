import React, { useState } from 'react';
const RepetitionExercise = ({ name }) => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => setCount(count + 1);
    const handleReset = () => setCount(0);
    return (
        <div>
            <h2>{name}</h2>
            <p>Repetitions: {count}</p>
            <button onClick={handleIncrement}>Rep Completed</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};
export default RepetitionExercise;