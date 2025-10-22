import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC = () => {
  return (
    <header className="bg-surface border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold text-primary tracking-tight">Cancelled</h1>
            <p className="text-text-secondary mt-1">The court of public opinion.</p>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;