import { combineReducers } from 'redux';

import { State as CombinedState } from './state';
import ui from './ui/reducer';
import balance from './balance/reducer';
import competition from './competition/reducer';
import dashboard from './dashboard/reducer';
import profile from './profile/reducer';
import doGood from './do-good/reducer';

export default combineReducers<CombinedState>({
  ui,
  balance,
  competition,
  dashboard,
  profile,
  doGood,
});
