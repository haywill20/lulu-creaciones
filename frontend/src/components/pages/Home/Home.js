import React from "react";
import Header from "../../common/Header";
import TopBar from "../../common/TopBar";
import Categorias from "./Categorias";
import Productos from "./Productos";
import CarouselHome from "./CarouselHome";

const Home = () => {
  return (
    <>
      <TopBar />
      <Header />
      <CarouselHome />
      <section>
        <div className="container">
          <div className="row">
            <Categorias />
            <Productos />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
