import React, { Component } from 'react';
import './css/pure.min.css'; 
import './css/side-menu.css';
import {Link} from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      nome : 'Joselito', 
      sobrenome : 'Silva'
    };
  } 

  componentWillMount(){
    this.setState({
      saudacao : 'Estou fazendo o uso de state dentro do willMount'
    });
  }

  render() {
    return (
<div id="layout">
    <a href="#menu" id="menuLink" className="menu-link">
        <span></span>
    </a>

    <div id="menu">
        <div className="pure-menu">
            <Link to="/" className="pure-menu-heading">everis beca</Link>

            <ul className="pure-menu-list">
                <li className="pure-menu-item"><Link to="/clientes" className="pure-menu-link">Clientes</Link></li>
                <li className="pure-menu-item"><Link to="/produtos" className="pure-menu-link">Produtos</Link></li>
            </ul>
        </div>
    </div>

    <div id="main">
    {this.props.children}
    </div>
</div>
    );
  }
}

export default App;
