// src/App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./components/Home";      

import LecturasPage from "./components/Lecturas/LecturasPage";
import LecturaDetalle from "./components/Lecturas/LecturaDetalle"; // <-- AÑADE ESTA LÍNEA

import AcademiaPage from "./components/Academia/AcademiaPage";
import SimulacionesPage from "./components/Simulaciones/SimulacionesPage";
import EconofisicaPage from "./components/Econofisica/EconofisicaPage";
import BibliotecaPage from './components/Biblioteca/BibliotecaPage';
import RoadmapPage from './components/Roadmap/RoadmapPage';

import MovimientoBrownianoPage from './components/Simulaciones/MovimientoBrownianoPage';
import BlackScholesPage from './components/Simulaciones/BlackScholesPage';


function App() {
  return (
    <Router>
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
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
