import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  newTask: FormattedMessage.MessageDescriptor;
  congratulations: FormattedMessage.MessageDescriptor;
  dashboardWatchVideoAd: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  newTask: {
    defaultMessage: 'New task in',
    id: 'newTask',
  },
  congratulations: {
    defaultMessage: 'Congratulations!',
    id: 'congratulations',
  },
  dashboardWatchVideoAd: {
    defaultMessage: 'Watch video ad',
    id: 'dashboardWatchVideoAd',
  },
});
