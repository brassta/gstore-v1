import { createAction } from 'src/utilities/redux';

import { ActionMap, ActionTypes } from './actions';

export const fetchGoldBalance = () =>
  createAction<ActionMap, ActionTypes.FetchGoldBalance>(
    ActionTypes.FetchGoldBalance
  )({});

export const fetchGoldBalanceSuccess = createAction<
  ActionMap,
  ActionTypes.FetchGoldBalanceSuccess
>(ActionTypes.FetchGoldBalanceSuccess);

export const fetchGoldBalanceError = () =>
  createAction<ActionMap, ActionTypes.FetchGoldBalanceError>(
    ActionTypes.FetchGoldBalanceError
  )({});
