import React, { useEffect, useState } from "react";
import axios from "axios";

const sliderImagen = require.context("../../uploads", true);

const URI = "http://localhost:8000/sliders/";

const SectionOneHome = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = async () => {
    try {
      const response = await axios.get(URI);
      setSliders(response.data);
    } catch (error) {
      console.error("Error al obtener los sliders:", error);
    }
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
                  {sliders.map((_, index) => (
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
                  {sliders.map((item, index) => (
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
                            {item.texto_boton}
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
                >
                  <i className="fa-solid fa-angle-left"></i>{" "}
                </a>
                <a
                  href="#slider-carousel"
                  className="right control-carousel hidden-xs"
                  data-slide="next"
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
