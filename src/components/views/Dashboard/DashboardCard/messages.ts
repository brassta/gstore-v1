import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  dashboardCardMessage: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  dashboardCardMessage: {
    defaultMessage: 'Some Message',
    id: 'dashboardCardMessage',
  },
});
