import React, { useState } from 'react';
import './style.css';
import { useMyContext } from '../MyContext';

function GrandChildComponent({isClicked}) {
  const { isCtxClicked } = useMyContext();

  return (
    <div className="box red">
      <h3>GrandChildComponent Component</h3>
      <p>The GrandChildComponent displayes some text based on the value of isClicked state.</p>
      <p>{isClicked? "Prop drilled down" : ""}</p>
      <p>{isCtxClicked? "CTX clicked" : ""}</p>

    </div>
  );
}

export default GrandChildComponent;