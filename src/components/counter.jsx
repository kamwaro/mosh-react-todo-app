import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  formatCount() {
    const { count } = this.state;
    const x = <h3>Zero</h3>;
    return count === 0 ? x : count;
  }

  render() {
    const { count } = this.state;
    let classes = 'badge m-2 badge-';
    classes += count === 0 ? 'warning' : 'primary';

    return (
      <React.Fragment>
        <span className={classes}>{this.formatCount()}</span>
        <button className='btn btn-secondary btn-sm'>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
