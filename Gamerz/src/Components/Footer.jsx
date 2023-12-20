// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Copyright</h3>
        <p>&copy; 2023 Gaming Store. All rights reserved.</p>
      </div>
      <div className="footer-column">
        <h3>Help</h3>
        <ul>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/shipping">Shipping</a></li>
          <li><a href="/returns">Returns</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Information</h3>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/terms">Terms and Conditions</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Contact</h3>
        <p>Connect with us on social media:</p>
        <div className="social-icons">
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
