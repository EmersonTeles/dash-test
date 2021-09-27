/* eslint-disable no-unused-vars */
import { createContext } from 'react';
import useAuth from './hooks/useAuth';

export const AuthContext = createContext('');

export const AuthContextProvider = ({ children }) => {
  const { authenticated, handleLogin, handleLogout } = useAuth();

  return (
    <AuthContext.Provider value={{ authenticated, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
