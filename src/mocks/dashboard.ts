import * as faker from 'faker';
import { subDays } from 'date-fns';

import { TaskType, FeedItemType } from 'src/constants';

export const mockFeed = () => [
  {
    date: new Date(),
    items: [
      {
        type: FeedItemType.TASK,
        item: {
          type: TaskType.DAILY_CHECK_IN,
          title: faker.lorem.sentence(5),
          completed: false,
        },
      },
      {
        type: FeedItemType.ANNOUNCEMENT,
        item: {
          title: faker.lorem.sentence(5),
          text: faker.lorem.sentence(30),
        },
      },
    ],
  },
  {
    date: subDays(new Date(), 1),
    items: [
      {
        type: FeedItemType.TASK,
        item: {
          type: TaskType.DAILY_CHECK_IN,
          title: faker.lorem.sentence(5),
          completed: true,
        },
      },
      ...mockFeedTasks(Math.round((Math.random() * 10) / 2)),
      {
        type: FeedItemType.ACHIEVEMENT,
        item: {
          title: 'Warrior lvl 5!',
          type: 'Warrior',
          level: 5,
        },
      },
    ],
  },
  ...Array.from({ length: 3 }, () => ({
    date: faker.date.past(),
    items: [
      {
        type: FeedItemType.TASK,
        item: {
          type: TaskType.DAILY_CHECK_IN,
          title: faker.lorem.sentence(5),
          completed: true,
        },
      },
      ...mockFeedTasks(Math.round((Math.random() * 10) / 2)),
    ],
  })),
];

export const mockFeedTasks = (length: number) =>
  Array.from({ length }, () => ({
    type: FeedItemType.TASK,
    item: {
      type: TaskType.TASK,
      title: faker.lorem.sentence(5),
      completed: false,
    },
  }));
