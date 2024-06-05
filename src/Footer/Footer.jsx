import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="footer-content">
        <ul className="enlaces">
          <li>
            <Link to="/eventos">Eventos</Link>
          </li>

          <li>
            <Link to="/contactenos">Contactos</Link>
          </li>

          <li>
            <Link to="/servicios">Servicios</Link>
          </li>

          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
        </ul>

        <p className="text-footer">
          © 2024 Iglesia Familia Cristiana | 18644 Calzada del Cerro
        </p>
      </footer>
    </div>
  );
};

export default Footer;
