import * as faker from 'faker';

export const mockProfile = () => ({
  name: faker.name.findName(),
  email: faker.internet.exampleEmail(),
  alias: faker.internet.userName(),
  avatar: faker.image.avatar(),
  cover: faker.image.abstract(),
  rank: faker.random.number({ min: 0, max: 10 }),
  matches: faker.random.number({ min: 0, max: 1000 }),
  wins: faker.random.number({ min: 0, max: 1000 }),
  achievements: faker.random.number({ min: 0, max: 100 }),
  donations: parseFloat(faker.finance.amount()),
});
