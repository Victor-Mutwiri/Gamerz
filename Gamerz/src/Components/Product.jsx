// Product.js
import React from 'react';

const Product = ({ product, onAddToCart }) => {
  const { id, name, price } = product;

  return (
    <div className="product">
      <img src={`url/to/your/images/${id}.jpg`} alt={name} />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
