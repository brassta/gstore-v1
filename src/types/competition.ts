export interface Competition {
  id: string;
  name: string;
  prizes: Prize[];
  prizePool: number;
  timeUntil: string;
  entryFee: number;
  coverImage: string;
  cardImage: string;
  playerJoinStatus: string;
  feeCurrency: string;
  prizeCurrency: string;
  description: string;
  isOngoing?: boolean;
  gameUrl: string;
  startDate: string;
  endDate: string;
  hasExpired: boolean;
  featured: boolean;
  rank?: number;
}

export interface Ranking {
  playerName: string;
  score: number;
  reward: number;
  position: number;
  gnationId: string;
  currency: string;
}

export interface Player {
  avatar?: string;
  username: string;
  id: string;
}

export interface Prize {
  from: number;
  to: number;
  prize: number;
}

export interface Reward {
  id: number;
  competitionId: number;
  prize: number;
  currency: string;
  rank: number;
  status: string;
}
