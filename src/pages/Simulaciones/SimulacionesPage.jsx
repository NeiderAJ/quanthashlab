import React from 'react';
import { simulaciones } from '../../simulaciones/simulacionesData';
import SimulacionCard from './SimulacionCard';
import './Simulaciones.css';

const SimulacionesPage = () => {
  return (
    <div className="simulaciones-page">
      <h2 className="simulaciones-header">Laboratorio de Simulaciones</h2>
      <div className="simulaciones-grid">
        {simulaciones.map(sim => (
          <SimulacionCard key={sim.id} sim={sim} />
        ))}
      </div>
    </div>
  );
};

export default SimulacionesPage;