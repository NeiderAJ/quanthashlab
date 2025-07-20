import React from 'react';
import lecturas from './data/lecturasData';
import LecturaCard from './LecturaCard';
import './Lecturas.css';

const LecturasPage = () => {
  return (
    <div className="lecturas-page">
      <h2 className="lecturas-header">Lecturas Quant</h2>
      <div className="lecturas-grid">
        {lecturas.map((l) => (
          <LecturaCard key={l.id} {...l} />
        ))}
      </div>
    </div>
  );
};

export default LecturasPage;
