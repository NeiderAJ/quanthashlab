// src/services/apiService.js

// 1. Obtenemos la URL base de la API desde las variables de entorno de Vite.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Función genérica para manejar las respuestas y errores de la API
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: 'Error desconocido del servidor.' }));
    throw new Error(errorData.error || `Error HTTP: ${response.status}`);
  }
  return response.json();
};

// 2. Creamos una función específica para nuestro endpoint de análisis
export const analyzeWithAI = async (question, model, userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/analyze`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, model, userId }),
    });
    return await handleResponse(response);
  } catch (error) {
    // Re-lanzamos el error con un mensaje más claro para que el componente que llama pueda manejarlo
    throw new Error(`Error de conexión con el backend: ${error.message}`);
  }
};

// A futuro, aquí añadiremos más funciones: getOnChainData, etc.