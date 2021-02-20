import './App.scss';
import React from 'react';

export default (props) => {
  const value = {
    min: props['min'],
    max: props['max'],
    num: 50,
  };
  return (
    <div>
      <h2>Min: {value['min']}</h2>
      <h2>Max: {value['max']}</h2>
      <hr />
      <h1>Value:{value['num']}</h1>
    </div>
  );
};
