// ProductList.js
import React, { useState, useEffect } from 'react';
import Product from './Product';
import { getProducts } from '../api/products';

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your API or data source
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-list">
      <h2>Featured Products</h2>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
