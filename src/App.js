import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar.tsx';
import Home from './components/Home/Home.tsx';
import Products from './components/Products/Products.tsx';
import ProductDetail from './components/Products/ProductDetail.tsx';

// Context
import { CartProvider } from './context/CartContext';
import Cart from "./components/Cart/Cart.tsx";


function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
