import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Pedidos from './pages/pedidos';
import ClientsPage from './pages/clientsPage';
import ProductsPage from './pages/productsPage';
import Login from './pages/login';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/pedidos" component={Pedidos} />
      <Route path="/clientes" component={ClientsPage} />
      <Route path="/produtos" component={ProductsPage} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root'),
);
