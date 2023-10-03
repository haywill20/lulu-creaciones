import React from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import TopBar from "../../common/TopBar";

const ContactPage = () => {
  return (
    <>
      <TopBar />
      <Header />
      <div id="contact-page" className="container">
        <div className="bg">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="title text-center">Contacto </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8">
              <div className="contact-form">
                <h2 className="title text-center">Escribenos tu consulta</h2>

                <form
                  id="main-contact-form"
                  className="contact-form row"
                  name="contact-form"
                  method="post"
                >
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required="required"
                      placeholder="Nombre"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      required="required"
                      placeholder="Correo"
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      required="required"
                      placeholder="Titulo"
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <textarea
                      name="message"
                      id="message"
                      required="required"
                      className="form-control"
                      rows="8"
                      placeholder="Escriba su mensaje aqui"
                    ></textarea>
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="submit"
                      name="submit"
                      className="btn btn-primary pull-right"
                      value="Enviar"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="contact-info text-left">
                <h2 className="title text-center">Información de contacto</h2>
                <address>
                  <p>Lúlu Creaciones.</p>
                  <p>Región Autónoma de la Costa Caribe Norte</p>
                  <p>Nicaragua</p>
                  <p>Tel: +505 8402-4316</p>
                  <p>Correo: lulucreaciones46@gmail.com</p>
                </address>
                <div className="social-networks">
                  <h2 className="title text-center">Redes Sociales</h2>
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/people/L%C3%BAlu-Creaciones/100083575566640/?mibextid=ZbWKwL"
                        target="_blank"
                      >
                        <i class="fa-brands fa-facebook-f"></i>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i class="fa-brands fa-instagram"></i>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-brands fa-youtube"></i>{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ContactPage;
