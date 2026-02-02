'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Player } from '@/data/players';
import { getTeamById } from '@/data/teams';
import { useState } from 'react';

interface PlayerCardProps {
  player: Player;
  size?: 'small' | 'medium' | 'large';
}

export default function PlayerCard({ player, size = 'medium' }: PlayerCardProps) {
  const [imageError, setImageError] = useState(false);
  const team = getTeamById(player.teamId);

  const sizeClasses = {
    small: 'p-3',
    medium: 'p-4 md:p-6',
    large: 'p-6 md:p-8',
  };

  const imageSizes = {
    small: { width: 60, height: 60, className: 'w-16 h-16' },
    medium: { width: 80, height: 80, className: 'w-20 h-20 md:w-24 md:h-24' },
    large: { width: 120, height: 120, className: 'w-28 h-28 md:w-36 md:h-36' },
  };

  return (
    <Link href={`/player/${player.id}`} className="block">
      <div
        className={`card-hover bg-white rounded-3xl shadow-lg border-4 cursor-pointer tap-target relative ${sizeClasses[size]}`}
        style={{ borderColor: team?.primaryColor || '#3b82f6' }}
      >
        <div className="flex flex-col items-center">
          {/* Player Photo or Fallback */}
          <div
            className={`${imageSizes[size].className} rounded-full flex items-center justify-center mb-3 shadow-md relative overflow-hidden`}
            style={{
              backgroundColor: team?.primaryColor || '#3b82f6',
              border: `3px solid ${team?.secondaryColor || '#ffffff'}`
            }}
          >
            {imageError ? (
              <div className="flex flex-col items-center justify-center">
                <span
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: team?.secondaryColor || '#ffffff' }}
                >
                  {player.jerseyNumber}
                </span>
              </div>
            ) : (
              <Image
                src={player.image}
                alt={`${player.name} photo`}
                width={imageSizes[size].width}
                height={imageSizes[size].height}
                className="object-cover w-full h-full"
                onError={() => setImageError(true)}
                unoptimized
              />
            )}
          </div>

          {/* Jersey Number Badge */}
          <div
            className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-md"
            style={{
              backgroundColor: team?.primaryColor || '#3b82f6',
              color: team?.secondaryColor || '#ffffff'
            }}
          >
            {player.jerseyNumber}
          </div>

          {/* Player Name */}
          <h3 className="text-base md:text-lg font-bold text-center text-gray-800 mb-1">
            {player.name}
          </h3>

          {/* Position & Flag */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>{player.nationalityFlag}</span>
            <span>{player.position}</span>
          </div>

          {/* Goals this season */}
          <div className="mt-2 flex items-center gap-1 bg-green-100 px-3 py-1 rounded-full">
            <span className="text-lg">⚽</span>
            <span className="font-bold text-green-700">{player.stats.seasonGoals}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
