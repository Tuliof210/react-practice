// necessários em JSX
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
//styles
import './index.scss';
//components
//sempre começar com letra maiuscula
//export sem nome, logo pode inventar
import AppFirst from './App/First-App/First';
import AppBomdia from './App/Morning-App/Morning';

// Não é JS e sim JSX
const content = (
  // Importando Fragment para usá-lo de forma resumida
  <Fragment>
    <AppBomdia name="Carlos" text="Seu Arrombado" />
    <div className="teste">
      <AppFirst />
    </div>
  </Fragment>
);

// Renderiza o component na tag com id 'root
ReactDOM.render(content, document.getElementById('root'));
