import React, { useState } from 'react';

const Calculator = () => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [oneRepMax, setOneRepMax] = useState('');
  const [unit, setUnit] = useState('kg'); // Default unit is kg
  const [lift, setLift] = useState('bench') // Default lift is bench

  const handleWeightChange = (event) => {
    const numericValue = event.target.value.replace(/[^0-9.]/g, ''); // Allow only digits and dot
    setWeight(numericValue);
  };

  const handleRepsChange = (event) => {
    const numericValue = event.target.value.replace(/[^0-9.]/g, ''); // Allow only digits and dot
    setReps(numericValue);
  };
  
  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const handleLiftChange = (event) => {
    setLift(event.target.value)
  }

  const handleCalculateClick = (event) => {
    event.preventDefault();
    let calculatedOneRepMax = 2;
    
    if (lift === 'bench') {
      calculatedOneRepMax = 1.022**reps * weight 
    } else if (lift === 'squat') {
      calculatedOneRepMax = 1.028**reps * weight
    } else {
      calculatedOneRepMax = 1.033**reps * weight
    }

    if (calculatedOneRepMax > 1000) {
      calculatedOneRepMax = 999.99;
    }
    
    setOneRepMax('Your one rep max is: ' + (calculatedOneRepMax).toFixed(2) +'kg'); // Rounds to 2 d.p.
  };

  return (
    <div className="calc-outerdiv">
      <div className="calc-main">
        <form>
          <div className="text-div">
            <label htmlFor="">Lift</label>
            <select className="lift-select" id="unit" value={lift} onChange={handleLiftChange}>
              <option value="bench">bench</option>
              <option value="squat">squat</option>
              <option value="deadlift">deadlift</option>
            </select>
          </div>
          <div className="text-div">
            <label htmlFor="">Weight</label>
            <div className="weight-dropdown">
              <input className="weight-input" type="text" value={weight} onChange={handleWeightChange} />
              <select id="unit" value={unit} onChange={handleUnitChange}>
                <option value="kg">kg</option>
                <option value="lbs">lbs</option>
              </select>
            </div>
          </div>
          <div className="text-div">
            <label htmlFor="">Reps</label>
            <input className="reps-input" type="text" value={reps} onChange={handleRepsChange} />
          </div>
          <div className="flex-center">
            <button onClick={handleCalculateClick}>Calculate</button>
          </div>
        </form>

        <div className="flex-center oneRepMax">{oneRepMax}</div>
      </div>
      </div>
  );
};

export default Calculator;