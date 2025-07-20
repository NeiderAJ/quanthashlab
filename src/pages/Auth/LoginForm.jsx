// src/components/Auth/LoginForm.jsx

import React, { useState } from 'react';
import { loginWithEmail, loginWithGoogle } from '../../firebase/authService';

const LoginForm = ({ onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // <-- LA LÍNEA QUE FALTABA

  // Función para el submit del formulario de email/contraseña
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Limpiamos errores previos
    const result = await loginWithEmail(email, password);
    if (result.error) {
      setError(result.error);
    } else {
      alert("¡Inicio de sesión exitoso!");
      // TODO: Redirigir al usuario
    }
  };

  // Función para el clic en el botón de Google
  const handleGoogleLogin = async () => {
  setError('');
  const result = await loginWithGoogle();
  
  // --- ¡AQUÍ ESTÁ LA CORRECCIÓN! ---
  // Verificamos si hubo un error Y si ese error NO es el de popup cancelado.
  if (result.error && result.error !== "Firebase: Error (auth/cancelled-popup-request).") {
    setError(result.error);
  } else if (result.user) {
    // Solo mostramos la alerta de éxito si realmente obtuvimos un usuario.
    alert("¡Inicio de sesión con Google exitoso!");
    // TODO: Redirigir
  }
  // Si el error es 'auth/cancelled-popup-request', simplemente no hacemos nada.
};

  return (
    <div className="auth-form-container">
      <h2>Iniciar Sesión</h2>
      {/* Ahora la variable 'error' sí existe */}
      {error && <p className="auth-error">{error}</p>}
      
      {/* El onSubmit ahora apunta a la función correcta */}
      <form onSubmit={handleEmailSubmit}> 
        <div className="form-group">
          <label htmlFor="login-email">Email</label>
          <input type="email" id="login-email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Contraseña</label>
          <input type="password" id="login-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="auth-button">Acceder</button>
      </form>
      
      <div className="auth-divider"><span>o</span></div>
      
      {/* El onClick ahora apunta a la función correcta */}
      <button className="google-button" onClick={handleGoogleLogin}>Iniciar con Google</button>
      
      <p className="auth-switch">
        ¿No tienes una cuenta? <span onClick={onSwitchToRegister}>Regístrate aquí</span>
      </p>
    </div>
  );
};

export default LoginForm;