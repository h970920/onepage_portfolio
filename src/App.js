// src/App.js
import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio"; // Portfolio 컴포넌트 import

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Portfolio /> {/* Portfolio 컴포넌트 추가 */}
      <Footer />
    </div>
  );
}

export default App;
