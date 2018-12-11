import { MouseEvent } from 'react';
import { compose, withProps, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import { injectIntl } from 'react-intl';

import withConfigSizes from '@wrappers/withConfigSizes';
import { COMPETITION_DETAILS_PAGE } from 'src/constants';

import CompetitionCard from './CompetitionCard';
import messages from './messages';

export default compose<any, any>(
  injectIntl,
  withRouter,
  withHandlers({
    handleClick: ({ type, competition, history }) => (e: MouseEvent) => {
      history.push(`${COMPETITION_DETAILS_PAGE}/${competition.id}`);

      e.stopPropagation();
      e.preventDefault();
    },
  }),
  withProps(({ intl: { formatMessage } }) => ({
    viewLadderDisplayName: formatMessage(messages.competitionCardViewLadder),
    freeToPlayDisplayName: formatMessage(messages.competitionCardFeeToPlay),
    ladderDisplayName: formatMessage(messages.competitionCardLadder),
    onGoingDisplayName: formatMessage(messages.competitionCardOngoing),
    prizePoolDisplayName: formatMessage(messages.competitionCardPrizePool),
    startTimeDisplayName: formatMessage(messages.competitionCardStartTime),
    endTimeDisplayName: formatMessage(messages.competitionCardEndTime),
    rankDisplayName: formatMessage(messages.competitionCardRank),
  })),
  withConfigSizes
)(CompetitionCard);
