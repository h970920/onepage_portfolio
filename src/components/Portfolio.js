// src/components/Portfolio.js
import React from "react";
import Slider from "react-slick";
import "../styles/Portfolio.css";

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <Slider {...settings}>
        <div className="slide">
          <img src="image1.jpg" alt="Project 1" />
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
        </div>
        <div className="slide">
          <img src="image2.jpg" alt="Project 2" />
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
        </div>
        {/* 추가 프로젝트 슬라이드들 */}
      </Slider>
    </div>
  );
};

export default Portfolio;
