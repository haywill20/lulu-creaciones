import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <div id="nav" className="nav-container d-flex">
        <div className="nav-content d-flex">
          {/* Logo Start */}
          <div className="logo position-relative">
            <a href="Dashboard.html">
              {/* Logo can be added directly */}
              {/* <img src="img/logo/logo-white.svg" alt="logo" /> */}
              {/* Or added via css to provide different ones for different color themes */}
              <div className="img" />
            </a>
          </div>
          {/* Logo End */}
          {/* User Menu Start */}
          <div className="user-container d-flex">
            <a
              href="#"
              className="d-flex user position-relative"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="profile"
                alt="profile"
                src="img/profile/profile-1.webp"
              />
              <div className="name">Zayn Hartley</div>
            </a>
            <div className="dropdown-menu dropdown-menu-end user-menu wide">
              <div className="row mb-3 ms-0 me-0">
                <div className="col-12 ps-1 mb-2">
                  <div className="text-extra-small text-primary">ACCOUNT</div>
                </div>
                <div className="col-6 ps-1 pe-1">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">User Info</a>
                    </li>
                    <li>
                      <a href="#">Preferences</a>
                    </li>
                    <li>
                      <a href="#">Calendar</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 pe-1 ps-1">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Security</a>
                    </li>
                    <li>
                      <a href="#">Billing</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mb-1 ms-0 me-0">
                <div className="col-12 p-1 mb-2 pt-2">
                  <div className="text-extra-small text-primary">
                    APPLICATION
                  </div>
                </div>
                <div className="col-6 ps-1 pe-1">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Themes</a>
                    </li>
                    <li>
                      <a href="#">Language</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 pe-1 ps-1">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Devices</a>
                    </li>
                    <li>
                      <a href="#">Storage</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mb-1 ms-0 me-0">
                <div className="col-12 p-1 mb-3 pt-3">
                  <div className="separator-light" />
                </div>
                <div className="col-6 ps-1 pe-1">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">
                        <i
                          data-acorn-icon="help"
                          className="me-2"
                          data-acorn-size={17}
                        />
                        <span className="align-middle">Help</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          data-acorn-icon="file-text"
                          className="me-2"
                          data-acorn-size={17}
                        />
                        <span className="align-middle">Docs</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 pe-1 ps-1">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">
                        <i
                          data-acorn-icon="gear"
                          className="me-2"
                          data-acorn-size={17}
                        />
                        <span className="align-middle">Settings</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          data-acorn-icon="logout"
                          className="me-2"
                          data-acorn-size={17}
                        />
                        <span className="align-middle">Logout</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* User Menu End */}
          {/* Icons Menu Start */}
          <ul className="list-unstyled list-inline text-center menu-icons">
            <li className="list-inline-item">
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#searchPagesModal"
              >
                <i data-acorn-icon="search" data-acorn-size={18} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" id="pinButton" className="pin-button">
                <i
                  data-acorn-icon="lock-on"
                  className="unpin"
                  data-acorn-size={18}
                />
                <i
                  data-acorn-icon="lock-off"
                  className="pin"
                  data-acorn-size={18}
                />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" id="colorButton">
                <i
                  data-acorn-icon="light-on"
                  className="light"
                  data-acorn-size={18}
                />
                <i
                  data-acorn-icon="light-off"
                  className="dark"
                  data-acorn-size={18}
                />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="#"
                data-bs-toggle="dropdown"
                data-bs-target="#notifications"
                aria-haspopup="true"
                aria-expanded="false"
                className="notification-button"
              >
                <div className="position-relative d-inline-flex">
                  <i data-acorn-icon="bell" data-acorn-size={18} />
                  <span className="position-absolute notification-dot rounded-xl" />
                </div>
              </a>
              <div
                className="dropdown-menu dropdown-menu-end wide notification-dropdown scroll-out"
                id="notifications"
              >
                <div className="scroll">
                  <ul className="list-unstyled border-last-none">
                    <li className="mb-3 pb-3 border-bottom border-separator-light d-flex">
                      <img
                        src="img/profile/profile-1.webp"
                        className="me-3 sw-4 sh-4 rounded-xl align-self-center"
                        alt="..."
                      />
                      <div className="align-self-center">
                        <a href="#">Joisse Kaycee just sent a new comment!</a>
                      </div>
                    </li>
                    <li className="mb-3 pb-3 border-bottom border-separator-light d-flex">
                      <img
                        src="img/profile/profile-2.webp"
                        className="me-3 sw-4 sh-4 rounded-xl align-self-center"
                        alt="..."
                      />
                      <div className="align-self-center">
                        <a href="#">New order received! It is total $147,20.</a>
                      </div>
                    </li>
                    <li className="mb-3 pb-3 border-bottom border-separator-light d-flex">
                      <img
                        src="img/profile/profile-3.webp"
                        className="me-3 sw-4 sh-4 rounded-xl align-self-center"
                        alt="..."
                      />
                      <div className="align-self-center">
                        <a href="#">
                          3 items just added to wish list by a user!
                        </a>
                      </div>
                    </li>
                    <li className="pb-3 pb-3 border-bottom border-separator-light d-flex">
                      <img
                        src="img/profile/profile-6.webp"
                        className="me-3 sw-4 sh-4 rounded-xl align-self-center"
                        alt="..."
                      />
                      <div className="align-self-center">
                        <a href="#">Kirby Peters just sent a new message!</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          {/* Icons Menu End */}
          {/* Menu Start */}
          <div className="menu-container flex-grow-1">
            <ul id="menu" className="menu">
              <li>
                <Link to={"/"}>
                  <i
                    data-acorn-icon="shop"
                    className="icon"
                    data-acorn-size={18}
                  />
                  <span className="label">Dashboard</span>
                </Link>
              </li>
              <li>
                <a href="#products" data-href="Products.html">
                  <i
                    data-acorn-icon="cupcake"
                    className="icon"
                    data-acorn-size={18}
                  />
                  <span className="label">Products</span>
                </a>
                <ul id="products">
                  <li>
                    <Link to={"/products"}>
                      <span className="label">List</span>
                    </Link>
                  </li>
                  <li>
                    <a href="Products.Detail.html">
                      <span className="label">Detail</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#orders" data-href="Orders.html">
                  <i
                    data-acorn-icon="cart"
                    className="icon"
                    data-acorn-size={18}
                  />
                  <span className="label">Orders</span>
                </a>
                <ul id="orders">
                  <li>
                    <a href="Orders.List.html">
                      <span className="label">List</span>
                    </a>
                  </li>
                  <li>
                    <a href="Orders.Detail.html">
                      <span className="label">Detail</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#customers" data-href="Customers.html">
                  <i
                    data-acorn-icon="user"
                    className="icon"
                    data-acorn-size={18}
                  />
                  <span className="label">Customers</span>
                </a>
                <ul id="customers">
                  <li>
                    <a href="Customers.List.html">
                      <span className="label">List</span>
                    </a>
                  </li>
                  <li>
                    <a href="Customers.Detail.html">
                      <span className="label">Detail</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#storefront" data-href="Storefront.html">
                  <i
                    data-acorn-icon="screen"
                    className="icon"
                    data-acorn-size={18}
                  />
                  <span className="label">Storefront</span>
                </a>
                <ul id="storefront">
                  <li>
                    <a href="Storefront.Home.html">
                      <span className="label">Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="Storefront.Filters.html">
                      <span className="label">Filters</span>
                    </a>
                  </li>
                  <li>
                    <a href="Storefront.Categories.html">
                      <span className="label">Categories</span>
                    </a>
                  </li>
                  <li>
                    <a href="Storefront.Detail.html">
                      <span className="label">Detail</span>
                    </a>
                  </li>
                  <li>
                    <a href="Storefront.Cart.html">
                      <span className="label">Cart</span>
                    </a>
                  </li>
                  <li>
                    <a href="Storefront.Checkout.html">
                      <span className="label">Checkout</span>
                    </a>
                  </li>
                  <li>
                    <a href="Storefront.Invoice.html">
                      <span className="label">Invoice</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="Shipping.html">
                  <i
                    data-acorn-icon="shipping"
                    className="icon"
                    data-acorn-size={18}
                  />
                  <span className="label">Shipping</span>
                </a>
              </li>
              <li>
                <a href="Discount.html">
                  <i
                    data-acorn-icon="tag"
                    className="icon"
                    data-acorn-size={18}
                  />
                  <span className="label">Discount</span>
                </a>
              </li>
              <li>
                <a href="Settings.html">
                  <i
                    data-acorn-icon="gear"
                    className="icon"
                    data-acorn-size={18}
                  />
                  <span className="label">Settings</span>
                </a>
              </li>
            </ul>
          </div>
          {/* Menu End */}
          {/* Mobile Buttons Start */}
          <div className="mobile-buttons-container">
            {/* Menu Button Start */}
            <a href="#" id="mobileMenuButton" className="menu-button">
              <i data-acorn-icon="menu" />
            </a>
            {/* Menu Button End */}
          </div>
          {/* Mobile Buttons End */}
        </div>
        <div className="nav-shadow" />
      </div>
    </>
  );
}

export default Menu;
