import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Products from "./components/pages/products/Products";
import ProductAdd from "./components/pages/products/ProductAdd";
import Slider from "./components/pages/sliders/Slider";
import SliderAdd from "./components/pages/sliders/SliderAdd";
import Contactos from "./components/pages/contactos/Contactos";
import Ayudas from "./components/pages/Ayudas/Ayudas";
import SliderUpdate from "./components/pages/sliders/SliderUpdate";
import ProductUpdate from "./components/pages/products/ProductUpdate";
import Suscripciones from "./components/pages/suscripciones/Suscripciones";
function App() {
  return (
    <>
      <div className="root">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/productAdd" element={<ProductAdd />} />
            <Route path="/updateProduct/:id" element={<ProductUpdate />} />
            <Route path="/sliders" element={<Slider />} />
            <Route path="/sliderAdd" element={<SliderAdd />} />
            <Route path="/updateSlider/:id" element={<SliderUpdate />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/ayudas" element={<Ayudas />} />
            <Route path="/suscripciones" element={<Suscripciones />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
