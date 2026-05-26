import React, { useState } from "react";
import "./Contactenos.css";

const Contactenos = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="contactenos">
      <div className="page-hero">
        <div className="page-hero-content">
          <h1>Contáctenos</h1>
          <p>Estamos aquí para escucharte</p>
        </div>
      </div>

      <section className="section-white">
        <div className="container">
          <div className="contacto-grid">
            {/* Info */}
            <div className="contacto-info">
              <div className="gold-line" style={{ margin: "0 0 24px" }} />
              <h2>Visítanos o escríbenos</h2>
              <p className="info-intro">
                Nos encantaría conocerte. Puedes visitarnos cualquier domingo o
                escribirnos con tus preguntas.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <strong>Dirección</strong>
                    <p>18644 Calzada del Cerro</p>
                    <p>La Habana, Cuba</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">🕐</span>
                  <div>
                    <strong>Horario de Cultos</strong>
                    <p>Domingo: 9:00am y 10:00am</p>
                    <p>Miércoles: 7:00pm</p>
                    <p>Viernes: 7:00pm</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">✝</span>
                  <div>
                    <strong>Iglesia Familia Cristiana</strong>
                    <p>Todos son bienvenidos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contacto-form-wrap">
              {enviado ? (
                <div className="form-success">
                  <span className="success-icon">✓</span>
                  <h3>¡Mensaje enviado!</h3>
                  <p>Gracias por escribirnos. Te responderemos pronto.</p>
                  <button
                    className="btn-primary"
                    onClick={() => setEnviado(false)}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form className="contacto-form" onSubmit={handleSubmit}>
                  <h3>Envíanos un mensaje</h3>

                  <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      placeholder="Tu nombre completo"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@correo.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={5}
                      placeholder="Escribe tu mensaje aquí..."
                      value={form.mensaje}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn-primary form-submit">
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactenos;
