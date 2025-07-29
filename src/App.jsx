import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Home from './halaman1/Home';

import './App.css';

function App() {

  return (
    <div className='app-container'>
      <Navbar/>
      <main className="app-main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home/>
            }
          />
          <Route path="/Education" element={<Home />} />
          <Route path="/Experience" element={<Home />} />
          <Route path="/Project" element={<Home />} />
          <Route path="/Achievement" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;