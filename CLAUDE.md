# Soccer Stats Hub

A kid-friendly soccer statistics website for children ages 7-12, featuring Premier League teams, players, and league tables.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Images**: External URLs from Wikimedia Commons (using `unoptimized` prop on Next.js Image)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── team/[id]/         # Team detail pages
│   ├── player/[id]/       # Player detail pages (trading card style)
│   └── leagues/           # League tables
│       ├── page.tsx       # All leagues overview
│       └── [id]/          # Individual league standings
├── components/            # Reusable UI components
│   ├── Header.tsx         # Site header with search
│   ├── Footer.tsx         # Site footer
│   ├── SearchBar.tsx      # Player/team search
│   ├── TeamCard.tsx       # Team display card
│   ├── PlayerCard.tsx     # Player display card
│   ├── LeagueTable.tsx    # League standings table
│   └── ...
└── data/                  # Static data files
    ├── teams.ts           # 20 Premier League teams
    ├── players.ts         # 246 players (full squads for all teams)
    └── leagues.ts         # 7 league standings (2025-26 season)
```

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Design Principles

- **Kid-friendly**: Large text (18px+), bright colors, emoji icons
- **Mobile-first**: Touch-friendly tap targets (44x44px minimum)
- **Accessible**: High contrast, clear navigation
- **No ads**: Clean, distraction-free experience

## Data Notes

- All player/team images use Wikimedia Commons URLs
- Data is static (no live API) - manually updated for 2025-26 season
- Players marked with `isPopular: true` appear on homepage
- League standings include form badges (W/D/L)

## Key Patterns

- Use `unoptimized` prop on `<Image>` for external Wikimedia URLs
- Team colors stored in `team.colors` array for fallback styling
- Player positions: "Goalkeeper", "Defender", "Midfielder", "Winger", "Striker"

## Decision Rationale

### Why Static Data Instead of Live API?
- **Cost**: Football APIs (Football-Data.org, API-Football) have rate limits or paid tiers for full access
- **Simplicity**: No API keys to manage, no network errors to handle, no loading states for kids to wait through
- **Reliability**: Site works offline, no dependency on third-party uptime
- **Speed**: Data is bundled at build time, instant page loads
- **Trade-off accepted**: Data requires manual updates for transfers/standings (acceptable for a learning project)

### Why Wikimedia Commons for Images?
- **Free**: No licensing costs or copyright issues
- **Direct URLs**: Can hotlink without downloading/hosting images ourselves
- **Quality**: High-resolution official photos available
- **Why `unoptimized` prop**: Next.js Image optimization doesn't work with external domains by default; using unoptimized bypasses this while still getting the Image component benefits (lazy loading, aspect ratio)

### Why Next.js App Router?
- **Modern patterns**: Server components by default, better performance
- **File-based routing**: Easy to understand structure (`/team/[id]` maps to `/team/123`)
- **Static generation**: Pages pre-render at build time for speed
- **Future-proof**: App Router is the recommended approach going forward

### Why TypeScript Over JavaScript?
- **Type safety**: Catch errors early (e.g., wrong player property names)
- **Better IDE support**: Autocomplete for player/team objects
- **Self-documenting**: Interfaces in data files describe the data shape
- **Kid-friendly benefit**: None directly, but reduces bugs kids might encounter

### Why Tailwind CSS?
- **Rapid prototyping**: Utility classes allow fast iteration
- **Consistent spacing**: Built-in scale prevents random pixel values
- **Responsive**: Mobile-first breakpoints (`md:`, `lg:`) built in
- **No CSS files to manage**: Styles live with components

### Why No Database?
- **Overkill for read-only content**: This is a display-only site, no user accounts or dynamic content
- **Hosting simplicity**: Can deploy to Vercel free tier without database setup
- **TypeScript files as data**: Get type checking, easy to edit, version controlled

### Why Trading Card Style for Players?
- **Kid engagement**: Familiar format from collectible cards (Pokemon, sports cards)
- **Visual hierarchy**: Photo prominent, stats organized like card games
- **Fun factor**: Makes browsing players feel like collecting

### Why Emoji Icons Instead of Icon Library?
- **Zero dependencies**: No FontAwesome, Heroicons, etc. to install
- **Universal**: Work on all devices/browsers
- **Kid-friendly**: Colorful and playful by nature
- **Performance**: No icon font or SVG sprite to load

### Why 44x44px Minimum Tap Targets?
- **Apple HIG guideline**: Recommended minimum for touch interfaces
- **Kid consideration**: Children have less fine motor control than adults
- **Accessibility**: Benefits users with motor impairments too

### Why No Authentication/User Accounts?
- **COPPA compliance**: Collecting data from children under 13 has legal requirements
- **Simplicity**: No passwords for kids to remember
- **Privacy**: No personal data stored
- **Scope**: Read-only stats don't need personalization

### Why Separate League Data File?
- **Different structure**: Standings have different shape than players/teams
- **Multiple competitions**: Supports Premier League, Champions League, La Liga, etc.
- **Independent updates**: Can update standings without touching player data
