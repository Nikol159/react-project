import React from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";

const MainPage = () => {
  const flowers = [
    {
      name: "Damask Rose",
      description: "An emblematic Bulgarian rose, renowned for its delicate fragrance and prized essential oil.",
      image: "./images/damask1.jpg",
      page: "/roses"
    },
    {
      name: "Tulip",
      description: "A symbol of spring and fresh beginnings, with clean lines and wide variety.",
      image: "./images/tulip.jpg",
      page: "/all-flowers"
    },
    {
      name: "Hybrid Tea Rose",
      description: "An elegant garden rose with large, showy blooms in a rich palette of shades.",
      image: "./images/hybrid.jpg",
      page: "/roses"
    },
    {
      name: "Hydrangea",
      description: "A striking garden flower with voluminous blossoms in soft or vivid tones.",
      image: "./images/hydrangea.jpg",
      page: "/all-flowers"
    },
    {
      name: "Floribunda Rose",
      description: "A vibrant and profusely blooming variety with lush, multicolored flower clusters.",
      image: "./images/floribunda.jpg",
      page: "/roses"
    },
    {
      name: "Lavender",
      description: "A gentle, aromatic plant that brings a sense of calm and harmony.",
      image: "./images/lavender.jpg",
      page: "/all-flowers"
    },
  ];

  return (
    <div className="main-container">
      <div className="overlay">
        <div className="content-wrapper">
          <h1 className="main-title">Welcome to the World of Flowers</h1>
          <p className="main-subtitle">A place to admire your favorite blooms</p>
          <p className="main-quote">“Flowers are the music of the ground. From earth’s lips spoken without sound.”</p>

          <div className="cards-container">
            {flowers.map((flower, index) => (
              <div className="flower-card" key={index}>
                <img src={flower.image} alt={flower.name} className="flower-image" />
                <div className="flower-info">
                  <h3>{flower.name}</h3>
                  <p>{flower.description}</p>
                  <Link to={flower.page} className="flower-button">See More</Link>
                </div>
              </div>
            ))}
          </div>

          <footer className="footer">
            <p>© 2025 Flower World. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/roses">Roses</Link>
              <Link to="/all-flowers">All Flowers</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default MainPage;