// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/dane_1500.png';
import './NavBar.css'; 

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
