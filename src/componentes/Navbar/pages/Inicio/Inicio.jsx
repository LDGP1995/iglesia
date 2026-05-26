import React from "react";
import { Link } from "react-router-dom";
import ImgHero from "./Cruz.jpg";
import "./Inicio.css";

const valores = [
  {
    icono: "✝",
    titulo: "Fe",
    texto:
      "Creemos en la Biblia como la Palabra viva de Dios y en Jesucristo como nuestro Señor y Salvador.",
  },
  {
    icono: "♡",
    titulo: "Comunidad",
    texto:
      "Somos una familia unida por el amor de Cristo, donde cada persona es bienvenida y profundamente valorada.",
  },
  {
    icono: "◎",
    titulo: "Misión",
    texto:
      "Llevar el mensaje de esperanza y restauración a nuestra comunidad y más allá de nuestras fronteras.",
  },
];

const horarios = [
  {
    dia: "Domingo",
    servicios: ["9:00am — Escuela Dominical", "10:00am — Culto Principal"],
  },
  { dia: "Miércoles", servicios: ["7:00pm — Estudio Bíblico"] },
  { dia: "Viernes", servicios: ["7:00pm — Noche de Jóvenes"] },
];

const Inicio = () => {
  return (
    <div className="inicio">
      {/* ── Hero ── */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${ImgHero})` }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-verse">« Juan 3:16 »</p>
          <h1 className="hero-title">Iglesia Familia Cristiana</h1>
          <p className="hero-subtitle">
            Un lugar donde el amor de Dios transforma vidas
          </p>
          <div className="hero-actions">
            <a href="#horarios" className="btn-primary">
              Ver Horarios
            </a>
            <Link to="/nosotros" className="btn-outline">
              Conócenos
            </Link>
          </div>
        </div>
        <div className="hero-scroll">↓</div>
      </section>

      {/* ── Bienvenida ── */}
      <section className="section-white bienvenida">
        <div className="container">
          <div className="gold-line" />
          <h2 className="section-title">Bienvenidos a Casa</h2>
          <p className="text-muted-body">
            En Familia Cristiana encontrarás un lugar de paz, comunidad y
            crecimiento espiritual. Nos reunimos cada semana para adorar a Dios,
            estudiar Su Palabra y crecer juntos como familia.
          </p>
        </div>
      </section>

      {/* ── Valores ── */}
      <section className="section-cream">
        <div className="container">
          <h2 className="section-title">Nuestra Fe</h2>
          <p className="section-sub">Los pilares que nos guían como comunidad</p>
          <div className="cards-grid">
            {valores.map((v) => (
              <div className="card" key={v.titulo}>
                <span className="card-icon">{v.icono}</span>
                <h3>{v.titulo}</h3>
                <p>{v.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Horarios ── */}
      <section className="section-navy" id="horarios">
        <div className="container">
          <h2 className="section-title">Horarios de Culto</h2>
          <p className="section-sub" style={{ color: "rgba(255,255,255,0.6)" }}>
            Te esperamos cada semana. ¡Ven como eres!
          </p>
          <div className="horarios-grid">
            {horarios.map((h) => (
              <div className="horario-card" key={h.dia}>
                <h3 className="horario-dia">{h.dia}</h3>
                <ul>
                  {h.servicios.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <h2>¿Listo para conocernos?</h2>
          <p>Visítanos en 18644 Calzada del Cerro, La Habana.</p>
          <Link to="/contactenos" className="btn-cta">
            Contáctenos
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
