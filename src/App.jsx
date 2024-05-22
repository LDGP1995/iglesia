import "./App.css";
import Navbar from "./componentes/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Contactenos from "./componentes/Navbar/pages/Contactenos"
import Eventos from "./componentes/Navbar/pages/Eventos";
import Nosotros from "./componentes/Navbar/pages/Nosotros"
import Servicios from "./componentes/Navbar/pages/Servicios";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/contactenos" element={<Contactenos />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
