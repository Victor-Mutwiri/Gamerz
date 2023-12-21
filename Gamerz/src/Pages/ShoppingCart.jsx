// shoppingCart.jsx (page)
import React from 'react';
import Navbar from '../Components/Navbar';
import Cart from '../Components/Cart';
import Footer from '../Components/Footer';

const ShoppingCart = () => {
  // Assuming you have some logic to get cart items and handle checkout
  const cartItems = [
    { id: 1, name: 'Product 1', price: 29.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 49.99, quantity: 1 },
    // Add more items
  ];

  const handleCheckout = () => {
    // Implement your checkout logic here
    console.log('Proceeding to checkout...');
    navigate('/checkout');
  };

  return (
    <>
      <div>This is the cart page</div>
      <Cart cartItems={cartItems} onCheckout={handleCheckout} />
    </>
  );
};

export default ShoppingCart;
