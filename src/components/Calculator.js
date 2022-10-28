import React, { useState } from 'react';
import Buttons from './display/Buttons';
import './Calculator.css';
import Last from './display/Last';
import Screen from './Screen';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: 0,
    operation: null,
  });

  const handleClick = (btnName) => {
    setState((prevState) => calculate(prevState, btnName));
  };
  return (
    <div className="calculator">
      <Screen value={state} />
      <div className="bottom">
        <Last handleClick={handleClick} />
        <Buttons handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
