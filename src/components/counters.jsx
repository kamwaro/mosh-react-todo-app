import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    const { counters } = this.props.counters;
    const { onReset, onDelete } = this.props;

    return (
      <div>
        <button onClick={onReset} className='btn btn-sm btn-primary m-2'>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={() => this.props.onIncrement(counter)}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
