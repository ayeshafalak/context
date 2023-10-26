import React, { useState } from 'react';
import './style.css';
import GrandChildComponent from './GrandChildComponent';

function ChildComponent({isClicked}) {

  return (
    <div className="box blue">
      <h3>Child Component</h3>
      <p>This child component is not using the isClicked state anywhere.</p>
      <GrandChildComponent isClicked={isClicked} />
    </div>
  );
}

export default ChildComponent;