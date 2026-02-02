'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeagueTable from '@/components/LeagueTable';
import { getLeagueById, leagues } from '@/data/leagues';

export default function LeaguePage() {
  const params = useParams();
  const leagueId = params.id as string;
  const league = getLeagueById(leagueId);

  if (!league) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">😕</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">League Not Found</h1>
            <p className="text-gray-600 mb-6">We couldn&apos;t find this league.</p>
            <Link
              href="/leagues"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              <span>📊</span> View All Leagues
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get other leagues for navigation
  const otherLeagues = leagues.filter(l => l.id !== leagueId);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        {/* Back Button */}
        <Link
          href="/leagues"
          className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full mb-6 transition-colors tap-target"
        >
          <span className="text-xl">←</span>
          <span className="font-medium text-gray-700">All Leagues</span>
        </Link>

        {/* League Table */}
        <section className="mb-12">
          <LeagueTable league={league} />
        </section>

        {/* Other Leagues */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🌍</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Other Leagues
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {otherLeagues.map((l) => (
              <Link
                key={l.id}
                href={`/leagues/${l.id}`}
                className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 border-2 border-blue-200 px-4 py-2 rounded-full transition-colors tap-target"
              >
                <span>{l.countryFlag}</span>
                <span className="font-medium text-gray-700">{l.shortName}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
