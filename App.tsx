import React, { useState } from 'react';
import { geminiService } from './services/geminiService';
import type { Celebrity, Reason } from './types';
import DiscussionThread from './components/DiscussionThread';
import { initialCelebrities } from './data/mockData';
import LeftSidebar from './components/layout/LeftSidebar';
import RightSidebar from './components/layout/RightSidebar';
import MainFeed from './components/MainFeed';
import BottomNav from './components/layout/BottomNav';

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
       <div className="flex justify-center">
          <div className="flex">
            <LeftSidebar />
            <main className="w-full max-w-[600px] border-x border-border">
                <MainFeed 
                  celebrities={celebrities}
                  onVote={handleVote}
                  onOpenDiscussion={openDiscussion}
                />
            </main>
            <RightSidebar />
          </div>
       </div>

      {selectedCelebrity && (
        <DiscussionThread 
          celebrity={selectedCelebrity} 
          onClose={closeDiscussion} 
        />
      )}
      <BottomNav />
    </div>
  );
};

export default App;