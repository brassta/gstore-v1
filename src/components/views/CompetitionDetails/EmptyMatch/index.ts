import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import EmptyMatch from './EmptyMatch';
import messages from './messages';

export default compose(
  injectIntl,
  withProps(({ intl: { formatMessage } }) => ({
    noMatchesHeaderDisplayName: formatMessage(messages.emptyMatchHeader),
    noMatchesText1: formatMessage(messages.emptyMatchText1),
    noMatchesText2: formatMessage(messages.emptyMatchText2),
  }))
)(EmptyMatch);
