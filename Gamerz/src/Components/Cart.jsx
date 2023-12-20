// components/Cart.js
import React from 'react';

const Cart = ({ cartItems, onCheckout }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal(cartItems).toFixed(2)}</p>
      <button onClick={onCheckout}>Proceed to Checkout</button>
    </div>
  );
};

const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

export default Cart;
