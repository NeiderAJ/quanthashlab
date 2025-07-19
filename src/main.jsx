import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'katex/dist/katex.min.css'; 
import { AuthProvider } from './context/AuthContext'; // <-- 1. IMPORTAR



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider> {/* <-- 2. ENVOLVER LA APLICACIÓN */}
    <App />
  </AuthProvider> {/* <-- 3. CERRAR EL PROVEEDOR */}
  </StrictMode>,
)


