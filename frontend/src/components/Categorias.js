import React, { useEffect, useState } from "react";
import RangoPrecio from "./RangoPrecio";
import axios from "axios";
import { Link } from "react-router-dom";

const advertisingImagen = require.context("../../../backend/uploads", true);

const URIcategorias = "http://localhost:8000/categorias/";
const URIsubcategorias = "http://localhost:8000/subcategorias/";

const Categorias = ({
  setSelectedSubcategoria,
  setSelectedSubcategoriaNombre,
  setSelectedCategoriaId,
}) => {
  const [categorias, setCategorias] = useState([]);
  const [subcategorias, setSubCategorias] = useState([]);
  //const [selectedSubcategoriaNombre, setSelectedSubcategoriaNombre] = useState(""); // Estado para almacenar subcategoriaNombre

  useEffect(() => {
    getCategorias();
  }, []);

  const getCategorias = async () => {
    try {
      const response = await axios.get(URIcategorias);
      setCategorias(response.data);
    } catch (error) {
      console.error("Error al obtener las categorias:", error);
    }
  };

  useEffect(() => {
    getSubCategorias();
  }, []);

  const getSubCategorias = async () => {
    try {
      const response = await axios.get(URIsubcategorias);
      setSubCategorias(response.data);
    } catch (error) {
      console.error("Error al obtener las Sub Categorias:", error);
    }
  };

  const handleSubcategoriaClick = (
    subcategoriaId,
    subcategoriaNombre,
    categoriaId
  ) => {
    setSelectedSubcategoria(subcategoriaId);
    setSelectedSubcategoriaNombre(subcategoriaNombre);
    setSelectedCategoriaId(categoriaId);
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
                        {subcategorias.some(
                          (subcategoria) =>
                            subcategoria.id_categoria === categoria.id
                        ) ? (
                          <i className="fa fa-plus"></i>
                        ) : null}
                      </span>
                      {categoria.nombre}
                    </a>
                  </h4>
                </div>
                <div id={categoria.id} className="panel-collapse collapse">
                  <div className="panel-body">
                    {subcategorias
                      .filter(
                        (subcategoria) =>
                          subcategoria.id_categoria === categoria.id
                      )
                      .map((subcategoria) => (
                        <ul key={subcategoria.id}>
                          <li>
                            <div
                              className="puntero"
                              onClick={() =>
                                handleSubcategoriaClick(
                                  subcategoria.id,
                                  subcategoria.nombre,
                                  subcategoria.id_categoria
                                )
                              }
                            >
                              {subcategoria.nombre}
                            </div>
                          </li>
                        </ul>
                      ))}
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
