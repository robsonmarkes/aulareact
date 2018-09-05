import React, { Component } from 'react';
import './css/pure.min.css'; 
import './css/side-menu.css';
import axios from 'axios';

class Produto extends Component {
  constructor(){
    super();
    this.state = {
      nome : '', 
      descricao : '', 
      preco : '', 
      lista : [], 
    };
    //bind nas funções. 
    this.setNome        = this.setNome.bind(this);
    this.setDescricao   = this.setDescricao.bind(this);
    this.setPreco       = this.setPreco.bind(this);
    this.enviaForm      = this.enviaForm.bind(this); 
    this.atualizaLista  = this.atualizaLista.bind(this);
  }

  setNome(evento){
    this.setState({nome: evento.target.value});
  }

  setDescricao(evento){
    this.setState({descricao: evento.target.value});
  }

  setPreco(evento){
    this.setState({preco: evento.target.value});
  }  

  enviaForm(evento){
    evento.preventDefault();
    axios.post('http://localhost:8080/produtos', {nome : this.state.nome, descricao : this.state.descricao, preco : this.state.preco})
    .then(resposta => {
      console.log('cadastrado produto com sucesso');
      //reset nas variáveis de state 
      this.setState({
        nome: '', 
        descricao: '',
        preco : '' 
      });

      //chama função responsável por trazer os dados adicionados 
      this.atualizaLista();
      
    })
    .catch(err => {
      console.log(err);
    });
  }

  atualizaLista(){
    axios.get('http://localhost:8080/produtos')
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

  }

  render() {
    return (
    <div>
        <div className="header">
            <h1>Produtos</h1>
            <h2>Página de produtos</h2>
        </div>

        <div className="content">
            <h2 className="content-subhead">{this.props.tituloHome}</h2>
            <p>
                Abaixo a lista de produtos.
            </p>

<table className="pure-table">
    <thead>
        <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>PRECO</th>
        </tr>
    </thead>

    <tbody>
      {
        this.state.lista.map(function(produto){
          return (
            <tr>
              <td>{produto.ID}</td>
              <td>{produto.Nome}</td>
              <td>{produto.Descricao}</td>
              <td>{produto.Preco}</td>
            </tr>  
          );
        })
      }
    </tbody>
</table>

            <h2 className="content-subhead">Cadastro de produtos</h2>
            <p>
                Para cadastrar um produto, preencha os campos abaixo: 
            </p>

<form className="pure-form pure-form-stacked" onSubmit={this.enviaForm}>
    <fieldset>

        <label htmlFor="nome">Nome</label>
        <input id="nome" type="text" placeholder="Digite seu nome" value={this.state.nome} onChange={this.setNome}/>

        <label htmlFor="descricao">Descrição</label>
        <input id="descricao" type="text" placeholder="Digite a descrição" value={this.state.descricao} onChange={this.setDescricao}/>

        <label htmlFor="preco">Preço</label>
        <input id="preco" type="text" placeholder="Digite o preço" value={this.state.preco} onChange={this.setPreco}/>

        <button type="submit" className="pure-button pure-button-primary">Cadastrar</button>
    </fieldset>
</form>

        </div>
    </div>
    );
  }
}

export default Produto;
