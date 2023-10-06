import React, { useEffect, useState } from "react";
import Categorias from "../../Categorias";
import Header from "../../common/Header";
import TopBar from "../../common/TopBar";
import ShopBanner from "./ShopBanner";
import CardProducto from "../../shared/CardProducto";
import Footer from "../../common/Footer";
import axios from "axios";
const URI = "http://localhost:8000/productos/";

const ShopPage = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos();
  }, []);

  //Metodo para mostrar todos los productos
  const getProductos = async () => {
    try {
      const response = await axios.get(URI);
      setProductos(response.data);
    } catch (error) {
      console.error("Error al obtener los Productos:", error);
    }
  };
  return (
    <>
      <TopBar />
      <Header />
      <ShopBanner />
      <section>
        <div className="container">
          <div className="row">
            <Categorias />
            <div className="col-sm-9 padding-right">
              <div className="features_items">
                <h2 className="title text-center">Productos</h2>
                <CardProducto limiteProductos={productos.slice(0, 12)} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 padding-right">
              <div className="features_items">
                <CardProducto limiteProductos={productos.slice(12)} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ShopPage;
