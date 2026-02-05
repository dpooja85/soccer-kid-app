'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import SearchBar from './SearchBar';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isLeaguesPage = pathname.startsWith('/leagues');
  const isMatchesPage = pathname.startsWith('/matches');

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 tap-target">
            <Image
              src="/logo.png"
              alt="GoalZilla Logo"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <h1 className="text-2xl md:text-3xl font-bold gradient-text">
              GoalZilla
            </h1>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 w-full md:max-w-xl">
            <SearchBar />
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-2">
            {!isHomePage && (
              <Link
                href="/"
                className="flex items-center gap-2 bg-orange-100 hover:bg-orange-200 px-4 py-2 rounded-full transition-colors tap-target"
              >
                <span className="text-xl">🏠</span>
                <span className="font-medium text-orange-700 hidden sm:inline">Home</span>
              </Link>
            )}
            <Link
              href="/matches"
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors tap-target ${
                isMatchesPage
                  ? 'bg-orange-500 text-white'
                  : 'bg-orange-100 hover:bg-orange-200 text-orange-700'
              }`}
            >
              <span className="text-xl">📅</span>
              <span className="font-medium hidden sm:inline">Matches</span>
            </Link>
            <Link
              href="/leagues"
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors tap-target ${
                isLeaguesPage
                  ? 'bg-green-500 text-white'
                  : 'bg-green-100 hover:bg-green-200 text-green-700'
              }`}
            >
              <span className="text-xl">📊</span>
              <span className="font-medium hidden sm:inline">Leagues</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
