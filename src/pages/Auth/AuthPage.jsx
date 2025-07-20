// src/components/Auth/AuthPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import LoginOptions from './LoginOptions'; // Importamos el nuevo componente
import { loginWithGoogle } from '../../firebase/authService';
import './Auth.css';

const AuthPage = () => {
  const [view, setView] = useState('options'); // La vista por defecto es 'options'
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const result = await loginWithGoogle();
    if (result.user) {
      // Si el login es exitoso, redirigimos al inicio
      navigate('/'); 
    } else if (result.error) {
      // Si hay un error (que no sea el popup cancelado), lo mostramos
      alert(`Error: ${result.error}`);
    }
  };
  
  const renderView = () => {
    switch (view) {
      case 'login':
        return <LoginForm onSwitchToRegister={() => setView('register')} />;
      case 'register':
        return <RegisterForm onSwitchToLogin={() => setView('login')} />;
      case 'options':
      default:
        return (
          <LoginOptions 
            onGoogleLogin={handleGoogleLogin} 
            onEmailLogin={() => setView('login')} 
          />
        );
    }
  };

  return (
    <div className="auth-page-container">
      <div className="auth-card">
        {renderView()}
      </div>
    </div>
  );
};

export default AuthPage;