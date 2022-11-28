import React, { useState } from 'react';

function MyCountByState(props) {
  const [num, setNum] = useState(props.val);

  const countSubtract = () => {
    setNum(num - 1);
  };

  return (
    <div>
      <input value={num} />
      <button onClick={countSubtract}>-</button>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default MyCountByState;
