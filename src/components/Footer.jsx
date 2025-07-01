// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 QuantHashLab. Todos los derechos reservados.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1e293b',
    color: '#f1f5f9',
    textAlign: 'center',
    padding: '1rem',
    marginTop: '2rem',
  }
};

export default Footer;
