import { createContext, useState, useContext } from "react";

export const SectionContext = createContext("");

export const SectionProvider = (props) => {
  const [section, setSection] = useState("pedidos");

  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {props.children}
    </SectionContext.Provider>
  );
};

export const useSection = () => useContext(SectionContext);
