import React, { Component } from 'react';

class Counter extends Component {
  formatCount() {
    const { value: count } = this.props.counter;
    const x = <h3>Zero</h3>;
    return count === 0 ? x : count;
  }

  render() {
    const { value: count } = this.props.counter;
    let classes = 'badge m-2 badge-';
    classes += count === 0 ? 'warning' : 'primary';

    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={this.props.onIncrement}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
        <button
          className='btn btn-danger btn-sm m-2'
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
