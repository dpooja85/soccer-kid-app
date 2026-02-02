'use client';

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <div className="text-6xl animate-bounce-slow">
        ⚽
      </div>
      <div className="text-xl font-semibold text-gray-600 animate-pulse">
        Loading...
      </div>
    </div>
  );
}
