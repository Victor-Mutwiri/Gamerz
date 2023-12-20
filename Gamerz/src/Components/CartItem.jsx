// CartItem.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ item, onRemoveItem }) => {
  return (
    <li className="cart-item">
      <div className="item-info">
        <span className="item-name">{item.name}</span>
        <span className="item-price">${item.price}</span>
      </div>
      <button className="remove-button" onClick={() => onRemoveItem(item.id)}>
        <FontAwesomeIcon icon={faTrash} /> Remove
      </button>
    </li>
  );
};

export default CartItem;
