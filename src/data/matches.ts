// Match Schedule Data - All times in Eastern Time (ET)
// Updated from ESPN schedules

export interface Match {
  id: number;
  league: string;
  leagueId: string;
  homeTeam: string;
  awayTeam: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM in ET
  venue: string;
  status: 'upcoming' | 'live' | 'finished';
  homeScore?: number;
  awayScore?: number;
  winner?: 'home' | 'away' | 'draw' | null;
}

export const matches: Match[] = [
  // ============================================
  // PREMIER LEAGUE - February 2026
  // ============================================
  // Recent Results
  { id: 1, league: 'Premier League', leagueId: 'premier-league', homeTeam: 'Arsenal', awayTeam: 'Manchester City', date: '2026-02-01', time: '12:30', venue: 'Emirates Stadium', status: 'finished', homeScore: 2, awayScore: 1, winner: 'home' },
  { id: 2, league: 'Premier League', leagueId: 'premier-league', homeTeam: 'Chelsea', awayTeam: 'Liverpool', date: '2026-02-01', time: '10:00', venue: 'Stamford Bridge', status: 'finished', homeScore: 1, awayScore: 1, winner: 'draw' },
  { id: 3, league: 'Premier League', leagueId: 'premier-league', homeTeam: 'Manchester United', awayTeam: 'Aston Villa', date: '2026-02-02', time: '11:30', venue: 'Old Trafford', status: 'finished', homeScore: 3, awayScore: 0, winner: 'home' },
  { id: 4, league: 'Premier League', leagueId: 'premier-league', homeTeam: 'Newcastle United', awayTeam: 'Everton', date: '2026-02-02', time: '09:00', venue: "St. James' Park", status: 'finished', homeScore: 2, awayScore: 2, winner: 'draw' },

  // Upcoming Matches - Friday Feb 6
  { id: 5, league: 'Premier League', leagueId: 'premier-league', homeTeam: 'Leeds United', awayTeam: 'Nottingham Forest', date: '2026-02-06', time: '15:00', venue: 'Elland Road', status: 'upcoming' },

  // Saturday Feb 7
  { id: 6, league: 'Premier League', leagueId: 'premier-league', homeTeam: 'Manchester United', awayTeam: 'Tottenham', date: '2026-02-07', time: '07:30', venue: 'Old Trafford', status: 'upcoming' },
  { id: 7, league: 'Premier League', leagueId: 'premier-league', homeTeam: 'Bournemouth', awayTeam: 'Aston Villa', date: '2026-02-07', time: '10:00', venue: 'Vitality Stadium', status: 'upcoming' },
  { id: 8, league: 'Premier League', leagueId: 'premier-league', homeTeam: 'Arsenal', awayTeam: 'Sunderland', date: '2026-02-07', time: '10:00', venue: 'Emirates Stadium', status: 'upcoming' },
  { id: 9, league: 'Premier League', leagueId: 'premier-league', homeTeam: 'Burnley', awayTeam: 'West Ham', date: '2026-02-07', time: '10:00', venue: 'Turf Moor', status: 'upcoming' },
  { id: 10, league: 'Premier League', leagueId: 'premier-league', homeTeam: 'Fulham', awayTeam: 'Everton', date: '2026-02-07', time: '10:00', venue: 'Craven Cottage', status: 'upcoming' },
  { id: 11, league: 'Premier League', leagueId: 'premier-league', homeTeam: 'Wolves', awayTeam: 'Chelsea', date: '2026-02-07', time: '10:00', venue: 'Molineux Stadium', status: 'upcoming' },
  { id: 12, league: 'Premier League', leagueId: 'premier-league', homeTeam: 'Newcastle United', awayTeam: 'Brentford', date: '2026-02-07', time: '12:30', venue: "St. James' Park", status: 'upcoming' },

  // Sunday Feb 8
  { id: 13, league: 'Premier League', leagueId: 'premier-league', homeTeam: 'Brighton', awayTeam: 'Crystal Palace', date: '2026-02-08', time: '09:00', venue: 'Amex Stadium', status: 'upcoming' },
  { id: 14, league: 'Premier League', leagueId: 'premier-league', homeTeam: 'Liverpool', awayTeam: 'Manchester City', date: '2026-02-08', time: '11:30', venue: 'Anfield', status: 'upcoming' },

  // ============================================
  // LA LIGA - February 2026
  // ============================================
  // Recent Results
  { id: 20, league: 'La Liga', leagueId: 'la-liga', homeTeam: 'Real Madrid', awayTeam: 'Barcelona', date: '2026-02-01', time: '15:00', venue: 'Santiago Bernabeu', status: 'finished', homeScore: 2, awayScore: 2, winner: 'draw' },
  { id: 21, league: 'La Liga', leagueId: 'la-liga', homeTeam: 'Atletico Madrid', awayTeam: 'Sevilla', date: '2026-02-02', time: '12:30', venue: 'Metropolitano', status: 'finished', homeScore: 3, awayScore: 1, winner: 'home' },

  // Upcoming - Friday Feb 6
  { id: 22, league: 'La Liga', leagueId: 'la-liga', homeTeam: 'Celta Vigo', awayTeam: 'Osasuna', date: '2026-02-06', time: '15:00', venue: 'Balaidos', status: 'upcoming' },

  // Saturday Feb 7
  { id: 23, league: 'La Liga', leagueId: 'la-liga', homeTeam: 'Rayo Vallecano', awayTeam: 'Real Oviedo', date: '2026-02-07', time: '08:00', venue: 'Vallecas', status: 'upcoming' },
  { id: 24, league: 'La Liga', leagueId: 'la-liga', homeTeam: 'Barcelona', awayTeam: 'Mallorca', date: '2026-02-07', time: '10:15', venue: 'Camp Nou', status: 'upcoming' },
  { id: 25, league: 'La Liga', leagueId: 'la-liga', homeTeam: 'Girona', awayTeam: 'Sevilla', date: '2026-02-07', time: '12:30', venue: 'Montilivi', status: 'upcoming' },
  { id: 26, league: 'La Liga', leagueId: 'la-liga', homeTeam: 'Real Sociedad', awayTeam: 'Elche', date: '2026-02-07', time: '15:00', venue: 'Anoeta', status: 'upcoming' },

  // Sunday Feb 8
  { id: 27, league: 'La Liga', leagueId: 'la-liga', homeTeam: 'Getafe', awayTeam: 'Alaves', date: '2026-02-08', time: '08:00', venue: 'Coliseum', status: 'upcoming' },
  { id: 28, league: 'La Liga', leagueId: 'la-liga', homeTeam: 'Athletic Bilbao', awayTeam: 'Levante', date: '2026-02-08', time: '10:15', venue: 'San Mames', status: 'upcoming' },
  { id: 29, league: 'La Liga', leagueId: 'la-liga', homeTeam: 'Real Betis', awayTeam: 'Atletico Madrid', date: '2026-02-08', time: '12:30', venue: 'Benito Villamarin', status: 'upcoming' },
  { id: 30, league: 'La Liga', leagueId: 'la-liga', homeTeam: 'Valencia', awayTeam: 'Real Madrid', date: '2026-02-08', time: '15:00', venue: 'Mestalla', status: 'upcoming' },

  // ============================================
  // BUNDESLIGA - February 2026
  // ============================================
  // Recent Results
  { id: 40, league: 'Bundesliga', leagueId: 'bundesliga', homeTeam: 'Bayern Munich', awayTeam: 'Borussia Dortmund', date: '2026-02-01', time: '12:30', venue: 'Allianz Arena', status: 'finished', homeScore: 4, awayScore: 2, winner: 'home' },
  { id: 41, league: 'Bundesliga', leagueId: 'bundesliga', homeTeam: 'RB Leipzig', awayTeam: 'Bayer Leverkusen', date: '2026-02-01', time: '09:30', venue: 'Red Bull Arena', status: 'finished', homeScore: 1, awayScore: 3, winner: 'away' },

  // Upcoming - Friday Feb 6
  { id: 42, league: 'Bundesliga', leagueId: 'bundesliga', homeTeam: 'Eintracht Frankfurt', awayTeam: 'Union Berlin', date: '2026-02-06', time: '14:30', venue: 'Deutsche Bank Park', status: 'upcoming' },

  // Saturday Feb 7
  { id: 43, league: 'Bundesliga', leagueId: 'bundesliga', homeTeam: 'Heidenheim', awayTeam: 'Hamburg SV', date: '2026-02-07', time: '09:30', venue: 'Voith-Arena', status: 'upcoming' },
  { id: 44, league: 'Bundesliga', leagueId: 'bundesliga', homeTeam: 'Mainz', awayTeam: 'Augsburg', date: '2026-02-07', time: '09:30', venue: 'Mewa Arena', status: 'upcoming' },
  { id: 45, league: 'Bundesliga', leagueId: 'bundesliga', homeTeam: 'Freiburg', awayTeam: 'Werder Bremen', date: '2026-02-07', time: '09:30', venue: 'Europa-Park Stadion', status: 'upcoming' },
  { id: 46, league: 'Bundesliga', leagueId: 'bundesliga', homeTeam: 'St. Pauli', awayTeam: 'Stuttgart', date: '2026-02-07', time: '09:30', venue: 'Millerntor-Stadion', status: 'upcoming' },
  { id: 47, league: 'Bundesliga', leagueId: 'bundesliga', homeTeam: 'Wolfsburg', awayTeam: 'Borussia Dortmund', date: '2026-02-07', time: '09:30', venue: 'Volkswagen Arena', status: 'upcoming' },
  { id: 48, league: 'Bundesliga', leagueId: 'bundesliga', homeTeam: 'Monchengladbach', awayTeam: 'Bayer Leverkusen', date: '2026-02-07', time: '12:30', venue: 'Borussia-Park', status: 'upcoming' },

  // Sunday Feb 8
  { id: 49, league: 'Bundesliga', leagueId: 'bundesliga', homeTeam: 'FC Cologne', awayTeam: 'RB Leipzig', date: '2026-02-08', time: '09:30', venue: 'RheinEnergieStadion', status: 'upcoming' },
  { id: 50, league: 'Bundesliga', leagueId: 'bundesliga', homeTeam: 'Hoffenheim', awayTeam: 'Bayern Munich', date: '2026-02-08', time: '11:30', venue: 'PreZero Arena', status: 'upcoming' },

  // ============================================
  // SERIE A - February 2026
  // ============================================
  // Recent Results
  { id: 60, league: 'Serie A', leagueId: 'serie-a', homeTeam: 'Inter Milan', awayTeam: 'Juventus', date: '2026-02-02', time: '14:45', venue: 'San Siro', status: 'finished', homeScore: 2, awayScore: 0, winner: 'home' },
  { id: 61, league: 'Serie A', leagueId: 'serie-a', homeTeam: 'AC Milan', awayTeam: 'Napoli', date: '2026-02-02', time: '12:00', venue: 'San Siro', status: 'finished', homeScore: 1, awayScore: 1, winner: 'draw' },

  // Upcoming - Friday Feb 6
  { id: 62, league: 'Serie A', leagueId: 'serie-a', homeTeam: 'Hellas Verona', awayTeam: 'Pisa', date: '2026-02-06', time: '14:45', venue: 'Bentegodi', status: 'upcoming' },

  // Saturday Feb 7
  { id: 63, league: 'Serie A', leagueId: 'serie-a', homeTeam: 'Genoa', awayTeam: 'Napoli', date: '2026-02-07', time: '12:00', venue: 'Marassi', status: 'upcoming' },
  { id: 64, league: 'Serie A', leagueId: 'serie-a', homeTeam: 'Fiorentina', awayTeam: 'Torino', date: '2026-02-07', time: '14:45', venue: 'Artemio Franchi', status: 'upcoming' },

  // Sunday Feb 8
  { id: 65, league: 'Serie A', leagueId: 'serie-a', homeTeam: 'Bologna', awayTeam: 'Parma', date: '2026-02-08', time: '06:30', venue: 'Dall\'Ara', status: 'upcoming' },
  { id: 66, league: 'Serie A', leagueId: 'serie-a', homeTeam: 'Lecce', awayTeam: 'Udinese', date: '2026-02-08', time: '09:00', venue: 'Via del Mare', status: 'upcoming' },
  { id: 67, league: 'Serie A', leagueId: 'serie-a', homeTeam: 'Inter Milan', awayTeam: 'Sassuolo', date: '2026-02-08', time: '12:00', venue: 'San Siro', status: 'upcoming' },
  { id: 68, league: 'Serie A', leagueId: 'serie-a', homeTeam: 'Juventus', awayTeam: 'Lazio', date: '2026-02-08', time: '14:45', venue: 'Allianz Stadium', status: 'upcoming' },

  // Monday Feb 9
  { id: 69, league: 'Serie A', leagueId: 'serie-a', homeTeam: 'Atalanta', awayTeam: 'Cremonese', date: '2026-02-09', time: '12:30', venue: 'Gewiss Stadium', status: 'upcoming' },
  { id: 70, league: 'Serie A', leagueId: 'serie-a', homeTeam: 'AS Roma', awayTeam: 'Cagliari', date: '2026-02-09', time: '14:45', venue: 'Olimpico', status: 'upcoming' },

  // ============================================
  // LIGUE 1 - February 2026
  // ============================================
  // Recent Results
  { id: 80, league: 'Ligue 1', leagueId: 'ligue-1', homeTeam: 'Paris Saint-Germain', awayTeam: 'Lyon', date: '2026-02-01', time: '14:45', venue: 'Parc des Princes', status: 'finished', homeScore: 3, awayScore: 1, winner: 'home' },
  { id: 81, league: 'Ligue 1', leagueId: 'ligue-1', homeTeam: 'Marseille', awayTeam: 'Monaco', date: '2026-02-02', time: '12:00', venue: 'Velodrome', status: 'finished', homeScore: 2, awayScore: 2, winner: 'draw' },

  // Upcoming - Friday Feb 6
  { id: 82, league: 'Ligue 1', leagueId: 'ligue-1', homeTeam: 'Metz', awayTeam: 'Lille', date: '2026-02-06', time: '14:45', venue: 'Stade Saint-Symphorien', status: 'upcoming' },

  // Saturday Feb 7
  { id: 83, league: 'Ligue 1', leagueId: 'ligue-1', homeTeam: 'Lens', awayTeam: 'Rennes', date: '2026-02-07', time: '11:00', venue: 'Stade Bollaert-Delelis', status: 'upcoming' },
  { id: 84, league: 'Ligue 1', leagueId: 'ligue-1', homeTeam: 'Brest', awayTeam: 'Lorient', date: '2026-02-07', time: '13:00', venue: 'Stade Francis-Le Ble', status: 'upcoming' },
  { id: 85, league: 'Ligue 1', leagueId: 'ligue-1', homeTeam: 'Nantes', awayTeam: 'Lyon', date: '2026-02-07', time: '15:05', venue: 'Stade de la Beaujoire', status: 'upcoming' },

  // Sunday Feb 8
  { id: 86, league: 'Ligue 1', leagueId: 'ligue-1', homeTeam: 'Nice', awayTeam: 'Monaco', date: '2026-02-08', time: '09:00', venue: 'Allianz Riviera', status: 'upcoming' },
  { id: 87, league: 'Ligue 1', leagueId: 'ligue-1', homeTeam: 'Auxerre', awayTeam: 'Paris FC', date: '2026-02-08', time: '11:15', venue: 'Stade de l\'Abbe-Deschamps', status: 'upcoming' },
  { id: 88, league: 'Ligue 1', leagueId: 'ligue-1', homeTeam: 'Angers', awayTeam: 'Toulouse', date: '2026-02-08', time: '11:15', venue: 'Stade Raymond Kopa', status: 'upcoming' },
  { id: 89, league: 'Ligue 1', leagueId: 'ligue-1', homeTeam: 'Le Havre', awayTeam: 'Strasbourg', date: '2026-02-08', time: '11:15', venue: 'Stade Oceane', status: 'upcoming' },
  { id: 90, league: 'Ligue 1', leagueId: 'ligue-1', homeTeam: 'Paris Saint-Germain', awayTeam: 'Marseille', date: '2026-02-08', time: '14:45', venue: 'Parc des Princes', status: 'upcoming' },

  // ============================================
  // FIFA WORLD CUP 2026 - June 2026
  // ============================================
  { id: 100, league: 'FIFA World Cup', leagueId: 'world-cup', homeTeam: 'Mexico', awayTeam: 'South Africa', date: '2026-06-11', time: '15:00', venue: 'Estadio Azteca, Mexico City', status: 'upcoming' },
  { id: 101, league: 'FIFA World Cup', leagueId: 'world-cup', homeTeam: 'South Korea', awayTeam: 'TBD (Playoff D)', date: '2026-06-11', time: '22:00', venue: 'Estadio Akron, Guadalajara', status: 'upcoming' },
  { id: 102, league: 'FIFA World Cup', leagueId: 'world-cup', homeTeam: 'Canada', awayTeam: 'TBD (Playoff A)', date: '2026-06-12', time: '15:00', venue: 'BMO Field, Toronto', status: 'upcoming' },
  { id: 103, league: 'FIFA World Cup', leagueId: 'world-cup', homeTeam: 'United States', awayTeam: 'Paraguay', date: '2026-06-12', time: '21:00', venue: 'SoFi Stadium, Los Angeles', status: 'upcoming' },
  { id: 104, league: 'FIFA World Cup', leagueId: 'world-cup', homeTeam: 'Qatar', awayTeam: 'Switzerland', date: '2026-06-13', time: '15:00', venue: "Levi's Stadium, San Francisco", status: 'upcoming' },
  { id: 105, league: 'FIFA World Cup', leagueId: 'world-cup', homeTeam: 'Brazil', awayTeam: 'Morocco', date: '2026-06-13', time: '18:00', venue: 'MetLife Stadium, New Jersey', status: 'upcoming' },
  { id: 106, league: 'FIFA World Cup', leagueId: 'world-cup', homeTeam: 'Haiti', awayTeam: 'Scotland', date: '2026-06-13', time: '21:00', venue: 'Gillette Stadium, Boston', status: 'upcoming' },
  { id: 107, league: 'FIFA World Cup', leagueId: 'world-cup', homeTeam: 'Germany', awayTeam: 'Curacao', date: '2026-06-14', time: '13:00', venue: 'NRG Stadium, Houston', status: 'upcoming' },
  { id: 108, league: 'FIFA World Cup', leagueId: 'world-cup', homeTeam: 'Netherlands', awayTeam: 'Japan', date: '2026-06-14', time: '16:00', venue: 'AT&T Stadium, Dallas', status: 'upcoming' },
  { id: 109, league: 'FIFA World Cup', leagueId: 'world-cup', homeTeam: 'Ivory Coast', awayTeam: 'Ecuador', date: '2026-06-14', time: '19:00', venue: 'Lincoln Financial Field, Philadelphia', status: 'upcoming' },
  { id: 110, league: 'FIFA World Cup', leagueId: 'world-cup', homeTeam: 'Argentina', awayTeam: 'TBD', date: '2026-06-15', time: '18:00', venue: 'Hard Rock Stadium, Miami', status: 'upcoming' },
  { id: 111, league: 'FIFA World Cup', leagueId: 'world-cup', homeTeam: 'England', awayTeam: 'TBD', date: '2026-06-15', time: '21:00', venue: 'Mercedes-Benz Stadium, Atlanta', status: 'upcoming' },
  { id: 112, league: 'FIFA World Cup', leagueId: 'world-cup', homeTeam: 'France', awayTeam: 'TBD', date: '2026-06-16', time: '18:00', venue: 'MetLife Stadium, New Jersey', status: 'upcoming' },
  { id: 113, league: 'FIFA World Cup', leagueId: 'world-cup', homeTeam: 'Spain', awayTeam: 'TBD', date: '2026-06-16', time: '15:00', venue: 'SoFi Stadium, Los Angeles', status: 'upcoming' },
];

export function getMatchesByLeague(leagueId: string): Match[] {
  return matches.filter(m => m.leagueId === leagueId);
}

export function getUpcomingMatches(): Match[] {
  return matches.filter(m => m.status === 'upcoming').sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}`);
    const dateB = new Date(`${b.date}T${b.time}`);
    return dateA.getTime() - dateB.getTime();
  });
}

export function getRecentResults(): Match[] {
  return matches.filter(m => m.status === 'finished').sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}`);
    const dateB = new Date(`${b.date}T${b.time}`);
    return dateB.getTime() - dateA.getTime(); // Most recent first
  });
}

export function getMatchesByDate(date: string): Match[] {
  return matches.filter(m => m.date === date);
}

export function getThisWeekMatches(): Match[] {
  const today = new Date();
  const weekFromNow = new Date(today);
  weekFromNow.setDate(today.getDate() + 7);

  return matches.filter(m => {
    const matchDate = new Date(m.date);
    return matchDate >= today && matchDate <= weekFromNow;
  }).sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}`);
    const dateB = new Date(`${b.date}T${b.time}`);
    return dateA.getTime() - dateB.getTime();
  });
}
