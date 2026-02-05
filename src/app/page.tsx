import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TeamCard from '@/components/TeamCard';
import PlayerCard from '@/components/PlayerCard';
import { teams } from '@/data/teams';
import { getPopularPlayers } from '@/data/players';
import { leagues } from '@/data/leagues';

function LeagueQuickCard({ league }: { league: typeof leagues[0] }) {
  const leader = league.standings[0];

  return (
    <Link href={`/leagues/${league.id}`} className="block">
      <div className="card-hover bg-white rounded-2xl p-4 shadow-lg border-2 border-green-200 cursor-pointer tap-target">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex-shrink-0">
            <Image
              src={league.logo}
              alt={`${league.name} logo`}
              width={40}
              height={40}
              className="object-contain"
              unoptimized
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-800 text-sm truncate">{league.shortName}</h3>
            <p className="text-xs text-gray-500">{league.countryFlag} {leader.team}</p>
          </div>
          <div className="text-right">
            <span className="text-lg">📊</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const popularPlayers = getPopularPlayers();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Welcome to GoalZilla!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Click on a team to see their players, or search for your favorite player!
          </p>
        </section>

        {/* Match Schedule Banner */}
        <Link href="/matches" className="block mb-12">
          <div className="card-hover bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-6 text-white cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-5xl">📅</span>
                <div>
                  <h3 className="text-2xl font-bold">This Week&apos;s Matches</h3>
                  <p className="text-orange-100">See all upcoming games with times in ET!</p>
                </div>
              </div>
              <div className="text-4xl">→</div>
            </div>
          </div>
        </Link>

        {/* League Tables Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">📊</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                League Tables
              </h2>
            </div>
            <Link
              href="/leagues"
              className="text-green-600 hover:text-green-800 font-semibold text-sm md:text-base"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {leagues.map((league) => (
              <LeagueQuickCard key={league.id} league={league} />
            ))}
          </div>
        </section>

        {/* Popular Players Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">⭐</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Popular Players
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {popularPlayers.slice(0, 10).map((player) => (
              <PlayerCard key={player.id} player={player} size="medium" />
            ))}
          </div>
        </section>

        {/* Premier League Teams Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🏟️</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Premier League Teams
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {teams.map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
