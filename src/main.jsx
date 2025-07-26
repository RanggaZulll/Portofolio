// src/main.jsx (atau src/index.jsx)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot dari react-dom/client
import App from './App.jsx'; // Mengimpor komponen App

import { BrowserRouter } from 'react-router-dom'; // Mengimpor BrowserRouter

const root = createRoot(document.getElementById('root')); // Menggunakan createRoot yang sudah diimpor
root.render(
  <StrictMode> {/* Menggunakan StrictMode langsung */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);