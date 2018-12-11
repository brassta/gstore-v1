import { createReducer } from 'src/utilities/redux';

import { ActionMap, ActionTypes } from './actions';
import { State, initialState } from './state';

export default createReducer<State, ActionMap>(
  {
    [ActionTypes.FetchFeed]: (state): State => ({
      ...state,
      fetchFeedInProgress: true,
    }),
    [ActionTypes.FetchFeedSuccess]: (state, payload): State => ({
      ...state,
      fetchFeedInProgress: false,
      feedItems: payload,
    }),
    [ActionTypes.FetchFeedError]: (state): State => ({
      ...state,
      fetchFeedInProgress: false,
    }),
  },
  initialState
);
