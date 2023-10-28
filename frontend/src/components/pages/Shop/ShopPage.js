import React, { useEffect, useState } from "react";
import Categorias from "../../Categorias";
import Header from "../../common/Header";
import TopBar from "../../common/TopBar";
import ShopBanner from "./ShopBanner";
import CardProducto from "../../shared/CardProducto";
import Footer from "../../common/Footer";
import axios from "axios";

const URI = "http://localhost:8000/productos/";
const URIcategorias = "http://localhost:8000/categorias/";
const URIsubcategorias = "http://localhost:8000/subcategorias/";
const PRODUCTOS_POR_PAGINA = 12;

const ShopPage = () => {
  const [productos, setProductos] = useState([]);
  const [selectedSubcategoria, setSelectedSubcategoria] = useState(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const [categoriaID, setCategoriaID] = useState(null);
  const [selectedSubcategoriaNombre, setSelectedSubcategoriaNombre] = useState(null);
  const [initialProductCount, setInitialProductCount] = useState(12);

  useEffect(() => {
    getProductos(selectedSubcategoria, selectedSubcategoriaNombre, categoriaID);
  }, [selectedSubcategoria, selectedSubcategoriaNombre, categoriaID, paginaActual]);

  const getProductos = async (subcategoriaId, subcategoriaNombre, categoriaId) => {
    try {
      const response = await axios.get(URI);
      let filteredProductos = response.data;

      //============
      const responseCategoria = await axios.get(URIcategorias);

      //============
      const responseSubCategoria = await axios.get(URIsubcategorias);
      let filterSubCatID = responseSubCategoria.data;

      console.log("subcategoriaId", subcategoriaId);
      console.log("subcategoriaNombre desde home", subcategoriaNombre);
      console.log("categoriaID desde home", categoriaId);
      
      if (subcategoriaId !== null) {

        //filterCatId = filterCatId.find((categoria) => categoria.nombre === categoriaNombre).id;
        filterSubCatID = filterSubCatID.find((subcategoria) => subcategoria.nombre === subcategoriaNombre).id;

        filteredProductos = filteredProductos.filter(
          (producto) => producto.id_categoria === categoriaId && producto.id_subcategoria === filterSubCatID
        );
      }

      setProductos(filteredProductos.slice(filteredProductos.length - initialProductCount , filteredProductos.length));
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
            <Categorias 
              setSelectedSubcategoria={setSelectedSubcategoria} 
              setSelectedSubcategoriaNombre={setSelectedSubcategoriaNombre}
              setSelectedCategoriaId={setCategoriaID}
            />
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
