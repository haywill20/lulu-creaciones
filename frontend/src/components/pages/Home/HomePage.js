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
  const [initialProductCount, setInitialProductCount] = useState(12);
  const [selectedSubcategoria, setSelectedSubcategoria] = useState(null);

  useEffect(() => {
    getProductos(selectedSubcategoria);
  }, [selectedSubcategoria]);

  const getProductos = async (subcategoriaId) => {
    try {
      const response = await axios.get(URI);
      let filteredProductos = response.data;

      if (subcategoriaId !== null) {
        filteredProductos = filteredProductos.filter(
          (producto) => producto.id_subcategoria === subcategoriaId
        );
      }

      setProductos(filteredProductos.slice(0, initialProductCount));
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
            <Categorias setSelectedSubcategoria={setSelectedSubcategoria} />
            <div className="col-sm-9 padding-right">
              <div className="features_items">
                <h2 className="title text-center">Productos</h2>
                <CardProducto limiteProductos={productos} />
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
