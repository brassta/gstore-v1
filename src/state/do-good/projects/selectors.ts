import { State } from './state';

export const getHumanitarianProjects = (projects: State) => projects.projects;
export const isFetchProjectsInProgress = (projects: State) =>
  projects.fetchProjectsInProgress;
