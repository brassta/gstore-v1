import { createAction } from 'src/utilities/redux';

import { ActionMap, ActionTypes } from './actions';

export const showNavigationSidebar = () =>
  createAction<ActionMap, ActionTypes.ShowNavigationSidebar>(
    ActionTypes.ShowNavigationSidebar
  )({});

export const hideNavigationSidebar = () =>
  createAction<ActionMap, ActionTypes.HideNavigationSidebar>(
    ActionTypes.HideNavigationSidebar
  )({});

export const showAccountSettings = () =>
  createAction<ActionMap, ActionTypes.ShowAccountSettings>(
    ActionTypes.ShowAccountSettings
  )({});

export const hideAccountSettings = () =>
  createAction<ActionMap, ActionTypes.HideAccountSettings>(
    ActionTypes.HideAccountSettings
  )({});

export const showModal = createAction<ActionMap, ActionTypes.ShowModal>(
  ActionTypes.ShowModal
);

export const hideModal = () =>
  createAction<ActionMap, ActionTypes.HideModal>(ActionTypes.HideModal)({});
