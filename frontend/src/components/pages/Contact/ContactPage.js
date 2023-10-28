import React, { useState } from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import TopBar from "../../common/TopBar";
import axios from "axios";

const URI = "http://localhost:8000/contactocreate/";

const ContactPage = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [tema, setTema] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [showModal, setShowModal] = useState(false);

  const contacto = async (e) => {
    e.preventDefault();

    await axios.post(URI, {
      nombre: nombre,
      correo: correo,
      tema: tema,
      mensaje: mensaje,
    });

    // Mostrar la ventana modal
    setShowModal(true);

    // Limpiar los campos del formulario
    setNombre("");
    setCorreo("");
    setTema("");
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
        {/* Resto de tu código */}
        <form
          id="main-contact-form"
          className="contact-form row"
          name="contact-form"
          onSubmit={contacto}
        >
          <div className="form-group col-md-6">
            <input
              type="text"
              name="name"
              className="form-control"
              required="required"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="email"
              name="email"
              className="form-control"
              required="required"
              placeholder="Correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>
          <div className="form-group col-md-12">
            <input
              type="text"
              name="subject"
              className="form-control"
              required="required"
              placeholder="Titulo"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
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
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
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
              <h4 className="modal-title">¡Enviado exitosamente!</h4>
            </div>
            <div className="modal-body">
              <p>
                ¡Gracias por ponerte en contacto con nosotros!.{" "}
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

      <Footer />
    </>
  );
};

export default ContactPage;
