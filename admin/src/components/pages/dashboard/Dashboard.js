import React from "react";
import Footer from "../../common/Footer";
import Menu from "../../common/Menu";

function Dashboard() {
  return (
    <>
      <Menu />
      <main>
        <div className="container">
          {/* Title and Top Buttons Start */}
          <div className="page-title-container">
            <div className="row">
              {/* Title Start */}
              <div className="col-12 col-md-7">
                <a className="muted-link pb-2 d-inline-block hidden" href="#">
                  <span className="align-middle lh-1 text-small">&nbsp;</span>
                </a>
                <h1 className="mb-0 pb-0 display-4" id="title">
                  Bienvenido, Deborah!
                </h1>
              </div>
              {/* Title End */}
            </div>
          </div>
          {/* Title and Top Buttons End */}
          {/* Stats Start */}
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <div
                  className="dropdown-as-select me-3"
                  data-setactive="false"
                  data-childselector="span"
                >
                  <a
                    className="pe-0 pt-0 align-top lh-1 dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="small-title" />
                  </a>
                  <div className="dropdown-menu font-standard">
                    <div className="nav flex-column" role="tablist">
                      <a
                        className="active dropdown-item text-medium"
                        href="#"
                        aria-selected="true"
                        role="tab"
                      >
                        Hoy
                      </a>
                      <a
                        className="dropdown-item text-medium"
                        href="#"
                        aria-selected="false"
                        role="tab"
                      >
                        Semanalmente
                      </a>
                      <a
                        className="dropdown-item text-medium"
                        href="#"
                        aria-selected="false"
                        role="tab"
                      >
                        Mensualmente
                      </a>
                      <a
                        className="dropdown-item text-medium"
                        href="#"
                        aria-selected="false"
                        role="tab"
                      >
                        Anualmente
                      </a>
                    </div>
                  </div>
                </div>
                <h2 className="small-title">Estadisticas</h2>
              </div>
              <div className="mb-5">
                <div className="row g-2">
                  <div className="col-6 col-md-4 col-lg-2">
                    <div className="card h-100 hover-scale-up cursor-pointer">
                      <div className="card-body d-flex flex-column align-items-center">
                        <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                          <i
                            data-acorn-icon="dollar"
                            className="text-primary"
                          />
                        </div>
                        <div className="mb-1 d-flex align-items-center text-alternate text-small lh-1-25">
                          GANANCIAS
                        </div>
                        <div className="text-primary cta-4">C$ 315.20</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <div className="card h-100 hover-scale-up cursor-pointer">
                      <div className="card-body d-flex flex-column align-items-center">
                        <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                          <i data-acorn-icon="cart" className="text-primary" />
                        </div>
                        <div className="mb-1 d-flex align-items-center text-alternate text-small lh-1-25">
                          PEDIDOS
                        </div>
                        <div className="text-primary cta-4">16</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <div className="card h-100 hover-scale-up cursor-pointer">
                      <div className="card-body d-flex flex-column align-items-center">
                        <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                          <i
                            data-acorn-icon="cupcake"
                            className="text-primary"
                          />
                        </div>
                        <div className="mb-1 d-flex align-items-center text-alternate text-small lh-1-25">
                          PRODUCTOS
                        </div>
                        <div className="text-primary cta-4">463</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <div className="card h-100 hover-scale-up cursor-pointer">
                      <div className="card-body d-flex flex-column align-items-center">
                        <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                          <i data-acorn-icon="tag" className="text-primary" />
                        </div>
                        <div className="mb-1 d-flex align-items-center text-alternate text-small lh-1-25">
                          BANNERS
                        </div>
                        <div className="text-primary cta-4">17</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <div className="card h-100 hover-scale-up cursor-pointer">
                      <div className="card-body d-flex flex-column align-items-center">
                        <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                          <i
                            data-acorn-icon="message"
                            className="text-primary"
                          />
                        </div>
                        <div className="mb-1 d-flex align-items-center text-alternate text-small lh-1-25">
                          PREGUNTAS
                        </div>
                        <div className="text-primary cta-4">5</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row gx-4 gy-5">
            {/* Top Selling Items Start */}
            <div className="col-xl-6 mb-5">
              <h2 className="small-title">Productos mas vendidos</h2>
              <div className="scroll-out mb-n2">
                <div className="scroll-by-count" data-count={4}>
                  <div className="card mb-2">
                    <div className="row g-0 sh-14 sh-md-10">
                      <div className="col-auto">
                        <a href="Products.Detail.html">
                          <img
                            src="img/product/small/product-3.webp"
                            alt="alternate text"
                            className="card-img card-img-horizontal sw-11"
                          />
                        </a>
                      </div>
                      <div className="col">
                        <div className="card-body pt-0 pb-0 h-100">
                          <div className="row g-0 h-100 align-content-center">
                            <div className="col-12 col-md-9 d-flex align-items-center mb-2 mb-md-0">
                              <a href="Products.Detail.html">
                                Good Glass Teapot
                              </a>
                            </div>
                            <div className="col-12 col-md-3 d-flex align-items-center justify-content-md-end text-muted text-medium">
                              4.024 Sales
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2">
                    <div className="row g-0 sh-14 sh-md-10">
                      <div className="col-auto">
                        <a href="Products.Detail.html">
                          <img
                            src="img/product/small/product-2.webp"
                            alt="alternate text"
                            className="card-img card-img-horizontal sw-11"
                          />
                        </a>
                      </div>
                      <div className="col">
                        <div className="card-body pt-0 pb-0 h-100">
                          <div className="row g-0 h-100 align-content-center">
                            <div className="col-12 col-md-9 d-flex align-items-center mb-2 mb-md-0">
                              <a href="Products.Detail.html">
                                Aromatic Green Candle
                              </a>
                            </div>
                            <div className="col-12 col-md-3 d-flex align-items-center justify-content-md-end text-muted text-medium">
                              2.701 Sales
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2">
                    <div className="row g-0 sh-14 sh-md-10">
                      <div className="col-auto">
                        <a href="Products.Detail.html">
                          <img
                            src="img/product/small/product-7.webp"
                            alt="alternate text"
                            className="card-img card-img-horizontal sw-11"
                          />
                        </a>
                      </div>
                      <div className="col">
                        <div className="card-body pt-0 pb-0 h-100">
                          <div className="row g-0 h-100 align-content-center">
                            <div className="col-12 col-md-9 d-flex align-items-center mb-2 mb-md-0">
                              <a href="Products.Detail.html">
                                White Coffee Mug
                              </a>
                            </div>
                            <div className="col-12 col-md-3 d-flex align-items-center justify-content-md-end text-muted text-medium">
                              1.972 Sales
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2">
                    <div className="row g-0 sh-14 sh-md-10">
                      <div className="col-auto">
                        <a href="Products.Detail.html">
                          <img
                            src="img/product/small/product-6.webp"
                            alt="alternate text"
                            className="card-img card-img-horizontal sw-11"
                          />
                        </a>
                      </div>
                      <div className="col">
                        <div className="card-body pt-0 pb-0 h-100">
                          <div className="row g-0 h-100 align-content-center">
                            <div className="col-12 col-md-9 d-flex align-items-center mb-2 mb-md-0">
                              <a href="Products.Detail.html">
                                Wireless On-Ear Headphones
                              </a>
                            </div>
                            <div className="col-12 col-md-3 d-flex align-items-center justify-content-md-end text-muted text-medium">
                              1.543 Sales
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2">
                    <div className="row g-0 sh-14 sh-md-10">
                      <div className="col-auto">
                        <a href="Products.Detail.html">
                          <img
                            src="img/product/small/product-8.webp"
                            alt="alternate text"
                            className="card-img card-img-horizontal sw-11"
                          />
                        </a>
                      </div>
                      <div className="col">
                        <div className="card-body pt-0 pb-0 h-100">
                          <div className="row g-0 h-100 align-content-center">
                            <div className="col-12 col-md-9 d-flex align-items-center mb-2 mb-md-0">
                              <a href="Products.Detail.html">
                                Geometric Chandelier
                              </a>
                            </div>
                            <div className="col-12 col-md-3 d-flex align-items-center justify-content-md-end text-muted text-medium">
                              1.352 Sales
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Top Selling Items End */}
            {/* Top Search Terms Start */}
            <div className="col-xl-6 mb-5">
              <h2 className="small-title">Top Search Terms</h2>
              <div className="card sh-35 h-xl-100-card">
                <div className="card-body scroll-out h-100">
                  <div className="scroll h-100">
                    <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                      <div className="d-flex flex-column">
                        <div>Whole wheat bread</div>
                      </div>
                      <div className="d-flex">
                        <span className="badge bg-outline-secondary">847</span>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                      <div className="d-flex flex-column">
                        <div>White bread</div>
                      </div>
                      <div className="d-flex">
                        <span className="badge bg-outline-secondary">753</span>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                      <div className="d-flex flex-column">
                        <div>Sourdough bread</div>
                      </div>
                      <div className="d-flex">
                        <span className="badge bg-outline-secondary">721</span>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                      <div className="d-flex flex-column">
                        <div>Melonpan bread</div>
                      </div>
                      <div className="d-flex">
                        <span className="badge bg-outline-secondary">693</span>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                      <div className="d-flex flex-column">
                        <div>Gluten free bread</div>
                      </div>
                      <div className="d-flex">
                        <span className="badge bg-outline-secondary">431</span>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                      <div className="d-flex flex-column">
                        <div>sliced whole wheat bread</div>
                      </div>
                      <div className="d-flex">
                        <span className="badge bg-outline-secondary">381</span>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                      <div className="d-flex flex-column">
                        <div>Packaged Zopf bread</div>
                      </div>
                      <div className="d-flex">
                        <span className="badge bg-outline-secondary">310</span>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                      <div className="d-flex flex-column">
                        <div>Barm cake</div>
                      </div>
                      <div className="d-flex">
                        <span className="badge bg-outline-secondary">301</span>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                      <div className="d-flex flex-column">
                        <div>Pita bread</div>
                      </div>
                      <div className="d-flex">
                        <span className="badge bg-outline-secondary">288</span>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                      <div className="d-flex flex-column">
                        <div>Taftan cake</div>
                      </div>
                      <div className="d-flex">
                        <span className="badge bg-outline-secondary">219</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Top Search Terms End */}
          </div>
          <div className="row">
            {/* Tips Start */}
            <div className="col-12 col-xxl-auto mb-5">
              <h2 className="small-title">Tips</h2>
              <div className="card h-100-card sw-xxl-40">
                <div className="card-body row g-0">
                  <div className="col-12 d-flex flex-column justify-content-between align-items-start">
                    <div>
                      <div className="cta-3">More sales?</div>
                      <div className="mb-3 cta-3 text-primary">
                        Add new products!
                      </div>
                      <div className="text-muted mb-4">
                        Cheesecake chocolate carrot cake pie lollipop apple pie
                        lemon cream lollipop.
                        <br />
                        Oat cake lemon drops gummi pie cake cotton.
                      </div>
                    </div>
                    <a
                      href="Products.List.html"
                      className="btn btn-icon btn-icon-start btn-outline-primary stretched-link"
                    >
                      <i data-acorn-icon="plus" />
                      <span>Add Products</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Tips End */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Dashboard;
