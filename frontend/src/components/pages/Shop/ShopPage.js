import React from "react";
import Categorias from "../../Categorias";
import Header from "../../common/Header";
import TopBar from "../../common/TopBar";
import ShopBanner from "./ShopBanner";
import CardProducto from "../../shared/CardProducto";
import Footer from "../../common/Footer";
import { productos } from "../../data/DataProductos";

const ShopPage = () => {
  // Mostrar solo los primeros 6 productos en la vista Home
  const first9Products = productos.slice(0, 12);
  const last9Products = productos.slice(12);
  return (
    <>
      <TopBar />
      <Header />
      <ShopBanner />
      <section>
        <div className="container">
          <div className="row">
            <Categorias />
            <div className="features_items">
              <h2 className="title text-center">Productos</h2>
              <CardProducto products={first9Products} />
            </div>
          </div>
          <div className="row">
            <div className="features_items">
              <CardProducto products={last9Products} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ShopPage;
