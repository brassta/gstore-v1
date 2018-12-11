import { State as ProjectsState } from './projects/state';
import { State as DonateState } from './donate/state';

export interface State {
  projects: ProjectsState;
  donate: DonateState;
}
