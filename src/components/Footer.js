// src/components/Footer.js
import React from "react";
import "../styles/Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa6";

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
              <a className="" href="#">
                <FaInstagram />
                Instagram
              </a>
            </li>
            <li>
              <a href="#">
                <FaGithub />
                GitHub
              </a>
            </li>
            <li>
              <a href="#">
                <FaBloggerB />
                Blog
              </a>
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
