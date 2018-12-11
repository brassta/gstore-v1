import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import { State } from 'src/state/state';

import messages from './messages';
import Competitions, { Props } from './Competitions';

const actions = {};

const mapStateToProps = (state: State) => ({});

export default compose<Props, {}>(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  withProps(({ intl: { formatMessage } }) => ({
    activeTournamentsDisplayName: formatMessage(messages.activeTournaments),
    myTournamentsDisplayName: formatMessage(messages.myTournaments),
    myRewardsDisplayName: formatMessage(messages.myRewards),
  }))
)(Competitions);
