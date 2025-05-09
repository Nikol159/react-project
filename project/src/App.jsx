import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './LogIn'
import MainPage from './MainPage';

function App() {

  return(
    <>
  
   
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  
    </>
  )

}

export default App
