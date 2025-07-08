// src/components/Biblioteca/BibliotecaPage.jsx
import React from 'react';
import bibliotecaData from '../../data/bibliotecaData';
import LibroCard from './LibroCard';
import './Biblioteca.css';
import { useNavigate } from 'react-router-dom';

const BibliotecaPage = () => {
    const navigate = useNavigate(); // <-- AÑADE ESTA LÍNEA

return (
  <div className="biblioteca-page">
    {/* --- NUEVO LAYOUT DE CABECERA --- */}
    <div className="lectura-detalle-container" style={{ maxWidth: '1200px', padding: '0 12.5rem', margin: '0 auto 2rem auto', background: 'none' }}>
      <header className="lectura-detalle-header" style={{ borderBottom: 'none' }}>
        <button onClick={() => navigate(-1)} className="back-button">
          ← Volver
        </button>
        
        <h2 className="biblioteca-header" style={{ margin: 0,  transform: 'translateX(-14%)' }}>
          Biblioteca Quant
        </h2>

        {/* Div vacío para mantener el balance y empujar el título al centro */}
        <div></div>
      </header>
    </div>

    {/* --- El grid de libros se mantiene igual --- */}
    <div className="biblioteca-grid">
      {bibliotecaData.map((libro) => (
        <LibroCard key={libro.id} libro={libro} />
      ))}
    </div>
  </div>
);
};

export default BibliotecaPage;