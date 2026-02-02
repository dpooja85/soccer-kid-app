'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Team } from '@/data/teams';
import { useState } from 'react';

interface TeamCardProps {
  team: Team;
}

export default function TeamCard({ team }: TeamCardProps) {
  const [imageError, setImageError] = useState(false);

  const totalTrophies = team.trophies.premierLeague + team.trophies.faCup +
                        team.trophies.leagueCup + team.trophies.championsLeague;

  return (
    <Link href={`/team/${team.id}`} className="block">
      <div
        className="card-hover bg-white rounded-3xl p-6 shadow-lg border-4 cursor-pointer tap-target"
        style={{ borderColor: team.primaryColor }}
      >
        <div className="flex flex-col items-center">
          {/* Team Logo */}
          <div
            className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-4 shadow-md overflow-hidden"
            style={{
              backgroundColor: imageError ? team.primaryColor : 'white',
              border: `4px solid ${team.primaryColor}`
            }}
          >
            {imageError ? (
              <span
                className="text-3xl md:text-4xl font-bold"
                style={{ color: team.secondaryColor }}
              >
                {team.shortName.substring(0, 3).toUpperCase()}
              </span>
            ) : (
              <Image
                src={team.logo}
                alt={`${team.name} logo`}
                width={100}
                height={100}
                className="object-contain p-2"
                onError={() => setImageError(true)}
                unoptimized
              />
            )}
          </div>

          {/* Team Name */}
          <h3 className="text-lg md:text-xl font-bold text-center text-gray-800 mb-2">
            {team.shortName}
          </h3>

          {/* Trophy Count */}
          {totalTrophies > 0 && (
            <div className="flex items-center gap-1 bg-amber-100 px-3 py-1 rounded-full">
              <span className="text-xl">🏆</span>
              <span className="font-bold text-amber-700">{totalTrophies}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
