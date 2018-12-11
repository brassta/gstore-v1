import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  taskCheck: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  taskCheck: {
    defaultMessage: `Check`,
    id: 'taskCheck',
  },
});
