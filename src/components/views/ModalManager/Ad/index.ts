import { connect } from 'react-redux';
import { compose, withProps, withHandlers } from 'recompose';
import { injectIntl } from 'react-intl';

import { State } from 'src/state/state';
import { hideModal } from 'src/state/ui/actionCreators';

import messages from './messages';
import Ad, { Props } from './Ad';

const actions = {
  hideModal,
};

const mapStateToProps = (state: State) => ({});

export default compose<Props, {}>(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  withProps(({ intl: { formatMessage } }) => ({
    adDoneDisplayName: formatMessage(messages.adDone),
  })),
  withHandlers({
    handleDoneButtonClick: ({ hideModal }) => () => {
      hideModal();
    },
  })
)(Ad);
