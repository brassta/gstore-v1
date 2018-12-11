import { compose, withProps, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { injectIntl } from 'react-intl';

import { fetchCompetition } from 'src/state/actions';
import {
  getSelectedCompetition,
  isFetchCompetitionInProgress,
  isGamePlayable,
} from 'src/state/selectors';
import { State } from 'src/state/state';

import messages from './messages';
import CompetitionDetails, { Props } from './CompetitionDetails';

const mapStateToProps = (state: State) => ({
  competition: getSelectedCompetition(state),
  fetchCompetitionInProgress: isFetchCompetitionInProgress(state),
  isPlayable: isGamePlayable(state),
});

const actions = {
  fetchCompetition,
};

export default compose(
  injectIntl,
  withRouter,
  connect(
    mapStateToProps,
    actions
  ),
  lifecycle<Props & typeof actions, {}>({
    componentDidMount() {
      const {
        fetchCompetition,
        match: {
          params: { competitionId },
        },
      } = this.props;

      fetchCompetition({ competitionId });
    },
  }),
  withProps((props: any) => ({
    rankingDisplayName: props.intl.formatMessage(
      messages.competitionDetailsRanking
    ),
    infoDisplayName: props.intl.formatMessage(messages.competitionDetailsInfo),
    participantsDisplayName: props.intl.formatMessage(
      messages.competitionDetailsParticipants
    ),
    competitionDetailsRulesDisplayName: props.intl.formatMessage(
      messages.competitionDetailsRules
    ),
  }))
)(CompetitionDetails);
