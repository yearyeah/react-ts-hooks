import React, { useReducer } from 'react';

function MyCountByReducer(props) {
  const [num, dispatchNum] = useReducer((state, action) => {
    const { type, newVal } = action;
    switch (type) {
      case 'add':
        return state + 1;
      case 'subtract':
        return state - 1;
      case 'reset':
        return newVal;
      default:
        return state;
    }
  }, props.val);

  return (
    <div>
      <input value={num} />
      <button
        onClick={() => {
          dispatchNum({ type: 'subtract' });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatchNum({ type: 'add' });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatchNum({ type: 'reset', newVal: 0 });
        }}
      >
        0
      </button>
    </div>
  );
}

export default MyCountByReducer;
