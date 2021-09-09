/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from 'react';

export const SectionContext = createContext('');

export const SectionProvider = ({ children }) => {
  const [section, setSection] = useState('pedidos');

  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => useContext(SectionContext);
