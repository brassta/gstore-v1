import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import {
  claimReward,
  hideModal,
  clearClaimRewardState,
} from 'src/state/actions';
import {
  isClaimRewardError,
  isClaimRewardInProgress,
} from 'src/state/selectors';
import { State } from 'src/state/state';

import messages from './messages';
import GameFinished, { Props } from './GameFinished';

const mapStateToProps = (state: State) => ({
  inProgress: isClaimRewardInProgress(state),
  isError: isClaimRewardError(state),
});

const actions = {
  claimReward,
  hideModal,
  clearClaimRewardState,
};

export default compose<Props, {}>(
  withRouter,
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({
    form: 'claimReward',
  }),
  withProps(({ amount }) => ({
    hasPrize: amount > 0,
  })),
  withProps(({ intl: { formatMessage }, hasPrize }) => ({
    headerDisplayName: formatMessage(messages.gameFinishedHeader),
    gameFinishedErrorMessage: formatMessage(messages.gameFinishedErrorMessage),
    gameFinishedWinnerMessage: messages.gameFinishedWinnerMessage,
    gameFinishedLoserMessageDisplayName: formatMessage(
      messages.gameFinishedLoserMessage
    ),
    gameFinishedRank: messages.gameFinishedRank,
    gameFinishedMgoAddressMessage: formatMessage(
      messages.gameFinishedMgoAddressMessage
    ),
    yourAddressMessage: formatMessage(messages.yourAddressMessage),
    buttonDisplayName: formatMessage(
      hasPrize
        ? messages.gameFinishedGetAction
        : messages.gameFinishedCheckAction
    ),
  }))
)(GameFinished);
