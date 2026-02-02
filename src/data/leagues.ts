// League Tables Data
// Standings data for major football competitions

export interface TeamStanding {
  position: number;
  team: string;
  logo: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form: ('W' | 'D' | 'L')[]; // Last 5 games
}

export interface League {
  id: string;
  name: string;
  shortName: string;
  country: string;
  countryFlag: string;
  logo: string;
  season: string;
  standings: TeamStanding[];
}

export const leagues: League[] = [
  {
    id: 'premier-league',
    name: 'Premier League',
    shortName: 'EPL',
    country: 'England',
    countryFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg',
    season: '2025-26',
    standings: [
      { position: 1, team: 'Liverpool', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg', played: 22, won: 16, drawn: 5, lost: 1, goalsFor: 52, goalsAgainst: 22, goalDifference: 30, points: 53, form: ['W', 'W', 'D', 'W', 'W'] },
      { position: 2, team: 'Arsenal', logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg', played: 22, won: 13, drawn: 7, lost: 2, goalsFor: 45, goalsAgainst: 21, goalDifference: 24, points: 46, form: ['W', 'D', 'W', 'W', 'D'] },
      { position: 3, team: 'Nottingham Forest', logo: 'https://upload.wikimedia.org/wikipedia/en/e/e5/Nottingham_Forest_F.C._logo.svg', played: 22, won: 13, drawn: 5, lost: 4, goalsFor: 37, goalsAgainst: 21, goalDifference: 16, points: 44, form: ['W', 'W', 'L', 'W', 'W'] },
      { position: 4, team: 'Chelsea', logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg', played: 22, won: 11, drawn: 7, lost: 4, goalsFor: 45, goalsAgainst: 28, goalDifference: 17, points: 40, form: ['D', 'W', 'W', 'D', 'W'] },
      { position: 5, team: 'Newcastle United', logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg', played: 22, won: 11, drawn: 6, lost: 5, goalsFor: 39, goalsAgainst: 26, goalDifference: 13, points: 39, form: ['W', 'D', 'W', 'L', 'W'] },
      { position: 6, team: 'Manchester City', logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg', played: 22, won: 11, drawn: 5, lost: 6, goalsFor: 43, goalsAgainst: 29, goalDifference: 14, points: 38, form: ['W', 'L', 'W', 'W', 'D'] },
      { position: 7, team: 'Bournemouth', logo: 'https://upload.wikimedia.org/wikipedia/en/e/e5/AFC_Bournemouth_%282013%29.svg', played: 22, won: 10, drawn: 7, lost: 5, goalsFor: 36, goalsAgainst: 26, goalDifference: 10, points: 37, form: ['D', 'W', 'W', 'D', 'L'] },
      { position: 8, team: 'Aston Villa', logo: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Aston_Villa_FC_crest_%282016%29.svg', played: 22, won: 10, drawn: 6, lost: 6, goalsFor: 33, goalsAgainst: 31, goalDifference: 2, points: 36, form: ['L', 'W', 'D', 'W', 'W'] },
      { position: 9, team: 'Brighton', logo: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg', played: 22, won: 9, drawn: 8, lost: 5, goalsFor: 36, goalsAgainst: 31, goalDifference: 5, points: 35, form: ['D', 'D', 'W', 'W', 'D'] },
      { position: 10, team: 'Fulham', logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Fulham_FC_%28shield%29.svg', played: 22, won: 9, drawn: 7, lost: 6, goalsFor: 35, goalsAgainst: 30, goalDifference: 5, points: 34, form: ['W', 'D', 'L', 'W', 'D'] },
      { position: 11, team: 'Brentford', logo: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Brentford_FC_crest.svg', played: 22, won: 9, drawn: 5, lost: 8, goalsFor: 40, goalsAgainst: 35, goalDifference: 5, points: 32, form: ['L', 'W', 'W', 'L', 'W'] },
      { position: 12, team: 'Manchester United', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg', played: 22, won: 8, drawn: 6, lost: 8, goalsFor: 30, goalsAgainst: 28, goalDifference: 2, points: 30, form: ['W', 'L', 'D', 'W', 'L'] },
      { position: 13, team: 'Crystal Palace', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Crystal_Palace_FC_logo_%282022%29.svg', played: 22, won: 6, drawn: 9, lost: 7, goalsFor: 26, goalsAgainst: 28, goalDifference: -2, points: 27, form: ['D', 'D', 'L', 'W', 'D'] },
      { position: 14, team: 'Tottenham', logo: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg', played: 22, won: 8, drawn: 3, lost: 11, goalsFor: 42, goalsAgainst: 35, goalDifference: 7, points: 27, form: ['L', 'L', 'W', 'L', 'W'] },
      { position: 15, team: 'West Ham', logo: 'https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg', played: 22, won: 7, drawn: 5, lost: 10, goalsFor: 29, goalsAgainst: 39, goalDifference: -10, points: 26, form: ['L', 'W', 'L', 'D', 'W'] },
      { position: 16, team: 'Everton', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg', played: 22, won: 5, drawn: 8, lost: 9, goalsFor: 21, goalsAgainst: 29, goalDifference: -8, points: 23, form: ['D', 'L', 'D', 'L', 'D'] },
      { position: 17, team: 'Wolves', logo: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg', played: 22, won: 6, drawn: 5, lost: 11, goalsFor: 32, goalsAgainst: 42, goalDifference: -10, points: 23, form: ['L', 'W', 'L', 'L', 'W'] },
      { position: 18, team: 'Leicester City', logo: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Leicester_City_crest.svg', played: 22, won: 5, drawn: 6, lost: 11, goalsFor: 28, goalsAgainst: 44, goalDifference: -16, points: 21, form: ['L', 'L', 'D', 'W', 'L'] },
      { position: 19, team: 'Ipswich Town', logo: 'https://upload.wikimedia.org/wikipedia/en/4/43/Ipswich_Town.svg', played: 22, won: 4, drawn: 8, lost: 10, goalsFor: 22, goalsAgainst: 39, goalDifference: -17, points: 20, form: ['D', 'L', 'L', 'D', 'L'] },
      { position: 20, team: 'Southampton', logo: 'https://upload.wikimedia.org/wikipedia/en/c/c9/FC_Southampton.svg', played: 22, won: 1, drawn: 5, lost: 16, goalsFor: 14, goalsAgainst: 47, goalDifference: -33, points: 8, form: ['L', 'L', 'L', 'D', 'L'] },
    ]
  },
  {
    id: 'champions-league',
    name: 'UEFA Champions League',
    shortName: 'UCL',
    country: 'Europe',
    countryFlag: '🇪🇺',
    logo: 'https://upload.wikimedia.org/wikipedia/en/b/bf/UEFA_Champions_League_logo_2024.svg',
    season: '2025-26',
    standings: [
      { position: 1, team: 'Liverpool', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg', played: 7, won: 7, drawn: 0, lost: 0, goalsFor: 15, goalsAgainst: 2, goalDifference: 13, points: 21, form: ['W', 'W', 'W', 'W', 'W'] },
      { position: 2, team: 'Barcelona', logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg', played: 7, won: 6, drawn: 0, lost: 1, goalsFor: 23, goalsAgainst: 10, goalDifference: 13, points: 18, form: ['W', 'W', 'L', 'W', 'W'] },
      { position: 3, team: 'Arsenal', logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg', played: 7, won: 5, drawn: 2, lost: 0, goalsFor: 13, goalsAgainst: 2, goalDifference: 11, points: 17, form: ['W', 'D', 'W', 'W', 'D'] },
      { position: 4, team: 'Inter Milan', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg', played: 7, won: 5, drawn: 2, lost: 0, goalsFor: 8, goalsAgainst: 1, goalDifference: 7, points: 17, form: ['W', 'W', 'D', 'W', 'D'] },
      { position: 5, team: 'Atletico Madrid', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg', played: 7, won: 5, drawn: 1, lost: 1, goalsFor: 15, goalsAgainst: 9, goalDifference: 6, points: 16, form: ['W', 'W', 'W', 'L', 'D'] },
      { position: 6, team: 'AC Milan', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg', played: 7, won: 5, drawn: 1, lost: 1, goalsFor: 14, goalsAgainst: 8, goalDifference: 6, points: 16, form: ['W', 'L', 'W', 'W', 'W'] },
      { position: 7, team: 'Atalanta', logo: 'https://upload.wikimedia.org/wikipedia/en/6/66/AtalantaBC.svg', played: 7, won: 5, drawn: 0, lost: 2, goalsFor: 18, goalsAgainst: 5, goalDifference: 13, points: 15, form: ['W', 'W', 'W', 'L', 'L'] },
      { position: 8, team: 'Bayer Leverkusen', logo: 'https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg', played: 7, won: 4, drawn: 2, lost: 1, goalsFor: 13, goalsAgainst: 7, goalDifference: 6, points: 14, form: ['D', 'W', 'W', 'W', 'D'] },
      { position: 9, team: 'Aston Villa', logo: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Aston_Villa_FC_crest_%282016%29.svg', played: 7, won: 4, drawn: 2, lost: 1, goalsFor: 9, goalsAgainst: 4, goalDifference: 5, points: 14, form: ['W', 'D', 'W', 'L', 'W'] },
      { position: 10, team: 'Monaco', logo: 'https://upload.wikimedia.org/wikipedia/en/c/ce/AS_Monaco_FC.svg', played: 7, won: 4, drawn: 1, lost: 2, goalsFor: 13, goalsAgainst: 9, goalDifference: 4, points: 13, form: ['W', 'L', 'W', 'W', 'D'] },
      { position: 11, team: 'Lille', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3f/Lille_OSC_2018_logo.svg', played: 7, won: 4, drawn: 1, lost: 2, goalsFor: 11, goalsAgainst: 7, goalDifference: 4, points: 13, form: ['L', 'W', 'W', 'D', 'W'] },
      { position: 12, team: 'Borussia Dortmund', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg', played: 7, won: 4, drawn: 1, lost: 2, goalsFor: 18, goalsAgainst: 11, goalDifference: 7, points: 13, form: ['W', 'W', 'L', 'W', 'L'] },
      { position: 13, team: 'Bayern Munich', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg', played: 7, won: 4, drawn: 1, lost: 2, goalsFor: 17, goalsAgainst: 11, goalDifference: 6, points: 13, form: ['L', 'W', 'W', 'D', 'W'] },
      { position: 14, team: 'Real Madrid', logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg', played: 7, won: 4, drawn: 0, lost: 3, goalsFor: 15, goalsAgainst: 12, goalDifference: 3, points: 12, form: ['W', 'L', 'W', 'L', 'W'] },
      { position: 15, team: 'Juventus', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Juventus_FC_-_pictogram.svg', played: 7, won: 3, drawn: 3, lost: 1, goalsFor: 9, goalsAgainst: 5, goalDifference: 4, points: 12, form: ['D', 'W', 'D', 'W', 'D'] },
      { position: 16, team: 'Celtic', logo: 'https://upload.wikimedia.org/wikipedia/en/3/35/Celtic_FC.svg', played: 7, won: 3, drawn: 3, lost: 1, goalsFor: 12, goalsAgainst: 10, goalDifference: 2, points: 12, form: ['W', 'D', 'W', 'D', 'D'] },
    ]
  },
  {
    id: 'la-liga',
    name: 'La Liga',
    shortName: 'La Liga',
    country: 'Spain',
    countryFlag: '🇪🇸',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/54/LaLiga_EA_Sports_2023_Vertical_Logo.svg',
    season: '2025-26',
    standings: [
      { position: 1, team: 'Real Madrid', logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg', played: 20, won: 13, drawn: 5, lost: 2, goalsFor: 42, goalsAgainst: 18, goalDifference: 24, points: 44, form: ['W', 'W', 'D', 'W', 'W'] },
      { position: 2, team: 'Atletico Madrid', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg', played: 20, won: 13, drawn: 5, lost: 2, goalsFor: 35, goalsAgainst: 14, goalDifference: 21, points: 44, form: ['W', 'W', 'W', 'D', 'W'] },
      { position: 3, team: 'Barcelona', logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg', played: 20, won: 12, drawn: 5, lost: 3, goalsFor: 50, goalsAgainst: 24, goalDifference: 26, points: 41, form: ['D', 'W', 'L', 'W', 'W'] },
      { position: 4, team: 'Athletic Bilbao', logo: 'https://upload.wikimedia.org/wikipedia/en/9/98/Club_Athletic_Bilbao_logo.svg', played: 20, won: 10, drawn: 7, lost: 3, goalsFor: 32, goalsAgainst: 18, goalDifference: 14, points: 37, form: ['D', 'W', 'D', 'W', 'W'] },
      { position: 5, team: 'Villarreal', logo: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Villarreal_CF_logo.svg', played: 20, won: 10, drawn: 5, lost: 5, goalsFor: 35, goalsAgainst: 30, goalDifference: 5, points: 35, form: ['W', 'L', 'W', 'W', 'D'] },
      { position: 6, team: 'Real Betis', logo: 'https://upload.wikimedia.org/wikipedia/en/1/13/Real_betis_logo.svg', played: 20, won: 9, drawn: 6, lost: 5, goalsFor: 28, goalsAgainst: 23, goalDifference: 5, points: 33, form: ['D', 'W', 'W', 'L', 'D'] },
      { position: 7, team: 'Mallorca', logo: 'https://upload.wikimedia.org/wikipedia/en/e/e0/RCD_Mallorca.svg', played: 20, won: 8, drawn: 8, lost: 4, goalsFor: 21, goalsAgainst: 19, goalDifference: 2, points: 32, form: ['D', 'D', 'W', 'D', 'W'] },
      { position: 8, team: 'Girona', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Girona_FC_Logo.svg', played: 20, won: 8, drawn: 5, lost: 7, goalsFor: 27, goalsAgainst: 25, goalDifference: 2, points: 29, form: ['L', 'W', 'W', 'L', 'W'] },
      { position: 9, team: 'Osasuna', logo: 'https://upload.wikimedia.org/wikipedia/en/d/db/CA_Osasuna_Logo.svg', played: 20, won: 8, drawn: 5, lost: 7, goalsFor: 26, goalsAgainst: 29, goalDifference: -3, points: 29, form: ['W', 'L', 'D', 'W', 'L'] },
      { position: 10, team: 'Real Sociedad', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Real_Sociedad_logo.svg', played: 20, won: 7, drawn: 7, lost: 6, goalsFor: 20, goalsAgainst: 17, goalDifference: 3, points: 28, form: ['D', 'D', 'W', 'D', 'L'] },
    ]
  },
  {
    id: 'bundesliga',
    name: 'Bundesliga',
    shortName: 'Bundesliga',
    country: 'Germany',
    countryFlag: '🇩🇪',
    logo: 'https://upload.wikimedia.org/wikipedia/en/d/df/Bundesliga_logo_%282017%29.svg',
    season: '2025-26',
    standings: [
      { position: 1, team: 'Bayern Munich', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg', played: 18, won: 12, drawn: 3, lost: 3, goalsFor: 51, goalsAgainst: 21, goalDifference: 30, points: 39, form: ['W', 'W', 'D', 'W', 'W'] },
      { position: 2, team: 'Bayer Leverkusen', logo: 'https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg', played: 18, won: 11, drawn: 5, lost: 2, goalsFor: 44, goalsAgainst: 23, goalDifference: 21, points: 38, form: ['W', 'D', 'W', 'W', 'D'] },
      { position: 3, team: 'Eintracht Frankfurt', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Eintracht_Frankfurt_Logo.svg', played: 18, won: 9, drawn: 6, lost: 3, goalsFor: 42, goalsAgainst: 26, goalDifference: 16, points: 33, form: ['D', 'W', 'W', 'D', 'W'] },
      { position: 4, team: 'RB Leipzig', logo: 'https://upload.wikimedia.org/wikipedia/en/0/04/RB_Leipzig_2014_logo.svg', played: 18, won: 9, drawn: 4, lost: 5, goalsFor: 32, goalsAgainst: 25, goalDifference: 7, points: 31, form: ['W', 'L', 'W', 'W', 'D'] },
      { position: 5, team: 'Mainz', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Logo_Mainz_05.svg', played: 18, won: 8, drawn: 5, lost: 5, goalsFor: 34, goalsAgainst: 24, goalDifference: 10, points: 29, form: ['W', 'D', 'L', 'W', 'W'] },
      { position: 6, team: 'Borussia Dortmund', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg', played: 18, won: 8, drawn: 5, lost: 5, goalsFor: 37, goalsAgainst: 30, goalDifference: 7, points: 29, form: ['D', 'W', 'L', 'W', 'D'] },
      { position: 7, team: 'Freiburg', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/SC_Freiburg_logo.svg', played: 18, won: 8, drawn: 5, lost: 5, goalsFor: 27, goalsAgainst: 27, goalDifference: 0, points: 29, form: ['W', 'D', 'W', 'L', 'D'] },
      { position: 8, team: 'Werder Bremen', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/be/SV-Werder-Bremen-Logo.svg', played: 18, won: 7, drawn: 6, lost: 5, goalsFor: 31, goalsAgainst: 28, goalDifference: 3, points: 27, form: ['D', 'W', 'D', 'W', 'L'] },
      { position: 9, team: 'VfB Stuttgart', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/VfB_Stuttgart_1893_Logo.svg', played: 18, won: 6, drawn: 8, lost: 4, goalsFor: 34, goalsAgainst: 28, goalDifference: 6, points: 26, form: ['D', 'D', 'W', 'D', 'D'] },
      { position: 10, team: 'Wolfsburg', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/VfL_Wolfsburg_Logo.svg', played: 18, won: 7, drawn: 4, lost: 7, goalsFor: 36, goalsAgainst: 33, goalDifference: 3, points: 25, form: ['L', 'W', 'W', 'L', 'W'] },
    ]
  },
  {
    id: 'serie-a',
    name: 'Serie A',
    shortName: 'Serie A',
    country: 'Italy',
    countryFlag: '🇮🇹',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Serie_A_logo_2022.svg',
    season: '2025-26',
    standings: [
      { position: 1, team: 'Napoli', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/SSC_Napoli_%282024%29.svg', played: 21, won: 14, drawn: 4, lost: 3, goalsFor: 36, goalsAgainst: 15, goalDifference: 21, points: 46, form: ['W', 'W', 'D', 'W', 'W'] },
      { position: 2, team: 'Inter Milan', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg', played: 20, won: 13, drawn: 4, lost: 3, goalsFor: 47, goalsAgainst: 19, goalDifference: 28, points: 43, form: ['W', 'W', 'W', 'D', 'W'] },
      { position: 3, team: 'Atalanta', logo: 'https://upload.wikimedia.org/wikipedia/en/6/66/AtalantaBC.svg', played: 21, won: 12, drawn: 5, lost: 4, goalsFor: 45, goalsAgainst: 26, goalDifference: 19, points: 41, form: ['D', 'W', 'W', 'L', 'W'] },
      { position: 4, team: 'Lazio', logo: 'https://upload.wikimedia.org/wikipedia/en/c/ce/S.S._Lazio_badge.svg', played: 21, won: 12, drawn: 4, lost: 5, goalsFor: 38, goalsAgainst: 29, goalDifference: 9, points: 40, form: ['W', 'L', 'W', 'W', 'D'] },
      { position: 5, team: 'Juventus', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Juventus_FC_-_pictogram.svg', played: 21, won: 9, drawn: 10, lost: 2, goalsFor: 35, goalsAgainst: 19, goalDifference: 16, points: 37, form: ['D', 'D', 'W', 'D', 'D'] },
      { position: 6, team: 'Fiorentina', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/ACF_Fiorentina_-_logo_%282022%29.svg', played: 20, won: 10, drawn: 5, lost: 5, goalsFor: 34, goalsAgainst: 22, goalDifference: 12, points: 35, form: ['L', 'W', 'D', 'W', 'W'] },
      { position: 7, team: 'Bologna', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Bologna_FC_1909_logo.svg', played: 21, won: 8, drawn: 8, lost: 5, goalsFor: 30, goalsAgainst: 26, goalDifference: 4, points: 32, form: ['D', 'D', 'W', 'D', 'W'] },
      { position: 8, team: 'AC Milan', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg', played: 20, won: 8, drawn: 6, lost: 6, goalsFor: 29, goalsAgainst: 23, goalDifference: 6, points: 30, form: ['W', 'L', 'W', 'D', 'L'] },
      { position: 9, team: 'Roma', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg', played: 21, won: 7, drawn: 6, lost: 8, goalsFor: 28, goalsAgainst: 26, goalDifference: 2, points: 27, form: ['W', 'D', 'L', 'W', 'L'] },
      { position: 10, team: 'Torino', logo: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Torino_FC_Logo.svg', played: 21, won: 7, drawn: 5, lost: 9, goalsFor: 21, goalsAgainst: 26, goalDifference: -5, points: 26, form: ['L', 'L', 'D', 'W', 'W'] },
    ]
  },
  {
    id: 'ligue-1',
    name: 'Ligue 1',
    shortName: 'Ligue 1',
    country: 'France',
    countryFlag: '🇫🇷',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Ligue1_Uber_Eats_logo.svg',
    season: '2025-26',
    standings: [
      { position: 1, team: 'Paris Saint-Germain', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg', played: 18, won: 13, drawn: 4, lost: 1, goalsFor: 42, goalsAgainst: 17, goalDifference: 25, points: 43, form: ['W', 'W', 'D', 'W', 'W'] },
      { position: 2, team: 'Marseille', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Olympique_Marseille_logo.svg', played: 18, won: 10, drawn: 4, lost: 4, goalsFor: 39, goalsAgainst: 24, goalDifference: 15, points: 34, form: ['W', 'L', 'W', 'W', 'D'] },
      { position: 3, team: 'Monaco', logo: 'https://upload.wikimedia.org/wikipedia/en/c/ce/AS_Monaco_FC.svg', played: 18, won: 10, drawn: 3, lost: 5, goalsFor: 32, goalsAgainst: 21, goalDifference: 11, points: 33, form: ['W', 'W', 'L', 'W', 'D'] },
      { position: 4, team: 'Lille', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3f/Lille_OSC_2018_logo.svg', played: 18, won: 9, drawn: 5, lost: 4, goalsFor: 30, goalsAgainst: 22, goalDifference: 8, points: 32, form: ['D', 'W', 'W', 'D', 'W'] },
      { position: 5, team: 'Lyon', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Olympique_Lyonnais_logo.svg', played: 18, won: 9, drawn: 4, lost: 5, goalsFor: 34, goalsAgainst: 27, goalDifference: 7, points: 31, form: ['W', 'D', 'L', 'W', 'W'] },
      { position: 6, team: 'Nice', logo: 'https://upload.wikimedia.org/wikipedia/en/2/2e/OGC_Nice_logo.svg', played: 18, won: 8, drawn: 6, lost: 4, goalsFor: 31, goalsAgainst: 24, goalDifference: 7, points: 30, form: ['D', 'W', 'D', 'W', 'D'] },
      { position: 7, team: 'Lens', logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/RC_Lens_logo.svg', played: 18, won: 7, drawn: 7, lost: 4, goalsFor: 23, goalsAgainst: 18, goalDifference: 5, points: 28, form: ['D', 'D', 'W', 'D', 'W'] },
      { position: 8, team: 'Auxerre', logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/AJ_Auxerre_logo.svg', played: 18, won: 8, drawn: 3, lost: 7, goalsFor: 29, goalsAgainst: 29, goalDifference: 0, points: 27, form: ['W', 'L', 'L', 'W', 'W'] },
      { position: 9, team: 'Reims', logo: 'https://upload.wikimedia.org/wikipedia/en/1/19/Stade_Reims_logo.svg', played: 18, won: 6, drawn: 8, lost: 4, goalsFor: 25, goalsAgainst: 23, goalDifference: 2, points: 26, form: ['D', 'D', 'D', 'W', 'D'] },
      { position: 10, team: 'Strasbourg', logo: 'https://upload.wikimedia.org/wikipedia/en/8/80/Racing_Club_de_Strasbourg_logo.svg', played: 18, won: 6, drawn: 5, lost: 7, goalsFor: 29, goalsAgainst: 28, goalDifference: 1, points: 23, form: ['L', 'W', 'D', 'L', 'W'] },
    ]
  },
  {
    id: 'world-cup',
    name: 'FIFA World Cup 2022',
    shortName: 'World Cup',
    country: 'International',
    countryFlag: '🌍',
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/e3/2022_FIFA_World_Cup.svg',
    season: '2022',
    standings: [
      { position: 1, team: 'Argentina', logo: 'https://upload.wikimedia.org/wikipedia/en/c/c1/Argentina_national_football_team_logo.svg', played: 7, won: 5, drawn: 1, lost: 1, goalsFor: 15, goalsAgainst: 8, goalDifference: 7, points: 0, form: ['W', 'W', 'W', 'W', 'W'] },
      { position: 2, team: 'France', logo: 'https://upload.wikimedia.org/wikipedia/en/1/12/France_national_football_team_seal.svg', played: 7, won: 5, drawn: 0, lost: 2, goalsFor: 16, goalsAgainst: 8, goalDifference: 8, points: 0, form: ['W', 'W', 'W', 'W', 'L'] },
      { position: 3, team: 'Croatia', logo: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Croatian_Football_Federation_logo.svg', played: 7, won: 2, drawn: 4, lost: 1, goalsFor: 8, goalsAgainst: 7, goalDifference: 1, points: 0, form: ['W', 'D', 'W', 'D', 'D'] },
      { position: 4, team: 'Morocco', logo: 'https://upload.wikimedia.org/wikipedia/en/6/60/Royal_Moroccan_Football_Federation_logo.svg', played: 7, won: 3, drawn: 2, lost: 2, goalsFor: 6, goalsAgainst: 5, goalDifference: 1, points: 0, form: ['W', 'W', 'W', 'D', 'L'] },
      { position: 5, team: 'Netherlands', logo: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Royal_Netherlands_Football_Association_Logo.svg', played: 5, won: 3, drawn: 1, lost: 1, goalsFor: 10, goalsAgainst: 5, goalDifference: 5, points: 0, form: ['W', 'W', 'D', 'W', 'L'] },
      { position: 6, team: 'England', logo: 'https://upload.wikimedia.org/wikipedia/en/b/be/England_national_football_team_crest.svg', played: 5, won: 3, drawn: 1, lost: 1, goalsFor: 13, goalsAgainst: 4, goalDifference: 9, points: 0, form: ['W', 'W', 'D', 'W', 'L'] },
      { position: 7, team: 'Brazil', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Brazilian_Football_Confederation_logo.svg', played: 5, won: 3, drawn: 1, lost: 1, goalsFor: 8, goalsAgainst: 3, goalDifference: 5, points: 0, form: ['W', 'W', 'D', 'W', 'L'] },
      { position: 8, team: 'Portugal', logo: 'https://upload.wikimedia.org/wikipedia/en/4/45/Portugal_national_football_team_logo.svg', played: 5, won: 3, drawn: 0, lost: 2, goalsFor: 12, goalsAgainst: 6, goalDifference: 6, points: 0, form: ['W', 'W', 'W', 'L', 'L'] },
    ]
  }
];

export function getLeagueById(id: string): League | undefined {
  return leagues.find(league => league.id === id);
}

export function getAllLeagues(): League[] {
  return leagues;
}
