import { HumanitarianProject } from 'src/types';

export enum ActionTypes {
  FetchHumanitarianProjects = '[Humanitarian Project] Fetch Projects',
  FetchHumanitarianProjectsSuccess = '[Humanitarian Project] Fetch Projects Success',
  FetchHumanitarianProjectsError = '[Humanitarian Project] Fetch Projects Error',
}

export interface ActionMap {
  [ActionTypes.FetchHumanitarianProjects]: {};
  [ActionTypes.FetchHumanitarianProjectsSuccess]: HumanitarianProject[];
  [ActionTypes.FetchHumanitarianProjectsError]: {};
}
