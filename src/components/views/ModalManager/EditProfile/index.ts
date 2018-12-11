import { connect } from 'react-redux';
import { compose, withProps, withHandlers } from 'recompose';
import { injectIntl } from 'react-intl';

import { State } from 'src/state/state';

import messages from './messages';
import EditProfile, { Props } from './EditProfile';

const actions = {};

const mapStateToProps = (state: State) => ({
  links: [],
});

export default compose<Props, {}>(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  withHandlers({
    handleCancel: () => () => {
      // tslint:disable-next-line
      console.log('handle cancel');
    },
    handleSave: () => () => {
      // tslint:disable-next-line
      console.log('handle save');
    },
  }),
  withProps(({ intl: { formatMessage } }) => ({
    saveDisplayName: formatMessage(messages.editProfileSave),
    cancelDisplayName: formatMessage(messages.editProfileCancel),
  }))
)(EditProfile);
