import React, { useEffect, useState } from "react";
import RangoPrecio from "./RangoPrecio";
import axios from "axios";

const advertisingImagen = require.context("../../uploads", true);

const URI = "http://localhost:8000/categorias/";

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getCategorias();
  }, []);

  const getCategorias = async () => {
    try {
      const response = await axios.get(URI);
      setCategorias(response.data);
    } catch (error) {
      console.error("Error al obtener las categorias:", error);
    }
  };
  return (
    <>
      <div className="col-sm-3">
        <div className="left-sidebar">
          <h2>Categorías</h2>
          <div className="panel-group category-products" id="accordian">
            {categorias.map((categoria) => (
              <div className="panel panel-default" key={categoria.id}>
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordian"
                      href={`#${categoria.id}`}
                    >
                      <span className="pull-right">
                        <i className="fa fa-plus"></i>
                      </span>
                      {categoria.nombre}
                    </a>
                  </h4>
                </div>
                <div id={categoria.id} className="panel-collapse collapse">
                  <div className="panel-body">
                    <ul>
                      <li>
                        <a href="#">Chaquiras calibradas </a>
                      </li>
                      <li>
                        <a href="#">Chaquiras Chinas </a>
                      </li>
                      <li>
                        <a href="#">Hilo Negro </a>
                      </li>
                      <li>
                        <a href="#">Acero</a>
                      </li>
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
