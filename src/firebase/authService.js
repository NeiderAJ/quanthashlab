// src/firebase/authService.js

import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "./config";

// --- Función de Registro (sin cambios) ---
export const registerWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
};

// --- Función de Inicio de Sesión (sin cambios) ---
export const loginWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
};

// --- Función de Inicio de Sesión con Google (CORREGIDA) ---
const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log("Usuario ha iniciado sesión con Google:", user);
    return { user: user, error: null };
  } catch (error) {
    // --- ¡AQUÍ ESTÁ LA LÓGICA! ---
    // Si el código de error NO es el de popup cancelado, lo devolvemos.
    if (error.code !== 'auth/cancelled-popup-request') {
      console.error("Error en el inicio de sesión con Google:", error.message);
      return { user: null, error: error.message };
    }
    // Si SÍ es el error de popup cancelado, lo ignoramos y devolvemos un objeto vacío.
    console.log("Popup de Google cancelado por el usuario o por otra petición exitosa.");
    return { user: null, error: null }; 
  }
};