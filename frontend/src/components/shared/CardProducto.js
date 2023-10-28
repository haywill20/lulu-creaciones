import React from "react";
import { Link } from "react-router-dom";
const productImagen = require.context(
  "../../../../backend/uploads/productos",
  true
);

const CardProducto = ({ limiteProductos }) => {
  const handleComprarClick = (producto) => {
    const whatsappLink = `https://wa.me/+50584024316?text=Hola,%20quisiera%20comprar%20el%20producto:%20${producto.nombre}%20con%20precio%20%20C$%20${producto.precio}%20con%20código:%20${producto.cod}`;
    window.open(whatsappLink, "_blank");
  };

  const productosRevertidos = [...limiteProductos].reverse();

  return (
    <>
      {productosRevertidos.map((producto) => (
        <div className="col-sm-3" key={producto.id}>
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo text-center">
                <img
                  src={productImagen(`./${producto.imagen}`)}
                  alt={producto.nombre}
                />
                <h2>C${producto.precio}</h2>
                <p>{producto.nombre}</p>
                <br />
                <div className="rating">
                  <div className="stars-wrapper">
                    <div className="rating-text">
                      {producto.valoracion}{" "}
                      {Array.from({ length: 5 }).map((_, index) => (
                        <i
                          key={index}
                          className={`fa-solid fa-star ${
                            index < Math.floor(producto.valoracion)
                              ? "star-yellow"
                              : "star-gray"
                          }`}
                        ></i>
                      ))}
                    </div>
                  </div>
                </div>
                <br />
                <p>COD: {producto.cod}</p>
              </div>
              <div className="product-overlay">
                <div className="overlay-content productinfo">
                  <img
                    src={productImagen(`./${producto.imagen}`)}
                    alt={producto.nombre}
                  />
                  <h2>C${producto.precio}</h2>
                  <p>{producto.nombre}</p>
                  <Link
                    to={`/details/${producto.id}`}
                    className="btn btn-default add-to-cart"
                  >
                    <i className="fa fa-eye"></i>Ver
                  </Link>
                </div>
              </div>
            </div>
            <div className="choose">
              <ul className="nav nav-pills nav-justified">
                <li>
                  <Link to={`/details/${producto.id}`}>
                    <i className="fa fa-angle-right"></i>Detalles
                  </Link>
                </li>
                <li>
                  <a href="#" onClick={() => handleComprarClick(producto)}>
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
