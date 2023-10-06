import React, { useState } from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import TopBar from "../../common/TopBar";
import axios from "axios";

const URI = "http://localhost:8000/ayudas/";

const HelpPage = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [showModal, setShowModal] = useState(false);

  const ayuda = async (e) => {
    e.preventDefault();

    await axios.post(URI, {
      nombre: nombre,
      correo: correo,
      mensaje: mensaje,
    });

    // Mostrar la ventana modal
    setShowModal(true);

    // Limpiar los campos del formulario
    setNombre("");
    setCorreo("");
    setMensaje("");
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <TopBar />
      <Header />
      <div id="contact-page" className="container">
        <div className="bg">
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <h2 className="title text-center">Ayuda</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <div className="contact-form">
                <h2 className="title text-center">¿En que podemos ayudarte?</h2>

                <form
                  id="main-contact-form"
                  className="contact-form row"
                  name="contact-form"
                  onSubmit={ayuda}
                >
                  <div className="form-group col-md-12">
                    <div className="col-sm-6">
                      <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        required="required"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        name="correo"
                        className="form-control"
                        required="required"
                        placeholder="correo"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-sm-12">
                    {" "}
                    <div className="form-group col-md-12">
                      <textarea
                        name="message"
                        id="message"
                        required="required"
                        className="form-control"
                        rows="8"
                        placeholder="Escriba su mensaje aqui"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                      ></textarea>
                    </div>
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
              <div
                className={`modal fade ${showModal ? "in" : ""}`}
                id="successModal"
                role="dialog"
                style={{ display: showModal ? "block" : "none" }}
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        onClick={closeModal}
                      >
                        &times;
                      </button>
                      <h4 className="modal-title">¡Enviado exitosamente!</h4>
                    </div>
                    <div className="modal-body">
                      <p>
                        ¡Gracias por ponerte en con el soporte al cliente de
                        Lúlu creaciones!
                        <br />
                        Pronto nos podremos en contacto contigo para darte
                        soporte{" "}
                        <span>
                          <i class="fa-regular fa-thumbs-up"></i>
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default HelpPage;
