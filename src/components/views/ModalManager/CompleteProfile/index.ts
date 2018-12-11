import { connect } from 'react-redux';
import { compose, withHandlers, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import { State } from 'src/state/state';
import { hideModal } from 'src/state/ui/actionCreators';

import messages from './messages';
import CompleteProfile, { Props } from './CompleteProfile';

const actions = {
  hideModal,
};

const mapStateToProps = (state: State) => ({
  amountGold: 50, // TODO@martins remove mock
});

export default compose<Props, {}>(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  withHandlers({
    handleOkClick: ({ hideModal }) => () => {
      hideModal();
    },
  }),
  withProps(({ intl: { formatMessage }, amountGold }) => ({
    completeProfileTitle: messages.completeProfileTitle,
    completeProfileTextDisplayName: formatMessage(
      messages.completeProfileText,
      { award: `${amountGold} GN GOLD` }
    ),
    okButtonTextDisplayName: formatMessage(messages.okButtonText),
  }))
)(CompleteProfile);
