import type { Celebrity } from '../types';

export const initialCelebrities: Celebrity[] = [
  {
    id: '1',
    name: 'Elon Musk',
    avatar: 'https://picsum.photos/200/200?random=1',
    postImage: 'https://picsum.photos/600/400?random=11',
    description: 'Tech mogul known for rockets, electric cars, and controversial tweets.',
    likes: 12500,
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
    avatar: 'https://picsum.photos/200/200?random=2',
    postImage: 'https://picsum.photos/600/400?random=12',
    description: 'Chart-topping pop superstar whose every move is scrutinized by fans.',
    likes: 250000,
    reasons: [],
    comments: [
      { id: 'c2-1', author: 'Swiftie4Life', text: 'Her last album was a masterpiece. A lyrical genius!', timestamp: new Date(Date.now() - 1000 * 60 * 2).toISOString() },
      { id: 'c2-2', author: 'MusicLover', text: "The Eras tour was the best concert I've ever been to.", timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString() }
    ]
  },
  {
    id: '3',
    name: 'MrBeast',
    avatar: 'https://picsum.photos/200/200?random=3',
    description: 'YouTuber famous for elaborate stunts and large-scale philanthropy.',
    likes: 550000,
    reasons: [],
    comments: [
      { id: 'c3-1', author: 'VideoWatcher', text: "He's changing the world with his videos. So wholesome.", timestamp: new Date(Date.now() - 1000 * 60 * 10).toISOString() },
      { id: 'c3-2', author: 'Skeptic', text: "Is it really philanthropy if it's for views?", timestamp: new Date(Date.now() - 1000 * 60 * 25).toISOString() }
    ]
  },
];