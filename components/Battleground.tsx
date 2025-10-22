import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';
import type { BattlegroundCelebrity } from '../types';
import { SearchIcon } from './icons/SearchIcon';
import { SpinnerIcon } from './icons/SpinnerIcon';
import BattlegroundStats from './BattlegroundStats';

const Battleground: React.FC = () => {
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [celebrity, setCelebrity] = useState<BattlegroundCelebrity | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [userVote, setUserVote] = useState<'for' | 'cancel' | null>(null);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        setIsLoading(true);
        setCelebrity(null);
        setUserVote(null);
        setError(null);

        try {
            const result = await geminiService.searchCelebrity(query);
            
            if (result) {
                setCelebrity({
                    ...result,
                    avatar: `https://i.pravatar.cc/150?u=${result.name.replace(/\s/g, '')}`,
                    forVotes: Math.floor(Math.random() * 5000) + 1000,
                    cancelVotes: Math.floor(Math.random() * 5000) + 1000,
                });
            } else {
                setError(`Could not find information for "${query}". Please try another name.`);
            }
        } catch (err) {
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleVote = (voteType: 'for' | 'cancel') => {
        if (!celebrity || userVote) return;

        setUserVote(voteType);
        setCelebrity(prev => {
            if (!prev) return null;
            return {
                ...prev,
                forVotes: voteType === 'for' ? prev.forVotes + 1 : prev.forVotes,
                cancelVotes: voteType === 'cancel' ? prev.cancelVotes + 1 : prev.cancelVotes,
            };
        });
    };

    return (
        <div className="p-4 border-b border-border bg-surface">
            <h2 className="text-lg font-bold text-text-primary">The Battleground</h2>
            <p className="text-sm text-text-secondary mb-4">See where the public stands. Search for a celebrity to begin.</p>
            
            <form onSubmit={handleSearch} className="flex items-center space-x-2">
                <div className="relative flex-grow">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                    <input 
                        type="text" 
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for a celebrity..."
                        className="w-full bg-surface-dark border border-border p-2 pl-10 text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary transition-colors"
                        disabled={isLoading}
                    />
                </div>
                <button 
                    type="submit" 
                    className="bg-primary text-white font-bold py-2 px-4 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading || !query.trim()}
                >
                    {isLoading ? <SpinnerIcon className="w-5 h-5" /> : 'Search'}
                </button>
            </form>

            <div className="mt-4 min-h-[180px]">
                {error && <p className="text-center text-danger pt-8">{error}</p>}

                {celebrity && (
                    <div className="animate-fade-in-fast bg-surface-dark p-4 border border-border">
                        <div className="flex items-center space-x-4">
                            <img src={celebrity.avatar} alt={celebrity.name} className="w-16 h-16 rounded-full object-cover border-2 border-border"/>
                            <div>
                                <h3 className="text-lg font-bold text-text-primary">{celebrity.name}</h3>
                                <p className="text-sm text-text-secondary">{celebrity.biography}</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <BattlegroundStats forVotes={celebrity.forVotes} cancelVotes={celebrity.cancelVotes} />
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-3">
                            <button 
                                onClick={() => handleVote('for')}
                                disabled={!!userVote}
                                className={`w-full font-bold py-2 px-4 text-sm transition-all duration-200 flex items-center justify-center
                                    ${userVote === 'for' ? 'bg-success text-white' : 'bg-success-bg text-success-text hover:bg-success hover:text-white'}
                                    disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-success-bg disabled:hover:text-success-text`}
                            >
                                For
                            </button>
                            <button 
                                onClick={() => handleVote('cancel')}
                                disabled={!!userVote}
                                className={`w-full font-bold py-2 px-4 text-sm transition-all duration-200 flex items-center justify-center
                                    ${userVote === 'cancel' ? 'bg-danger text-white' : 'bg-danger-bg text-danger-text hover:bg-danger hover:text-white'}
                                    disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-danger-bg disabled:hover:text-danger-text`}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Battleground;
