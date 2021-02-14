import React from 'react';

//styles
import './Pai.scss';
// components filhos
import Filho from './Filho-App/Filho';

const filhos = [
  { name: 'Edmar' },
  { name: 'Eduardo' },
  { name: 'Edson' },
  { name: 'Ernane' },
];

// Exemplo looping
// Cada elemento deve ter o parametro 'key' unique
// {...props} atribui as props correspondentes
export default (props) => (
  <div className="family">
    <h1>
      {props['name']} {props['lastName']}
    </h1>
    <h3>Filhos</h3>
    <ul>
      {/* 
        Cada elemento deve ter o parametro 'key' unique
        {...props} atribui as props correspondentes 
      */}
      {filhos.map((filho, index) => (
        <Filho {...props} key={index} name={filho['name']} />
      ))}
    </ul>
  </div>
);
