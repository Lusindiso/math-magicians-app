import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends PureComponent {
  render() {
    const { value, handleClick } = this.props;
    return (
      <button
        className={`button ${value === '0' ? 'btn' : ''}`}
        onClick={() => handleClick(value)}
        type="button"
      >
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
