// src/pages/Equipe.tsx
import '../index.css';

type Membre = { nom: string; role: string; bio: string };
const EQUIPE: Membre[] = [
  {
    nom: 'Arthur',
    role: 'Co-fondateur, Responsable marketing',
    bio: 'Engagé dans l’accompagnement des commerces, Arthur assure la vision stratégique de NORA.',
  },
  {
    nom: 'Baptiste',
    role: 'Co-fondateur, Responsable commercial',
    // Correction d’un probable contresens dans le .docx (prénom) en gardant le fond du texte.
    bio: 'Passionné par l’automatisation et les intelligences artificielles, Baptiste imagine et construit les workflows qui donnent vie à NORA.',
  },
  {
    nom: 'Jules',
    role: 'Responsable technique',
    bio: 'Jules développe les solutions adaptées aux besoins des clients et assure le bon fonctionnement une fois mises en place.',
  },
];

export default function Equipe() {
  return (
    <main>
      <section className="page-gradient">
        <div className="container">
          <h1 className="section-title">Derrière NORA, une équipe passionnée</h1>
          <p className="section-sub">
            NORA, c’est avant tout une aventure humaine portée par trois entrepreneurs
            convaincus que la technologie doit être au service des commerces de proximité.
          </p>

          <div className="grid">
            {EQUIPE.map((m) => (
              <article key={m.nom} className="card-soft">
                <h3 style={{ marginBottom: '.25rem' }}>{m.nom}</h3>
                <p style={{ fontWeight: 600, color: 'var(--color-primary-dark)', marginBottom: '.5rem' }}>
                  {m.role}
                </p>
                <p>{m.bio}</p>
              </article>
            ))}
          </div>

          <div className="section" >
            <div className="card-soft" style={{ textAlign: 'center', marginTop: '2rem' }}>
              <h3 style={{ marginBottom: '.25rem', color: 'var(--color-primary-dark)' }}>Notre mission</h3>
              <p>Simplifier le quotidien des commerçants en leur offrant un assistant intelligent, accessible et humain.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
