import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cliente from './Cliente';
import Produto from './Produto';
// import Produto from './Produto';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

ReactDOM.render(
(<Router>
    <App>
        <Switch>
            <Route exact path="/" component={Cliente}/>
            <Route path="/clientes" component={Cliente}/>
            <Route path="/produtos" component={Produto}/>
        </Switch>    
    </App>    
</Router>), document.getElementById('root'));
registerServiceWorker();
