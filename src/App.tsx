import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Fonctionnement from './pages/Fonctionnement';
import Avis from './pages/Avis';
import Contact from './pages/Contact';
import Mentions from './pages/Mentions';
import Equipe from './pages/Equipe';
import Confidentialite from './pages/Confidentialite';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fonctionnement" element={<Fonctionnement />} />
          <Route path="/avis" element={<Avis />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<Mentions />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          <Route path="/equipe" element={<Equipe />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
