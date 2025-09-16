
import { useState } from 'react';
import Section from '../components/Section';
import InputField from '../components/InputField';

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
      const r = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, hp: '' }),
      });
      if (!r.ok) throw new Error('send_failed');
      setStatus('ok');
      setData(INIT);
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <main>
      <Section id="contact" className="page-gradient py-16">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-white/80 rounded-full p-4 mb-4 shadow-soft">
            <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path stroke="#973DA4" strokeWidth="2" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          </div>
          <h1 className="section-title text-3xl font-bold text-primaryDark mb-2">Contactez-nous</h1>
          <p className="section-sub text-base text-secondaryDark mb-2 text-center max-w-xl">Laissez vos coordonnées, notre équipe vous répondra rapidement.<br/>Pour une démo, un devis ou une question, nous sommes à votre écoute.</p>
        </div>

        {/* Feedback visuel animé */}
        <div className="min-h-[40px] mb-2">
          {status === 'ok' && (
            <div className="notice success animate-fade-in text-center">✅ Merci ! Votre demande a bien été envoyée.</div>
          )}
          {status === 'error' && (
            <div className="notice error animate-fade-in text-center">❌ Oups, échec de l’envoi.</div>
          )}
          {status === 'sending' && (
            <div className="notice animate-pulse text-center">⏳ Envoi en cours…</div>
          )}
        </div>

        <form className="form grid gap-6 max-w-xl mx-auto bg-white/70 rounded-xl shadow-soft p-8" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Nom"
              icon={<svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#973DA4" strokeWidth="2" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>}
              required
              value={data.nom}
              onChange={e => onChange('nom', e.target.value)}
            />
            <InputField
              label="Email"
              icon={<svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#973DA4" strokeWidth="2" d="M16 2H8c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 2v16H8V4h8zm-4 8h2v2h-2v-2zm0-4h2v2h-2V8z"/></svg>}
              required
              type="email"
              value={data.email}
              onChange={e => onChange('email', e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Téléphone"
              icon={<svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#973DA4" strokeWidth="2" d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.12.45 2.33.68 3.48.68a1 1 0 011 1v3.5a1 1 0 01-1 1C7.61 21 3 16.39 3 11.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.15.23 2.36.68 3.48a1 1 0 01-.21 1.11l-2.2 2.2z"/></svg>}
              value={data.tel}
              onChange={e => onChange('tel', e.target.value)}
            />
            <label className="grid gap-1 font-semibold text-gray-700">
              <span className="flex items-center gap-2"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#973DA4" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>Sujet*</span>
              <select
                required
                className="border border-gray-300 rounded px-3 py-2 font-sans focus:border-primary focus:outline-none focus:shadow-sm bg-white"
                value={data.sujet}
                onChange={e => onChange('sujet', e.target.value as Sujet)}
              >
                <option value="rappel">Demande de rappel</option>
                <option value="demo">Demande de démo</option>
                <option value="devis">Demande de devis</option>
              </select>
            </label>
          </div>

          <label className="grid gap-1 font-semibold text-gray-700">
            <span className="flex items-center gap-2"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#973DA4" strokeWidth="2" d="M4 4h16v2H4zm0 4h16v2H4zm0 4h10v2H4zm0 4h10v2H4z"/></svg>Message (optionnel)</span>
            <textarea
              rows={4}
              className="border border-gray-300 rounded px-3 py-2 font-sans focus:border-primary focus:outline-none focus:shadow-sm bg-white"
              value={data.message}
              onChange={e => onChange('message', e.target.value)}
            />
          </label>

          <button className="btn cta w-full mt-2 text-lg font-bold py-3" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Envoi…' : 'Envoyer'}
          </button>
        </form>
        <div className="mt-10 text-center text-gray-500 text-sm">
          <span>Vos données sont protégées et ne seront jamais partagées. <br />Réponse sous 24h ouvrées.</span>
        </div>
      </Section>
    </main>
  );
}
