// src/components/Roadmap/RoadmapPage.jsx

import React, { useState } from 'react'; // Importamos useState
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate
import contenidoRoadmap from '../../data/posts/roadmap-fisicos.js';
import { BlockMath } from 'react-katex';
import './Roadmap.css';
// Importamos los estilos de LecturaDetalle para reutilizar los botones y el layout general
import '../Lecturas/LecturaDetalle.css'; 

const RoadmapPage = () => {
  const [theme, setTheme] = useState('light'); // Estado para el tema, 'light' por defecto
  const navigate = useNavigate(); // Hook para la navegación

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  const renderBlock = (block, index) => {
    // ... (la función renderBlock se queda exactamente igual que antes)
    const blockClassName = block.style ? `content-block ${block.style}` : 'content-block';

    switch (block.type) {
      case 'p': return <p key={index} className={blockClassName}>{block.content}</p>;
      case 'h1': return <h1 key={index} className="roadmap-h1">{block.content}</h1>;
      case 'h2': return <h2 key={index} className="roadmap-h2">{block.content}</h2>;
      case 'h3': return <h3 key={index} className="roadmap-h3">{block.content}</h3>;
      case 'math': return <BlockMath key={index} math={block.content} />;
      case 'list': return (<ul key={index} className="content-list"> {block.items.map((item, i) => <li key={i}>{item}</li>)} </ul>);
      case 'list_styled': return (
        <div key={index} className="styled-list-container">
          <h4>{block.title}</h4>
          <ul className="content-list-styled">{block.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
        </div>
      );
      case 'blockquote': return <blockquote key={index} className="roadmap-blockquote">{block.content}</blockquote>;
      case 'download_button': return (
        <div key={index} className="download-wrapper">
          <a href={block.path} download className="content-download-btn">{block.label}</a>
        </div>
      );
      default: return null;
    }
  };

  return (
    // Ahora usamos la clase 'lectura-detalle-container' para heredar el layout
    <div className={`lectura-detalle-container ${theme}`}> 
      <header className="lectura-detalle-header">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Volver
        </button>
        
        {/* Dejamos un div vacío en el medio para empujar los botones a los extremos */}
        <div></div>

        <button onClick={toggleTheme} className="theme-toggle-button">
          {theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
      </header>
      
      <div className="roadmap-content">
        {contenidoRoadmap.map(renderBlock)}
      </div>
    </div>
  );
};

export default RoadmapPage;