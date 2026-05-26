import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-cross">✝</span>
            <span>Familia Cristiana</span>
          </div>
          <p className="footer-desc">
            Una comunidad de fe, amor y esperanza en el corazón de La Habana.
            Todos son bienvenidos.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navegación</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/eventos">Eventos</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contactenos">Contáctenos</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Horarios</h4>
          <ul className="plain-list">
            <li>Dom · Escuela Dominical: 9:00am</li>
            <li>Dom · Culto Principal: 10:00am</li>
            <li>Mié · Estudio Bíblico: 7:00pm</li>
            <li>Vie · Noche de Jóvenes: 7:00pm</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Dirección</h4>
          <address>
            <p>18644 Calzada del Cerro</p>
            <p>La Habana, Cuba</p>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Iglesia Familia Cristiana · Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
