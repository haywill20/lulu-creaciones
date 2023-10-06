import react, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Categorias from "../../Categorias";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import TopBar from "../../common/TopBar";
import CategoriasTab from "../../CategoriasTab";
import Recomendados from "../../Recomendados";
import RecomendadosMini from "../../RecomendadosMini";

const URI = "http://localhost:8000/productos/";
const productosImagen = require.context("../../../../uploads/productos", true);

const DetailsPage = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProducto();
  }, []);

  //Procedimiento para mostrar un producto
  const getProducto = async () => {
    try {
      const res = await axios.get(URI + id);

      setProducto(res.data);
    } catch (error) {
      console.error("Error al obtener el producto:", error);
    }
  };

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
                      <img
                        //aqui se presenta el error
                        src={
                          producto.imagen
                            ? productosImagen(`./${producto.imagen}`)
                            : ""
                        }
                        alt=""
                      />

                      <h3>ZOOM</h3>
                    </div>

                    {/*Recomendados Mini*/}
                    <RecomendadosMini />
                  </div>
                  <div className="col-sm-7">
                    <div className="product-information">
                      <img
                        src="images/product-details/new.jpg"
                        className="newarrival"
                        alt=""
                      />
                      <h2>{producto.nombre}</h2>
                      <p>COD: {producto.cod}</p>
                      <img src="images/product-details/rating.png" alt="" />
                      <span>
                        <span>C$ {producto.precio}</span>
                        <label>Cantidad:</label>
                        <input type="number" />
                        <button type="button" className="btn btn-fefault cart">
                          <i className="fa fa-shopping-cart"></i>
                          Comprar
                        </button>
                      </span>
                      <p>
                        <b>Disponibilidad:</b> {producto.disponibilidad}
                      </p>
                      <p>
                        <b>Condición:</b> {producto.condicion}
                      </p>
                      <p>
                        <b>Marca:</b> {producto.marca}
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
