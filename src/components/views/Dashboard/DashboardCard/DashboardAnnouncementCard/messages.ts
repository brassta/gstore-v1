import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  announcement: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  announcement: {
    defaultMessage: 'Announcement',
    id: 'announcement',
  },
});
