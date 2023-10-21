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
const URIcategorias = "http://localhost:8000/categorias/";
const URIsubcategorias = "http://localhost:8000/subcategorias/";


const HomePage = () => {
  const [productos, setProductos] = useState([]);
  const [initialProductCount, setInitialProductCount] = useState(12);
  const [selectedSubcategoria, setSelectedSubcategoria] = useState(null);
  const [selectedSubcategoriaNombre, setSelectedSubcategoriaNombre] = useState(null);
  const [categoriaID, setCategoriaID] = useState(null);

  useEffect(() => {
    getProductos(selectedSubcategoria, selectedSubcategoriaNombre, categoriaID);
  }, [selectedSubcategoria, selectedSubcategoriaNombre, categoriaID]);

  const getProductos = async (subcategoriaId, subcategoriaNombre, categoriaId) => {
    try {
      const response = await axios.get(URI);
      let filteredProductos = response.data;

      //============
      const responseCategoria = await axios.get(URIcategorias);
      let filterCatId = responseCategoria.data;

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

      setProductos(filteredProductos.slice(0, initialProductCount));
    } catch (error) {
      console.error("Error al obtener los Productos:", error);
    }
  };

  // const getProductos = async (subcategoriaId, nombre_categoria, nombre_subcategoria) => {
  //   try {
  //     const response = await axios.get(URI);
  //     let filteredProductos = response.data;

  //     //=================
  //     const responseCategoria = await axios.get(URIcategorias);
  //     let cat = responseCategoria.data;

  //     //=================
  //     const responseSubCategoria = await axios.get(URIsubcategorias);
  //     let subcat = responseSubCategoria.data;
      
  //     console.log("subcategoriaId", subcategoriaId);
  //     console.log("nombre_categoria", nombre_categoria);
  //     console.log("nombre_subcategoria", nombre_subcategoria);
  //     if (subcategoriaId !== null) {
  //       // Obtén el ID de la categoría "collares" y la subcategoría "perlas" de tus datos
  //       const categoriaCollaresId = cat.find((categoria) => categoria.nombre === nombre_categoria).id;
  //       const subcategoriaPerlasId = subcat.find((subcategoria) => subcategoria.nombre === nombre_subcategoria).id;
  
  //       filteredProductos = filteredProductos.filter((producto) => {
  //         return producto.id_categoria === categoriaCollaresId && producto.id_subcategoria === subcategoriaPerlasId;
  //       });
  //     }
  
  //     setProductos(filteredProductos.slice(0, initialProductCount));
  //   } catch (error) {
  //     console.error("Error al obtener los Productos:", error);
  //   }
  // };
  

  return (
    <>
      <TopBar />
      <Header />
      <CarouselHome />
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
