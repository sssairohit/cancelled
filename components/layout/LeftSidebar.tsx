import React from 'react';
import ThemeSwitcher from '../ThemeSwitcher';
import { HomeIcon } from '../icons/HomeIcon';
import { SearchIcon } from '../icons/SearchIcon';
import { NotificationsIcon } from '../icons/NotificationsIcon';
import { MessagesIcon } from '../icons/MessagesIcon';
import { ProfileIcon } from '../icons/ProfileIcon';
import { ListsIcon } from '../icons/ListsIcon';
import { CommunitiesIcon } from '../icons/CommunitiesIcon';
import { BookmarksIcon } from '../icons/BookmarksIcon';
import { MoreIcon } from '../icons/MoreIcon';
import { PencilIcon } from '../icons/PencilIcon';

const LeftSidebar: React.FC = () => {
  const navItems = [
    { icon: <HomeIcon className="w-6 h-6" />, text: 'Home' },
    { icon: <SearchIcon className="w-6 h-6" />, text: 'Search' },
    { icon: <NotificationsIcon className="w-6 h-6" />, text: 'Notifications' },
    { icon: <MessagesIcon className="w-6 h-6" />, text: 'Messages' },
    { icon: <ProfileIcon className="w-6 h-6" />, text: 'Profile' },
    { icon: <ListsIcon className="w-6 h-6" />, text: 'Lists' },
    { icon: <CommunitiesIcon className="w-6 h-6" />, text: 'Communities' },
    { icon: <BookmarksIcon className="w-6 h-6" />, text: 'Bookmarks' },
    { icon: <MoreIcon className="w-6 h-6" />, text: 'Premium / Settings' },
  ];

  return (
    <aside className="hidden lg:flex flex-col justify-between w-72 p-4 pr-8 sticky top-0 h-screen">
        <div>
            <div className="mb-6">
                <h1 className="text-xl font-bold text-primary tracking-tight">Cancelled</h1>
                <p className="text-text-secondary mt-1 text-sm">The court of public opinion.</p>
            </div>
            
            <nav className="flex flex-col space-y-2">
                {navItems.map(item => (
                    <button key={item.text} className="flex items-center p-3 text-base text-text-primary hover:bg-surface transition-colors duration-200 w-full text-left">
                        {item.icon}
                        <span className="ml-4 font-medium">{item.text}</span>
                    </button>
                ))}
            </nav>

            <button className="mt-6 w-full bg-primary text-white font-bold py-3 px-4 text-base hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
                <PencilIcon className="w-5 h-5" />
                <span>Post</span>
            </button>
        </div>
        
        <div className="mt-6">
            <ThemeSwitcher />
        </div>
    </aside>
  );
};

export default LeftSidebar;
