import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { compose, lifecycle, withHandlers, withProps } from 'recompose';

import { fetchUserProfile, logout } from 'src/state/actions';
import { getUserProfile } from 'src/state/selectors';
import { PROFILE_PAGE } from 'src/constants/routes';
import { State } from 'src/state/state';

import { mockProfile } from 'src/mocks';

import AccountSettingsToggle from './AccountSettingsToggle';
import messages from './messages';

const actions = {
  fetchUserProfile,
  logout,
};

const mapStateToProps = (state: State) => ({
  profile: getUserProfile(state) || mockProfile(),
});

export default compose(
  injectIntl,
  withRouter,
  connect(
    mapStateToProps,
    actions
  ),
  lifecycle<any, any>({
    componentDidMount() {
      const { fetchUserProfile } = this.props;

      fetchUserProfile();
    },
  }),
  withHandlers({
    handleAccountSettingsClick: () => () => {
      // tslint:disable-next-line
      console.log('Handle edit click');
    },
    handleAccountProfileClick: ({ history }) => () => {
      location.href = PROFILE_PAGE;
    },
    handleLogoutClick: ({ logout }) => () => {
      logout();
    },
  }),
  withProps(({ intl: { formatMessage } }) => ({
    profileDisplayName: formatMessage(messages.accountSettingsProfile),
    settingsDisplayName: formatMessage(messages.accountSettingsSettings),
    logoutDisplayName: formatMessage(messages.accountSettingsLogout),
  }))
)(AccountSettingsToggle);
