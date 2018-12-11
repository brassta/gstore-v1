import { connect } from 'react-redux';
import { compose, withHandlers, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import { State } from 'src/state/state';
import { hideModal } from 'src/state/actions';

import messages from './messages';
import InsufficientFunds, { Props } from './InsufficientFunds';

const actions = {
  hideModal,
};

const mapStateToProps = (state: State) => ({});

export default compose<Props, {}>(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  withHandlers({
    handleOkClick: ({ hideModal }) => () => {
      hideModal();
    },
  }),
  withProps(({ intl: { formatMessage } }) => ({
    dailyTasksUrl: '#',
    quizzesUrl: '#',
    tournamentsUrl: '#',
    GShareUrl: '#',
    insufficientFundsHeadingDisplayName: formatMessage(
      messages.insufficientFundsHeading
    ),
    insufficientFundsText: messages.insufficientFundsText,
    insufficientFundsDailyTasksDisplayName: formatMessage(
      messages.insufficientFundsDailyTasks
    ),
    insufficientFundsQuizzesDisplayName: formatMessage(
      messages.insufficientFundsQuizzes
    ),
    insufficientFundsTournamentsDisplayName: formatMessage(
      messages.insufficientFundsTournaments
    ),
    insufficientFundsDonateText: messages.insufficientFundsDonateText,
    insufficientFundsJoinLadderTextDisplayName: formatMessage(
      messages.insufficientFundsJoinLadderText
    ),
    insufficientFundsOKDisplayName: formatMessage(messages.insufficientFundsOK),
  }))
)(InsufficientFunds);
