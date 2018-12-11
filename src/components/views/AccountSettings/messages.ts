import { defineMessages, FormattedMessage, Messages } from 'react-intl';

interface CustomMessages extends Messages {
  account: FormattedMessage.MessageDescriptor;
  settings: FormattedMessage.MessageDescriptor;
  about: FormattedMessage.MessageDescriptor;
  logout: FormattedMessage.MessageDescriptor;
  checkBalance: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  account: {
    id: 'account',
    defaultMessage: 'Profile',
  },
  settings: {
    id: 'settings',
    defaultMessage: 'Settings',
  },
  about: {
    id: 'about',
    defaultMessage: 'About Gplay',
  },
  logout: {
    id: 'logout',
    defaultMessage: 'Logout',
  },
  checkBalance: {
    id: 'checkBalance',
    defaultMessage: 'Check balance',
  },
});
