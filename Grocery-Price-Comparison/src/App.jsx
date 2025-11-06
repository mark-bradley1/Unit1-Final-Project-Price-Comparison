import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AboutPage from './components/pages/AboutPage'
import ContactPage from "./components/pages/ContactPage";
// import ComparisonPage from './components/pages/ComparisonPage'
// import CartPage from './components/pages/CartPage'
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/cart" element={<CartPage />} /> */}
          {/* <Route path="/comparison" element={<ComparisonPage />} /> */}
        </Routes>
      <Footer />
    </>
  );
}

export default App;
