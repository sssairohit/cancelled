import React from 'react';
import type { Reason } from '../types';
import { UpvoteIcon } from './icons/UpvoteIcon';
import { DownvoteIcon } from './icons/DownvoteIcon';

interface ReasonBubbleProps {
  reason: Reason;
}

const ReasonBubble: React.FC<ReasonBubbleProps> = ({ reason }) => {
  const isUpvote = reason.type === 'upvote';
  
  return (
    <div
      className={`flex items-center px-2.5 py-1 text-xs font-medium animate-fade-in-fast
        ${isUpvote ? 'bg-success-bg text-success-text' : 'bg-danger-bg text-danger-text'}
      `}
    >
      {isUpvote ? <UpvoteIcon className="w-3 h-3 mr-1" /> : <DownvoteIcon className="w-3 h-3 mr-1" />}
      <span>{reason.text}</span>
    </div>
  );
};

export default ReasonBubble;