import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/home/logo.png";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <header id="header">
        <div className="header-middle">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="logo pull-left">
                  <Link to={"/"}>
                    <img src={Logo} alt="" />
                  </Link>
                </div>
              </div>

              <div className="col-sm-8">
                <div className="mainmenu pull-right">
                  <ul
                    className={`nav navbar-nav collapse navbar-collapse ${
                      menuVisible ? "show" : ""
                    }`}
                  >
                    <li>
                      <Link to={"/"} className="active">
                        Inicio
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link to={"/shop"}>Tienda</Link>
                    </li>
                    <li className="dropdown">
                      <a href="404.html">Nosotros</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contáctanos</a>
                    </li>
                    <li>
                      <a href="ayuda.html">Ayuda</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    onClick={toggleMenu}
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
