import React, { Component } from 'react';
import Buttons from './display/Buttons';
import './Calculator.css';
import Last from './display/Last';
import Screen from './Screen';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (btnName) => {
    this.setState((prevState) => calculate(prevState, btnName));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <Screen total={total} next={next} operation={operation} />
        <div className="bottom">
          <Last handleClick={this.handleClick} />
          <Buttons handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Calculator;
