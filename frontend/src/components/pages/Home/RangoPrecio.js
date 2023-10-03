import React, { useState } from "react";

const RangoPrecio = () => {
  const [rangeValue, setRangeValue] = useState([230, 230]); // Cambiado el valor inicial

  const handleRangeChange = (event) => {
    const newValue = [parseInt(event.target.value), rangeValue[1]];
    setRangeValue(newValue);
  };

  return (
    <>
      <div className="price-range">
        <h2>Rangos de Precios</h2>
        <div className="well text-center">
          <input
            type="range"
            className="span2"
            value={rangeValue[0]}
            min="20"
            max="230"
            step="5"
            onChange={handleRangeChange}
            id="sl2"
          />
          <br />
          <b className="pull-left">C$ {rangeValue[0]}</b>{" "}
          <b className="pull-right">C$ {rangeValue[1]}</b>
        </div>
      </div>
    </>
  );
};

export default RangoPrecio;
