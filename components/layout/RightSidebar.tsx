import React from 'react';

const RightSidebar: React.FC = () => {
  return (
    <aside className="hidden xl:flex flex-col w-80 p-4 pl-8 sticky top-0 h-screen">
      <div className="space-y-6">
        {/* Search Bar Placeholder */}
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full bg-surface border border-border p-2 text-base text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary"
        />

        {/* Trends Placeholder */}
        <div className="bg-surface border border-border">
          <h3 className="font-bold p-3 border-b border-border text-text-primary text-lg">What’s happening</h3>
          <div className="p-3 space-y-3">
            <p className="text-text-secondary">#TrendingTopic1</p>
            <p className="text-text-secondary">#AnotherTrend</p>
            <p className="text-text-secondary">#UIUXDesign</p>
            <button className="text-primary text-xs">Show more</button>
          </div>
        </div>

        {/* Who to follow Placeholder */}
        <div className="bg-surface border border-border">
          <h3 className="font-bold p-3 border-b border-border text-text-primary text-lg">Who to follow</h3>
          <div className="p-3 space-y-3">
            <div className="flex justify-between items-center">
                <p className="text-text-primary font-semibold">Placeholder User</p>
                <button className="bg-primary text-white px-3 py-1 text-sm font-bold">Follow</button>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-text-primary font-semibold">Another User</p>
                <button className="bg-primary text-white px-3 py-1 text-sm font-bold">Follow</button>
            </div>
            <button className="text-primary text-xs">Show more</button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;