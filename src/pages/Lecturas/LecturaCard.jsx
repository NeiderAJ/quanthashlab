// src/components/Lecturas/LecturaCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Lecturas.css'; // Importa estilos

const LecturaCard = ({ titulo, descripcion, imagen, slug }) => {
  // Esta es la lógica nueva:
  // 1. Verificamos si el 'slug' que recibimos ya empieza con una barra '/'.
  //    Esto indica que es una ruta completa (ej: "/biblioteca").
  // 2. Si es así, usamos el slug tal cual.
  // 3. Si no, es un slug de detalle, así que construimos la ruta como antes (ej: "/lecturas/quantitative-crypto").
  const targetUrl = slug.startsWith('/') ? slug : `/lecturas/${slug}`;

  return (
    // Usamos la variable 'targetUrl' que acabamos de crear.
    <Link to={targetUrl} className="lectura-card-link">
      <div className="lectura-card">
       <img src={imagen} alt={titulo} className="lectura-img" />
        <h3 className="lectura-title">{titulo}</h3>
        <p className="lectura-desc">{descripcion}</p>
      </div>
    </Link>
  );
};

export default LecturaCard;