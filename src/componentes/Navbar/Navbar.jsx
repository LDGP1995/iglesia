import "./Navbar.css";
import { Link } from "react-router-dom";
import Hamburger from "./menu.png";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="logo">
          Familia Cristiana
        </Link>

        <ul className={menuOpen ? "open" : ""}>
          <li>
            <Link to="/eventos" className="nav-menu-link">
              Eventos
            </Link>
          </li>
          <li>
            <Link to="/contactenos" className="nav-menu-link">
              Contactenos
            </Link>
          </li>
          <li>
            <Link to="/servicios" className="nav-menu-link">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/nosotros" className="nav-menu-link">
              Nosotros
            </Link>
          </li>
        </ul>

        <button className="button" onClick={()=>{
          setMenuOpen(!menuOpen)
        }}>
          <img src={Hamburger}></img>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
