import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Pedidos from './pages/pedidos';
import ClientsPage from './pages/clientsPage';
import ProductsPage from './pages/productsPage';
import Login from './pages/login';
import Fornecedores from './pages/fornecedores';
import { AuthContextProvider } from './context/authContext';

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Home} />
        <Route path="/pedidos" component={Pedidos} />
        <Route path="/clientes" component={ClientsPage} />
        <Route path="/produtos" component={ProductsPage} />
        <Route path="/fornecedores" component={Fornecedores} />
      </Switch>
    </BrowserRouter>
  </AuthContextProvider>,

  document.getElementById('root'),
);
