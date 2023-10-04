import React from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import TopBar from "../../common/TopBar";

const HelpPage = () => {
  return (
    <>
      <TopBar />
      <Header />
      <div id="contact-page" className="container">
        <div className="bg">
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <h2 className="title text-center">Ayuda</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <div className="contact-form">
                <h2 className="title text-center">¿En que podemos ayudarte?</h2>

                <form
                  id="main-contact-form"
                  className="contact-form row"
                  name="contact-form"
                  method="post"
                >
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      required="required"
                      placeholder="Asunto"
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <textarea
                      name="message"
                      id="message"
                      required="required"
                      className="form-control"
                      rows="8"
                      placeholder="Escriba su mensaje aqui"
                    ></textarea>
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="submit"
                      name="submit"
                      className="btn btn-primary pull-right"
                      value="Enviar"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default HelpPage;
