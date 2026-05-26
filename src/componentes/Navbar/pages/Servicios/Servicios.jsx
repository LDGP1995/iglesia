import React from "react";
import "./Servicios.css";

const servicios = [
  {
    dia: "Domingo",
    hora: "9:00am",
    nombre: "Escuela Dominical",
    desc: "Estudio bíblico en grupos por edades para toda la familia. Un espacio de aprendizaje, preguntas y crecimiento en la fe.",
    icono: "📖",
  },
  {
    dia: "Domingo",
    hora: "10:00am",
    nombre: "Culto Principal",
    desc: "Nuestra reunión central de adoración, con alabanza, predicación de la Palabra y comunión fraterna.",
    icono: "✝",
  },
  {
    dia: "Miércoles",
    hora: "7:00pm",
    nombre: "Estudio Bíblico",
    desc: "Un encuentro más íntimo para profundizar en las Escrituras, orar juntos y fortalecer nuestra fe en comunidad.",
    icono: "🕯",
  },
  {
    dia: "Viernes",
    hora: "7:00pm",
    nombre: "Noche de Jóvenes",
    desc: "Un espacio dinámico diseñado para jóvenes, con actividades, música, enseñanza y compañerismo.",
    icono: "🔥",
  },
];

const Servicios = () => {
  return (
    <div className="servicios">
      <div className="page-hero">
        <div className="page-hero-content">
          <h1>Servicios</h1>
          <p>Nuestros cultos y actividades semanales</p>
        </div>
      </div>

      <section className="section-white">
        <div className="container">
          <div className="gold-line" />
          <h2 className="section-title">Reuniones Semanales</h2>
          <p className="section-sub">
            Te invitamos a ser parte de nuestra comunidad
          </p>
          <div className="servicios-grid">
            {servicios.map((s) => (
              <div className="servicio-card" key={s.nombre}>
                <div className="servicio-header">
                  <span className="servicio-icono">{s.icono}</span>
                  <div className="servicio-tiempo">
                    <span className="servicio-dia">{s.dia}</span>
                    <span className="servicio-hora">{s.hora}</span>
                  </div>
                </div>
                <h3>{s.nombre}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-navy servicios-verse">
        <div className="container">
          <div className="verse-block">
            <span className="verse-mark">"</span>
            <blockquote>
              No dejando de congregarnos, como algunos tienen por costumbre, sino
              exhortándonos; y tanto más, cuanto veis que aquel día se acerca.
            </blockquote>
            <cite>— Hebreos 10:25</cite>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
