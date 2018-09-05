import React, { Component } from 'react';
import './css/pure.min.css'; 
import './css/side-menu.css';
import axios from 'axios';

class Cliente extends Component {
  constructor(){
    super();
    this.state = {
      nome : 'Joselito', 
      sobrenome : 'Silva', 
      lista : [], 
      nomeCadastro : '', 
      cpf: ''
    };
    //bind nas funções. 
    this.setNome       = this.setNome.bind(this);
    this.setCpf        = this.setCpf.bind(this);
    this.enviaForm     = this.enviaForm.bind(this); 
    this.atualizaLista = this.atualizaLista.bind(this);
  }

  setNome(evento){
    this.setState({nomeCadastro: evento.target.value});
  }

  setCpf(evento){
    this.setState({cpf: evento.target.value});
  }

  enviaForm(evento){
    evento.preventDefault();
    axios.post('http://localhost:8080/clientes', {nome : this.state.nomeCadastro, cpf : this.state.cpf})
    .then(resposta => {
      //somente informação no console quando houver sucesso 
      console.log('cadastrado com sucesso');
      //limpando nossas states
      this.setState({
        nomeCadastro : '', 
        cpf: ''
      }); 
      this.atualizaLista();
      
    })
    .catch(err => {
      console.log(err);
    });
  }

  atualizaLista(){
    axios.get('http://localhost:8080/clientes')
    .then(resposta => {
      resposta = resposta.data;
      this.setState({lista : resposta});
    })
    .catch(err => {
      console.log(err);
    });    
  }

  componentWillMount(){

    //buscando dados da api 
    //jquery 
    // $.ajax({
    //   url : 'http://localhost:8080/clientes',
    //   method : 'get', 
    //   dataType: 'json', 
    //   success: function(data){
    //     this.setState({lista : data});
    //   }.bind(this)
    // });

    this.atualizaLista();

    this.setState({
      saudacao : 'Estou fazendo o uso de state dentro do willMount'
    });
  }

  render() {
    return (
    <div>
        <div className="header">
            <h1>Clientes</h1>
            <h2>{this.state.saudacao}</h2>
        </div>

        <div className="content">
            <h2 className="content-subhead">{this.props.tituloHome}</h2>
            <p>
                Abaixo a lista de clientes.
            </p>

<table className="pure-table">
    <thead>
        <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>CPF</th>
        </tr>
    </thead>

    <tbody>
      {
        this.state.lista.map(function(cliente){
          return (
            <tr>
              <td>{cliente.ID}</td>
              <td>{cliente.Nome}</td>
              <td>{cliente.CPF}</td>
            </tr>  
          );
        })
      }
    </tbody>
</table>

            <h2 className="content-subhead">Cadastro de clientes</h2>
            <p>
                Para cadastrar um cliente, preencha os campos abaixo: 
            </p>

<form className="pure-form pure-form-stacked" onSubmit={this.enviaForm}>
    <fieldset>

        <label htmlFor="nome">Nome</label>
        <input id="nome" type="text" placeholder="Digite seu nome" value={this.state.nomeCadastro} onChange={this.setNome}/>

        <label htmlFor="cpf">CPF</label>
        <input id="cpf" type="text" placeholder="Digite seu CPF" value={this.state.cpf} onChange={this.setCpf}/>

        <button type="submit" className="pure-button pure-button-primary">Cadastrar</button>
    </fieldset>
</form>

        </div>
    </div>
    );
  }
}

export default Cliente;
