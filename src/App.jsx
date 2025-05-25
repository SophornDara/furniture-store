// src/App.jsx
import React from 'react';
import HomePage from './pages/HomePage';
import './styles/main.css'; // Or './index.css' if Vite created that name

// If you plan to add more pages later, you can use React Router like this:
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ProductDetailPage from './pages/ProductDetailPage'; // Example for another page

function App() {
  return (
    // Option 1: Single Page Application (as per initial request)
    <HomePage />

    // Option 2: Multi-Page Application (if you expand later)
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     {/* <Route path="/products" element={<ProductListPage />} /> */}
    //     {/* <Route path="/product/:productId" element={<ProductDetailPage />} /> */}
    //     {/* Add other routes here */}
    //   </Routes>
    // </Router>
  );
}

export default App;