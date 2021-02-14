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
    <ul>{populate(props)}</ul>
  </div>
);

const populate = (props) => {
  // função que irá mapear cada component filho passado ao pai
  // params => array, callback
  return React.Children.map(props.children, (child) => {
    // função que clona elemtos recebidos para assim alterá-los
    // no caso recebe as propriedades do pai e a propria
    return React.cloneElement(child, {
      ...props,
      ...child.props,
    });
  });
};
