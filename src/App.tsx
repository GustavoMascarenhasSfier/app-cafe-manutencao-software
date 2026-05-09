// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loja from "./pages/Loja";
import Checkout from "./pages/Checkout/index";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Loja />} />
                <Route path="/CheckOut" element={<Checkout />} />
            </Routes>
        </Router>
    );
};

export default App;
