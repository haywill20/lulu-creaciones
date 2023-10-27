import React, { useEffect, useState } from "react";
import Footer from "../../common/Footer";
import Menu from "../../common/Menu";
import axios from "axios";

const URI = "http://localhost:8000/productos/";
const productImagen = require.context(
  "../../../../../backend/uploads/productos",
  true
);

function Products() {
  const [productos, setProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    getProductos();
  }, []);

  // Procedimiento para mostrar todos los productos
  const getProductos = async () => {
    try {
      const res = await axios.get(URI);
      setProductos(res.data);
    } catch (error) {
      console.error("Error al obtener los Productos:", error);
    }
  };

  // Calcula los productos a mostrar en la página actual
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = productos.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Cambia a la siguiente página
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Menu />{" "}
      <main>
        <div className="container">
          {/* Title and Top Buttons Start */}
          <div className="page-title-container">
            <div className="row g-0">
              {/* Title Start */}
              <div className="col-auto mb-3 mb-md-0 me-auto">
                <div className="w-auto sw-md-30">
                  <h1 className="mb-0 pb-0 display-4" id="title">
                    Lista de productos
                  </h1>
                </div>
              </div>
              {/* Title End */}
              {/* Top Buttons Start */}
              <div className="w-100 d-md-none" />
              <div className="col-12 col-sm-6 col-md-auto d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
                <a
                  href="/productAdd"
                  type="button"
                  className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto"
                >
                  <i data-acorn-icon="plus" />
                  <span>Añadir Producto</span>
                </a>
                <div className="dropdown d-inline-block d-lg-none">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-icon btn-icon-only ms-1"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i data-acorn-icon="sort" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end custom-sort">
                    <a className="dropdown-item sort" data-sort="name" href="#">
                      Nombre
                    </a>
                    <a
                      className="dropdown-item sort"
                      data-sort="email"
                      href="#"
                    >
                      Estado
                    </a>
                    <a
                      className="dropdown-item sort"
                      data-sort="phone"
                      href="#"
                    >
                      Precio
                    </a>
                    <a
                      className="dropdown-item sort"
                      data-sort="group"
                      href="#"
                    >
                      Disponibilidad
                    </a>
                  </div>
                </div>
              </div>
              {/* Top Buttons End */}
            </div>
          </div>
          {/* Title and Top Buttons End */}
          {/* Controls Start */}
          <div className="row mb-2">
            {/* Search Start */}
            <div className="col-sm-12 col-md-5 col-lg-3 col-xxl-2 mb-1">
              <div className="d-inline-block float-md-start me-1 mb-1 search-input-container w-100 shadow bg-foreground">
                <input className="form-control" placeholder="Search" />
                <span className="search-magnifier-icon">
                  <i data-acorn-icon="search" />
                </span>
                <span className="search-delete-icon d-none">
                  <i data-acorn-icon="close" />
                </span>
              </div>
            </div>
            {/* Search End */}
            <div className="col-sm-12 col-md-7 col-lg-9 col-xxl-10 text-end mb-1">
              <div className="d-inline-block">
                {/* Print Button Start */}
                <button
                  className="btn btn-icon btn-icon-only btn-foreground-alternate shadow"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-delay={0}
                  title="Print"
                  type="button"
                >
                  <i data-acorn-icon="print" />
                </button>
                {/* Print Button End */}
                {/* Export Dropdown Start */}
                <div className="d-inline-block">
                  <button
                    className="btn p-0"
                    data-bs-toggle="dropdown"
                    type="button"
                    data-bs-offset="0,3"
                  >
                    <span
                      className="btn btn-icon btn-icon-only btn-foreground-alternate shadow dropdown"
                      data-bs-delay={0}
                      data-bs-placement="top"
                      data-bs-toggle="tooltip"
                      title="Export"
                    >
                      <i data-acorn-icon="download" />
                    </span>
                  </button>
                  <div className="dropdown-menu shadow dropdown-menu-end">
                    <button className="dropdown-item export-copy" type="button">
                      Copy
                    </button>
                    <button
                      className="dropdown-item export-excel"
                      type="button"
                    >
                      Excel
                    </button>
                    <button className="dropdown-item export-cvs" type="button">
                      Cvs
                    </button>
                  </div>
                </div>
                {/* Export Dropdown End */}
                {/* Length Start */}
                <div
                  className="dropdown-as-select d-inline-block"
                  data-childselector="span"
                >
                  <button
                    className="btn p-0 shadow"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-offset="0,3"
                  >
                    <span
                      className="btn btn-foreground-alternate dropdown-toggle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-delay={0}
                      title="Item Count"
                    >
                      10 Items
                    </span>
                  </button>
                  <div className="dropdown-menu shadow dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      5 Items
                    </a>
                    <a className="dropdown-item active" href="#">
                      10 Items
                    </a>
                    <a className="dropdown-item" href="#">
                      20 Items
                    </a>
                  </div>
                </div>
                {/* Length End */}
              </div>
            </div>
          </div>
          {/* Controls End */}
          <div className="row g-0">
            <div className="col-12 mb-5">
              {/* List Items Start */}
              <div id="checkboxTable">
                <div className="mb-4 mb-lg-3 bg-transparent no-shadow d-none d-lg-block">
                  <div className="row g-0">
                    <div className="col-auto sw-11 d-none d-lg-flex" />
                    <div className="col">
                      <div className="ps-5 pe-4 h-100">
                        <div className="row g-0 h-100 align-content-center custom-sort">
                          <div className="col-lg-4 d-flex flex-column mb-lg-0 pe-3 d-flex">
                            <div
                              className="text-muted text-small cursor-pointer sort"
                              data-sort="name"
                            >
                              NOMBRE
                            </div>
                          </div>
                          <div className="col-lg-2 d-flex flex-column pe-1 justify-content-center">
                            <div
                              className="text-muted text-small cursor-pointer sort"
                              data-sort="email"
                            >
                              ESTADO
                            </div>
                          </div>
                          <div className="col-lg-3 d-flex flex-column pe-1 justify-content-center">
                            <div
                              className="text-muted text-small cursor-pointer sort"
                              data-sort="phone"
                            >
                              PRECIO
                            </div>
                          </div>
                          <div className="col-lg-2 d-flex flex-column pe-1 justify-content-center">
                            <div
                              className="text-muted text-small cursor-pointer sort"
                              data-sort="group"
                            >
                              DISPONIBILIDAD
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Items Container Start */}
                {/* Items Container Start */}
                {currentProducts.map((producto) => (
                  <div className="card mb-2" key={producto.id}>
                    <div className="row g-0 h-100 sh-lg-11 position-relative">
                      <a
                        href="Products.Detail.html"
                        className="col-auto position-relative"
                      >
                        <img
                          src={productImagen(`./${producto.imagen}`)}
                          alt="product"
                          className="card-img card-img-horizontal sw-11 h-100"
                        />
                      </a>
                      <div className="col py-4 py-lg-0">
                        <div className="ps-5 pe-4 h-100">
                          <div className="row g-0 h-100 align-content-center">
                            <a
                              href="Products.Detail.html"
                              className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"
                            >
                              {producto.nombre}
                              <div className="text-small text-muted text-truncate position">
                                {producto.cod}
                              </div>
                            </a>
                            <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                              <div className="lh-1 text-alternate">
                                {producto.condicion}
                              </div>
                            </div>
                            <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                              <div className="lh-1 text-alternate">
                                {`C$ ${producto.precio}`}
                              </div>
                            </div>
                            <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                              <span className="badge bg-outline-primary group">
                                {producto.disponibilidad}
                              </span>
                            </div>
                            <div className="col-1 d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                              <button className="btn">
                                <i className="icon fa-regular fa-pen-to-square"></i>
                              </button>
                              <button className="btn">
                                <i className="icon fa-regular fa-trash-can"></i>{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Items Container End */}
                {/* List Items End */}
              </div>
            </div>
            {/* Items Pagination Start */}
            <div className="w-100 d-flex justify-content-center">
              <nav>
                <ul className="pagination">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link shadow"
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <i data-acorn-icon="chevron-left" />
                    </button>
                  </li>
                  {Array.from({
                    length: Math.ceil(productos.length / itemsPerPage),
                  }).map((_, index) => (
                    <li
                      key={index}
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link shadow"
                        onClick={() => paginate(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                  <li
                    className={`page-item ${
                      currentPage === Math.ceil(productos.length / itemsPerPage)
                        ? "disabled"
                        : ""
                    }`}
                  >
                    <button
                      className="page-link shadow"
                      onClick={() => paginate(currentPage + 1)}
                      disabled={
                        currentPage ===
                        Math.ceil(productos.length / itemsPerPage)
                      }
                    >
                      <i data-acorn-icon="chevron-right" />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Items Pagination End */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Products;
