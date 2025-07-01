// src/components/Navbar.jsx
import React from 'react';

import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar" >
      <Link className="navbar-link" to="/">Inicio</Link>
       <Link className="navbar-link" to="/roadmap">RoadMap pa' Físicos</Link>
      <Link className="navbar-link" to="/lecturas">Lecturas Quant</Link>      
      <Link className="navbar-link" to="/simulaciones">Simulaciones</Link>
      <Link className="navbar-link" to="/academia">Academia Crypto</Link>
      <Link className="navbar-link" to="/econofisica">EconoFísica</Link>
      <Link className="navbar-link" to="/nosotros">Founders</Link>
    </nav>
  );
};

export default Navbar;
