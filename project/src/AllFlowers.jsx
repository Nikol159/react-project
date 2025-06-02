import React, { useEffect, useState } from "react";
import "./AllFlowers.css";
import { Link } from "react-router-dom";

const AllFlowers = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3008/flowers")
      .then((res) => res.json())
      .then((data) => setFlowers(data))
      .catch((err) => console.error("Error fetching flowers:", err));
  }, []);

  return (
    <div className="allflowers-container">
      <div className="overlay">
        <div className="content-wrapper">
          <h1 className="main-title">All Other Flowers</h1>
          <p className="main-subtitle">Explore a world beyond roses</p>
          <p className="main-quote">“Every flower is a soul blossoming in nature.”</p>

          <div className="cards-container">
            {flowers.map((flower) => (
              <div className="flower-card" key={flower.id}>
                <img src={flower.image} alt={flower.name} className="flower-image" />
                <div className="flower-info">
                  <h3>{flower.name}</h3>
                  <p>{flower.description}</p>
                  <p className="flower-type">{flower.type}</p>
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

export default AllFlowers;