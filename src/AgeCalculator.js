import React, { useState } from 'react';
import './AgeCalculator.css'; // Import the CSS file for styling

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
    setAge(ageInYears);
  };

  return (
    <div className="calculator-container">
      <h1>Age Calculator</h1>
      <div className="input-container">
        <label htmlFor="birthdate">Enter your birthdate: </label>
        <input
          type="date"
          id="birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </div>
      <button className="calculate-button" onClick={calculateAge}>Calculate Age</button>
      {age !== '' && <div className="result-box">Your age is {age} years.</div>}
    </div>
  );
}

export default AgeCalculator;
