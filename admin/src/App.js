import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import ThemeSetting from "./components/common/ThemeSetting";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Button from "./components/common/Button";
import Products from "./components/pages/products/Products";
function App() {
  return (
    <>
      <div className="root">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
