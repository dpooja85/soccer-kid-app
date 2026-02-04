'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { searchTeams, Team } from '@/data/teams';
import { searchPlayers, Player } from '@/data/players';
import { teams } from '@/data/teams';

interface SearchResult {
  type: 'team' | 'player';
  item: Team | Player;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length >= 2) {
      const teamResults = searchTeams(query).map(team => ({ type: 'team' as const, item: team }));
      const playerResults = searchPlayers(query).map(player => ({ type: 'player' as const, item: player }));
      setResults([...teamResults.slice(0, 3), ...playerResults.slice(0, 5)]);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getTeamForPlayer = (player: Player): Team | undefined => {
    return teams.find(t => t.id === player.teamId);
  };

  const handleResultClick = () => {
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search teams or players..."
          className="w-full px-6 py-4 text-lg rounded-full border-4 border-green-300 focus:border-green-500 focus:outline-none shadow-lg bg-white placeholder-gray-400 transition-all"
          aria-label="Search for teams or players"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl">
          🔍
        </div>
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-2xl border-2 border-green-200 overflow-hidden z-50">
          {results.map((result, index) => (
            <Link
              key={`${result.type}-${result.type === 'team' ? (result.item as Team).id : (result.item as Player).id}`}
              href={result.type === 'team' ? `/team/${(result.item as Team).id}` : `/player/${(result.item as Player).id}`}
              onClick={handleResultClick}
              className={`flex items-center gap-4 p-4 hover:bg-green-50 transition-colors tap-target ${
                index !== results.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              {result.type === 'team' ? (
                <>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white overflow-hidden"
                    style={{ border: `2px solid ${(result.item as Team).primaryColor}` }}
                  >
                    <Image
                      src={(result.item as Team).logo}
                      alt={`${(result.item as Team).name} logo`}
                      width={40}
                      height={40}
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{(result.item as Team).name}</div>
                    <div className="text-sm text-gray-500">Team</div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: getTeamForPlayer(result.item as Player)?.primaryColor || '#6366f1' }}
                  >
                    {(result.item as Player).jerseyNumber}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{(result.item as Player).name}</div>
                    <div className="text-sm text-gray-500">
                      {(result.item as Player).position} • {getTeamForPlayer(result.item as Player)?.shortName}
                    </div>
                  </div>
                </>
              )}
            </Link>
          ))}
        </div>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-2xl border-2 border-green-200 p-6 text-center z-50">
          <div className="text-4xl mb-2">😕</div>
          <div className="text-gray-600">No results found for &quot;{query}&quot;</div>
        </div>
      )}
    </div>
  );
}
