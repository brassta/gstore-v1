import { connect } from 'react-redux';
import { compose, withHandlers, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import { State } from 'src/state/state';
import {
  joinCompetition,
  hideModal,
  clearJoinCompetitionState,
} from 'src/state/actions';
import {
  isJoinCompetitionError,
  isJoinCompetitionInProgress,
} from 'src/state/selectors';
import withConfigSizes from '@wrappers/withConfigSizes';

import messages from './messages';
import JoinCompetition, { Props } from './JoinCompetition';

const actions = {
  joinCompetition,
  hideModal,
  clearJoinCompetitionState,
};

const mapStateToProps = (state: State) => ({
  joinCompetitionInProgress: isJoinCompetitionInProgress(state),
  joinCompetitionError: isJoinCompetitionError(state),
});

export default compose<Props, {}>(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  withHandlers({
    handleJoinClick: ({ joinCompetition, competitionId }) => () => {
      joinCompetition({ competitionId });
    },
    handleCancelClick: ({ hideModal, clearJoinCompetitionState }) => () => {
      hideModal();
      clearJoinCompetitionState();
    },
    handleOkClick: ({ hideModal, clearJoinCompetitionState }) => () => {
      hideModal();
      clearJoinCompetitionState();
    },
  }),
  withProps(({ intl: { formatMessage } }) => ({
    joinCompetitionHeadingDisplayName: formatMessage(
      messages.joinCompetitionHeading
    ),
    joinCompetitionAreSureDisplayName: formatMessage(
      messages.joinCompetitionAreSure
    ),
    joinCompetitionButtonJoinDisplayName: formatMessage(
      messages.joinCompetitionButtonJoin
    ),
    joinCompetitionButtonCancelDisplayName: formatMessage(
      messages.joinCompetitionButtonCancel
    ),
    joinCompetitionAreSurePayIn: messages.joinCompetitionAreSurePayIn,
    joinCompetitionErrorHeadingDisplayName: formatMessage(
      messages.joinCompetitionErrorHeading
    ),
    joinCompetitionErrorTextDisplayName: formatMessage(
      messages.joinCompetitionErrorText
    ),
    joinCompetitionButtonErrorDisplayName: formatMessage(
      messages.joinCompetitionErrorButton
    ),
  })),
  withConfigSizes
)(JoinCompetition);
