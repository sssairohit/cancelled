import React from 'react';
import ThemeSwitcher from '../ThemeSwitcher';
import { HomeIcon } from '../icons/HomeIcon';
import { SearchIcon } from '../icons/SearchIcon';
import { NotificationsIcon } from '../icons/NotificationsIcon';
import { MessagesIcon } from '../icons/MessagesIcon';
import { PostIcon } from '../icons/PostIcon';

const LeftSidebar: React.FC = () => {
  const navItems = [
    { icon: <HomeIcon className="w-6 h-6" />, text: 'Home' },
    { icon: <SearchIcon className="w-6 h-6" />, text: 'Search' },
    { icon: <NotificationsIcon className="w-6 h-6" />, text: 'Notifications' },
    { icon: <MessagesIcon className="w-6 h-6" />, text: 'Messages' },
  ];

  return (
    <aside className="hidden lg:flex flex-col justify-between w-64 p-4 pr-8 sticky top-0 h-screen">
        <div>
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-primary tracking-tight">Cancelled</h1>
                <p className="text-text-secondary mt-1 text-sm">The court of public opinion.</p>
            </div>
            
            <nav className="flex flex-col space-y-2">
                {navItems.map(item => (
                    <button key={item.text} className="flex items-center p-3 text-lg text-text-primary hover:bg-surface transition-colors duration-200 w-full text-left">
                        {item.icon}
                        <span className="ml-4 font-medium">{item.text}</span>
                    </button>
                ))}
            </nav>

            <button className="mt-6 w-full bg-primary text-white font-bold py-3 px-4 text-lg hover:opacity-90 transition-opacity">
                Post
            </button>
        </div>
        
        <div className="mt-6">
            <ThemeSwitcher />
        </div>
    </aside>
  );
};

export default LeftSidebar;