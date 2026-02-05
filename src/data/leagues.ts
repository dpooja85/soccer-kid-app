// League Tables Data - Updated from ESPN
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
      { position: 1, team: 'Arsenal', logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg', played: 24, won: 16, drawn: 5, lost: 3, goalsFor: 50, goalsAgainst: 21, goalDifference: 29, points: 53, form: ['W', 'W', 'W', 'D', 'W'] },
      { position: 2, team: 'Manchester City', logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg', played: 24, won: 14, drawn: 5, lost: 5, goalsFor: 52, goalsAgainst: 26, goalDifference: 26, points: 47, form: ['W', 'W', 'D', 'W', 'L'] },
      { position: 3, team: 'Aston Villa', logo: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Aston_Villa_FC_crest_%282016%29.svg', played: 24, won: 14, drawn: 4, lost: 6, goalsFor: 38, goalsAgainst: 29, goalDifference: 9, points: 46, form: ['W', 'W', 'L', 'W', 'W'] },
      { position: 4, team: 'Manchester United', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg', played: 24, won: 11, drawn: 8, lost: 5, goalsFor: 38, goalsAgainst: 30, goalDifference: 8, points: 41, form: ['D', 'W', 'W', 'D', 'W'] },
      { position: 5, team: 'Chelsea', logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg', played: 24, won: 11, drawn: 7, lost: 6, goalsFor: 45, goalsAgainst: 30, goalDifference: 15, points: 40, form: ['W', 'D', 'W', 'W', 'D'] },
      { position: 6, team: 'Liverpool', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg', played: 24, won: 11, drawn: 6, lost: 7, goalsFor: 42, goalsAgainst: 36, goalDifference: 6, points: 39, form: ['L', 'W', 'D', 'W', 'W'] },
      { position: 7, team: 'Brentford', logo: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Brentford_FC_crest.svg', played: 24, won: 11, drawn: 3, lost: 10, goalsFor: 42, goalsAgainst: 38, goalDifference: 4, points: 36, form: ['W', 'L', 'W', 'W', 'L'] },
      { position: 8, team: 'Sunderland', logo: 'https://upload.wikimedia.org/wikipedia/en/7/77/Logo_Sunderland.svg', played: 24, won: 9, drawn: 9, lost: 6, goalsFor: 32, goalsAgainst: 31, goalDifference: 1, points: 36, form: ['D', 'W', 'D', 'W', 'D'] },
      { position: 9, team: 'Fulham', logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Fulham_FC_%28shield%29.svg', played: 24, won: 10, drawn: 4, lost: 10, goalsFor: 35, goalsAgainst: 36, goalDifference: -1, points: 34, form: ['L', 'W', 'W', 'L', 'W'] },
      { position: 10, team: 'Everton', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg', played: 24, won: 9, drawn: 7, lost: 8, goalsFor: 28, goalsAgainst: 29, goalDifference: -1, points: 34, form: ['D', 'W', 'D', 'L', 'W'] },
      { position: 11, team: 'Newcastle United', logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg', played: 24, won: 9, drawn: 6, lost: 9, goalsFor: 35, goalsAgainst: 35, goalDifference: 0, points: 33, form: ['W', 'L', 'D', 'W', 'L'] },
      { position: 12, team: 'Bournemouth', logo: 'https://upload.wikimedia.org/wikipedia/en/e/e5/AFC_Bournemouth_%282013%29.svg', played: 24, won: 8, drawn: 9, lost: 7, goalsFor: 32, goalsAgainst: 35, goalDifference: -3, points: 33, form: ['D', 'D', 'W', 'D', 'L'] },
      { position: 13, team: 'Brighton', logo: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg', played: 24, won: 7, drawn: 10, lost: 7, goalsFor: 34, goalsAgainst: 32, goalDifference: 2, points: 31, form: ['D', 'D', 'D', 'W', 'D'] },
      { position: 14, team: 'Tottenham', logo: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg', played: 24, won: 7, drawn: 8, lost: 9, goalsFor: 40, goalsAgainst: 38, goalDifference: 2, points: 29, form: ['L', 'D', 'W', 'L', 'D'] },
      { position: 15, team: 'Crystal Palace', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Crystal_Palace_FC_logo_%282022%29.svg', played: 24, won: 7, drawn: 8, lost: 9, goalsFor: 28, goalsAgainst: 32, goalDifference: -4, points: 29, form: ['D', 'L', 'D', 'W', 'D'] },
      { position: 16, team: 'Leeds United', logo: 'https://upload.wikimedia.org/wikipedia/en/5/54/Leeds_United_F.C._logo.svg', played: 24, won: 6, drawn: 8, lost: 10, goalsFor: 26, goalsAgainst: 37, goalDifference: -11, points: 26, form: ['L', 'D', 'L', 'D', 'W'] },
      { position: 17, team: 'Nottingham Forest', logo: 'https://upload.wikimedia.org/wikipedia/en/e/e5/Nottingham_Forest_F.C._logo.svg', played: 24, won: 7, drawn: 5, lost: 12, goalsFor: 28, goalsAgainst: 39, goalDifference: -11, points: 26, form: ['L', 'L', 'W', 'L', 'W'] },
      { position: 18, team: 'West Ham', logo: 'https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg', played: 24, won: 5, drawn: 5, lost: 14, goalsFor: 24, goalsAgainst: 43, goalDifference: -19, points: 20, form: ['L', 'L', 'D', 'L', 'W'] },
      { position: 19, team: 'Burnley', logo: 'https://upload.wikimedia.org/wikipedia/en/6/62/Burnley_F.C._Logo.svg', played: 24, won: 3, drawn: 6, lost: 15, goalsFor: 20, goalsAgainst: 42, goalDifference: -22, points: 15, form: ['L', 'D', 'L', 'L', 'L'] },
      { position: 20, team: 'Wolves', logo: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg', played: 24, won: 1, drawn: 5, lost: 18, goalsFor: 18, goalsAgainst: 48, goalDifference: -30, points: 8, form: ['L', 'L', 'L', 'D', 'L'] },
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
      { position: 1, team: 'Arsenal', logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg', played: 8, won: 8, drawn: 0, lost: 0, goalsFor: 25, goalsAgainst: 6, goalDifference: 19, points: 24, form: ['W', 'W', 'W', 'W', 'W'] },
      { position: 2, team: 'Bayern Munich', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg', played: 8, won: 7, drawn: 0, lost: 1, goalsFor: 22, goalsAgainst: 8, goalDifference: 14, points: 21, form: ['W', 'W', 'W', 'L', 'W'] },
      { position: 3, team: 'Liverpool', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg', played: 8, won: 6, drawn: 0, lost: 2, goalsFor: 18, goalsAgainst: 6, goalDifference: 12, points: 18, form: ['W', 'W', 'L', 'W', 'W'] },
      { position: 4, team: 'Tottenham', logo: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg', played: 8, won: 5, drawn: 2, lost: 1, goalsFor: 16, goalsAgainst: 6, goalDifference: 10, points: 17, form: ['W', 'D', 'W', 'W', 'D'] },
      { position: 5, team: 'Barcelona', logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg', played: 8, won: 5, drawn: 1, lost: 2, goalsFor: 18, goalsAgainst: 10, goalDifference: 8, points: 16, form: ['W', 'L', 'W', 'W', 'D'] },
      { position: 6, team: 'Chelsea', logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg', played: 8, won: 5, drawn: 1, lost: 2, goalsFor: 15, goalsAgainst: 8, goalDifference: 7, points: 16, form: ['W', 'W', 'D', 'L', 'W'] },
      { position: 7, team: 'Sporting CP', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Sporting_Clube_de_Portugal_%28Logo%29.svg', played: 8, won: 5, drawn: 1, lost: 2, goalsFor: 14, goalsAgainst: 8, goalDifference: 6, points: 16, form: ['W', 'D', 'W', 'W', 'L'] },
      { position: 8, team: 'Manchester City', logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg', played: 8, won: 5, drawn: 1, lost: 2, goalsFor: 16, goalsAgainst: 10, goalDifference: 6, points: 16, form: ['W', 'L', 'W', 'W', 'D'] },
      { position: 9, team: 'Real Madrid', logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg', played: 8, won: 5, drawn: 0, lost: 3, goalsFor: 18, goalsAgainst: 9, goalDifference: 9, points: 15, form: ['L', 'W', 'W', 'L', 'W'] },
      { position: 10, team: 'Inter Milan', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg', played: 8, won: 5, drawn: 0, lost: 3, goalsFor: 14, goalsAgainst: 6, goalDifference: 8, points: 15, form: ['W', 'W', 'L', 'W', 'W'] },
      { position: 11, team: 'Paris Saint-Germain', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg', played: 8, won: 4, drawn: 2, lost: 2, goalsFor: 16, goalsAgainst: 6, goalDifference: 10, points: 14, form: ['D', 'W', 'W', 'D', 'W'] },
      { position: 12, team: 'Newcastle United', logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg', played: 8, won: 4, drawn: 2, lost: 2, goalsFor: 15, goalsAgainst: 5, goalDifference: 10, points: 14, form: ['W', 'D', 'W', 'D', 'L'] },
      { position: 13, team: 'Juventus', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Juventus_FC_-_pictogram.svg', played: 8, won: 3, drawn: 4, lost: 1, goalsFor: 10, goalsAgainst: 6, goalDifference: 4, points: 13, form: ['D', 'W', 'D', 'D', 'W'] },
      { position: 14, team: 'Atletico Madrid', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg', played: 8, won: 4, drawn: 1, lost: 3, goalsFor: 12, goalsAgainst: 10, goalDifference: 2, points: 13, form: ['W', 'L', 'W', 'W', 'D'] },
      { position: 15, team: 'Atalanta', logo: 'https://upload.wikimedia.org/wikipedia/en/6/66/AtalantaBC.svg', played: 8, won: 4, drawn: 1, lost: 3, goalsFor: 12, goalsAgainst: 12, goalDifference: 0, points: 13, form: ['W', 'W', 'L', 'D', 'L'] },
      { position: 16, team: 'Bayer Leverkusen', logo: 'https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg', played: 8, won: 3, drawn: 3, lost: 2, goalsFor: 10, goalsAgainst: 11, goalDifference: -1, points: 12, form: ['D', 'W', 'D', 'W', 'D'] },
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
      { position: 1, team: 'Barcelona', logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg', played: 22, won: 18, drawn: 1, lost: 3, goalsFor: 58, goalsAgainst: 21, goalDifference: 37, points: 55, form: ['W', 'W', 'W', 'L', 'W'] },
      { position: 2, team: 'Real Madrid', logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg', played: 22, won: 17, drawn: 3, lost: 2, goalsFor: 52, goalsAgainst: 23, goalDifference: 29, points: 54, form: ['W', 'W', 'D', 'W', 'W'] },
      { position: 3, team: 'Atletico Madrid', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg', played: 22, won: 13, drawn: 6, lost: 3, goalsFor: 40, goalsAgainst: 19, goalDifference: 21, points: 45, form: ['W', 'D', 'W', 'W', 'D'] },
      { position: 4, team: 'Villarreal', logo: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Villarreal_CF_logo.svg', played: 21, won: 13, drawn: 3, lost: 5, goalsFor: 42, goalsAgainst: 26, goalDifference: 16, points: 42, form: ['W', 'W', 'L', 'W', 'W'] },
      { position: 5, team: 'Real Betis', logo: 'https://upload.wikimedia.org/wikipedia/en/1/13/Real_betis_logo.svg', played: 22, won: 9, drawn: 8, lost: 5, goalsFor: 32, goalsAgainst: 24, goalDifference: 8, points: 35, form: ['D', 'W', 'D', 'W', 'D'] },
      { position: 6, team: 'Espanyol', logo: 'https://upload.wikimedia.org/wikipedia/en/d/d8/RCD_Espanyol.svg', played: 22, won: 10, drawn: 4, lost: 8, goalsFor: 30, goalsAgainst: 31, goalDifference: -1, points: 34, form: ['W', 'L', 'W', 'W', 'L'] },
      { position: 7, team: 'Celta Vigo', logo: 'https://upload.wikimedia.org/wikipedia/en/1/12/RC_Celta_de_Vigo_logo.svg', played: 22, won: 8, drawn: 9, lost: 5, goalsFor: 32, goalsAgainst: 26, goalDifference: 6, points: 33, form: ['D', 'D', 'W', 'D', 'D'] },
      { position: 8, team: 'Real Sociedad', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Real_Sociedad_logo.svg', played: 22, won: 7, drawn: 7, lost: 8, goalsFor: 25, goalsAgainst: 25, goalDifference: 0, points: 28, form: ['D', 'L', 'W', 'D', 'L'] },
      { position: 9, team: 'Osasuna', logo: 'https://upload.wikimedia.org/wikipedia/en/d/db/Osasuna_logo.svg', played: 22, won: 7, drawn: 5, lost: 10, goalsFor: 24, goalsAgainst: 25, goalDifference: -1, points: 26, form: ['L', 'W', 'L', 'W', 'L'] },
      { position: 10, team: 'Alaves', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f8/Deportivo_Alaves_logo_%282020%29.svg', played: 22, won: 7, drawn: 4, lost: 11, goalsFor: 22, goalsAgainst: 29, goalDifference: -7, points: 25, form: ['L', 'W', 'L', 'D', 'W'] },
      { position: 11, team: 'Athletic Bilbao', logo: 'https://upload.wikimedia.org/wikipedia/en/9/98/Club_Athletic_Bilbao_logo.svg', played: 22, won: 7, drawn: 4, lost: 11, goalsFor: 24, goalsAgainst: 34, goalDifference: -10, points: 25, form: ['L', 'L', 'W', 'W', 'L'] },
      { position: 12, team: 'Girona', logo: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Girona_FC_Logo.svg', played: 22, won: 6, drawn: 7, lost: 9, goalsFor: 25, goalsAgainst: 40, goalDifference: -15, points: 25, form: ['D', 'L', 'D', 'W', 'D'] },
      { position: 13, team: 'Elche', logo: 'https://upload.wikimedia.org/wikipedia/en/1/10/Elche_CF_logo.svg', played: 22, won: 5, drawn: 9, lost: 8, goalsFor: 22, goalsAgainst: 24, goalDifference: -2, points: 24, form: ['D', 'D', 'D', 'W', 'L'] },
      { position: 14, team: 'Mallorca', logo: 'https://upload.wikimedia.org/wikipedia/en/e/e0/RCD_Mallorca_logo.svg', played: 22, won: 6, drawn: 6, lost: 10, goalsFor: 20, goalsAgainst: 26, goalDifference: -6, points: 24, form: ['L', 'D', 'W', 'L', 'D'] },
      { position: 15, team: 'Sevilla', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg', played: 22, won: 7, drawn: 3, lost: 12, goalsFor: 24, goalsAgainst: 32, goalDifference: -8, points: 24, form: ['W', 'L', 'L', 'W', 'L'] },
      { position: 16, team: 'Valencia', logo: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Valenciacf.svg', played: 22, won: 5, drawn: 8, lost: 9, goalsFor: 22, goalsAgainst: 34, goalDifference: -12, points: 23, form: ['D', 'D', 'L', 'D', 'L'] },
      { position: 17, team: 'Getafe', logo: 'https://upload.wikimedia.org/wikipedia/en/4/46/Getafe_logo.svg', played: 22, won: 6, drawn: 5, lost: 11, goalsFor: 20, goalsAgainst: 31, goalDifference: -11, points: 23, form: ['L', 'W', 'L', 'L', 'D'] },
      { position: 18, team: 'Rayo Vallecano', logo: 'https://upload.wikimedia.org/wikipedia/en/1/12/Rayo_Vallecano_logo.svg', played: 22, won: 5, drawn: 7, lost: 10, goalsFor: 22, goalsAgainst: 34, goalDifference: -12, points: 22, form: ['D', 'L', 'D', 'L', 'W'] },
      { position: 19, team: 'Levante', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Levante_Uni%C3%B3n_Deportiva%2C_S.A.D._logo.svg', played: 21, won: 4, drawn: 6, lost: 11, goalsFor: 18, goalsAgainst: 28, goalDifference: -10, points: 18, form: ['L', 'D', 'L', 'D', 'L'] },
      { position: 20, team: 'Real Oviedo', logo: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Real_Oviedo_logo.svg', played: 22, won: 3, drawn: 7, lost: 12, goalsFor: 16, goalsAgainst: 38, goalDifference: -22, points: 16, form: ['L', 'L', 'D', 'L', 'D'] },
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
      { position: 1, team: 'Bayern Munich', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg', played: 20, won: 16, drawn: 3, lost: 1, goalsFor: 62, goalsAgainst: 16, goalDifference: 46, points: 51, form: ['W', 'W', 'W', 'D', 'W'] },
      { position: 2, team: 'Borussia Dortmund', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg', played: 20, won: 13, drawn: 6, lost: 1, goalsFor: 48, goalsAgainst: 26, goalDifference: 22, points: 45, form: ['W', 'D', 'W', 'W', 'D'] },
      { position: 3, team: 'TSG Hoffenheim', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Logo_TSG_Hoffenheim.svg', played: 20, won: 13, drawn: 3, lost: 4, goalsFor: 45, goalsAgainst: 25, goalDifference: 20, points: 42, form: ['W', 'W', 'L', 'W', 'W'] },
      { position: 4, team: 'VfB Stuttgart', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/VfB_Stuttgart_1893_Logo.svg', played: 20, won: 12, drawn: 3, lost: 5, goalsFor: 42, goalsAgainst: 31, goalDifference: 11, points: 39, form: ['W', 'L', 'W', 'W', 'D'] },
      { position: 5, team: 'RB Leipzig', logo: 'https://upload.wikimedia.org/wikipedia/en/0/04/RB_Leipzig_2014_logo.svg', played: 20, won: 11, drawn: 3, lost: 6, goalsFor: 38, goalsAgainst: 27, goalDifference: 11, points: 36, form: ['L', 'W', 'W', 'D', 'W'] },
      { position: 6, team: 'Bayer Leverkusen', logo: 'https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg', played: 19, won: 11, drawn: 2, lost: 6, goalsFor: 40, goalsAgainst: 28, goalDifference: 12, points: 35, form: ['W', 'W', 'L', 'W', 'L'] },
      { position: 7, team: 'SC Freiburg', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/SC_Freiburg_logo.svg', played: 20, won: 7, drawn: 6, lost: 7, goalsFor: 28, goalsAgainst: 30, goalDifference: -2, points: 27, form: ['D', 'D', 'W', 'L', 'D'] },
      { position: 8, team: 'Eintracht Frankfurt', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Eintracht_Frankfurt_Logo.svg', played: 20, won: 7, drawn: 6, lost: 7, goalsFor: 30, goalsAgainst: 35, goalDifference: -5, points: 27, form: ['L', 'D', 'W', 'D', 'W'] },
      { position: 9, team: 'Union Berlin', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/1._FC_Union_Berlin_Logo.svg', played: 20, won: 6, drawn: 6, lost: 8, goalsFor: 24, goalsAgainst: 32, goalDifference: -8, points: 24, form: ['D', 'L', 'D', 'W', 'L'] },
      { position: 10, team: 'FC Cologne', logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/FC_Cologne_logo.svg', played: 20, won: 6, drawn: 5, lost: 9, goalsFor: 26, goalsAgainst: 29, goalDifference: -3, points: 23, form: ['L', 'W', 'L', 'D', 'W'] },
      { position: 11, team: 'FC Augsburg', logo: 'https://upload.wikimedia.org/wikipedia/en/c/c5/FC_Augsburg_logo.svg', played: 20, won: 6, drawn: 4, lost: 10, goalsFor: 25, goalsAgainst: 38, goalDifference: -13, points: 22, form: ['L', 'L', 'W', 'W', 'L'] },
      { position: 12, team: 'Borussia Monchengladbach', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Borussia_M%C3%B6nchengladbach_logo.svg', played: 20, won: 5, drawn: 6, lost: 9, goalsFor: 26, goalsAgainst: 35, goalDifference: -9, points: 21, form: ['D', 'L', 'D', 'L', 'W'] },
      { position: 13, team: 'Hamburg SV', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/HSV-Logo.svg', played: 19, won: 4, drawn: 7, lost: 8, goalsFor: 22, goalsAgainst: 32, goalDifference: -10, points: 19, form: ['D', 'D', 'L', 'D', 'L'] },
      { position: 14, team: 'VfL Wolfsburg', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/VfL_Wolfsburg_Logo.svg', played: 20, won: 5, drawn: 4, lost: 11, goalsFor: 28, goalsAgainst: 42, goalDifference: -14, points: 19, form: ['L', 'L', 'W', 'L', 'D'] },
      { position: 15, team: 'Werder Bremen', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/be/SV-Werder-Bremen-Logo.svg', played: 20, won: 4, drawn: 7, lost: 9, goalsFor: 24, goalsAgainst: 40, goalDifference: -16, points: 19, form: ['D', 'L', 'D', 'L', 'D'] },
      { position: 16, team: 'Mainz', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/FSV_Mainz_05_Logo.png', played: 20, won: 4, drawn: 6, lost: 10, goalsFor: 22, goalsAgainst: 32, goalDifference: -10, points: 18, form: ['L', 'D', 'L', 'D', 'L'] },
      { position: 17, team: 'St. Pauli', logo: 'https://upload.wikimedia.org/wikipedia/en/8/81/FC_St._Pauli_logo.svg', played: 20, won: 3, drawn: 5, lost: 12, goalsFor: 18, goalsAgainst: 34, goalDifference: -16, points: 14, form: ['L', 'L', 'L', 'D', 'L'] },
      { position: 18, team: 'Heidenheim', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/1._FC_Heidenheim_1846.svg', played: 20, won: 3, drawn: 4, lost: 13, goalsFor: 18, goalsAgainst: 44, goalDifference: -26, points: 13, form: ['L', 'L', 'L', 'D', 'L'] },
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
      { position: 1, team: 'Inter Milan', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg', played: 23, won: 18, drawn: 1, lost: 4, goalsFor: 55, goalsAgainst: 22, goalDifference: 33, points: 55, form: ['W', 'W', 'W', 'L', 'W'] },
      { position: 2, team: 'AC Milan', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg', played: 23, won: 14, drawn: 8, lost: 1, goalsFor: 45, goalsAgainst: 24, goalDifference: 21, points: 50, form: ['D', 'W', 'W', 'D', 'W'] },
      { position: 3, team: 'Napoli', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/SSC_Napoli.svg', played: 23, won: 14, drawn: 4, lost: 5, goalsFor: 38, goalsAgainst: 26, goalDifference: 12, points: 46, form: ['W', 'L', 'W', 'W', 'D'] },
      { position: 4, team: 'Juventus', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Juventus_FC_-_pictogram.svg', played: 23, won: 13, drawn: 6, lost: 4, goalsFor: 42, goalsAgainst: 21, goalDifference: 21, points: 45, form: ['W', 'D', 'W', 'D', 'W'] },
      { position: 5, team: 'AS Roma', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg', played: 23, won: 14, drawn: 1, lost: 8, goalsFor: 40, goalsAgainst: 27, goalDifference: 13, points: 43, form: ['W', 'W', 'L', 'W', 'L'] },
      { position: 6, team: 'Como', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Como_1907_logo_%282019%29.svg', played: 23, won: 11, drawn: 8, lost: 4, goalsFor: 42, goalsAgainst: 21, goalDifference: 21, points: 41, form: ['D', 'W', 'D', 'W', 'D'] },
      { position: 7, team: 'Atalanta', logo: 'https://upload.wikimedia.org/wikipedia/en/6/66/AtalantaBC.svg', played: 23, won: 9, drawn: 9, lost: 5, goalsFor: 35, goalsAgainst: 25, goalDifference: 10, points: 36, form: ['D', 'D', 'W', 'D', 'D'] },
      { position: 8, team: 'Lazio', logo: 'https://upload.wikimedia.org/wikipedia/en/c/ce/S.S._Lazio_badge.svg', played: 23, won: 8, drawn: 8, lost: 7, goalsFor: 32, goalsAgainst: 29, goalDifference: 3, points: 32, form: ['D', 'L', 'D', 'W', 'D'] },
      { position: 9, team: 'Udinese', logo: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Udinese_Calcio_logo.svg', played: 23, won: 9, drawn: 5, lost: 9, goalsFor: 28, goalsAgainst: 36, goalDifference: -8, points: 32, form: ['W', 'L', 'W', 'L', 'D'] },
      { position: 10, team: 'Bologna', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Bologna_F.C._1909_logo.svg', played: 23, won: 8, drawn: 6, lost: 9, goalsFor: 30, goalsAgainst: 28, goalDifference: 2, points: 30, form: ['L', 'D', 'W', 'L', 'W'] },
      { position: 11, team: 'Sassuolo', logo: 'https://upload.wikimedia.org/wikipedia/en/d/d5/US_Sassuolo_Calcio_logo.svg', played: 23, won: 8, drawn: 5, lost: 10, goalsFor: 28, goalsAgainst: 30, goalDifference: -2, points: 29, form: ['L', 'W', 'W', 'L', 'L'] },
      { position: 12, team: 'Cagliari', logo: 'https://upload.wikimedia.org/wikipedia/en/6/61/Cagliari_Calcio_1920.svg', played: 23, won: 7, drawn: 7, lost: 9, goalsFor: 26, goalsAgainst: 29, goalDifference: -3, points: 28, form: ['D', 'D', 'L', 'W', 'D'] },
      { position: 13, team: 'Torino', logo: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Torino_FC_Logo.svg', played: 23, won: 7, drawn: 5, lost: 11, goalsFor: 22, goalsAgainst: 40, goalDifference: -18, points: 26, form: ['L', 'L', 'W', 'D', 'L'] },
      { position: 14, team: 'Genoa', logo: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Genoa_CFC_crest.svg', played: 23, won: 5, drawn: 8, lost: 10, goalsFor: 22, goalsAgainst: 29, goalDifference: -7, points: 23, form: ['D', 'L', 'D', 'D', 'L'] },
      { position: 15, team: 'Cremonese', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/US_Cremonese_logo_%282022%29.svg', played: 23, won: 5, drawn: 8, lost: 10, goalsFor: 22, goalsAgainst: 33, goalDifference: -11, points: 23, form: ['D', 'D', 'L', 'D', 'L'] },
      { position: 16, team: 'Parma', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_Parma_Calcio_1913_%282016%29.svg', played: 23, won: 5, drawn: 8, lost: 10, goalsFor: 24, goalsAgainst: 39, goalDifference: -15, points: 23, form: ['D', 'L', 'D', 'L', 'D'] },
      { position: 17, team: 'Lecce', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6e/US_Lecce_logo.svg', played: 23, won: 4, drawn: 6, lost: 13, goalsFor: 20, goalsAgainst: 37, goalDifference: -17, points: 18, form: ['L', 'L', 'L', 'D', 'L'] },
      { position: 18, team: 'Fiorentina', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Stemma_Fiorentina_2022.svg', played: 23, won: 3, drawn: 8, lost: 12, goalsFor: 22, goalsAgainst: 33, goalDifference: -11, points: 17, form: ['D', 'L', 'D', 'L', 'D'] },
      { position: 19, team: 'Pisa', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3b/AC_Pisa_1909.svg', played: 23, won: 1, drawn: 11, lost: 11, goalsFor: 18, goalsAgainst: 39, goalDifference: -21, points: 14, form: ['D', 'D', 'L', 'D', 'L'] },
      { position: 20, team: 'Hellas Verona', logo: 'https://upload.wikimedia.org/wikipedia/en/9/92/Hellas_Verona_FC_logo_%282020%29.svg', played: 23, won: 2, drawn: 8, lost: 13, goalsFor: 20, goalsAgainst: 43, goalDifference: -23, points: 14, form: ['L', 'D', 'L', 'L', 'D'] },
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
      { position: 1, team: 'Paris Saint-Germain', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg', played: 20, won: 15, drawn: 3, lost: 2, goalsFor: 48, goalsAgainst: 21, goalDifference: 27, points: 48, form: ['W', 'W', 'D', 'W', 'W'] },
      { position: 2, team: 'Lens', logo: 'https://upload.wikimedia.org/wikipedia/en/4/4c/RC_Lens_logo.svg', played: 20, won: 15, drawn: 1, lost: 4, goalsFor: 42, goalsAgainst: 24, goalDifference: 18, points: 46, form: ['W', 'W', 'W', 'L', 'W'] },
      { position: 3, team: 'Marseille', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Olympique_Marseille_logo.svg', played: 20, won: 12, drawn: 3, lost: 5, goalsFor: 45, goalsAgainst: 21, goalDifference: 24, points: 39, form: ['W', 'L', 'W', 'W', 'D'] },
      { position: 4, team: 'Lyon', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a1/Olympique_Lyonnais_logo.svg', played: 20, won: 12, drawn: 3, lost: 5, goalsFor: 38, goalsAgainst: 25, goalDifference: 13, points: 39, form: ['W', 'W', 'L', 'W', 'D'] },
      { position: 5, team: 'Lille', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3f/Lille_OSC_2018_logo.svg', played: 20, won: 10, drawn: 2, lost: 8, goalsFor: 32, goalsAgainst: 28, goalDifference: 4, points: 32, form: ['L', 'W', 'W', 'L', 'W'] },
      { position: 6, team: 'Rennes', logo: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Stade_Rennais_FC_logo.svg', played: 20, won: 8, drawn: 7, lost: 5, goalsFor: 28, goalsAgainst: 29, goalDifference: -1, points: 31, form: ['D', 'D', 'W', 'D', 'D'] },
      { position: 7, team: 'Strasbourg', logo: 'https://upload.wikimedia.org/wikipedia/en/8/80/Racing_Club_de_Strasbourg_logo.svg', played: 20, won: 9, drawn: 3, lost: 8, goalsFor: 32, goalsAgainst: 24, goalDifference: 8, points: 30, form: ['W', 'L', 'W', 'L', 'W'] },
      { position: 8, team: 'Toulouse', logo: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Toulouse_FC_logo.svg', played: 20, won: 8, drawn: 6, lost: 6, goalsFor: 30, goalsAgainst: 22, goalDifference: 8, points: 30, form: ['D', 'W', 'D', 'W', 'D'] },
      { position: 9, team: 'Lorient', logo: 'https://upload.wikimedia.org/wikipedia/en/d/d2/FC_Lorient_logo.svg', played: 20, won: 7, drawn: 7, lost: 6, goalsFor: 24, goalsAgainst: 28, goalDifference: -4, points: 28, form: ['D', 'D', 'W', 'D', 'L'] },
      { position: 10, team: 'Monaco', logo: 'https://upload.wikimedia.org/wikipedia/en/c/ce/AS_Monaco_FC.svg', played: 20, won: 8, drawn: 3, lost: 9, goalsFor: 28, goalsAgainst: 29, goalDifference: -1, points: 27, form: ['L', 'W', 'L', 'W', 'W'] },
      { position: 11, team: 'Angers', logo: 'https://upload.wikimedia.org/wikipedia/en/0/03/Angers_SCO_logo.svg', played: 20, won: 7, drawn: 5, lost: 8, goalsFor: 24, goalsAgainst: 28, goalDifference: -4, points: 26, form: ['L', 'D', 'W', 'L', 'D'] },
      { position: 12, team: 'Brest', logo: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Stade_Brestois_29_logo.svg', played: 20, won: 6, drawn: 5, lost: 9, goalsFor: 22, goalsAgainst: 29, goalDifference: -7, points: 23, form: ['L', 'D', 'L', 'W', 'D'] },
      { position: 13, team: 'Nice', logo: 'https://upload.wikimedia.org/wikipedia/en/2/2d/OGC_Nice_logo.svg', played: 20, won: 6, drawn: 4, lost: 10, goalsFor: 22, goalsAgainst: 33, goalDifference: -11, points: 22, form: ['L', 'L', 'W', 'D', 'L'] },
      { position: 14, team: 'Paris FC', logo: 'https://upload.wikimedia.org/wikipedia/en/a/af/Paris_FC_logo.svg', played: 20, won: 5, drawn: 6, lost: 9, goalsFor: 20, goalsAgainst: 28, goalDifference: -8, points: 21, form: ['D', 'L', 'D', 'D', 'L'] },
      { position: 15, team: 'Le Havre', logo: 'https://upload.wikimedia.org/wikipedia/en/4/45/Le_Havre_AC_logo.svg', played: 20, won: 4, drawn: 8, lost: 8, goalsFor: 18, goalsAgainst: 27, goalDifference: -9, points: 20, form: ['D', 'D', 'L', 'D', 'L'] },
      { position: 16, team: 'Nantes', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/FC_Nantes_2019_logo.svg', played: 20, won: 3, drawn: 5, lost: 12, goalsFor: 16, goalsAgainst: 33, goalDifference: -17, points: 14, form: ['L', 'L', 'D', 'L', 'L'] },
      { position: 17, team: 'Auxerre', logo: 'https://upload.wikimedia.org/wikipedia/en/5/57/AJ_Auxerre_logo.svg', played: 20, won: 3, drawn: 4, lost: 13, goalsFor: 18, goalsAgainst: 33, goalDifference: -15, points: 13, form: ['L', 'L', 'L', 'D', 'L'] },
      { position: 18, team: 'Metz', logo: 'https://upload.wikimedia.org/wikipedia/en/7/71/FC_Metz_logo.svg', played: 20, won: 3, drawn: 3, lost: 14, goalsFor: 15, goalsAgainst: 40, goalDifference: -25, points: 12, form: ['L', 'L', 'L', 'L', 'D'] },
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
      { position: 1, team: 'Argentina', logo: 'https://upload.wikimedia.org/wikipedia/en/c/c1/Argentina_national_football_team_logo.svg', played: 7, won: 5, drawn: 2, lost: 0, goalsFor: 15, goalsAgainst: 8, goalDifference: 7, points: 17, form: ['W', 'W', 'W', 'W', 'D'] },
      { position: 2, team: 'France', logo: 'https://upload.wikimedia.org/wikipedia/en/d/da/French_Football_Federation_logo.svg', played: 7, won: 5, drawn: 1, lost: 1, goalsFor: 16, goalsAgainst: 8, goalDifference: 8, points: 16, form: ['L', 'W', 'W', 'W', 'W'] },
      { position: 3, team: 'Croatia', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6f/Croatian_Football_Federation_logo.svg', played: 7, won: 3, drawn: 4, lost: 0, goalsFor: 8, goalsAgainst: 5, goalDifference: 3, points: 13, form: ['W', 'D', 'D', 'W', 'D'] },
      { position: 4, team: 'Morocco', logo: 'https://upload.wikimedia.org/wikipedia/en/6/61/Morocco_football_team.png', played: 7, won: 3, drawn: 2, lost: 2, goalsFor: 6, goalsAgainst: 5, goalDifference: 1, points: 11, form: ['L', 'L', 'W', 'W', 'D'] },
      { position: 5, team: 'Netherlands', logo: 'https://upload.wikimedia.org/wikipedia/en/7/79/Royal_Netherlands_Football_Association_Logo.svg', played: 5, won: 3, drawn: 1, lost: 1, goalsFor: 10, goalsAgainst: 4, goalDifference: 6, points: 10, form: ['L', 'W', 'W', 'D', 'W'] },
      { position: 6, team: 'England', logo: 'https://upload.wikimedia.org/wikipedia/en/b/be/Football_Association_England_logo.svg', played: 5, won: 3, drawn: 1, lost: 1, goalsFor: 13, goalsAgainst: 4, goalDifference: 9, points: 10, form: ['L', 'W', 'W', 'D', 'W'] },
      { position: 7, team: 'Brazil', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Brazilian_Football_Confederation_logo.svg', played: 5, won: 3, drawn: 1, lost: 1, goalsFor: 8, goalsAgainst: 3, goalDifference: 5, points: 10, form: ['L', 'W', 'W', 'D', 'W'] },
      { position: 8, team: 'Portugal', logo: 'https://upload.wikimedia.org/wikipedia/en/4/44/Portugal_Football_Federation.png', played: 5, won: 3, drawn: 0, lost: 2, goalsFor: 12, goalsAgainst: 6, goalDifference: 6, points: 9, form: ['L', 'L', 'W', 'W', 'W'] },
    ]
  },
];

export function getLeagueById(id: string): League | undefined {
  return leagues.find(league => league.id === id);
}

export function getAllLeagues(): League[] {
  return leagues;
}
