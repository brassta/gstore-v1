import { createAction } from 'src/utilities/redux';

import { ActionMap, ActionTypes } from './actions';

export const fetchHumanitarianProjects = () =>
  createAction<ActionMap, ActionTypes.FetchHumanitarianProjects>(
    ActionTypes.FetchHumanitarianProjects
  )({});

export const fetchHumanitarianProjectsSuccess = createAction<
  ActionMap,
  ActionTypes.FetchHumanitarianProjectsSuccess
>(ActionTypes.FetchHumanitarianProjectsSuccess);

export const fetchHumanitarianProjectsError = () =>
  createAction<ActionMap, ActionTypes.FetchHumanitarianProjectsError>(
    ActionTypes.FetchHumanitarianProjectsError
  )({});
