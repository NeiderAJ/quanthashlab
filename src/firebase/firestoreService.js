// src/firebase/firestoreService.js

import { doc, getDoc } from "firebase/firestore";
import { db } from "./config";

// Carga el historial de mensajes de un usuario
export const loadChatHistory = async (userId) => {
  if (!userId) return null; // Prevenimos errores si no hay userId
  
  const chatRef = doc(db, "chats", userId);
  try {
    const docSnap = await getDoc(chatRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      // Aseguramos que los timestamps se manejen bien (opcional pero bueno)
      return data.messages.map(msg => ({
        ...msg,
        // Firestore devuelve los timestamps como objetos, aquí podríamos convertirlos si fuera necesario
        // Por ahora, devolverlos tal cual está bien.
      }));
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al cargar el historial del chat:", error);
    return null;
  }
};