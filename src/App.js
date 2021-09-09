import "./App.css";
import Home from "./pages/home";
import ClientsPage from "./pages/ClientsPage.js";
import { useSection } from "./context/sectionContext";

function App() {

  const { section } = useSection();

  const renderDashboard = (section) => {
    if (section === "Pedidos") {
      return <Pedidos />;
    }
    if (section === "Clientes") {
      return <ClientsPage />;
    }
    return <Home />;
  };

  return renderDashboard(section);
}

export default App;
