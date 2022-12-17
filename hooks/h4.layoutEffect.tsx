import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

function MyCountByLayoutEffect(props) {
  const [num, setNum] = useState(props.val);

  const countSubtract = () => {
    setNum(num - 1);
  };

  const target = useRef();

  useLayoutEffect(() => {
    console.log('useLayoutEffect:', num, target.current);
    if (num >= 100) {
      target.current.innerHTML = '清';
    } else {
      target.current.innerHTML = '+';
    }
  }, [num]);

  useEffect(
    function () {
      console.log('useEffect：', num);
      if (num > 100) {
        setNum(95); //导致再次刷新
      }
      return function () {
        console.log('destory num:', num); //下次渲染前 提前执行
      };
    },
    [num]
  );

  return (
    <div>
      <input value={num} />
      <button onClick={countSubtract}>-</button>
      <button
        ref={target}
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default MyCountByLayoutEffect;
