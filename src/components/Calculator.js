import React, { PureComponent } from 'react';
import Buttons from './display/Buttons';
import './Calculator.css';
import Last from './display/Last';
import Screen from './Screen';

class Calculator extends PureComponent {
  render() {
    return (
      <div className="calculator">
        <Screen />
        <div className="bottom">
          <Last />
          <Buttons />
        </div>
      </div>
    );
  }
}

export default Calculator;
