import React from "react";

const ShopBannerImagen = require.context("../../../../uploads", true);
const ShopBanner = () => {
  return (
    <>
      <section id="advertisement">
        <div className="container">
          <img src={ShopBannerImagen(`./ShopBannerImage.png`)} alt="" />
        </div>
      </section>
    </>
  );
};
export default ShopBanner;
