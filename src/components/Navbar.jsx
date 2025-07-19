// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // 1. Importar el hook

const Navbar = () => {
  // 2. Usar el hook para acceder al contexto
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      // Redirigimos al usuario a la página de inicio después de cerrar sesión
      navigate('/');
      console.log("Cierre de sesión exitoso");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <nav className="navbar">
      {/* Los enlaces que siempre son visibles */}
      <Link className="navbar-link" to="/">Inicio</Link>
      <Link className="navbar-link" to="/roadmap">RoadMap pa' Físicos</Link>
      <Link className="navbar-link" to="/lecturas">Lecturas Quant</Link>      
      <Link className="navbar-link" to="/simulaciones">Simulaciones</Link>
      <Link className="navbar-link" to="/academia">Academia Crypto</Link>
      <Link className="navbar-link" to="/econofisica">EconoFísica</Link>
      <Link className="navbar-link" to="/nosotros">Founders</Link>
      <Link className="navbar-link" to="/analyzer">AI Analyzer</Link>
      
      {/* --- 3. RENDERIZADO CONDICIONAL --- */}
      {currentUser ? (
        // Si hay un usuario, mostramos su email y el botón de Logout
        <>
          <span className="navbar-user-email">{currentUser.email}</span>
          <button onClick={handleLogout} className="navbar-button">Cerrar Sesión</button>
        </>
      ) : (
        // Si NO hay usuario, mostramos el botón de Acceder
        <Link className="navbar-link" to="/login">Acceder</Link>
      )}
    </nav>
  );
};

export default Navbar;