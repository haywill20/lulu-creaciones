import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Products from "./components/pages/products/Products";
import ProductAdd from "./components/pages/products/ProductAdd";
import Slider from "./components/pages/sliders/Slider";
import SliderAdd from "./components/pages/sliders/SliderAdd";
function App() {
  return (
    <>
      <div className="root">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/productAdd" element={<ProductAdd />} />
            <Route path="/sliders" element={<Slider />} />
            <Route path="/sliderAdd" element={<SliderAdd />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
