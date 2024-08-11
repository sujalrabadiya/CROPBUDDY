import React from 'react';
import './Footer.css'; // Ensure you have the corresponding CSS file

const Footer = () => {
  return (
    <footer id="footer" className="py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4 className="footer-title">About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#collection">Collection</a></li>
              <li><a href="#blogs">Blogs</a></li>
              <li><a href="#cart">Cart</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4 className="footer-title">Contact Us</h4>
            <p>123 Green Street, Plant City, PC 45678</p>
            <p>Email: <a href="mailto:support@cropbuddy.com">support@cropbuddy.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
            <div className="social-links">
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p>&copy; {new Date().getFullYear()} CropBuddy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
