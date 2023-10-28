import React from "react";

function Footer() {
  return (
    <>
      {/* Layout Footer Start */}
      <footer>
        <div className="footer-content">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6">
                <p className="mb-0 text-muted text-medium">
                  © 2023 Lúlu Creaciones. Todos los derechos reservados.
                </p>
              </div>
              <div className="col-sm-6 d-none d-sm-block">
                <ul className="breadcrumb pt-0 pe-0 mb-0 float-end">
                  <li className="breadcrumb-item mb-0 text-medium">
                    <a href="/" className="btn-link">
                      Dashboard
                    </a>
                  </li>
                  <li className="breadcrumb-item mb-0 text-medium">
                    <a href="/products" className="btn-link">
                      Productos
                    </a>
                  </li>
                  <li className="breadcrumb-item mb-0 text-medium">
                    <a href="/sliders" className="btn-link">
                      Sliders
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Layout Footer End */}
    </>
  );
}

export default Footer;
