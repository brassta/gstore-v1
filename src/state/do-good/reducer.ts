import { combineReducers } from 'redux';

import projects from './projects/reducer';
import donate from './donate/reducer';

import { State as CombinedState } from './state';

export default combineReducers<CombinedState>({
  projects,
  donate,
});
