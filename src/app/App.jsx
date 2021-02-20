import './App.scss';
import React from 'react';

export default (props) => {
  const { min, max } = props;
  const num = parseInt(Math.random() * (max - min) + min);
  return (
    <div>
      <h2>Min: {min}</h2>
      <h2>Max: {max}</h2>
      <br />
      <h1>Value: {num}</h1>
    </div>
  );
};
