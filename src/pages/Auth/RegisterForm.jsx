import React, { useState } from 'react';
import { registerWithEmail } from '../../firebase/authService'; 


const RegisterForm = ({ onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); // Estado para manejar errores


  const handleSubmit = async(e) => {
    e.preventDefault();

    setError(''); // Limpiar errores previos


    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

      // 3. Llamar a la función de Firebase
    const result = await registerWithEmail(email, password);

     if (result.error) {
      // Si Firebase devuelve un error, lo mostramos
      setError(result.error);
    } else {
      // Si el registro es exitoso, podemos hacer algo, como redirigir
      alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
      onSwitchToLogin(); // Cambiamos a la vista de login
    }
  };

  // Renderizamos el formulario de registro
  return (
    <div className="auth-form-container">
      <h2>Crear Cuenta</h2>

      {error && <p className="auth-error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="register-email">Email</label>
          <input type="email" id="register-email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="register-password">Contraseña</label>
          <input type="password" id="register-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirmar Contraseña</label>
          <input type="password" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        <button type="submit" className="auth-button">Registrarse</button>
      </form>
      <p className="auth-switch">
        ¿Ya tienes una cuenta? <span onClick={onSwitchToLogin}>Inicia sesión aquí</span>
      </p>
    </div>
  );
};

export default RegisterForm;