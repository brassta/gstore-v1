import { createAction } from 'src/utilities/redux';

import { ActionMap, ActionTypes } from './actions';

export const logout = createAction<ActionMap, ActionTypes.Logout>(
  ActionTypes.Logout
);

export const setLocale = createAction<ActionMap, ActionTypes.SetLocale>(
  ActionTypes.SetLocale
);
