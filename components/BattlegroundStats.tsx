import React from 'react';

interface BattlegroundStatsProps {
  forVotes: number;
  cancelVotes: number;
}

const BattlegroundStats: React.FC<BattlegroundStatsProps> = ({ forVotes, cancelVotes }) => {
  const totalVotes = forVotes + cancelVotes;
  const forPercentage = totalVotes > 0 ? (forVotes / totalVotes) * 100 : 50;
  const cancelPercentage = totalVotes > 0 ? (cancelVotes / totalVotes) * 100 : 50;

  return (
    <div>
      <div className="flex justify-between items-center text-xs text-text-secondary mb-1">
        <span className="font-bold text-success">FOR ({forVotes.toLocaleString()})</span>
        <span className="font-bold text-danger">CANCEL ({cancelVotes.toLocaleString()})</span>
      </div>
      <div className="w-full bg-surface-dark flex h-2.5 overflow-hidden border border-border">
        <div
          className="bg-success transition-all duration-500 ease-out"
          style={{ width: `${forPercentage}%` }}
          role="progressbar"
          aria-valuenow={forPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${forPercentage.toFixed(1)}% For`}
        />
        <div
          className="bg-danger transition-all duration-500 ease-out"
          style={{ width: `${cancelPercentage}%` }}
          role="progressbar"
          aria-valuenow={cancelPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${cancelPercentage.toFixed(1)}% Cancel`}
        />
      </div>
    </div>
  );
};

export default BattlegroundStats;
