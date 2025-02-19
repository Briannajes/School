import './App.css';
import React, { useState } from 'react';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';
function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const exercises = [
    {name: 'Push-ups', type: 'repetition'},
    {name: 'Sit-ups', type:'repetition'},
    {name: 'Running', type: 'duration'},
    {name: 'Plank', type:'duration'},
  ];
  const renderExerciseComponent = () => {
    if (selectedExercise) {
      if (selectedExercise.type === 'repetition'){
        return <RepetitionExercise name={selectedExercise.name} />;
      }
      if (selectedExercise.type === 'duration') {
        return <DurationExercise name={selectedExercise.name} />;
      }
    }
    return null;
  };
  return (
    <div className="App">
      <h1> Exercise Tracker</h1>
      {!selectedExercise ? (
        <div>
          {exercises.map((exercise, index) => (
            <button key={index} onClick={() => setSelectedExercise(exercise)}>
              {exercise.name}
            </button>
          ))}
          </div>
          ) : (
          <div>
            <h2>{selectedExercise.name}</h2>
            {renderExerciseComponent()}
            <button onClick={() => setSelectedExercise(null)}>Back</button>
            </div>
)}
    </div>
  );
}

export default App;
