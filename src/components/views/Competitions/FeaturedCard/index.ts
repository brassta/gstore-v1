import { compose, withHandlers, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import FeaturedCard from './FeaturedCard';
import messages from './messages';
import { MouseEvent } from 'react';
import { COMPETITION_DETAILS_PAGE, playerJoinStatus } from 'src/constants';
import { withRouter } from 'react-router-dom';
import withConfigSizes from '@wrappers/withConfigSizes';

export default compose<any, any>(
  injectIntl,
  withRouter,
  withHandlers({
    handleCardClick: ({ type, competition, history }) => (e: MouseEvent) => {
      history.push(`${COMPETITION_DETAILS_PAGE}/${competition.id}`);

      e.stopPropagation();
      e.preventDefault();
    },
  }),
  withProps(({ competition, intl: { formatMessage } }) => ({
    competition,
    startTimeDisplayName: formatMessage(messages.featuredCardStartTime),
    bntName:
      competition.playerJoinStatus !== playerJoinStatus.JOINED
        ? formatMessage(messages.featuredCardJoinLadder)
        : formatMessage(messages.competitionHeaderJoined),
  })),
  withConfigSizes
)(FeaturedCard);
