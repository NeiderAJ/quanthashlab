// src/components/ChatIA/SimpleChatInterface.jsx - VERSIÓN REFACTORIZADA

import React, { useState, useRef, useEffect } from 'react';
import { FaPaperPlane, FaGoogle, FaSearchengin } from 'react-icons/fa';
import './SimpleChatInterface.css';
import { useAuth } from '../../context/AuthContext';
import { loadChatHistory } from '../../firebase/firestoreService';
import { analyzeWithAI } from '../../services/apiService'; // <-- 1. IMPORTAR NUESTRO SERVICIO

const availableModels = [
  { id: 'gemini', name: 'Gemini (Google)', icon: <FaGoogle />, enabled: true },
  { id: 'deepseek', name: 'DeepSeek', icon: <FaSearchengin />, enabled: true },
];

const SimpleChatInterface = ({ onBack }) => {
  const { currentUser } = useAuth();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedModel, setSelectedModel] = useState(availableModels[0].id);  
  const chatEndRef = useRef(null);

  useEffect(() => {
    const fetchHistory = async () => {
      setIsLoading(true);
      if (currentUser) {
        const history = await loadChatHistory(currentUser.uid);
        if (history && history.length > 0) {
          setMessages(history);
        } else {
          const welcomeMessage = `Hola, soy AIONHA. Bienvenido, ${currentUser.displayName || currentUser.email}. ¿En qué podemos profundizar hoy?`;
          setMessages([{ sender: 'ai', text: welcomeMessage }]);
        }
      } else {
        setMessages([{ sender: 'ai', text: 'Por favor, inicia sesión para comenzar a usar AIONHA y guardar tu historial.' }]);
      }
      setIsLoading(false);
    };
    fetchHistory();
  }, [currentUser]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading || !currentUser) return;

    const userMessage = { sender: 'user', text: inputValue };
    const currentInput = inputValue;
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // --- ¡AQUÍ ESTÁ EL CAMBIO! USAMOS NUESTRO SERVICIO CENTRALIZADO ---
      const data = await analyzeWithAI(currentInput, selectedModel, currentUser.uid);
      const aiMessage = { sender: 'ai', text: data.answer };
      setMessages(prev => [...prev, aiMessage]);
      
    } catch (error) {
      const errorMessage = { sender: 'ai', text: `Lo siento, hubo un error: ${error.message}`, error: true };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  if (isLoading && messages.length === 0) {
    return <div className="loading-history">Cargando AIONHA...</div>
  }

  return (
      // El JSX del return no cambia en absoluto.
      <div className="chat-ui-container">
          <header className="chat-header">
              <button onClick={onBack} className="chat-back-button">← Modos</button>
              <h3>AIONHA</h3>
              <div className="model-dropdown">
                  <label>Modelo:</label>
                  <select value={selectedModel} onChange={e => setSelectedModel(e.target.value)}>
                      {availableModels.map(model => (
                          <option key={model.id} value={model.id} disabled={!model.enabled}>{model.name}</option>
                      ))}
                  </select>
              </div>
          </header>
          <main className="chat-messages-area">
              {messages.map((msg, index) => (
                  <div key={index} className={`message-bubble ${msg.sender} ${msg.error ? 'error' : ''}`}>
                      <div className="message-content">{msg.text}</div>
                  </div>
              ))}
              {isLoading && (
                  <div className="message-bubble ai loading">
                      <div className="typing-indicator"><span></span><span></span><span></span></div>
                  </div>
              )}
              <div ref={chatEndRef} />
          </main>
          <footer className="chat-input-area">
              <form onSubmit={handleSubmit} className="chat-input-form">
                  <input
                      type="text"
                      value={inputValue}
                      onChange={e => setInputValue(e.target.value)}
                      placeholder={currentUser ? "Pregunta lo que quieras..." : "Inicia sesión para chatear"}
                      disabled={isLoading || !currentUser}
                  />
                  <button type="submit" disabled={isLoading || !inputValue.trim() || !currentUser}>
                      <FaPaperPlane />
                  </button>
              </form>
          </footer>
      </div>
  );
};

export default SimpleChatInterface;