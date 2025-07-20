// src/App.jsx
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Rutas corregidas
import Layout from "./layouts/Layout";
import Home from "./pages/Home/HomePage";
import LecturasPage from "./pages/Lecturas/LecturasPage";
import LecturaDetalle from "./pages/Lecturas/LecturaDetalle";
import AcademiaPage from "./pages/Academia/AcademiaPage";
import SimulacionesPage from "./pages/Simulaciones/SimulacionesPage";
import EconofisicaPage from "./pages/Econofisica/EconofisicaPage";
import BibliotecaPage from './pages/Biblioteca/BibliotecaPage';
import RoadmapPage from './pages/Roadmap/RoadmapPage';
import MovimientoBrownianoPage from './pages/Simulaciones/MovimientoBrownianoPage';
import BlackScholesPage from './pages/Simulaciones/BlackScholesPage';
import ChatPage from './pages/Chat/ChatPage';
import AuthPage from './pages/Auth/AuthPage';




function App() {
  return (
    <Router >
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/lecturas" element={<LecturasPage />} /> 
          <Route path="/lecturas/:slug" element={<LecturaDetalle />} /> 
          <Route path="/biblioteca" element={<BibliotecaPage />} /> 
          <Route path="/academia" element={<AcademiaPage />} />
          <Route path="/simulaciones" element={<SimulacionesPage />} />
          <Route path="/simulaciones/:slug" element={<>Página de detalle en construcción</>} />
          {/* Por ahora, solo conectaremos las dos primeras para probar */}
          <Route path="/simulaciones/movimiento-browniano" element={<MovimientoBrownianoPage />} />
          <Route path="/simulaciones/black-scholes-3d" element={<BlackScholesPage />} />
          <Route path="/econofisica" element={<EconofisicaPage />} />
          <Route path="/nosotros" element={<h2>Sobre el founder puedes visitar su Online-CV: 
            https://storage.googleapis.com/neiderjimenez/index.html
          </h2>} />
          <Route path="/analyzer" element={<ChatPage />} />
           <Route path="/login" element={<AuthPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
