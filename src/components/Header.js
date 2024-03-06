// src/components/Header.js
import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav">
          <button className="button button--ujarak button--border-thin button--text-thick">
            {"About Me"}
          </button>
          <button className="button button--ujarak button--border-thin button--text-thick">
            {"Experience"}
          </button>
          <button className="button button--ujarak button--border-thin button--text-thick">
            {"Portfolio"}
          </button>
          <button className="button button--ujarak button--border-thin button--text-thick">
            {"Contact"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
