import * as faker from 'faker';

const getRandomNumber = (from: number, to: number) =>
  Math.floor(Math.floor(Math.random() * (to - from + 1) + from));

export const mockHumanitarianProjects = (length: number) =>
  Array.from({ length }, () => ({
    name: faker.lorem.sentence(),
    title: faker.lorem.sentence(),
    text: faker.lorem.paragraph(2),
    learnMoreLink: '#',
    goal: getRandomNumber(6, 12) * 1000,
    donated: getRandomNumber(0, 12000),
    coverImageUrl: faker.image[
      ['nature', 'food', 'people', 'animals'][getRandomNumber(0, 2)]
    ](), // ugly code but since it's a mock...
  }));
