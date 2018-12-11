import { compose, withProps, withStateHandlers, withHandlers } from 'recompose';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';

import { LocalStorage, ACCEPTED_TOS } from 'src/services/localStorage';
import { ESPORTS_PAGE } from 'src/constants';

import messages from './messages';
import AcceptTOS, { Props } from './AcceptTOS';

export default compose<Props, {}>(
  injectIntl,
  withRouter,
  withStateHandlers(
    () => ({
      oldEnough: false,
      acceptedTOS: false,
    }),
    {
      handleAgeChange: () => value => ({
        oldEnough: value,
      }),
      handleAcceptTOSChange: () => value => ({
        acceptedTOS: value,
      }),
    }
  ),
  withHandlers({
    handleAcceptTOSClick: ({ history }) => () => {
      LocalStorage.set(ACCEPTED_TOS, true);
      history.push(ESPORTS_PAGE);
    },
  }),
  withProps(({ intl: { formatMessage } }) => ({
    acceptTOSHeadingDisplayName: formatMessage(messages.acceptTOSHeading),
    acceptTOSTitleDisplayName: formatMessage(messages.acceptTOSTitle),
    acceptTOSTextDisplayName: formatMessage(messages.acceptTOSText),
    acceptTOSAgreeLabelDisplayName: formatMessage(messages.acceptTOSAgreeLabel),
    acceptTOSAgeLabelDisplayName: formatMessage(messages.acceptTOSAgeLabel),
    acceptTOSButtonDisplayName: formatMessage(messages.acceptTOSButton),
  }))
)(AcceptTOS);
