import { useState } from 'react';

type Sujet = 'rappel' | 'demo' | 'devis';
type FormData = { nom: string; email: string; tel: string; sujet: Sujet; message?: string };

const INIT: FormData = { nom: '', email: '', tel: '', sujet: 'rappel', message: '' };

export default function Contact() {
  const [data, setData] = useState<FormData>(INIT);
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');

  function onChange<K extends keyof FormData>(key: K, value: FormData[K]) {
    setData(d => ({ ...d, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    try {
      await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom, email, tel, sujet, message, hp: '' }), // hp = honeypot
      });
      if (!r.ok) throw new Error('send_failed');

      setStatus('ok');
      setData(INIT); // reset du formulaire
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <main>
      <section className="page-gradient">
        <div className="container">
          <h1 className="section-title">Contact</h1>
          <p className="section-sub">Laissez vos coordonnées — on revient vers vous rapidement.</p>

          {/* 👉 C’est ici qu’on affiche les messages de retour */}
          {status === 'ok' && (
            <div className="notice success">Merci ! Votre demande a bien été envoyée.</div>
          )}
          {status === 'error' && (
            <div className="notice error">Oups, échec de l’envoi.</div>
          )}
          {status === 'sending' && (
            <div className="notice">Envoi en cours…</div>
          )}

          <form className="form" onSubmit={onSubmit}>
            <div className="row">
              <label>
                Nom*
                <input
                  required
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
              />
            </label>

            <button className="btn cta" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Envoi…' : 'Envoyer'}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
