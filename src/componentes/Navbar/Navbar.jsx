import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname === path;

  const links = [
    { to: "/", label: "Inicio" },
    { to: "/eventos", label: "Eventos" },
    { to: "/servicios", label: "Servicios" },
    { to: "/nosotros", label: "Nosotros" },
    { to: "/contactenos", label: "Contáctenos" },
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <Link to="/" className="logo">
          <span className="logo-icon">✝</span>
          <span className="logo-text">Familia Cristiana</span>
        </Link>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`nav-link${isActive(to) ? " active" : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>

      {menuOpen && (
        <div className="menu-backdrop" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
