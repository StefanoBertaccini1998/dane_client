// src/pages/LoginPage.tsx
import React from 'react';
import Navbar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {

  const navigate = useNavigate();

  const handleUserLogin = () => {
    navigate('/user');
  };

  const handleAdminLogin = () => {
    navigate('/admin');
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <h1>LOGIN TO YOUR CER</h1>
        <div>
          <h2>ARE YOU A CER MEMBER?</h2>
          <input type="text" placeholder="Insert your POD" />
          <button onClick={handleUserLogin}>Login</button>
        </div>
        <div className="login-section">
          <h2>ARE YOU A CER ADMIN?</h2>
          <input type="text" placeholder="Insert your CER ID" />
          <button onClick={handleAdminLogin}>Login</button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
