import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import GameFrame, { Props } from './GameFrame';
import messages from './messages';

type OuterProps = Pick<
  Props,
  Exclude<keyof Props, 'toggleFullScreenDisplayName'>
>;

export default compose<Props, OuterProps>(
  injectIntl,
  withProps(({ intl }) => ({
    toggleFullScreenDisplayName: intl.formatMessage(
      messages.gameFrameToggleFullscreen
    ),
  }))
)(GameFrame);
