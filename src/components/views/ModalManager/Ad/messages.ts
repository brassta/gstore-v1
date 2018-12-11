import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  adDone: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  adDone: {
    defaultMessage: `Done`,
    id: 'adDone',
  },
});
