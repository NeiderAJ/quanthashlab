// src/components/Simulaciones/CodeBlock.jsx
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ initialCode }) => {
  const [fontSize, setFontSize] = useState(14);
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(initialCode);
    setCopySuccess('¡Copiado!');
    setTimeout(() => setCopySuccess(''), 2000);
  };

  return (
    <div className="code-block-container">
      <div className="code-block-toolbar">
        <div className="font-controls">
          <button onClick={() => setFontSize(s => Math.min(s + 1, 24))}>A+</button>
          <button onClick={() => setFontSize(s => Math.max(s - 1, 10))}>A-</button>
        </div>
        <button onClick={handleCopy} className="copy-button">
          {copySuccess || 'Copiar'}
        </button>
      </div>
      <SyntaxHighlighter 
        language="python" 
        style={atomDark}
        customStyle={{ fontSize: `${fontSize}px`, margin: 0 }}
        wrapLongLines={true}
      >
        {initialCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;