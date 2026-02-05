'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { matches, Match } from '@/data/matches';

const leagueEmojis: Record<string, string> = {
  'premier-league': '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  'la-liga': '🇪🇸',
  'bundesliga': '🇩🇪',
  'serie-a': '🇮🇹',
  'ligue-1': '🇫🇷',
  'world-cup': '🌍',
};

const leagueColors: Record<string, string> = {
  'premier-league': 'bg-purple-100 border-purple-300',
  'la-liga': 'bg-orange-100 border-orange-300',
  'bundesliga': 'bg-red-100 border-red-300',
  'serie-a': 'bg-blue-100 border-blue-300',
  'ligue-1': 'bg-indigo-100 border-indigo-300',
  'world-cup': 'bg-green-100 border-green-300',
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T12:00:00');
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  return date.toLocaleDateString('en-US', options);
}

function formatTime(time: string): string {
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
}

function getDayEmoji(dateStr: string): string {
  const date = new Date(dateStr + 'T12:00:00');
  const day = date.getDay();
  const emojis = ['🌞', '🌙', '⭐', '🌟', '✨', '🎉', '🎊'];
  return emojis[day];
}

function formatShortDate(dateStr: string): string {
  const date = new Date(dateStr + 'T12:00:00');
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  };
  return date.toLocaleDateString('en-US', options);
}

function MatchCard({ match, showDate = false }: { match: Match; showDate?: boolean }) {
  const isFinished = match.status === 'finished';
  const homeWon = match.winner === 'home';
  const awayWon = match.winner === 'away';
  const isDraw = match.winner === 'draw';

  return (
    <div className={`rounded-2xl p-4 border-2 ${leagueColors[match.leagueId]} mb-3`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-600">
          {leagueEmojis[match.leagueId]} {match.league}
        </span>
        <span className="text-sm text-gray-500">
          {showDate && <span className="font-medium">{formatShortDate(match.date)} • </span>}
          {formatTime(match.time)} ET
        </span>
      </div>

      <div className="flex items-center justify-between">
        {/* Home Team */}
        <div className={`flex-1 text-center ${homeWon ? 'font-bold' : ''}`}>
          <div className={`text-lg ${homeWon ? 'text-green-600' : ''}`}>
            {match.homeTeam}
            {homeWon && <span className="ml-1">🏆</span>}
          </div>
        </div>

        {/* Score or VS */}
        <div className="px-4 text-center">
          {isFinished ? (
            <div className="flex items-center gap-2">
              <span className={`text-2xl font-bold ${homeWon ? 'text-green-600' : isDraw ? 'text-yellow-600' : 'text-gray-700'}`}>
                {match.homeScore}
              </span>
              <span className="text-gray-400">-</span>
              <span className={`text-2xl font-bold ${awayWon ? 'text-green-600' : isDraw ? 'text-yellow-600' : 'text-gray-700'}`}>
                {match.awayScore}
              </span>
            </div>
          ) : (
            <div className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-600">
              VS
            </div>
          )}
        </div>

        {/* Away Team */}
        <div className={`flex-1 text-center ${awayWon ? 'font-bold' : ''}`}>
          <div className={`text-lg ${awayWon ? 'text-green-600' : ''}`}>
            {awayWon && <span className="mr-1">🏆</span>}
            {match.awayTeam}
          </div>
        </div>
      </div>

      {isFinished && isDraw && (
        <div className="text-center mt-2">
          <span className="bg-yellow-200 px-3 py-1 rounded-full text-sm font-medium text-yellow-800">
            🤝 Draw!
          </span>
        </div>
      )}

      <div className="text-center mt-2 text-xs text-gray-500">
        📍 {match.venue}
      </div>
    </div>
  );
}

export default function MatchesPage() {
  const [filter, setFilter] = useState<string>('all');
  const [showPast, setShowPast] = useState(true);

  // Group matches by date
  const upcomingMatches = matches
    .filter(m => m.status === 'upcoming')
    .filter(m => filter === 'all' || m.leagueId === filter)
    .sort((a, b) => new Date(`${a.date}T${a.time}`).getTime() - new Date(`${b.date}T${b.time}`).getTime());

  const pastMatches = matches
    .filter(m => m.status === 'finished')
    .filter(m => filter === 'all' || m.leagueId === filter)
    .sort((a, b) => new Date(`${b.date}T${b.time}`).getTime() - new Date(`${a.date}T${a.time}`).getTime());

  // Group upcoming by date
  const groupedUpcoming = upcomingMatches.reduce((acc, match) => {
    if (!acc[match.date]) acc[match.date] = [];
    acc[match.date].push(match);
    return acc;
  }, {} as Record<string, Match[]>);

  const leagues = [
    { id: 'all', name: 'All Leagues', emoji: '⚽' },
    { id: 'premier-league', name: 'Premier League', emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { id: 'la-liga', name: 'La Liga', emoji: '🇪🇸' },
    { id: 'bundesliga', name: 'Bundesliga', emoji: '🇩🇪' },
    { id: 'serie-a', name: 'Serie A', emoji: '🇮🇹' },
    { id: 'ligue-1', name: 'Ligue 1', emoji: '🇫🇷' },
    { id: 'world-cup', name: 'World Cup', emoji: '🌍' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        {/* Hero */}
        <section className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Match Schedule
          </h1>
          <p className="text-xl text-gray-600">
            See when your favorite teams play! ⚽📺
          </p>
          <p className="text-sm text-gray-500 mt-2">
            All times are in Eastern Time (ET)
          </p>
        </section>

        {/* League Filter */}
        <section className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {leagues.map((league) => (
              <button
                key={league.id}
                onClick={() => setFilter(league.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all tap-target ${
                  filter === league.id
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-white border-2 border-gray-200 hover:border-green-300'
                }`}
              >
                <span>{league.emoji}</span>
                <span className="hidden sm:inline">{league.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* World Cup Banner */}
        {(filter === 'all' || filter === 'world-cup') && (
          <section className="mb-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-6 text-white text-center">
            <div className="text-4xl mb-2">🏆🌍🎉</div>
            <h2 className="text-2xl font-bold mb-2">FIFA World Cup 2026</h2>
            <p className="text-green-100">Coming June 11, 2026 - USA, Canada & Mexico!</p>
            <p className="text-sm text-green-200 mt-2">Scroll down to see the opening matches!</p>
          </section>
        )}

        {/* Past Results Toggle */}
        <section className="mb-6">
          <button
            onClick={() => setShowPast(!showPast)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
              showPast
                ? 'bg-orange-500 text-white'
                : 'bg-orange-100 text-orange-700'
            }`}
          >
            <span>{showPast ? '📖' : '📕'}</span>
            <span>{showPast ? 'Hide' : 'Show'} Recent Results</span>
          </button>
        </section>

        {/* Past Results */}
        {showPast && pastMatches.length > 0 && (
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">📋</span>
              <h2 className="text-2xl font-bold text-gray-800">Recent Results</h2>
            </div>
            <div className="bg-gray-50 rounded-3xl p-4">
              {pastMatches.slice(0, 8).map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </section>
        )}

        {/* Upcoming Matches */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">📅</span>
            <h2 className="text-2xl font-bold text-gray-800">Upcoming Matches</h2>
          </div>

          {Object.keys(groupedUpcoming).length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-3xl">
              <div className="text-4xl mb-4">🔍</div>
              <p className="text-gray-600 text-lg">
                No upcoming matches for this league!
              </p>
            </div>
          ) : (
            Object.entries(groupedUpcoming).map(([date, dayMatches]) => (
              <div key={date} className="mb-8">
                {/* Day Header */}
                <div className="flex items-center gap-3 mb-4 bg-white rounded-full px-4 py-2 shadow-md inline-flex">
                  <span className="text-2xl">{getDayEmoji(date)}</span>
                  <span className="font-bold text-gray-800">{formatDate(date)}</span>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-sm">
                    {dayMatches.length} {dayMatches.length === 1 ? 'match' : 'matches'}
                  </span>
                </div>

                {/* Day's Matches */}
                <div className="space-y-3">
                  {dayMatches.map((match) => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </div>
              </div>
            ))
          )}
        </section>

        {/* Back to Home */}
        <section className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors tap-target"
          >
            <span>🏠</span> Back to Home
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
