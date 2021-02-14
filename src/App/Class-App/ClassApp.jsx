// Criando component de classe
// Codigo de exemplo
import React, { Component } from 'react';
//styles
import './ClassApp.scss';

// parametros recebidos [props] sao read only | contants
// porém 'State' não
// state = estado do component
export default class Saudacao extends Component {
  // criação do estado inicial
  // cada instancia tem seu proprio estado
  state = {
    tipo: this.props['tipo'],
    nome: this.props['nome'],
  };
  render() {
    // Forma de acessar props em component de classe
    // Usa-se a palavra 'this' para referenciar a instancia atual
    const { tipo, nome } = this.state;
    return (
      <div className="classAppWrapper">
        <h1>
          {tipo}, {nome}!
        </h1>
        <hr />
        <input
          type="text"
          placeholder="Tipo..."
          value={tipo}
          onChange={(e) => this.setTipo(e)}
        />
        <input
          type="text"
          placeholder="Nome..."
          value={nome}
          onChange={(e) => this.setTipo(e)}
        />
      </div>
    );
  }
  setTipo(event) {
    // use isso para alterar o state
    // recebe um objeto com 'n' atributos que desejamos alterar
    this.setState({
      tipo: event['target']['value'],
    });

    console.log({ val: event['target']['value'] });
  }
}
