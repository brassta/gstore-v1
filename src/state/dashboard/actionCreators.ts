import { createAction } from 'src/utilities/redux';

import { ActionMap, ActionTypes } from './actions';

export const fetchFeed = () =>
  createAction<ActionMap, ActionTypes.FetchFeed>(ActionTypes.FetchFeed)({});

export const fetchFeedSuccess = createAction<
  ActionMap,
  ActionTypes.FetchFeedSuccess
>(ActionTypes.FetchFeedSuccess);

export const fetchFeedError = () =>
  createAction<ActionMap, ActionTypes.FetchFeedError>(
    ActionTypes.FetchFeedError
  )({});
