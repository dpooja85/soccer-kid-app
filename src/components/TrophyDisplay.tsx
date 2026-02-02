'use client';

interface TrophyDisplayProps {
  trophies: {
    premierLeague: number;
    faCup: number;
    leagueCup: number;
    championsLeague: number;
  };
}

interface TrophyItemProps {
  name: string;
  count: number;
  emoji: string;
  color: string;
}

function TrophyItem({ name, count, emoji, color }: TrophyItemProps) {
  if (count === 0) return null;

  return (
    <div
      className="flex flex-col items-center p-4 rounded-2xl"
      style={{ backgroundColor: `${color}20` }}
    >
      <div className="text-4xl md:text-5xl mb-2 trophy-shimmer bg-clip-text">
        {emoji}
      </div>
      <div className="text-3xl md:text-4xl font-bold" style={{ color }}>
        {count}
      </div>
      <div className="text-sm md:text-base text-gray-600 text-center font-medium mt-1">
        {name}
      </div>
    </div>
  );
}

export default function TrophyDisplay({ trophies }: TrophyDisplayProps) {
  const totalTrophies = trophies.premierLeague + trophies.faCup +
                        trophies.leagueCup + trophies.championsLeague;

  if (totalTrophies === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-2">🎯</div>
        <div className="text-gray-500">Working hard to win their first trophy!</div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-3xl p-6 shadow-lg">
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-amber-800">
        🏆 Trophy Cabinet 🏆
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <TrophyItem
          name="Premier League"
          count={trophies.premierLeague}
          emoji="🏆"
          color="#7c3aed"
        />
        <TrophyItem
          name="FA Cup"
          count={trophies.faCup}
          emoji="🏆"
          color="#dc2626"
        />
        <TrophyItem
          name="League Cup"
          count={trophies.leagueCup}
          emoji="🏆"
          color="#059669"
        />
        <TrophyItem
          name="Champions League"
          count={trophies.championsLeague}
          emoji="⭐"
          color="#2563eb"
        />
      </div>

      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-200 px-6 py-3 rounded-full">
          <span className="text-2xl">🎉</span>
          <span className="text-xl font-bold text-amber-800">
            Total: {totalTrophies} trophies!
          </span>
        </div>
      </div>
    </div>
  );
}
