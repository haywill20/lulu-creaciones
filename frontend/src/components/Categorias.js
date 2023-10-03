import React, { useState } from "react";
import RangoPrecio from "./RangoPrecio";
import { DataCategorias } from "./data/DataCategorias";

const advertisingImagen = require.context("../../uploads", true);

const Categorias = () => {
  const [categoriaActiva, setCategoriaActiva] = useState(null);

  const toggleCategoria = (categoria) => {
    if (categoriaActiva === categoria) {
      // Si la categoría está activa, la desactivamos
      setCategoriaActiva(null);
    } else {
      // Si la categoría no está activa, la activamos
      setCategoriaActiva(categoria);
    }
  };
  return (
    <>
      <div className="col-sm-3">
        <div className="left-sidebar">
          <h2>Categorías</h2>
          <div
            className="panel-group category-products text-left"
            id="accordian"
          >
            {DataCategorias.map((item) => (
              <div className="panel panel-default" key={item.id}>
                <div
                  className="panel-heading"
                  onClick={() => toggleCategoria(item.categoria)}
                >
                  <h4 className="panel-title puntero">
                    <a
                      className={
                        categoriaActiva === item.categoria ? "active" : ""
                      }
                    >
                      <span className="pull-right">
                        <i
                          className={`fa ${
                            categoriaActiva === item.categoria
                              ? "fa-minus"
                              : "fa-plus"
                          }`}
                        ></i>{" "}
                      </span>
                      {item.categoria}
                    </a>
                  </h4>
                </div>
                <div
                  className={`panel-collapse collapse ${
                    categoriaActiva === item.categoria ? "in" : ""
                  }`}
                >
                  <div className="panel-body">
                    <ul>
                      {item.subcategorias.map((subcategoria, subIndex) => (
                        <li key={subIndex}>
                          <a href="#">{subcategoria}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="shipping text-center">
            <img src={advertisingImagen(`./publicidad1.jpg`)} alt="" />
          </div>

          <RangoPrecio />

          <div className="shipping text-center">
            <img src={advertisingImagen(`./publicidad2.jpg`)} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Categorias;
