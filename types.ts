
export interface Reason {
  id: string;
  text: string;
  type: 'upvote' | 'downvote';
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
  image: string;
  description: string;
  upvotes: number;
  downvotes: number;
  reasons: Reason[];
  comments: Comment[];
}
