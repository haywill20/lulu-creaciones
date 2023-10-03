import React, { useState } from "react";
import { DataCarousel } from "../../data/DataCarousel"; // Asegúrate de importar los datos

const sliderImagen = require.context("../../../../uploads", true);

const SectionOneHome = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handlePrevClick = () => {
    const prevItem =
      activeItem === 0 ? DataCarousel.length - 1 : activeItem - 1;
    setActiveItem(prevItem);
  };

  const handleNextClick = () => {
    const nextItem =
      activeItem === DataCarousel.length - 1 ? 0 : activeItem + 1;
    setActiveItem(nextItem);
  };

  return (
    <>
      <section id="slider">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div
                id="slider-carousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  {DataCarousel.map((item, index) => (
                    <li
                      key={index}
                      data-target="#slider-carousel"
                      data-slide-to={index}
                      className={activeItem === index ? "active" : ""}
                      onClick={() => setActiveItem(index)}
                    ></li>
                  ))}
                </ol>

                <div className="carousel-inner text-left">
                  {DataCarousel.map((item, index) => (
                    <div
                      key={index}
                      className={`item ${activeItem === index ? "active" : ""}`}
                    >
                      <div className="col-sm-6">
                        <h1>{item.titulo}</h1>
                        <h2>{item.subtitulo}</h2>
                        <p>{item.parrafo}</p>
                        <a href="shop.html">
                          <button type="button" className="btn btn-default get">
                            {item.boton}
                          </button>
                        </a>
                      </div>
                      <div className="col-sm-6">
                        <img
                          src={sliderImagen(`./${item.imagen}`)}
                          className="girl img-responsive"
                          alt=""
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#slider-carousel"
                  className="left control-carousel hidden-xs"
                  data-slide="prev"
                  onClick={handlePrevClick}
                >
                  <i className="fa-solid fa-angle-left"></i>{" "}
                </a>
                <a
                  href="#slider-carousel"
                  className="right control-carousel hidden-xs"
                  data-slide="next"
                  onClick={handleNextClick}
                >
                  <i className="fa-solid fa-angle-right"></i>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionOneHome;
