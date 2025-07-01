// src/components/Simulaciones/Accordion.jsx
import React, { useState } from 'react';

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <button className="accordion-title" onClick={onClick}>
        <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>▶</span>
        {title}
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="accordion-content-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;