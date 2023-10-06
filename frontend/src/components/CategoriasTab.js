import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const productoImagen = require.context("../../uploads/productos", true);

const URIcategorias = "http://localhost:8000/categorias/";
const URIproductos = "http://localhost:8000/productos/";

const CategoriasTab = () => {
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  useEffect(() => {
    getCategorias();
    getProductos();
  }, []);

  useEffect(() => {
    // Asignar la primera categoría como seleccionada inicialmente
    if (categorias.length > 0) {
      setCategoriaSeleccionada(categorias[0].id);
    }
  }, [categorias]);

  const getCategorias = async () => {
    try {
      const response = await axios.get(URIcategorias);
      setCategorias(response.data);
    } catch (error) {
      console.error("Error al obtener las Categorias:", error);
    }
  };

  const getProductos = async () => {
    try {
      const response = await axios.get(URIproductos);
      setProductos(response.data);
    } catch (error) {
      console.error("Error al obtener los Productos:", error);
    }
  };

  const handleCategoriaClick = (categoriaId) => {
    // Actualizar la categoría seleccionada
    setCategoriaSeleccionada(categoriaId);
  };

  const filteredProductos = productos.filter(
    (producto) =>
      categoriaSeleccionada === null ||
      producto.id_categoria === categoriaSeleccionada
  );

  return (
    <>
      <div className="category-tab">
        <div className="col-sm-12">
          <ul className="nav nav-tabs">
            {categorias.map((categoria) => (
              <li
                className={
                  categoria.id === categoriaSeleccionada ? "active" : ""
                }
                key={categoria.id}
              >
                <a
                  className="puntero"
                  data-toggle="tab"
                  onClick={() => handleCategoriaClick(categoria.id)}
                >
                  {categoria.nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="tab-content">
          <div className="tab-pane fade active in" id="tshirt">
            {filteredProductos.slice(0, 4).map((producto) => (
              <div className="col-sm-3" key={producto.id}>
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img
                        src={productoImagen(`./${producto.imagen}`)}
                        alt=""
                      />
                      <h2>{producto.precio}</h2>
                      <p>{producto.nombre}</p>
                      <Link
                        to={`/details/${producto.id}`}
                        className="btn btn-default add-to-cart"
                        target={"_blank"}
                      >
                        <i className="fa fa-money"></i>Comprar
                      </Link>
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
