// src/components/ChatIA/ChatPage.jsx
import React, { useState, useEffect } from 'react'; // Asegúrate de que useEffect esté importado
import './ChatPage.css';
import SimpleChatInterface from './SimpleChatInterface'; // <--- El import se queda

const ChatPage = () => {
  // El estado para el modo seleccionado está perfecto
  const [selectedMode, setSelectedMode] = useState(() => sessionStorage.getItem('selectedAiMode') || null );

  useEffect(() => {
    if (selectedMode) {
      sessionStorage.setItem('selectedAiMode', selectedMode);
    } else {
      // Si volvemos a la vista principal, limpiamos el storage
      sessionStorage.removeItem('selectedAiMode');
    }
  }, [selectedMode]);


  // La función para renderizar el contenido también está perfecta
  const renderContent = () => {
    switch (selectedMode) {
      case 'consulta_simple':
        // Le pasamos una función para volver al menú de opciones
        return <SimpleChatInterface onBack={() => setSelectedMode(null)} />;
      case 'consulta_simple':
        // Ahora usará el componente que importamos del otro archivo
        return <SimpleChatInterface />;
      case 'flujo_investigacion':
        return <div><h2>Modo "Flujo de Investigación" - En Construcción</h2></div>;
      case 'analista_datos':
        return <div><h2>Modo "Analista de Datos" - En Construcción</h2></div>;
      default:
        // El selector de modo está perfecto
        return (
          <div className="mode-selector-container">
            <h2 className="chat-title">QuantHashLab AI Analyzer</h2>
            <p className="chat-subtitle">
              ¡Entra con Inteligencia al mundo cripto! Nuestro analizador On-Chain te guiará a conocer el Crypto Universo.
            </p>
            <p className="mode-selection-prompt">
              Por favor, selecciona un modo para comenzar:
            </p>
            <div className="mode-options">
              <div className="mode-card" onClick={() => setSelectedMode('consulta_simple')}>
                <h3>AIONHA</h3>
                <p>Haz preguntas directas y obtén respuestas concisas de nuestros modelos de IA.</p>
              </div>
              <div className="mode-card disabled">
                <h3>Flujo de Investigación</h3>
                <p>Construye un análisis narrativo interactuando con la IA en un lienzo dinámico. (Próximamente)</p>
              </div>
              <div className="mode-card disabled">
                <h3>Analista de Datos</h3>
                <p>Conecta datos on-chain y realiza análisis cuantitativos profundos de proyectos. (Próximamente)</p>
              </div>
            </div>
          </div>
        );
    }
  };

  // El return final también está perfecto
  return (
    <div className="chat-page-container">
      {renderContent()}
    </div>
  );
};

export default ChatPage;