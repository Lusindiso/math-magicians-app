import React, { PureComponent } from 'react';
import './Screen.css';

class Screen extends PureComponent {
  render() {
    return <input className="screen" value="0" readOnly />;
  }
}

export default Screen;
