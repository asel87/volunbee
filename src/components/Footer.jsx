import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTelegramPlane, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-main">
        <div className="footer-empowering">
  Empowering students to make a difference through meaningful volunteer opportunities.
  <div className="social-icons">
    <FaFacebookF />
    <FaTelegramPlane />
    <FaInstagram />
  </div>
</div>


        <div className="footer-section-block">
          <h3 className="footer-section-title">Quick Links</h3>
          <ul className="footer-links-list">
            <li>About Us</li>
            <li>Find Events</li>
            <li>Resources</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-section-block">
          <h3 className="footer-section-title">Support</h3>
          <ul className="footer-links-list">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div className="footer-section-block">
          <h3 className="footer-section-title">Newsletter</h3>
          <p className="newsletter-text">Stay updated with our latest opportunities</p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="newsletter-button">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 VolunBee. All rights reserved.</p>
        <div className="footer-legal-links">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Cookies</span>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
