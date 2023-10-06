import React, { useEffect, useState } from "react";
import Categorias from "../../Categorias";
import Header from "../../common/Header";
import TopBar from "../../common/TopBar";
import ShopBanner from "./ShopBanner";
import CardProducto from "../../shared/CardProducto";
import Footer from "../../common/Footer";
import axios from "axios";

const URI = "http://localhost:8000/productos/";
const PRODUCTOS_POR_PAGINA = 12;

const ShopPage = () => {
  const [productos, setProductos] = useState([]);
  const [selectedSubcategoria, setSelectedSubcategoria] = useState(null);
  const [paginaActual, setPaginaActual] = useState(1);

  useEffect(() => {
    getProductos(selectedSubcategoria);
  }, [selectedSubcategoria, paginaActual]);

  const getProductos = async (subcategoriaId) => {
    try {
      const response = await axios.get(URI);
      let filteredProductos = response.data;

      if (subcategoriaId !== null) {
        filteredProductos = filteredProductos.filter(
          (producto) => producto.id_subcategoria === subcategoriaId
        );
      }

      // Calcular los índices de inicio y fin para la página actual
      const startIndex = (paginaActual - 1) * PRODUCTOS_POR_PAGINA;
      const endIndex = startIndex + PRODUCTOS_POR_PAGINA;

      setProductos(filteredProductos.slice(startIndex, endIndex));
    } catch (error) {
      console.error("Error al obtener los Productos:", error);
    }
  };

  const handlePaginaAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  const handlePaginaSiguiente = () => {
    // Suponiendo que tienes todos los productos en una sola página en la API
    // Debes agregar lógica para manejar la paginación desde la API
    // Por ahora, simplemente incrementamos la página
    setPaginaActual(paginaActual + 1);
  };

  return (
    <>
      <TopBar />
      <Header />
      <ShopBanner />
      <section>
        <div className="container">
          <div className="row">
            <Categorias setSelectedSubcategoria={setSelectedSubcategoria} />
            <div className="col-sm-9 padding-right">
              <div className="features_items">
                <h2 className="title text-center">Productos</h2>
                <CardProducto limiteProductos={productos} />
              </div>
              <div className="text-center">
                <button
                  className="btn btn-default"
                  onClick={handlePaginaAnterior}
                  disabled={paginaActual === 1}
                >
                  Anterior
                </button>
                <button
                  className="btn btn-default"
                  onClick={handlePaginaSiguiente}
                >
                  Siguiente
                </button>
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
