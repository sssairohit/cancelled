import React from 'react';
import type { Celebrity } from '../types';
import { CommentIcon } from './icons/CommentIcon';
import ReasonBubble from './ReasonBubble';
import { LikeIcon } from './icons/LikeIcon';
import { RepostIcon } from './icons/RepostIcon';
import { ShareIcon } from './icons/ShareIcon';

interface CelebrityCardProps {
  celebrity: Celebrity;
  onLike: (id: string) => void;
  onReply: (celebrity: Celebrity) => void;
}

const CelebrityCard: React.FC<CelebrityCardProps> = ({ celebrity, onLike, onReply }) => {

  return (
    <article 
      className="flex p-4 border-b border-border bg-surface hover:bg-surface-dark/50 transition-colors duration-200"
      aria-labelledby={`celebrity-name-${celebrity.id}`}
    >
      <div className="flex-shrink-0 pt-1">
        <img 
            className="w-10 h-10 rounded-full object-cover" 
            src={celebrity.avatar} 
            alt={`${celebrity.name}'s avatar`} 
        />
      </div>

      <div className="ml-4 flex-1">
        <header>
          <h2 id={`celebrity-name-${celebrity.id}`} className="font-bold text-text-primary">{celebrity.name}</h2>
        </header>
        
        <p className="text-text-primary text-sm mt-1">{celebrity.description}</p>
        
        {celebrity.postImage && (
            <div className="mt-3 border border-border rounded-xl overflow-hidden">
                <img 
                    className="w-full h-auto max-h-[400px] object-cover" 
                    src={celebrity.postImage} 
                    alt={`Post from ${celebrity.name}`} 
                />
            </div>
        )}
        
        <div className="mt-3 flex flex-wrap gap-2 items-start">
            {celebrity.reasons.map(reason => (
                <ReasonBubble key={reason.id} reason={reason} />
            ))}
        </div>
        
        <footer className="mt-3">
          <div className="flex justify-between items-center text-text-secondary max-w-xs">
              <button
                  onClick={(e) => { e.stopPropagation(); onReply(celebrity); }}
                  className="flex items-center space-x-2 hover:text-primary transition-colors duration-200 group"
                  aria-label={`Reply to ${celebrity.name}`}
              >
                  <CommentIcon className="w-5 h-5 group-hover:scale-110 transition-transform"/>
                  <span className="text-sm">{celebrity.comments.length}</span>
              </button>
              
              <button
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center space-x-2 hover:text-success transition-colors duration-200 group"
                  aria-label={`Repost ${celebrity.name}`}
              >
                  <RepostIcon className="w-5 h-5 group-hover:scale-110 transition-transform"/>
              </button>

              <button
                  onClick={(e) => { e.stopPropagation(); onLike(celebrity.id); }}
                  className={`flex items-center space-x-2 transition-colors duration-200 group ${celebrity.liked ? 'text-danger' : 'hover:text-danger'}`}
                  aria-label={`Like ${celebrity.name}`}
              >
                  <LikeIcon className={`w-5 h-5 group-hover:scale-110 transition-transform ${celebrity.liked ? 'fill-current' : 'fill-none'}`} />
                  <span className="text-sm font-medium">{celebrity.likes.toLocaleString()}</span>
              </button>

              <button
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center space-x-2 hover:text-primary transition-colors duration-200 group"
                  aria-label={`Share ${celebrity.name}`}
              >
                  <ShareIcon className="w-5 h-5 group-hover:scale-110 transition-transform"/>
              </button>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default CelebrityCard;