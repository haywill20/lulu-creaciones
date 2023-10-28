import React, { useEffect, useState } from "react";
import Footer from "../../common/Footer";
import Menu from "../../common/Menu";
import axios from "axios";

const URIcontactos = "http://localhost:8000/contactos/";
function Contactos() {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    getContactos();
  }, []);

  // Procedimiento para mostrar todos los productos
  const getContactos = async () => {
    try {
      const res = await axios.get(URIcontactos);
      setContactos(res.data);
    } catch (error) {
      console.error("Error al obtener los Contactos:", error);
    }
  };

  return (
    <>
      <Menu />

      <main>
        <div className="container">
          {/* Title and Top Buttons Start */}
          <div className="page-title-container">
            <div className="row g-0">
              {/* Title Start */}
              <div className="col-auto mb-3 mb-md-0 me-auto">
                <div className="w-auto sw-md-30">
                  <h1 className="mb-0 pb-0 display-4" id="title">
                    Contactos
                  </h1>
                </div>
              </div>
              {/* Title End */}
            </div>
          </div>
          {/* Title and Top Buttons End */}
          {/* Settings List Start */}
          <div className="row row-cols-1 row-cols-md-2 g-2">
            <div className="col">
              <a href="#" className="card hover-border-primary h-100">
                {contactos.map((contacto) => (
                  <div className="card-body row g-0" key={contacto.id}>
                    <div className="col-auto">
                      <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                        <i class="fa-regular fa-user text-primary"></i>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex flex-column ps-card justify-content-start">
                        <div className="d-flex flex-column justify-content-center mb-2">
                          <div className="heading text-primary mb-0">
                            Nombre: {contacto.nombre}
                          </div>
                          <h5 className=" text-primary">
                            correo: {contacto.correo}
                          </h5>
                        </div>
                        <h5 className="text-primary">
                          Asunto: {contacto.tema}
                        </h5>
                        <div className="text-alternate">{contacto.mensaje}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </a>
            </div>
          </div>
          {/* Settings List End */}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contactos;
