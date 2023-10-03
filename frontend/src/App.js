import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/Home/HomePage";
import ShopPage from "./components/pages/Shop/ShopPage";
import ContactPage from "./components/pages/Contact/ContactPage";
import HelpPage from "./components/pages/Ayuda/HelpPage";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/help" element={<HelpPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
