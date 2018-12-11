import { State } from './state';

export const getFeedItems = (dashboard: State) => dashboard.feedItems;
export const isFetchFeedInProgress = (dashboard: State) =>
  dashboard.fetchFeedInProgress;
