// src/components/Biblioteca/LibroCard.jsx
import React from 'react';
import './Biblioteca.css';
import { publicUrl } from '../../utils/paths';

const LibroCard = ({ libro }) => {
  const { titulo, autor, descripcion, portada, pdf } = libro;

  return (
    <div className="libro-card">
      <div className="libro-card-portada">
        <img src={publicUrl(portada)} alt={`Portada de ${titulo}`} />
      </div>
      <div className="libro-card-info">
        <h3 className="libro-titulo">{titulo}</h3>
        <p className="libro-autor">{autor}</p>
        <p className="libro-descripcion">{descripcion}</p>
        <a 
          href={pdf} 
          download 
          className="libro-descargar-btn"
          target="_blank" // Abre el PDF en una nueva pestaña (opcional, pero recomendado)
          rel="noopener noreferrer" // Buena práctica de seguridad para target="_blank"
        >
          Descargar PDF
        </a>
      </div>
    </div>
  );
};

export default LibroCard;