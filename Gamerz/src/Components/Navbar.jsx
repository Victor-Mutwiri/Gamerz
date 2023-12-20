// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Gaming Store</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="search-bar">
        {/* Include your search bar component here */}
      </div>
      <div className="user-actions">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/cart">
          <i className="fas fa-shopping-cart"></i> Cart (0)
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
