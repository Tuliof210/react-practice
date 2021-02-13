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

//export com nome, devemos realizar dessa maneira
import TheOriginal, { TheClone } from './App/Clone-App/Clone';

const name = 'Tulio';
const text = 'Como vai?';

const cloneName = 'Pedro';

// Não é JS e sim JSX
const content = (
  // Importando Fragment para usá-lo de forma resumida
  <Fragment>
    <AppBomdia name={name} text={text} />
    <div className="teste">
      <AppFirst />
    </div>
    <div className="teste">
      <TheOriginal name={cloneName} />
      <TheClone name={cloneName} />
    </div>
  </Fragment>
);

// Renderiza o component na tag com id 'root
ReactDOM.render(content, document.getElementById('root'));
