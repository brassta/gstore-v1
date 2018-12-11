import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  accountSettingsProfile: FormattedMessage.MessageDescriptor;
  accountSettingsSettings: FormattedMessage.MessageDescriptor;
  accountSettingsLogout: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  accountSettingsProfile: {
    defaultMessage: 'Profile',
    id: 'accountSettingsProfile',
  },
  accountSettingsLogout: {
    defaultMessage: 'Logout',
    id: 'accountSettingsLogout',
  },
  accountSettingsSettings: {
    defaultMessage: 'Settings',
    id: 'accountSettingsSettings',
  },
});
