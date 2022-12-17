import React, { useState, useEffect } from 'react';

function MyCountByEffect(props) {
  const [num, setNum] = useState(props.val);

  const countSubtract = () => {
    setNum(num - 1);
  };

  useEffect(
    function () {
      console.log('useEffect：', num);
      if (num === 100) {
        setNum(95); //导致再次刷新
      }
      return function () {
        console.log('destory num:', num); //下次渲染前 提前执行
      };
    },
    [num]
  );

  useEffect(function () {
    console.log('component useEffect');
    return function () {
      console.log('component destory');
    };
  }, []);

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

export default MyCountByEffect;
