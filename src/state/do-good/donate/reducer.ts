import { createReducer } from 'src/utilities/redux';

import { ActionMap, ActionTypes } from './actions';
import initialState, { State } from './state';

export default createReducer<State, ActionMap>(
  {
    [ActionTypes.Donate]: (state, payload): State => ({
      ...state,
      donateInProgress: true,
      donation: payload,
    }),
    [ActionTypes.DonateSuccess]: (state): State => ({
      ...state,
      donateInProgress: false,
      donateSuccess: true,
    }),
    [ActionTypes.DonateError]: (state): State => ({
      ...state,
      donateInProgress: false,
      donateError: true,
    }),
    [ActionTypes.ClearDonateState]: () => ({
      ...initialState,
    }),
  },
  initialState
);
