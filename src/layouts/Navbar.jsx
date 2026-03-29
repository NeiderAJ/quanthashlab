import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.png';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <nav className="navbar">
      {/* Grupo Izquierdo: Logo + Textos */}
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo-link">
          <img src={logo} alt="Logo QuantHashLab" className="navbar-logo" />
        </Link>
        <div className="navbar-title-container">
          <Link to="/" className="navbar-title">QuantHashLab</Link>
          <span className="navbar-slogan">From Physics to Finance</span>
        </div>
      </div>

      {/* Grupo Derecho: Enlaces de Navegación */}
      <div className="navbar-links">
        <Link className="navbar-link" to="/academia">Academia Crypto</Link>
        <Link className="navbar-link" to="/roadmap">RoadMap pa' Físicos</Link>
        <Link className="navbar-link" to="/lecturas">Lecturas Quant</Link>      
        <Link className="navbar-link" to="/simulaciones">Simulaciones</Link>
        
        {currentUser ? (
          <>
            <span className="navbar-user-email">{currentUser.email}</span>
            <button onClick={handleLogout} className="navbar-button">Cerrar Sesión</button>
          </>
        ) : (
          <Link className="navbar-link" to="/login">Acceder</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
