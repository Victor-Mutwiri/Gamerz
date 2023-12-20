// ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/products';

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on the ID from your API or data source
    getProductById(parseInt(id, 10)).then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const { name, price, description } = product;

  return (
    <div className="product-detail">
      <h2>{name}</h2>
      <p>${price.toFixed(2)}</p>
      <p>{description}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
