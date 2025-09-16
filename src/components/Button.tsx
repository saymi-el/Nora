import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}


const Button: React.FC<ButtonProps & { href?: string }> = ({ children, className = '', href, ...props }) => {
  if (href) {
    return (
      <a
        href={href}
        className={`btn cta text-lg font-bold px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105 ${className}`}
        {...props as any}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={`btn cta text-lg font-bold px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;