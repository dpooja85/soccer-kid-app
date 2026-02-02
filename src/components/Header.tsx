'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SearchBar from './SearchBar';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isLeaguesPage = pathname.startsWith('/leagues');

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 tap-target">
            <span className="text-4xl">⚽</span>
            <h1 className="text-2xl md:text-3xl font-bold gradient-text">
              Soccer Stats Hub
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
                className="flex items-center gap-2 bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-full transition-colors tap-target"
              >
                <span className="text-xl">🏠</span>
                <span className="font-medium text-blue-700 hidden sm:inline">Home</span>
              </Link>
            )}
            <Link
              href="/leagues"
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors tap-target ${
                isLeaguesPage
                  ? 'bg-purple-500 text-white'
                  : 'bg-purple-100 hover:bg-purple-200 text-purple-700'
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
