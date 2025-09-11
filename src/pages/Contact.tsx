import { useState } from 'react';

type Sujet = 'rappel' | 'demo' | 'devis';
type FormData = { nom: string; email: string; tel: string; sujet: Sujet; message?: string };

const INIT: FormData = { nom: '', email: '', tel: '', sujet: 'rappel', message: '' };

export default function Contact() {
  const [data, setData] = useState<FormData>(INIT);
  const [ok, setOk] = useState(false);

  function onChange<K extends keyof FormData>(key: K, value: FormData[K]) {
    setData(d => ({ ...d, [key]: value }));
  }
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Integrer un service (Formspree/Email…) si besoin. Pour l’instant : succès local.
    setOk(true);
  }

  return (
    <main>
      <section className="page-gradient">
        <div className="container">
          <h1 className="section-title">Contact</h1>
          <p className="section-sub">Laissez vos coordonnées — on revient vers vous rapidement.</p>

          <div className="card-soft" style={{ maxWidth: 720 }}>
            {ok ? (
              <div className="notice" style={{ background: 'rgba(34,197,94,.12)', borderRadius: 'var(--radius)', padding: '12px 14px' }}>
                Merci ! Votre demande a bien été enregistrée.
              </div>
            ) : (
              <form className="form" onSubmit={onSubmit}>
                <div className="row">
                  <label>
                    Nom*
                    <input
                      required
                      type="text"
                      value={data.nom}
                      onChange={e => onChange('nom', e.target.value)}
                    />
                  </label>
                  <label>
                    Email*
                    <input
                      required
                      type="email"
                      value={data.email}
                      onChange={e => onChange('email', e.target.value)}
                    />
                  </label>
                </div>

                <div className="row">
                  <label>
                    Téléphone
                    <input
                      type="tel"
                      pattern="^[0-9+(). -]{6,}$"
                      title="Entrez un numéro valide"
                      value={data.tel}
                      onChange={e => onChange('tel', e.target.value)}
                    />
                  </label>
                  <label>
                    Sujet*
                    <select
                      required
                      value={data.sujet}
                      onChange={e => onChange('sujet', e.target.value as Sujet)}
                    >
                      <option value="rappel">Demande de rappel</option>
                      <option value="demo">Demande de démo</option>
                      <option value="devis">Demande de devis</option>
                    </select>
                  </label>
                </div>

                <label>
                  Message (optionnel)
                  <textarea
                    rows={4}
                    value={data.message}
                    onChange={e => onChange('message', e.target.value)}
                    placeholder="Quelques précisions sur votre besoin…"
                  />
                </label>

                <div style={{ display: 'flex', gap: '.75rem' }}>
                  <button className="btn cta" type="submit">Envoyer</button>
                  <a className="btn" href="mailto:contact@nora.example">Nous écrire</a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
