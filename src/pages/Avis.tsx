type AvisItem = { nom: string; metier: string; texte: string };
const AVIS: AvisItem[] = [
  { nom: 'Claire D.', metier: 'Coiffeuse', texte: 'Moins d’appels, planning mieux rempli.' },
  { nom: 'Hugo F.', metier: 'Fleuriste', texte: 'Réponses instantanées = clients contents.' },
  { nom: 'Mina R.', metier: 'Esthéticienne', texte: 'J’ai gagné du temps et des réservations.' },
];

export default function Avis() {
  return (
    <main>
      <section className="page-gradient">
        <div className="container">
          <h1 className="section-title">Avis clients</h1>
          <p className="section-sub">Ils utilisent NORA au quotidien et partagent leur retour.</p>

          <div className="grid">
            {AVIS.map((a, i) => (
              <article key={i} className="card-soft">
                <p className="quote">{a.texte}</p>
                <p style={{ marginTop: '.75rem', fontWeight: 700 }}>
                  {a.nom} · <span style={{ color: 'var(--color-primary-dark)' }}>{a.metier}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
