import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import AboutPage from './components/pages/AboutPage'
import ContactPage from './components/pages/ContactPage'
import ComparisonPage from './components/pages/ComparisonPage'
import CartPage from './components/pages/CartPage'

function App() {

  return (
    <>
     <Header />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/comparison" element={<ComparisonPage />} />
     </Routes>
     <Footer />
    </>
  )
}

export default App
