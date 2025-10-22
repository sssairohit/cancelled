import React, { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'monokai';

const themes: { name: Theme, label: string }[] = [
    { name: 'light', label: 'Light' },
    { name: 'dark', label: 'Dark' },
    { name: 'monokai', label: 'Monokai' },
];

const ThemeSwitcher: React.FC = () => {
    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        const initialTheme = savedTheme || 'dark';
        setTheme(initialTheme);
        document.documentElement.setAttribute('data-theme', initialTheme);
    }, []);

    const handleThemeChange = (newTheme: Theme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <div className="flex items-center p-1 bg-surface-dark border border-border">
            {themes.map(({ name, label }) => (
                <button
                    key={name}
                    onClick={() => handleThemeChange(name)}
                    className={`px-3 py-1 text-sm font-medium transition-colors duration-200
                        ${theme === name 
                            ? 'bg-primary text-white' 
                            : 'text-text-secondary hover:bg-surface'
                        }
                    `}
                    aria-pressed={theme === name}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};

export default ThemeSwitcher;
