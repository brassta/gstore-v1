import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  participantPlayer: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  participantPlayer: {
    defaultMessage: 'Player',
    id: 'participantPlayer',
  },
});
