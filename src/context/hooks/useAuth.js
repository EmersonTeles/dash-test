/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import api from '../../services/api';

export default function Auth() {
  const [authenticated, setAuthenticated] = useState(false);
  let tokenPayload;

  async function handleLogin(values) {
    const {
      data: { token },
    } = await api.post('/auth/login', values);

    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.clear();
    api.defaults.headers.Authorization = undefined;
  }

  function getAuthenticated() {
    let { exp } = tokenPayload;
    exp = new Date(exp);
    if (exp > new Date()) {
      handleLogout();
    }
    return authenticated;
  }
  useEffect(() => {
    if (localStorage.length > 0) {
      const token = localStorage.getItem('token');
      tokenPayload = jwt_decode(token);
      let { exp } = tokenPayload;
      exp = new Date(exp);
      if (token && exp > new Date()) {
        api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
        setAuthenticated(true);
      } else {
        handleLogout();
      }
    }
  }, []);
  return { authenticated, getAuthenticated, handleLogin, handleLogout };
}
