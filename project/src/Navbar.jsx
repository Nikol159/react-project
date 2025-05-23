import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">Fleurora</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/roses">Roses</Link></li>
        <li><Link to="/flowers">All Flowers</Link></li>
        <li><Link to="/add-flower">Add Flower</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;