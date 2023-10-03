import React from "react";
import { productos } from "../data/DataProductos";

const productImagen = require.context("../../../uploads", true);

const CardProducto = () => {
  return (
    <>
      {productos.slice(-6).map((producto) => (
        <div className="col-sm-4" key={producto.id}>
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo text-center">
                <img
                  src={productImagen(`./${producto.imagenName}`)}
                  alt={producto.nombre}
                />
                <h2>C${producto.precio}</h2>
                <p>{producto.nombre}</p>
                <br />
                <div className="rating">
                  <div className="stars-wrapper">
                    <div className="rating-text">
                      {producto.calificacion}{" "}
                      {Array.from({ length: 5 }).map((_, index) => (
                        <i
                          key={index}
                          className={`fa-solid fa-star ${
                            index < Math.floor(producto.calificacion)
                              ? "star-yellow"
                              : "star-gray"
                          }`}
                        ></i>
                      ))}
                    </div>
                  </div>
                </div>
                <br />
                <p>COD: {producto.codigo}</p>
              </div>
              <div className="product-overlay">
                <div className="overlay-content productinfo">
                  <img
                    src={productImagen(`./${producto.subImagen}`)}
                    alt={producto.nombre}
                  />
                  <h2>C${producto.precio}</h2>
                  <p>{producto.nombre}</p>
                  <a
                    href={`product-details.html?imagen=images/home/${producto.imagenName}.png`}
                    className="btn btn-default add-to-cart"
                    target={"_blank"}
                  >
                    <i className="fa fa-eye"></i>Ver
                  </a>
                </div>
              </div>
            </div>
            <div className="choose">
              <ul className="nav nav-pills nav-justified">
                <li>
                  <a
                    href={`product-details.html?imagen=images/home/${producto.imagenName}.png`}
                    target={"_blank"}
                  >
                    <i className="fa fa-angle-right"></i>Detalles
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/+50584024316?text=Hola,%20quisiera%20comprar%20el%20producto%20con%20código:%20${producto.codigo}`}
                    target={"_blank"}
                  >
                    <i className="fa fa-money"></i>Comprar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardProducto;
