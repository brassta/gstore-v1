import { injectIntl } from 'react-intl';
import { compose, withProps } from 'recompose';

import Footer, { InnerProps, OuterProps } from './Footer';
import messages from './messages';

export default compose<InnerProps, OuterProps>(
  injectIntl,
  withProps(({ intl: { formatMessage } }) => ({
    copyright: formatMessage(messages.copyright, {
      year: new Date().getFullYear(),
    }),
    publisher: formatMessage(messages.publisher),
    tos: formatMessage(messages.tos),
    privacy: formatMessage(messages.privacy),
  }))
)(Footer);
