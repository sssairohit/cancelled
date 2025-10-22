import React from 'react';
import type { Celebrity } from '../types';
import { UpvoteIcon } from './icons/UpvoteIcon';
import { DownvoteIcon } from './icons/DownvoteIcon';
import { CommentIcon } from './icons/CommentIcon';
import ReasonBubble from './ReasonBubble';

interface CelebrityCardProps {
  celebrity: Celebrity;
  onVote: (id: string, voteType: 'upvote' | 'downvote') => void;
  onOpenDiscussion: (celebrity: Celebrity) => void;
}

const CelebrityCard: React.FC<CelebrityCardProps> = ({ celebrity, onVote, onOpenDiscussion }) => {
  const totalVotes = celebrity.upvotes + celebrity.downvotes;
  const upvotePercentage = totalVotes > 0 ? (celebrity.upvotes / totalVotes) * 100 : 50;

  return (
    <div className="bg-surface border border-border overflow-hidden flex flex-col transition-colors hover:border-primary">
      <div className="relative">
        <img className="w-full h-64 object-cover" src={celebrity.image} alt={celebrity.name} />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
        <h2 className="absolute bottom-2 left-4 text-2xl font-bold text-white">{celebrity.name}</h2>
      </div>

      <div className="p-4 flex-grow">
        <p className="text-text-secondary text-sm mb-4">{celebrity.description}</p>
        
        <div className="h-2 w-full bg-danger overflow-hidden mb-2 border border-border">
            <div 
                className="h-full bg-success transition-all duration-500" 
                style={{ width: `${upvotePercentage}%` }}
            ></div>
        </div>
        
        <div className="flex justify-between text-xs text-text-secondary mb-4">
            <span className="font-semibold text-success-text">{celebrity.upvotes.toLocaleString()} Upvotes</span>
            <span className="font-semibold text-danger-text">{celebrity.downvotes.toLocaleString()} Downvotes</span>
        </div>

        <div className="h-16 flex flex-wrap gap-2 items-start overflow-hidden">
            {celebrity.reasons.map(reason => (
                <ReasonBubble key={reason.id} reason={reason} />
            ))}
        </div>
      </div>

      <div className="p-4 bg-surface-dark mt-auto border-t border-border">
        <div className="flex justify-around items-center">
            <button
                onClick={() => onVote(celebrity.id, 'upvote')}
                className="flex items-center space-x-2 text-success hover:opacity-80 transition-opacity duration-200 group"
                aria-label={`Upvote ${celebrity.name}`}
            >
                <UpvoteIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">Upvote</span>
            </button>
            <button
                onClick={() => onOpenDiscussion(celebrity)}
                className="text-text-secondary hover:text-primary transition-colors duration-200 group"
                aria-label={`Discuss ${celebrity.name}`}
            >
                 <CommentIcon className="w-4 h-4 group-hover:scale-110 transition-transform"/>
            </button>
            <button
                onClick={() => onVote(celebrity.id, 'downvote')}
                className="flex items-center space-x-2 text-danger hover:opacity-80 transition-opacity duration-200 group"
                aria-label={`Downvote ${celebrity.name}`}
            >
                <span className="font-semibold">Downvote</span>
                <DownvoteIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default CelebrityCard;