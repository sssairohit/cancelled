import React from 'react';
import type { Celebrity } from '../types';
import { CloseIcon } from './icons/CloseIcon';

interface DiscussionThreadProps {
  celebrity: Celebrity;
  onClose: () => void;
}

const DiscussionThread: React.FC<DiscussionThreadProps> = ({ celebrity, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-surface border border-border w-full max-w-2xl max-h-[90vh] flex flex-col animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        <header className="p-4 border-b border-border flex justify-between items-center">
          <h3 className="text-xl font-bold text-text-primary">Replies to {celebrity.name}</h3>
          <button onClick={onClose} className="text-text-secondary hover:text-primary transition-colors">
            <CloseIcon className="w-5 h-5" />
          </button>
        </header>
        
        <div className="p-4 flex-1 overflow-y-auto">
          <div className="space-y-4">
            {celebrity.comments.length > 0 ? (
              celebrity.comments.map(comment => (
                <div key={comment.id} className="bg-surface-dark p-3">
                  <div className="flex justify-between items-center mb-1">
                    <p className="font-semibold text-sm text-text-primary">{comment.author}</p>
                    <p className="text-xs text-text-secondary">
                      {new Date(comment.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <p className="text-sm text-text-secondary">{comment.text}</p>
                </div>
              ))
            ) : (
              <p className="text-text-secondary text-center py-8">No comments yet. Be the first!</p>
            )}
          </div>
        </div>
        
        <footer className="p-4 border-t border-border mt-auto">
           <p className="text-xs text-text-secondary text-center">Commenting functionality is coming soon!</p>
        </footer>
      </div>
    </div>
  );
};

export default DiscussionThread;
