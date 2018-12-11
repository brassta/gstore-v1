import { createReducer } from 'src/utilities/redux';

import { ActionMap, ActionTypes } from './actions';
import { State, initialState } from './state';

export default createReducer<State, ActionMap>(
  {
    [ActionTypes.FetchGoldBalance]: (state): State => ({
      ...state,
      goldBalanceInProgress: true,
    }),
    [ActionTypes.FetchGoldBalanceSuccess]: (
      state,
      { availableBalance, accountId }
    ): State => ({
      ...state,
      goldBalanceInProgress: false,
      goldBalance: availableBalance,
      goldAccountId: accountId,
    }),
    [ActionTypes.FetchGoldBalanceError]: (state): State => ({
      ...state,
      goldBalanceInProgress: false,
    }),
  },
  initialState
);
