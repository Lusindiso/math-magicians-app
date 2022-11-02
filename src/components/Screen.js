/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Screen.css';

class Screen extends PureComponent {
  render() {
    return (
      <div className="screen">
        <p>{this.props.next || this.props.total}</p>
        <p className="operation">{this.props.operation || ''}</p>
      </div>
    );
  }
}

Screen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  operation: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,

};

export default Screen;
