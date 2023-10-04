import React from "react";
import Footer from "../../common/Footer";
import TopBar from "../../common/TopBar";
import Header from "../../common/Header";

const AboutUs = () => {
  return (
    <>
      <TopBar />
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 padding-right">
            <div className="features_items">
              <h2 className="title text-center">Misión</h2>
              <p>
                "En Lúlu Creaciones, nuestra misión es crear joyería de alta
                calidad y exclusividad, hecha con pasión y artesanía, que
                refleje la belleza y la cultura de Bilwi Puerto Cabezas.
                Buscamos brindar a nuestros clientes piezas únicas que les
                permitan expresar su estilo personal y conectar con la riqueza
                de la artesanía local. Nos comprometemos a trabajar en estrecha
                colaboración con comunidades locales, promoviendo el desarrollo
                sostenible y preservando las tradiciones culturales de la
                región."
              </p>
            </div>
          </div>
          <div className="col-sm-6 padding-right">
            <div className="features_items">
              <h2 className="title text-center">Visión</h2>
              <p>
                En Lúlu Creaciones, aspiramos a convertirnos en un referente
                reconocido a nivel local y nacional en la creación de joyería
                artesanal de alta calidad. Nos esforzamos por expandir nuestra
                presencia en el mercado, ofreciendo productos innovadores y
                exclusivos que cautiven a nuestros clientes. Además, deseamos
                ser un motor de desarrollo económico en Bilwi Puerto Cabezas,
                brindando empleo y oportunidades de capacitación a la comunidad
                local, y contribuyendo a la promoción y preservación de las
                tradiciones culturales. Buscamos ser una empresa sostenible y
                socialmente responsable que inspire a otros a valorar y apoyar
                la artesanía local.
              </p>
            </div>
          </div>
        </div>
        <div className="Row">
          <div className="col-sm-12 padding-right">
            <div className="features_items">
              <h2 className="title text-center">Objetivos</h2>

              <h2 className="text-left">
                Fomentar la Exploración de Productos:
              </h2>
              <p>
                El objetivo principal de tu landing page puede ser alentar a los
                visitantes a explorar tus productos y colecciones. Esto podría
                incluir un llamado a la acción (CTA) como "Descubre nuestra
                amplia gama de productos".
              </p>
              <h2 className="text-left">Ofrecer Descuentos Exclusivos</h2>
              <p>
                Puedes establecer como objetivo que los visitantes se suscriban
                a tu boletín informativo o se registren en tu sitio web para
                recibir descuentos exclusivos en productos.
              </p>
              <h2 className="text-left">Promover la Personalización</h2>
              <p>
                opciones de personalización en nuestros productos, el objetivo
                podría ser que los visitantes creen una pieza única y
                personalizada.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
