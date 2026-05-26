import React from "react";
import "./Nosotros.css";

const valores = [
  "Fe genuina en Dios",
  "Amor incondicional",
  "Comunidad familiar",
  "Servicio al prójimo",
  "Integridad y honestidad",
  "Crecimiento espiritual",
];

const Nosotros = () => {
  return (
    <div className="nosotros">
      <div className="page-hero">
        <div className="page-hero-content">
          <h1>Nosotros</h1>
          <p>Conoce nuestra historia y quiénes somos</p>
        </div>
      </div>

      {/* Historia */}
      <section className="section-white">
        <div className="container">
          <div className="gold-line" />
          <h2 className="section-title">Nuestra Historia</h2>
          <p className="text-muted-body">
            La Iglesia Familia Cristiana nació del deseo de crear una comunidad
            donde cada persona pudiera encontrar fe, esperanza y amor. Ubicada en
            el corazón del Cerro, La Habana, nuestra iglesia ha sido un punto de
            encuentro para familias y jóvenes que buscan crecer espiritualmente y
            vivir en comunidad con otros creyentes.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="section-cream">
        <div className="container">
          <h2 className="section-title">Misión y Visión</h2>
          <p className="section-sub">El propósito que nos mueve cada día</p>
          <div className="mv-grid">
            <div className="mv-card">
              <span className="mv-icon">◎</span>
              <h3>Misión</h3>
              <p>
                Predicar el Evangelio de Jesucristo, discipular a los creyentes y
                servir a nuestra comunidad con amor y compasión genuina.
              </p>
            </div>
            <div className="mv-card">
              <span className="mv-icon">◈</span>
              <h3>Visión</h3>
              <p>
                Ser una iglesia que transforme vidas y comunidades a través del
                poder de la Palabra de Dios y la unidad del Espíritu Santo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-navy">
        <div className="container">
          <h2 className="section-title">Nuestros Valores</h2>
          <p className="section-sub" style={{ color: "rgba(255,255,255,0.6)" }}>
            Los principios que definen nuestra cultura
          </p>
          <div className="values-list">
            {valores.map((v) => (
              <div className="value-item" key={v}>
                <span className="value-check">✓</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
