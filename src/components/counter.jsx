import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  formatCount() {
    const { count } = this.state;
    const x = <h3>Zero</h3>;
    return count === 0 ? x : count;
  }

  validateTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return this.state.tags.map((tag, index) => <li key={index}>{tag}</li>);
  }

  render() {
    const { count } = this.state;
    let classes = 'badge m-2 badge-';
    classes += count === 0 ? 'warning' : 'primary';

    return (
      <React.Fragment>
        <span className={classes}>{this.formatCount()}</span>
        <button className='btn btn-secondary btn-sm'>Increment</button>
        <ul>{this.validateTags()}</ul>
      </React.Fragment>
    );
  }
}

export default Counter;
