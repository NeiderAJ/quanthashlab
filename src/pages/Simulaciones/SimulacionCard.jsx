import React from 'react';
import { Link } from 'react-router-dom';
import './Simulaciones.css';

const SimulacionCard = ({ sim }) => {
  return (
    <Link to={`/simulaciones/${sim.slug}`} className="simulacion-card">
      <h3>{sim.titulo}</h3>
      <p>{sim.descripcion}</p>
      <div className="launch-button">Lanzar Laboratorio ➔</div>
    </Link>
  );
};

export default SimulacionCard;