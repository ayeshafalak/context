import React, { useState } from 'react';
import './style.css';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [isClicked, setClicked] = useState(false);
  
const handleButtonClick = () =>{
    setClicked(true);
}

  return (
    <div className="box">
      <h3>Parent Component</h3>
      <p>We have a state called 'isClicked' whis set to false. It will be set to true when button is clicked.</p>
      <button onClick={handleButtonClick}>Reveal</button>
      <ChildComponent isClicked={isClicked} />
    </div>

  );
}

export default ParentComponent;