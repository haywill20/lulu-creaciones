import React from "react";
const TopBar = () => {
  return (
    <>
      {" "}
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="contactinfo">
                <ul className="nav nav-pills">
                  <li>
                    <a href="https://wa.me/+50584024316" target={"_blank"}>
                      <i className="fa fa-phone"></i> +505 8402-4316
                    </a>
                  </li>
                  <li>
                    <a href="mailto:lulucreaciones46@gmail.com">
                      <i className="fa fa-envelope"></i>{" "}
                      lulucreaciones46@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="social-icons pull-right">
                <ul className="nav navbar-nav">
                  <li>
                    <a
                      href="https://www.facebook.com/people/L%C3%BAlu-Creaciones/100083575566640/?mibextid=ZbWKwL"
                      target={"_blank"}
                    >
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target={"_blank"}>
                      <i className="fa-brands fa-instagram"></i>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" target={"_blank"}>
                      <i className="fa-brands fa-youtube"></i>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
