// TODO@djsimovic: Refactor this file

import {
  isBefore,
  isAfter,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns';

import angryBirdsImage from '@images/mocks/angry-birds.png';
import { Competition, Ranking, Prize, Product } from 'src/types';

import { GAME_URL, currencyMap } from 'src/constants';

interface CompetitionResponse {
  id: string;
  name: string;
  totalPrizePool: number;
  startDate: string;
  endDate: string;
  images: any;
  playerJoinStatus: string;
  description: string;
  gameSlug: string;
  entranceFee: number;
  prizeCurrency: string;
  feeCurrency: string;
  featured: boolean;
  prizes: Prize[];
}

interface ProductResponse {
  name?:string,
  id?:string
}

const parseTimeUntil = (date: string): string => {
  const days = differenceInDays(new Date(date), new Date());

  let hours = differenceInHours(new Date(date), new Date());
  hours = Math.floor(hours - days * 24);

  let minutes = differenceInMinutes(new Date(date), new Date());
  minutes = Math.floor(minutes - (days * 24 * 60 + hours * 60));

  let seconds = differenceInSeconds(new Date(date), new Date());
  seconds = Math.floor(
    seconds - (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60)
  );

  const timeUnits = {
    d: days,
    h: hours,
    m: minutes,
    s: seconds,
  };

  return Object.entries(timeUnits)
    .reduce(
      (acc, [unit, value]) => (value > 0 ? acc + ` ${value}${unit}` : acc),
      ''
    )
    .trim();
};

export const parseCompetitionTimeUntil = (dateUntil: string): string => {
  if (isBefore(new Date(), new Date(dateUntil))) {
    return parseTimeUntil(dateUntil);
  }

  return '0d 0h 0m 0s';
};

export const parseCompetitionTimeUntilStartOrEnd = (
  startDate: string,
  endDate: string
): string =>
  parseIsOngoing(startDate, endDate)
    ? parseCompetitionTimeUntil(endDate)
    : parseCompetitionTimeUntil(startDate);

const parseCompetitionImage = (
  competition: CompetitionResponse,
  type: string
): string => {
  try {
    return competition.images.find((x: any) => x.type === type).url;
  } catch (err) {
    return angryBirdsImage;
  }
};

export const parseIsOngoing = (startDate: string, endDate: string) =>
  isAfter(new Date(), new Date(startDate)) &&
  isBefore(new Date(), new Date(endDate));
export const parseHasExpired = (endDate: string) =>
  isAfter(new Date(), new Date(endDate));

export const mapResponseToCompetition = (
  competition: CompetitionResponse
): Competition => {
  return {
    id: competition.id,
    name: competition.name,
    prizes: competition.prizes,
    prizePool: competition.totalPrizePool,
    timeUntil: parseCompetitionTimeUntilStartOrEnd(
      competition.startDate,
      competition.endDate
    ),
    prizeCurrency: currencyMap[competition.prizeCurrency],
    feeCurrency: currencyMap[competition.feeCurrency],
    startDate: competition.startDate,
    endDate: competition.endDate,
    playerJoinStatus: competition.playerJoinStatus,
    cardImage: parseCompetitionImage(competition, 'CARD'),
    coverImage: parseCompetitionImage(competition, 'COVER'),
    description: competition.description,
    isOngoing: parseIsOngoing(competition.startDate, competition.endDate),
    hasExpired: parseHasExpired(competition.endDate),
    // TODO@all Remove this ugly hardcoded URL
    gameUrl: `${GAME_URL}/${competition.gameSlug}`,
    entryFee: competition.entranceFee,
    featured: competition.featured,
  };
};

export const mapResponseToProduct = (product:ProductResponse):Product =>{
  return{
    id:product.id,
    name:product.name
  }
}

interface RankingResponse {
  gnationId: string;
  points: number;
  amount: number;
  position: number;
  username: string;
  currency: string;
}

export const mapResponseToRanking = (ranking: RankingResponse): Ranking => {
  return {
    playerName: ranking.username,
    score: ranking.points,
    reward: ranking.amount,
    position: ranking.position,
    gnationId: ranking.gnationId,
    currency: currencyMap[ranking.currency],
  };
};
