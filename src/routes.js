/* eslint-disable no-confusing-arrow */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-props-no-spreading */
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import { useContext } from 'react/cjs/react.development';
import Home from './pages/home';
import Pedidos from './pages/pedidos';
import Clientes from './pages/clientes';
import Produtos from './pages/produtos';
import Login from './pages/login';
import Fornecedores from './pages/fornecedores';
// import { AuthContext } from './context/authContext';
/*
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}; */
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Home} />
        <Route path="/pedidos" component={Pedidos} />
        <Route path="/clientes" component={Clientes} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/fornecedores" component={Fornecedores} />
      </Switch>
    </BrowserRouter>
  );
}
