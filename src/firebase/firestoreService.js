// src/firebase/firestoreService.js

import { doc, setDoc, getDoc, updateDoc, arrayUnion, serverTimestamp } from "firebase/firestore";
import { db } from "./config";


// Carga el historial de mensajes de un usuario
export const loadChatHistory = async (userId) => {
  const chatRef = doc(db, "chats", userId);
  const docSnap = await getDoc(chatRef);

  if (docSnap.exists()) {
    return docSnap.data().messages;
  } else {
    // No existe historial para este usuario
    return null;
  }
};