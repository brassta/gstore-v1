import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import withConfigSizes from '@wrappers/withConfigSizes';

import Participant from './Participant';
import messages from './messages';

export default compose(
  injectIntl,
  withProps(({ intl: { formatMessage } }) => ({
    playerDisplayName: formatMessage(messages.participantPlayer),
  })),
  withConfigSizes
)(Participant);
