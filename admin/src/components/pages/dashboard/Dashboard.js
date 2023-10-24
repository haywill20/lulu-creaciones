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
                  Welcome, Zayn!
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
                        Today's
                      </a>
                      <a
                        className="dropdown-item text-medium"
                        href="#"
                        aria-selected="false"
                        role="tab"
                      >
                        Weekly
                      </a>
                      <a
                        className="dropdown-item text-medium"
                        href="#"
                        aria-selected="false"
                        role="tab"
                      >
                        Monthly
                      </a>
                      <a
                        className="dropdown-item text-medium"
                        href="#"
                        aria-selected="false"
                        role="tab"
                      >
                        Yearly
                      </a>
                    </div>
                  </div>
                </div>
                <h2 className="small-title">Stats</h2>
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
                          EARNINGS
                        </div>
                        <div className="text-primary cta-4">$ 315.20</div>
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
                          ORDERS
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
                            data-acorn-icon="server"
                            className="text-primary"
                          />
                        </div>
                        <div className="mb-1 d-flex align-items-center text-alternate text-small lh-1-25">
                          SESSIONS
                        </div>
                        <div className="text-primary cta-4">463</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <div className="card h-100 hover-scale-up cursor-pointer">
                      <div className="card-body d-flex flex-column align-items-center">
                        <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                          <i data-acorn-icon="user" className="text-primary" />
                        </div>
                        <div className="mb-1 d-flex align-items-center text-alternate text-small lh-1-25">
                          USERS
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
                            data-acorn-icon="arrow-top-left"
                            className="text-primary"
                          />
                        </div>
                        <div className="mb-1 d-flex align-items-center text-alternate text-small lh-1-25">
                          RETURNS
                        </div>
                        <div className="text-primary cta-4">2</div>
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
                          COMMENTS
                        </div>
                        <div className="text-primary cta-4">5</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Stats End */}
          <div className="row">
            {/* Recent Orders Start */}
            <div className="col-xl-6 mb-5">
              <h2 className="small-title">Recent Orders</h2>
              <div className="mb-n2 scroll-out">
                <div className="scroll-by-count" data-count={6}>
                  <div className="card mb-2 sh-15 sh-md-6">
                    <div className="card-body pt-0 pb-0 h-100">
                      <div className="row g-0 h-100 align-content-center">
                        <div className="col-10 col-md-4 d-flex align-items-center mb-3 mb-md-0 h-md-100">
                          <a
                            href="Orders.Detail.html"
                            className="body-link stretched-link"
                          >
                            Order #54129
                          </a>
                        </div>
                        <div className="col-2 col-md-3 d-flex align-items-center text-muted mb-1 mb-md-0 justify-content-end justify-content-md-start">
                          <span className="badge bg-outline-primary me-1">
                            PENDING
                          </span>
                        </div>
                        <div className="col-12 col-md-2 d-flex align-items-center mb-1 mb-md-0 text-alternate">
                          <span>
                            <span className="text-small">$</span>
                            17.35
                          </span>
                        </div>
                        <div className="col-12 col-md-3 d-flex align-items-center justify-content-md-end mb-1 mb-md-0 text-alternate">
                          Today - 13:20
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2 sh-15 sh-md-6">
                    <div className="card-body pt-0 pb-0 h-100">
                      <div className="row g-0 h-100 align-content-center">
                        <div className="col-10 col-md-4 d-flex align-items-center mb-3 mb-md-0 h-md-100">
                          <a
                            href="Orders.Detail.html"
                            className="body-link stretched-link"
                          >
                            Order #54128
                          </a>
                        </div>
                        <div className="col-2 col-md-3 d-flex align-items-center text-muted mb-1 mb-md-0 justify-content-end justify-content-md-start">
                          <span className="badge bg-outline-primary me-1">
                            PENDING
                          </span>
                        </div>
                        <div className="col-12 col-md-2 d-flex align-items-center mb-1 mb-md-0 text-alternate">
                          <span>
                            <span className="text-small">$</span>
                            145.20
                          </span>
                        </div>
                        <div className="col-12 col-md-3 d-flex align-items-center justify-content-md-end mb-1 mb-md-0 text-alternate">
                          Today - 11:32
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2 sh-15 sh-md-6">
                    <div className="card-body pt-0 pb-0 h-100">
                      <div className="row g-0 h-100 align-content-center">
                        <div className="col-10 col-md-4 d-flex align-items-center mb-3 mb-md-0 h-md-100">
                          <a
                            href="Orders.Detail.html"
                            className="body-link stretched-link"
                          >
                            Order #54127
                          </a>
                        </div>
                        <div className="col-2 col-md-3 d-flex align-items-center text-muted mb-1 mb-md-0 justify-content-end justify-content-md-start">
                          <span className="badge bg-outline-primary me-1">
                            PENDING
                          </span>
                        </div>
                        <div className="col-12 col-md-2 d-flex align-items-center mb-1 mb-md-0 text-alternate">
                          <span>
                            <span className="text-small">$</span>
                            110.85
                          </span>
                        </div>
                        <div className="col-12 col-md-3 d-flex align-items-center justify-content-md-end mb-1 mb-md-0 text-alternate">
                          Today - 11:20
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2 sh-15 sh-md-6">
                    <div className="card-body pt-0 pb-0 h-100">
                      <div className="row g-0 h-100 align-content-center">
                        <div className="col-10 col-md-4 d-flex align-items-center mb-3 mb-md-0 h-md-100">
                          <a
                            href="Orders.Detail.html"
                            className="body-link stretched-link"
                          >
                            Order #54126
                          </a>
                        </div>
                        <div className="col-2 col-md-3 d-flex align-items-center text-muted mb-1 mb-md-0 justify-content-end justify-content-md-start">
                          <span className="badge bg-outline-primary me-1">
                            PENDING
                          </span>
                        </div>
                        <div className="col-12 col-md-2 d-flex align-items-center mb-1 mb-md-0 text-alternate">
                          <span>
                            <span className="text-small">$</span>
                            58.00
                          </span>
                        </div>
                        <div className="col-12 col-md-3 d-flex align-items-center justify-content-md-end mb-1 mb-md-0 text-alternate">
                          Today - 10:20
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2 sh-15 sh-md-6">
                    <div className="card-body pt-0 pb-0 h-100">
                      <div className="row g-0 h-100 align-content-center">
                        <div className="col-10 col-md-4 d-flex align-items-center mb-3 mb-md-0 h-md-100">
                          <a
                            href="Orders.Detail.html"
                            className="body-link stretched-link"
                          >
                            Order #54125
                          </a>
                        </div>
                        <div className="col-2 col-md-3 d-flex align-items-center text-muted mb-1 mb-md-0 justify-content-end justify-content-md-start">
                          <span className="badge bg-outline-secondary me-1">
                            SHIPPED
                          </span>
                        </div>
                        <div className="col-12 col-md-2 d-flex align-items-center mb-1 mb-md-0 text-alternate">
                          <span>
                            <span className="text-small">$</span>
                            22.05
                          </span>
                        </div>
                        <div className="col-12 col-md-3 d-flex align-items-center justify-content-md-end mb-1 mb-md-0 text-alternate">
                          Today - 07:30
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2 sh-15 sh-md-6">
                    <div className="card-body pt-0 pb-0 h-100">
                      <div className="row g-0 h-100 align-content-center">
                        <div className="col-10 col-md-4 d-flex align-items-center mb-3 mb-md-0 h-md-100">
                          <a
                            href="Orders.Detail.html"
                            className="body-link stretched-link"
                          >
                            Order #54124
                          </a>
                        </div>
                        <div className="col-2 col-md-3 d-flex align-items-center text-muted mb-1 mb-md-0 justify-content-end justify-content-md-start">
                          <span className="badge bg-outline-secondary me-1">
                            SHIPPED
                          </span>
                        </div>
                        <div className="col-12 col-md-2 d-flex align-items-center mb-1 mb-md-0 text-alternate">
                          <span>
                            <span className="text-small">$</span>
                            14.25
                          </span>
                        </div>
                        <div className="col-12 col-md-3 d-flex align-items-center justify-content-md-end mb-1 mb-md-0 text-alternate">
                          Monday - 17:30
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2 sh-15 sh-md-6">
                    <div className="card-body pt-0 pb-0 h-100">
                      <div className="row g-0 h-100 align-content-center">
                        <div className="col-10 col-md-4 d-flex align-items-center mb-3 mb-md-0 h-md-100">
                          <a
                            href="Orders.Detail.html"
                            className="body-link stretched-link"
                          >
                            Order #54123
                          </a>
                        </div>
                        <div className="col-2 col-md-3 d-flex align-items-center text-muted mb-1 mb-md-0 justify-content-end justify-content-md-start">
                          <span className="badge bg-outline-quaternary me-1">
                            DELIVERED
                          </span>
                        </div>
                        <div className="col-12 col-md-2 d-flex align-items-center mb-1 mb-md-0 text-alternate">
                          <span>
                            <span className="text-small">$</span>
                            42.00
                          </span>
                        </div>
                        <div className="col-12 col-md-3 d-flex align-items-center justify-content-md-end mb-1 mb-md-0 text-alternate">
                          Monday - 11:25
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2 sh-15 sh-md-6">
                    <div className="card-body pt-0 pb-0 h-100">
                      <div className="row g-0 h-100 align-content-center">
                        <div className="col-10 col-md-4 d-flex align-items-center mb-3 mb-md-0 h-md-100">
                          <a
                            href="Orders.Detail.html"
                            className="body-link stretched-link"
                          >
                            Order #54122
                          </a>
                        </div>
                        <div className="col-2 col-md-3 d-flex align-items-center text-muted mb-1 mb-md-0 justify-content-end justify-content-md-start">
                          <span className="badge bg-outline-quaternary me-1">
                            DELIVERED
                          </span>
                        </div>
                        <div className="col-12 col-md-2 d-flex align-items-center mb-1 mb-md-0 text-alternate">
                          <span>
                            <span className="text-small">$</span>
                            63.25
                          </span>
                        </div>
                        <div className="col-12 col-md-3 d-flex align-items-center justify-content-md-end mb-1 mb-md-0 text-alternate">
                          Monday - 15:20
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2 sh-15 sh-md-6">
                    <div className="card-body pt-0 pb-0 h-100">
                      <div className="row g-0 h-100 align-content-center">
                        <div className="col-10 col-md-4 d-flex align-items-center mb-3 mb-md-0 h-md-100">
                          <a
                            href="Orders.Detail.html"
                            className="body-link stretched-link"
                          >
                            Order #54121
                          </a>
                        </div>
                        <div className="col-2 col-md-3 d-flex align-items-center text-muted mb-1 mb-md-0 justify-content-end justify-content-md-start">
                          <span className="badge bg-outline-quaternary me-1">
                            DELIVERED
                          </span>
                        </div>
                        <div className="col-12 col-md-2 d-flex align-items-center mb-1 mb-md-0 text-alternate">
                          <span>
                            <span className="text-small">$</span>
                            74.00
                          </span>
                        </div>
                        <div className="col-12 col-md-3 d-flex align-items-center justify-content-md-end mb-1 mb-md-0 text-alternate">
                          Monday - 13:10
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Recent Orders End */}
            {/* Performance Start */}
            <div className="col-xl-6 mb-5">
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
                        Today's
                      </a>
                      <a
                        className="dropdown-item text-medium"
                        href="#"
                        aria-selected="false"
                        role="tab"
                      >
                        Weekly
                      </a>
                      <a
                        className="dropdown-item text-medium"
                        href="#"
                        aria-selected="false"
                        role="tab"
                      >
                        Monthly
                      </a>
                      <a
                        className="dropdown-item text-medium"
                        href="#"
                        aria-selected="false"
                        role="tab"
                      >
                        Yearly
                      </a>
                    </div>
                  </div>
                </div>
                <h2 className="small-title">Performance</h2>
              </div>
              <div className="card sh-45 h-xl-100-card">
                <div className="card-body h-100">
                  <div className="h-100">
                    <canvas id="horizontalTooltipChart" />
                    <div className="custom-tooltip position-absolute bg-foreground rounded-md border border-separator pe-none p-3 d-flex z-index-1 align-items-center opacity-0 basic-transform-transition">
                      <div className="icon-container border d-flex align-middle align-items-center justify-content-center align-self-center rounded-xl sh-5 sw-5 rounded-xl me-3">
                        <span className="icon" />
                      </div>
                      <div>
                        <span className="text d-flex align-middle text-alternate align-items-center text-small">
                          Bread
                        </span>
                        <span className="value d-flex align-middle text-body align-items-center cta-4">
                          300
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Performance End */}
          </div>
          <div className="row gx-4 gy-5">
            {/* Top Selling Items Start */}
            <div className="col-xl-6 mb-5">
              <h2 className="small-title">Top Selling Items</h2>
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
            <div className="col-12 col-xxl">
              <div className="row">
                {/* Activity Start */}
                <div className="col-xxl-6 mb-5">
                  <h2 className="small-title">Activity</h2>
                  <div className="card sh-35">
                    <div className="card-body scroll-out h-100">
                      <div className="scroll h-100">
                        <div className="row g-0 mb-2">
                          <div className="col-auto">
                            <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                              <div className="sh-3">
                                <i
                                  data-acorn-icon="circle"
                                  className="text-primary align-top"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card-body d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                              <div className="d-flex flex-column">
                                <div className="text-alternate mt-n1 lh-1-25">
                                  New user registiration
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                              <div className="text-muted ms-2 mt-n1 lh-1-25">
                                18 Dec
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 mb-2">
                          <div className="col-auto">
                            <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                              <div className="sh-3">
                                <i
                                  data-acorn-icon="circle"
                                  className="text-primary align-top"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card-body d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                              <div className="d-flex flex-column">
                                <div className="text-alternate mt-n1 lh-1-25">
                                  3 new product added
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                              <div className="text-muted ms-2 mt-n1 lh-1-25">
                                18 Dec
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 mb-2">
                          <div className="col-auto">
                            <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                              <div className="sh-3">
                                <i
                                  data-acorn-icon="square"
                                  className="text-secondary align-top"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card-body d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                              <div className="d-flex flex-column">
                                <div className="text-alternate mt-n1 lh-1-25">
                                  Product out of stock:
                                  <a
                                    href="#"
                                    className="alternate-link underline-link"
                                  >
                                    Breadstick
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                              <div className="text-muted ms-2 mt-n1 lh-1-25">
                                16 Dec
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 mb-2">
                          <div className="col-auto">
                            <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                              <div className="sh-3">
                                <i
                                  data-acorn-icon="square"
                                  className="text-secondary align-top"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card-body d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                              <div className="d-flex flex-column">
                                <div className="text-alternate mt-n1 lh-1-25">
                                  Category page returned an error
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                              <div className="text-muted ms-2 mt-n1 lh-1-25">
                                15 Dec
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 mb-2">
                          <div className="col-auto">
                            <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                              <div className="sh-3">
                                <i
                                  data-acorn-icon="circle"
                                  className="text-primary align-top"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card-body d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                              <div className="d-flex flex-column">
                                <div className="text-alternate mt-n1 lh-1-25">
                                  14 products added
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                              <div className="text-muted ms-2 mt-n1 lh-1-25">
                                15 Dec
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 mb-2">
                          <div className="col-auto">
                            <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                              <div className="sh-3">
                                <i
                                  data-acorn-icon="hexagon"
                                  className="text-tertiary align-top"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card-body d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                              <div className="d-flex flex-column">
                                <div className="text-alternate mt-n1 lh-1-25">
                                  New sale:
                                  <a
                                    href="#"
                                    className="alternate-link underline-link"
                                  >
                                    Steirer Brot
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                              <div className="text-muted ms-2 mt-n1 lh-1-25">
                                15 Dec
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 mb-2">
                          <div className="col-auto">
                            <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                              <div className="sh-3">
                                <i
                                  data-acorn-icon="hexagon"
                                  className="text-tertiary align-top"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card-body d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                              <div className="d-flex flex-column">
                                <div className="text-alternate mt-n1 lh-1-25">
                                  New sale:
                                  <a
                                    href="#"
                                    className="alternate-link underline-link"
                                  >
                                    Soda Bread
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                              <div className="text-muted ms-2 mt-n1 lh-1-25">
                                15 Dec
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 mb-2">
                          <div className="col-auto">
                            <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                              <div className="sh-3">
                                <i
                                  data-acorn-icon="triangle"
                                  className="text-warning align-top"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card-body d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                              <div className="d-flex flex-column">
                                <div className="text-alternate mt-n1 lh-1-25">
                                  Recived a support ticket
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                              <div className="text-muted ms-2 mt-n1 lh-1-25">
                                14 Dec
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 mb-2">
                          <div className="col-auto">
                            <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                              <div className="sh-3">
                                <i
                                  data-acorn-icon="hexagon"
                                  className="text-tertiary align-top"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card-body d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                              <div className="d-flex flex-column">
                                <div className="text-alternate mt-n1 lh-1-25">
                                  New sale:
                                  <a
                                    href="#"
                                    className="alternate-link underline-link"
                                  >
                                    Cholermüs
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                              <div className="text-muted ms-2 mt-n1 lh-1-25">
                                13 Dec
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 mb-2">
                          <div className="col-auto">
                            <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                              <div className="sh-3">
                                <i
                                  data-acorn-icon="hexagon"
                                  className="text-tertiary align-top"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card-body d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                              <div className="d-flex flex-column">
                                <div className="text-alternate mt-n1 lh-1-25">
                                  New sale:
                                  <a
                                    href="#"
                                    className="alternate-link underline-link"
                                  >
                                    Bazlama
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                              <div className="text-muted ms-2 mt-n1 lh-1-25">
                                13 Dec
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 mb-2">
                          <div className="col-auto">
                            <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                              <div className="sh-3">
                                <i
                                  data-acorn-icon="triangle"
                                  className="text-warning align-top"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card-body d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                              <div className="d-flex flex-column">
                                <div className="text-alternate mt-n1 lh-1-25">
                                  Recived a comment
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                              <div className="text-muted ms-2 mt-n1 lh-1-25">
                                13 Dec
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 mb-2">
                          <div className="col-auto">
                            <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                              <div className="sh-3">
                                <i
                                  data-acorn-icon="triangle"
                                  className="text-warning align-top"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card-body d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                              <div className="d-flex flex-column">
                                <div className="text-alternate mt-n1 lh-1-25">
                                  Recived an email
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                              <div className="text-muted ms-2 mt-n1 lh-1-25">
                                13 Dec
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 mb-2">
                          <div className="col-auto">
                            <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                              <div className="sh-3">
                                <i
                                  data-acorn-icon="hexagon"
                                  className="text-tertiary align-top"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card-body d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                              <div className="d-flex flex-column">
                                <div className="text-alternate mt-n1 lh-1-25">
                                  New sale:
                                  <a
                                    href="#"
                                    className="alternate-link underline-link"
                                  >
                                    Bazlama
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                              <div className="text-muted ms-2 mt-n1 lh-1-25">
                                12 Dec
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 mb-2">
                          <div className="col-auto">
                            <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                              <div className="sh-3">
                                <i
                                  data-acorn-icon="triangle"
                                  className="text-warning align-top"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card-body d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                              <div className="d-flex flex-column">
                                <div className="text-alternate mt-n1 lh-1-25">
                                  Recived a comment
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                              <div className="text-muted ms-2 mt-n1 lh-1-25">
                                12 Dec
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Activity End */}
                {/* Recent Reviews Start */}
                <div className="col-xxl-6 mb-5">
                  <h2 className="small-title">Recent Reviews</h2>
                  <div className="card sh-35">
                    <div className="card-body mb-n2 scroll-out h-100">
                      <div className="scroll h-100">
                        <div className="row g-0 sh-10 mb-3">
                          <div className="col-auto">
                            <a href="Products.Detail.html">
                              <img
                                src="img/product/small/product-2.webp"
                                className="card-img rounded-md h-100 sw-8"
                                alt="thumb"
                              />
                            </a>
                          </div>
                          <div className="col">
                            <div className="card-body d-flex flex-column pt-0 pb-0 ps-3 pe-0 h-100 justify-content-center">
                              <div className="d-flex flex-column">
                                <div className="mb-1">
                                  <a
                                    href="Customers.Detail.html"
                                    className="body-link"
                                  >
                                    Kathleen Bertha
                                  </a>
                                </div>
                                <div className="text-small text-muted text-truncate mb-1">
                                  Chocolate bar marzipan marzipan carrot cake
                                  gingerbread pastry ice cream. Ice cream danish
                                  sugar plum biscuit pudding powder soufflé
                                  donut macaroon.
                                </div>
                                <div className="br-wrapper br-theme-cs-icon">
                                  <select
                                    className="rating"
                                    name="rating"
                                    autoComplete="off"
                                    data-readonly="true"
                                    data-initial-rating={5}
                                  >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 sh-10 mb-3">
                          <div className="col-auto">
                            <a href="Products.Detail.html">
                              <img
                                src="img/product/small/product-3.webp"
                                className="card-img rounded-md h-100 sw-8"
                                alt="thumb"
                              />
                            </a>
                          </div>
                          <div className="col">
                            <div className="card-body d-flex flex-column pt-0 pb-0 ps-3 pe-0 h-100 justify-content-center">
                              <div className="d-flex flex-column">
                                <div className="mb-1">
                                  <a
                                    href="Customers.Detail.html"
                                    className="body-link"
                                  >
                                    Kathleen Bertha
                                  </a>
                                </div>
                                <div className="text-small text-muted text-truncate mb-1">
                                  Bear claw sweet liquorice jujubes. Muffin
                                  gingerbread bear claw.
                                </div>
                                <div className="br-wrapper br-theme-cs-icon">
                                  <select
                                    className="rating"
                                    name="rating"
                                    autoComplete="off"
                                    data-readonly="true"
                                    data-initial-rating={5}
                                  >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 sh-10 mb-3">
                          <div className="col-auto">
                            <a href="Products.Detail.html">
                              <img
                                src="img/product/small/product-1.webp"
                                className="card-img rounded-md h-100 sw-8"
                                alt="thumb"
                              />
                            </a>
                          </div>
                          <div className="col">
                            <div className="card-body d-flex flex-column pt-0 pb-0 ps-3 pe-0 h-100 justify-content-center">
                              <div className="d-flex flex-column">
                                <div className="mb-1">
                                  <a
                                    href="Customers.Detail.html"
                                    className="body-link"
                                  >
                                    Olli Hawkins
                                  </a>
                                </div>
                                <div className="text-small text-muted text-truncate mb-1">
                                  Bear claw sweet liquorice jujubes. Muffin
                                  gingerbread bear claw.
                                </div>
                                <div className="br-wrapper br-theme-cs-icon">
                                  <select
                                    className="rating"
                                    name="rating"
                                    autoComplete="off"
                                    data-readonly="true"
                                    data-initial-rating={5}
                                  >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 sh-10">
                          <div className="col-auto">
                            <a href="Products.Detail.html">
                              <img
                                src="img/product/small/product-10.webp"
                                className="card-img rounded-md h-100 sw-8"
                                alt="thumb"
                              />
                            </a>
                          </div>
                          <div className="col">
                            <div className="card-body d-flex flex-column pt-0 pb-0 ps-3 pe-0 h-100 justify-content-center">
                              <div className="d-flex flex-column">
                                <div className="mb-1">
                                  <a
                                    href="Customers.Detail.html"
                                    className="body-link"
                                  >
                                    Zayn Hammond
                                  </a>
                                </div>
                                <div className="text-small text-muted text-truncate mb-1">
                                  Chupa chups candy canes.
                                </div>
                                <div className="br-wrapper br-theme-cs-icon">
                                  <select
                                    className="rating"
                                    name="rating"
                                    autoComplete="off"
                                    data-readonly="true"
                                    data-initial-rating={5}
                                  >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Recent Reviews End */}
              </div>
            </div>
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
