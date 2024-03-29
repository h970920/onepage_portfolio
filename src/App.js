// src/App.js
import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./styles/reset.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
