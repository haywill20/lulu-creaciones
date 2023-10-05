import React, { useState } from "react";
import { productos } from "./data/DataProductos";

const recomendadosImagen = require.context("../../uploads", true);

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
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/recommend1.png" alt="" />
                      <h2>C$150</h2>
                      <p>Collar Black Ghost</p>
                      <a
                        href="https://wa.me/+50584024316?text=Hola,%20quisiera%20comprar%20el%20producto%20con%20código:%2047512938"
                        className="btn btn-default add-to-cart"
                        target="_blank"
                      >
                        <i className="fa fa-money"></i>Comprar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/recommend2.png" alt="" />
                      <h2>C$40</h2>
                      <p>Aretes Margaritas felices</p>
                      <a
                        href="https://wa.me/+50584024316?text=Hola,%20quisiera%20comprar%20el%20producto%20con%20código:%2047512938"
                        className="btn btn-default add-to-cart"
                        target="_blank"
                      >
                        <i className="fa fa-money"></i>Comprar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/recommend3.png" alt="" />
                      <h2>C$100</h2>
                      <p>Conjunto Corazones Rojos</p>
                      <a
                        href="https://wa.me/+50584024316?text=Hola,%20quisiera%20comprar%20el%20producto%20con%20código:%2047512938"
                        className="btn btn-default add-to-cart"
                        target="_blank"
                      >
                        <i className="fa fa-money"></i>Comprar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/recommend4.png" alt="" />
                      <h2>C$80</h2>
                      <p>Choker Mariposa</p>
                      <a
                        href="https://wa.me/+50584024316?text=Hola,%20quisiera%20comprar%20el%20producto%20con%20código:%2047512938"
                        className="btn btn-default add-to-cart"
                        target="_blank"
                      >
                        <i className="fa fa-money"></i>Comprar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/recommend5.png" alt="" />
                      <h2>C$40</h2>
                      <p>Aretes Margaritas felices</p>
                      <a
                        href="https://wa.me/+50584024316?text=Hola,%20quisiera%20comprar%20el%20producto%20con%20código:%2047512938"
                        className="btn btn-default add-to-cart"
                        target="_blank"
                      >
                        <i className="fa fa-money"></i>Comprar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/recommend6.png" alt="" />
                      <h2>C$50</h2>
                      <p>Pulsera 5Kg</p>
                      <a
                        href="https://wa.me/+50584024316?text=Hola,%20quisiera%20comprar%20el%20producto%20con%20código:%2047512938"
                        className="btn btn-default add-to-cart"
                        target="_blank"
                      >
                        <i className="fa fa-money"></i>Comprar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    </>
  );
};

export default Recomendados;
