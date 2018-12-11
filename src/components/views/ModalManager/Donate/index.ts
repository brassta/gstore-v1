import { connect } from 'react-redux';
import { compose, withHandlers, withProps, withState } from 'recompose';
import { injectIntl } from 'react-intl';

import withConfigSizes from '@wrappers/withConfigSizes';

import {
  getGoldBalance,
  getDonation,
  isDonateSuccess,
  isDonateInProgress,
  isDonateError,
} from 'src/state/selectors';
import { State } from 'src/state/state';
import { donate, clearDonateState, hideModal } from 'src/state/actions';

import messages from './messages';
import Donate, { Props } from './Donate';

const actions = {
  donate,
  clearDonateState,
  hideModal,
};

const mapStateToProps = (state: State) => ({
  goldBalance: getGoldBalance(state),
  isDonateInProgress: isDonateInProgress(state),
  isDonateSuccess: isDonateSuccess(state),
  isDonateError: isDonateError(state),
  donation: getDonation(state),
});

export default compose<Props, {}>(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  withState('donationAmount', 'setDonationAmount', 100),
  withHandlers({
    handleDonateClick: ({ donate, donationAmount, projectId }) => () => {
      donate({ amount: donationAmount, projectId });
    },
    handleDonateOkClick: ({ hideModal, clearDonateState }) => () => {
      clearDonateState();
      hideModal();
    },
    handleSliderChange: ({ setDonationAmount }) => (amount: number) => {
      setDonationAmount(amount);
    },
  }),
  withProps(({ intl: { formatMessage }, projectName }) => ({
    donateHeadingDisplayName: formatMessage(messages.donateHeading, {
      projectName,
    }),
    donateButtonTextDisplayName: formatMessage(messages.donateButtonText),
    donateText: messages.donateText,
    donateSuccessHeadingDisplayName: formatMessage(
      messages.donateSuccessHeading
    ),
    donateSuccessText: messages.donateSuccessText,
    donateSuccessButtonTextDisplayName: formatMessage(
      messages.donateSuccessButtonText
    ),
    donateErrorHeadingDisplayName: formatMessage(messages.donateErrorHeading),
    donateErrorText: messages.donateErrorText,
    donateErrorButtonTextDisplayName: formatMessage(
      messages.donateErrorButtonText
    ),
  })),
  withConfigSizes
)(Donate);
