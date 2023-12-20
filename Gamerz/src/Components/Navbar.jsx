// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Gamerz Logo</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
      </div>
      <div className="user-actions">
        <Link to="/account">Account</Link>
        <Link to="/shoppingCart">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
