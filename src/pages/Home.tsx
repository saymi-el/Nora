import React from 'react';
import '../index.css';

const Home: React.FC = () => {
  return (
    <main className="home">
      {/* Section Hero avec fond dégradé violet/rose */}
      <section className="page-gradient">
        <div className="container">
         <h1>NORA, l’assistant qui personnalise vos interactions.</h1>
          <p>
            Offrez à vos clients une réponse immédiate, 24h/24 et 7j/7. NORA prend vos rendez-vous,
            répond aux questions fréquentes et vous libère du temps pour vous concentrer sur l’essentiel :
            votre métier.
          </p>
          <a href="/contact" className="btn cta">Demander une démo</a>
        </div>
      </section>

{/* Bénéfices rapides (3 colonnes) */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Bénéfices rapides</h2>
          <p className="section-sub">Ce que NORA apporte dès les premiers jours.</p>
          <div className="grid">
            <article className="card-soft">
              <h3>⏱️ Gain de temps</h3>
              <p>NORA gère vos rendez-vous et questions courantes.</p>
            </article>
            <article className="card-soft">
              <h3>🤝 Satisfaction client</h3>
              <p>Une réponse immédiate, sans attente.</p>
            </article>
            <article className="card-soft">
              <h3>💼 Simplicité</h3>
              <p>Intégration facile sur votre site, aucune compétence technique requise.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Comment NORA transforme vos visiteurs en clients */}
      <section className="section full-bleed">
        <div className="container">
          <h2 className="section-title">Comment NORA transforme vos visiteurs en clients</h2>
          <p className="section-sub">
            Aujourd’hui, vos clients veulent des réponses rapides. Grâce à son intelligence et ses
            scénarios personnalisés, NORA redirige vos visiteurs vers la bonne information et facilite la prise de rendez-vous.
          </p>
          <div className="grid">
            <article className="card-soft">
              <h3>Fonctionnement</h3>
              <ul className="steps">
                <li><strong>Dialogue naturel</strong><span>assistant conversationnel amical et professionnel.</span></li>
                <li><strong>FAQ intelligentes</strong><span>horaires, tarifs, prestations… réponses immédiates.</span></li>
                <li><strong>Prise de rendez-vous</strong><span>intégrée directement depuis le chatbot.</span></li>
                <li><strong>Redirection intelligente</strong><span>si besoin, le visiteur est invité à vous contacter.</span></li>
              </ul>
            </article>
            <article className="card-soft">
              <h3>Bénéfices</h3>
              <ul className="steps">
                <li><strong>📈 Conversion augmentée</strong><span>un site interactif génère plus de clients.</span></li>
                <li><strong>😌 Expérience fluide</strong><span>vos visiteurs ne cherchent plus, NORA répond immédiatement.</span></li>
                <li><strong>💡 Adaptabilité</strong><span>paramétré selon votre métier (coiffeur, fleuriste, beauté, …).</span></li>
                <li><strong>🔒 Sécurité & RGPD</strong><span>données protégées, intégration simple.</span></li>
              </ul>
            </article>
          </div>
          <div style={{ marginTop: '1.25rem' }}>
            <a href="/contact" className="btn">Essayer NORA maintenant</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;