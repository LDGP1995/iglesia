import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Familia Cristiana
      </Link>
      <ul>
        <li>
          <Link to="/eventos">Eventos</Link>
        </li>
        <li>
          <Link to="/contactenos">Contactenos</Link>
        </li>
        <li>
          <Link to="/servicios">Servicios</Link>
        </li>
        <li>
          <Link to="/nosotros">Nosotros</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
