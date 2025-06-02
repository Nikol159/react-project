import React from "react";
import "./Roses.css";
import { Link } from "react-router-dom";

const Roses = () => {
  const roses = [
    {
      name: "Grandiflora Rose",
      type: "Shrub rose (a cross between hybrid tea and floribunda)",
      image: "./images/grandiflora.jpg",
      description: "A majestic rose with tall stems and large blooms, perfect for striking floral arrangements."
    },
    {
      name: "English Rose",
      type: "Shrub rose (David Austin selection)",
      image: "./images/english.jpg",
      description: "A classic rose with fragrant, full-petaled flowers, blending old-world charm with modern style."
    },
    {
      name: "Miniature Rose",
      type: "Mini rose (compact shrub form)",
      image: "./images/miniature.jpg",
      description: "A charming and delicate rose with small, perfect blossoms, ideal for pots and balconies."
    },
    {
        name: "Polyantha Rose",
        type: "Small-flowered shrub rose",
        image: "./images/polyanthas.jpg",
        description: "A low-growing rose with numerous small flowers, blooming in dense clusters throughout the season."
    },
    {
        name: "Rugosa Rose (Rosa rugosa)",
        type: "Wild rose (natural species)",
        image: "./images/rugosa.jpg",
        description: "A hardy and fragrant rose with large flowers and decorative hips after blooming."
    },
    {
      name: "Climbing Rose",
      type: "Climbing rose",
      image: "./images/climbing.jpg",
      description: "A long-stemmed rose with abundant blooms, ideal for arches, fences and pergolas."
    }
  ];

  return (
    <div className="roses-container">
      <div className="overlay">
        <div className="content-wrapper">
          <h1 className="roses-title">Discover the Beauty of Roses</h1>
          <p className="roses-subtitle">A tribute to elegance, scent and timeless charm</p>
          <p className="roses-quote">“The rose speaks of love silently, in a language known only to the heart.”</p>

          <div className="cards-container">
            {roses.map((rose, index) => (
              <div className="rose-card" key={index}>
                <img src={rose.image} alt={rose.name} className="rose-image" />
                <div className="rose-info">
                  <h3>{rose.name}</h3>
                  <p><strong>Type:</strong> {rose.type}</p>
                  <p>{rose.description}</p>
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

export default Roses;