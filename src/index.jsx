import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Numbers from './app/App';
import Card from './components/card/Card';

ReactDOM.render(
  <div id="wrapper">
    <Card header="Random" style={{ backgroundColor: '#f55' }}>
      <Numbers min={10} max={100} />
    </Card>
    <Card header="Random" style={{ backgroundColor: '#55f' }}>
      <Numbers min={10} max={100} />
    </Card>
    <Card header="Random" style={{ backgroundColor: '#050' }}>
      <Numbers min={10} max={100} />
    </Card>
  </div>,
  document.getElementById('root')
);
