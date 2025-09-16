import React from 'react';

type Membre = { nom: string; role: string; bio: string };

const TeamMember: React.FC<Membre> = ({ nom, role, bio }) => (
  <article className="card-soft shadow-lg animate-fade-in">
    <h3 className="mb-1 font-bold text-xl text-primaryDark">{nom}</h3>
    <p className="font-semibold text-secondaryDark mb-2">{role}</p>
    <p className="text-gray-700">{bio}</p>
  </article>
);

export default TeamMember;
