import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Screen.css';

class Screen extends PureComponent {
  render() {
    const { total, next, operation } = this.props;
    return (
      <div className="screen">
        <p>{next || total}</p>
        <p className="operation">{operation || ''}</p>
      </div>
    );
  }
}

Screen.propTypes = {
  next: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  operation: PropTypes.bool.isRequired,
};

export default Screen;
