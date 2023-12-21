// App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Products from './Pages/Products';
import ShoppingCart from './Pages/ShoppingCart';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { SampleProducts } from './Components/SampleProducts';
import CheckingOut from './Pages/CheckingOut';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding items to the cart
  const handleAddToCart = (item) => {
    // Update the cartItems state with the new item
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Pass the products and handleAddToCart function to Products */}
        <Route path="/Products" element={<Products products={SampleProducts} onAddToCart={handleAddToCart} />} />
        {/* Pass the cartItems state to ShoppingCart */}
        <Route path="/shoppingCart" element={<ShoppingCart cartItems={cartItems} />} />
        {/* Pass the cartItems state to CheckingOut */}
        <Route path="/checkout" element={<CheckingOut cartItems={cartItems} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
