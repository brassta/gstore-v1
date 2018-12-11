import { createAction } from 'src/utilities/redux';

import { ActionMap, ActionTypes } from './actions';

// TODO@martins refactor action creators when logic is defined
export const donate = createAction<ActionMap, ActionTypes.Donate>(
  ActionTypes.Donate
);

export const donateSuccess = createAction<ActionMap, ActionTypes.DonateSuccess>(
  ActionTypes.DonateSuccess
);

export const donateError = createAction<ActionMap, ActionTypes.DonateError>(
  ActionTypes.DonateError
);

export const clearDonateState = createAction<
  ActionMap,
  ActionTypes.ClearDonateState
>(ActionTypes.ClearDonateState);
