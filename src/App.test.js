import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import calculate from './logic/calculate';
import operate from './logic/operate';

import Calculator from './components/Calculator';
import Home from './components/pages/Home';
import Quotes from './components/pages/Quote';
import CalculatorPage from './components/pages/CalculatorPage';
import Buttons from './components/display/Buttons';
import Last from './components/display/Last';
import NavBar from './components/UI/Navbar';
import Header from './components/UI/Header';
import Screen from './components/Screen';
import Button from './components/Button';

describe('Functions test', () => {
  test('calculate.js test', () => {
    const initialItems = {
      total: 0,
      next: null,
      operation: null,
    };
    const buttonName = '=';
    if (buttonName === '.') {
      expect(calculate(initialItems, buttonName)).toEqual({
        total: 0,
        next: null,
        operation: null,
      });
    } else if (buttonName === '.') {
      expect(calculate(initialItems, buttonName)).toEqual({
        total: 0.0,
        next: null,
        operation: null,
      });
    } else if (buttonName === '1') {
      expect(calculate(initialItems, buttonName)).toEqual({
        total: null,
        next: '1',
      });
    } else if (buttonName === '=') {
      expect(calculate(initialItems, buttonName)).toEqual({});
    } else if (buttonName === '+/-') {
      expect(calculate(initialItems, buttonName)).toEqual({
        total: 0,
        next: null,
        operation: null,
      });
    } else if (buttonName === 'AC') {
      expect(calculate(initialItems, buttonName)).toEqual({
        total: 0,
        next: null,
        operation: null,
      });
    }
  });

  test('operate.js addition test', () => {
    const numberOne = '1';
    const numberTwo = '2';
    const operation = '+';

    expect(operate(numberOne, numberTwo, operation)).toBe('3');
  });

  test('operate.js subtraction test', () => {
    const numberOne = '1';
    const numberTwo = '2';
    const operation = '-';

    expect(operate(numberOne, numberTwo, operation)).toBe('-1');
  });

  test('operate.js multiplication test', () => {
    const numberOne = '1';
    const numberTwo = '2';
    const operation = 'x';

    expect(operate(numberOne, numberTwo, operation)).toBe('2');
  });

  test('operate.js division test', () => {
    const numberOne = '1';
    const numberTwo = '2';
    const operation = '??';

    expect(operate(numberOne, numberTwo, operation)).toBe('0.5');
  });

  test('operate.js division by 0 test', () => {
    const numberOne = '1';
    const numberTwo = '0';
    const operation = '??';

    expect(operate(numberOne, numberTwo, operation)).toBe("Can't divide by 0.");
  });

  test('operate.js remainder test', () => {
    const numberOne = '5';
    const numberTwo = '2';
    const operation = '%';

    expect(operate(numberOne, numberTwo, operation)).toBe('1');
  });

  test('operate.js remainder when divide by 0 test', () => {
    const numberOne = '1';
    const numberTwo = '0';
    const operation = '%';

    expect(operate(numberOne, numberTwo, operation)).toBe(
      "Can't find modulo as can't divide by 0.",
    );
  });
});

describe('component test', () => {
  it('Calculator component should perform the calculations correctly on initial run', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Quote component should perform correctly on initial run', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('CalculatorPage component should perform correctly on initial run', () => {
    const tree = renderer.create(<CalculatorPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Home component should perform correctly on initial run', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Buttons component should perform correctly on initial run', () => {
    const tree = renderer.create(<Buttons />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Last component should perform correctly on initial run', () => {
    const tree = renderer.create(<Last />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('NavBar component should perform correctly on initial run', () => {
    const tree = renderer
      .create(
        <Router>
          <NavBar />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Header component should perform correctly on initial run', () => {
    const tree = renderer
      .create(
        <Router>
          <Header />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Button component should perform correctly on initial run', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Screen component should perform correctly on initial run', () => {
    const tree = renderer.create(<Screen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Simulation of user clicking button 9 twice', () => {
    render(<Calculator />);
    const buttonEl = screen.getByText(/9/i);
    userEvent.click(buttonEl);
    userEvent.click(buttonEl);
    expect(screen.getByText(/99/i)).toBeInTheDocument();
  });
});
