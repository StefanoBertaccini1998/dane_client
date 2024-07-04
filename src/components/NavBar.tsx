// src/components/Navbar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/dane_1500.png';
import './NavBar.css'; 
import { useNavigate } from 'react-router-dom';


const Navbar: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-title">
        D.A.N.E.
      </div>
 {!isLoginPage && (
          <button onClick={handleBackClick}>Exit</button>
      )}
    </nav>
  );
}

export default Navbar;
