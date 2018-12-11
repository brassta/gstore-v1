import { State as UIState } from './ui/state';
import { State as BalanceState } from './balance/state';
import { State as CompetitionState } from './competition/state';
import { State as DashboardState } from './dashboard/state';
import { State as ProfileState } from './profile/state';
import { State as DoGoodState } from './do-good/state';

export interface State {
  ui: UIState;
  balance: BalanceState;
  competition: CompetitionState;
  dashboard: DashboardState;
  profile: ProfileState;
  doGood: DoGoodState;
}
