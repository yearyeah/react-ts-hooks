import { useDispatch } from 'react-redux';
import React, { startTransition } from 'react';

const TextBox = () => {
  const dispatch = useDispatch();
  const handleValueChange = (e) => {
    startTransition(() => {
      dispatch({
        type: 'change',
        value: e.target.value,
      });
    });
  };
  return <input onChange={handleValueChange} />;
};

export default TextBox;
