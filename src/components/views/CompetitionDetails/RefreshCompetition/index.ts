import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import RefreshCompetition from './RefreshCompetition';
import messages from './messages';

export default compose<any, any>(
  injectIntl,
  withProps(({ intl: { formatMessage } }) => ({
    isRefreshInProgress: false,
    refreshListText: formatMessage(messages.refreshListText),
  }))
)(RefreshCompetition);
