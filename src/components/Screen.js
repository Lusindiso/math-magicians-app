import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Screen.css';

class Screen extends PureComponent {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { total, next, operation } = this.props.value;
    return (
      <div className="screen">
        <p>{next || total}</p>
        <p className="operation">{operation || ''}</p>
      </div>
    );
  }
}

Screen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.object.isRequired,
};

export default Screen;
