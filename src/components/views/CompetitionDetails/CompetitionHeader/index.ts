import { compose, withProps, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

import withConfigSizes from '@wrappers/withConfigSizes';
import { showModal, clearJoinCompetitionState } from 'src/state/actions';
import { getGoldBalance, hasUserJoined } from 'src/state/selectors';
import { State } from 'src/state/state';
import { Modals } from 'src/constants';

import CompetitionHeader from './CompetitionHeader';
import messages from './messages';

const mapStateToProps = (state: State) => {
  return {
    isJoined: hasUserJoined(state),
    goldBalance: getGoldBalance(state),
  };
};

const actions = {
  showModal,
};

export default compose(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  withHandlers({
    handleJoin: ({ showModal, id, entryFee, goldBalance }) => () => {
      if (entryFee === null || goldBalance >= entryFee) {
        showModal({
          modalName: Modals.JoinCompetition,
          data: {
            competitionId: id,
            entryFee,
          },
          onHideActions: [clearJoinCompetitionState()],
        });
      } else {
        showModal({
          modalName: Modals.InsufficientFunds,
          data: { isForDonation: false },
        });
      }
    },
    handlePlay: () => () => {
      // tslint:disable-next-line
      console.log('handle play');
    },
    handlePractice: () => () => {
      // tslint:disable-next-line
      console.log('handle practice');
    },
  }),
  withProps(({ intl: { formatMessage } }) => ({
    nameDisplayName: formatMessage(messages.competitionHeaderName),
    prizePoolDisplayName: formatMessage(messages.competitionHeaderPrizePool),
    startTimeDisplayName: formatMessage(messages.competitionHeaderStartTime),
    endTimeDisplayName: formatMessage(messages.competitionHeaderEndTime),
    entryFeeDisplayName: formatMessage(messages.competitionHeaderEntryFee),
    playLadderDisplayName: formatMessage(messages.competitionHeaderPlayLadder),
    joinLadderDisplayName: formatMessage(messages.competitionHeaderJoinLadder),
    playAndWinLadderDisplayName: formatMessage(
      messages.competitionHeaderPlayAndWin
    ),
    joinedLadderDisplayName: formatMessage(
      messages.competitionHeaderJoinedLadder
    ),
    practiceDisplayName: formatMessage(messages.competitionHeaderPractice),
    endedDisplayName: formatMessage(messages.competitionHeaderEnded),
    ongoingDisplayName: formatMessage(messages.competitionHeaderOngoing),
    completedDisplayName: formatMessage(messages.competitionHeaderCompleted),
  })),
  withConfigSizes
)(CompetitionHeader);
