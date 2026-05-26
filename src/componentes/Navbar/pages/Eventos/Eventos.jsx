import React from "react";
import { Link } from "react-router-dom";
import "./Eventos.css";

const eventos = [
  {
    fecha: "15 Jul",
    año: "2024",
    titulo: "Retiro Anual de Jóvenes",
    desc: "Un fin de semana de renovación espiritual, adoración y comunión para jóvenes de 15 a 30 años.",
    hora: "Viernes 6:00pm — Domingo 2:00pm",
    lugar: "Campamento Cristiano",
    tipo: "Jóvenes",
  },
  {
    fecha: "20 Ago",
    año: "2024",
    titulo: "Culto Especial de Adoración",
    desc: "Una noche extraordinaria de alabanza y adoración con músicos invitados de toda la ciudad.",
    hora: "Sábado 7:00pm",
    lugar: "Iglesia Familia Cristiana",
    tipo: "Culto",
  },
  {
    fecha: "14 Sep",
    año: "2024",
    titulo: "Conferencia de Familias",
    desc: "Talleres y charlas sobre el matrimonio, crianza de hijos y vida familiar desde la perspectiva bíblica.",
    hora: "Sábado 9:00am — 5:00pm",
    lugar: "Iglesia Familia Cristiana",
    tipo: "Familia",
  },
];

const Eventos = () => {
  return (
    <div className="eventos">
      <div className="page-hero">
        <div className="page-hero-content">
          <h1>Eventos</h1>
          <p>Próximas actividades de nuestra comunidad</p>
        </div>
      </div>

      <section className="section-cream">
        <div className="container">
          <div className="gold-line" />
          <h2 className="section-title">Próximos Eventos</h2>
          <p className="section-sub">Únete a nosotros en estas actividades especiales</p>
          <div className="eventos-grid">
            {eventos.map((e) => (
              <article className="evento-card" key={e.titulo}>
                <div className="evento-fecha">
                  <span className="fecha-dia">{e.fecha}</span>
                  <span className="fecha-año">{e.año}</span>
                </div>
                <div className="evento-body">
                  <span className="evento-tipo">{e.tipo}</span>
                  <h3>{e.titulo}</h3>
                  <p className="evento-desc">{e.desc}</p>
                  <div className="evento-meta">
                    <span>🕐 {e.hora}</span>
                    <span>📍 {e.lugar}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-navy eventos-cta">
        <div className="container">
          <h2 className="section-title">¿Tienes alguna pregunta sobre un evento?</h2>
          <p className="section-sub" style={{ color: "rgba(255,255,255,0.6)" }}>
            Contáctanos y con gusto te informamos
          </p>
          <Link to="/contactenos" className="btn-primary">
            Contáctenos
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Eventos;
