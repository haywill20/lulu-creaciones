import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/Home/HomePage";
import ShopPage from "./components/pages/Shop/ShopPage";
import ContactPage from "./components/pages/Contact/ContactPage";
import HelpPage from "./components/pages/Ayuda/HelpPage";
import AboutUs from "./components/pages/Nosotros/AboutUs";
import DetailsPage from "./components/pages/Detalles/DetailsPage";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
