// components/Checkout.js
import React, { useState } from 'react';

const Checkout = ({ cartItems, onPlaceOrder }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    // Add validation if needed
    onPlaceOrder(formData, cartItems);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={handleInputChange} required />
        {/* Add more input fields for email, address, etc. */}
        <button type="button" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
