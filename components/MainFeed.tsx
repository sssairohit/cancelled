import React from 'react';
import type { Celebrity } from '../types';
import CelebrityCard from './CelebrityCard';
import Header from './Header';

interface MainFeedProps {
    celebrities: Celebrity[];
    onVote: (id: string, voteType: 'upvote' | 'downvote') => void;
    onOpenDiscussion: (celebrity: Celebrity) => void;
}

const MainFeed: React.FC<MainFeedProps> = ({ celebrities, onVote, onOpenDiscussion }) => {
    return (
        <div>
            <Header title="Home" />
            <div className="p-0 sm:p-4 flex flex-col gap-4 pb-20">
                {celebrities.map(celebrity => (
                    <CelebrityCard 
                        key={celebrity.id} 
                        celebrity={celebrity}
                        onVote={onVote}
                        onOpenDiscussion={onOpenDiscussion}
                    />
                ))}
            </div>
        </div>
    );
};

export default MainFeed;
