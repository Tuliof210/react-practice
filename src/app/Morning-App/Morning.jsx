import React from 'react';

// props = parametros da função
// semelhante ao [input] do angular
// o nome não é obrigatorio, mas recomendado
export default (props) => (
  <React.Fragment>
    <h2>Bom dia {props['name']},</h2>
    <h3>{props['text']}</h3>
  </React.Fragment>
);

//Não é possivel retornar mais de uma tag ao mesmo tempo
//Podemos usar uma div para isso, porem isso pode quebrar layouts
//Como evitar isso? React.Fragment
