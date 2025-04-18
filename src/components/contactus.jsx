// import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Get in Touch with Us</h2>
        <p>We’d love to hear from you! Whether you have a question or just want to say hi.</p>
      </div>

      <div className="contact-content">
        {/* Left Section - Contact Form */}
        <div className="contact-form">
          <h3>Send a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right Section - Contact Info */}
        <div className="contact-info">
          <h3>Contact Details</h3>
          <p><FaMapMarkerAlt /> Muzaffarpur, Bihar, India</p>
          <p><FaPhone /> +91 98765 43210</p>
          <p><FaEnvelope /> support@akshuthreads.com</p>

          <div className="contact-socials">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
