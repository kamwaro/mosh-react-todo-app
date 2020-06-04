import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3'],
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
        <ul>
          {this.state.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Counter;
