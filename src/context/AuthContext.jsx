// src/context/AuthContext.jsx

import React, { createContext, useState, useEffect, useContext } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/config'; // Nuestra configuración de Firebase

// 1. Creamos el Contexto
const AuthContext = createContext();

// 2. Creamos un hook personalizado para usar el contexto fácilmente en otros componentes
export const useAuth = () => {
  return useContext(AuthContext);
};

// 3. Creamos el componente "Proveedor" que envolverá nuestra aplicación
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para saber si aún estamos verificando el usuario

  // Esta función de Firebase se ejecuta una vez al cargar
  // y luego cada vez que el estado de autenticación cambia (login/logout).
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false); // Dejamos de cargar una vez que sabemos si hay usuario o no
    });

    // La función de limpieza se ejecuta cuando el componente se desmonta,
    // evitando fugas de memoria.
    return unsubscribe;
  }, []);

  // Función para cerrar sesión
  const logout = () => {
    return signOut(auth);
  };

  // El valor que compartiremos con toda la app
  const value = {
    currentUser,
    logout,
  };

  // No renderizamos la app hasta que sepamos si hay un usuario o no
  // Esto previene "parpadeos" en la UI (mostrar "Acceder" y luego "Cerrar Sesión" rápidamente)
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};