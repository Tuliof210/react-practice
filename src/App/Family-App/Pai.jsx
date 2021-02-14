import React from 'react';

//styles
import './Pai.scss';

// Exemplo looping
// Cada elemento deve ter o parametro 'key' unique
// {...props} atribui as props correspondentes
export default (props) => (
  <div className="family">
    <h1>
      {props['name']} {props['lastName']}
    </h1>
    <h3>Filhos</h3>
    <ul>{props.children}</ul>
  </div>
);
