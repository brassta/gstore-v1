import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import { State } from 'src/state/state';

import messages from './messages';
import DashboardAchievementCard, {
  InnerProps,
  OuterProps,
} from './DashboardAchievementCard';

const actions = {};

const mapStateToProps = (state: State) => ({});

export default compose<InnerProps, OuterProps>(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  withProps(({ intl: { formatMessage } }) => ({
    achievementUnlockedDisplayName: formatMessage(messages.achievementUnlocked),
    dailyTaskDisplayName: formatMessage(messages.dailyTask),
  }))
)(DashboardAchievementCard);
