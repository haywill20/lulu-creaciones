import react, { useState, useEffect } from "react";
import axios from "axios";

import Categorias from "../../Categorias";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import TopBar from "../../common/TopBar";
import CategoriasTab from "../../CategoriasTab";
import Recomendados from "../../Recomendados";

const URI = "http://localhost:8000/productos/";
const recomendadosImagen = require.context(
  "../../../../uploads/productos",
  true
);

const DetailsPage = () => {
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
      <TopBar />
      <Header />
      <section>
        <div className="container">
          <div className="row">
            <Categorias />
            <div className="col-sm-9 padding-right">
              <div className="features_items">
                <div className="product-details">
                  <div className="col-sm-5">
                    <div className="view-product">
                      <div id="image-container"></div>
                      <h3>ZOOM</h3>
                    </div>

                    <div
                      id="similar-product"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {productosPorSlide.map((productosSlide, index) => (
                          <div
                            className={`item ${index === 0 ? "active" : ""}`}
                            key={index}
                          >
                            {productosSlide.map((producto) => (
                              <a href="" key={producto.id}>
                                <img
                                  width={85}
                                  src={recomendadosImagen(
                                    `./${producto.imagen}`
                                  )}
                                  alt=""
                                />
                              </a>
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
                  </div>
                  <div className="col-sm-7">
                    <div className="product-information">
                      <img
                        src="images/product-details/new.jpg"
                        className="newarrival"
                        alt=""
                      />
                      <h2>Anne Klein Sleeveless Colorblock Scuba</h2>
                      <p>COD: 1089772</p>
                      <img src="images/product-details/rating.png" alt="" />
                      <span>
                        <span>C$ 59</span>
                        <label>Cantidad:</label>
                        <input type="number" />
                        <button type="button" className="btn btn-fefault cart">
                          <i className="fa fa-shopping-cart"></i>
                          Comprar
                        </button>
                      </span>
                      <p>
                        <b>Disponibilidad:</b> In Stock
                      </p>
                      <p>
                        <b>Condición:</b> Nuevo
                      </p>
                      <p>
                        <b>Marca:</b> Lúlu
                      </p>
                      <a href="">
                        <img
                          src="images/product-details/share.png"
                          className="share img-responsive"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <CategoriasTab />
              <Recomendados />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DetailsPage;
