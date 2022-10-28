/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import './Button.css';

class Button extends PureComponent {
  render() {
    const { value } = this.props;
    return <div className="button">{value}</div>;
  }
}

export default Button;
