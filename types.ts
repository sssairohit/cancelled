import type { Celebrity as FeedCelebrity } from './types';

export interface Reason {
  id: string;
  text: string;
  type: 'like';
}

export interface Comment {
  id: string;
  author: string;
  text: string;
  timestamp: string;
}

export interface Celebrity {
  id: string;
  name: string;
  avatar: string;
  postImage?: string; // Optional post image
  description: string;
  likes: number;
  liked?: boolean; // Used for client-side state tracking
  reasons: Reason[];
  comments: Comment[];
}

export interface BattlegroundCelebrity {
  name: string;
  avatar: string;
  biography: string;
  forVotes: number;
  cancelVotes: number;
}
