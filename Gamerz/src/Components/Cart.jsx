// Cart.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cartItems, onRemoveItem }) => {
  return (
    <div className="cart">
      <h2>
        <FontAwesomeIcon icon={faShoppingCart} /> Shopping Cart
      </h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => onRemoveItem(item.id)}>
                <FontAwesomeIcon icon={faTrash} /> Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <strong>Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default Cart;
