import React from 'react';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="sticky top-0 bg-surface/80 backdrop-blur-md border-b border-border z-10">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-xl font-bold text-text-primary tracking-tight">{title}</h1>
      </div>
    </header>
  );
};

export default Header;