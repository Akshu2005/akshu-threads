// import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
// import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="brand-name">Akshu Threads</h2>
        <p className="brand-desc">Exclusive fashion curated for you.</p>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Indian Wear</a>
          <a href="#">Western Wear</a>
          <a href="#">Contact</a>
        </div>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Akshu Threads. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
