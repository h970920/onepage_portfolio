// src/components/Footer.js
import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="contact-info">
          <h3>Contact</h3>
          <p>Email: h970920@naver.com</p>
          <p>Phone: 010-2269-0920</p>
        </div>
        <div className="social-links">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Onest All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
