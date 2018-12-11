import { FeedDay } from 'src/types';

export enum ActionTypes {
  FetchFeed = '[Dashboard] Fetch Feed',
  FetchFeedSuccess = '[ActionTypes] Fetch Feed Success',
  FetchFeedError = '[ActionTypes] Fetch Feed Error',
}

export interface ActionMap {
  [ActionTypes.FetchFeed]: {};
  [ActionTypes.FetchFeedSuccess]: FeedDay[];
  [ActionTypes.FetchFeedError]: {};
}
