// src/components/Simulaciones/LabCell.jsx
import React from 'react';

const LabCell = ({ children, className = '' }) => {
  return (
    <div className={`lab-cell ${className}`}>
      {children}
    </div>
  );
};

export default LabCell;