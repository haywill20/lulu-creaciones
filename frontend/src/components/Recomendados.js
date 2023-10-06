import React, { useState, useEffect } from "react";
import axios from "axios";

const URI = "http://localhost:8000/productos/";
const recomendadosImagen = require.context("../../uploads/productos", true);

const Recomendados = () => {
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

  // Dividir los productos en grupos de 4 para mostrar en cada slide
  const productosPorSlide = [];
  for (let i = 0; i < productos.length; i += 4) {
    productosPorSlide.push(productos.slice(i, i + 4));
  }

  return (
    <div className="recommended_items">
      <h2 className="title text-center">Productos Recomendados</h2>

      <div
        id="recommended-item-carousel"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {productosPorSlide.map((productosSlide, index) => (
            <div className={`item ${index === 0 ? "active" : ""}`} key={index}>
              {productosSlide.map((producto) => (
                <div className="col-sm-3" key={producto.id}>
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img
                          src={recomendadosImagen(`./${producto.imagen}`)}
                          alt={producto.nombre}
                        />
                        <h2>{`C$${producto.precio}`}</h2>
                        <p>{producto.nombre}</p>
                        <a
                          href={`https://wa.me/+50584024316?text=Hola,%20quisiera%20comprar%20el%20producto%20con%20código:%20${producto.codigo}`}
                          className="btn btn-default add-to-cart"
                          target="_blank"
                        >
                          <i className="fa fa-money"></i>Comprar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <a
          className="left recommended-item-control"
          href="#recommended-item-carousel"
          data-slide="prev"
        >
          <i className="fa fa-angle-left"></i>
        </a>
        <a
          className="right recommended-item-control"
          href="#recommended-item-carousel"
          data-slide="next"
        >
          <i className="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Recomendados;
