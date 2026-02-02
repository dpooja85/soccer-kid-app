'use client';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="text-3xl mb-4">⚽ ⭐ 🏆</div>
        <p className="text-lg font-semibold mb-2">Soccer Stats Hub</p>
        <p className="text-slate-400 text-sm mb-4">
          Fun soccer stats for kids!
        </p>
        <p className="text-slate-500 text-xs">
          Player photos from Wikimedia Commons. Stats are approximate.
        </p>
        <p className="text-slate-500 text-xs mt-2">
          Made with ❤️ for young soccer fans
        </p>
      </div>
    </footer>
  );
}
