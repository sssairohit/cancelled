import React from 'react';
import { HomeIcon } from '../icons/HomeIcon';
import { SearchIcon } from '../icons/SearchIcon';
import { PostIcon } from '../icons/PostIcon';
import { NotificationsIcon } from '../icons/NotificationsIcon';
import { MessagesIcon } from '../icons/MessagesIcon';

const BottomNav: React.FC = () => {
    return (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-border flex justify-around items-center p-2 z-20">
            <button className="p-2 text-text-secondary hover:text-primary">
                <HomeIcon className="w-7 h-7" />
            </button>
            <button className="p-2 text-text-secondary hover:text-primary">
                <SearchIcon className="w-7 h-7" />
            </button>
            <button className="p-3 bg-primary text-white">
                <PostIcon className="w-7 h-7" />
            </button>
            <button className="p-2 text-text-secondary hover:text-primary">
                <NotificationsIcon className="w-7 h-7" />
            </button>
            <button className="p-2 text-text-secondary hover:text-primary">
                <MessagesIcon className="w-7 h-7" />
            </button>
        </nav>
    );
};

export default BottomNav;