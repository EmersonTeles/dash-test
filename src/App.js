import './App.css';
import Cards from './components/cards';
import Sidebar from './components/sidebar';
import Stats from './components/stats';

function App() {
  return (
    <div className="App">
      <Sidebar>
        <Cards/>
        <Stats/>  
      </Sidebar>
    </div>
  );
}

export default App;
