import React, { useState } from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import SellerDashboard from "./components/SellerDashboard";
import OfferForm from "./components/OfferForm";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Card from "./pages/Card";
import Error from "./pages/Error";
import Login from "./pages/Login";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null); // State to track the selected product

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/card"
            element={<Card setSelectedProduct={setSelectedProduct} />}
          />
          <Route
            path="/offer"
            element={
              <OfferForm
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
              />
            }
          />
          <Route path="/SellerDashboard" element={<SellerDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
