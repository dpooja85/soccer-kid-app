'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PlayerCard from '@/components/PlayerCard';
import TrophyDisplay from '@/components/TrophyDisplay';
import { getTeamById, teams } from '@/data/teams';
import { getPlayersByTeamId } from '@/data/players';

export default function TeamPage() {
  const params = useParams();
  const teamId = Number(params.id);
  const team = getTeamById(teamId);
  const players = getPlayersByTeamId(teamId);
  const [imageError, setImageError] = useState(false);

  if (!team) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">😕</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Team Not Found</h1>
            <p className="text-gray-600 mb-6">We couldn&apos;t find this team.</p>
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

  // Find team's position (just use index + 1 for now as placeholder)
  const teamPosition = teams.findIndex(t => t.id === team.id) + 1;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Team Banner */}
        <div
          className="relative py-12 px-4"
          style={{
            background: `linear-gradient(135deg, ${team.primaryColor} 0%, ${team.primaryColor}dd 100%)`
          }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 transition-colors tap-target"
            >
              <span className="text-xl">←</span>
              <span className="font-medium">All Teams</span>
            </Link>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              {/* Team Logo */}
              <div
                className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white flex items-center justify-center shadow-2xl"
              >
                {imageError ? (
                  <span
                    className="text-4xl md:text-5xl font-bold"
                    style={{ color: team.primaryColor }}
                  >
                    {team.shortName.substring(0, 3).toUpperCase()}
                  </span>
                ) : (
                  <Image
                    src={team.logo}
                    alt={`${team.name} logo`}
                    width={140}
                    height={140}
                    className="object-contain p-4"
                    onError={() => setImageError(true)}
                    unoptimized
                  />
                )}
              </div>

              {/* Team Info */}
              <div className="text-center md:text-left text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {team.name}
                </h1>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🏟️</span>
                    <span>{team.stadium}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📍</span>
                    <span>{team.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📅</span>
                    <span>Since {team.founded}</span>
                  </div>
                </div>

                {/* League Position Badge */}
                <div className="mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-2xl">📊</span>
                  <span className="font-semibold">League Position: #{teamPosition}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Trophy Cabinet */}
          <section className="mb-12">
            <TrophyDisplay trophies={team.trophies} />
          </section>

          {/* Squad Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">👥</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Current Squad
              </h2>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-lg font-semibold">
                {players.length} players
              </span>
            </div>

            {players.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {players.map((player) => (
                  <PlayerCard key={player.id} player={player} size="medium" />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-3xl">
                <div className="text-4xl mb-4">📋</div>
                <p className="text-gray-600 text-lg">
                  Squad data coming soon!
                </p>
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
