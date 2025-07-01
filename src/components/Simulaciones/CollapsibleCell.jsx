// src/components/Simulaciones/CollapsibleCell.jsx
import React, { useState } from 'react';
import LabCell from './LabCell';

const CollapsibleCell = ({ title, children, defaultOpen = false, className = '' }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`collapsible-container ${isOpen ? 'open' : ''} ${className}`}>
      <button className="collapsible-title" onClick={() => setIsOpen(!isOpen)}>
        <span className="collapsible-icon">▶</span>
        {title}
      </button>
      <div className="collapsible-content">
      {/* Pasamos la clase del contenedor exterior a la celda interior */}
        <LabCell className={className}> 
       {children}
        </LabCell>
      </div>
    </div>
  );
};

export default CollapsibleCell;