// necessários em JSX
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

//styles
import './index.scss';

//components
//sempre começar com letra maiuscula
//export sem nome, logo pode inventar
import AppFirst from './app/First-App/First';
import AppBomdia from './app/Morning-App/Morning';
import Saudacao from './app/Class-App/ClassApp';
import Familia from './app/Family-App/Pai';
import Filho from './app/Family-App/Filho-App/Filho';
//export com nome, devemos realizar dessa maneira
import { TheOriginal, TheClone } from './app/Clone-App/Clone';

const name = 'Pedro';
const text = 'Como vai?';

const cloneName = 'Pedro';

const filhos = [
  { name: 'Edmar' },
  { name: 'Eduardo' },
  { name: 'Edson' },
  { name: 'Ernane' },
  { name: 'Tulio' },
  { name: 'Mariza' },
];

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
    <Saudacao tipo="Feliz natal" nome="Monica" />
    <Familia name="Jose" lastName="Silva">
      {/* 
        Cada elemento deve ter o parametro 'key' unique
        {...props} atribui as props correspondentes 
      */}
      {filhos.map((filho, index) => (
        <Filho key={index} name={filho['name']} />
      ))}
    </Familia>
  </Fragment>
);

// Renderiza o component na tag com id 'root
ReactDOM.render(content, document.getElementById('root'));
