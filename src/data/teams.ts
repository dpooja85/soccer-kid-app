// Premier League Teams Data
// Using Wikimedia Commons URLs for team logos

export interface Team {
  id: number;
  name: string;
  shortName: string;
  logo: string; // Wikimedia Commons URL
  primaryColor: string;
  secondaryColor: string;
  stadium: string;
  location: string;
  founded: number;
  trophies: {
    premierLeague: number;
    faCup: number;
    leagueCup: number;
    championsLeague: number;
  };
}

export const teams: Team[] = [
  {
    id: 1,
    name: "Manchester United",
    shortName: "Man United",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    primaryColor: "#DA291C",
    secondaryColor: "#FBE122",
    stadium: "Old Trafford",
    location: "Manchester, England",
    founded: 1878,
    trophies: { premierLeague: 13, faCup: 13, leagueCup: 6, championsLeague: 3 }
  },
  {
    id: 2,
    name: "Manchester City",
    shortName: "Man City",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    primaryColor: "#6CABDD",
    secondaryColor: "#1C2C5B",
    stadium: "Etihad Stadium",
    location: "Manchester, England",
    founded: 1880,
    trophies: { premierLeague: 10, faCup: 7, leagueCup: 8, championsLeague: 1 }
  },
  {
    id: 3,
    name: "Liverpool",
    shortName: "Liverpool",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    primaryColor: "#C8102E",
    secondaryColor: "#00B2A9",
    stadium: "Anfield",
    location: "Liverpool, England",
    founded: 1892,
    trophies: { premierLeague: 1, faCup: 8, leagueCup: 10, championsLeague: 6 }
  },
  {
    id: 4,
    name: "Arsenal",
    shortName: "Arsenal",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
    primaryColor: "#EF0107",
    secondaryColor: "#063672",
    stadium: "Emirates Stadium",
    location: "London, England",
    founded: 1886,
    trophies: { premierLeague: 3, faCup: 14, leagueCup: 2, championsLeague: 0 }
  },
  {
    id: 5,
    name: "Chelsea",
    shortName: "Chelsea",
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
    primaryColor: "#034694",
    secondaryColor: "#DBA111",
    stadium: "Stamford Bridge",
    location: "London, England",
    founded: 1905,
    trophies: { premierLeague: 5, faCup: 8, leagueCup: 5, championsLeague: 2 }
  },
  {
    id: 6,
    name: "Tottenham Hotspur",
    shortName: "Spurs",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg",
    primaryColor: "#132257",
    secondaryColor: "#FFFFFF",
    stadium: "Tottenham Hotspur Stadium",
    location: "London, England",
    founded: 1882,
    trophies: { premierLeague: 0, faCup: 8, leagueCup: 4, championsLeague: 0 }
  },
  {
    id: 7,
    name: "Newcastle United",
    shortName: "Newcastle",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg",
    primaryColor: "#241F20",
    secondaryColor: "#FFFFFF",
    stadium: "St. James' Park",
    location: "Newcastle, England",
    founded: 1892,
    trophies: { premierLeague: 0, faCup: 6, leagueCup: 0, championsLeague: 0 }
  },
  {
    id: 8,
    name: "Aston Villa",
    shortName: "Aston Villa",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9a/Aston_Villa_FC_crest_%282016%29.svg",
    primaryColor: "#670E36",
    secondaryColor: "#95BFE5",
    stadium: "Villa Park",
    location: "Birmingham, England",
    founded: 1874,
    trophies: { premierLeague: 0, faCup: 7, leagueCup: 5, championsLeague: 1 }
  },
  {
    id: 9,
    name: "Brighton & Hove Albion",
    shortName: "Brighton",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg",
    primaryColor: "#0057B8",
    secondaryColor: "#FFCD00",
    stadium: "American Express Stadium",
    location: "Brighton, England",
    founded: 1901,
    trophies: { premierLeague: 0, faCup: 0, leagueCup: 0, championsLeague: 0 }
  },
  {
    id: 10,
    name: "West Ham United",
    shortName: "West Ham",
    logo: "https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg",
    primaryColor: "#7A263A",
    secondaryColor: "#1BB1E7",
    stadium: "London Stadium",
    location: "London, England",
    founded: 1895,
    trophies: { premierLeague: 0, faCup: 3, leagueCup: 0, championsLeague: 0 }
  },
  {
    id: 11,
    name: "Brentford",
    shortName: "Brentford",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2a/Brentford_FC_crest.svg",
    primaryColor: "#E30613",
    secondaryColor: "#FBB800",
    stadium: "Gtech Community Stadium",
    location: "London, England",
    founded: 1889,
    trophies: { premierLeague: 0, faCup: 0, leagueCup: 0, championsLeague: 0 }
  },
  {
    id: 12,
    name: "Crystal Palace",
    shortName: "Palace",
    logo: "https://upload.wikimedia.org/wikipedia/en/a/a2/Crystal_Palace_FC_logo_%282022%29.svg",
    primaryColor: "#1B458F",
    secondaryColor: "#C4122E",
    stadium: "Selhurst Park",
    location: "London, England",
    founded: 1905,
    trophies: { premierLeague: 0, faCup: 0, leagueCup: 0, championsLeague: 0 }
  },
  {
    id: 13,
    name: "Fulham",
    shortName: "Fulham",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Fulham_FC_%28shield%29.svg",
    primaryColor: "#000000",
    secondaryColor: "#CC0000",
    stadium: "Craven Cottage",
    location: "London, England",
    founded: 1879,
    trophies: { premierLeague: 0, faCup: 0, leagueCup: 0, championsLeague: 0 }
  },
  {
    id: 14,
    name: "Wolverhampton Wanderers",
    shortName: "Wolves",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg",
    primaryColor: "#FDB913",
    secondaryColor: "#231F20",
    stadium: "Molineux Stadium",
    location: "Wolverhampton, England",
    founded: 1877,
    trophies: { premierLeague: 0, faCup: 4, leagueCup: 2, championsLeague: 0 }
  },
  {
    id: 15,
    name: "Bournemouth",
    shortName: "Bournemouth",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e5/AFC_Bournemouth_%282013%29.svg",
    primaryColor: "#DA291C",
    secondaryColor: "#000000",
    stadium: "Vitality Stadium",
    location: "Bournemouth, England",
    founded: 1899,
    trophies: { premierLeague: 0, faCup: 0, leagueCup: 0, championsLeague: 0 }
  },
  {
    id: 16,
    name: "Nottingham Forest",
    shortName: "Forest",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e5/Nottingham_Forest_F.C._logo.svg",
    primaryColor: "#DD0000",
    secondaryColor: "#FFFFFF",
    stadium: "City Ground",
    location: "Nottingham, England",
    founded: 1865,
    trophies: { premierLeague: 0, faCup: 2, leagueCup: 4, championsLeague: 2 }
  },
  {
    id: 17,
    name: "Everton",
    shortName: "Everton",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg",
    primaryColor: "#003399",
    secondaryColor: "#FFFFFF",
    stadium: "Goodison Park",
    location: "Liverpool, England",
    founded: 1878,
    trophies: { premierLeague: 0, faCup: 5, leagueCup: 0, championsLeague: 0 }
  },
  {
    id: 18,
    name: "Leicester City",
    shortName: "Leicester",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2d/Leicester_City_crest.svg",
    primaryColor: "#003090",
    secondaryColor: "#FDBE11",
    stadium: "King Power Stadium",
    location: "Leicester, England",
    founded: 1884,
    trophies: { premierLeague: 1, faCup: 1, leagueCup: 3, championsLeague: 0 }
  },
  {
    id: 19,
    name: "Ipswich Town",
    shortName: "Ipswich",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/43/Ipswich_Town.svg",
    primaryColor: "#0033A0",
    secondaryColor: "#FFFFFF",
    stadium: "Portman Road",
    location: "Ipswich, England",
    founded: 1878,
    trophies: { premierLeague: 0, faCup: 1, leagueCup: 0, championsLeague: 0 }
  },
  {
    id: 20,
    name: "Southampton",
    shortName: "Southampton",
    logo: "https://upload.wikimedia.org/wikipedia/en/c/c9/FC_Southampton.svg",
    primaryColor: "#D71920",
    secondaryColor: "#130C0E",
    stadium: "St. Mary's Stadium",
    location: "Southampton, England",
    founded: 1885,
    trophies: { premierLeague: 0, faCup: 1, leagueCup: 0, championsLeague: 0 }
  }
];

export function getTeamById(id: number): Team | undefined {
  return teams.find(team => team.id === id);
}

export function searchTeams(query: string): Team[] {
  const lowerQuery = query.toLowerCase();
  return teams.filter(team =>
    team.name.toLowerCase().includes(lowerQuery) ||
    team.shortName.toLowerCase().includes(lowerQuery)
  );
}
