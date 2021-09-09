/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-shadow */
import './App.css';
import Home from './pages/home';
import Pedidos from './pages/pedidos';
import { useSection } from './context/sectionContext';
import ClientsPage from './pages/clientsPage';

function App() {
  const { section } = useSection();

  const renderDashboard = (section) => {
    if (section === 'Pedidos') {
      return <Pedidos />;
    }
    if (section === 'Clientes') {
      return <ClientsPage />;
    }
    return <Home />;
  };

  return renderDashboard(section);
}

export default App;
