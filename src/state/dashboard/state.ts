import { FeedDay } from 'src/types';

export interface State {
  fetchFeedInProgress: boolean;
  feedItems: FeedDay[];
}

export const initialState: State = {
  fetchFeedInProgress: false,
  feedItems: [],
};
