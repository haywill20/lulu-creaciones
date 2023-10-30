import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const URI = "http://localhost:8000/productos/";
const productosImagen = require.context(
  "../../../backend/uploads/productos",
  true
);

const RecomendadosMini = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = async () => {
    try {
      const response = await axios.get(URI);
      setProductos(response.data);
    } catch (error) {
      console.error("Error al obtener los Productos:", error);
    }
  };

  // Dividir los productos en grupos de 3 para mostrar en cada slide
  const productosPorSlide = [];
  for (let i = 0; i < productos.length; i += 3) {
    productosPorSlide.push(productos.slice(i, i + 3));
  }
  return (
    <>
      <div id="similar-product" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {productosPorSlide.map((productosSlide, index) => (
            <div className={`item ${index === 0 ? "active" : ""}`} key={index}>
              {productosSlide.map((producto) => (
                <Link
                  to={`/details/${producto.id}`}
                  target="_blank"
                  key={producto.id} // Asigna la clave única aquí
                >
                  <img
                    width={85}
                    src={productosImagen(`./${producto.imagen}`)}
                    alt=""
                  />
                </Link>
              ))}
            </div>
          ))}
        </div>

        <a
          className="left item-control"
          href="#similar-product"
          data-slide="prev"
        >
          <i className="fa fa-angle-left"></i>
        </a>
        <a
          className="right item-control"
          href="#similar-product"
          data-slide="next"
        >
          <i className="fa fa-angle-right"></i>
        </a>
      </div>
    </>
  );
};

export default RecomendadosMini;
