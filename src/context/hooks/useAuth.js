/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import api from '../../services/api';

export default function Auth() {
  const [authenticated, setAuthenticated] = useState(false);

  async function handleLogin(values) {
    const {
      data: { token },
    } = await api.post('/auth/login', values);
    const { exp } = jwt_decode(token);
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('exp', JSON.stringify(exp));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.clear();
    api.defaults.headers.Authorization = undefined;
  }
  useEffect(() => {
    if (localStorage.length > 0) {
      const token = localStorage.getItem('token');
      let exp = JSON.parse(localStorage.getItem('exp'));
      exp = new Date(exp);
      if (token && new Date() < exp) {
        api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
        setAuthenticated(true);
      } else {
        handleLogout();
      }
    }
  }, []);
  return { authenticated, handleLogin, handleLogout };
}
