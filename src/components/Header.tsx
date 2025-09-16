

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import '../index.css';

const NAV_ITEMS = [
  { to: 'fonctionnement', label: 'Fonctionnement' },
  { to: 'avis', label: 'Avis' },
  { to: 'equipe', label: 'Notre équipe' },
];

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Sur la page Contact, le logo ramène à l'accueil
  const handleLogoClick = () => {
    if (location.pathname === '/contact') {
      navigate('/');
    }
  };

  return (
    <header className="header bg-white/80 backdrop-blur-md shadow-soft fixed w-full top-0 left-0 z-50">
      <div className="container flex items-center justify-between py-4">
        {/* Logo Nora à gauche, clique pour retour accueil depuis Contact */}
        <div
          className="logo text-2xl font-bold text-primaryDark tracking-wide cursor-pointer flex-shrink-0"
          onClick={handleLogoClick}
        >
          NORA
        </div>
        {/* Onglets à droite */}
        <nav className="nav flex gap-6 items-center ml-auto">
          {location.pathname === '/' && (
            <>
              {NAV_ITEMS.map(item => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  spy={true}
                  activeClass="text-primaryDark font-bold border-b-2 border-primaryDark"
                  className="cursor-pointer text-lg text-secondaryDark hover:text-primaryDark transition-colors px-2 py-1"
                  isDynamic={true}
                >
                  {item.label}
                </ScrollLink>
              ))}
              <button
                className="btn cta text-lg font-bold px-4 py-2 ml-4 rounded-full bg-primaryDark text-white hover:bg-primary transition-colors shadow-soft"
                onClick={() => navigate('/contact')}
              >
                Contact
              </button>
            </>
          )}
          {location.pathname === '/contact' && (
            <button
              className="btn cta text-lg font-bold px-4 py-2 ml-4 rounded-full bg-primaryDark text-white hover:bg-primary transition-colors shadow-soft"
              onClick={() => navigate('/')}
            >
              Retour à l’accueil
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
