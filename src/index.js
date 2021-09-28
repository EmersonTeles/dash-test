import React from 'react';
import ReactDOM from 'react-dom';
import { AuthContextProvider } from './context/authContext';
import './index.css';
import Routes from './routes';

ReactDOM.render(
  <AuthContextProvider>
    <Routes />
  </AuthContextProvider>,

  document.getElementById('root'),
);
