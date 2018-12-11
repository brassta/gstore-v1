import { createReducer } from 'src/utilities/redux';

import { ActionMap, ActionTypes } from './actions';
import { State, initialState } from './state';

export default createReducer<State, ActionMap>(
  {
    [ActionTypes.ShowNavigationSidebar]: (state): State => ({
      ...state,
      isNavigationSidebarOpen: true,
    }),
    [ActionTypes.HideNavigationSidebar]: (state): State => ({
      ...state,
      isNavigationSidebarOpen: false,
    }),
    [ActionTypes.ShowAccountSettings]: (state): State => ({
      ...state,
      isAccountSettingsPanelOpen: true,
    }),
    [ActionTypes.HideAccountSettings]: (state): State => ({
      ...state,
      isAccountSettingsPanelOpen: false,
    }),
    [ActionTypes.ShowModal]: (state, payload): State => ({
      ...state,
      modalMetadata: payload,
    }),
    [ActionTypes.HideModal]: (state, payload): State => ({
      ...state,
      modalMetadata: null,
    }),
  },
  initialState
);
