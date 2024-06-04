import "./Navbar.css";
import { Link } from "react-router-dom";
import Hamburger from "./menu.png";
import React, { useState, useEffect } from "react";
import Inicio from "./pages/Inicio/Inicio"; // Importa el componente Inicio


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/inicio");

  useEffect(() => {
    // Establecer la página de inicio como la activa por defecto
    setActiveLink("/inicio");
  }, []);

  const handleLinkClick = (link) => {
    if (link !== "/inicio") {
      setActiveLink(link);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/inicio" className="logo">
          Familia Cristiana
        </Link>

        <ul className={menuOpen ? "open" : ""}>
          <li>
            <Link
              to="/inicio"
              className={activeLink === "/inicio" ? "active-link" : "nav-link"}
              onClick={() => handleLinkClick("/inicio")}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/eventos"
              className={activeLink === "/eventos" ? "active-link" : "nav-link"}
              onClick={() => handleLinkClick("/eventos")}
            >
              Eventos
            </Link>
          </li>
          <li>
            <Link
              to="/contactenos"
              className={activeLink === "/contactenos" ? "active-link" : "nav-link"}
              onClick={() => handleLinkClick("/contactenos")}
            >
              Contactenos
            </Link>
          </li>
          <li>
            <Link
              to="/servicios"
              className={activeLink === "/servicios" ? "active-link" : "nav-link"}
              onClick={() => handleLinkClick("/servicios")}
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              to="/nosotros"
              className={activeLink === "/nosotros" ? "active-link" : "nav-link"}
              onClick={() => handleLinkClick("/nosotros")}
            >
              Nosotros
            </Link>
          </li>
        </ul>

        <button
          className="button"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <img src={Hamburger}></img>
        </button>
      </nav>

      {activeLink === "/inicio" && <div><Inicio /></div>}
    </div>
  );
};

export default Navbar;

