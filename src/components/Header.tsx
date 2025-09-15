import React from 'react';
import '../index.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">NORA</div>
      <nav className="nav">
        <a href="/">Accueil</a>
        <a href="/fonctionnement">Fonctionnement</a>
        <a href="/avis">Avis</a>
        <a href="/equipe">Notre équipe</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
