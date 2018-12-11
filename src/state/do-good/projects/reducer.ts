import { createReducer } from 'src/utilities/redux';

import { ActionMap, ActionTypes } from './actions';
import initialState, { State } from './state';

export default createReducer<State, ActionMap>(
  {
    [ActionTypes.FetchHumanitarianProjects]: (state): State => ({
      ...state,
      fetchProjectsInProgress: true,
    }),
    [ActionTypes.FetchHumanitarianProjectsSuccess]: (
      state,
      payload
    ): State => ({
      ...state,
      projects: payload,
      fetchProjectsInProgress: false,
    }),
    [ActionTypes.FetchHumanitarianProjectsError]: (state): State => ({
      ...state,
      fetchProjectsInProgress: false,
    }),
  },
  initialState
);
