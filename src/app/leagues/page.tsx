'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { leagues } from '@/data/leagues';

interface LeagueCardProps {
  league: typeof leagues[0];
}

function LeagueCard({ league }: LeagueCardProps) {
  const [imageError, setImageError] = useState(false);
  const leader = league.standings[0];

  return (
    <Link href={`/leagues/${league.id}`} className="block">
      <div className="card-hover bg-white rounded-3xl p-6 shadow-lg border-4 border-green-200 cursor-pointer tap-target">
        <div className="flex flex-col items-center text-center">
          {/* League Logo */}
          <div className="w-20 h-20 md:w-24 md:h-24 mb-4 flex items-center justify-center">
            {imageError ? (
              <span className="text-5xl">{league.countryFlag}</span>
            ) : (
              <Image
                src={league.logo}
                alt={`${league.name} logo`}
                width={96}
                height={96}
                className="object-contain"
                onError={() => setImageError(true)}
                unoptimized
              />
            )}
          </div>

          {/* League Name */}
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
            {league.shortName}
          </h3>

          {/* Country */}
          <p className="text-gray-500 text-sm mb-3">
            {league.countryFlag} {league.country}
          </p>

          {/* Current Leader */}
          <div className="bg-green-100 px-4 py-2 rounded-full">
            <span className="text-sm text-gray-600">Leader: </span>
            <span className="font-bold text-green-700">{leader.team}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function LeaguesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            League Tables
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Check out the standings for the biggest football leagues in the world! ⚽
          </p>
        </section>

        {/* Top 5 Leagues */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🏆</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Top European Leagues
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {leagues.filter(l => ['premier-league', 'la-liga', 'bundesliga', 'serie-a', 'ligue-1'].includes(l.id)).map((league) => (
              <LeagueCard key={league.id} league={league} />
            ))}
          </div>
        </section>

        {/* Competitions */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">⭐</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              International Competitions
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            {leagues.filter(l => ['champions-league', 'world-cup'].includes(l.id)).map((league) => (
              <LeagueCard key={league.id} league={league} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
