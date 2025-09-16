
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../index.css';
import Section from '../components/Section';
import CardAvis from '../components/CardAvis';
import TeamMember from '../components/TeamMember';
import Button from '../components/Button';

      const AVIS = [
        { nom: 'Yanis P.', metier: 'Barbier', texte: 'Les prises de rendez-vous se font toutes seules.' },
        { nom: 'Safia L.', metier: 'Salon de beauté', texte: 'On répond 24/7 sans être au téléphone.' },
        { nom: 'Léa M.', metier: 'Institut', texte: 'Moins de sollicitations, plus de conversions.' },
      ];

      const EQUIPE = [
        {
          nom: 'Arthur',
          role: 'Co-fondateur, Responsable marketing',
          bio: 'Engagé dans l’accompagnement des commerces, Arthur assure la vision stratégique de NORA.',
        },
        {
          nom: 'Baptiste',
          role: 'Co-fondateur, Responsable commercial',
          bio: 'Passionné par l’automatisation et les intelligences artificielles, Baptiste imagine et construit les workflows qui donnent vie à NORA.',
        },
        {
          nom: 'Jules',
          role: 'Responsable technique',
          bio: 'Jules développe les solutions adaptées aux besoins des clients et assure le bon fonctionnement une fois mises en place.',
        },
      ];

      function scrollToSection(hash: string) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState(null, "", hash);
        }
      }

      const Home: React.FC = () => {
        const location = useLocation();
        const navigate = useNavigate();

        // Deep-link au chargement ou navigation depuis Contact
        useEffect(() => {
          if (location.hash) {
            scrollToSection(location.hash);
          } else if (location.state && location.state.scrollTo) {
            scrollToSection(location.state.scrollTo);
            navigate("/", { replace: true, state: null });
          }
        }, [location, navigate]);

        return (
          <main className="home">
            {/* Hero Section */}
            <Section id="hero" className="page-gradient py-20 animate-fade-in">
              <div className="flex flex-col items-center text-center">
                <h1 className="section-title text-5xl font-extrabold text-primaryDark mb-6 tracking-tight drop-shadow-lg">NORA, l’assistant qui personnalise vos interactions.</h1>
                <p className="text-xl mb-8 max-w-2xl text-secondaryDark">Offrez à vos clients une réponse immédiate, 24h/24 et 7j/7.<br/>NORA prend vos rendez-vous, répond aux questions fréquentes et vous libère du temps pour vous concentrer sur l’essentiel : votre métier.</p>
                <Button href="/contact">Demander une démo</Button>
              </div>
            </Section>
            {/* Bénéfices rapides */}
            <Section id="benefices" className="bg-transparent py-12 animate-fade-in">
              <h2 className="section-title text-3xl font-bold text-primaryDark mb-4 tracking-tight">Bénéfices rapides</h2>
              <p className="section-sub text-lg text-secondaryDark mb-8">Ce que NORA apporte dès les premiers jours.</p>
              <div className="grid gap-8">
                <article className="card-soft shadow-lg transition-transform hover:scale-105">
                  <h3 className="font-bold text-xl mb-2">⏱️ Gain de temps</h3>
                  <p>NORA gère vos rendez-vous et questions courantes.</p>
                </article>
                <article className="card-soft shadow-lg transition-transform hover:scale-105">
                  <h3 className="font-bold text-xl mb-2">🤝 Satisfaction client</h3>
                  <p>Une réponse immédiate, sans attente.</p>
                </article>
                <article className="card-soft shadow-lg transition-transform hover:scale-105">
                  <h3 className="font-bold text-xl mb-2">💼 Simplicité</h3>
                  <p>Intégration facile sur votre site, aucune compétence technique requise.</p>
                </article>
              </div>
            </Section>
            {/* Fonctionnement & bénéfices */}
            <Section id="fonctionnement" className="page-gradient py-20 animate-fade-in section-scroll">
              <div className="flex flex-col items-center text-center">
                <h2 className="section-title text-3xl font-bold text-primaryDark mb-4 tracking-tight">Fonctionnement & bénéfices</h2>
                <p className="section-sub text-lg text-secondaryDark mb-8">NORA capte les demandes, répond instantanément et redirige vers la prise de rendez-vous ou un rappel—sans effort côté équipe.</p>
              </div>
              <div className="grid gap-8">
                <article className="card-soft shadow-lg transition-transform hover:scale-105">
                  <h3 className="font-bold text-xl mb-2">Parcours type</h3>
                  <ol className="steps">
                    <li><strong>Accueil instantané</strong><span>Un visiteur pose une question (horaires, tarifs, services).</span></li>
                    <li><strong>Qualification</strong><span>Le chatbot identifie le besoin et propose la bonne action.</span></li>
                    <li><strong>Conversion</strong><span>Redirection vers prise de RDV, devis ou demande de rappel.</span></li>
                  </ol>
                </article>
                <article className="card-soft shadow-lg transition-transform hover:scale-105">
                  <h3 className="font-bold text-xl mb-2">Pourquoi ça marche</h3>
                  <ul className="steps">
                    <li><strong>Disponibilité 24/7</strong><span>réponse quand vos clients sont libres.</span></li>
                    <li><strong>Moins d’appels</strong><span>fini les répétitions sur horaires/prix.</span></li>
                    <li><strong>Plus de RDV</strong><span>passerelle directe vers l’action.</span></li>
                  </ul>
                </article>
                <article className="card-soft shadow-lg transition-transform hover:scale-105">
                  <h3 className="font-bold text-xl mb-2">Impact rapide</h3>
                  <ul className="steps">
                    <li><strong>+ Conversion</strong><span>moins de frictions dans le parcours.</span></li>
                    <li><strong>+ Satisfaction</strong><span>réponse claire et immédiate.</span></li>
                    <li><strong>− Charge</strong><span>équipe concentrée sur la valeur.</span></li>
                  </ul>
                </article>
              </div>
            </Section>
            {/* Avis clients */}
            <Section id="avis" className="page-gradient py-20 animate-fade-in section-scroll">
              <div className="flex flex-col items-center text-center">
                <h2 className="section-title text-3xl font-bold text-primaryDark mb-4 tracking-tight">Avis clients</h2>
                <p className="section-sub text-lg text-secondaryDark mb-8">Ils utilisent NORA au quotidien et partagent leur retour.</p>
              </div>
              <div className="grid gap-8">
                {AVIS.map((a, i) => (
                  <CardAvis key={i} {...a} />
                ))}
              </div>
            </Section>
            {/* Notre équipe */}
            <Section id="equipe" className="page-gradient py-20 animate-fade-in section-scroll">
              <div className="flex flex-col items-center text-center">
                <h2 className="section-title text-3xl font-bold text-primaryDark mb-4 tracking-tight">Derrière NORA, une équipe passionnée</h2>
                <p className="section-sub text-lg text-secondaryDark mb-8">NORA, c’est avant tout une aventure humaine portée par trois entrepreneurs convaincus que la technologie doit être au service des commerces de proximité.</p>
              </div>
              <div className="grid gap-8">
                {EQUIPE.map((m) => (
                  <TeamMember key={m.nom} {...m} />
                ))}
              </div>
              <div className="section">
                <div className="card-soft text-center mt-8 shadow-lg animate-fade-in">
                  <h3 className="mb-1 text-primaryDark font-bold text-2xl">Notre mission</h3>
                  <p className="text-lg">Simplifier le quotidien des commerçants en leur offrant un assistant intelligent, accessible et humain.</p>
                </div>
              </div>
            </Section>
          </main>
        );
      };

      export default Home;