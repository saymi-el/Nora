import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, style }) => (
  <section id={id} className={`section ${className}`} style={style}>
    <div className="container mx-auto px-4">
      {children}
    </div>
  </section>
);

export default Section;
