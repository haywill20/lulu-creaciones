import React, { useEffect, useState } from "react";
import Menu from "../../common/Menu";
import Footer from "../../common/Footer";
import axios from "axios";

const URIayudas = "http://localhost:8000/ayudas/";

function Ayudas() {
  const [ayudas, setAyudas] = useState([]);

  useEffect(() => {
    getAyudas();
  }, []);

  // Procedimiento para mostrar todas los ayudas
  const getAyudas = async () => {
    try {
      const res = await axios.get(URIayudas);
      setAyudas(res.data);
    } catch (error) {
      console.error("Error al obtener las ayudas:", error);
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
                    Ayudas
                  </h1>
                </div>
              </div>
              {/* Title End */}
            </div>
          </div>
          {/* Title and Top Buttons End */}
          {/* Courier Services Start */}
          <div className="mb-5">
            <h2 className="small-title">Preguntas y consultas de clientes</h2>

            {ayudas.map((ayuda) => (
              <div className="card mb-2" key={ayuda.id}>
                <div className="row g-0 card-body">
                  <div className="col-auto">
                    <div className="sw-5 sh-5 mb-3 d-inline-block bg-primary d-flex justify-content-center align-items-center rounded-xl mx-auto">
                      <div className="text-white">
                        {" "}
                        <i class="fa-regular fa-user"></i>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="ps-4">
                      <div className="row mb-1">
                        <div className="col">
                          <div className="heading text-primary mb-1">
                            {ayuda.nombre}
                          </div>
                          <div className="mb-3">{ayuda.correo}</div>
                        </div>
                        <div className="col-auto">
                          <button
                            className="btn btn-sm btn-icon btn-icon btn-icon-only btn-outline-primary"
                            type="button"
                          >
                            <i class="fa-solid fa-paper-plane"></i>
                          </button>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="text-small text-muted">MENSAJE</div>
                        <div className="text-alternate">{ayuda.mensaje}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Ayudas;
