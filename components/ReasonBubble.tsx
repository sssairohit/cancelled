import React from 'react';
import type { Reason } from '../types';
import { LikeIcon } from './icons/LikeIcon';

interface ReasonBubbleProps {
  reason: Reason;
}

const ReasonBubble: React.FC<ReasonBubbleProps> = ({ reason }) => {
  return (
    <div
      className={`flex items-center px-2.5 py-1 text-xs font-medium animate-fade-in-fast bg-success-bg text-success-text`}
    >
      <LikeIcon className="w-3 h-3 mr-1.5 text-success" fill="currentColor" />
      <span>{reason.text}</span>
    </div>
  );
};

export default ReasonBubble;
