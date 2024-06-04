import "./App.css";
import Navbar from "./componentes/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Inicio from "./componentes/Navbar/pages/Inicio/Inicio";
import Contactenos from "./componentes/Navbar/pages/Contactenos/Contactenos";
import Eventos from "./componentes/Navbar/pages/Eventos/Eventos";
import Nosotros from "./componentes/Navbar/pages/Nosotros/Nosotros";
import Servicios from "./componentes/Navbar/pages/Servicios/Servicios";
import Footer from "./Footer/Footer";
function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Footer />
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
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
