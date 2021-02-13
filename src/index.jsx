// Ambos imports sao sempre necessários em JSX
import React from 'react';
import ReactDOM from 'react-dom';
//styles
import './index.scss';
//components
import First from './App/firstApp/first';

// Não é JS e sim JSX
const content = (
  <div className="teste">
    <First></First>
  </div>
);

// Renderiza o component na tag com id 'root
ReactDOM.render(content, document.getElementById('root'));
