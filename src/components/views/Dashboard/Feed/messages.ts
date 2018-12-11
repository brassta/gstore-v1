import { defineMessages, FormattedMessage, Messages } from 'react-intl';

interface CustomMessages extends Messages {
  feedTitle: FormattedMessage.MessageDescriptor;
  today: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  feedTitle: {
    id: 'feedTitle',
    defaultMessage: 'Your Feed',
  },
  today: {
    id: 'today',
    defaultMessage: 'Today',
  },
});
