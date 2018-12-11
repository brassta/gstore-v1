import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import CompetitionInfo from './CompetitionInfo';
import messages from './messages';

export default compose(
  injectIntl,
  withProps(({ intl: { formatMessage } }) => ({
    prizePoolHeaderDisplayName: formatMessage(
      messages.competitionInfoPrizePoolHeader
    ),
    placeColumnDisplayName: formatMessage(messages.competitionInfoPlaceColumn),
    prizeColumnDisplayName: formatMessage(messages.competitionInfoPrizeColumn),
    competitionInfoCellPlaceDisplayName: formatMessage(
      messages.competitionInfoCellPlace
    ),
  }))
)(CompetitionInfo);
