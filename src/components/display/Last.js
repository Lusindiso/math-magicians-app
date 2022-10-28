import React, { PureComponent } from 'react';
import Button from '../Button';
import './Last.css';

const list = ['÷', 'X', '-', '+', '='];
class Last extends PureComponent {
  render() {
    return (
      <div className="last">
        {list.map((el) => (
          <Button value={el} key={el} />
        ))}
      </div>
    );
  }
}

export default Last;
