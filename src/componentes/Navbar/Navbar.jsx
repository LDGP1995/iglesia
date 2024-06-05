import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "./menu.png";
import React, { useState, useEffect } from "react";
import Inicio from "./pages/Inicio/Inicio"; // Importa el componente Inicio


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/inicio");
  const location = useLocation();

  useEffect(() => {
    // Establecer la página de inicio como la activa por defecto
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };


  return (
    <div>
      <nav className="navbar">
        <Link to="/" className={`logo ${activeLink === "/" ? "active-link" : "nav-link"}`}>
          Familia Cristiana
        </Link>

        <ul className={menuOpen ? "open" : ""}>
          <li>
            <Link
              to="/"
              className={activeLink === "/" ? "active-link" : "nav-link"}
              // className={`nav-link ${activeLink === "/inicio" ? "active-link" : ""}`}
              onClick={() => handleLinkClick("/")}
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

    {activeLink === "/" && <Inicio />}
    </div>
  );
};

export default Navbar;

