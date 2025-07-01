// src/components/Biblioteca/BibliotecaPage.jsx
import React from 'react';
import bibliotecaData from '../../data/bibliotecaData';
import LibroCard from './LibroCard';
import './Biblioteca.css';

const BibliotecaPage = () => {
  return (
    <div className="biblioteca-page">
      <div style={{ textAlign: 'center' }}>
        <h2 className="biblioteca-header">Biblioteca Quant</h2>
      </div>
      <div className="biblioteca-grid">
        {bibliotecaData.map((libro) => (
          <LibroCard key={libro.id} libro={libro} />
        ))}
      </div>
    </div>
  );
};

export default BibliotecaPage;