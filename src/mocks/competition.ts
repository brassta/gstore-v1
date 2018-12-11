import * as faker from 'faker';

import { Competition, Ranking, Player } from 'src/types';

import angryBirdsImage from '@images/mocks/angry-birds.png';

export const mockRankings = (length: number): Ranking[] =>
  Array.from({ length }, () => ({
    playerName: faker.name.firstName(),
    score: faker.random.number({ min: 0, max: 50000 }),
    reward: faker.random.number({ min: 0, max: 5000 }),
    position: faker.random.number({ min: 0, max: 100 }),
    gnationId: faker.random.uuid(),
    currency: faker.random.word(),
  }));

export const mockCompetitions = (length: number): Competition[] =>
  Array.from({ length }, () => ({
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    gameUrl:
      '//game-cdn.poki.com/v16/headsarenasoccerallstars/index.html?ref=458768&url_referrer=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fheads-arena-soccer-all-stars',
    prizePool: faker.random.number({ min: 1000, max: 15000, precision: 1000 }),
    timeUntil: `${faker.random.number({
      min: 0,
      max: 30,
      precision: 1,
    })}d ${faker.random.number({
      min: 1,
      max: 23,
      precision: 1,
    })}h ${faker.random.number({ min: 1, max: 59, precision: 1 })}s`,
    entryFee: faker.random.number({ min: 10, max: 1000, precision: 10 }),
    prizeCurrency: 'MGO',
    feeCurrency: 'GN_GOLD',
    cardImage: angryBirdsImage,
    coverImage: angryBirdsImage,
    playerJoinStatus: faker.random.word(),
    description: faker.lorem.paragraph(3),
    isOngoing: faker.random.boolean(),
    startDate: faker.date.soon().toDateString(),
    endDate: faker.date.soon().toDateString(),
    hasExpired: faker.random.boolean(),
    prizes: [],
    featured: true,
  }));

export const mockPlayers = (length: number): Player[] =>
  Array.from({ length }, () => ({
    avatar: faker.image.avatar(),
    username: faker.name.firstName(),
    id: faker.random.uuid(),
  }));
