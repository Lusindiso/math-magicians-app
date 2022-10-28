import React, { PureComponent } from 'react';
import './Buttons.css';

const list = ['AC', '+/-', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];

class Buttons extends PureComponent {
  render() {
    const display = list.map((el) => (
      <div className={`button ${el === 0 ? 'btn' : ''}`} key={el}>
        {el}
      </div>
    ));

    return <div className="buttons">{display}</div>;
  }
}

export default Buttons;
