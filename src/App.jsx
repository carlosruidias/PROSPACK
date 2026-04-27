import { Navigate, Route, Routes } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Inicio from './pages/Inicio.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Catalogo from './pages/Catalogo.jsx';
import Servicios from './pages/Servicios.jsx';
import Cotizar from './pages/Cotizar.jsx';
import Envios from './pages/Envios.jsx';
import Contacto from './pages/Contacto.jsx';
import Familia from './pages/Familia.jsx';

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Navigate to="/" replace />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/cotizar" element={<Cotizar />} />
          <Route path="/envios" element={<Envios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/familia" element={<Familia />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
