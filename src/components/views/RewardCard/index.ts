import { compose, withProps, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import withConfigSizes from '@wrappers/withConfigSizes';
import { showModal } from 'src/state/actions';
import { State } from 'src/state/state';
import { hasUserJoined } from 'src/state/selectors';
import { COMPETITION_DETAILS_PAGE, Modals } from 'src/constants';

import RewardCard, { Props } from './RewardCard';
import messages from './messages';

const mapStateToProps = (state: State) => {
  return {
    isJoined: hasUserJoined(state),
  };
};

const actions = {
  showModal,
};

// TODO@fix types
export default compose<Props, any>(
  injectIntl,
  withRouter,
  connect(
    mapStateToProps,
    actions
  ),
  withHandlers({
    handleClaimReward: ({ reward, showModal }) => () => {
      showModal({
        modalName: Modals.GameFinished,
        data: {
          amount: reward.prize,
          claimId: reward.id,
          currency: reward.currency,
          competitionId: reward.competitionId,
        },
      });
    },
    handleViewLadder: ({ history, reward: { competitionId } }) => () => {
      history.push(`${COMPETITION_DETAILS_PAGE}/${competitionId}`);
    },
  }),
  withProps(({ intl: { formatMessage } }) => ({
    viewLadderDisplayName: formatMessage(messages.rewardCardViewLadder),
    getRewardDisplayName: formatMessage(messages.rewardCardClaim),
    claimedDisplayName: formatMessage(messages.rewardCardClaimed),
    feeDisplayName: formatMessage(messages.rewardCardFee),
    ladderDisplayName: formatMessage(messages.rewardCardLadder),
    onGoingDisplayName: formatMessage(messages.rewardCardOngoing),
    prizeDisplayName: formatMessage(messages.rewardCardPrize),
    startTimeDisplayName: formatMessage(messages.rewardCardStartTime),
    endTimeDisplayName: formatMessage(messages.rewardCardEndTime),
    rankDisplayName: formatMessage(messages.rewardCardRank),
  })),
  withConfigSizes
)(RewardCard);
