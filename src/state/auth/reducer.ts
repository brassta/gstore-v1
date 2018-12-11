import { createReducer } from 'src/utilities/redux';

import { ActionMap, ActionTypes } from './actions';
import { State, initialState } from './state';

export default createReducer<State, ActionMap>(
  {
    [ActionTypes.SetLocale]: (state, locale): State => ({
      ...state,
      locale,
    }),
  },
  initialState
);
