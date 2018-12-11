import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  refreshListText: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  refreshListText: {
    defaultMessage: 'Refresh list',
    id: 'refreshListText',
  },
});
