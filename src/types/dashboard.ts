import { TaskType, FeedItemType } from 'src/constants';

export interface FeedDay {
  date: Date;
  items: FeedItem[];
}

export interface Task {
  completed: boolean;
  title: string;
  type: TaskType;
}

export interface Announcement {
  title: string;
  text: string;
}

export interface Achievement {
  title: string;
  type: string; // class
  level: number;
}

export interface FeedItem {
  type: FeedItemType;
  item: Task | Announcement | Achievement;
}
