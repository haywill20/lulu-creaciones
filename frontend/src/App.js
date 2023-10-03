import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/Home/HomePage";
import ShopPage from "./components/pages/Shop/ShopPage";
import ContactPage from "./components/pages/Contact/ContactPage";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
