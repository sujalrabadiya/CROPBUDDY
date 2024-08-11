import React from 'react';
import './ContactUs.css'; // Link to your CSS file
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Using react-icons for Font Awesome icons

const ContactUs = () => {
  return (
    <div className="contact-us">
      <section className="contact-info">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Whether you have a question, need support, or just want to say hello, feel free to get in touch using the information below or through the contact form.</p>
        <div className="info-grid">
          <div className="info-item">
            <FaEnvelope className="icon" />
            <h2>Email</h2>
            <p><a href="mailto:support@cropbuddy.com">support@cropbuddy.com</a></p>
          </div>
          <div className="info-item">
            <FaPhone className="icon" />
            <h2>Phone</h2>
            <p><a href="tel:+1234567890">+1-234-567-890</a></p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <h2>Address</h2>
            <p>123 Green Lane, Plant City, PC 12345</p>
          </div>
        </div>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
