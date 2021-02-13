import React, { Fragment } from 'react';

export const TheOriginal = (props) => (
  <h3 className="pointer" onClick={printInLog}>
    Sou o {props.name} original
  </h3>
);
export const TheClone = (props) => (
  <h3 className="pointer" onClick={printInALert}>
    Sou o clone do {props['name']}, me chamo {props.name}-02
  </h3>
);

export default TheClone;

// um arquivo exportando 2 components
// por ser um export com nome devemos respeitar isso ao importar

// exemplos diferentes de export (prefiro sem default)

const printInLog = () => {
  console.log('Hello World rs');
};
const printInALert = () => {
  alert(`'Hello World rs'`);
};
