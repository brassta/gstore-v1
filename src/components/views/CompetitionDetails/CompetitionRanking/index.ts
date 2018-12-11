import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import CompetitionRanking from './CompetitionRanking';
import messages from './messages';

export default compose(
  injectIntl,
  withProps(({ intl: { formatMessage } }) => ({
    playerColumnDisplayName: formatMessage(
      messages.competitionRankingPlayerColumn
    ),
    scoreColumnDisplayName: formatMessage(
      messages.competitionRankingScoreColumn
    ),
    rewardColumnDisplayName: formatMessage(
      messages.competitionRankingRewardColumn
    ),
  }))
)(CompetitionRanking);
