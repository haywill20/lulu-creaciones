import React, { useState } from "react";
import axios from "axios";
const URI = "http://localhost:8000/createsuscripciones/";

const Footer = () => {
  const [correo, setCorreo] = useState("");
  const [showModal, setShowModal] = useState(false);

  const suscripcion = async (e) => {
    e.preventDefault();

    await axios.post(URI, {
      correo: correo,
    });

    //Mostrar la ventana modal
    setShowModal(true);

    //limpiar el campo de suscripcino
    setCorreo("");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <footer id="footer">
        <div className="footer-top text-left">
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                <div className="companyinfo">
                  <h2>Lúlu</h2>
                  <p>Creaciones</p>
                </div>
              </div>

              <div className="col-sm-3 pull-right">
                <div className="address">
                  <img src="images/home/map-nicaragua.png" alt="" />
                  <p>
                    Región Autónoma de la Costa Caribe Norte - 14°02'21.1"N
                    83°22'59.1"W
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-widget text-left">
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                <div className="single-widget">
                  <h2>Service</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li>
                      <a href="404.html">Ayuda</a>
                    </li>
                    <li>
                      <a href="404.html">Contáctanos</a>
                    </li>
                    <li>
                      <a href="404.html">FAQ’s</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-widget">
                  <h2>Tienda</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li>
                      <a href="#">Collares</a>
                    </li>
                    <li>
                      <a href="#">Pulseras</a>
                    </li>
                    <li>
                      <a href="#">LLaveros</a>
                    </li>
                    <li>
                      <a href="#">Aretes</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-widget">
                  <h2>Políticas</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li>
                      <a href="#">Condiciones de Uso</a>
                    </li>
                    <li>
                      <a href="#">Políticas de privacidad</a>
                    </li>
                    <li>
                      <a href="#">Politicas de reembolso</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-widget">
                  <h2>Acerca de Lúlu Creaciones</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li>
                      <a href="#">Información de la empresa</a>
                    </li>
                    <li>
                      <a href="#">Ubicación de la tienda</a>
                    </li>
                    <li>
                      <a href="#">Derechos de autor</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3 col-sm-offset-1">
                <div className="single-widget">
                  <h2>Suscríbete</h2>
                  <form onSubmit={suscripcion} className="searchform">
                    <input
                      type="text"
                      placeholder="Su dirección de correo"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                      required
                    />
                    <button type="submit" className="btn btn-default">
                      <i className="fa-regular fa-circle-right"></i>{" "}
                    </button>
                    <p>
                      Obtenga actualizaciones de nuestros <br />
                      productos y articulos de colección.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <p className="pull-left">
                Copyright © 2019 Lúlu creaciones. Todos los derechos reservados.
              </p>
              <p className="pull-right">
                <a
                  href="https://www.facebook.com/people/L%C3%BAlu-Creaciones/100083575566640/?mibextid=ZbWKwL"
                  target={"_blank"}
                >
                  Visita nuestra pagina de facebook{" "}
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Ventana modal */}
        <div
          className={`modal fade ${showModal ? "in" : ""}`}
          id="successModal"
          role="dialog"
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" onClick={closeModal}>
                  &times;
                </button>
                <h4 className="modal-title">¡Gracias por suscribirte!</h4>
              </div>
              <div className="modal-body">
                <p>
                  ¡Bienvenido y gracias por suscribirte a Lúlu Creaciones!
                  Estamos emocionados de tenerte como parte de nuestra
                  comunidad. Tu apoyo es fundamental y estamos ansiosos por
                  compartir contenido, actualizaciones y experiencias increíbles
                  contigo. ¡Gracias por confiar en Lúlu creaciones y unirte a
                  este emocionante viaje!{" "}
                  <span>
                    <i className="fa-regular fa-thumbs-up"></i>
                  </span>
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={closeModal}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
