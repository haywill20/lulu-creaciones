import React, { useState } from "react";
import { DataCategorias } from "./data/DataCategorias";
import { productos } from "./data/DataProductos";

const productoImagen = require.context("../../uploads", true);

const CategoriasTab = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(
    DataCategorias[0].id // Establece la categoría predeterminada
  );

  // Filtrar los productos por la categoría seleccionada
  const productosFiltrados = productos
    .filter((producto) => producto.idCategoria === categoriaSeleccionada)
    .slice(-4); // Obtener los últimos 4 productos

  const handleCategoriaClick = (categoriaId) => {
    setCategoriaSeleccionada(categoriaId);
  };

  return (
    <>
      <div className="category-tab">
        <div className="col-sm-12">
          <ul className="nav nav-tabs">
            {DataCategorias.map((item) => (
              <li
                className={item.id === categoriaSeleccionada ? "active" : ""}
                key={item.id}
              >
                <a
                  className="puntero"
                  data-toggle="tab"
                  onClick={() => handleCategoriaClick(item.id)}
                >
                  {item.categoria}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="tab-content">
          <div className="tab-pane fade active in" id="tshirt">
            {productosFiltrados.map((item) => (
              <div className="col-sm-3" key={item.id}>
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img
                        src={productoImagen(`./${item.imagenName}`)}
                        alt=""
                      />
                      <h2>{item.precio}</h2>
                      <p>{item.nombre}</p>
                      <a
                        href={`https://wa.me/+50584024316?text=Hola,%20quisiera%20comprar%20el%20producto%20con%20código:%20${item.codigo}`}
                        className="btn btn-default add-to-cart"
                        target={"_blank"}
                      >
                        <i className="fa fa-money"></i>Comprar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriasTab;
