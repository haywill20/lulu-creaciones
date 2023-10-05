import React from "react";
import Header from "../../common/Header";
import TopBar from "../../common/TopBar";
import Categorias from "../../Categorias";
import CategoriasTab from "../../CategoriasTab";
import CardProducto from "../../shared/CardProducto";
import Recomendados from "../../Recomendados";
import CarouselHome from "../../CarouselHome";
import Footer from "../../common/Footer";
import { productos } from "../../data/DataProductos"; // Importa la lista de productos

const HomePage = () => {
  // Mostrar solo los primeros 6 productos en la vista Home
  const first6Products = productos.slice(0, 8);

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
                <CardProducto products={first6Products} />
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
