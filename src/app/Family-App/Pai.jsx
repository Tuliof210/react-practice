import React from 'react';

//styles
import './Pai.scss';

//utils
import { cloneAndPopulate } from '../../utils/utils';

// Exemplo looping
// Cada elemento deve ter o parametro 'key' unique
// {...props} atribui as props correspondentes
export default (props) => (
  <div className="family">
    <h1>
      {props['name']} {props['lastName']}
    </h1>
    <h3>Filhos</h3>
    <ul>{cloneAndPopulate(props)}</ul>
  </div>
);
