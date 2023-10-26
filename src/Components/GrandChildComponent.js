import React, { useState } from 'react';
import './style.css';

function GrandChildComponent({isClicked}) {

  return (
    <div className="box red">
      <h3>GrandChildComponent Component</h3>
      <p>The GrandChildComponent displayes some text based on the value of isClicked state.</p>
      <p>{isClicked? "The button was clicked" : "The button is not clicked."}</p>
    </div>
  );
}

export default GrandChildComponent;