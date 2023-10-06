import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import TopBar from "../../common/TopBar";
import Categorias from "../../Categorias";
import CategoriasTab from "../../CategoriasTab";
import CardProducto from "../../shared/CardProducto";
import Recomendados from "../../Recomendados";
import CarouselHome from "../../CarouselHome";
import Footer from "../../common/Footer";
import axios from "axios";

const URI = "http://localhost:8000/productos/";

const HomePage = () => {
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

  return (
    <>
      <TopBar />
      <Header />
      <CarouselHome />
      <section>
        <div className="container">
          <div className="row">
            <Categorias />
            <div className="col-sm-9 padding-right">
              <div className="features_items">
                <h2 className="title text-center">Productos</h2>
                {/* Pasa la lista de productos a CardProducto */}
                <CardProducto limiteProductos={productos.slice(0, 12)} />{" "}
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

export default HomePage;
