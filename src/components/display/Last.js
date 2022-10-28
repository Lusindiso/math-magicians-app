import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './Last.css';

const list = ['÷', 'x', '-', '+', '='];
class Last extends PureComponent {
  render() {
    const { handleClick } = this.props;
    return (
      <div className="last">
        {list.map((el) => (
          <Button value={el} key={el} handleClick={handleClick} />
        ))}
      </div>
    );
  }
}

Last.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Last;
