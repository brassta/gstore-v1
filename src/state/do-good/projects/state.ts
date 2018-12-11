import { HumanitarianProject } from 'src/types';

export interface State {
  projects: HumanitarianProject[];
  fetchProjectsInProgress: boolean;
}

const initialState: State = {
  projects: [],
  fetchProjectsInProgress: false,
};

export default initialState;
