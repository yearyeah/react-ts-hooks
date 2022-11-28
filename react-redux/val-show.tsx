import { useSelector } from 'react-redux';
import React from 'react';

const ShowText = () => {
  const value = useSelector((state) => state);

  const start = performance.now();
  while (performance.now() - start < 10) {}
  return <div>{value}</div>;
};

export default ShowText;
