import React from 'react';
import '../index.css';

const Home: React.FC = () => {
  return (
    <main className="home">
      {/* Section Hero avec fond dégradé violet/rose */}
      <section className="page-gradient">
        <div className="container">
          <h1>Chatbots intelligents pour commerces locaux</h1>
          <p>Offrez une assistance 24/7 à vos clients avec NORA, votre chatbot personnalisable pour boutique.</p>
          <a href="/contact" className="btn cta">Demander une démo</a>
        </div>
      </section>

      {/* ... autres sections de la page d'accueil ... */}
    </main>
  );
};

export default Home;