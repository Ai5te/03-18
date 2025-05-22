import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router';
import Header from './components/header/Header';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Prices from './pages/Prices';
import Contacts from './pages/Contacts';
import Footer from './components/footer/Footer';


import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
