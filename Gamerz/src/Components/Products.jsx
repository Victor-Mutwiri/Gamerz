// pages/Products.js
import React from 'react';
import Product from './Product';
import { SampleProducts } from './SampleProducts';

const Products = ({ onAddToCart }) => {
  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {SampleProducts.map((product) => (
          <Product key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
