import { compose, withProps, withHandlers } from 'recompose';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import { isAccountSettingsPanelOpen } from 'src/state/selectors';
import { logout } from 'src/state/actions';
import { State } from 'src/state/state';

import AccountSettings, { Props } from './AccountSettings';
import messages from './messages';

const mapStateToProps = (state: State) => ({
  isAccountSettingsPanelOpen: isAccountSettingsPanelOpen(state),
});

const actions = {
  logout,
};

// TODO@martins remove mocked data
export default compose<Props, {}>(
  connect(
    mapStateToProps,
    actions
  ),
  injectIntl,
  withHandlers({
    handleLogoutClick: ({ logout }) => () => {
      logout();
    },
    handleCheckBalanceClick: () => () => {
      // tslint:disable-next-line
      console.log('Handle check balance click');
    },
  }),
  withProps(({ intl: { formatMessage } }) => ({
    accountDisplayName: formatMessage(messages.account),
    settingsDisplayName: formatMessage(messages.settings),
    logoutDisplayName: formatMessage(messages.logout),
    checkBalanceDisplayName: formatMessage(messages.checkBalance),
  }))
)(AccountSettings);
