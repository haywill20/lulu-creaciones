import React, { useState } from "react";
import { productos } from "../../data/DataProductos";
import "bootstrap/dist/css/bootstrap.min.css";

const recomendadosImagen = require.context("../../../../uploads", true);

const Recomendados = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    const newIndex =
      activeIndex - 3 >= 0 ? activeIndex - 3 : productos.length - 3; // Ir al final si estamos en el principio
    setActiveIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex + 3 < productos.length ? activeIndex + 3 : 0; // Volver al comienzo si estamos al final
    setActiveIndex(newIndex);
  };

  return (
    <>
      <div className="recommended_items">
        <h2 className="title text-center">Productos Recomendados</h2>

        <div
          id="recommended-item-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="item active">
              {productos.slice(activeIndex, activeIndex + 3).map((item) => (
                <div className="col-sm-4" key={item.id}>
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img
                          src={recomendadosImagen(`./${item.imagenName}`)}
                          alt=""
                        />
                        <h2>{item.precio}</h2>
                        <p>{item.nombre}</p>
                        <a
                          href="https://wa.me/+50584024316?text=Hola,%20quisiera%20comprar%20el%20producto%20con%20código:%2047512938"
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
          <a className="left recommended-item-control" onClick={handlePrev}>
            <i className="fa fa-angle-left"></i>
          </a>
          <a className="right recommended-item-control" onClick={handleNext}>
            <i className="fa fa-angle-right"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Recomendados;
