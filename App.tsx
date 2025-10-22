import React, { useState } from 'react';
import { geminiService } from './services/geminiService';
import type { Celebrity, Reason } from './types';
import Header from './components/Header';
import CelebrityCard from './components/CelebrityCard';
import DiscussionThread from './components/DiscussionThread';
import { initialCelebrities } from './data/mockData';

const App: React.FC = () => {
  const [celebrities, setCelebrities] = useState<Celebrity[]>(initialCelebrities);
  const [selectedCelebrity, setSelectedCelebrity] = useState<Celebrity | null>(null);

  const handleVote = async (id: string, voteType: 'upvote' | 'downvote') => {
    const celebrity = celebrities.find(c => c.id === id);
    if (!celebrity) return;

    const reasonText = await geminiService.generateVoteReason(celebrity.name, voteType);
    const newReason: Reason = {
      id: `r-${Date.now()}`,
      text: reasonText,
      type: voteType,
    };

    setCelebrities(prevCelebrities =>
      prevCelebrities.map(c => {
        if (c.id === id) {
          return {
            ...c,
            upvotes: voteType === 'upvote' ? c.upvotes + 1 : c.upvotes,
            downvotes: voteType === 'downvote' ? c.downvotes + 1 : c.downvotes,
            reasons: [newReason, ...c.reasons].slice(0, 5), // Keep last 5 reasons
          };
        }
        return c;
      })
    );
  };

  const openDiscussion = (celebrity: Celebrity) => {
    setSelectedCelebrity(celebrity);
  };

  const closeDiscussion = () => {
    setSelectedCelebrity(null);
  };


  return (
    <div className="bg-background min-h-screen font-sans text-text-primary">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {celebrities.map(celebrity => (
            <CelebrityCard 
              key={celebrity.id} 
              celebrity={celebrity}
              onVote={handleVote}
              onOpenDiscussion={openDiscussion}
            />
          ))}
        </div>
      </main>
      {selectedCelebrity && (
        <DiscussionThread 
          celebrity={selectedCelebrity} 
          onClose={closeDiscussion} 
        />
      )}
    </div>
  );
};

export default App;
