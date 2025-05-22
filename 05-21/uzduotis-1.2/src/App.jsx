import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router';
import Header from './components/header/Header';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {


  return (
    <>
      <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal/:id" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
