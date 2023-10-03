import React from "react";
import CardProducto from "../../shared/CardProducto";
import CategoriasTab from "./CategoriasTab";
import Recomendados from "./Recomendados";

const Productos = () => {
  return (
    <>
      <div className="col-sm-9 padding-right">
        <div className="features_items">
          <h2 className="title text-center">Productos</h2>
          <CardProducto />
        </div>
        <CategoriasTab />
        <Recomendados />
      </div>
    </>
  );
};
export default Productos;
