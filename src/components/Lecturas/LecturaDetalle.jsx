// src/components/Lecturas/LecturaDetalle.jsx

import React, {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import lecturasData from './data/lecturasData';
import { InlineMath, BlockMath } from 'react-katex'; // Importamos el componente de KaTeX
import './LecturaDetalle.css'; // Crearemos este archivo de estilos a continuación

import { publicUrl } from '../../utils/paths';

const LecturaDetalle = () => {
  const [theme, setTheme] = useState('light'); // 'light' por defecto
  const navigate = useNavigate(); // Hook para la navegación

  // 1. Obtenemos el 'slug' de la URL
  const { slug } = useParams();

  // 2. Buscamos la lectura que coincida con el slug
  const lectura = lecturasData.find(l => l.slug === slug);

  // 3. Si no se encuentra la lectura, mostramos un mensaje
  if (!lectura) {
    return <div className="lectura-detalle-container"><h2>Lectura no encontrada</h2></div>;
  }

  // Función para cambiar de tema
const toggleTheme = () => {
  setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
};

// 4. Renderizamos el contenido de la lectura
return (
  // Aplicamos la clase del tema dinámicamente
  <div className={`lectura-detalle-container ${theme}`}> 
    <header className="lectura-detalle-header">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Volver
      </button>
      
      <div className="header-main-content">
        <img src={publicUrl(lectura.imagen)} alt="" className="lectura-thumbnail-img" />
        <h1>{lectura.titulo}</h1>
      </div>

      <button onClick={toggleTheme} className="theme-toggle-button">
        {theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
    </header>
    
    <div className="lectura-contenido">
  {lectura.contenido.map((block, index) => {
    // Asignamos una clase extra si el bloque tiene un estilo definido
    const blockClassName = block.style ? `content-block ${block.style}` : 'content-block';

    switch (block.type) {
      case 'p':
        return <p key={index} className={blockClassName}>{block.content}</p>;
      case 'h1':
        return <h1 key={index} className={blockClassName}>{block.content}</h1>;
      case 'h2':
        return <h2 key={index} className={blockClassName}>{block.content}</h2>;
      case 'h3':
        return <h3 key={index} className={blockClassName}>{block.content}</h3>;
      case 'math':
        return <BlockMath key={index} math={block.content} />;
      case 'table':
        return (
          <table key={index} className="content-table">
            <thead>
              <tr>
                {block.headers.map((header, hIndex) => <th key={hIndex}>{header}</th>)}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rIndex) => (
                <tr key={rIndex}>
                  {row.map((cell, cIndex) => <td key={cIndex}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'download_button':
        return (
          <div key={index} className="download-wrapper">
            <a href={block.path} download className="content-download-btn">
              {block.label}
            </a>
          </div>
        );
      default:
        return null;
    }
  })}
</div>
  </div>
);
};

export default LecturaDetalle;