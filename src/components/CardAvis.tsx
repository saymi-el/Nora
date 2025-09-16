import React from 'react';

type AvisItem = { nom: string; metier: string; texte: string };

const CardAvis: React.FC<AvisItem> = ({ nom, metier, texte }) => (
  <article className="card-soft shadow-lg animate-fade-in">
    <p className="quote text-lg mb-2">{texte}</p>
    <p className="mt-3 font-bold text-primaryDark">
      {nom} · <span className="text-secondaryDark">{metier}</span>
    </p>
  </article>
);

export default CardAvis;
