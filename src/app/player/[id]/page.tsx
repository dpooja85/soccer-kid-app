'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPlayerById } from '@/data/players';
import { getTeamById } from '@/data/teams';

interface StatCardProps {
  label: string;
  value: number | string;
  emoji: string;
  highlight?: boolean;
}

function StatCard({ label, value, emoji, highlight = false }: StatCardProps) {
  return (
    <div
      className={`rounded-2xl p-4 text-center ${
        highlight
          ? 'bg-gradient-to-br from-amber-100 to-yellow-200 border-2 border-amber-300'
          : 'bg-white border-2 border-gray-200'
      }`}
    >
      <div className="text-3xl mb-1">{emoji}</div>
      <div className={`text-3xl md:text-4xl font-bold ${highlight ? 'text-amber-700' : 'text-gray-800'}`}>
        {value}
      </div>
      <div className="text-sm text-gray-600 font-medium">{label}</div>
    </div>
  );
}

export default function PlayerPage() {
  const params = useParams();
  const playerId = Number(params.id);
  const player = getPlayerById(playerId);
  const team = player ? getTeamById(player.teamId) : undefined;
  const [imageError, setImageError] = useState(false);

  if (!player) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">😕</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Player Not Found</h1>
            <p className="text-gray-600 mb-6">We couldn&apos;t find this player.</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              <span>🏠</span> Go Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        {/* Back Button */}
        <Link
          href={team ? `/team/${team.id}` : '/'}
          className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full mb-6 transition-colors tap-target"
        >
          <span className="text-xl">←</span>
          <span className="font-medium text-gray-700">
            {team ? `Back to ${team.shortName}` : 'All Teams'}
          </span>
        </Link>

        {/* Player Trading Card */}
        <div
          className="rounded-[2rem] overflow-hidden shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${team?.primaryColor || '#3b82f6'} 0%, ${team?.primaryColor || '#3b82f6'}cc 100%)`
          }}
        >
          {/* Card Header */}
          <div className="p-6 md:p-8 text-white">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Player Photo */}
              <div
                className="w-36 h-36 md:w-48 md:h-48 rounded-full flex items-center justify-center shadow-2xl overflow-hidden"
                style={{
                  backgroundColor: team?.secondaryColor || '#ffffff',
                  border: `6px solid ${team?.secondaryColor || '#ffffff'}`
                }}
              >
                {imageError ? (
                  <div className="flex flex-col items-center justify-center">
                    <span
                      className="text-5xl md:text-6xl font-bold"
                      style={{ color: team?.primaryColor || '#3b82f6' }}
                    >
                      {player.jerseyNumber}
                    </span>
                    <span
                      className="text-lg font-medium"
                      style={{ color: team?.primaryColor || '#3b82f6' }}
                    >
                      {player.firstName.charAt(0)}{player.lastName.charAt(0)}
                    </span>
                  </div>
                ) : (
                  <Image
                    src={player.image}
                    alt={`${player.name} photo`}
                    width={180}
                    height={180}
                    className="object-cover w-full h-full"
                    onError={() => setImageError(true)}
                    unoptimized
                  />
                )}
              </div>

              {/* Player Info */}
              <div className="text-center md:text-left flex-1">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <span className="text-5xl font-bold">{player.jerseyNumber}</span>
                  <span className="text-4xl">{player.nationalityFlag}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {player.name}
                </h1>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 text-lg">
                  <span className="bg-white/20 px-4 py-1 rounded-full">
                    {player.position}
                  </span>
                  <span className="bg-white/20 px-4 py-1 rounded-full">
                    Age {player.age}
                  </span>
                </div>

                {/* Team Link */}
                {team && (
                  <Link
                    href={`/team/${team.id}`}
                    className="inline-flex items-center gap-2 mt-4 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors tap-target"
                  >
                    <span className="font-medium">{team.name}</span>
                    <span>→</span>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gray-50 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              ⚽ Career Stats ⚽
            </h2>

            {/* Big Goals Number */}
            <div className="text-center mb-8 py-6 bg-gradient-to-br from-green-100 to-emerald-200 rounded-3xl">
              <div className="text-xl text-gray-600 font-medium mb-2">Total Career Goals</div>
              <div className="text-7xl md:text-8xl font-bold text-green-600">
                {player.stats.careerGoals}
              </div>
              <div className="text-2xl mt-2">⚽</div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <StatCard
                emoji="⚽"
                label="Goals This Season"
                value={player.stats.seasonGoals}
                highlight
              />
              <StatCard
                emoji="🎯"
                label="Career Assists"
                value={player.stats.careerAssists}
              />
              <StatCard
                emoji="🅰️"
                label="Assists This Season"
                value={player.stats.seasonAssists}
              />
              <StatCard
                emoji="👕"
                label="Games Played"
                value={player.stats.gamesPlayed}
              />
              <StatCard
                emoji="🌍"
                label="International Caps"
                value={player.stats.internationalCaps}
              />
              <StatCard
                emoji="🏆"
                label="Trophies Won"
                value={player.stats.trophies}
                highlight={player.stats.trophies > 0}
              />
            </div>

            {/* Player Info */}
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">📋 Player Info</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎂</span>
                  <div>
                    <div className="text-sm text-gray-500">Date of Birth</div>
                    <div className="font-semibold">{player.dateOfBirth}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <div className="text-sm text-gray-500">Nationality</div>
                    <div className="font-semibold">{player.nationalityFlag} {player.nationality}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⚽</span>
                  <div>
                    <div className="text-sm text-gray-500">Position</div>
                    <div className="font-semibold">{player.position}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">👕</span>
                  <div>
                    <div className="text-sm text-gray-500">Jersey Number</div>
                    <div className="font-semibold">#{player.jerseyNumber}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
