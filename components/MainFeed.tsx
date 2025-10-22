import React from 'react';
import type { Celebrity } from '../types';
import CelebrityCard from './CelebrityCard';
import Header from './Header';
import Battleground from './Battleground';

interface MainFeedProps {
    celebrities: Celebrity[];
    onLike: (id: string) => void;
    onReply: (celebrity: Celebrity) => void;
}

const MainFeed: React.FC<MainFeedProps> = ({ celebrities, onLike, onReply }) => {
    return (
        <div>
            <Header title="Home" />
            <Battleground />
            <div className="flex flex-col pb-20">
                {celebrities.map(celebrity => (
                    <CelebrityCard 
                        key={celebrity.id} 
                        celebrity={celebrity}
                        onLike={onLike}
                        onReply={onReply}
                    />
                ))}
            </div>
        </div>
    );
};

export default MainFeed;