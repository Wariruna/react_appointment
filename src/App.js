import { Routes,Route } from 'react-router-dom';
import { Home } from './Home';
import { Menu } from './Menu';
import './App.css';
import { PedirCita } from './PedirCita';
import { ElegirDia } from './ElegirDia';
import { Header } from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pedir-cita' element={<PedirCita />} />
        <Route path='/elegir-dia' element={<ElegirDia />} />
    
      </Routes>
    </div>
  );
}

export default App;
