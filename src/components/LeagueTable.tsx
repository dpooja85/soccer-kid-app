'use client';

import Image from 'next/image';
import { League, TeamStanding } from '@/data/leagues';
import { useState } from 'react';

interface LeagueTableProps {
  league: League;
  compact?: boolean;
}

function FormBadge({ result }: { result: 'W' | 'D' | 'L' }) {
  const colors = {
    W: 'bg-green-500',
    D: 'bg-yellow-500',
    L: 'bg-red-500'
  };

  return (
    <span className={`w-6 h-6 rounded-full ${colors[result]} text-white text-xs font-bold flex items-center justify-center`}>
      {result}
    </span>
  );
}

function TeamRow({ standing, isWorldCup }: { standing: TeamStanding; isWorldCup: boolean }) {
  const [imageError, setImageError] = useState(false);

  const getPositionColor = (pos: number) => {
    if (pos <= 4) return 'bg-green-500';
    if (pos <= 6) return 'bg-blue-500';
    if (pos >= 18) return 'bg-red-500';
    return 'bg-gray-400';
  };

  return (
    <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
      {/* Position */}
      <td className="py-3 px-2 md:px-4">
        <span className={`w-8 h-8 rounded-full ${getPositionColor(standing.position)} text-white font-bold flex items-center justify-center text-sm`}>
          {standing.position}
        </span>
      </td>

      {/* Team */}
      <td className="py-3 px-2 md:px-4">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
            {imageError ? (
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold">
                {standing.team.substring(0, 2)}
              </div>
            ) : (
              <Image
                src={standing.logo}
                alt={`${standing.team} logo`}
                width={40}
                height={40}
                className="object-contain"
                onError={() => setImageError(true)}
                unoptimized
              />
            )}
          </div>
          <span className="font-semibold text-gray-800 text-sm md:text-base truncate max-w-[100px] md:max-w-none">
            {standing.team}
          </span>
        </div>
      </td>

      {/* Played */}
      <td className="py-3 px-2 md:px-4 text-center text-gray-600 hidden sm:table-cell">
        {standing.played}
      </td>

      {/* Won */}
      <td className="py-3 px-2 md:px-4 text-center text-green-600 font-semibold hidden md:table-cell">
        {standing.won}
      </td>

      {/* Drawn */}
      <td className="py-3 px-2 md:px-4 text-center text-yellow-600 font-semibold hidden md:table-cell">
        {standing.drawn}
      </td>

      {/* Lost */}
      <td className="py-3 px-2 md:px-4 text-center text-red-600 font-semibold hidden md:table-cell">
        {standing.lost}
      </td>

      {/* Goal Difference */}
      <td className="py-3 px-2 md:px-4 text-center hidden sm:table-cell">
        <span className={`font-semibold ${standing.goalDifference > 0 ? 'text-green-600' : standing.goalDifference < 0 ? 'text-red-600' : 'text-gray-600'}`}>
          {standing.goalDifference > 0 ? '+' : ''}{standing.goalDifference}
        </span>
      </td>

      {/* Points */}
      {!isWorldCup && (
        <td className="py-3 px-2 md:px-4 text-center">
          <span className="bg-blue-600 text-white font-bold px-3 py-1 rounded-full text-sm md:text-base">
            {standing.points}
          </span>
        </td>
      )}

      {/* Form */}
      <td className="py-3 px-2 md:px-4 hidden lg:table-cell">
        <div className="flex gap-1">
          {standing.form.map((result, index) => (
            <FormBadge key={index} result={result} />
          ))}
        </div>
      </td>
    </tr>
  );
}

export default function LeagueTable({ league, compact = false }: LeagueTableProps) {
  const [imageError, setImageError] = useState(false);
  const isWorldCup = league.id === 'world-cup';
  const displayStandings = compact ? league.standings.slice(0, 5) : league.standings;

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 md:p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl p-2 flex items-center justify-center">
            {imageError ? (
              <span className="text-2xl">{league.countryFlag}</span>
            ) : (
              <Image
                src={league.logo}
                alt={`${league.name} logo`}
                width={48}
                height={48}
                className="object-contain"
                onError={() => setImageError(true)}
                unoptimized
              />
            )}
          </div>
          <div className="text-white">
            <h2 className="text-xl md:text-2xl font-bold">{league.name}</h2>
            <p className="text-blue-100 text-sm md:text-base">
              {league.countryFlag} {league.country} • {league.season}
            </p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-gray-500 text-xs md:text-sm uppercase">
              <th className="py-3 px-2 md:px-4 text-left">#</th>
              <th className="py-3 px-2 md:px-4 text-left">Team</th>
              <th className="py-3 px-2 md:px-4 text-center hidden sm:table-cell">P</th>
              <th className="py-3 px-2 md:px-4 text-center hidden md:table-cell">W</th>
              <th className="py-3 px-2 md:px-4 text-center hidden md:table-cell">D</th>
              <th className="py-3 px-2 md:px-4 text-center hidden md:table-cell">L</th>
              <th className="py-3 px-2 md:px-4 text-center hidden sm:table-cell">GD</th>
              {!isWorldCup && <th className="py-3 px-2 md:px-4 text-center">Pts</th>}
              <th className="py-3 px-2 md:px-4 text-left hidden lg:table-cell">Form</th>
            </tr>
          </thead>
          <tbody>
            {displayStandings.map((standing) => (
              <TeamRow key={standing.position} standing={standing} isWorldCup={isWorldCup} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      {!compact && (
        <div className="p-4 bg-gray-50 border-t border-gray-100">
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-green-500"></span>
              <span className="text-gray-600">Champions League</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-blue-500"></span>
              <span className="text-gray-600">Europa League</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-red-500"></span>
              <span className="text-gray-600">Relegation</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
