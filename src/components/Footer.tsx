'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-700 to-green-600 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Image
            src="/logo.png"
            alt="GoalZilla Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </div>
        <p className="text-lg font-semibold mb-2">GoalZilla</p>
        <p className="text-green-200 text-sm mb-4">
          Fun soccer stats for kids!
        </p>
        <p className="text-green-300 text-xs">
          Player photos from Wikimedia Commons. Stats are approximate.
        </p>
        <p className="text-green-300 text-xs mt-2">
          Made with ❤️ for young soccer fans
        </p>
      </div>
    </footer>
  );
}
