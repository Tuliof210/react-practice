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
  interval;

  // necessario usar 'super' em contructor ja que a classe em questao
  // deriva da classe component
  constructor(props) {
    super(props);
    this.state = {
      tipo: this.props['tipo'],
      nome: this.props['nome'],
      btnTXT: 'COMEÇAR',
      count: 0,
      counting: false,
    };
  }

  callSetState({ event, ref }) {
    // use isso para alterar o state
    // recebe um objeto com 'n' atributos que desejamos alterar
    this.setState({
      [ref]: event['target']['value'],
    });
  }

  startCount() {
    this.setState({
      counting: !this.state.counting,
      btnTXT: this.state.btnTXT == 'COMEÇAR' ? 'PARAR' : 'COMEÇAR',
    });
    if (this.state['counting']) clearInterval(this.interval);
    else
      this.interval = setInterval(() => {
        this.setState({
          count: this.state.count + 1,
        });
      }, 1000);
  }

  /*
  NÃO existe two way data biding em react
  Em angular a view pode atualizar o state e o state a view
  Em REACT apenas o state atualiza a view

  o DADO que manda na atualização do component
  */
  render() {
    // Forma de acessar props em component de classe
    // Usa-se a palavra 'this' para referenciar a instancia atual
    const { count, btnTXT, tipo, nome } = this.state;
    return (
      <div className="classAppWrapper">
        <h1>Timer: {count}</h1>
        <hr />
        <input
          type="text"
          placeholder="Tipo..."
          value={tipo}
          onChange={(event) => this.callSetState({ event, ref: 'tipo' })}
        />
        <input
          type="text"
          placeholder="Nome..."
          value={nome}
          onChange={(event) => this.callSetState({ event, ref: 'nome' })}
        />
        <button className="default-btn" onClick={(e) => this.startCount()}>
          {btnTXT}
        </button>
      </div>
    );
  }
}
