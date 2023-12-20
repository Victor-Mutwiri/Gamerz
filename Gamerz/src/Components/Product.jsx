// components/Product.js
import React, { useState } from 'react';

const Product = ({ product, onAddToCart }) => {
  const { name, description, price, images } = product;
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
  };

  return (
    <div className="product">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price.toFixed(2)}</p>
      <div>
        <img src={images[0]} alt={name} />
        <img src={images[1]} alt={name} />
        {/* Display additional images if needed */}
      </div>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          min="1"
          onChange={handleQuantityChange}
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
