// Ambos imports sao sempre necessários em JSX
import React from 'react';
import ReactDOM from 'react-dom';

//styles
import './index.scss';

// Não é JS e sim JSX
const content = (
  <div className="teste">
    <div className="item"></div>
    <div className="item"></div>
    <div className="item"></div>
  </div>
);

// Renderiza o component na tag com id 'root
ReactDOM.render(content, document.getElementById('root'));
