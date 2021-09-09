import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SectionProvider } from "./context/sectionContext";

ReactDOM.render(
  <React.StrictMode>
    <SectionProvider>
      <App />
    </SectionProvider>
  </React.StrictMode>,
  
  document.getElementById("root")
);
