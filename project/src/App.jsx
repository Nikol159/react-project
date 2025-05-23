import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './LogIn'
import MainPage from './MainPage';
import Navbar from './Navbar';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);

  // Това ще следи пътя на адреса
  const location = window.location.pathname;

  useEffect(() => {
    if (location === "/") {
      setShowNavbar(false); // Скриваме Navbar на логин страницата
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return (
    <Router>
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App