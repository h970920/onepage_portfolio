// src/components/Header.js
import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <h1>Why Me?</h1>
      <nav>
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#certifications">Certifications</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
