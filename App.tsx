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
  const [celebrities, setCelebrities] = useState<Celebrity[]>(
    initialCelebrities.map(c => ({...c, liked: false}))
  );
  const [selectedCelebrity, setSelectedCelebrity] = useState<Celebrity | null>(null);

  const handleLike = async (id: string) => {
    const celebrity = celebrities.find(c => c.id === id);
    if (!celebrity) return;

    const isLiking = !celebrity.liked;

    // Optimistically update the UI for immediate feedback
    setCelebrities(prevCelebrities =>
      prevCelebrities.map(c => {
        if (c.id === id) {
          return {
            ...c,
            likes: isLiking ? c.likes + 1 : c.likes - 1,
            liked: isLiking,
          };
        }
        return c;
      })
    );
    
    // If liking, generate and add a reason
    if (isLiking) {
      const reasonText = await geminiService.generateLikeReason(celebrity.name);
      const newReason: Reason = {
        id: `r-${Date.now()}`,
        text: reasonText,
        type: 'like',
      };

      setCelebrities(prevCelebrities =>
        prevCelebrities.map(c => {
          if (c.id === id) {
            return {
              ...c,
              reasons: [newReason, ...c.reasons].slice(0, 5),
            };
          }
          return c;
        })
      );
    }
  };

  const openReply = (celebrity: Celebrity) => {
    setSelectedCelebrity(celebrity);
  };

  const closeReply = () => {
    setSelectedCelebrity(null);
  };


  return (
    <div className="bg-background min-h-screen font-sans text-text-primary">
       <div className="flex justify-center">
          <div className="flex w-full max-w-[1350px]">
            <LeftSidebar />
            <main className="w-full max-w-[600px] border-x border-border">
                <MainFeed 
                  celebrities={celebrities}
                  onLike={handleLike}
                  onReply={openReply}
                />
            </main>
            <div className="hidden lg:flex flex-grow">
              <RightSidebar />
            </div>
          </div>
       </div>

      {selectedCelebrity && (
        <DiscussionThread 
          celebrity={selectedCelebrity} 
          onClose={closeReply} 
        />
      )}
      <BottomNav />
    </div>
  );
};

export default App;
