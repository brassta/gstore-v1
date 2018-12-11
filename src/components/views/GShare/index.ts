import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import messages from './messages';
import GShare, { Props } from './GShare';

export default compose<Props, {}>(
  injectIntl,
  withProps(({ intl: { formatMessage } }) => ({
    headerTitleDisplayName: formatMessage(messages.headerTitle),
    gshareTextDisplayName: formatMessage(messages.gshareText),
    footerTitleDisplayName: formatMessage(messages.footerTitle),
    downloadTextDisplayName: formatMessage(messages.downloadText),
    windowsTextDisplayName: formatMessage(messages.windowsText),
    linuxTextDisplayName: formatMessage(messages.linuxText),
    macosTextDisplayName: formatMessage(messages.macosText),
  }))
)(GShare);
