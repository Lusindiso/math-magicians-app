import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

import './Buttons.css';

const list = [
  'AC',
  '+/-',
  '%',
  '7',
  '8',
  '9',
  '4',
  '5',
  '6',
  '1',
  '2',
  '3',
  '0',
  '.',
];

class Buttons extends PureComponent {
  render() {
    const { handleClick } = this.props;

    return (
      <div className="buttons">
        {list.map((el) => (
          <Button value={el} key={el} handleClick={handleClick} />
        ))}
      </div>
    );
  }
}

Buttons.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Buttons;
