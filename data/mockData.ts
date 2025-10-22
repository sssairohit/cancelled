import type { Celebrity } from '../types';

export const initialCelebrities: Celebrity[] = [
  {
    id: '1',
    name: 'Elon Musk',
    image: 'https://picsum.photos/300/400?random=1',
    description: 'Tech mogul known for rockets, electric cars, and controversial tweets.',
    upvotes: 12500,
    downvotes: 8300,
    reasons: [],
    comments: [
      { id: 'c1-1', author: 'Techie1', text: 'Love the new products! Pushing humanity forward.', timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString() },
      { id: 'c1-2', author: 'SpaceFan', text: 'The Mars plan is insane, I love it.', timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString() },
      { id: 'c1-3', author: 'Critic', text: 'His posts are getting more and more unhinged.', timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString() },
    ]
  },
  {
    id: '2',
    name: 'Taylor Swift',
    image: 'https://picsum.photos/300/400?random=2',
    description: 'Chart-topping pop superstar whose every move is scrutinized by fans.',
    upvotes: 250000,
    downvotes: 15000,
    reasons: [],
    comments: [
      { id: 'c2-1', author: 'Swiftie4Life', text: 'Her last album was a masterpiece. A lyrical genius!', timestamp: new Date(Date.now() - 1000 * 60 * 2).toISOString() },
      { id: 'c2-2', author: 'MusicLover', text: "The Eras tour was the best concert I've ever been to.", timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString() }
    ]
  },
  {
    id: '3',
    name: 'MrBeast',
    image: 'https://picsum.photos/300/400?random=3',
    description: 'YouTuber famous for elaborate stunts and large-scale philanthropy.',
    upvotes: 550000,
    downvotes: 5000,
    reasons: [],
    comments: [
      { id: 'c3-1', author: 'VideoWatcher', text: "He's changing the world with his videos. So wholesome.", timestamp: new Date(Date.now() - 1000 * 60 * 10).toISOString() },
      { id: 'c3-2', author: 'Skeptic', text: "Is it really philanthropy if it's for views?", timestamp: new Date(Date.now() - 1000 * 60 * 25).toISOString() }
    ]
  },
];
