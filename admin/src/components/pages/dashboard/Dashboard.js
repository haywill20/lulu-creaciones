import React, { useEffect, useState } from "react";
import Footer from "../../common/Footer";
import Menu from "../../common/Menu";
import axios from "axios";
const URIproductos = "http://localhost:8000/productos/";
const URIsliders = "http://localhost:8000/sliders/";
const URIcontactos = "http://localhost:8000/contactos/";
const URIsuscripciones = "http://localhost:8000/suscripciones/";
const URIayudas = "http://localhost:8000/ayudas/";

const productImagen = require.context(
  "../../../../../backend/uploads/productos",
  true
);

function Dashboard() {
  const [productCount, setProductCount] = useState(0);
  const [productos, setProductos] = useState([]);
  const [slidersCount, setSlidersCount] = useState(0);
  const [contactosCount, setContactosCount] = useState(0);
  const [suscripcionesCount, setSuscripcionesCount] = useState(0);
  const [ayudasCount, setayudasCount] = useState(0);

  useEffect(() => {
    // Realiza una solicitud GET para obtener la lista de productos
    axios
      .get(URIproductos)
      .then((response) => {
        // Actualiza el estado con la cantidad de productos
        setProductCount(response.data.length);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de productos", error);
      });

    axios
      .get(URIsliders)
      .then((response) => {
        // Actualiza el estado con la cantidad de sliders
        setSlidersCount(response.data.length);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de sliders", error);
      });

    axios
      .get(URIcontactos)
      .then((response) => {
        // Actualiza el estado con la cantidad de la cantidad de contactos
        setContactosCount(response.data.length);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de contactos", error);
      });

    axios
      .get(URIsuscripciones)
      .then((response) => {
        setSuscripcionesCount(response.data.length);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de suscripciones", error);
      });
    axios
      .get(URIayudas)
      .then((response) => {
        setayudasCount(response.data.length);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de suscripciones", error);
      });
  }, []);

  useEffect(() => {
    getProductos();
  }, []);

  //Metodo para mostrar todos los productos
  const getProductos = async () => {
    try {
      const res = await axios.get(URIproductos);
      setProductos(res.data);
    } catch (error) {
      console.error("Error al obtener los Productos:", error);
    }
  };
  return (
    <>
      <Menu />
      <main>
        <div className="container">
          {/* Title and Top Buttons Start */}
          <div className="page-title-container">
            <div className="row">
              {/* Title Start */}
              <div className="col-12 col-md-7">
                <a className="muted-link pb-2 d-inline-block hidden" href="#">
                  <span className="align-middle lh-1 text-small">&nbsp;</span>
                </a>
                <h1 className="mb-0 pb-0 display-4" id="title">
                  Bienvenido, Deborah!
                </h1>
              </div>
              {/* Title End */}
            </div>
          </div>
          {/* Title and Top Buttons End */}
          {/* Stats Start */}
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <div
                  className="dropdown-as-select me-3"
                  data-setactive="false"
                  data-childselector="span"
                >
                  <a
                    className="pe-0 pt-0 align-top lh-1 dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="small-title" />
                  </a>
                  <div className="dropdown-menu font-standard">
                    <div className="nav flex-column" role="tablist">
                      <a
                        className="active dropdown-item text-medium"
                        href="#"
                        aria-selected="true"
                        role="tab"
                      >
                        Hoy
                      </a>
                      <a
                        className="dropdown-item text-medium"
                        href="#"
                        aria-selected="false"
                        role="tab"
                      >
                        Semanalmente
                      </a>
                      <a
                        className="dropdown-item text-medium"
                        href="#"
                        aria-selected="false"
                        role="tab"
                      >
                        Mensualmente
                      </a>
                      <a
                        className="dropdown-item text-medium"
                        href="#"
                        aria-selected="false"
                        role="tab"
                      >
                        Anualmente
                      </a>
                    </div>
                  </div>
                </div>
                <h2 className="small-title">Estadisticas</h2>
              </div>
              <div className="mb-5">
                <div className="row g-2">
                  <div className="col-6 col-md-4 col-lg-2">
                    <div className="card h-100 hover-scale-up cursor-pointer">
                      <div className="card-body d-flex flex-column align-items-center">
                        <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                          <i className="fa-solid fa-boxes-stacked text-primary"></i>
                        </div>
                        <div className="mb-1 d-flex align-items-center text-alternate text-small lh-1-25">
                          PRODUCTOS
                        </div>
                        <div className="text-primary cta-4">{productCount}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <div className="card h-100 hover-scale-up cursor-pointer">
                      <div className="card-body d-flex flex-column align-items-center">
                        <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                          <i className="icon fa-solid fa-tags text-primary"></i>
                        </div>
                        <div className="mb-1 d-flex align-items-center text-alternate text-small lh-1-25">
                          SLIDERS
                        </div>
                        <div className="text-primary cta-4">{slidersCount}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <div className="card h-100 hover-scale-up cursor-pointer">
                      <div className="card-body d-flex flex-column align-items-center">
                        <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                          <i className="fa-regular fa-address-book text-primary"></i>
                        </div>
                        <div className="mb-1 d-flex align-items-center text-alternate text-small lh-1-25">
                          CONTACTOS
                        </div>
                        <div className="text-primary cta-4">
                          {contactosCount}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <div className="card h-100 hover-scale-up cursor-pointer">
                      <div className="card-body d-flex flex-column align-items-center">
                        <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                          <i className="fa-solid fa-paper-plane text-primary"></i>
                        </div>
                        <div className="mb-1 d-flex align-items-center text-alternate text-small lh-1-25">
                          SUSCRIPCIONES
                        </div>
                        <div className="text-primary cta-4">
                          {suscripcionesCount}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <div className="card h-100 hover-scale-up cursor-pointer">
                      <div className="card-body d-flex flex-column align-items-center">
                        <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                          <i className="fa-regular fa-circle-question text-primary"></i>
                        </div>
                        <div className="mb-1 d-flex align-items-center text-alternate text-small lh-1-25">
                          AYUDAS
                        </div>
                        <div className="text-primary cta-4">{ayudasCount}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gx-4 gy-5">
            {/* Top Selling Items Start */}
            <div className="col-xl-6 mb-5">
              <h2 className="small-title">Productos mejor valorados</h2>
              <div className="scroll-out mb-n2">
                <div className="scroll-by-count" data-count={4}>
                  {productos
                    .filter((producto) => producto.valoracion === 5)
                    .map((producto) => (
                      <div className="card mb-2" key={producto.id}>
                        <div className="row g-0 sh-14 sh-md-10">
                          <div className="col-auto">
                            <a href="Products.Detail.html">
                              <img
                                src={productImagen(`./${producto.imagen}`)}
                                alt="alternate text"
                                className="card-img card-img-horizontal sw-11"
                              />
                            </a>
                          </div>
                          <div className="col">
                            <div className="card-body pt-0 pb-0 h-100">
                              <div className="row g-0 h-100 align-content-center">
                                <div className="col-12 col-md-9 d-flex align-items-center mb-2 mb-md-0">
                                  <a href="Products.Detail.html">
                                    {producto.nombre}
                                  </a>
                                </div>
                                <div className="col-12 col-md-3 d-flex align-items-center justify-content-md-end text-muted text-medium">
                                  {producto.valoracion} Estrellas
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            {/* Top Selling Items End */}
            {/* Top Search Terms Start */}
            <div className="col-xl-6 mb-5">
              <h2 className="small-title">Productos dispobibles</h2>
              <div className="card sh-35 h-xl-100-card">
                <div className="card-body scroll-out h-100">
                  <div className="scroll h-100">
                    {productos.map((producto) => (
                      <div
                        className="d-flex flex-row align-items-center justify-content-between mb-2"
                        key={producto.id}
                      >
                        <div className="d-flex flex-column">
                          <div>
                            {producto.id} {producto.nombre}
                          </div>
                        </div>
                        <div className="d-flex">
                          <span className="badge bg-outline-secondary">
                            {producto.cantidad}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Top Search Terms End */}
          </div>
          <div className="row">
            {/* Tips Start */}
            <div className="col-12 col-xxl-auto mb-5">
              <h2 className="small-title">Tips</h2>
              <div className="card h-100-card sw-xxl-40">
                <div className="card-body row g-0">
                  <div className="col-12 d-flex flex-column justify-content-between align-items-start">
                    <div>
                      <div className="cta-3">
                        ¿Deseas agregar más productos?
                      </div>
                      <div className="mb-3 cta-3 text-primary">
                        ¡Agregar Nuevo!
                      </div>
                      <div className="text-muted mb-4">
                        Agregar nuevos productos te permite tener más variedad
                        de elementos para tus clientes.
                        <br />
                        ¡Manten tu stock actualizado!.
                      </div>
                    </div>
                    <a
                      href="/productAdd"
                      className="btn btn-icon btn-icon-start btn-outline-primary stretched-link"
                    >
                      <i data-acorn-icon="plus" />
                      <span>Add Products</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Tips End */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Dashboard;
