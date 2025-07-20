// src/components/Auth/LoginOptions.jsx
import React from 'react';
import { FcGoogle } from 'react-icons/fc'; // Icono de Google
import { MdEmail } from 'react-icons/md'; // Icono de Email

const LoginOptions = ({ onGoogleLogin, onEmailLogin }) => {
  return (
    <div className="login-options-container">
      {/* Aquí va el mensaje de bienvenida y descripción */}
      <h3>Bienvenido a QuantHashLab</h3>
      <p>
        Inicia sesión o crea una cuenta para acceder a las herramientas de análisis,
        guardar tu historial de investigación y explorar todo el potencial de la plataforma.
      </p>
      
      <div className="login-buttons-wrapper">
        <button className="login-provider-button google" onClick={onGoogleLogin}>
          <FcGoogle size={22} className="provider-icon" />
          <span>Continue with Google</span>
        </button>
        <button className="login-provider-button email" onClick={onEmailLogin}>
          <MdEmail size={22} className="provider-icon" />
          <span>Continue with email</span>
        </button>
      </div>
    </div>
  );
};

export default LoginOptions;